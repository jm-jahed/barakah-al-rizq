'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ThermometerSnowflake, Box, ArrowRight } from 'lucide-react';
import { FROSTVAULT_ZONES } from '@/data/frostvaultData';

interface FrostvaultSmartMatchProps {
  onRequestQuoteWithZone?: (zoneCode: string) => void;
}

const PRODUCT_TYPES = [
  { id: 'seafood-meat', label: 'Frozen Seafood & Meats', recommendedZone: 'ZONE-A', temp: '-25°C Frozen', desc: 'Deep sub-zero freezing preventing crystallization.' },
  { id: 'pharma-biologics', label: 'Vaccines & Biologics', recommendedZone: 'ZONE-B', temp: '+2°C to +4°C Chilled', desc: 'GDP certified precision cleanroom storage.' },
  { id: 'dairy-beverage', label: 'Dairy & Cold Juices', recommendedZone: 'ZONE-B', temp: '+2°C to +4°C Chilled', desc: 'Micro-calibrated laminar airflow preservation.' },
  { id: 'fresh-produce', label: 'Fresh Fruits & Greens', recommendedZone: 'ZONE-C', temp: '+8°C Controlled', desc: 'High relative humidity (85–95% RH) with ethylene scrubbers.' },
  { id: 'confectionery', label: 'Chocolates & Botanicals', recommendedZone: 'ZONE-D', temp: '+18°C Ambient', desc: 'Dry cool buffer chamber preserving texture and aroma.' },
];

const VOLUMES = ['1–10 Pallets', '11–50 Pallets', '51–200 Pallets', '200+ Pallets (Dedicated Vault)'];
const DURATIONS = ['1–3 Months', '3–6 Months', 'Annual Contract', 'Spot / Buffer Storage'];

export const FrostvaultSmartMatch: React.FC<FrostvaultSmartMatchProps> = ({
  onRequestQuoteWithZone,
}) => {
  const [selectedProductType, setSelectedProductType] = useState<string>('seafood-meat');
  const [selectedVolume, setSelectedVolume] = useState<string>('11–50 Pallets');
  const [selectedDuration, setSelectedDuration] = useState<string>('Annual Contract');

  const currentType =
    PRODUCT_TYPES.find((p) => p.id === selectedProductType) || PRODUCT_TYPES[0];

  const matchedZone =
    FROSTVAULT_ZONES.find((z) => z.code === currentType.recommendedZone) ||
    FROSTVAULT_ZONES[0];

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1d2e] border border-[#1d3f63] text-xs text-[#38bdf8] font-mono uppercase tracking-[0.25em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INTELLIGENT STORAGE MATCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Find the Right Storage Environment.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Configure your product parameters. Our matching engine pairs your inventory with the ideal thermal chamber and capacity buffer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-[#0c1622] border border-[#18314e]">
            {/* Step 1: Product Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3">
                01 · Select Product Classification
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCT_TYPES.map((type) => {
                  const isSelected = selectedProductType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedProductType(type.id)}
                      className={`p-3.5 rounded-xl text-left border font-mono transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0f233a] border-[#38bdf8] text-[#f8fafc]'
                          : 'bg-[#081018] border-[#152a40] text-[#64748b] hover:text-[#cbd5e1]'
                      }`}
                    >
                      <div className={`text-xs font-bold ${isSelected ? 'text-[#38bdf8]' : 'text-[#cbd5e1]'}`}>
                        {type.label}
                      </div>
                      <div className="text-[10px] text-[#64748b] mt-0.5 truncate">
                        {type.temp}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Volume */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3">
                02 · Estimated Storage Volume
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {VOLUMES.map((vol) => (
                  <button
                    key={vol}
                    onClick={() => setSelectedVolume(vol)}
                    className={`p-2.5 rounded-xl text-xs font-mono text-center border transition-all cursor-pointer ${
                      selectedVolume === vol
                        ? 'bg-[#0f233a] border-[#38bdf8] text-[#38bdf8] font-bold'
                        : 'bg-[#081018] border-[#152a40] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {vol}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Duration */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3">
                03 · Contract Duration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DURATIONS.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setSelectedDuration(dur)}
                    className={`p-2.5 rounded-xl text-xs font-mono text-center border transition-all cursor-pointer ${
                      selectedDuration === dur
                        ? 'bg-[#0f233a] border-[#38bdf8] text-[#38bdf8] font-bold'
                        : 'bg-[#081018] border-[#152a40] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Matched Recommendation Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={matchedZone.id + selectedVolume + selectedDuration}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#0e2136] via-[#091420] to-[#060a0f] border border-[#1b3d63] shadow-2xl relative overflow-hidden"
              >
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] mb-3">
                  RECOMMENDED STORAGE ENVIRONMENT
                </div>

                <h3 className="text-3xl font-mono font-bold text-[#f8fafc] mb-1">
                  {matchedZone.code} · {matchedZone.name}
                </h3>
                <div className="text-xs font-mono text-[#4ade80] mb-4">
                  Target Setpoint: {matchedZone.targetTemp} ({matchedZone.type})
                </div>

                <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-6">
                  {currentType.desc} Configured with {matchedZone.humidity} humidity control and 24/7 telemetry monitoring.
                </p>

                <div className="p-4 rounded-xl bg-[#070f18] border border-[#15283c] space-y-2 font-mono text-xs mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Selected Volume:</span>
                    <strong className="text-[#f8fafc] font-normal">{selectedVolume}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Commitment:</span>
                    <strong className="text-[#f8fafc] font-normal">{selectedDuration}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Chamber Occupancy:</span>
                    <strong className="text-[#38bdf8]">{matchedZone.occupancyRate}% (Slots Available)</strong>
                  </div>
                </div>

                <button
                  onClick={() => onRequestQuoteWithZone && onRequestQuoteWithZone(matchedZone.code)}
                  className="w-full py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Capacity in {matchedZone.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
