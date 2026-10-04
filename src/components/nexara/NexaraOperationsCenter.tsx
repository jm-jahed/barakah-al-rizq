'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Radio, ShieldAlert, CheckCircle2, RefreshCw, Cpu, Server } from 'lucide-react';
import { NEXARA_OPERATIONS } from '@/data/nexaraData';

export const NexaraOperationsCenter: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>PLATFORM OPERATIONS SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              NEXARA <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Control</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Global server cluster telemetry, anti-cheat threat heuristics, and low-latency Middle East routing.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs text-slate-400 font-mono">
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>{NEXARA_OPERATIONS.lastSyncTime}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Active Players Online</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-white">{NEXARA_OPERATIONS.activePlayersOnline}</div>
            <div className="text-[11px] text-emerald-400 mt-2 font-mono">Peak Concurrent Daily</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Active Match Sessions</span>
              <Activity className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-white">{NEXARA_OPERATIONS.activeMatchSessions}</div>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">Across 24 Titles</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Dubai Edge Node Ping</span>
              <Server className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-emerald-400">{NEXARA_OPERATIONS.averageLatencyDubaiNode}</div>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">Direct Peering Active</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>Anti-Cheat Integrity</span>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-mono font-bold text-cyan-400">100%</div>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">{NEXARA_OPERATIONS.antiCheatScansPerSec} scans/s</div>
          </div>
        </div>
      </div>
    </section>
  );
};
