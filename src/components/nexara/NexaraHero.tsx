'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ShieldCheck, ArrowRight, ShoppingBag, Shield, Activity, Trophy } from 'lucide-react';
import { NEXARA_METADATA } from '@/data/nexaraData';

interface NexaraHeroProps {
  onExploreGames: () => void;
  onEnterArena: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const NexaraHero: React.FC<NexaraHeroProps> = ({
  onExploreGames,
  onEnterArena,
  onOpenCart,
  cartCount
}) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#07090e] text-slate-100">
      {/* Background Cybernetic Horizon & Particle Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Deep Violet & Cyan Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0a0d18]/70 to-[#07090e]" />

        {/* Layer 2: Futuristic Sci-Fi Cityscape Wallpaper */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-screen scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        {/* Layer 3: Electric Violet & Cyan Pulse Fields */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-600/15 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Layer 4: Digital Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Bar / Navigation Strip */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-cyan-400 backdrop-blur-md shadow-lg shadow-violet-950/40">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-cyan-400 font-bold">
              {NEXARA_METADATA.name}
            </div>
            <div className="text-[10px] text-slate-400 tracking-wider">
              {NEXARA_METADATA.positioning}
            </div>
          </div>
        </div>

        {/* Top Indicators & Loadout Bag */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono">Dubai Cluster · 1.48M Online</span>
          </div>

          <button
            onClick={onOpenCart}
            className="relative px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 text-xs text-cyan-300 flex items-center gap-2 transition-all backdrop-blur-md"
          >
            <ShoppingBag className="w-4 h-4 text-cyan-400" />
            <span className="font-mono">Loadout Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-violet-500 text-white text-[11px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>{NEXARA_METADATA.eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 uppercase"
        >
          Enter. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Compete.</span> Evolve.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          {NEXARA_METADATA.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onEnterArena}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-violet-950/50"
          >
            <Trophy className="w-4 h-4 text-slate-950" />
            <span>Enter The Arena</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreGames}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm flex items-center justify-center gap-3 transition-colors backdrop-blur-md"
          >
            <span>Explore 24 Games</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Footnote / Universe Tickers */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 font-mono text-[11px]">
          <span className="text-cyan-400">VOID</span>
          <span className="text-slate-700">•</span>
          <span className="text-violet-400">NEXUS</span>
          <span className="text-slate-700">•</span>
          <span className="text-fuchsia-400">FRONTIER</span>
          <span className="text-slate-700">•</span>
          <span className="text-amber-400">ECLIPSE</span>
          <span className="text-slate-700">•</span>
          <span className="text-emerald-400">ORBIT</span>
        </div>
        <div className="text-[11px] text-cyan-400/90 font-mono">
          AED 1,000,000+ Prize Pools · 0% Real Payment (Demo Platform)
        </div>
      </div>
    </div>
  );
};
