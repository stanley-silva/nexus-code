import React from 'react';
import { Check, X, Copy, Globe2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const CommitStandards: React.FC = () => {
  const { copyToClipboard } = useToast();

  const types = [
    { type: 'feat:', label: 'Nova feature' },
    { type: 'fix:', label: 'Correção' },
    { type: 'refactor:', label: 'Refatoração' },
    { type: 'chore:', label: 'Config/deps' },
    { type: 'docs:', label: 'Documentação' },
    { type: 'style:', label: 'Formatação' },
    { type: 'perf:', label: 'Performance' },
    { type: 'test:', label: 'Testes' }
  ];

  const goodCommits = [
    'feat: add customer dashboard',
    'fix: resolve mobile navigation issue',
    'refactor: simplify authentication service',
    'chore: update project dependencies',
    'docs: update setup instructions',
    'perf: optimize customer query'
  ];

  const badCommits = [
    'update',
    'changes',
    'final',
    'now it works',
    'test',
    'fix things'
  ];

  return (
    <section id="padrao-commits" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Conventional Commits</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Padrão de commits
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Histórico limpo e compreensível para qualquer membro da equipe ou auditoria futura.
          </p>
        </div>

        {/* English Only Banner */}
        <div className="flex items-center gap-3 p-4 bg-[#B01920]/15 border border-[#B01920]/40 rounded-xl text-[#FF4754] text-sm font-semibold mb-8">
          <Globe2 className="w-5 h-5 shrink-0" />
          <span>Regra inegociável: Commits devem <em>sempre</em> ser escritos em <strong>inglês</strong>.</span>
        </div>

        {/* Conventional Types Badges */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {types.map((t) => (
            <div key={t.type} className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-xs text-slate-300">
              <code className="text-[#FF4754] font-bold font-mono mr-1.5">{t.type}</code>
              <span>{t.label}</span>
            </div>
          ))}
        </div>

        {/* Side by side: Good vs Bad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Good Commits */}
          <div className="bg-[#0C0E14] border border-white/10 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Check className="w-4 h-4" />
              <span>Exemplos recomendados</span>
            </div>
            <div className="p-4 flex flex-col gap-2">
              {goodCommits.map((msg) => (
                <button
                  key={msg}
                  onClick={() => copyToClipboard(msg)}
                  className="flex items-center justify-between p-2.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-emerald-500/30 rounded-lg text-left transition-all group"
                >
                  <code className="text-xs font-mono text-slate-200 group-hover:text-white truncate">{msg}</code>
                  <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Bad Commits */}
          <div className="bg-[#0C0E14] border border-white/10 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-rose-500/10 border-b border-rose-500/20 text-rose-400 text-xs font-semibold">
              <X className="w-4 h-4" />
              <span>Exemplos proibidos</span>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {badCommits.map((msg) => (
                <div
                  key={msg}
                  className="flex items-center gap-2 p-2.5 bg-rose-500/[0.04] border border-rose-500/15 rounded-lg text-rose-400/80"
                >
                  <X className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                  <code className="text-xs font-mono line-through truncate">{msg}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
