'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Layers, Truck, CheckCircle2, RefreshCw } from 'lucide-react';
import { PRESSORA_PRODUCTION_STATS } from '@/data/pressoraData';

export const PressoraProductionCenter: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE OPERATIONS SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Production Floor <span className="font-serif italic text-amber-400">Intelligence</span>
            </h2>
            <p className="text-neutral-400 mt-2 max-w-xl text-sm leading-relaxed">
              Real-time telemetry across our Heidelberg offset lines, Indigo digital presses, and automated bindery units across UAE hubs.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-xs text-neutral-300">
            <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Updated 2 seconds ago · Auto-sync active</span>
          </div>
        </div>

        {/* Top metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800"
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs mb-3">
              <span>Active Orders In-Flight</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.activeOrders}</div>
            <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
              <span>↑ 14% vs yesterday</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800"
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs mb-3">
              <span>Daily Press Capacity</span>
              <Layers className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.dailyPressImpressionCapacity}</div>
            <div className="text-[11px] text-neutral-400 mt-2">78% utilization rate</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800"
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs mb-3">
              <span>Color Accuracy Delta E</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-emerald-400">{PRESSORA_PRODUCTION_STATS.colorAccuracyDeltaE}</div>
            <div className="text-[11px] text-neutral-400 mt-2">ISO 12647-2 Certified</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800"
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs mb-3">
              <span>On-Time UAE Delivery</span>
              <Truck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.onTimeDeliveryRate}</div>
            <div className="text-[11px] text-neutral-400 mt-2">Last 90 days across 7 Emirates</div>
          </motion.div>
        </div>

        {/* Pipeline Stage Bar */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
          <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-4">
            Live Pipeline Stage Distribution
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Artwork Preflight</span>
              </div>
              <div className="text-2xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.artworkReview}</div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-amber-400 h-full w-[35%]" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                <span>On Press (Printing)</span>
              </div>
              <div className="text-2xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.inProduction}</div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-blue-400 h-full w-[70%]" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Finishing & Bindery</span>
              </div>
              <div className="text-2xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.finishing}</div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-purple-400 h-full w-[45%]" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ready for Dispatch</span>
              </div>
              <div className="text-2xl font-mono font-medium text-white">{PRESSORA_PRODUCTION_STATS.readyForDispatch}</div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-emerald-400 h-full w-[60%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
