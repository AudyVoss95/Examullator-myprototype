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
    descricao: "Trilha única e contínua de Lógica e Linguagem de Programação, integrando toda a jornada de estudos, fixação guiada e avaliação final em uma única sequência linear.",
    icone: "💻",
    cor: "from-blue-600 via-indigo-600 to-slate-950",
    nivelRecomendado: "Trilha Única Integrada (Níveis 0, 1 e 2)",
    etapas: [
      {
        id: "etapa-fixacao-guiada",
        titulo: "Jornada de Fixação Guiada (Estudos)",
        descricao: "Sequência contínua de conceitos, atalhos do SO, algoritmos, tipagem, operadores e laços de repetição.",
        questoesIds: [
          "101", "102", "103", "104", "105", "106", "107", "108", 
          "109", "110", "111", "112", "113", "114", "115", "116"
        ],
        icone: "📖",
        tempoEstimado: "60 min"
      },
      {
        id: "etapa-avaliacao-consolidação",
        titulo: "Avaliação Final de Consolidação / Recuperação",
        descricao: "Sequência contínua de questões dissertativas de avaliação oficial cobrindo todo o programa da disciplina.",
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
