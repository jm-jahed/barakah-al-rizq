'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, X } from 'lucide-react';
import { AUREN_ARTICLES, AurenArticle } from '@/data/aurenData';

export const InsightsSection: React.FC = () => {
  const [selectedArticleModal, setSelectedArticleModal] = useState<AurenArticle | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              EDITORIAL WEALTH BRIEFINGS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
              Private Wealth Insights.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Thought leadership analyzing multi-generational wealth transfer, DIFC/ADGM entity structures, and business exit liquidity.
            </p>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUREN_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-[#1A1D1B] rounded-3xl border border-stone-800 p-6 shadow-xl flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all font-sans"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#080A09]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#080A09]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                    {art.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-stone-400 block mb-1">{art.date} • {art.readTime}</span>
                <h3 className="text-xl font-serif font-bold text-[#F8F6F0] mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">{art.summary}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 font-mono text-xs">
                <button
                  onClick={() => setSelectedArticleModal(art)}
                  className="text-[#D4AF37] font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  <span>Read Editorial Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1A1D1B] border border-stone-700 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative font-sans text-stone-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticleModal(null)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#080A09] border border-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#D4AF37]">
                <BookOpen className="w-4 h-4" />
                <span>PRIVATE WEALTH BRIEFING • {selectedArticleModal.category}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#F8F6F0] mb-2">{selectedArticleModal.title}</h3>
              <span className="text-[10px] font-mono text-stone-400 block mb-6">{selectedArticleModal.date} • {selectedArticleModal.readTime}</span>

              <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-[#080A09]">
                <img src={selectedArticleModal.image} alt={selectedArticleModal.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">
                {selectedArticleModal.content}
              </p>

              <div className="pt-4 border-t border-stone-800 flex justify-end">
                <button
                  onClick={() => setSelectedArticleModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase"
                >
                  Close Briefing
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
