'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Thermometer, Clock, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

const OVEN_BATCHES = [
  { id: 'BATCH-042', product: 'Signature Sourdough', stage: 'Final Bake & Bloom', temp: 245, targetTemp: 245, timeLeft: '12m 40s', heatLevel: 'High Conduction', stone: 'Refractory Hearth #1' },
  { id: 'BATCH-043', product: 'Croissants de Beurre', stage: 'Steam Expansion', temp: 210, targetTemp: 210, timeLeft: '06m 15s', heatLevel: 'Gentle Convection', stone: 'Perforated Deck #2' },
  { id: 'BATCH-046', product: 'Basque Burnt Cheesecake', stage: 'Caramelization', temp: 235, targetTemp: 235, timeLeft: '18m 50s', heatLevel: 'Top Radiation', stone: 'Cast Iron Tray' },
  { id: 'BATCH-048', product: 'Almond Croissant (Twice Baked)', stage: 'Frangipane Toast', temp: 175, targetTemp: 175, timeLeft: '04m 20s', heatLevel: 'Medium Deck', stone: 'Granite Deck #3' }
];

export const FlameFlourOvenVisualization: React.FC = () => {
  const [selectedBatchIdx, setSelectedBatchIdx] = useState<number>(0);
  const currentBatch = OVEN_BATCHES[selectedBatchIdx];

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>LIVE HEARTH TELEMETRY · BAKERY OPERATIONS SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Inside the Refractory Oven
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Real-time heat monitoring across our custom wood-fired deck ovens and volcanic stone hearths.
          </p>
        </div>

        {/* Main Simulated Oven Frame */}
        <div className="bg-[#120f0d] rounded-3xl border border-stone-800/80 shadow-2xl overflow-hidden p-6 sm:p-10 relative">
          {/* Glowing Oven Chamber Simulation */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#1c0e07] via-[#2b1407] to-[#0a0503] p-8 border border-amber-900/40 overflow-hidden mb-8 shadow-inner">
            {/* Animated fire heat shimmer / embers */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.25)_0%,rgba(180,83,9,0.15)_40%,transparent_80%)] pointer-events-none animate-pulse" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 font-mono text-xs mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>HEARTH STATUS: IN OVEN FIRING</span>
                </div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">{currentBatch.id}</div>
                <h3 className="text-3xl sm:text-4xl font-serif text-stone-100 mt-1">
                  {currentBatch.product}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  Stage: <span className="text-amber-300 font-medium">{currentBatch.stage}</span>
                </p>
              </div>

              {/* Live Temperature Gauge Display */}
              <div className="flex items-center gap-6 bg-black/60 p-6 rounded-2xl border border-amber-900/50 backdrop-blur-md">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-mono text-stone-400 uppercase mb-1">
                    <Thermometer className="w-3.5 h-3.5 text-orange-400" />
                    <span>Hearth Temp</span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-amber-400">
                    {currentBatch.temp}°C
                  </div>
                </div>

                <div className="w-[1px] h-14 bg-stone-800" />

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-mono text-stone-400 uppercase mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Bake Timer</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-stone-100">
                    {currentBatch.timeLeft}
                  </div>
                </div>
              </div>
            </div>

            {/* Oven Hearth Metrics */}
            <div className="mt-8 pt-6 border-t border-amber-950/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 bg-black/40 rounded-xl border border-stone-850">
                <span className="text-stone-400 block">Deck Surface</span>
                <span className="text-stone-200 font-medium">{currentBatch.stone}</span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-stone-850">
                <span className="text-stone-400 block">Heat Profile</span>
                <span className="text-amber-400 font-medium">{currentBatch.heatLevel}</span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-stone-850">
                <span className="text-stone-400 block">Steam Injection</span>
                <span className="text-emerald-400 font-medium">8.5 Bar Pressure</span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-stone-850">
                <span className="text-stone-400 block">Exhaust Damper</span>
                <span className="text-stone-200 font-medium">35% Open</span>
              </div>
            </div>
          </div>

          {/* Batch Selector Tabs */}
          <div>
            <div className="text-xs font-mono text-stone-400 uppercase mb-3">
              Switch Active Oven Chamber (Demo Simulation):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {OVEN_BATCHES.map((b, idx) => {
                const isSelected = selectedBatchIdx === idx;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBatchIdx(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-amber-500">{b.id}</div>
                    <div className="text-xs font-medium text-stone-100 truncate">{b.product}</div>
                    <div className="text-[11px] font-mono text-stone-400 mt-1">{b.temp}°C · {b.timeLeft}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
