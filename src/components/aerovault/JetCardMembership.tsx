'use client';

import React, { useState } from 'react';
import { ShieldCheck, Check, ArrowRight, CreditCard, Sparkles } from 'lucide-react';
import { AEROVAULT_JET_CARD_TIERS } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface JetCardProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const JetCardMembership: React.FC<JetCardProps> = ({ onOpenQuoteModal }) => {
  const { lang, isRtl, formatPrice, toArabicDigits } = useAerovaultLanguage();
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // Default 50h

  const cardBenefits = lang === 'ar' ? [
    { title: "أسعار ساعات طيران ثابتة ومضمونة", desc: "تثبيت سعر الساعة مسبقاً دون أي زيادة في أوقات الذروة أو مواسم العطلات." },
    { title: "تأكيد الطائرة خلال ٦ إلى ١٢ ساعة", desc: "ضمان تعاقدي لتجهيز الطائرة للإقلاع من مطارات الدولة بإشعار مسبق قصير." },
    { title: "بدون رسوم تموضع أو تقلبات وقود", desc: "هيكلية فوترة شفافة ١٠٠٪ تحمي ميزانية السفر للشركات ورجال الأعمال." },
    { title: "مدير حسابات طيران مخصص ٢٤/٧", desc: "خدمة شخصية متواصلة لترتيب الطائرة، الضيافة الخاصة، ونقل التارماك بالليموزين." }
  ] : [
    { title: "Guaranteed Fixed Hourly Rates", desc: "Lock in pre-agreed hourly flight rates with zero surge pricing during peak holidays or major events." },
    { title: "Guaranteed 6 to 12-Hour Dispatch", desc: "Contractual availability guarantee with departure ready in as little as 6-12 hours notice worldwide." },
    { title: "Zero Fuel Surcharge Variance", desc: "Transparent billing structure with fuel surcharges capped to protect your corporate travel budget." },
    { title: "Dedicated 24/7 Account Desk", desc: "Direct personal flight manager handling aircraft sourcing, catering, and airport tarmac transfers." }
  ];

  const currentTier = AEROVAULT_JET_CARD_TIERS[selectedTierIndex];

  return (
    <section id="jetcard" className="py-24 bg-[#0D1118] text-white relative border-y border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest">
              <CreditCard className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'برنامج بطاقة طيران إيروفولت' : 'AEROVAULT JET CARD MEMBERSHIP'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-sans">
              {lang === 'ar' ? 'حرية الطيران بأسعار ساعات ثابتة.' : 'Fixed-Rate Jet Card Freedom.'}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              {lang === 'ar'
                ? 'مصممة خصيصاً للمسافرين الدائمين، الرؤساء التنفيذيين، والعائلات رفيعة المستوى لضمان توفر الطائرة وأسعار واضحة دون أعباء تملك الطائرات.'
                : 'Designed for frequent corporate travelers and HNWIs requiring guaranteed aircraft availability and predictable hourly pricing without ownership overhead.'}
            </p>

            {/* Tier Selector Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {AEROVAULT_JET_CARD_TIERS.map((tier, idx) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTierIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    selectedTierIndex === idx
                      ? 'bg-[#E5C378] text-black shadow-lg shadow-[#E5C378]/20'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {lang === 'ar' ? tier.titleAr : tier.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {cardBenefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#11161F] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-sans">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal(`Jet Card: ${currentTier.title}`)}
                className="px-8 py-4 rounded-2xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'طلب تفاصيل وبروشور بطاقة الطيران' : 'REQUEST JET CARD PROSPECTUS'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column Metal Card Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5C378]/30 shadow-2xl bg-gradient-to-br from-[#1C2541] via-[#0D1118] to-black p-8 space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-xl font-black text-white tracking-tight font-sans">
                  AERO<span className="text-[#E5C378]">VAULT</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E5C378]/20 text-[#E5C378] font-mono text-[10px] font-bold border border-[#E5C378]/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {lang === 'ar' ? 'بطاقة إيروفولت البلاتينية' : 'BLACK JET CARD'}
                </span>
              </div>

              <div className="space-y-1 py-4 font-mono">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                  {lang === 'ar' ? 'الفئة المختارة' : 'SELECTED MEMBERSHIP'}
                </span>
                <span className="text-lg font-bold text-[#E5C378] tracking-widest block">
                  {lang === 'ar' ? currentTier.titleAr : currentTier.title}
                </span>
                <span className="text-xs text-slate-300">
                  {lang === 'ar' ? currentTier.aircraftTypeAr : currentTier.aircraftType}
                </span>
              </div>

              <div className="space-y-2 py-3 border-y border-white/10 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'ar' ? 'إجمالي الإيداع:' : 'Total Tier Deposit:'}</span>
                  <span className="text-white font-bold">{formatPrice(currentTier.priceAED)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'ar' ? 'سعر الساعة الثابت:' : 'Fixed Hourly Rate:'}</span>
                  <span className="text-[#E5C378] font-bold">{formatPrice(currentTier.fixedHourlyAED)} / {lang === 'ar' ? 'ساعة' : 'hr'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'ar' ? 'ضمان الجاهزية:' : 'Dispatch SLA:'}</span>
                  <span className="text-emerald-400 font-bold">{lang === 'ar' ? currentTier.dispatchNoticeAr : currentTier.dispatchNotice}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 font-light space-y-1.5">
                {(lang === 'ar' ? currentTier.featuresAr : currentTier.features).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E5C378]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};