import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

async function testSubmit() {
  const uri = process.env.MONGODB_URI;
  console.log('URI no .env:', uri ? 'Configurada' : 'NÃO CONFIGURADA');

  if (!uri) return;

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('examullator');
    const collection = db.collection('responses');

    const testStudent = {
      studentId: 'aluno_teste_manual_' + Date.now(),
      userName: 'Aluno Teste Manual',
      selectedDisciplina: 'Lógica e Linguagem de Programação',
      sequence: ['101', '102'],
      responses: { '101': 'Resposta de teste enviada em ' + new Date().toLocaleString() },
      scores: { '101': 10 },
      completed: true,
      updatedAt: new Date().toISOString()
    };

    const res = await collection.updateOne(
      { studentId: testStudent.studentId },
      { $set: testStudent },
      { upsert: true }
    );

    console.log('Result:', res);

    const count = await collection.countDocuments({});
    console.log('Total de documentos na coleção "responses":', count);
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await client.close();
  }
}

testSubmit();
