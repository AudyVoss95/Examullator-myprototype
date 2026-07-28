import type { IncomingMessage, ServerResponse } from 'http';

let globalRegistry: Record<string, any> = {};

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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

    const { userName } = body || {};
    if (!userName || userName.trim().length === 0) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: false, error: 'Nome do estudante é obrigatório' }));
    }

    const id = userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');
    const now = new Date().toISOString();

    if (!globalRegistry[id]) {
      globalRegistry[id] = {
        studentId: id,
        userName: userName.trim(),
        firstLoginAt: now,
        lastAccessAt: now,
        accessCount: 1
      };
    } else {
      globalRegistry[id].lastAccessAt = now;
      globalRegistry[id].accessCount = (globalRegistry[id].accessCount || 1) + 1;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: true, studentId: id, registry: globalRegistry[id] }));
  }

  if (req.method === 'GET') {
    const registryList = Object.values(globalRegistry);
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
