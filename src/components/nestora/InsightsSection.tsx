'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, X } from 'lucide-react';
import { NESTORA_ARTICLES, NestoraArticle } from '@/data/nestoraData';

export const InsightsSection: React.FC = () => {
  const [selectedArticleModal, setSelectedArticleModal] = useState<NestoraArticle | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              LANDLORD & PROPERTY INSIGHTS JOURNAL
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
              Property Advisory Journal.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Thought leadership analyzing RERA Rental Index rules, short-term DTCM yields, tenant background checks, and Ejari compliance.
            </p>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NESTORA_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-[#0C2D31] rounded-3xl border border-stone-800 p-6 shadow-xl flex flex-col justify-between group hover:border-[#C5A059]/40 transition-all font-sans"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#082023]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#082023]/90 text-[#C5A059] border border-[#C5A059]/30 backdrop-blur-md">
                    {art.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-stone-400 block mb-1">{art.date} • {art.readTime}</span>
                <h3 className="text-xl font-serif font-bold text-[#F4EFE6] mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">{art.summary}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 font-mono text-xs">
                <button
                  onClick={() => setSelectedArticleModal(art)}
                  className="text-[#C5A059] font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  <span>Read Landlord Guide</span>
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
              className="bg-[#0C2D31] border border-stone-700 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative font-sans text-stone-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticleModal(null)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#082023] border border-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#C5A059]">
                <BookOpen className="w-4 h-4" />
                <span>LANDLORD ADVISORY JOURNAL • {selectedArticleModal.category}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#F4EFE6] mb-2">{selectedArticleModal.title}</h3>
              <span className="text-[10px] font-mono text-stone-400 block mb-6">{selectedArticleModal.date} • {selectedArticleModal.readTime}</span>

              <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-[#082023]">
                <img src={selectedArticleModal.image} alt={selectedArticleModal.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">
                {selectedArticleModal.content}
              </p>

              <div className="pt-4 border-t border-stone-800 flex justify-end">
                <button
                  onClick={() => setSelectedArticleModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
                >
                  Close Article
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
