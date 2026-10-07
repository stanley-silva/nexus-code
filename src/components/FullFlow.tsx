import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const FullFlow: React.FC = () => {
  const { copyToClipboard } = useToast();
  const [copied, setCopied] = useState(false);

  const fullScript = `# 1. Atualizar e criar a branch de trabalho
git switch main
git pull
git switch -c feat/customer-dashboard

# 2. Desenvolver suas mudanças e commitar
git status
git add .
git commit -m "feat: add customer dashboard"

# 3. Enviar para o GitHub e criar o Pull Request
git push -u origin feat/customer-dashboard
gh pr create --web

# 4. Depois do merge aprovado no GitHub:
git switch main
git pull
git branch -d feat/customer-dashboard`;

  const handleCopy = async () => {
    await copyToClipboard(fullScript, 'Fluxo completo copiado com sucesso!');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="fluxo-completo" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Script Mestre</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Fluxo completo
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Copie toda a sequência operacional de uma tarefa do início ao fim com um único clique.
          </p>
        </div>

        {/* Master Terminal Box */}
        <div className="bg-[#0C0E14] border border-[#B01920]/40 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(176,25,32,0.15)]">
          <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#FF4754]" />
                bash — Git Workflow Completo
              </span>
            </div>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                copied
                  ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                  : 'bg-[#B01920] hover:bg-[#D62831] text-white shadow-[0_0_15px_rgba(176,25,32,0.4)]'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Fluxo copiado!' : 'Copiar fluxo completo'}</span>
            </button>
          </div>

          <div className="p-6 bg-[#050608] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-200">
            <pre className="whitespace-pre">
              <span className="text-slate-500"># 1. Atualizar e criar a branch de trabalho</span>{'\n'}
              <span className="text-white font-medium">git switch main</span>{'\n'}
              <span className="text-white font-medium">git pull</span>{'\n'}
              <span className="text-white font-medium">git switch -c feat/customer-dashboard</span>{'\n\n'}
              <span className="text-slate-500"># 2. Desenvolver suas mudanças e commitar</span>{'\n'}
              <span className="text-white font-medium">git status</span>{'\n'}
              <span className="text-white font-medium">git add .</span>{'\n'}
              <span className="text-white font-medium">git commit -m "feat: add customer dashboard"</span>{'\n\n'}
              <span className="text-slate-500"># 3. Enviar para o GitHub e criar o Pull Request</span>{'\n'}
              <span className="text-white font-medium">git push -u origin feat/customer-dashboard</span>{'\n'}
              <span className="text-[#38BDF8] font-medium">gh pr create --web</span>{'\n\n'}
              <span className="text-slate-500"># 4. Depois do merge aprovado no GitHub:</span>{'\n'}
              <span className="text-white font-medium">git switch main</span>{'\n'}
              <span className="text-white font-medium">git pull</span>{'\n'}
              <span className="text-white font-medium">git branch -d feat/customer-dashboard</span>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
