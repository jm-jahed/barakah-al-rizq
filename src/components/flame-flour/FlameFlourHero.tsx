'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Clock, ShoppingBag, ArrowRight, Wheat, Compass } from 'lucide-react';
import { FLAME_FLOUR_METADATA } from '@/data/flameFlourData';

interface FlameFlourHeroProps {
  onExploreBakery: () => void;
  onBuildBox: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const FlameFlourHero: React.FC<FlameFlourHeroProps> = ({
  onExploreBakery,
  onBuildBox,
  onOpenCart,
  cartCount
}) => {
  const [flourParticles, setFlourParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate deterministic flour dust particles
    const particles = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: (i * 37) % 100,
      y: (i * 29) % 100,
      size: (i % 3) + 1.5,
      duration: 8 + (i % 7),
      delay: (i * 0.3) % 4
    }));
    setFlourParticles(particles);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a0807] border-b border-amber-950/40 px-4 sm:px-6 lg:px-8 py-20">
      {/* Background radial warmth & woodfire oven glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-amber-600/15 via-orange-900/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-amber-950/20 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0807_85%)]" />
      </div>

      {/* Floating subtle flour dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {flourParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: -20, x: `${p.x}vw` }}
            animate={{
              opacity: [0, 0.65, 0],
              y: ['0vh', '100vh'],
              x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 3 : -3)}vw`]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut'
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
            className="absolute rounded-full bg-stone-200/40 blur-[0.5px]"
          />
        ))}
      </div>

      {/* Top Floating Bar / Quick Actions */}
      <div className="absolute top-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-900/80 border border-amber-900/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span className="text-xs font-mono tracking-wider text-amber-200/90 uppercase">
            Morning Batch 042 In Hearth · 245°C
          </span>
        </div>

        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/50 hover:bg-amber-900/60 border border-amber-600/30 text-amber-200 text-sm font-medium transition-all backdrop-blur-md shadow-lg shadow-black/40 group"
          aria-label={`Open Bakery Basket with ${cartCount} items`}
        >
          <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          <span>Bakery Basket</span>
          {cartCount > 0 && (
            <span className="ml-1 px-2 py-0.5 text-xs font-mono font-bold bg-amber-500 text-stone-950 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-8">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-700/40 text-amber-300 text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 shadow-inner"
        >
          <Wheat className="w-3.5 h-3.5 text-amber-400" />
          <span>{FLAME_FLOUR_METADATA.eyebrow}</span>
          <span className="text-amber-500/60">·</span>
          <span className="text-stone-400">PROJECT #80</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-stone-100 leading-[1.08] mb-6"
        >
          Crafted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 italic">Fire.</span>
          <br />
          Finished by <span className="text-stone-300">Hand.</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-400 font-light leading-relaxed mb-10"
        >
          {FLAME_FLOUR_METADATA.subheading}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onExploreBakery}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-base transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-3 group active:scale-[0.98]"
          >
            <span>Explore the Bakery</span>
            <ArrowRight className="w-4 h-4 text-stone-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onBuildBox}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-850 border border-amber-700/40 hover:border-amber-500/60 text-stone-200 font-medium text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Build Your Box</span>
          </button>
        </motion.div>

        {/* Micro Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-stone-850/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto"
        >
          <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800/50">
            <div className="text-[11px] font-mono text-stone-400 uppercase">Slow Fermentation</div>
            <div className="text-stone-100 font-serif text-lg mt-0.5 font-medium">36–48 Hours</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800/50">
            <div className="text-[11px] font-mono text-stone-400 uppercase">Mother Levain</div>
            <div className="text-stone-100 font-serif text-lg mt-0.5 font-medium">7-Year Culture</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800/50">
            <div className="text-[11px] font-mono text-stone-400 uppercase">Deck Oven Temp</div>
            <div className="text-stone-100 font-serif text-lg mt-0.5 font-medium">245°C Stone</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800/50">
            <div className="text-[11px] font-mono text-stone-400 uppercase">Daily Fresh Batches</div>
            <div className="text-stone-100 font-serif text-lg mt-0.5 font-medium">100% Baked Daily</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
