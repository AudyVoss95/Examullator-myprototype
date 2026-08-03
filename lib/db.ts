import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  let cleanUri = (process.env.MONGODB_URI || '').trim();
  if ((cleanUri.startsWith('"') && cleanUri.endsWith('"')) || (cleanUri.startsWith("'") && cleanUri.endsWith("'"))) {
    cleanUri = cleanUri.slice(1, -1).trim();
  }

  if (!cleanUri) {
    throw new Error('Por favor, defina a variável de ambiente MONGODB_URI na Vercel ou no .env');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(cleanUri, { serverSelectionTimeoutMS: 5000 });
  await client.connect();
  const db = client.db('examullator');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

