import React, { useState, useEffect } from 'react';
import { GitBranch, Search, Menu, X, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#B01920] to-[#FF4754] z-[1001] transition-all duration-75 shadow-[0_0_10px_rgba(176,25,32,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`sticky top-0 w-full z-50 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#07080B]/95 backdrop-blur-md border-[rgba(176,25,32,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#07080B]/85 backdrop-blur-sm border-white/5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[70px] flex items-center justify-between gap-4">
          
          {/* 1. BRAND LOGO (Left) */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0" aria-label="Freire&CO Tech Solutions Git Guide">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#B01920] to-[#590B0F] border border-white/15 flex items-center justify-center text-white shadow-[0_0_16px_rgba(176,25,32,0.45)] group-hover:shadow-[0_0_22px_rgba(176,25,32,0.7)] transition-all">
              <GitBranch className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.95rem] font-bold tracking-wider text-white flex items-center gap-1.5 leading-tight">
                FREIRE&CO
              </span>
              <span className="text-[0.65rem] font-semibold tracking-widest text-[#FF4754] font-mono leading-none">
                TECH SOLUTIONS
              </span>
            </div>
          </a>

          {/* 2. CENTER NAVIGATION (Grouped & Spacious - Only 5 clean links) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="#antes-de-comecar"
              className="text-slate-400 hover:text-white px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              Começar
            </a>
            <a
              href="#nomear-branches"
              className="text-slate-400 hover:text-white px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              Convenções
            </a>
            <a
              href="#pull-requests"
              className="text-slate-400 hover:text-white px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              Pull Request
            </a>
            <a
              href="#situacoes-comuns"
              className="text-slate-400 hover:text-white px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              Situações
            </a>
            <a
              href="#regras-telles-freire"
              className="text-[#FF707A] hover:text-white px-3 py-1.5 text-sm font-semibold rounded-md hover:bg-[#B01920]/15 transition-colors"
            >
              Regras Freire&CO
            </a>
          </nav>

          {/* 3. RIGHT ACTIONS (Compact Search + Cheat Sheet CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Search Button (Fixed width, never wraps text!) */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2.5 px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#B01920]/50 rounded-lg text-slate-400 hover:text-slate-200 text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap"
              title="Buscar comandos (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#FF4754]" />
              <span className="hidden sm:inline">Buscar...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white/10 border border-white/10 rounded text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {/* Cheat Sheet CTA */}
            <a
              href="#cheat-sheet"
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#B01920] hover:bg-[#D62831] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-[0_0_14px_rgba(176,25,32,0.4)] hover:shadow-[0_0_20px_rgba(176,25,32,0.65)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cheat Sheet</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER (For all items on mobile/tablets) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#07080B]/98 backdrop-blur-xl z-40 lg:hidden border-b border-white/10 p-6 overflow-y-auto">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono px-3 pt-2">Navegação Rápida</span>
            <a href="#antes-de-comecar" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              1. Antes de Começar
            </a>
            <a href="#nomear-branches" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              2. Como Nomear Branches
            </a>
            <a href="#durante-desenvolvimento" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              3. Durante o Desenvolvimento
            </a>
            <a href="#padrao-commits" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              4. Padrão de Commits
            </a>
            <a href="#enviar-branch" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              5. Enviar a Branch
            </a>
            <a href="#pull-requests" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              6. Criar Pull Request
            </a>
            <a href="#pr-checklist" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              7. Checklist de PR
            </a>
            <a href="#code-review" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              8. Code Review
            </a>
            <a href="#depois-do-merge" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              9. Depois do Merge
            </a>
            <a href="#fluxo-completo" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              10. Fluxo Completo
            </a>
            <a href="#situacoes-comuns" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 font-medium">
              11. Situações Comuns
            </a>
            <a href="#regras-telles-freire" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-[#FF4754] bg-[#B01920]/10 border border-[#B01920]/30 font-semibold">
              12. Regras da Freire&CO
            </a>
            <a href="#ia-vibe-coding" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-purple-400 hover:bg-purple-500/10 font-medium">
              13. IA & Vibe Coding
            </a>
            <a href="#cheat-sheet" onClick={closeMobile} className="px-4 py-2.5 rounded-lg text-white bg-[#B01920] font-semibold text-center mt-3">
              ⚡ Acessar Cheat Sheet
            </a>
          </div>
        </div>
      )}
    </>
  );
};
