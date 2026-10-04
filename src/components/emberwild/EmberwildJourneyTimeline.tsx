'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck } from 'lucide-react';

export const EmberwildJourneyTimeline: React.FC = () => {
  const steps = [
    { number: '01', title: 'ARRIVE', desc: 'Leave the city skyline behind. Wind through canyon roads to your private secluded ridge.' },
    { number: '02', title: 'UNPLUG', desc: 'Silence digital notifications. Inhale mountain cedar, cold desert air, and acoustic stillness.' },
    { number: '03', title: 'EXPLORE', desc: 'Hike ancient geological ridges, paddle turquoise waters, or track wild gazelle herds.' },
    { number: '04', title: 'GATHER', desc: 'Gather around the olive-wood ember hearth for storytelling and open-fire dining.' },
    { number: '05', title: 'REST', desc: 'Drift asleep under a 270° celestial glass dome watching constellations glide across the sky.' },
    { number: '06', title: 'REMEMBER', desc: 'Return renewed, carrying the quiet power of the wilderness back into everyday life.' }
  ];

  return (
    <section className="py-24 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            THE WILDERNESS SEQUENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
            A Journey In <span className="font-serif italic text-amber-400">Six Movements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-stone-900/50 border border-stone-800 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-amber-400 font-bold mb-3">{step.number}</div>
                <h3 className="text-lg font-light tracking-wider text-stone-100 mb-2">{step.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed font-light">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 text-[10px] font-mono text-stone-500">
                Movement {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
