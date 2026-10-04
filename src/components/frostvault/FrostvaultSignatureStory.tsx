'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FrostvaultSignatureStory: React.FC = () => {
  return (
    <section className="py-32 bg-[#05080b] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#101e2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 font-mono">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#38bdf8] mb-8"
        >
          THE FROSTVAULT DOCTRINE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-[#f8fafc] leading-[1.2] mb-12"
        >
          A WAREHOUSE IS MORE THAN A BUILDING.
        </motion.h2>

        <div className="space-y-4 text-xl sm:text-2xl md:text-3xl text-[#94a3b8] font-light">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[#38bdf8]"
          >
            Temperature.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#cbd5e1]"
          >
            Inventory.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-[#cbd5e1]"
          >
            Movement.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#cbd5e1]"
          >
            Timing.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="text-[#38bdf8] font-bold"
          >
            Precision.
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg sm:text-2xl text-[#f8fafc] font-normal pt-8 font-sans max-w-2xl mx-auto"
          >
            When every condition matters, <span className="text-[#38bdf8] font-bold">infrastructure has to think.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
