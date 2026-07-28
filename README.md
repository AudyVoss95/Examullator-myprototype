# 🎓 Examullator - Plataforma de Avaliação Técnica Simulada

Um simulador interativo web desenvolvido para criar, executar e monitorar avaliações técnicas e provas de programação para alunos e cursos de tecnologia.

🚀 **Live Demo / Deploy:** [examullator-myprototype.vercel.app](https://examullator-myprototype.vercel.app)

---

## 📌 Visão Geral (Overview)

O **Examullator** é uma plataforma completa desenvolvida para suprir as necessidades de ambientes educacionais e de avaliação técnica (ex: exames de lógica, hardware, Python e programação). Ele oferece uma **Trilha Única e Integrada de Lógica e Linguagem de Programação**, unificando a fixação guiada (questões 101 a 116) e a avaliação final de consolidação (questões 201 a 216) em uma sequência pedagógica contínua e sem divisão em sub-módulos.

---

## ✨ Funcionalidades Principais (Key Features)

* 🚀 **Trilha Única Integrada (`Trilha Completa: Lógica e Linguagem de Programação`)**:
  * Unificação de todo o conteúdo em uma **trilha única contínua** da disciplina *Lógica e Linguagem de Programação*.
  * **Jornada de Fixação Guiada (101 a 116)**: 16 questões com 2 textos preparatórios conceituais, exemplos práticos de código, resumos curtos e `bloquearVoltar: false`.
  * **Avaliação Final de Consolidação / Recuperação (201 a 216)**: 16 questões dissertativas oficiais de consolidação com `bloquearVoltar: true`.
* 📋 **Controle de Presença & Registro de Acessos (`POST /api/register-login`)**:
  * Registra automaticamente todos os estudantes que entram na plataforma no arquivo `student_registry.json`.
  * Armazena data/hora do 1º acesso (login), última atividade, disciplinas tentadas e status de conclusão (🟢 *Concluído*, 🟡 *Em Andamento*, ⚪ *Apenas Entrou*).
  * Exportação da **Lista de Presença em CSV (`.csv`)**.
* 🔄 **Troca Dinâmica de Disciplinas pelo Estudante**:
  * Botão **"📚 Escolher Outra Disciplina / Trilha"** para trocar de avaliação sem perder a identificação do aluno.
* 📧 **Envio de Respostas por E-mail (`POST /api/send-email`)**:
  * Envio de relatórios em formato HTML formatado para qualquer e-mail de professor via **Nodemailer**.
* 📄 **Modelo de Montagem de Questões (`models_content.txt`)**:
  * Arquivo padronizado para professores elaborarem novas perguntas, textos explicativos e palavras-chave.
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
