export interface EtapaTrilha {
  id: string;
  titulo: string;
  descricao: string;
  questoesIds: string[];
  icone: string;
  tempoEstimado: string;
}

export interface TrilhaAprendizado {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  icone: string;
  cor: string;
  nivelRecomendado: string;
  etapas: EtapaTrilha[];
}

export const TRILHAS_DE_TESTE: Record<string, TrilhaAprendizado> = {
  "trilha-hardware": {
    id: "trilha-hardware",
    nome: "Trilha 1: Fundamentos de Hardware & Sistemas Operacionais",
    categoria: "Hardware & Sistemas",
    descricao: "Domine os componentes físicos do computador, atalhos do sistema, editores de texto e gestão de arquivos.",
    icone: "💻",
    cor: "from-blue-600 to-[#111827]",
    nivelRecomendado: "Iniciante (Nível 0)",
    etapas: [
      {
        id: "etapa-hw-1",
        titulo: "Módulo 1: Hardware vs Software e Atalhos do SO",
        descricao: "Compreenda a diferença entre a camada física e lógica e domine os atalhos de produtividade.",
        questoesIds: ["001", "002", "006"],
        icone: "⚡",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-hw-2",
        titulo: "Módulo 2: Editores de Código e Arquivos .txt",
        descricao: "Aprenda por que arquivos de texto puro e o VS Code são essenciais para programadores.",
        questoesIds: ["003", "004", "005"],
        icone: "📄",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-hw-3",
        titulo: "Módulo 3: Nuvem, Pastas e Organização de Arquivos",
        descricao: "Pratique a persistência de dados, boas práticas de nomenclatura e backup em nuvem.",
        questoesIds: ["007", "008", "009"],
        icone: "☁️",
        tempoEstimado: "20 min"
      }
    ]
  },
  "trilha-logica": {
    id: "trilha-logica",
    nome: "Trilha 2: Raciocínio Lógico & Algoritmos",
    categoria: "Lógica de Programação",
    descricao: "Desenvolva o pensamento computacional através de fluxogramas, pseudocódigo e estruturas de decisão.",
    icone: "🧩",
    cor: "from-indigo-600 to-slate-900",
    nivelRecomendado: "Iniciante a Intermediário",
    etapas: [
      {
        id: "etapa-log-1",
        titulo: "Módulo 1: Conceito de Algoritmos e Finitude",
        descricao: "Entenda o que são passos lógicos determinísticos e por que todo algoritmo precisa de início e fim.",
        questoesIds: ["101", "106", "109"],
        icone: "🎯",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-log-2",
        titulo: "Módulo 2: Fluxogramas e Entrada, Processamento e Saída",
        descricao: "Aprenda a interpretar diagramas com retângulos e losangos e o fluxo computacional.",
        questoesIds: ["102", "103", "105"],
        icone: "🔄",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-log-3",
        titulo: "Módulo 3: Pseudocódigo e Ordem de Execução",
        descricao: "Pratique o rascunho de soluções em Portugol e analise o impacto da ordem das instruções.",
        questoesIds: ["104", "107", "108"],
        icone: "📝",
        tempoEstimado: "20 min"
      }
    ]
  },
  "trilha-python-basico": {
    id: "trilha-python-basico",
    nome: "Trilha 3: Python Fundamentos & Tipagem",
    categoria: "Python Fundamentos",
    descricao: "Dê seus primeiros passos na linguagem Python: sintaxe, variáveis, entrada de dados e casting.",
    icone: "🐍",
    cor: "from-emerald-600 to-slate-900",
    nivelRecomendado: "Iniciante",
    etapas: [
      {
        id: "etapa-py-1",
        titulo: "Módulo 1: Terminal Interativo, print() e Sintaxe",
        descricao: "Execute comandos no REPL do Python e aprenda a exibir textos com print().",
        questoesIds: ["201", "204", "209"],
        icone: "🖥️",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-py-2",
        titulo: "Módulo 2: Tipos de Dados (int, float, str, bool)",
        descricao: "Explore a tipagem dinâmica e entenda a diferença entre números, textos e booleanos.",
        questoesIds: ["301", "303", "304"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-py-3",
        titulo: "Módulo 3: input(), Casting e Operações",
        descricao: "Receba dados do usuário e converta tipos com int(), float() e str().",
        questoesIds: ["302", "306", "307"],
        icone: "⌨️",
        tempoEstimado: "20 min"
      }
    ]
  },
  "trilha-controle-repeticao": {
    id: "trilha-controle-repeticao",
    nome: "Trilha 4: Controle de Fluxo & Repetições em Python",
    categoria: "Estruturas de Controle",
    descricao: "Aprenda a tomar decisões com if/elif/else e automatizar tarefas com loops for e while.",
    icone: "🔁",
    cor: "from-amber-600 to-slate-900",
    nivelRecomendado: "Intermediário",
    etapas: [
      {
        id: "etapa-ctrl-1",
        titulo: "Módulo 1: Estruturas Condicionais (if, elif, else)",
        descricao: "Construa regras de decisão e entenda o uso dos operadores relacionais e lógicos.",
        questoesIds: ["401", "404", "407"],
        icone: "🔀",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-ctrl-2",
        titulo: "Módulo 2: Laços de Repetição for e range()",
        descricao: "Repita tarefas um número determinado de vezes utilizando sequências numéricas.",
        questoesIds: ["502", "504", "508"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-ctrl-3",
        titulo: "Módulo 3: Laços while e Controle com break/continue",
        descricao: "Crie repetições condicionais indeterminadas e controle a saída com break e continue.",
        questoesIds: ["501", "506", "507"],
        icone: "⚡",
        tempoEstimado: "25 min"
      }
    ]
  },
  "trilha-dados-funcoes": {
    id: "trilha-dados-funcoes",
    nome: "Trilha 5: Listas, Matrizes & Funções Modulares",
    categoria: "Estruturas de Dados & Funções",
    descricao: "Armazene coleções de dados complexos em listas/matrizes e crie funções reutilizáveis com def.",
    icone: "⚙️",
    cor: "from-purple-600 to-slate-900",
    nivelRecomendado: "Avançado",
    etapas: [
      {
        id: "etapa-df-1",
        titulo: "Módulo 1: Listas e Métodos (.append(), .pop(), len())",
        descricao: "Crie coleções de dados dinâmicas e utilize métodos de inserção e remoção.",
        questoesIds: ["601", "604", "607"],
        icone: "📦",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-df-2",
        titulo: "Módulo 2: Declaração de Funções (def, parâmetros, return)",
        descricao: "Organize o código em blocos modulares reutilizáveis com entrada e saída.",
        questoesIds: ["801", "802", "803"],
        icone: "🛠️",
        tempoEstimado: "25 min"
      },
      {
        id: "etapa-df-3",
        titulo: "Módulo 3: Princípio DRY e Documentação de Código",
        descricao: "Aprenda o princípio Don't Repeat Yourself e documente funções com docstrings.",
        questoesIds: ["804", "805", "808"],
        icone: "🏆",
        tempoEstimado: "25 min"
      }
    ]
  }
};
