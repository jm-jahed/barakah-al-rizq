'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Phone
} from 'lucide-react';
import { Language, EMIRATES_DATA, TYPING_SERVICES_DATA, ServiceItem } from '@/data/typingCenterData';

interface EmirateServiceSelectorProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function EmirateServiceSelector({
  lang,
  onSelectService,
  onOpenAppointment
}: EmirateServiceSelectorProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeEmirateId, setActiveEmirateId] = useState<string>('dubai');

  const activeEmirate = EMIRATES_DATA.find((e) => e.id === activeEmirateId) || EMIRATES_DATA[0];

  const popularServicesList = TYPING_SERVICES_DATA.filter((s) => 
    activeEmirate.popularServices.includes(s.id)
  );

  return (
    <section className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>{isAr ? 'تغطية إمارات الدولة' : 'UAE NATIONWIDE SERVICE NETWORK'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'خدماتنا في كافة إمارات الدولة' : 'Tailored Services Across All 7 Emirates'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr 
              ? 'اختر إمارتك للاطلاع على الجهات الحكومية المختصة (إقامة دبي، الهيئة الاتحادية، تم أبوظبي) وساعات العمل والخدمات المتاحة.'
              : 'Select your Emirate to inspect local jurisdiction authorities, TAMM / Amer portals, and popular transactions.'}
          </p>
        </div>

        {/* Emirate Selector Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {EMIRATES_DATA.map((em) => (
            <button
              key={em.id}
              onClick={() => setActiveEmirateId(em.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeEmirateId === em.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                  : 'bg-white/[0.03] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {isAr ? em.nameAr : em.nameEn}
            </button>
          ))}
        </div>

        {/* Active Emirate Details Card */}
        <div className="bg-[#072617] border border-amber-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {isAr ? 'المنظومة الحكومية المحلية' : 'REGIONAL AUTHORITY JURISDICTION'}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {isAr ? `خدمات إمارة ${activeEmirate.nameAr}` : `${activeEmirate.nameEn} Government Services Hub`}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {isAr ? activeEmirate.primaryAuthorityAr : activeEmirate.primaryAuthorityEn}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-slate-400">
                  {isAr ? 'أبرز مميزات الخدمة في هذه الإمارة:' : 'Key Jurisdiction Highlights:'}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  {(isAr ? activeEmirate.serviceHighlightsAr : activeEmirate.serviceHighlightsEn).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2 text-xs text-slate-300 p-3 rounded-xl bg-emerald-950/30 border border-amber-500/20">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{isAr ? activeEmirate.centreHoursAr : activeEmirate.centreHoursEn}</span>
              </div>
            </div>

            {/* Right Column: Popular Services for this Emirate */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                {isAr ? 'أكثر المعاملات طلباً في الإمارة:' : 'Most Requested Services:'}
              </span>

              <div className="space-y-2.5">
                {popularServicesList.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-slate-800 hover:border-amber-500/50 flex items-center justify-between gap-3 transition-all"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {isAr ? srv.nameAr : srv.nameEn}
                      </h4>
                      <span className="text-[11px] font-mono text-amber-400">
                        {isAr ? `رسوم الطباعة: ${srv.typingFeeMin} درهم` : `Typing: AED ${srv.typingFeeMin}`}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectService(srv)}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white text-xs font-bold"
                      >
                        {isAr ? 'الشروط' : 'Details'}
                      </button>
                      <button
                        onClick={() => onOpenAppointment(srv.id)}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                      >
                        {isAr ? 'تقديم' : 'Start'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
