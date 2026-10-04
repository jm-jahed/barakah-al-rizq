'use client';

import React from 'react';
import {
  Truck,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { REEFER_COMPANY_INFO } from '@/data/reeferLogisticsData';

interface ReeferCTAProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferCTA({ onOpenQuote }: ReeferCTAProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#060a12] relative border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,165,233,0.12),rgba(0,0,0,0))]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Glow Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium mb-6">
          <Truck className="w-4 h-4 animate-pulse" />
          <span>24/7 GCC DISPATCH DESK • DUBAI BASE</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono uppercase leading-tight mb-6">
          READY TO MOVE YOUR CARGO ACROSS THE GCC?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Tell us your route, cargo type and temperature requirements. Our team will prepare the right transport solution for your shipment.
        </p>

        {/* 3 Prominent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12">
          
          {/* Primary CTA */}
          <button
            onClick={() => onOpenQuote()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 text-white font-bold font-mono text-sm tracking-wider shadow-xl shadow-sky-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>GET A TRANSPORT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Call CTA */}
          <a
            href={`tel:${REEFER_COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold font-mono text-sm tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL LOGISTICS TEAM</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={REEFER_COMPANY_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold font-mono text-sm tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>

        </div>

        {/* Trust verification pills */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>20 Dedicated 25T Reefers</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>-18°C to +4°C Certified</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>UAE & GCC Border Cleared</span>
          </span>
        </div>

      </div>
    </section>
  );
}
