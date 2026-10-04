'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Apple,
  Milk,
  Beef,
  Snowflake,
  Package,
  Sparkles,
  Thermometer,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Wind
} from 'lucide-react';
import { CARGO_CATEGORIES, CargoCategory } from '@/data/reeferLogisticsData';

interface ReeferCargoTypesProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferCargoTypes({ onOpenQuote }: ReeferCargoTypesProps) {
  const [selectedCargo, setSelectedCargo] = useState<CargoCategory | null>(null);

  const iconMap: Record<string, any> = {
    Apple,
    Milk,
    Beef,
    Snowflake,
    Package,
    Sparkles
  };

  return (
    <section id="cargo" className="py-20 sm:py-28 bg-[#090d16] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Package className="w-3.5 h-3.5" />
            <span>COMMODITY-SPECIFIC THERMAL PROFILES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            BUILT FOR TEMPERATURE-SENSITIVE CARGO
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Tailored refrigeration airflow, humidity management, and temperature setpoints engineered for every perishable category moving across the GCC.
          </p>
        </div>

        {/* 6 Interactive Cargo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CARGO_CATEGORIES.map((cargo) => {
            const Icon = iconMap[cargo.icon] || Package;
            return (
              <div
                key={cargo.id}
                className="group rounded-2xl bg-[#0c1220] border border-white/10 hover:border-sky-400/60 overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:shadow-sky-950/40"
              >
                {/* Card Top Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={cargo.image}
                    alt={cargo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-[#0c1220]/40 to-transparent" />
                  
                  {/* Floating Temperature Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-sky-400/40 text-sky-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                    <Thermometer className="w-3.5 h-3.5 text-sky-400" />
                    <span>{cargo.tempRange}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-4 text-[11px] font-mono text-slate-300 uppercase tracking-wider bg-black/60 px-2.5 py-1 rounded border border-white/10">
                    {cargo.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold font-mono text-white tracking-tight">
                        {cargo.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                      {cargo.description}
                    </p>

                    {/* Common Products Pills */}
                    <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">
                        COMMON SHIPMENTS:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cargo.commonProducts.slice(0, 3).map((prod, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-slate-300"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      25-Ton Reefer
                    </span>
                    <button
                      onClick={() => onOpenQuote({ cargoType: cargo.title, temperature: cargo.tempRange })}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 group-hover:text-sky-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>Quote This Cargo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
