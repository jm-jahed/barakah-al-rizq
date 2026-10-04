'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Activity, 
  Calendar, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles, 
  Heart, 
  Zap, 
  CheckCircle2, 
  MapPin,
  Stethoscope
} from 'lucide-react';

interface PetCareHeroProps {
  onOpenBooking: () => void;
}

export const PetCareHero: React.FC<PetCareHeroProps> = ({ onOpenBooking }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-[#070D13] text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-emerald-500/20">
      {/* Ambient Animated Glows */}
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500 blur-[200px] pointer-events-none rounded-full" 
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.09, 0.04]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-teal-500 blur-[180px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Text, Badges, CTAs */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          {/* Top Live Ticker Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/10"
          >
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>24/7 LEVEL-1 SURGICAL HOSPITAL</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 text-xs font-mono hidden sm:inline">
              Jumeirah • Dubai Hills • Abu Dhabi
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-sans"
          >
            Gold-Standard Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              For Your Beloved Pet.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans mx-auto lg:mx-0"
          >
            The UAE’s premier 24/7 veterinary surgical hospital, Fear-Free certified feline pavilion, 128-slice diagnostic CT center, and 5-star climate-controlled resort sanctuary.
          </motion.p>

          {/* Telemetry Micro Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left"
          >
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-white font-mono">RCVS UK Certified</span>
                <span className="block text-[10px] text-slate-400 font-mono">Specialist Surgeons</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-white font-mono">Zero-Wait ICU</span>
                <span className="block text-[10px] text-slate-400 font-mono">24/7 Emergency Bay</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-white font-mono">MOCCAE Endorsed</span>
                <span className="block text-[10px] text-slate-400 font-mono">Dubai Passport Stamping</span>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer group"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Priority Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/971523394001?text=Emergency%20Veterinary%20Assistance%20Required"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-rose-500/15 border border-rose-500/35 text-rose-300 hover:bg-rose-500/25 hover:border-rose-400/50 font-bold text-xs uppercase font-mono text-center transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-rose-500/10"
            >
              <PhoneCall className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>24/7 Emergency Line</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Hero Visual Card + Floating Telemetry Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Visual Container */}
          <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0C151D] group">
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1200&auto=format&fit=crop" 
              alt="Paws & Claws Veterinary Examination" 
              className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D13] via-[#070D13]/20 to-transparent" />

            {/* Top Floating Badge */}
            <div className="absolute top-5 left-5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
                Jumeirah 2 Flagship • Live
              </span>
            </div>

            {/* Bottom Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0E1720]/90 backdrop-blur-xl p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">
                    CLINICAL STANDARDS
                  </span>
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                    Fear-Free Certified Hospital
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Consultation: <strong className="text-emerald-400">AED 195</strong></span>
                <span className="text-slate-400">Average Wait: <strong className="text-white">&lt; 5 min</strong></span>
              </div>
            </div>
          </div>

          {/* Floating Trust Pill Left */}
          <motion.div 
            animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -left-4 sm:-left-6 bg-[#0E1720]/95 backdrop-blur-xl border border-emerald-500/40 p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold font-mono text-sm">
              ★ 4.98
            </div>
            <div>
              <span className="text-xs font-bold text-white block">1,840+ UAE Pet Parents</span>
              <span className="text-[10px] font-mono text-emerald-400">Verified Google Reviews</span>
            </div>
          </motion.div>

          {/* Floating Diagnostic Pill Right */}
          <motion.div 
            animate={shouldReduceMotion ? {} : { y: [4, -4, 4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#0E1720]/95 backdrop-blur-xl border border-emerald-500/40 p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Zap className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">128-Slice CT Scan</span>
              <span className="text-[10px] font-mono text-teal-400">Same-Day Radiology Reports</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default PetCareHero;
