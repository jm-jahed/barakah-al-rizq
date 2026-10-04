'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Compass, Plus } from 'lucide-react';
import { OASIRA_EXPERIENCES, OasiraExperience } from '@/data/oasiraData';

interface ExperiencesSectionProps {
  onBookExperience: (exp: OasiraExperience) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onBookExperience }) => {
  return (
    <section id="experiences" className="py-24 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              CURATED UAE EXPERIENCES
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-4">
              Make the stay memorable.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Elevate your staycation with private sunset yacht charters, desert safaris, coral diving, and helicopter skyline tours.
            </p>
          </div>
        </div>

        {/* 6 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OASIRA_EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F382C] rounded-3xl border border-stone-800 p-6 shadow-xl hover:border-[#D4B382]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 rounded-2xl overflow-hidden mb-6 bg-[#0A2920]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#0A2920]/80 text-[#D4B382] border border-[#D4B382]/30 backdrop-blur-md uppercase">
                    {exp.emirate}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-2">
                  <span>{exp.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4B382]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#FAF6EE] mb-4 leading-snug">{exp.title}</h3>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono">
                <div>
                  <span className="text-xl font-bold text-[#D4B382]">AED {exp.priceAED}</span>
                  <span className="text-[10px] text-stone-400 block font-normal">{exp.priceType}</span>
                </div>

                <button
                  onClick={() => onBookExperience(exp)}
                  className="px-4 py-2.5 rounded-xl bg-[#D4B382] hover:bg-[#c2a170] text-black font-serif text-xs font-bold uppercase flex items-center gap-1 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Activity</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
