'use client';

import React from 'react';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const HowItWorks: React.FC = () => {
  const { t, isRtl, toArabicDigits } = useFreshauraLanguage();

  const steps = [
    {
      num: '01',
      titleEn: '1. Select Produce',
      titleAr: '١. اختر المحاصيل',
      descEn: 'Pick from 210+ farm-fresh fruits, vegetables, greens, or build a custom fruit box.',
      descAr: 'اختر من بين ٢١٠ أصناف طازجة أو صمم صندوق فواكهك العائلي المخصص مع خصم فوري.',
    },
    {
      num: '02',
      titleEn: '2. Cold Sorting & Pack',
      titleAr: '٢. الفرز المبرد والتغليف',
      descEn: 'Our Al Quoz facility team hand-inspects, weighs, and eco-packs each item at 4°C.',
      descAr: 'يقوم فريقنا بفحص وتجهيز طلبك في مركز القوز المبرد بدرجة ٤ مئوية بعناية فائقة.',
    },
    {
      num: '03',
      titleEn: '3. Fast UAE Cold Drop',
      titleAr: '٣. توصيل مبرد وسريع',
      descEn: 'Refrigerated delivery vans dispatch your order directly to your door in 2-hour slots.',
      descAr: 'شاحناتنا المبردة تنطلق فوراً لتوصيل طلبك لباب منزلك خلال ساعتين مع الحفاظ على البرودة.',
    },
    {
      num: '04',
      titleEn: '4. Farm-Fresh Guarantee',
      titleAr: '٤. استمتع بطعم المزرعة',
      descEn: 'Taste the crispness. If any item is damaged or imperfect, we replace it instantly for free.',
      descAr: 'استمتع بأعلى جودة وطعم أصلي. نضمن لك استبدالاً مجانياً فورياً لأي حبة بها ملاحظة.',
    },
  ];

  return (
    <section className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
            {isRtl ? 'طلب الخضار والفواكه في ٤ خطوات سهلة' : 'SIMPLE 4-STEP GROCERY ORDERING'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
            {isRtl ? 'كيف نعمل؟' : 'How It Works.'}
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-sans">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 p-8 shadow-xl space-y-4 hover:border-emerald-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-black text-emerald-400 block mb-2">
                  {isRtl ? toArabicDigits(s.num) : s.num}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">
                  {isRtl ? s.titleAr : s.titleEn}
                </h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed mt-2">
                  {isRtl ? s.descAr : s.descEn}
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-800 font-mono text-[10px] text-emerald-400 font-bold">
                {isRtl ? `المرحلة ${toArabicDigits(s.num)} / ٠٤ ✓` : `STAGE ${s.num} / 04 ✓`}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
