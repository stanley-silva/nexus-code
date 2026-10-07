import React from 'react';
import { Bot, Check, ShieldCheck, Eye, Layers, SplitSquareVertical } from 'lucide-react';

export const AIGuidelines: React.FC = () => {
  const bestPractices = [
    { title: 'Ler o diff linha a linha', desc: 'Nunca aceite mudanças cegamente. Verifique se a IA não alterou arquivos desnecessários.', icon: <Eye className="w-4 h-4 text-purple-400" /> },
    { title: 'Testar funcionalidade na prática', desc: 'Execute localmente. Valide os fluxos reais no navegador ou terminal antes de comitar.', icon: <Check className="w-4 h-4 text-emerald-400" /> },
    { title: 'Verificar dependências e segurança', desc: 'Inspecione pacotes instalados por alucinação e verifique se não há vulnerabilidades.', icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
    { title: 'Evitar PRs gigantes gerados de uma vez', desc: 'Não gere módulos inteiros sem supervisão. Mantenha os PRs compactos e auditáveis.', icon: <Layers className="w-4 h-4 text-amber-400" /> },
    { title: 'Fatiar tarefas na IA', desc: 'Peça para a IA trabalhar em incrementos menores: uma função ou componente por vez.', icon: <SplitSquareVertical className="w-4 h-4 text-sky-400" /> },
    { title: 'Compreender antes de comitar', desc: 'Se você não consegue explicar como o código gerado funciona, não o envie para review.', icon: <Bot className="w-4 h-4 text-purple-400" /> },
  ];

  const aiFlow = [
    'Prompt', 'Código gerado', 'Developer review', 'Tests', 'Branch', 'Pull Request', 'Code Review', 'Main'
  ];

  return (
    <section id="ia-vibe-coding" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">Inteligência Artificial</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            IA & Vibe Coding
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Como acelerar o desenvolvimento com IA sem abrir mão do controle de qualidade e da segurança.
          </p>
        </div>

        {/* Hero Card */}
        <div className="p-8 md:p-10 bg-gradient-to-br from-purple-950/30 via-[#0C0E14] to-black border border-purple-500/30 rounded-2xl text-center mb-10 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Princípio Central</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            “IA acelera o desenvolvimento. Não substitui validação.”
          </h3>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Você é 100% responsável pelo código que a IA produz em seu nome.
          </p>
        </div>

        {/* AI Flow Strip */}
        <div className="p-4 sm:p-5 bg-[#0C0E14] border border-white/10 rounded-2xl mb-10 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {aiFlow.map((step, idx) => (
              <React.Fragment key={step}>
                <div className={`px-3 py-2 rounded-lg text-xs font-medium text-center shrink-0 ${
                  step === 'Developer review'
                    ? 'bg-purple-500/25 border border-purple-500/40 text-purple-200 font-bold'
                    : step === 'Main'
                    ? 'bg-[#B01920] text-white font-bold'
                    : 'bg-white/5 text-slate-300'
                }`}>
                  {step}
                </div>
                {idx < aiFlow.length - 1 && (
                  <span className="text-slate-600 text-xs shrink-0">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Best Practices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bestPractices.map((bp) => (
            <div key={bp.title} className="p-5 bg-[#0C0E14] border border-white/5 hover:border-purple-500/30 rounded-xl transition-all">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                {bp.icon}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{bp.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{bp.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
