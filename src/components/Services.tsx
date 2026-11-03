import React from 'react';
import { 
  Wrench, 
  Anchor, 
  Cpu, 
  Settings, 
  Flame, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/websiteData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

const iconMap: { [key: string]: React.ElementType } = {
  Wrench,
  Anchor,
  Cpu,
  Settings,
  Flame,
  Activity,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService, onRequestQuote }) => {
  return (
    <section id="services" className="py-20 bg-[#050b17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
              CORE CAPABILITIES
            </span>
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            After-Sales Services We Offer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Engineering excellence tailored for tropical marine environments. 
            From preventive checks to complex electronic diagnostics and major engine overhauls.
          </p>
        </div>

        {/* 6 Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="group relative bg-[#09152e]/60 hover:bg-[#0c1d3f] border border-slate-800/80 hover:border-orange-500/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon with orange glow */}
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Link */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-400 group-hover:text-orange-300 transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onRequestQuote(service.title)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 hover:bg-orange-500/20 text-slate-300 hover:text-orange-300 transition-colors"
                  >
                    Book This
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA Button */}
        <div className="text-center">
          <button
            onClick={() => onRequestQuote()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-500 font-montserrat font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/10"
          >
            <span>Inquire About Custom Engineering Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
