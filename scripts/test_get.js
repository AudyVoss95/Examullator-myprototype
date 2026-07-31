import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

async function testGet() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('MONGODB_URI ausente');
    return;
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('examullator');
    const docs = await db.collection('responses').find({}).toArray();
    console.log('Documentos encontrados no MongoDB:', docs.length);
    docs.forEach(d => console.log(` - Aluno: ${d.userName} (ID: ${d.studentId}) | Respostas: ${Object.keys(d.responses || {}).length}`));
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await client.close();
  }
}

testGet();
