'use client';

import React from 'react';
import { ArrowRight, Award, Calendar } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

interface HotelFinalCTAProps {
  onOpenBookingModal: () => void;
  onOpenConciergeModal: () => void;
}

export const HotelFinalCTA: React.FC<HotelFinalCTAProps> = ({
  onOpenBookingModal,
  onOpenConciergeModal,
}) => {
  return (
    <section className="py-32 bg-[#141210] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
          alt="Velora House Sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/80 to-[#141210]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="w-12 h-12 rounded-full border border-[#C5A059]/40 p-0.5 mx-auto flex items-center justify-center bg-[#29221D]">
          <span className="font-serif text-lg font-bold text-[#C5A059]">V</span>
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif text-[#F7F4EE] leading-tight">
          Your room is waiting.
        </h2>

        <p className="text-lg sm:text-xl text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
          Come for the view. Stay for everything else.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBookingModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] hover:to-[#c49f2b] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02]"
          >
            Check Availability
          </button>

          <button
            onClick={onOpenConciergeModal}
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#F7F4EE] font-serif text-xs transition-all backdrop-blur-md"
          >
            Contact Concierge
          </button>
        </div>

      </div>
    </section>
  );
};
