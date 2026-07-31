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
        descricao: "Sorteio de 10 questões aleatórias de avaliação final com distribuição equilibrada por níveis (3 Nível 0, 4 Nível 1, 3 Nível 2) e navegação restrita.",
        questoesIds: [
          "201", "202", "203", "204", "205", "206", "207", "208",
          "209", "210", "211", "212", "213", "214", "215", "216"
        ],
        icone: "🏆",
        tempoEstimado: "45 min"
      }
    ]
  },

  "trilha-inteligencia-artificial": {
    id: "trilha-inteligencia-artificial",
    nome: "Trilha Completa: Inteligência Artificial",
    categoria: "Inteligência Artificial",
    descricao: "Trilha completa abrangendo Machine Learning, Redes Neurais, PLN, Visão Computacional, Engenharia de Prompt, Métricas de Avaliação e Ética em IA.",
    icone: "🤖",
    cor: "from-purple-600 via-pink-600 to-slate-950",
    nivelRecomendado: "Trilha Completa Integrada (Conceitos + 16 Desafios Práticos + Avaliação Final)",
    etapas: [
      {
        id: "mod-ia-1",
        titulo: "Módulo 1 de Inteligência Artificial: Fundamentos & Machine Learning",
        descricao: "Definição de IA, Teste de Turing e diferenças entre Programação Tradicional e Aprendizado de Máquina.",
        questoesIds: ["301", "302"],
        icone: "🧠",
        tempoEstimado: "15 min"
      },
      {
        id: "mod-ia-2",
        titulo: "Módulo 2 de Inteligência Artificial: Tipos de Aprendizado de Máquina",
        descricao: "Aprendizado Supervisionado, Não-Supervisionado e Aprendizado por Reforço com Recompensas.",
        questoesIds: ["303", "304"],
        icone: "📊",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-3",
        titulo: "Módulo 3 de Inteligência Artificial: Redes Neurais & Funções de Ativação",
        descricao: "Estrutura do neurônio artificial, camadas ocultas, ReLU, Sigmoide e não-linearidades.",
        questoesIds: ["305", "306"],
        icone: "⚡",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-4",
        titulo: "Módulo 4 de Inteligência Artificial: Treinamento, Overfitting & Divisão de Dados",
        descricao: "Fenômenos de Overfitting e Underfitting, conjuntos de Treino, Validação e Teste.",
        questoesIds: ["307", "308"],
        icone: "🎯",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-5",
        titulo: "Módulo 5 de Inteligência Artificial: Processamento de Linguagem Natural & LLMs",
        descricao: "Tokenização de texto, modelos de linguagem generativos (LLMs) e a Arquitetura Transformer.",
        questoesIds: ["309", "310"],
        icone: "💬",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-6",
        titulo: "Módulo 6 de Inteligência Artificial: Visão Computacional & Algoritmos de Busca",
        descricao: "Processamento de imagens digitais com matrizes de pixels e buscas heurísticas em grafos (A*).",
        questoesIds: ["311", "312"],
        icone: "👁️",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-7",
        titulo: "Módulo 7 de Inteligência Artificial: Métricas de Avaliação & Engenharia de Prompt",
        descricao: "Matriz de Confusão, Precisão, Recall e boas práticas de formulação de prompts.",
        questoesIds: ["313", "314"],
        icone: "📐",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-8",
        titulo: "Módulo 8 de Inteligência Artificial: Viés Algorítmico & Ética em IA",
        descricao: "Origem do viés nos dados de treino, privacidade de dados e governança responsável em IA.",
        questoesIds: ["315", "316"],
        icone: "🛡️",
        tempoEstimado: "20 min"
      },
      {
        id: "mod-ia-eval",
        titulo: "Módulo de Avaliação de Inteligência Artificial: Exame Final de Consolidação",
        descricao: "Sorteio de 10 questões aleatórias de avaliação final com distribuição equilibrada por níveis (3 Nível 0, 4 Nível 1, 3 Nível 2) e navegação restrita.",
        questoesIds: [
          "401", "402", "403", "404", "405", "406", "407", "408",
          "409", "410", "411", "412", "413", "414", "415", "416"
        ],
        icone: "🏆",
        tempoEstimado: "45 min"
      }
    ]
  }
};
