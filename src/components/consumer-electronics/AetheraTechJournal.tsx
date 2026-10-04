'use client';

import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, User, Crown } from 'lucide-react';
import { TECH_JOURNAL_ARTICLES, TechJournalArticle, GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraTechJournalProps {
  allProducts: GadgetProduct[];
  onSelectProduct: (product: GadgetProduct) => void;
}

export const AetheraTechJournal: React.FC<AetheraTechJournalProps> = ({
  allProducts,
  onSelectProduct
}) => {
  const [activeArticle, setActiveArticle] = useState<TechJournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Essays & Whitepapers</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              The <span className="font-serif italic text-amber-300">Tech Journal</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-xl">
              Deep architectural essays exploring planar acoustics, spatial computing optics, GaN IV power semiconductors, and tactile ergonomics.
            </p>
          </div>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_JOURNAL_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group rounded-3xl bg-[#0E1015] border border-white/10 hover:border-amber-400/40 p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div>
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-white/50 font-mono mb-3">
                  <span className="text-amber-400 font-semibold">{art.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/65 mt-2.5 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" /> {art.author.split('—')[0]}
                </span>
                <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Full Essay →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setActiveArticle(null)} />

          <div className="relative w-full max-w-4xl bg-[#0E1015] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0B0E]/95 backdrop-blur-md sticky top-0 z-20">
              <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 custom-scrollbar">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="text-xs sm:text-sm text-white/50 font-mono">
                  By {activeArticle.author} • {activeArticle.date}
                </div>
              </div>

              <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <img src={activeArticle.coverImage} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-5 text-sm sm:text-base text-white/80 leading-relaxed font-light">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Related Gadgets in this Essay */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Hardware Instruments Featured in this Research:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeArticle.featuredGadgets.map(id => {
                    const prod = allProducts.find(p => p.id === id);
                    if (!prod) return null;
                    return (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setActiveArticle(null);
                          onSelectProduct(prod);
                        }}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 cursor-pointer group transition-all"
                      >
                        <div className="aspect-square rounded-xl overflow-hidden bg-black/40 mb-2 p-2">
                          <img src={prod.images[0]} alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="text-[10px] font-mono text-white/40 uppercase">{prod.brand}</div>
                        <div className="text-xs font-bold text-white group-hover:text-amber-300 truncate">{prod.name}</div>
                        <div className="text-xs font-mono font-bold text-amber-400 mt-1">AED {prod.price.toLocaleString()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
