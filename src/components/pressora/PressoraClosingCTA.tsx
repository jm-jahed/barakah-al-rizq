'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Printer, ShieldCheck, Send } from 'lucide-react';

export const PressoraClosingCTA: React.FC<{ onStartConfig?: () => void; onRequestQuote?: () => void }> = ({
  onStartConfig,
  onRequestQuote
}) => {
  return (
    <section className="py-24 bg-neutral-950 text-white border-t border-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>START PRODUCTION TODAY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-light tracking-tight mb-6">
          From Digital to <span className="font-serif italic text-amber-400">Physical.</span>
        </h2>

        <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-10">
          Equip your enterprise with tactile stationery, branded packaging, and high-impact marketing print engineered to the highest UAE standards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartConfig}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Launch Live 3D Configurator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium text-sm flex items-center justify-center gap-3 transition-colors"
          >
            <Send className="w-4 h-4 text-amber-400" />
            <span>Request Custom Enterprise Quote</span>
          </button>
        </div>

        <div className="mt-12 text-xs text-neutral-500 font-mono">
          PRESSORA · Precision Commercial Print · Dubai Production City & Abu Dhabi Hubs
        </div>
      </div>
    </section>
  );
};
