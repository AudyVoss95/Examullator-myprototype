export interface Prova {
  nivel: number;
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
  bloquearVoltar?: boolean;
}

export interface AppConfig {
  questoesPorNivel: number;
  totalQuestoes: number;
  percentualPalavrasParaNotaMaxima: number;
}

export const APP_CONFIG: AppConfig = {
  questoesPorNivel: 2,
  totalQuestoes: 16,
  percentualPalavrasParaNotaMaxima: 0.9, // 70% das palavras já garantem nota 10
};

export const BANCO_DE_PROVAS: Record<string, Prova> = {
  "001": {
    "nivel": 0,
    "titulo": "Hardware vs Software",
    "enunciado": "Explique com suas palavras a diferença entre Hardware e Software e cite um exemplo de cada.",
    "min_chars": 43,
    "keywords": [
      "WnNPdGMybGpidz09",
      "Y0hKdlozSmhiV0Z6",
      "WTI5dGNHOXVaVzUwWlhNPQ==",
      "YzJsemRHVnRZUT09"
    ]
  },
  "002": {
    "nivel": 0,
    "titulo": "Comandos Ctrl+C, V e X",
    "enunciado": "Explique para que servem os comandos Ctrl+C, Ctrl+V e Ctrl+X e descreva a diferença entre 'copiar' e 'recortar'.",
    "min_chars": 42,
    "keywords": [
      "WTI5d2FXRnk=",
      "WTI5c1lYST0=",
      "Y21WamIzSjBZWEk9",
      "WkhWd2JHbGpZWEk9",
      "Ylc5MlpYST0="
    ]
  },
  "003": {
    "nivel": 0,
    "titulo": "Bloco de Notas (.txt)",
    "enunciado": "O Bloco de Notas é um editor de 'texto simples'. Qual a principal característica de um arquivo .txt e por que ele é muito usado por programadores?",
    "min_chars": 57,
    "bloquearVoltar": true,
    "keywords": [
      "ZEdWNGRHOGdjMmx0Y0d4bGN3PT0=",
      "Wm05eWJXRjBZY09udzZOdg==",
      "YkdWMlpRPT0=",
      "WThPelpHbG5idz09",
      "WTI5dGNHRjBhV0pwYkdsa1lXUmw="
    ]
  },
  "004": {
    "nivel": 0,
    "titulo": "VS Code vs Bloco de Notas",
    "enunciado": "O VS Code possui recursos como cores no texto (syntax highlighting). Por que isso é uma vantagem em relação ao Bloco de Notas para quem está programando?",
    "min_chars": 55,
    "keywords": [
      "WkdWemRHRnhkV1U9",
      "YzJsdWRHRjRaUT09",
      "Y0hKdlpIVjBhWFpwWkdGa1pRPT0=",
      "ZG1semRXRnNhWHBodzZmRG8yOD0=",
      "WlhKeWIzTT0="
    ]
  },
  "005": {
    "nivel": 0,
    "titulo": "Salvar Arquivos (Ctrl+S)",
    "enunciado": "Por que é importante usar o comando Ctrl+S frequentemente ao trabalhar no VS Code? O que acontece se o computador desligar e o arquivo não estiver salvo?",
    "min_chars": 49,
    "keywords": [
      "YzJGc2RtRnk=",
      "Y0dWeWMybHpkTU9xYm1OcFlRPT0=",
      "YldWdHc3TnlhV0U9",
      "Y0dWeVpHRT0=",
      "Y0hKdlozSmxjM052"
    ]
  },
  "006": {
    "nivel": 0,
    "titulo": "Atalho Alt + Tab",
    "enunciado": "Para que serve o comando de teclado 'Alt + Tab' no Windows e em que situação ele ajuda na produtividade do desenvolvedor?",
    "min_chars": 54,
    "keywords": [
      "WVd4MFpYSnVZWEk9",
      "YW1GdVpXeGhjdz09",
      "Y0hKdlozSmhiV0Z6",
      "Ym1GMlpXZGh3NmZEbzI4PQ==",
      "YlhWc2RHbDBZWEpsWm1FPQ=="
    ]
  },
  "007": {
    "nivel": 0,
    "titulo": "Nuvem e Backup",
    "enunciado": "O que significa salvar um arquivo 'na nuvem' (ex: Google Drive)? Qual a principal vantagem em relação ao pendrive?",
    "min_chars": 58,
    "keywords": [
      "YVc1MFpYSnVaWFE9",
      "WVhKdFlYcGxibUZ0Wlc1MGJ3PT0=",
      "WVdObGMzTnZJSEpsYlc5MGJ3PT0=",
      "YzJWbmRYSmhic09uWVE9PQ==",
      "WW1GamEzVnc="
    ]
  },
  "008": {
    "nivel": 0,
    "titulo": "Criação de Pastas",
    "enunciado": "Descreva o passo a passo para criar uma nova pasta no Windows e explique por que é importante nomeá-la corretamente.",
    "min_chars": 48,
    "keywords": [
      "WW05MHc2TnZJR1JwY21WcGRHOD0=",
      "Ym05MmJ3PT0=",
      "Y0dGemRHRT0=",
      "Ym05dFpXRnk=",
      "YjNKbllXNXBlbUhEcDhPamJ3PT0="
    ]
  },
  "009": {
    "nivel": 0,
    "titulo": "Renomear e Organizar",
    "enunciado": "Como você renomeia um arquivo ou pasta? Por que não devemos usar nomes como 'trabalho1', 'trabalho final', 'agora vai'?",
    "min_chars": 57,
    "keywords": [
      "Y21WdWIyMWxZWEk9",
      "YVdSbGJuUnBabWxqWWNPbnc2TnY=",
      "WTJ4aGNtVjZZUT09",
      "YjNKbllXNXBlbUhEcDhPamJ3PT0=",
      "WTI5dWRHVjRkRzg9"
    ]
  },
  "101": {
    "nivel": 1,
    "titulo": "O que é Algoritmo",
    "enunciado": "Defina o conceito de algoritmo utilizando um exemplo do cotidiano (como uma receita ou trocar um pneu).",
    "min_chars": 49,
    "keywords": [
      "Y0dGemMyOXo=",
      "YzJWeGRjT3FibU5wWVE9PQ==",
      "YVc1emRISjF3NmZEdFdWeg==",
      "Yk1PeloybGpZUT09",
      "YjJKcVpYUnBkbTg9"
    ]
  },
  "102": {
    "nivel": 1,
    "titulo": "Fluxogramas",
    "enunciado": "Qual a utilidade de um fluxograma antes de começar a escrever o código? O que o símbolo de 'losango' representa?",
    "min_chars": 46,
    "keywords": [
      "ZG1semRXRnM=",
      "Y0d4aGJtVnFZVzFsYm5Sdg==",
      "WkdWamFYUERvMjg9",
      "Wm14MWVHOD0=",
      "Yk1PeloybGpZUT09"
    ]
  },
  "103": {
    "nivel": 1,
    "titulo": "Entrada e Saída",
    "enunciado": "Em lógica, o que representam os conceitos de Entrada, Processamento e Saída de dados?",
    "min_chars": 52,
    "keywords": [
      "WkdGa2IzTT0=",
      "YVc1bWIzSnRZY09udzZOdg==",
      "Y21WemRXeDBZV1J2",
      "ZEhKaGJuTm1iM0p0WWNPbnc2TnY=",
      "Wm14MWVHOD0="
    ]
  },
  "104": {
    "nivel": 1,
    "titulo": "Pseudocódigo",
    "enunciado": "Por que usamos pseudocódigo (Portugol) antes de passar para uma linguagem como Python?",
    "min_chars": 55,
    "keywords": [
      "Yk1PeloybGpZUT09",
      "Wlc1MFpXNWthVzFsYm5Sdg==",
      "YkdsdVozVmhaMlZ0",
      "WlhOMGNuVjBkWEpo",
      "ZEhKaGJuTnB3NmZEbzI4PQ=="
    ]
  },
  "105": {
    "nivel": 1,
    "titulo": "Símbolo de Processo",
    "enunciado": "No fluxograma, o retângulo representa um processo. Dê dois exemplos de ações que seriam colocadas dentro de um retângulo.",
    "min_chars": 50,
    "keywords": [
      "WWNPbnc2TnY=",
      "WThPaGJHTjFiRzg9",
      "WVhSeWFXSjFhY09udzZOdg==",
      "ZEdGeVpXWmg=",
      "Y0hKdlkyVnpjMkZ0Wlc1MGJ3PT0="
    ]
  },
  "106": {
    "nivel": 1,
    "titulo": "Símbolo de Início/Fim",
    "enunciado": "Por que todo fluxograma deve obrigatoriamente ter um símbolo de Início e um de Fim?",
    "min_chars": 43,
    "keywords": [
      "YkdsdGFYUmw=",
      "Wlc1MGNtRmtZUT09",
      "YzJIRHJXUmg=",
      "ZE1PcGNtMXBibTg9",
      "WlhobFkzWERwOE9qYnc9PQ=="
    ]
  },
  "107": {
    "nivel": 1,
    "titulo": "Automação no Cotidiano",
    "enunciado": "Cite um exemplo de um processo automático no seu dia a dia que segue um algoritmo (ex: semáforo). Explique a lógica.",
    "min_chars": 49,
    "keywords": [
      "YzJWeGRjT3FibU5wWVE9PQ==",
      "YzJWdWMyOXlaWE09",
      "ZEdWdGNHOD0=",
      "WkdWamFYUERvMjg9",
      "WVhWMGIyM0RvWFJwWTI4PQ=="
    ]
  },
  "108": {
    "nivel": 1,
    "titulo": "Ordem de Execução",
    "enunciado": "O que acontece se invertermos a ordem de dois passos em um algoritmo de 'fazer café'? Como isso afeta o resultado?",
    "min_chars": 44,
    "keywords": [
      "YzJWeGRjT3FibU5wWVE9PQ==",
      "WlhKeWJ3PT0=",
      "Yk1PeloybGpZUT09",
      "Y0dGemMyOXo=",
      "Y21WemRXeDBZV1J2"
    ]
  },
  "109": {
    "nivel": 1,
    "titulo": "Clareza de Instruções",
    "enunciado": "Por que um algoritmo não pode ter instruções ambíguas (duvidosas)? O que acontece se o computador não entender um passo?",
    "min_chars": 51,
    "keywords": [
      "Y0hKbFkybHp3Nk52",
      "WTJ4aGNtVjZZUT09",
      "YVc1MFpYSndjbVYwWWNPbnc2TnY=",
      "WlhKeWJ3PT0=",
      "YVc1emRISjF3NmZEbzI4PQ=="
    ]
  },
  "201": {
    "nivel": 2,
    "titulo": "Python Interativo",
    "enunciado": "O que acontece quando você digita apenas 'python' no terminal? Como você faz para sair desse modo?",
    "min_chars": 52,
    "keywords": [
      "Ylc5a2J5QnBiblJsY21GMGFYWnY=",
      "WTI5dFlXNWtiM009",
      "ZEdWemRHRnk=",
      "WlhocGRDZ3A=",
      "ZEdWeWJXbHVZV3c9"
    ]
  },
  "202": {
    "nivel": 2,
    "titulo": "Erros de Sintaxe",
    "enunciado": "O que o computador faz quando encontra um erro de sintaxe no seu código? Ele executa o resto do programa?",
    "min_chars": 56,
    "keywords": [
      "YVc1MFpYSnlkWEREcDhPamJ3PT0=",
      "WjNKaGJjT2hkR2xqWVE9PQ==",
      "YVc1MFpYSndjbVYwWWNPbnc2TnY=",
      "Wm1Gc2FHRT0=",
      "WTI5eWNtWERwOE9qYnc9PQ=="
    ]
  },
  "203": {
    "nivel": 2,
    "titulo": "Extensão .py",
    "enunciado": "Por que os arquivos de código Python devem terminar com a extensão '.py'? O que o sistema operacional faz com essa informação?",
    "min_chars": 59,
    "keywords": [
      "WlhoMFpXNXp3Nk52",
      "YVdSbGJuUnBabWxqWWNPbnc2TnY=",
      "YVc1MFpYSndjbVYwWVdSdmNnPT0=",
      "Wm05eWJXRjBidz09",
      "WlhobFkzWERwOE9qYnc9PQ=="
    ]
  },
  "204": {
    "nivel": 2,
    "titulo": "Função Print",
    "enunciado": "Para que serve o comando `print()`? O que acontece se você esquecer de colocar as aspas em volta de um texto dentro do print?",
    "min_chars": 35,
    "keywords": [
      "WlhocFltbHk=",
      "ZEdWc1lRPT0=",
      "WlhKeWJ3PT0=",
      "WVhOd1lYTT0=",
      "YzNSeWFXNW4="
    ]
  },
  "205": {
    "nivel": 2,
    "titulo": "Comentários (#)",
    "enunciado": "Por que usamos o símbolo `#` no código? O computador lê o que está escrito depois desse símbolo?",
    "min_chars": 53,
    "keywords": [
      "Wkc5amRXMWxiblJodzZmRG8yOD0=",
      "Wlhod2JHbGpZY09udzZOdg==",
      "YVdkdWIzSmhjZz09",
      "YkdWcGRIVnlZUT09",
      "WTJ4aGNtVjZZUT09"
    ]
  },
  "206": {
    "nivel": 2,
    "titulo": "Diferença Python 2 e 3",
    "enunciado": "Embora usemos o Python 3, por que é importante saber que versões antigas existem? Cite uma diferença básica (ex: print).",
    "min_chars": 52,
    "keywords": [
      "WTI5dGNHRjBhV0pwYkdsa1lXUmw=",
      "WlhadmJIWERwOE9qYnc9PQ==",
      "ZG1WeWM4T2pidz09",
      "YzJsdWRHRjRaUT09",
      "YkdWbllXUnY="
    ]
  },
  "207": {
    "nivel": 2,
    "titulo": "Case Sensitive",
    "enunciado": "Python é 'Case Sensitive'. O que isso significa se você criar uma variável chamada `Nome` e tentar usar `nome`?",
    "min_chars": 51,
    "keywords": [
      "YldGcHc3cHpZM1ZzWVhNPQ==",
      "YldsdXc3cHpZM1ZzWVhNPQ==",
      "WkdsbVpYSmxic09uWVE9PQ==",
      "WlhKeWJ3PT0=",
      "ZG1GeWFjT2hkbVZz"
    ]
  },
  "208": {
    "nivel": 2,
    "titulo": "O Interpretador",
    "enunciado": "Explique brevemente o papel do 'Interpretador Python' na execução de um arquivo de código.",
    "min_chars": 52,
    "keywords": [
      "ZEhKaFpIWERwOE9qYnc9PQ==",
      "WlhobFkzWERwOE9qYnc9PQ==",
      "YkdsdWFHRWdjRzl5SUd4cGJtaGg=",
      "YmNPaGNYVnBibUU9",
      "WThPelpHbG5idz09"
    ]
  },
  "209": {
    "nivel": 2,
    "titulo": "Identação (Espaçamento)",
    "enunciado": "Diferente de outras linguagens, o Python usa espaços para organizar blocos. O que acontece se o alinhamento estiver errado?",
    "min_chars": 48,
    "keywords": [
      "WlhOMGNuVjBkWEpo",
      "YVdSbGJuUmh3NmZEbzI4PQ==",
      "WlhKeWJ3PT0=",
      "WW14dlkyOD0=",
      "YjNKbllXNXBlbUhEcDhPamJ3PT0="
    ]
  },
  "301": {
    "nivel": 3,
    "titulo": "Tipagem Dinâmica",
    "enunciado": "Em Python, não precisamos dizer que uma variável é 'inteira' ao criá-la. Explique como o Python descobre o tipo do dado.",
    "min_chars": 44,
    "keywords": [
      "WVhSeWFXSjFhY09udzZOdg==",
      "ZG1Gc2IzST0=",
      "WkdsdXc2SnRhV052",
      "ZEdsd2J3PT0=",
      "YldWdHc3TnlhV0U9"
    ]
  },
  "302": {
    "nivel": 3,
    "titulo": "Input e String",
    "enunciado": "Por que o comando `input()` sempre retorna um texto (str), mesmo que o usuário digite um número?",
    "min_chars": 48,
    "keywords": [
      "Wlc1MGNtRmtZUT09",
      "Y0dGa2NzT2pidz09",
      "WTI5dWRtVnljOE9qYnc9PQ==",
      "WTJGeVlXTjBaWEps",
      "ZEdWamJHRmtidz09"
    ]
  },
  "303": {
    "nivel": 3,
    "titulo": "Inteiro vs Float",
    "enunciado": "Qual a diferença técnica entre o tipo `int` e o tipo `float`? Dê um exemplo de quando usar cada um.",
    "min_chars": 52,
    "keywords": [
      "YVc1MFpXbHlidz09",
      "WkdWamFXMWhiQT09",
      "WTJGellYTWdaR1ZqYVcxaGFYTT0=",
      "Y0hKbFkybHp3Nk52",
      "YnNPNmJXVnliM009"
    ]
  },
  "304": {
    "nivel": 3,
    "titulo": "Booleano (bool)",
    "enunciado": "O que é o tipo de dado Booleano? Quais são os dois únicos valores que ele pode assumir?",
    "min_chars": 40,
    "keywords": [
      "VkhKMVpRPT0=",
      "Um1Gc2MyVT0=",
      "Yk1PeloybGpidz09",
      "ZG1WeVpHRmtaV2x5Ync9PQ==",
      "Wm1Gc2MyOD0="
    ]
  },
  "305": {
    "nivel": 3,
    "titulo": "Nomes de Variáveis",
    "enunciado": "Quais são as regras para dar nome a uma variável em Python? (Pode começar com número? Pode ter espaço?)",
    "min_chars": 48,
    "keywords": [
      "Y21WbmNtRno=",
      "YVc3RHJXTnBidz09",
      "WTJGeVlXTjBaWEpsY3c9PQ==",
      "WlhOd1ljT25idz09",
      "YzNWaWJHbHVhR0ZrYnc9PQ=="
    ]
  },
  "306": {
    "nivel": 3,
    "titulo": "Função Type()",
    "enunciado": "Para que serve o comando `type()`? Dê um exemplo de como ele ajudaria a descobrir um erro no código.",
    "min_chars": 53,
    "keywords": [
      "YVdSbGJuUnBabWxqWVhJPQ==",
      "ZEdsd2J3PT0=",
      "WkdWd2RYSmh3NmZEbzI4PQ==",
      "ZG1WeWFXWnBZMkhEcDhPamJ3PT0=",
      "ZG1GeWFjT2hkbVZz"
    ]
  },
  "307": {
    "nivel": 3,
    "titulo": "Conversão (Casting)",
    "enunciado": "Como transformamos um texto \"10\" em um número real 10.0? Use o nome da função correta na explicação.",
    "min_chars": 41,
    "keywords": [
      "Wm14dllYUW9LUT09",
      "WTI5dWRtVnljOE9qYnc9PQ==",
      "WTJGemRHbHVadz09",
      "ZEdsd2J3PT0=",
      "Y21WaGJBPT0="
    ]
  },
  "308": {
    "nivel": 3,
    "titulo": "Variável vs Constante",
    "enunciado": "Embora o Python não tenha 'constantes' fixas por padrão, qual a diferença conceitual entre uma variável e uma constante?",
    "min_chars": 56,
    "keywords": [
      "WVd4MFpYSmh3NmZEbzI4PQ==",
      "ZG1Gc2IzSWdabWw0Ync9PQ==",
      "YzJWdHc2SnVkR2xqWVE9PQ==",
      "Y0dGa2NzT2pidz09",
      "WVhKdFlYcGxibUZ0Wlc1MGJ3PT0="
    ]
  },
  "309": {
    "nivel": 3,
    "titulo": "Concatenação",
    "enunciado": "O que acontece quando usamos o sinal de `+` entre duas Strings? Como isso é diferente de usar o `+` com números?",
    "min_chars": 39,
    "keywords": [
      "YW5WdWRHRnk=",
      "YzI5dFlYST0=",
      "ZEdWNGRHOD0=",
      "ZEdsd2IzTT0=",
      "YjNCbGNtRmtiM0k9"
    ]
  },
  "401": {
    "nivel": 4,
    "titulo": "Identação no IF",
    "enunciado": "Qual a importância do 'espaço' (Tab) logo abaixo de um comando `if`? O que acontece se esquecermos dele?",
    "min_chars": 43,
    "keywords": [
      "WW14dlkyOD0=",
      "Y21WamRXOD0=",
      "WlhKeWJ3PT0=",
      "WlhOMGNuVjBkWEpo",
      "YUdsbGNtRnljWFZwWVE9PQ=="
    ]
  },
  "402": {
    "nivel": 4,
    "titulo": "Operador de Módulo (%)",
    "enunciado": "Explique como o operador `%` (resto da divisão) pode ser usado para descobrir se um número é Par ou Ímpar.",
    "min_chars": 44,
    "keywords": [
      "Y21WemRHOD0=",
      "WkdsMmFYUERvMjg9",
      "ZW1WeWJ3PT0=",
      "WTI5dGNHRnlZY09udzZOdg==",
      "Y0dGeWFXUmhaR1U9"
    ]
  },
  "403": {
    "nivel": 4,
    "titulo": "Operador de Igualdade (==)",
    "enunciado": "Por que usamos `==` para comparar valores e não apenas `=`? Qual a função do `=` sozinho?",
    "min_chars": 51,
    "keywords": [
      "WTI5dGNHRnlZY09udzZOdg==",
      "WVhSeWFXSjFhY09udzZOdg==",
      "YVdkMVlXeGtZV1Js",
      "WlhKeWJ3PT0=",
      "YjNCbGNtRmtiM0k9"
    ]
  },
  "404": {
    "nivel": 4,
    "titulo": "Função do ELIF",
    "enunciado": "Em uma estrutura de decisão com 5 opções diferentes, por que usar `elif` é melhor do que usar vários `if` seguidos?",
    "min_chars": 48,
    "keywords": [
      "WldacFkybkRxbTVqYVdFPQ==",
      "WlhoamJIVnphWFp2",
      "YjNKa1pXMD0=",
      "WTJGdGFXNW9iM009",
      "Yk1PeloybGpZUT09"
    ]
  },
  "405": {
    "nivel": 4,
    "titulo": "Operador lógico AND",
    "enunciado": "Quando usamos o `and` em uma condição? O que deve acontecer com as duas partes para o resultado ser Verdadeiro?",
    "min_chars": 48,
    "keywords": [
      "WVcxaWIzTT0=",
      "ZG1WeVpHRmtaV2x5Ync9PQ==",
      "WTI5dWFuVnV3NmZEbzI4PQ==",
      "WTI5dVpHbkRwOE9qYnc9PQ==",
      "Yk1PeloybGpZUT09"
    ]
  },
  "406": {
    "nivel": 4,
    "titulo": "Operador lógico OR",
    "enunciado": "Explique o funcionamento do `or`. Basta uma condição ser verdadeira para o bloco ser executado?",
    "min_chars": 50,
    "keywords": [
      "YjNVPQ==",
      "Y0dWc2J5QnRaVzV2Y3lCMWJRPT0=",
      "ZG1WeVpHRmtaV2x5Ync9PQ==",
      "WVd4MFpYSnVZWFJwZG1FPQ==",
      "Yk1PeloybGpZUT09"
    ]
  },
  "407": {
    "nivel": 4,
    "titulo": "O papel do ELSE",
    "enunciado": "O comando `else` precisa de uma condição (ex: `else x > 10`)? Explique quando o bloco do `else` é executado.",
    "min_chars": 48,
    "keywords": [
      "Y0dGa2NzT2pidz09",
      "Ym1WblljT253Nk52",
      "WTI5dWRITERvWEpwYnc9PQ==",
      "YjNCamFXOXVZV3c9",
      "WlhobFkzWERwOE9qYnc9PQ=="
    ]
  },
  "408": {
    "nivel": 4,
    "titulo": "Valores de Borda",
    "enunciado": "Em um programa que aprova alunos com nota >= 6.0, por que a nota 6.0 é chamada de 'valor de borda'?",
    "min_chars": 51,
    "keywords": [
      "YkdsdGFYUmw=",
      "ZEdWemRHVT0=",
      "WTI5dGNHRnlZY09udzZOdg==",
      "Y0hKbFkybHp3Nk52",
      "WlhKeWJ5QmtaU0JzdzdObmFXTmg="
    ]
  },
  "409": {
    "nivel": 4,
    "titulo": "Operador Diferente (!=)",
    "enunciado": "Como verificamos se o nome de um usuário **não** é 'admin'? Explique o uso do operador `!=`.",
    "min_chars": 50,
    "keywords": [
      "WkdsbVpYSmxiblJs",
      "Ym1WblljT253Nk52",
      "WTI5dGNHRnlZY09udzZOdg==",
      "YjNCbGNtRmtiM0k9",
      "Yk1PeloybGpZUT09"
    ]
  },
  "501": {
    "nivel": 5,
    "titulo": "Loop Infinito",
    "enunciado": "O que causa um loop infinito em um comando `while`? Como podemos garantir que o loop um dia termine?",
    "min_chars": 49,
    "keywords": [
      "WTI5dVpHbkRwOE9qYnc9PQ==",
      "Y0dGeVlXUmg=",
      "YVc1amNtVnRaVzUwYnc9PQ==",
      "WVhSMVlXeHBlbUhEcDhPamJ3PT0=",
      "WlhKeWJ3PT0="
    ]
  },
  "502": {
    "nivel": 5,
    "titulo": "Função Range",
    "enunciado": "No comando `for i in range(5)`, quais são os valores que a variável `i` assumirá? Explique o início e o fim.",
    "min_chars": 50,
    "keywords": [
      "YzJWeGRjT3FibU5wWVE9PQ==",
      "ZW1WeWJ3PT0=",
      "YVc1amNtVnRaVzUwYnc9PQ==",
      "YVhSbGNtSERwOE9qYnc9PQ==",
      "YVc1MFpYSjJZV3h2"
    ]
  },
  "503": {
    "nivel": 5,
    "titulo": "Variável Contadora",
    "enunciado": "Para que serve uma variável contadora (ex: `cont = cont + 1`) dentro de um loop `while`?",
    "min_chars": 50,
    "keywords": [
      "WTI5dWRHRm5aVzA9",
      "WTI5dWRISnZiR1U9",
      "YVc1amNtVnRaVzUwYnc9PQ==",
      "YVhSbGNtSERwOE9qYnc9PQ==",
      "YkdsdGFYUmw="
    ]
  },
  "504": {
    "nivel": 5,
    "titulo": "Variável Acumuladora",
    "enunciado": "Qual a diferença entre um 'contador' e um 'acumulador' (ex: `soma = soma + preco`)?",
    "min_chars": 43,
    "keywords": [
      "ZEc5MFlXdz0=",
      "YzI5dFlRPT0=",
      "ZG1Gc2IzSmxjdz09",
      "ZG1GeWFjT2hkbVZz",
      "WkdsbVpYSmxic09uWVE9PQ=="
    ]
  },
  "505": {
    "nivel": 5,
    "titulo": "For vs While",
    "enunciado": "Em que situação é melhor usar o `for` e em qual é melhor usar o `while`?",
    "min_chars": 56,
    "keywords": [
      "WkdWMFpYSnRhVzVoWkc4PQ==",
      "YVc1a1pYUmxjbTFwYm1Ga2J3PT0=",
      "Y21Wd1pYUnB3NmZEbzI4PQ==",
      "WlhOamIyeG9ZUT09",
      "Yk1PeloybGpZUT09"
    ]
  },
  "506": {
    "nivel": 5,
    "titulo": "Comando Break",
    "enunciado": "Para que serve o comando `break`? Ele encerra o programa inteiro ou apenas o loop atual?",
    "min_chars": 50,
    "keywords": [
      "YVc1MFpYSnlkWEREcDhPamJ3PT0=",
      "YzJIRHJXUmg=",
      "Ykc5dmNBPT0=",
      "Wlc1alpYSnlZVzFsYm5Sdg==",
      "WTI5dWRISnZiR1U9"
    ]
  },
  "507": {
    "nivel": 5,
    "titulo": "Comando Continue",
    "enunciado": "Qual a diferença entre o `break` e o `continue` dentro de uma repetição?",
    "min_chars": 54,
    "keywords": [
      "Y0hWc1lYST0=",
      "YVc1MFpYSnliMjF3WlhJPQ==",
      "Y0hMRHMzaHBiV0VnYVhSbGNtSERwOE9qYnc9PQ==",
      "WTI5dWRISnZiR1U9",
      "Wm14MWVHOD0="
    ]
  },
  "508": {
    "nivel": 5,
    "titulo": "Range com Passo",
    "enunciado": "No comando `range(0, 10, 2)`, o que o número 2 representa? Qual será a sequência de números gerada?",
    "min_chars": 48,
    "keywords": [
      "Y0dGemMyOD0=",
      "YzJGc2RHOD0=",
      "YVc1MFpYSjJZV3h2",
      "YzJWeGRjT3FibU5wWVE9PQ==",
      "YVc1amNtVnRaVzUwYnc9PQ=="
    ]
  },
  "509": {
    "nivel": 5,
    "titulo": "Loops Aninhados",
    "enunciado": "O que acontece quando colocamos um `for` dentro de outro `for`? Dê um exemplo prático (ex: relógio).",
    "min_chars": 69,
    "keywords": [
      "Y21Wd1pYUnB3NmZEbzI4Z1pIVndiR0U9",
      "YUc5eVlYTWdaU0J0YVc1MWRHOXo=",
      "WTI5dmNtUmxibUZrWVhNPQ==",
      "WlhOMGNuVjBkWEpo",
      "WTI5dGNHeGxlR2xrWVdSbA=="
    ]
  },
  "601": {
    "nivel": 6,
    "titulo": "Listas vs Variáveis",
    "enunciado": "Qual a vantagem de usar uma Lista (`list`) em vez de criar 50 variáveis differentes (ex: nota1, nota2...)?",
    "min_chars": 51,
    "keywords": [
      "YjNKbllXNXBlbUhEcDhPamJ3PT0=",
      "dzYxdVpHbGpaUT09",
      "Ykc5dmNBPT0=",
      "WTI5c1pjT253Nk52",
      "Wm14bGVHbGlhV3hwWkdGa1pRPT0="
    ]
  },
  "602": {
    "nivel": 6,
    "titulo": "Índices de Matriz",
    "enunciado": "Para acessar um valor em uma matriz, usamos dois colchetes `matriz[x][y]`. O que o primeiro e o segundo índice representam?",
    "min_chars": 51,
    "keywords": [
      "YkdsdWFHRT0=",
      "WTI5c2RXNWg=",
      "WTI5dmNtUmxibUZrWVE9PQ==",
      "WW1sa2FXMWxibk5wYjI1aGJBPT0=",
      "Y0c5emFjT253Nk52"
    ]
  },
  "603": {
    "nivel": 6,
    "titulo": "Index Out of Range",
    "enunciado": "O que causa o erro 'list index out of range'? Como evitar acessar um índice que não existe?",
    "min_chars": 44,
    "keywords": [
      "WlhKeWJ3PT0=",
      "YkdsdGFYUmw=",
      "ZEdGdFlXNW9idz09",
      "YVc1bGVHbHpkR1Z1ZEdVPQ==",
      "WVdObGMzTnY="
    ]
  },
  "604": {
    "nivel": 6,
    "titulo": "Método Append()",
    "enunciado": "Para que serve o comando `.append()`? Onde o novo elemento é colocado na lista?",
    "min_chars": 44,
    "keywords": [
      "WVdScFkybHZibUZ5",
      "Wm1sdVlXdz0=",
      "Wld4bGJXVnVkRzg9",
      "YVc1elpYSnBjZz09",
      "YkdsemRHRT0="
    ]
  },
  "605": {
    "nivel": 6,
    "titulo": "Método Pop()",
    "enunciado": "Como removemos o último elemento de uma lista? Explique o funcionamento básico do `.pop()`.",
    "min_chars": 42,
    "keywords": [
      "Y21WdGIzWmxjZz09",
      "WlhoamJIVnBjZz09",
      "dzdwc2RHbHRidz09",
      "Y21WMGIzSnVidz09",
      "YkdsemRHRT0="
    ]
  },
  "606": {
    "nivel": 6,
    "titulo": "Percorrendo Listas",
    "enunciado": "Como usamos o `for` para imprimir todos os nomes de uma lista um por um?",
    "min_chars": 43,
    "keywords": [
      "YVhSbGNtSERwOE9qYnc9PQ==",
      "Wld4bGJXVnVkRzg9",
      "YkdsemRHRT0=",
      "WlhocFltbkRwOE9qYnc9PQ==",
      "Ykc5dmNBPT0="
    ]
  },
  "607": {
    "nivel": 6,
    "titulo": "Função Len()",
    "enunciado": "O que a função `len()` nos diz sobre uma lista? Por que ela é útil em loops?",
    "min_chars": 49,
    "keywords": [
      "ZEdGdFlXNW9idz09",
      "WTI5dGNISnBiV1Z1ZEc4PQ==",
      "Y1hWaGJuUnBaR0ZrWlE9PQ==",
      "YkdsdGFYUmw=",
      "ZEc5MFlXdz0="
    ]
  },
  "608": {
    "nivel": 6,
    "titulo": "Listas Vazias",
    "enunciado": "Por que às vezes começamos um programa criando uma lista vazia `lista = []`?",
    "min_chars": 63,
    "keywords": [
      "YVc1cFkybGhiR2w2WWNPbnc2TnY=",
      "Y0hKbFpXNWphR2x0Wlc1MGJ3PT0=",
      "WkdsdXc2SnRhV052",
      "WVhKdFlYcGxibUZ0Wlc1MGJ3PT0=",
      "Wm5WMGRYSnY="
    ]
  },
  "609": {
    "nivel": 6,
    "titulo": "Matrizes no Real",
    "enunciado": "Dê um exemplo de dado do mundo real que se comporta como uma matriz (ex: cinema, excel, batalha naval).",
    "min_chars": 52,
    "keywords": [
      "YkdsdWFHRno=",
      "WTI5c2RXNWhjdz09",
      "WjNKaFpHVT0=",
      "WW1sa2FXMWxibk5wYjI1aGJBPT0=",
      "YjNKbllXNXBlbUhEcDhPamJ3PT0="
    ]
  },
  "701": {
    "nivel": 7,
    "titulo": "Precisão na Saída",
    "enunciado": "No cálculo de consumo (km/L), por que usamos f-strings para limitar as casas decimais? Como o excesso de números após a vírgula afeta a leitura do usuário?",
    "min_chars": 55,
    "keywords": [
      "WmkxemRISnBibWM9",
      "Wm05eWJXRjBZY09udzZOdg==",
      "WTJ4aGNtVjZZUT09",
      "Y0hKbFkybHp3Nk52",
      "ZG1semRXRnNhWHBodzZmRG8yOD0="
    ]
  },
  "702": {
    "nivel": 7,
    "titulo": "Prevenção de Falhas",
    "enunciado": "Na calculadora, por que é obrigatório verificar se o divisor é zero antes da conta? O que é um \"crash\" de programa e como evitá-lo?",
    "min_chars": 57,
    "keywords": [
      "WkdsMmFYUERvMjhnY0c5eUlIcGxjbTg9",
      "ZG1Gc2FXUmh3NmZEbzI4PQ==",
      "WlhKeWJ3PT0=",
      "YVc1MFpYSnlkWEREcDhPamJ3PT0=",
      "YzJWbmRYSmhic09uWVE9PQ=="
    ]
  },
  "703": {
    "nivel": 7,
    "titulo": "Feedback Detalhado",
    "enunciado": "Por que um sistema de aprovação deve informar o motivo exato da reprovação (nota vs. frequência) em vez de apenas dizer \"Reprovado\"?",
    "min_chars": 63,
    "keywords": [
      "Wlhod1pYSnB3NnB1WTJsaElHUnZJSFZ6ZGNPaGNtbHY=",
      "WTJ4aGNtVjZZUT09",
      "Wm1WbFpHSmhZMnM9",
      "YVc1bWIzSnRZY09udzZOdg==",
      "WTI5dWRHVjRkRzg9"
    ]
  },
  "704": {
    "nivel": 7,
    "titulo": "Lógica de Descontos",
    "enunciado": "No simulador de loja, qual a diferença lógica entre aplicar um desconto de 15% direto e aplicar 10% seguido de 5% sobre o novo valor?",
    "min_chars": 55,
    "keywords": [
      "YzJWeGRjT3FibU5wWVE9PQ==",
      "WThPaGJHTjFiRzg9",
      "YzNWaWRHOTBZV3c9",
      "Y0c5eVkyVnVkR0ZuWlcwPQ==",
      "YldGMFpXM0RvWFJwWTJFPQ=="
    ]
  },
  "705": {
    "nivel": 7,
    "titulo": "Tipagem e Divisão",
    "enunciado": "Por que convertemos o valor da conta para `float` e o número de pessoas para `int`? O que aconteceria se usássemos `int` para o valor da conta?",
    "min_chars": 50,
    "keywords": [
      "ZEdsd2IzTWdaR1VnWkdGa2IzTT0=",
      "Y0hKbFkybHp3Nk52",
      "YVc1MFpXbHlidz09",
      "Y21WaGJBPT0=",
      "WTI5dWRtVnljOE9qYnc9PQ=="
    ]
  },
  "706": {
    "nivel": 7,
    "titulo": "Hierarquia no Elif",
    "enunciado": "No classificador de notas, por que a ordem das condições (ex: >= 6.0 antes de >= 5.0) é crucial para o resultado correto?",
    "min_chars": 50,
    "keywords": [
      "YjNKa1pXMD0=",
      "WlhoamJIVnp3Nk52",
      "YUdsbGNtRnljWFZwWVE9PQ==",
      "Yk1PeloybGpZUT09",
      "ZG1WeWFXWnBZMkhEcDhPamJ3PT0="
    ]
  },
  "707": {
    "nivel": 7,
    "titulo": "Operadores Combinados",
    "enunciado": "No verificador de acesso, como os operadores `and` e `or` permitem diferenciar um convidado comum de um VIP com ingresso?",
    "min_chars": 51,
    "keywords": [
      "Yk1PeloybGpZUT09",
      "WTI5dFltbHVZY09udzZOdg==",
      "WTI5dVpHbkRwOE8xWlhNPQ==",
      "Y0hKcGIzSnBaR0ZrWlE9PQ==",
      "WVdObGMzTnY="
    ]
  },
  "708": {
    "nivel": 7,
    "titulo": "Aleatoriedade (Random)",
    "enunciado": "Qual a função do `import random` no jogo Pedra, Papel e Tesoura? Como a falta de aleatoriedade afetaria a experiência do jogador?",
    "min_chars": 54,
    "keywords": [
      "YmNPelpIVnNidz09",
      "YzI5eWRHVnBidz09",
      "YVcxd2NtVjJhWE5wWW1sc2FXUmhaR1U9",
      "WW1saWJHbHZkR1ZqWVE9PQ==",
      "YW05bmJ3PT0="
    ]
  },
  "709": {
    "nivel": 7,
    "titulo": "Higienização de Dados",
    "enunciado": "Por que usamos métodos como `.lower()` nas entradas de texto do usuário? Como isso evita que o programa falhe por causa de letras maiúsculas?",
    "min_chars": 49,
    "keywords": [
      "Y0dGa2NtOXVhWHBodzZmRG8yOD0=",
      "ZEhKaGRHRnRaVzUwYnc9PQ==",
      "YzNSeWFXNW4=",
      "WlhKeWJ3PT0=",
      "Wlc1MGNtRmtZUT09"
    ]
  },
  "801": {
    "nivel": 8,
    "titulo": "Escopo de Variáveis",
    "enunciado": "Uma variável criada dentro de uma função pode ser usada fora dela? Explique o conceito de variáveis locais.",
    "min_chars": 45,
    "keywords": [
      "WlhOamIzQnY=",
      "Ykc5allXdz0=",
      "WjJ4dlltRnM=",
      "ZG1semFXSnBiR2xrWVdSbA==",
      "Wm5WdXc2ZkRvMjg9"
    ]
  },
  "802": {
    "nivel": 8,
    "titulo": "Parâmetros",
    "enunciado": "Para que servem os parâmetros de uma função? Dê um exemplo de uma função que recebe dados para processar.",
    "min_chars": 58,
    "keywords": [
      "Wlc1MGNtRmtZUT09",
      "WVhKbmRXMWxiblJ2Y3c9PQ==",
      "Wm14bGVHbGlhV3hwWkdGa1pRPT0=",
      "Y0hKdlkyVnpjMkZ0Wlc1MGJ3PT0=",
      "Y21WMWMyOD0="
    ]
  },
  "803": {
    "nivel": 8,
    "titulo": "Return vs Print",
    "enunciado": "Qual a diferença entre uma função que dá um `print()` e uma função que dá um `return`?",
    "min_chars": 46,
    "keywords": [
      "Y21WemRXeDBZV1J2",
      "WlhocFltbHk=",
      "WkdWMmIyeDJaWEk9",
      "ZG1GeWFjT2hkbVZz",
      "YzJIRHJXUmg="
    ]
  },
  "804": {
    "nivel": 8,
    "titulo": "Vantagem de Modularizar",
    "enunciado": "Por que dividimos um programa grande em várias funções pequenas? Cite duas vantagens.",
    "min_chars": 55,
    "keywords": [
      "YjNKbllXNXBlbUhEcDhPamJ3PT0=",
      "Y21WMWMyOD0=",
      "YldGdWRYUmxic09udzZOdg==",
      "YkdWbmFXSnBiR2xrWVdSbA==",
      "WkdsMmFYUERvMjg9"
    ]
  },
  "805": {
    "nivel": 8,
    "titulo": "Docstrings",
    "enunciado": "O que é uma docstring (texto entre três aspas) logo abaixo da definição da função? Para que serve?",
    "min_chars": 57,
    "keywords": [
      "Wkc5amRXMWxiblJodzZmRG8yOD0=",
      "WVdwMVpHRT0=",
      "Wlhod2JHbGpZY09udzZOdg==",
      "WkdWelpXNTJiMngyWldSdmNnPT0=",
      "WTJ4aGNtVjZZUT09"
    ]
  },
  "806": {
    "nivel": 8,
    "titulo": "Parâmetros Opcionais",
    "enunciado": "Como definimos um valor padrão para um parâmetro (ex: `f(x=10)`)? O que acontece se o usuário não enviar o valor?",
    "min_chars": 53,
    "keywords": [
      "Y0dGa2NzT2pidz09",
      "WkdWbVlYVnNkQT09",
      "YjNCamFXOXVZV3c9",
      "WVhKbmRXMWxiblJ2",
      "Wm14bGVHbGlhV3hwWkdGa1pRPT0="
    ]
  },
  "807": {
    "nivel": 8,
    "titulo": "Chamar uma Função",
    "enunciado": "Como você 'executa' uma função que já foi definida? O que acontece se você esquecer dos parênteses `()`?",
    "min_chars": 54,
    "keywords": [
      "WTJoaGJXRmtZUT09",
      "YVc1MmIyTmh3NmZEbzI4PQ==",
      "Y0dGeXc2cHVkR1Z6WlhNPQ==",
      "WlhobFkzWERwOE9qYnc9PQ==",
      "Y21WbVpYTERxbTVqYVdFPQ=="
    ]
  },
  "808": {
    "nivel": 8,
    "titulo": "DRY (Don't Repeat Yourself)",
    "enunciado": "Explique o conceito de DRY na programação e como as funções ajudam a evitar a repetição de código.",
    "min_chars": 47,
    "keywords": [
      "Y21Wd1pYUnB3NmZEbzI4PQ==",
      "Y21WMWMyOD0=",
      "Y0dGa2NzT2pidz09",
      "YldGdWRYUmxic09udzZOdg==",
      "YkdsdGNHVjZZUT09"
    ]
  },
  "809": {
    "nivel": 8,
    "titulo": "Bibliotecas (Import)",
    "enunciado": "Qual a relação entre funções e o comando `import`? O que estamos trazendo para o nosso código?",
    "min_chars": 66,
    "keywords": [
      "YmNPelpIVnNiM009",
      "WW1saWJHbHZkR1ZqWVhNPQ==",
      "Wm1WeWNtRnRaVzUwWVhNZ2NISnZiblJoY3c9PQ==",
      "Y21WMWMyOD0=",
      "Wm5WdVkzUnBiMjVoYkdsMGFXVno="
    ]
  }
};
