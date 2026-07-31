import type { IncomingMessage, ServerResponse } from 'http';
import { connectToDatabase } from '../lib/db';

let globalDbFallback: Record<string, any> = {};

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  // Tenta conectar ao MongoDB Atlas
  let dbInstance: any = null;
  try {
    if (process.env.MONGODB_URI) {
      const { db } = await connectToDatabase();
      dbInstance = db;
    }
  } catch (err) {
    console.warn('[MongoDB Warning] Não foi possível conectar ao MongoDB, usando fallback:', err);
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

    const record = {
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

    if (dbInstance) {
      await dbInstance.collection('responses').updateOne(
        { studentId: id },
        { $set: record },
        { upsert: true }
      );
    } else {
      globalDbFallback[id] = record;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ 
      success: true, 
      message: dbInstance ? 'Resposta salva com sucesso no MongoDB Atlas' : 'Resposta registrada em memória (defina MONGODB_URI para persistência)', 
      studentId: id 
    }));
  }

  if (req.method === 'GET') {
    let studentsList: any[] = [];
    if (dbInstance) {
      studentsList = await dbInstance.collection('responses').find({}).toArray();
    } else {
      studentsList = Object.values(globalDbFallback);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      success: true,
      count: studentsList.length,
      students: studentsList
    }));
  }

  if (req.method === 'DELETE') {
    if (dbInstance) {
      await dbInstance.collection('responses').deleteMany({});
    } else {
      globalDbFallback = {};
    }
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: true, message: 'Todas as respostas foram apagadas.' }));
  }

  res.statusCode = 405;
  return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
}

