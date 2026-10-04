'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AEROVIA_TRAVEL_ALERTS } from '@/data/aeroviaData';
import { 
  Activity, 
  Plane, 
  Building2, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Radio
} from 'lucide-react';

export const AeroviaOperationsCenter: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020409] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Radio className="w-3.5 h-3.5 text-amber-400" />
              JOURNEY CONTROL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Global Operations. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                Continuous Airspace Monitoring.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 font-bold">
              TRAVEL SYSTEM SIMULATION
            </span>
            <p className="text-xs text-slate-400 mt-2 font-mono">Live telemetry across global airspace & partner hotel inventory</p>
          </div>
        </div>

        {/* 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Active Worldwide Journeys</span>
              <Plane className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-white font-mono mb-2">1,842</div>
            <p className="text-xs text-emerald-400 font-mono">100% On-Schedule Tracking</p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Curated 5-Star Properties</span>
              <Building2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white font-mono mb-2">4,920</div>
            <p className="text-xs text-amber-300 font-mono">Direct GDS Live Inventory</p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Average Search Latency</span>
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white font-mono mb-2">420 ms</div>
            <p className="text-xs text-slate-400 font-mono">Sub-Second Multi-GDS Aggregation</p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">On-Time Route Reliability</span>
              <ShieldCheck className="w-4 h-4 text-amber-300" />
            </div>
            <div className="text-3xl font-bold text-white font-mono mb-2">99.4%</div>
            <p className="text-xs text-slate-400 font-mono">Proactive Re-Booking Protection</p>
          </div>
        </div>

        {/* Live Travel Alerts Feed */}
        <div className="p-8 rounded-3xl bg-[#060c14] border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
            Live Airspace & Terminal Advisories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AEROVIA_TRAVEL_ALERTS.map((alert) => (
              <div key={alert.id} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-amber-300 font-bold">{alert.code}</span>
                  <span className="text-slate-500">{alert.time}</span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{alert.title}</h4>
                <p className="text-[11px] text-slate-400 font-mono">{alert.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
