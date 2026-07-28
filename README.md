# 🎓 Examullator - Plataforma de Avaliação Técnica Simulada

Um simulador interativo web desenvolvido para criar, executar e monitorar avaliações técnicas e provas de programação para alunos e cursos de tecnologia.

🚀 **Live Demo / Deploy:** [examullator-myprototype.vercel.app](https://examullator-myprototype.vercel.app)

---

## 📌 Visão Geral (Overview)

O **Examullator** é uma plataforma completa desenvolvida para suprir as necessidades de ambientes educacionais e de avaliação técnica (ex: exames de lógica, hardware, Python e programação). Ele oferece uma interface intuitiva e segura para os estudantes realizarem avaliações sob condições simuladas, com escolha de disciplinas, leitura de materiais teóricos explicativos, feedback imediato de termos técnicos e sincronização remota.

---

## ✨ Funcionalidades Principais (Key Features)

* 📖 **Telas de Materiais Explicativos & Guia Teórico (Study Hub)**:
  * Telas dedicadas para os alunos lerem resumos conceituais, exemplos práticos de código, dicas e glossários de termos chave antes ou durante os exames.
  * Botão de consulta rápida **"💡 Consultar Teoria"** no cabeçalho durante a realização dos desafios práticos.
  * Aba de gestão de **Materiais Explicativos** no Painel do Professor.
* 📊 **Interface & Script de Análise no Localhost (`http://localhost:3001`)**:
  * **Dashboard Web Localhost**: Interface gráfica interativa para analisar o desempenho da turma, filtrar por aluno ou disciplina, consultar dissertações completas e verificar estatísticas em tempo real.
  * **Script CLI de Terminal (`npm run analyze`)**: Ferramenta de linha de comando para gerar relatórios instantâneos de notas, status e respostas gravadas no servidor local.
* 📚 **Menu Interativo de Escolha de Disciplina**:
  * O aluno pode selecionar a disciplina específica que deseja praticar (ex: *Hardware & Sistemas*, *Lógica de Programação*, *Python Fundamentos*, *Estruturas de Controle*, *Estruturas de Dados*, *Funções*) ou escolher o **Simulado Geral**.
  * Propriedade `disciplina` adicionada a todas as questões do banco de dados (`src/questions/bancoProvas.ts`).
  * Filtro por disciplina disponível também no **Painel do Professor**.
* 🔒 **Navegação Flexível e Restrição de Retorno por Questão**: Os alunos podem navegar e revisar questões anteriores por padrão, porém determinadas questões podem ser configuradas individualmente pelo professor para **bloquear o retorno** (`bloquearVoltar`).
* 🛡️ **Sistema Anti-Cópia e Cola (Anti-Cheat)**: 
  * Bloqueio ativo de atalhos de teclado (`Ctrl+C`, `Ctrl+V`, `Ctrl+X`), menu de contexto (botão direito) e seleção de texto nos enunciados.
  * Notificações visuais em tempo real caso ocorra tentativa de cópia/cola.
* 📡 **Coleta Remota de Respostas (Live Remote Monitoring)**:
  * Servidor backend nativo em Node.js com Express para receber submissões remotas dos alunos (`POST /api/responses`).
  * Sincronização automática em tempo real via HTTP e `BroadcastChannel` local.
  * **Painel do Professor (Admin Central)** para puxar respostas remotas, visualizar a disciplina escolhida e dissertações completas por aluno, gerar relatórios individuais em `.txt` ou relatórios gerais em `.json`.
* 📁 **Arquitetura Modular de Questões (`src/questions/`)**:
  * Fonte de perguntas organizada na subpasta `src/questions/bancoProvas.ts`, facilitando a manutenção e adição de novos módulos.

---

## 🛠️ Tecnologias Utilizadas (Tech Stack)

- **Frontend / Interface:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), Lucide React Icons
- **Backend / Servidor Remoto & Analytics:** Node.js, Express, CORS, TSX
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

### 4. Iniciar o Servidor de Coleta & Dashboard de Análise Localhost
Para coletar respostas e acessar o painel de análise gráfica no navegador:
```bash
npm run server
```
- 📊 **Dashboard Web de Análise:** `http://localhost:3001/`
- 📡 **Endpoint API de Submissão:** `http://localhost:3001/api/responses`

### 5. Interpretar Dados via Linha de Comando (CLI)
Para gerar uma análise estatística rápida diretamente no terminal:
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
- **Puxar e monitorar respostas remotas dos alunos em tempo real**.
- Consultar e gerenciar materiais explicativos e teorias por disciplina.
- Filtrar questões por disciplina.
- Visualizar a disciplina escolhida pelo aluno, suas dissertações e notas por questão.
- Configurar travas de retorno por questão (`bloquearVoltar`).
- Exportar o banco de questões ou relatórios gerais.

---

## 👤 Autora & Mantenedora

**Audrey Giovanna Voss Giopato**  
_Software Engineering Student @ 42 | Technical Educator & Course Coordinator_

* GitHub: [@AudyVoss95](https://github.com/AudyVoss95)
