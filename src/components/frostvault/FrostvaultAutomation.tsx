'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search, Navigation, Box, ShieldCheck, Send, ArrowRight } from 'lucide-react';

export const FrostvaultAutomation: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Inventory Request',
      desc: 'API or WMS client order received with SKU and lot priority rules.',
      icon: Cpu
    },
    {
      step: '02',
      title: 'Location Identified',
      desc: 'System maps exact 3D coordinates in high-bay deep frozen racking.',
      icon: Search
    },
    {
      step: '03',
      title: 'Route Calculated',
      desc: 'Robotic picking path calculated to minimize sub-zero transit time.',
      icon: Navigation
    },
    {
      step: '04',
      title: 'Inventory Retrieved',
      desc: 'Autonomous narrow-aisle AGV shuttle extracts target pallet lot.',
      icon: Box
    },
    {
      step: '05',
      title: 'Quality Check',
      desc: 'Optical barcode scan + thermal probe confirms core product temp.',
      icon: ShieldCheck
    },
    {
      step: '06',
      title: 'Dispatch Prepared',
      desc: 'Pre-cooled airlock dock staging completed for reefer transport.',
      icon: Send
    },
  ];

  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            AUTONOMOUS WAREHOUSE ROBOTICS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            The Warehouse Moves with Intention.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            High-velocity automated retrieval minimizes human exposure to sub-zero environments while accelerating pallet cycle times by 400%.
          </p>
        </div>

        {/* 6-Node Automation Circuit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#0a131e] border border-[#172e48] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#38bdf8]">
                      STEP {s.step}
                    </span>
                    <div className="p-2 rounded-lg bg-[#081018] text-[#38bdf8] border border-[#14263b]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#f8fafc] mb-2 font-mono">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#13253a] text-[10px] text-[#64748b] font-mono">
                  Autonomous Protocol
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
