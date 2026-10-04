'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ShieldCheck, Cpu, Database, Server } from 'lucide-react';

export const NexaraArchitecture: React.FC = () => {
  const stack = [
    {
      title: 'Gaming Portal Experience',
      tech: 'Next.js 16 · React 19 · Framer Motion · Tailwind CSS',
      desc: 'Cinematic HUD components, dynamic sector portals, and fluid loadout customization.'
    },
    {
      title: 'Real-Time Matchmaking Matrix',
      tech: 'Sub-Millisecond Tick Engine · TrueSkill MMR Balancing',
      desc: 'Connects solo queue and 5-man squads within 4.2ms latency boundaries.'
    },
    {
      title: 'Global Competitive Ledger',
      tech: 'Deterministic Tournament State · Anti-Tamper Signatures',
      desc: 'Manages bracket progression, AED prize distributions, and unified player XP states.'
    },
    {
      title: 'Low-Latency Edge Peering',
      tech: 'Dubai & MENA Cloud Points-of-Presence · Direct Fiber Routing',
      desc: 'Guarantees sub-10ms packet delivery across UAE and Gulf esports tournaments.'
    }
  ];

  return (
    <section className="py-20 bg-[#0a0d18] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            PLATFORM ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            The Gaming <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Built for ultra-responsive competitive performance and seamless digital commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-violet-500/10 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold mb-4 border border-violet-500/30">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">{item.title}</h3>
                <div className="text-xs text-cyan-400 font-mono mb-3">{item.tech}</div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
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
