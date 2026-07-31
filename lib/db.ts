import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (!uri) {
    throw new Error('Por favor, defina a variável de ambiente MONGODB_URI no arquivo .env');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  await client.connect();
  const db = client.db('examullator');


  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
