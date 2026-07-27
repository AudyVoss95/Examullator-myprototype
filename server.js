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
  const { studentId, userName, responses, scores, sequence, completed, updatedAt } = req.body;
  if (!userName) {
    return res.status(400).json({ success: false, error: 'Nome do estudante é obrigatório' });
  }
  const db = getResponses();
  const id = studentId || userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');

  db[id] = {
    studentId: id,
    userName,
    sequence: sequence || [],
    responses: responses || {},
    scores: scores || {},
    completed: !!completed,
    updatedAt: updatedAt || new Date().toISOString()
  };

  saveResponses(db);
  console.log(`[Examullator Remote] Resposta salva para: ${userName}`);
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

app.listen(PORT, () => {
  console.log(`🚀 Servidor Examullator de Coleta Remota ativo na porta ${PORT}`);
  console.log(`📡 Endpoint de submissão: http://localhost:${PORT}/api/responses`);
});
