'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, ArrowRight, Gamepad2, Filter, ShieldCheck, Monitor } from 'lucide-react';
import { NEXARA_GAMES, NexaraGame } from '@/data/nexaraData';

interface NexaraGameDiscoveryProps {
  onSelectGame: (game: NexaraGame) => void;
  onAddLibrary: (game: NexaraGame) => void;
}

export const NexaraGameDiscovery: React.FC<NexaraGameDiscoveryProps> = ({
  onSelectGame,
  onAddLibrary
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'popular' | 'rating' | 'newest'>('popular');

  const filteredGames = NEXARA_GAMES.filter(game => {
    const matchesGenre = selectedGenre === 'ALL' || game.genre === selectedGenre;
    const matchesPlatform = selectedPlatform === 'ALL' || game.platforms.includes(selectedPlatform as any);
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesPlatform && matchesSearch;
  }).sort((a, b) => {
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0; // default popular
  });

  return (
    <section className="py-24 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              CONNECTED GAME ECOSYSTEM
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Discover Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Next Game</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              24 flagship titles spanning competitive esports shooters, open-world space simulators, cybernetic soulslikes, and anti-gravity racing.
            </p>
          </div>

          {/* Quick Genre Pills */}
          <div className="flex flex-wrap gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl text-xs max-w-full overflow-x-auto">
            {['ALL', 'Action', 'Esports FPS', 'RPG', 'Strategy', 'Racing', 'Survival', 'Simulation'].map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  selectedGenre === genre
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search the universe by title, genre, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto text-xs text-slate-400 font-mono">
            <span>Showing <strong className="text-cyan-400">{filteredGames.length}</strong> of 24 Titles</span>
            <div className="h-4 w-px bg-slate-800" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Season 04 Active</option>
            </select>
          </div>
        </div>

        {/* 24 Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectGame(game)}
                className="group rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl shadow-slate-950/50 cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                    <img
                      src={game.coverImage}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-400 font-mono text-[10px] border border-slate-800">
                        {game.world}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 font-mono text-[10px] border border-slate-800">
                        {game.genre}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-violet-950/80 border border-violet-800 text-violet-300 font-mono text-[10px] backdrop-blur-md">
                        {game.status}
                      </span>
                    </div>

                    {/* Bottom Meta on Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1 bg-slate-950/80 px-2 py-1 rounded-lg backdrop-blur-md border border-slate-800 text-emerald-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-emerald-400" />
                        <span>{game.rating}</span>
                      </div>
                      <div className="bg-slate-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-800 text-slate-300 text-[11px]">
                        {game.playersCount}
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                      {game.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-light">
                      {game.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {game.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-400 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4">
                  <div className="text-[10px] text-slate-500 font-mono">
                    {game.platforms.join(' · ')}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectGame(game);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-violet-600 group-hover:text-slate-950 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>Enter Game</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
