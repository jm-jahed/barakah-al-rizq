'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, ShieldCheck, CheckCircle2, TrendingUp, Clock, Radio } from 'lucide-react';

export const FrostvaultPerformanceRadar: React.FC = () => {
  const metrics = [
    { title: 'Temperature Stability', value: '99.98%', desc: 'Within ±0.2°C target range across all active chambers', icon: Thermometer },
    { title: 'Storage Utilization', value: '78.4%', desc: 'High-density volumetric usage across 25,000 pallet slots', icon: Activity },
    { title: 'Inventory Accuracy', value: '99.99%', desc: 'Unit-level automated RFID & 2D barcode scan verification', icon: ShieldCheck },
    { title: 'Order Pick Speed', value: '11.4 Min', desc: 'Average pallet retrieval cycle time via AGV corridors', icon: Clock },
    { title: 'Dock Turnaround', value: '28.2 Min', desc: 'Inbound sealed coupling to finished inventory slotting', icon: Activity },
    { title: 'IoT Sensor Uptime', value: '99.95%', desc: 'Continuous mesh telemetry with sub-second polling rates', icon: Radio },
  ];

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            BENCHMARK TELEMETRY
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Facility Performance Metrics.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Operational precision visualized through simulated real-time infrastructure key performance indicators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0c1622] border border-[#172f48] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-[#64748b]">{m.title}</span>
                    <div className="p-2 rounded-lg bg-[#08111a] text-[#38bdf8] border border-[#14263b]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-mono font-bold text-[#38bdf8] mb-2">
                    {m.value}
                  </div>

                  <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#14263b] text-[10px] text-[#64748b] font-mono">
                  Continuous Telemetry Verified
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
