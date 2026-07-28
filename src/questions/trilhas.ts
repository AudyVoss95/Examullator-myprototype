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
  "trilha-fixacao-guiada": {
    id: "trilha-fixacao-guiada",
    nome: "Trilha de Estudos - Módulos de Fixação Guiada (101 a 116)",
    categoria: "Lógica e Linguagem de Programação",
    descricao: "Jornada completa de fixação guiada com 16 módulos cobrindo SO, Algoritmos, Tipagem e Controle de Fluxo. (Permite voltar e revisar).",
    icone: "📚",
    cor: "from-blue-600 to-indigo-900",
    nivelRecomendado: "Iniciante ao Avançado (Nível 0 ao 2)",
    etapas: [
      {
        id: "etapa-fix-1",
        titulo: "Módulo 0: Atalhos do SO e Organização de Arquivos .py",
        descricao: "Aprenda o duplo comportamento de Ctrl+C no terminal e convenções de nomenclatura em Python.",
        questoesIds: ["101", "102"],
        icone: "💻",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-fix-2",
        titulo: "Módulo 1: Conceito de Algoritmo e Fluxogramas Padronizados",
        descricao: "Domine as propriedades Finito, Definido e Eficaz e os símbolos geométricos de decisão (Losango).",
        questoesIds: ["103", "104"],
        icone: "🧩",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-fix-3",
        titulo: "Módulo 2: Variáveis, Tipos Primitivos e Captura com input()",
        descricao: "Explore str, int, float, bool, coerção de tipos e formatação de saídas com f-strings.",
        questoesIds: ["105", "106"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-fix-4",
        titulo: "Módulo 3: Operadores Aritméticos, Módulo % e Precedência",
        descricao: "Cheque paridade com (num % 2 == 0) e aprenda a ordem das operações com parênteses.",
        questoesIds: ["107", "108"],
        icone: "⚡",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-fix-5",
        titulo: "Módulo 4: Estruturas Condicionais (if/else) e Valores de Borda",
        descricao: "Compreenda a atribuição (=) vs comparação (==) e a relevância de testes nos limites.",
        questoesIds: ["109", "110"],
        icone: "🔀",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-fix-6",
        titulo: "Módulo 5: Operadores Lógicos (and/or) e Decisão Múltipla (elif)",
        descricao: "Avalie condições compostas, precedência lógica e padronização com .lower().",
        questoesIds: ["111", "112"],
        icone: "⚖️",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-fix-7",
        titulo: "Módulo 6: Anatomia do Laço while, Contadores e Acumuladores",
        descricao: "Identifique as 3 partes do while, previna loops infinitos e diferencie i += 1 de soma += val.",
        questoesIds: ["113", "114"],
        icone: "🔁",
        tempoEstimado: "25 min"
      },
      {
        id: "etapa-fix-8",
        titulo: "Módulo 7: Valor Sentinela, while True e Proteção Contra Erros",
        descricao: "Interrompa laços com break, previna divisão por zero e utilize o módulo random.",
        questoesIds: ["115", "116"],
        icone: "🛡️",
        tempoEstimado: "25 min"
      }
    ]
  },
  "trilha-avaliacao-final": {
    id: "trilha-avaliacao-final",
    nome: "Avaliação Final de Consolidação / Recuperação (201 a 216)",
    categoria: "Lógica e Linguagem de Programação",
    descricao: "Exame oficial de consolidação contendo 16 questões dissertativas cobrindo todo o programa da disciplina. (Navegação restrita com retorno bloqueado).",
    icone: "🏆",
    cor: "from-amber-600 to-red-950",
    nivelRecomendado: "Avaliação Oficial (Níveis 0, 1 e 2)",
    etapas: [
      {
        id: "etapa-eval-1",
        titulo: "Parte 1: Fundamentos de Sistemas, Fluxogramas e Tipagem",
        descricao: "Avaliação de conceitos de terminal, finitude de algoritmos, losangos e input().",
        questoesIds: ["201", "202", "203", "211", "212"],
        icone: "📝",
        tempoEstimado: "30 min"
      },
      {
        id: "etapa-eval-2",
        titulo: "Parte 2: Módulo %, Condicionais, Operadores Lógicos e elif",
        descricao: "Avaliação de checagem de paridade, valores de borda, parênteses e case-sensitivity.",
        questoesIds: ["204", "205", "206", "207", "213", "214"],
        icone: "🎯",
        tempoEstimado: "35 min"
      },
      {
        id: "etapa-eval-3",
        titulo: "Parte 3: Laços while, Sentinela, Acumuladores e Módulos",
        descricao: "Avaliação de diagnóstico de loops infinitos, break, proteção ZeroDivisionError e random.",
        questoesIds: ["208", "209", "210", "215", "216"],
        icone: "🧠",
        tempoEstimado: "35 min"
      }
    ]
  },
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
        questoesIds: ["101", "102", "103"],
        icone: "🎯",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-log-2",
        titulo: "Módulo 2: Fluxogramas e Entrada, Processamento e Saída",
        descricao: "Aprenda a interpretar diagramas com retângulos e losangos e o fluxo computacional.",
        questoesIds: ["104", "105", "106"],
        icone: "🔄",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-log-3",
        titulo: "Módulo 3: Pseudocódigo e Ordem de Execução",
        descricao: "Pratique o rascunho de soluções em Portugol e analise o impacto da ordem das instruções.",
        questoesIds: ["107", "108", "109"],
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
        questoesIds: ["101", "102", "105"],
        icone: "🖥️",
        tempoEstimado: "15 min"
      },
      {
        id: "etapa-py-2",
        titulo: "Módulo 2: Tipos de Dados (int, float, str, bool)",
        descricao: "Explore a tipagem dinâmica e entenda a diferença entre números, textos e booleanos.",
        questoesIds: ["105", "106", "111"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-py-3",
        titulo: "Módulo 3: input(), Casting e Operações",
        descricao: "Receba dados do usuário e converta tipos com int(), float() e str().",
        questoesIds: ["106", "107", "108"],
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
        questoesIds: ["109", "110", "111", "112"],
        icone: "🔀",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-ctrl-2",
        titulo: "Módulo 2: Laços de Repetição while e Estrutura",
        descricao: "Repita tarefas enquanto uma condição for verdadeira e diferencie contadores de acumuladores.",
        questoesIds: ["113", "114"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "etapa-ctrl-3",
        titulo: "Módulo 3: Laços while e Controle com break/continue",
        descricao: "Crie repetições condicionais indeterminadas com sentinela e controle a saída com break.",
        questoesIds: ["115", "116"],
        icone: "⚡",
        tempoEstimado: "25 min"
      }
    ]
  }
};
