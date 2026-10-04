'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, Activity, Star, ShieldCheck, Award, Gamepad2, Swords } from 'lucide-react';

export const NexaraPlayerProfile: React.FC = () => {
  const currentXP = 7840;
  const targetXP = 10000;
  const xpPercent = Math.round((currentXP / targetXP) * 100);

  return (
    <section className="py-20 bg-[#0a0d18] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PLAYER PROGRESSION & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Your Player <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Identity</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Every match played across the NEXARA universe earns unified XP, cosmetic tokens, and global competitive standing.
          </p>
        </div>

        {/* Player Profile Hero Card */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Avatar & Identifiers */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl p-1 bg-gradient-to-tr from-cyan-500 via-violet-500 to-fuchsia-500 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt="Player Avatar"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-lg bg-violet-600 border border-violet-400 text-white font-mono text-xs font-bold shadow-lg">
                  LVL 42
                </span>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-mono">VOIDRUNNER_77</h3>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">#NEX1</span>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center justify-center sm:justify-start gap-3">
                  <span className="text-fuchsia-400 font-bold">Apex Grandmaster</span>
                  <span>•</span>
                  <span>Rank #1 Global</span>
                  <span>•</span>
                  <span>Dubai, UAE</span>
                </div>

                {/* Level Progress Bar */}
                <div className="mt-4 w-full sm:w-80">
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-slate-400">Level Progression</span>
                    <span className="text-cyan-400 font-bold">{currentXP.toLocaleString()} / {targetXP.toLocaleString()} XP</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full"
                      style={{ width: `${xpPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Competitive Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Competitive Rating</div>
                <div className="text-2xl font-mono font-bold text-cyan-400 mt-1">3,840</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Top 0.01% Global</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Win Ratio</div>
                <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">84.2%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">412 Wins / 489 M</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Achievements</div>
                <div className="text-2xl font-mono font-bold text-violet-400 mt-1">48 / 50</div>
                <div className="text-[10px] text-slate-400 mt-0.5">96% Completed</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Total Playtime</div>
                <div className="text-2xl font-mono font-bold text-white mt-1">1,240h</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">Primary: ECLIPSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
