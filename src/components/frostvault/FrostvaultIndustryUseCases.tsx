'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Thermometer, ArrowRight } from 'lucide-react';
import { FROSTVAULT_INDUSTRIES } from '@/data/frostvaultData';

export const FrostvaultIndustryUseCases: React.FC = () => {
  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            SECTOR-SPECIFIC PROTOCOLS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Built for What Cannot Wait.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Whether preserving life-saving vaccines at +2°C to +8°C or flash-frozen oceanic catch at -28°C, our infrastructure adapts to rigorous industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FROSTVAULT_INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-[#0a131e] border border-[#162d45] hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold tracking-wider">
                    {ind.industry}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#081018] text-[#94a3b8] border border-[#14263a]">
                    {ind.tempRequirement}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] mb-3">
                  {ind.headline}
                </h3>

                <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-6">
                  {ind.description}
                </p>

                <div className="space-y-1.5 p-4 rounded-xl bg-[#081018] border border-[#142539] text-xs font-mono mb-4">
                  <div className="text-[10px] text-[#64748b] uppercase font-bold mb-1">Key Compliance Pillars</div>
                  {ind.keyRequirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[#cbd5e1]">
                      <Check className="w-3 h-3 text-[#38bdf8] shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#13253a] text-[11px] font-mono text-[#64748b]">
                Protocol: <strong className="text-[#94a3b8] font-normal">{ind.monitoringProtocol}</strong>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
