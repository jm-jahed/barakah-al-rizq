'use client';

import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Clock 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferCTAProps {
  onOpenQuote: () => void;
}

export default function ReeferCTA({ onOpenQuote }: ReeferCTAProps) {
  const { isDark } = useReeferTheme();

  return (
    <section className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Sub-badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold shadow-xs ${
          isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
        }`}>
          <Truck className="w-3.5 h-3.5 text-amber-500" />
          <span>IMMEDIATE GCC FLEET DEPLOYMENT</span>
        </div>

        {/* Master Headline */}
        <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight ${
          isDark ? 'text-white' : 'text-[#111111]'
        }`}>
          READY TO MOVE YOUR CARGO ACROSS THE GCC?
        </h2>

        {/* Supporting Copy */}
        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal ${
          isDark ? 'text-slate-300' : 'text-[#4B5563]'
        }`}>
          Tell us your route, cargo type and temperature requirements. Our team will prepare the right transport solution for your shipment.
        </p>

        {/* 3 Primary Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary CTA */}
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>GET A TRANSPORT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA: Call */}
          <a
            href="tel:+97148812900"
            className={`w-full sm:w-auto px-7 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider border-2 transition-all flex items-center justify-center gap-2.5 shadow-2xs ${
              isDark ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700' : 'bg-white hover:bg-slate-50 text-[#111111] border-slate-300'
            }`}
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>CALL OUR LOGISTICS TEAM</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/971508924471?text=Hello%20Khaleej%20Reefer%20Logistics,%20I%20would%20like%20to%20request%20a%2025-ton%20reefer%20quote%20for%20Dubai%20to%20GCC."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>

        </div>

        {/* Operational Reassurance */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Response within 30 minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Direct fleet allocation (Zero subcontracting)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-sky-400" />
            <span>20 dedicated 25-ton 15m reefer trailers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
