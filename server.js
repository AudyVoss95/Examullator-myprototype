import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  const { studentId, userName, selectedDisciplina, responses, scores, sequence, completed, updatedAt } = req.body;
  if (!userName) {
    return res.status(400).json({ success: false, error: 'Nome do estudante é obrigatório' });
  }
  const db = getResponses();
  const id = studentId || userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');

  db[id] = {
    studentId: id,
    userName,
    selectedDisciplina: selectedDisciplina || 'Simulado Geral',
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

// Serve Localhost Analytics Web Interface at http://localhost:3001/
app.get('/', (req, res) => {
  const html = `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Examullator - Painel de Análise Localhost</title>
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
        <div className="flex items-center gap-2">
          <span class="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
            Servidor Localhost (Porta ${PORT})
          </span>
        </div>
        <h1 class="text-3xl font-black tracking-tight text-white mt-1">🎓 Examullator Analytics</h1>
        <p class="text-slate-400 text-xs mt-1">Interface de Interpretação e Análise de Dados das Avaliações</p>
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

    <!-- Filter & Search -->
    <div class="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-3 justify-between items-center">
      <input type="text" id="searchInput" oninput="renderTable()" placeholder="🔍 Buscar por aluno ou ID..." class="w-full md:w-72 bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500">
      <select id="disciplinaFilter" onchange="renderTable()" class="w-full md:w-64 bg-slate-950 border border-slate-800 px-3 py-2.5 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500">
        <option value="Todas">Todas as Disciplinas</option>
      </select>
    </div>

    <!-- Students Table -->
    <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-950/60 border-b border-slate-800 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <th class="p-4">Estudante</th>
              <th class="p-4">Disciplina</th>
              <th class="p-4">Status</th>
              <th class="p-4">Respondidas</th>
              <th class="p-4">Média Notas</th>
              <th class="p-4">Última Atualização</th>
              <th class="p-4 text-right">Ação</th>
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
        <button onclick="closeModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-bold">Fechar</button>
      </div>
      <div id="modalBody" class="p-6 overflow-y-auto space-y-4 flex-1"></div>
    </div>
  </div>

  <script>
    let allStudents = [];

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
            <td class="p-4"><span class="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded font-bold text-[10px]">\${s.selectedDisciplina || 'Simulado Geral'}</span></td>
            <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase \${s.completed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}">\${s.completed ? 'Concluído' : 'Em Progresso'}</span></td>
            <td class="p-4 font-semibold text-slate-300">\${count} respondidas</td>
            <td class="p-4 font-black text-emerald-400">\${avg}</td>
            <td class="p-4 text-slate-500 font-mono text-[10px]">\${new Date(s.updatedAt).toLocaleString()}</td>
            <td class="p-4 text-right">
              <button onclick="showDetails('\${s.studentId}')" class="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all">👁️ Detalhes</button>
            </td>
          </tr>
        \`;
      }).join('');
    }

    function showDetails(studentId) {
      const student = allStudents.find(s => s.studentId === studentId);
      if (!student) return;

      document.getElementById('modalName').innerText = 'Respostas de ' + student.userName;
      document.getElementById('modalSub').innerText = 'Disciplina: ' + (student.selectedDisciplina || 'Simulado Geral') + ' • ID: ' + student.studentId;

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
  console.log(`🚀 Servidor Examullator de Coleta & Análise Remota ativo na porta ${PORT}`);
  console.log(`📊 Dashboard de Análise de Dados: http://localhost:${PORT}/`);
  console.log(`📡 Endpoint API de Submissão:    http://localhost:${PORT}/api/responses`);
});
