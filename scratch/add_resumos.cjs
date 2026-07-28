const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/questions/bancoProvas.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Prova interface
content = content.replace(
  /export interface Prova \{/,
  'export interface Prova {\n  resumoCurto?: string;'
);

// Map short explanatory texts per question ID
const resumos = {
  "001": "Hardware é a parte física tangível (peças, circuitos). Software são os programas lógicos executados pelo sistema.",
  "002": "Ctrl+C duplica o item para a memória. Ctrl+V cola o item. Ctrl+X remove do local original e move para a memória.",
  "003": "Arquivos .txt guardam caracteres puros sem formatação gráfica ou oculta, sendo leves e compatíveis com qualquer sistema.",
  "004": "O VS Code destaca sintaxes com cores e indica erros em tempo real, aumentando a velocidade e segurança na escrita de código.",
  "005": "Salvar frequentemente (Ctrl+S) garante a persistência dos dados no disco rígido antes que uma falha de energia limpe a memória RAM.",
  "006": "O atalho Alt+Tab alterna instantaneamente entre as janelas ativas do sistema, otimizando o fluxo de trabalho multitarefa.",
  "007": "Salvar na nuvem armazena dados em servidores remotos seguros via internet, permitindo acesso de qualquer lugar com backup automático.",
  "008": "Pastas organizam o sistema de arquivos. Nomeá-las com clareza evita perda de documentos e facilita buscas futuras.",
  "009": "Nomes padronizados fornecem contexto imediato sobre o conteúdo do arquivo, evitando ambiguidades e substituições acidentais.",
  "101": "Algoritmo é uma sequência finita de passos lógicos e ordenados para solucionar um problema ou atingir um objetivo.",
  "102": "Fluxogramas ilustram graficamente o fluxo de execução. O retângulo representa ações e o losango representa decisões lógicas.",
  "103": "Entrada recebe dados externos, Processamento transforma as informações lógicas e Saída exibe o resultado final.",
  "104": "Pseudocódigo permite praticar a lógica de programação em português estruturado sem a rigidez sintática das linguagens.",
  "105": "O retângulo no fluxograma indica tarefas ativas ou operações matemáticas, como cálculos e atribuição de valores.",
  "106": "Todo algoritmo deve ter início e fim definidos para garantir a execução finita e evitar loops infinitos.",
  "107": "Sistemas automáticos seguem regras condicionais contínuas baseadas em tempo ou leitura de sensores.",
  "108": "Alterar a ordem de passos em um algoritmo modifica o fluxo de execução e pode gerar resultados incorretos ou erros.",
  "109": "Instruções devem ser precisas e inequívocas para que o computador as interprete e execute sem falhas.",
  "201": "O terminal interativo do Python executa comandos linha por linha instantaneamente. Digite exit() ou quit() para sair.",
  "202": "Erros de sintaxe ocorrem quando as regras gramaticais da linguagem são violadas, interrompendo a execução antes do fim.",
  "203": "A extensão .py sinaliza ao sistema operacional e ao interpretador que o arquivo contém código-fonte Python executável.",
  "204": "print() exibe informações no console. Textos (strings) devem obrigatoriamente estar envolvidos por aspas.",
  "205": "O símbolo # cria comentários que são ignorados pelo interpretador, servindo exclusivamente para documentar o código.",
  "206": "Conhecer versões antigas do Python é importante para manter códigos legados e compreender a evolução da sintaxe.",
  "207": "Python é case-sensitive: variáveis com maiúsculas e minúsculas (como Nome e nome) são tratadas como distintas.",
  "208": "O interpretador lê o código-fonte em alto nível e o traduz para linguagem de máquina durante a execução.",
  "209": "A identação (espaçamento) em Python delimita o início e o fim de blocos de código; alinhamentos errados causam erros de sintaxe.",
  "301": "A tipagem dinâmica define o tipo de dado automaticamente no momento da atribuição de um valor à variável.",
  "302": "input() captura entradas do teclado sempre como texto (str), exigindo conversão caso números sejam necessários.",
  "303": "int armazena números inteiros sem vírgula (ex: 10), enquanto float armazena números com casas decimais (ex: 10.5).",
  "304": "O tipo Booleano representa valores lógicos de verdade, assumindo apenas dois estados: True (Verdadeiro) ou False (Falso).",
  "305": "Nomes de variáveis não podem começar com números nem conter espaços; use letras, números e sublinhados (snake_case).",
  "306": "type() retorna o tipo de dado atual de uma variável, ajudando a depurar inconsistências durante a execução.",
  "307": "Casting é a conversão explícita de tipos; a função float('10') transforma o texto '10' no número real 10.0.",
  "308": "Variáveis podem mudar de valor durante a execução, enquanto constantes mantêm valores fixos por convenção semântica.",
  "309": "O operador + entre strings realiza concatenação (junta os textos), enquanto entre números realiza soma aritmética.",
  "401": "O recuo (Tab) abaixo do if indica as instruções que pertencem exclusivamente àquele bloco condicional.",
  "402": "O operador % calcula o resto da divisão inteira. Se numero % 2 == 0, o número é par; caso contrário, é ímpar.",
  "403": "= atribui um valor a uma variável, enquanto == compara se dois valores são iguais retornando um booleano.",
  "404": "elif encadeia testes condicionais mutuamente exclusivos de forma mais eficiente do que múltiplos ifs independentes.",
  "405": "O operador and exige que todas as condições sejam verdadeiras para que o resultado final seja True.",
  "406": "O operador or requer que ao menos uma das condições seja verdadeira para que o bloco seja executado.",
  "407": "else define o bloco de código padrão a ser executado caso nenhuma das condições anteriores seja atendida.",
  "408": "Valores de borda são os pontos limites de uma condição (ex: 6.0 em >= 6.0), fundamentais para testes de precisão.",
  "409": "O operador != verifica a desigualdade entre dois elementos, retornando True se os valores forem diferentes.",
  "501": "Loops infinitos ocorrem quando a condição do while nunca se torna falsa; altere a variável de controle no laço.",
  "502": "for i in range(5) gera os valores 0, 1, 2, 3 e 4. O limite superior (5) não é incluído na sequência.",
  "503": "Variáveis contadoras acumulam acréscimos constantes (ex: cont += 1) para controlar a quantidade de repetições.",
  "504": "Contadores somam valores fixos de contagem (ex: +1); acumuladores somam valores variáveis (ex: soma += preco).",
  "505": "Use for para iterações com número de vezes conhecido e while para repetições condicionais indeterminadas.",
  "506": "break interrompe e encerra imediatamente a execução do laço de repetição atual, desviando o fluxo para fora.",
  "507": "continue pula o restante do código na repetição atual e avança diretamente para a próxima iteração do laço.",
  "508": "range(0, 10, 2) gera a sequência 0, 2, 4, 6, 8. O terceiro parâmetro (2) indica o tamanho do passo de incremento.",
  "509": "Loops aninhados executam um laço interno completo para cada iteração do laço externo (ex: horas e minutos).",
  "601": "Listas agrupam múltiplos elementos ordenados sob uma única variável, facilitando o acesso e a iteração com laços.",
  "602": "Em matrizes 2D matriz[x][y], o primeiro índice [x] representa a linha e o segundo índice [y] representa a coluna.",
  "603": "Index Out of Range ocorre ao tentar acessar um elemento usando um índice maior ou igual ao tamanho da lista.",
  "604": ".append(valor) adiciona um novo elemento exatamente ao final de uma lista existente.",
  "605": ".pop() remove e retorna o último elemento de uma lista, reduzindo seu tamanho dinamicamente.",
  "606": "for elemento in lista percorre todos os itens da coleção um a um, atribuindo o valor atual à variável temporária.",
  "607": "len(lista) retorna o número total de elementos contidos na lista.",
  "608": "Iniciar com lista = [] cria um recipiente vazio para ser preenchido dinamicamente durante a execução.",
  "609": "Matrizes representam dados dispostos em linhas e colunas (como planilhas, tabuleiros e mapas de coordenadas).",
  "701": "f-strings com formatadores (ex: {:.2f}) padronizam a exibição de casas decimais em números de ponto flutuante.",
  "702": "Tratar divisões por zero com checagens prévias evita exceções e interrupções inesperadas no sistema.",
  "703": "Feedbacks claros explicam a causa exata de erros, melhorando a experiência e a orientação do usuário.",
  "704": "Aplicar descontos compostos altera a base de cálculo a cada etapa, resultando em valores finais diferentes de descontos diretos.",
  "705": "Utilize float para grandezas contínuas/monetárias e int para quantidades contáveis e discretas.",
  "706": "A ordem dos testes no elif deve seguir uma hierarquia lógica correta para evitar que faixas genéricas capturem valores.",
  "707": "Combinar and e or com parênteses permite construir regras lógicas complexas e personalizadas.",
  "708": "O módulo random introduz aleatoriedade e imprevisibilidade em sorteios, jogos e simulações.",
  "709": "Higienizar entradas (ex: .lower() e .strip()) uniformiza os textos digitados prevenindo erros por formatação.",
  "801": "Variáveis locais nascem e morrem dentro da função onde foram declaradas, não sendo acessíveis externamente.",
  "802": "Parâmetros recebem argumentos enviados de fora da função, permitindo processar dados dinâmicos.",
  "803": "print() exibe mensagens no console; return devolve o valor calculado para ser armazenado ou reutilizado no código.",
  "804": "Modularizar em funções pequenas melhora a legibilidade, facilita testes unitários e reduz a duplicação de código.",
  "805": "Docstrings (aspas triplas) documentam o propósito, parâmetros e retorno de uma função diretamente no código.",
  "806": "Parâmetros padrão (ex: def f(x=10)) definem valores default utilizados caso o argumento não seja enviado.",
  "807": "Funções são invocadas pelo seu nome seguido de parênteses nome_funcao(); sem parênteses você obtém a referência.",
  "808": "O princípio DRY incentiva a criação de funções e abstrações para evitar repetição desnecessária de código.",
  "809": "O comando import carrega bibliotecas e módulos pré-existentes estendendo as funcionalidades do programa."
};

const updatedContent = content.replace(/"(\d+)":\s*\{/g, (match, id) => {
  const resumo = resumos[id] || "Texto explicativo curto sobre os conceitos cobrados nesta questão.";
  return `"${id}": {\n    "resumoCurto": "${resumo.replace(/"/g, '\\"')}",`;
});

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log("Successfully added short explanatory texts (resumoCurto) to all questions in bancoProvas.ts!");
