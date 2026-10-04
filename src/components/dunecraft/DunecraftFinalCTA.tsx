'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { DUNECRAFT_BRAND } from '@/data/dunecraftData';

interface DunecraftFinalCTAProps {
  onOpenBookingModal: (expId?: string) => void;
}

export const DunecraftFinalCTA: React.FC<DunecraftFinalCTAProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#2A1405] via-[#1C0D02] to-[#0E0601] text-white relative overflow-hidden font-sans border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
          WHERE THE DESERT COMES ALIVE
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          Your Arabian Sunset Awaits.
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto">
          Book your desert safari experience today with complimentary hotel pickup and all-inclusive pricing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3"
          >
            <span>BOOK SAFARI NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={DUNECRAFT_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};