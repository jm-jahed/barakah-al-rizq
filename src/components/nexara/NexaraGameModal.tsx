'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Star, Users, Gamepad2, Monitor, ArrowRight, Check, Plus, Shield, ShieldCheck } from 'lucide-react';
import { NexaraGame } from '@/data/nexaraData';

interface NexaraGameModalProps {
  game: NexaraGame | null;
  onClose: () => void;
  onAddToLibrary: (game: NexaraGame) => void;
}

export const NexaraGameModal: React.FC<NexaraGameModalProps> = ({
  game,
  onClose,
  onAddToLibrary
}) => {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [added, setAdded] = useState(false);

  if (!game) return null;

  const handleAdd = () => {
    setAdded(true);
    onAddToLibrary(game);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-slate-100 my-auto relative"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Trailer / Image Header */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-900 overflow-hidden">
          {isPlayingTrailer ? (
            <div className="w-full h-full bg-black flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                CINEMATIC STREAM // {game.title}
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                Demonstration 4K 120FPS live feed connecting to Dubai cloud server node.
              </p>
              <button
                onClick={() => setIsPlayingTrailer(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white"
              >
                Close Video Stream
              </button>
            </div>
          ) : (
            <>
              <img
                src={game.heroBanner}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

              {/* Play Trailer Trigger */}
              <button
                onClick={() => setIsPlayingTrailer(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group"
              >
                <Play className="w-7 h-7 fill-slate-950 ml-1" />
              </button>

              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-400 font-mono text-xs border border-slate-800">
                  {game.world} SECTOR
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-violet-300 font-mono text-xs border border-slate-800">
                  {game.genre}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 font-mono text-xs border border-slate-800">
                  ★ {game.rating}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                Developer: {game.developer}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">{game.title}</h2>
              <p className="text-sm text-slate-300 mt-2 font-light">{game.tagline}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-right shrink-0">
              <div className="text-slate-500 text-[10px] uppercase font-mono">Active Community</div>
              <div className="text-2xl font-mono font-bold text-cyan-400">{game.playersCount}</div>
              <div className="text-[11px] text-emerald-400 mt-0.5">{game.status}</div>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
            <p>{game.description}</p>
          </div>

          {/* Platforms & Modes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">Supported Platforms</div>
              <div className="flex flex-wrap gap-2">
                {game.platforms.map((p) => (
                  <span key={p} className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">Supported Game Modes</div>
              <div className="flex flex-wrap gap-2">
                {game.modes.map((m) => (
                  <span key={m} className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-violet-300 font-mono">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              PC Minimum / Recommended Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">OS</div>
                <div className="text-slate-200 mt-0.5">{game.systemReqs.os}</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">GPU</div>
                <div className="text-slate-200 mt-0.5">{game.systemReqs.gpu}</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">Memory</div>
                <div className="text-slate-200 mt-0.5">{game.systemReqs.ram}</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">Storage</div>
                <div className="text-slate-200 mt-0.5">{game.systemReqs.storage}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-mono">
              Fictional Demo Game · Instant Sandbox Launch
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleAdd}
                className={`w-1/2 sm:w-auto px-5 py-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  added ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {added ? <Check className="w-4 h-4 text-emerald-400" /> : <Plus className="w-4 h-4" />}
                <span>{added ? 'Added to Library' : 'Add to Library'}</span>
              </button>

              <button
                onClick={() => {
                  alert(`Launching demonstration session for ${game.title}...`);
                  onClose();
                }}
                className="w-1/2 sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-violet-950/40"
              >
                <span>Enter Game</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
