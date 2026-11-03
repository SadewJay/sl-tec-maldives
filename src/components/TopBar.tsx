import React from 'react';
import { Phone, Clock, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#030712] border-b border-orange-500/20 text-xs py-2 px-4 sm:px-8 text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Notice */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-semibold text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            28+ Years Certified Excellence
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            Powering All Maldives Islands & Resorts
          </span>
        </div>

        {/* Right Contact Quick Links */}
        <div className="flex items-center gap-5 text-slate-300">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>24/7 Emergency Island Support</span>
          </div>
          <a 
            href={`mailto:${COMPANY_INFO.email}`} 
            className="hidden sm:flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            <span>{COMPANY_INFO.email}</span>
          </a>
          <a 
            href={`tel:${COMPANY_INFO.phone}`} 
            className="flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Hotline: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
