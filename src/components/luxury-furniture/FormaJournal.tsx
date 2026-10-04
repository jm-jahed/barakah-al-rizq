'use client';

import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, User } from 'lucide-react';
import { JOURNAL_ESSAYS, JournalEssay, FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaJournalProps {
  allProducts?: FurnitureProduct[];
  onSelectProduct: (product: FurnitureProduct) => void;
}

export const FormaJournal: React.FC<FormaJournalProps> = ({
  allProducts = ALL_FURNITURE_PRODUCTS,
  onSelectProduct
}) => {
  const [activeEssay, setActiveEssay] = useState<JournalEssay | null>(null);

  return (
    <section id="journal" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12110F] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Architectural Essays</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              The <span className="italic text-[#E6AF73]">Journal</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              Essays on interior architecture, tactile acoustics, Mediterranean stones, and bespoke UAE villa commissions.
            </p>
          </div>
        </div>

        {/* 3 Essays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ESSAYS.map((essay) => (
            <div
              key={essay.id}
              onClick={() => setActiveEssay(essay)}
              className="group rounded-3xl bg-[#171513] border border-[#2F2B26] hover:border-[#E6AF73]/40 p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6">
                  <img
                    src={essay.coverImage}
                    alt={essay.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-[#A8A096] font-mono mb-3">
                  <span className="text-[#E6AF73] font-semibold">{essay.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {essay.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F5F2EB] group-hover:text-[#E6AF73] transition-colors font-serif leading-snug">
                  {essay.title}
                </h3>
                <p className="text-xs text-[#A8A096] mt-2.5 line-clamp-3 leading-relaxed font-light">
                  {essay.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#24221F] flex items-center justify-between">
                <span className="text-xs text-[#7A746C] font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E6AF73]" /> {essay.author.split('—')[0]}
                </span>
                <span className="text-xs font-semibold text-[#E6AF73] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Essay →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeEssay && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setActiveEssay(null)} />

          <div className="relative w-full max-w-4xl bg-[#171513] border border-[#3A352F] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C2926] bg-[#12110F]/95 backdrop-blur-md sticky top-0 z-20">
              <span className="text-xs font-mono text-[#E6AF73] uppercase font-semibold">
                {activeEssay.category} • {activeEssay.readTime}
              </span>
              <button
                onClick={() => setActiveEssay(null)}
                className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 custom-scrollbar">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F2EB] leading-tight font-serif">
                  {activeEssay.title}
                </h2>
                <div className="text-xs sm:text-sm text-[#A8A096] font-mono">
                  By {activeEssay.author} • {activeEssay.date}
                </div>
              </div>

              <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-black/40 border border-[#2C2926]">
                <img src={activeEssay.coverImage} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-5 text-sm sm:text-base text-[#C5BDB5] leading-relaxed font-light">
                {activeEssay.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-[#2C2926] space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6AF73] font-bold">
                  Featured Works in this Architectural Case:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeEssay.featuredProductIds.map(id => {
                    const prod = allProducts.find(p => p.id === id);
                    if (!prod) return null;
                    return (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setActiveEssay(null);
                          onSelectProduct(prod);
                        }}
                        className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#E6AF73]/40 cursor-pointer group transition-all"
                      >
                        <div className="aspect-square rounded-xl overflow-hidden bg-black/40 mb-2">
                          <img src={prod.images[0]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="text-[10px] font-mono text-[#A8A096] uppercase">{prod.material}</div>
                        <div className="text-xs font-bold text-[#F5F2EB] group-hover:text-[#E6AF73] truncate font-serif">{prod.name}</div>
                        <div className="text-xs font-mono font-bold text-[#E6AF73] mt-1">AED {prod.price.toLocaleString()}</div>
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
