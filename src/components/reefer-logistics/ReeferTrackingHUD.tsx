'use client';

import React, { useState } from 'react';
import {
  Navigation,
  MapPin,
  Clock,
  Thermometer,
  ShieldCheck,
  Truck,
  Activity,
  Radio,
  CheckCircle2,
  Gauge,
  Wifi,
  Lock,
  ArrowRight
} from 'lucide-react';
import { SAMPLE_TELEMATICS_FEED } from '@/data/reeferLogisticsData';

interface ReeferTrackingHUDProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferTrackingHUD({ onOpenQuote }: ReeferTrackingHUDProps) {
  const [selectedTruckIndex, setSelectedTruckIndex] = useState(0);

  const sampleTrucks = [
    {
      id: "TRUCK #AE-025",
      origin: "Dubai (Al Aweer)",
      border: "Al Batha (Saudi Border)",
      destination: "Riyadh Logistics Park, KSA",
      location: "Al Batha Border Corridor KM 180",
      eta: "08:42 AM",
      temp: "-10.8°C",
      setpoint: "-10.0°C",
      status: "IN TRANSIT",
      progress: 68,
      cargo: "Frozen Poultry & Bakery",
      speed: "84 km/h"
    },
    {
      id: "TRUCK #AE-008",
      origin: "Dubai (JAFZA)",
      border: "King Fahd Causeway",
      destination: "Manama Central Hub, Bahrain",
      location: "King Fahd Causeway Approach",
      eta: "14:15 PM",
      temp: "+2.1°C",
      setpoint: "+2.0°C",
      status: "AT BORDER",
      progress: 82,
      cargo: "Chilled Dairy & Yogurts",
      speed: "25 km/h"
    },
    {
      id: "TRUCK #AE-014",
      origin: "Dubai (Al Aweer)",
      border: "Salwa / Abu Samra",
      destination: "Doha Industrial Zone, Qatar",
      location: "Salwa Transit Expressway",
      eta: "21:30 PM",
      temp: "+3.8°C",
      setpoint: "+4.0°C",
      status: "IN TRANSIT",
      progress: 54,
      cargo: "Fresh Fruits & Vegetables",
      speed: "88 km/h"
    }
  ];

  const currentTruck = sampleTrucks[selectedTruckIndex];

  return (
    <section id="tracking" className="py-20 sm:py-28 bg-[#090d16] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>SATELLITE TELEMATICS & TRACEABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            KNOW WHERE YOUR CARGO IS.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Every journey can be monitored with professional tracking visibility, giving customers greater confidence throughout the transportation process.
          </p>
        </div>

        {/* Truck Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2">SAMPLE TELEMETRY FEEDS:</span>
          {sampleTrucks.map((truck, idx) => (
            <button
              key={truck.id}
              onClick={() => setSelectedTruckIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedTruckIndex === idx
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 border border-sky-400'
                  : 'bg-[#0c1220] text-slate-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {truck.id} ({truck.destination.split(',')[1]?.trim() || truck.destination.split(' ')[0]})
            </button>
          ))}
        </div>

        {/* Representative GPS Tracking Interface */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0c1322] to-[#060a12] border border-sky-500/30 p-6 sm:p-10 shadow-2xl text-left">
          
          {/* Top Console Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                <Truck className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  VEHICLE TELEMETRY NODE
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  {currentTruck.id}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5" />
                <span>NIST SATELLITE LINK ACTIVE</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold">
                {currentTruck.status}
              </div>
            </div>
          </div>

          {/* 3-Point Route Path Visualizer */}
          <div className="my-8 p-6 rounded-xl bg-[#04070e] border border-white/10 relative">
            <div className="text-[11px] font-mono text-slate-400 uppercase mb-4 flex items-center justify-between">
              <span>WAYPOINT PROGRESSION: DUBAI → BORDER → GCC DESTINATION</span>
              <span className="text-sky-400 font-bold">{currentTruck.progress}% OF ROUTE COMPLETE</span>
            </div>

            {/* Visual Route Path Bar */}
            <div className="relative mb-8">
              <div className="w-full h-2 rounded-full bg-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${currentTruck.progress}%` }}
                />
              </div>
            </div>

            {/* 3 Checkpoint Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Origin */}
              <div className="p-4 rounded-xl bg-black/40 border border-sky-500/30 space-y-1">
                <div className="text-[10px] font-mono text-sky-400 font-bold">01 • ORIGIN HUB</div>
                <div className="text-sm font-bold text-white">{currentTruck.origin}</div>
                <div className="text-xs text-emerald-400 font-mono">✓ Loaded & Pre-Cooled</div>
              </div>

              {/* Border */}
              <div className="p-4 rounded-xl bg-black/40 border border-amber-500/30 space-y-1">
                <div className="text-[10px] font-mono text-amber-400 font-bold">02 • BORDER TRANSIT</div>
                <div className="text-sm font-bold text-white">{currentTruck.border}</div>
                <div className="text-xs text-amber-300 font-mono">Current Location: {currentTruck.location}</div>
              </div>

              {/* Destination */}
              <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 space-y-1">
                <div className="text-[10px] font-mono text-emerald-400 font-bold">03 • DESTINATION</div>
                <div className="text-sm font-bold text-white">{currentTruck.destination}</div>
                <div className="text-xs text-slate-300 font-mono">Estimated Arrival: {currentTruck.eta}</div>
              </div>
            </div>
          </div>

          {/* Telemetry Dashboard Data Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-[10px] text-slate-400 font-mono">LIVE TEMPERATURE</div>
              <div className="text-xl font-bold font-mono text-sky-400">{currentTruck.temp}</div>
              <div className="text-[10px] text-slate-400 font-mono">Target: {currentTruck.setpoint}</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-[10px] text-slate-400 font-mono">ESTIMATED ETA</div>
              <div className="text-xl font-bold font-mono text-amber-400">{currentTruck.eta}</div>
              <div className="text-[10px] text-slate-400 font-mono">Speed: {currentTruck.speed}</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-[10px] text-slate-400 font-mono">CARGO COMMODITY</div>
              <div className="text-sm font-bold font-mono text-white truncate">{currentTruck.cargo}</div>
              <div className="text-[10px] text-emerald-400 font-mono">25-Ton Full Load</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-[10px] text-slate-400 font-mono">SECURITY SEAL</div>
              <div className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>SEALED #ISO-9904</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">0 Door Events</div>
            </div>
          </div>

          {/* Disclaimer & Transparency Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <p className="leading-relaxed">
              Representative telemetry demonstration. Connected client portal displays live NIST telemetrics, continuous temperature thermal logs, and customs timestamp receipts.
            </p>
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold shrink-0 transition-all flex items-center gap-2"
            >
              <span>Request Tracked Dispatch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
