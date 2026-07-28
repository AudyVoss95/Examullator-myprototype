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
    descricao: "Trilha unificada integrando instruções iniciais, teoria por disciplinas, compilado de atividades de fixação e a avaliação final de consolidação.",
    icone: "💻",
    cor: "from-blue-600 via-indigo-600 to-slate-950",
    nivelRecomendado: "Trilha Completa Integrada (Instruções + Teoria + Atividades + Avaliação)",
    etapas: [
      {
        id: "mod-llp-0",
        titulo: "Módulo 0 de Lógica e Linguagem de Programação: Instruções Iniciais & Fundamentos Teóricos",
        descricao: "Leia as instruções da plataforma, diferença entre hardware e software, e os conceitos básicos da disciplina.",
        questoesIds: ["001", "002", "003"],
        icone: "📖",
        tempoEstimado: "15 min"
      },
      {
        id: "mod-llp-1",
        titulo: "Módulo 1 de Lógica e Linguagem de Programação: Operação do Sistema e Arquivos Python",
        descricao: "Atalhos de teclado (Ctrl+C, Ctrl+V, interrupção no terminal) e regras de nomenclatura de arquivos (.py).",
        questoesIds: ["101", "102"],
        icone: "🖥️",
        tempoEstimado: "15 min"
      },
      {
        id: "mod-llp-2",
        titulo: "Módulo 2 de Lógica e Linguagem de Programação: Algoritmos e Fluxogramas",
        descricao: "Propriedades formais (Finito, Definido, Eficaz), ciclo Entrada-Processamento-Saída e símbolos de fluxograma.",
        questoesIds: ["103", "104"],
        icone: "🧩",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-3",
        titulo: "Módulo 3 de Lógica e Linguagem de Programação: Variáveis, Tipagem e input()",
        descricao: "Tipos de dados (str, int, float, bool), captura no teclado com input(), coerção de tipos e f-strings.",
        questoesIds: ["105", "106"],
        icone: "🔢",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-4",
        titulo: "Módulo 4 de Lógica e Linguagem de Programação: Operadores Aritméticos e Módulo %",
        descricao: "Operador de resto (%), checagem de paridade (num % 2 == 0), ordem de precedência e uso de parênteses.",
        questoesIds: ["107", "108"],
        icone: "⚡",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-5",
        titulo: "Módulo 5 de Lógica e Linguagem de Programação: Estruturas Condicionais e Borda",
        descricao: "Decisão com if/else, diferença entre atribuição (=) e igualdade (==) e testes de limites (borda).",
        questoesIds: ["109", "110"],
        icone: "🔀",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-6",
        titulo: "Módulo 6 de Lógica e Linguagem de Programação: Operadores Lógicos e elif",
        descricao: "Condições compostas com and/or, prioridade lógica, decisão múltipla com elif e padronização .lower().",
        questoesIds: ["111", "112"],
        icone: "⚖️",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-llp-7",
        titulo: "Módulo 7 de Lógica e Linguagem de Programação: Repetição while e Acumuladores",
        descricao: "As 3 partes do laço while, causa de loops infinitos, diferença entre contadores e acumuladores.",
        questoesIds: ["113", "114"],
        icone: "🔁",
        tempoEstimado: "25 min"
      },
      {
        id: "mod-llp-8",
        titulo: "Módulo 8 de Lógica e Linguagem de Programação: Sentinela, break e Módulos",
        descricao: "Leitura indeterminada com valor sentinela, comando break, módulo random e prevenção de divisão por zero.",
        questoesIds: ["115", "116"],
        icone: "🛡️",
        tempoEstimado: "25 min"
      },
      {
        id: "mod-llp-eval",
        titulo: "Módulo de Avaliação de Lógica e Linguagem de Programação: Exame Final de Consolidação",
        descricao: "Avaliação final oficial cobrindo todo o programa da disciplina com navegação controlada.",
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
