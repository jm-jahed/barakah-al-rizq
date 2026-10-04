'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'INSPECT',
      subtitle: 'Paint Condition Assessment',
      desc: 'Digital paint depth gauge audit, LED light inspection for swirl marks, and detailed surface defect logging.'
    },
    {
      num: '02',
      title: 'PREP',
      subtitle: 'Decontamination & Correction',
      desc: 'Multi-stage pH-neutral wash, iron fallout removal, clay bar treatment, and machine compound paint correction.'
    },
    {
      num: '03',
      title: 'APPLY',
      subtitle: 'Precision Coating / PPF',
      desc: 'Hand application of 9H nano-ceramic matrix layers or computerized plotter-cut self-healing TPU PPF wrap.'
    },
    {
      num: '04',
      title: 'CURE',
      subtitle: 'Controlled Curing Environment',
      desc: 'Infrared heat lamp curing inside a dust-free, temperature-controlled studio booth for maximum molecular bonding.'
    },
    {
      num: '05',
      title: 'DELIVER',
      subtitle: 'Final Inspection & Handover',
      desc: 'Showroom inspection under studio lighting, digital gloss meter audit, warranty registration, and client handover.'
    }
  ];

  return (
    <section className="py-24 bg-[#14161A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            THE LUXSHIELD STUDIO WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How We Work
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            A controlled 5-stage studio framework designed to achieve optical paint perfection and long-term climate protection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-[#0B0C0E] border border-white/10 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-black text-blue-500/30 font-mono block mb-4 group-hover:text-blue-400 transition-colors">
                  {step.num}
                </span>

                <h3 className="text-lg font-bold text-white mb-1 font-mono uppercase tracking-wider">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-blue-400 mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500 font-semibold">STAGE {step.num} OF 05</span>
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};