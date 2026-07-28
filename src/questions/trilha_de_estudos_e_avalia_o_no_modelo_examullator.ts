export interface TextoPreparatorio {
  titulo: string;
  conteudo: string;
  exemploCodigo?: string;
}

export interface QuestaoExamullator {
  textosPreparatorios: TextoPreparatorio[];
  disciplina: string;
  nivel: 0 | 1 | 2; // 0 = Iniciante | 1 = Intermediário | 2 = Avançado
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
  resumoCurto: string;
  bloquearVoltar: boolean;
}

export const bancoQuestoesExamullator: Record<string, QuestaoExamullator> = {
  // ===========================================================================
  // 📚 TRILHA DE ESTUDOS - MÓDULOS DE FIXAÇÃO GUIADA (IDs 101 a 116)
  // TODAS AS QUESTÕES DE FIXAÇÃO COM "bloquearVoltar": false
  // ===========================================================================

  "101": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Operação Básica do Sistema e Atalhos do Teclado",
        "conteudo": "Antes de programar, o estudante deve dominar os comandos fundamentais do sistema operacional. Comandos como Ctrl+C (copiar), Ctrl+X (recortar) e Ctrl+V (colar) manipulam itens na área de transferência. Contudo, em ambientes de execução de terminal, o atalho Ctrl+C tem uma função especial: ele força a interrupção do processo ou script em execução."
      },
      {
        "titulo": "Conceito 2: Ação do Atalho Ctrl+C em Ambientes Distintos",
        "conteudo": "Quando pressionado sobre um texto selecionado em um editor, o Ctrl+C apenas duplica a informação na área de transferência. Já quando pressionado dentro do terminal interativo do Python ou prompt de comando enquanto um script está rodando, o Ctrl+C envia um sinal de interrupção (KeyboardInterrupt) para interromper o programa travado."
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Módulo 0.1: Atalhos de Teclado e Interrupção no Terminal",
    "enunciado": "Explique qual é o duplo comportamento do atalho Ctrl+C quando utilizado em uma seleção de texto comum versus em um terminal de execução Python travado. Por que essa função de interrupção é essencial durante o desenvolvimento de software?",
    "min_chars": 50,
    "keywords": ["terminal", "interrupção", "área de transferência", "KeyboardInterrupt", "copiar"],
    "resumoCurto": "Ctrl+C copia textos ou interrompe processos travados no terminal enviando sinal de interrupção de execução.",
    "bloquearVoltar": false
  },

  "102": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Manipulação e Convenções de Nomes de Arquivos (.py)",
        "conteudo": "Arquivos de código Python utilizam obrigatoriamente a extensão '.py'. Para evitar falhas de interpretação pelo sistema operacional e por interpretadores de comandos, deve-se evitar o uso de acentos, caracteres especiais e espaços nos nomes de arquivos."
      },
      {
        "titulo": "Conceito 2: Boas Práticas e Padrão Snake Case em Nomes de Arquivos",
        "conteudo": "Em vez de usar espaços ou acentos, utiliza-se o caractere sublinhado (_) para separar palavras. Nomes padronizados garantem que os scripts possam ser executados sem erros em servidores de diferentes sistemas operacionais (como Linux e Windows).",
        "exemploCodigo": "# Nomenclatura correta de arquivo:\nmedia_notas_aluno.py\n\n# Evite nomes como:\nmédia final de alunos!.py"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Módulo 0.2: Nomenclatura e Organização de Arquivos Python",
    "enunciado": "Justifique por que não devemos utilizar acentos, caracteres especiais ou espaços em branco nos nomes de arquivos com extensão .py. Dê um exemplo de nome de arquivo adequado e um incorreto.",
    "min_chars": 50,
    "keywords": ["extensão", "convenção", "acentos", "espaços", "snake_case"],
    "resumoCurto": "Nomes de arquivos .py devem evitar acentos e espaços para prevenir erros do interpretador e problemas de compatibilidade.",
    "bloquearVoltar": false
  },

  "103": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Definindo Algoritmos e Suas Propriedades",
        "conteudo": "Um algoritmo é uma sequência finita de instruções claras e não ambíguas que resolve um problema específico. Todo algoritmo deve possuir três características essenciais: ser Finito (ter fim), Definido (sem ambiguidades) e Eficaz (produzir o resultado esperado de forma otimizada)."
      },
      {
        "titulo": "Conceito 2: Anatomia Fundamental de um Algoritmo",
        "conteudo": "Todo algoritmo estrutura-se em três etapas lógicas: 1. Entrada (fornecimento dos dados ou matérias-primas); 2. Processamento (transformação e execução dos passos ordenados); 3. Saída (apresentação do resultado obtido)."
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Módulo 1.1: Conceito, Propriedades e Anatomia dos Algoritmos",
    "enunciado": "Cite e explique as três propriedades formais obrigatórias de todo algoritmo (Finito, Definido e Eficaz). Em seguida, descreva brevemente as três etapas da anatomia de um algoritmo.",
    "min_chars": 50,
    "keywords": ["finito", "definido", "eficaz", "entrada", "processamento", "saída"],
    "resumoCurto": "Algoritmos devem ter fim (finito), ser precisos (definido) e funcionar (eficaz), atuando no ciclo Entrada-Processamento-Saída.",
    "bloquearVoltar": false
  },

  "104": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Mapeamento Visual com Fluxogramas",
        "conteudo": "Os fluxogramas utilizam formas geométricas padronizadas para representar visualmente o fluxo de execução. A Oval representa início e fim (terminal); o Retângulo representa operações internas de processamento; o Losango representa verificações condicionais (Decisão Sim/Não); e o Paralelogramo representa entrada/saída de dados."
      },
      {
        "titulo": "Conceito 2: Regras de Construção Top-Down",
        "conteudo": "A leitura de um fluxograma deve seguir o padrão top-down (de cima para baixo, da esquerda para a direita). As decisões em losângulos devem obrigatoriamente ter duas saídas rotuladas (Sim/Não ou Verdadeiro/Falso)."
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Módulo 1.2: Mapeamento Visual por Fluxogramas Padronizados",
    "enunciado": "Descreva qual símbolo geométrico de fluxograma você utilizaria para checar a instrução 'A nota do aluno é maior ou igual a 6.0?'. Explique a função das formas geométrica Oval e Retângulo na mesma representação.",
    "min_chars": 50,
    "keywords": ["losango", "decisão", "oval", "retângulo", "fluxograma"],
    "resumoCurto": "O losango representa perguntas/decisões, a oval marca o terminal (início/fim) e o retângulo representa processamentos.",
    "bloquearVoltar": false
  },

  "105": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Tipos Primitivos de Dados em Python",
        "conteudo": "Em Python, as variáveis armazenam informações na memória divididas em quatro tipos primitivos principais: 'str' (texto delimitado por aspas), 'int' (números inteiros), 'float' (números reais com ponto decimal) e 'bool' (valores lógicos True ou False)."
      },
      {
        "titulo": "Conceito 2: Alocação em Memória e Sobrescrita",
        "conteudo": "Uma variável é uma posição nomeada na memória RAM. Ao atribuir um novo valor a uma variável existente usando o operador '=', o valor antigo é destruído e substituído na memória.",
        "exemploCodigo": "pontos = 10   # Tipo int armazenando 10\npontos = 15   # O valor 10 é destruído e substituído por 15"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Módulo 2.1: Variáveis, Alocação em Memória e Tipos Primitivos",
    "enunciado": "Diferencie os quatro tipos primitivos de dados em Python (str, int, float, bool). O que acontece com o valor armazenado em uma variável quando realizamos uma nova atribuição no mesmo identificador?",
    "min_chars": 50,
    "keywords": ["str", "int", "float", "bool", "sobrescrita", "memória"],
    "resumoCurto": "Os tipos dividem-se em texto (str), inteiro (int), decimal (float) e lógico (bool); novas atribuições sobrescrevem o valor na memória.",
    "bloquearVoltar": false
  },

  "106": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Entrada de Dados com input() e Retorno Padrão",
        "conteudo": "A função nativa input() captura dados digitados pelo usuário no teclado. Por padrão, o retorno do input() é sempre do tipo texto (str), independentemente de o usuário ter digitado numerais."
      },
      {
        "titulo": "Conceito 2: Conversão de Tipos (Coerção) e Formatação em f-strings",
        "conteudo": "Para realizar cálculos aritméticos com entradas do usuário, é obrigatório realizar a coerção de tipos (type casting) utilizando int() ou float(). Para exibir os resultados formatados, utilizam-se f-strings.",
        "exemploCodigo": "# Conversão e exibição formatada:\nidade = int(input(\"Digite sua idade: \"))\npreco = float(input(\"Digite o valor: \"))\nprint(f\"Idade: {idade} | Preço: R$ {preco:.2f}\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Módulo 2.2: Captura com input(), Coerção de Tipos e f-strings",
    "enunciado": "Qual é o tipo retornado por padrão pela função input()? O que acontece se tentarmos realizar uma operação matemática direta com essa entrada sem conversão? Escreva o código correto para ler uma nota decimal e exibi-la formatada.",
    "min_chars": 50,
    "keywords": ["str", "string", "coerção", "TypeError", "float", "f-string"],
    "resumoCurto": "input() retorna str; somar número a texto gera TypeError. É preciso usar float(input()) e f-strings para formatação.",
    "bloquearVoltar": false
  },

  "107": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Operadores Aritméticos e Módulo (%)",
        "conteudo": "Além das operações matematicamente comuns (+, -, *, /), o Python dispõe do operador de módulo (%), que calcula o resto exato da divisão inteira entre dois números. Por exemplo, 10 % 2 resulta em 0, indicando divisão exata."
      },
      {
        "titulo": "Conceito 2: Aplicação Prática para Checagem de Paridade",
        "conteudo": "Como todo número par é divisível por 2 com resto 0, a expressão lógica (numero % 2 == 0) permite determinar com precisão absoluta se um valor numérico é par (True) ou ímpar (False).",
        "exemploCodigo": "num = int(input(\"Número: \"))\nif num % 2 == 0:\n    print(\"Número Par\")\nelse:\n    print(\"Número Ímpar\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Módulo 3.1: Operadores Aritméticos e Módulo na Checagem de Paridade",
    "enunciado": "Explique o funcionamento do operador de módulo (%) em Python. Como a expressão (numero % 2 == 0) determina logicamente se um número informado pelo usuário é par ou ímpar?",
    "min_chars": 50,
    "keywords": ["módulo", "resto", "divisão", "paridade", "par", "ímpar"],
    "resumoCurto": "O operador % calcula o resto da divisão; se numero % 2 for 0, o número é Par, do contrário é Ímpar.",
    "bloquearVoltar": false
  },

  "108": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Regras de Precedência Matemática Operacional",
        "conteudo": "As expressões aritméticas em linguagens de programação seguem a ordem da matemática tradicional: multiplicações (*), divisões (/) e módulos (%) são resolvidos antes da adição (+) e da subtração (-)."
      },
      {
        "titulo": "Conceito 2: Alteração de Prioridade com Parênteses",
        "conteudo": "O uso de parênteses () permite forçar a execução prioritária de somas e subtrações. Um erro clássico em cálculo de médias ocorre ao omitir parênteses, fazendo com que apenas a última nota seja dividida.",
        "exemploCodigo": "# Incorreto (divide apenas nota2):\nmedia_errada = nota1 + nota2 / 2\n\n# Correto (soma primeiro):\nmedia_correta = (nota1 + nota2) / 2"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Módulo 3.2: Precedência Aritmética e Uso de Parênteses",
    "enunciado": "Qual erro de lógica ocorre na instrução 'media = nota1 + nota2 / 2'? Explique a ordem correta de avaliação das operações pelo computador e reescreva a expressão corrigida.",
    "min_chars": 50,
    "keywords": ["precedência", "divisão", "soma", "parênteses", "média"],
    "resumoCurto": "A divisão tem prioridade sobre a soma; é necessário usar parênteses (nota1 + nota2) / 2 para calcular a média corretamente.",
    "bloquearVoltar": false
  },

  "109": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Operadores Relacionais e Sintaxe do if/else",
        "conteudo": "As decisões no código são construídas com os operadores relacionais: '>' (maior), '<' (menor), '>=' (maior ou igual), '<=' (menor ou igual), '!=' (diferente) e '==' (igual a). É vital distinguir '=' (atribuição) de '==' (comparação de igualdade)."
      },
      {
        "titulo": "Conceito 2: Indentação Obrigatória no Bloco Condicional",
        "conteudo": "Em Python, o bloco de código pertencente às cláusulas if ou else deve ser recuado obrigatoriamente (indentado com 4 espaços ou tabulação). Se a condição do if for False, seu bloco é ignorado e o fluxo salta para o else.",
        "exemploCodigo": "saldo = 100.0\nsaque = 150.0\nif saldo >= saque:\n    print(\"Saque efetuado\")\nelse:\n    print(\"Saldo insuficiente\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Módulo 4.1: Estrutura Condicional Simples e Composta (if / else)",
    "enunciado": "Diferencie formalmente o operador '=' do operador '=='. Explique o papel obrigatório da indentação no Python e o que acontece com a execução do programa quando a condição de um 'if' resulta em False.",
    "min_chars": 50,
    "keywords": ["atribuição", "comparação", "indentação", "ignorado", "else"],
    "resumoCurto": "'=' atribui valor e '==' compara igualdade; a indentação define os blocos do if/else e quando o if é False, o bloco é saltado.",
    "bloquearVoltar": false
  },

  "110": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Conceito de Valores de Borda (Limites)",
        "conteudo": "Valores de borda (edge cases) são dados localizados no limite exato de uma regra de negócio ou condição booleana. Em uma regra de aprovação com 'nota >= 6.0', os valores de borda são 5.9, 6.0 e 6.1."
      },
      {
        "titulo": "Conceito 2: Importância Prática nos Testes de Software",
        "conteudo": "Testar valores de borda durante o desenvolvimento é essencial para detectar trocas acidentais de operadores relacionais (por exemplo, usar erroneamente '>' no lugar de '>='), garantindo a corretude do software."
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Módulo 4.2: Importância do Teste em Valores de Borda",
    "enunciado": "O que são 'valores de borda' em uma estrutura condicional? Por que testar valores como 5.9, 6.0 e 6.1 é uma prática indispensável para validar uma condição do tipo 'if nota >= 6.0:'?",
    "min_chars": 50,
    "keywords": ["borda", "limite", "testes", "operador relacional", "validação"],
    "resumoCurto": "Valores de borda estão no limite das condições; testá-los garante que o operador relacional correto foi utilizado.",
    "bloquearVoltar": false
  },

  "111": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Operadores Lógicos and, or e not",
        "conteudo": "Para avaliar condições complexas, utilizam-se os operadores lógicos: 'and' (exige todas as condições Verdadeiras), 'or' (exige ao menos uma Verdadeira) e 'not' (inverte o valor booleano)."
      },
      {
        "titulo": "Conceito 2: Precedência Lógica e Uso de Parênteses",
        "conteudo": "Na ordem de avaliação padrão do Python, o operador 'and' possui prioridade superior sobre o 'or'. O uso de parênteses é crucial para evitar falhas de lógica quando os dois operadores são combinados.",
        "exemploCodigo": "# O parênteses garante a validação correta de perfis VIP ou Aluno com senha:\nif (usuario == \"admin\" or usuario == \"aluno\") and senha == \"1234\":\n    print(\"Acesso Liberado\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Módulo 5.1: Operadores Lógicos, Precedência e Uso de Parênteses",
    "enunciado": "Diferencie o comportamento dos operadores lógicos 'and' e 'or'. Por que a omissão de parênteses na expressão 'usuario == \"admin\" or usuario == \"aluno\" and senha == \"1234\"' representa um erro de lógica grave?",
    "min_chars": 50,
    "keywords": ["and", "or", "precedência", "parênteses", "erro de lógica"],
    "resumoCurto": "'and' exige tudo verdadeiro e 'or' apenas uma opção; o 'and' é avaliado antes do 'or', exigindo parênteses para agrupar as opções.",
    "bloquearVoltar": false
  },

  "112": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Decisão Múltipla com elif e Seleção de Bloco",
        "conteudo": "A estrutura 'elif' (else if) encadeia alternativas condicionais. O Python avalia a cadeia de cima para baixo: assim que encontra a PRIMEIRA condição Verdadeira, executa seu bloco e ignora todas as demais."
      },
      {
        "titulo": "Conceito 2: Importância da Ordem e Padronização com .lower()",
        "conteudo": "Devido à sensibilidade a caixas (case-sensitivity), deve-se aplicar .lower() em entradas de texto. Além disso, as condições no elif devem ser ordenadas da mais restritiva para a mais geral para evitar erros de classificação.",
        "exemploCodigo": "cor = input(\"Cor: \").lower()\nif cor == \"verde\":\n    print(\"Siga\")\nelif cor == \"amarelo\":\n    print(\"Atenção\")\nelse:\n    print(\"Pare\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Módulo 5.2: Estrutura elif, Ordem Sequencial e Padronização .lower()",
    "enunciado": "Explique o comportamento do Python ao encontrar a primeira condição True em uma cadeia 'if / elif / else'. Por que o método `.lower()` e a ordem correta das condições são indispensáveis nessa estrutura?",
    "min_chars": 50,
    "keywords": ["elif", "primeira", "ignora", "lower", "ordem"],
    "resumoCurto": "O Python executa o primeiro bloco True e descarta o restante; .lower() padroniza maiúsculas/minúsculas e a ordem correta evita erros lógicos.",
    "bloquearVoltar": false
  },

  "113": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Funcionamento do Laço while e Suas 3 Partes",
        "conteudo": "O laço while repete um bloco de código enquanto sua condição booleana permanecer True. Todo laço while exige 3 etapas: 1. Inicialização da variável antes do laço; 2. Condição de teste no cabeçalho; 3. Atualização da variável dentro do bloco."
      },
      {
        "titulo": "Conceito 2: A Causa Técnica do Loop Infinito",
        "conteudo": "Se a instrução de atualização da variável de controle for omitida dentro do laço, a condição testada nunca se tornará False, resultando em um 'loop infinito' que trava a execução.",
        "exemploCodigo": "# Exemplo de laço correto:\ni = 1               # 1. Inicialização\nwhile i <= 5:       # 2. Condição\n    print(i)\n    i += 1          # 3. Atualização (evita loop infinito)"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Módulo 6.1: Anatomia do Laço while e Suas Três Partes Obrigatórias",
    "enunciado": "Liste e explique as três partes obrigatórias que compõem a estrutura de um laço 'while'. O que causa um 'loop infinito' e qual atalho no terminal pode interrompê-lo?",
    "min_chars": 50,
    "keywords": ["while", "inicialização", "condição", "atualização", "loop infinito", "Ctrl+C"],
    "resumoCurto": "O while exige inicialização, condição e atualização; esquecer a atualização gera loop infinito, interrompível com Ctrl+C no terminal.",
    "bloquearVoltar": false
  },

  "114": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: O Papel da Variável Contadora",
        "conteudo": "Um Contador é uma variável incrementada por um valor passo fixo a cada iteração (ex: `i += 1`). Seu objetivo principal é registrar o número de voltas efetuadas pelo laço."
      },
      {
        "titulo": "Conceito 2: O Papel da Variável Acumuladora",
        "conteudo": "Um Acumulador é uma variável que soma valores variáveis a cada iteração (ex: `soma += nota`). Ele é utilizado para calcular totais, somatórios e médias acumuladas.",
        "exemploCodigo": "soma = 0.0          # Acumulador\ni = 1               # Contador\nwhile i <= 3:\n    nota = float(input(\"Nota: \"))\n    soma += nota    # Acumula valor variável\n    i += 1          # Incrementa passo fixo"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Módulo 6.2: Diferenciação Funcional entre Contadores e Acumuladores",
    "enunciado": "Diferencie funcionalmente uma variável Usada como Contador de outra utilizada como Acumulador em um laço de repetição. Dê um exemplo prático do incremento de cada uma delas.",
    "min_chars": 50,
    "keywords": ["contador", "acumulador", "passo fixo", "variável", "incremento"],
    "resumoCurto": "Contadores incrementam valores fixos (ex: i += 1) para contar iterações; acumuladores somam valores variáveis (ex: soma += nota).",
    "bloquearVoltar": false
  },

  "115": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Estratégia do Valor Sentinela e while True",
        "conteudo": "Quando a quantidade de repetições é desconhecida previamente, utiliza-se um 'valor sentinela' (um código de parada como 0 ou 'sair'). A estrutura 'while True' cria um laço contínuo interrompido ativamente por 'break'."
      },
      {
        "titulo": "Conceito 2: Posição Crítica da Checagem do break",
        "conteudo": "O teste da sentinela seguido de 'break' deve obrigatoriamente ser posicionado logo após a leitura do dado e ANTES de atualizar acumuladores e contadores, evitando que o valor de parada altere os cálculos.",
        "exemploCodigo": "total = 0\nwhile True:\n    num = int(input(\"Digite num (0 para sair): \"))\n    if num == 0:\n        break       # Interrompe ANTES de somar o 0\n    total += num"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Módulo 7.1: Leitura de Valor Sentinela, while True e Comando break",
    "enunciado": "O que é um 'valor sentinela' em um laço de repetição? Explique a função do comando 'break' dentro de uma estrutura 'while True' e por que a checagem da sentinela deve preceder o acúmulo de dados.",
    "min_chars": 50,
    "keywords": ["sentinela", "break", "while True", "interrupção", "acumulador"],
    "resumoCurto": "Sentinela é o sinal de parada; o break encerra o laço imediatamente, evitando que o valor de parada contamine os resultados do acumulador.",
    "bloquearVoltar": false
  },

  "116": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Importação de Módulos Nativos (import random)",
        "conteudo": "O Python oferece bibliotecas nativas prontas para uso. O comando 'import random' carrega o módulo de geração de números e sorteios aleatórios e deve ser declarado no início do script."
      },
      {
        "titulo": "Conceito 2: Proteção Contra Divisão por Zero no Cálculo de Médias",
        "conteudo": "Após o término de um laço de leitura de dados, antes de calcular a média (divisão da soma pela quantidade), é obrigatório incluir a verificação 'if quantidade > 0:' para evitar falhas graves do tipo ZeroDivisionError.",
        "exemploCodigo": "import random\n\nif qtd_notas > 0:\n    media = soma_notas / qtd_notas\nelse:\n    print(\"Nenhuma nota inserida.\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Módulo 7.2: Importação de Módulos (random) e Proteção Contra Divisão por Zero",
    "enunciado": "Para que serve a instrução 'import random' e onde ela deve ser posicionada no script? Explique por que a checagem condicional 'if quantidade > 0:' é indispensável antes de calcular a média final.",
    "min_chars": 50,
    "keywords": ["import", "random", "divisão por zero", "ZeroDivisionError", "topo"],
    "resumoCurto": "import random carrega o módulo no topo do script; if quantidade > 0 previne o erro de divisão por zero caso nenhuma nota tenha sido informada.",
    "bloquearVoltar": false
  },


  // ===========================================================================
  // 🎯 AVALIAÇÃO FINAL DE CONSOLIDAÇÃO / RECUPERAÇÃO (IDs 201 a 216)
  // TODAS AS QUESTÕES COM "bloquearVoltar": true
  // ===========================================================================

  "201": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Manipulação de Arquivos e Execução em Terminal",
        "conteudo": "No desenvolvimento de software, a criação de pastas e arquivos deve respeitar convenções de nomenclatura. O atalho Ctrl+X recorta arquivos movendo-os de pasta. No terminal, caso um programa entre em loop e trave a tela, utiliza-se o comando Ctrl+C para encerrar o processo."
      },
      {
        "titulo": "Revisão 2: Regras para Arquivos do Componente",
        "conteudo": "Nomes de scripts em Python não devem conter acentos ou espaços, pois podem gerar falhas em diferentes sistemas operacionais. Além disso, a extensão correta deve ser obrigatoriamente '.py'.",
        "exemploCodigo": "# Comando no terminal para rodar um script:\npython3 meu_script.py"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Questão 1: Operação de Sistemas e Execução em Terminal",
    "enunciado": "Explique qual atalho de teclado deve ser utilizado no terminal para interromper forçadamente um script Python em execução travada. Descreva também duas boas práticas obrigatórias relativas à nomeação de arquivos .py.",
    "min_chars": 45,
    "keywords": ["Ctrl+C", "terminal", "acentos", "espaços", "extensão"],
    "resumoCurto": "O atalho Ctrl+C interrompe a execução no terminal; arquivos .py devem evitar espaços e caracteres acentuados.",
    "bloquearVoltar": true
  },

  "202": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Propriedades dos Algoritmos",
        "conteudo": "Um algoritmo é uma sequência finita de instruções claras para resolver um problema. A ausência de ambiguidade garante a propriedade de ser 'Definido'. Quando o algoritmo efetivamente resolve o desafio, cumpre-se a propriedade de ser 'Eficaz'."
      },
      {
        "titulo": "Revisão 2: Símbolos Padronizados em Fluxogramas",
        "conteudo": "Na construção de fluxogramas, o Losango representa exclusividade para testes de decisão (perguntas de Sim/Não ou Verdadeiro/Falso). O Retângulo representa um processo ou atribuição interna, e o Paralelogramo trata a entrada e saída de dados."
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Questão 2: Propriedades e Simbologia de Fluxogramas",
    "enunciado": "Ao mapear um sistema de autenticação onde se pergunta 'A senha está correta?', qual forma geométrica deve ser utilizada no fluxograma? Explique qual característica formal garante que essa instrução não seja ambígua.",
    "min_chars": 45,
    "keywords": ["losango", "decisão", "definido", "ambiguidade", "fluxograma"],
    "resumoCurto": "Decisões no fluxograma usam o losango; a propriedade 'Definido' garante ausência de dúvidas ou ambiguidades.",
    "bloquearVoltar": true
  },

  "203": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Tipagem de Dados Primitivos em Python",
        "conteudo": "A escolha do tipo de dado correto é crucial para o desempenho e funcionamento do programa. Números reais com casas decimais (como notas ou preços) utilizam o tipo 'float'. Textos ou sequências de caracteres utilizam 'str'."
      },
      {
        "titulo": "Revisão 2: Entrada e Conversão de Tipos com input()",
        "conteudo": "Por padrão, a função input() retorna sempre uma string (str). Se o dado capturado precisar ser utilizado em operações aritméticas, deve-se encapsular o input() dentro da função de conversão adequada, como float() ou int().",
        "exemploCodigo": "# Leitura correta de dado numérico real com decimal:\nnota = float(input(\"Digite a nota do aluno: \"))"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Questão 3: Tipos de Dados e Entrada de Usuário",
    "enunciado": "Qual é o tipo primitivo retornado por padrão pela função input() em Python? O que acontece se tentarmos realizar uma operação de divisão diretamente com essa entrada sem realizar o type casting?",
    "min_chars": 45,
    "keywords": ["string", "str", "coerção", "TypeError", "float"],
    "resumoCurto": "input() devolve do tipo str; realizar operações matemáticas com texto sem conversão dispara um erro de tipo (TypeError).",
    "bloquearVoltar": true
  },

  "211": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Distinção entre Tipos Primitivos Inteiros e Reais",
        "conteudo": "Os tipos primitivos numéricos dividem-se em 'int' para valores inteiros sem casas decimais e 'float' para números com ponto flutuante. A escolha incorreta do tipo afeta a precisão matemática das operações."
      },
      {
        "titulo": "Revisão 2: Armazenamento do Tipo Texto (str) para Identificadores",
        "conteudo": "Campos como CPF, RG e telefone, embora compostos por numerais, não realizam operações aritméticas e podem possuir zeros à esquerda ou caracteres de formatação (como pontos e hífen). Por esse motivo, devem ser obrigatoriamente armazenados como 'str'.",
        "exemploCodigo": "# Armazenamento correto de identificadores:\ncpf = input(\"Digite seu CPF (apenas números): \") # Retorna str"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Questão 11: Tipagem de Dados e Armazenamento de Identificadores",
    "enunciado": "Explique a diferença entre os tipos primitivos 'int' e 'float' em Python. Por que um número de telefone ou CPF deve ser armazenado como 'str' e não como um tipo numérico?",
    "min_chars": 45,
    "keywords": ["int", "float", "str", "cálculo", "zeros à esquerda"],
    "resumoCurto": "int guarda inteiros e float guarda decimais; CPF/telefones usam str por não realizarem cálculos e preservarem zeros à esquerda.",
    "bloquearVoltar": true
  },

  "212": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Sobrescrevendo Conteúdo na Memória",
        "conteudo": "As variáveis comportam-se como espaços nomeados na memória RAM. Ao realizar uma nova atribuição utilizando o operador '=', o valor armazenado anteriormente é destruído e substituído pelo novo dado informado."
      },
      {
        "titulo": "Revisão 2: Convenções Rígidas para Identificadores",
        "conteudo": "Identificadores de variáveis devem obrigatoriamente iniciar por letras ou caractere sublinhado (_), não podendo começar por números, conter espaços em branco ou utilizar acentos e caracteres especiais.",
        "exemploCodigo": "# Nome de variável válido (snake_case):\nvalor_total = 150.0\n\n# Novo valor substitui o anterior na memória:\nvalor_total = 200.0"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 0,
    "titulo": "Questão 12: Sobrescrita na Memória e Regras de Nomenclatura",
    "enunciado": "O que acontece com o valor armazenado em uma variável quando realizamos uma nova atribuição utilizando o operador '='? Liste duas regras obrigatórias que devem ser seguidas ao criar o nome de uma variável.",
    "min_chars": 45,
    "keywords": ["atribuição", "substituído", "memória", "letras", "espaços"],
    "resumoCurto": "O valor anterior é sobrescrito na memória; variáveis não podem começar com números nem conter espaços ou caracteres especiais.",
    "bloquearVoltar": true
  },

  "204": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: O Operador de Resto da Divisão Inteira (%)",
        "conteudo": "O operador de módulo (%) retorna o resto da divisão entre dois números inteiros. Ele é amplamente utilizado na computação para identificar padrões de paridade ou múltiplos de um número."
      },
      {
        "titulo": "Revisão 2: Lógica Par ou Ímpar em Expressões Booleans",
        "conteudo": "Todo número par é divisível por 2 com resto 0. Portanto, a expressão lógica (numero % 2 == 0) retornará o valor booleano True caso o número testado seja par, e False caso seja ímpar.",
        "exemploCodigo": "numero = int(input(\"Digite um número: \"))\nif numero % 2 == 0:\n    print(\"Par\")\nelse:\n    print(\"Ímpar\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Questão 4: Operador de Módulo e Verificação de Paridade",
    "enunciado": "Explique o funcionamento do operador de módulo (%) em Python. Qual será o resultado booleano (True ou False) retornado pela avaliação da expressão (15 % 2 == 0)? Justifique sua resposta.",
    "min_chars": 45,
    "keywords": ["módulo", "resto", "False", "ímpar", "divisão"],
    "resumoCurto": "O operador % calcula o resto; 15 % 2 é 1, logo a comparação (1 == 0) resulta no valor booleano False.",
    "bloquearVoltar": true
  },

  "205": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Atribuição vs Comparação e Bloco Condicional",
        "conteudo": "O operador '=' é de atribuição e coloca um valor na memória. O operador '==' compara se dois valores são iguais. Quando a condição testada em um comando 'if' resulta em False, o bloco indentado subordinado ao 'if' é ignorado e o programa salta para o comando seguinte."
      },
      {
        "titulo": "Revisão 2: A Relevância dos Testes em Valores de Borda",
        "conteudo": "Valores de borda são dados localizados no limite de uma condição. Em uma regra como 'nota >= 6.0', testar 5.9 e 6.0 é indispensável para garantir que operadores relacionais não tenham sido escritos incorretamente (ex: usar '>' no lugar de '>=').",
        "exemploCodigo": "nota = 6.0\nif nota >= 6.0:\n    print(\"Aprovado\") # Executado exatamente no valor de borda"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Questão 5: Estruturas Condicionais e Teste de Limites",
    "enunciado": "Explique o que acontece com a execução do programa quando a condição de um comando 'if' é avaliada como False. Por que é vital testar o valor exato do limite (valor de borda) em uma estrutura condicional?",
    "min_chars": 45,
    "keywords": ["ignorado", "salta", "borda", "limite", "falso"],
    "resumoCurto": "Se a condição for False, o bloco do if é ignorado; testar limites (borda) valida se o operador relacional correto foi utilizado.",
    "bloquearVoltar": true
  },

  "206": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Operadores Lógicos and, or, not",
        "conteudo": "O operador 'and' exige que todas as condições conectadas sejam simultaneamente Verdadeiras. O 'or' exige apenas uma Verdadeira. O 'not' inverte o resultado lógico. Na ordem de avaliação padrão, o 'and' possui prioridade de execução sobre o 'or'."
      },
      {
        "titulo": "Revisão 2: Prioridade Lógica e Uso de Parênteses",
        "conteudo": "Para alterar a precedência padrão entre operadores lógicos e evitar falhas de lógica no código, deve-se envolver as subexpressões desejadas entre parênteses.",
        "exemploCodigo": "# O uso de parênteses garante que o perfil seja verificado antes da senha:\nif (usuario == \"admin\" or usuario == \"aluno\") and senha == \"1234\":\n    print(\"Acesso Liberado\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Questão 6: Operadores Lógicos e Precedência de Avaliação",
    "enunciado": "Em um sistema onde o acesso exige que o usuário pertença ao grupo autorizado E informe a senha correta, qual operador lógico deve conectar essas exigências? Por que o uso de parênteses é crucial ao combinar os operadores 'and' e 'or'?",
    "min_chars": 45,
    "keywords": ["and", "or", "parênteses", "precedência", "prioridade"],
    "resumoCurto": "Usa-se o operador 'and' para exigências simultâneas; parênteses garantem que o 'or' seja avaliado antes do 'and'.",
    "bloquearVoltar": true
  },

  "207": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: A Palavra-Chave elif e Encadeamento de Caminhos",
        "conteudo": "Quando um algoritmo possui mais de dois caminhos possíveis, utiliza-se a palavra-chave 'elif' entre o 'if' inicial e o 'else' final. O interpretador avalia os testes de cima para baixo."
      },
      {
        "titulo": "Revisão 2: Seleção Exclusiva de Bloco no Encadeamento",
        "conteudo": "Assim que o Python encontra a primeira condição Verdadeira na estrutura if/elif/else, ele executa o bloco de código correspondente e ignora imediatamente todas as outras opções subsequentes, mesmo que fossem verdadeiras.",
        "exemploCodigo": "nota = 3.5\nif nota < 4.0:\n    print(\"Reprovado\")\nelif nota < 6.0:\n    print(\"Recuperação\")\nelse:\n    print(\"Aprovado\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Questão 7: Encadeamento com elif e Seleção de Bloco",
    "enunciado": "Ao utilizar uma cadeia 'if / elif / else', o que acontece após o computador encontrar e executar a primeira condição avaliada como True? O que ocorreria com a nota 3.0 se a checagem 'nota < 6.0' fosse colocada antes de 'nota < 4.0'?",
    "min_chars": 45,
    "keywords": ["elif", "ignora", "sequência", "primeira", "erro"],
    "resumoCurto": "Após achar a primeira condição True, o programa ignora os demais elif; inverter as notas classificaria incorretamente um 3.0 como Recuperação.",
    "bloquearVoltar": true
  },

  "213": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: A Ordem das Operações Matemáticas",
        "conteudo": "Em expressões aritméticas, o Python executa multiplicações, divisões e módulos antes de adições e subtrações. A omissão de parênteses altera o significado de equações de média e porcentagem."
      },
      {
        "titulo": "Revisão 2: Alterando a Prioridade com Parênteses",
        "conteudo": "Para garantir que a soma de duas notas ocorra antes da divisão por 2, a expressão de soma deve ser envolvida por parênteses.",
        "exemploCodigo": "# Erro de lógica: divide apenas nota2 por 2\nmedia_errada = nota1 + nota2 / 2\n\n# Forma correta:\nmedia_correta = (nota1 + nota2) / 2"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Questão 13: Precedência Aritmética na Construção de Expressões",
    "enunciado": "Na expressão Python `media = nota1 + nota2 / 2`, qual erro de lógica ocorre devido às regras de precedência? Escreva a linha de código corrigida utilizando parênteses.",
    "min_chars": 45,
    "keywords": ["precedência", "divisão", "parênteses", "soma", "média"],
    "resumoCurto": "A divisão tem prioridade e dividiria apenas nota2; deve-se usar parênteses `(nota1 + nota2) / 2` para forçar a soma primeiro.",
    "bloquearVoltar": true
  },

  "214": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Sensibilidade a Maiúsculas e Minúsculas (Case-Sensitivity)",
        "conteudo": "A linguagem Python diferencia letras maiúsculas de minúsculas. A comparação `\"Verde\" == \"verde\"` retorna o valor booleano False, o que pode causar falhas no fluxo condicional do programa."
      },
      {
        "titulo": "Revisão 2: Padronização de Entradas com .lower()",
        "conteudo": "Para aceitar dados informados pelo usuário em qualquer formato (ex: VERDE, Verde ou verde), aplica-se o método .lower() na captura do input, convertendo todo o texto para minúsculas antes da verificação.",
        "exemploCodigo": "cor = input(\"Cor do semáforo: \").lower()\nif cor == \"verde\":\n    print(\"Siga\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 1,
    "titulo": "Questão 14: Sensibilidade de Caixas e Padronização de Strings",
    "enunciado": "Por que a comparação de igualdade entre 'Verde' e 'verde' resulta em False em Python? Explique como a utilização do método `.lower()` previne falhas de lógica em estruturas condicionais que validam textos.",
    "min_chars": 45,
    "keywords": ["case-sensitive", "lower", "minúsculas", "padronização", "comparação"],
    "resumoCurto": "Python diferencia maiúsculas de minúsculas (case-sensitive); `.lower()` converte o texto para minúsculas garantindo comparações válidas.",
    "bloquearVoltar": true
  },

  "208": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Funcionamento da Estrutura de Repetição while",
        "conteudo": "A estrutura de repetição while executa um bloco repetidamente enquanto sua condição for Verdadeira. Se a variável de controle do laço não for alterada dentro do bloco, a condição de parada nunca se tornará Falsa."
      },
      {
        "titulo": "Revisão 2: Causa Primária do Loop Infinito",
        "conteudo": "A falta de atualização da variável de controle faz com que o programa entre em um 'loop infinito', repetindo a mesma instrução indefinidamente até travar a execução ou ser forçado a encerrar.",
        "exemploCodigo": "# Causa do loop infinito (falta de incremento):\ni = 1\nwhile i <= 5:\n    print(i)\n    # Falta: i += 1 (o loop rodará para sempre)"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Questão 8: Diagnóstico de Laços e Loop Infinito",
    "enunciado": "Qual é a causa técnica primária para que um laço 'while' entre em um 'loop infinito'? Qual instrução essencial foi esquecida dentro do bloco de repetição para ocasionar essa falha?",
    "min_chars": 45,
    "keywords": ["loop infinito", "atualização", "incremento", "condição", "falsa"],
    "resumoCurto": "O loop infinito ocorre quando a condição de parada nunca fica Falsa por ausência da linha de atualização/incremento da variável.",
    "bloquearVoltar": true
  },

  "209": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Conceito de Valor Sentinela",
        "conteudo": "Em programas que lêem uma quantidade indeterminada de dados, utiliza-se uma variável ou valor especial chamado 'sentinela' (como digitar 0 ou 'sair') exclusivamente para marcar o encerramento da entrada de informações."
      },
      {
        "titulo": "Revisão 2: A Instrução break no Laço while True",
        "conteudo": "A instrução 'break' interrompe e sai imediatamente do laço de repetição atual. Em laços 'while True', o teste da sentinela seguido do break deve ser posicionado antes do cálculo de acumuladores para evitar que o valor de parada altere os resultados.",
        "exemploCodigo": "soma = 0\nwhile True:\n    num = int(input(\"Digite um número (0 para sair): \"))\n    if num == 0:\n        break # Interrompe imediatamente sem somar o 0\n    soma += num"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Questão 9: Sentinela e Interrupção do Laço com break",
    "enunciado": "O que é um valor 'sentinela' em um laço de repetição? Explique para que serve a instrução 'break' em uma estrutura 'while True' e por que ela deve ser executada antes de somar a entrada ao acumulador.",
    "min_chars": 45,
    "keywords": ["sentinela", "break", "interromper", "acumulador", "parada"],
    "resumoCurto": "Sentinela é o valor que indica o fim da entrada; o break encerra o laço e evita que o valor de parada seja somado ao acumulador.",
    "bloquearVoltar": true
  },

  "210": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Acumuladores e Cálculo de Médias",
        "conteudo": "Um acumulador é uma variável responsável por somar valores variáveis a cada iteração de um laço. Após o término da repetição, a média é obtida dividindo-se o acumulador pelo total de itens contados."
      },
      {
        "titulo": "Revisão 2: Tratamento de Exceção e Divisão por Zero",
        "conteudo": "Se o usuário não inserir nenhum dado (quantidade == 0), a tentativa de efetuar a divisão por zero ocasionará uma falha crítica (ZeroDivisionError). Torna-se obrigatório inserir um teste 'if quantidade > 0:' antes de realizar a divisão.",
        "exemploCodigo": "if quantidade > 0:\n    media = soma / quantidade\n    print(f\"Média: {media:.2f}\")\nelse:\n    print(\"Nenhum dado informado para cálculo.\")"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Questão 10: Proteção Contra Erros Lógicos de Divisão por Zero",
    "enunciado": "Por que é indispensável inserir uma verificação condicional 'if quantidade > 0:' antes de efetuar o cálculo de uma média após o encerramento de um laço enquanto? O que acontece caso essa verificação seja omitida?",
    "min_chars": 45,
    "keywords": ["divisão por zero", "ZeroDivisionError", "quantidade", "proteção", "média"],
    "resumoCurto": "A verificação protege contra a exceção de divisão por zero caso nenhuma nota tenha sido digitada pelo usuário.",
    "bloquearVoltar": true
  },

  "215": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Papel Funcional do Contador",
        "conteudo": "Um contador é uma variável incremental incrementada por um valor constante (como `i += 1`) a cada repetição. Seu objetivo principal é registrar o número exato de iterações executadas pelo laço."
      },
      {
        "titulo": "Revisão 2: Papel Funcional do Acumulador",
        "conteudo": "Um acumulador é uma variável que soma valores variáveis (como `soma += preco_produto`) a cada passagem pelo laço. Ele é essencial para totalizar compras, calcular somatórios e obter médias.",
        "exemploCodigo": "# Exemplo combinado dentro de um laço:\ncontador += 1             # Incrementa passo fixo (+1)\nacumulador += preco_item   # Incrementa valor variável (preço)"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Questão 15: Diferenciação entre Contadores e Acumuladores",
    "enunciado": "Diferencie o papel de uma variável contadora daquele desempenhado por uma variável acumuladora em um laço de repetição. Dê um exemplo do incremento de cada uma dentro de uma estrutura while.",
    "min_chars": 45,
    "keywords": ["contador", "acumulador", "passo fixo", "variável", "incremento"],
    "resumoCurto": "Contadores somam valores fixos (ex: `i += 1`) para contar voltas; acumuladores somam valores variáveis (ex: `soma += preco`).",
    "bloquearVoltar": true
  },

  "216": {
    "textosPreparatorios": [
      {
        "titulo": "Revisão 1: Importação de Módulos Padrão com import",
        "conteudo": "O comando `import random` carrega a biblioteca nativa de geração de números e seleções aleatórias do Python. Por convenção, as declarações de importação devem ser inseridas na primeira linha do script."
      },
      {
        "titulo": "Revisão 2: Controle de Tentativas com Sorteio Aleatório",
        "conteudo": "A combinação da função `random.randint(min, max)` com uma variável contadora em um laço `while` possibilita restringir o número de tentativas em jogos ou verificações de segurança.",
        "exemploCodigo": "import random\n\nsegredo = random.randint(1, 10)\ntentativas = 0\nwhile tentativas < 3:\n    chute = int(input(\"Adivinhe o número (1 a 10): \"))\n    if chute == segredo:\n        print(\"Acertou!\")\n        break\n    tentativas += 1"
      }
    ],
    "disciplina": "Lógica e Linguagem de Programação",
    "nivel": 2,
    "titulo": "Questão 16: Módulos Nativos e Controle Rígido de Tentativas",
    "enunciado": "Explique como o módulo `random` pode ser utilizado em conjunto com um laço `while` para limitar o número máximo de tentativas em um jogo de adivinhação. Por que o comando `import random` deve ser posicionado no topo do script?",
    "min_chars": 45,
    "keywords": ["import", "random", "tentativas", "topo", "módulo"],
    "resumoCurto": "`import random` deve ficar no topo para carregar o módulo no início; o laço `while` usa contadores para limitar as tentativas do sorteio.",
    "bloquearVoltar": true
  }
};