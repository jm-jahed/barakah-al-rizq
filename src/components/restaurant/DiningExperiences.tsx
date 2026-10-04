'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Utensils, CheckCircle2 } from 'lucide-react';
import { DINING_EXPERIENCES } from '@/data/restaurantData';

interface DiningExperiencesProps {
  onOpenReservation: () => void;
}

export const DiningExperiences: React.FC<DiningExperiencesProps> = ({ onOpenReservation }) => {
  return (
    <section id="experiences" className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            CURATED HOSPITALITY CONCEPTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Signature Experiences.
          </h2>
          <p className="text-base text-gray-400">
            From DIFC sunset terrace lounge drinks to our exclusive 7-course open-fire Chef's Table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DINING_EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all overflow-hidden shadow-2xl flex flex-col justify-between group"
            >
              <div className="relative h-60 overflow-hidden bg-black">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141C] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/30 font-bold uppercase">
                  {exp.duration}
                </span>

                <div className="absolute bottom-3 right-3 text-lg font-extrabold text-amber-400 font-mono bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl border border-amber-500/30">
                  AED {exp.samplePrice}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">{exp.subtitle}</p>
                  <p className="text-xs text-gray-300 leading-relaxed mt-2 font-serif italic">
                    "{exp.tagline}"
                  </p>

                  <div className="space-y-1.5 border-t border-white/10 pt-3 mt-3 text-xs text-gray-300 font-sans">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400">Sample Concept Experience</span>
                  <button
                    onClick={onOpenReservation}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Reserve Experience
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
