'use client';

import React from 'react';
import { Users, ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface FamilySectionProps {
  onExploreFamilyMeals: () => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ onExploreFamilyMeals }) => {
  const { t, isRtl } = useCrispoLanguage();

  return (
    <section className="py-24 bg-[#1A1715] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
              {isRtl ? 'نشارككم ألذ اللحظات والقرمشة' : 'SHARING THE CRUNCH'}
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans leading-tight">
              {isRtl ? 'الطعام اللذيذ يجمع العائلة والأحباب.' : 'GOOD FOOD BRINGS EVERYONE TO THE TABLE.'}
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              {t('familySubtitle')}
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="p-4 rounded-2xl bg-[#12100E] border border-stone-800">
                <span className="text-[#FFC107] font-bold text-sm block">
                  {isRtl ? 'البوكسات العائلية' : 'Family Buckets'}
                </span>
                <span className="text-stone-400 text-[11px]">
                  {isRtl ? 'عروض من 10 إلى 18 قطعة' : '10 to 18 piece deals'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#12100E] border border-stone-800">
                <span className="text-[#FFC107] font-bold text-sm block">
                  {isRtl ? 'وجبات الأطفال' : 'Kids Meals'}
                </span>
                <span className="text-stone-400 text-[11px]">
                  {isRtl ? 'تشمل لعبة وعصير طبيعي' : 'Includes toy & fruit drink'}
                </span>
              </div>
            </div>

            <button
              onClick={onExploreFamilyMeals}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E63946] to-[#FF4757] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <span>{isRtl ? 'استكشف الوجبات العائلية' : 'Explore Family Meals'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop"
                alt="Crispo Family Meal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
