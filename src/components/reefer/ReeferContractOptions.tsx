'use client';

import React from 'react';
import { 
  CalendarCheck, 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  Zap 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferContractOptionsProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferContractOptions({ onOpenQuote }: ReeferContractOptionsProps) {
  const { isDark } = useReeferTheme();

  return (
    <section id="contracts" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
          }`}>
            <Truck className="w-4 h-4 text-amber-500" />
            <span>COMMERCIAL ENGAGEMENT MODELS</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            FLEXIBLE CAPACITY. BUILT AROUND YOUR BUSINESS.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Whether securing spot capacity for urgent perishable harvests or locking in year-round dedicated GCC fleet allocation.
          </p>
        </div>

        {/* 2 Commercial Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* OPTION 1: SPOT / TRIP BASIS */}
          <div className={`p-8 sm:p-10 rounded-3xl border transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group ${
            isDark ? 'bg-[#0F172A] border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}>
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-amber-500 shadow-2xs ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-[#F8FAFC] border-slate-200'
                }`}>
                  <Zap className="w-7 h-7" />
                </div>
                <span className={`text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-full border font-bold ${
                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-[#4B5563] border-slate-200'
                }`}>
                  On-Demand Dispatch
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-mono text-amber-500 uppercase tracking-widest font-bold">
                  COMMERCIAL MODEL 01
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                  SPOT / TRIP BASIS
                </h3>
                <p className={`text-base mt-2.5 leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                  For individual shipments and immediate transport requirements across the UAE and GCC.
                </p>
              </div>

              <div className={`space-y-3.5 pt-5 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Spot Features:
                </div>
                {[
                  'Rapid dispatch from Al Aweer or JAFZA docks',
                  'Individual 25-ton full truckload (FTL) allocation',
                  'Fixed per-trip competitive route rates',
                  'Dedicated driver & instant GPS tracking link',
                  'Full customs documentation & transit assistance',
                ].map((feat, i) => (
                  <div key={i} className={`flex items-center gap-3 text-sm sm:text-base font-medium ${
                    isDark ? 'text-slate-300' : 'text-[#374151]'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-9">
              <button
                onClick={() => onOpenQuote({ serviceType: 'Spot / Trip' })}
                className={`w-full py-4 px-6 rounded-xl border-2 font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' 
                    : 'bg-[#F8FAFC] hover:bg-slate-100 text-[#111111] border-slate-300'
                }`}
              >
                <span>REQUEST A TRIP QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* OPTION 2: FIXED ANNUAL CONTRACT */}
          <div className={`p-8 sm:p-10 rounded-3xl border-2 border-amber-500 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
          }`}>
            {/* Top Featured Ribbon */}
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-xs font-mono uppercase px-4 py-1.5 rounded-bl-xl tracking-wider shadow-2xs">
              HIGH-VOLUME PRIORITY
            </div>

            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-amber-500 ${
                  isDark ? 'bg-amber-950/40 border-amber-500/40' : 'bg-amber-50 border-amber-200'
                }`}>
                  <CalendarCheck className="w-7 h-7" />
                </div>
                <span className={`text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-full border font-bold ${
                  isDark ? 'bg-amber-950/50 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-900 border-amber-200'
                }`}>
                  Dedicated Line-Haul
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-mono text-amber-500 uppercase tracking-widest font-bold">
                  COMMERCIAL MODEL 02
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                  FIXED ANNUAL CONTRACT
                </h3>
                <p className={`text-base mt-2.5 leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                  For businesses requiring reliable recurring transportation capacity throughout the year.
                </p>
              </div>

              <div className={`space-y-3.5 pt-5 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-amber-500 font-bold">
                  Key Strategic Benefits:
                </div>
                {[
                  'Dedicated capacity guaranteed during peak GCC seasons',
                  'Predictable logistics planning with locked contract tariffs',
                  'Long-term transport support & assigned fleet units',
                  'Recurring GCC routes (Daily / Weekly scheduled runs)',
                  'Fleet availability planning with zero queue delays',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>{benefit}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-9">
              <button
                onClick={() => onOpenQuote({ serviceType: 'Annual Contract' })}
                className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DISCUSS AN ANNUAL CONTRACT</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
