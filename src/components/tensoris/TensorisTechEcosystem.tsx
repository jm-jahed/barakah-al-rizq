'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Server, Layers, CheckCircle, Activity, ShieldCheck, GitFork, Boxes } from 'lucide-react';
import { TECH_ECOSYSTEM } from '@/data/tensorisData';

export const TensorisTechEcosystem: React.FC = () => {
  return (
    <section id="technology" className="relative py-24 bg-[#020617] text-slate-100 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Boxes className="w-3.5 h-3.5" />
            <span>ENTERPRISE TECHNOLOGY STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Interoperable With Your Existing Systems of Record
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Zero rip-and-replace. TENSORIS integrates seamlessly with legacy ERPs, high-capacity vector stores, and custom sovereign foundation models.
          </p>
        </div>

        {/* 3 Categories Stack */}
        <div className="space-y-8">
          {TECH_ECOSYSTEM.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cat.technologies.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-mono truncate">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/20">
                        {tech.latency}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-normal">
                      {tech.role}
                    </p>

                    <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-semibold">{tech.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
