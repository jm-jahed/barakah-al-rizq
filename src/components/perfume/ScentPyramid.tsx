'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Flame, Droplets } from 'lucide-react';

interface ScentPyramidProps {
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
}

export const ScentPyramid: React.FC<ScentPyramidProps> = ({
  topNotes,
  heartNotes,
  baseNotes,
}) => {
  const [activeLayer, setActiveLayer] = useState<'TOP' | 'HEART' | 'BASE'>('TOP');

  return (
    <div className="p-5 rounded-2xl bg-[#161D27] border border-amber-500/30 space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Droplets className="w-4 h-4 text-amber-400" /> OLFACTORY SCENT PYRAMID
        </span>
        <span className="text-[10px] font-mono text-gray-400">Click layer to inspect notes</span>
      </div>

      <div className="space-y-2">
        {/* TOP LAYER */}
        <motion.div
          onClick={() => setActiveLayer('TOP')}
          whileHover={{ scale: 1.01 }}
          className={`p-3 rounded-xl cursor-pointer border transition-all text-center space-y-1 ${
            activeLayer === 'TOP'
              ? 'bg-amber-500/20 border-amber-400 shadow-lg'
              : 'bg-white/5 border-white/10 opacity-75 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-300 font-serif">
            <span>TOP NOTES (0–15 Mins) — Initial Impression</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {topNotes.map((note, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] font-mono text-amber-200 border border-amber-500/30">
                ❖ {note}
              </span>
            ))}
          </div>
        </motion.div>

        {/* HEART LAYER */}
        <motion.div
          onClick={() => setActiveLayer('HEART')}
          whileHover={{ scale: 1.01 }}
          className={`p-4 rounded-xl cursor-pointer border transition-all text-center space-y-1 ${
            activeLayer === 'HEART'
              ? 'bg-amber-500/20 border-amber-400 shadow-lg'
              : 'bg-white/5 border-white/10 opacity-75 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-rose-300 font-serif">
            <span>HEART NOTES (15 Mins–3 Hours) — Character & Core</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {heartNotes.map((note, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] font-mono text-rose-200 border border-rose-500/30">
                ❖ {note}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BASE LAYER */}
        <motion.div
          onClick={() => setActiveLayer('BASE')}
          whileHover={{ scale: 1.01 }}
          className={`p-5 rounded-xl cursor-pointer border transition-all text-center space-y-1 ${
            activeLayer === 'BASE'
              ? 'bg-amber-500/20 border-amber-400 shadow-lg'
              : 'bg-white/5 border-white/10 opacity-75 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-300 font-serif">
            <span>BASE NOTES (3–14+ Hours) — Lasting Dry Down & Sillage</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {baseNotes.map((note, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] font-mono text-emerald-200 border border-emerald-500/30 font-bold">
                ❖ {note}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
