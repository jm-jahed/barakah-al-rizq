'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Plane, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Star,
  ChevronRight,
  Crown,
  HeartHandshake
} from 'lucide-react';

interface TravelHeroProps {
  onOpenInquiry: (context?: string) => void;
}

export const TravelHero: React.FC<TravelHeroProps> = ({ onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  const DIRECT_DEPARTURES = [
    { dest: 'MALDIVES', flight: 'Emirates EK 658', duration: '4h 10m Direct', status: 'First Class Suites Available' },
    { dest: 'SWISS ALPS (ZURICH)', flight: 'Emirates EK 87', duration: '6h 35m Direct', status: 'Glacier Express Connecting' },
    { dest: 'TOKYO HANEDA', flight: 'Emirates EK 312', duration: '9h 15m Direct', status: 'Aman Private Onsen Package' },
    { dest: 'FRENCH RIVIERA (NICE)', flight: 'Emirates EK 77', duration: '6h 50m Direct', status: 'Monaco Heli-Shuttle Synced' },
    { dest: 'SERENGETI SAFARI', flight: 'Emirates EK 719', duration: '5h 15m Direct', status: 'Private Bush Plane Included' },
    { dest: 'AMALFI & CAPRI (ROME)', flight: 'Emirates EK 97', duration: '6h 15m Direct', status: 'Private Riva Charter Ready' }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 bg-[#07090E] flex flex-col justify-between overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Architectural Golden & Azure Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[750px] h-[550px] bg-amber-500/[0.04] blur-[190px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[450px] bg-sky-500/[0.03] blur-[180px] rounded-full" />

        {/* Ambient Map Constellation Wire Grid */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto py-8">
        
        {/* Top UAE Accreditation Pill */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-amber-500/30 backdrop-blur-md mb-8 shadow-xl"
        >
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-amber-300 tracking-wider uppercase">
            BESPOKE LUXURY TRAVEL & PRIVATE CONCIERGE AGENCY
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-xs font-mono text-slate-400">
            Departing Dubai (DXB/DWC) & Abu Dhabi (AUH)
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Curated Journeys. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Private Sanctuaries</span>. Unmatched Prestige.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            AURELIA crafts bespoke travel experiences for royal families, executive leaders, and discerning UAE globetrotters. From private overwater reserves in the Maldives to helicopter expeditions across the Swiss Alps, every itinerary is engineered in AED with white-glove precision.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl"
        >
          <button
            type="button"
            onClick={() => onOpenInquiry('Hero Primary CTA')}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-sm font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Luxury Advisor</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#itinerary-builder"
            className="px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-mono text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Interactive Builder</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </a>
        </motion.div>

        {/* 3 Executive VIP Service Badges */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/10"
        >
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Door-to-Door UAE Chauffeur</h3>
              <p className="text-xs text-slate-400 mt-0.5">Rolls-Royce & Maybach transfers direct to DXB VIP terminal.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Ahlan VIP Fast-Track</h3>
              <p className="text-xs text-slate-400 mt-0.5">Curbside meet & assist, private customs, and lounge escort.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">24/7 Dedicated Concierge</h3>
              <p className="text-xs text-slate-400 mt-0.5">Round-the-clock WhatsApp support with senior luxury partners.</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Live Direct Flights Marquee Ticker */}
      <div className="w-full bg-[#040609] border-t border-b border-white/10 py-3 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {DIRECT_DEPARTURES.concat(DIRECT_DEPARTURES).map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono shrink-0">
              <Plane className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-300 font-bold">{item.dest}:</span>
              <span className="text-slate-300">{item.flight} ({item.duration})</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-semibold">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
