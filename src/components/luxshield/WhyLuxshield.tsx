'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Award, ShieldCheck, Home, Truck, DollarSign } from 'lucide-react';
import { LUXSHIELD_BRAND } from '@/data/luxshieldData';

export const WhyLuxshield: React.FC = () => {
  const pillars = [
    {
      title: "Climate-Engineered Formulas",
      desc: "Our 9H ceramic coatings and PPF films are specifically formulated to resist UAE 50°C summer UV degradation and desert sand abrasion.",
      icon: <Sun className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Certified Master Installers",
      desc: "Every ceramic layer and PPF pattern is applied by certified detailers trained to international IDF and European studio standards.",
      icon: <Award className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Warranty-Backed Workmanship",
      desc: "All packages come with official warranty certificates covering up to 2-year, 5-year, or 7-year protection with zero yellowing.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Controlled Studio Environment",
      desc: "100% dust-free, climate-controlled application bays featuring infrared curing lamps for flawless particle-free bonding.",
      icon: <Home className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Mobile Detailing Unit Available",
      desc: "Self-powered mobile studio van equipped with de-ionized spot-free water delivering maintenance washes direct to your home.",
      icon: <Truck className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Transparent Package Pricing",
      desc: "No hidden charges. Clear upfront pricing based on vehicle size (Sedan, SUV, Sports) with comprehensive itemized inclusions.",
      icon: <DollarSign className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#14161A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            THE LUXSHIELD DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Luxury Car Owners Choose LUXSHIELD
          </h2>
          <p className="text-gray-300 text-base font-light">
            We combine nano-technology protection with laboratory-grade studio precision to preserve your vehicle's aesthetic and resale value.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0B0C0E] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#14161A] border border-white/10 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};