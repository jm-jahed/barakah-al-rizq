'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, ShieldCheck, Star, MapPin } from 'lucide-react';
import { LUXSHIELD_BRAND } from '@/data/luxshieldData';

interface LuxshieldHeroProps {
  onOpenBookingModal: (pkgId?: string) => void;
}

export const LuxshieldHero: React.FC<LuxshieldHeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#0B0C0E] via-[#14161A] to-[#0A0B0D] text-white overflow-hidden font-sans">
      {/* Studio Lighting Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/15 blur-[220px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-slate-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold font-mono text-blue-200 uppercase tracking-widest">
                PREMIUM UAE CAR DETAILING &amp; CERAMIC STUDIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
            >
              A Finish That Outlasts <br />
              the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">UAE Sun.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              {LUXSHIELD_BRAND.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenBookingModal()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-blue-950/60 hover:scale-105 transition-all flex items-center gap-3 font-mono"
              >
                <span>BOOK YOUR DETAILING</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#beforeafter"
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <span>See Before &amp; After</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/15"
            >
              <div>
                <span className="block text-xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                  {LUXSHIELD_BRAND.vehiclesCoatedCount}
                </span>
                <span className="text-xs text-gray-400 font-medium">Vehicles Coated</span>
              </div>
              <div>
                <span className="block text-xl sm:text-3xl font-extrabold text-amber-300 font-mono">
                  {LUXSHIELD_BRAND.hardnessRating}
                </span>
                <span className="text-xs text-gray-400 font-medium">Ceramic Hardness</span>
              </div>
              <div>
                <span className="block text-xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {LUXSHIELD_BRAND.maxWarranty}
                </span>
                <span className="text-xs text-gray-400 font-medium">Package Warranty</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-400 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none">DUBAI (AL QUOZ 1) • ABU DHABI (MUSSAFAH M-14)</span>
            </div>
          </div>

          {/* Right Column Glossy Supercar Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#14161A]/90 backdrop-blur-xl p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
                  alt="LUXSHIELD High-Gloss Ceramic Coating Showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Studio Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-blue-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
                  <span>5-Star Rated Detailing Studio</span>
                </div>

                {/* Floating Hydrophobic Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-blue-500/30 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      NANO-CERAMIC SHIELD
                    </span>
                    <span className="text-sm font-bold text-white font-mono">
                      Extreme Hydrophobic Water Beading
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-500/40">
                    Up to 7-Yr Warranty
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};