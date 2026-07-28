# 🎓 Examullator - Plataforma de Avaliação Técnica Simulada

Um simulador interativo web desenvolvido para criar, executar e monitorar avaliações técnicas e provas de programação para alunos e cursos de tecnologia.

🚀 **Live Demo / Deploy:** [examullator-myprototype.vercel.app](https://examullator-myprototype.vercel.app)

---

## 📌 Visão Geral (Overview)

O **Examullator** é uma plataforma completa desenvolvida para suprir as necessidades de ambientes educacionais e de avaliação técnica (ex: exames de lógica, hardware, Python e programação). Ele oferece uma interface intuitiva e segura baseada em **Trilhas Guiadas de Aprendizado**, envio automático de relatórios por **E-mail** para o professor, e sincronização remota.

---

## ✨ Funcionalidades Principais (Key Features)

* 📧 **Envio de Respostas por E-mail (`POST /api/send-email`)**:
  * Funcionalidade integrada com **Nodemailer** para enviar relatórios completos em formato HTML formatado para qualquer e-mail de professor especificado.
  * O relatório por e-mail inclui: nome do estudante, disciplina/trilha realizada, status, média de notas e todas as dissertações detalhadas por questão.
  * Botão **"📧 E-mail"** no Painel do Professor (`ADMIN2026`) e no Dashboard Web em `http://localhost:3001`.
  * Suporta servidores SMTP configuráveis (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`) e conta de testes automática (Ethereal Email).
* 🛣️ **Trilhas Guiadas de Aprendizado (Learning Tracks Hub)**:
  * 5 Trilhas pedagógicas pré-configuradas para teste e visualização:
    1. **Trilha 1: Fundamentos de Hardware & Sistemas Operacionais**
    2. **Trilha 2: Raciocínio Lógico & Algoritmos**
    3. **Trilha 3: Python Fundamentos & Tipagem**
    4. **Trilha 4: Controle de Fluxo & Repetições em Python**
    5. **Trilha 5: Listas, Matrizes & Funções Modulares**
* 📄 **Modelo de Montagem de Questões (`models_content.txt`)**:
  * Arquivo padronizado para professores e educadores elaborarem novas perguntas, textos explicativos e palavras-chave prontas para copiar, preencher e integrar ao sistema.
* 🔄 **Trilha Linear de Aprendizado (`Texto 1 -> Texto 2 -> Pergunta Relacionada`)**:
  * Cada desafio do questionário foi estruturado em uma **sequência linear de passos**:
    1. 📖 **Texto Explicativo 1**: Apresenta o conceito básico ou a introdução teórica.
    2. 💡 **Texto Explicativo 2**: Fornece o aprofundamento, regras de sintaxe e exemplos de código.
    3. ✍️ **Pergunta Relacionada**: Apresenta o desafio dissertativo prático diretamente vinculado aos textos lidos anteriormente.
* 📖 **Telas de Materiais Explicativos & Guia Teórico (Study Hub)**:
  * Telas dedicadas para os alunos lerem resumos conceituais, exemplos práticos de código, dicas e glossários de termos chave antes ou durante os exames.
  * Botão de consulta rápida **"💡 Consultar Teoria"** no cabeçalho durante a realização dos desafios práticos.
* 📊 **Interface & Script de Análise no Localhost (`http://localhost:3001`)**:
  * **Dashboard Web Localhost**: Interface gráfica interativa para analisar o desempenho da turma, disparar e-mails, filtrar por aluno ou disciplina e verificar estatísticas em tempo real.
  * **Script CLI de Terminal (`npm run analyze`)**: Ferramenta de linha de comando para gerar relatórios instantâneos.
* 📚 **Menu Interativo de Escolha de Disciplina & Trilhas**:
  * O aluno pode navegar entre as **Trilhas Guiadas** ou praticar disciplinas individuais e simulado geral.
* 🔒 **Navegação Flexível e Restrição de Retorno por Questão**: Os alunos podem navegar e revisar questões anteriores por padrão, porém determinadas questões podem ser configuradas individualmente pelo professor para **bloquear o retorno** (`bloquearVoltar`).
* 🛡️ **Sistema Anti-Cópia e Cola (Anti-Cheat)**: 
  * Bloqueio ativo de atalhos de teclado (`Ctrl+C`, `Ctrl+V`, `Ctrl+X`), menu de contexto (botão direito) e seleção de texto nos enunciados.
* 📡 **Coleta Remota de Respostas (Live Remote Monitoring)**:
  * Servidor backend nativo em Node.js com Express para receber submissões remotas dos alunos (`POST /api/responses`).

---

## 🛠️ Tecnologias Utilizadas (Tech Stack)

- **Frontend / Interface:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), Lucide React Icons
- **Backend / Servidor Remoto & E-mail:** Node.js, Express, Nodemailer, CORS, TSX
- **Controle de Versão & Hospedagem:** Git, GitHub, Vercel

---

## 💻 Executando o Projeto Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/AudyVoss95/Examullator-myprototype.git
cd Examullator-myprototype
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Iniciar a Aplicação Frontend (Vite)
```bash
npm run dev
```
Acesse a aplicação em `http://localhost:3000`.

### 4. Iniciar o Servidor de Coleta, E-mail & Dashboard Localhost
```bash
npm run server
```
- 📊 **Dashboard Web de Análise & E-mail:** `http://localhost:3001/`
- 📧 **Endpoint API de E-mail:** `http://localhost:3001/api/send-email`
- 📡 **Endpoint API de Submissão:** `http://localhost:3001/api/responses`

### 5. Interpretar Dados via Linha de Comando (CLI)
```bash
npm run analyze
```

---

## 🔑 Acesso ao Painel do Professor (Administrador)

No campo de **Identificação (Nome Completo)** da tela inicial, digite o código de acesso:
```
ADMIN2026
```
Isso liberará o **Painel do Professor**, onde você pode:
- Configurar o **E-mail Destino do Professor**.
- Disparar o envio das respostas de qualquer aluno diretamente por e-mail com um clique (**"📧 E-mail"**).
- Monitorar submissões remotas, testar as trilhas de aprendizado e consultar relatórios.

---

## 👤 Autora & Mantenedora

**Audrey Giovanna Voss Giopato**  
_Software Engineering Student @ 42 | Technical Educator & Course Coordinator_

* GitHub: [@AudyVoss95](https://github.com/AudyVoss95)
