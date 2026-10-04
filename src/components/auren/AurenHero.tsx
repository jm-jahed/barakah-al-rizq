'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, MapPin, Compass } from 'lucide-react';
import { AUREN_STATS } from '@/data/aurenData';

interface AurenHeroProps {
  onOpenConsultationModal: () => void;
  onExploreApproach: () => void;
}

export const AurenHero: React.FC<AurenHeroProps> = ({
  onOpenConsultationModal,
  onExploreApproach,
}) => {
  return (
    <section className="relative min-h-[94vh] pt-32 pb-24 bg-[#080A09] overflow-hidden flex items-center">
      
      {/* Background Architectural DIFC / ADGM Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop"
          alt="DIFC & ADGM Architecture - AUREN CAPITAL Private Wealth"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/80 to-[#080A09]/60" />
      </div>

      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-950/20 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1D1B] border border-[#D4AF37]/40 shadow-xl"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
                DIFC & ADGM PRIVATE WEALTH ADVISORY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#F8F6F0] tracking-tight leading-[0.95]"
            >
              Your Wealth Deserves <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#F8F6F0]">
                A Deliberate
              </span> <br />
              Strategy.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Private financial advisory for individuals and families building long-term wealth across the UAE and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenConsultationModal}
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] hover:from-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02]"
              >
                <span>Book a Private Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreApproach}
                className="px-8 py-4 rounded-xl bg-[#1A1D1B] hover:bg-stone-800 border border-stone-700 text-[#F8F6F0] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Our Advisory Approach</span>
              </button>
            </motion.div>

            {/* Fictional Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              {AUREN_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D4AF37] block">{stat.value}</span>
                  <span className="text-[10px] text-stone-400 uppercase block font-sans">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#14181B] group"
            >
              <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="DIFC Advisory Boardroom - AUREN CAPITAL Private Wealth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/20 to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 bg-[#080A09]/95 backdrop-blur-xl px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-[#D4AF37]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="text-[#D4AF37] font-bold block text-[11px] sm:text-xs">Dubai (DIFC) • Abu Dhabi (ADGM)</span>
                  <span className="text-[9px] sm:text-[10px] text-stone-400">Institutional Governance</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-[#14181B]/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-stone-700/80 shadow-2xl flex items-center justify-between font-mono text-xs gap-2">
                <div>
                  <span className="text-[#D4AF37] font-bold block text-[11px] sm:text-xs">Absolute Client Discretion</span>
                  <span className="text-[9px] sm:text-[10px] text-stone-400">Confidential Private Advisory</span>
                </div>
                <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-lg bg-[#080A09] text-amber-300 border border-amber-500/30 font-bold shrink-0">
                  INDEPENDENT ADVISORY
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
