'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Gift, CheckCircle2 } from 'lucide-react';

export const PerfumeDelivery: React.FC = () => {
  const options = [
    { title: "Same-Day Dubai Delivery", desc: "Concierge courier delivery within 4 hours for orders placed before 2:00 PM.", time: "Same-Day Dubai", fee: "Free above AED 250" },
    { title: "Next-Day UAE Shipping", desc: "Guaranteed next-day dispatch to Abu Dhabi, Sharjah, Ajman, and Al Ain.", time: "24 Hours UAE", fee: "Free above AED 250" },
    { title: "Signature Gift Packaging", desc: "Gold-embossed black magnetic presentation box with satin ribbon and wax seal.", time: "Included Free", fee: "Complimentary" }
  ];

  return (
    <section className="py-20 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, idx) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#10141C] border border-amber-500/20 space-y-3 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">{opt.time}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {opt.fee}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-serif">{opt.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{opt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
