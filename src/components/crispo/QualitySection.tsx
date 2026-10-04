'use client';

import React from 'react';
import { Flame, ShieldCheck, Award } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const QualitySection: React.FC = () => {
  const { t, isRtl } = useCrispoLanguage();

  const points = isRtl
    ? [
        { title: 'دجاج حلال طازج من المزرعة 100%', desc: 'يتم توريده يومياً من مزارع الدواجن المحلية في الإمارات. طازج وغير مجمد إطلاقاً.' },
        { title: 'تتبيلة الـ 11 بهاراً السرية', desc: 'يُنقع الدجاج لمدة 12 ساعة في خلطة الأعشاب والبابريكا الخاصة بنا.' },
        { title: 'زيت نباتي نقي مصفى يومياً', desc: 'يُفلتر باستمرار ويُستبدل يومياً لقرمشة ذهبية وطعم نقي خفيف.' },
        { title: 'تحضير طازج لكل طلب', desc: 'يُتبل ويُقلى يدوياً لحظة تأكيد طلبك فقط لضمان وصوله ساخناً.' },
      ]
    : [
        { title: '100% Fresh Farmed Chicken', desc: 'Sourced daily from local UAE poultry farms. Never frozen.' },
        { title: 'Secret 11-Spice Coating', desc: 'Marinated for 12 hours in our proprietary herb & paprika rub.' },
        { title: 'Pure Vegetable Frying Oil', desc: 'Filtered continuously & changed daily for clean, golden crunch.' },
        { title: 'Made Fresh To Order', desc: 'Hand-breaded and cooked only after your order is confirmed.' },
      ];

  return (
    <section className="py-24 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
              {isRtl ? 'معايير جودة استثنائية' : 'UNCOMPROMISED QSR STANDARDS'}
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans leading-tight">
              {isRtl ? 'قرمشة صُممت بإتقان.' : 'CRISPY BY DESIGN.'}
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              {isRtl
                ? 'نتعامل مع الوجبات السريعة بأعلى معايير الشغف والاحترافية. من النقع لمدة 12 ساعة إلى التتبيل المزدوج والقلي في زيت نقي، صُنعت كل قطعة لتقدم لك أقصى درجات القرمشة.'
                : 'We take fast food seriously. From our 12-hour marinade to double-crust flour breading and fresh oil frying, every piece of chicken is crafted for ultimate crunch.'}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
            {points.map((p, idx) => (
              <div key={p.title} className="p-6 rounded-2xl bg-[#1A1715] border border-stone-800 space-y-2">
                <span className="text-xs font-mono font-bold text-[#FFC107] block">0{idx + 1}</span>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
