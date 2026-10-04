'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Building2, 
  Users, 
  Calendar, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  CreditCard
} from 'lucide-react';

interface AeroviaBookingSummaryProps {
  onConfirmJourney?: () => void;
}

export const AeroviaBookingSummary: React.FC<AeroviaBookingSummaryProps> = ({ onConfirmJourney }) => {
  return (
    <section className="relative py-24 bg-[#020509] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-950/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#091524] via-[#050b14] to-[#02050a] border border-amber-500/40 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                TRAVEL WALLET & RESERVATION SUMMARY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Your Journey, Together.</h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              Direct GDS Price Verified
            </div>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-[#060c16] border border-slate-800">
              <div className="text-amber-400 flex items-center gap-1.5 font-bold mb-1">
                <Plane className="w-3.5 h-3.5" />
                FLIGHTS
              </div>
              <div className="text-slate-200 font-bold">Dubai (DXB) ↔ Tokyo (HND)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">EK 318 / EK 319 • Business Suite</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#060c16] border border-slate-800">
              <div className="text-amber-400 flex items-center gap-1.5 font-bold mb-1">
                <Building2 className="w-3.5 h-3.5" />
                STAY
              </div>
              <div className="text-slate-200 font-bold">Aman Tokyo (5 Nights)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Premier Grand Room • Onsen Inc.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#060c16] border border-slate-800">
              <div className="text-amber-400 flex items-center gap-1.5 font-bold mb-1">
                <Users className="w-3.5 h-3.5" />
                TRAVELERS
              </div>
              <div className="text-slate-200 font-bold">2 Adults (First / Business)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">12 Nov — 17 Nov 2026</p>
            </div>
          </div>

          {/* Checkout & Action */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Inclusive Amount</span>
              <div className="text-3xl font-extrabold text-white font-mono text-amber-300">
                AED 31,920
              </div>
              <span className="text-[10px] font-mono text-slate-500">All Taxes, Hotel Credits & Chauffeur Included</span>
            </div>

            <button
              onClick={onConfirmJourney}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-sm sm:text-base font-mono transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-black" />
              Confirm & Lock Journey <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
