'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Palette, Bot, Shield, Search, Wrench } from 'lucide-react';
import { CORE_CAPABILITIES } from '@/data/siteData';

const ICON_MAP: Record<string, React.ReactNode> = {
  "01": <Activity className="w-5 h-5 text-amber-400" />,
  "02": <Palette className="w-5 h-5 text-amber-400" />,
  "03": <Bot className="w-5 h-5 text-amber-400" />,
  "04": <Shield className="w-5 h-5 text-amber-400" />,
  "05": <Search className="w-5 h-5 text-amber-400" />,
  "06": <Wrench className="w-5 h-5 text-amber-400" />,
};

export const CoreCapabilities: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0907] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4"
          >
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Engineering Standards
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            High Performance. Zero Compromise.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-gray-400 font-normal leading-relaxed"
          >
            Built to enterprise standards with strict code quality, sub-second latency targets, and robust security protocols.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-[#120F0C] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  {ICON_MAP[cap.number] || <Activity className="w-5 h-5" />}
                </div>
                <span className="font-mono text-xs font-bold text-gray-500">
                  REF // {cap.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                {cap.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
