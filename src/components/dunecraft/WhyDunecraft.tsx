'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, ShieldCheck, Compass, Users, DollarSign, Award } from 'lucide-react';

export const WhyDunecraft: React.FC = () => {
  const pillars = [
    {
      title: "RTA Certified Desert Safari Leads",
      desc: "Master drivers trained in high-dune navigation, vehicle roll-over prevention, and emergency desert first-aid response.",
      icon: <Award className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Pristine Conservation Reserves",
      desc: "Access to Dubai Al Awir high red dunes and Abu Dhabi Al Khatim conservation zones away from overcrowded tourist tracks.",
      icon: <Compass className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Door-to-Door 4x4 Hotel Pickup",
      desc: "Air-conditioned Land Cruisers pick up guests directly from any Dubai or Abu Dhabi hotel or residence with zero transfer hassle.",
      icon: <Sun className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Authentic Arabian Gastronomy & Arts",
      desc: "Live open-fire BBQ, freshly made flatbreads, Karak tea, acoustic Oud music, Tanoura dancing, and Henna artistry.",
      icon: <Users className="w-6 h-6 text-amber-400" />
    },
    {
      title: "100% Upfront All-Inclusive Pricing",
      desc: "No hidden camp entrance fees, surprise camel charges, or quad bike rental surcharges. Clear upfront package pricing.",
      icon: <DollarSign className="w-6 h-6 text-amber-400" />
    },
    {
      title: "5-Star Rated Guest Experience",
      desc: "Over 60,000+ satisfied guests with an average 4.9★ rating across international tourism portals and local corporate clients.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#2A1405] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            THE DUNECRAFT DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            Why Guests Choose DUNECRAFT
          </h2>
          <p className="text-gray-300 text-base font-light">
            We combine high-octane dune thrill with authentic Bedouin culture and strict safety standards.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#1C0D02] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2A1405] border border-white/10 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sans">{p.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};