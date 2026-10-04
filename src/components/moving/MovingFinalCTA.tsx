'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Phone, Home } from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

interface MovingFinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const MovingFinalCTA: React.FC<MovingFinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#143A2A] via-[#1C1917] to-[#292524] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Subtle Route Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D96B27]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#143A2A] to-[#D96B27] p-0.5 mx-auto mb-6 shadow-2xl">
          <div className="w-full h-full bg-[#1C1917] rounded-[14px] flex items-center justify-center">
            <Home className="w-8 h-8 text-[#D96B27]" />
          </div>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-[#FDFBF7] tracking-tight leading-tight mb-6 font-serif">
          Let's make moving the easy part.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us where you're going. We'll take care of everything in between — from carefully packed boxes to your last reassembled bed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#D96B27] to-[#E87A36] hover:from-[#c25c1d] hover:to-[#d66a27] text-white font-extrabold text-sm flex items-center gap-3 transition-all shadow-xl shadow-[#D96B27]/25 hover:scale-[1.02]"
          >
            <span>Get My Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={NESTMOVE_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm flex items-center gap-3 transition-all backdrop-blur-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Talk to a Moving Specialist</span>
          </a>
        </div>

      </div>
    </section>
  );
};
