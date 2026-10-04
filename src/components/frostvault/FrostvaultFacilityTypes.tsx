'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ThermometerSnowflake, ShieldCheck, Utensils, Leaf, Cpu, ArrowRight, Check } from 'lucide-react';
import { FROSTVAULT_FACILITIES, FacilityType } from '@/data/frostvaultData';

interface FrostvaultFacilityTypesProps {
  onRequestQuote?: (fac: FacilityType) => void;
}

export const FrostvaultFacilityTypes: React.FC<FrostvaultFacilityTypesProps> = ({
  onRequestQuote,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Snowflake,
    ThermometerSnowflake,
    ShieldCheck,
    Utensils,
    Leaf,
    Cpu,
  };

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            TEMPERATURE REGIMES & CHAMBERS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Specialized Storage Environments.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Six distinct temperature profiles engineered for pharmaceutical grade compliance, fresh agricultural logistics, and ultra-low cryo-preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FROSTVAULT_FACILITIES.map((fac, idx) => {
            const Icon = iconMap[fac.iconName] || Snowflake;

            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0c1622] border border-[#18314e] hover:border-[#38bdf8]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#08121c] text-[#38bdf8] border border-[#162d47]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#08131e] border border-[#193554] text-xs font-mono font-bold text-[#38bdf8]">
                      {fac.tempRange}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors mb-2">
                    {fac.title}
                  </h3>

                  <p className="text-xs font-mono text-[#64748b] mb-4">
                    {fac.tagline}
                  </p>

                  <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-6">
                    {fac.description}
                  </p>

                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#081018] border border-[#14263a]">
                    <div className="text-[10px] text-[#64748b] uppercase font-mono font-bold">
                      Optimal Product Classes
                    </div>
                    <ul className="text-xs text-[#cbd5e1] font-mono space-y-1">
                      {fac.suitableFor.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#38bdf8] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#152a42] flex items-center justify-between">
                  <div className="text-xs font-mono text-[#64748b]">
                    Vol: <strong className="text-[#f8fafc]">{fac.capacityCubicMeters}</strong>
                  </div>

                  <button
                    onClick={() => onRequestQuote && onRequestQuote(fac)}
                    className="px-4 py-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-bold uppercase transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Request Space</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
