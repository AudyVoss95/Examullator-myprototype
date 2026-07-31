import { Prova } from './bancoProvas';

export const bancoIaRevisao: Record<string, Prova> = {
  "1001": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: O Paradigma da IA Generativa",
        "conteudo": "A Inteligência Artificial tradicional (discriminativa) foca em classificar, identificar e separar categorias em dados existentes (como identificar se uma mensagem é spam ou se uma imagem contém um gato). Já a IA Generativa modela a distribuição dos dados para sintetizar conteúdos totalmente inéditos e originais, tais como textos, imagens, áudios e códigos de programação."
      },
      {
        "titulo": "Conceito 2: O Pipeline de Treinamento e Aplicação em Python",
        "conteudo": "Um modelo generativo passa por pré-treinamento em terabytes de dados e ajuste fino (fine-tuning). Diferente de sistemas tradicionais, a IA generativa não copia trechos de um banco de dados; ela calcula probabilidades estatísticas no espaço latente para construir o resultado do zero.",
        "exemploCodigo": "# Exemplo de chamada de API generativa em Python\nimport google.generativeai as genai\n\nmodel = genai.GenerativeModel('gemini-pro')\nresposta = model.generate_content(\"Explique o que é IA generativa em uma frase.\")\nprint(resposta.text)"
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Conceito de IA Generativa vs. IA Discriminativa",
    "enunciado": "Explique qual é a diferença fundamental entre uma Inteligência Artificial discriminativa e uma IA generativa, citando um exemplo prático de aplicação para cada uma delas.",
    "min_chars": 50,
    "keywords": [
      "generativa",
      "discriminativa",
      "sintetizar",
      "classificar",
      "probabilidade"
    ],
    "resumoCurto": "IA discriminativa foca em classificar/separar categorias; IA generativa sintetiza conteúdos inéditos a partir de padrões aprendidos.",
    "bloquearVoltar": false
  }
};