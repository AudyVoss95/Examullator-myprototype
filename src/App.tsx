import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Save, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  AlertCircle, 
  GraduationCap,
  RotateCcw,
  BookOpen,
  LogOut
} from 'lucide-react';
import { BANCO_DE_PROVAS, Prova, APP_CONFIG } from './data';

interface UserProgress {
  sequence: string[];
  userName: string;
  currentLevel: string;
  responses: Record<string, string>;
  scores: Record<string, number>;
  completed: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const generateSequence = (): string[] => {
  const allIds = Object.keys(BANCO_DE_PROVAS);
  const byLevel: Record<number, string[]> = {};
  
  allIds.forEach(id => {
    const nivel = BANCO_DE_PROVAS[id].nivel;
    if (!byLevel[nivel]) byLevel[nivel] = [];
    byLevel[nivel].push(id);
  });

  const sortedNiveis = Object.keys(byLevel).map(Number).sort((a, b) => a - b);
  const sequence: string[] = [];
  
  sortedNiveis.forEach(n => {
    const shuffled = shuffleArray(byLevel[n]);
    sequence.push(...shuffled.slice(0, APP_CONFIG.questoesPorNivel));
  });

  return sequence.slice(0, APP_CONFIG.totalQuestoes);
};

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('examullator_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migration: Ensure sequence and userName exist
        if (!parsed.sequence) {
          parsed.sequence = Object.keys(BANCO_DE_PROVAS).sort();
        }
        if (parsed.userName === undefined) {
          parsed.userName = '';
        }
        return parsed;
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    const initialSequence = generateSequence();
    return {
      sequence: initialSequence,
      userName: '',
      currentLevel: initialSequence[0],
      responses: {},
      scores: {},
      completed: false
    };
  });

  const [tempName, setTempName] = useState('');
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

  useEffect(() => {
    localStorage.setItem('examullator_progress', JSON.stringify(progress));
  }, [progress]);

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

  const currentLevelData: Prova = BANCO_DE_PROVAS[progress.currentLevel];
  const currentResponse = progress.responses[progress.currentLevel] || '';

  const handleResponseChange = (val: string) => {
    setProgress(prev => ({
      ...prev,
      responses: { ...prev.responses, [prev.currentLevel]: val }
    }));
  };

  const saveResponse = () => {
    setIsSaving(true);
    
    // Download draft
    let content = `RASCUNHO - QUESTÃO ${progress.currentLevel}\n`;
    content += `Estudante: ${progress.userName}\n`;
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
    const foundKeywords = currentLevelData.keywords.filter(kw => 
      textLower.includes(kw.toLowerCase())
    );
    
    const missingKeys = currentLevelData.keywords.filter(kw => 
      !textLower.includes(kw.toLowerCase())
    );

    const keywordsRatio = foundKeywords.length / currentLevelData.keywords.length;
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

  const handleStart = () => {
    if (tempName.trim().length < 3) {
      showAlert("Identificação", "Por favor, insira seu nome completo.");
      return;
    }
    setProgress(prev => ({ ...prev, userName: tempName.trim() }));
  };

  const downloadReport = () => {
    let content = "RELATÓRIO FINAL DE DESEMPENHO - EXAMULLATOR\n";
    content += "============================================\n";
    content += `Estudante: ${progress.userName}\n`;
    content += `Data: ${new Date().toLocaleString()}\n\n`;
    
    levels.forEach(lvl => {
      const p = BANCO_DE_PROVAS[lvl];
      content += `[Nível ${lvl}]: ${p.titulo}\n`;
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
      "Tem certeza que deseja apagar todo o progresso? Isso limpará o nome e todas as respostas.",
      () => {
        const newSequence = generateSequence();
        setProgress({
          sequence: newSequence,
          userName: '',
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

  if (!progress.userName) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 p-10 space-y-8"
        >
          <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <GraduationCap size={32} />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Identificação</h1>
            <p className="text-gray-500 text-sm">Insira seu nome completo para iniciar a avaliação.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Nome Completo</label>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleStart()}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700 font-medium transition-all"
                placeholder="Ex: João Silva Sauro"
                autoFocus
              />
            </div>
            <button
              onClick={handleStart}
              className="w-full bg-[#111827] text-white py-4 rounded-xl font-bold hover:bg-[#374151] transition-all shadow-lg shadow-gray-200 active:scale-[0.98]"
            >
              Iniciar Avaliação
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-400 font-medium">Seu progresso será salvo automaticamente.</p>
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

  if (progress.completed) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
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
            <p className="text-gray-500 text-sm">Obrigado por participar.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-medium text-gray-700">
              Aguarde o término da avaliação pelo sistema...
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              O processamento final pode levar alguns instantes. Sua submissão está sendo analisada pelos avaliadores.
            </p>
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <button 
                onClick={resetProgress}
                className="text-[10px] font-bold text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center justify-center gap-1 mx-auto"
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

  // Calculate overall progress percentage
  const completedLevelsCount = levels.filter(lvl => (progress.scores[lvl] || 0) >= 5).length;
  const progressPercent = (completedLevelsCount / levels.length) * 100;

  return (
    <div className="h-screen bg-[#F9FAFB] flex flex-col font-sans text-slate-900 overflow-hidden">
      <div className="flex flex-col h-full max-w-[1024px] w-full mx-auto bg-white border-x border-gray-200 shadow-sm">
        
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Level {progress.currentLevel}</span>
            <h1 className="text-2xl font-semibold tracking-tight">{currentLevelData.titulo}</h1>
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
                onClick={resetProgress}
                className="bg-white text-red-600 border border-red-200 px-3 py-2 rounded-md text-xs font-bold hover:bg-red-50 transition-all flex items-center gap-1.5 uppercase tracking-tighter"
                title="Limpar tudo (Temporário)"
              >
                <RotateCcw size={14} />
                Reset
              </button>

              <button 
                onClick={() => window.location.href = 'https://www.google.com'}
                className="bg-white text-gray-500 border border-gray-200 px-3 py-2 rounded-md text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-1.5 uppercase tracking-tighter"
                title="Sair para Google"
              >
                <LogOut size={14} />
                Sair
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
          <section className="p-8 bg-gray-50 overflow-y-auto border-r border-gray-100 flex flex-col">
            <div className="max-w-prose">
              <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">Enunciado do Desafio</h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={progress.currentLevel}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {currentLevelData.enunciado}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Right Side: Editor */}
          <section className="p-8 flex flex-col gap-4 bg-white">
            <div className="flex-1 flex flex-col relative group">
              <label className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider flex justify-between items-center">
                Sua Resposta
                {isSaving && <span className="text-[10px] text-blue-500 flex items-center gap-1"><CheckCircle2 size={10}/> Salvos</span>}
              </label>
              <textarea
                id="answer-input"
                value={currentResponse}
                onChange={(e) => handleResponseChange(e.target.value)}
                className="flex-1 p-5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none text-gray-700 leading-relaxed font-mono text-[13px] bg-white transition-all shadow-sm"
                placeholder="Digite sua dissertação técnica aqui..."
                spellCheck="false"
              />
            </div>
            
            <div className="flex justify-between items-center text-[11px] text-gray-400 font-mono tracking-tight uppercase">
              <span className={currentResponse.length >= currentLevelData.min_chars ? "text-green-600 font-bold" : ""}>
                {currentResponse.length} / {currentLevelData.min_chars} caracteres mín.
              </span>
              <span className="flex items-center gap-1 italic opacity-75">
                <Save size={10} /> Progressivo Ativado
              </span>
            </div>
          </section>
        </main>

        {/* Footer: Feedback & Actions */}
        <footer className="p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex-1 w-full sm:mr-8 min-h-[44px] flex items-center">
            {feedback ? (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`w-full p-4 rounded-lg text-sm flex items-center gap-3 ${
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
              <div className="w-full p-4 rounded-lg text-sm bg-gray-50 text-gray-400 border border-gray-100 italic transition-all">
                Aguardando avaliação dos termos técnicos...
              </div>
            )}
          </div>

          <div className="flex gap-3 shrink-0">
            <button 
              onClick={saveResponse}
              className="bg-white text-[#374151] border border-gray-300 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              Gravar Rascunho
            </button>
            {feedback && feedback.score >= 5 ? (
              <button 
                onClick={nextLevel}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 shadow-sm shadow-green-100"
              >
                {levels.indexOf(progress.currentLevel) === levels.length - 1 ? 'Finalizar Prova' : 'Próximo Nível'}
                <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                onClick={evaluateNota}
                className="bg-[#111827] text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#374151] transition-all shadow-sm"
              >
                Avaliar Resposta
              </button>
            )}
          </div>
        </footer>
      </div>

      <div className="py-2 text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] opacity-50">
        Engine Examullator &trade; 2026
      </div>

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
