'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Trash2, Heart, Shield } from 'lucide-react';

export const EmberwildSustainable: React.FC = () => {
  const principles = [
    {
      title: 'Low-Impact Architecture',
      desc: 'All domes and cabins rest on temporary helical micro-pile foundations, leaving zero concrete footprint in natural wadi habitats.',
      icon: Leaf
    },
    {
      title: 'Off-Grid Solar & Battery',
      desc: '100% powered by silent rooftop solar microgrids paired with lithium-iron-phosphate storage for zero acoustic pollution.',
      icon: Sun
    },
    {
      title: 'Water Consciousness',
      desc: 'Closed-loop greywater filtration systems naturally irrigate native mountain ghaf and sidr trees without depleting groundwater.',
      icon: Droplets
    },
    {
      title: 'Zero Single-Use Plastics',
      desc: 'All provisions supplied in hand-blown glass carafes, organic cotton tote bags, and reusable brass canteens.',
      icon: Trash2
    }
  ];

  return (
    <section className="py-24 bg-[#0a0d0a] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
            CONSERVATION & RESPONSIBLE RETREATS
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
            Leave Less <span className="font-serif italic text-amber-400">Behind.</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3 leading-relaxed">
            We believe true luxury is experiencing untouched nature without altering it. Every stay is designed around respectful coexistence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-light text-stone-100 mb-2">{p.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed font-light">{p.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 text-[10px] font-mono text-emerald-400">
                  UAE Environmental Heritage Protocol
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
