'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, MapPin, ShieldCheck, Sparkles, Calculator } from 'lucide-react';
import { VANTAGE_STATS } from '@/data/vantageData';

interface VantageHeroProps {
  onOpenRegisterModal: () => void;
  onExploreProjects: () => void;
  onOpenVipModal?: () => void;
  onOpenCalculator?: () => void;
}

export const VantageHero: React.FC<VantageHeroProps> = ({
  onOpenRegisterModal,
  onExploreProjects,
  onOpenVipModal,
  onOpenCalculator,
}) => {
  return (
    <section className="relative min-h-[94vh] pt-32 pb-24 bg-[#06101E] overflow-hidden flex items-center">
      
      {/* Background Dubai Skyline Architectural Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop"
          alt="Dubai Skyline Architectural Landmark - VANTAGE DEVELOPMENTS"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-[#06101E]/80 to-[#06101E]/60" />
      </div>

      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#C5A059]/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0A192F]/40 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A192F] border border-[#C5A059]/40 shadow-xl"
            >
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em]">
                PREMIUM UAE REAL ESTATE DEVELOPER • 216+ MASTER RELEASES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#FAFAFA] tracking-tight leading-[0.95]"
            >
              Where Vision <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#FAFAFA]">
                Meets
              </span> <br />
              Address.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Architectural luxury, waterfront sky towers, and masterplan villa estates shaping the UAE's most iconic sovereign horizons.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2 font-serif text-xs font-bold uppercase tracking-wider"
            >
              <button
                onClick={onOpenRegisterModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black flex items-center gap-2.5 transition-all shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02]"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenVipModal && (
                <button
                  onClick={onOpenVipModal}
                  className="px-6 py-4 rounded-xl bg-[#0A192F] hover:bg-[#122644] border border-[#C5A059]/40 text-[#C5A059] flex items-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>VIP Launch Pass</span>
                </button>
              )}

              <button
                onClick={onExploreProjects}
                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 flex items-center gap-2 transition-all"
              >
                <span>Browse 216+ Releases</span>
              </button>
            </motion.div>

            {/* Floating Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              {VANTAGE_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">{stat.value}</span>
                  <span className="text-[10px] text-stone-400 uppercase block font-sans">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Architectural Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl bg-[#0A192F] group"
            >
              <div className="relative h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                  alt="VANTAGE HORIZON Architectural Landmark"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-transparent to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 bg-[#06101E]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#C5A059]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <div>
                  <span className="text-[#C5A059] font-bold block">Dubai • Abu Dhabi Flagships</span>
                  <span className="text-[10px] text-stone-400">100% On-Time Handover Record</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0A192F]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#C5A059] font-bold block">VANTAGE HORIZON (Dubai Marina)</span>
                  <span className="text-[10px] text-stone-400">Off-Plan Launch | From AED 1.85M</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#06101E] text-sky-400 border border-sky-500/30 font-bold">
                  FLAGSHIP 2026
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
