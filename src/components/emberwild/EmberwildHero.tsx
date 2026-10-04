'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { EMBERWILD_METADATA } from '@/data/emberwildData';

interface EmberwildHeroProps {
  onExploreStays: () => void;
  onPlanEscape: () => void;
  onOpenTripBag: () => void;
  tripBagCount: number;
}

export const EmberwildHero: React.FC<EmberwildHeroProps> = ({
  onExploreStays,
  onPlanEscape,
  onOpenTripBag,
  tripBagCount
}) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0a0d0a] text-stone-100">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Ambient Forest & Mist Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0a110a]/60 to-[#080c08]" />
        
        {/* Layer 2: Subtle Mountain Ridge Silhouette */}
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        {/* Layer 3: Warm Campfire Glow in Lower Center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-amber-600/15 via-amber-700/5 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Layer 4: Distant Stars & Ambient Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12)_0%,_transparent_70%)] pointer-events-none" />
      </div>

      {/* Top Bar / Navigation */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 backdrop-blur-md shadow-lg shadow-amber-950/20">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-amber-400 font-bold">
              {EMBERWILD_METADATA.name}
            </div>
            <div className="text-[10px] text-stone-400 tracking-wider">
              {EMBERWILD_METADATA.positioning}
            </div>
          </div>
        </div>

        {/* Top Badges & Trip Bag Button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-xs text-stone-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>UAE Wilderness Network · 24 Stays Live</span>
          </div>

          <button
            onClick={onOpenTripBag}
            className="relative px-4 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800/90 border border-stone-700/80 text-xs text-amber-200 flex items-center gap-2 transition-all backdrop-blur-md"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="font-mono">Trip Bag</span>
            {tripBagCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 text-[11px] font-bold flex items-center justify-center">
                {tripBagCount}
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs uppercase tracking-widest mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{EMBERWILD_METADATA.eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-stone-100 mb-6 leading-[1.1]"
        >
          Stay Close <span className="font-serif italic text-amber-400/90 font-normal">to Wild.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg text-stone-300/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          {EMBERWILD_METADATA.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreStays}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-950/40"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Stays</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onPlanEscape}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-stone-200 font-medium text-sm flex items-center justify-center gap-3 transition-colors backdrop-blur-md"
          >
            <span>Plan Your Escape</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Footnote / Destination Tickers */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 font-mono text-[11px]">
          <span>HAJAR RIDGES</span>
          <span className="text-stone-600">•</span>
          <span>AL QUDRA LAKES</span>
          <span className="text-stone-600">•</span>
          <span>RUB AL KHALI DUNES</span>
          <span className="text-stone-600">•</span>
          <span>WURAYAH WATERFALLS</span>
        </div>
        <div className="text-[11px] text-amber-500/80 font-mono">
          All pricing in UAE Dirhams (AED) · Demo Stays
        </div>
      </div>
    </div>
  );
};
