const fs = require('fs');

const file1 = 'src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts';
const file2 = 'src/questions/bancoProvas.ts';

if (fs.existsSync(file1)) {
  fs.writeFileSync('scratch/backup_examullator.ts', fs.readFileSync(file1, 'utf-8'), 'utf-8');
  console.log('Saved backup_examullator.ts');
}

if (fs.existsSync(file2)) {
  fs.writeFileSync('scratch/backup_bancoProvas.ts', fs.readFileSync(file2, 'utf-8'), 'utf-8');
  console.log('Saved backup_bancoProvas.ts');
}
