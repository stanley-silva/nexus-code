import React, { useState } from 'react';
import { cheatSheetItems } from '../data/cheatSheetItems';
import { Copy, BookOpen } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const CheatSheet: React.FC = () => {
  const { copyToClipboard } = useToast();
  const [activeFilter, setActiveFilter] = useState<'all' | 'branch' | 'sync' | 'commit' | 'pr'>('all');

  const filteredItems = activeFilter === 'all'
    ? cheatSheetItems
    : cheatSheetItems.filter(item => item.category === activeFilter);

  return (
    <section id="cheat-sheet" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF4754]">Referência Direta</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-[#B01920]" />
            <span>Cheat Sheet Rápido</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Consulta instantânea com cópia em um clique para o seu terminal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'Todos os comandos' },
            { id: 'branch', label: 'Branches' },
            { id: 'sync', label: 'Sincronização' },
            { id: 'commit', label: 'Commits' },
            { id: 'pr', label: 'Pull Request' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#B01920] border-[#FF4754] text-white shadow-[0_0_15px_rgba(176,25,32,0.4)]'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="p-4 bg-[#0C0E14] border border-white/10 hover:border-white/20 rounded-xl flex flex-col justify-between transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-[#FF4754] bg-[#B01920]/10 border border-[#B01920]/20 px-2 py-0.5 rounded">
                  {item.categoryLabel}
                </span>
                <span className="text-xs font-semibold text-white">{item.action}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#050608] border border-white/10 rounded-lg">
                <code className="text-xs sm:text-sm font-mono text-slate-200 truncate mr-2">{item.command}</code>
                <button
                  onClick={() => copyToClipboard(item.command)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors shrink-0"
                  title="Copiar comando"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
