'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Megaphone, Calendar, Check, ArrowRight } from 'lucide-react';
import { PRINT_SUITES } from '@/data/pressoraData';

interface PressoraPrintSuitesProps {
  onSelectSuite: (suiteTitle: string) => void;
}

export const PressoraPrintSuites: React.FC<PressoraPrintSuitesProps> = ({
  onSelectSuite,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    'suite-corporate': Briefcase,
    'suite-marketing': Megaphone,
    'suite-hospitality': Calendar,
  };

  return (
    <section className="py-24 bg-[#0a0c10] text-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-[#1a2536]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            BUNDLED BRAND PACKAGES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Curated Print Collections.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Complete multi-product corporate kits assembled and color-matched under one master press run to guarantee brand color uniformity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRINT_SUITES.map((suite, idx) => {
            const Icon = iconMap[suite.id] || Briefcase;

            return (
              <motion.div
                key={suite.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0d131e] border border-[#1a2b40] hover:border-[#38bdf8]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#081018] text-[#38bdf8] border border-[#14263a]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#38bdf8] font-bold px-2.5 py-0.5 rounded bg-[#09101a] border border-[#15273d]">
                      {suite.itemsCount}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#f8fafc] mb-1 font-sans">
                    {suite.title}
                  </h3>
                  <p className="text-xs font-mono text-[#64748b] mb-4">
                    {suite.subtitle}
                  </p>

                  <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-6">
                    {suite.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#16273c] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#64748b]">Bundle Investment</span>
                    <div className="text-2xl font-bold font-mono text-[#38bdf8]">
                      AED {suite.startingAED.toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectSuite(suite.title)}
                    className="px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Build Kit</span>
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
