import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

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

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Core Engineering Capability</span>
        </div>

        <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-4">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        <div className="mb-6">
          <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-orange-400 mb-3">
            What's Included in This Service:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-orange-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">28 Years Experience Guaranteed</span>
              Factory-trained engineers mobilized to any atoll in the Maldives.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-montserrat font-bold text-sm shadow-lg shadow-orange-500/20 flex items-center gap-2"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
