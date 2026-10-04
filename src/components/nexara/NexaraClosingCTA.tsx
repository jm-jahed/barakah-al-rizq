'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ShieldCheck, ArrowRight, Trophy } from 'lucide-react';

export const NexaraClosingCTA: React.FC<{ onExploreGames?: () => void; onEnterArena?: () => void }> = ({
  onExploreGames,
  onEnterArena
}) => {
  return (
    <section className="py-28 bg-[#07090e] text-slate-100 border-t border-slate-800 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>JOIN THE NEXUS</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-white mb-6 uppercase">
          The Next Level <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Is Yours.</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Discover your world. Build your identity. Find your competition across 24 connected titles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onEnterArena}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-violet-950/50"
          >
            <Trophy className="w-4 h-4 text-slate-950" />
            <span>Enter NEXARA</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreGames}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm flex items-center justify-center gap-3 transition-colors"
          >
            <span>Explore All 24 Games</span>
          </button>
        </div>

        <div className="mt-14 text-xs text-slate-500 font-mono">
          NEXARA · The Next Generation Gaming Universe · Dubai Esports Node
        </div>
      </div>
    </section>
  );
};
