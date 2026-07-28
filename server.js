import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const DATA_FILE = path.join(__dirname, 'student_responses.json');

const getResponses = () => {
  if (!fs.existsSync(DATA_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch (e) {
    return {};
  }
};

const saveResponses = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

// Endpoint to register or update student submission remotely
app.post('/api/responses', (req, res) => {
  const { studentId, userName, selectedDisciplina, selectedTrilhaId, responses, scores, sequence, completed, updatedAt } = req.body;
  if (!userName) {
    return res.status(400).json({ success: false, error: 'Nome do estudante é obrigatório' });
  }
  const db = getResponses();
  const id = studentId || userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');

  db[id] = {
    studentId: id,
    userName,
    selectedDisciplina: selectedDisciplina || 'Simulado Geral',
    selectedTrilhaId: selectedTrilhaId || null,
    sequence: sequence || [],
    responses: responses || {},
    scores: scores || {},
    completed: !!completed,
    updatedAt: updatedAt || new Date().toISOString()
  };

  saveResponses(db);
  console.log(`[Examullator Remote] Resposta salva para: ${userName} (${selectedDisciplina || 'Simulado Geral'})`);
  return res.json({ success: true, message: 'Resposta registrada com sucesso', studentId: id });
});

// Endpoint for Teacher/Admin to fetch all student responses remotely
app.get('/api/responses', (req, res) => {
  const db = getResponses();
  const studentsList = Object.values(db);
  return res.json({
    success: true,
    count: studentsList.length,
    students: studentsList
  });
});

// Endpoint to delete all remote responses (Admin cleanup)
app.delete('/api/responses', (req, res) => {
  saveResponses({});
  return res.json({ success: true, message: 'Todas as respostas remotas foram apagadas.' });
});

// Helper to configure email transporter
const createMailTransporter = async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return {
      transporter: nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }),
      from: process.env.SMTP_FROM || `"Examullator System" <${process.env.SMTP_USER}>`
    };
  }

  // Create ethereal test account if no real SMTP credentials provided
  const testAccount = await nodemailer.createTestAccount();
  return {
    transporter: nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    }),
    from: '"Examullator Plataforma" <no-reply@examullator.edu>',
    isTest: true
  };
};

// Endpoint to send student responses to a specific target email
app.post('/api/send-email', async (req, res) => {
  const { targetEmail, studentId, studentData } = req.body;

  if (!targetEmail || !targetEmail.includes('@')) {
    return res.status(400).json({ success: false, error: 'Por favor, informe um endereço de e-mail de destino válido.' });
  }

  let student = studentData;
  if (!student && studentId) {
    const db = getResponses();
    student = db[studentId];
  }

  if (!student) {
    return res.status(404).json({ success: false, error: 'Dados do aluno não encontrados para envio.' });
  }

  try {
    const { transporter, from, isTest } = await createMailTransporter();

    const seq = student.sequence || Object.keys(student.responses || {});
    const scoresArr = Object.values(student.scores || {});
    const avgScore = scoresArr.length > 0 
      ? (scoresArr.reduce((a, b) => a + b, 0) / scoresArr.length).toFixed(1)
      : 'N/A';

    let htmlRows = seq.map((qId, idx) => {
      const resp = student.responses[qId] || '(Sem resposta)';
      const sc = student.scores[qId] !== undefined ? student.scores[qId] : 'Pendente';
      return `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px; font-weight: bold; font-size: 13px;">Questão ${idx + 1} (ID ${qId})</td>
          <td style="padding: 12px; font-size: 13px; font-weight: bold; color: ${typeof sc === 'number' && sc >= 5 ? '#059669' : '#d97706'};">Nota: ${sc}</td>
          <td style="padding: 12px; font-size: 12px; font-family: monospace; white-space: pre-wrap; background-color: #f8fafc; border-radius: 6px;">${resp}</td>
        </tr>
      `;
    }).join('');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
        <h2 style="color: #1e293b; margin-top: 0;">🎓 Examullator - Relatório de Respostas do Estudante</h2>
        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; color: #334155;">
          <p style="margin: 4px 0;"><strong>Nome do Estudante:</strong> ${student.userName}</p>
          <p style="margin: 4px 0;"><strong>Disciplina / Trilha:</strong> ${student.selectedTrilhaId ? 'Trilha: ' + student.selectedTrilhaId : student.selectedDisciplina || 'Simulado Geral'}</p>
          <p style="margin: 4px 0;"><strong>Status:</strong> ${student.completed ? '✅ Avaliação Concluída' : '🟡 Em Progresso'}</p>
          <p style="margin: 4px 0;"><strong>Média Geral de Notas:</strong> <span style="color: #2563eb; font-weight: bold;">${avgScore}</span></p>
          <p style="margin: 4px 0; font-size: 11px; color: #64748b;">Data do Envio: ${new Date().toLocaleString()}</p>
        </div>

        <h3 style="color: #0f172a; font-size: 16px;">Dissertações e Respostas por Questão:</h3>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; font-size: 12px; text-transform: uppercase; color: #64748b;">
              <th style="padding: 10px;">Questão</th>
              <th style="padding: 10px;">Nota</th>
              <th style="padding: 10px;">Resposta Dissertativa</th>
            </tr>
          </thead>
          <tbody>
            ${htmlRows}
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-t: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
          Relatório gerado automaticamente pelo Engine Examullator &copy; 2026.
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from,
      to: targetEmail,
      subject: `🎓 Respostas de ${student.userName} - Examullator (${student.selectedTrilhaId ? 'Trilha ' + student.selectedTrilhaId : student.selectedDisciplina || 'Simulado Geral'})`,
      html: htmlBody,
    });

    console.log(`[Examullator E-mail] Mensagem enviada para ${targetEmail}. ID: ${info.messageId}`);
    
    let previewUrl = null;
    if (isTest) {
      previewUrl = nodemailer.getTestMessageUrl(info);
      console.log(`[Ethereal Preview URL]: ${previewUrl}`);
    }

    return res.json({
      success: true,
      message: `Respostas de ${student.userName} enviadas com sucesso para ${targetEmail}!`,
      messageId: info.messageId,
      previewUrl
    });

  } catch (err) {
    console.error('❌ Erro ao enviar e-mail:', err);
    return res.status(500).json({ success: false, error: 'Falha ao enviar o e-mail: ' + err.message });
  }
});

// Serve Localhost Analytics Web Interface at http://localhost:3001/
app.get('/', (req, res) => {
  const html = `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Examullator - Painel de Análise & Envio por E-mail</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen font-sans">

  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <!-- Header -->
    <header class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
      <div>
        <div class="flex items-center gap-2">
          <span class="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
            Servidor Localhost (Porta ${PORT})
          </span>
        </div>
        <h1 class="text-3xl font-black tracking-tight text-white mt-1">🎓 Examullator Analytics & E-mail</h1>
        <p class="text-slate-400 text-xs mt-1">Interface de Análise e Disparo de Respostas por E-mail</p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <label class="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl cursor-pointer">
          <input type="checkbox" id="autoRefresh" checked class="rounded border-slate-700 text-blue-600 focus:ring-0">
          Auto-atualizar (5s)
        </label>
        <button onclick="loadData()" class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2">
          🔄 Atualizar Agora
        </button>
      </div>
    </header>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
        <span class="text-slate-500 text-[10px] font-black uppercase tracking-wider block">Total de Alunos</span>
        <p id="statTotal" class="text-3xl font-black text-white">0</p>
      </div>
      <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
        <span class="text-slate-500 text-[10px] font-black uppercase tracking-wider block">Avaliações Concluídas</span>
        <p id="statCompleted" class="text-3xl font-black text-emerald-400">0</p>
      </div>
      <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
        <span class="text-slate-500 text-[10px] font-black uppercase tracking-wider block">Média Geral de Notas</span>
        <p id="statAvg" class="text-3xl font-black text-blue-400">0.0</p>
      </div>
      <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
        <span class="text-slate-500 text-[10px] font-black uppercase tracking-wider block">Disciplinas Ativas</span>
        <p id="statDisciplinas" class="text-3xl font-black text-amber-400">0</p>
      </div>
    </div>

    <!-- Filter & Email Config Bar -->
    <div class="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-3 justify-between items-center">
      <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <input type="text" id="searchInput" oninput="renderTable()" placeholder="🔍 Buscar por aluno ou ID..." class="w-full sm:w-64 bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500">
        <select id="disciplinaFilter" onchange="renderTable()" class="w-full sm:w-56 bg-slate-950 border border-slate-800 px-3 py-2.5 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500">
          <option value="Todas">Todas as Disciplinas</option>
        </select>
      </div>

      <div class="flex items-center gap-2 w-full md:w-auto">
        <span class="text-xs font-bold text-slate-400 whitespace-nowrap">E-mail Destino do Professor:</span>
        <input type="email" id="defaultEmail" placeholder="professor@escola.com" value="professor@escola.com" class="bg-slate-950 border border-slate-800 px-3 py-2 rounded-xl text-xs text-emerald-400 font-mono outline-none focus:border-blue-500 w-full sm:w-56">
      </div>
    </div>

    <!-- Students Table -->
    <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-950/60 border-b border-slate-800 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <th class="p-4">Estudante</th>
              <th class="p-4">Disciplina / Trilha</th>
              <th class="p-4">Status</th>
              <th class="p-4">Respondidas</th>
              <th class="p-4">Média Notas</th>
              <th class="p-4">Última Atualização</th>
              <th class="p-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody id="studentsTable" class="divide-y divide-slate-800 text-xs">
            <tr><td colspan="7" class="p-8 text-center text-slate-500">Carregando dados do servidor...</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Detail Modal -->
  <div id="detailModal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
      <div class="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-900">
        <div>
          <h3 id="modalName" class="font-bold text-lg text-white"></h3>
          <p id="modalSub" class="text-xs text-slate-400 font-mono"></p>
        </div>
        <div class="flex items-center gap-2">
          <button id="sendEmailBtn" onclick="sendCurrentStudentEmail()" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all shadow flex items-center gap-1.5">
            📧 Enviar por E-mail
          </button>
          <button onclick="closeModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-bold">Fechar</button>
        </div>
      </div>
      <div id="modalBody" class="p-6 overflow-y-auto space-y-4 flex-1"></div>
    </div>
  </div>

  <script>
    let allStudents = [];
    let currentModalStudentId = null;

    async function loadData() {
      try {
        const res = await fetch('/api/responses');
        const data = await res.json();
        allStudents = data.students || [];
        updateStats();
        updateDisciplineDropdown();
        renderTable();
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    }

    function updateStats() {
      const total = allStudents.length;
      const completed = allStudents.filter(s => s.completed).length;
      
      let allScores = [];
      const discSet = new Set();

      allStudents.forEach(s => {
        if (s.selectedDisciplina) discSet.add(s.selectedDisciplina);
        Object.values(s.scores || {}).forEach(sc => {
          if (typeof sc === 'number') allScores.push(sc);
        });
      });

      const avg = allScores.length > 0 ? (allScores.reduce((a,b) => a+b, 0) / allScores.length).toFixed(1) : '0.0';

      document.getElementById('statTotal').innerText = total;
      document.getElementById('statCompleted').innerText = completed;
      document.getElementById('statAvg').innerText = avg;
      document.getElementById('statDisciplinas').innerText = discSet.size;
    }

    function updateDisciplineDropdown() {
      const select = document.getElementById('disciplinaFilter');
      const currentVal = select.value;
      const discSet = new Set(['Todas']);
      allStudents.forEach(s => { if (s.selectedDisciplina) discSet.add(s.selectedDisciplina); });

      select.innerHTML = '';
      discSet.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.innerText = d === 'Todas' ? 'Todas as Disciplinas' : d;
        select.appendChild(opt);
      });
      select.value = currentVal;
    }

    function renderTable() {
      const search = document.getElementById('searchInput').value.toLowerCase().trim();
      const disc = document.getElementById('disciplinaFilter').value;

      const filtered = allStudents.filter(s => {
        const matchSearch = s.userName.toLowerCase().includes(search) || s.studentId.toLowerCase().includes(search);
        const matchDisc = disc === 'Todas' || s.selectedDisciplina === disc;
        return matchSearch && matchDisc;
      });

      const tbody = document.getElementById('studentsTable');
      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="p-8 text-center text-slate-500">Nenhum registro encontrado.</td></tr>';
        return;
      }

      tbody.innerHTML = filtered.map(s => {
        const scores = Object.values(s.scores || {});
        const avg = scores.length > 0 ? (scores.reduce((a,b)=>a+b, 0)/scores.length).toFixed(1) : 'N/A';
        const count = Object.keys(s.responses || {}).length;

        return \`
          <tr class="hover:bg-slate-850 transition-colors">
            <td class="p-4 font-bold text-white">\${s.userName}<br><span class="text-[10px] text-slate-500 font-mono">ID: \${s.studentId}</span></td>
            <td class="p-4"><span class="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded font-bold text-[10px]">\${s.selectedTrilhaId ? 'Trilha: ' + s.selectedTrilhaId : s.selectedDisciplina || 'Simulado Geral'}</span></td>
            <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase \${s.completed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}">\${s.completed ? 'Concluído' : 'Em Progresso'}</span></td>
            <td class="p-4 font-semibold text-slate-300">\${count} respondidas</td>
            <td class="p-4 font-black text-emerald-400">\${avg}</td>
            <td class="p-4 text-slate-500 font-mono text-[10px]">\${new Date(s.updatedAt).toLocaleString()}</td>
            <td class="p-4 text-right flex justify-end gap-2">
              <button onclick="sendEmailForStudent('\${s.studentId}')" class="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1" title="Enviar para E-mail">📧 E-mail</button>
              <button onclick="showDetails('\${s.studentId}')" class="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all">👁️ Detalhes</button>
            </td>
          </tr>
        \`;
      }).join('');
    }

    async function sendEmailForStudent(studentId) {
      const targetEmail = document.getElementById('defaultEmail').value;
      if (!targetEmail || !targetEmail.includes('@')) {
        alert('Por favor, digite um e-mail de destino válido no campo acima.');
        return;
      }

      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetEmail, studentId })
        });
        const data = await res.json();
        if (data.success) {
          alert(data.message + (data.previewUrl ? '\\n\\n(Link Ethereal para testes: ' + data.previewUrl + ')' : ''));
        } else {
          alert('Erro ao enviar e-mail: ' + data.error);
        }
      } catch (err) {
        alert('Erro ao conectar com servidor de e-mail: ' + err.message);
      }
    }

    function showDetails(studentId) {
      currentModalStudentId = studentId;
      const student = allStudents.find(s => s.studentId === studentId);
      if (!student) return;

      document.getElementById('modalName').innerText = 'Respostas de ' + student.userName;
      document.getElementById('modalSub').innerText = 'Disciplina: ' + (student.selectedTrilhaId ? 'Trilha: ' + student.selectedTrilhaId : student.selectedDisciplina || 'Simulado Geral') + ' • ID: ' + student.studentId;

      const body = document.getElementById('modalBody');
      const seq = student.sequence || Object.keys(student.responses || {});

      body.innerHTML = seq.map((qId, idx) => {
        const resp = student.responses[qId] || '';
        const sc = student.scores[qId] !== undefined ? student.scores[qId] : 'Pendente';

        return \`
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-bold text-blue-400 uppercase">Questão \${idx+1} (ID \${qId})</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded \${typeof sc === 'number' && sc >= 5 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}">Nota: \${sc}</span>
            </div>
            <div class="bg-slate-900 p-3 rounded text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-wrap">
              \${resp ? resp : '<em class="text-slate-500">Sem resposta enviada para esta questão.</em>'}
            </div>
            <div class="text-[10px] text-slate-500 font-mono">Tamanho: \${resp.length} caracteres</div>
          </div>
        \`;
      }).join('');

      document.getElementById('detailModal').classList.remove('hidden');
    }

    function sendCurrentStudentEmail() {
      if (currentModalStudentId) {
        sendEmailForStudent(currentModalStudentId);
      }
    }

    function closeModal() {
      document.getElementById('detailModal').classList.add('hidden');
    }

    setInterval(() => {
      if (document.getElementById('autoRefresh').checked) {
        loadData();
      }
    }, 5000);

    loadData();
  </script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Examullator de Coleta, E-mail & Análise Remota ativo na porta ${PORT}`);
  console.log(`📊 Dashboard de Análise & E-mail: http://localhost:${PORT}/`);
  console.log(`📡 Endpoint API de Submissão:       http://localhost:${PORT}/api/responses`);
  console.log(`📧 Endpoint API de E-mail:          http://localhost:${PORT}/api/send-email`);
});
