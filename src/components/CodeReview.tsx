import React from 'react';
import { ShieldCheck, Bug, FileCode, Lock, CheckCircle2, MessageSquare } from 'lucide-react';

export const CodeReview: React.FC = () => {
  const reviewerPractices = [
    { title: 'Verificar lógica e impacto', desc: 'O código atende aos requisitos sem efeitos colaterais em módulos adjacentes?', icon: <FileCode className="w-4 h-4 text-[#FF4754]" /> },
    { title: 'Procurar regressões', desc: 'Fluxos antigos ou casos de borda podem ter sido quebrados?', icon: <Bug className="w-4 h-4 text-amber-400" /> },
    { title: 'Avaliar legibilidade', desc: 'Nomes de variáveis e funções são claros e autoexplicativos?', icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" /> },
    { title: 'Verificar segurança', desc: 'Sanitização de dados, autorizações e ausência de vazamento de credenciais.', icon: <Lock className="w-4 h-4 text-rose-400" /> },
    { title: 'Validar comportamento esperado', desc: 'O resultado da alteração condiz com as expectativas do produto.', icon: <ShieldCheck className="w-4 h-4 text-sky-400" /> },
    { title: 'Fazer comentários objetivos', desc: 'Comunique-se com empatia e respeito técnico. Foque na solução e no código.', icon: <MessageSquare className="w-4 h-4 text-purple-400" /> }
  ];

  return (
    <section id="code-review" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Cultura de Engenharia</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Code Review
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Colaboração de alta confiança, redução de riscos e aprendizado contínuo.
          </p>
        </div>

        {/* Motto Quote Card */}
        <div className="relative p-8 md:p-10 bg-gradient-to-br from-[#B01920]/15 via-[#0C0E14] to-black border border-[#B01920]/40 rounded-2xl mb-10 shadow-[0_0_25px_rgba(176,25,32,0.2)]">
          <span className="text-6xl text-[#B01920] font-serif opacity-30 absolute top-4 left-6 select-none">“</span>
          <p className="text-xl md:text-2xl text-white font-medium relative z-10 leading-relaxed pl-6">
            O objetivo do review não é encontrar culpados. É reduzir risco e compartilhar conhecimento.
          </p>
        </div>

        {/* Review Flow Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-5 bg-[#0C0E14] border border-white/10 rounded-2xl mb-10">
          <div className="flex flex-col items-center text-center p-3">
            <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center mb-1.5">1</span>
            <span className="text-xs font-bold text-white">Pull Request</span>
            <span className="text-[11px] text-slate-400">Criado com checklist</span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center mb-1.5">2</span>
            <span className="text-xs font-bold text-white">Review</span>
            <span className="text-[11px] text-slate-400">Análise pelo par</span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center mb-1.5">3</span>
            <span className="text-xs font-bold text-white">Ajustes</span>
            <span className="text-[11px] text-slate-400">Se necessário</span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center mb-1.5">4</span>
            <span className="text-xs font-bold text-white">Approval</span>
            <span className="text-[11px] text-slate-400">Aprovado pelo time</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 col-span-2 sm:col-span-1 bg-[#B01920]/20 rounded-xl border border-[#B01920]/40">
            <span className="w-6 h-6 rounded-full bg-[#B01920] text-white font-mono text-xs font-bold flex items-center justify-center mb-1.5">5</span>
            <span className="text-xs font-bold text-white">Merge</span>
            <span className="text-[11px] text-slate-300">Integrado à main</span>
          </div>
        </div>

        {/* Reviewer Practices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewerPractices.map((prac) => (
            <div key={prac.title} className="p-5 bg-[#0C0E14] border border-white/5 hover:border-white/15 rounded-xl transition-all">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                {prac.icon}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{prac.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{prac.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
