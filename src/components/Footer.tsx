import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/websiteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-orange-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-orange-500/20 bg-white/10 shrink-0 border border-white/10">
                <img src="/logo.png" alt="SL TEC Total Technical Solution" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-montserrat font-black text-xl text-white tracking-tight">
                  SL<span className="text-orange-500">TEC</span>
                </span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Total Technical Solution
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              With 28 years of engineering excellence, SL TEC is the Maldives’ premier technical partner for resort power plants, commercial marine fleets, industrial machinery, and genuine generator spare parts.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-orange-400 shrink-0" />
              <div className="text-[11px] text-slate-300">
                <span className="font-bold text-white block">Official Technical Partner</span>
                Emergency marine & land generator support across all atolls.
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Generator Catalog
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Technical Guides
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-400 transition-colors block line-clamp-1">
                    &bull; {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors block">
                  &bull; 24/7 Breakdown Rapid Mobilization
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors block">
                  &bull; OEM Spare Parts & Filter Kits
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Atoll Support (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4">
              Atoll Support
            </h4>
            <div className="space-y-3 text-xs sm:text-sm mb-6">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-bold text-white">Call: {COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Boduthakurufaanu Magu, Malé, Republic of Maldives</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>24/7 Emergency Support Hotline</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {/* Direct hotline button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="block w-full py-2.5 px-4 rounded-xl bg-orange-500/10 border border-orange-500/40 text-orange-400 hover:bg-orange-500 hover:text-white font-montserrat font-bold text-xs text-center transition-all duration-200"
            >
              Emergency Dispatch: 7370267
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tags */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center md:text-left">
            &copy; 2025 SL TEC – Total Technical Solution. All rights reserved. Powering Maldives &bull; Every Island 🇲🇻
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-slate-400 font-medium">
            <span>#SLTEC</span>
            <span>#MaldivesGenerators</span>
            <span>#MarineService</span>
            <span>#ResortEngineering</span>
            <span>#SpareParts</span>
            <span>#7370267</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
