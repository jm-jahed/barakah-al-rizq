'use client';

import React, { useState } from 'react';
import {
  Truck,
  Layers,
  Thermometer,
  ShieldCheck,
  Maximize2,
  Wind,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Lock,
  Box
} from 'lucide-react';

interface ReeferFleetSectionProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferFleetSection({ onOpenQuote }: ReeferFleetSectionProps) {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const fleetHighlights = [
    {
      title: "25-TON CAPACITY",
      stat: "25 TON",
      unit: "Payload Rating",
      desc: "Maximum road payload capability designed for high-density palletized frozen and chilled cargo across GCC highways."
    },
    {
      title: "TRAILER LENGTH",
      stat: "15 METERS",
      unit: "Euro-Standard Length",
      desc: "Accommodates up to 33/34 standard Euro-pallets (800x1200mm) or 26 industrial bulk pallets with secure tie-down systems."
    },
    {
      title: "TEMPERATURE RANGE",
      stat: "-18°C → +4°C",
      unit: "Sub-Zero to Chilled",
      desc: "High-output Thermo King SLXi & Carrier Vector units delivering continuous thermal stability down to sub-zero temperatures."
    },
    {
      title: "FLEET CAPACITY",
      stat: "20 UNITS",
      unit: "Dedicated Company Fleet",
      desc: "20 dedicated company-owned heavy tri-axle reefer trailers with zero third-party subcontracting risk."
    }
  ];

  const engineeringSpecs = [
    {
      icon: Wind,
      title: "Aluminum T-Bar Duct Subflooring",
      desc: "Engineered for 360-degree bottom-up forced airflow circulation, preventing hot spots beneath dense cargo pallets."
    },
    {
      icon: ShieldCheck,
      title: "100mm Polyurethane Core Insulation",
      desc: "Military-grade high-density thermal foam cores that resist ambient desert heat spikes exceeding +50°C."
    },
    {
      icon: Cpu,
      title: "Dual Satellite IoT Loggers",
      desc: "Independent NIST-certified data loggers recording supply air, return air, core cargo temperature, and door events."
    },
    {
      icon: Lock,
      title: "Tamper-Evident Security Seals",
      desc: "High-security ISO 17712 bolt seals and biometric driver locks ensuring zero unauthorized access during border transit."
    }
  ];

  const supportedCargo = [
    "Chilled Cargo",
    "Frozen Cargo",
    "Foodstuff",
    "Dairy",
    "Meat",
    "Fruits",
    "Vegetables",
    "Temperature-Sensitive Products"
  ];

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-[#090d16] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Truck className="w-3.5 h-3.5" />
            <span>HEAVY-DUTY TEMPERATURE CONTROLLED FLEET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            20 DEDICATED REEFER TRAILERS
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Built for temperature-sensitive cargo moving across the GCC.
          </p>
        </div>

        {/* 4 Large Highlight Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fleetHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-sky-400/50 hover:bg-[#0f172a] transition-all shadow-xl group text-left relative overflow-hidden"
            >
              <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase mb-3">
                {item.title}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-sky-400 transition-colors">
                {item.stat}
              </div>
              <div className="text-xs font-mono text-sky-300 font-semibold mt-1">
                {item.unit}
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Trailer Architecture & Engineering Blueprint */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#080d1a] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Trailer Diagram & Supported Cargo */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  TRAILER SPECIFICATION BLUEPRINT
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  15-METER HEAVY TRI-AXLE REEFER
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Engineered to endure the extreme temperatures of the Arabian Peninsula. Every unit in our 20-trailer fleet undergoes rigorous pre-trip thermal pull-down testing and sanitization.
                </p>
              </div>

              {/* Supported Cargo Grid */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  CARGO COMPATIBILITY & SUPPORT:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                  {supportedCargo.map((cargo, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-200 font-mono"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{cargo}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-sky-500/30 transition-all flex items-center gap-2"
                >
                  <span>RESERVE REEFER CAPACITY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: 4 Engineering Highlights Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-black/50 border border-white/10 hover:border-sky-500/40 transition-all text-left space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      {spec.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {spec.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
