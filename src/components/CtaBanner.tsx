import React from 'react';
import { Phone, ArrowRight, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface CtaBannerProps {
  onRequestQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
      {/* Decorative concentric background rings */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border-[30px] border-white/10 pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full border-[25px] border-white/10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5 fill-white" />
          <span>Immediate Islandwide Dispatch</span>
        </div>

        {/* Headline */}
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
          Need Help with Your Generator System?
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Speak directly with our senior power engineers today for rapid on-site troubleshooting, spare parts sourcing, or customized preventive maintenance agreements.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-orange-600 font-montserrat font-black text-sm sm:text-base shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-orange-600" />
            <span>Call MV: {COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.rawPhoneSL}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-orange-600 font-montserrat font-black text-sm sm:text-base shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-orange-600" />
            <span>Call LK: +94 77 056 8753</span>
          </a>

          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-orange-700/40 hover:bg-orange-700/60 border-2 border-white/80 text-white font-montserrat font-bold text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Request Instant Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
