'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Building2 } from 'lucide-react';
import { NEXORA_BRAND } from '@/data/nexoraData';

interface NexoraFinalCTAProps {
  onOpenConsultationModal: () => void;
}

export const NexoraFinalCTA: React.FC<NexoraFinalCTAProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="py-28 bg-[#121417] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Architectural Glow */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
          alt="Dubai Executive Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-[#121417]/80 to-[#121417]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#1A1D24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto shadow-xl">
          <Building2 className="w-8 h-8" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#F7F6F2] leading-tight">
          Your Next Chapter Starts With <br />
          One Conversation.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Speak with a UAE business advisor about your goals, structure and growth plans.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultationModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#D4AF37]/20 hover:scale-105 transition-all"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={NEXORA_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp an Advisor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
