'use client';

import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Calendar, 
  Info, 
  ArrowRight,
  ArrowLeft,
  DollarSign
} from 'lucide-react';
import { Language, TYPING_SERVICES_DATA } from '@/data/typingCenterData';

interface ServicePriceCalculatorProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function ServicePriceCalculator({
  lang,
  onOpenAppointment
}: ServicePriceCalculatorProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [selectedServiceId, setSelectedServiceId] = useState<string>('eid-renewal');
  const [applicantType, setApplicantType] = useState<'individual' | 'family' | 'corporate'>('individual');
  const [selectedEmirate, setSelectedEmirate] = useState<string>('Dubai');
  const [speedTier, setSpeedTier] = useState<'standard' | 'express' | 'vip'>('standard');
  const [includeCourier, setIncludeCourier] = useState<boolean>(true);

  // Find active service
  const activeService = useMemo(() => {
    return TYPING_SERVICES_DATA.find((s) => s.id === selectedServiceId) || TYPING_SERVICES_DATA[0];
  }, [selectedServiceId]);

  // Dynamic price calculation
  const { govtFee, typingFee, speedFee, courierFee, totalMin, totalMax } = useMemo(() => {
    const govtMin = activeService.govtFeeMin;
    const govtMax = activeService.govtFeeMax;
    const typing = activeService.typingFeeMin;

    let speed = 0;
    if (speedTier === 'express') speed = activeService.expressFee || 150;
    if (speedTier === 'vip') speed = (activeService.expressFee || 150) + 150;

    const courier = includeCourier ? 35 : 0;

    return {
      govtFee: { min: govtMin, max: govtMax },
      typingFee: typing,
      speedFee: speed,
      courierFee: courier,
      totalMin: govtMin + typing + speed + courier,
      totalMax: govtMax + typing + speed + courier
    };
  }, [activeService, speedTier, includeCourier]);

  const handleSendWhatsAppQuote = () => {
    const serviceName = isAr ? activeService.nameAr : activeService.nameEn;
    const speedLabel = speedTier === 'vip' ? 'VIP Concierge' : speedTier === 'express' ? 'Express Fast-Track' : 'Standard SLA';
    const message = `Hello Sanad Government Services, I generated a fee estimate for *${serviceName}* in *${selectedEmirate}*. Speed: ${speedLabel}. Estimated Range: AED ${totalMin} - AED ${totalMax}. Please assist me with starting this application.`;
    window.open(`https://wa.me/971507719900?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[350px] bg-blue-600/[0.04] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isAr ? 'حاسبة الرسوم الحكومية ورسوم الطباعة' : 'UAE SERVICE PRICE EXPLORER'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'احسب تكلفة معاملتك بشفافية تامة' : 'Transparent Fee Calculator'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr 
              ? 'اختر الخدمة والإمارة وسرعة الإنجاز للاطلاع على تفصيل الرسوم الحكومية الرسمية ورسوم الطباعة المعتمدة.'
              : 'Configure your service, applicant tier, and processing speed to inspect the clear breakdown of Official Government Fees vs Typing & Service Fees.'}
          </p>
        </div>

        {/* 2-Column Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selectors / Configuration */}
          <div className="lg:col-span-7 bg-[#072617] border border-amber-500/25 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-xl">
            
            {/* 1. Service Picker */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {isAr ? '1. اختر الخدمة الحكومية' : '1. Select UAE Government Service'}
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full py-3.5 px-4 rounded-xl bg-white/[0.04] border border-slate-700/80 text-white font-medium text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                {TYPING_SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id} className="bg-[#072617] text-white">
                    {isAr ? `${srv.nameAr} (${srv.authorityAr})` : `${srv.nameEn} — [${srv.authority}]`}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Applicant Tier */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {isAr ? '2. فئة مقدم الطلب' : '2. Applicant Category'}
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'individual', labelEn: 'Individual', labelAr: 'فرد / مقيم' },
                  { id: 'family', labelEn: 'Family / Dependent', labelAr: 'كفالة أسرة' },
                  { id: 'corporate', labelEn: 'Company / PRO', labelAr: 'منشأة / شركة' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setApplicantType(tier.id as any)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                      applicantType === tier.id
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
                        : 'bg-white/[0.02] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {isAr ? tier.labelAr : tier.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Emirate Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {isAr ? '3. الإمارة المعنية بالمعاملة' : '3. Target Emirate Jurisdiction'}
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman / RAK'].map((em) => (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setSelectedEmirate(em)}
                    className={`py-2.5 px-2 rounded-xl font-mono text-xs border transition-all ${
                      selectedEmirate === em
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-white/[0.02] border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Processing Speed */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {isAr ? '4. سرعة الإنجاز والمسار' : '4. Processing Speed Tier'}
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', labelEn: 'Standard SLA', labelAr: 'المسار العادي', subEn: '24-48h SLA', subAr: 'خلال 24-48 ساعة' },
                  { id: 'express', labelEn: 'Express Fast', labelAr: 'المسار السريع', subEn: '+AED 150 (Same Day)', subAr: '+150 درهم (نفس اليوم)' },
                  { id: 'vip', labelEn: 'VIP Concierge', labelAr: 'المسار VIP المتميز', subEn: '+AED 300 (Priority)', subAr: '+300 درهم (أولوية قصوى)' }
                ].map((spd) => (
                  <button
                    key={spd.id}
                    type="button"
                    onClick={() => setSpeedTier(spd.id as any)}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all ${
                      speedTier === spd.id
                        ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
                        : 'bg-white/[0.02] border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">
                      {isAr ? spd.labelAr : spd.labelEn}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                      {isAr ? spd.subAr : spd.subEn}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Courier Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-slate-800">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="courier"
                  checked={includeCourier}
                  onChange={(e) => setIncludeCourier(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 bg-slate-800 border-slate-700 cursor-pointer focus:ring-0"
                />
                <label htmlFor="courier" className="text-xs text-slate-300 cursor-pointer">
                  {isAr ? 'إضافة خدمة التوصيل والشحن المعتمد (+35 درهم)' : 'Add Doorstep Courier Delivery (+AED 35)'}
                </label>
              </div>
              <span className="font-mono text-xs text-emerald-400 font-bold">AED 35</span>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#072617] to-[#072617] border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-emerald-950/50 sticky top-28 backdrop-blur-xl">
            
            {/* Header */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-amber-400 font-bold tracking-wider uppercase">
                  {isAr ? 'ملخص التكلفة والرسوم' : 'FEE BREAKDOWN SUMMARY'}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  {isAr ? 'تسعير شفاف' : 'TRANSPARENT'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {isAr ? activeService.nameAr : activeService.nameEn}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isAr ? activeService.authorityAr : activeService.authority}
              </p>
            </div>

            {/* Itemized Line Items */}
            <div className="space-y-3 text-xs border-b border-slate-800 pb-5">
              
              {/* Official Government Fee Line */}
              <div className="flex items-center justify-between text-slate-300">
                <div>
                  <span className="text-white font-medium">
                    {isAr ? 'الرسوم الحكومية الرسمية (تقديرية):' : 'Official Government Authority Fee:'}
                  </span>
                  <p className="text-[10px] text-slate-500">
                    {isAr ? 'تُسدد للجهة الرسمية المعنية' : 'Mandated statutory authority fee'}
                  </p>
                </div>
                <span className="font-mono font-bold text-white">
                  AED {govtFee.min} {govtFee.max !== govtFee.min ? ` - ${govtFee.max}` : ''}
                </span>
              </div>

              {/* Centre Typing Fee Line */}
              <div className="flex items-center justify-between text-slate-300">
                <div>
                  <span className="text-amber-300 font-medium">
                    {isAr ? 'رسوم الطباعة والتدقيق:' : 'Sanad Typing & Audit Fee:'}
                  </span>
                  <p className="text-[10px] text-slate-500">
                    {isAr ? 'صياغة وتدقيق ومتابعة الطلب' : 'Form draft, verification & filing'}
                  </p>
                </div>
                <span className="font-mono font-bold text-amber-300">
                  AED {typingFee}
                </span>
              </div>

              {/* Speed Tier Fee Line */}
              {speedFee > 0 && (
                <div className="flex items-center justify-between text-amber-300">
                  <span>{isAr ? 'رسوم المسار السريع / الأولوية:' : 'Express / Priority Fee:'}</span>
                  <span className="font-mono font-bold">AED {speedFee}</span>
                </div>
              )}

              {/* Courier Line */}
              {courierFee > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>{isAr ? 'خدمة الشحن والتوصيل:' : 'Doorstep Courier Dispatch:'}</span>
                  <span className="font-mono font-bold">AED {courierFee}</span>
                </div>
              )}
            </div>

            {/* Total Estimated Box */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-amber-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-300 uppercase tracking-wider">
                  {isAr ? 'الإجمالي التقديري الشامل:' : 'ESTIMATED TOTAL RANGE:'}
                </span>
                <span className="text-xs font-mono text-slate-400">AED Currency</span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white font-mono">
                AED {totalMin} {totalMax !== totalMin ? ` - ${totalMax}` : ''}
              </p>
              <p className="text-[10px] text-slate-400 pt-1">
                {isAr
                  ? '* الرسوم الحكومية تختلف باختلاف مدة التأشيرة أو الفئة أو عدد السنوات.'
                  : '* Government statutory fees vary by residency validity, applicant category, or fine status.'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleSendWhatsAppQuote}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'إرسال التقدير للواتساب ومتابعة الطلب' : 'Send Estimate to WhatsApp Desk'}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenAppointment(activeService.id)}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:border-amber-400 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'حجز موعد / تقديم المستندات' : 'Book Appointment for this Service'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
