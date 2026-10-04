'use client';

import React from 'react';
import { ArrowRight, Award, Sun, Droplets, Sparkles } from 'lucide-react';
import { HOTEL_ROOMS, RoomType } from '@/data/hotelData';

interface SignatureSuiteProps {
  onSelectRoom: (room: RoomType) => void;
}

export const SignatureSuite: React.FC<SignatureSuiteProps> = ({ onSelectRoom }) => {
  const flagshipSuite = HOTEL_ROOMS.find((r) => r.id === 'jumeirah-bay-penthouse') || HOTEL_ROOMS[1];

  return (
    <section className="py-24 bg-[#141210] relative border-b border-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl bg-[#1C1917] h-[540px] sm:h-[620px] flex items-end p-8 sm:p-16">
          
          {/* Parallax Background */}
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
            alt="The Royal Duplex Penthouse - Velora Palace Dubai"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/60 to-transparent" />

          {/* Top Floating Badge */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-[#29221D]/90 backdrop-blur-md border border-[#C5A059]/50 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-xl">
              <Sparkles className="w-3.5 h-3.5" />
              PALACE FLAGSHIP PENTHOUSE
            </span>
          </div>

          {/* Bottom Content Card */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-300">
              <span className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10">145 m² Duplex</span>
              <span>• Private Rooftop Pool</span>
              <span>• 360° Burj Al Arab & Skyline Views</span>
              <span>• Rolls-Royce Ghost Included</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight">
              Wake above the Arabian Gulf.
            </h2>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              The Jumeirah Bay Royal Duplex Penthouse spans two palatial levels with double-height atriums, a heated rooftop freshwater plunge pool, formal majlis dining room, and dedicated 24/7 Royal Butler.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => onSelectRoom(flagshipSuite)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] hover:to-[#c49f2b] text-black font-bold text-xs font-sans tracking-wide transition-all shadow-xl flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Explore The Royal Penthouse</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-sm font-mono text-[#C5A059] font-bold">
                AED {flagshipSuite.pricePerNightAED.toLocaleString()} / night
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
