'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

export const RestaurantDelivery: React.FC = () => {
  const zones = [
    { name: "DIFC & Downtown Dubai", time: "25–35 Mins", fee: "Free above AED 150", range: "AED 10" },
    { name: "Business Bay & City Walk", time: "30–40 Mins", fee: "Free above AED 150", range: "AED 15" },
    { name: "Jumeirah 1, 2, 3 & Pearl Jumeira", time: "35–45 Mins", fee: "Free above AED 200", range: "AED 20" },
    { name: "Dubai Marina & JBR", time: "40–50 Mins", fee: "Free above AED 200", range: "AED 25" },
    { name: "Dubai Hills & Palm Jumeirah", time: "40–50 Mins", fee: "Free above AED 250", range: "AED 25" },
    { name: "Al-Majlis DIFC Curbside Pickup", time: "15–20 Mins", fee: "Always Free", range: "AED 0" }
  ];

  return (
    <section className="py-20 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            HOT INSULATED COURIER DISPATCH
          </span>
          <h2 className="text-3xl font-extrabold text-white font-serif mt-3">
            Dubai Delivery Coverage.
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Sample Delivery Information — Concept Project Build #12
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((z, idx) => (
            <motion.div
              key={z.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="p-6 rounded-3xl bg-[#10141C] border border-amber-500/20 space-y-3 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> {z.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {z.fee}
                </span>
              </div>
              <div className="text-xs text-gray-300 font-mono flex items-center justify-between pt-2 border-t border-white/10">
                <span>Avg Time: <strong className="text-white">{z.time}</strong></span>
                <span>Delivery Charge: <strong className="text-amber-400">{z.range}</strong></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
