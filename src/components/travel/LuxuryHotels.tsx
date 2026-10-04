'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { LUXURY_HOTELS_DATA, LuxuryHotel } from '@/data/travelData';

interface LuxuryHotelsProps {
  onSelectHotel: (hotel: LuxuryHotel) => void;
  onOpenInquiry: (hotelContext?: string) => void;
}

export const LuxuryHotels: React.FC<LuxuryHotelsProps> = ({ onSelectHotel, onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hotels" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>PALATIAL RESIDENCES & 5-STAR PARTNER SANCTUARIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Hotel Suites</span> & Villas.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Preferred partner benefits including guaranteed suite upgrades, daily complimentary champagne breakfast, and late checkout.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-amber-400 font-bold block">Aman • Soneva • Belmond</span>
            <span className="text-[11px] text-slate-500">VIP Amenities Guaranteed</span>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LUXURY_HOTELS_DATA.map((hotel, idx) => (
            <motion.article
              key={hotel.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden group backdrop-blur-md"
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Photo Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold">
                      AED {hotel.pricePerNightAED.toLocaleString()} / night
                    </span>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/80 backdrop-blur-md text-amber-400 text-xs font-bold font-mono">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-slate-200 text-[10px] font-mono">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{hotel.destination}, {hotel.country}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                    {hotel.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {hotel.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono block mt-1">
                    {hotel.roomType}
                  </span>
                </div>

                {/* Exclusive Perks */}
                <div className="space-y-1 pt-1 border-t border-white/5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                    Aurelia VIP Inclusions:
                  </span>
                  {hotel.exclusivePerks.slice(0, 2).map((perk, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono truncate">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelectHotel(hotel)}
                  className="flex-1 py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspect Suite</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenInquiry(`Hotel Suite Reservation: ${hotel.name} - ${hotel.roomType} (AED ${hotel.pricePerNightAED.toLocaleString()} / night)`)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Book
                </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
