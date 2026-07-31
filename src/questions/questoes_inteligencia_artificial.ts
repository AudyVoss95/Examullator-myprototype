import { Prova } from './bancoProvas';

export const bancoQuestoesIA: Record<string, Prova> = {
  // --- QUESTÕES DE FIXAÇÃO DE INTELIGÊNCIA ARTIFICIAL (301 - 316) ---
  "301": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Definição de Inteligência Artificial",
        "conteudo": "Inteligência Artificial (IA) é o campo da ciência da computação dedicado a criar sistemas capazes de realizar tarefas que normalmente exigem inteligência humana, como raciocínio, aprendizado, tomada de decisão e percepção."
      },
      {
        "titulo": "Conceito 2: O Teste de Turing",
        "conteudo": "Proposto por Alan Turing em 1950, o Teste de Turing avalia a capacidade de uma máquina de exibir comportamento inteligente indistinguível do de um ser humano em uma conversa por texto."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Módulo 1.1: Conceito de IA e o Teste de Turing",
    "enunciado": "Defina o conceito de Inteligência Artificial com suas palavras e explique o objetivo do Teste de Turing na avaliação da inteligência de um sistema computacional.",
    "min_chars": 50,
    "keywords": ["inteligência artificial", "turing", "humano", "raciocínio", "computação"],
    "resumoCurto": "IA busca simular capacidades cognitivas humanas. O Teste de Turing avalia se o comportamento de uma máquina é indistinguível de um ser humano.",
    "bloquearVoltar": false
  },

  "302": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Programação Tradicional",
        "conteudo": "Na programação tradicional, o desenvolvedor escreve regras explícitas em código e fornece dados para que o computador produza respostas."
      },
      {
        "titulo": "Conceito 2: Aprendizado de Máquina (Machine Learning)",
        "conteudo": "No Aprendizado de Máquina, o sistema recebe dados e respostas (ou exemplos) e aprende autonomamente os padrões e regras de decisão sem ser explicitamente programado para cada regra."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Módulo 1.2: Programação Tradicional vs Aprendizado de Máquina",
    "enunciado": "Diferencie a programação tradicional do Aprendizado de Máquina (Machine Learning). Como muda o papel dos dados e das regras em cada abordagem?",
    "min_chars": 50,
    "keywords": ["programação", "aprendizado de máquina", "regras", "dados", "padrões"],
    "resumoCurto": "Na programação tradicional escrevem-se regras explícitas. No Machine Learning a máquina aprende as regras a partir dos dados.",
    "bloquearVoltar": false
  },

  "303": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Aprendizado Supervisionado",
        "conteudo": "No Aprendizado Supervisionado, o modelo é treinado com um conjunto de dados rotulados, onde cada exemplo de entrada possui uma resposta ou classe correta esperada (ex: fotos de gatos rotuladas como 'gato')."
      },
      {
        "titulo": "Conceito 2: Aprendizado Não-Supervisionado",
        "conteudo": "No Aprendizado Não-Supervisionado, o modelo recebe dados sem rótulos e precisa identificar autonomamente estruturas, agrupamentos (clustering) ou padrões ocultos."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Módulo 2.1: Aprendizado Supervisionado vs Não-Supervisionado",
    "enunciado": "Explique a diferença fundamental entre Aprendizado Supervisionado e Não-Supervisionado. Cite um exemplo prático de aplicação para cada tipo.",
    "min_chars": 50,
    "keywords": ["supervisionado", "rotulados", "não-supervisionado", "agrupamento", "padrões"],
    "resumoCurto": "O Aprendizado Supervisionado usa dados rotulados. O Não-Supervisionado descobre padrões em dados sem rótulos.",
    "bloquearVoltar": false
  },

  "304": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Aprendizado por Reforço",
        "conteudo": "No Aprendizado por Reforço, um agente aprende a tomar decisões interativas executando ações em um ambiente dinâmico para maximizar uma recompensa acumulada."
      },
      {
        "titulo": "Conceito 2: Recompensas e Punições",
        "conteudo": "O agente recebe sinais de recompensa (positivos) por ações desejadas e punições (negativos) por erros, ajustando sua estratégia (política) por tentativa e erro."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 2.2: Aprendizado por Reforço e Função de Recompensa",
    "enunciado": "Como funciona o Aprendizado por Reforço? Explique o papel do agente, do ambiente e da função de recompensa no processo de aprendizagem.",
    "min_chars": 50,
    "keywords": ["reforço", "agente", "ambiente", "recompensa", "tentativa e erro"],
    "resumoCurto": "No Aprendizado por Reforço o agente aprende tomando decisões no ambiente para maximizar recompensas acumuladas.",
    "bloquearVoltar": false
  },

  "305": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Neurônio Artificial (Perceptron)",
        "conteudo": "O neurônio artificial recebe entradas ponderadas por pesos, soma esses valores, adiciona um viés (bias) e passa o resultado por uma função de ativação para gerar a saída."
      },
      {
        "titulo": "Conceito 2: Estrutura de Redes Neurais",
        "conteudo": "Uma Rede Neural Artificial é formada por camadas de entrada, camadas ocultas (hidden layers) e camada de saída, simulando a conexão sináptica do cérebro humano."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 3.1: Estrutura de Redes Neurais Artificiais",
    "enunciado": "Descreva o funcionamento básico de um neurônio artificial. Como se organizam as camadas de uma Rede Neural Artificial (entrada, ocultas e saída)?",
    "min_chars": 50,
    "keywords": ["neurônio", "pesos", "camadas", "entrada", "saída"],
    "resumoCurto": "O neurônio artificial processa entradas ponderadas por pesos. As redes se organizam em camadas de entrada, ocultas e de saída.",
    "bloquearVoltar": false
  },

  "306": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: O Papel da Função de Ativação",
        "conteudo": "A função de ativação introduz não-linearidade na rede neural, permitindo que o modelo aprenda padrões complexos que não poderiam ser resolvidos por combinações lineares simples."
      },
      {
        "titulo": "Conceito 2: Exemplos de Funções",
        "conteudo": "Exemplos populares incluem ReLU (Rectified Linear Unit), Sigmoide e Softmax, cada uma adequada para diferentes posições na arquitetura de uma rede."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 3.2: Funções de Ativação e Não-Linearidade",
    "enunciado": "Por que as funções de ativação são indispensáveis em redes neurais artificiais? O que aconteceria se uma rede profunda utilizasse apenas operações lineares?",
    "min_chars": 50,
    "keywords": ["ativação", "não-linearidade", "relu", "sigmoide", "complexos"],
    "resumoCurto": "Funções de ativação adicionam não-linearidade, permitindo à rede aprender padrões e funções complexas.",
    "bloquearVoltar": false
  },

  "307": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Overfitting (Sobreajuste)",
        "conteudo": "Overfitting ocorre quando o modelo decora os dados de treinamento com ruídos e detalhes excessivos, obtendo excelente desempenho no treino, mas errando ao generalizar para dados novos."
      },
      {
        "titulo": "Conceito 2: Underfitting (Subajuste)",
        "conteudo": "Underfitting acontece quando o modelo é simples demais para capturar a estrutura subjacente dos dados, apresentando baixo desempenho tanto no treino quanto nos testes."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 4.1: Overfitting e Underfitting",
    "enunciado": "Explique com suas palavras o que é Overfitting e Underfitting. Como identificar se um modelo de IA está sofrendo de Overfitting durante os testes?",
    "min_chars": 50,
    "keywords": ["overfitting", "underfitting", "generalização", "treinamento", "testes"],
    "resumoCurto": "Overfitting ocorre ao memorizar o treino sem generalizar. Underfitting ocorre quando o modelo é simples demais.",
    "bloquearVoltar": false
  },

  "308": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Divisão de Dados",
        "conteudo": "Para avaliar com precisão um modelo de IA, os dados são divididos em três conjuntos distintos: Treino (para ajustar os pesos), Validação (para ajustar hiperparâmetros) e Teste (para avaliação final imparcial)."
      },
      {
        "titulo": "Conceito 2: Prevenção do Vazamento de Dados",
        "conteudo": "É fundamental garantir que o conjunto de teste permaneça estritamente isolado do treinamento para evitar resultados ilusórios ou viciados."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 4.2: Divisão entre Treino, Validação e Teste",
    "enunciado": "Qual é a finalidade de separar uma base de dados em conjuntos de Treino, Validação e Teste? Por que o conjunto de teste não deve ser usado durante o treinamento?",
    "min_chars": 50,
    "keywords": ["treino", "validação", "teste", "hiperparâmetros", "vazamento"],
    "resumoCurto": "Treino ajusta o modelo, Validação afina hiperparâmetros e Teste avalia o desempenho final em dados inéditos.",
    "bloquearVoltar": false
  },

  "309": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Processamento de Linguagem Natural (PLN)",
        "conteudo": "O PLN é a subárea da IA que capacita computadores a entender, interpretar, gerar e manipular a linguagem humana escrita e falada."
      },
      {
        "titulo": "Conceito 2: Tokenização",
        "conteudo": "Tokenização é a etapa de conversão do texto em unidades menores chamadas 'tokens' (palavras, subpalavras ou caracteres), que são transformados em vetores numéricos para processamento."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 5.1: Processamento de Linguagem Natural (PLN) e Tokenização",
    "enunciado": "O que é Processamento de Linguagem Natural (PLN)? Explique o conceito de Tokenização e qual a sua importância na preparação de texto para modelos de IA.",
    "min_chars": 50,
    "keywords": ["pln", "linguagem natural", "tokenização", "vetores", "texto"],
    "resumoCurto": "PLN permite a interpretação da linguagem humana. A tokenização converte texto em unidades numéricas que os modelos processam.",
    "bloquearVoltar": false
  },

  "310": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Modelos de Linguagem de Grande Porte (LLMs)",
        "conteudo": "LLMs (Large Language Models) são modelos treinados em bilhões de palavras para prever a próxima palavra mais provável em uma sequência textual."
      },
      {
        "titulo": "Conceito 2: Arquitetura Transformer e Mecanismo de Atenção",
        "conteudo": "Introduzida em 2017, a arquitetura Transformer utiliza 'Self-Attention' (Auto-Atenção) para analisar conexões contextuais entre palavras em frases longas de forma paralela."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Módulo 5.2: LLMs e a Arquitetura Transformer",
    "enunciado": "O que são LLMs e qual foi o avanço trazido pela arquitetura Transformer e o mecanismo de auto-atenção (Self-Attention) no processamento de linguagem?",
    "min_chars": 50,
    "keywords": ["llm", "transformer", "auto-atenção", "contexto", "previsão"],
    "resumoCurto": "LLMs preveem sequências de texto. A arquitetura Transformer com auto-atenção permite processar relações de contexto em textos longos.",
    "bloquearVoltar": false
  },

  "311": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Visão Computacional",
        "conteudo": "Visão Computacional é o campo da IA que extrai informações estruturadas de imagens e vídeos digitais para tarefas como classificação, detecção de objetos e segmentação."
      },
      {
        "titulo": "Conceito 2: Matrizes de Pixels",
        "conteudo": "As imagens digitais são representadas por matrizes de pixels com valores numéricos de intensidade (ex: RGB com 3 canais de cor)."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 6.1: Introdução à Visão Computacional",
    "enunciado": "Como a Visão Computacional permite que os computadores 'enxerguem' imagens digitais? Como uma imagem é representada matematicamente para um algoritmo de IA?",
    "min_chars": 50,
    "keywords": ["visão computacional", "pixels", "matrizes", "imagens", "detecção"],
    "resumoCurto": "Visão Computacional analisa imagens digitais, que são interpretadas matematicamente como matrizes numéricas de pixels.",
    "bloquearVoltar": false
  },

  "312": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Algoritmos de Busca",
        "conteudo": "Em IA clássica, algoritmos de busca são utilizados para resolver problemas encontrando sequências de ações que levam de um estado inicial a um objetivo (ex: GPS, xadrez)."
      },
      {
        "titulo": "Conceito 2: Busca Heurística (Algoritmo A*)",
        "conteudo": "A busca heurística utiliza estimativas de custo (heurísticas) para guiar a exploração de estados de maneira inteligente e eficiente em relação à busca cega."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 6.2: Algoritmos de Busca em Grafos e Heurísticas",
    "enunciado": "Explique o papel dos algoritmos de busca em IA. Qual a vantagem de utilizar uma busca heurística (como o A*) em comparação com uma busca cega?",
    "min_chars": 50,
    "keywords": ["busca", "heurística", "grafos", "estados", "caminho"],
    "resumoCurto": "Algoritmos de busca encontram caminhos para metas. Buscas heurísticas usam estimativas para encontrar soluções de forma mais rápida.",
    "bloquearVoltar": false
  },

  "313": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Matriz de Confusão",
        "conteudo": "A Matriz de Confusão tabela os resultados de um modelo de classificação entre Verdadeiros Positivos, Falsos Positivos, Verdadeiros Negativos e Falsos Negativos."
      },
      {
        "titulo": "Conceito 2: Precisão e Revocação (Recall)",
        "conteudo": "Precisão mede a proporção de acertos entre os positivos previstos. Recall mede a proporção de positivos reais identificados pelo modelo."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Módulo 7.1: Matriz de Confusão, Precisão e Recall",
    "enunciado": "Explique a diferença entre Precisão e Revocação (Recall). Em um sistema de detecção de exames de saúde graves, qual dessas duas métricas é mais crítica e por quê?",
    "min_chars": 50,
    "keywords": ["matriz de confusão", "precisão", "recall", "revocação", "falsos negativos"],
    "resumoCurto": "Precisão mede acerto dos previstos. Recall mede a cobertura dos casos reais (crítico para evitar falsos negativos na saúde).",
    "bloquearVoltar": false
  },

  "314": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Engenharia de Prompt",
        "conteudo": "Engenharia de Prompt é a prática de estruturar instruções textuais de forma clara, contextualizada e detalhada para obter as melhores respostas de modelos generativos de IA."
      },
      {
        "titulo": "Conceito 2: Técnicas de Prompting",
        "conteudo": "Técnicas incluem definir a persona/papel do modelo, fornecer exemplos (Few-shot prompting) e solicitar raciocínio passo a passo (Chain-of-Thought)."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 7.2: Engenharia de Prompt e Boas Práticas",
    "enunciado": "O que é Engenharia de Prompt? Cite duas boas práticas para construir instruções eficazes para modelos generativos de linguagem.",
    "min_chars": 50,
    "keywords": ["prompt", "contexto", "instruções", "exemplos", "generativa"],
    "resumoCurto": "Engenharia de Prompt formula instruções claras para modelos de IA. Boas práticas incluem dar contexto e fornecer exemplos.",
    "bloquearVoltar": false
  },

  "315": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Viés Algorítmico (Bias)",
        "conteudo": "Viés em IA ocorre quando o modelo reflete preconceitos, distorções ou desigualdades históricas presentes nos dados de treinamento fornecidos pelos humanos."
      },
      {
        "titulo": "Conceito 2: Impactos do Viés",
        "conteudo": "Modelos enviesados podem prejudicar grupos minoritários em sistemas de triagem de currículos, concessão de crédito ou reconhecimento facial."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 8.1: Viés Algorítmico e Dados de Treinamento",
    "enunciado": "Como o viés humano pode ser transferido para um modelo de Inteligência Artificial? Por que a qualidade dos dados de treinamento é determinante para evitar o viés?",
    "min_chars": 50,
    "keywords": ["viés", "dados", "treinamento", "preconceito", "qualidade"],
    "resumoCurto": "O viés nos dados de treino é reproduzido pelo modelo. Dados representativos e de qualidade são vitais para mitigar distorções.",
    "bloquearVoltar": false
  },

  "316": {
    "textosPreparatorios": [
      {
        "titulo": "Conceito 1: Ética e Responsabilidade em IA",
        "conteudo": "A ética em IA aborda a transparência dos algoritmos, governança dos dados, explicabilidade das decisões e o uso responsável da tecnologia."
      },
      {
        "titulo": "Conceito 2: Privacidade de Dados (LGPD/GDPR)",
        "conteudo": "Sistemas de IA devem respeitar leis de proteção de dados, garantindo que informações sensíveis não sejam expostas sem consentimento explícito."
      }
    ],
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Módulo 8.2: Ética, Privacidade e Segurança em IA",
    "enunciado": "Discorra sobre a importância da ética e da privacidade no desenvolvimento de sistemas de IA. Quais os riscos da falta de transparência nas decisões automatizadas?",
    "min_chars": 50,
    "keywords": ["ética", "privacidade", "transparência", "segurança", "lgpd"],
    "resumoCurto": "Ética e privacidade garantem que sistemas de IA ajam de forma transparente, justa e respeitando a proteção de dados pessoais.",
    "bloquearVoltar": false
  },

  // --- QUESTÕES DA AVALIAÇÃO FINAL DE INTELIGÊNCIA ARTIFICIAL (401 - 416) ---
  "401": {
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Avaliação IA - Agentes Inteligentes",
    "enunciado": "O que caracteriza um 'Agente Inteligente' na Ciência da Computação? Como ele percebe seu ambiente e toma decisões para atingir um objetivo estabelecido?",
    "min_chars": 50,
    "keywords": ["agente", "percepção", "ambiente", "decisões", "objetivo"],
    "bloquearVoltar": true
  },

  "402": {
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Avaliação IA - Classificação vs Regressão",
    "enunciado": "Explique a diferença entre problemas de Classificação e problemas de Regressão em Aprendizado Supervisionado. Cite um exemplo de cada um.",
    "min_chars": 50,
    "keywords": ["classificação", "regressão", "discreto", "contínuo", "supervisionado"],
    "bloquearVoltar": true
  },

  "403": {
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Avaliação IA - Algoritmos de Agrupamento",
    "enunciado": "Como funciona o algoritmo k-Means no Aprendizado Não-Supervisionado? Qual a função do parâmetro 'k' na divisão dos grupos de dados?",
    "min_chars": 50,
    "keywords": ["kmeans", "agrupamento", "clusters", "centroides", "parâmetro k"],
    "bloquearVoltar": true
  },

  "404": {
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Avaliação IA - Prevenção de Overfitting",
    "enunciado": "Cite e explique duas técnicas utilizadas para evitar o Overfitting no treinamento de modelos complexos de Aprendizado de Máquina (ex: Regularização, Dropout, Early Stopping).",
    "min_chars": 50,
    "keywords": ["overfitting", "regularização", "dropout", "early stopping", "generalização"],
    "bloquearVoltar": true
  },

  "405": {
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Avaliação IA - Redes Convolucionais (CNNs)",
    "enunciado": "Qual a vantagem do uso de Redes Neurais Convolucionais (CNNs) para o processamento de imagens digitais em relação às redes totalmente conectadas tradicionais?",
    "min_chars": 50,
    "keywords": ["cnn", "convolução", "filtros", "imagens", "extração de atributos"],
    "bloquearVoltar": true
  },

  "406": {
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Avaliação IA - Mecanismo de Atenção",
    "enunciado": "Como o mecanismo de Auto-Atenção (Self-Attention) permite que modelos baseados na arquitetura Transformer lidem com o contexto global de frases extensas?",
    "min_chars": 50,
    "keywords": ["auto-atenção", "transformer", "contexto", "sequência", "relacionamento"],
    "bloquearVoltar": true
  },

  "407": {
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Avaliação IA - Métricas de Desempenho",
    "enunciado": "Defina o que é a métrica F1-Score e por que ela é mais indicada do que a Acurácia simples ao avaliar conjuntos de dados altamente desbalanceados.",
    "min_chars": 50,
    "keywords": ["f1-score", "acurácia", "desbalanceados", "precisão", "recall"],
    "bloquearVoltar": true
  },

  "408": {
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Avaliação IA - Gradiente Desvanecente",
    "enunciado": "O que é o problema do Gradiente Desvanecente (Vanishing Gradient) no algoritmo de Backpropagation em redes profundas? Como funções como ReLU ajudam a amenizá-lo?",
    "min_chars": 50,
    "keywords": ["gradiente", "backpropagation", "desvanecente", "relu", "pesos"],
    "bloquearVoltar": true
  },

  "409": {
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Avaliação IA - Deep Q-Learning",
    "enunciado": "Como o Aprendizado por Reforço Profundo (Deep Q-Learning) combina redes neurais artificiais com o aprendizado por recompensa para resolver problemas complexos?",
    "min_chars": 50,
    "keywords": ["deep q-learning", "reforço", "q-table", "redes neurais", "ações"],
    "bloquearVoltar": true
  },

  "410": {
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Avaliação IA - Alucinação em LLMs",
    "enunciado": "O que é a 'Alucinação' em modelos generativos de linguagem de grande porte (LLMs)? Explique as causas e cite uma técnica para mitigar esse problema (ex: RAG).",
    "min_chars": 50,
    "keywords": ["alucinação", "llm", "rag", "gerativo", "fatos"],
    "bloquearVoltar": true
  },

  "411": {
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Avaliação IA - Validação Cruzada (Cross-Validation)",
    "enunciado": "O que é o método de Validação Cruzada K-Fold (K-Fold Cross-Validation) e qual é a sua vantagem para medir a robustez de um modelo?",
    "min_chars": 50,
    "keywords": ["validação cruzada", "k-fold", "partições", "robustez", "desempenho"],
    "bloquearVoltar": true
  },

  "412": {
    "disciplina": "Inteligência Artificial",
    "nivel": 0,
    "titulo": "Avaliação IA - Pré-processamento de Dados",
    "enunciado": "Por que etapas de pré-processamento de dados como Normalização ou Padronização de escalas numéricas são importantes antes de treinar algoritmos de IA?",
    "min_chars": 50,
    "keywords": ["pré-processamento", "normalização", "escala", "atributos", "convergência"],
    "bloquearVoltar": true
  },

  "413": {
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Avaliação IA - Engenharia de Atributos",
    "enunciado": "Explique a importância da Engenharia de Atributos (Feature Engineering) na construção de modelos de IA e como a criação de variáveis relevantes melhora a precisão.",
    "min_chars": 50,
    "keywords": ["atributos", "features", "transformação", "variáveis", "desempenho"],
    "bloquearVoltar": true
  },

  "414": {
    "disciplina": "Inteligência Artificial",
    "nivel": 1,
    "titulo": "Avaliação IA - Aprendizado de Representação",
    "enunciado": "O que são Embeddings (vetores de incorporação) em Inteligência Artificial e como eles capturam relações semânticas entre palavras ou conceitos?",
    "min_chars": 50,
    "keywords": ["embeddings", "vetores", "semântica", "espaço vetorial", "distância"],
    "bloquearVoltar": true
  },

  "415": {
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Avaliação IA - Redes Generativas Adversárias (GANs)",
    "enunciado": "Como funciona uma Rede Generativa Adversária (GAN)? Explique o papel concorrente do Gerador e do Discriminador na criação de novos dados sintéticos.",
    "min_chars": 50,
    "keywords": ["gan", "gerador", "discriminador", "sintético", "adversária"],
    "bloquearVoltar": true
  },

  "416": {
    "disciplina": "Inteligência Artificial",
    "nivel": 2,
    "titulo": "Avaliação IA - Alinhamento e RLHF",
    "enunciado": "O que é a técnica de Aprendizado por Reforço com Feedback Humano (RLHF) e por que ela é utilizada para alinhar modelos de linguagem com expectativas humanas de utilidade e segurança?",
    "min_chars": 50,
    "keywords": ["rlhf", "feedback humano", "alinhamento", "segurança", "preferência"],
    "bloquearVoltar": true
  }
};
