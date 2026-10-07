import React from 'react';
import { AlertTriangle, Check, Copy } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const BranchNaming: React.FC = () => {
  const { copyToClipboard } = useToast();

  const branchTypes = [
    { type: 'feat/', title: 'Nova funcionalidade', desc: 'Adiciona novo comportamento, tela ou endpoint ao sistema.', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
    { type: 'fix/', title: 'Correção de bug', desc: 'Corrige falha ou comportamento inesperado já existente.', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
    { type: 'refactor/', title: 'Refatoração', desc: 'Melhoria de código interno sem alterar o comportamento externo.', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { type: 'chore/', title: 'Manutenção', desc: 'Configurações, dependências, build tools ou tarefas rotineiras.', color: 'text-slate-400 bg-slate-500/10 border-slate-500/20' },
    { type: 'hotfix/', title: 'Correção urgente', desc: 'Correção crítica e imediata diretamente ligada à produção.', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { type: 'docs/', title: 'Documentação', desc: 'Atualizações de README, documentação de API ou guias técnicos.', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  ];

  const goodExamples = [
    'feat/customer-dashboard',
    'feat/google-login',
    'fix/mobile-menu',
    'fix/commission-calculation',
    'refactor/hubspot-integration',
    'chore/update-dependencies',
    'hotfix/expired-token',
    'docs/update-readme'
  ];

  const avoidExamples = [
    'teste',
    'final',
    'final-2',
    'ajustes',
    'branch-lucas',
    'nova-feature'
  ];

  return (
    <section id="nomear-branches" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Convenção</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Como nomear branches
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Padrão obrigatório para identificação rápida e rastreabilidade no GitHub.
          </p>
        </div>

        {/* Formula Box */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-[#B01920]/5 border border-[#B01920]/30 rounded-xl mb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400 font-medium">Estrutura padrão:</span>
            <code className="text-base sm:text-lg font-mono font-bold text-[#FF4754] bg-black/40 px-3 py-1 rounded-md border border-[#B01920]/30">
              &lt;type&gt;/&lt;short-description&gt;
            </code>
          </div>
          <span className="text-xs sm:text-sm text-slate-400 font-mono">
            Exemplo: <strong className="text-white">feat/customer-dashboard</strong>
          </span>
        </div>

        {/* Branch Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {branchTypes.map((item) => (
            <div key={item.type} className="p-4 bg-[#0C0E14] border border-white/5 hover:border-white/20 rounded-xl transition-all">
              <span className={`inline-block font-mono font-bold text-sm px-2.5 py-0.5 rounded border mb-2 ${item.color}`}>
                {item.type}
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Good vs Avoid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recommended */}
          <div className="bg-[#0C0E14] border border-white/10 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Check className="w-4 h-4" />
              <span>Exemplos recomendados (clique para copiar)</span>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {goodExamples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => copyToClipboard(ex)}
                  className="flex items-center justify-between p-2.5 bg-white/[0.02] hover:bg-white/[0.07] border border-white/5 hover:border-[#B01920]/40 rounded-lg text-left transition-all group"
                >
                  <code className="text-xs font-mono text-slate-200 group-hover:text-white">{ex}</code>
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Avoid */}
          <div className="bg-[#0C0E14] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 px-4 py-3 bg-rose-500/10 border-b border-rose-500/20 text-rose-400 text-xs font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>Evite nomes genéricos ou pessoais:</span>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {avoidExamples.map((ex) => (
                  <span
                    key={ex}
                    className="font-mono text-xs text-rose-400/90 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded line-through"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-rose-500/[0.04] border-t border-rose-500/10 flex items-center gap-3 text-xs text-slate-300">
              <AlertTriangle className="w-4 h-4 text-[#FF4754] shrink-0" />
              <span>Branches devem ser em <strong>inglês</strong>, <strong>minúsculas</strong> e usar <strong>hífen</strong> entre palavras.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
