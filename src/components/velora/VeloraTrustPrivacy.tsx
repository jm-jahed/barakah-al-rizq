'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, UserCheck, Key, FileCheck } from 'lucide-react';

export const VeloraTrustPrivacy: React.FC = () => {
  const privacyPillars = [
    {
      icon: EyeOff,
      title: 'Discreet Arrival & Departure',
      desc: 'Private subterranean arrivals and direct suite transit ensures complete guest anonymity.',
    },
    {
      icon: Lock,
      title: 'Sovereign Client Confidentiality',
      desc: 'Health profiles and personal therapy dossiers are encrypted with zero external sharing.',
    },
    {
      icon: Shield,
      title: 'Dedicated Suite Isolation',
      desc: 'Autonomous climate, acoustic insulation, and personal steam environments prevent overlapping guest paths.',
    },
    {
      icon: Key,
      title: 'Private Preference Management',
      desc: 'Patron preferences (scents, acoustic notes, tea selections) remain locked to your verified profile.',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            SANCTUARY GOVERNANCE
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Your Time Is Private.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            We hold discretion to the highest standard of international luxury hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#111613] border border-[#202924] flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-[#18211c] text-[#c5a059] border border-[#26332b] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif text-[#fdfbf7] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#9c9689] font-light leading-relaxed">
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
