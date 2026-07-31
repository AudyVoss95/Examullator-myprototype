import { bancoQuestoesExamullator } from './trilha_de_estudos_e_avalia_o_no_modelo_examullator';
import { bancoQuestoesIA } from './questoes_inteligencia_artificial';

export interface SecaoTexto {
  titulo: string;
  conteudo: string;
  exemploCodigo?: string;
}

export interface Prova {
  textosPreparatorios?: SecaoTexto[];
  resumoCurto?: string;
  disciplina: string;
  nivel: number;
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
  bloquearVoltar?: boolean;
}

export const BANCO_DE_PROVAS: Record<string, Prova> = {
  ...bancoQuestoesExamullator,
  ...bancoQuestoesIA,
  "001": {
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O que é Hardware?",
            "conteudo": "Hardware refere-se a todos os componentes físicos e circuitos eletrônicos que compõem o computador, como gabinete, placa-mãe, memória RAM, processador e periféricos."
      },
      {
            "titulo": "Conceito 2: O que é Software?",
            "conteudo": "Software é a camada de programas e instruções lógicas executadas sobre o hardware. Inclui sistemas operacionais, aplicativos e scripts de programação."
      }
],

    "resumoCurto": "Hardware é a parte física tangível (peças, circuitos). Software são os programas lógicos executados pelo sistema.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Copiar vs. Recortar",
            "conteudo": "Copiar (Ctrl+C) duplica o conteúdo mantendo o arquivo original. Recortar (Ctrl+X) move o conteúdo limpando o local de origem."
      },
      {
            "titulo": "Conceito 2: Colar (Ctrl+V)",
            "conteudo": "O comando Colar insere na posição atual do cursor os dados que foram armazenados temporariamente na área de transferência."
      }
],

    "resumoCurto": "Ctrl+C duplica o item para a memória. Ctrl+V cola o item. Ctrl+X remove do local original e move para a memória.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Formato de Texto Puro (.txt)",
            "conteudo": "Arquivos de texto simples (.txt) contêm apenas caracteres puros legíveis por humanos sem metadados visuais de estilização."
      },
      {
            "titulo": "Conceito 2: Vantagens para Programadores",
            "conteudo": "Por não conterem códigos ocultos de formatação, arquivos .txt são universalmente interpretados por compiladores e scripts."
      }
],

    "resumoCurto": "Arquivos .txt guardam caracteres puros sem formatação gráfica ou oculta, sendo leves e compatíveis com qualquer sistema.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Editores de Código Avançados",
            "conteudo": "Editores como o VS Code oferecem realce de sintaxe (syntax highlighting), identificando palavras-chave, variáveis e strings por cores."
      },
      {
            "titulo": "Conceito 2: Produtividade e Validação",
            "conteudo": "Recursos como auto-completar e detecção de erros em tempo real evitam falhas simples durante a digitação do código-fonte."
      }
],

    "resumoCurto": "O VS Code destaca sintaxes com cores e indica erros em tempo real, aumentando a velocidade e segurança na escrita de código.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Memória Volátil vs. Persistência",
            "conteudo": "A memória RAM é volátil e perde todas as informações ao desligar o computador. Gravar no disco garante a persistência do trabalho."
      },
      {
            "titulo": "Conceito 2: O Atalho de Salvamento (Ctrl+S)",
            "conteudo": "Adquirir o hábito de salvar o arquivo constantemente evita a perda indesejada de alterações causadas por instabilidade no sistema."
      }
],

    "resumoCurto": "Salvar frequentemente (Ctrl+S) garante a persistência dos dados no disco rígido antes que uma falha de energia limpe a memória RAM.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Fluxo Multitarefa",
            "conteudo": "Sistemas operacionais modernos permitem a execução simultânea de múltiplos programas, exigindo formas rápidas de navegação."
      },
      {
            "titulo": "Conceito 2: O Atalho Alt+Tab",
            "conteudo": "Pressionar Alt+Tab alterna o foco visual e de teclado instantaneamente para a última janela utilizada, aumentando a velocidade."
      }
],

    "resumoCurto": "O atalho Alt+Tab alterna instantaneamente entre as janelas ativas do sistema, otimizando o fluxo de trabalho multitarefa.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Armazenamento em Nuvem",
            "conteudo": "Arquivos na nuvem ficam salvos em data centers remotos acessíveis pela internet, permitindo colaboração e acesso de múltiplos dispositivos."
      },
      {
            "titulo": "Conceito 2: Backup e Segurança",
            "conteudo": "Sistemas de nuvem realizam cópias de segurança automáticas, protegendo documentos contra perdas por falhas no hardware local."
      }
],

    "resumoCurto": "Salvar na nuvem armazena dados em servidores remotos seguros via internet, permitindo acesso de qualquer lugar com backup automático.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Hierarquia de Pastas",
            "conteudo": "Pastas e diretórios organizam arquivos em estruturas hierárquicas, impedindo o acúmulo desordenado na área de trabalho."
      },
      {
            "titulo": "Conceito 2: Nomenclatura Organizada",
            "conteudo": "Nomear pastas com termos claros e categorias funcionais facilita a localização rápida e a manutenção por outros membros da equipe."
      }
],

    "resumoCurto": "Pastas organizam o sistema de arquivos. Nomeá-las com clareza evita perda de documentos e facilita buscas futuras.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Padronização de Nomes",
            "conteudo": "Nomes de arquivos devem ser autodescritivos e incluir versão ou data quando necessário (ex: relatorio_financeiro_2026.txt)."
      },
      {
            "titulo": "Conceito 2: Prevenção de Substituição",
            "conteudo": "Evitar nomes genéricos como 'trabalho.txt' reduz o risco de sobreescrever arquivos importantes por engano."
      }
],

    "resumoCurto": "Nomes padronizados fornecem contexto imediato sobre o conteúdo do arquivo, evitando ambiguidades e substituições acidentais.",
    "disciplina": "Hardware & Sistemas",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Definição de Algoritmo",
            "conteudo": "Um algoritmo é uma sequência finita de etapas lógicas e ordenadas criada para resolver um problema específico."
      },
      {
            "titulo": "Conceito 2: Determinismo e Clareza",
            "conteudo": "Cada passo do algoritmo deve ser inequívoco, garantindo que o mesmo resultado seja obtido sempre que for executado com as mesmas entradas."
      }
],

    "resumoCurto": "Algoritmo é uma sequência finita de passos lógicos e ordenados para solucionar um problema ou atingir um objetivo.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Representação Visual",
            "conteudo": "Fluxogramas são diagramas gráficos que utilizam formas geométricas padronizadas para ilustrar o fluxo de um algoritmo."
      },
      {
            "titulo": "Conceito 2: Símbolos Retângulo e Losango",
            "conteudo": "O retângulo representa um processo ou ação; o losango representa uma tomada de decisão que se divide em caminhos Sim ou Não."
      }
],

    "resumoCurto": "Fluxogramas ilustram graficamente o fluxo de execução. O retângulo representa ações e o losango representa decisões lógicas.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: As Três Fases do Processamento",
            "conteudo": "Todo sistema computacional opera no ciclo Entrada -> Processamento -> Saída."
      },
      {
            "titulo": "Conceito 2: Papel de Cada Etapa",
            "conteudo": "A Entrada capta os dados, o Processamento executa os cálculos e regras, e a Saída fornece o resultado final ao usuário."
      }
],

    "resumoCurto": "Entrada recebe dados externos, Processamento transforma as informações lógicas e Saída exibe o resultado final.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O que é Pseudocódigo?",
            "conteudo": "Pseudocódigo (ou Portugol) é uma forma estruturada de escrever algoritmos usando linguagem natural sem regras de sintaxe estritas."
      },
      {
            "titulo": "Conceito 2: Foco na Lógica",
            "conteudo": "Permite focar na resolução do problema e no encadeamento de ideias antes de aprender os detalhes de uma linguagem específica."
      }
],

    "resumoCurto": "Pseudocódigo permite praticar a lógica de programação em português estruturado sem a rigidez sintática das linguagens.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Blocos de Ação no Fluxograma",
            "conteudo": "No desenho de um fluxograma, a caixa retangular identifica etapas de processamento interno ou atribuição."
      },
      {
            "titulo": "Conceito 2: Exemplos de Ação",
            "conteudo": "Exemplos incluem somar dois números, aplicar um desconto ou atualizar o saldo de uma conta."
      }
],

    "resumoCurto": "O retângulo no fluxograma indica tarefas ativas ou operações matemáticas, como cálculos e atribuição de valores.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Finitude dos Algoritmos",
            "conteudo": "Todo algoritmo obrigatoriamente precisa ter um ponto de início e um ponto de término bem definidos."
      },
      {
            "titulo": "Conceito 2: Prevenção de Loops Infinitos",
            "conteudo": "Sem uma condição de parada clara, o computador pode travar tentando executar instruções indefinidamente."
      }
],

    "resumoCurto": "Todo algoritmo deve ter início e fim definidos para garantir a execução finita e evitar loops infinitos.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Tomada de Decisão em Tempo Real",
            "conteudo": "Sistemas automáticos monitoram sinais e tomam decisões imediatas com base em limiares pré-programados."
      },
      {
            "titulo": "Conceito 2: Exemplos Práticos",
            "conteudo": "Semáforos inteligentes alteram os tempos de luz verde de acordo com o fluxo de veículos detectado por sensores."
      }
],

    "resumoCurto": "Sistemas automáticos seguem regras condicionais contínuas baseadas em tempo ou leitura de sensores.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Importância da Ordem Lógica",
            "conteudo": "A sequência das instruções altera diretamente o resultado final de um algoritmo."
      },
      {
            "titulo": "Conceito 2: Exemplo de Inversão",
            "conteudo": "Tentar calcular a média antes de ler os valores das notas gera um erro grave de execução."
      }
],

    "resumoCurto": "Alterar a ordem de passos em um algoritmo modifica o fluxo de execução e pode gerar resultados incorretos ou erros.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Precisão nas Instruções",
            "conteudo": "O computador segue comandos ao pé da letra. Instruções vagas geram resultados imprevisíveis."
      },
      {
            "titulo": "Conceito 2: Validação de Etapas",
            "conteudo": "Revisar detalhadamente cada passo previne falhas antes da codificação final em computador."
      }
],

    "resumoCurto": "Instruções devem ser precisas e inequívocas para que o computador as interprete e execute sem falhas.",
    "disciplina": "Lógica de Programação",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O REPL em Python",
            "conteudo": "O terminal interativo do Python lê, avalia e exibe os resultados de cada instrução imediatamente após pressionar Enter."
      },
      {
            "titulo": "Conceito 2: Comandos de Saída",
            "conteudo": "Para encerrar uma sessão no terminal interativo, utilize a função exit() ou o atalho Ctrl+Z (Windows)."
      }
],

    "resumoCurto": "O terminal interativo do Python executa comandos linha por linha instantaneamente. Digite exit() ou quit() para sair.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Erros de Sintaxe (SyntaxError)",
            "conteudo": "Ocorrem quando o código violar as regras gramaticais da linguagem Python (ex: esquecer de fechar um parêntese)."
      },
      {
            "titulo": "Conceito 2: Interrupção Imediata",
            "conteudo": "O interpretador Python interrompe a execução do arquivo assim que encontra um erro de sintaxe."
      }
],

    "resumoCurto": "Erros de sintaxe ocorrem quando as regras gramaticais da linguagem são violadas, interrompendo a execução antes do fim.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Extensão .py",
            "conteudo": "Arquivos contendo código-fonte Python devem ser salvos obrigatoriamente com a extensão .py."
      },
      {
            "titulo": "Conceito 2: Execução via Linha de Comando",
            "conteudo": "No terminal, digite 'python nome_do_arquivo.py' para iniciar a interpretação do script."
      }
],

    "resumoCurto": "A extensão .py sinaliza ao sistema operacional e ao interpretador que o arquivo contém código-fonte Python executável.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Função print()",
            "conteudo": "A função interna print() envia dados para a saída padrão (tela do console)."
      },
      {
            "titulo": "Conceito 2: Aspas em Strings",
            "conteudo": "Textos literais devem ser delimitados por aspas simples ('texto') ou aspas duplas (\"texto\")."
      }
],

    "resumoCurto": "print() exibe informações no console. Textos (strings) devem obrigatoriamente estar envolvidos por aspas.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Comentários de Linha Unica (#)",
            "conteudo": "Linhas iniciadas com o caractere cerquilha (#) são ignoradas pelo interpretador Python."
      },
      {
            "titulo": "Conceito 2: Boas Práticas de Documentação",
            "conteudo": "Comentários servem para explicar o porquê de soluções complexas, tornando o código legível para outros devs."
      }
],

    "resumoCurto": "O símbolo # cria comentários que são ignorados pelo interpretador, servindo exclusivamente para documentar o código.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Evolução da Linguagem",
            "conteudo": "Python 3 introduziu melhorias significativas em relação ao Python 2, como tratamento nativo de UTF-8 e novo print()."
      },
      {
            "titulo": "Conceito 2: Manutenção de Código Legado",
            "conteudo": "Conhecer as diferenças ajuda na migração de sistemas antigos para versões modernas e seguras."
      }
],

    "resumoCurto": "Conhecer versões antigas do Python é importante para manter códigos legados e compreender a evolução da sintaxe.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Diferenciação Case-Sensitive",
            "conteudo": "Em Python, maiúsculas e minúsculas são totalmente distintas."
      },
      {
            "titulo": "Conceito 2: Exemplo de Variáveis",
            "conteudo": "As variáveis 'Total', 'total' e 'TOTAL' referenciam três posições de memória completamente diferentes."
      }
],

    "resumoCurto": "Python é case-sensitive: variáveis com maiúsculas e minúsculas (como Nome e nome) são tratadas como distintas.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Interpretador Python",
            "conteudo": "Python é uma linguagem interpretada. O código é traduzido em bytecode e executado pela Máquina Virtual Python (PVM)."
      },
      {
            "titulo": "Conceito 2: Agilidade de Desenvolvimento",
            "conteudo": "Não há necessidade de compilar um executável binário antes de testar as alterações no código."
      }
],

    "resumoCurto": "O interpretador lê o código-fonte em alto nível e o traduz para linguagem de máquina durante a execução.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Identaação Obrigatória",
            "conteudo": "Diferente de C ou Java que usam chaves {}, Python usa o recuo (espaços/tabs) para definir blocos de código."
      },
      {
            "titulo": "Conceito 2: IndentationError",
            "conteudo": "Desalinhar linhas pertencentes ao mesmo bloco resulta em um erro fatal durante a interpretação."
      }
],

    "resumoCurto": "A identação (espaçamento) em Python delimita o início e o fim de blocos de código; alinhamentos errados causam erros de sintaxe.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Tipagem Dinâmica",
            "conteudo": "Em Python não é necessário declarar o tipo da variável com antecedência."
      },
      {
            "titulo": "Conceito 2: Atribuição Automática",
            "conteudo": "O tipo é inferido automaticamente com base no valor atribuído (ex: x = 10 cria um inteiro)."
      }
],

    "resumoCurto": "A tipagem dinâmica define o tipo de dado automaticamente no momento da atribuição de um valor à variável.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Leitura de Dados com input()",
            "conteudo": "A função input('mensagem') exibe o texto e aguarda a digitação do usuário no teclado."
      },
      {
            "titulo": "Conceito 2: Retorno Sempre como String",
            "conteudo": "Qualquer valor lido por input() retorna como tipo str, mesmo que o usuário digite números."
      }
],

    "resumoCurto": "input() captura entradas do teclado sempre como texto (str), exigindo conversão caso números sejam necessários.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Tipo Inteiro (int)",
            "conteudo": "Representa números inteiros positivos ou negativos sem casas decimais (ex: -5, 0, 42)."
      },
      {
            "titulo": "Conceito 2: O Tipo Flutuante (float)",
            "conteudo": "Representa números reais contendo ponto decimal (ex: 3.14, 0.5, -12.8)."
      }
],

    "resumoCurto": "int armazena números inteiros sem vírgula (ex: 10), enquanto float armazena números com casas decimais (ex: 10.5).",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Tipo Booleano (bool)",
            "conteudo": "Valores lógicos em Python são representados por True (Verdadeiro) e False (Falso)."
      },
      {
            "titulo": "Conceito 2: Grafia Maiúscula",
            "conteudo": "A primeira letra deve ser obrigatoriamente maiúscula (True e False)."
      }
],

    "resumoCurto": "O tipo Booleano representa valores lógicos de verdade, assumindo apenas dois estados: True (Verdadeiro) ou False (Falso).",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Regras de Nomenclatura",
            "conteudo": "Nomes de variáveis devem começar com letras ou sublinhado (_), nunca com números."
      },
      {
            "titulo": "Conceito 2: Padrão snake_case",
            "conteudo": "Recomenda-se usar letras minúsculas separadas por sublinhado (ex: valor_total_compra)."
      }
],

    "resumoCurto": "Nomes de variáveis não podem começar com números nem conter espaços; use letras, números e sublinhados (snake_case).",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Inspeção com type()",
            "conteudo": "A função type(objeto) retorna a classe/tipo de dado do valor fornecido."
      },
      {
            "titulo": "Conceito 2: Diagnóstico de Erros",
            "conteudo": "Útil para identificar quando uma variável contém texto em vez do número esperado."
      }
],

    "resumoCurto": "type() retorna o tipo de dado atual de uma variável, ajudando a depurar inconsistências durante a execução.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Conversão de Tipos (Casting)",
            "conteudo": "Casting é o processo de transformar o valor de um tipo em outro int(), float(), str()."
      },
      {
            "titulo": "Conceito 2: Exemplo Prático",
            "conteudo": "int('25') converte o texto '25' no número inteiro 25 para permitir operações matemáticas."
      }
],

    "resumoCurto": "Casting é a conversão explícita de tipos; a função float('10') transforma o texto '10' no número real 10.0.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Mutabilidade de Variáveis",
            "conteudo": "O valor de uma variável pode ser alterado a qualquer momento durante a execução do programa."
      },
      {
            "titulo": "Conceito 2: Convenção de Constantes",
            "conteudo": "Para valores que não devem mudar (ex: PI = 3.14), usa-se nomes totalmente em MAIÚSCULAS por convenção."
      }
],

    "resumoCurto": "Variáveis podem mudar de valor durante a execução, enquanto constantes mantêm valores fixos por convenção semântica.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Operador + com Números",
            "conteudo": "Quando aplicado entre inteiros ou floats, o símbolo + realiza a adição matemática."
      },
      {
            "titulo": "Conceito 2: O Operador + com Textos",
            "conteudo": "Quando aplicado entre strings, o símbolo + realiza a junção dos textos (concatenação)."
      }
],

    "resumoCurto": "O operador + entre strings realiza concatenação (junta os textos), enquanto entre números realiza soma aritmética.",
    "disciplina": "Python Fundamentos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Estrutura if",
            "conteudo": "A instrução if avalia se uma expressão lógica é verdadeira para executar o bloco interno."
      },
      {
            "titulo": "Conceito 2: Bloco Identado",
            "conteudo": "Todas as linhas recuadas abaixo do if pertencem ao corpo da condição."
      }
],

    "resumoCurto": "O recuo (Tab) abaixo do if indica as instruções que pertencem exclusivamente àquele bloco condicional.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Operador de Módulo (%)",
            "conteudo": "O operador % devolve o resto da divisão entre dois números inteiros."
      },
      {
            "titulo": "Conceito 2: Verificação Par/Ímpar",
            "conteudo": "Se numero % 2 == 0, o número é divisível por 2 (Par); caso contrário, é Ímpar."
      }
],

    "resumoCurto": "O operador % calcula o resto da divisão inteira. Se numero % 2 == 0, o número é par; caso contrário, é ímpar.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Atribuição (=)",
            "conteudo": "Um único sinal de igual (=) atribui o valor da direita para a variável da esquerda."
      },
      {
            "titulo": "Conceito 2: Comparação de Igualdade (==)",
            "conteudo": "Dois sinais de igual (==) comparam se os dois valores são iguais retornando True ou False."
      }
],

    "resumoCurto": "= atribui um valor a uma variável, enquanto == compara se dois valores são iguais retornando um booleano.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Estrutura elif",
            "conteudo": "Abreviação de 'else if', permite testar múltiplas condições em sequência."
      },
      {
            "titulo": "Conceito 2: Eficiência",
            "conteudo": "Assim que uma condição elif é satisfeita, as demais são ignoradas pelo interpretador."
      }
],

    "resumoCurto": "elif encadeia testes condicionais mutuamente exclusivos de forma mais eficiente do que múltiplos ifs independentes.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Operador Lógico and",
            "conteudo": "Exige que a condição A E a condição B sejam ambas verdadeiras simultaneamente."
      },
      {
            "titulo": "Conceito 2: Tabela Verdade",
            "conteudo": "True and True resulta em True. Se qualquer uma for False, o resultado final é False."
      }
],

    "resumoCurto": "O operador and exige que todas as condições sejam verdadeiras para que o resultado final seja True.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Operador Lógico or",
            "conteudo": "Exige que pelo menos uma das condições seja verdadeira."
      },
      {
            "titulo": "Conceito 2: Avaliação Curto-Circuito",
            "conteudo": "Se a primeira condição for True, o Python nem precisa avaliar a segunda."
      }
],

    "resumoCurto": "O operador or requer que ao menos uma das condições seja verdadeira para que o bloco seja executado.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Cláusula else",
            "conteudo": "Define o caminho alternativo padrão quando todas as checagens anteriores forem falsas."
      },
      {
            "titulo": "Conceito 2: Sem Condição Direta",
            "conteudo": "O else não recebe parâmetros; ele captura tudo o que sobrou."
      }
],

    "resumoCurto": "else define o bloco de código padrão a ser executado caso nenhuma das condições anteriores seja atendida.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O que são Valores Limite?",
            "conteudo": "São os números nos limites exatos das faixas de decisão (ex: 7.0 em nota >= 7.0)."
      },
      {
            "titulo": "Conceito 2: Testes de Precisão",
            "conteudo": "Garantir o operador correto (>= ou >) evita reprovar alunos com a nota exata de corte."
      }
],

    "resumoCurto": "Valores de borda são os pontos limites de uma condição (ex: 6.0 em >= 6.0), fundamentais para testes de precisão.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Operador Desigual (!=)",
            "conteudo": "Verifica se dois valores são diferentes um do outro."
      },
      {
            "titulo": "Conceito 2: Retorno Booleano",
            "conteudo": "Retorna True se os valores forem distintos e False se forem exatamente iguais."
      }
],

    "resumoCurto": "O operador != verifica a desigualdade entre dois elementos, retornando True se os valores forem diferentes.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Estrutura while",
            "conteudo": "Executa repetidamente um bloco de código enquanto sua condição permanecer verdadeira."
      },
      {
            "titulo": "Conceito 2: Cuidado com Loop Infinito",
            "conteudo": "O corpo do loop deve alterar variáveis que eventualmente tornem a condição falsa."
      }
],

    "resumoCurto": "Loops infinitos ocorrem quando a condição do while nunca se torna falsa; altere a variável de controle no laço.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Laço for com range()",
            "conteudo": "Usado para iterar um número determinado de vezes através de uma sequência."
      },
      {
            "titulo": "Conceito 2: Intervalo Exclusivo no Fim",
            "conteudo": "range(5) gera 0, 1, 2, 3, 4 (o 5 não é incluído)."
      }
],

    "resumoCurto": "for i in range(5) gera os valores 0, 1, 2, 3 e 4. O limite superior (5) não é incluído na sequência.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Variáveis Contadoras",
            "conteudo": "Variáveis incrementadas em passos fixos (ex: contador += 1) para monitorar repetições."
      },
      {
            "titulo": "Conceito 2: Inicialização",
            "conteudo": "Devem ser criadas antes do início do laço (ex: contador = 0)."
      }
],

    "resumoCurto": "Variáveis contadoras acumulam acréscimos constantes (ex: cont += 1) para controlar a quantidade de repetições.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Contador vs. Acumulador",
            "conteudo": "O contador soma unidades fixas (1 em 1); o acumulador soma valores dinâmicos (ex: soma += preco)."
      },
      {
            "titulo": "Conceito 2: Aplicação",
            "conteudo": "Usado para calcular somatórios totais de compras ou notas."
      }
],

    "resumoCurto": "Contadores somam valores fixos de contagem (ex: +1); acumuladores somam valores variáveis (ex: soma += preco).",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Escolhendo o Laço Correto",
            "conteudo": "Use for quando souber a quantidade exata de repetições; use while quando depender de um evento externo."
      },
      {
            "titulo": "Conceito 2: Legibilidade",
            "conteudo": "O for torna o código mais limpo ao evitar o controle manual de incremento."
      }
],

    "resumoCurto": "Use for para iterações com número de vezes conhecido e while para repetições condicionais indeterminadas.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Comando break",
            "conteudo": "Interrompe a execução do laço imediatamente e sai da repetição."
      },
      {
            "titulo": "Conceito 2: Uso Comum",
            "conteudo": "Utilizado para encerrar menus ou cancelar buscas ao encontrar o elemento."
      }
],

    "resumoCurto": "break interrompe e encerra imediatamente a execução do laço de repetição atual, desviando o fluxo para fora.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Comando continue",
            "conteudo": "Pula o restante das instruções da repetição atual e avança para a próxima iteração."
      },
      {
            "titulo": "Conceito 2: Diferença para o break",
            "conteudo": "O continue não encerra o laço, apenas ignora o passo atual."
      }
],

    "resumoCurto": "continue pula o restante do código na repetição atual e avança diretamente para a próxima iteração do laço.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Parâmetros do range(início, fim, passo)",
            "conteudo": "Aceita três argumentos: onde começa, onde termina e o incremento."
      },
      {
            "titulo": "Conceito 2: Exemplo com Passo",
            "conteudo": "range(0, 10, 2) gera 0, 2, 4, 6, 8 (números pares)."
      }
],

    "resumoCurto": "range(0, 10, 2) gera a sequência 0, 2, 4, 6, 8. O terceiro parâmetro (2) indica o tamanho do passo de incremento.",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Laços Aninhados",
            "conteudo": "Um laço contido dentro de outro laço de repetição."
      },
      {
            "titulo": "Conceito 2: Frequência de Execução",
            "conteudo": "Para cada iteração do laço externo, o laço interno roda completamente."
      }
],

    "resumoCurto": "Loops aninhados executam um laço interno completo para cada iteração do laço externo (ex: horas e minutos).",
    "disciplina": "Estruturas de Controle & Repetição",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O que é uma Lista?",
            "conteudo": "Uma lista em Python é uma sequência mutável e ordenada de elementos entre colchetes []."
      },
      {
            "titulo": "Conceito 2: Acesso por Índice Base Zero",
            "conteudo": "O primeiro elemento fica no índice 0, o segundo no índice 1 e assim por diante."
      }
],

    "resumoCurto": "Listas agrupam múltiplos elementos ordenados sob uma única variável, facilitando o acesso e a iteração com laços.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Matrizes 2D",
            "conteudo": "Estrutura formada por uma lista que contém outras listas (linhas e colunas)."
      },
      {
            "titulo": "Conceito 2: Sintaxe de Acesso",
            "conteudo": "matriz[linha][coluna] acessa o elemento na posição especificada."
      }
],

    "resumoCurto": "Em matrizes 2D matriz[x][y], o primeiro índice [x] representa a linha e o segundo índice [y] representa a coluna.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: IndexError: list index out of range",
            "conteudo": "Ocorre quando tentamos acessar uma posição de índice que não existe na lista."
      },
      {
            "titulo": "Conceito 2: Prevenção",
            "conteudo": "Garantir que o índice buscado seja menor do que len(lista)."
      }
],

    "resumoCurto": "Index Out of Range ocorre ao tentar acessar um elemento usando um índice maior ou igual ao tamanho da lista.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Método .append()",
            "conteudo": "Insere um novo elemento exatamente no final da lista."
      },
      {
            "titulo": "Conceito 2: Modificação In-Place",
            "conteudo": "Altera a lista original diretamente sem precisar reatribuir."
      }
],

    "resumoCurto": ".append(valor) adiciona um novo elemento exatamente ao final de uma lista existente.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Método .pop()",
            "conteudo": "Remove e retorna o último item da lista (ou o item do índice especificado)."
      },
      {
            "titulo": "Conceito 2: Redução Dinâmica",
            "conteudo": "Diminui o tamanho total da lista em 1 unidade."
      }
],

    "resumoCurto": ".pop() remove e retorna o último elemento de uma lista, reduzindo seu tamanho dinamicamente.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Iterando em Listas com for",
            "conteudo": "Sintaxe 'for item in lista:' percorre todos os elementos de forma simples."
      },
      {
            "titulo": "Conceito 2: Vantagens",
            "conteudo": "Elimina a necessidade de controlar índices manuais durante a leitura."
      }
],

    "resumoCurto": "for elemento in lista percorre todos os itens da coleção um a um, atribuindo o valor atual à variável temporária.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Função len()",
            "conteudo": "Retorna a quantidade total de elementos presentes na coleção."
      },
      {
            "titulo": "Conceito 2: Relação com Índices",
            "conteudo": "O último elemento de uma lista fica sempre na posição len(lista) - 1."
      }
],

    "resumoCurto": "len(lista) retorna o número total de elementos contidos na lista.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Inicialização de Lista Vazia",
            "conteudo": "Criar uma lista com colchetes vazios [] permite acumular dados gradualmente."
      },
      {
            "titulo": "Conceito 2: Preenchimento",
            "conteudo": "Use laços com .append() para preencher a lista a partir de dados digitados."
      }
],

    "resumoCurto": "Iniciar com lista = [] cria um recipiente vazio para ser preenchido dinamicamente durante a execução.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Aplicações de Matrizes",
            "conteudo": "Matrizes são usadas para representar tabelas, jogos de tabuleiro, pixels e mapas."
      },
      {
            "titulo": "Conceito 2: Laços Duplos",
            "conteudo": "Percom-se matrizes usando um for externo para linhas e um for interno para colunas."
      }
],

    "resumoCurto": "Matrizes representam dados dispostos em linhas e colunas (como planilhas, tabuleiros e mapas de coordenadas).",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Formatação com f-strings",
            "conteudo": "Sintaxe f'Texto {variavel:.2f}' permite formatar números de ponto flutuante com casas decimais fixas."
      },
      {
            "titulo": "Conceito 2: Arredondamento Visual",
            "conteudo": "Padroniza exibição de valores monetários como R$ 10.50."
      }
],

    "resumoCurto": "f-strings com formatadores (ex: {:.2f}) padronizam a exibição de casas decimais em números de ponto flutuante.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Divisão por Zero (ZeroDivisionError)",
            "conteudo": "Dividir qualquer número por 0 resulta em uma exceção grave no programa."
      },
      {
            "titulo": "Conceito 2: Checagem Prévia",
            "conteudo": "Sempre valide se o divisor é != 0 antes de realizar a operação."
      }
],

    "resumoCurto": "Tratar divisões por zero com checagens prévias evita exceções e interrupções inesperadas no sistema.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Experiência do Usuário (UX)",
            "conteudo": "Mensagens claras de erro ajudam o usuário a entender exatamente o que precisa ser corrigido."
      },
      {
            "titulo": "Conceito 2: Qualidade de Software",
            "conteudo": "Sistemas profissionais orientam o usuário sem travar abruptamente."
      }
],

    "resumoCurto": "Feedbacks claros explicam a causa exata de erros, melhorando a experiência e a orientação do usuário.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Cálculos de Porcentagem",
            "conteudo": "Para calcular X% de um valor, multiplica-se por (X / 100)."
      },
      {
            "titulo": "Conceito 2: Descontos Sequenciais",
            "conteudo": "Aplicar descontos em etapas altera o valor base intermediário."
      }
],

    "resumoCurto": "Aplicar descontos compostos altera a base de cálculo a cada etapa, resultando em valores finais diferentes de descontos diretos.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Escolha de Tipos Numéricos",
            "conteudo": "Use int para unidades inteiras contáveis (quantidade de pessoas, produtos)."
      },
      {
            "titulo": "Conceito 2: Uso de float",
            "conteudo": "Use float para medições contínuas (preços, peso, temperatura, média)."
      }
],

    "resumoCurto": "Utilize float para grandezas contínuas/monetárias e int para quantidades contáveis e discretas.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Hierarquia nas Condições",
            "conteudo": "Em cadeias if/elif, ordene os testes das faixas mais restritas para as mais genéricas."
      },
      {
            "titulo": "Conceito 2: Prevenção de Sombras",
            "conteudo": "Uma condição genérica no topo pode impedir que subcondições específicas sejam avaliadas."
      }
],

    "resumoCurto": "A ordem dos testes no elif deve seguir uma hierarquia lógica correta para evitar que faixas genéricas capturem valores.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Agrupamento com Parênteses",
            "conteudo": "Use parênteses em expressões com and e or para garantir a ordem de avaliação desejada."
      },
      {
            "titulo": "Conceito 2: Legibilidade",
            "conteudo": "Evita ambiguidades no entendimento das regras condicionais."
      }
],

    "resumoCurto": "Combinar and e or com parênteses permite construir regras lógicas complexas e personalizadas.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Módulo random",
            "conteudo": "Biblioteca padrão do Python para geração de números aleatórios e seleções."
      },
      {
            "titulo": "Conceito 2: random.randint(a, b)",
            "conteudo": "Gera um número inteiro aleatório entre a e b (ambos inclusivos)."
      }
],

    "resumoCurto": "O módulo random introduz aleatoriedade e imprevisibilidade em sorteios, jogos e simulações.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Trimming e Normalização de Textos",
            "conteudo": ".strip() remove espaços extras nas pontas e .lower() converte tudo para minúsculas."
      },
      {
            "titulo": "Conceito 2: Comparações Robustas",
            "conteudo": "Garante que ' Admin ' e 'admin' sejam reconhecidos como idênticos."
      }
],

    "resumoCurto": "Higienizar entradas (ex: .lower() e .strip()) uniformiza os textos digitados prevenindo erros por formatação.",
    "disciplina": "Estruturas de Dados & Algoritmos",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Escopo Local",
            "conteudo": "Variáveis criadas dentro de uma função existem apenas enquanto a função é executada."
      },
      {
            "titulo": "Conceito 2: Isolamento",
            "conteudo": "Impede que modificações internas alterem variáveis externas com o mesmo nome."
      }
],

    "resumoCurto": "Variáveis locais nascem e morrem dentro da função onde foram declaradas, não sendo acessíveis externamente.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Parâmetros da Função",
            "conteudo": "Variáveis declaradas no cabeçalho da função para receber dados de entrada."
      },
      {
            "titulo": "Conceito 2: Argumentos",
            "conteudo": "Valores concretos passados para a função no momento em que ela é chamada."
      }
],

    "resumoCurto": "Parâmetros recebem argumentos enviados de fora da função, permitindo processar dados dinâmicos.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: A Instrução return",
            "conteudo": "Devolve o resultado do processamento da função para a linha que a chamou."
      },
      {
            "titulo": "Conceito 2: Fim da Execução",
            "conteudo": "O comando return encerra imediatamente a execução da função."
      }
],

    "resumoCurto": "print() exibe mensagens no console; return devolve o valor calculado para ser armazenado ou reutilizado no código.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Modularização de Código",
            "conteudo": "Dividir um programa grande em funções pequenas e especializadas."
      },
      {
            "titulo": "Conceito 2: Vantagens",
            "conteudo": "Facilita a localização de bugs e permite a reutilização das funções em outros arquivos."
      }
],

    "resumoCurto": "Modularizar em funções pequenas melhora a legibilidade, facilita testes unitários e reduz a duplicação de código.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Docstrings em Funções",
            "conteudo": "Textos de documentação delimitados por três aspas (\"\"\" doc \"\"\") na primeira linha da função."
      },
      {
            "titulo": "Conceito 2: Ajuda Integrada",
            "conteudo": "Permite que a função help() e o editor exibam orientações automáticas ao usuário."
      }
],

    "resumoCurto": "Docstrings (aspas triplas) documentam o propósito, parâmetros e retorno de uma função diretamente no código.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Parâmetros Opcionais (Default)",
            "conteudo": "Definir um valor padrão no cabeçalho (ex: def calcular(taxa=0.10))."
      },
      {
            "titulo": "Conceito 2: Flexibilidade",
            "conteudo": "Permite chamar a função sem passar aquele argumento se o padrão for suficiente."
      }
],

    "resumoCurto": "Parâmetros padrão (ex: def f(x=10)) definem valores default utilizados caso o argumento não seja enviado.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Chamada de Função",
            "conteudo": "Para executar uma função deve-se utilizar o nome acompanhado dos parênteses (ex: minha_funcao())."
      },
      {
            "titulo": "Conceito 2: Sem Parênteses",
            "conteudo": "Digitar apenas o nome da função sem () refere-se ao objeto da função, sem executá-la."
      }
],

    "resumoCurto": "Funções são invocadas pelo seu nome seguido de parênteses nome_funcao(); sem parênteses você obtém a referência.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: O Princípio DRY",
            "conteudo": "DRY (Don't Repeat Yourself - Não Repita a Si Mesmo) orienta a reutilização de código."
      },
      {
            "titulo": "Conceito 2: Refatoração",
            "conteudo": "Se você copiou e colou um bloco de código mais de duas vezes, transforme-o em uma função."
      }
],

    "resumoCurto": "O princípio DRY incentiva a criação de funções e abstrações para evitar repetição desnecessária de código.",
    "disciplina": "Funções & Modularização",
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
    "textosPreparatorios": [
      {
            "titulo": "Conceito 1: Importação de Módulos (import)",
            "conteudo": "Instrução usada para carregar arquivos com funções externas e bibliotecas no programa atual."
      },
      {
            "titulo": "Conceito 2: Sintaxe",
            "conteudo": "import math ou from math import sqrt permite utilizar recursos prontos."
      }
],

    "resumoCurto": "O comando import carrega bibliotecas e módulos pré-existentes estendendo as funcionalidades do programa.",
    "disciplina": "Funções & Modularização",
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
  },
  ...bancoQuestoesExamullator
};
