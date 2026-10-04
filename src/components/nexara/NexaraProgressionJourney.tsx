'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NexaraProgressionJourney: React.FC = () => {
  const steps = [
    { number: '01', title: 'DISCOVER', desc: 'Enter 6 distinct digital universes spanning cybernetic arenas to orbital space flights.' },
    { number: '02', title: 'PLAY', desc: 'Jump instantly into low-latency cloud sessions with zero installation friction.' },
    { number: '03', title: 'MASTER', desc: 'Hone high-skill recoil patterns, movement momentum, and strategic tactical execution.' },
    { number: '04', title: 'COMPETE', desc: 'Climb through Diamond Elite to Apex Grandmaster across official regional tournaments.' },
    { number: '05', title: 'CONNECT', desc: 'Build lasting squads, found clans, and trade tactical blueprints with verified communities.' },
    { number: '06', title: 'EVOLVE', desc: 'Unlock mythic weapon cosmetics and etch your gamertag into the global ledger.' }
  ];

  return (
    <section className="py-24 bg-[#0a0d18] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            THE GAMER’S PATHWAY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Evolution In <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Six Stages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-cyan-400 font-bold mb-3">{step.number}</div>
                <h3 className="text-lg font-black tracking-wider text-white mb-2 font-mono">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                Phase {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
