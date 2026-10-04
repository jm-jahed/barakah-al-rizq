'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, MessageCircle, Building2, TrendingUp, Award, MapPin } from 'lucide-react';
import { NEXORA_BRAND, NEXORA_TRUST_STATS } from '@/data/nexoraData';

interface NexoraHeroProps {
  onOpenConsultationModal: () => void;
  onExploreServices: () => void;
}

export const NexoraHero: React.FC<NexoraHeroProps> = ({
  onOpenConsultationModal,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 bg-[#121417] overflow-hidden flex items-center">
      
      {/* Background Architectural Skyline Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop"
          alt="Dubai Financial District Skyline"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-[#121417]/85 to-[#121417]/70" />
      </div>

      <div className="absolute top-1/4 -right-10 w-[550px] h-[550px] bg-[#D4AF37]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0F382C]/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1D24] border border-[#D4AF37]/40 shadow-xl"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
                PREMIUM UAE BUSINESS CONSULTANCY & CORPORATE ADVISORY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#F7F6F2] tracking-tight leading-[0.96]"
            >
              Turn Your UAE <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-stone-200">
                Business Ambition
              </span> <br />
              Into Reality.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Strategic business advisory for founders, investors and companies building their next chapter in the UAE.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenConsultationModal}
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] hover:from-[#c49f2b] hover:to-[#a37e37] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-8 py-4 rounded-xl bg-[#1A1D24] hover:bg-stone-800 border border-stone-700 text-[#F7F6F2] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Explore Our Services</span>
              </button>
            </motion.div>

            {/* Floating Trust Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              {NEXORA_TRUST_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D4AF37] block">{stat.value}</span>
                  <span className="text-[10px] text-stone-400 uppercase block font-sans">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Executive Image & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl bg-[#1A1D24] group"
            >
              <div className="relative h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                  alt="Dubai Corporate Advisory Executive"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 bg-[#121417]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#D4AF37]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <div>
                  <span className="text-[#D4AF37] font-bold block">Dubai • Abu Dhabi</span>
                  <span className="text-[10px] text-stone-400">DIFC & Al Maryah Offices</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#1A1D24]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#D4AF37] font-bold block">Corporate Structuring & Tax</span>
                  <span className="text-[10px] text-stone-400">100% Compliant 9% Tax Setup</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#0F382C] text-emerald-300 border border-emerald-500/30 font-bold">
                  VERIFIED UAE
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
