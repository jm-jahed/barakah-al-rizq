'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Building2, Palmtree, Factory, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';

export function AquavantaSignatureStory() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const timeline = [
    {
      time: '05:30 AM',
      title: 'Morning: Demand Begins Rising',
      desc: 'Residential districts start their morning routine. Smart meters register a 35% surge in domestic withdrawal velocity within 15 minutes.',
      icon: <Sun className="w-5 h-5 text-amber-400" />
    },
    {
      time: '07:45 AM',
      title: 'Commercial Districts Activate',
      desc: 'Office skyscrapers, transit terminals, and corporate hubs activate vertical HVAC cooling towers, requiring high-pressure baseline flow.',
      icon: <Building2 className="w-5 h-5 text-sky-400" />
    },
    {
      time: '11:00 AM',
      title: 'Hospitality Demand Increases',
      desc: 'Luxury coastal resorts, pool filtration systems, and laundry facilities experience peak midday consumption.',
      icon: <Palmtree className="w-5 h-5 text-teal-400" />
    },
    {
      time: '02:30 PM',
      title: 'Industrial Zones Begin Heavy Processing',
      desc: 'Manufacturing and concrete plants engage high-capacity greywater lines. Overall municipal flow reaches 52,000 m³/h.',
      icon: <Factory className="w-5 h-5 text-indigo-400" />
    },
    {
      time: '06:00 PM',
      title: 'The Intelligent System Responds Continuously',
      desc: 'Variable Frequency Drive pumps ramp up, modulated PRVs balance looped DMAs, and storage reservoirs dynamically discharge.',
      icon: <Activity className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SIGNATURE CHRONICLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            A City Wakes.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Witness how the intelligent smart water network anticipates and balances twenty-four hours of shifting municipal life in real time.
          </p>
        </div>

        {/* Vertical Timeline Interactive Story */}
        <div className="space-y-4">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    {item.time}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 font-mono text-xs text-teal-400 flex items-center gap-1.5 self-end sm:self-center">
                <CheckCircle2 className="w-4 h-4" />
                <span>Equilibrium Maintained</span>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Statement Climax */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-950 to-teal-950/40 border border-cyan-900/50">
          <p className="text-xl sm:text-2xl font-bold text-white font-serif italic mb-2">
            “Infrastructure should not react late. It should understand what comes next.”
          </p>
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            AQUAVANTA HYDRAULIC PHILOSOPHY
          </div>
        </div>
      </div>
    </section>
  );
}
