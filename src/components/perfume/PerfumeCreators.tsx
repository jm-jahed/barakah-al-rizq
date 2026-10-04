'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2 } from 'lucide-react';
import { PERFUME_CREATORS } from '@/data/perfumeData';

export const PerfumeCreators: React.FC = () => {
  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            MASTER NOISES & CRAFTSMEN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Meet the Creators.
          </h2>
          <p className="text-base text-gray-400">
            Sample team profiles highlighting perfumers and attar distillers behind our signature scents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERFUME_CREATORS.map((creator, idx) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all overflow-hidden shadow-2xl flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141C] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/30 font-bold uppercase">
                  {creator.experienceYears} Yrs Experience
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                    {creator.role}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif mb-1 group-hover:text-amber-300 transition-colors">
                    {creator.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {creator.specialization}
                  </p>

                  <div className="space-y-1 border-t border-white/10 pt-3 mt-3 text-xs font-mono text-gray-300">
                    <span className="text-[9px] text-gray-400 block font-bold uppercase">SIGNATURE CREATIONS:</span>
                    {creator.signatureCreations.map((sig, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[9px] font-mono text-amber-400/80">
                  {creator.sampleNotice}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
