'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Clock, Shield, Target } from 'lucide-react';

export const NexaraAnalytics: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0d18] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>PLAYER INTELLIGENCE & TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Combat <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Analytics</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            In-depth performance breakdown, headshot accuracy ratios, and weekly playtime trends.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Weekly Playtime</span>
              <Clock className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-white">28.4 hrs</div>
            <div className="text-[11px] text-emerald-400 mt-2 font-mono">↑ 14% vs last week</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>K/D Ratio</span>
              <Target className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-rose-400">3.42</div>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">Across 5v5 Ranked</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Headshot Precision</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-amber-400">48.6%</div>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">Photon Railgun Spec</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Season Rating Delta</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-emerald-400">+480 MMR</div>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">Climbing Season 04</div>
          </div>
        </div>

        {/* Weekly XP Breakdown */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
          <div className="text-xs font-mono uppercase text-slate-400 mb-4">
            Daily XP Production Flow (Last 7 Days)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-xs font-mono">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d, i) => (
              <div key={d} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                <div className="text-slate-500 text-[10px]">{d}</div>
                <div className="text-cyan-400 font-bold mt-1">+{1200 + i * 350}</div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-500 h-full" style={{ width: `${50 + i * 8}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
