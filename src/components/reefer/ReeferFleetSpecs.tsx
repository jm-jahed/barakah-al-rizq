'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Truck, 
  Ruler, 
  Weight, 
  ThermometerSnowflake 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferFleetSpecsProps {
  onOpenQuote: () => void;
}

export default function ReeferFleetSpecs({ onOpenQuote }: ReeferFleetSpecsProps) {
  const { isDark } = useReeferTheme();

  const supportedCargos = [
    { name: 'Chilled Cargo', icon: '❄️', range: '0°C to +4°C' },
    { name: 'Frozen Cargo', icon: '🧊', range: '-18°C to -25°C' },
    { name: 'Foodstuff', icon: '🥫', range: '+12°C to +18°C' },
    { name: 'Dairy Products', icon: '🥛', range: '+2°C to +4°C' },
    { name: 'Fresh Meat & Poultry', icon: '🥩', range: '-2°C to +2°C' },
    { name: 'Fresh Fruits', icon: '🍎', range: '+3°C to +6°C' },
    { name: 'Vegetables', icon: '🥦', range: '+4°C to +8°C' },
    { name: 'Temp-Sensitive FMCG', icon: '📦', range: '+15°C Ambient' },
  ];

  const fleetHighlights = [
    {
      title: '25-TON CAPACITY',
      value: '25 TON',
      unit: 'MAX ROAD PAYLOAD',
      description: 'Heavy commercial payload capacity engineered for high-density palletized frozen food and bulk fresh agricultural freight.',
      icon: Weight,
      color: 'amber'
    },
    {
      title: 'TRAILER LENGTH',
      value: '15 METERS',
      unit: 'EURO-PALLET BAYS',
      description: 'Extended 15-meter refrigerated box trailers maximizing cubic cargo space with aerodynamic side-skirts and insulated bulkheads.',
      icon: Ruler,
      color: 'blue'
    },
    {
      title: 'TEMPERATURE RANGE',
      value: '-18°C → +4°C',
      unit: 'DUAL-ZONE CERTIFIED',
      description: 'Hermetically insulated composite body panels paired with high-output Carrier Vector & Thermo King refrigeration compressors.',
      icon: ThermometerSnowflake,
      color: 'blue'
    },
    {
      title: 'FLEET CAPACITY',
      value: '20 UNITS',
      unit: 'DEDICATED REEFERS',
      description: 'Identical, standardized modern fleet maintained under rigorous scheduled maintenance protocols to guarantee zero en-route downtime.',
      icon: Truck,
      color: 'amber'
    }
  ];

  return (
    <section id="fleet" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-amber-700'
          }`}>
            <Truck className="w-4 h-4 text-amber-500" />
            <span>STANDARDIZED CROSS-BORDER FLEET</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            20 DEDICATED REEFER TRAILERS
          </h2>
          <p className={`text-base sm:text-xl font-normal ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Built for temperature-sensitive cargo moving across the GCC.
          </p>
        </div>

        {/* 4 Core Quantitative Fleet Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetHighlights.map((spec, i) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={i}
                className={`p-7 rounded-3xl border shadow-sm relative overflow-hidden group transition-all ${
                  isDark 
                    ? 'bg-[#0F172A] border-slate-800 hover:border-amber-500' 
                    : 'bg-white border-slate-200 hover:border-amber-500'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                    isDark ? 'bg-slate-900 border-slate-700' : 'bg-[#F8FAFC] border-slate-200'
                  }`}>
                    <IconComponent
                      className={`w-6 h-6 ${
                        spec.color === 'amber'
                          ? 'text-amber-500'
                          : 'text-sky-500'
                      }`}
                    />
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
                    {spec.unit}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider mb-1 font-bold">
                  {spec.title}
                </div>

                <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight group-hover:text-amber-500 transition-colors ${
                  isDark ? 'text-white' : 'text-[#111111]'
                }`}>
                  {spec.value}
                </div>

                <p className={`text-sm mt-3.5 leading-relaxed font-sans font-medium ${
                  isDark ? 'text-slate-300' : 'text-[#374151]'
                }`}>
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* High-Impact Visual Fleet Depot Banner with Cargo Checklist */}
        <div className={`rounded-3xl border overflow-hidden shadow-xl ${
          isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Depot Photo */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px]">
              <Image
                src="/images/reefer/fleet-depot.jpg"
                alt="20 Dedicated Reefer Trailers Fleet Depot in Dubai JAFZA"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className={`object-cover ${isDark ? 'brightness-[0.75] contrast-125' : 'brightness-[0.92] contrast-[1.02]'}`}
              />
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0F172A]' 
                  : 'bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/90'
              }`} />
              
              {/* Overlay Badge */}
              <div className={`absolute bottom-6 left-6 right-6 sm:right-auto border p-5 rounded-2xl backdrop-blur-md shadow-xl ${
                isDark ? 'bg-slate-900/90 border-slate-700 text-white' : 'bg-white/95 border-slate-200 text-[#111111]'
              }`}>
                <div className="flex items-center gap-2.5 text-emerald-500 font-mono text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>JAFZA SOUTH LOGISTICS BASE</span>
                </div>
                <div className={`font-mono text-base font-bold mt-1 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                  Standardized 15-Meter Schmitz & Chereau Fleet
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-mono mt-0.5 font-medium">
                  Certified for Trans-GCC Customs & Overland Transit
                </div>
              </div>
            </div>

            {/* Cargo Scope Checklist */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-12 space-y-6">
              <div className="space-y-2.5">
                <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-500 font-bold">
                  CARGO COMPATIBILITY
                </div>
                <h3 className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                  Engineered For High-Value Perishables
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                  Every trailer in our 20-unit fleet features calibrated airflow floors, sanitized food-grade interiors, and precision digital micro-temperature management for:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {supportedCargos.map((cargo, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border flex items-center gap-3 shadow-2xs ${
                      isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
                    }`}
                  >
                    <span className="text-lg select-none">{cargo.icon}</span>
                    <div className="min-w-0">
                      <div className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-[#111111]'}`}>{cargo.name}</div>
                      <div className="text-xs font-mono text-sky-400 font-bold">{cargo.range}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider transition-colors text-center shadow-xs cursor-pointer"
                >
                  RESERVE FLEET CAPACITY FOR YOUR ROUTE
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
