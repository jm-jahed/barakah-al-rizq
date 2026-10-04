'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  PhoneCall,
  Crown
} from 'lucide-react';

interface TravelFinalCTAProps {
  onOpenInquiry: (context?: string) => void;
}

export const TravelFinalCTA: React.FC<TravelFinalCTAProps> = ({ onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-amber-500/[0.04] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>START PLANNING YOUR 2026 JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-3xl mx-auto">
          Your Sovereign Escape <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Awaits</span>.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Connect with a dedicated luxury travel director today to orchestrate private aviation, overwater villas, and bespoke experiences anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => onOpenInquiry('Final CTA Primary')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Luxury Director</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/971508899200"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>24/7 VIP WhatsApp Desk</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 border-t border-white/5">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Transparent AED Pricing</span>
          <span className="flex items-center gap-1.5"><Crown className="w-3.5 h-3.5 text-amber-400" /> Guaranteed 5-Star Perks</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-sky-400" /> 100% White-Glove Support</span>
        </div>

      </div>
    </section>
  );
};
