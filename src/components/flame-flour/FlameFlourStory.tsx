'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Wheat } from 'lucide-react';

export const FlameFlourStory: React.FC = () => {
  return (
    <section className="py-28 bg-[#090706] border-b border-stone-850 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Background warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-6 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
          <Wheat className="w-3.5 h-3.5" />
          <span>THE BAKER MANIFESTO</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-stone-100 tracking-tight leading-tight mb-8">
          It starts with flour.
        </h2>

        <div className="space-y-6 text-base sm:text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
          <p>A measured pour.</p>
          <p className="text-stone-300">A patient fermentation.</p>
          <p>A hand shaping the dough with quiet intention.</p>
          <p className="text-amber-300 font-serif italic">A furnace of refractory heat.</p>
          <p className="text-stone-200">A crackling crust that sings as it cools.</p>
          <p>A table waiting for morning bread.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-850/80 inline-block">
          <div className="text-2xl sm:text-3xl font-serif tracking-wide text-stone-100 uppercase">
            THIS IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">FLAME & FLOUR.</span>
          </div>
          <p className="text-xs font-mono text-stone-400 mt-2">
            Alserkal Avenue Artisan District · Dubai, UAE
          </p>
        </div>
      </div>
    </section>
  );
};
