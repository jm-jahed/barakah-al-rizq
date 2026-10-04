'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Thermometer, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import { TELEMETRY_SERIES } from '@/data/frostvaultData';

export const FrostvaultTemperatureIntelligence: React.FC = () => {
  const [activeRange, setActiveRange] = useState<'1H' | '6H' | '24H' | '7D'>('6H');

  const seriesData = TELEMETRY_SERIES[activeRange] || TELEMETRY_SERIES['6H'];

  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
              THERMAL TELEMETRY PIPELINE
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc]">
              Every Degree Matters.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94a3b8] font-light max-w-md mt-4 md:mt-0">
            Continuous sub-minute telemetry feeds directly from NIST-traceable multi-node sensors across deep frozen, chilled, and controlled chambers.
          </p>
        </div>

        {/* Interactive Chart Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a121c] border border-[#162b41] shadow-2xl">
          {/* Top Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#14263a]">
            {/* Zone Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
                <span className="text-[#cbd5e1]">Zone A (Frozen -24.8°C)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />
                <span className="text-[#cbd5e1]">Zone B (Chilled +2.3°C)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22d3ee]" />
                <span className="text-[#cbd5e1]">Zone C (Controlled +7.9°C)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#94a3b8]" />
                <span className="text-[#cbd5e1]">Zone D (Ambient +18.2°C)</span>
              </span>
            </div>

            {/* Timeframe Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-[#060b10] border border-[#132437] font-mono text-xs">
              {(['1H', '6H', '24H', '7D'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setActiveRange(range)}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeRange === range
                      ? 'bg-[#0284c7] text-[#ffffff] font-bold'
                      : 'text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Graph Visualization */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRange}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-5 gap-3"
              >
                {seriesData.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0e1b29] border border-[#18314c] flex flex-col justify-between"
                  >
                    <div className="text-[10px] font-mono text-[#64748b] mb-3 flex items-center justify-between">
                      <span>{pt.timeLabel}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between items-center text-[#38bdf8]">
                        <span>Zone A</span>
                        <strong>{pt.zoneA}°C</strong>
                      </div>
                      <div className="flex justify-between items-center text-[#0ea5e9]">
                        <span>Zone B</span>
                        <strong>+{pt.zoneB}°C</strong>
                      </div>
                      <div className="flex justify-between items-center text-[#22d3ee]">
                        <span>Zone C</span>
                        <strong>+{pt.zoneC}°C</strong>
                      </div>
                      <div className="flex justify-between items-center text-[#94a3b8]">
                        <span>Zone D</span>
                        <strong>+{pt.zoneD}°C</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Status Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#14263a] text-xs font-mono text-[#64748b]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                Zero Thermal Deviation Breach across past 30 days
              </span>
              <span>Sampling Frequency: 500ms · Redundant Battery Buffer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
