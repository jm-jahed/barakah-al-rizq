'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Palmtree, ArrowRight, ShieldCheck, MapPin, Award, MessageCircle } from 'lucide-react';
import { OASIRA_BRAND } from '@/data/oasiraData';

interface OasiraHeroProps {
  onExploreResorts: () => void;
  onOpenBookingModal: () => void;
}

export const OasiraHero: React.FC<OasiraHeroProps> = ({
  onExploreResorts,
  onOpenBookingModal,
}) => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 bg-[#0A2920] overflow-hidden flex items-center">
      
      {/* Background Parallax Visual & Emerald Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop"
          alt="Luxury UAE Resort Ocean Sunset"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2920] via-[#0A2920]/80 to-[#0A2920]/60" />
      </div>

      <div className="absolute top-1/4 -right-10 w-[600px] h-[600px] bg-[#D4B382]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2A7F7A]/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0F382C] border border-[#D4B382]/40 shadow-lg backdrop-blur-md"
            >
              <Palmtree className="w-4 h-4 text-[#D4B382]" />
              <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest">
                PREMIUM UAE STAYCATION & RESORT BOOKING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#FAF6EE] tracking-tight leading-[0.95]"
            >
              Your Next Escape <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#2A7F7A]">
                Is Closer Than
              </span> <br />
              You Think.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Discover unforgettable UAE staycations, beachfront retreats and desert escapes—without the long flight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreResorts}
                className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] hover:from-[#c2a170] hover:to-[#c49f2b] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-[#D4B382]/20 hover:scale-[1.02]"
              >
                <span>Explore Resorts</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={OASIRA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#0F382C] hover:bg-stone-800 border border-stone-700 text-[#FAF6EE] font-mono text-xs font-bold flex items-center gap-3 transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge (+971 50)</span>
              </a>
            </motion.div>

            {/* Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800/80 max-w-xl font-mono text-xs text-stone-300"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4B382] flex-shrink-0" />
                <span>100% UAE AED Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4B382] flex-shrink-0" />
                <span>Instant Stay Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4B382] flex-shrink-0" />
                <span>7 Emirates Destinations</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Card Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl bg-[#0F382C] group"
            >
              <div className="relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
                  alt="Azure Palm Resort Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2920] via-transparent to-transparent" />
              </div>

              <div className="absolute top-5 right-5 bg-[#0A2920]/90 backdrop-blur-xl px-4 py-2 rounded-2xl border border-[#D4B382]/40 shadow-2xl font-mono text-xs text-white">
                <span className="text-[#D4B382] font-bold block">Azure Palm Resort</span>
                <span className="text-[10px] text-stone-300">Palm Jumeirah, Dubai</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 bg-[#0F382C]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#D4B382] font-bold block">Weekend Staycation Deal</span>
                  <span className="text-[10px] text-stone-400">2 Nights + Breakfast + Spa</span>
                </div>
                <span className="text-lg font-bold text-white">AED 2,490</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
