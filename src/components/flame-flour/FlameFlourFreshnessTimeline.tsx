'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, ShieldCheck, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

const BAKING_STAGES = [
  {
    time: '04:30 AM',
    title: 'Dough Preparation',
    temp: '18°C Room',
    desc: 'French stoneground flour is weighed, hydrated, and autolysed with spring water. No commercial yeast is used.',
    icon: '🥣',
    status: 'Completed'
  },
  {
    time: '06:00 AM',
    title: 'Fermentation & Folds',
    temp: '24°C Proof',
    desc: 'Gentle coil folds every 45 minutes build delicate gluten strength while Lactobacillus develops complex organic acids.',
    icon: '🫧',
    status: 'Completed'
  },
  {
    time: '07:15 AM',
    title: 'Bench Shaping',
    temp: '20°C Marble',
    desc: 'Dough portions are hand-shaped with rice flour into natural cane bannetons for final structural tension.',
    icon: '👐',
    status: 'Completed'
  },
  {
    time: '08:00 AM',
    title: 'Woodfire Deck Oven',
    temp: '245°C Hearth',
    desc: 'Scored with razor lames and loaded directly onto refractory hearth stones under intense pressurized steam.',
    icon: '🔥',
    status: 'Active Now'
  },
  {
    time: '08:30 AM',
    title: 'Cooling & Crumb Set',
    temp: '45°C Rack',
    desc: 'Loaves sing on cooling racks as internal moisture balances and caramelized crusts harden into crackling glass.',
    icon: '💨',
    status: 'Pending'
  },
  {
    time: '09:00 AM',
    title: 'Counter Restock',
    temp: '22°C Ambient',
    desc: 'Warm bakes are sliced, packaged in unbleached kraft, and arranged across our marble display counter.',
    icon: '🥖',
    status: 'Pending'
  },
  {
    time: '09:30 AM',
    title: 'Morning Ready & Dispatch',
    temp: 'Optimal Peak',
    desc: 'Early pre-orders depart for express courier delivery across Dubai & Abu Dhabi hubs.',
    icon: '✨',
    status: 'Pending'
  }
];

export const FlameFlourFreshnessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // 08:00 AM active

  return (
    <section className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Clock className="w-3.5 h-3.5" />
            <span>DAILY WOODFIRE TIMELINE · CONCEPTUAL BAKERY WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Baked for the Moment.
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            We operate in synchronized rhythms from pre-dawn autolyse to morning counter restock.
          </p>
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="relative">
          {/* Horizontal Desktop Bar */}
          <div className="hidden lg:grid grid-cols-7 gap-2 mb-8">
            {BAKING_STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              return (
                <button
                  key={stage.time}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-2xl text-left border transition-all relative ${
                    isActive
                      ? 'bg-amber-950/70 border-amber-500 ring-1 ring-amber-500/50 shadow-lg'
                      : isPast
                      ? 'bg-stone-900/80 border-stone-800 text-stone-300'
                      : 'bg-stone-950/60 border-stone-900 text-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className={isActive ? 'text-amber-400 font-bold' : isPast ? 'text-stone-300' : 'text-stone-400'}>
                      {stage.time}
                    </span>
                    <span className="text-sm">{stage.icon}</span>
                  </div>
                  <div className="text-xs font-serif font-medium text-stone-200 truncate">
                    {stage.title}
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rotate-45" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep Dive Card */}
          <div className="bg-[#120f0d] p-6 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-semibold">
                    {BAKING_STAGES[activeStep].time}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Stage {activeStep + 1} of 7 · {BAKING_STAGES[activeStep].temp}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-stone-100 flex items-center gap-3">
                  <span>{BAKING_STAGES[activeStep].icon}</span>
                  <span>{BAKING_STAGES[activeStep].title}</span>
                </h3>

                <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                  {BAKING_STAGES[activeStep].desc}
                </p>

                <div className="flex items-center gap-6 pt-2 text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-amber-400" />
                    <span>Hearth Humidity: 85% Steam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>Deck Oven Temp: 245°C</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-stone-900/80 p-5 rounded-2xl border border-stone-800 text-xs space-y-3 font-mono">
                <div className="text-amber-400 uppercase tracking-wider font-semibold">Production Status</div>
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Current Phase:</span>
                  <span className="text-stone-200 font-bold">{BAKING_STAGES[activeStep].status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Target Core Temp:</span>
                  <span className="text-amber-300 font-bold">98°C Loaf Interior</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-400">Hearth Deck:</span>
                  <span className="text-stone-200">Refractory Granite #1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
