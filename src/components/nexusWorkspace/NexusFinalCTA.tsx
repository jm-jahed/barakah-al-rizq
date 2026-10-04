'use client';

import React from 'react';
import { NEXUS_BRAND } from '@/data/nexusWorkspaceData';

export default function NexusFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B1120] to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
          <span>Immediate Move-In & Ejari Generation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Ready to Elevate Your UAE Business Presence?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Book a private viewing at any of our 5 flagship centers across Dubai and Abu Dhabi. Receive an instant formal quote in AED with complete Ejari quota certification.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tour"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5"
          >
            Book VIP Walkthrough Pass
          </a>
          <a
            href={`https://wa.me/971508821122?text=${encodeURIComponent(
              'Hello NEXUS Concierge, I would like to arrange an immediate corporate workspace viewing.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition"
          >
            <span>💬</span>
            <span>WhatsApp Leasing Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
}
