export interface Prova {
  nivel: number;
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
}

export const BANCO_DE_PROVAS: Record<string, Prova> = {
  "00": {
    "nivel": 0,
    "titulo": "Conceitos de IA",
    "enunciado": "Explique a diferença entre IA Forte (Geral) e IA Fraca (Estreita), destacando suas principais limitações e aplicações atuais.",
    "min_chars": 50,
    "keywords": ["algoritmo", "consciência", "específica", "geral", "estreita", "automação", "limitação"]
  },
  "00b": {
    "nivel": 0,
    "titulo": "Definição de Algoritmos",
    "enunciado": "O que define um algoritmo e por que eles são a base para o desenvolvimento de qualquer Inteligência Artificial?",
    "min_chars": 40,
    "keywords": ["instruções", "lógica", "sequência", "processamento", "entrada", "saída", "fundamento", "automação"]
  },
  "01": {
    "nivel": 1,
    "titulo": "Algoritmos e Sociedade",
    "enunciado": "Como os algoritmos de recomendação influenciam a opinião pública e o consumo? Discorra sobre o conceito de 'bolhas de filtro'.",
    "min_chars": 80,
    "keywords": ["recomendação", "filtro", "bolha", "polarização", "viés", "consumo", "algoritmo", "redes sociais"]
  },
  "02": {
    "nivel": 2,
    "titulo": "Ética na IA",
    "enunciado": "Quais são os principais desafios éticos no uso de reconhecimento facial por governos e empresas privadas?",
    "min_chars": 100,
    "keywords": ["privacidade", "ética", "reconhecimento", "racial", "viés", "segurança", "vigilância", "consentimento"]
  },
  "03": {
    "nivel": 3,
    "titulo": "IA Generativa",
    "enunciado": "Discorra sobre o funcionamento das IAs generativas (como LLMs). Como elas aprendem a gerar textos e quais os riscos de 'alucinação'?",
    "min_chars": 120,
    "keywords": ["generativa", "probabilidade", "treinamento", "tokens", "alucinação", "contexto", "linguagem", "parâmetros"]
  },
  "04": {
    "nivel": 4,
    "titulo": "Mercado de Trabalho",
    "enunciado": "Como a automação inteligente deve transformar o mercado de trabalho na próxima década? Quais habilidades humanas se tornarão mais valiosas?",
    "min_chars": 120,
    "keywords": ["automação", "substituição", "habilidades", "criatividade", "empatia", "colaboração", "adaptabilidade", "humanas"]
  },
  "05": {
    "nivel": 5,
    "titulo": "Cibersegurança e IA",
    "enunciado": "Quais os perigos do uso de IA para a criação de 'Deepfakes' e ataques de phishing altamente personalizados? Como a sociedade pode se proteger?",
    "min_chars": 150,
    "keywords": ["deepfake", "manipulação", "verdade", "phishing", "verificação", "assinatura digital", "desinformação", "segurança"]
  },
  "06": {
    "nivel": 6,
    "titulo": "História da IA",
    "enunciado": "Quem foi Alan Turing e qual a importância do 'Teste de Turing' para a definição de inteligência em máquinas?",
    "min_chars": 60,
    "keywords": ["turing", "teste", "inteligência", "máquina", "jogo da imitação", "computação", "pioneiro"]
  },
  "07": {
    "nivel": 7,
    "titulo": "Machine Learning vs Deep Learning",
    "enunciado": "Explique de forma simples a relação entre Inteligência Artificial, Machine Learning e Deep Learning. Como um se contém dentro do outro?",
    "min_chars": 70,
    "keywords": ["subconjunto", "aprendizado", "máquina", "profundo", "redes neurais", "dados", "algoritmos"]
  },
  "08": {
    "nivel": 8,
    "titulo": "IA no Cotidiano",
    "enunciado": "Cite e explique três exemplos de como a IA está presente no seu dia a dia (redes sociais, GPS, streaming, etc) e como ela processa esses dados.",
    "min_chars": 50,
    "keywords": ["cotidiano", "exemplo", "processamento", "usuário", "dados", "personalização", "recomendação"]
  },
  "09": {
    "nivel": 9,
    "titulo": "IA e Robótica",
    "enunciado": "Explique como a Inteligência Artificial se diferencia da automação robótica simples. O que torna um robô 'inteligente' em comparação a um braço mecânico de fábrica tradicional?",
    "min_chars": 60,
    "keywords": ["robótica", "automação", "sensor", "percepção", "tomada de decisão", "adaptabilidade", "autônomo", "mecânico"]
  }
};
