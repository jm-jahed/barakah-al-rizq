'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Radio,
  Server,
  Activity,
  Cpu,
  Wifi,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { STRATOSYN_REGIONS, ComputeRegion } from '@/data/stratosynData';

export function StratosynGlobalFabric() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('uae-central');

  const selectedRegion =
    STRATOSYN_REGIONS.find((r) => r.id === selectedRegionId) || STRATOSYN_REGIONS[0];

  return (
    <section id="infrastructure-fabric" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070A12] border-b border-slate-800/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>GLOBAL COMPUTE FABRIC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              7 Strategic Geographies. Zero Boundaries.
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              Conceptual distributed infrastructure fabric routing compute, data, and acceleration directly to where global applications and sovereign perimeters require them.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-400 bg-slate-900/80 px-4 py-2.5 rounded-lg border border-slate-800">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>SIMULATED NETWORK STATUS: OPTIMAL</span>
          </div>
        </div>

        {/* Global Fabric Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Region Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 mb-2 flex items-center justify-between">
              <span>Select Active Fabric Hub</span>
              <span>7 Regions Available</span>
            </div>

            {STRATOSYN_REGIONS.map((region) => {
              const isSelected = region.id === selectedRegionId;
              const isUae = region.id === 'uae-central';

              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900/90 border-sky-500/60 shadow-lg shadow-sky-950/40 ring-1 ring-sky-500/40'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-sky-500 text-slate-950'
                          : isUae
                          ? 'bg-sky-950/80 text-sky-400 border border-sky-800/50'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {region.code.split('-')[1]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          {region.city}
                        </span>
                        {isUae && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
                            UAE Core
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        {region.country} • {region.code}
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <div className="text-xs font-bold text-sky-400">
                      {region.latencyMs} ms
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {region.activeNodes} nodes
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Region Deep Telemetry Panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden"
              >
                {/* Region Banner Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span>{selectedRegion.tier}</span>
                      <span>•</span>
                      <span>{selectedRegion.code}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {selectedRegion.name}
                    </h3>
                    <p className="text-sm text-slate-400 font-mono mt-1">
                      Coordinates: {selectedRegion.coordinates.x}° N, {selectedRegion.coordinates.y}° E
                    </p>
                  </div>

                  <div className="text-right font-mono bg-slate-900/90 px-3.5 py-2 rounded-lg border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Simulated Latency</div>
                    <div className="text-xl font-bold text-emerald-400">
                      {selectedRegion.latencyMs} <span className="text-xs font-normal">ms</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Telemetry 4-Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 font-mono">
                    <div className="text-[10px] text-slate-400 uppercase">Active Nodes</div>
                    <div className="text-lg font-bold text-white mt-0.5">
                      {selectedRegion.activeNodes}
                    </div>
                    <div className="text-[10px] text-sky-400">Bare-Metal</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 font-mono">
                    <div className="text-[10px] text-slate-400 uppercase">Utilization</div>
                    <div className="text-lg font-bold text-white mt-0.5">
                      {selectedRegion.capacityUtilization}%
                    </div>
                    <div className="text-[10px] text-emerald-400">Balanced</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 font-mono">
                    <div className="text-[10px] text-slate-400 uppercase">Bandwidth</div>
                    <div className="text-lg font-bold text-white mt-0.5">
                      {selectedRegion.bandwidthCapacity.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400">Edge Uplink</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 font-mono">
                    <div className="text-[10px] text-slate-400 uppercase">Status</div>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">
                      {selectedRegion.status}
                    </div>
                    <div className="text-[10px] text-emerald-400">● 100% Health</div>
                  </div>
                </div>

                {/* Primary Workload Description */}
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Primary Regional Workload Profile
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {selectedRegion.primaryWorkload}
                  </div>
                </div>

                {/* Availability Zones Pill List */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Isolated Availability Zones
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.availabilityZones.map((az) => (
                      <span
                        key={az}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {az}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Features */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Fabric Highlights & Enclave Security
                  </div>
                  <div className="space-y-2">
                    {selectedRegion.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-slate-300 font-sans"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Conceptual disclaimer banner */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            Notice: All regional nodes, latency numbers, and metrics represent platform concept simulation data.
          </p>
        </div>
      </div>
    </section>
  );
}
