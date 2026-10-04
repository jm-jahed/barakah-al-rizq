'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Compass } from 'lucide-react';
import { AUREN_BRAND } from '@/data/aurenData';

interface AurenFinalCTAProps {
  onOpenConsultationModal: () => void;
}

export const AurenFinalCTA: React.FC<AurenFinalCTAProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="py-28 bg-[#080A09] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
          alt="Dubai Financial District Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/80 to-[#080A09]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#1A1D1B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto shadow-xl">
          <Compass className="w-8 h-8" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#F8F6F0] leading-tight">
          Wealth Built to Last Generations.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Begin a private, no-obligation conversation with a senior Managing Partner in DIFC or ADGM.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultationModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#D4AF37]/20 hover:scale-105 transition-all"
          >
            <span>Book a Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={AUREN_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Our Advisory Desk</span>
          </a>
        </div>

      </div>
    </section>
  );
};
