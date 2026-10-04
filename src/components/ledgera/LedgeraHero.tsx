'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, TrendingUp, MapPin, Calculator } from 'lucide-react';
import { LEDGERA_BRAND, LEDGERA_STATS } from '@/data/ledgeraData';

interface LedgeraHeroProps {
  onOpenConsultationModal: () => void;
  onExploreServices: () => void;
}

export const LedgeraHero: React.FC<LedgeraHeroProps> = ({
  onOpenConsultationModal,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 bg-[#0A291C] overflow-hidden flex items-center">
      
      {/* Background Dubai Financial District Architecture Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="Dubai Business Bay Financial District Architecture"
          className="w-full h-full object-cover opacity-15 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A291C] via-[#0A291C]/85 to-[#0A291C]/70" />
      </div>

      <div className="absolute top-1/4 -right-10 w-[550px] h-[550px] bg-[#D4AF37]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0E3B27]/40 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0E3B27] border border-[#D4AF37]/40 shadow-xl"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
                UAE ACCOUNTING, BOOKKEEPING & CORPORATE TAX (9%)
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#F7F6F2] tracking-tight leading-[0.96]"
            >
              Financial Clarity <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-stone-200">
                For Every Stage
              </span> <br />
              Of Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Accounting, tax and compliance advisory built for UAE businesses that can't afford to get it wrong.
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
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-8 py-4 rounded-xl bg-[#0E3B27] hover:bg-stone-800 border border-stone-700 text-[#F7F6F2] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Explore Our Services</span>
              </button>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              {LEDGERA_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D4AF37] block">{stat.value}</span>
                  <span className="text-[10px] text-stone-400 uppercase block font-sans">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Editorial Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl bg-[#0E3B27] group"
            >
              <div className="relative h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="LEDGERA Accounting & Tax Advisory Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A291C] via-transparent to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 bg-[#0A291C]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#D4AF37]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <div>
                  <span className="text-[#D4AF37] font-bold block">Dubai • Abu Dhabi • Sharjah</span>
                  <span className="text-[10px] text-stone-400">FTA Alignment & IFRS Standards</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0E3B27]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#D4AF37] font-bold block">Zero Late-Filing Penalties</span>
                  <span className="text-[10px] text-stone-400">For All Retained Managed Clients</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#0A291C] text-emerald-300 border border-emerald-500/30 font-bold">
                  VERIFIED ADVISORY
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
