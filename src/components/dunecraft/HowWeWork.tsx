'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE',
      subtitle: 'Select Package & Date',
      desc: 'Browse our curated safaris — sunset red dune bashing, VIP private tents, quad biking trails, or overnight stargazing.'
    },
    {
      num: '02',
      title: 'CONFIRM',
      subtitle: 'Instant Booking & Hotel Pickup',
      desc: 'Secure your safari slot online or on WhatsApp. Receive instant digital voucher and hotel pickup confirmation.'
    },
    {
      num: '03',
      title: 'EXPERIENCE',
      subtitle: '4x4 Dune Drive & Camp Show',
      desc: 'Enjoy door-to-door 4x4 Land Cruiser transport, thrilling dune bashing, sandboarding, camel rides, and live Bedouin shows.'
    },
    {
      num: '04',
      title: 'REMEMBER',
      subtitle: 'Sunset Photos & Safe Return',
      desc: 'Capture unforgettable red dune sunset photographs and return safely to your hotel or residence.'
    }
  ];

  return (
    <section className="py-24 bg-[#1C0D02] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            THE DUNECRAFT SAFARI WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            How We Work
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            A seamless 4-step desert adventure framework guaranteeing safety, luxury, and authentic Arabian hospitality.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-[#2A1405] border border-white/10 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-black text-amber-500/30 font-mono block mb-4 group-hover:text-amber-400 transition-colors">
                  {step.num}
                </span>

                <h3 className="text-lg font-bold text-white mb-1 font-mono uppercase tracking-wider">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-amber-400 mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500 font-semibold">STAGE {step.num} OF 04</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};