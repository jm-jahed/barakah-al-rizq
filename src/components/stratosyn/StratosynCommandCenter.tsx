'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Cpu, Terminal, RefreshCw, Sliders, ShieldCheck, CheckCircle, Radio, Wifi, Database } from 'lucide-react';
import {
  LIVE_SIMULATION_METRICS,
  SIMULATION_LOGS,
  SimulationLog
} from '@/data/stratosynData';

export function StratosynCommandCenter() {
  const [logs, setLogs] = useState<SimulationLog[]>(SIMULATION_LOGS);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'compute' | 'throughput' | 'mesh'>('all');
  const [isSimulating, setIsSimulating] = useState(true);

  // Dynamic log generator for simulated streaming activity
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      const regions = ['ME-DXB-01', 'EU-FRA-01', 'UK-LON-01', 'AP-SIN-01', 'US-NYC-01', 'AP-TYO-01', 'GLOBAL-MESH'];
      const events = [
        'Predictive BGP Anycast re-routed 12.4k packets with zero jitter',
        'Sovereign zero-trust token refreshed for banking enclave',
        'NVMe-oF cross-region active consensus hash verified',
        'Auto-scale container pool spawned 12 additional microservices',
        'FP8 tensor batch completed in 1.4ms with 99.8% precision',
        'Continuous eBPF sentinel scanned 48,000 syscalls: 0 anomalies'
      ];
      const statuses: Array<'OPTIMAL' | 'SCALED' | 'ROUTED' | 'ENCLAVE_VERIFIED' | 'REBALANCED'> = [
        'OPTIMAL',
        'SCALED',
        'ROUTED',
        'ENCLAVE_VERIFIED',
        'REBALANCED'
      ];

      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${Math.floor(
        now.getMilliseconds() / 10
      )
        .toString()
        .padStart(2, '0')}`;

      const newLog: SimulationLog = {
        id: `log-${Date.now()}`,
        timestamp: timeStr,
        region: regions[Math.floor(Math.random() * regions.length)],
        event: events[Math.floor(Math.random() * events.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        latency: `${(1 + Math.random() * 8).toFixed(1)}ms`,
        throughput: `${(20 + Math.random() * 120).toFixed(1)} Gbps`
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 7)]);
    }, 3200);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const filteredMetrics =
    selectedCategory === 'all'
      ? LIVE_SIMULATION_METRICS
      : LIVE_SIMULATION_METRICS.filter((m) => m.category === selectedCategory);

  return (
    <section id="command-center" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060C] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header & Mandatory Disclaimer Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
              <span>LIVE INFRASTRUCTURE SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Global Operations Command Center
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              Real-time simulated telemetry demonstrating autonomous workload distribution, cluster utilization, and cross-continental packet velocity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-sky-400' : 'text-slate-500'}`} />
              <span>{isSimulating ? 'STREAMING ACTIVE' : 'PAUSED'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          <span className="text-slate-400 text-[11px] uppercase mr-2">Filter Telemetry:</span>
          {(['all', 'compute', 'throughput', 'mesh'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Core Simulation Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors font-mono"
            >
              <div className="flex items-center justify-between text-slate-400 text-xs uppercase tracking-wider mb-2">
                <span>{metric.label}</span>
                <span className="text-emerald-400 font-semibold">{metric.change}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white my-1 flex items-baseline gap-1.5">
                {metric.value}
                <span className="text-sm font-normal text-sky-400">{metric.unit}</span>
              </div>
              <div className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>{metric.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Streaming Terminal / Log Output */}
        <div className="rounded-2xl bg-[#030508] border border-slate-800/90 overflow-hidden font-mono shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span className="text-slate-200 font-bold">stratosyn-telemetry-feed:~$ tail -f /var/log/mesh/events.log</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE LOG INGESTION</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-2.5 max-h-80 overflow-y-auto text-xs text-slate-300">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 rounded bg-slate-950/40 hover:bg-slate-900/60 border border-slate-900/60 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-2.5">
                  <span className="text-slate-400 text-[11px]">{log.timestamp}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-sky-300 border border-slate-700">
                    {log.region}
                  </span>
                  <span className="text-slate-200 text-xs font-sans sm:font-mono">{log.event}</span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-right shrink-0 mt-1 sm:mt-0 font-mono">
                  <span className="text-slate-400">Lat: {log.latency}</span>
                  <span className="text-indigo-400">Tput: {log.throughput}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/60 text-right text-[11px] text-slate-500">
            SIMULATION ENGINE: AUTONOMOUS TELEMETRY SYNTHESIZER • SOC-2 AUDIT TRACE SIMULATION
          </div>
        </div>
      </div>
    </section>
  );
}
