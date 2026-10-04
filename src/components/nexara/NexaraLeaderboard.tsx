'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Search, Shield, Star, Globe, Flame } from 'lucide-react';
import { NEXARA_LEADERBOARD, NexaraPlayer } from '@/data/nexaraData';

export const NexaraLeaderboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('ALL');

  const filtered = NEXARA_LEADERBOARD.filter(player => {
    const matchesSearch = player.username.toLowerCase().includes(searchTerm.toLowerCase()) || player.tag.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter === 'ALL' || (regionFilter === 'UAE' ? player.region.includes('UAE') : !player.region.includes('UAE'));
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="py-24 bg-[#0a0d18] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              GLOBAL RANKED STANDINGS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Competitive <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Leaderboard</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Live ranking index across all 20 global esports contenders, rating MMR, and win ratios.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-full sm:w-56"
              />
            </div>
            <div className="flex items-center justify-between sm:justify-start gap-1 bg-slate-950 border border-slate-800 p-1 rounded-xl text-xs overflow-x-auto max-w-full">
              {['ALL', 'UAE', 'Global'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRegionFilter(r)}
                  className={`px-3 py-1.5 rounded-lg transition-all shrink-0 ${
                    regionFilter === r ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r === 'ALL' ? 'All Contenders' : r === 'UAE' ? 'UAE & MENA' : 'International'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl max-w-full">
          <div className="overflow-x-auto w-full max-w-full">
            <table className="w-full min-w-[700px] text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6 font-medium">Rank</th>
                  <th className="py-4 px-6 font-medium">Player Identity</th>
                  <th className="py-4 px-6 font-medium">Competitive Tier</th>
                  <th className="py-4 px-6 font-medium">Rating MMR</th>
                  <th className="py-4 px-6 font-medium">Win Ratio</th>
                  <th className="py-4 px-6 font-medium">Flagship Game</th>
                  <th className="py-4 px-6 font-medium text-right">Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {filtered.map((player) => (
                  <tr key={player.username} className="hover:bg-slate-900/50 transition-colors group">
                    <td className="py-4 px-6 font-mono font-bold">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${
                        player.rank === 1
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : player.rank === 2
                          ? 'bg-slate-300/20 text-slate-300 border border-slate-400/40'
                          : player.rank === 3
                          ? 'bg-amber-800/20 text-amber-600 border border-amber-700/40'
                          : 'text-slate-500'
                      }`}>
                        #{player.rank}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img src={player.avatar} alt={player.username} className="w-9 h-9 rounded-xl object-cover border border-slate-800" />
                        <div>
                          <div className="font-bold text-white font-mono flex items-center gap-1.5">
                            <span>{player.username}</span>
                            <span className="text-slate-500 text-[10px]">{player.tag}</span>
                          </div>
                          <div className="text-slate-400 text-[11px]">Level {player.level}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
                        player.tier === 'Apex Grandmaster'
                          ? 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-800'
                          : player.tier === 'Master Prime'
                          ? 'bg-violet-950/80 text-violet-300 border-violet-800'
                          : 'bg-cyan-950/80 text-cyan-300 border-cyan-800'
                      }`}>
                        {player.tier}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-cyan-400">
                      {player.rating.toLocaleString()} MMR
                    </td>
                    <td className="py-4 px-6 font-mono text-emerald-400 font-medium">
                      {player.winRate} ({player.wins}W / {player.matches}M)
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-300">
                      {player.favoriteGame}
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-400 text-right">
                      {player.region}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
