'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Box, PieChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { FROSTVAULT_ZONES, StorageZone } from '@/data/frostvaultData';

interface FrostvaultCapacityExperienceProps {
  onRequestSpace?: () => void;
}

export const FrostvaultCapacityExperience: React.FC<FrostvaultCapacityExperienceProps> = ({
  onRequestSpace,
}) => {
  const [activeZoneId, setActiveZoneId] = useState<string>('zone-a');

  const activeZone =
    FROSTVAULT_ZONES.find((z) => z.id === activeZoneId) || FROSTVAULT_ZONES[0];

  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            VOLUMETRIC OPTIMIZATION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Space, Optimized.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            High-density dynamic racking combined with narrow-aisle automated guided shuttles allows 99.4% volumetric efficiency without compromising air velocity circulation.
          </p>
        </div>

        {/* 4 Capacity Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FROSTVAULT_ZONES.map((zone) => {
            const isSelected = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f2136] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                    : 'bg-[#0a121c] border-[#15293d] hover:bg-[#0e1927]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={isSelected ? 'text-[#38bdf8]' : 'text-[#64748b]'}>{zone.code}</span>
                    <span className="text-[10px] text-[#94a3b8]">{zone.type}</span>
                  </div>
                  <div className="text-3xl font-mono font-bold text-[#f8fafc]">
                    {zone.occupancyRate}%
                  </div>
                  <div className="text-[10px] text-[#64748b] font-mono mt-1">
                    Occupied Capacity
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#172c41] text-xs font-mono text-[#94a3b8]">
                  {(zone.capacityTotalPallets - zone.capacityOccupiedPallets).toLocaleString()} Pallets Avail
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Chamber Detailed Breakdown */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeZone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0a1420] border border-[#17304c] shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider">
                    {activeZone.code} · Volumetric Allocation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#f8fafc] mt-1 mb-2">
                    {activeZone.name} ({activeZone.type})
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] font-light leading-relaxed">
                    Operates at calibrated {activeZone.targetTemp} with {activeZone.humidity} relative humidity. Features heavy-duty dynamic flow racking with double-deep shuttle storage.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-[#081018] border border-[#14283c]">
                    <span className="text-[10px] text-[#64748b] block">Total Pallet Slots</span>
                    <strong className="text-base text-[#f8fafc]">{activeZone.capacityTotalPallets.toLocaleString()}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#081018] border border-[#14283c]">
                    <span className="text-[10px] text-[#64748b] block">Occupied Pallets</span>
                    <strong className="text-base text-[#38bdf8]">{activeZone.capacityOccupiedPallets.toLocaleString()}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#081018] border border-[#14283c]">
                    <span className="text-[10px] text-[#64748b] block">Available Slots</span>
                    <strong className="text-base text-[#4ade80]">{(activeZone.capacityTotalPallets - activeZone.capacityOccupiedPallets).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#081018] border border-[#162c44] space-y-4">
                <div className="text-xs font-mono text-[#cbd5e1] font-bold">
                  Space Reservation Status
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#94a3b8]">
                    <span>Occupied Volume</span>
                    <span className="text-[#38bdf8] font-bold">{activeZone.occupancyRate}%</span>
                  </div>
                  <div className="h-3 w-full bg-[#112030] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] rounded-full"
                      style={{ width: `${activeZone.occupancyRate}%` }}
                    />
                  </div>
                </div>

                <p className="text-[11px] font-mono text-[#64748b] leading-relaxed">
                  Real-time space reservation guarantees zero demurrage and priority rapid dock allocation for contracted volume.
                </p>

                <button
                  onClick={onRequestSpace}
                  className="w-full py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Reserve Storage Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
