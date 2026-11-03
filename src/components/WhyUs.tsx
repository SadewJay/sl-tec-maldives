import React, { useState } from 'react';
import { 
  Clock, 
  Award, 
  ShieldCheck, 
  Truck, 
  ClipboardCheck, 
  CheckCircle2,
  Building2,
  Cpu
} from 'lucide-react';
import { WHY_US_FEATURES, BRANDS, CLIENT_LOGOS, COMPANY_INFO } from '../data/websiteData';

const whyUsIconMap: { [key: string]: React.ElementType } = {
  Clock,
  Award,
  ShieldCheck,
  Truck,
  ClipboardCheck,
  CheckCircle2,
};

export const WhyUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'manufacturers'>('clients');

  return (
    <section id="why-us" className="py-20 bg-[#081226] relative overflow-hidden border-y border-white/5">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and 6 Features */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-orange-500 rounded-full" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
                WHY SL TEC
              </span>
            </div>

            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
              Your Power, Our Priority
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-10">
              In the Maldives, power failure is never just an inconvenience—it halts guest hospitality, disrupts marine transport, and risks costly cold storage loss. We engineer uninterrupted uptime.
            </p>

            {/* 6 Features (2-column grid on md+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_US_FEATURES.map((item, idx) => {
                const IconComponent = whyUsIconMap[item.icon] || ShieldCheck;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-white text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Industrial Image Card with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-orange-500/50 via-slate-800 to-amber-500/30 shadow-2xl shadow-black/80">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-900 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
                  <img
                    src="/technician.jpg"
                    alt="Generator technician performing mechanical overhaul"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#09152e]/90 border border-orange-500/40 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-montserrat font-black text-2xl text-white shadow-lg shrink-0">
                        {COMPANY_INFO.experienceYears}+
                      </div>
                      <div>
                        <div className="text-white font-montserrat font-bold text-base">
                          Years of Proven Leadership
                        </div>
                        <div className="text-xs text-orange-300">
                          Trusted across Maldives & Sri Lanka
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            PARTNERS, CLIENTS & BRAND LOGOS SECTION
            (Updated with original client logos from the user's flyer)
        ══════════════════════════════════════════════════════════ */}
        <div className="mt-20 pt-12 border-t border-slate-800/80">
          
          {/* Section Header with Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="w-4 h-0.5 bg-orange-500 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  TRUSTED EXCELLENCE
                </span>
              </div>
              <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white">
                Prestigious Clients & Supported Manufacturers
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Delivering high-reliability power engineering to armed forces, national banks, telecom giants, and major industries.
              </p>
            </div>

            {/* Interactive Toggle Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shrink-0">
              <button
                onClick={() => setActiveTab('clients')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === 'clients'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Our Clients ({CLIENT_LOGOS.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('manufacturers')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === 'manufacturers'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Engine Makes ({BRANDS.length})</span>
              </button>
            </div>
          </div>

          {/* TAB 1: CLIENT LOGOS (16 original logos cropped from flyer in rounded white tiles) */}
          {activeTab === 'clients' && (
            <div className="animate-fadeIn">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Government Ministries &bull; Armed Forces &bull; Commercial Banks &bull; Telecoms</span>
                <span className="text-orange-400 font-semibold hidden sm:inline">16 Featured Institutional Partners</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
                {CLIENT_LOGOS.map((client, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl bg-white p-2.5 sm:p-3 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 border border-white/20 aspect-square text-center"
                    title={`${client.name} - ${client.category}`}
                  >
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-slate-950/90 text-white p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center pointer-events-none">
                      <span className="font-montserrat font-bold text-[11px] text-white leading-tight mb-1">
                        {client.name}
                      </span>
                      <span className="text-[9px] text-orange-400 leading-tight">
                        {client.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: MANUFACTURER LOGOS */}
          {activeTab === 'manufacturers' && (
            <div className="animate-fadeIn">
              <div className="mb-4 text-xs text-slate-400">
                Official OEM Engine Makes, Alternators & Synchronization System Controllers
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {BRANDS.map((brand, idx) => (
                  <div
                    key={idx}
                    className="py-4 px-3 rounded-2xl bg-slate-900 border border-white/5 hover:border-orange-500/50 flex flex-col items-center justify-center transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
                  >
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-10 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="font-montserrat font-extrabold text-sm sm:text-base tracking-wider text-slate-400 group-hover:text-orange-400 transition-colors">
                        {brand.logoText}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 mt-2 font-semibold group-hover:text-slate-200">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
