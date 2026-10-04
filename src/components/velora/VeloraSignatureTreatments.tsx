'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ArrowRight, Shield, Flame, Droplets, Moon } from 'lucide-react';
import { VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraSignatureTreatmentsProps {
  onSelectRitual: (ritual: WellnessRitual) => void;
  onBookRitual: (ritual: WellnessRitual) => void;
}

export const VeloraSignatureTreatments: React.FC<VeloraSignatureTreatmentsProps> = ({
  onSelectRitual,
  onBookRitual,
}) => {
  const featuredRituals = VELORA_RITUALS.filter((r) => r.featured);

  return (
    <section className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
              ICONIC MASTERPIECES
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight">
              Signature Treatments.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#a8a396] font-light max-w-md mt-4 md:mt-0">
            Three defining wellness journeys that embody the VELORA philosophy of acoustic stillness, thermal wisdom, and restorative care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredRituals.map((ritual, idx) => {
            const icons = [Moon, Flame, ShieldCheck];
            const Icon = icons[idx % icons.length];

            return (
              <motion.div
                key={ritual.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl bg-gradient-to-b from-[#161d19] via-[#121614] to-[#0d100e] border border-[#26312a] hover:border-[#c5a059]/60 p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#1d2722] text-[#c5a059] border border-[#2b3931]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#c5a059]/15 text-[#c5a059] text-[10px] uppercase tracking-widest font-semibold border border-[#c5a059]/30">
                      {ritual.badge || 'Signature'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#8f8a7e] mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span className="tracking-widest uppercase">{ritual.durationLabel}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#fdfbf7] group-hover:text-[#c5a059] transition-colors mb-2">
                    {ritual.name}
                  </h3>

                  <p className="text-xs text-[#7e796e] italic mb-4">
                    {ritual.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#aba598] font-light leading-relaxed mb-6">
                    {ritual.description}
                  </p>

                  <div className="space-y-2 mb-8 bg-[#0b0e0c] p-4 rounded-xl border border-[#1b231f]">
                    <div className="text-[10px] text-[#716c62] uppercase tracking-widest font-medium">
                      Ceremonial Highlights
                    </div>
                    <ul className="text-xs text-[#bcb7ac] font-light space-y-1.5">
                      {ritual.whatToExpect.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1e2722] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-[#716c62] uppercase tracking-wider">Experience Value</div>
                    <div className="text-xl font-serif text-[#fdfbf7]">
                      AED {ritual.priceAED.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectRitual(ritual)}
                      className="px-4 py-2 rounded-full bg-[#1c2420] hover:bg-[#25312b] text-[#c5a059] text-xs uppercase tracking-wider border border-[#2f3d35] transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookRitual(ritual)}
                      className="px-5 py-2 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-md"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
