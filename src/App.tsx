import React, { useState, useEffect, SyntheticEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Save, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Download, 
  AlertCircle, 
  GraduationCap,
  RotateCcw,
  LogOut,
  Lock,
  Unlock,
  Wifi,
  RefreshCw,
  Eye,
  ShieldAlert,
  Users,
  FileText,
  Trash2,
  BookOpen,
  Filter,
  Layers,
  Lightbulb,
  FileCode,
  Sparkles,
  Check,
  X,
  HelpCircle,
  Compass,
  Route,
  MapPin,
  Award,
  Mail
} from 'lucide-react';
import { 
  BANCO_DE_PROVAS, 
  Prova, 
  APP_CONFIG, 
  MATERIAIS_EXPLICATIVOS, 
  MaterialExplicativo,
  TRILHAS_DE_TESTE,
  TrilhaAprendizado
} from './data';

interface UserProgress {
  sequence: string[];
  userName: string;
  selectedDisciplina: string;
  selectedTrilhaId?: string;
  currentLevel: string;
  responses: Record<string, string>;
  scores: Record<string, number>;
  completed: boolean;
}

interface RemoteStudentSubmission {
  studentId: string;
  userName: string;
  selectedDisciplina?: string;
  selectedTrilhaId?: string;
  sequence: string[];
  responses: Record<string, string>;
  scores: Record<string, number>;
  completed: boolean;
  updatedAt: string;
}

export const DISCIPLINAS_DISPONIVEIS = [
  { id: 'Todas', nome: 'Todas as Disciplinas (Simulado Geral)', icone: '🌐', descricao: 'Avaliação abrangente com sorteio equilibrado de todos os módulos.' },
  { id: 'Hardware & Sistemas', nome: 'Hardware & Sistemas', icone: '💻', descricao: 'Componentes físicos, software, sistema operacional, arquivos e comandos.' },
  { id: 'Lógica de Programação', nome: 'Lógica de Programação', icone: '🧩', descricao: 'Conceito de algoritmos, fluxogramas, pseudocódigo, entrada e saída.' },
  { id: 'Python Fundamentos', nome: 'Python Fundamentos', icone: '🐍', descricao: 'Sintaxe básica, modo interativo, print, variáveis, tipos de dados e casting.' },
  { id: 'Estruturas de Controle & Repetição', nome: 'Estruturas de Controle & Repetição', icone: '🔁', descricao: 'Tomada de decisão (if/elif/else), operadores lógicos, loops for e while.' },
  { id: 'Estruturas de Dados & Algoritmos', nome: 'Estruturas de Dados & Algoritmos', icone: '📦', descricao: 'Listas, índices, matrizes bidimensionais, manipulação com append e pop.' },
  { id: 'Funções & Modularização', nome: 'Funções & Modularização', icone: '⚙️', descricao: 'Criação de funções (def), parâmetros, return, escopo e código modular.' },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const getCleanKeyword = (kw: string): string => {
  if (!kw) return '';
  if (!/^[A-Za-z0-9+/=]+$/.test(kw.trim()) || kw.length < 4) {
    return kw;
  }
  try {
    const decoded = atob(kw);
    if (/^[A-Za-z0-9+/=]+$/.test(decoded.trim())) {
      try {
        return atob(decoded);
      } catch {
        return decoded;
      }
    }
    return decoded;
  } catch (e) {
    return kw;
  }
};

const generateSequence = (disciplinaFilter: string = 'Todas', bancoSource: Record<string, Prova> = BANCO_DE_PROVAS): string[] => {
  let allIds = Object.keys(bancoSource);
  
  if (disciplinaFilter && disciplinaFilter !== 'Todas') {
    allIds = allIds.filter(id => {
      const q = bancoSource[id];
      return q && q.disciplina === disciplinaFilter;
    });
  }

  const byLevel: Record<number, string[]> = {};
  allIds.forEach(id => {
    const q = bancoSource[id];
    if (q) {
      const nivel = q.nivel;
      if (!byLevel[nivel]) byLevel[nivel] = [];
      byLevel[nivel].push(id);
    }
  });

  const sortedNiveis = Object.keys(byLevel).map(Number).sort((a, b) => a - b);
  const sequence: string[] = [];
  
  sortedNiveis.forEach(n => {
    const shuffled = shuffleArray(byLevel[n]);
    const perNivel = disciplinaFilter !== 'Todas' ? 4 : APP_CONFIG.questoesPorNivel;
    sequence.push(...shuffled.slice(0, perNivel));
  });

  if (disciplinaFilter !== 'Todas') {
    return sequence.length > 0 ? sequence : Object.keys(bancoSource).slice(0, APP_CONFIG.totalQuestoes);
  }

  return sequence.slice(0, APP_CONFIG.totalQuestoes);
};

export default function App() {
  const [bancoProvas, setBancoProvas] = useState<Record<string, Prova>>(() => {
    const saved = localStorage.getItem('examullator_banco_provas');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse custom banco_provas", e);
      }
    }
    return BANCO_DE_PROVAS;
  });

  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('examullator_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.sequence) {
          parsed.sequence = Object.keys(BANCO_DE_PROVAS).sort();
        }
        if (parsed.userName === undefined) {
          parsed.userName = '';
        }
        if (!parsed.selectedDisciplina) {
          parsed.selectedDisciplina = '';
        }
        return parsed;
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    const initialSequence = generateSequence('Todas', BANCO_DE_PROVAS);
    return {
      sequence: initialSequence,
      userName: '',
      selectedDisciplina: '',
      currentLevel: initialSequence[0],
      responses: {},
      scores: {},
      completed: false
    };
  });

  const [tempName, setTempName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminTab, setAdminTab] = useState<'bank' | 'remote' | 'theory' | 'trilhas'>('remote');
  const [adminDisciplinaFilter, setAdminDisciplinaFilter] = useState<string>('Todas');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Menu View Mode: 'trilhas' or 'disciplinas'
  const [menuTab, setMenuTab] = useState<'trilhas' | 'disciplinas'>('trilhas');

  // Educational Explanatory Material States
  const [viewingTheoryDisciplina, setViewingTheoryDisciplina] = useState<string | null>(null);
  const [showExamTheoryDrawer, setShowExamTheoryDrawer] = useState<boolean>(false);
  
  // Remote sync states
  const [remoteUrl, setRemoteUrl] = useState(() => {
    return localStorage.getItem('examullator_remote_url') || '/api/responses';
  });
  const [remoteStudents, setRemoteStudents] = useState<RemoteStudentSubmission[]>([]);
  const [isLoadingRemote, setIsLoadingRemote] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<RemoteStudentSubmission | null>(null);

  const [modal, setModal] = useState<{
    show: boolean;
    title: string;
    message: string;
    onConfirm?: () => void;
    type: 'alert' | 'confirm';
  }>({
    show: false,
    title: '',
    message: '',
    type: 'alert'
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const showAlert = (title: string, message: string) => {
    setModal({ show: true, title, message, type: 'alert' });
  };

  const showConfirm = (title: string, message: string, onConfirm: () => void) => {
    setModal({ show: true, title, message, onConfirm, type: 'confirm' });
  };

  const levels = progress.sequence;

  const [feedback, setFeedback] = useState<{
    score: number;
    missingKeys: string[];
    error?: string;
  } | null>(null);

  const [isSaving, setIsSaving] = useState(false);

  const [targetTeacherEmail, setTargetTeacherEmail] = useState(() => {
    return localStorage.getItem('examullator_target_email') || 'professor@escola.com';
  });
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const sendStudentEmail = async (student: RemoteStudentSubmission) => {
    if (!targetTeacherEmail || !targetTeacherEmail.includes('@')) {
      showAlert("Endereço de E-mail Inválido", "Por favor, digite um e-mail de destino válido.");
      return;
    }

    setIsSendingEmail(true);
    try {
      const emailEndpoint = remoteUrl.replace(/\/api\/responses\/?$/, '/api/send-email');
      const res = await fetch(emailEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetEmail: targetTeacherEmail,
          studentId: student.studentId,
          studentData: student
        })
      });
      const data = await res.json();
      if (data.success) {
        showToast(`📧 Respostas de ${student.userName} enviadas para ${targetTeacherEmail}!`);
        if (data.previewUrl) {
          showAlert("E-mail Enviado com Sucesso", `E-mail de respostas gerado e enviado! Link de visualização (Ethereal test): ${data.previewUrl}`);
        }
      } else {
        showAlert("Erro no Envio de E-mail", data.error || "Falha ao enviar e-mail.");
      }
    } catch (err: any) {
      showAlert("Erro de Conexão com Servidor de E-mail", err.message);
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Save progress and push sync remotely
  useEffect(() => {
    localStorage.setItem('examullator_progress', JSON.stringify(progress));

    if (progress.userName && progress.userName.trim().length > 0) {
      const studentId = progress.userName.toLowerCase().trim().replace(/[^a-z0-9]/gi, '_');
      const payload: RemoteStudentSubmission = {
        studentId,
        userName: progress.userName,
        selectedDisciplina: progress.selectedDisciplina,
        selectedTrilhaId: progress.selectedTrilhaId,
        sequence: progress.sequence,
        responses: progress.responses,
        scores: progress.scores,
        completed: progress.completed,
        updatedAt: new Date().toISOString()
      };

      try {
        const cachedStr = localStorage.getItem('examullator_all_remote_cache') || '{}';
        const cachedObj = JSON.parse(cachedStr);
        cachedObj[studentId] = payload;
        localStorage.setItem('examullator_all_remote_cache', JSON.stringify(cachedObj));
      } catch (e) {
        console.error("Local remote cache error", e);
      }

      if ('BroadcastChannel' in window) {
        try {
          const bc = new BroadcastChannel('examullator_channel');
          bc.postMessage({ type: 'SUBMISSION_UPDATE', payload });
          bc.close();
        } catch (e) {
          // ignore
        }
      }

      const sendRemote = async () => {
        try {
          await fetch(remoteUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } catch (e) {
          // Quiet fallback
        }
      };
      sendRemote();
    }
  }, [progress, remoteUrl]);

  // Anti-Copy & Anti-Paste Keyboard Listener
  useEffect(() => {
    if (isAdmin) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      
      if (isCmdOrCtrl && ['c', 'v', 'x', 'u', 's', 'p', 'a'].includes(key)) {
        if (['c', 'v', 'x'].includes(key)) {
          e.preventDefault();
          showToast('🚫 Copiar e colar está estritamente desativado nesta avaliação.');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin]);

  // Prevent unload if completed
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (progress.completed) {
        e.preventDefault();
        e.returnValue = 'A avaliação foi concluída. O ambiente está travado para análise.';
        return 'A avaliação foi concluída. O ambiente está travado para análise.';
      }
    };

    if (progress.completed) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [progress.completed]);

  useEffect(() => {
    if (progress.completed) {
      downloadReport();
    }
  }, [progress.completed]);

  // Fetch remote student submissions for the teacher
  const fetchRemoteSubmissions = async () => {
    setIsLoadingRemote(true);
    let combinedMap: Record<string, RemoteStudentSubmission> = {};

    try {
      const cachedStr = localStorage.getItem('examullator_all_remote_cache') || '{}';
      combinedMap = JSON.parse(cachedStr);
    } catch (e) {
      console.error(e);
    }

    try {
      const res = await fetch(remoteUrl, { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.students)) {
          data.students.forEach((st: RemoteStudentSubmission) => {
            if (st && st.studentId) {
              combinedMap[st.studentId] = st;
            }
          });
        }
      }
    } catch (err) {
      console.warn("Could not reach remote server URL, using local broadcast cache", err);
    }

    setRemoteStudents(Object.values(combinedMap));
    setIsLoadingRemote(false);
  };

  useEffect(() => {
    if (isAdmin && adminTab === 'remote') {
      fetchRemoteSubmissions();
    }
  }, [isAdmin, adminTab]);

  const currentLevelData: Prova = bancoProvas[progress.currentLevel] || BANCO_DE_PROVAS[progress.currentLevel];
  const currentResponse = progress.responses[progress.currentLevel] || '';

  const checkCanGoBack = (): { allowed: boolean; reason?: string } => {
    const currentIndex = levels.indexOf(progress.currentLevel);
    if (currentIndex <= 0) {
      return { allowed: false, reason: 'Você já está na primeira questão.' };
    }
    const currentQ = bancoProvas[progress.currentLevel];
    if (currentQ?.bloquearVoltar) {
      return { allowed: false, reason: 'Esta questão foi configurada para não permitir retorno às anteriores.' };
    }
    const prevQId = levels[currentIndex - 1];
    const prevQ = bancoProvas[prevQId];
    if (prevQ?.bloquearVoltar) {
      return { allowed: false, reason: 'A questão anterior não permite revisão.' };
    }
    return { allowed: true };
  };

  const prevLevel = () => {
    const check = checkCanGoBack();
    if (!check.allowed) {
      if (check.reason) showAlert("Navegação Restrita", check.reason);
      return;
    }
    const currentIndex = levels.indexOf(progress.currentLevel);
    if (currentIndex > 0) {
      setProgress(prev => ({
        ...prev,
        currentLevel: levels[currentIndex - 1]
      }));
      setFeedback(null);
    }
  };

  const handleResponseChange = (val: string) => {
    setProgress(prev => ({
      ...prev,
      responses: { ...prev.responses, [prev.currentLevel]: val }
    }));
  };

  const handleCopyPasteBlock = (e: SyntheticEvent, action: string) => {
    e.preventDefault();
    showToast(`🚫 Não é permitido ${action} texto nesta avaliação.`);
  };

  const saveResponse = () => {
    setIsSaving(true);
    
    let content = `RASCUNHO - QUESTÃO ${progress.currentLevel}\n`;
    content += `Estudante: ${progress.userName}\n`;
    content += `Disciplina: ${progress.selectedDisciplina || 'Simulado Geral'}\n`;
    content += "--------------------------------------------\n";
    content += currentResponse;

    const safeName = progress.userName.replace(/[^a-z0-9]/gi, '_').toUpperCase();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeName}_Rascunho_Questão_${progress.currentLevel}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    setTimeout(() => setIsSaving(false), 800);
  };

  const evaluateNota = () => {
    const text = currentResponse.trim();
    
    if (text.length < currentLevelData.min_chars) {
      setFeedback({
        score: 0,
        missingKeys: [],
        error: `Resposta muito curta! Mínimo ${currentLevelData.min_chars} caracteres.`
      });
      return;
    }

    const textLower = text.toLowerCase();
    const decodedKeywords = currentLevelData.keywords.map(kw => getCleanKeyword(kw));

    const foundKeywords = decodedKeywords.filter(kw => 
      textLower.includes(kw.toLowerCase())
    );
    
    const missingKeys = decodedKeywords.filter(kw => 
      !textLower.includes(kw.toLowerCase())
    );

    const keywordsRatio = foundKeywords.length / (decodedKeywords.length || 1);
    const rawScore = (keywordsRatio / APP_CONFIG.percentualPalavrasParaNotaMaxima) * 10;
    const finalScore = Number(Math.min(10, rawScore).toFixed(1));

    setFeedback({
      score: finalScore,
      missingKeys: missingKeys,
    });

    setProgress(prev => ({
      ...prev,
      scores: { ...prev.scores, [prev.currentLevel]: finalScore }
    }));
  };

  const nextLevel = () => {
    const currentIndex = levels.indexOf(progress.currentLevel);
    if (currentIndex < levels.length - 1) {
      setProgress(prev => ({
        ...prev,
        currentLevel: levels[currentIndex + 1]
      }));
      setFeedback(null);
    } else {
      setProgress(prev => ({ ...prev, completed: true }));
    }
  };

  const handleStartName = () => {
    const name = tempName.trim();
    if (name === 'ADMIN2026') {
      setIsAdmin(true);
      return;
    }
    if (name.length < 3) {
      showAlert("Identificação", "Por favor, insira seu nome completo.");
      return;
    }
    setProgress(prev => ({ ...prev, userName: name }));
  };

  const handleSelectDisciplina = (discId: string) => {
    const newSeq = generateSequence(discId, bancoProvas);
    setProgress(prev => ({
      ...prev,
      selectedDisciplina: discId,
      selectedTrilhaId: undefined,
      sequence: newSeq,
      currentLevel: newSeq[0],
      responses: {},
      scores: {},
      completed: false
    }));
    setFeedback(null);
  };

  const handleSelectTrilha = (trilha: TrilhaAprendizado) => {
    // Gather all question IDs from all steps of the learning track
    const trackQuestionIds: string[] = [];
    trilha.etapas.forEach(e => {
      e.questoesIds.forEach(qId => {
        if (bancoProvas[qId] && !trackQuestionIds.includes(qId)) {
          trackQuestionIds.push(qId);
        }
      });
    });

    const finalSeq = trackQuestionIds.length > 0 ? trackQuestionIds : Object.keys(bancoProvas).slice(0, 9);

    setProgress(prev => ({
      ...prev,
      selectedDisciplina: trilha.categoria,
      selectedTrilhaId: trilha.id,
      sequence: finalSeq,
      currentLevel: finalSeq[0],
      responses: {},
      scores: {},
      completed: false
    }));
    setFeedback(null);
  };

  const changeDisciplinaOrTrilha = () => {
    setProgress(prev => ({
      ...prev,
      selectedDisciplina: '',
      selectedTrilhaId: undefined,
      responses: {},
      scores: {},
      completed: false
    }));
    setFeedback(null);
  };

  const downloadReport = () => {
    let content = "RELATÓRIO FINAL DE DESEMPENHO - EXAMULLATOR\n";
    content += "============================================\n";
    content += `Estudante: ${progress.userName}\n`;
    content += `Trilha / Disciplina: ${progress.selectedTrilhaId ? 'Trilha ' + progress.selectedTrilhaId : progress.selectedDisciplina || 'Simulado Geral'}\n`;
    content += `Data: ${new Date().toLocaleString()}\n\n`;
    
    levels.forEach(lvl => {
      const p = bancoProvas[lvl] || BANCO_DE_PROVAS[lvl];
      content += `[Nível ${lvl} - ${p ? p.disciplina : 'Geral'}]: ${p ? p.titulo : lvl}\n`;
      content += `Nota Final: ${progress.scores[lvl] || 0}\n`;
      content += `Resposta do Aluno:\n${progress.responses[lvl] || "(Sem resposta)"}\n`;
      content += "--------------------------------------------\n\n";
    });

    const safeName = progress.userName.replace(/[^a-z0-9]/gi, '_').toUpperCase();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PROVAS_ENVIADAS/${safeName}_RELATORIO.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetProgress = () => {
    showConfirm(
      "Resetar Progresso", 
      "Tem certeza que deseja apagar todo o progresso? Isso limpará o nome, disciplina/trilha escolhida e todas as respostas.",
      () => {
        const newSequence = generateSequence('Todas', bancoProvas);
        setProgress({
          sequence: newSequence,
          userName: '',
          selectedDisciplina: '',
          selectedTrilhaId: undefined,
          currentLevel: newSequence[0],
          responses: {},
          scores: {},
          completed: false
        });
        setTempName('');
        setFeedback(null);
      }
    );
  };

  const finishExam = () => {
    showConfirm(
      "Encerrar Prova",
      "Deseja encerrar a prova agora?",
      () => {
        setProgress(prev => ({ ...prev, completed: true }));
      }
    );
  };

  const exportData = () => {
    const content = `export const BANCO_DE_PROVAS: Record<string, Prova> = ${JSON.stringify(bancoProvas, null, 2)};`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bancoProvas_export.ts';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleBloquearVoltar = (questionId: string) => {
    const updated = {
      ...bancoProvas,
      [questionId]: {
        ...bancoProvas[questionId],
        bloquearVoltar: !bancoProvas[questionId].bloquearVoltar
      }
    };
    setBancoProvas(updated);
    localStorage.setItem('examullator_banco_provas', JSON.stringify(updated));
    showToast(`Questão ${questionId}: ${updated[questionId].bloquearVoltar ? 'Retorno Bloqueado 🔒' : 'Retorno Permitido 🔓'}`);
  };

  const downloadStudentReport = (student: RemoteStudentSubmission) => {
    let content = `RELATÓRIO REMOTO DE DESEMPENHO - EXAMULLATOR\n`;
    content += `============================================\n`;
    content += `Estudante: ${student.userName}\n`;
    content += `Disciplina/Trilha: ${student.selectedTrilhaId ? 'Trilha ' + student.selectedTrilhaId : student.selectedDisciplina || 'Simulado Geral'}\n`;
    content += `ID: ${student.studentId}\n`;
    content += `Status: ${student.completed ? 'CONCLUÍDO' : 'EM ANDAMENTO'}\n`;
    content += `Última Atualização: ${new Date(student.updatedAt).toLocaleString()}\n\n`;

    const seq = student.sequence || Object.keys(bancoProvas);
    seq.forEach(lvl => {
      const q = bancoProvas[lvl] || BANCO_DE_PROVAS[lvl];
      const title = q ? q.titulo : `Questão ${lvl}`;
      const disc = q ? q.disciplina : 'Geral';
      content += `[Nível ${lvl} - ${disc}]: ${title}\n`;
      content += `Nota: ${student.scores[lvl] !== undefined ? student.scores[lvl] : 'Não avaliada'}\n`;
      content += `Resposta:\n${student.responses[lvl] || '(Sem resposta)'}\n`;
      content += `--------------------------------------------\n\n`;
    });

    const safeName = student.userName.replace(/[^a-z0-9]/gi, '_').toUpperCase();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RELATORIO_REMOTO_${safeName}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAllRemoteJSON = () => {
    const blob = new Blob([JSON.stringify(remoteStudents, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RESPOSTAS_REMOTAS_TODOS_ALUNOS_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearRemoteSubmissions = async () => {
    showConfirm(
      "Apagar Respostas Remotas",
      "Tem certeza que deseja apagar todas as respostas remotas salvas? Esta ação não pode ser desfeita.",
      async () => {
        localStorage.removeItem('examullator_all_remote_cache');
        try {
          await fetch(remoteUrl, { method: 'DELETE' });
        } catch (e) {
          console.warn(e);
        }
        setRemoteStudents([]);
        showToast("Todas as respostas remotas foram apagadas.");
      }
    );
  };

  // ADMIN VIEW
  if (isAdmin) {
    const filteredQuestions = (Object.entries(bancoProvas) as [string, Prova][]).filter(([_, q]) => {
      if (adminDisciplinaFilter === 'Todas') return true;
      return q.disciplina === adminDisciplinaFilter;
    });

    return (
      <div className="h-screen bg-slate-900 text-white p-8 overflow-y-auto font-sans select-none">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-400" size={32} />
                <div>
                  <h1 className="text-3xl font-black tracking-tighter">Painel do Professor</h1>
                  <p className="text-slate-400 text-sm">Modo Administrador & Control Central</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 p-1.5 rounded-xl border border-slate-700 flex flex-wrap gap-1">
                <button
                  onClick={() => setAdminTab('remote')}
                  className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all ${
                    adminTab === 'remote' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Wifi size={14} /> Respostas Remotas ({remoteStudents.length})
                </button>
                <button
                  onClick={() => setAdminTab('trilhas')}
                  className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all ${
                    adminTab === 'trilhas' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Route size={14} /> Trilhas de Aprendizado
                </button>
                <button
                  onClick={() => setAdminTab('bank')}
                  className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all ${
                    adminTab === 'bank' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText size={14} /> Banco de Questões
                </button>
                <button
                  onClick={() => setAdminTab('theory')}
                  className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all ${
                    adminTab === 'theory' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpen size={14} /> Materiais Explicativos
                </button>
              </div>

              <button 
                onClick={() => setIsAdmin(false)}
                className="bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 border border-slate-700"
              >
                <LogOut size={14} /> Voltar ao Início
              </button>
            </div>
          </header>

          {/* ADMIN TAB: REMOTE SUBMISSIONS */}
          {adminTab === 'remote' && (
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="font-bold text-white text-lg flex items-center gap-2">
                      <Wifi className="text-emerald-400" size={20} /> Central de Coleta Remota de Respostas
                    </h3>
                    <p className="text-xs text-slate-400">
                      Puxe e monitore as respostas submetidas pelos alunos em tempo real ou via endpoint HTTP.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={fetchRemoteSubmissions}
                      disabled={isLoadingRemote}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
                    >
                      <RefreshCw size={14} className={isLoadingRemote ? "animate-spin" : ""} />
                      Puxar Respostas Remotas
                    </button>
                    <button
                      onClick={downloadAllRemoteJSON}
                      disabled={remoteStudents.length === 0}
                      className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all"
                    >
                      <Download size={14} /> Exportar Todas (JSON)
                    </button>
                    <button
                      onClick={clearRemoteSubmissions}
                      disabled={remoteStudents.length === 0}
                      className="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all border border-red-500/20"
                    >
                      <Trash2 size={14} /> Limpar
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex flex-col md:flex-row items-stretch md:items-center gap-3">
                  <label className="text-xs font-bold text-slate-400 whitespace-nowrap">URL do Servidor Remoto:</label>
                  <input 
                    type="text" 
                    value={remoteUrl}
                    onChange={(e) => {
                      setRemoteUrl(e.target.value);
                      localStorage.setItem('examullator_remote_url', e.target.value);
                    }}
                    className="flex-1 bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl text-xs font-mono text-emerald-400 outline-none focus:border-blue-500"
                    placeholder="http://localhost:3001/api/responses"
                  />
                  <span className="text-[10px] text-slate-500 italic">
                    Execute <code className="bg-slate-900 px-1 py-0.5 rounded text-slate-300">npm run server</code> para ativar o servidor nativo na porta 3001.
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex flex-col md:flex-row items-stretch md:items-center gap-3">
                  <label className="text-xs font-bold text-slate-400 whitespace-nowrap flex items-center gap-1.5">
                    <Mail size={14} className="text-emerald-400" /> E-mail Destino do Professor:
                  </label>
                  <input 
                    type="email" 
                    value={targetTeacherEmail}
                    onChange={(e) => {
                      setTargetTeacherEmail(e.target.value);
                      localStorage.setItem('examullator_target_email', e.target.value);
                    }}
                    className="flex-1 bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl text-xs font-mono text-emerald-400 outline-none focus:border-blue-500"
                    placeholder="professor@escola.com"
                  />
                  <span className="text-[10px] text-slate-400 font-medium">
                    As respostas selecionadas serão enviadas em HTML para este e-mail.
                  </span>
                </div>
              </div>

              {/* Student Submissions List */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-300 uppercase text-[10px] tracking-widest flex items-center gap-2">
                    <Users size={14} /> Alunos Registrados Remotamente ({remoteStudents.length})
                  </h3>
                </div>

                {remoteStudents.length === 0 ? (
                  <div className="bg-slate-800/40 p-12 rounded-2xl border border-slate-800 text-center space-y-3">
                    <Wifi size={36} className="mx-auto text-slate-600 animate-pulse" />
                    <p className="text-slate-300 font-bold text-sm">Nenhuma resposta remota capturada ainda.</p>
                    <p className="text-slate-500 text-xs max-w-md mx-auto">
                      As respostas serão exibidas aqui automaticamente assim que os alunos salvarem suas questões ou concluírem a avaliação.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {remoteStudents.map((st) => {
                      const answeredCount = Object.keys(st.responses || {}).length;
                      const scoresArr = Object.values(st.scores || {}) as number[];
                      const avgScore = scoresArr.length > 0
                        ? (scoresArr.reduce((a: number, b: number) => a + b, 0) / scoresArr.length).toFixed(1)
                        : 'N/A';

                      return (
                        <div 
                          key={st.studentId} 
                          className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-2">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <h4 className="font-bold text-white text-base truncate">{st.userName}</h4>
                                <span className="text-[10px] text-blue-400 font-bold flex items-center gap-1 mt-0.5">
                                  <BookOpen size={10} /> {st.selectedTrilhaId ? 'Trilha: ' + st.selectedTrilhaId : st.selectedDisciplina || 'Simulado Geral'}
                                </span>
                              </div>
                              <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-wider shrink-0 ${
                                st.completed 
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              }`}>
                                {st.completed ? 'Concluído' : 'Em Progresso'}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-700/50 text-xs">
                              <div>
                                <span className="text-slate-500 text-[10px] block font-bold uppercase">Questões</span>
                                <span className="font-bold text-slate-200">{answeredCount} respondidas</span>
                              </div>
                              <div>
                                <span className="text-slate-500 text-[10px] block font-bold uppercase">Média Notas</span>
                                <span className="font-bold text-emerald-400">{avgScore}</span>
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-500 font-mono">
                              Atualizado: {new Date(st.updatedAt).toLocaleString()}
                            </p>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => sendStudentEmail(st)}
                              disabled={isSendingEmail}
                              className="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1"
                              title="Enviar Relatório das Respostas por E-mail"
                            >
                              <Mail size={14} /> E-mail
                            </button>
                            <button
                              onClick={() => setSelectedStudent(st)}
                              className="flex-1 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                            >
                              <Eye size={14} /> Ver Respostas
                            </button>
                            <button
                              onClick={() => downloadStudentReport(st)}
                              className="bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center"
                              title="Baixar Relatório em Texto"
                            >
                              <Download size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ADMIN TAB: LEARNING TRACKS (TRILHAS DE APRENDIZADO) */}
          {adminTab === 'trilhas' && (
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-2">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <Route className="text-blue-400" size={20} /> Trilhas Guiadas de Aprendizado (Preview de Teste)
                </h3>
                <p className="text-xs text-slate-400">
                  Visualização das rotas didáticas encadeadas por módulos e níveis para testes pedagógicos dos estudantes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(TRILHAS_DE_TESTE).map((trilha) => (
                  <div key={trilha.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-3xl">{trilha.icone}</span>
                        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                          {trilha.nivelRecomendado}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-black text-white text-lg">{trilha.nome}</h4>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block mt-0.5">{trilha.categoria}</span>
                        <p className="text-xs text-slate-400 leading-relaxed mt-2">{trilha.descricao}</p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Módulos da Trilha ({trilha.etapas.length}):</span>
                        {trilha.etapas.map((etapa, idx) => (
                          <div key={etapa.id} className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center gap-2">
                            <div>
                              <p className="font-bold text-slate-200 text-xs">{etapa.titulo}</p>
                              <p className="text-[10px] text-slate-400">{etapa.questoesIds.length} questões • {etapa.tempoEstimado}</p>
                            </div>
                            <span className="text-xs">{etapa.icone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-700">
                      <button
                        onClick={() => {
                          handleSelectTrilha(trilha);
                          setIsAdmin(false);
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <Compass size={14} /> Testar Trilha no Modo Aluno
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADMIN TAB: QUESTION BANK */}
          {adminTab === 'bank' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
                  <h3 className="font-bold text-slate-300 uppercase text-[10px] tracking-widest">Controles de Sistema</h3>
                  <button 
                    onClick={() => {
                      showConfirm("Limpar Tudo", "Isso apagará permanentemente todos os dados salvos neste navegador. Continuar?", () => {
                        localStorage.clear();
                        window.location.reload();
                      });
                    }}
                    className="w-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white p-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={16} /> Limpar Cache Local
                  </button>
                  <button 
                    onClick={exportData}
                    className="w-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Download size={16} /> Exportar Banco (TS)
                  </button>
                </div>
                
                <div className="md:col-span-2 bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
                  <h3 className="font-bold text-slate-300 uppercase text-[10px] tracking-widest">Resumo do Banco</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <p className="text-2xl font-black">{Object.keys(bancoProvas).length}</p>
                      <p className="text-slate-500 text-xs font-bold uppercase">Questões Totais</p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <p className="text-2xl font-black">{APP_CONFIG.totalQuestoes}</p>
                      <p className="text-slate-500 text-xs font-bold uppercase">Sorteio p/ Aluno</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discipline Filter in Question Bank */}
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-blue-400" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Filtrar Questões por Disciplina:</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {DISCIPLINAS_DISPONIVEIS.map(d => (
                    <button
                      key={d.id}
                      onClick={() => setAdminDisciplinaFilter(d.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                        adminDisciplinaFilter === d.id
                          ? 'bg-blue-600 text-white shadow'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-700'
                      }`}
                    >
                      <span>{d.icone}</span> {d.id}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-300 uppercase text-[10px] tracking-widest">
                    Banco de Questões ({filteredQuestions.length} questões exibidas)
                  </h3>
                </div>

                <div className="space-y-3">
                  {filteredQuestions.map(([id, q]) => (
                    <div key={id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all group">
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black bg-slate-700 px-2 py-0.5 rounded uppercase">ID {id} • Nível {q.nivel}</span>
                          <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded font-bold">
                            {q.disciplina}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">Min: {q.min_chars} chars</span>
                        </div>
                        
                        <button
                          onClick={() => toggleBloquearVoltar(id)}
                          className={`text-[10px] font-bold px-3 py-1 rounded-lg border flex items-center gap-1.5 transition-all ${
                            q.bloquearVoltar
                              ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 hover:bg-amber-500/30'
                              : 'bg-slate-700/50 text-slate-400 border-slate-600 hover:text-white'
                          }`}
                        >
                          {q.bloquearVoltar ? (
                            <>
                              <Lock size={12} className="text-amber-400" /> Voltar Bloqueado nesta questão
                            </>
                          ) : (
                            <>
                              <Unlock size={12} className="text-slate-400" /> Voltar Permitido
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-bold text-slate-200 mb-2">{q.titulo}</p>
                      
                      {q.textosPreparatorios && q.textosPreparatorios.length > 0 && (
                        <div className="space-y-1.5 mb-3 bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-[9px] font-black uppercase text-blue-400 tracking-wider block">
                            📖 Sequência Linear de Leitura Teórica:
                          </span>
                          {q.textosPreparatorios.map((t, tIdx) => (
                            <div key={tIdx} className="text-xs text-slate-300">
                              <strong className="text-slate-200 font-semibold">[Texto {tIdx + 1}]: {t.titulo}</strong> — {t.conteudo}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="bg-blue-950/40 p-3 rounded-lg border border-blue-800/40 mb-3 space-y-1">
                        <span className="text-[9px] font-black uppercase text-emerald-400 tracking-wider block">
                          ✍️ Pergunta Relacionada aos Textos Acima:
                        </span>
                        <p className="text-xs text-slate-200 font-medium leading-relaxed">{q.enunciado}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {q.keywords.map((kw, idx) => (
                          <span key={idx} className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded font-mono">
                            {getCleanKeyword(kw)}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ADMIN TAB: EXPLANATORY MATERIALS (THEORY) */}
          {adminTab === 'theory' && (
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-2">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <BookOpen className="text-blue-400" size={20} /> Materiais Explicativos & Guia de Estudo dos Alunos
                </h3>
                <p className="text-xs text-slate-400">
                  Consulte abaixo todo o conteúdo teórico, resumos conceituais e exemplos práticos fornecidos aos estudantes por disciplina.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(MATERIAIS_EXPLICATIVOS).map((mat) => (
                  <div key={mat.disciplinaId} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{mat.icone}</span>
                      <div>
                        <h4 className="font-bold text-white text-lg">{mat.titulo}</h4>
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{mat.disciplinaId}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">{mat.subtitulo}</p>

                    <div className="space-y-3 pt-2">
                      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tópicos Teóricos:</h5>
                      {mat.secoes.map((sec, idx) => (
                        <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 space-y-1">
                          <p className="font-bold text-slate-200 text-xs">{sec.titulo}</p>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{sec.conteudo.slice(0, 100)}...</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setViewingTheoryDisciplina(mat.disciplinaId)}
                        className="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-blue-500/20"
                      >
                        <Eye size={14} /> Visualizar Material Completo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal for Student Remote Details */}
        <AnimatePresence>
          {selectedStudent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedStudent(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden"
              >
                <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <GraduationCap className="text-blue-400" size={24} /> Respostas de {selectedStudent.userName}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Disciplina: <strong className="text-emerald-400">{selectedStudent.selectedTrilhaId ? 'Trilha: ' + selectedStudent.selectedTrilhaId : selectedStudent.selectedDisciplina || 'Simulado Geral'}</strong> • ID: {selectedStudent.studentId} • Atualizado em: {new Date(selectedStudent.updatedAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                  >
                    Fechar
                  </button>
                </div>

                <div className="p-6 overflow-y-auto space-y-6 flex-1">
                  {(selectedStudent.sequence || Object.keys(bancoProvas)).map((qId, idx) => {
                    const qData = bancoProvas[qId] || BANCO_DE_PROVAS[qId];
                    const resp = selectedStudent.responses[qId];
                    const score = selectedStudent.scores[qId];

                    return (
                      <div key={qId} className="bg-slate-900/70 p-5 rounded-xl border border-slate-700/60 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">
                                Questão {idx + 1} (ID {qId})
                              </span>
                              {qData && (
                                <span className="text-[9px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold">
                                  {qData.disciplina}
                                </span>
                              )}
                            </div>
                            <h4 className="font-bold text-slate-200 text-base">{qData ? qData.titulo : `Questão ${qId}`}</h4>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                            score !== undefined && score >= 5
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : score !== undefined
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}>
                            Nota: {score !== undefined ? score : 'Pendente'}
                          </span>
                        </div>

                        {qData && (
                          <div className="bg-slate-950/40 p-3 rounded-lg text-xs text-slate-400 italic border border-slate-800">
                            {qData.enunciado}
                          </div>
                        )}

                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Dissertação do Aluno:
                          </label>
                          <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap border border-slate-800">
                            {resp ? resp : <span className="text-slate-500 italic">Sem resposta enviada para esta questão.</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 border-t border-slate-700 bg-slate-800 flex justify-between items-center">
                  <span className="text-xs text-slate-400">
                    Status: <strong className="text-white">{selectedStudent.completed ? 'Avaliação Finalizada' : 'Em Andamento'}</strong>
                  </span>
                  <button
                    onClick={() => downloadStudentReport(selectedStudent)}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow"
                  >
                    <Download size={14} /> Baixar Relatório (.txt)
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Global Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 right-6 z-50 bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs"
            >
              <ShieldAlert size={18} /> {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* System Modal */}
        <AnimatePresence>
          {modal.show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModal(m => ({ ...m, show: false }))}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 max-w-sm w-full overflow-hidden"
              >
                <div className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-400">
                    <AlertCircle size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{modal.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{modal.message}</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-900/50 border-t border-slate-700 flex gap-3">
                  {modal.type === 'confirm' ? (
                    <>
                      <button
                        onClick={() => setModal(m => ({ ...m, show: false }))}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-700 transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          modal.onConfirm?.();
                          setModal(m => ({ ...m, show: false }));
                        }}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-red-600 text-white hover:bg-red-500 transition-colors"
                      >
                        Confirmar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setModal(m => ({ ...m, show: false }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                    >
                      Entendido
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // SCREEN: FULL EXPLANATORY STUDY MATERIAL VIEW FOR A DISCIPLINE
  if (viewingTheoryDisciplina) {
    const mat = MATERIAIS_EXPLICATIVOS[viewingTheoryDisciplina] || MATERIAIS_EXPLICATIVOS["Python Fundamentos"];

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-6 font-sans select-none flex justify-center">
        <div className="max-w-4xl w-full mx-auto space-y-8">
          {/* Header */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl p-3 bg-slate-800 rounded-2xl border border-slate-700">{mat?.icone || '📖'}</span>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Guia Teórico & Material Explicativo</span>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{mat?.titulo}</h1>
                </div>
              </div>

              <button
                onClick={() => setViewingTheoryDisciplina(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-700 flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Voltar ao Menu
              </button>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/80 pt-4">
              {mat?.subtitulo}
            </p>
          </div>

          {/* Secoes Teóricas */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
              <BookOpen size={16} className="text-blue-400" /> Conteúdo Conceitual & Exemplos Práticos
            </h3>

            {mat?.secoes.map((sec, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 p-7 rounded-2xl border border-slate-800 space-y-4 shadow-md"
              >
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles size={18} className="text-amber-400" /> {sec.titulo}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {sec.conteudo}
                </p>

                {sec.exemploCodigo && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block flex items-center gap-1">
                      <FileCode size={12} /> Exemplo de Código / Sintaxe:
                    </span>
                    <pre className="font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                      {sec.exemploCodigo}
                    </pre>
                  </div>
                )}

                {sec.dica && (
                  <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start gap-3 text-xs text-blue-300">
                    <Lightbulb size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-blue-200 mb-0.5">Dica de Estudo:</strong>
                      {sec.dica}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Glossário de Termos Chave */}
          {mat?.termosChave && mat.termosChave.length > 0 && (
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                <HelpCircle size={16} className="text-emerald-400" /> Glossário de Termos Chave Avaliados
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mat.termosChave.map((t, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-emerald-400 block">{t.termo}</span>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.explicacao}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Pronto para praticar e testar seus conhecimentos?</span>
            <button
              onClick={() => {
                handleSelectDisciplina(viewingTheoryDisciplina);
                setViewingTheoryDisciplina(null);
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              🚀 Iniciar Desafios Práticos desta Disciplina <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STEP 1: IDENTIFICATION VIEW (NAME ENTRY)
  if (!progress.userName) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center p-6 font-sans select-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-10 space-y-8"
        >
          <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-inner">
              <GraduationCap size={32} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Identificação do Aluno</h1>
            <p className="text-gray-500 text-sm">Insira seu nome completo para iniciar a avaliação.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Nome Completo</label>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleStartName()}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700 font-medium transition-all shadow-sm"
                placeholder="Ex: João Silva Sauro"
                autoFocus
              />
            </div>
            <button
              onClick={handleStartName}
              className="w-full bg-[#111827] text-white py-4 rounded-xl font-bold hover:bg-[#374151] transition-all shadow-lg shadow-gray-200 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Avançar para Seleção de Trilhas <ChevronRight size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-400 font-medium">Seu progresso será salvo e sincronizado automaticamente.</p>
        </motion.div>

        {/* Custom Modal */}
        <AnimatePresence>
          {modal.show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModal(m => ({ ...m, show: false }))}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-sm w-full overflow-hidden"
              >
                <div className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                    <AlertCircle size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{modal.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{modal.message}</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                  {modal.type === 'confirm' ? (
                    <>
                      <button
                        onClick={() => setModal(m => ({ ...m, show: false }))}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          modal.onConfirm?.();
                          setModal(m => ({ ...m, show: false }));
                        }}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#111827] text-white hover:bg-[#374151] transition-colors"
                      >
                        Confirmar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setModal(m => ({ ...m, show: false }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-[#111827] text-white hover:bg-[#374151] transition-colors"
                    >
                      Entendido
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // STEP 2: MENU DE TRILHAS & DISCIPLINAS (LEARNING HUB)
  if (!progress.selectedDisciplina) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-10 px-6 font-sans select-none flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <GraduationCap size={16} /> Bem-vindo(a), {progress.userName}!
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Trilhas Guiadas de Aprendizado & Avaliação
            </h1>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Escolha uma **Trilha de Aprendizado Guiada** para evoluir por módulos ou selecione uma **Disciplina Individual**.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex justify-center">
            <div className="bg-slate-200/70 p-1.5 rounded-2xl flex gap-1 border border-slate-300/50">
              <button
                onClick={() => setMenuTab('trilhas')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  menuTab === 'trilhas'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Route size={16} className={menuTab === 'trilhas' ? 'text-amber-400' : ''} />
                <span>Trilhas Guiadas de Aprendizado (Recomendado)</span>
              </button>
              <button
                onClick={() => setMenuTab('disciplinas')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  menuTab === 'disciplinas'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen size={16} className={menuTab === 'disciplinas' ? 'text-blue-400' : ''} />
                <span>Módulos por Disciplina</span>
              </button>
            </div>
          </div>

          {/* TAB 1: TRILHAS DE APRENDIZADO */}
          {menuTab === 'trilhas' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.values(TRILHAS_DE_TESTE).map((trilha) => (
                  <motion.div
                    key={trilha.id}
                    whileHover={{ scale: 1.015, y: -2 }}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-3xl p-3 bg-slate-50 rounded-2xl border border-slate-100">{trilha.icone}</span>
                        <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                          {trilha.nivelRecomendado}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-slate-900">{trilha.nome}</h3>
                        <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block mt-0.5">{trilha.categoria}</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-2">{trilha.descricao}</p>
                      </div>

                      {/* Steps Roadmap */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Módulos Encadeados ({trilha.etapas.length}):</span>
                        {trilha.etapas.map((etapa, idx) => (
                          <div key={etapa.id} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <p className="text-xs font-bold text-slate-700 truncate max-w-[180px]">{etapa.titulo}</p>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono">{etapa.tempoEstimado}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleSelectTrilha(trilha)}
                        className="w-full bg-[#111827] hover:bg-[#374151] text-white py-3 rounded-xl text-xs font-bold transition-all shadow flex items-center justify-center gap-2"
                      >
                        <Compass size={16} /> Iniciar Trilha de Aprendizado <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DISCIPLINAS INDIVIDUAIS */}
          {menuTab === 'disciplinas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DISCIPLINAS_DISPONIVEIS.map((d) => {
                const count = (Object.values(bancoProvas) as Prova[]).filter(q => d.id === 'Todas' || q.disciplina === d.id).length;
                const hasTheory = MATERIAIS_EXPLICATIVOS[d.id] !== undefined;

                return (
                  <motion.div
                    key={d.id}
                    whileHover={{ scale: 1.015, y: -2 }}
                    className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 shadow-sm ${
                      d.id === 'Todas'
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700 hover:shadow-xl'
                        : 'bg-white text-slate-900 border-slate-200 hover:border-blue-400 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-3xl">{d.icone}</span>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          d.id === 'Todas'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {count} Questões Práticas
                        </span>
                      </div>

                      <div>
                        <h3 className={`text-lg font-bold ${d.id === 'Todas' ? 'text-white' : 'text-slate-900'}`}>
                          {d.nome}
                        </h3>
                        <p className={`text-xs mt-1.5 leading-relaxed ${d.id === 'Todas' ? 'text-slate-300' : 'text-slate-500'}`}>
                          {d.descricao}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {hasTheory && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewingTheoryDisciplina(d.id);
                          }}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            d.id === 'Todas'
                              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                          }`}
                          title="Ler resumo explicativo e teoria"
                        >
                          <BookOpen size={14} className="text-blue-500" /> Ler Teoria
                        </button>
                      )}

                      <button
                        onClick={() => handleSelectDisciplina(d.id)}
                        className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          d.id === 'Todas'
                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow'
                            : 'bg-[#111827] hover:bg-[#374151] text-white shadow-sm'
                        }`}
                      >
                        <span>Praticar Desafios</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className="text-center pt-4">
            <button
              onClick={() => setProgress(prev => ({ ...prev, userName: '' }))}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold transition-colors inline-flex items-center gap-1"
            >
              <RotateCcw size={12} /> Alterar Nome de Identificação
            </button>
          </div>
        </div>
      </div>
    );
  }

  // COMPLETED VIEW
  if (progress.completed) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center p-6 font-sans select-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 p-10 text-center space-y-6"
        >
          <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 animate-pulse">
            <GraduationCap size={32} />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Prova Finalizada</h1>
            <p className="text-gray-500 text-sm">
              Obrigado por participar, <strong className="text-slate-800">{progress.userName}</strong>.
            </p>
            <span className="inline-block text-[11px] bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-bold">
              {progress.selectedTrilhaId ? 'Trilha: ' + progress.selectedTrilhaId : 'Disciplina: ' + progress.selectedDisciplina}
            </span>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-medium text-gray-700">
              Sua avaliação foi enviada e sincronizada de forma remota.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              O processamento final pode levar alguns instantes. Suas respostas foram armazenadas para análise do professor.
            </p>
            
            <div className="pt-4 border-t border-gray-200 mt-4 space-y-3">
              <button 
                onClick={changeDisciplinaOrTrilha}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow flex items-center justify-center gap-2"
              >
                <BookOpen size={16} /> Escolher Outra Disciplina ou Trilha
              </button>

              <button 
                onClick={resetProgress}
                className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center justify-center gap-1 mx-auto pt-1"
              >
                <RotateCcw size={10} /> Reiniciar Sistema (Config)
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Modal Overlay */}
        <AnimatePresence>
          {modal.show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModal(m => ({ ...m, show: false }))}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-sm w-full overflow-hidden"
              >
                <div className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                    <AlertCircle size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{modal.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{modal.message}</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                  {modal.type === 'confirm' ? (
                    <>
                      <button
                        onClick={() => setModal(m => ({ ...m, show: false }))}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          modal.onConfirm?.();
                          setModal(m => ({ ...m, show: false }));
                        }}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#111827] text-white hover:bg-[#374151] transition-colors"
                      >
                        Confirmar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setModal(m => ({ ...m, show: false }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-[#111827] text-white hover:bg-[#374151] transition-colors"
                    >
                      Entendido
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // EXAM MAIN VIEW
  const completedLevelsCount = levels.filter(lvl => (progress.scores[lvl] || 0) >= 5).length;
  const progressPercent = (completedLevelsCount / (levels.length || 1)) * 100;
  const canGoBackInfo = checkCanGoBack();
  const currentDiscName = currentLevelData?.disciplina || progress.selectedDisciplina;
  const currentTheory = MATERIAIS_EXPLICATIVOS[currentDiscName];

  return (
    <div 
      onCopy={(e) => handleCopyPasteBlock(e, 'copiar')}
      onPaste={(e) => handleCopyPasteBlock(e, 'colar')}
      onCut={(e) => handleCopyPasteBlock(e, 'recortar')}
      onContextMenu={(e) => {
        e.preventDefault();
        showToast('🚫 Menu de contexto desativado durante a avaliação.');
      }}
      className="h-screen bg-[#F9FAFB] flex flex-col font-sans text-slate-900 overflow-hidden select-none"
    >
      <div className="flex flex-col h-full max-w-[1024px] w-full mx-auto bg-white border-x border-gray-200 shadow-sm">
        
        {/* Header */}
        <header className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Level {progress.currentLevel} ({levels.indexOf(progress.currentLevel) + 1}/{levels.length})
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                <BookOpen size={10} className="text-blue-500" /> {currentDiscName}
              </span>
              {progress.selectedTrilhaId && (
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Route size={10} className="text-emerald-600" /> Trilha Guiada
                </span>
              )}
              {currentTheory && (
                <button
                  onClick={() => setShowExamTheoryDrawer(true)}
                  className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-bold hover:bg-amber-100 transition-colors flex items-center gap-1"
                  title="Consultar resumo teórico e exemplos da disciplina"
                >
                  <Lightbulb size={10} className="text-amber-500" /> Consultar Teoria
                </button>
              )}
              {currentLevelData?.bloquearVoltar && (
                <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Lock size={10} /> Retorno Restrito
                </span>
              )}
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">{currentLevelData?.titulo}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Progresso Geral</p>
              <div className="w-32 h-2 bg-gray-100 rounded-full mt-1 overflow-hidden border border-gray-200/50">
                <div 
                  className="h-full bg-blue-500 transition-all duration-700 ease-out" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={changeDisciplinaOrTrilha}
                className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-2 rounded-md text-xs font-bold hover:bg-blue-100 transition-all flex items-center gap-1.5 uppercase tracking-tighter"
                title="Voltar para a tela inicial de seleção de disciplinas ou trilhas"
              >
                <BookOpen size={14} />
                Menu de Trilhas
              </button>

              <button 
                onClick={resetProgress}
                className="bg-white text-red-600 border border-red-200 px-3 py-2 rounded-md text-xs font-bold hover:bg-red-50 transition-all flex items-center gap-1.5 uppercase tracking-tighter"
                title="Limpar tudo e reiniciar"
              >
                <RotateCcw size={14} />
                Reset
              </button>
              
              <button 
                onClick={finishExam}
                className="bg-[#111827] text-white px-4 py-2 rounded-md text-xs font-bold hover:bg-[#374151] transition-all flex items-center gap-1.5 uppercase tracking-tighter shadow-sm shadow-gray-200"
              >
                Encerrar Prova
              </button>
            </div>
          </div>
        </header>

        {/* Main Split Layout */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden border-t border-gray-100">
          {/* Left Side: Enunciado */}
          <section className="p-8 bg-gray-50 overflow-y-auto border-r border-gray-100 flex flex-col select-none">
            <div className="max-w-prose space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={14} className="text-blue-500" /> Trilha Linear de Aprendizado
                </h3>
                <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                  <ShieldAlert size={12} className="text-amber-500" /> Protegido contra cópia
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={progress.currentLevel}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {/* Linear Step 1 & Step 2 Preparatory Explanatory Texts */}
                  {currentLevelData?.textosPreparatorios && currentLevelData.textosPreparatorios.length > 0 && (
                    <div className="space-y-3">
                      {currentLevelData.textosPreparatorios.map((txt, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-blue-100 shadow-xs space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              📖 Texto Explicativo {idx + 1}
                            </span>
                            <h4 className="font-bold text-slate-900 text-xs">{txt.titulo}</h4>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-sans">
                            {txt.conteudo}
                          </p>
                          {txt.exemploCodigo && (
                            <pre className="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-emerald-400 leading-relaxed whitespace-pre-wrap">
                              {txt.exemploCodigo}
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Linear Step 3: Question Related to the Texts Above */}
                  <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200/80 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-slate-900 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {currentLevelData?.textosPreparatorios && currentLevelData.textosPreparatorios.length > 0 
                          ? '✍️ Pergunta Relacionada aos Textos Acima' 
                          : '✍️ Pergunta Prática de Fixação'}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-slate-800 font-medium pt-1">
                      {currentLevelData?.enunciado}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Right Side: Editor */}
          <section className="p-8 flex flex-col gap-4 bg-white">
            <div className="flex-1 flex flex-col relative group">
              <label className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider flex justify-between items-center">
                <span>Sua Resposta <span className="text-[10px] text-gray-400 font-normal">(Digitação direta requerida)</span></span>
                {isSaving && <span className="text-[10px] text-blue-500 flex items-center gap-1"><CheckCircle2 size={10}/> Salvo</span>}
              </label>
              <textarea
                id="answer-input"
                value={currentResponse}
                onChange={(e) => handleResponseChange(e.target.value)}
                onCopy={(e) => handleCopyPasteBlock(e, 'copiar')}
                onPaste={(e) => handleCopyPasteBlock(e, 'colar')}
                onCut={(e) => handleCopyPasteBlock(e, 'recortar')}
                className="flex-1 p-5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none text-gray-700 leading-relaxed font-mono text-[13px] bg-white transition-all shadow-sm select-text"
                placeholder="Digite sua dissertação técnica aqui..."
                spellCheck="false"
              />
            </div>
            
            <div className="flex justify-between items-center text-[11px] text-gray-400 font-mono tracking-tight uppercase">
              <span className={currentResponse.length >= (currentLevelData?.min_chars || 0) ? "text-green-600 font-bold" : ""}>
                {currentResponse.length} / {currentLevelData?.min_chars || 0} caracteres mín.
              </span>
              <span className="flex items-center gap-1 italic opacity-75">
                <Save size={10} /> Sincronização Remota Ativa
              </span>
            </div>
          </section>
        </main>

        {/* Footer: Navigation & Actions */}
        <footer className="p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            {levels.indexOf(progress.currentLevel) > 0 && (
              <button
                onClick={prevLevel}
                disabled={!canGoBackInfo.allowed}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all border ${
                  canGoBackInfo.allowed
                    ? 'bg-white text-slate-700 border-gray-300 hover:bg-gray-50'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
                title={canGoBackInfo.reason || "Voltar à questão anterior"}
              >
                <ChevronLeft size={16} />
                {canGoBackInfo.allowed ? 'Voltar Questão' : 'Retorno Bloqueado'}
                {!canGoBackInfo.allowed && <Lock size={12} className="text-amber-600" />}
              </button>
            )}
          </div>

          <div className="flex-1 w-full sm:mx-4 min-h-[44px] flex items-center">
            {feedback ? (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`w-full p-3 rounded-lg text-sm flex items-center gap-3 ${
                  feedback.error 
                    ? 'bg-red-50 text-red-700 border border-red-100' 
                    : feedback.score >= 5 
                      ? 'bg-green-50 text-green-700 border border-green-100'
                      : 'bg-blue-50 text-blue-700 border border-blue-100'
                }`}
              >
                {feedback.error ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
                <div className="flex-1">
                  {feedback.error ? (
                    <span className="font-semibold">{feedback.error}</span>
                  ) : (
                    <div>
                      <span className="font-bold">Nota: {feedback.score.toFixed(1)}</span>
                      {feedback.missingKeys.length > 0 && (
                        <span className="ml-2 font-medium opacity-80">
                          - Considere: {feedback.missingKeys.join(", ")}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="w-full p-3 rounded-lg text-xs text-gray-400 bg-gray-50 border border-gray-100 italic transition-all">
                Aguardando avaliação dos termos técnicos...
              </div>
            )}
          </div>

          <div className="flex gap-3 shrink-0">
            <button 
              onClick={saveResponse}
              className="bg-white text-[#374151] border border-gray-300 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              Gravar Rascunho
            </button>
            {feedback && feedback.score >= 5 ? (
              <button 
                onClick={nextLevel}
                className="bg-green-600 hover:bg-green-700 text-white px-7 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 shadow-sm shadow-green-100"
              >
                {levels.indexOf(progress.currentLevel) === levels.length - 1 ? 'Finalizar Prova' : 'Próximo Nível'}
                <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                onClick={evaluateNota}
                className="bg-[#111827] text-white px-7 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#374151] transition-all shadow-sm"
              >
                Avaliar Resposta
              </button>
            )}
          </div>
        </footer>
      </div>

      {/* Slide-over Theory Drawer during Exam */}
      <AnimatePresence>
        {showExamTheoryDrawer && currentTheory && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExamTheoryDrawer(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative bg-slate-900 text-white max-w-lg w-full h-full shadow-2xl overflow-y-auto p-6 space-y-6 border-l border-slate-800"
            >
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currentTheory.icone}</span>
                  <div>
                    <h3 className="font-bold text-white text-base">{currentTheory.titulo}</h3>
                    <span className="text-[10px] text-blue-400 font-bold uppercase">{currentDiscName}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowExamTheoryDrawer(false)}
                  className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                {currentTheory.secoes.map((sec, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-400" /> {sec.titulo}
                    </h4>
                    <p className="leading-relaxed">{sec.conteudo}</p>
                    {sec.exemploCodigo && (
                      <pre className="bg-slate-900 p-3 rounded font-mono text-[11px] text-emerald-400 leading-relaxed whitespace-pre-wrap border border-slate-800">
                        {sec.exemploCodigo}
                      </pre>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setShowExamTheoryDrawer(false)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow"
                >
                  Voltar à Avaliação
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="py-2 text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] opacity-50">
        Engine Examullator &trade; 2026
      </div>

      {/* Floating Anti-Cheat Warning Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs"
          >
            <ShieldAlert size={18} /> {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Overlay for Main View */}
      <AnimatePresence>
        {modal.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(m => ({ ...m, show: false }))}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-sm w-full overflow-hidden"
            >
              <div className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <AlertCircle size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{modal.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{modal.message}</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                {modal.type === 'confirm' ? (
                  <>
                    <button
                      onClick={() => setModal(m => ({ ...m, show: false }))}
                      className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => {
                        modal.onConfirm?.();
                        setModal(m => ({ ...m, show: false }));
                      }}
                      className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#111827] text-white hover:bg-[#374151] transition-colors"
                    >
                      Confirmar
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setModal(m => ({ ...m, show: false }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-[#111827] text-white hover:bg-[#374151] transition-colors"
                  >
                    Entendido
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
