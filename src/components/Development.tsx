import React from 'react';
import { Copy, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Development: React.FC = () => {
  const { copyToClipboard } = useToast();

  const steps = [
    {
      num: 'Passo 1',
      cmd: 'git status',
      desc: 'Mostra o estado atual: arquivos modificados, novos ou prontos para commit.'
    },
    {
      num: 'Passo 2',
      cmd: 'git add .',
      desc: 'Prepara todas as alterações para a área de staging para o próximo commit.'
    },
    {
      num: 'Passo 3',
      cmd: 'git commit -m "feat: add customer dashboard"',
      desc: 'Grava uma versão atômica no histórico com uma mensagem descritiva padronizada.'
    }
  ];

  return (
    <section id="durante-desenvolvimento" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Execução</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Durante o desenvolvimento
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Ciclo de trabalho limpo: verifique status, prepare arquivos e registre o progresso.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((st) => (
            <div key={st.num} className="p-5 bg-[#0C0E14] border border-white/10 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF4754] uppercase tracking-wider block mb-2">
                  {st.num}
                </span>
                <div className="flex items-center justify-between p-3 bg-[#050608] border border-white/10 rounded-lg mb-3">
                  <code className="text-xs sm:text-sm font-mono text-white truncate mr-2">{st.cmd}</code>
                  <button
                    onClick={() => copyToClipboard(st.cmd)}
                    className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                    title="Copiar comando"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Pro Tip Box */}
        <div className="flex items-start gap-4 p-5 bg-[#B01920]/10 border border-[#B01920]/30 rounded-xl">
          <div className="w-8 h-8 rounded-lg bg-[#B01920] text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-1">Dica de Ouro</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Faça commits <strong>pequenos</strong> e relacionados a uma <strong>única mudança</strong> sempre que possível. Evite acumular dias de código em um único commit misterioso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
