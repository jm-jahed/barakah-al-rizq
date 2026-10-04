'use client';

import React from 'react';
import { 
  Truck, 
  Globe2, 
  ThermometerSnowflake, 
  Satellite, 
  ShieldCheck, 
  Scale, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

export default function ReeferWhyChooseUs() {
  const { isDark } = useReeferTheme();

  const pillars = [
    {
      title: 'DEDICATED FLEET',
      sub: '20 reefer trailers available for regional transportation.',
      desc: 'No spot broker subcontracting. You get company-owned, standardized 15m heavy-capacity trailers under direct operational control.',
      icon: Truck,
      highlight: '20 Company Units'
    },
    {
      title: 'GCC EXPERIENCE',
      sub: 'Experienced with major cross-border routes.',
      desc: 'Decades of combined route intelligence covering highway conditions, transit speeds, weighing scales, and summer heat thermal mitigation.',
      icon: Globe2,
      highlight: 'KSA • Qatar • Kuwait • Oman • Bahrain'
    },
    {
      title: 'TEMPERATURE CONTROL',
      sub: 'Suitable for chilled and frozen cargo.',
      desc: 'Precision dual-zone micro-setpoint capability spanning -18°C deep freeze to +4°C delicate fresh produce chill.',
      icon: ThermometerSnowflake,
      highlight: '-18°C to +4°C Certified'
    },
    {
      title: 'TRACKED TRANSPORT',
      sub: 'Visibility throughout the journey.',
      desc: 'Customer tracking visibility paired with continuous satellite sensor dataloggers to verify zero thermal breach at every mile.',
      icon: Satellite,
      highlight: 'Continuous Telemetry'
    },
    {
      title: 'BORDER READY',
      sub: 'Drivers and documentation prepared for cross-border operations.',
      desc: 'Pre-vetted drivers holding valid Saudi commercial transit visas, Bayan manifests, and food-grade safety passes to minimize border downtime.',
      icon: ShieldCheck,
      highlight: 'Fast Customs Turnaround'
    },
    {
      title: 'FLEXIBLE CAPACITY',
      sub: 'Spot trips or annual contracts.',
      desc: 'Agile capacity models built around client volume swings, agricultural harvest seasonality, and corporate recurring distribution lanes.',
      icon: Scale,
      highlight: 'Spot & Annual Tiers'
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
            <Award className="w-4 h-4 text-amber-500" />
            <span>OPERATIONAL INTEGRITY & ASSURANCE</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            WHY BUSINESSES CHOOSE US
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            The standard for FMCG conglomerates, fresh food importers, and regional distributors demanding reliable cold-chain accountability.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-3xl border transition-all shadow-xs group space-y-4 flex flex-col justify-between ${
                  isDark 
                    ? 'bg-[#0F172A] border-slate-800 hover:border-amber-500' 
                    : 'bg-white border-slate-200 hover:border-amber-500'
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-amber-500 group-hover:scale-105 transition-all shadow-2xs ${
                      isDark ? 'bg-slate-900 border-slate-700' : 'bg-[#F8FAFC] border-slate-200'
                    }`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className={`text-xs sm:text-sm font-mono px-3 py-1 rounded-lg border font-bold ${
                      isDark ? 'bg-slate-900 border-slate-700 text-sky-400' : 'bg-[#F8FAFC] text-[#0369A1] border-slate-200'
                    }`}>
                      {pillar.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black transition-colors ${
                      isDark ? 'text-white group-hover:text-amber-400' : 'text-[#111111] group-hover:text-amber-700'
                    }`}>
                      {pillar.title}
                    </h3>
                    <div className="text-sm font-mono text-amber-500 font-bold pt-1">
                      {pillar.sub}
                    </div>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed font-sans font-normal ${
                    isDark ? 'text-slate-300' : 'text-[#374151]'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>

                <div className={`pt-4 border-t flex items-center gap-2 text-xs sm:text-sm font-mono text-emerald-500 font-bold ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Enterprise Grade Logistics SLA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
