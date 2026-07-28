const fs = require('fs');

function decodeUtf8Base64(b64) {
  try {
    const buf = Buffer.from(b64, 'base64');
    const str = buf.toString('utf-8');
    return str;
  } catch {
    return b64;
  }
}

function cleanAndAccentWord(w) {
  if (typeof w !== 'string') return w;
  let str = w.trim();

  // If base64 encoded
  if (/^[A-Za-z0-9+/=]{8,}$/.test(str) && !str.includes(' ')) {
    let decoded = decodeUtf8Base64(str);
    if (/^[A-Za-z0-9+/=]{8,}$/.test(decoded)) {
      decoded = decodeUtf8Base64(decoded);
    }
    str = decoded.trim();
  }

  const dictionary = {
    "interrupcao": "interrupção",
    "area de transferencia": "área de transferência",
    "extensao": "extensão",
    "convencao": "convenção",
    "espacos": "espaços",
    "saida": "saída",
    "decisao": "decisão",
    "retangulo": "retângulo",
    "memoria": "memória",
    "coercao": "coerção",
    "modulo": "módulo",
    "divisao": "divisão",
    "parenteses": "parênteses",
    "precedencia": "precedência",
    "atribuicao": "atribuição",
    "comparacao": "comparação",
    "indentacao": "indentação",
    "validacao": "validação",
    "protecao": "proteção",
    "funcao": "função",
    "funcoes": "funções",
    "repeticao": "repetição",
    "sequencia": "sequência",
    "parametro": "parâmetro",
    "parametros": "parâmetros",
    "organizacao": "organização",
    "identificacao": "identificação",
    "manutencao": "manutenção",
    "precisao": "precisão",
    "atencao": "atenção",
    "condicao": "condição",
    "execucao": "execução",
    "formatacao": "formatação",
    "navegacao": "navegação",
    "seguranca": "segurança",
    "opcao": "opção",
    "opcoes": "opções",
    "substituido": "substituído",
    "substituicao": "substituição",
    "declaracao": "declaração",
    "documentacao": "documentação",
    "abstracao": "abstração",
    "impar": "ímpar",
    "atribuido": "atribuído",
    "codigo": "código",
    "logica": "lógica",
    "acao": "ação",
    "calculo": "cálculo",
    "termino": "término",
    "informacao": "informação",
    "transformacao": "transformação",
    "transicao": "transição",
    "visao": "visão",
    "multiplicacao": "multiplicação",
    "subtracao": "subtração",
    "adicao": "adição",
    "solucao": "solução",
    "utilizacao": "utilização",
    "avaliação": "avaliação",
    "avaliacao": "avaliação",
    "consolidacao": "consolidação",
    "recuperacao": "recuperação",
    "exibicao": "exibição",
    "verificacao": "verificação"
  };

  let lower = str.toLowerCase();
  if (dictionary[lower]) return dictionary[lower];

  let words = str.split(' ').map(part => {
    let pLower = part.toLowerCase();
    return dictionary[pLower] || part;
  });

  return words.join(' ');
}

const file1 = 'src/questions/bancoProvas.ts';
const file2 = 'src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts';

[file1, file2].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = 0;

    let updated = content.replace(/("keywords"\s*:\s*\[)([\s\S]*?)(\])/g, (match, p1, p2, p3) => {
      let items = p2.split(',').map(item => {
        let trimmed = item.trim();
        if (!trimmed) return null;
        let unquoted = trimmed.replace(/^"|"$/g, '');
        let cleaned = cleanAndAccentWord(unquoted);
        if (cleaned !== unquoted) changed++;
        return `"${cleaned}"`;
      }).filter(Boolean);

      return `${p1} ${items.join(', ')} ${p3}`;
    });

    if (changed > 0) {
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`Updated ${changed} keywords in ${filePath}`);
    } else {
      console.log(`All keywords in ${filePath} are clean and properly accented.`);
    }
  }
});
