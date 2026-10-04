'use client';

import React from 'react';
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

interface BarakahFinalCTAProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const BarakahFinalCTA: React.FC<BarakahFinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#063D24] via-[#042A18] to-[#063D24] text-white relative font-sans overflow-hidden border-t border-emerald-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>DUBAI AL AWEER VEG MARKET WHOLESALE HUB</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight font-sans">
          Ready to Lock in Premium Wholesale Foodstuff Rates?
        </h2>

        <p className="text-gray-200 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Partner with <strong>BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</strong> for reliable farm-to-table food imports, spot Al Aweer market rates, and reefer truck supply across the UAE.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenQuoteModal()}
            className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 border border-amber-300"
          >
            <span>REQUEST IMMEDIATE WHOLESALE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={BARAKAH_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl border border-emerald-500"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CHAT WITH SALES ON WHATSAPP</span>
          </a>
        </div>

        <div className="pt-6 font-mono text-xs text-amber-200/80 flex items-center justify-center gap-6">
          <span>SALES DESK: {BARAKAH_BRAND.phones[0]}</span>
          <span>•</span>
          <span>EMAIL: {BARAKAH_BRAND.email}</span>
        </div>

      </div>
    </section>
  );
};