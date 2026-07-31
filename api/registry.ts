import type { IncomingMessage, ServerResponse } from 'http';
import { connectToDatabase } from '../lib/db';

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }

  let regDocs: any[] = [];
  let respDocs: any[] = [];

  try {
    if (process.env.MONGODB_URI) {
      const { db } = await connectToDatabase();
      regDocs = await db.collection('registry').find({}).toArray();
      respDocs = await db.collection('responses').find({}).toArray();
    }
  } catch (err) {
    console.warn('[MongoDB Registry Error]', err);
  }

  const regMap: Record<string, any> = {};
  regDocs.forEach((doc: any) => {
    if (doc && doc.studentId) regMap[doc.studentId] = doc;
  });

  const respMap: Record<string, any> = {};
  respDocs.forEach((doc: any) => {
    if (doc && doc.studentId) respMap[doc.studentId] = doc;
  });

  const allIds = new Set([...Object.keys(regMap), ...Object.keys(respMap)]);
  const combined = Array.from(allIds).map((id) => {
    const r = regMap[id] || {};
    const d = respMap[id] || {};
    return {
      studentId: id,
      userName: d.userName || r.userName || id,
      firstLoginAt: r.firstLoginAt || d.updatedAt || new Date().toISOString(),
      lastAccessAt: r.lastAccessAt || d.updatedAt || new Date().toISOString(),
      accessCount: r.accessCount || 1,
      selectedDisciplina: d.selectedDisciplina || 'Não iniciou',
      selectedTrilhaId: d.selectedTrilhaId || null,
      completed: !!d.completed,
      answeredCount: Object.keys(d.responses || {}).length,
      updatedAt: d.updatedAt || r.lastAccessAt || new Date().toISOString()
    };
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify({
    success: true,
    count: combined.length,
    students: combined
  }));
}
