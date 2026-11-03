import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/websiteData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#050b17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Trusted by resort chief engineers, marine fleet captains, and industrial managers across the atolls.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#09152e]/50 border border-slate-800/80 hover:border-orange-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between relative group"
            >
              {/* Quote Watermark Icon */}
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-orange-500/10 transition-colors pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/40"
                />
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm">
                    {item.author}
                  </h4>
                  <div className="text-xs text-orange-400 font-medium">
                    {item.role} &bull; {item.resortOrOrg}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.atoll}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
