'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Activity, Droplets, FlaskConical, Thermometer } from 'lucide-react';
import { WATER_QUALITY_INDICATORS } from '@/data/aquavantaData';

export function AquavantaWaterQuality() {
  return (
    <section id="water-quality" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>CONTINUOUS POTABILITY VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Microbiological & Chemical Precision
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Every drop is tested in real time against international WHO and UAE GSO standards for mineral balance, optical clarity, neutral pH, and residual disinfection.
          </p>
        </div>

        {/* Quality Indicator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {WATER_QUALITY_INDICATORS.map((indicator) => (
            <div
              key={indicator.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-colors shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                  <span className="text-cyan-400">{indicator.sensorId}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                    {indicator.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {indicator.parameter}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {indicator.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 font-mono">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="text-2xl font-extrabold text-white">
                    {indicator.currentValue}{' '}
                    <span className="text-xs font-normal text-cyan-400">{indicator.unit}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Target: {indicator.targetRange}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            ILLUSTRATIVE MONITORING DATA • SENSOR READINGS CONFIGURED FOR PLATFORM DEMONSTRATION
          </p>
        </div>
      </div>
    </section>
  );
}
