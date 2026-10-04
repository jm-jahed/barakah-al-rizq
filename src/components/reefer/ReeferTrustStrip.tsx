'use client';

import React from 'react';
import { 
  Truck, 
  Weight, 
  Ruler, 
  ThermometerSnowflake, 
  Globe2, 
  Satellite 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

export default function ReeferTrustStrip() {
  const { isDark } = useReeferTheme();

  const trustItems = [
    {
      icon: Truck,
      value: '20',
      unit: 'UNITS',
      label: 'DEDICATED REEFER TRAILERS',
      sub: 'Company-owned cold fleet',
      accent: 'amber',
    },
    {
      icon: Weight,
      value: '25-TON',
      unit: 'MAX',
      label: '25-TON CAPACITY',
      sub: 'Heavy payload road certified',
      accent: 'blue',
    },
    {
      icon: Ruler,
      value: '15-M',
      unit: 'LENGTH',
      label: '15-METER TRAILERS',
      sub: 'High-volume EUR pallet bays',
      accent: 'emerald',
    },
    {
      icon: ThermometerSnowflake,
      value: '-18°C → +4°C',
      unit: 'RANGE',
      label: 'DUAL-ZONE TEMP CONTROL',
      sub: 'Frozen & chilled compliance',
      accent: 'blue',
    },
    {
      icon: Globe2,
      value: 'GCC',
      unit: 'NETWORK',
      label: 'CROSS-BORDER TRANSIT',
      sub: 'KSA, Qatar, Kuwait, Oman, Bahrain',
      accent: 'amber',
    },
    {
      icon: Satellite,
      value: '100%',
      unit: 'ACTIVE',
      label: 'FULLY TRACKED FLEET',
      sub: 'Real-time GPS & thermal logger',
      accent: 'emerald',
    },
  ];

  return (
    <section className={`relative z-20 border-y py-10 overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-5">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group transition-all"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div className={`w-9 h-9 rounded-xl border shadow-2xs flex items-center justify-center transition-colors ${
                    isDark 
                      ? 'bg-slate-900 border-slate-700 group-hover:border-amber-500' 
                      : 'bg-white border-slate-200 group-hover:border-amber-500'
                  }`}>
                    <IconComponent
                      className={`w-5 h-5 ${
                        item.accent === 'amber'
                          ? 'text-amber-500'
                          : item.accent === 'blue'
                          ? 'text-sky-500'
                          : 'text-emerald-500'
                      }`}
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    {item.unit}
                  </span>
                </div>

                <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight group-hover:text-amber-500 transition-colors ${
                  isDark ? 'text-white' : 'text-[#111111]'
                }`}>
                  {item.value}
                </div>

                <div className={`text-xs sm:text-sm font-black font-mono tracking-wider uppercase mt-1 ${
                  isDark ? 'text-slate-200' : 'text-[#111111]'
                }`}>
                  {item.label}
                </div>

                <div className="text-xs sm:text-sm text-slate-400 font-sans mt-1 font-medium leading-normal">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
