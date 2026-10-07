import React from 'react';
import { TerminalBlock } from './TerminalBlock';
import { RefreshCw, GitBranch } from 'lucide-react';

export const BeforeStart: React.FC = () => {
  return (
    <section id="antes-de-comecar" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Passo 1</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Antes de começar
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            O ponto de partida inegociável para qualquer tarefa de desenvolvimento na equipe.
          </p>
        </div>

        {/* 2 Step Terminals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalBlock
            title="1. Sincronize a main mais recente"
            code={`$ git switch main\n$ git pull`}
            fullCopyCode={`git switch main && git pull`}
            note="Sempre comece pela versão mais recente da main. Evite conflitos antes de escrever qualquer código."
            icon={<RefreshCw className="w-4 h-4 text-emerald-400" />}
          />

          <TerminalBlock
            title="2. Crie uma nova branch de tarefa"
            code={`$ git switch -c feat/nome-da-feature`}
            fullCopyCode={`git switch -c feat/nome-da-feature`}
            note="Crie uma branch antes de começar a desenvolver. Nunca desenvolva diretamente na main."
            icon={<GitBranch className="w-4 h-4 text-[#FF4754]" />}
          />
        </div>
      </div>
    </section>
  );
};
