import React from 'react';
import { GitBranch, GitCommit, GitPullRequest, ArrowRight, CheckCircle2, ShieldCheck, Terminal, BookOpen, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const steps = [
    { num: '01', title: 'Main', desc: 'Código estável', icon: <Layers className="w-4 h-4 text-slate-300" /> },
    { num: '02', title: 'Branch', desc: 'Isolamento', icon: <GitBranch className="w-4 h-4 text-sky-400" /> },
    { num: '03', title: 'Commit', desc: 'Histórico atômico', icon: <GitCommit className="w-4 h-4 text-purple-400" /> },
    { num: '04', title: 'Push', desc: 'Nuvem GitHub', icon: <Terminal className="w-4 h-4 text-amber-400" /> },
    { num: '05', title: 'Pull Request', desc: 'Abertura de PR', icon: <GitPullRequest className="w-4 h-4 text-[#FF4754]" /> },
    { num: '06', title: 'Review', desc: 'Qualidade & Par', icon: <ShieldCheck className="w-4 h-4 text-blue-400" /> },
    { num: '07', title: 'Merge', desc: 'Entrega segura', icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, highlight: true },
  ];

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(176,25,32,0.2)_0%,rgba(176,25,32,0.02)_65%,transparent_80%)] blur-[90px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Official Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B01920]/10 border border-[#B01920]/40 text-[#FF4754] text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_12px_rgba(176,25,32,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#D62831] animate-pulse" />
          <span>Guia Oficial • Freire&CO Tech Solutions</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 max-w-4xl leading-[1.15]">
          Git Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FF4754]">— Freire&CO Tech Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          Um fluxo simples para desenvolver, versionar e entregar código com segurança.
        </p>

        {/* Visual Flow Diagram */}
        <div className="w-full max-w-5xl bg-[#0C0E14]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 text-left">
            Pipeline de Ciclo de Vida
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`flex flex-col items-center p-3.5 rounded-xl border transition-all duration-200 relative ${
                  step.highlight
                    ? 'bg-[#B01920]/15 border-[#B01920]/50 shadow-[0_0_18px_rgba(176,25,32,0.3)]'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <span className="text-[10px] font-mono text-slate-500 font-semibold mb-1">{step.num}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  step.highlight ? 'bg-[#B01920] text-white' : 'bg-white/5'
                }`}>
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-white mb-0.5">{step.title}</span>
                <span className="text-[11px] text-slate-400 text-center leading-tight">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#fluxo-completo"
            className="flex items-center gap-2 px-6 py-3 bg-[#B01920] hover:bg-[#D62831] text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(176,25,32,0.4)] hover:shadow-[0_0_30px_rgba(176,25,32,0.65)] hover:-translate-y-0.5 transition-all"
          >
            <span>Ver fluxo recomendado</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#cheat-sheet"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-slate-200 font-semibold rounded-xl hover:-translate-y-0.5 transition-all"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Consultar Cheat Sheet</span>
          </a>
        </div>
      </div>
    </section>
  );
};
