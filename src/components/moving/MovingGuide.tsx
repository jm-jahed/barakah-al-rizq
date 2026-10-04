'use client';

import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { MOVING_GUIDES } from '@/data/movingData';

export const MovingGuide: React.FC = () => {
  return (
    <section className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#E87A36] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/30">
              EXPERT MOVING KNOWLEDGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mt-4 font-serif">
              Move smarter.
            </h2>
            <p className="text-base text-stone-300 mt-2">
              Free guides, checklists, and packing techniques from our senior moving concierge team.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#D96B27]" />
            <span className="text-xs font-mono text-stone-300 font-bold uppercase">3 FEATURED GUIDES</span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOVING_GUIDES.map((g) => (
            <div
              key={g.id}
              className="bg-[#292524] rounded-3xl border border-stone-700 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#D96B27]/50 transition-all"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292524] via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#1C1917]/80 text-[#E87A36] backdrop-blur-md border border-stone-700">
                    {g.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-stone-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D96B27]" />
                      {g.readTime}
                    </span>
                    <span>• {g.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-[#E87A36] transition-colors leading-snug">
                    {g.title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {g.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href="#calculator"
                  className="text-xs font-bold text-[#E87A36] hover:text-white flex items-center gap-1.5 group/link"
                >
                  <span>Read Moving Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
