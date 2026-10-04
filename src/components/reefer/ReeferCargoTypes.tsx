'use client';

import React, { useState } from 'react';
import { 
  Apple, 
  Milk, 
  Beef, 
  Snowflake, 
  Package, 
  Boxes, 
  ArrowRight, 
  CheckCircle2, 
  ThermometerSnowflake 
} from 'lucide-react';
import { CARGO_CATEGORIES } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferCargoTypesProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferCargoTypes({ onOpenQuote }: ReeferCargoTypesProps) {
  const [activeCargoId, setActiveCargoId] = useState<string>(CARGO_CATEGORIES[0].id);
  const { isDark } = useReeferTheme();

  const getCargoIcon = (id: string) => {
    switch (id) {
      case 'fruits-vegetables':
        return Apple;
      case 'dairy':
        return Milk;
      case 'meat':
        return Beef;
      case 'frozen-food':
        return Snowflake;
      case 'foodstuff':
        return Package;
      case 'fmcg':
        return Boxes;
      default:
        return Package;
    }
  };

  return (
    <section id="cargo" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
          }`}>
            <ThermometerSnowflake className="w-4 h-4 text-amber-500" />
            <span>PERISHABLE & COLD-CHAIN CARGO SCOPES</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            BUILT FOR TEMPERATURE-SENSITIVE CARGO
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Specialized refrigeration configurations tailored to the strict biochemical and temperature tolerances of GCC food importers, exporters, and industrial manufacturers.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARGO_CATEGORIES.map((cargo) => {
            const IconComp = getCargoIcon(cargo.id);
            const isSelected = activeCargoId === cargo.id;

            return (
              <div
                key={cargo.id}
                onMouseEnter={() => setActiveCargoId(cargo.id)}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-200 relative flex flex-col justify-between group overflow-hidden ${
                  isSelected
                    ? isDark 
                      ? 'bg-[#0F172A] border-amber-500 shadow-xl -translate-y-1' 
                      : 'bg-white border-amber-500 shadow-xl -translate-y-1'
                    : isDark
                      ? 'bg-[#0F172A]/70 border-slate-800 hover:border-slate-700 hover:shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Active top amber accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-all ${
                    isSelected ? 'bg-amber-500' : 'bg-transparent'
                  }`}
                />

                <div className="space-y-5">
                  
                  {/* Category & Temperature Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold">
                      {cargo.category}
                    </span>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-xs sm:text-sm font-bold ${
                      isDark ? 'bg-sky-950/40 border-sky-500/40 text-sky-400' : 'bg-sky-50 border-sky-200 text-[#0369A1]'
                    }`}>
                      <ThermometerSnowflake className="w-3.5 h-3.5" />
                      <span>{cargo.temperatureRange}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 pt-1">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500 transition-all shadow-2xs ${
                      isDark ? 'bg-slate-900 border-slate-700' : 'bg-[#F8FAFC] border-slate-200'
                    }`}>
                      <IconComp className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-black transition-colors ${
                        isDark ? 'text-white group-hover:text-amber-400' : 'text-[#111111] group-hover:text-amber-700'
                      }`}>
                        {cargo.name.toUpperCase()}
                      </h3>
                      <span className="text-xs sm:text-sm font-mono text-slate-400 font-semibold">
                        Target Setpoint: <strong className={isDark ? 'text-white' : 'text-[#111111]'}>{cargo.idealTemp}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed pt-1 font-normal ${
                    isDark ? 'text-slate-300' : 'text-[#374151]'
                  }`}>
                    {cargo.description}
                  </p>

                  {/* Special Features Checklist */}
                  <div className={`space-y-2 pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                      Humidity / Transit Guard:
                    </div>
                    <div className="text-sm font-mono text-emerald-500 font-bold pb-1">
                      {cargo.humidityControl}
                    </div>
                    {cargo.features.map((feat, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${
                        isDark ? 'text-slate-300' : 'text-[#374151]'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Instant Quote for this Cargo */}
                <div className={`pt-6 mt-5 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <button
                    onClick={() => onOpenQuote({ cargoType: cargo.id })}
                    className={`w-full py-3.5 px-5 rounded-xl border font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white border-slate-700' 
                        : 'bg-[#F8FAFC] hover:bg-slate-900 text-[#111111] hover:text-white border-slate-200'
                    }`}
                  >
                    <span>Request Rate for {cargo.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
