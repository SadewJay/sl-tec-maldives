import React from 'react';
import { Phone, MessageSquare, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface EmergencyBannerProps {
  onRequestQuote: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onRequestQuote }) => {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-14">
      <div className="bg-gradient-to-r from-[#0b172d] via-[#0f1f3d] to-[#0b172d] border border-orange-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Title & Status */}
          <div className="flex items-start sm:items-center gap-4 text-left w-full lg:w-auto">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-orange-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  24/7 Island & Marine Emergency Breakdown Support
                </span>
              </div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white">
                Request For an Urgent Service or Diagnostic
              </h3>
              <p className="text-sm text-slate-300 mt-0.5">
                Immediate engineer dispatch and rapid spare parts delivery across all Maldives atolls, resorts, and marine vessels.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full lg:w-auto shrink-0">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-montserrat font-bold text-sm shadow-lg shadow-orange-500/30 transition-all duration-200 text-center"
            >
              Book Service
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              title="Maldives Emergency Line"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-orange-500/50 text-white font-montserrat font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call MV: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.rawPhoneSL}`}
              title="Sri Lanka Technical Line"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-orange-500/50 text-white font-montserrat font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call LK: +94 77 056 8753</span>
            </a>

            <a
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-montserrat font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
