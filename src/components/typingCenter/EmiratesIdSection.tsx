'use client';

import React from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  FileText
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface EmiratesIdSectionProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function EmiratesIdSection({
  lang,
  onOpenAppointment
}: EmiratesIdSectionProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const idServices = [
    {
      id: 'eid-renewal',
      titleEn: 'Emirates ID Renewal',
      titleAr: 'تجديد بطاقة الهوية الإماراتية',
      descEn: 'For residents within 30-day grace period or expiring soon. Rapid ICP draft submission.',
      descAr: 'للمقيمين المنتهية هويتهم أو ضمن فترة السماح (30 يوماً). طباعة فورية ومتابعة.',
      typingFee: 'AED 65 - 120',
      govtFee: 'AED 170 - 370 (ICP)',
      timelineEn: '24h Digital / 48h Courier',
      timelineAr: '24 ساعة رقمية / 48 ساعة للشحن'
    },
    {
      id: 'eid-new',
      titleEn: 'First-Time New Emirates ID',
      titleAr: 'إصدار بطاقة هوية أول مرة',
      descEn: 'New UAE residents & newborns. Includes biometric appointment booking at nearest center.',
      descAr: 'للمقيمين الجدد والمواليد الجدد، مع حجز موعد البصمة بأقرب مركز سعادة متعاملين.',
      typingFee: 'AED 80 - 140',
      govtFee: 'AED 170 - 470 (ICP)',
      timelineEn: '2-3 Days post-biometrics',
      timelineAr: '2-3 أيام بعد البصمة'
    },
    {
      id: 'eid-replacement',
      titleEn: 'Lost or Damaged Card Replacement',
      titleAr: 'استخراج بدل فاقد أو تالف',
      descEn: 'Urgent incident typing with fast-track card reprint and courier dispatch to your location.',
      descAr: 'طباعة فورية لبدل الفاقد أو التالف مع تسريع إعادة طباعة البطاقة والتوصيل.',
      typingFee: 'AED 75 - 130',
      govtFee: 'AED 370 - 470 (ICP)',
      timelineEn: '24h Same Day Express',
      timelineAr: 'خلال 24 ساعة (عاجل)'
    }
  ];

  return (
    <section id="emirates-id" className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <CreditCard className="w-3.5 h-3.5" />
              <span>{isAr ? 'منظومة الهوية الإماراتية المعتمدة' : 'ICP AUTHORIZED EMIRATES ID HUB'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr ? 'خدمات الهوية الإماراتية، بكل دقة وسرعة' : 'Emirates ID Services & Biometrics'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {isAr
                ? 'طباعة استمارات التجديد والإصدار وبدل الفاقد وفق معايير الهيئة الاتحادية للهوية والجنسية (ICP) مع حجز مواعيد البصمة وتفعيل الهوية الرقمية.'
                : 'Accurate ICP electronic application typing, biometric scheduling, and fast-track courier delivery across all 8 UAE regions.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenAppointment('eid-renewal')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{isAr ? 'ابدأ معاملة الهوية الآن' : 'Start Emirates ID Service'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Dedicated Emirates ID Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {idServices.map((card) => (
            <div
              key={card.id}
              className="rounded-3xl bg-[#072617] border border-amber-500/25 p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-amber-400 transition-all shadow-xl hover:shadow-emerald-950/50 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-all">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    {isAr ? 'معتمد ICP' : 'ICP AUTHORIZED'}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? card.titleAr : card.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {isAr ? card.descAr : card.descEn}
                  </p>
                </div>

                {/* Transparent Fee Block */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{isAr ? 'رسوم الطباعة والتدقيق:' : 'Typing & Service Fee:'}</span>
                    <span className="font-mono font-bold text-amber-400">{card.typingFee}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] border-t border-slate-800/60 pt-1.5">
                    <span className="text-slate-500">{isAr ? 'الرسوم الحكومية الرسمية:' : 'Official Authority Fee:'}</span>
                    <span className="font-mono text-slate-300">{card.govtFee}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? `مدة الإنجاز: ${card.timelineAr}` : `Timeline: ${card.timelineEn}`}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenAppointment(card.id)}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'طلب الخدمة وحجز الموعد' : 'Apply & Schedule Biometrics'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Informational ICP Guidance Strip */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>
              {isAr
                ? 'الهوية الرقمية تُفعّل فورياً على تطبيق الهيئة (ICP UAE) بمجرد اعتماد الطلب وقبل استلام البطاقة البلاستيكية.'
                : 'Digital E-ID activates instantly on the official ICP UAE App upon electronic approval, prior to courier arrival.'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-amber-400 font-bold whitespace-nowrap">
            {isAr ? 'فترة سماح التجديد: 30 يوماً' : '30-Day Expiry Grace Period'}
          </span>
        </div>

      </div>
    </section>
  );
}
