import React, { useState, useEffect } from 'react';
import { ToastProvider } from './context/ToastContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeforeStart } from './components/BeforeStart';
import { BranchNaming } from './components/BranchNaming';
import { Development } from './components/Development';
import { CommitStandards } from './components/CommitStandards';
import { PushBranch } from './components/PushBranch';
import { PullRequest } from './components/PullRequest';
import { PRChecklist } from './components/PRChecklist';
import { CodeReview } from './components/CodeReview';
import { AfterMerge } from './components/AfterMerge';
import { FullFlow } from './components/FullFlow';
import { CommonSituations } from './components/CommonSituations';
import { Rules } from './components/Rules';
import { AIGuidelines } from './components/AIGuidelines';
import { CheatSheet } from './components/CheatSheet';
import { FAQ } from './components/FAQ';
import { Footer, Toast } from './components/Toast';
import { SearchModal } from './components/SearchModal';
import { ArrowUp } from 'lucide-react';

export const AppContent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-200 selection:bg-[#B01920] selection:text-white font-sans">
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      
      <main>
        <Hero />
        <BeforeStart />
        <BranchNaming />
        <Development />
        <CommitStandards />
        <PushBranch />
        <PullRequest />
        <PRChecklist />
        <CodeReview />
        <AfterMerge />
        <FullFlow />
        <CommonSituations />
        <Rules />
        <AIGuidelines />
        <CheatSheet />
        <FAQ />
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Toast />

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#11141C] border border-white/10 text-white hover:bg-[#B01920] hover:border-[#FF4754] shadow-lg hover:shadow-[0_0_20px_rgba(176,25,32,0.5)] transition-all cursor-pointer"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
