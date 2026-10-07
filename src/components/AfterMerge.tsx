import React from 'react';
import { TerminalBlock } from './TerminalBlock';
import { Trash2, RefreshCw } from 'lucide-react';

export const AfterMerge: React.FC = () => {
  return (
    <section id="depois-do-merge" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Finalização</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Depois do merge
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Limpeza local e atualização da máquina após a incorporação na main.
          </p>
        </div>

        {/* 2 Terminals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalBlock
            title="1. Volte para a main e limpe localmente"
            code={`$ git switch main\n$ git pull\n$ git branch -d feat/customer-dashboard`}
            fullCopyCode={`git switch main && git pull && git branch -d feat/customer-dashboard`}
            note="Exclui a branch local mesclada com segurança para manter seu ambiente organizado."
            icon={<RefreshCw className="w-4 h-4 text-emerald-400" />}
          />

          <TerminalBlock
            title="2. Deletar branch remota (opcional)"
            code={`$ git push origin --delete feat/customer-dashboard`}
            fullCopyCode={`git push origin --delete feat/customer-dashboard`}
            note="Normalmente o GitHub também pode deletar a branch automaticamente após o merge na interface."
            icon={<Trash2 className="w-4 h-4 text-rose-400" />}
          />
        </div>

      </div>
    </section>
  );
};
