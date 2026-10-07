import React, { useState, useEffect, useRef } from 'react';
import { searchDatabase, SearchItem } from '../data/searchItems';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery.length === 0
    ? searchDatabase.slice(0, 7)
    : searchDatabase.filter(item => {
        return item.title.toLowerCase().includes(normalizedQuery) ||
               item.cmd.toLowerCase().includes(normalizedQuery) ||
               item.cat.toLowerCase().includes(normalizedQuery) ||
               (item.keywords && item.keywords.some(k => k.includes(normalizedQuery)));
      });

  const handleSelect = (item: SearchItem) => {
    onClose();
    const targetEl = document.querySelector(item.target);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onKeyDownInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#0C0E14] border border-[#B01920]/40 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(176,25,32,0.25)] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-[#FF4754] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={onKeyDownInput}
            placeholder="Digite um comando ou termo... (ex: branch, pr, commit, main)"
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono bg-white/10 border border-white/10 text-slate-400 hover:text-white px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
          {results.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              Nenhum resultado encontrado para "<strong>{query}</strong>"
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={item.title + item.cmd}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                  selectedIndex === idx
                    ? 'bg-[#B01920]/15 border border-[#B01920]/40'
                    : 'bg-white/[0.01] border border-transparent hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex flex-col pr-2">
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span className="text-[11px] font-mono text-slate-400">{item.cat}</span>
                </div>
                <code className="text-xs font-mono text-[#FF4754] truncate max-w-[200px] shrink-0">
                  {item.cmd}
                </code>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-5 py-3 bg-black/40 border-t border-white/10 text-[11px] text-slate-500">
          <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">↑</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">↓</kbd> navegar</span>
          <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">Enter</kbd> selecionar</span>
          <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">ESC</kbd> fechar</span>
        </div>
      </div>
    </div>
  );
};
