const fs = require('fs');

function cleanKeyword(kw) {
  if (typeof kw !== 'string') return kw;
  let str = kw.trim();
  if (/^[A-Za-z0-9+/=]{8,}$/.test(str) && !str.includes(' ')) {
    try {
      const decoded = Buffer.from(str, 'base64').toString('utf-8');
      if (/^[A-Za-z0-9+/=]{8,}$/.test(decoded)) {
        return Buffer.from(decoded, 'base64').toString('utf-8').trim();
      }
      return decoded.trim();
    } catch (e) {}
  }
  return str;
}

const file1 = 'src/questions/bancoProvas.ts';
const file2 = 'src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts';

[file1, file2].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let totalCount = 0;
    
    let updated = content.replace(/("keywords"\s*:\s*\[)([\s\S]*?)(\])/g, (match, p1, p2, p3) => {
      let items = p2.split(',').map(item => {
        let trimmed = item.trim();
        if (!trimmed) return null;
        let unquoted = trimmed.replace(/^"|"$/g, '');
        let cleaned = cleanKeyword(unquoted);
        if (cleaned !== unquoted) totalCount++;
        return `"${cleaned}"`;
      }).filter(Boolean);
      
      return `${p1} ${items.join(', ')} ${p3}`;
    });

    if (totalCount > 0) {
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`Cleaned ${totalCount} encoded keywords in ${filePath}`);
    } else {
      console.log(`All keywords clean in ${filePath}`);
    }
  }
});
