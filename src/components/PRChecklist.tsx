import React, { useState, useEffect } from 'react';
import { checklistItemsData } from '../data/cheatSheetItems';
import { CheckSquare, RotateCcw } from 'lucide-react';

export const PRChecklist: React.FC = () => {
  const STORAGE_KEY = 'telles_freire_pr_checklist';

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
    } catch (e) {
      console.error(e);
    }
  }, [checkedItems]);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => {
    setCheckedItems({});
    localStorage.removeItem(STORAGE_KEY);
  };

  const total = checklistItemsData.length;
  const count = Object.values(checkedItems).filter(Boolean).length;
  const percentage = Math.round((count / total) * 100);

  return (
    <section id="pr-checklist" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Qualidade</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Pull Request checklist
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Antes de solicitar review, valide cada um dos itens abaixo com rigor.
          </p>
        </div>

        {/* Interactive Card */}
        <div className="p-6 md:p-8 bg-[#0C0E14] border border-white/10 rounded-2xl shadow-xl">
          {/* Top Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-[#FF4754]" />
                <span><strong className="text-[#FF4754]">{count}</strong> de {total} itens validados</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {count === total ? (
                  <span className="text-emerald-400 font-medium">🎉 Tudo pronto! Seu Pull Request está excelente para review.</span>
                ) : count > 0 ? (
                  <span className="text-amber-400 font-medium">Em andamento ({percentage}% validado). Conclua todas as verificações.</span>
                ) : (
                  <span>Marque os itens ao inspecionar suas alterações locais.</span>
                )}
              </p>
            </div>

            <button
              onClick={resetAll}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Resetar checklist</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-[#B01920] to-emerald-400 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Items Grid */}
          <div className="space-y-2">
            {checklistItemsData.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <label
                  key={item.id}
                  className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                    isChecked
                      ? 'bg-emerald-500/[0.04] border-emerald-500/30'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(item.id)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                    isChecked
                      ? 'bg-[#B01920] border-[#FF4754] text-white'
                      : 'border-white/20 bg-white/5'
                  }`}>
                    {isChecked && (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm transition-all ${
                    isChecked ? 'text-white line-through opacity-70' : 'text-slate-200'
                  }`}>
                    {item.text}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
