# 🎓 Examullator - Plataforma de Avaliação Técnica Simulada

Um simulador interativo web desenvolvido para criar, executar e monitorar avaliações técnicas e provas de programação para alunos e cursos de tecnologia.

🚀 **Live Demo / Deploy:** [examullator-myprototype-audyvoss95s-projects.vercel.app](https://examullator-myprototype-audyvoss95s-projects.vercel.app/)

---

## 📌 Visão Geral (Overview)

O **Examullator** é uma plataforma completa desenvolvida para suprir as necessidades de ambientes educacionais e de avaliação técnica (ex: exames de lógica, hardware, Python e programação). Ele oferece uma **Trilha Integrada de Lógica e Linguagem de Programação** e uma **Avaliação Final com Sorteio de 10 Questões Aleatórias Equilibradas por Nível**.

---

## ✨ Funcionalidades Principais (Key Features)

* 🎲 **Avaliação Final com 10 Questões Aleatórias & Distribuição por Nível (`generateEvaluationSequence`)**:
  * Das 16 questões de avaliação registradas no banco (IDs 201 a 216), o sistema sorteia dinamicamente **10 questões aleatórias** a cada novo exame.
  * **Distribuição Equilibrada por Dificuldade**:
    - **3 Questões de Nível 0 (Iniciante)**: Sorteadas aleatoriamente entre 201, 202, 203, 211, 212.
    - **4 Questões de Nível 1 (Intermediário)**: Sorteadas aleatoriamente entre 204, 205, 206, 207, 213, 214.
    - **3 Questões de Nível 2 (Avançado)**: Sorteadas aleatoriamente entre 208, 209, 210, 215, 216.
* 🎨 **Visualização Limpa & Premium da Trilha de Aprendizado**:
  * Redesenho elegante do card da trilha destacando as 3 fases: **📖 Fase 1: Teoria**, **⚡ Fase 2: Fixação** e **🏆 Fase 3: Avaliação Final**.
* ⚡ **Desafios Práticos Encadeados**:
  * **Fase 1**: Ambientação e instruções iniciais sobre hardware, software e conceito de algoritmos.
  * **Fase 2**: 16 Módulos Práticos de Fixação (101 a 116) com exemplos de código Python, testes de entrada/saída, dicas e dissertações.
  * **Fase 3**: 10 Desafios Práticos da Avaliação Final sorteados por nível.
* 📚 **Disciplina Única Integrada (`Lógica e Linguagem de Programação`)**:
  * O menu de disciplinas exibe exclusivamente a disciplina oficial.
* 📋 **Controle de Presença & Registro de Acessos (`POST /api/register-login`)**:
  * Registro automático de acessos e exportação de **Lista de Presença em CSV (`.csv`)**.
* 📧 **Envio de Respostas por E-mail (`POST /api/send-email`)**:
  * Relatórios formatados via **Nodemailer**.
* 🛡️ **Sistema Anti-Cópia e Cola (Anti-Cheat)**: 
  * Bloqueio ativo de atalhos de teclado (`Ctrl+C`, `Ctrl+V`, `Ctrl+X`), menu de contexto e seleção de texto.

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
- Testar o sorteio das **10 Questões Aleatórias da Avaliação Final**.
- Consultar o **Registro de Presença dos Alunos** e baixar em **CSV**.
- Disparar relatórios das respostas diretamente para seu e-mail.

---

## 👤 Autora & Mantenedora

**Audrey Giovanna Voss Giopato**  
_Software Engineering Student @ 42 | Technical Educator & Course Coordinator_

* GitHub: [@AudyVoss95](https://github.com/AudyVoss95)
