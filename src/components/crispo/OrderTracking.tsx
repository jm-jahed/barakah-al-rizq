'use client';

import React from 'react';
import { Truck, CheckCircle2, Clock, MapPin, User, Phone } from 'lucide-react';
import { MOCK_ORDER_TRACKING } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const OrderTracking: React.FC = () => {
  const { t, isRtl, toArabicDigits } = useCrispoLanguage();
  const track = MOCK_ORDER_TRACKING;

  const progressSteps = isRtl
    ? [
        { title: 'تم تأكيد الطلب', time: '١٨:١٤', completed: true },
        { title: 'تحضير وقلي طازج في المطبخ', time: '١٨:١٨', completed: true },
        { title: 'تغليف حراري محكم في البوكس', time: '١٨:٢٤', completed: true },
        { title: 'استلم المندوب أليكس الوجبة', time: '١٨:٢٨', completed: true },
        { title: 'في الطريق لتسليم الطلب', time: '١٨:٣٢', completed: true },
        { title: 'التسليم عند باب المنزل', time: 'المتوقع ١٨:٤٢', completed: false },
      ]
    : track.progressSteps;

  return (
    <section id="tracking" className="py-24 bg-[#1A1715] relative border-b border-stone-800" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
              {isRtl ? 'التتبع المباشر لخط سير الطلب' : 'REAL-TIME ORDER TELEMETRY'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#FAF6EE] italic font-sans mt-4">
              {isRtl ? 'تتبع طلبك مباشرة.' : 'Live Order Tracker.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {isRtl
                ? 'تابع مراحل تجهيز وجبتك في المطبخ، وموقع مندوب التوصيل عبر الخريطة لحظة بلحظة.'
                : 'Track active delivery progress, view assigned rider contact info, and monitor kitchen milestone prep in real-time.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
              {isRtl ? 'بث مباشر — السائق في طريقه إليك' : 'LIVE FEED — OUT FOR DELIVERY'}
            </span>
          </div>
        </div>

        {/* Tracking Card */}
        <div className="bg-[#12100E] rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black font-mono text-[#FAF6EE]">
                  {isRtl ? `طلب #${toArabicDigits(track.orderId)}` : `ORDER #${track.orderId}`}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E63946] text-white text-xs font-bold font-mono">
                  {isRtl ? 'في طريق التوصيل' : track.status}
                </span>
              </div>
              <span className="text-xs text-stone-400 font-mono mt-1 block">
                {isRtl ? `العميل: ${track.customerName}` : `Customer: ${track.customerName}`}
              </span>
            </div>

            <div className="text-left rtl:text-right sm:text-right rtl:sm:text-left font-mono">
              <span className="text-[10px] text-stone-400 uppercase block">
                {isRtl ? 'موعد الوصول المتوقع' : 'ESTIMATED ARRIVAL'}
              </span>
              <span className="text-lg font-bold text-[#FFC107]">
                {isRtl ? '١٨:٤٢ بتوقيت الإمارات (خلال ١٤ دقيقة)' : track.estimatedArrival}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-stone-800 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#1A1715] border border-stone-800">
              <span className="text-stone-400 text-[10px] uppercase block mb-1">
                {isRtl ? 'عنوان التوصيل' : 'DELIVERY ADDRESS'}
              </span>
              <span className="text-white font-bold text-xs block">
                {isRtl ? 'الخليج التجاري، أبراج إكزكتيف، برج B، شقة ١٤٠٨' : track.deliveryAddress}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#1A1715] border border-stone-800">
              <span className="text-stone-400 text-[10px] uppercase block mb-1">
                {isRtl ? 'ملخص الأصناف' : 'ITEMS SUMMARY'}
              </span>
              <span className="text-[#FFC107] font-bold text-xs block">
                {isRtl ? '١x بوكس كرانش العائلي، ١x بطاطس بالجبن، ٤x بيبسي' : track.itemSummary}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#1A1715] border border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-stone-400 text-[10px] uppercase block mb-1">
                  {isRtl ? 'مندوب التوصيل' : 'RIDER ASSIGNED'}
                </span>
                <span className="text-white font-bold text-xs block">{track.driverName}</span>
              </div>
              <a
                href={`tel:${track.driverPhone}`}
                className="px-3 py-2 rounded-xl bg-[#E63946] text-white text-[11px] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>{isRtl ? 'اتصال بالمندوب' : 'Call Rider'}</span>
              </a>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="pt-6">
            <h4 className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest mb-4">
              {isRtl ? 'مراحل التجهيز والتوصيل في المطبخ' : 'KITCHEN & DELIVERY MILESTONE PROGRESS'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              {progressSteps.map((step) => (
                <div
                  key={step.title}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    step.completed ? 'bg-[#E63946]/15 border-[#E63946] text-white' : 'bg-[#1A1715] border-stone-800 text-stone-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${step.completed ? 'text-[#E63946]' : 'text-stone-700'}`} />
                    <span className={step.completed ? 'font-bold text-white' : ''}>{step.title}</span>
                  </div>
                  <span className="text-[10px] text-stone-400">{step.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

