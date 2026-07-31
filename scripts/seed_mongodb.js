import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../student_responses.json');

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI não encontrada no arquivo .env');
    return;
  }

  console.log('🔄 Conectando ao MongoDB Atlas...');
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Conectado com sucesso!');

    const db = client.db('examullator');
    const collection = db.collection('responses');

    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const data = JSON.parse(raw);
      const students = Object.values(data);

      if (students.length > 0) {
        console.log(`📦 Enviando ${students.length} aluno(s) do student_responses.json para o MongoDB...`);
        for (const student of students) {
          await collection.updateOne(
            { studentId: student.studentId },
            { $set: student },
            { upsert: true }
          );
          console.log(`   └─ Salvo: ${student.userName} (${student.studentId})`);
        }
        console.log('\n🎉 Sucesso! Os dados foram criados no MongoDB Atlas.');
        console.log('👉 Agora atualize a página do MongoDB Atlas no navegador para visualizar o banco "examullator" e a coleção "responses".');
      } else {
        console.log('ℹ️ student_responses.json está vazio, inserindo um registro de teste...');
        await collection.updateOne(
          { studentId: 'teste_inicial' },
          { $set: { studentId: 'teste_inicial', userName: 'Teste Inicial', updatedAt: new Date().toISOString() } },
          { upsert: true }
        );
        console.log('✅ Registro de teste inserido com sucesso!');
      }
    }
  } catch (err) {
    console.error('❌ Erro de conexão com o MongoDB Atlas:', err.message);
  } finally {
    await client.close();
  }
}

seed();
