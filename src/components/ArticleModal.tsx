import React from 'react';
import { X, Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onRequestQuote,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#081329] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/10 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-orange-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-orange-500 text-white text-xs font-bold">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            <span>{article.date}</span>
          </div>
          <span className="text-slate-500">&bull;</span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-4 leading-tight">
          {article.title}
        </h3>

        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="bg-slate-900/50 p-3.5 rounded-xl border border-white/5">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-orange-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">Need Engineering Assistance?</span>
              Our senior marine and electrical engineers can inspect your site.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            Close Guide
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-montserrat font-bold text-xs shadow-lg shadow-orange-500/20 flex items-center gap-2"
          >
            <span>Request Preventive Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
