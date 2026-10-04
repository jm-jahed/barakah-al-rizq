'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, ArrowRight, Flame } from 'lucide-react';

export const EmberwildClosingCTA: React.FC<{ onPlanEscape?: () => void; onExploreStays?: () => void }> = ({
  onPlanEscape,
  onExploreStays
}) => {
  return (
    <section className="py-28 bg-[#080c08] text-stone-100 border-t border-stone-800 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RESERVE YOUR SANCTUARY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-stone-100 mb-6 leading-tight">
          Leave the Ordinary <br />
          <span className="font-serif italic text-amber-400">Behind.</span>
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Your next escape should feel like another world. Discover 24 secluded wilderness retreats across the United Arab Emirates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onPlanEscape}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-950/40"
          >
            <Compass className="w-4 h-4" />
            <span>Plan Your Escape</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreStays}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-stone-200 font-medium text-sm flex items-center justify-center gap-3 transition-colors"
          >
            <span>Explore All 24 Stays</span>
          </button>
        </div>

        <div className="mt-14 text-xs text-stone-500 font-mono">
          EMBERWILD · Luxury Wilderness Stays & Outdoor Experiences · Dubai, UAE
        </div>
      </div>
    </section>
  );
};
