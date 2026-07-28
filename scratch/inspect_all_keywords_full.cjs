const fs = require('fs');

const accentDictionary = {
  "interrupcao": "interrupção",
  "transferencia": "transferência",
  "area": "área",
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
  "relacional": "relacional",
  "solucao": "solução",
  "utilizacao": "utilização",
  "avaliação": "avaliação",
  "avaliacao": "avaliação",
  "consolidacao": "consolidação",
  "recuperacao": "recuperação",
  "exibicao": "exibição",
  "verificacao": "verificação"
};

function fixAccentsInKeyword(word) {
  if (typeof word !== 'string') return word;
  let trimmed = word.trim();
  
  // If the word matches directly in dictionary (case-insensitive)
  let lower = trimmed.toLowerCase();
  if (accentDictionary[lower]) {
    // preserve casing if all caps
    if (trimmed === trimmed.toUpperCase()) return accentDictionary[lower].toUpperCase();
    return accentDictionary[lower];
  }
  
  // Try splitting by space
  let parts = trimmed.split(' ');
  let fixedParts = parts.map(p => {
    let pLower = p.toLowerCase();
    if (accentDictionary[pLower]) {
      return accentDictionary[pLower];
    }
    return p;
  });
  
  return fixedParts.join(' ');
}

const file1 = 'src/questions/bancoProvas.ts';
const file2 = 'src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts';

[file1, file2].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let count = 0;

    let updated = content.replace(/("keywords"\s*:\s*\[)([\s\S]*?)(\])/g, (match, p1, p2, p3) => {
      let items = p2.split(',').map(item => {
        let trimmed = item.trim();
        if (!trimmed) return null;
        let unquoted = trimmed.replace(/^"|"$/g, '');
        let cleaned = fixAccentsInKeyword(unquoted);
        if (cleaned !== unquoted) {
          count++;
          console.log(`Fixing keyword in ${filePath}: "${unquoted}" -> "${cleaned}"`);
        }
        return `"${cleaned}"`;
      }).filter(Boolean);

      return `${p1} ${items.join(', ')} ${p3}`;
    });

    if (count > 0) {
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`Saved ${count} accented keywords to ${filePath}`);
    } else {
      console.log(`All keywords already properly accented in ${filePath}`);
    }
  }
});
