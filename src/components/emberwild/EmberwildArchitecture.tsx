'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ShieldCheck, Compass, Smartphone, Cpu } from 'lucide-react';

export const EmberwildArchitecture: React.FC = () => {
  const stack = [
    {
      title: 'Cinematic Hospitality Frontend',
      tech: 'Next.js 16 · React 19 · Framer Motion · Tailwind CSS',
      desc: 'Atmospheric hero reveals, dark-mode wilderness styling, and seamless interactive stay discovery.'
    },
    {
      title: 'Wild Finder Discovery Engine',
      tech: 'Dynamic Multi-Vector Matrix · Real-Time AED Calculation',
      desc: 'Landscape filtering across mountain, desert, forest, and lakeside typologies with zero latency.'
    },
    {
      title: 'Digital Trip Pass System',
      tech: 'Offline-Cached Access Key · Smart Pin Dispatch',
      desc: 'Generates secure cryptographic reservation credentials for remote off-grid guest check-in.'
    },
    {
      title: 'Microgrid Telemetry Network',
      tech: 'NIST IoT Sensors · Solar Inverter Telemetry',
      desc: 'Monitors battery state of charge, rainwater reservoirs, and wadi trail conditions across the Emirates.'
    }
  ];

  return (
    <section className="py-20 bg-[#0a0d0a] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            DIGITAL INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-100">
            The Digital <span className="font-serif italic text-amber-400">Wilderness Stack</span>
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            Engineered to connect high-touch luxury hospitality with remote wilderness locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-xs font-bold mb-4 border border-amber-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-medium text-stone-100 mb-2">{item.title}</h3>
                <div className="text-xs text-amber-400 font-mono mb-3">{item.tech}</div>
                <p className="text-xs text-stone-400 leading-relaxed font-light">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Architecture</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
