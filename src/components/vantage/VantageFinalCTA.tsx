'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Building2 } from 'lucide-react';
import { VANTAGE_BRAND } from '@/data/vantageData';

interface VantageFinalCTAProps {
  onOpenRegisterModal: () => void;
}

export const VantageFinalCTA: React.FC<VantageFinalCTAProps> = ({ onOpenRegisterModal }) => {
  return (
    <section className="py-28 bg-[#06101E] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
          alt="Dubai Skyline Architectural Landmark"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-[#06101E]/80 to-[#06101E]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#0A192F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto shadow-xl">
          <Building2 className="w-8 h-8" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#FAFAFA] leading-tight">
          Your Next Address Starts Here.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Explore our off-plan launches, view architectural models at our Business Bay Sales Gallery, or schedule a private consultation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenRegisterModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-105 transition-all"
          >
            <span>Register Your Interest</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={VANTAGE_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Our Sales Team</span>
          </a>
        </div>

      </div>
    </section>
  );
};
