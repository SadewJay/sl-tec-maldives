import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Floating Button with Tooltip */}
      <div className="relative">
        {showWhatsappTooltip && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold whitespace-nowrap shadow-xl">
            24/7 Island WhatsApp Hotline
          </div>
        )}
        <a
          href={COMPANY_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowWhatsappTooltip(true)}
          onMouseLeave={() => setShowWhatsappTooltip(false)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 animate-pulse-subtle group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
          </span>
        </a>
      </div>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700 hover:border-orange-500 text-slate-300 hover:text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 text-orange-400" />
        </button>
      )}
    </div>
  );
};
