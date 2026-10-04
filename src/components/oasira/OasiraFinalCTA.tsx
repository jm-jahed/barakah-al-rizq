'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Palmtree } from 'lucide-react';
import { OASIRA_BRAND } from '@/data/oasiraData';

interface OasiraFinalCTAProps {
  onOpenBookingModal: () => void;
}

export const OasiraFinalCTA: React.FC<OasiraFinalCTAProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-28 bg-[#0A2920] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
          alt="OASIRA Luxury UAE Escape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2920] via-[#0A2920]/80 to-[#0A2920]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#0F382C] border border-[#D4B382]/40 flex items-center justify-center text-[#D4B382] mx-auto shadow-xl">
          <Palmtree className="w-8 h-8" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#FAF6EE] leading-tight">
          Your UAE escape starts here.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Beautiful stays, unforgettable experiences and less time planning.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBookingModal}
            className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#D4B382]/20 hover:scale-105 transition-all"
          >
            <span>Explore Resorts</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={OASIRA_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-500/40 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>

      </div>
    </section>
  );
};
