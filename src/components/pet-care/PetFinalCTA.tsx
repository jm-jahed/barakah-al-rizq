'use client';

import React from 'react';
import { Calendar, PhoneCall, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface PetFinalCTAProps {
  onOpenBooking: () => void;
}

export const PetFinalCTA: React.FC<PetFinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#080E14] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-[#080E14] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR COMPANION’S HEALTH IS OUR SACRED TRUST</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
          Ready to Experience <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
            Gold-Standard Veterinary Care?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Schedule your routine consultation, book a luxury resort suite, or call our 24/7 Level-1 trauma bay anytime in Dubai and Abu Dhabi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Priority Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:+971523394001"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 font-bold text-xs uppercase font-mono text-center transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-rose-400" />
            <span>Call 24/7 Emergency ICU</span>
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> RCVS Board Certified</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> MOCCAE UAE Government Licensed</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> ISFM Cat Friendly Gold Clinic</span>
        </div>

      </div>
    </section>
  );
};

export default PetFinalCTA;
