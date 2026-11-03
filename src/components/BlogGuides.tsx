import React from 'react';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/websiteData';
import { ArticleItem } from '../types';

interface BlogGuidesProps {
  onSelectArticle: (article: ArticleItem) => void;
  onRequestQuote: () => void;
}

export const BlogGuides: React.FC<BlogGuidesProps> = ({ onSelectArticle, onRequestQuote }) => {
  return (
    <section id="guides" className="py-20 bg-[#081226] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
              KNOWLEDGE BASE
            </span>
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Generator Maintenance Tips & Expert Guides
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Practical technical insights written by our senior marine and electrical power engineers for island facilities.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-[#09152e]/60 hover:bg-[#0c1d3f] border border-slate-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-orange-400">
                    {article.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-medium text-slate-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Read Full Article
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-500 font-montserrat font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/10"
          >
            <span>Need Specialized Engineering Advice? Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
