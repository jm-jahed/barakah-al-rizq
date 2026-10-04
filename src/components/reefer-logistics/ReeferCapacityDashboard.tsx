'use client';

import React, { useState } from 'react';
import {
  Truck,
  Layers,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FLEET_TRAILERS, ReeferTrailer } from '@/data/reeferLogisticsData';

interface ReeferCapacityDashboardProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferCapacityDashboard({ onOpenQuote }: ReeferCapacityDashboardProps) {
  const [selectedUnit, setSelectedUnit] = useState<ReeferTrailer>(FLEET_TRAILERS[0]);

  return (
    <section className="py-20 bg-[#060a12] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE FLEET CAPACITY DASHBOARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono uppercase">
              20 DEDICATED REEFER UNITS
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Real-time readiness and deployment matrix across our 20 heavy 15-meter reefer trailers operating from Dubai to GCC destinations.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#0c1220] p-4 rounded-xl border border-white/10 shrink-0 font-mono">
            <div className="text-left">
              <div className="text-[10px] text-slate-400">AGGREGATE CAPACITY</div>
              <div className="text-xl font-bold text-white">500 TONS</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400">SPECIFICATION</div>
              <div className="text-xl font-bold text-sky-400">25T / 15M</div>
            </div>
          </div>
        </div>

        {/* Fleet Grid & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 20 Unit Visual Matrix (4 rows of 5 units) */}
          <div className="lg:col-span-7 bg-[#0c1220] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs font-mono">
              <span className="text-slate-400">FLEET MATRIX (CLICK UNIT TO INSPECT)</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Ready
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <span className="w-2 h-2 rounded-full bg-sky-400" /> In Transit
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Loading
                </span>
              </div>
            </div>

            {/* 4 x 5 Grid of 20 Trailers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
              {FLEET_TRAILERS.map((unit) => {
                const isSelected = selectedUnit.id === unit.id;
                const statusColor =
                  unit.currentStatus === 'Ready'
                    ? 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
                    : unit.currentStatus === 'In Transit'
                    ? 'border-sky-500/40 text-sky-400 bg-sky-950/20'
                    : 'border-amber-500/40 text-amber-400 bg-amber-950/20';

                return (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'border-sky-400 bg-sky-950/50 shadow-lg shadow-sky-950/50 ring-1 ring-sky-400'
                        : 'border-white/[0.08] bg-black/40 hover:border-white/20 hover:bg-black/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Truck className={`w-4 h-4 ${isSelected ? 'text-sky-300' : 'text-slate-400 group-hover:text-white'}`} />
                      <span className={`w-1.5 h-1.5 rounded-full ${unit.currentStatus === 'Ready' ? 'bg-emerald-400' : unit.currentStatus === 'In Transit' ? 'bg-sky-400' : 'bg-amber-400'}`} />
                    </div>

                    <div className="text-xs font-mono font-bold text-white truncate">
                      {unit.unitCode.replace('TRUCK ', '')}
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 mt-1 truncate">
                      {unit.currentTemp || unit.setpointTemp}
                    </div>

                    <div className={`mt-1.5 text-[9px] font-mono px-1.5 py-0.5 rounded inline-block uppercase font-semibold ${statusColor}`}>
                      {unit.currentStatus}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Summary Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Calibrated NIST Sensor Mesh</span>
              </span>
              <span>15M Trailer Standard • 25 Ton Payload</span>
            </div>
          </div>

          {/* Unit Telematics Inspector Panel */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111927] to-[#0a0f1d] rounded-2xl border border-sky-500/30 p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <div className="text-xs font-mono font-bold text-sky-400 uppercase">
                  UNIT TELEMETRY INSPECTOR
                </div>
                <h3 className="text-xl font-bold font-mono text-white mt-0.5">
                  {selectedUnit.unitCode}
                </h3>
              </div>
              <span
                className={`text-xs font-mono px-2.5 py-1 rounded font-bold ${
                  selectedUnit.currentStatus === 'Ready'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : selectedUnit.currentStatus === 'In Transit'
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}
              >
                {selectedUnit.currentStatus.toUpperCase()}
              </span>
            </div>

            <div className="my-5 space-y-3.5 text-xs font-mono">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">REFRIGERATION ENGINE</span>
                <span className="text-white font-bold">{selectedUnit.refrigerationUnit}</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">CAPACITY & LENGTH</span>
                <span className="text-sky-300 font-bold">{selectedUnit.capacityTon} TON / {selectedUnit.trailerLengthMeters}M</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">TEMPERATURE RANGE</span>
                <span className="text-white font-bold">{selectedUnit.tempRange}</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">CURRENT POSITION</span>
                <span className="text-white font-bold truncate max-w-[200px]">{selectedUnit.currentLocation}</span>
              </div>

              {selectedUnit.destination && (
                <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-500/20 flex items-center justify-between">
                  <span className="text-sky-400">DISPATCH DESTINATION</span>
                  <span className="text-sky-200 font-bold">{selectedUnit.destination}</span>
                </div>
              )}

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">NIST CALIBRATION</span>
                <span className="text-emerald-400 font-bold">VALID ({selectedUnit.calibrationDate})</span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote({ truckId: selectedUnit.unitCode })}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>DISPATCH OR RESERVE THIS UNIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
