import { bancoQuestoesExamullator } from './trilha_de_estudos_e_avalia_o_no_modelo_examullator';

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
  ...bancoQuestoesExamullator
};
