'use client';

import React from 'react';
import { 
  BellRing, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Calendar
} from 'lucide-react';
import { Language, DEMO_RENEWAL_ALERTS } from '@/data/typingCenterData';

interface RenewalReminderSystemProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function RenewalReminderSystem({
  lang,
  onOpenAppointment
}: RenewalReminderSystemProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 bg-[#04070E] border-b border-amber-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <BellRing className="w-3.5 h-3.5" />
              <span>{isAr ? 'منظومة تنبيهات التجديد المبكر' : 'SMART RENEWAL COUNTDOWN RADAR'}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isAr ? 'تجنب غرامات التأخير الحكومية' : 'Never Miss a UAE Government Renewal'}
            </h3>
            <p className="text-sm text-slate-300">
              {isAr
                ? 'نظام تتبع ذكي يرسل تنبيهات مبكرة قبل انتهاء التأشيرات، الهويات، والرخص التجارية لتفادي غرامات الإقامة ووقف معاملات المنشأة.'
                : 'Automated early alerts for residency visas, Emirates IDs, trade licenses, and labour contracts preventing statutory penalties.'}
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400">
            {isAr ? 'بيانات توضيحية تفاعلية' : 'Interactive Sample Radar'}
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEMO_RENEWAL_ALERTS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400 transition-all shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    item.urgency === 'high'
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                      : item.urgency === 'medium'
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  }`}>
                    {item.daysLeft} {isAr ? 'يوماً متبقياً' : 'Days Remaining'}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? item.titleAr : item.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-mono">
                    {item.holderName}
                  </p>
                  {item.companyName && (
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {item.companyName}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenAppointment(item.type === 'eid' ? 'eid-renewal' : 'residence-visa-renewal')}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500 hover:text-slate-950 border border-slate-800 hover:border-amber-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{isAr ? 'بدء التجديد الفوري' : 'Start Renewal Now'}</span>
                <ArrowIcon className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
