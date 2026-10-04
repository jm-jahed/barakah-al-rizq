'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Moon, ShieldCheck, Bed, Utensils, Music, Coffee, CheckCircle2 } from 'lucide-react';

export const DesertCamp: React.FC = () => {
  const campFeatures = [
    {
      title: 'Sunken Majlis Lounge',
      arabic: 'المجلس الصحراوي الغاطس',
      description: 'Hand-carved sand amphitheater lined with velvet throws, antique brass lanterns, and plush kilim cushions.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Live Olive-Wood Firepit',
      arabic: 'موقد خشب الزيتون الطبيعي',
      description: 'Aromatic embers of aged olive and oud wood crackling under the night sky, warming the evening breeze.',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Lantern-Lit Dune Pathways',
      arabic: 'ممرات الفوانيس المضيئة',
      description: 'Over 200 candlelit glass lanterns guiding guests across untouched sand pathways to secluded dining pavilions.',
      image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="camp" className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5" />
            <span>THE NOMAD SANCTUARY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            A Luxury Private Residence in the Dunes
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Constructed without permanent concrete to preserve the delicate desert ecosystem, our sanctuary combines ancestral Bedouin hospitality with five-star modern elegance.
          </p>
        </div>

        {/* 3 Horizontal Camp Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#1A1410] to-[#100C09] border border-[#C9A265]/25 overflow-hidden group hover:border-[#C9A265]/50 transition-all flex flex-col justify-between"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100C09] via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-2 flex-1">
                <div className="text-xs font-mono text-[#C9A265]">{feat.arabic}</div>
                <h3 className="text-xl font-serif text-white">{feat.title}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
