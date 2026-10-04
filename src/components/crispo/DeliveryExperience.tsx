'use client';

import React from 'react';
import { Clock, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CRISPO_BRAND } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface DeliveryExperienceProps {
  onStartDeliveryOrder: () => void;
}

export const DeliveryExperience: React.FC<DeliveryExperienceProps> = ({ onStartDeliveryOrder }) => {
  const { t, isRtl } = useCrispoLanguage();

  const steps = isRtl
    ? [
        { code: '٠١', title: 'استلام الطلب', desc: 'إرسال فوري إلى شاشة المطبخ' },
        { code: '٠٢', title: 'تحضير المطبخ', desc: 'تتبيل وقلي يدوي طازج' },
        { code: '٠٣', title: 'تغليف حراري', desc: 'إغلاق محكم في علب فريش لوك' },
        { code: '٠٤', title: 'في الطريق إليك', desc: 'تتبع مباشر للسائق عبر GPS' },
        { code: '٠٥', title: 'وصول ساخن', desc: 'تسليم عند الباب في ٢٨ دقيقة' },
      ]
    : [
        { code: '01', title: 'Order Placed', desc: 'Instant kitchen dispatch' },
        { code: '02', title: 'Kitchen Prep', desc: 'Hand-breaded & fried fresh' },
        { code: '03', title: 'Fresh-Lock Pack', desc: 'Heat-sealed thermal box' },
        { code: '04', title: 'On The Way', desc: 'GPS tracked delivery rider' },
        { code: '05', title: 'Hot Arrival', desc: 'Delivered in 28 minutes' },
      ];

  return (
    <section className="py-24 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
              {isRtl ? 'أسرع خدمة توصيل وجبات سريعة في دبي' : 'FASTEST FAST-FOOD DELIVERY IN DUBAI'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans mt-4">
              {isRtl ? 'ساخن ومقرمش. عند باب منزلك.' : 'HOT FOOD. AT YOUR DOOR.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {t('deliverySubtitle')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#1A1715] border border-stone-800 font-mono text-center self-start md:self-auto">
            <span className="text-2xl font-black text-[#FFC107] block" dir="ltr">
              {isRtl ? '٢٨ دقيقة' : CRISPO_BRAND.avgDeliveryTimeMinutes}
            </span>
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
              {isRtl ? 'متوسط سرعة التوصيل' : 'AVERAGE DELIVERY TIME'}
            </span>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((s) => (
            <div key={s.code} className="p-5 rounded-2xl bg-[#1A1715] border border-stone-800 space-y-2 font-mono text-xs">
              <span className="text-[#E63946] font-bold block">{s.code}</span>
              <h3 className="text-sm font-bold text-white font-sans">{s.title}</h3>
              <p className="text-[11px] text-stone-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onStartDeliveryOrder}
            className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] text-white font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
          >
            <Truck className="w-4 h-4" />
            <span>{isRtl ? 'ابدأ طلب التوصيل السريع الآن' : 'Start Delivery Order Now'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
