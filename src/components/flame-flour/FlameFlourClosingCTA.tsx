'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Wheat, Flame } from 'lucide-react';

interface FlameFlourClosingCTAProps {
  onExploreBakery: () => void;
  onBuildBox: () => void;
}

export const FlameFlourClosingCTA: React.FC<FlameFlourClosingCTAProps> = ({
  onExploreBakery,
  onBuildBox
}) => {
  return (
    <section className="py-28 bg-[#090706] border-b border-stone-850 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-amber-600/15 via-orange-950/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-6 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
          <Wheat className="w-3.5 h-3.5" />
          <span>BAKED WITH INTENTION</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-100 tracking-tight leading-tight mb-6">
          Baked With Intention.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          From the first grain of organic flour to the final crackling finish, every detail is crafted by fire and finished by hand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreBakery}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <span>Explore the Bakery</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBuildBox}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-850 border border-amber-700/40 hover:border-amber-500/60 text-stone-200 font-medium text-base transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Build Your Box</span>
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-850/80 text-xs font-mono text-stone-400 flex items-center justify-center gap-4 flex-wrap">
          <span>PROJECT #80 · FLAME & FLOUR BAKERY</span>
          <span>·</span>
          <span>DUBAI & ABU DHABI · UAE</span>
          <span>·</span>
          <span>FICTIONAL CULINARY COMMERCE SHOWCASE</span>
        </div>
      </div>
    </section>
  );
};
