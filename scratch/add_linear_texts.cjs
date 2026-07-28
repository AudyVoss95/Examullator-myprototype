const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/questions/bancoProvas.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Prova interface
content = content.replace(
  /export interface Prova \{/,
  `export interface SecaoTexto {
  titulo: string;
  conteudo: string;
  exemploCodigo?: string;
}

export interface Prova {
  textosPreparatorios?: SecaoTexto[];`
);

// Map of linear preparatory texts (Texto 1 e Texto 2) for questions
const linearTexts = {
  "001": [
    { titulo: "Conceito 1: O que é Hardware?", conteudo: "Hardware refere-se a todos os componentes físicos e circuitos eletrônicos que compõem o computador, como gabinete, placa-mãe, memória RAM, processador e periféricos." },
    { titulo: "Conceito 2: O que é Software?", conteudo: "Software é a camada de programas e instruções lógicas executadas sobre o hardware. Inclui sistemas operacionais, aplicativos e scripts de programação." }
  ],
  "002": [
    { titulo: "Conceito 1: Copiar vs. Recortar", conteudo: "Copiar (Ctrl+C) duplica o conteúdo mantendo o arquivo original. Recortar (Ctrl+X) move o conteúdo limpando o local de origem." },
    { titulo: "Conceito 2: Colar (Ctrl+V)", conteudo: "O comando Colar insere na posição atual do cursor os dados que foram armazenados temporariamente na área de transferência." }
  ],
  "003": [
    { titulo: "Conceito 1: O Formato de Texto Puro (.txt)", conteudo: "Arquivos de texto simples (.txt) contêm apenas caracteres puros legíveis por humanos sem metadados visuais de estilização." },
    { titulo: "Conceito 2: Vantagens para Programadores", conteudo: "Por não conterem códigos ocultos de formatação, arquivos .txt são universalmente interpretados por compiladores e scripts." }
  ],
  "004": [
    { titulo: "Conceito 1: Editores de Código Avançados", conteudo: "Editores como o VS Code oferecem realce de sintaxe (syntax highlighting), identificando palavras-chave, variáveis e strings por cores." },
    { titulo: "Conceito 2: Produtividade e Validação", conteudo: "Recursos como auto-completar e detecção de erros em tempo real evitam falhas simples durante a digitação do código-fonte." }
  ],
  "005": [
    { titulo: "Conceito 1: Memória Volátil vs. Persistência", conteudo: "A memória RAM é volátil e perde todas as informações ao desligar o computador. Gravar no disco garante a persistência do trabalho." },
    { titulo: "Conceito 2: O Atalho de Salvamento (Ctrl+S)", conteudo: "Adquirir o hábito de salvar o arquivo constantemente evita a perda indesejada de alterações causadas por instabilidade no sistema." }
  ],
  "006": [
    { titulo: "Conceito 1: Fluxo Multitarefa", conteudo: "Sistemas operacionais modernos permitem a execução simultânea de múltiplos programas, exigindo formas rápidas de navegação." },
    { titulo: "Conceito 2: O Atalho Alt+Tab", conteudo: "Pressionar Alt+Tab alterna o foco visual e de teclado instantaneamente para a última janela utilizada, aumentando a velocidade." }
  ],
  "007": [
    { titulo: "Conceito 1: Armazenamento em Nuvem", conteudo: "Arquivos na nuvem ficam salvos em data centers remotos acessíveis pela internet, permitindo colaboração e acesso de múltiplos dispositivos." },
    { titulo: "Conceito 2: Backup e Segurança", conteudo: "Sistemas de nuvem realizam cópias de segurança automáticas, protegendo documentos contra perdas por falhas no hardware local." }
  ],
  "008": [
    { titulo: "Conceito 1: Hierarquia de Pastas", conteudo: "Pastas e diretórios organizam arquivos em estruturas hierárquicas, impedindo o acúmulo desordenado na área de trabalho." },
    { titulo: "Conceito 2: Nomenclatura Organizada", conteudo: "Nomear pastas com termos claros e categorias funcionais facilita a localização rápida e a manutenção por outros membros da equipe." }
  ],
  "009": [
    { titulo: "Conceito 1: Padronização de Nomes", conteudo: "Nomes de arquivos devem ser autodescritivos e incluir versão ou data quando necessário (ex: relatorio_financeiro_2026.txt)." },
    { titulo: "Conceito 2: Prevenção de Substituição", conteudo: "Evitar nomes genéricos como 'trabalho.txt' reduz o risco de sobreescrever arquivos importantes por engano." }
  ],
  "101": [
    { titulo: "Conceito 1: Definição de Algoritmo", conteudo: "Um algoritmo é uma sequência finita de etapas lógicas e ordenadas criada para resolver um problema específico." },
    { titulo: "Conceito 2: Determinismo e Clareza", conteudo: "Cada passo do algoritmo deve ser inequívoco, garantindo que o mesmo resultado seja obtido sempre que for executado com as mesmas entradas." }
  ],
  "102": [
    { titulo: "Conceito 1: Representação Visual", conteudo: "Fluxogramas são diagramas gráficos que utilizam formas geométricas padronizadas para ilustrar o fluxo de um algoritmo." },
    { titulo: "Conceito 2: Símbolos Retângulo e Losango", conteudo: "O retângulo representa um processo ou ação; o losango representa uma tomada de decisão que se divide em caminhos Sim ou Não." }
  ],
  "103": [
    { titulo: "Conceito 1: As Três Fases do Processamento", conteudo: "Todo sistema computacional opera no ciclo Entrada -> Processamento -> Saída." },
    { titulo: "Conceito 2: Papel de Cada Etapa", conteudo: "A Entrada capta os dados, o Processamento executa os cálculos e regras, e a Saída fornece o resultado final ao usuário." }
  ],
  "104": [
    { titulo: "Conceito 1: O que é Pseudocódigo?", conteudo: "Pseudocódigo (ou Portugol) é uma forma estruturada de escrever algoritmos usando linguagem natural sem regras de sintaxe estritas." },
    { titulo: "Conceito 2: Foco na Lógica", conteudo: "Permite focar na resolução do problema e no encadeamento de ideias antes de aprender os detalhes de uma linguagem específica." }
  ],
  "105": [
    { titulo: "Conceito 1: Blocos de Ação no Fluxograma", conteudo: "No desenho de um fluxograma, a caixa retangular identifica etapas de processamento interno ou atribuição." },
    { titulo: "Conceito 2: Exemplos de Ação", conteudo: "Exemplos incluem somar dois números, aplicar um desconto ou atualizar o saldo de uma conta." }
  ],
  "106": [
    { titulo: "Conceito 1: Finitude dos Algoritmos", conteudo: "Todo algoritmo obrigatoriamente precisa ter um ponto de início e um ponto de término bem definidos." },
    { titulo: "Conceito 2: Prevenção de Loops Infinitos", conteudo: "Sem uma condição de parada clara, o computador pode travar tentando executar instruções indefinidamente." }
  ],
  "107": [
    { titulo: "Conceito 1: Tomada de Decisão em Tempo Real", conteudo: "Sistemas automáticos monitoram sinais e tomam decisões imediatas com base em limiares pré-programados." },
    { titulo: "Conceito 2: Exemplos Práticos", conteudo: "Semáforos inteligentes alteram os tempos de luz verde de acordo com o fluxo de veículos detectado por sensores." }
  ],
  "108": [
    { titulo: "Conceito 1: A Importância da Ordem Lógica", conteudo: "A sequência das instruções altera diretamente o resultado final de um algoritmo." },
    { titulo: "Conceito 2: Exemplo de Inversão", conteudo: "Tentar calcular a média antes de ler os valores das notas gera um erro grave de execução." }
  ],
  "109": [
    { titulo: "Conceito 1: Precisão nas Instruções", conteudo: "O computador segue comandos ao pé da letra. Instruções vagas geram resultados imprevisíveis." },
    { titulo: "Conceito 2: Validação de Etapas", conteudo: "Revisar detalhadamente cada passo previne falhas antes da codificação final em computador." }
  ],
  "201": [
    { titulo: "Conceito 1: O REPL em Python", conteudo: "O terminal interativo do Python lê, avalia e exibe os resultados de cada instrução imediatamente após pressionar Enter." },
    { titulo: "Conceito 2: Comandos de Saída", conteudo: "Para encerrar uma sessão no terminal interativo, utilize a função exit() ou o atalho Ctrl+Z (Windows)." }
  ],
  "202": [
    { titulo: "Conceito 1: Erros de Sintaxe (SyntaxError)", conteudo: "Ocorrem quando o código violar as regras gramaticais da linguagem Python (ex: esquecer de fechar um parêntese)." },
    { titulo: "Conceito 2: Interrupção Imediata", conteudo: "O interpretador Python interrompe a execução do arquivo assim que encontra um erro de sintaxe." }
  ],
  "203": [
    { titulo: "Conceito 1: A Extensão .py", conteudo: "Arquivos contendo código-fonte Python devem ser salvos obrigatoriamente com a extensão .py." },
    { titulo: "Conceito 2: Execução via Linha de Comando", conteudo: "No terminal, digite 'python nome_do_arquivo.py' para iniciar a interpretação do script." }
  ],
  "204": [
    { titulo: "Conceito 1: A Função print()", conteudo: "A função interna print() envia dados para a saída padrão (tela do console)." },
    { titulo: "Conceito 2: Aspas em Strings", conteudo: "Textos literais devem ser delimitados por aspas simples ('texto') ou aspas duplas (\"texto\")." }
  ],
  "205": [
    { titulo: "Conceito 1: Comentários de Linha Unica (#)", conteudo: "Linhas iniciadas com o caractere cerquilha (#) são ignoradas pelo interpretador Python." },
    { titulo: "Conceito 2: Boas Práticas de Documentação", conteudo: "Comentários servem para explicar o porquê de soluções complexas, tornando o código legível para outros devs." }
  ],
  "206": [
    { titulo: "Conceito 1: Evolução da Linguagem", conteudo: "Python 3 introduziu melhorias significativas em relação ao Python 2, como tratamento nativo de UTF-8 e novo print()." },
    { titulo: "Conceito 2: Manutenção de Código Legado", conteudo: "Conhecer as diferenças ajuda na migração de sistemas antigos para versões modernas e seguras." }
  ],
  "207": [
    { titulo: "Conceito 1: Diferenciação Case-Sensitive", conteudo: "Em Python, maiúsculas e minúsculas são totalmente distintas." },
    { titulo: "Conceito 2: Exemplo de Variáveis", conteudo: "As variáveis 'Total', 'total' e 'TOTAL' referenciam três posições de memória completamente diferentes." }
  ],
  "208": [
    { titulo: "Conceito 1: O Interpretador Python", conteudo: "Python é uma linguagem interpretada. O código é traduzido em bytecode e executado pela Máquina Virtual Python (PVM)." },
    { titulo: "Conceito 2: Agilidade de Desenvolvimento", conteudo: "Não há necessidade de compilar um executável binário antes de testar as alterações no código." }
  ],
  "209": [
    { titulo: "Conceito 1: Identaação Obrigatória", conteudo: "Diferente de C ou Java que usam chaves {}, Python usa o recuo (espaços/tabs) para definir blocos de código." },
    { titulo: "Conceito 2: IndentationError", conteudo: "Desalinhar linhas pertencentes ao mesmo bloco resulta em um erro fatal durante a interpretação." }
  ],
  "301": [
    { titulo: "Conceito 1: Tipagem Dinâmica", conteudo: "Em Python não é necessário declarar o tipo da variável com antecedência." },
    { titulo: "Conceito 2: Atribuição Automática", conteudo: "O tipo é inferido automaticamente com base no valor atribuído (ex: x = 10 cria um inteiro)." }
  ],
  "302": [
    { titulo: "Conceito 1: Leitura de Dados com input()", conteudo: "A função input('mensagem') exibe o texto e aguarda a digitação do usuário no teclado." },
    { titulo: "Conceito 2: Retorno Sempre como String", conteudo: "Qualquer valor lido por input() retorna como tipo str, mesmo que o usuário digite números." }
  ],
  "303": [
    { titulo: "Conceito 1: O Tipo Inteiro (int)", conteudo: "Representa números inteiros positivos ou negativos sem casas decimais (ex: -5, 0, 42)." },
    { titulo: "Conceito 2: O Tipo Flutuante (float)", conteudo: "Representa números reais contendo ponto decimal (ex: 3.14, 0.5, -12.8)." }
  ],
  "304": [
    { titulo: "Conceito 1: O Tipo Booleano (bool)", conteudo: "Valores lógicos em Python são representados por True (Verdadeiro) e False (Falso)." },
    { titulo: "Conceito 2: Grafia Maiúscula", conteudo: "A primeira letra deve ser obrigatoriamente maiúscula (True e False)." }
  ],
  "305": [
    { titulo: "Conceito 1: Regras de Nomenclatura", conteudo: "Nomes de variáveis devem começar com letras ou sublinhado (_), nunca com números." },
    { titulo: "Conceito 2: Padrão snake_case", conteudo: "Recomenda-se usar letras minúsculas separadas por sublinhado (ex: valor_total_compra)." }
  ],
  "306": [
    { titulo: "Conceito 1: Inspeção com type()", conteudo: "A função type(objeto) retorna a classe/tipo de dado do valor fornecido." },
    { titulo: "Conceito 2: Diagnóstico de Erros", conteudo: "Útil para identificar quando uma variável contém texto em vez do número esperado." }
  ],
  "307": [
    { titulo: "Conceito 1: Conversão de Tipos (Casting)", conteudo: "Casting é o processo de transformar o valor de um tipo em outro int(), float(), str()." },
    { titulo: "Conceito 2: Exemplo Prático", conteudo: "int('25') converte o texto '25' no número inteiro 25 para permitir operações matemáticas." }
  ],
  "308": [
    { titulo: "Conceito 1: Mutabilidade de Variáveis", conteudo: "O valor de uma variável pode ser alterado a qualquer momento durante a execução do programa." },
    { titulo: "Conceito 2: Convenção de Constantes", conteudo: "Para valores que não devem mudar (ex: PI = 3.14), usa-se nomes totalmente em MAIÚSCULAS por convenção." }
  ],
  "309": [
    { titulo: "Conceito 1: O Operador + com Números", conteudo: "Quando aplicado entre inteiros ou floats, o símbolo + realiza a adição matemática." },
    { titulo: "Conceito 2: O Operador + com Textos", conteudo: "Quando aplicado entre strings, o símbolo + realiza a junção dos textos (concatenação)." }
  ],
  "401": [
    { titulo: "Conceito 1: A Estrutura if", conteudo: "A instrução if avalia se uma expressão lógica é verdadeira para executar o bloco interno." },
    { titulo: "Conceito 2: Bloco Identado", conteudo: "Todas as linhas recuadas abaixo do if pertencem ao corpo da condição." }
  ],
  "402": [
    { titulo: "Conceito 1: Operador de Módulo (%)", conteudo: "O operador % devolve o resto da divisão entre dois números inteiros." },
    { titulo: "Conceito 2: Verificação Par/Ímpar", conteudo: "Se numero % 2 == 0, o número é divisível por 2 (Par); caso contrário, é Ímpar." }
  ],
  "403": [
    { titulo: "Conceito 1: Atribuição (=)", conteudo: "Um único sinal de igual (=) atribui o valor da direita para a variável da esquerda." },
    { titulo: "Conceito 2: Comparação de Igualdade (==)", conteudo: "Dois sinais de igual (==) comparam se os dois valores são iguais retornando True ou False." }
  ],
  "404": [
    { titulo: "Conceito 1: Estrutura elif", conteudo: "Abreviação de 'else if', permite testar múltiplas condições em sequência." },
    { titulo: "Conceito 2: Eficiência", conteudo: "Assim que uma condição elif é satisfeita, as demais são ignoradas pelo interpretador." }
  ],
  "405": [
    { titulo: "Conceito 1: Operador Lógico and", conteudo: "Exige que a condição A E a condição B sejam ambas verdadeiras simultaneamente." },
    { titulo: "Conceito 2: Tabela Verdade", conteudo: "True and True resulta em True. Se qualquer uma for False, o resultado final é False." }
  ],
  "406": [
    { titulo: "Conceito 1: Operador Lógico or", conteudo: "Exige que pelo menos uma das condições seja verdadeira." },
    { titulo: "Conceito 2: Avaliação Curto-Circuito", conteudo: "Se a primeira condição for True, o Python nem precisa avaliar a segunda." }
  ],
  "407": [
    { titulo: "Conceito 1: A Cláusula else", conteudo: "Define o caminho alternativo padrão quando todas as checagens anteriores forem falsas." },
    { titulo: "Conceito 2: Sem Condição Direta", conteudo: "O else não recebe parâmetros; ele captura tudo o que sobrou." }
  ],
  "408": [
    { titulo: "Conceito 1: O que são Valores Limite?", conteudo: "São os números nos limites exatos das faixas de decisão (ex: 7.0 em nota >= 7.0)." },
    { titulo: "Conceito 2: Testes de Precisão", conteudo: "Garantir o operador correto (>= ou >) evita reprovar alunos com a nota exata de corte." }
  ],
  "409": [
    { titulo: "Conceito 1: Operador Desigual (!=)", conteudo: "Verifica se dois valores são diferentes um do outro." },
    { titulo: "Conceito 2: Retorno Booleano", conteudo: "Retorna True se os valores forem distintos e False se forem exatamente iguais." }
  ],
  "501": [
    { titulo: "Conceito 1: A Estrutura while", conteudo: "Executa repetidamente um bloco de código enquanto sua condição permanecer verdadeira." },
    { titulo: "Conceito 2: Cuidado com Loop Infinito", conteudo: "O corpo do loop deve alterar variáveis que eventualmente tornem a condição falsa." }
  ],
  "502": [
    { titulo: "Conceito 1: O Laço for com range()", conteudo: "Usado para iterar um número determinado de vezes através de uma sequência." },
    { titulo: "Conceito 2: Intervalo Exclusivo no Fim", conteudo: "range(5) gera 0, 1, 2, 3, 4 (o 5 não é incluído)." }
  ],
  "503": [
    { titulo: "Conceito 1: Variáveis Contadoras", conteudo: "Variáveis incrementadas em passos fixos (ex: contador += 1) para monitorar repetições." },
    { titulo: "Conceito 2: Inicialização", conteudo: "Devem ser criadas antes do início do laço (ex: contador = 0)." }
  ],
  "504": [
    { titulo: "Conceito 1: Contador vs. Acumulador", conteudo: "O contador soma unidades fixas (1 em 1); o acumulador soma valores dinâmicos (ex: soma += preco)." },
    { titulo: "Conceito 2: Aplicação", conteudo: "Usado para calcular somatórios totais de compras ou notas." }
  ],
  "505": [
    { titulo: "Conceito 1: Escolhendo o Laço Correto", conteudo: "Use for quando souber a quantidade exata de repetições; use while quando depender de um evento externo." },
    { titulo: "Conceito 2: Legibilidade", conteudo: "O for torna o código mais limpo ao evitar o controle manual de incremento." }
  ],
  "506": [
    { titulo: "Conceito 1: O Comando break", conteudo: "Interrompe a execução do laço imediatamente e sai da repetição." },
    { titulo: "Conceito 2: Uso Comum", conteudo: "Utilizado para encerrar menus ou cancelar buscas ao encontrar o elemento." }
  ],
  "507": [
    { titulo: "Conceito 1: O Comando continue", conteudo: "Pula o restante das instruções da repetição atual e avança para a próxima iteração." },
    { titulo: "Conceito 2: Diferença para o break", conteudo: "O continue não encerra o laço, apenas ignora o passo atual." }
  ],
  "508": [
    { titulo: "Conceito 1: Parâmetros do range(início, fim, passo)", conteudo: "Aceita três argumentos: onde começa, onde termina e o incremento." },
    { titulo: "Conceito 2: Exemplo com Passo", conteudo: "range(0, 10, 2) gera 0, 2, 4, 6, 8 (números pares)." }
  ],
  "509": [
    { titulo: "Conceito 1: Laços Aninhados", conteudo: "Um laço contido dentro de outro laço de repetição." },
    { titulo: "Conceito 2: Frequência de Execução", conteudo: "Para cada iteração do laço externo, o laço interno roda completamente." }
  ],
  "601": [
    { titulo: "Conceito 1: O que é uma Lista?", conteudo: "Uma lista em Python é uma sequência mutável e ordenada de elementos entre colchetes []." },
    { titulo: "Conceito 2: Acesso por Índice Base Zero", conteudo: "O primeiro elemento fica no índice 0, o segundo no índice 1 e assim por diante." }
  ],
  "602": [
    { titulo: "Conceito 1: Matrizes 2D", conteudo: "Estrutura formada por uma lista que contém outras listas (linhas e colunas)." },
    { titulo: "Conceito 2: Sintaxe de Acesso", conteudo: "matriz[linha][coluna] acessa o elemento na posição especificada." }
  ],
  "603": [
    { titulo: "Conceito 1: IndexError: list index out of range", conteudo: "Ocorre quando tentamos acessar uma posição de índice que não existe na lista." },
    { titulo: "Conceito 2: Prevenção", conteudo: "Garantir que o índice buscado seja menor do que len(lista)." }
  ],
  "604": [
    { titulo: "Conceito 1: O Método .append()", conteudo: "Insere um novo elemento exatamente no final da lista." },
    { titulo: "Conceito 2: Modificação In-Place", conteudo: "Altera a lista original diretamente sem precisar reatribuir." }
  ],
  "605": [
    { titulo: "Conceito 1: O Método .pop()", conteudo: "Remove e retorna o último item da lista (ou o item do índice especificado)." },
    { titulo: "Conceito 2: Redução Dinâmica", conteudo: "Diminui o tamanho total da lista em 1 unidade." }
  ],
  "606": [
    { titulo: "Conceito 1: Iterando em Listas com for", conteudo: "Sintaxe 'for item in lista:' percorre todos os elementos de forma simples." },
    { titulo: "Conceito 2: Vantagens", conteudo: "Elimina a necessidade de controlar índices manuais durante a leitura." }
  ],
  "607": [
    { titulo: "Conceito 1: A Função len()", conteudo: "Retorna a quantidade total de elementos presentes na coleção." },
    { titulo: "Conceito 2: Relação com Índices", conteudo: "O último elemento de uma lista fica sempre na posição len(lista) - 1." }
  ],
  "608": [
    { titulo: "Conceito 1: Inicialização de Lista Vazia", conteudo: "Criar uma lista com colchetes vazios [] permite acumular dados gradualmente." },
    { titulo: "Conceito 2: Preenchimento", conteudo: "Use laços com .append() para preencher a lista a partir de dados digitados." }
  ],
  "609": [
    { titulo: "Conceito 1: Aplicações de Matrizes", conteudo: "Matrizes são usadas para representar tabelas, jogos de tabuleiro, pixels e mapas." },
    { titulo: "Conceito 2: Laços Duplos", conteudo: "Percom-se matrizes usando um for externo para linhas e um for interno para colunas." }
  ],
  "701": [
    { titulo: "Conceito 1: Formatação com f-strings", conteudo: "Sintaxe f'Texto {variavel:.2f}' permite formatar números de ponto flutuante com casas decimais fixas." },
    { titulo: "Conceito 2: Arredondamento Visual", conteudo: "Padroniza exibição de valores monetários como R$ 10.50." }
  ],
  "702": [
    { titulo: "Conceito 1: Divisão por Zero (ZeroDivisionError)", conteudo: "Dividir qualquer número por 0 resulta em uma exceção grave no programa." },
    { titulo: "Conceito 2: Checagem Prévia", conteudo: "Sempre valide se o divisor é != 0 antes de realizar a operação." }
  ],
  "703": [
    { titulo: "Conceito 1: Experiência do Usuário (UX)", conteudo: "Mensagens claras de erro ajudam o usuário a entender exatamente o que precisa ser corrigido." },
    { titulo: "Conceito 2: Qualidade de Software", conteudo: "Sistemas profissionais orientam o usuário sem travar abruptamente." }
  ],
  "704": [
    { titulo: "Conceito 1: Cálculos de Porcentagem", conteudo: "Para calcular X% de um valor, multiplica-se por (X / 100)." },
    { titulo: "Conceito 2: Descontos Sequenciais", conteudo: "Aplicar descontos em etapas altera o valor base intermediário." }
  ],
  "705": [
    { titulo: "Conceito 1: Escolha de Tipos Numéricos", conteudo: "Use int para unidades inteiras contáveis (quantidade de pessoas, produtos)." },
    { titulo: "Conceito 2: Uso de float", conteudo: "Use float para medições contínuas (preços, peso, temperatura, média)." }
  ],
  "706": [
    { titulo: "Conceito 1: Hierarquia nas Condições", conteudo: "Em cadeias if/elif, ordene os testes das faixas mais restritas para as mais genéricas." },
    { titulo: "Conceito 2: Prevenção de Sombras", conteudo: "Uma condição genérica no topo pode impedir que subcondições específicas sejam avaliadas." }
  ],
  "707": [
    { titulo: "Conceito 1: Agrupamento com Parênteses", conteudo: "Use parênteses em expressões com and e or para garantir a ordem de avaliação desejada." },
    { titulo: "Conceito 2: Legibilidade", conteudo: "Evita ambiguidades no entendimento das regras condicionais." }
  ],
  "708": [
    { titulo: "Conceito 1: O Módulo random", conteudo: "Biblioteca padrão do Python para geração de números aleatórios e seleções." },
    { titulo: "Conceito 2: random.randint(a, b)", conteudo: "Gera um número inteiro aleatório entre a e b (ambos inclusivos)." }
  ],
  "709": [
    { titulo: "Conceito 1: Trimming e Normalização de Textos", conteudo: ".strip() remove espaços extras nas pontas e .lower() converte tudo para minúsculas." },
    { titulo: "Conceito 2: Comparações Robustas", conteudo: "Garante que ' Admin ' e 'admin' sejam reconhecidos como idênticos." }
  ],
  "801": [
    { titulo: "Conceito 1: Escopo Local", conteudo: "Variáveis criadas dentro de uma função existem apenas enquanto a função é executada." },
    { titulo: "Conceito 2: Isolamento", conteudo: "Impede que modificações internas alterem variáveis externas com o mesmo nome." }
  ],
  "802": [
    { titulo: "Conceito 1: Parâmetros da Função", conteudo: "Variáveis declaradas no cabeçalho da função para receber dados de entrada." },
    { titulo: "Conceito 2: Argumentos", conteudo: "Valores concretos passados para a função no momento em que ela é chamada." }
  ],
  "803": [
    { titulo: "Conceito 1: A Instrução return", conteudo: "Devolve o resultado do processamento da função para a linha que a chamou." },
    { titulo: "Conceito 2: Fim da Execução", conteudo: "O comando return encerra imediatamente a execução da função." }
  ],
  "804": [
    { titulo: "Conceito 1: Modularização de Código", conteudo: "Dividir um programa grande em funções pequenas e especializadas." },
    { titulo: "Conceito 2: Vantagens", conteudo: "Facilita a localização de bugs e permite a reutilização das funções em outros arquivos." }
  ],
  "805": [
    { titulo: "Conceito 1: Docstrings em Funções", conteudo: "Textos de documentação delimitados por três aspas (\"\"\" doc \"\"\") na primeira linha da função." },
    { titulo: "Conceito 2: Ajuda Integrada", conteudo: "Permite que a função help() e o editor exibam orientações automáticas ao usuário." }
  ],
  "806": [
    { titulo: "Conceito 1: Parâmetros Opcionais (Default)", conteudo: "Definir um valor padrão no cabeçalho (ex: def calcular(taxa=0.10))." },
    { titulo: "Conceito 2: Flexibilidade", conteudo: "Permite chamar a função sem passar aquele argumento se o padrão for suficiente." }
  ],
  "807": [
    { titulo: "Conceito 1: Chamada de Função", conteudo: "Para executar uma função deve-se utilizar o nome acompanhado dos parênteses (ex: minha_funcao())." },
    { titulo: "Conceito 2: Sem Parênteses", conteudo: "Digitar apenas o nome da função sem () refere-se ao objeto da função, sem executá-la." }
  ],
  "808": [
    { titulo: "Conceito 1: O Princípio DRY", conteudo: "DRY (Don't Repeat Yourself - Não Repita a Si Mesmo) orienta a reutilização de código." },
    { titulo: "Conceito 2: Refatoração", conteudo: "Se você copiou e colou um bloco de código mais de duas vezes, transforme-o em uma função." }
  ],
  "809": [
    { titulo: "Conceito 1: Importação de Módulos (import)", conteudo: "Instrução usada para carregar arquivos com funções externas e bibliotecas no programa atual." },
    { titulo: "Conceito 2: Sintaxe", conteudo: "import math ou from math import sqrt permite utilizar recursos prontos." }
  ]
};

const updatedContent = content.replace(/"(\d+)":\s*\{/g, (match, id) => {
  const prep = linearTexts[id] || [
    { titulo: "Conceito 1: Introdução", conteudo: "Leia o conceito preparatório 1 antes de responder ao desafio." },
    { titulo: "Conceito 2: Exemplo e Regra", conteudo: "Analise a regra prática e o exemplo antes de digitar sua dissertação." }
  ];
  return `"${id}": {\n    "textosPreparatorios": ${JSON.stringify(prep, null, 6)},\n`;
});

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log("Successfully added linear preparatory texts (textosPreparatorios) to all questions in bancoProvas.ts!");
