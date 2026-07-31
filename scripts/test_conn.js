import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

async function testConnection() {
  const uri = process.env.MONGODB_URI;
  console.log('Testando conexão com URI:', uri);

  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  try {
    console.log('Tentando conectar (timeout 5s)...');
    await client.connect();
    console.log('✅ Conexão bem-sucedida!');
    const db = client.db('examullator');
    const collections = await db.listCollections().toArray();
    console.log('Coleções encontradas:', collections.map(c => c.name));
  } catch (err) {
    console.error('❌ ERRO DE CONEXÃO:', err.message);
  } finally {
    await client.close();
  }
}

testConnection();
