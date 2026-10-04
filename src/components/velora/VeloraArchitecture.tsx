'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Box, Cpu, RefreshCw, ArrowRight } from 'lucide-react';
import { WELLNESS_ARCHITECTURE_STEPS } from '@/data/veloraData';

export const VeloraArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            SYSTEMIC WELLNESS DESIGN
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Every Detail Has a Purpose.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            VELORA is not a casual spa; it is an orchestrated architecture where light, material, touch, and hydrodynamics combine to induce deep restoration.
          </p>
        </div>

        {/* 5-Phase Architecture Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {WELLNESS_ARCHITECTURE_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#111613] border border-[#202a24] flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest mb-3">
                  Phase {step.step}
                </div>
                <h3 className="text-lg font-serif text-[#fdfbf7] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9d978a] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a231e] text-[10px] text-[#6b665c] uppercase tracking-wider">
                Orchestrated Element
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
