const fs = require('fs');

const file1 = 'src/questions/bancoProvas.ts';
const file2 = 'src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts';

[file1, file2].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let matches = content.match(/"keywords"\s*:\s*\[([\s\S]*?)\]/g);
    console.log(`=== Keywords in ${filePath} (${matches ? matches.length : 0} items) ===`);
    if (matches) {
      matches.slice(0, 15).forEach((m, idx) => {
        console.log(`Q${idx + 1}:`, m.replace(/\s+/g, ' '));
      });
    }
  }
});
