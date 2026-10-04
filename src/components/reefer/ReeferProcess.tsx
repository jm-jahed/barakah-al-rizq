'use client';

import React from 'react';
import { 
  FileText, 
  PackageCheck, 
  Radio, 
  ShieldAlert, 
  MapPin, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferProcessProps {
  onOpenQuote: () => void;
}

export default function ReeferProcess({ onOpenQuote }: ReeferProcessProps) {
  const { isDark } = useReeferTheme();

  const steps = [
    {
      number: '01',
      title: 'BOOK',
      label: 'Send Requirements',
      desc: 'Submit your origin, destination, cargo type, tonnage and temperature specifications for instant capacity confirmation.',
      icon: FileText,
      tag: 'Immediate Booking'
    },
    {
      number: '02',
      title: 'LOAD',
      label: 'Al Aweer / JAFZA',
      desc: 'Cargo is collected from Al Aweer Wholesale Market or JAFZA Free Zone docks into pre-cooled, sanitized 15m trailers.',
      icon: PackageCheck,
      tag: 'Pre-Cooled Loading'
    },
    {
      number: '03',
      title: 'TRACK',
      label: 'Monitor Progress',
      desc: 'Monitor real-time GPS telemetry, compartment temperatures, and door sensor telemetry via automated status dispatches.',
      icon: Radio,
      tag: '24/7 Telemetry'
    },
    {
      number: '04',
      title: 'CROSS BORDER',
      label: 'GCC Clearance',
      desc: 'Professional GCC cross-border transportation expedited by pre-verified Saudi transit visas, SABER, and Bayan customs clearances.',
      icon: ShieldAlert,
      tag: 'Border Clearance'
    },
    {
      number: '05',
      title: 'DELIVER',
      label: 'Destination Cold Store',
      desc: 'Cargo arrives at the destination under verified controlled thermal conditions with full datalogger temperature printout handover.',
      icon: MapPin,
      tag: 'Audited Handover'
    }
  ];

  return (
    <section className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-amber-700'
          }`}>
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>OPERATIONAL REEFER WORKFLOW</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            HOW THE PROCESS WORKS
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            From initial booking in Dubai to final temperature-verified unloading at GCC consignee cold stores — streamlined in 5 precision steps.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between relative group transition-all shadow-xs ${
                  isDark 
                    ? 'bg-[#0F172A] border-slate-800 hover:border-amber-500' 
                    : 'bg-white border-slate-200 hover:border-amber-500'
                }`}
              >
                {/* Step Number Watermark */}
                <div className={`flex items-center justify-between border-b pb-4 mb-4 ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <span className="text-3xl font-black font-mono text-amber-500">
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors shadow-2xs ${
                    isDark 
                      ? 'bg-slate-900 border-slate-700 text-sky-400 group-hover:text-amber-400' 
                      : 'bg-[#F8FAFC] border-slate-200 text-[#0369A1] group-hover:text-amber-600'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs sm:text-sm font-mono text-sky-400 font-bold uppercase tracking-wider">
                    {step.title}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-amber-400' : 'text-[#111111] group-hover:text-amber-700'
                  }`}>
                    {step.label}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-sans pt-1 font-medium ${
                    isDark ? 'text-slate-300' : 'text-[#374151]'
                  }`}>
                    {step.desc}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <span className="text-xs sm:text-sm font-mono text-emerald-500 font-bold">
                    ● {step.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="pt-4 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <span>START STEP 01 — SUBMIT SHIPMENT REQUIREMENTS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
