'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { NEXARA_COMMUNITIES } from '@/data/nexaraData';

export const NexaraCommunities: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>PLAYER NETWORKS & GUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Find Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">People</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Join verified regional esports clans, modding collectives, and casual guilds across the UAE and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEXARA_COMMUNITIES.map((comm) => (
            <motion.div
              key={comm.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800 uppercase">
                  {comm.category}
                </span>
                <h4 className="text-base font-bold text-white font-mono mt-2">{comm.name}</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">{comm.description}</p>

                <div className="flex flex-wrap gap-1 mt-4">
                  {comm.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="text-white font-bold">{comm.membersCount} Members</div>
                  <div className="text-[10px] text-emerald-400">{comm.activeNow} Active Now</div>
                </div>

                <button className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold transition-colors">
                  Join
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
