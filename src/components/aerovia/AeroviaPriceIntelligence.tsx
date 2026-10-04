'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, CheckCircle2, Lock, ArrowRight, HelpCircle } from 'lucide-react';

export const AeroviaPriceIntelligence: React.FC = () => {
  const [selectedFareTier, setSelectedFareTier] = useState<'essential' | 'flex' | 'premium'>('flex');

  return (
    <section className="relative py-28 bg-[#03060c] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <TrendingDown className="w-3.5 h-3.5 text-amber-400" />
            PRICE INTELLIGENCE & FARE TRANSPARENCY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Know the Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Before You Book.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Zero hidden booking surcharges. Transparent line-item pricing in AED with 72-hour guaranteed fare hold protection.
          </p>
        </div>

        {/* 2-Column Grid: Price Breakdown & Fare Flexibility Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Line Item Breakdown Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/30 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <h3 className="font-bold text-white text-base">Journey Cost Breakdown</h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300">
                  DEMO PRICING
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Flights (DXB ↔ HND Suite):</span>
                  <strong className="text-white">AED 8,420</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Hotel (Aman Tokyo 5N):</span>
                  <strong className="text-white">AED 17,250</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Curated VIP Experiences:</span>
                  <strong className="text-white">AED 4,800</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Government Airport Taxes & Tourism:</span>
                  <strong className="text-slate-400">AED 1,450</strong>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex justify-between text-base">
                  <span className="font-sans font-bold text-white">Total Package Cost:</span>
                  <span className="font-bold text-amber-300 text-xl">AED 31,920</span>
                </div>
              </div>

              {/* Fare Lock Guarantee */}
              <div className="mt-6 p-4 rounded-2xl bg-[#040810] border border-amber-500/20 flex items-center gap-3 text-xs font-mono text-slate-300">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong className="text-amber-300">72-Hour Fare Lock:</strong> Hold this exact journey price for 3 days with zero cancellation penalty.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Fare Comparison Options */}
          <div className="lg:col-span-7 space-y-4">
            {/* Essential */}
            <div
              onClick={() => setSelectedFareTier('essential')}
              className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                selectedFareTier === 'essential'
                  ? 'bg-[#08121f] border-amber-500/60 shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-amber-400/30'
                  : 'bg-[#060c14]/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-white">Essential Journey Tier</h4>
                <span className="text-sm font-mono font-bold text-slate-300">Standard Base Rate</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Standard checked baggage, confirmed seat selection, and non-refundable room rate.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                <span>• 2 × 32kg Baggage</span>
                <span>• Standard Change Fee</span>
              </div>
            </div>

            {/* Flex (Recommended) */}
            <div
              onClick={() => setSelectedFareTier('flex')}
              className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                selectedFareTier === 'flex'
                  ? 'bg-[#08121f] border-amber-500/60 shadow-[0_0_25px_rgba(212,175,55,0.2)] ring-1 ring-amber-400/40'
                  : 'bg-[#060c14]/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">Flex Journey Tier</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-500/30">
                    MOST POPULAR
                  </span>
                </div>
                <span className="text-sm font-mono font-bold text-amber-300">+ AED 650 / person</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Unlimited free date changes, full hotel cancellation up to 48h prior, and fast-track airport lounge passes.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-emerald-400">
                <span>• 100% Free Date Changes</span>
                <span>• 4 PM Late Check-out</span>
                <span>• VIP Fast-Track</span>
              </div>
            </div>

            {/* Premium */}
            <div
              onClick={() => setSelectedFareTier('premium')}
              className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                selectedFareTier === 'premium'
                  ? 'bg-[#08121f] border-amber-500/60 shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-amber-400/30'
                  : 'bg-[#060c14]/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-white">Aerovia Black Concierge Tier</h4>
                <span className="text-sm font-mono font-bold text-amber-300">+ AED 1,800 / person</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Private Maybach airport chauffeur, dedicated 24/7 personal travel alchemist, and 100% full cash refund flexibility.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-cyan-300">
                <span>• 100% Full Refundable</span>
                <span>• Chauffeur Transfers</span>
                <span>• 24/7 WhatsApp Butler</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
