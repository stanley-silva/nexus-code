import React from 'react';
import { TerminalBlock } from './TerminalBlock';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

export const PushBranch: React.FC = () => {
  return (
    <section id="enviar-branch" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Publicação</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Enviar a branch
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Publique seu progresso no repositório remoto do GitHub com segurança.
          </p>
        </div>

        {/* 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalBlock
            title="Primeiro push (criação remota)"
            code={`$ git push -u origin feat/customer-dashboard`}
            fullCopyCode={`git push -u origin feat/customer-dashboard`}
            note="Na primeira vez, envie a branch para o GitHub e configure o upstream com a flag -u."
            icon={<UploadCloud className="w-4 h-4 text-[#FF4754]" />}
          />

          <TerminalBlock
            title="Pushes seguintes da mesma branch"
            code={`$ git push`}
            fullCopyCode={`git push`}
            note="Após configurar o upstream com -u, basta digitar apenas git push nas próximas vezes."
            icon={<CheckCircle2 className="w-4 h-4 text-emerald-400" />}
          />
        </div>

      </div>
    </section>
  );
};
