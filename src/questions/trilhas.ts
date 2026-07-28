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
  "trilha-logica-linguagem-programacao": {
    id: "trilha-logica-linguagem-programacao",
    nome: "Trilha Completa: Lógica e Linguagem de Programação",
    categoria: "Lógica e Linguagem de Programação",
    descricao: "Trilha única e contínua de Lógica e Linguagem de Programação, unificando todos os módulos de fixação guiada e avaliação em uma única sequência didática.",
    icone: "💻",
    cor: "from-blue-600 via-indigo-600 to-slate-950",
    nivelRecomendado: "Trilha Única Integrada (Níveis 0, 1 e 2)",
    etapas: [
      {
        id: "mod-llp-1",
        titulo: "Módulo 1 de Lógica e Linguagem de Programação: Atalhos e Nomenclatura",
        descricao: "Operações no terminal, atalhos do SO (Ctrl+C, Ctrl+V) e nomenclatura de arquivos (.py).",
        questoesIds: ["101", "102"],
        icone: "💻",
        tempoEstimado: "15 min"
      },
      {
        id: "mod-llp-2",
        titulo: "Módulo 2 de Lógica e Linguagem de Programação: Algoritmos e Fluxogramas",
        descricao: "Propriedades de finitude, determinismo e eficácia dos algoritmos e losangos em fluxogramas.",
        questoesIds: ["103", "104"],
        icone: "🧩",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-3",
        titulo: "Módulo 3 de Lógica e Linguagem de Programação: Variáveis, Tipos e Entrada",
        descricao: "Tipos primitivos (str, int, float, bool), captura com input(), coerção e f-strings.",
        questoesIds: ["105", "106"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-4",
        titulo: "Módulo 4 de Lógica e Linguagem de Programação: Operadores e Paridade",
        descricao: "Operador de módulo (%), paridade (num % 2 == 0), precedência e uso de parênteses.",
        questoesIds: ["107", "108"],
        icone: "⚡",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-5",
        titulo: "Módulo 5 de Lógica e Linguagem de Programação: Condicionais e Borda",
        descricao: "Estruturas condicionais (if/else), atribuição (=) vs comparação (==) e valores de borda.",
        questoesIds: ["109", "110"],
        icone: "🔀",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-6",
        titulo: "Módulo 6 de Lógica e Linguagem de Programação: Operadores Lógicos e elif",
        descricao: "Condições compostas com and/or, prioridade de avaliação e encadeamento com elif.",
        questoesIds: ["111", "112"],
        icone: "⚖️",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-7",
        titulo: "Módulo 7 de Lógica e Linguagem de Programação: Laço while e Acumuladores",
        descricao: "As 3 partes do laço while, prevenindo loops infinitos, contadores (i += 1) e acumuladores.",
        questoesIds: ["113", "114"],
        icone: "🔁",
        tempoEstimado: "25 min"
      },
      {
        id: "mod-llp-8",
        titulo: "Módulo 8 de Lógica e Linguagem de Programação: Sentinela e Módulos",
        descricao: "Leitura com sentinela, while True com break, biblioteca random e proteção de divisão por zero.",
        questoesIds: ["115", "116"],
        icone: "🛡️",
        tempoEstimado: "25 min"
      },
      {
        id: "mod-llp-eval",
        titulo: "Módulo de Avaliação de Lógica e Linguagem de Programação: Exame Final",
        descricao: "Exame oficial de consolidação e avaliação cobrindo todo o programa da disciplina.",
        questoesIds: [
          "201", "202", "203", "204", "205", "206", "207", "208",
          "209", "210", "211", "212", "213", "214", "215", "216"
        ],
        icone: "🏆",
        tempoEstimado: "60 min"
      }
    ]
  }
};
