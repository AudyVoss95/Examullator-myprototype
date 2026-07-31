export interface SecaoMaterial {
  titulo: string;
  conteudo: string;
  exemploCodigo?: string;
  dica?: string;
}

export interface TermoChave {
  termo: string;
  explicacao: string;
}

export interface MaterialExplicativo {
  disciplinaId: string;
  titulo: string;
  subtitulo: string;
  icone: string;
  secoes: SecaoMaterial[];
  termosChave: TermoChave[];
}

export const MATERIAIS_EXPLICATIVOS: Record<string, MaterialExplicativo> = {
  "Hardware & Sistemas": {
    disciplinaId: "Hardware & Sistemas",
    titulo: "Fundamentos de Hardware, Software e Sistema Operacional",
    subtitulo: "Aprenda a diferença entre os componentes físicos, programas, arquivos e atalhos essenciais.",
    icone: "💻",
    secoes: [
      {
        titulo: "1. Hardware vs. Software",
        conteudo: "Hardware é tudo aquilo que você pode tocar (placa-mãe, memória RAM, processador, teclado). Software é a parte lógica, ou seja, os programas e instruções que rodam sobre o hardware (sistema operacional, navegadores, VS Code).",
        dica: "Sem o software, o hardware não passa de peças sem vida; sem o hardware, o software não tem onde ser executado."
      },
      {
        titulo: "2. Editores de Texto e Arquivos .txt",
        conteudo: "Um arquivo .txt é um formato de texto simples, sem formatações de cores ou fontes. É amplamente utilizado por programadores porque não oculta caracteres especiais de formatação.",
        exemploCodigo: "// Exemplo de arquivo de texto simples (.txt)\nNome: Maria Silva\nCurso: Programacao Python\nData: 2026-07-28"
      },
      {
        titulo: "3. Atalhos Essenciais do Sistema",
        conteudo: "Dominar o teclado aumenta drasticamente sua produtividade ao escrever código:",
        exemploCodigo: "Ctrl + C : Copiar item selecionado\nCtrl + V : Colar conteúdo copiado\nCtrl + X : Recortar (mover) item\nCtrl + S : Salvar arquivo atual no editor\nAlt + Tab: Alternar rapidamente entre janelas abertas"
      }
    ],
    termosChave: [
      { termo: "Hardware", explicacao: "Componentes físicos e circuitos eletrônicos do computador." },
      { termo: "Software", explicacao: "Conjunto de programas, dados e instruções de código." },
      { termo: "Persistência", explicacao: "Ação de gravar informações no disco para não perdê-las ao desligar." },
      { termo: "Nuvem (Cloud)", explicacao: "Armazenamento remoto de dados acessível via internet." }
    ]
  },
  "Lógica de Programação": {
    disciplinaId: "Lógica de Programação",
    titulo: "Lógica, Algoritmos e Fluxogramas",
    subtitulo: "Entenda o raciocínio estruturado para resolver problemas antes de escrever código em qualquer linguagem.",
    icone: "🧩",
    secoes: [
      {
        titulo: "1. O que é um Algoritmo?",
        conteudo: "Algoritmo é uma sequência finita de passos claros e bem definidos para realizar uma tarefa ou resolver um problema (como uma receita de bolo ou instrução para trocar um pneu).",
        dica: "As instruções de um algoritmo não podem conter ambiguidades — o computador segue exatamente o que é ordenado."
      },
      {
        titulo: "2. Entrada, Processamento e Saída",
        conteudo: "Todo programa de computador segue três etapas principais:\n- Entrada: Dados recebidos do usuário ou de sensores.\n- Processamento: Cálculos e comparações lógicas.\n- Saída: O resultado exibido na tela ou impresso.",
        exemploCodigo: "Entrada: Preço do produto (100) e Desconto (10%)\nProcessamento: PreçoFinal = 100 - (100 * 0.10)\nSaída: Exibir 90 na tela"
      },
      {
        titulo: "3. Fluxogramas e Pseudocódigo",
        conteudo: "O fluxograma é a representação visual dos passos de um algoritmo. O retângulo representa ações/processos, e o losango representa decisões (escolhas entre Sim ou Não). O pseudocódigo (Portugol) ajuda a praticar a lógica usando português estruturado."
      }
    ],
    termosChave: [
      { termo: "Algoritmo", explicacao: "Sequência lógica de passos para resolver um problema." },
      { termo: "Fluxograma", explicacao: "Diagrama gráfico das etapas de um processo." },
      { termo: "Pseudocódigo", explicacao: "Rascunho de código em linguagem natural sem sintaxe rígida." },
      { termo: "Decisão (Losango)", explicacao: "Ponto em que o algoritmo avalia uma condição para mudar de fluxo." }
    ]
  },
  "Python Fundamentos": {
    disciplinaId: "Python Fundamentos",
    titulo: "Sintaxe Básica de Python, Variáveis e Tipos",
    subtitulo: "Aprenda a primeira linguagem de programação mais popular do mundo para automação e dados.",
    icone: "🐍",
    secoes: [
      {
        titulo: "1. A Função print() e Modo Interativo",
        conteudo: "A função print() é usada para exibir informações na tela. O Python é uma linguagem interpretada e case-sensitive (diferencia letras maiúsculas e minúsculas).",
        exemploCodigo: "print('Olá, Estudante!')\n\n# Criando uma variável:\nnome = 'João'\nprint('Bem-vindo,', nome)"
      },
      {
        titulo: "2. Tipos de Dados Fundamentais",
        conteudo: "Em Python, o tipo da variável é definido dinamicamente no momento da atribuição:\n- int: Números inteiros (ex: 25)\n- float: Números reais com vírgula/ponto decimal (ex: 75.50)\n- str: Textos entre aspas (ex: 'Python')\n- bool: Valores lógicos (True ou False)",
        exemploCodigo: "idade = 20           # int\naltura = 1.75        # float\nnome = 'Lucas'       # str\naprovado = True      # bool"
      },
      {
        titulo: "3. Entradas de Dados e Casting",
        conteudo: "O comando input() lê o texto digitado pelo usuário sempre como String. Para fazer operações matemáticas com o número informado, é necessário converter (Casting) usando int() ou float().",
        exemploCodigo: "idade_str = input('Digite sua idade: ')\nidade = int(idade_str) # Converte o texto em número inteiro\nprint('Em 5 anos você terá:', idade + 5)"
      }
    ],
    termosChave: [
      { termo: "print()", explicacao: "Comando para exibir dados na tela." },
      { termo: "input()", explicacao: "Comando que recebe o texto digitado pelo usuário." },
      { termo: "Case-Sensitive", explicacao: "Diferenciação rigorosa entre letras maiúsculas e minúsculas." },
      { termo: "Casting", explicacao: "Conversão explícita de um tipo de dado em outro (ex: str -> int)." }
    ]
  },
  "Estruturas de Controle & Repetição": {
    disciplinaId: "Estruturas de Controle & Repetição",
    titulo: "Tomada de Decisão e Loops de Repetição",
    subtitulo: "Aprenda como fazer seu código tomar decisões inteligentes e repetir tarefas automaticamente.",
    icone: "🔁",
    secoes: [
      {
        titulo: "1. Estrutura Condicional (if, elif, else)",
        conteudo: "Use if para testar se uma condição é verdadeira, elif para checar alternativas adicionais e else como caminho padrão caso nenhuma condição seja satisfeita.",
        exemploCodigo: "nota = 7.5\n\nif nota >= 7.0:\n    print('Aprovado!')\nelif nota >= 5.0:\n    print('Recuperação')\nelse:\n    print('Reprovado')"
      },
      {
        titulo: "2. Operadores Lógicos e Comparação",
        conteudo: "Para comparar valores use == (igual), != (diferente), > (maior), < (menor). Combine condições usando and (ambos verdadeiros) e or (pelo menos um verdadeiro).",
        exemploCodigo: "usuario = 'admin'\nsenha = 1234\n\nif usuario == 'admin' and senha == 1234:\n    print('Acesso Autorizado')"
      },
      {
        titulo: "3. Laços de Repetição (for e while)",
        conteudo: "Use for quando souber exatamente o número de repetições (com a função range). Use while quando o loop deve continuar rodando enquanto uma condição for verdadeira.",
        exemploCodigo: "# Repetindo 5 vezes com for:\nfor i in range(5):\n    print('Contador:', i)\n\n# Loop com while:\ncont = 0\nwhile cont < 3:\n    print('Executando...')\n    cont += 1"
      }
    ],
    termosChave: [
      { termo: "Identaação", explicacao: "Espaçamento obrigatório no início da linha para delimitar blocos em Python." },
      { termo: "range(início, fim, passo)", explicacao: "Função que gera uma sequência numérica de iteração." },
      { termo: "break", explicacao: "Comando que força a saída imediata de um laço de repetição." },
      { termo: "continue", explicacao: "Comando que pula para a próxima iteração do loop sem encerrá-lo." }
    ]
  },
  "Estruturas de Dados & Algoritmos": {
    disciplinaId: "Estruturas de Dados & Algoritmos",
    titulo: "Listas, Vetores e Matrizes em Python",
    subtitulo: "Aprenda a armazenar múltiplos valores em uma única variável ordenada.",
    icone: "📦",
    secoes: [
      {
        titulo: "1. O que são Listas (Vetores)?",
        conteudo: "Uma Lista é uma estrutura de dados que armazena uma coleção de elementos ordenados. Em Python, os índices de acesso começam sempre do 0.",
        exemploCodigo: "frutas = ['Maçã', 'Banana', 'Laranja']\n\nprint(frutas[0]) # Exibe: Maçã\nprint(frutas[2]) # Exibe: Laranja"
      },
      {
        titulo: "2. Métodos Essenciais (.append(), .pop(), len())",
        conteudo: "Você pode modificar uma lista dinamicamente usando os métodos internos do Python:",
        exemploCodigo: "numeros = [10, 20]\nnumeros.append(30)  # Adiciona 30 ao final -> [10, 20, 30]\nnumeros.pop()        # Remove o último elemento (30)\n\nprint('Total de elementos:', len(numeros)) # Exibe 2"
      },
      {
        titulo: "3. Matrizes Bidimensionais",
        conteudo: "Uma matriz é simplesmente uma lista de listas (linhas e colunas), ideal para representar grades, jogos da velha ou planilhas.",
        exemploCodigo: "matriz = [\n  [1, 2, 3],\n  [4, 5, 6]\n]\nprint(matriz[1][0]) # Linha 1, Coluna 0 -> Exibe 4"
      }
    ],
    termosChave: [
      { termo: "Índice (Index)", explicacao: "Posição numérica de um elemento na lista (base zero)." },
      { termo: ".append()", explicacao: "Adiciona um elemento ao final da lista." },
      { termo: ".pop()", explicacao: "Remove e retorna o último elemento da lista." },
      { termo: "len()", explicacao: "Função que retorna a quantidade total de elementos." }
    ]
  },
  "Funções & Modularização": {
    disciplinaId: "Funções & Modularização",
    titulo: "Criação de Funções, Parâmetros e Reuso",
    subtitulo: "Aprenda a organizar seu código em blocos reutilizáveis com o princípio DRY.",
    icone: "⚙️",
    secoes: [
      {
        titulo: "1. O que é uma Função?",
        conteudo: "Uma função é um bloco de código reutilizável com um nome próprio, criado para executar uma tarefa específica. Para definir uma função em Python usa-se a palavra def.",
        exemploCodigo: "def saudar(nome):\n    print('Olá,', nome, 'seja bem-vindo!')\n\n# Chamando a função:\nsaudar('Carlos')"
      },
      {
        titulo: "2. Retornando Valores com return",
        conteudo: "Ao contrário de print() (que apenas exibe na tela), o comando return devolve um resultado calculado para quem chamou a função.",
        exemploCodigo: "def somar(a, b):\n    return a + b\n\nresultado = somar(5, 3)\nprint('Resultado da soma:', resultado)"
      },
      {
        titulo: "3. Princípio DRY e Escopo",
        conteudo: "DRY significa 'Don't Repeat Yourself' (Não Repita a Si Mesmo). Variáveis criadas dentro de uma função possuem escopo local e deixam de existir fora dela."
      }
    ],
    termosChave: [
      { termo: "def", explicacao: "Palavra-chave usada para definir uma nova função." },
      { termo: "Parâmetros", explicacao: "Variáveis de entrada recebidas por uma função." },
      { termo: "return", explicacao: "Comando que devolve o valor de saída de uma função." },
      { termo: "Escopo Local", explicacao: "Visibilidade de variáveis restrita apenas ao interior da função." }
    ]
  },
  "Inteligência Artificial": {
    disciplinaId: "Inteligência Artificial",
    titulo: "Fundamentos de Inteligência Artificial e Machine Learning",
    subtitulo: "Compreenda Aprendizado de Máquina, Redes Neurais, PLN, Visão Computacional e Ética Algorítmica.",
    icone: "🤖",
    secoes: [
      {
        titulo: "1. Aprendizado de Máquina (Machine Learning)",
        conteudo: "Ao contrário da programação tradicional onde regras são escritas manualmente, o Machine Learning utiliza algoritmos para extrair padrões e regras automaticamente a partir de grandes volumes de dados.",
        dica: "Supervisionado usa dados com respostas conhecidas (rótulos); Não-Supervisionado descobre agrupamentos em dados sem rótulos."
      },
      {
        titulo: "2. Redes Neurais e Aprendizado Profundo (Deep Learning)",
        conteudo: "Redes neurais artificiais consistem em camadas de neurônios artificiais interconectados por pesos numéricos. Funções de ativação (como ReLU) adicionam não-linearidade permitindo resolver problemas complexos.",
        exemploCodigo: "# Exemplo conceitual de neurônio:\nsaida = relu( (entrada1 * peso1) + (entrada2 * peso2) + bias )"
      },
      {
        titulo: "3. Processamento de Linguagem Natural & LLMs",
        conteudo: "PLN converte palavras em números (tokens) para interpretação computacional. Modelos de Linguagem de Grande Porte (LLMs) usam a arquitetura Transformer e auto-atenção para gerar e compreender textos de forma contextualizada."
      }
    ],
    termosChave: [
      { termo: "Machine Learning", explicacao: "Técnica de IA onde algoritmos aprendem padrões a partir de dados." },
      { termo: "Rede Neural Artificial", explicacao: "Modelo computacional inspirado no cérebro organizado em camadas." },
      { termo: "Overfitting", explicacao: "Decodificação/memorização excessiva do treino que reduz a generalização em dados novos." },
      { termo: "Tokenização", explicacao: "Divisão de texto em pedaços numéricos menores para processamento por LLMs." }
    ]
  }
};
