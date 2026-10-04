'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Calendar, CheckCircle2 } from 'lucide-react';

export const RestaurantProcess: React.FC = () => {
  const steps = [
    { num: "01", title: "Explore Menu & Flavors", desc: "Browse 30+ signature dishes, ingredient provenance, dietary tags, and chef notes.", tag: "Menu Exploration" },
    { num: "02", title: "Choose Your Experience", desc: "Select from Sunset Terrace outdoor dining, Chef's Table counter, or Private Dining Suite.", tag: "Atmosphere Choice" },
    { num: "03", title: "Reserve or WhatsApp Order", desc: "Book your table in 5 quick steps or send an instant takeaway order on WhatsApp.", tag: "Instant Booking" },
    { num: "04", title: "Enjoy Your Evening", desc: "Arrive at DIFC Gate Village 04 for valet parking, tableside service, and memorable dining.", tag: "Hospitality" }
  ];

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            DINING JOURNEY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            How Your Evening Unfolds.
          </h2>
          <p className="text-base text-gray-400">
            A seamless experience from menu exploration to valet arrival and tableside service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-amber-400 font-mono">{step.num}</span>
                  <span className="text-[10px] font-mono text-gray-400 px-2.5 py-0.5 rounded bg-white/5">{step.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-serif mb-2">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Stage Ready
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
