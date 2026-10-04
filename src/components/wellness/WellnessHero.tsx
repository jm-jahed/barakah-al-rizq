'use client';
import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, Clock, Sparkles, ChevronDown } from 'lucide-react';
import { AuraSanctuaryLogo } from './AuraSanctuaryLogo';

interface WellnessHeroProps {
  onOpenBooking?: (className?: string) => void;
  onExploreClick?: () => void;
  onDisciplinesClick?: () => void;
}

export const WellnessHero: React.FC<WellnessHeroProps> = ({ 
  onOpenBooking,
  onExploreClick,
  onDisciplinesClick 
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-[#090807] via-[#14100E] to-[#090807] text-white overflow-hidden py-16 px-4 md:px-8 border-b border-amber-500/15">
      {/* Golden Radiance Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-amber-600/10 via-amber-500/5 to-transparent blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-700/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Text Column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Crest Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 backdrop-blur-md mx-auto lg:mx-0">
            <AuraSanctuaryLogo size="sm" />
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
              AURA WELLNESS SANCTUARY • DOWNTOWN DUBAI
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.05]">
            Sacred Stillness.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 font-light italic">
              Nervous System Realignment.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-sans mx-auto lg:mx-0">
            Curating 160 sovereign somatic practices, sunrise Mysore vinyasa flows, precision Allegro 2 reformer pilates, 432Hz quartz crystal sound baths, and luxury desert retreats. Located on Downtown Dubai Boulevard.
          </p>

          {/* Live Studio Telemetry Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#14110E]/80 border border-amber-500/20 backdrop-blur-md max-w-xl mx-auto lg:mx-0">
            <div className="border-r border-amber-500/15 pr-3">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Schedule</span>
              <span className="text-base sm:text-lg font-mono font-bold text-amber-400">160 Sessions</span>
              <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">● Studio Active</span>
            </div>
            <div className="border-r border-amber-500/15 pr-3 pl-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Sound Frequency</span>
              <span className="text-base sm:text-lg font-mono font-bold text-white">432Hz Bowls</span>
              <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">99.9% Pure Quartz</span>
            </div>
            <div className="pl-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Pilates Beds</span>
              <span className="text-base sm:text-lg font-mono font-bold text-amber-300">Allegro 2</span>
              <span className="text-[9px] font-mono text-amber-400/80 block mt-0.5">Max 8 per Class</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#classes"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore 160 Practices</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#modalities"
              onClick={onDisciplinesClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/15 hover:border-amber-500/40 text-white font-bold text-xs uppercase font-mono text-center hover:bg-white/10 transition-all cursor-pointer"
            >
              Somatic Modalities →
            </a>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-xs font-mono text-zinc-400 border-t border-amber-500/15">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              12 Max Class Capacity
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Downtown Valet Parking
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Manduka Pro Mats Included
            </span>
          </div>

        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/90 aspect-[4/5] bg-[#14100E] group">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
              alt="Aura Sanctuary Dubai Practice"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-black/20 to-transparent opacity-80" />

            {/* Inset Badge */}
            <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md border border-amber-500/40 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-amber-300 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Downtown Dubai Sanctuary • Studio Level 2</span>
            </div>

            {/* Bottom Dossier */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-amber-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    Alchemy Sound &amp; Flow
                  </span>
                  <h3 className="text-sm sm:text-base font-serif text-white font-semibold">
                    432Hz Quartz Crystal Journey
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-amber-300 block">AED 195</span>
                  <span className="text-[9px] font-mono text-emerald-400">60 Min Session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Seal */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-amber-500/40 bg-[#16120E]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-xl shadow-amber-500/10">
            <span className="text-[8px] font-mono uppercase tracking-wider text-amber-400 font-bold">500 RYT</span>
            <span className="text-[7px] font-mono text-zinc-400 uppercase">Certified</span>
          </div>
        </div>

      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
        <span>Scroll for 160 Practices</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
      </div>
    </section>
  );
};
