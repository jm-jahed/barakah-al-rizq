'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Scale, MapPin } from 'lucide-react';
import { VERITAS_BRAND, VERITAS_STATS } from '@/data/veritasData';

interface VeritasHeroProps {
  onOpenConsultationModal: () => void;
  onExplorePractices: () => void;
}

export const VeritasHero: React.FC<VeritasHeroProps> = ({
  onOpenConsultationModal,
  onExplorePractices,
}) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 bg-[#0B132B] overflow-hidden flex items-center">
      
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="DIFC Financial District Architecture"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/85 to-[#0B132B]/70" />
      </div>

      <div className="absolute top-1/4 -right-10 w-[550px] h-[550px] bg-[#C5A059]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0F1C3F]/40 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0F1C3F] border border-[#C5A059]/40 shadow-xl"
            >
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest">
                UAE CORPORATE & FINANCIAL FREE ZONE LEGAL ADVISORY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#FAF8F5] tracking-tight leading-[0.96]"
            >
              Legal Clarity for <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-stone-200">
                Ambitious UAE
              </span> <br />
              Businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Corporate legal advisory for founders, investors and companies operating across the UAE's most demanding markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenConsultationModal}
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02]"
              >
                <span>Book a Legal Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePractices}
                className="px-8 py-4 rounded-xl bg-[#0F1C3F] hover:bg-stone-800 border border-stone-700 text-[#FAF8F5] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Explore Practice Areas</span>
              </button>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              {VERITAS_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">{stat.value}</span>
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
              className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl bg-[#0F1C3F] group"
            >
              <div className="relative h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                  alt="VERITAS LEGAL Senior Partner Counsel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 bg-[#0B132B]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#C5A059]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <div>
                  <span className="text-[#C5A059] font-bold block">DIFC • ADGM • Dubai • Abu Dhabi</span>
                  <span className="text-[10px] text-stone-400">Common & Civil Law Chambers</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0F1C3F]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#C5A059] font-bold block">Corporate M&A & DIFC Foundations</span>
                  <span className="text-[10px] text-stone-400">Airtight Commercial Compliance</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#0B132B] text-emerald-300 border border-emerald-500/30 font-bold">
                  PRIVILEGED COUNSEL
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
