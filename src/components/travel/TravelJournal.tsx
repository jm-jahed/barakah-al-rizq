'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Eye, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { TRAVEL_ARTICLES_DATA, Article } from '@/data/travelData';

interface TravelJournalProps {
  onSelectArticle: (article: Article) => void;
}

export const TravelJournal: React.FC<TravelJournalProps> = ({ onSelectArticle }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journal" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>EDITORIAL INTELLIGENCE & DESTINATION DISPATCHES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              The AURELIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Travel Journal</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Curated insider guides, Michelin culinary critiques, and luxury travel wisdom tailored for discerning UAE globetrotters.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">Editorial Dispatch</span>
            <span className="text-[11px] text-slate-500">Updated Bi-Weekly</span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TRAVEL_ARTICLES_DATA.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
              onClick={() => onSelectArticle(art)}
              className="p-6 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden group backdrop-blur-md cursor-pointer"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold">
                      {art.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-3">
                  {art.excerpt}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-300">
                  <span className="text-slate-500">By</span> {art.author}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-amber-400 font-bold">
                <span>Read Full Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
