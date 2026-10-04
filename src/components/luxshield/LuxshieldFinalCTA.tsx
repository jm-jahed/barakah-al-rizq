'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { LUXSHIELD_BRAND } from '@/data/luxshieldData';

interface LuxshieldFinalCTAProps {
  onOpenBookingModal: (pkgId?: string) => void;
}

export const LuxshieldFinalCTA: React.FC<LuxshieldFinalCTAProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-black/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest inline-block">
          PROTECT YOUR INVESTMENT
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Give Your Car the Protection It Deserves.
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 font-light max-w-2xl mx-auto">
          Book your detailing appointment and experience showroom-level care backed by official warranties up to 7 years.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-8 py-4 rounded-2xl bg-[#0B0C0E] hover:bg-[#14161A] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3"
          >
            <span>BOOK YOUR DETAILING NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={LUXSHIELD_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp for a Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
};