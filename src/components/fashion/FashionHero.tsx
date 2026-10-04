'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { ElaneCrestLogo } from './ElaneCrestLogo';

interface FashionHeroProps {
  onShopClick?: () => void;
  onExploreClick?: () => void;
  onAppointmentClick?: () => void;
}

export const FashionHero: React.FC<FashionHeroProps> = ({ 
  onShopClick, 
  onExploreClick,
  onAppointmentClick 
}) => {
  return (
    <section className="relative min-h-[92vh] bg-gradient-to-b from-[#090807] via-[#120F0D] to-[#090807] flex items-center overflow-hidden pt-8 pb-20 border-b border-amber-500/15">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-amber-600/10 via-amber-500/5 to-transparent blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-700/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Crest Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 w-fit mb-6 backdrop-blur-md">
              <ElaneCrestLogo size="sm" />
              <span className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-widest">
                ÉLANE ATELIER PARIS • DUBAI DESIGN DISTRICT (d3)
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05] mb-6">
              Haute Silhouette.<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-light">
                Immortal Sartorial Grace.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#D4CDC3] font-normal leading-relaxed max-w-2xl mb-8">
              Curating 160 sovereign haute couture creations, hand-pleated mulberry silk evening dresses, imported Japanese crepe royal abayas, and Super 160s English wool blazers. Tailored across Place Vendôme and Dubai Design District.
            </p>

            {/* Live Atelier Telemetry Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#14100D]/80 border border-amber-500/20 backdrop-blur-md max-w-xl mb-9">
              <div className="border-r border-amber-500/15 pr-3">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Catalogue</span>
                <span className="text-base sm:text-lg font-mono font-bold text-amber-400">160 Creations</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">● d3 Atelier Active</span>
              </div>
              <div className="border-r border-amber-500/15 pr-3 pl-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Fabrics</span>
                <span className="text-base sm:text-lg font-mono font-bold text-white">Silk &amp; Cashmere</span>
                <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">Super 160s Wool</span>
              </div>
              <div className="pl-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Fitting</span>
                <span className="text-base sm:text-lg font-mono font-bold text-amber-300">Private Salon</span>
                <span className="text-[9px] font-mono text-amber-400/80 block mt-0.5">d3 Building 07</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#catalog"
                onClick={onShopClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl shadow-amber-500/25 group cursor-pointer"
              >
                <span>Explore 160 Couture Pieces</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#disciplines"
                onClick={onExploreClick}
                className="px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all backdrop-blur-md cursor-pointer hover:border-amber-400"
              >
                <span>Sartorial Disciplines →</span>
              </a>

              <button
                type="button"
                onClick={onAppointmentClick}
                className="px-5 py-4 rounded-xl text-amber-300/80 hover:text-amber-300 font-mono text-xs uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                Book d3 Private Salon Fitting →
              </button>
            </div>

            {/* Trust Strip */}
            <div className="pt-6 border-t border-amber-500/15 flex flex-wrap items-center gap-6 text-xs text-[#B8AEA2] font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bespoke Hand-Finished Seams</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Private Home Stylist Dressing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Chilled Armored UAE Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual & Inset Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/90 aspect-[4/5] bg-[#14100D] group">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                alt="Élane Atelier Haute Couture Masterpiece"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-black/20 to-transparent opacity-80" />

              {/* Inset Badge */}
              <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md border border-amber-500/40 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-amber-300 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>d3 Runway Masterpiece • Look No. 01</span>
              </div>

              {/* Bottom In-Image Dossier */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                      Mulberry Silk &amp; Crystal Beading
                    </span>
                    <h3 className="text-sm sm:text-base font-serif text-white font-semibold">
                      L&apos;Aura Impériale Silk Column Gown
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-amber-300 block">AED 8,500</span>
                    <span className="text-[9px] font-mono text-emerald-400">Haute Couture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Gold Quality Seal */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-amber-500/40 bg-[#16120E]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-xl shadow-amber-500/10">
              <span className="text-[8px] font-mono uppercase tracking-wider text-amber-400 font-bold">100% SILK</span>
              <span className="text-[7px] font-mono text-zinc-400 uppercase">Mulberry Origin</span>
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
