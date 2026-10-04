'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Activity, Cpu, Database, Radio, Gauge, Sliders, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function AquavantaDigitalTwin() {
  const [activeLayer, setActiveLayer] = useState<'all' | 'reservoirs' | 'pipelines' | 'pumps' | 'valves' | 'sensors'>('all');

  const layers = [
    { id: 'all', label: 'Complete Digital Twin', desc: 'Unified multi-dimensional spatial representation of subterranean water assets.' },
    { id: 'reservoirs', label: 'Strategic Reservoirs', desc: 'Acoustic-level strategic storage nodes balancing municipal peak drawdowns.' },
    { id: 'pipelines', label: 'Mains & Looped Rings', desc: '8,450 km of ductile iron and HDPE trunk pipelines with friction loss tracking.' },
    { id: 'pumps', label: 'VFD Booster Pumps', desc: 'Variable speed turbine pumps matching real-time pressure demands.' },
    { id: 'valves', label: 'Modulated PRVs', desc: 'Smart pressure reducing valves preventing pipe stress and water hammer.' },
    { id: 'sensors', label: 'IoT Hydrophone Mesh', desc: '24,800 acoustic and electromagnetic transducers streaming real-time telemetry.' }
  ];

  return (
    <section id="digital-twin" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030713] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HYDRAULIC TWIN SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            A Digital Twin of the Network.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Merging physical underground water mains with mathematical hydraulic algorithms to model pressure transients, predict pipeline fatigue, and simulate municipal expansion scenarios.
          </p>
        </div>

        {/* Interactive Layer Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id as any)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 border ${
                activeLayer === l.id
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:text-white hover:bg-slate-900'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Digital Twin Central Visualizer Stage */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden font-mono">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Abstract Blueprint (7 cols) */}
            <div className="lg:col-span-7 bg-[#02050E] rounded-xl border border-cyan-950/80 p-6 relative overflow-hidden min-h-[320px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>EPANET PHYSICS ENGINE ACTIVE</span>
                </span>
                <span>MESH RESOLUTION: 0.1m</span>
              </div>

              {/* Schematic Network Layer Map */}
              <div className="py-8 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <div className="p-3 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs">
                    SWRO INTAKE #01 (42k m³/h)
                  </div>
                  <span className="text-cyan-500">━━━►</span>
                  <div className="p-3 rounded-lg bg-teal-950/80 border border-teal-800 text-teal-300 text-xs">
                    TREATMENT & REMINERALIZATION
                  </div>
                  <span className="text-cyan-500">━━━►</span>
                  <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300 text-xs">
                    RESERVOIR VAULT #01 (450 ML)
                  </div>
                </div>

                <div className="text-slate-600 font-mono text-xs">│ │ │</div>

                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs">
                    VFD BOOSTER STATION #04
                  </div>
                  <span className="text-cyan-500">━━━►</span>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs">
                    MODULATED PRV MANIFOLD
                  </div>
                  <span className="text-cyan-500">━━━►</span>
                  <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs">
                    DMA RESIDENTIAL DELIVERY (3.85 BAR)
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 text-right">
                SPATIAL GIS MODEL: EPSG:3997 (UAE SURVEY GRID)
              </div>
            </div>

            {/* Twin Capabilities Detail (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs text-cyan-400 uppercase tracking-wider">
                Digital Twin Capabilities
              </div>
              <h3 className="text-2xl font-bold text-white font-sans">
                Predictive Hydraulic Simulation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light font-sans leading-relaxed">
                The digital twin continuously correlates physical SCADA telemetry with theoretical hydraulic algorithms, detecting pipe wall friction increases, sediment build-up, and pump wear before outages occur.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Real-time water age & chlorine dissipation modeling.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Simulation of emergency trunk-line closure scenarios.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Optimized pumping schedules against variable energy tariffs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
