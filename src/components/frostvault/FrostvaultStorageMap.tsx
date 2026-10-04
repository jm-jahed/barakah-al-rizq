'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, ThermometerSnowflake, Activity, Box, ShieldCheck, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { FROSTVAULT_ZONES, StorageZone } from '@/data/frostvaultData';

interface FrostvaultStorageMapProps {
  selectedZoneCode?: string;
  onRequestQuoteForZone?: (zone: StorageZone) => void;
}

export const FrostvaultStorageMap: React.FC<FrostvaultStorageMapProps> = ({
  selectedZoneCode = 'ZONE-A',
  onRequestQuoteForZone,
}) => {
  const [activeCode, setActiveCode] = useState<string>(selectedZoneCode);

  React.useEffect(() => {
    if (selectedZoneCode) {
      setActiveCode(selectedZoneCode);
    }
  }, [selectedZoneCode]);

  const activeZone =
    FROSTVAULT_ZONES.find((z) => z.code === activeCode) || FROSTVAULT_ZONES[0];

  return (
    <section id="storage-map" className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1926] border border-[#1b3957] text-xs text-[#38bdf8] font-mono uppercase tracking-[0.25em] mb-4">
            <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>THE COLD CHAIN, VISUALIZED</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Digital Cold Storage Map.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Interact with our simulated temperature chambers. Each zone is architected with dedicated cascade compressors, micro-climate sensor grids, and automated racking.
          </p>
        </div>

        {/* Zone Selector Horizontal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {FROSTVAULT_ZONES.map((zone) => {
            const isSelected = zone.code === activeCode;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveCode(zone.code)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f2238] border-[#38bdf8] text-[#f8fafc] shadow-[0_0_30px_rgba(56,189,248,0.2)]'
                    : 'bg-[#0a121c] border-[#162a3f] text-[#64748b] hover:bg-[#0d1825] hover:text-[#cbd5e1]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-mono font-bold tracking-wider ${isSelected ? 'text-[#38bdf8]' : 'text-[#64748b]'}`}>
                    {zone.code}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-[#0284c7] text-[#ffffff]' : 'bg-[#111e2e] text-[#94a3b8]'}`}>
                    {zone.type}
                  </span>
                </div>

                <div>
                  <div className={`text-2xl sm:text-3xl font-mono font-bold ${isSelected ? 'text-[#f8fafc]' : 'text-[#94a3b8]'}`}>
                    {zone.currentTemp}
                  </div>
                  <div className="text-xs text-[#64748b] font-mono mt-1">
                    Target: {zone.targetTemp}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1a334c] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#64748b]">Occupancy</span>
                  <span className={`font-semibold ${isSelected ? 'text-[#38bdf8]' : 'text-[#94a3b8]'}`}>
                    {zone.occupancyRate}%
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Deep Dive Telemetry Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeZone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1825] via-[#09121a] to-[#060a0e] border border-[#1a3858] shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Metrics & Architecture */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0369a1]/30 border border-[#0284c7]/50 text-xs font-mono text-[#38bdf8]">
                    {activeZone.code} · {activeZone.name}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-[#4ade80]">
                    <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                    Status: {activeZone.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[#091420] border border-[#162c44]">
                    <div className="text-[10px] uppercase font-mono text-[#64748b]">Calibrated Temp</div>
                    <div className="text-2xl font-mono font-bold text-[#38bdf8] mt-1">{activeZone.currentTemp}</div>
                    <div className="text-[10px] text-[#64748b] font-mono">{activeZone.tempRange}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#091420] border border-[#162c44]">
                    <div className="text-[10px] uppercase font-mono text-[#64748b]">Relative Humidity</div>
                    <div className="text-2xl font-mono font-bold text-[#f8fafc] mt-1">{activeZone.humidity}</div>
                    <div className="text-[10px] text-[#64748b] font-mono">Micro-Vapor Control</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#091420] border border-[#162c44]">
                    <div className="text-[10px] uppercase font-mono text-[#64748b]">Pallet Capacity</div>
                    <div className="text-2xl font-mono font-bold text-[#f8fafc] mt-1">{activeZone.capacityOccupiedPallets.toLocaleString()}</div>
                    <div className="text-[10px] text-[#64748b] font-mono">/ {activeZone.capacityTotalPallets.toLocaleString()} Slots</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#091420] border border-[#162c44]">
                    <div className="text-[10px] uppercase font-mono text-[#64748b]">Inventory Units</div>
                    <div className="text-2xl font-mono font-bold text-[#f8fafc] mt-1">{activeZone.inventoryCountUnits.toLocaleString()}</div>
                    <div className="text-[10px] text-[#64748b] font-mono">In Stock</div>
                  </div>
                </div>

                {/* Live Activity Stream */}
                <div className="p-4 rounded-xl bg-[#081018] border border-[#14263a] flex items-start gap-3">
                  <Activity className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#94a3b8] uppercase">Recent Chamber Event</div>
                    <p className="text-xs text-[#cbd5e1] mt-0.5 font-mono">
                      {activeZone.recentActivity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sensors & Action */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#09131e] border border-[#18324e] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748b]">Sensor Mesh Status</span>
                  <span className="text-[#38bdf8] font-bold">{activeZone.sensorsOnline} / {activeZone.totalSensors} Online</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#94a3b8]">
                    <span>Occupancy Density</span>
                    <span>{activeZone.occupancyRate}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#112233] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0284c7] to-[#38bdf8] rounded-full transition-all duration-500"
                      style={{ width: `${activeZone.occupancyRate}%` }}
                    />
                  </div>
                </div>

                <div className="text-[11px] text-[#64748b] space-y-1 font-mono pt-2 border-t border-[#152a40]">
                  <div>• Dual Ammonia / CO2 Inverter Units</div>
                  <div>• Inflatable Air-Lock Rapid Dock Seals</div>
                  <div>• 21 CFR Part 11 Electronic Records Active</div>
                </div>

                <button
                  onClick={() => onRequestQuoteForZone && onRequestQuoteForZone(activeZone)}
                  className="w-full py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Space in {activeZone.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
