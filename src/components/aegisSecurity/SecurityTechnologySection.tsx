'use client';

import React, { useState } from 'react';
import { Camera, Fingerprint, Radio, Cpu, QrCode, Bell, CheckCircle2, ArrowRight } from 'lucide-react';
import { AEGIS_TECHNOLOGIES, SecurityTechnology } from '@/data/aegisSecurityData';

const TECH_ICON_MAP: Record<string, any> = {
  Camera,
  Fingerprint,
  Radio,
  Cpu,
  QrCode,
  Bell
};

export default function SecurityTechnologySection() {
  const [selectedTech, setSelectedTech] = useState<SecurityTechnology>(AEGIS_TECHNOLOGIES[0]);

  return (
    <section id="technology" className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>TACTICAL HARDWARE &amp; NEURAL SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Intelligence Meets Security.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We deploy cutting-edge AI video analytics, military-grade biometric access gates, and SIRA-approved cloud video architectures to eliminate human error.
          </p>
        </div>

        {/* Interactive Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AEGIS_TECHNOLOGIES.map((tech) => {
            const IconComp = TECH_ICON_MAP[tech.icon] || Camera;
            const isSelected = selectedTech.id === tech.id;

            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0B1220] to-[#080D18] border-cyan-400 shadow-2xl shadow-cyan-950/60 scale-[1.02]'
                    : 'bg-[#080D18] border-slate-800/90 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {tech.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold">{isSelected ? 'Active Spec' : 'Inspect Tech'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Technology Deep-Dive Showcase Box */}
        <div className="bg-[#080D18] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                Deep Dive Technology Blueprint &bull; {selectedTech.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedTech.name}
              </h3>
            </div>
            <div className="px-4 py-2 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400 font-bold">
              Key Benefit: {selectedTech.keyBenefit}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedTech.fullDesc}
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
                <strong className="text-cyan-400 block mb-1 uppercase text-[10px]">Ideal Application Environment:</strong>
                {selectedTech.application}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                Technical Specifications
              </span>
              {selectedTech.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
