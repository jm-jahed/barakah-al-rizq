'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Check, ArrowRight, Maximize2, Droplets } from 'lucide-react';
import { PRIVATE_SUITES } from '@/data/veloraData';

interface VeloraPrivateSuitesProps {
  onReserveSuite: (suiteId: string) => void;
}

export const VeloraPrivateSuites: React.FC<VeloraPrivateSuitesProps> = ({
  onReserveSuite,
}) => {
  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            EXCLUSIVE RETREAT APARTMENTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            A Sanctuary Within the Sanctuary.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            For those who demand uncompromising privacy. Individual 145m² wellness pavilions featuring private thermal suites, sunken mineral baths, and dedicated therapists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRIVATE_SUITES.map((suite, idx) => (
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-3xl bg-gradient-to-b from-[#141c17] via-[#101412] to-[#0c0f0d] border border-[#233128] p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#c5a059]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#c5a059] uppercase tracking-[0.25em]">
                    <Shield className="w-4 h-4" />
                    <span>Private Suite</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#1c2620] border border-[#2b3a31] text-xs text-[#ded9ce] flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{suite.sqm} m² Pavilion</span>
                  </span>
                </div>

                <h3 className="text-3xl font-serif text-[#fdfbf7] mb-1">
                  {suite.name}
                </h3>
                <p className="text-xs text-[#7d776b] italic mb-4">
                  {suite.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#aba597] font-light leading-relaxed mb-6">
                  {suite.description}
                </p>

                <div className="space-y-2 mb-8 bg-[#0b0e0c] p-5 rounded-2xl border border-[#1b241f]">
                  <div className="text-[10px] text-[#716c62] uppercase tracking-widest font-medium">
                    Suite Architecture & Inclusions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#bcb7ab] font-light">
                    {suite.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1d2721] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#716c62] uppercase tracking-wider">Per 3-Hour Immersion</div>
                  <div className="text-xl font-serif text-[#fdfbf7]">
                    AED {suite.pricePerSessionAED.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => onReserveSuite(suite.id)}
                  className="px-6 py-3 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Reserve Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
