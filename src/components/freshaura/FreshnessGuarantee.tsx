'use client';

import React from 'react';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const FreshnessGuarantee: React.FC = () => {
  const { t, isRtl, toArabicDigits } = useFreshauraLanguage();

  const pillars = [
    {
      num: '01',
      titleEn: 'Harvested at 4:00 AM',
      titleAr: 'حصاد فجر اليوم ٤:٠٠ ص',
      descEn: 'Handpicked each morning from local hydroponic UAE greenhouses and verified daily air-freight organic orchards.',
      descAr: 'يتم جني الثمار والورقيات يومياً مع بزوغ الفجر من البيوت المحمية ومزارع الإمارات العضوية المعتمدة.',
    },
    {
      num: '02',
      titleEn: '3-Stage Quality Sorting',
      titleAr: 'فحص جودة ثلاثي المراحل',
      descEn: 'Every fruit and vegetable undergoes a meticulous tactile inspection for crisp texture, sweetness, and zero surface bruising.',
      descAr: 'تخضع كل حبة فحصاً دقيقاً لضمان القرمشة، خلوها التام من أي كدمات أو شوائب، ووصولها في قمة نضارتها.',
    },
    {
      num: '03',
      titleEn: '4°C Active Cold-Chain',
      titleAr: 'سلسلة تبريد نشطة ٤ درجات',
      descEn: 'From pre-cooling storage facilities to our specialized refrigerated delivery fleet, freshness stays locked in.',
      descAr: 'نحافظ على برودة المحاصيل في درجة حرارة ٤ مئوية من غرفة التخزين وحتى شاحنات التوصيل المبردة إلى باب منزلك.',
    },
    {
      num: '04',
      titleEn: 'Express 2-Hour UAE Drop',
      titleAr: 'توصيل سريع خلال ساعتين',
      descEn: 'Direct farm-to-kitchen routes across Dubai, Abu Dhabi, Sharjah, Ajman, and all 7 Emirates with live driver tracking.',
      descAr: 'مسارات توصيل مباشرة من المزرعة لمطبخك في دبي، أبوظبي، الشارقة، عجمان وكافة الإمارات مع إمكانية التتبع المباشر.',
    },
  ];

  return (
    <section className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
            {isRtl ? 'معايير جودة فريش أورا' : 'THE FRESHAURA QUALITY STANDARDS'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
            {isRtl ? 'حُصدت طازجة. فُحصت بعناية. وُصلت سريعاً.' : 'Picked Fresh. Checked Carefully. Delivered Fast.'}
          </h2>
          <p className="text-sm sm:text-base text-stone-200 font-light mt-2">
            {isRtl
              ? 'بروتوكول جودة متكامل من ٤ مراحل يضمن لك طعم المزرعة الحقيقي بدون أي مساومة على النضارة.'
              : 'Our 4-stage quality guarantee ensures farm-fresh flavor and zero compromised produce.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 p-8 shadow-xl space-y-4 hover:border-emerald-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-black text-emerald-400 block">
                  {isRtl ? toArabicDigits(p.num) : p.num}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#FBF9F5] mt-2">
                  {isRtl ? p.titleAr : p.titleEn}
                </h3>
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                {isRtl ? p.descAr : p.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
