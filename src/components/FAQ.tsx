import React, { useState } from 'react';
import { faqItems, FAQItem } from '../data/faqData';
import { HelpCircle, ChevronDown, Search, Check, Copy } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const FAQ: React.FC = () => {
  const { copyToClipboard } = useToast();
  const [activeCategory, setActiveCategory] = useState<'todas' | 'basico' | 'branches' | 'pr' | 'review_ci'>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'git-vs-github': true,
    'commit-vs-push': true
  });

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    faqItems.forEach(item => { allOpen[item.id] = true; });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredItems = faqItems.filter(item => {
    const matchesCat = activeCategory === 'todas' || item.category === activeCategory;
    const matchesSearch = normalizedQuery === '' ||
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B01920]/10 border border-[#B01920]/30 text-[#FF4754] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Dúvidas Frequentes da Equipe
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Respostas práticas e diretas para as dúvidas mais comuns sobre Git, GitHub e o fluxo de trabalho da Freire&CO Tech Solutions.
          </p>
        </div>

        {/* Controls: Search + Categories + Expand/Collapse */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Quick Filter Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar em 32 perguntas... (ex: merge, push, main, PR)"
              className="w-full bg-[#0C0E14] border border-white/10 hover:border-white/20 focus:border-[#B01920]/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Expand/Collapse Toggle */}
          <div className="flex items-center gap-2 self-end md:self-auto text-xs text-slate-400">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              Expandir todas
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              Recolher todas
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'todas', label: `Todas (${faqItems.length})` },
            { id: 'basico', label: 'Conceitos' },
            { id: 'branches', label: 'Branches & Commits' },
            { id: 'pr', label: 'Pull Requests' },
            { id: 'review_ci', label: 'Review, CI & IA' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#B01920] border-[#FF4754] text-white shadow-[0_0_12px_rgba(176,25,32,0.4)]'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Items Grid/Accordion */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-[#0C0E14] border border-white/10 rounded-2xl">
            <p className="text-slate-400 text-sm">
              Nenhuma pergunta encontrada com o termo "<strong>{searchQuery}</strong>".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('todas'); }}
              className="mt-3 text-xs text-[#FF4754] hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredItems.map(item => {
              const isOpen = !!openIds[item.id];
              return (
                <div
                  key={item.id}
                  className={`bg-[#0C0E14] border rounded-xl overflow-hidden transition-all flex flex-col justify-between ${
                    isOpen
                      ? 'border-[#B01920]/40 shadow-lg'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-start justify-between p-4 sm:p-5 text-left text-white font-semibold text-sm cursor-pointer gap-3"
                  >
                    <span className="leading-snug">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform mt-0.5 ${
                        isOpen ? 'rotate-180 text-[#FF4754]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-white/5 text-xs sm:text-sm text-slate-300">
                      <p className="text-slate-300 leading-relaxed mt-3">{item.answer}</p>
                      
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(`${item.question}\n${item.answer}`, 'Resposta copiada!');
                          }}
                          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                          title="Copiar resposta"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
