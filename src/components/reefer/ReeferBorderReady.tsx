'use client';

import React from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck2, 
  Globe2, 
  ThermometerSnowflake, 
  Stamp,
  UserCheck
} from 'lucide-react';
import { BORDER_CHECKPOINTS } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

export default function ReeferBorderReady() {
  const { isDark } = useReeferTheme();

  const complianceHighlights = [
    {
      title: 'Experienced Drivers',
      desc: 'Professional long-haul captains with millions of verified kilometers traversing GCC desert highways and border corridors.',
      icon: UserCheck
    },
    {
      title: 'Valid Saudi Transit Visas',
      desc: 'Active multiple-entry commercial transit and GCC transport visas permanently maintained across our driver pool.',
      icon: Stamp
    },
    {
      title: 'Cross-Border Transport Permits',
      desc: 'Bilateral transit licenses, road transport authority certificates, and pre-authorized customs bond clearances.',
      icon: FileCheck2
    },
    {
      title: 'GCC Route Experience',
      desc: 'Intimate operational familiarity with transit regulations across Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and regional routes.',
      icon: Globe2
    },
    {
      title: 'Border Documentation Awareness',
      desc: 'Pre-vetted Bayan, ZATCA, SABER, chamber of commerce attestations, and commercial invoice matching to prevent border delays.',
      icon: ShieldCheck
    },
    {
      title: 'Temperature-Controlled Equipment',
      desc: 'Continuous-run diesel Carrier & Thermo King units equipped with independent standby engines while queued in customs scanners.',
      icon: ThermometerSnowflake
    }
  ];

  return (
    <section id="border-ready" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-emerald-400' : 'bg-[#F8FAFC] border-slate-200 text-emerald-800'
          }`}>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>CUSTOMS COMPLIANCE & BORDER EXPERTISE</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            CROSS-BORDER READY.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Experienced drivers and established cross-border transport processes help keep GCC shipments moving efficiently.
          </p>
        </div>

        {/* 6 Key Operational Readiness Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border transition-all shadow-xs space-y-3.5 group ${
                  isDark 
                    ? 'bg-[#0F172A] border-slate-800 hover:border-emerald-500/60' 
                    : 'bg-[#F8FAFC] border-slate-200 hover:border-emerald-500/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors shadow-2xs ${
                    isDark 
                      ? 'bg-slate-900 border-slate-700 text-emerald-400 group-hover:text-amber-400' 
                      : 'bg-white border-slate-200 text-emerald-600 group-hover:text-amber-600'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                  isDark ? 'text-white group-hover:text-amber-400' : 'text-[#111111] group-hover:text-amber-700'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Operational Border Crossing Timeline Box with Real Photo */}
        <div className={`rounded-3xl border overflow-hidden shadow-xl ${
          isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          {/* Top Banner Image with Customs Border Scene */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <Image
              src="/images/reefer/border-crossing.jpg"
              alt="UAE Saudi Ghuwaifat Border Customs Reefer Inspection"
              fill
              sizes="100vw"
              className={`object-cover object-center ${isDark ? 'brightness-[0.75] contrast-125' : 'brightness-[0.92] contrast-[1.02]'}`}
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent' : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'}`} />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold uppercase tracking-wider shadow-2xs">
                  OPERATIONAL CORRIDOR
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-2.5 drop-shadow-sm">
                  Al Ghuwaifat / Al Batha / Salwa Customs Protocols
                </h3>
                <p className="text-xs sm:text-base font-mono text-slate-100 font-medium drop-shadow-sm mt-1">
                  Direct commercial customs clearance, agricultural quarantine inspection & X-ray scanner transit
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className={`inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-2 rounded-xl border font-bold shadow-xs ${
                  isDark ? 'bg-slate-900/95 border-slate-700 text-emerald-400' : 'bg-white/95 border-slate-200 text-emerald-800'
                }`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  AVERAGE CLEARANCE: UNDER 4 HOURS
                </span>
              </div>
            </div>
          </div>

          {/* Master Border-Crossing 5-Step Timeline */}
          <div className={`p-6 sm:p-10 space-y-7 ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8FAFC]'}`}>
            <div className={`text-xs sm:text-sm font-mono uppercase tracking-widest border-b pb-3 flex items-center justify-between font-bold ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-[#4B5563]'
            }`}>
              <span>VISUAL BORDER-CROSSING TIMELINE</span>
              <span className="text-amber-500">ZERO DELAYS THROUGH PRE-CLEARANCE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {BORDER_CHECKPOINTS.map((cp, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border space-y-2.5 relative group transition-colors shadow-2xs ${
                    isDark 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-amber-400' 
                      : 'bg-white border-slate-200 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-black text-amber-500">
                      STEP {cp.step}
                    </span>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-md border font-bold ${
                      isDark ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}>
                      {cp.status}
                    </span>
                  </div>

                  <div className={`text-sm sm:text-base font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                    {cp.title}
                  </div>

                  <div className="text-xs sm:text-sm font-mono text-sky-400 font-bold">
                    {cp.sub}
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed font-sans pt-1 font-medium ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                    {cp.action}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Summary Strip */}
            <div className={`pt-2 text-center text-xs sm:text-sm font-mono flex items-center justify-center gap-2 font-medium ${
              isDark ? 'text-slate-400' : 'text-[#374151]'
            }`}>
              <span className="text-emerald-500 font-bold">●</span>
              <span>
                All 20 units carry calibrated continuous thermal printout dataloggers for immediate border health authority verification.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
