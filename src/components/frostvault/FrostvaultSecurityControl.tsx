'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle2, Key, Database } from 'lucide-react';

export const FrostvaultSecurityControl: React.FC = () => {
  const pillars = [
    { icon: Lock, title: 'Role-Based Access (RBAC)', desc: 'Biometric airlock security and segregated permission tiers for pharmaceutical cleanrooms.' },
    { icon: Eye, title: '24/7 Optical Sensor Visibility', desc: 'Real-time CCTV and infrared monitoring covering every pallet racking coordinate.' },
    { icon: FileText, title: '21 CFR Part 11 Audit Logs', desc: 'Immutable electronic log records documenting every temperature reading and door event.' },
    { icon: Database, title: 'End-to-End Lot Traceability', desc: 'Unit-level serial verification from manufacturer batch to final hospital or store delivery.' },
  ];

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            GOVERNANCE & DATA INTEGRITY
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Control Without Compromise.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Complete audit readiness, automated compliance reporting, and zero-trust security engineered for critical sovereign supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0c1622] border border-[#172f48] flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-[#08111a] text-[#38bdf8] border border-[#14263b] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#f8fafc] mb-2 font-mono">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
