import type { IncomingMessage, ServerResponse } from 'http';

let globalDb: Record<string, any> = {};

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method === 'POST') {
    let body = req.body;
    if (!body) {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      try {
        body = JSON.parse(Buffer.concat(buffers).toString());
      } catch (e) {
        body = {};
      }
    }

    const { studentId, userName, selectedDisciplina, selectedTrilhaId, responses, scores, sequence, completed, updatedAt } = body || {};
    
    if (!userName) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: false, error: 'Nome do estudante é obrigatório' }));
    }

    const id = studentId || userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');

    globalDb[id] = {
      studentId: id,
      userName: userName.trim(),
      selectedDisciplina: selectedDisciplina || 'Simulado Geral',
      selectedTrilhaId: selectedTrilhaId || null,
      sequence: sequence || [],
      responses: responses || {},
      scores: scores || {},
      completed: !!completed,
      updatedAt: updatedAt || new Date().toISOString()
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: true, message: 'Resposta registrada no servidor online com sucesso', studentId: id }));
  }

  if (req.method === 'GET') {
    const studentsList = Object.values(globalDb);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      success: true,
      count: studentsList.length,
      students: studentsList
    }));
  }

  if (req.method === 'DELETE') {
    globalDb = {};
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: true, message: 'Todas as respostas online foram apagadas.' }));
  }

  res.statusCode = 405;
  return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
}
