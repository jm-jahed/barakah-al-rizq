'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Waves,
  TrendingUp,
  ArrowDownRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { RESERVOIR_NODES, ReservoirNode } from '@/data/aquavantaData';

export function AquavantaReservoirIntelligence() {
  const [selectedResId, setSelectedResId] = useState<string>('res-alpha');
  const selectedRes =
    RESERVOIR_NODES.find((r) => r.id === selectedResId) || RESERVOIR_NODES[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030713] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Waves className="w-3.5 h-3.5" />
            <span>STRATEGIC STORAGE & BUFFERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Balance Before Demand Arrives.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Predictive machine-learning algorithms anticipate daily municipal withdrawal peaks, balancing strategic covered reservoirs to prevent grid strain and stagnation.
          </p>
        </div>

        {/* 3 Reservoir Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {RESERVOIR_NODES.map((res) => {
            const isSelected = res.id === selectedResId;
            return (
              <button
                key={res.id}
                onClick={() => setSelectedResId(res.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-cyan-400 uppercase">{res.location}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                      {res.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {res.name}
                  </h3>
                </div>

                {/* Fluid level visualizer */}
                <div className="my-6">
                  <div className="flex items-baseline justify-between font-mono text-xs mb-2">
                    <span className="text-slate-400">Current Volume:</span>
                    <span className="text-xl font-bold text-cyan-300">
                      {res.currentLevelPct}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div
                      style={{ width: `${res.currentLevelPct}%` }}
                      className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full rounded-full transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>Capacity: {res.capacityMegaLitres} ML</span>
                  <span className="text-teal-400">{res.forecastDemand24h}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Reservoir Telemetry Breakdown */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 font-mono text-xs">
          <div className="text-xs uppercase tracking-wider text-slate-400 mb-4">
            Live Hydro-Dynamic Inflow & Outflow Telemetry
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Inflow Rate</div>
              <div className="text-xl font-bold text-emerald-400 mt-1 flex items-center gap-1">
                <ArrowDownRight className="w-4 h-4" />
                {selectedRes.inflowM3H.toLocaleString()} m³/h
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Outflow Rate</div>
              <div className="text-xl font-bold text-cyan-400 mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                {selectedRes.outflowM3H.toLocaleString()} m³/h
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Total Capacity</div>
              <div className="text-xl font-bold text-white mt-1">
                {selectedRes.capacityMegaLitres} MegaLitres
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">24h AI Forecast</div>
              <div className="text-sm font-bold text-teal-300 mt-1">
                {selectedRes.forecastDemand24h}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
