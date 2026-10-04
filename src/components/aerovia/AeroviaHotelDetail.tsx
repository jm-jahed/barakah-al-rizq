'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star, MapPin, CheckCircle2, ShieldCheck, Coffee, Waves, Utensils, Bed, ArrowRight } from 'lucide-react';

export const AeroviaHotelDetail: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#03060c] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#091422] to-[#040810] border border-amber-500/30 shadow-2xl">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400">HOTEL SPOTLIGHT • TOKYO</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-950 border border-amber-500/40 text-amber-300">
                  5-Star Palace Distinction
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Aman Tokyo & Sky Sanctuary</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Otemachi Tower, 1-5-6 Otemachi, Chiyoda-ku, Tokyo 100-0004</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">Nightly Standard Rate</span>
              <span className="text-2xl font-extrabold font-mono text-amber-300">AED 3,450 / night</span>
            </div>
          </div>

          {/* 3 Room Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl bg-[#060c16] border border-amber-500/40 relative">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30 mb-2 inline-block">
                RECOMMENDED
              </span>
              <h4 className="text-base font-bold text-white mb-1">Premier Grand Room</h4>
              <p className="text-xs text-slate-400 font-mono mb-4">71m² • King Bed • Imperial Palace View</p>
              <div className="text-lg font-bold text-amber-300 font-mono mb-4">AED 3,450 <span className="text-xs text-slate-500">/ night</span></div>
              <div className="space-y-1.5 text-xs font-mono text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Breakfast for 2 included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Private Onsen access</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#060c16] border border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 mb-2 inline-block">
                SUITE UPGRADE
              </span>
              <h4 className="text-base font-bold text-white mb-1">Corner Sky Suite</h4>
              <p className="text-xs text-slate-400 font-mono mb-4">121m² • Dual Aspect Tokyo Skyline</p>
              <div className="text-lg font-bold text-white font-mono mb-4">AED 5,900 <span className="text-xs text-slate-500">/ night</span></div>
              <div className="space-y-1.5 text-xs font-mono text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dedicated Butler Service</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>USD 100 Hotel Credit</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#060c16] border border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 mb-2 inline-block">
                FLAGSHIP SUITE
              </span>
              <h4 className="text-base font-bold text-white mb-1">The Aman Presidential Suite</h4>
              <p className="text-xs text-slate-400 font-mono mb-4">157m² • Private Dining Room & Spa</p>
              <div className="text-lg font-bold text-white font-mono mb-4">AED 9,800 <span className="text-xs text-slate-500">/ night</span></div>
              <div className="space-y-1.5 text-xs font-mono text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Maybach Chauffeur Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Daily Michelin In-Suite Chef</span>
                </div>
              </div>
            </div>
          </div>

          {/* Complimentary Aerovia VIP Amenities */}
          <div className="p-6 rounded-2xl bg-[#03060c] border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs font-mono text-slate-300">
                <strong className="text-white">AEROVIA VIP Hotel Privileges:</strong> Guaranteed room upgrade upon availability • 4 PM late check-out • Daily artisanal breakfast • USD 100 spa voucher.
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shrink-0">
              AED 1,450 Added Value Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
