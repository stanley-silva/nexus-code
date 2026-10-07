import React from 'react';
import { GitCommit, GitPullRequest, Copy } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const PullRequest: React.FC = () => {
  const { copyToClipboard } = useToast();

  const webSteps = [
    'Faça o push da sua branch para o GitHub.',
    'Abra a página do repositório no GitHub.',
    'Clique no botão amarelo "Compare & pull request".',
    'Preencha o título e a descrição com o template.',
    'Solicite review aos colegas do time.'
  ];

  return (
    <section id="pull-requests" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Colaboração</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Criar Pull Request
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Entenda a diferença crucial entre commit e pull request e como abrir sua revisão.
          </p>
        </div>

        {/* Concept Comparison */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-12">
          {/* Commit Concept */}
          <div className="flex-1 p-6 bg-[#0C0E14] border border-white/10 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-white">Commit</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">Local</span>
              </div>
              <p className="text-sm text-slate-400">“Registra uma versão do seu trabalho.”</p>
            </div>
          </div>

          <div className="flex items-center justify-center font-mono font-bold text-xs text-slate-500 uppercase">
            VS
          </div>

          {/* Pull Request Concept */}
          <div className="flex-1 p-6 bg-[#B01920]/10 border border-[#B01920]/40 rounded-2xl flex items-center gap-4 shadow-[0_0_20px_rgba(176,25,32,0.2)]">
            <div className="w-12 h-12 rounded-xl bg-[#B01920] text-white flex items-center justify-center shrink-0 shadow-md">
              <GitPullRequest className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-white">Pull Request</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B01920]/30 text-[#FF4754] font-semibold">GitHub</span>
              </div>
              <p className="text-sm text-slate-300">“Solicita que sua branch seja incorporada à main.”</p>
            </div>
          </div>
        </div>

        {/* Two Options: Web vs CLI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option A */}
          <div className="p-6 bg-[#0C0E14] border border-white/10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300">Opção A</span>
                <h3 className="text-base font-bold text-white">Interface Web do GitHub</h3>
              </div>
              <ol className="space-y-3">
                {webSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#FF4754] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Option B: GitHub CLI */}
          <div className="p-6 bg-[#0C0E14] border border-white/10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#B01920] text-white">Opção B</span>
                <h3 className="text-base font-bold text-white">GitHub CLI (Mais rápido)</h3>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-[#050608] border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span>Abrir navegador direto:</span>
                    <button
                      onClick={() => copyToClipboard('gh pr create --web')}
                      className="text-slate-400 hover:text-white"
                      title="Copiar"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <code className="text-xs sm:text-sm font-mono text-white block">$ gh pr create --web</code>
                </div>

                <div className="p-3 bg-[#050608] border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span>Ou especificar base e head:</span>
                    <button
                      onClick={() => copyToClipboard('gh pr create --base main --head feat/customer-dashboard')}
                      className="text-slate-400 hover:text-white"
                      title="Copiar"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <code className="text-xs sm:text-sm font-mono text-white block">$ gh pr create --base main --head feat/customer-dashboard</code>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
