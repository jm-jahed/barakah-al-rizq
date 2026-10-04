'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wheat, Flame, Award, HeartHandshake, Layers } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Select',
    subtitle: 'Heritage French Grains & Mountain Water',
    desc: 'We select certified Label Rouge T55 and T65 stoneground flours milled from non-GMO heritage grains, paired with pristine mineral spring water.',
    icon: '🌾'
  },
  {
    step: '02',
    title: 'Mix & Autolyse',
    subtitle: 'Hydration Without Agitation',
    desc: 'Flour and water rest together for 60 minutes before levain is incorporated, allowing enzymatic breakdown and gentle gluten alignment.',
    icon: '🥣'
  },
  {
    step: '03',
    title: 'Slow Ferment',
    subtitle: '36-Hour Cold Maturation',
    desc: 'Wild yeasts and lactobacilli ferment slowly at 6°C, creating complex flavor precursors, open airy crumb, and superior digestibility.',
    icon: '⏳'
  },
  {
    step: '04',
    title: 'Hand Shape',
    subtitle: 'Tension Without Degassing',
    desc: 'Bakers gently cradle each portion on floured wooden worktables, folding tight seams into natural spruce pulp bannetons.',
    icon: '👐'
  },
  {
    step: '05',
    title: 'Proof & Score',
    subtitle: 'Razor Lame Precision',
    desc: 'Each proofed loaf is scored at a 30-degree angle with a surgeon-grade razor to guide the explosive oven spring and signature ear.',
    icon: '🔪'
  },
  {
    step: '06',
    title: 'Woodfire Bake',
    subtitle: 'Refractory Stone & Steam',
    desc: 'Baked at 245°C directly on heavy refractory stone decks under dense vapor injection, caramelizing sugars into deep mahogany crusts.',
    icon: '🔥'
  },
  {
    step: '07',
    title: 'Sing & Finish',
    subtitle: 'Acoustic Cooling Check',
    desc: 'Freshly emerged loaves ‘sing’ as the crust micro-fractures during cooling. Inspected for weight, hollow resonance, and blistered bloom.',
    icon: '✨'
  }
];

export const FlameFlourArtisanProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#090706] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Wheat className="w-3.5 h-3.5" />
            <span>THE 7-STAGE CRAFT JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            From Flour to Flame
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Every loaf embodies 36 hours of patient dedication, living levain cultures, and intense woodfire heat.
          </p>
        </div>

        {/* 7 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-6 sm:p-7 rounded-3xl bg-[#120f0d] border border-stone-800/80 hover:border-amber-700/50 transition-all flex flex-col justify-between shadow-xl ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#120f0d] via-amber-950/20 to-[#120f0d] border-amber-900/40' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-mono font-bold text-amber-500 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40">
                    STAGE {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-stone-100 mb-1">{item.title}</h3>
                <div className="text-xs font-mono text-amber-400/80 mb-3">{item.subtitle}</div>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-850 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>Handcrafted Process</span>
                <span className="text-amber-500">Step {idx + 1} / 7</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
