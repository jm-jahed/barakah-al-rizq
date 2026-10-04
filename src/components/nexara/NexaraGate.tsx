'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Activity, Users, Shield, ShieldCheck } from 'lucide-react';
import { NEXARA_GAMES, NexaraGame } from '@/data/nexaraData';

export const NexaraGate: React.FC<{ onSelectGame?: (game: NexaraGame) => void }> = ({ onSelectGame }) => {
  const [activeWorld, setActiveWorld] = useState<'VOID' | 'NEXUS' | 'FRONTIER' | 'ECLIPSE' | 'ORBIT' | 'AFTERLIGHT'>('VOID');

  const worlds = [
    { id: 'VOID', name: 'VOID', theme: 'Cybernetic Abyss & Zero Gravity Combat', accent: 'from-violet-600 to-indigo-900', color: 'text-violet-400', border: 'border-violet-500/50' },
    { id: 'NEXUS', name: 'NEXUS', theme: 'Neon Cyberpunk Megalopolis & Fleet Warfare', accent: 'from-cyan-600 to-blue-900', color: 'text-cyan-400', border: 'border-cyan-500/50' },
    { id: 'FRONTIER', name: 'FRONTIER', theme: 'Rogue Martian Outposts & Mecha Sieges', accent: 'from-amber-600 to-orange-950', color: 'text-amber-400', border: 'border-amber-500/50' },
    { id: 'ECLIPSE', name: 'ECLIPSE', theme: 'Tactical 5v5 Shadow Warfare & Hero Shooters', accent: 'from-fuchsia-600 to-purple-950', color: 'text-fuchsia-400', border: 'border-fuchsia-500/50' },
    { id: 'ORBIT', name: 'ORBIT', theme: 'Hypersonic Anti-Gravity & Dyson Mega-Engineering', accent: 'from-emerald-600 to-teal-950', color: 'text-emerald-400', border: 'border-emerald-500/50' },
    { id: 'AFTERLIGHT', name: 'AFTERLIGHT', theme: 'Atmospheric Solitude & Floating Sky Islands', accent: 'from-blue-600 to-sky-950', color: 'text-sky-400', border: 'border-sky-500/50' }
  ] as const;

  const currentWorldObj = worlds.find(w => w.id === activeWorld) || worlds[0];
  const worldGames = NEXARA_GAMES.filter(g => g.world === activeWorld);
  const featuredGame = worldGames[0] || NEXARA_GAMES[0];

  return (
    <section className="py-24 bg-[#07090e] text-slate-100 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>THE NEXARA GATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">World</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Transition between distinct digital gaming sectors. Each world dictates environmental physics, tournament formats, and tactical combat meta.
          </p>
        </div>

        {/* World Selectors Grid */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {worlds.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveWorld(w.id)}
              className={`px-5 py-2.5 rounded-2xl font-mono text-xs tracking-wider uppercase transition-all ${
                activeWorld === w.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold shadow-lg shadow-violet-950/50 scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {w.name} SECTOR
            </button>
          ))}
        </div>

        {/* Interactive World Portal Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 rounded-3xl border border-slate-800/80 p-6 sm:p-10 relative overflow-hidden">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full bg-slate-950 font-mono text-xs border ${currentWorldObj.border} ${currentWorldObj.color}`}>
                SECTOR // {currentWorldObj.name}
              </span>
              <span className="text-xs font-mono text-slate-400">{worldGames.length} Titles Online</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-light text-white">
              {currentWorldObj.theme}
            </h3>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="text-xs text-cyan-400 font-mono uppercase">Featured Sector Flagship</div>
              <div className="text-xl font-bold text-white">{featuredGame.title}</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{featuredGame.description}</p>
              
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <span className="text-emerald-400 font-bold">★ {featuredGame.rating}</span>
                <span>•</span>
                <span>{featuredGame.playersCount}</span>
                <span>•</span>
                <span className="text-cyan-400">{featuredGame.genre}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectGame && onSelectGame(featuredGame)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-violet-950/50"
            >
              <span>Launch {featuredGame.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorld}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              >
                <img
                  src={featuredGame.heroBanner}
                  alt={featuredGame.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-200 font-mono">
                  <span className="text-cyan-400">Low-Latency MENA Server Grid</span>
                  <span className="text-slate-400">{featuredGame.status}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
