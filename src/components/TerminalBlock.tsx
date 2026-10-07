import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';

interface TerminalBlockProps {
  title?: string;
  code: string;
  fullCopyCode?: string;
  note?: string;
  icon?: React.ReactNode;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({
  title,
  code,
  fullCopyCode,
  note,
  icon
}) => {
  const { copyToClipboard } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = fullCopyCode || code;
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-[#0C0E14] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all shadow-lg">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {title && (
          <span className="text-xs font-mono text-slate-400 font-medium">
            {title}
          </span>
        )}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border transition-all ${
            copied
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
              : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          title="Copiar comando"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 bg-[#050608] font-mono text-sm leading-relaxed overflow-x-auto text-slate-200">
        <pre className="whitespace-pre">{code}</pre>
      </div>

      {/* Optional Note */}
      {note && (
        <div className="flex items-start gap-2.5 px-4 py-3 bg-white/[0.02] border-t border-white/10 text-xs text-slate-400">
          {icon && <span className="text-[#FF4754] shrink-0 mt-0.5">{icon}</span>}
          <span>{note}</span>
        </div>
      )}
    </div>
  );
};
