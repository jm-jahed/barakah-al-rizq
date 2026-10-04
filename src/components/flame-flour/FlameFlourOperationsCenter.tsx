'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Clock, Thermometer, ShieldCheck, RefreshCw, Cpu, Layers } from 'lucide-react';
import { BAKERY_OPERATIONS_QUEUE, BAKERY_OPERATIONS_STATS, BakeryBatch } from '@/data/flameFlourData';

export const FlameFlourOperationsCenter: React.FC = () => {
  const [filterStage, setFilterStage] = useState<string>('All');

  const filteredBatches = filterStage === 'All'
    ? BAKERY_OPERATIONS_QUEUE
    : BAKERY_OPERATIONS_QUEUE.filter(b => b.stage.includes(filterStage) || filterStage === 'All');

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>BAKERY OPERATIONS SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Flame & Flour Control
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Real-time digital oversight of active levain ferments, deck oven temperatures, and morning production batches.
          </p>
        </div>

        {/* Top Telemetry KPI Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[#120f0d] border border-stone-800/80 shadow-lg">
            <div className="text-xs font-mono text-stone-400 uppercase">Active Batches</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-400 mt-1">
              {BAKERY_OPERATIONS_STATS.activeBatches} Batches
            </div>
            <div className="text-[11px] text-stone-400 mt-1 font-mono">14 Live in Rotation</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#120f0d] border border-stone-800/80 shadow-lg">
            <div className="text-xs font-mono text-stone-400 uppercase">Deck Hearth Firing</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-orange-400 mt-1">
              {BAKERY_OPERATIONS_STATS.bakingNowInOvens} Ovens
            </div>
            <div className="text-[11px] text-stone-400 mt-1 font-mono">245°C Refractory Stone</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#120f0d] border border-stone-800/80 shadow-lg">
            <div className="text-xs font-mono text-stone-400 uppercase">Sourdough Mother</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-stone-100 mt-1">
              7 Yrs, 4 Mo
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 font-mono">100% Hydration Colony</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#120f0d] border border-stone-800/80 shadow-lg">
            <div className="text-xs font-mono text-stone-400 uppercase">Morning Dispatch Rate</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mt-1">
              {BAKERY_OPERATIONS_STATS.onTimeMorningDeliveryRate}
            </div>
            <div className="text-[11px] text-stone-400 mt-1 font-mono">Dubai & Abu Dhabi</div>
          </div>
        </div>

        {/* Live Production Queue Table */}
        <div className="bg-[#120f0d] rounded-3xl border border-stone-800/80 shadow-2xl overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-850 pb-5 mb-6">
            <div>
              <h3 className="text-xl font-serif text-stone-100">Live Production Queue</h3>
              <p className="text-xs text-stone-400 mt-0.5">Simulated batch records tracking stages from autolyse to counter display.</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-stone-400">Filter Stage:</span>
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="bg-stone-900 border border-stone-800 rounded-xl px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="All">All Stages (14 Batches)</option>
                <option value="Woodfire Oven">In Woodfire Oven</option>
                <option value="Shaping">Shaping & Proofing</option>
                <option value="Cooling">Cooling Rack</option>
                <option value="Counter">On Counter</option>
                <option value="Fermentation">Long Fermentation</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400">
                  <th className="pb-3 font-semibold uppercase">Batch ID</th>
                  <th className="pb-3 font-semibold uppercase">Product Name</th>
                  <th className="pb-3 font-semibold uppercase">Station / Hearth</th>
                  <th className="pb-3 font-semibold uppercase">Temp</th>
                  <th className="pb-3 font-semibold uppercase">Units</th>
                  <th className="pb-3 font-semibold uppercase">Production Stage</th>
                  <th className="pb-3 font-semibold uppercase text-right">Est. Finish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-850">
                {filteredBatches.map((b) => (
                  <tr key={b.batchId} className="hover:bg-stone-850/40 transition-colors">
                    <td className="py-3.5 text-amber-400 font-bold">{b.batchId}</td>
                    <td className="py-3.5 font-serif text-sm text-stone-100">{b.productName}</td>
                    <td className="py-3.5 text-stone-400">{b.ovenNumber}</td>
                    <td className="py-3.5 text-stone-300">{b.temperatureC}°C</td>
                    <td className="py-3.5 text-stone-300">{b.units} pcs</td>
                    <td className="py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                        b.stage === 'In Woodfire Oven'
                          ? 'bg-orange-950/80 border border-orange-700 text-orange-300'
                          : b.stage === 'On Counter'
                          ? 'bg-emerald-950/80 border border-emerald-700 text-emerald-300'
                          : b.stage === 'Cooling Rack'
                          ? 'bg-blue-950/80 border border-blue-700 text-blue-300'
                          : 'bg-stone-900 border border-stone-700 text-stone-300'
                      }`}>
                        {b.stage}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-medium text-stone-300">{b.finishEst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
