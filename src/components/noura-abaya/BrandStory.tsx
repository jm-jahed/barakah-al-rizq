'use client';

import React from 'react';
import { Crown } from 'lucide-react';
import { NOURA_BRAND } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

export const BrandStory: React.FC = () => {
  const { t, isRtl } = useNouraLanguage();

  return (
    <section id="story" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-stone-800 bg-[#121212]">
              <img
                src="/images/noura-abaya/editorial-3.jpg"
                alt="NOURA ABAYA Dubai Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 font-sans">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
              {isRtl ? 'أتيليه الأزياء الراقية • دبي' : 'DUBAI HAUTE COUTURE ATELIER'}
            </span>

            <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#FAFAFA]">
              {isRtl ? 'صُنعت في دبي. صُممت بإتقان وشغف.' : 'Crafted in Dubai. Designed with Intention.'}
            </h2>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              {t('storyDesc1')}
            </p>

            <div className="p-6 rounded-2xl bg-[#121212] border border-stone-800 space-y-3 font-mono text-xs text-stone-300">
              <div className="flex items-center gap-2 text-[#C5A059] font-bold">
                <Crown className="w-4 h-4" />
                <span>{isRtl ? 'وعد وضمان دار نورة' : 'THE NOURA ATELIER PROMISE'}</span>
              </div>
              <ul className="space-y-1.5 text-[11px]">
                {isRtl ? (
                  <>
                    <li>• أقمشة نيدو ياباني ملكي وكريب دبي وحرير طبيعي 100%</li>
                    <li>• تعديل مجاني لطول العباية ومقاس الأكمام حسب الطلب</li>
                    <li>• طرحة شيفون فرنسي مجانية متطابقة تماماً مع لون العباية</li>
                    <li>• حياكة وتطريز يدوي متقن بأيدي أمهر الخياطين في دبي</li>
                  </>
                ) : (
                  <>
                    <li>• 100% Authentic Japanese Nida, Dubai Crepe & Silk Satin fabrics</li>
                    <li>• Complimentary custom length hem & sleeve tailoring</li>
                    <li>• Color-matched French Chiffon Sheila hijab included with every piece</li>
                    <li>• Hand-finished by master artisans in Downtown Dubai</li>
                  </>
                )}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
