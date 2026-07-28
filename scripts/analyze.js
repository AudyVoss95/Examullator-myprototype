import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../student_responses.json');

function runAnalysis() {
  console.log('\n===========================================================');
  console.log('🎓 EXAMULLATOR - ANÁLISE DE RESPOSTAS (LOCALHOST CLI)');
  console.log('===========================================================');

  if (!fs.existsSync(DATA_FILE)) {
    console.log('\n❌ Nenhum banco de dados de respostas encontrado em:');
    console.log(`   ${DATA_FILE}`);
    console.log('\n💡 As respostas serão geradas assim que os alunos utilizarem a plataforma.\n');
    return;
  }

  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const data = JSON.parse(raw);
    const students = Object.values(data);

    if (students.length === 0) {
      console.log('\nℹ️ O arquivo de respostas está vazio.');
      return;
    }

    const totalStudents = students.length;
    const completedStudents = students.filter((s) => s.completed).length;

    // Calculate overall average
    let allScores = [];
    const byDisciplina = {};

    students.forEach((s) => {
      const disc = s.selectedDisciplina || 'Simulado Geral';
      if (!byDisciplina[disc]) {
        byDisciplina[disc] = { count: 0, scores: [] };
      }
      byDisciplina[disc].count += 1;

      const studentScores = Object.values(s.scores || {});
      studentScores.forEach((sc) => {
        if (typeof sc === 'number') {
          allScores.push(sc);
          byDisciplina[disc].scores.push(sc);
        }
      });
    });

    const overallAvg = allScores.length > 0
      ? (allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1)
      : 'N/A';

    console.log('\n📊 RESUMO GERAL:');
    console.log(`- Total de Alunos Registrados: ${totalStudents}`);
    console.log(`- Provas Concluídas:           ${completedStudents} / ${totalStudents} (${((completedStudents / totalStudents) * 100).toFixed(0)}%)`);
    console.log(`- Média Geral de Notas:         ${overallAvg} / 10.0`);

    console.log('\n📚 DESEMPENHO POR DISCIPLINA:');
    Object.entries(byDisciplina).forEach(([disc, info]) => {
      const discAvg = info.scores.length > 0
        ? (info.scores.reduce((a, b) => a + b, 0) / info.scores.length).toFixed(1)
        : 'N/A';
      console.log(`  • ${disc.padEnd(38, ' ')} | Alunos: ${info.count} | Média: ${discAvg}`);
    });

    console.log('\n👤 DETALHAMENTO INDIVIDUAL DOS ALUNOS:');
    console.log('-----------------------------------------------------------');

    students.forEach((s, idx) => {
      const statusIcon = s.completed ? '🟢 Concluído' : '🟡 Em Progresso';
      const studentScores = Object.values(s.scores || {});
      const avg = studentScores.length > 0
        ? (studentScores.reduce((a, b) => a + b, 0) / studentScores.length).toFixed(1)
        : 'N/A';
      const answeredCount = Object.keys(s.responses || {}).length;

      console.log(`[${idx + 1}] ${s.userName} (ID: ${s.studentId})`);
      console.log(`    Disciplina: ${s.selectedDisciplina || 'Simulado Geral'}`);
      console.log(`    Status:     ${statusIcon} | Média: ${avg} | Respondidas: ${answeredCount}`);
      console.log(`    Atualizado: ${new Date(s.updatedAt).toLocaleString()}`);
      
      console.log('    Respostas:');
      const seq = s.sequence || Object.keys(s.responses || {});
      seq.forEach((qId) => {
        const resp = s.responses[qId];
        const sc = s.scores[qId] !== undefined ? s.scores[qId] : 'Pendente';
        if (resp) {
          const preview = resp.replace(/\n/g, ' ').slice(0, 60);
          console.log(`      • Questão ${qId.padEnd(4, ' ')} | Nota: ${String(sc).padEnd(4, ' ')} | Chars: ${String(resp.length).padEnd(4, ' ')} | "${preview}..."`);
        } else {
          console.log(`      • Questão ${qId.padEnd(4, ' ')} | Nota: Pendente | (Sem resposta)`);
        }
      });
      console.log('-----------------------------------------------------------');
    });

  } catch (err) {
    console.error('❌ Erro ao ler e analisar dados:', err.message);
  }
}

runAnalysis();
