'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Droplets,
  Gauge,
  Radio,
  RefreshCw,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Database,
  Waves
} from 'lucide-react';

export function AquavantaCommandCenter() {
  const [isLive, setIsLive] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLive]);

  const livePressure = (4.12 + Math.sin(tick * 0.5) * 0.08).toFixed(2);
  const liveFlow = (42100 + Math.cos(tick * 0.4) * 850).toLocaleString();

  return (
    <section id="command-center" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header & Mandatory Disclaimer Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>NETWORK OPERATIONS — SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Subterranean Network Command Center
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              Real-time simulated telemetry monitoring water pressure dynamics, reservoir capacity balance, chemical potability, and acoustic leak anomalies across metropolitan zones.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLive(!isLive)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLive ? 'animate-spin text-cyan-400' : 'text-slate-500'}`} />
              <span>{isLive ? 'SCADA STREAMING ACTIVE' : 'PAUSED'}</span>
            </button>
          </div>
        </div>

        {/* 6 Core Simulation Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase mb-2">
              <span>Main Line Pressure</span>
              <span className="text-emerald-400 font-semibold">Nominal</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
              {livePressure} <span className="text-sm font-normal text-cyan-400">Bar</span>
            </div>
            <div className="text-xs text-slate-400 mt-2">Target: 4.0 – 4.5 Bar across DMAs</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase mb-2">
              <span>Aggregated Flow Velocity</span>
              <span className="text-cyan-400 font-semibold">+2.1% Morning</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
              {liveFlow} <span className="text-sm font-normal text-cyan-400">m³/h</span>
            </div>
            <div className="text-xs text-slate-400 mt-2">Across 12 District Metering Areas</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase mb-2">
              <span>Reservoir Ingress</span>
              <span className="text-emerald-400 font-semibold">88.4% Full</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
              1,330 <span className="text-sm font-normal text-teal-400">ML</span>
            </div>
            <div className="text-xs text-slate-400 mt-2">Al Marmoom & Al Taweelah Vaults</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase mb-2">
              <span>Water Quality Index</span>
              <span className="text-emerald-400 font-semibold">100% WHO</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
              99.8 <span className="text-sm font-normal text-cyan-400">/ 100</span>
            </div>
            <div className="text-xs text-slate-400 mt-2">Turbidity: 0.12 NTU • pH 7.42</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase mb-2">
              <span>Acoustic Hydrophones</span>
              <span className="text-emerald-400 font-semibold">24.8k Active</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
              1 <span className="text-sm font-normal text-amber-400">Micro-Variance</span>
            </div>
            <div className="text-xs text-amber-400 mt-2">● Automated PRV isolation active</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase mb-2">
              <span>24h Demand Forecast</span>
              <span className="text-cyan-400 font-semibold">98.4% Acc.</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
              398.2 <span className="text-sm font-normal text-cyan-400">k m³</span>
            </div>
            <div className="text-xs text-slate-400 mt-2">LSTM Diurnal Curve Prediction</div>
          </div>
        </div>

        {/* Live Operational Status Bar */}
        <div className="rounded-xl bg-slate-950/90 border border-slate-800/80 p-4 font-mono text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">ALL 12 METROPOLITAN DMAs SYNCHRONIZED</span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">SWRO Desalination Inflow at 42,000 m³/h</span>
          </div>
          <div className="text-[11px] text-slate-500">
            SIMULATION ONLY • ALL METRICS FOR SYSTEM DEMONSTRATION
          </div>
        </div>
      </div>
    </section>
  );
}
