# 🎓 Examullator - Plataforma de Avaliação Técnica Simulada

Um simulador interativo web desenvolvido para criar, executar e monitorar avaliações técnicas e provas de programação para alunos e cursos de tecnologia.

🚀 **Live Demo / Deploy:** [examullator-myprototype.vercel.app](https://examullator-myprototype.vercel.app)

---

## 📌 Visão Geral (Overview)

O **Examullator** é uma plataforma completa desenvolvida para suprir as necessidades de ambientes educacionais e de avaliação técnica (ex: exames de lógica, hardware, Python e programação). Ele oferece controle completo de presença dos alunos, troca dinâmica de disciplinas, trilhas guiadas de aprendizado, envio automático de relatórios por e-mail e monitoramento remoto em tempo real.

---

## ✨ Funcionalidades Principais (Key Features)

* 📋 **Controle de Presença & Registro de Acessos (`POST /api/register-login`)**:
  * Registra automaticamente todos os estudantes que entram na plataforma no arquivo `student_registry.json`.
  * Armazena data/hora do 1º acesso (login), última atividade, disciplinas tentadas, quantidade de questões respondidas e status de conclusão (🟢 *Concluído*, 🟡 *Em Andamento*, ⚪ *Apenas Entrou*).
  * **Painel do Professor & Localhost (`http://localhost:3001`)**: Tabela completa de controle de chamada com exportação da **Lista de Presença dos Alunos em CSV (`.csv`)**.
* 🔄 **Troca Dinâmica de Disciplinas pelo Estudante**:
  * O aluno pode responder uma prova e, ao finalizar ou a qualquer momento, clicar no botão **"📚 Escolher Outra Disciplina / Trilha"** para iniciar novos desafios sem perder a sua identificação!
* 📧 **Envio de Respostas por E-mail (`POST /api/send-email`)**:
  * Funcionalidade integrada com **Nodemailer** para enviar relatórios completos em formato HTML formatado para qualquer e-mail de professor especificado.
  * Botão **"📧 E-mail"** no Painel do Professor (`ADMIN2026`) e no Dashboard Web em `http://localhost:3001`.
* 🛣️ **Trilhas Guiadas de Aprendizado (Learning Tracks Hub)**:
  * 5 Trilhas pedagógicas pré-configuradas encadeadas em módulos e níveis.
* 📄 **Modelo de Montagem de Questões (`models_content.txt`)**:
  * Arquivo padronizado para professores e educadores elaborarem novas perguntas, textos explicativos e palavras-chave prontas para copiar, preencher e integrar ao sistema.
* 🔄 **Trilha Linear de Aprendizado (`Texto 1 -> Texto 2 -> Pergunta Relacionada`)**:
  * Sequência pedagógica em 3 passos no painel do enunciado.
* 📖 **Telas de Materiais Explicativos & Guia Teórico (Study Hub)**:
  * Telas dedicadas para leitura conceitual antes do exame e drawer de consulta rápida durante a prova.
* 📊 **Interface & Script de Análise no Localhost (`http://localhost:3001`)**:
  * **Dashboard Web Localhost**: Interface gráfica para analisar desempenho, controle de presença e disparar e-mails.
  * **Script CLI de Terminal (`npm run analyze`)**: Ferramenta de linha de comando.
* 🛡️ **Sistema Anti-Cópia e Cola (Anti-Cheat)**: 
  * Bloqueio ativo de atalhos de teclado (`Ctrl+C`, `Ctrl+V`, `Ctrl+X`), menu de contexto e seleção de texto.
* 📡 **Coleta Remota de Respostas (Live Remote Monitoring)**:
  * Servidor backend nativo em Node.js com Express (`POST /api/responses`).

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

### 4. Iniciar o Servidor de Coleta, Presença & Dashboard Localhost
```bash
npm run server
```
- 📊 **Dashboard Web de Presença & E-mail:** `http://localhost:3001/`
- 📡 **Endpoint Lista de Presença:** `http://localhost:3001/api/registry`
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
- Consultar a **Lista de Presença & Registro de Alunos** que acessaram a plataforma.
- Baixar a lista de chamada em **CSV**.
- Disparar o envio das respostas por e-mail.
- Testar trilhas e filtrar questões por disciplina.

---

## 👤 Autora & Mantenedora

**Audrey Giovanna Voss Giopato**  
_Software Engineering Student @ 42 | Technical Educator & Course Coordinator_

* GitHub: [@AudyVoss95](https://github.com/AudyVoss95)
