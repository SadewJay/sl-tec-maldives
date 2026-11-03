import React from 'react';
import { Package, ShieldCheck, Wrench, Clock, Truck, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, COMMITMENTS } from '../data/websiteData';

interface ResortCommitmentBannerProps {
  onRequestQuote: (serviceTitle?: string) => void;
}

const commitmentIcons: { [key: string]: React.ElementType } = {
  Wrench,
  ShieldCheck,
  Clock,
  Truck
};

export const ResortCommitmentBanner: React.FC<ResortCommitmentBannerProps> = ({ onRequestQuote }) => {
  return (
    <section className="py-16 bg-[#071022] relative border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Big Yellow/Gold Spare Parts Banner matching Image 1 */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 p-6 sm:p-8 text-slate-900 shadow-2xl relative overflow-hidden border-2 border-yellow-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-lg">
                <Package className="w-9 h-9" />
              </div>
              <div>
                <div className="inline-block px-3 py-0.5 rounded-full bg-slate-900/10 text-slate-900 font-black text-xs uppercase tracking-widest mb-1">
                  100% Authentic OEM Stock
                </div>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-slate-950 uppercase leading-none">
                  Spare Parts Available &bull; Genuine Supply
                </h3>
                <p className="font-bold text-slate-800 text-sm sm:text-base mt-1">
                  Original Parts &bull; Fast Island Delivery &bull; All Major Brands Supported (Cummins, Perkins, CAT, Yanmar, Volvo Penta, Kohler)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onRequestQuote('Genuine Spare Parts Supply')}
                className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-montserrat font-black text-sm shadow-xl transition-all duration-200 hover:scale-105"
              >
                Inquire Spare Parts
              </button>
            </div>
          </div>
        </div>

        {/* 2. Resort Management Partnership Card matching Image 2 */}
        <div className="bg-[#09152e] border-2 border-orange-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Letter / Greetings to Resort Management */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-black text-xs uppercase tracking-wider">
                  Complete Technical Solutions for Resorts
                </span>
                <span className="text-xs font-semibold text-slate-400">🇲🇻 Maldives &bull; 🇱🇰 Sri Lanka</span>
              </div>

              <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-3">
                Dear Resort Management Team,
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Greetings from <strong className="text-orange-400 font-bold">SL TEC - Total Technical Solution!</strong> We are your trusted technical partner across all Maldives islands with <strong className="text-white">28 years of experience</strong> and internationally certified technical engineers.
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6 space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="font-bold text-orange-400 uppercase tracking-wider text-xs mb-1">
                  Resort Core Technical Coverage:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>All Types of Generators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Ship & Transfer Vessel Engines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Panel Boards & Control Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Kitchen Hood & Kitchen Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Industrial Machinery Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Engine & Generator Control Systems</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-montserrat font-black text-sm flex items-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Direct: {COMPANY_INFO.phone}</span>
                </a>

                <button
                  onClick={() => onRequestQuote('Resort Comprehensive Maintenance')}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-montserrat font-bold text-sm transition-colors"
                >
                  Request Resort Proposal
                </button>
              </div>
            </div>

            {/* 4 Commitments Box matching Image 2 */}
            <div className="lg:col-span-5">
              <div className="bg-[#050b17] border border-orange-500/30 rounded-2xl p-6">
                <div className="text-center pb-4 mb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Our 4 Pillars</span>
                  <h4 className="font-montserrat font-black text-xl text-orange-400">
                    OUR COMMITMENTS:
                  </h4>
                </div>

                <div className="space-y-4">
                  {COMMITMENTS.map((com) => {
                    const IconComp = commitmentIcons[com.icon] || ShieldCheck;
                    return (
                      <div key={com.num} className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 text-orange-400">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-montserrat font-bold text-white text-sm">
                            {com.num}. {com.title}
                          </div>
                          <div className="text-xs text-slate-300 leading-relaxed">
                            {com.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
