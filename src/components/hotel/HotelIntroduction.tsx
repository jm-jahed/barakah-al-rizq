'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

export const HotelIntroduction: React.FC = () => {
  return (
    <section id="house" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Information Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                THE PALACE SANCTUARY
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight">
              A private world on the Arabian Gulf.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
              {VELORA_BRAND.name} is an intimate 42-residence luxury beachfront palace where contemporary Arabian-Mediterranean architecture, bespoke private plunge pools, and 24/7 dedicated Royal Butler service meet.
            </p>

            <p className="text-sm text-stone-400 font-light leading-relaxed">
              Constructed directly along the secluded coral crescent of Jumeirah Bay Island and Palm Jumeirah, every architectural line is designed for sublime serenity — from hand-honed travertine walls to private superyacht moorings.
            </p>

            {/* Editorial Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 font-mono text-center">
              <div className="p-3.5 bg-[#29221D] rounded-2xl border border-stone-800">
                <span className="text-2xl font-serif font-bold text-[#C5A059] block">{VELORA_BRAND.stats.totalRooms}</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-1">RESIDENCES</span>
              </div>
              <div className="p-3.5 bg-[#29221D] rounded-2xl border border-stone-800">
                <span className="text-2xl font-serif font-bold text-[#C5A059] block">{VELORA_BRAND.stats.suitesCount}</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-1">PALACE SUITES</span>
              </div>
              <div className="p-3.5 bg-[#29221D] rounded-2xl border border-stone-800">
                <span className="text-2xl font-serif font-bold text-[#C5A059] block">08</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-1">BEACH VILLAS</span>
              </div>
              <div className="p-3.5 bg-[#29221D] rounded-2xl border border-stone-800">
                <span className="text-2xl font-serif font-bold text-[#C5A059] block">2★</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-1">MICHELIN DINING</span>
              </div>
            </div>

          </div>

          {/* Right Asymmetric Photography Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              
              <div className="col-span-8 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[380px] relative">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
                  alt="Velora Palace Architecture"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-4 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[280px] my-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                  alt="Velora Palace Terrace View"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Quote Pill */}
            <div className="absolute -bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#29221D]/90 backdrop-blur-md border border-[#C5A059]/30 shadow-2xl text-xs font-serif italic text-[#F7F4EE]">
              "Built for those who value absolute privacy, ultra-luxury craftsmanship, and the tranquil waters of Jumeirah Bay."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
