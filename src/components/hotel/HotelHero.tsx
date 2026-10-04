'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Compass, MapPin, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

interface HotelHeroProps {
  onOpenBookingModal: () => void;
  onExploreHouse: () => void;
}

export const HotelHero: React.FC<HotelHeroProps> = ({
  onOpenBookingModal,
  onExploreHouse,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-36 pb-24 bg-[#1C1917] overflow-hidden flex flex-col justify-between">
      
      {/* Slow Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop"
          alt="Velora Palace & Oasis Resort Dubai Infinity Beachfront"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-[#1C1917]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1C1917]/40 to-[#1C1917]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl space-y-8">
          
          {/* Metadata Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-[#29221D]/90 border border-[#C5A059]/40 backdrop-blur-md shadow-xl"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-mono font-medium text-stone-200 uppercase tracking-widest">
              JUMEIRAH BAY ISLAND, DUBAI • EST. {VELORA_BRAND.establishedYear}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
            <span className="text-[11px] font-mono text-[#D4AF37] font-bold">AED 2,450+ / NIGHT</span>
          </motion.div>

          {/* Display Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-serif text-[#F7F4EE] tracking-tight leading-[1.05]"
          >
            Stay Somewhere{' '}
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4EE] via-[#D4AF37] to-[#C5A059]">
              Extraordinary.
            </span>
          </motion.h1>

          {/* Supporting Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-stone-300 max-w-2xl font-sans font-light leading-relaxed"
          >
            An ultra-exclusive architectural sanctuary and beachfront palace on Jumeirah Bay Island and Palm Jumeirah. 42 handcrafted suites and beachfront villas, 2 Michelin-starred gastronomy, and 24/7 dedicated Royal Butler service.
          </motion.p>

          {/* Key Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 font-mono text-xs text-stone-300"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Forbes Travel Guide 5-Star</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Complimentary Rolls-Royce DXB Transfer</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenBookingModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] hover:to-[#c49f2b] text-black font-bold text-sm tracking-wide transition-all shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve Suite • From AED 2,450</span>
            </button>

            <button
              onClick={onExploreHouse}
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#F7F4EE] font-serif text-sm transition-all backdrop-blur-md"
            >
              Explore Sanctuary & Suites
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs font-mono text-stone-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
          <span>BOUTIQUE ARCHITECTURAL PALACE • DUBAI</span>
        </div>

        <button
          onClick={onExploreHouse}
          className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
