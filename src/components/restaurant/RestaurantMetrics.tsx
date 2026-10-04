'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DEMO_RESTAURANT_METRICS } from '@/data/restaurantData';

export const RestaurantMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-[#070A0E] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_RESTAURANT_METRICS.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#10141C] border border-amber-500/20 text-center space-y-1 shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">{m.val}</div>
              <div className="text-xs font-bold text-white font-serif">{m.label}</div>
              <div className="text-[10px] text-gray-400 font-mono">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
