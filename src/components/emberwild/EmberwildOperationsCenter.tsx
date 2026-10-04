'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Flame, RefreshCw, CheckCircle2, ShieldCheck, Sun } from 'lucide-react';
import { EMBERWILD_OPERATIONS } from '@/data/emberwildData';

export const EmberwildOperationsCenter: React.FC = () => {
  return (
    <section className="py-20 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE OPERATIONS SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-100">
              Wilderness <span className="font-serif italic text-amber-400">Operations Hub</span>
            </h2>
            <p className="text-stone-400 text-sm mt-1">
              Real-time occupancy, guest arrivals, trail safety checks, and solar power metrics across 24 UAE retreats.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 px-4 py-2 rounded-full text-xs text-stone-400">
            <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{EMBERWILD_OPERATIONS.lastSyncTime}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Overall Occupancy</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-stone-100">{EMBERWILD_OPERATIONS.currentOccupancy}</div>
            <div className="text-[11px] text-emerald-400 mt-2 font-mono">21 of 24 Stays Active</div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Guests On-Site</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-stone-100">{EMBERWILD_OPERATIONS.activeGuests}</div>
            <div className="text-[11px] text-stone-400 mt-2 font-mono">14 Arrivals · 11 Departures</div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Booked Experiences</span>
              <Flame className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-mono font-medium text-stone-100">{EMBERWILD_OPERATIONS.activeExperiencesBooked}</div>
            <div className="text-[11px] text-stone-400 mt-2 font-mono">Stargazing & Hearth Tonight</div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Infrastructure Telemetry</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-emerald-400">100%</div>
            <div className="text-[11px] text-stone-400 mt-2 font-mono">All 24 Off-Grid Microgrids OK</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <span>{EMBERWILD_OPERATIONS.weatherStatus}</span>
          <span className="text-amber-400">{EMBERWILD_OPERATIONS.firepitSafetyCondition}</span>
        </div>
      </div>
    </section>
  );
};
