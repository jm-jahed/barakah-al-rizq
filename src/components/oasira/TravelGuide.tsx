'use client';

import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { OASIRA_ARTICLES } from '@/data/oasiraData';

export const TravelGuide: React.FC = () => {
  return (
    <section id="guide" className="py-20 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              UAE EDITORIAL TRAVEL JOURNAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAF6EE] mt-3">
              Staycation Travel Guide.
            </h2>
            <p className="text-xs text-stone-400 font-mono mt-1">
              Curated insider articles on UAE beach resorts, mountain hideaways, and romantic weekend escapes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OASIRA_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-[#0F382C] rounded-3xl border border-stone-800 p-6 shadow-xl flex flex-col justify-between group hover:border-[#D4B382]/40 transition-all"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#0A2920]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#0A2920]/80 text-[#D4B382] border border-[#D4B382]/30 backdrop-blur-md">
                    {art.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-stone-400 block mb-1">{art.date} • {art.readTime}</span>
                <h3 className="text-xl font-serif font-bold text-white mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">{art.snippet}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 font-mono text-xs">
                <button
                  onClick={() => alert(`Reading article: ${art.title}`)}
                  className="text-[#D4B382] font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  <span>Read Article</span>
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
