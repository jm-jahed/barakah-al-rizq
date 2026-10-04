'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, ShieldCheck, Compass, Users, DollarSign, Award, Utensils, Waves } from 'lucide-react';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

export const WhyAzure: React.FC = () => {
  const { language, t } = useAzureLanguage();

  const pillars = [
    {
      title: t('why1Title'),
      desc: t('why1Desc'),
      icon: <Anchor className="w-6 h-6 text-amber-400" />
    },
    {
      title: t('why2Title'),
      desc: t('why2Desc'),
      icon: <Award className="w-6 h-6 text-amber-400" />
    },
    {
      title: t('why3Title'),
      desc: t('why3Desc'),
      icon: <DollarSign className="w-6 h-6 text-amber-400" />
    },
    {
      title: t('why4Title'),
      desc: t('why4Desc'),
      icon: <Compass className="w-6 h-6 text-amber-400" />
    },
    {
      title: t('why5Title'),
      desc: t('why5Desc'),
      icon: <Utensils className="w-6 h-6 text-amber-400" />
    },
    {
      title: t('why6Title'),
      desc: t('why6Desc'),
      icon: <Waves className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#081528] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('whyBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light max-w-2xl mx-auto">
            {t('whySubtitle')}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0B1A2F] border border-white/10 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#06101E] border border-white/10 flex items-center justify-center mb-6">
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