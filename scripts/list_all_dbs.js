import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

async function listAll() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('Nenhuma MONGODB_URI definida no .env');
    return;
  }
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  try {
    await client.connect();
    const adminDb = client.db().admin();
    const dbList = await adminDb.listDatabases();
    console.log('=== LISTA DE TODOS OS BANCOS DE DADOS NO SEU CLUSTER ===');
    for (const d of dbList.databases) {
      console.log(`\n📂 Banco: "${d.name}" (Tamanho: ${d.sizeOnDisk} bytes)`);
      const currentDb = client.db(d.name);
      const cols = await currentDb.listCollections().toArray();
      for (const col of cols) {
        const count = await currentDb.collection(col.name).countDocuments({});
        console.log(`   └─ 📄 Coleção: "${col.name}" (${count} documentos)`);
        if (count > 0) {
          const sample = await currentDb.collection(col.name).find({}).toArray();
          sample.forEach(item => {
            console.log(`       • ${item.userName || item.studentId || item._id} (ID: ${item.studentId || item._id})`);
          });
        }
      }
    }
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await client.close();
  }
}

listAll();
