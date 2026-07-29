const http = require('http');

const data = JSON.stringify({
  studentId: 'alunoadmin',
  userName: 'ALUNOADMIN',
  selectedDisciplina: 'Lógica e Linguagem de Programação',
  selectedTrilhaId: 'trilha-logica-linguagem-programacao',
  sequence: ['101', '102', '201'],
  responses: {
    '101': 'Resposta de teste enviada pelo script para validar salvamento no localhost'
  },
  scores: {
    '101': 100
  },
  completed: false,
  updatedAt: new Date().toISOString()
});

const req = http.request('http://localhost:3001/api/responses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Response from http://localhost:3001/api/responses:', body);
  });
});

req.on('error', (err) => {
  console.error('Error connecting to localhost:3001:', err.message);
});

req.write(data);
req.end();
