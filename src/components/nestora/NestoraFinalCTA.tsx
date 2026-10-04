'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Building2 } from 'lucide-react';
import { NESTORA_BRAND } from '@/data/nestoraData';

interface NestoraFinalCTAProps {
  onOpenConsultationModal: () => void;
}

export const NestoraFinalCTA: React.FC<NestoraFinalCTAProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="py-28 bg-[#082023] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
          alt="Dubai Skyline Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082023] via-[#082023]/80 to-[#082023]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#0C2D31] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto shadow-xl">
          <Building2 className="w-8 h-8" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#F4EFE6] leading-tight">
          Your Property. Managed With Precision.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Speak with a senior asset manager about hands-off property management in Dubai or Abu Dhabi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultationModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-105 transition-all"
          >
            <span>Get a Free Property Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={NESTORA_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp a Property Manager</span>
          </a>
        </div>

      </div>
    </section>
  );
};
