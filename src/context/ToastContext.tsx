import React, { createContext, useContext, useState, useCallback } from 'react';

interface ToastContextType {
  showToast: (message: string) => void;
  copyToClipboard: (text: string, customMessage?: string) => Promise<void>;
  toastMessage: string | null;
  isVisible: boolean;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setToastMessage(message);
    setIsVisible(true);

    const id = setTimeout(() => {
      setIsVisible(false);
    }, 2400);
    setTimeoutId(id);
  }, [timeoutId]);

  const copyToClipboard = useCallback(async (text: string, customMessage?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      const displayMsg = customMessage || `Copiado: ${text.length > 32 ? text.slice(0, 32) + '...' : text}`;
      showToast(displayMsg);
    } catch (err) {
      console.error('Falha ao copiar:', err);
      showToast('Erro ao copiar para a área de transferência');
    }
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, copyToClipboard, toastMessage, isVisible }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
