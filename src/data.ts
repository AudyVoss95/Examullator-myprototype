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

// Re-exporta a fonte das perguntas a partir da subpasta src/questions
export * from './questions';
