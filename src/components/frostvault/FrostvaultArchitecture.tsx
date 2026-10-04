'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Cpu, Activity, ShieldCheck, Truck, ArrowDown } from 'lucide-react';
import { COLD_CHAIN_ARCHITECTURE } from '@/data/frostvaultData';

export const FrostvaultArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            ENTERPRISE ARCHITECTURE
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Systemic Cold Chain Stack.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            A seven-layer coordinated infrastructure ensuring that physical cooling machinery, wireless sensor telemetry, and WMS software execute synchronously.
          </p>
        </div>

        {/* 7-Layer Architecture Stack */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {COLD_CHAIN_ARCHITECTURE.map((item, idx) => (
            <motion.div
              key={item.layer}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#0a131e] border border-[#162e48] hover:border-[#38bdf8]/40 transition-all flex items-center justify-between gap-4 font-mono text-xs"
            >
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-1 rounded-lg bg-[#08111a] border border-[#14263b] text-[#38bdf8] font-bold">
                  LAYER {item.layer}
                </span>
                <span className="text-base font-bold text-[#f8fafc]">
                  {item.name}
                </span>
              </div>

              <div className="text-[#94a3b8] text-right font-light max-w-md hidden sm:block">
                {item.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
