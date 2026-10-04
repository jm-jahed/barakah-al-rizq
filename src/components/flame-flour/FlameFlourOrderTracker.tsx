'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle2, Clock, Flame, Package, Truck, ShieldCheck } from 'lucide-react';

const TRACKING_STEPS = [
  { id: 1, title: 'Order Received', time: '04:15 AM', desc: 'Order logged into digital bake ledger and ingredients measured', done: true },
  { id: 2, title: 'Ingredients Prepared', time: '05:00 AM', desc: 'Autolyse complete, 7-year sourdough starter mixed', done: true },
  { id: 3, title: 'Baking in Hearth', time: '07:45 AM', desc: 'Loaded into Refractory Stone Deck Oven #1 at 245°C', current: true },
  { id: 4, title: 'Cooling & Crumb Set', time: '08:20 AM Est', desc: 'Resting on wooden slats as crust micro-fractures', done: false },
  { id: 5, title: 'Finishing & Glazing', time: '08:45 AM Est', desc: 'Dusting with Maldon smoked salt and packaging in kraft', done: false },
  { id: 6, title: 'Packed in Box', time: '09:00 AM Est', desc: 'Sealed with artisan wax seal and personalized note card', done: false },
  { id: 7, title: 'Ready for Dispatch', time: '09:15 AM Est', desc: 'Courier pickup scheduled for Dubai / Abu Dhabi delivery', done: false }
];

export const FlameFlourOrderTracker: React.FC = () => {
  const [orderQuery, setOrderQuery] = useState('FF-2084');
  const [searched, setSearched] = useState(true);

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Clock className="w-3.5 h-3.5" />
            <span>LIVE BAKE TRACKING ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Follow Your Bake
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Track your artisan batch step-by-step from morning flour hydration to courier dispatch.
          </p>
        </div>

        {/* Search Order Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              placeholder="Enter Order ID (e.g. FF-2084)..."
              className="w-full bg-[#120f0d] border border-stone-800 rounded-2xl pl-11 pr-32 py-3.5 text-sm text-stone-100 font-mono placeholder-stone-600 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={() => setSearched(true)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors"
            >
              Track Bake
            </button>
          </div>
        </div>

        {/* Live Timeline Display */}
        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#120f0d] p-6 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-850 pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">LIVE ORDER</span>
                <h3 className="text-2xl font-serif text-stone-100">Batch #{orderQuery}</h3>
                <p className="text-xs text-stone-400 mt-0.5">Assorted Breakfast Box & Sourdough Boule</p>
              </div>

              <div className="flex items-center gap-2 bg-amber-950/40 px-4 py-2 rounded-xl border border-amber-800/50 text-amber-300 text-xs font-mono">
                <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
                <span>Currently: Firing in Stone Hearth (245°C)</span>
              </div>
            </div>

            {/* Stepper */}
            <div className="space-y-6">
              {TRACKING_STEPS.map((step, idx) => (
                <div key={step.id} className="flex items-start gap-4 sm:gap-6 relative">
                  {idx < TRACKING_STEPS.length - 1 && (
                    <div className="absolute left-4 sm:left-5 top-10 bottom-0 w-0.5 bg-stone-800 -translate-x-1/2" />
                  )}

                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border z-10 ${
                    step.current
                      ? 'bg-amber-500 text-stone-950 border-amber-400 ring-4 ring-amber-500/20 shadow-lg'
                      : step.done
                      ? 'bg-emerald-950 border-emerald-600 text-emerald-400'
                      : 'bg-stone-900 border-stone-800 text-stone-400'
                  }`}>
                    {step.done ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : step.current ? (
                      <Flame className="w-4 h-4 animate-pulse" />
                    ) : (
                      <span className="text-xs font-mono">{step.id}</span>
                    )}
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className={`text-base font-serif ${step.current ? 'text-amber-300 font-bold' : step.done ? 'text-stone-200' : 'text-stone-400'}`}>
                        {step.title}
                      </h4>
                      <span className="text-xs font-mono text-stone-400">{step.time}</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
