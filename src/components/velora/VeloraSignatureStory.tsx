'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const VeloraSignatureStory: React.FC = () => {
  return (
    <section className="py-32 bg-[#080a09] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#161f1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#c5a059] font-light mb-8"
        >
          THE VELORA DOCTRINE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#fdfbf7] font-normal tracking-tight leading-[1.2] mb-12"
        >
          WELLNESS IS NOT AN ESCAPE.
        </motion.h2>

        <div className="space-y-6 text-xl sm:text-2xl md:text-3xl font-serif text-[#ded9ce] font-light">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#a5a093]"
          >
            It is a return.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#ded9ce]"
          >
            ↓ To stillness.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#ded9ce]"
          >
            ↓ To presence.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#c5a059] pt-4"
          >
            ↓ To yourself.
          </motion.div>
        </div>
      </div>
    </section>
  );
};
