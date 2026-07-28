import fs from 'fs';
import path from 'path';

function cleanKeyword(kw) {
  if (typeof kw !== 'string') return kw;
  let str = kw.trim();
  // Check if it's base64 encoded
  if (/^[A-Za-z0-9+/=]{8,}$/.test(str) && !str.includes(' ')) {
    try {
      const decoded = Buffer.from(str, 'base64').toString('utf-8');
      if (/^[A-Za-z0-9+/=]{8,}$/.test(decoded)) {
        const doubleDecoded = Buffer.from(decoded, 'base64').toString('utf-8');
        return doubleDecoded.trim();
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
    // Replace base64 or messy keywords in arrays
    let changed = 0;
    const updated = content.replace(/("keywords":\s*\[)([\s\S]*?)(\])/g, (fullMatch, prefix, inner, suffix) => {
      const kwMatches = inner.match(/"([^"\\]*(\\.[^"\\]*)*)"/g);
      if (!kwMatches) return fullMatch;
      const cleanedArr = kwMatches.map(kwStr => {
        const raw = kwStr.slice(1, -1);
        const cleaned = cleanKeyword(raw);
        if (cleaned !== raw) changed++;
        return `"${cleaned}"`;
      });
      return `${prefix}\n      ${cleanedArr.join(',\n      ')}\n    ${suffix}`;
    });

    if (changed > 0) {
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`Cleaned ${changed} keywords in ${filePath}`);
    } else {
      console.log(`All keywords clean in ${filePath}`);
    }
  }
});
