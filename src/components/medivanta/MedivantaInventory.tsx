'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { INVENTORY_HUBS } from '@/data/medivantaData';
import { 
  BarChart2, 
  Thermometer, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Truck, 
  TrendingUp,
  Layers,
  Building
} from 'lucide-react';

export const MedivantaInventory: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#03070d] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
              <BarChart2 className="w-3.5 h-3.5 text-emerald-300" />
              SMART INVENTORY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Inventory That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Thinks Ahead.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              INVENTORY SIMULATION
            </span>
            <p className="text-xs text-slate-400 mt-2 font-mono">Predictive demand models across UAE micro-fulfillment network</p>
          </div>
        </div>

        {/* 4 Inventory Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INVENTORY_HUBS.map((hub) => (
            <div
              key={hub.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#08121c] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                    {hub.coldChainIntegrity}% QC
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">{hub.hubName}</h3>
                <p className="text-xs text-slate-400 font-mono mb-4">{hub.location}</p>

                <div className="space-y-2.5 p-3 rounded-xl bg-[#03060c] border border-slate-800 text-[11px] font-mono text-slate-300 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Active SKUs:</span>
                    <strong className="text-white">{hub.skuCount.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dispatch Speed:</span>
                    <strong className="text-emerald-400">{hub.dispatchReadiness}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Active Couriers:</span>
                    <strong className="text-cyan-300">{hub.activeCouriers} units</strong>
                  </div>
                </div>
              </div>

              {/* Utilization bar */}
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-slate-400">Capacity Load:</span>
                  <span className="text-emerald-400 font-bold">{hub.capacityUtilization}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    style={{ width: `${hub.capacityUtilization}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demand Signals Pipeline Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#07111c] via-[#040910] to-[#07111c] border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Demand Signals → Automated Stock Balancing</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Seasonal epidemiological spikes and chronic medication refill rhythms automatically schedule supplier replenishment before stock depletion.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
              99.8% Fill Rate Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
