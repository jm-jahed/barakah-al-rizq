'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { AZURE_EXPERIENCES } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface ExperiencesProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesProps> = ({ onOpenBookingModal }) => {
  const [activeExpId, setActiveExpId] = useState(AZURE_EXPERIENCES[0].id);
  const { language, t } = useAzureLanguage();

  const activeExp = AZURE_EXPERIENCES.find(e => e.id === activeExpId) || AZURE_EXPERIENCES[0];

  return (
    <section id="experiences" className="py-24 bg-[#071324] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('expBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            {t('expTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light max-w-2xl mx-auto">
            {t('expSubtitle')}
          </p>
        </div>

        {/* Experience Selector Pills */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {AZURE_EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              type="button"
              onClick={() => setActiveExpId(exp.id)}
              className={`px-5 py-3 rounded-2xl font-mono text-xs font-bold transition-all whitespace-nowrap ${
                activeExpId === exp.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-950/50 scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
              }`}
            >
              {language === 'ar' ? exp.titleAr : exp.title}
            </button>
          ))}
        </div>

        {/* Selected Experience Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1A2F] p-6 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/40">
                {t('expIdealFor')}: {language === 'ar' ? activeExp.idealForAr : activeExp.idealFor}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {t('expDuration')}: {language === 'ar' ? activeExp.durationAr : activeExp.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-tight">
              {language === 'ar' ? activeExp.titleAr : activeExp.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {language === 'ar' ? activeExp.descriptionAr : activeExp.description}
            </p>

            <div className="space-y-2 bg-[#06101E] p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-3">
                {t('expSampleItinerary')}
              </span>
              {(language === 'ar' ? activeExp.sampleItineraryAr : activeExp.sampleItinerary).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
              >
                <span>{t('expBookExperience')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black">
            <img
              src={activeExp.image}
              alt={language === 'ar' ? activeExp.titleAr : activeExp.title}
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#06101E]/90 backdrop-blur-md border border-white/20">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase block">
                {language === 'ar' ? 'مياه دبي مارينا ونخلة جميرا الساحرة' : 'DUBAI MARINA & PALM JUMEIRAH WATERS'}
              </span>
              <span className="text-sm font-bold text-white block mt-1 font-serif">
                {language === 'ar' ? 'رحلات بحرية خاصة مجهزة بالكامل مع طاقم محترف' : 'Fully Crewed Private Charter Experience'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};