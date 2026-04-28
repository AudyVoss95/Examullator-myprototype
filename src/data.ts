export interface Prova {
  titulo: string;
  enunciado: string;
  min_chars: number;
  keywords: string[];
}

export const BANCO_DE_PROVAS: Record<string, Prova> = {
  "00":{
    "titulo": "Comando Ctrl + C",
    "enunciado": "Explique para que serve o comando Ctrl + C e dê um exemplo de uso no dia a dia.",
    "min_chars": 150,
    "keywords": ["copiar", "selecionar", "duplicar", "conteúdo", "transferência"]
  },
  {
    "titulo": "Comando Ctrl + V",
    "enunciado": "Qual é a função do comando Ctrl + V? Em que situação ele é utilizado?",
    "min_chars": 120,
    "keywords": ["colar", "inserir", "conteúdo copiado", "destino", "edição"]
  },
  {
    "titulo": "Comando Ctrl + X",
    "enunciado": "O que acontece quando você usa o comando Ctrl + X? Qual a diferença dele para o Ctrl + C?",
    "min_chars": 150,
    "keywords": ["recortar", "mover", "remover", "diferença", "copiar"]
  },
  {
    "titulo": "Arquivos e Pastas",
    "enunciado": "Explique o que é um arquivo e como ele pode ser organizado dentro de pastas no computador.",
    "min_chars": 180,
    "keywords": ["dados", "armazenamento", "organização", "pastas", "diretórios"]
  },
  {
    "titulo": "Extensões de Arquivos",
    "enunciado": "O que significa a extensão de um arquivo? Dê dois exemplos de extensões e explique para que servem.",
    "min_chars": 180,
    "keywords": ["tipo", "formato", "identificação", ".txt", ".jpg"]
  },
  {
    "titulo": "Diferença entre .txt e .docx",
    "enunciado": "Qual a diferença entre um arquivo com extensão .txt e um com extensão .docx?",
    "min_chars": 150,
    "keywords": ["texto simples", "formatação", "Word", "recursos", "edição"]
  },
  {
    "titulo": "Criando Pastas",
    "enunciado": "Descreva o processo básico para criar uma nova pasta em um computador.",
    "min_chars": 120,
    "keywords": ["botão direito", "novo", "pasta", "nomear", "organização"]
  },
  {
    "titulo": "Lixeira do Sistema",
    "enunciado": "O que é a Lixeira do sistema operacional e qual a sua função?",
    "min_chars": 150,
    "keywords": ["arquivos excluídos", "recuperação", "armazenamento temporário", "apagar", "restaurar"]
  },
  {
    "titulo": "Renomear Arquivos",
    "enunciado": "Explique como renomear um arquivo e por que isso pode ser importante.",
    "min_chars": 120,
    "keywords": ["nome", "identificar", "organização", "botão direito", "editar"]
  },
  {
    "titulo": "Copiar e Colar Arquivos",
    "enunciado": "O que significa copiar e colar arquivos? Dê um exemplo prático de quando isso é útil.",
    "min_chars": 150,
    "keywords": ["duplicar", "transferir", "arquivos", "backup", "organização"]
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
