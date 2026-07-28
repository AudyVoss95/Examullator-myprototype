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
      "físico",
      "programas",
      "componentes",
      "sistema"
    ]
  },
  "002": {
    "nivel": 0,
    "titulo": "Comandos Ctrl+C, V e X",
    "enunciado": "Explique para que servem os comandos Ctrl+C, Ctrl+V e Ctrl+X e descreva a diferença entre 'copiar' e 'recortar'.",
    "min_chars": 42,
    "keywords": [
      "copiar",
      "colar",
      "recortar",
      "duplicar",
      "mover"
    ]
  },
  "003": {
    "nivel": 0,
    "titulo": "Bloco de Notas (.txt)",
    "enunciado": "O Bloco de Notas é um editor de 'texto simples'. Qual a principal característica de um arquivo .txt e por que ele é muito usado por programadores?",
    "min_chars": 57,
    "bloquearVoltar": true,
    "keywords": [
      "texto simples",
      "formatação",
      "leve",
      "código",
      "compatibilidade"
    ]
  },
  "004": {
    "nivel": 0,
    "titulo": "VS Code vs Bloco de Notas",
    "enunciado": "O VS Code possui recursos como cores no texto (syntax highlighting). Por que isso é uma vantagem em relação ao Bloco de Notas para quem está programando?",
    "min_chars": 55,
    "keywords": [
      "destaque",
      "sintaxe",
      "produtividade",
      "visualização",
      "erros"
    ]
  },
  "005": {
    "nivel": 0,
    "titulo": "Salvar Arquivos (Ctrl+S)",
    "enunciado": "Por que é importante usar o comando Ctrl+S frequentemente ao trabalhar no VS Code? O que acontece se o computador desligar e o arquivo não estiver salvo?",
    "min_chars": 49,
    "keywords": [
      "salvar",
      "persistência",
      "memória",
      "perda",
      "progresso"
    ]
  },
  "006": {
    "nivel": 0,
    "titulo": "Atalho Alt + Tab",
    "enunciado": "Para que serve o comando de teclado 'Alt + Tab' no Windows e em que situação ele ajuda na produtividade do desenvolvedor?",
    "min_chars": 54,
    "keywords": [
      "alternar",
      "janelas",
      "programas",
      "navegação",
      "multitarefa"
    ]
  },
  "007": {
    "nivel": 0,
    "titulo": "Nuvem e Backup",
    "enunciado": "O que significa salvar um arquivo 'na nuvem' (ex: Google Drive)? Qual a principal vantagem em relação ao pendrive?",
    "min_chars": 58,
    "keywords": [
      "internet",
      "armazenamento",
      "acesso remoto",
      "segurança",
      "backup"
    ]
  },
  "008": {
    "nivel": 0,
    "titulo": "Criação de Pastas",
    "enunciado": "Descreva o passo a passo para criar uma nova pasta no Windows e explique por que é importante nomeá-la corretamente.",
    "min_chars": 48,
    "keywords": [
      "botão direito",
      "novo",
      "pasta",
      "nomear",
      "organização"
    ]
  },
  "009": {
    "nivel": 0,
    "titulo": "Renomear e Organizar",
    "enunciado": "Como você renomeia um arquivo ou pasta? Por que não devemos usar nomes como 'trabalho1', 'trabalho final', 'agora vai'?",
    "min_chars": 57,
    "keywords": [
      "renomear",
      "identificação",
      "clareza",
      "organização",
      "contexto"
    ]
  },
  "101": {
    "nivel": 1,
    "titulo": "O que é Algoritmo",
    "enunciado": "Defina o conceito de algoritmo utilizando um exemplo do cotidiano (como uma receita ou trocar um pneu).",
    "min_chars": 49,
    "keywords": [
      "passos",
      "sequência",
      "instruções",
      "lógica",
      "objetivo"
    ]
  },
  "102": {
    "nivel": 1,
    "titulo": "Fluxogramas",
    "enunciado": "Qual a utilidade de um fluxograma antes de começar a escrever o código? O que o símbolo de 'losango' representa?",
    "min_chars": 46,
    "keywords": [
      "visual",
      "planejamento",
      "decisão",
      "fluxo",
      "lógica"
    ]
  },
  "103": {
    "nivel": 1,
    "titulo": "Entrada e Saída",
    "enunciado": "Em lógica, o que representam os conceitos de Entrada, Processamento e Saída de dados?",
    "min_chars": 52,
    "keywords": [
      "dados",
      "informação",
      "resultado",
      "transformação",
      "fluxo"
    ]
  },
  "104": {
    "nivel": 1,
    "titulo": "Pseudocódigo",
    "enunciado": "Por que usamos pseudocódigo (Portugol) antes de passar para uma linguagem como Python?",
    "min_chars": 55,
    "keywords": [
      "lógica",
      "entendimento",
      "linguagem",
      "estrutura",
      "transição"
    ]
  },
  "105": {
    "nivel": 1,
    "titulo": "Símbolo de Processo",
    "enunciado": "No fluxograma, o retângulo representa um processo. Dê dois exemplos de ações que seriam colocadas dentro de um retângulo.",
    "min_chars": 50,
    "keywords": [
      "ação",
      "cálculo",
      "atribuição",
      "tarefa",
      "processamento"
    ]
  },
  "106": {
    "nivel": 1,
    "titulo": "Símbolo de Início/Fim",
    "enunciado": "Por que todo fluxograma deve obrigatoriamente ter um símbolo de Início e um de Fim?",
    "min_chars": 43,
    "keywords": [
      "limite",
      "entrada",
      "saída",
      "término",
      "execução"
    ]
  },
  "107": {
    "nivel": 1,
    "titulo": "Automação no Cotidiano",
    "enunciado": "Cite um exemplo de um processo automático no seu dia a dia que segue um algoritmo (ex: semáforo). Explique a lógica.",
    "min_chars": 49,
    "keywords": [
      "sequência",
      "sensores",
      "tempo",
      "decisão",
      "automático"
    ]
  },
  "108": {
    "nivel": 1,
    "titulo": "Ordem de Execução",
    "enunciado": "O que acontece se invertermos a ordem de dois passos em um algoritmo de 'fazer café'? Como isso afeta o resultado?",
    "min_chars": 44,
    "keywords": [
      "sequência",
      "erro",
      "lógica",
      "passos",
      "resultado"
    ]
  },
  "109": {
    "nivel": 1,
    "titulo": "Clareza de Instruções",
    "enunciado": "Por que um algoritmo não pode ter instruções ambíguas (duvidosas)? O que acontece se o computador não entender um passo?",
    "min_chars": 51,
    "keywords": [
      "precisão",
      "clareza",
      "interpretação",
      "erro",
      "instrução"
    ]
  },
  "201": {
    "nivel": 2,
    "titulo": "Python Interativo",
    "enunciado": "O que acontece quando você digita apenas 'python' no terminal? Como você faz para sair desse modo?",
    "min_chars": 52,
    "keywords": [
      "modo interativo",
      "comandos",
      "testar",
      "exit()",
      "terminal"
    ]
  },
  "202": {
    "nivel": 2,
    "titulo": "Erros de Sintaxe",
    "enunciado": "O que o computador faz quando encontra um erro de sintaxe no seu código? Ele executa o resto do programa?",
    "min_chars": 56,
    "keywords": [
      "interrupção",
      "gramática",
      "interpretação",
      "falha",
      "correção"
    ]
  },
  "203": {
    "nivel": 2,
    "titulo": "Extensão .py",
    "enunciado": "Por que os arquivos de código Python devem terminar com a extensão '.py'? O que o sistema operacional faz com essa informação?",
    "min_chars": 59,
    "keywords": [
      "extensão",
      "identificação",
      "interpretador",
      "formato",
      "execução"
    ]
  },
  "204": {
    "nivel": 2,
    "titulo": "Função Print",
    "enunciado": "Para que serve o comando `print()`? O que acontece se você esquecer de colocar as aspas em volta de um texto dentro do print?",
    "min_chars": 35,
    "keywords": [
      "exibir",
      "tela",
      "erro",
      "aspas",
      "string"
    ]
  },
  "205": {
    "nivel": 2,
    "titulo": "Comentários (#)",
    "enunciado": "Por que usamos o símbolo `#` no código? O computador lê o que está escrito depois desse símbolo?",
    "min_chars": 53,
    "keywords": [
      "documentação",
      "explicação",
      "ignorar",
      "leitura",
      "clareza"
    ]
  },
  "206": {
    "nivel": 2,
    "titulo": "Diferença Python 2 e 3",
    "enunciado": "Embora usemos o Python 3, por que é importante saber que versões antigas existem? Cite uma diferença básica (ex: print).",
    "min_chars": 52,
    "keywords": [
      "compatibilidade",
      "evolução",
      "versão",
      "sintaxe",
      "legado"
    ]
  },
  "207": {
    "nivel": 2,
    "titulo": "Case Sensitive",
    "enunciado": "Python é 'Case Sensitive'. O que isso significa se você criar uma variável chamada `Nome` e tentar usar `nome`?",
    "min_chars": 51,
    "keywords": [
      "maiúsculas",
      "minúsculas",
      "diferença",
      "erro",
      "variável"
    ]
  },
  "208": {
    "nivel": 2,
    "titulo": "O Interpretador",
    "enunciado": "Explique brevemente o papel do 'Interpretador Python' na execução de um arquivo de código.",
    "min_chars": 52,
    "keywords": [
      "tradução",
      "execução",
      "linha por linha",
      "máquina",
      "código"
    ]
  },
  "209": {
    "nivel": 2,
    "titulo": "Identação (Espaçamento)",
    "enunciado": "Diferente de outras linguagens, o Python usa espaços para organizar blocos. O que acontece se o alinhamento estiver errado?",
    "min_chars": 48,
    "keywords": [
      "estrutura",
      "identação",
      "erro",
      "bloco",
      "organização"
    ]
  },
  "301": {
    "nivel": 3,
    "titulo": "Tipagem Dinâmica",
    "enunciado": "Em Python, não precisamos dizer que uma variável é 'inteira' ao criá-la. Explique como o Python descobre o tipo do dado.",
    "min_chars": 44,
    "keywords": [
      "atribuição",
      "valor",
      "dinâmico",
      "tipo",
      "memória"
    ]
  },
  "302": {
    "nivel": 3,
    "titulo": "Input e String",
    "enunciado": "Por que o comando `input()` sempre retorna um texto (str), mesmo que o usuário digite um número?",
    "min_chars": 48,
    "keywords": [
      "entrada",
      "padrão",
      "conversão",
      "caractere",
      "teclado"
    ]
  },
  "303": {
    "nivel": 3,
    "titulo": "Inteiro vs Float",
    "enunciado": "Qual a diferença técnica entre o tipo `int` e o tipo `float`? Dê um exemplo de quando usar cada um.",
    "min_chars": 52,
    "keywords": [
      "inteiro",
      "decimal",
      "casas decimais",
      "precisão",
      "números"
    ]
  },
  "304": {
    "nivel": 3,
    "titulo": "Booleano (bool)",
    "enunciado": "O que é o tipo de dado Booleano? Quais são os dois únicos valores que ele pode assumir?",
    "min_chars": 40,
    "keywords": [
      "True",
      "False",
      "lógico",
      "verdadeiro",
      "falso"
    ]
  },
  "305": {
    "nivel": 3,
    "titulo": "Nomes de Variáveis",
    "enunciado": "Quais são as regras para dar nome a uma variável em Python? (Pode começar com número? Pode ter espaço?)",
    "min_chars": 48,
    "keywords": [
      "regras",
      "início",
      "caracteres",
      "espaço",
      "sublinhado"
    ]
  },
  "306": {
    "nivel": 3,
    "titulo": "Função Type()",
    "enunciado": "Para que serve o comando `type()`? Dê um exemplo de como ele ajudaria a descobrir um erro no código.",
    "min_chars": 53,
    "keywords": [
      "identificar",
      "tipo",
      "depuração",
      "verificação",
      "variável"
    ]
  },
  "307": {
    "nivel": 3,
    "titulo": "Conversão (Casting)",
    "enunciado": "Como transformamos um texto \"10\" em um número real 10.0? Use o nome da função correta na explicação.",
    "min_chars": 41,
    "keywords": [
      "float()",
      "conversão",
      "casting",
      "tipo",
      "real"
    ]
  },
  "308": {
    "nivel": 3,
    "titulo": "Variável vs Constante",
    "enunciado": "Embora o Python não tenha 'constantes' fixas por padrão, qual a diferença conceitual entre uma variável e uma constante?",
    "min_chars": 56,
    "keywords": [
      "alteração",
      "valor fixo",
      "semântica",
      "padrão",
      "armazenamento"
    ]
  },
  "309": {
    "nivel": 3,
    "titulo": "Concatenação",
    "enunciado": "O que acontece quando usamos o sinal de `+` entre duas Strings? Como isso é diferente de usar o `+` com números?",
    "min_chars": 39,
    "keywords": [
      "juntar",
      "somar",
      "texto",
      "tipos",
      "operador"
    ]
  },
  "401": {
    "nivel": 4,
    "titulo": "Identação no IF",
    "enunciado": "Qual a importância do 'espaço' (Tab) logo abaixo de um comando `if`? O que acontece se esquecermos dele?",
    "min_chars": 43,
    "keywords": [
      "bloco",
      "recuo",
      "erro",
      "estrutura",
      "hierarquia"
    ]
  },
  "402": {
    "nivel": 4,
    "titulo": "Operador de Módulo (%)",
    "enunciado": "Explique como o operador `%` (resto da divisão) pode ser usado para descobrir se um número é Par ou Ímpar.",
    "min_chars": 44,
    "keywords": [
      "resto",
      "divisão",
      "zero",
      "comparação",
      "paridade"
    ]
  },
  "403": {
    "nivel": 4,
    "titulo": "Operador de Igualdade (==)",
    "enunciado": "Por que usamos `==` para comparar valores e não apenas `=`? Qual a função do `=` sozinho?",
    "min_chars": 51,
    "keywords": [
      "comparação",
      "atribuição",
      "igualdade",
      "erro",
      "operador"
    ]
  },
  "404": {
    "nivel": 4,
    "titulo": "Função do ELIF",
    "enunciado": "Em uma estrutura de decisão com 5 opções diferentes, por que usar `elif` é melhor do que usar vários `if` seguidos?",
    "min_chars": 48,
    "keywords": [
      "eficiência",
      "exclusivo",
      "ordem",
      "caminhos",
      "lógica"
    ]
  },
  "405": {
    "nivel": 4,
    "titulo": "Operador lógico AND",
    "enunciado": "Quando usamos o `and` em uma condição? O que deve acontecer com as duas partes para o resultado ser Verdadeiro?",
    "min_chars": 48,
    "keywords": [
      "ambos",
      "verdadeiro",
      "conjunção",
      "condição",
      "lógica"
    ]
  },
  "406": {
    "nivel": 4,
    "titulo": "Operador lógico OR",
    "enunciado": "Explique o funcionamento do `or`. Basta uma condição ser verdadeira para o bloco ser executado?",
    "min_chars": 50,
    "keywords": [
      "ou",
      "pelo menos um",
      "verdadeiro",
      "alternativa",
      "lógica"
    ]
  },
  "407": {
    "nivel": 4,
    "titulo": "O papel do ELSE",
    "enunciado": "O comando `else` precisa de uma condição (ex: `else x > 10`)? Explique quando o bloco do `else` é executado.",
    "min_chars": 48,
    "keywords": [
      "padrão",
      "negação",
      "contrário",
      "opcional",
      "execução"
    ]
  },
  "408": {
    "nivel": 4,
    "titulo": "Valores de Borda",
    "enunciado": "Em um programa que aprova alunos com nota >= 6.0, por que a nota 6.0 é chamada de 'valor de borda'?",
    "min_chars": 51,
    "keywords": [
      "limite",
      "teste",
      "comparação",
      "precisão",
      "erro de lógica"
    ]
  },
  "409": {
    "nivel": 4,
    "titulo": "Operador Diferente (!=)",
    "enunciado": "Como verificamos se o nome de um usuário **não** é 'admin'? Explique o uso do operador `!=`.",
    "min_chars": 50,
    "keywords": [
      "diferente",
      "negação",
      "comparação",
      "operador",
      "lógica"
    ]
  },
  "501": {
    "nivel": 5,
    "titulo": "Loop Infinito",
    "enunciado": "O que causa um loop infinito em um comando `while`? Como podemos garantir que o loop um dia termine?",
    "min_chars": 49,
    "keywords": [
      "condição",
      "parada",
      "incremento",
      "atualização",
      "erro"
    ]
  },
  "502": {
    "nivel": 5,
    "titulo": "Função Range",
    "enunciado": "No comando `for i in range(5)`, quais são os valores que a variável `i` assumirá? Explique o início e o fim.",
    "min_chars": 50,
    "keywords": [
      "sequência",
      "zero",
      "incremento",
      "iteração",
      "intervalo"
    ]
  },
  "503": {
    "nivel": 5,
    "titulo": "Variável Contadora",
    "enunciado": "Para que serve uma variável contadora (ex: `cont = cont + 1`) dentro de um loop `while`?",
    "min_chars": 50,
    "keywords": [
      "contagem",
      "controle",
      "incremento",
      "iteração",
      "limite"
    ]
  },
  "504": {
    "nivel": 5,
    "titulo": "Variável Acumuladora",
    "enunciado": "Qual a diferença entre um 'contador' e um 'acumulador' (ex: `soma = soma + preco`)?",
    "min_chars": 43,
    "keywords": [
      "total",
      "soma",
      "valores",
      "variável",
      "diferença"
    ]
  },
  "505": {
    "nivel": 5,
    "titulo": "For vs While",
    "enunciado": "Em que situação é melhor usar o `for` e em qual é melhor usar o `while`?",
    "min_chars": 56,
    "keywords": [
      "determinado",
      "indeterminado",
      "repetição",
      "escolha",
      "lógica"
    ]
  },
  "506": {
    "nivel": 5,
    "titulo": "Comando Break",
    "enunciado": "Para que serve o comando `break`? Ele encerra o programa inteiro ou apenas o loop atual?",
    "min_chars": 50,
    "keywords": [
      "interrupção",
      "saída",
      "loop",
      "encerramento",
      "controle"
    ]
  },
  "507": {
    "nivel": 5,
    "titulo": "Comando Continue",
    "enunciado": "Qual a diferença entre o `break` e o `continue` dentro de uma repetição?",
    "min_chars": 54,
    "keywords": [
      "pular",
      "interromper",
      "próxima iteração",
      "controle",
      "fluxo"
    ]
  },
  "508": {
    "nivel": 5,
    "titulo": "Range com Passo",
    "enunciado": "No comando `range(0, 10, 2)`, o que o número 2 representa? Qual será a sequência de números gerada?",
    "min_chars": 48,
    "keywords": [
      "passo",
      "salto",
      "intervalo",
      "sequência",
      "incremento"
    ]
  },
  "509": {
    "nivel": 5,
    "titulo": "Loops Aninhados",
    "enunciado": "O que acontece quando colocamos um `for` dentro de outro `for`? Dê um exemplo prático (ex: relógio).",
    "min_chars": 69,
    "keywords": [
      "repetição dupla",
      "horas e minutos",
      "coordenadas",
      "estrutura",
      "complexidade"
    ]
  },
  "601": {
    "nivel": 6,
    "titulo": "Listas vs Variáveis",
    "enunciado": "Qual a vantagem de usar uma Lista (`list`) em vez de criar 50 variáveis differentes (ex: nota1, nota2...)?",
    "min_chars": 51,
    "keywords": [
      "organização",
      "índice",
      "loop",
      "coleção",
      "flexibilidade"
    ]
  },
  "602": {
    "nivel": 6,
    "titulo": "Índices de Matriz",
    "enunciado": "Para acessar um valor em uma matriz, usamos dois colchetes `matriz[x][y]`. O que o primeiro e o segundo índice representam?",
    "min_chars": 51,
    "keywords": [
      "linha",
      "coluna",
      "coordenada",
      "bidimensional",
      "posição"
    ]
  },
  "603": {
    "nivel": 6,
    "titulo": "Index Out of Range",
    "enunciado": "O que causa o erro 'list index out of range'? Como evitar acessar um índice que não existe?",
    "min_chars": 44,
    "keywords": [
      "erro",
      "limite",
      "tamanho",
      "inexistente",
      "acesso"
    ]
  },
  "604": {
    "nivel": 6,
    "titulo": "Método Append()",
    "enunciado": "Para que serve o comando `.append()`? Onde o novo elemento é colocado na lista?",
    "min_chars": 44,
    "keywords": [
      "adicionar",
      "final",
      "elemento",
      "inserir",
      "lista"
    ]
  },
  "605": {
    "nivel": 6,
    "titulo": "Método Pop()",
    "enunciado": "Como removemos o último elemento de uma lista? Explique o funcionamento básico do `.pop()`.",
    "min_chars": 42,
    "keywords": [
      "remover",
      "excluir",
      "último",
      "retorno",
      "lista"
    ]
  },
  "606": {
    "nivel": 6,
    "titulo": "Percorrendo Listas",
    "enunciado": "Como usamos o `for` para imprimir todos os nomes de uma lista um por um?",
    "min_chars": 43,
    "keywords": [
      "iteração",
      "elemento",
      "lista",
      "exibição",
      "loop"
    ]
  },
  "607": {
    "nivel": 6,
    "titulo": "Função Len()",
    "enunciado": "O que a função `len()` nos diz sobre uma lista? Por que ela é útil em loops?",
    "min_chars": 49,
    "keywords": [
      "tamanho",
      "comprimento",
      "quantidade",
      "limite",
      "total"
    ]
  },
  "608": {
    "nivel": 6,
    "titulo": "Listas Vazias",
    "enunciado": "Por que às vezes começamos um programa criando uma lista vazia `lista = []`?",
    "min_chars": 63,
    "keywords": [
      "inicialização",
      "preenchimento",
      "dinâmico",
      "armazenamento",
      "futuro"
    ]
  },
  "609": {
    "nivel": 6,
    "titulo": "Matrizes no Real",
    "enunciado": "Dê um exemplo de dado do mundo real que se comporta como uma matriz (ex: cinema, excel, batalha naval).",
    "min_chars": 52,
    "keywords": [
      "linhas",
      "colunas",
      "grade",
      "bidimensional",
      "organização"
    ]
  },
  "701": {
    "nivel": 7,
    "titulo": "Precisão na Saída",
    "enunciado": "No cálculo de consumo (km/L), por que usamos f-strings para limitar as casas decimais? Como o excesso de números após a vírgula afeta a leitura do usuário?",
    "min_chars": 55,
    "keywords": [
      "f-string",
      "formatação",
      "clareza",
      "precisão",
      "visualização"
    ]
  },
  "702": {
    "nivel": 7,
    "titulo": "Prevenção de Falhas",
    "enunciado": "Na calculadora, por que é obrigatório verificar se o divisor é zero antes da conta? O que é um \"crash\" de programa e como evitá-lo?",
    "min_chars": 57,
    "keywords": [
      "divisão por zero",
      "validação",
      "erro",
      "interrupção",
      "segurança"
    ]
  },
  "703": {
    "nivel": 7,
    "titulo": "Feedback Detalhado",
    "enunciado": "Por que um sistema de aprovação deve informar o motivo exato da reprovação (nota vs. frequência) em vez de apenas dizer \"Reprovado\"?",
    "min_chars": 63,
    "keywords": [
      "experiência do usuário",
      "clareza",
      "feedback",
      "informação",
      "contexto"
    ]
  },
  "704": {
    "nivel": 7,
    "titulo": "Lógica de Descontos",
    "enunciado": "No simulador de loja, qual a diferença lógica entre aplicar um desconto de 15% direto e aplicar 10% seguido de 5% sobre o novo valor?",
    "min_chars": 55,
    "keywords": [
      "sequência",
      "cálculo",
      "subtotal",
      "porcentagem",
      "matemática"
    ]
  },
  "705": {
    "nivel": 7,
    "titulo": "Tipagem e Divisão",
    "enunciado": "Por que convertemos o valor da conta para `float` e o número de pessoas para `int`? O que aconteceria se usássemos `int` para o valor da conta?",
    "min_chars": 50,
    "keywords": [
      "tipos de dados",
      "precisão",
      "inteiro",
      "real",
      "conversão"
    ]
  },
  "706": {
    "nivel": 7,
    "titulo": "Hierarquia no Elif",
    "enunciado": "No classificador de notas, por que a ordem das condições (ex: >= 6.0 antes de >= 5.0) é crucial para o resultado correto?",
    "min_chars": 50,
    "keywords": [
      "ordem",
      "exclusão",
      "hierarquia",
      "lógica",
      "verificação"
    ]
  },
  "707": {
    "nivel": 7,
    "titulo": "Operadores Combinados",
    "enunciado": "No verificador de acesso, como os operadores `and` e `or` permitem diferenciar um convidado comum de um VIP com ingresso?",
    "min_chars": 51,
    "keywords": [
      "lógica",
      "combinação",
      "condições",
      "prioridade",
      "acesso"
    ]
  },
  "708": {
    "nivel": 7,
    "titulo": "Aleatoriedade (Random)",
    "enunciado": "Qual a função do `import random` no jogo Pedra, Papel e Tesoura? Como a falta de aleatoriedade afetaria a experiência do jogador?",
    "min_chars": 54,
    "keywords": [
      "módulo",
      "sorteio",
      "imprevisibilidade",
      "biblioteca",
      "jogo"
    ]
  },
  "709": {
    "nivel": 7,
    "titulo": "Higienização de Dados",
    "enunciado": "Por que usamos métodos como `.lower()` nas entradas de texto do usuário? Como isso evita que o programa falhe por causa de letras maiúsculas?",
    "min_chars": 49,
    "keywords": [
      "padronização",
      "tratamento",
      "string",
      "erro",
      "entrada"
    ]
  },
  "801": {
    "nivel": 8,
    "titulo": "Escopo de Variáveis",
    "enunciado": "Uma variável criada dentro de uma função pode ser usada fora dela? Explique o conceito de variáveis locais.",
    "min_chars": 45,
    "keywords": [
      "escopo",
      "local",
      "global",
      "visibilidade",
      "função"
    ]
  },
  "802": {
    "nivel": 8,
    "titulo": "Parâmetros",
    "enunciado": "Para que servem os parâmetros de uma função? Dê um exemplo de uma função que recebe dados para processar.",
    "min_chars": 58,
    "keywords": [
      "entrada",
      "argumentos",
      "flexibilidade",
      "processamento",
      "reuso"
    ]
  },
  "803": {
    "nivel": 8,
    "titulo": "Return vs Print",
    "enunciado": "Qual a diferença entre uma função que dá um `print()` e uma função que dá um `return`?",
    "min_chars": 46,
    "keywords": [
      "resultado",
      "exibir",
      "devolver",
      "variável",
      "saída"
    ]
  },
  "804": {
    "nivel": 8,
    "titulo": "Vantagem de Modularizar",
    "enunciado": "Por que dividimos um programa grande em várias funções pequenas? Cite duas vantagens.",
    "min_chars": 55,
    "keywords": [
      "organização",
      "reuso",
      "manutenção",
      "legibilidade",
      "divisão"
    ]
  },
  "805": {
    "nivel": 8,
    "titulo": "Docstrings",
    "enunciado": "O que é uma docstring (texto entre três aspas) logo abaixo da definição da função? Para que serve?",
    "min_chars": 57,
    "keywords": [
      "documentação",
      "ajuda",
      "explicação",
      "desenvolvedor",
      "clareza"
    ]
  },
  "806": {
    "nivel": 8,
    "titulo": "Parâmetros Opcionais",
    "enunciado": "Como definimos um valor padrão para um parâmetro (ex: `f(x=10)`)? O que acontece se o usuário não enviar o valor?",
    "min_chars": 53,
    "keywords": [
      "padrão",
      "default",
      "opcional",
      "argumento",
      "flexibilidade"
    ]
  },
  "807": {
    "nivel": 8,
    "titulo": "Chamar uma Função",
    "enunciado": "Como você 'executa' uma função que já foi definida? O que acontece se você esquecer dos parênteses `()`?",
    "min_chars": 54,
    "keywords": [
      "chamada",
      "invocação",
      "parênteses",
      "execução",
      "referência"
    ]
  },
  "808": {
    "nivel": 8,
    "titulo": "DRY (Don't Repeat Yourself)",
    "enunciado": "Explique o conceito de DRY na programação e como as funções ajudam a evitar a repetição de código.",
    "min_chars": 47,
    "keywords": [
      "repetição",
      "reuso",
      "padrão",
      "manutenção",
      "limpeza"
    ]
  },
  "809": {
    "nivel": 8,
    "titulo": "Bibliotecas (Import)",
    "enunciado": "Qual a relação entre funções e o comando `import`? O que estamos trazendo para o nosso código?",
    "min_chars": 66,
    "keywords": [
      "módulos",
      "bibliotecas",
      "ferramentas prontas",
      "reuso",
      "functionalities"
    ]
  }
};
