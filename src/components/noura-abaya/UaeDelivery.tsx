'use client';

import React from 'react';
import { Truck, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

export const UaeDelivery: React.FC = () => {
  const { t, isRtl, formatPrice } = useNouraLanguage();

  const emirates = isRtl
    ? [
        { city: 'دبي وأبوظبي', time: 'توصيل سريع في نفس اليوم (للطلبات قبل 1:00 ظهراً)', badge: 'في نفس اليوم' },
        { city: 'الشارقة وعجمان', time: 'توصيل إلى باب المنزل خلال 24 ساعة', badge: 'خلال 24 ساعة' },
        { city: 'العين ورأس الخيمة', time: 'توصيل خلال 1–2 يوم عمل بعناية فائقة', badge: 'كافة الإمارات' },
        { city: 'الفجيرة وأم القيوين', time: 'توصيل سريع ومباشر لباب منزلك', badge: 'توصيل منزلي' },
      ]
    : [
        { city: 'Dubai & Abu Dhabi', time: 'Same-Day Express (Orders before 1 PM)', badge: 'Same-Day' },
        { city: 'Sharjah & Ajman', time: '24-Hour Doorstep Courier', badge: '24h Express' },
        { city: 'Al Ain & Ras Al Khaimah', time: '1–2 Business Days Courier', badge: 'All Emirates' },
        { city: 'Fujairah & Umm Al Quwain', time: '1–2 Business Days Courier', badge: 'Doorstep' },
      ];

  return (
    <section id="delivery" className="py-20 bg-[#121212] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#C5A059]/30">
            {isRtl ? 'خدمة التوصيل وتجربة القياس المنزلي في كافة الإمارات' : 'EMIRATES WIDE LUXURY DELIVERY & HOME FITTING'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            {isRtl ? 'التوصيل الفاخر لباب منزلك' : 'UAE Doorstep Delivery.'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light mt-2">
            {isRtl
              ? 'صندوق هدايا فاخر لحفظ العباية، طرحة متناسقة مجاناً، تعديل مجاني لطول الحاشية، واستبدال منزلي سهل خلال 7 أيام في كافة إمارات الدولة.'
              : 'Complimentary luxury garment packaging box, matching Sheila hijabs, free custom hem tailoring, and 7-day home exchange across all 7 Emirates.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {emirates.map((e) => (
            <div
              key={e.city}
              className="bg-[#0A0A0A] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between space-y-4 hover:border-[#C5A059]/40 transition-all"
            >
              <div className="space-y-2">
                <span className="text-[10px] text-[#C5A059] font-bold px-2.5 py-1 rounded-md bg-[#121212] border border-[#C5A059]/30 inline-block">
                  {e.badge}
                </span>
                <h3 className="text-lg font-serif font-bold text-white">{e.city}</h3>
                <span className="text-stone-400 text-xs block">{e.time}</span>
              </div>

              <div className="pt-3 border-t border-stone-800 text-[10px] text-emerald-400 font-bold flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>
                  {isRtl ? `مجاناً للطلبات فوق ${formatPrice(350)}` : `FREE on Orders > ${formatPrice(350)}`}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
