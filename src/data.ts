export interface Prova {
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
}

export const BANCO_DE_PROVAS: Record<string, Prova> = {
  "00": {
    "titulo": "Conceitos de IA",
    "enunciado": "Explique a diferença entre IA Forte (Geral) e IA Fraca (Estreita), destacando suas principais limitações e aplicações atuais.",
    "min_chars": 50,
    "keywords": ["algoritmo", "consciência", "específica", "geral", "estreita", "automação", "limitação"]
  },
  "01": {
    "titulo": "Algoritmos e Sociedade",
    "enunciado": "Como os algoritmos de recomendação influenciam a opinião pública e o consumo? Discorra sobre o conceito de 'bolhas de filtro'.",
    "min_chars": 80,
    "keywords": ["recomendação", "filtro", "bolha", "polarização", "viés", "consumo", "algoritmo", "redes sociais"]
  },
  "02": {
    "titulo": "Ética na IA",
    "enunciado": "Quais são os principais desafios éticos no uso de reconhecimento facial por governos e empresas privadas?",
    "min_chars": 100,
    "keywords": ["privacidade", "ética", "reconhecimento", "racial", "viés", "segurança", "vigilância", "consentimento"]
  }
};
