const fs = require('fs');

// Dictionary of unaccented/poorly accented terms to their proper Portuguese accented forms
const accentMap = {
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
  "divisao por zero": "divisão por zero",
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
  "atividades": "atividades",
  "fisico": "físico",
  "formatacao": "formatação",
  "navegacao": "navegação",
  "seguranca": "segurança",
  "opcao": "opção",
  "opcoes": "opções",
  "substituido": "substituído",
  "interromper": "interromper",
  "minúsculas": "minúsculas",
  "minusculas": "minúsculas",
  "maiúsculas": "maiúsculas",
  "maiusculas": "maiúsculas",
  "padronizacao": "padronização",
  "declaracao": "declaração",
  "documentacao": "documentação",
  "abstracao": "abstração",
  "funcionalidades": "funcionalidades",
  "substituicao": "substituição",
  "ambiguidade": "ambiguidade",
  "finitude": "finitude",
  "paridade": "paridade",
  "impar": "ímpar",
  "ímpar": "ímpar",
  "atribuido": "atribuído"
};

function fixAccentsInString(str) {
  let lower = str.toLowerCase().trim();
  if (accentMap[lower]) {
    return accentMap[lower];
  }
  // Try word-by-word replacement for multi-word phrases
  let words = str.split(' ').map(w => {
    let wLower = w.toLowerCase();
    return accentMap[wLower] || w;
  });
  return words.join(' ');
}

const file1 = 'src/questions/bancoProvas.ts';
const file2 = 'src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator.ts';

[file1, file2].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let totalFixed = 0;
    
    let updated = content.replace(/("keywords"\s*:\s*\[)([\s\S]*?)(\])/g, (match, p1, p2, p3) => {
      let items = p2.split(',').map(item => {
        let trimmed = item.trim();
        if (!trimmed) return null;
        let unquoted = trimmed.replace(/^"|"$/g, '');
        let fixed = fixAccentsInString(unquoted);
        if (fixed !== unquoted) totalFixed++;
        return `"${fixed}"`;
      }).filter(Boolean);
      
      return `${p1} ${items.join(', ')} ${p3}`;
    });

    if (totalFixed > 0) {
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`Updated ${totalFixed} keywords with accents in ${filePath}`);
    } else {
      console.log(`No unaccented keywords found in ${filePath}`);
    }
  }
});
