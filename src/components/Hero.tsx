import React from 'react';
import { PhoneCall, ArrowRight, Zap, Ship, Cpu, Package, Settings } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface HeroProps {
  onRequestQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background with Marine Ship Vessel & Industrial Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transform duration-1000"
          style={{
            backgroundImage: `url('/hero-marine.jpg')`
          }}
        />
        {/* Dark radial and linear gradients for sleek contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b17] via-[#050b17]/90 to-[#050b17]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        
        {/* Subtle engineering grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Top Pill Badge matching flyer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Ship className="w-4 h-4 text-orange-400" />
            <span>28+ Years Experience &bull; Ship &amp; Craft All Repairs &bull; Generator Specialist &bull; Internationally Certified</span>
          </div>

          {/* Main Headline with Ship & Craft Repairs & Generators */}
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Reliable Generator &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 block sm:inline">
              Ship &amp; Craft Repair Services
            </span>{' '}
            in Maldives
          </h1>

          {/* Subtitle description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-6 font-normal">
            Your trusted technical partner across all Maldives islands. Specialized in <strong className="text-white font-semibold">marine ship &amp; craft all repairs, propulsion overhauls, auxiliary engines, safari yachts, cargo vessels</strong>, all types of industrial machines, and island resort powerhouses. From major overhauls and synchronizing panels to genuine OEM spare parts delivered rapidly across every atoll.
          </p>

          {/* 5 Core Pillars Pills from Flyer */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-orange-500/20 text-xs text-slate-200">
              <Ship className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-semibold">Ship &amp; Craft All Repairs</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-orange-500/20 text-xs text-slate-200">
              <Zap className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-semibold">All Generators</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-orange-500/20 text-xs text-slate-200">
              <Settings className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-semibold">All Type of Industrial Machine</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-orange-500/20 text-xs text-slate-200">
              <Cpu className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-semibold">Panel Boards &amp; Controls</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-orange-500/20 text-xs text-slate-200">
              <Package className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-semibold">Genuine Spare Parts</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={() => onRequestQuote('Ship Engine & Generator Service')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-montserrat font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Request a Service</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-orange-500/50 text-white font-montserrat font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg"
            >
              <PhoneCall className="w-5 h-5 text-orange-400" />
              <span>Call Hotline: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Key Stat Badges aligned horizontally */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
            <div className="bg-slate-900/40 border border-white/5 rounded-xl p-3.5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
              <div className="text-2xl sm:text-3xl font-black font-montserrat text-white flex items-baseline">
                {COMPANY_INFO.experienceYears}
                <span className="text-orange-500 text-xl font-bold">+</span>
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
                Years Experience
              </div>
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-xl p-3.5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
              <div className="text-2xl sm:text-3xl font-black font-montserrat text-white flex items-baseline justify-center">
                {COMPANY_INFO.islandsCovered}
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
                Islands & Vessels
              </div>
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-xl p-3.5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
              <div className="text-2xl sm:text-3xl font-black font-montserrat text-white flex items-baseline justify-center">
                {COMPANY_INFO.projectsCompleted}
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
                Marine & Power Projects
              </div>
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-xl p-3.5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
              <div className="text-2xl sm:text-3xl font-black font-montserrat text-orange-400 flex items-baseline justify-center">
                24/7
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
                Emergency Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
