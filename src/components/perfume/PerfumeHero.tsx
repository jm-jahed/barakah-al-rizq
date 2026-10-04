import React from 'react';
import { Crown, Sparkle, Award, ArrowRight, ShieldCheck, Clock, ShoppingBag, Droplets } from 'lucide-react';

interface PerfumeHeroProps {
  onExploreCatalog: () => void;
  onOpenCoffretBuilder: () => void;
  onOpenCart: () => void;
}

export const PerfumeHero: React.FC<PerfumeHeroProps> = ({
  onExploreCatalog,
  onOpenCoffretBuilder,
  onOpenCart
}) => {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden pt-20">
      
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=2000&q=90"
          alt="Oud Royale Haute Parfumerie"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Top UAE Royal Distillation Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium backdrop-blur-md mb-8 shadow-lg shadow-amber-950/40">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-serif tracking-wider">DUBAI MALL FASHION AVENUE • MALL OF THE EMIRATES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="font-mono text-[11px] text-zinc-300">30-YEAR VINTAGE OUD DISTILLATIONS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-zinc-100 tracking-tight max-w-5xl leading-[1.1]">
          Precious Extraits, <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent italic">
            Distilled for Royalty.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-sans font-light">
          An unprecedented convergence of 30-year wild Kalakassi Dehn Al Oud, Grasse Centifolia rose extraits, and smoky Royal Hojari frankincense. 160 sovereign fragrances bottled in heavy Bohemian crystal with 24K gold engraving.
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreCatalog}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-2xl shadow-amber-950/60 transition-all flex items-center justify-center gap-2.5 group"
          >
            <Droplets className="w-4 h-4" />
            <span>Explore 160 Sovereign Flacons</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenCoffretBuilder}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Bespoke Master Coffret Simulator</span>
          </button>
        </div>

        {/* Live Telemetry Bar */}
        <div className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">160 Unique</div>
              <div className="text-[11px] text-zinc-400">Flacons & Extraits</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">40% Concentration</div>
              <div className="text-[11px] text-zinc-400">Pure Haute Parfumerie</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">14h – 48h Skin</div>
              <div className="text-[11px] text-zinc-400">Verified Longevity</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">24K Gold Engraving</div>
              <div className="text-[11px] text-zinc-400">Complimentary Service</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
