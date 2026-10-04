'use client';

import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { NEXORA_ARTICLES } from '@/data/nexoraData';

export const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              UAE REGULATORY INTELLIGENCE & INSIGHTS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              Corporate Insights.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Thought leadership on 9% UAE Corporate Tax, mainland vs free zone licensing, DIFC holding structures, and GCC market entry.
            </p>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEXORA_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-[#1A1D24] rounded-3xl border border-stone-800 p-6 shadow-xl flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all font-sans"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#121417]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#121417]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                    {art.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-stone-400 block mb-1">{art.date} • {art.readTime}</span>
                <h3 className="text-xl font-serif font-bold text-[#F7F6F2] mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">{art.snippet}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 font-mono text-xs">
                <button
                  onClick={() => alert(`Reading article: ${art.title}`)}
                  className="text-[#D4AF37] font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  <span>Read Insight</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
