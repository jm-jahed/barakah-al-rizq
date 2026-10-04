'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ArrowRight } from 'lucide-react';
import { DINING_EXPERIENCES } from '@/data/restaurantData';

interface DiningExperienceProps {
  onOpenBooking: () => void;
}

export const DiningExperience: React.FC<DiningExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="experiences" className="py-24 bg-[#0C0A08] border-b border-amber-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Distinctive Culinary Formats
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Signature Dining Experiences.
          </h2>

          <p className="text-base text-gray-400 leading-relaxed">
            Every dining format at L'Étoile is curated around live cooking artistry, skyline views, and bespoke service.
          </p>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DINING_EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-[#14100C] border border-amber-500/20 hover:border-amber-400/60 overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100C] via-black/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-black uppercase">
                    {exp.highlight || exp.highlights[0]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono text-white bg-black/70 backdrop-blur-md border border-white/20 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" /> {exp.timing || exp.duration}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    {exp.subtitle || exp.idealFor}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-serif leading-tight">
                    {exp.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {exp.description || exp.tagline}
                </p>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-amber-500 border border-white/15 hover:border-amber-400 text-white hover:text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-md"
                >
                  <span>Reserve {exp.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
