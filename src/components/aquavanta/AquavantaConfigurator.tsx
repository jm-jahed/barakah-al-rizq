'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sliders,
  Droplets,
  Network,
  Activity,
  Database,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface AquavantaConfiguratorProps {
  onOpenModalWithSpecs?: (specs: string) => void;
}

export function AquavantaConfigurator({ onOpenModalWithSpecs }: AquavantaConfiguratorProps) {
  const [dailyMegaLitres, setDailyMegaLitres] = useState(150);
  const [pipelineKm, setPipelineKm] = useState(250);
  const [dmaZones, setDmaZones] = useState(8);
  const [sensorDensity, setSensorDensity] = useState(2400);

  const estimatedMonthlyAed = Math.round(
    dailyMegaLitres * 85 + pipelineKm * 120 + dmaZones * 2500 + sensorDensity * 3.5
  );

  const handleConsultationClick = () => {
    const specs = `Water Sizer: ${dailyMegaLitres} ML/day, ${pipelineKm} km Network, ${dmaZones} DMAs, ${sensorDensity} IoT Nodes. Est. AED ${estimatedMonthlyAed.toLocaleString()}/mo.`;
    if (onOpenModalWithSpecs) {
      onOpenModalWithSpecs(specs);
    }
  };

  return (
    <section id="network-sizer" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030713] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE NETWORK SIZER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Model Your Municipal Water Grid
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Simulate network requirements for master-planned communities, industrial parks, or metropolitan municipal utilities with instant telemetry tiering.
          </p>
        </div>

        {/* Configurator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800/60 flex items-center justify-between">
              <span>Hydraulic Capacity Parameters</span>
              <span>Dynamic Simulation</span>
            </div>

            {/* Daily MegaLitres */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  Daily Water Throughput
                </span>
                <span className="text-cyan-400 font-bold text-sm">{dailyMegaLitres} MegaLitres / day</span>
              </div>
              <input
                type="range"
                min={20}
                max={500}
                step={10}
                value={dailyMegaLitres}
                onChange={(e) => setDailyMegaLitres(parseInt(e.target.value))}
                className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>20 ML (Community)</span>
                <span>250 ML (City District)</span>
                <span>500 ML (Metropolis)</span>
              </div>
            </div>

            {/* Pipeline Network Length */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Network className="w-4 h-4 text-teal-400" />
                  Pipeline Network Extent
                </span>
                <span className="text-teal-400 font-bold text-sm">{pipelineKm} km Active Mains</span>
              </div>
              <input
                type="range"
                min={50}
                max={1000}
                step={25}
                value={pipelineKm}
                onChange={(e) => setPipelineKm(parseInt(e.target.value))}
                className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>50 km</span>
                <span>500 km</span>
                <span>1,000 km</span>
              </div>
            </div>

            {/* District Metering Areas (DMAs) */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-sky-400" />
                  Isolated DMAs & Pressure Zones
                </span>
                <span className="text-sky-400 font-bold text-sm">{dmaZones} District Zones</span>
              </div>
              <input
                type="range"
                min={2}
                max={30}
                step={1}
                value={dmaZones}
                onChange={(e) => setDmaZones(parseInt(e.target.value))}
                className="w-full accent-sky-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>2 Zones</span>
                <span>15 Zones</span>
                <span>30 Zones</span>
              </div>
            </div>

            {/* IoT Hydrophone Sensors */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-300" />
                  IoT Acoustic & Flow Sensors
                </span>
                <span className="text-cyan-300 font-bold text-sm">{sensorDensity} Active Nodes</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={250}
                value={sensorDensity}
                onChange={(e) => setSensorDensity(parseInt(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>500 Nodes</span>
                <span>5,000 Nodes</span>
                <span>10,000 Nodes</span>
              </div>
            </div>
          </div>

          {/* Sizing Summary (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Estimated Operational Platform Tier
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-baseline gap-2 mb-1">
                <span className="text-xs text-cyan-400 font-normal">AED</span>
                {estimatedMonthlyAed.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal">/ month</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 mb-6">
                ● Includes 24/7 Hydraulic SCADA & Acoustic Leak AI
              </div>

              <div className="space-y-2.5 font-mono text-xs border-t border-b border-slate-800/80 py-4 my-4">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Throughput Target:</span>
                  <span className="text-white font-bold">{dailyMegaLitres} ML / day</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Pipeline Monitored:</span>
                  <span className="text-white font-bold">{pipelineKm} km</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>DMA Segmentation:</span>
                  <span className="text-white font-bold">{dmaZones} Pressure Zones</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Sensor Grid:</span>
                  <span className="text-white font-bold">{sensorDensity} IoT Nodes</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                Includes full digital twin integration, EPANET hydraulic model alignment, and field crew mobile dispatch APIs.
              </p>
            </div>

            <button
              onClick={handleConsultationClick}
              className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <span>Request Water Infrastructure Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
