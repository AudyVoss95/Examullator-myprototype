const fs = require('fs');

const b1 = fs.readFileSync('scratch/backup_examullator.ts', 'utf-8');
const b2 = fs.readFileSync('scratch/backup_bancoProvas.ts', 'utf-8');

fs.writeFileSync('src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts', b1, 'utf-8');
// Fix import path in bancoProvas.ts back to relative
const fixedB2 = b2.replace("../src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator", "./trilha_de_estudos_e_avalia_o_no_modelo_examullator");
fs.writeFileSync('src/questions/bancoProvas.ts', fixedB2, 'utf-8');

console.log('Restored questions files with clean, unencoded UTF-8 database!');
