'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Compass, Anchor, Sparkles } from 'lucide-react';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

export const HowWeWork: React.FC = () => {
  const { language, t } = useAzureLanguage();

  const steps = [
    {
      num: t('step1Num'),
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: Compass
    },
    {
      num: t('step2Num'),
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: Sparkles
    },
    {
      num: t('step3Num'),
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: ShieldCheck
    },
    {
      num: t('step4Num'),
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: Anchor
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#06101E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('processBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {t('processTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
            {t('processSubtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-[#0B1A2F] border border-white/10 shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-amber-500/30 font-mono group-hover:text-amber-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 border border-white/10 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-sans tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 font-semibold uppercase">
                    {language === 'ar' ? `المرحلة ${step.num} من ٠٤` : `STAGE ${step.num} OF 04`}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};