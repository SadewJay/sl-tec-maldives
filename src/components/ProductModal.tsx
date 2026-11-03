import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#081329] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/10 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-orange-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left: Product Image */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-xs font-bold text-orange-400">
                {product.category}
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-orange-500 text-white text-xs font-black">
                {product.powerRange}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-slate-300">
              <span className="font-bold text-white block mb-0.5">Nationwide Island Logistics</span>
              Speedboat and air-cargo parts delivery across all 26 natural atolls.
            </div>
          </div>

          {/* Right: Technical Specifications */}
          <div className="md:col-span-7">
            <h3 className="font-montserrat font-black text-2xl text-white mb-2">
              {product.name}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Specs Table */}
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-orange-400 mb-2">
              Technical Specifications:
            </h4>
            <div className="space-y-1.5 mb-4 text-xs">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between py-1.5 px-3 rounded-lg bg-slate-900/80 border border-white/5">
                  <span className="text-slate-400">{key}:</span>
                  <span className="font-semibold text-slate-200">{val}</span>
                </div>
              ))}
            </div>

            {/* Features list */}
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-orange-400 mb-2">
              Key Features:
            </h4>
            <div className="space-y-1 mb-6 text-xs text-slate-300">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(product.name);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-montserrat font-bold text-xs shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                <span>Request Price & Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
