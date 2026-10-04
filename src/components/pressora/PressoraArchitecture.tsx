'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Server, CheckCircle2, FileCheck, ShieldAlert, Activity, Truck, Database } from 'lucide-react';

export const PressoraArchitecture: React.FC = () => {
  const layers = [
    {
      title: 'Digital Commerce Layer',
      tech: 'Next.js 16 · React 19 · Framer Motion · Tailwind CSS',
      desc: 'Interactive 3D configurators, vector canvas preview, and instant AED pricing matrix.'
    },
    {
      title: 'Automated Preflight Engine',
      tech: 'Raster Engine · Color Delta-E Auditor · DPI Verifier',
      desc: 'Real-time vector validation, 3mm bleed check, spot color separation, and font embedding checks.'
    },
    {
      title: 'Press & Bindery Dispatch',
      tech: 'CIP4 / JDF Pipeline · Heidelberg Prinect · Indigo RIP',
      desc: 'Direct-to-plate vector laser output and automated cutter slit/crease optical registration.'
    },
    {
      title: 'UAE Logistics & Tracking',
      tech: 'Last-Mile Route Optimization · 7 Emirates Dispatch API',
      desc: 'Fleet telemetry across Dubai, Abu Dhabi, Sharjah, and northern emirates.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            TECHNICAL ARCHITECTURE & PRINT STACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            The Digital <span className="font-serif italic text-amber-400">Print Engine</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Seamless bridge between client-side vector composition, industrial RIP rasterization, and physical press runs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.title}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 relative flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-xs font-bold mb-4 border border-amber-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{layer.title}</h3>
                <div className="text-xs text-amber-400 font-mono mb-3">{layer.tech}</div>
                <p className="text-xs text-neutral-400 leading-relaxed">{layer.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-1 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
