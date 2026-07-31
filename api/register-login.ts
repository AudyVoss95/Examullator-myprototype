import type { IncomingMessage, ServerResponse } from 'http';
import { connectToDatabase } from '../lib/db';

let globalRegistryFallback: Record<string, any> = {};

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  let dbInstance: any = null;
  try {
    if (process.env.MONGODB_URI) {
      const { db } = await connectToDatabase();
      dbInstance = db;
    }
  } catch (err) {
    console.warn('[MongoDB Warning] Não foi possível conectar ao MongoDB em register-login:', err);
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

    const { userName } = body || {};
    if (!userName || userName.trim().length === 0) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: false, error: 'Nome do estudante é obrigatório' }));
    }

    const id = userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');
    const now = new Date().toISOString();

    let regItem: any = null;
    if (dbInstance) {
      const existing = await dbInstance.collection('registry').findOne({ studentId: id });
      if (!existing) {
        regItem = {
          studentId: id,
          userName: userName.trim(),
          firstLoginAt: now,
          lastAccessAt: now,
          accessCount: 1
        };
      } else {
        regItem = {
          ...existing,
          lastAccessAt: now,
          accessCount: (existing.accessCount || 1) + 1
        };
      }
      await dbInstance.collection('registry').updateOne(
        { studentId: id },
        { $set: regItem },
        { upsert: true }
      );
    } else {
      if (!globalRegistryFallback[id]) {
        globalRegistryFallback[id] = {
          studentId: id,
          userName: userName.trim(),
          firstLoginAt: now,
          lastAccessAt: now,
          accessCount: 1
        };
      } else {
        globalRegistryFallback[id].lastAccessAt = now;
        globalRegistryFallback[id].accessCount = (globalRegistryFallback[id].accessCount || 1) + 1;
      }
      regItem = globalRegistryFallback[id];
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: true, studentId: id, registry: regItem }));
  }

  if (req.method === 'GET') {
    let registryList: any[] = [];
    if (dbInstance) {
      registryList = await dbInstance.collection('registry').find({}).toArray();
    } else {
      registryList = Object.values(globalRegistryFallback);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      success: true,
      count: registryList.length,
      students: registryList
    }));
  }

  res.statusCode = 405;
  return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
}

