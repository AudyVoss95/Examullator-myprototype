# 🎓 Examullator - Plataforma de Avaliação Técnica Simulada

Um simulador interativo web desenvolvido para criar, executar e monitorar avaliações técnicas e provas de programação para alunos e cursos de tecnologia.

🚀 **Live Demo / Deploy:** [examullator-myprototype.vercel.app](https://examullator-myprototype.vercel.app)

---

## 📌 Visão Geral (Overview)

O **Examullator** é uma plataforma completa desenvolvida para suprir as necessidades de ambientes educacionais e de avaliação técnica (ex: exames de lógica, hardware, Python e programação). Ele oferece uma **Trilha Única e Integrada de Lógica e Linguagem de Programação**, estruturada cronologicamente em 3 grandes fases:
1. 📖 **Módulo 0: Instruções Iniciais & Fundamentos Teóricos por Disciplina**.
2. ✍️ **Compilado de Atividades e Práticas de Fixação por Disciplina (Questões 101 a 116)**.
3. 🏆 **Módulo de Avaliação Final de Consolidação / Recuperação (Questões 201 a 216)**.

---

## ✨ Funcionalidades Principais (Key Features)

* 🚀 **Trilha Única Integrada (`Trilha Completa: Lógica e Linguagem de Programação`)**:
  * **Início com Instruções & Teoria**: Começa com a ambientação do aluno, apresentação das regras da plataforma e fundamentos teóricos.
  * **Compilado de Atividades (101 a 116)**: 16 módulos didáticos contendo 2 textos preparatórios conceituais por questão, exemplos de código, dicas e `bloquearVoltar: false`.
  * **Avaliação Final de Consolidação (201 a 216)**: Exame formal com 16 questões dissertativas de consolidação pedagógica e `bloquearVoltar: true`.
* 🔑 **Tratamento e Correção Automática de Palavras-Chave (`getCleanKeyword`)**:
  * Função nativa que decodifica dinamicamente qualquer palavra-chave em Base64 ou string codificada para termos em português limpos para correção e inspeção.
* 📋 **Controle de Presença & Registro de Acessos (`POST /api/register-login`)**:
  * Registra automaticamente todos os estudantes que entram na plataforma no arquivo `student_registry.json`.
  * Exportação da **Lista de Presença em CSV (`.csv`)**.
* 🔄 **Troca Dinâmica de Disciplinas pelo Estudante**:
  * Botão **"📚 Menu de Trilhas"** no cabeçalho superior para retornar à escolha de disciplinas/trilhas a qualquer momento.
* 📧 **Envio de Respostas por E-mail (`POST /api/send-email`)**:
  * Envio de relatórios em formato HTML formatado para qualquer e-mail de professor via **Nodemailer**.
* 🛡️ **Sistema Anti-Cópia e Cola (Anti-Cheat)**: 
  * Bloqueio ativo de atalhos de teclado (`Ctrl+C`, `Ctrl+V`, `Ctrl+X`), menu de contexto e seleção de texto.
* 📡 **Coleta Remota de Respostas (Live Remote Monitoring)**:
  * Servidor backend nativo em Node.js com Express e funções Serverless na Vercel (`api/responses.ts` e `api/register-login.ts`).

---

## 🛠️ Tecnologias Utilizadas (Tech Stack)

- **Frontend / Interface:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), Lucide React Icons
- **Backend / Servidor Remoto & E-mail:** Node.js, Express, Nodemailer, CORS, TSX, Vercel Serverless Functions
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

### 4. Iniciar o Servidor de Coleta, Presença & Dashboard Localhost
```bash
npm run server
```
- 📊 **Dashboard Web de Presença & E-mail:** `http://localhost:3001/`
- 📡 **Endpoint Lista de Presença:** `http://localhost:3001/api/registry`
- 📧 **Endpoint API de E-mail:** `http://localhost:3001/api/send-email`
- 📡 **Endpoint API de Submissão:** `http://localhost:3001/api/responses`

---

## 🔑 Acesso ao Painel do Professor (Administrador)

No campo de **Identificação (Nome Completo)** da tela inicial, digite o código de acesso:
```
ADMIN2026
```
Isso liberará o **Painel do Professor**, onde você pode:
- Testar a **Trilha Completa: Lógica e Linguagem de Programação**.
- Consultar o **Registro de Presença dos Alunos** e baixar em **CSV**.
- Disparar relatórios das respostas diretamente para seu e-mail.

---

## 👤 Autora & Mantenedora

**Audrey Giovanna Voss Giopato**  
_Software Engineering Student @ 42 | Technical Educator & Course Coordinator_

* GitHub: [@AudyVoss95](https://github.com/AudyVoss95)
