export interface Prova {
  nivel: number;
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
}

export interface AppConfig {
  questoesPorNivel: number;
  totalQuestoes: number;
}

export const APP_CONFIG: AppConfig = {
  questoesPorNivel: 2,
  totalQuestoes: 10,
};

export const BANCO_DE_PROVAS: Record<string, Prova> = {
 {
  "01": {
    "nivel": 0,
    "titulo": "Comando Ctrl + C",
    "enunciado": "Explique para que serve o comando Ctrl + C e dê um exemplo de uso no dia a dia.",
    "min_chars": 150,
    "keywords": ["copiar", "selecionar", "duplicar", "conteúdo", "transferência"]
  },

  "02": {
    "nivel": 0,
    "titulo": "Comando Ctrl + V",
    "enunciado": "Qual é a função do comando Ctrl + V? Em que situação ele é utilizado?",
    "min_chars": 120,
    "keywords": ["colar", "inserir", "conteúdo copiado", "destino", "edição"]
  },

  "03": {
    "nivel": 0,
    "titulo": "Comando Ctrl + X",
    "enunciado": "O que acontece quando você usa o comando Ctrl + X? Qual a diferença dele para o Ctrl + C?",
    "min_chars": 150,
    "keywords": ["recortar", "mover", "remover", "diferença", "copiar"]
  },

  "04": {
    "nivel": 0,
    "titulo": "Organização de Arquivos",
    "enunciado": "Explique o que é um arquivo e como ele pode ser organizado dentro de pastas no computador.",
    "min_chars": 180,
    "keywords": ["dados", "armazenamento", "organização", "pastas", "diretórios"]
  },

  "05": {
    "nivel": 0,
    "titulo": "Extensões de Arquivos",
    "enunciado": "O que significa a extensão de um arquivo? Dê dois exemplos de extensões e explique para que servem.",
    "min_chars": 180,
    "keywords": ["tipo", "formato", "identificação", ".txt", ".jpg"]
  },

  "06": {
    "nivel": 0,
    "titulo": "Diferença entre .txt e .docx",
    "enunciado": "Qual a diferença entre um arquivo com extensão .txt e um com extensão .docx?",
    "min_chars": 150,
    "keywords": ["texto simples", "formatação", "Word", "recursos", "edição"]
  },

  "07": {
    "nivel": 0,
    "titulo": "Criação de Pastas",
    "enunciado": "Descreva o processo básico para criar uma nova pasta em um computador.",
    "min_chars": 120,
    "keywords": ["botão direito", "novo", "pasta", "nomear", "organização"]
  },

  "08": {
    "nivel": 0,
    "titulo": "Lixeira do Sistema",
    "enunciado": "O que é a Lixeira do sistema operacional e qual a sua função?",
    "min_chars": 150,
    "keywords": ["arquivos excluídos", "recuperação", "armazenamento temporário", "apagar", "restaurar"]
  },

  "09": {
    "nivel": 0,
    "titulo": "Renomear Arquivos",
    "enunciado": "Explique como renomear um arquivo e por que isso pode ser importante.",
    "min_chars": 120,
    "keywords": ["nome", "identificar", "organização", "botão direito", "editar"]
  },

  "10": {
    "nivel": 0,
    "titulo": "Copiar e Colar Arquivos",
    "enunciado": "O que significa copiar e colar arquivos? Dê um exemplo prático de quando isso é útil.",
    "min_chars": 150,
    "keywords": ["duplicar", "transferir", "arquivos", "backup", "organização"]
  },
  "11": {
    "nivel": 1,
    "titulo": "Algoritmos e Sociedade",
    "enunciado": "Como os algoritmos de recomendação influenciam a opinião pública e o consumo? Discorra sobre o conceito de 'bolhas de filtro'.",
    "min_chars": 80,
    "keywords": ["recomendação", "filtro", "bolha", "polarização", "viés", "consumo", "algoritmo", "redes sociais"]
  },
  "12": {
    "nivel": 2,
    "titulo": "Ética na IA",
    "enunciado": "Quais são os principais desafios éticos no uso de reconhecimento facial por governos e empresas privadas?",
    "min_chars": 100,
    "keywords": ["privacidade", "ética", "reconhecimento", "racial", "viés", "segurança", "vigilância", "consentimento"]
  },
  "13": {
    "nivel": 3,
    "titulo": "IA Generativa",
    "enunciado": "Discorra sobre o funcionamento das IAs generativas (como LLMs). Como elas aprendem a gerar textos e quais os riscos de 'alucinação'?",
    "min_chars": 120,
    "keywords": ["generativa", "probabilidade", "treinamento", "tokens", "alucinação", "contexto", "linguagem", "parâmetros"]
  },
  "14": {
    "nivel": 4,
    "titulo": "Mercado de Trabalho",
    "enunciado": "Como a automação inteligente deve transformar o mercado de trabalho na próxima década? Quais habilidades humanas se tornarão mais valiosas?",
    "min_chars": 120,
    "keywords": ["automação", "substituição", "habilidades", "criatividade", "empatia", "colaboração", "adaptabilidade", "humanas"]
  },
  "15": {
    "nivel": 5,
    "titulo": "Cibersegurança e IA",
    "enunciado": "Quais os perigos do uso de IA para a criação de 'Deepfakes' e ataques de phishing altamente personalizados? Como a sociedade pode se proteger?",
    "min_chars": 150,
    "keywords": ["deepfake", "manipulação", "verdade", "phishing", "verificação", "assinatura digital", "desinformação", "segurança"]
  },
  "16": {
    "nivel": 6,
    "titulo": "História da IA",
    "enunciado": "Quem foi Alan Turing e qual a importância do 'Teste de Turing' para a definição de inteligência em máquinas?",
    "min_chars": 60,
    "keywords": ["turing", "teste", "inteligência", "máquina", "jogo da imitação", "computação", "pioneiro"]
  },
  "17": {
    "nivel": 7,
    "titulo": "Machine Learning vs Deep Learning",
    "enunciado": "Explique de forma simples a relação entre Inteligência Artificial, Machine Learning e Deep Learning. Como um se contém dentro do outro?",
    "min_chars": 70,
    "keywords": ["subconjunto", "aprendizado", "máquina", "profundo", "redes neurais", "dados", "algoritmos"]
  },
  "18": {
    "nivel": 8,
    "titulo": "IA no Cotidiano",
    "enunciado": "Cite e explique três exemplos de como a IA está presente no seu dia a dia (redes sociais, GPS, streaming, etc) e como ela processa esses dados.",
    "min_chars": 50,
    "keywords": ["cotidiano", "exemplo", "processamento", "usuário", "dados", "personalização", "recomendação"]
  },
  "19": {
    "nivel": 9,
    "titulo": "IA e Robótica",
    "enunciado": "Explique como a Inteligência Artificial se diferencia da automação robótica simples. O que torna um robô 'inteligente' em comparação a um braço mecânico de fábrica tradicional?",
    "min_chars": 60,
    "keywords": ["robótica", "automação", "sensor", "percepção", "tomada de decisão", "adaptabilidade", "autônomo", "mecânico"]
  }
};
