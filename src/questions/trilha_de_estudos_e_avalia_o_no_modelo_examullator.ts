export interface TextoPreparatorio {
  titulo: string;
  conteudo: string;
  exemploCodigo?: string;
}

export interface QuestaoExamullator {
  textosPreparatorios: TextoPreparatorio[];
  disciplina: string;
  nivel: 0 | 1 | 2;
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
  resumoCurto: string;
  bloquearVoltar: boolean;
}

export const bancoQuestoesExamullator: Record<string, QuestaoExamullator> = {};