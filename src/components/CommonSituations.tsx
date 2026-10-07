import React, { useState } from 'react';
import { commonSituations } from '../data/cheatSheetItems';
import { ChevronDown, AlertTriangle, Copy } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const CommonSituations: React.FC = () => {
  const { copyToClipboard } = useToast();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'wrong-branch': true });

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="situacoes-comuns" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Solução Rápida</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Situações comuns
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Respostas diretas para dúvidas e incidentes frequentes no dia a dia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {commonSituations.map((sit) => {
            const isOpen = !!openIds[sit.id];
            return (
              <div
                key={sit.id}
                className={`bg-[#0C0E14] border rounded-xl overflow-hidden transition-all ${
                  isOpen ? 'border-[#B01920]/40 shadow-lg' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(sit.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-white font-semibold text-sm sm:text-base cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {sit.warning && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
                    <span>{sit.title}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#FF4754]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 border-t border-white/5 text-sm text-slate-300">
                    <p className="text-slate-400 text-xs sm:text-sm mt-3 mb-3 leading-relaxed">{sit.description}</p>

                    {sit.warning && (
                      <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-300 text-xs font-medium mb-3 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                        <span>{sit.warning}</span>
                      </div>
                    )}

                    <div className="space-y-2">
                      {sit.commands.map((cmd) => (
                        <div
                          key={cmd}
                          className="flex items-center justify-between p-2.5 sm:p-3 bg-[#050608] border border-white/10 rounded-lg font-mono text-xs sm:text-sm"
                        >
                          <code className="text-slate-200 truncate mr-2">{cmd}</code>
                          <button
                            onClick={() => copyToClipboard(cmd)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors shrink-0"
                            title="Copiar"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {sit.tip && (
                      <span className="text-xs text-slate-400 block mt-2.5 italic">
                        💡 {sit.tip}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
