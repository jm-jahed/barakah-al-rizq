'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Lock, CheckCircle2, Trophy, Swords, Activity, Compass, Moon } from 'lucide-react';
import { NEXARA_ACHIEVEMENTS } from '@/data/nexaraData';

export const NexaraAchievements: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const filtered = NEXARA_ACHIEVEMENTS.filter(a => filter === 'ALL' || a.category === filter);

  return (
    <section className="py-20 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              ACCOLADES & MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              Achievement <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Vault</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Unlock prestigious badges, cosmetic borders, and XP multipliers through tactical tournament combat.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl text-xs">
            {['ALL', 'Combat', 'Strategy', 'Mastery', 'Exploration'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  filter === cat ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ach) => (
            <motion.div
              key={ach.id}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                ach.unlocked
                  ? 'bg-slate-900/70 border-violet-500/40 shadow-lg shadow-violet-950/20'
                  : 'bg-slate-950/60 border-slate-800/80 opacity-75'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    ach.unlocked ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-slate-900 text-slate-600 border border-slate-800'
                  }`}>
                    {ach.unlocked ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-violet-400">
                    +{ach.xpReward} XP
                  </span>
                </div>

                <h4 className="text-base font-bold text-white uppercase tracking-tight">{ach.title}</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">{ach.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span>{ach.unlocked ? 'Unlocked & Claimed' : 'In Progress'}</span>
                  <span>{ach.progress}%</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full rounded-full ${ach.unlocked ? 'bg-cyan-400' : 'bg-violet-600'}`}
                    style={{ width: `${ach.progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
