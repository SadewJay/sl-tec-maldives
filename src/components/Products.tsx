import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PRODUCTS } from '../data/websiteData';
import { ProductItem } from '../types';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct, onRequestQuote }) => {
  return (
    <section id="products" className="py-20 bg-[#050b17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
              EQUIPMENT CATALOG
            </span>
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Generator Products & Equipment
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High-efficiency power systems built for coastal environments. Certified tropical specifications, soundproof canopies, and OEM components.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#09152e]/60 hover:bg-[#0c1d3f] border border-slate-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-orange-400">
                    {product.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-orange-500 text-white text-[11px] font-black">
                    {product.powerRange}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="font-montserrat font-bold text-lg text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-2 pt-2 border-t border-slate-800/80">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors text-center"
                >
                  View Specs
                </button>
                <button
                  onClick={() => onRequestQuote(product.name)}
                  className="py-2 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => onRequestQuote('General Equipment Inquiry')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-500 font-montserrat font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/10"
          >
            <span>Request Full Product & Spare Parts Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
