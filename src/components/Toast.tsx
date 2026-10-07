import React from 'react';
import { useToast } from '../context/ToastContext';
import { Check } from 'lucide-react';

export const Toast: React.FC = () => {
  const { isVisible, toastMessage } = useToast();

  if (!isVisible || !toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[3000] flex items-center gap-2.5 px-4 py-3 bg-[#11141C] border border-[#B01920]/50 rounded-xl text-white text-xs sm:text-sm font-medium shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(176,25,32,0.3)] animate-slide-up">
      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#050608] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-bold tracking-widest text-white uppercase font-mono">
            FREIRE&CO &bull; TECH SOLUTIONS
          </span>
          <p className="text-xs text-slate-400 mt-1">
            Guia interno de boas práticas, padronização e fluxo Git/GitHub.
          </p>
        </div>
        <div className="text-xs font-mono text-slate-500">
          Desenvolva com calma. Entregue com segurança.
        </div>
      </div>
    </footer>
  );
};
