'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cake, ArrowRight, Phone, ShieldCheck, ChevronDown, Sparkles, Award } from 'lucide-react';
import { PatisserieCrestLogo } from './PatisserieCrestLogo';

interface BakeryHeroProps {
  onOpenCatalog?: () => void;
  onOpenBuilder?: () => void;
  onOpenConsultation?: () => void;
}

export const BakeryHero: React.FC<BakeryHeroProps> = ({
  onOpenCatalog,
  onOpenBuilder,
  onOpenConsultation,
}) => {
  return (
    <section className="relative min-h-[92vh] bg-gradient-to-b from-[#070605] via-[#100D0A] to-[#070605] border-b border-amber-500/20 pt-8 pb-20 overflow-hidden flex items-center">
      {/* Warm Golden Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-amber-600/10 via-amber-500/5 to-transparent blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-700/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Crest Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 backdrop-blur-md"
            >
              <PatisserieCrestLogo size="sm" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                MAISON CRÈME PARIS • DUBAI • HAUTE PÂTISSERIE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] font-serif"
            >
              Haute Pâtisserie.<br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent italic font-light">
                Immortal Celebrations.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl font-sans leading-relaxed"
            >
              Curating 160 sovereign pâtisserie masterpieces, multi-tiered 24K gold celebration cakes, Parisian mirror entremets, and bespoke Dubai Majlis towers. Handcrafted in DIFC Gate Avenue with French Normandy AOP butter and Valrhona Grand Cru chocolate.
            </motion.p>

            {/* Live Pâtisserie Vault Telemetry Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#13100D]/80 border border-amber-500/20 backdrop-blur-md max-w-xl"
            >
              <div className="border-r border-amber-500/15 pr-3">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Catalogue</span>
                <span className="text-base sm:text-lg font-mono font-bold text-amber-400">160 Creations</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">● Kitchen Active</span>
              </div>
              <div className="border-r border-amber-500/15 pr-3 pl-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Butter &amp; Cocoa</span>
                <span className="text-base sm:text-lg font-mono font-bold text-white">AOP Isigny</span>
                <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">Valrhona Grand Cru</span>
              </div>
              <div className="pl-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Logistics</span>
                <span className="text-base sm:text-lg font-mono font-bold text-amber-300">4°C Fleet</span>
                <span className="text-[9px] font-mono text-amber-400/80 block mt-0.5">Dubai &amp; Abu Dhabi</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#catalog"
                onClick={onOpenCatalog}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl shadow-amber-500/25 group cursor-pointer"
              >
                <span>Explore 160 Pâtisserie Creations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#builder"
                onClick={onOpenBuilder}
                className="px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all backdrop-blur-md cursor-pointer hover:border-amber-400"
              >
                <Cake className="w-4 h-4 text-amber-400" />
                <span>Custom Cake Studio</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-5 py-4 rounded-xl text-amber-300/80 hover:text-amber-300 font-mono text-xs uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                Wedding Consultation →
              </button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4 border-t border-amber-500/15 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Halal Certified Laboratory</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Meilleur Ouvrier de France Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Chilled White-Glove Hand Delivery</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual & Inset Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/90 aspect-[4/5] bg-[#14100D] group">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
                alt="Maison Crème Grand Celebration Cake Masterpiece"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-black/20 to-transparent opacity-80" />

              {/* Top In-Image Badge */}
              <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md border border-amber-500/40 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-amber-300 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>DIFC Signature • L&apos;Or Impérial 24K</span>
              </div>

              {/* Bottom In-Image Dossier */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                      Normandy Butter &amp; 24K Leaf
                    </span>
                    <h3 className="text-sm sm:text-base font-serif text-white font-semibold">
                      Grand Palais Celebration Tier
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-amber-300 block">AED 1,450</span>
                    <span className="text-[9px] font-mono text-emerald-400">Fresh 24h Bake</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Gold Stamp */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-amber-500/40 bg-[#16120E]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-xl shadow-amber-500/10">
              <span className="text-[8px] font-mono uppercase tracking-wider text-amber-400 font-bold">100% AOP</span>
              <span className="text-[7px] font-mono text-zinc-400 uppercase">French Butter</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
        <span>Scroll for 160 Creations</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
      </div>
    </section>
  );
};
