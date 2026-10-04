'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Home,
  Factory,
  Palmtree,
  Cross,
  CheckCircle2,
  Activity,
  Gauge,
  Droplets
} from 'lucide-react';
import { AQUAVANTA_ZONES, WaterZone } from '@/data/aquavantaData';

export function AquavantaSmartZones() {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('residential-core');
  const selectedZone =
    AQUAVANTA_ZONES.find((z) => z.id === selectedZoneId) || AQUAVANTA_ZONES[0];

  const getZoneIcon = (cat: string) => {
    switch (cat) {
      case 'Residential':
        return <Home className="w-5 h-5" />;
      case 'Commercial':
        return <Building2 className="w-5 h-5" />;
      case 'Industrial':
        return <Factory className="w-5 h-5" />;
      case 'Hospitality':
        return <Palmtree className="w-5 h-5" />;
      case 'Critical Infrastructure':
        return <Cross className="w-5 h-5" />;
      default:
        return <Droplets className="w-5 h-5" />;
    }
  };

  return (
    <section id="smart-zones" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>DISTRICT METERING AREAS (DMAs)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Metropolitan Smart Water Zones
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Dynamic segmentation across residential, high-rise commercial, beachfront hospitality, heavy industrial, and critical medical sectors.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {AQUAVANTA_ZONES.map((zone) => {
            const isSelected = zone.id === selectedZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZoneId(zone.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">
                      {zone.category}
                    </span>
                    <div className={isSelected ? 'text-cyan-300' : 'text-slate-500'}>
                      {getZoneIcon(zone.category)}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {zone.name}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span>{zone.pressureBar} Bar</span>
                  <span className="text-emerald-400 font-bold">{zone.status}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Deep Dive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedZone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 text-xs font-mono mb-3 border border-cyan-800/50">
                  <span>DMA PROFILE</span>
                  <span>•</span>
                  <span>{selectedZone.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedZone.name}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {selectedZone.description}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 font-mono text-xs">
                  <div className="text-[10px] text-cyan-400 uppercase mb-1">
                    UAE Conceptual Deployment Area
                  </div>
                  <div className="text-slate-200 font-semibold">
                    {selectedZone.uaeDeploymentArea}
                  </div>
                </div>
              </div>

              {/* 4 Telemetry Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Live Flow Rate</div>
                  <div className="text-xl font-bold text-cyan-400 mt-1">
                    {selectedZone.flowRateM3H.toLocaleString()} m³/h
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">DMA Pressure</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">
                    {selectedZone.pressureBar} Bar
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Daily Usage</div>
                  <div className="text-xl font-bold text-white mt-1">
                    {selectedZone.dailyConsumptionM3}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Active Sensors</div>
                  <div className="text-xl font-bold text-teal-300 mt-1">
                    {selectedZone.activeSensors} Nodes
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
