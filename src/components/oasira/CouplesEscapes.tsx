'use client';

import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface CouplesEscapesProps {
  onOpenBookingModal: () => void;
}

export const CouplesEscapes: React.FC<CouplesEscapesProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-24 bg-[#0A2920] relative overflow-hidden text-center border-b border-stone-800">
      
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop"
          alt="Romantic UAE Escape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2920] via-[#0A2920]/80 to-[#0A2920]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-12 h-12 rounded-full border border-[#D4B382]/40 p-0.5 mx-auto flex items-center justify-center bg-[#0F382C]">
          <Heart className="w-6 h-6 text-[#D4B382]" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#FAF6EE] leading-tight">
          Just the two of you.
        </h2>

        <p className="text-lg sm:text-xl text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Private desert pool villas, sunset yacht charters, couples hammams, and candlelit dune dinners tailored for anniversaries and quiet getaways.
        </p>

        <div className="p-4 rounded-2xl bg-[#0F382C]/90 border border-stone-700 inline-block font-mono text-xs text-[#D4B382]">
          <span>Romantic UAE Escape Package • 2 Nights • AED 2,950</span>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenBookingModal}
            className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl"
          >
            <span>Explore Romantic Stays</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
