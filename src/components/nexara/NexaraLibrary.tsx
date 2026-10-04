'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Clock, Trophy, Gamepad2, Bookmark, CheckCircle2 } from 'lucide-react';
import { NEXARA_GAMES, NexaraGame } from '@/data/nexaraData';

export const NexaraLibrary: React.FC<{ onLaunchGame?: (game: NexaraGame) => void }> = ({ onLaunchGame }) => {
  const [activeTab, setActiveTab] = useState<'installed' | 'recent' | 'favorites' | 'competitive'>('installed');

  const libraryGames = NEXARA_GAMES.slice(0, 4);

  return (
    <section className="py-20 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              PLAYER INVENTORY VAULT
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Library</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Installed local client titles, cloud stream caches, and save-state synchronizations.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl text-xs font-mono">
            {(['installed', 'recent', 'favorites', 'competitive'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl uppercase transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryGames.map((game, idx) => (
            <motion.div
              key={game.id}
              whileHover={{ y: -4 }}
              className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-950">
                  <img src={game.coverImage} alt={game.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 font-mono text-[10px] text-cyan-400 border border-slate-800">
                    {game.world}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-mono uppercase">{game.title}</h4>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  {idx === 0 ? 'Played 2h ago' : idx === 1 ? 'Played Yesterday' : 'Cloud Sync OK'}
                </div>

                <div className="mt-4 py-2 border-t border-b border-slate-800/80 flex justify-between text-xs font-mono text-slate-400">
                  <span>Achievements</span>
                  <span className="text-violet-400 font-bold">{12 - idx * 2} / 16</span>
                </div>
              </div>

              <button
                onClick={() => onLaunchGame && onLaunchGame(game)}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 hover:text-slate-950 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Now</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
