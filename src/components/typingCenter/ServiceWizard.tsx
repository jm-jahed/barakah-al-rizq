'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  RefreshCw, 
  FileCheck2, 
  CreditCard, 
  Briefcase, 
  Building, 
  Globe2, 
  FileText, 
  Users, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Language, TYPING_SERVICES_DATA, ServiceItem } from '@/data/typingCenterData';

interface ServiceWizardProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function ServiceWizard({
  lang,
  onSelectService,
  onOpenAppointment
}: ServiceWizardProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedNeed, setSelectedNeed] = useState<string>('visa');
  const [selectedRecipient, setSelectedRecipient] = useState<string>('individual');
  const [selectedEmirate, setSelectedEmirate] = useState<string>('Dubai');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('express');

  const needsOptions = [
    { id: 'visa', labelEn: 'Visa & Residency', labelAr: 'التأشيرات والإقامة', icon: FileCheck2 },
    { id: 'emirates-id', labelEn: 'Emirates ID', labelAr: 'الهوية الإماراتية', icon: CreditCard },
    { id: 'tasheel', labelEn: 'Labour / Tasheel', labelAr: 'عقود وتصاريح العمل', icon: Briefcase },
    { id: 'business', labelEn: 'Business & PRO', labelAr: 'خدمات وتأسيس الشركات', icon: Building },
    { id: 'translation', labelEn: 'Translation & Attestation', labelAr: 'الترجمة والتصديقات', icon: Globe2 },
    { id: 'family', labelEn: 'Family Sponsorship', labelAr: 'كفالة الأسرة والأبناء', icon: Users },
  ];

  const recipientOptions = [
    { id: 'individual', labelEn: 'Myself (Individual)', labelAr: 'لنفسي (فرد / مقيم)' },
    { id: 'family', labelEn: 'Family Dependents', labelAr: 'لأفراد الأسرة والأولاد' },
    { id: 'employee', labelEn: 'Company Employee', labelAr: 'لموظف في المنشأة' },
    { id: 'business', labelEn: 'Commercial Entity', labelAr: 'لمنشأة تجارية / شركة' },
  ];

  const emirateOptions = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'];

  const urgencyOptions = [
    { id: 'standard', labelEn: 'Standard Pace (24-48 Hours)', labelAr: 'المسار العادي (24-48 ساعة)' },
    { id: 'express', labelEn: 'Express Fast-Track (Same Day)', labelAr: 'المسار السريع (نفس اليوم)' },
    { id: 'urgent', labelEn: 'VIP Priority Concierge (<6 Hours)', labelAr: 'أولوية VIP فائقة (أقل من 6 ساعات)' },
  ];

  // Dynamic recommendations
  const recommendedServices = TYPING_SERVICES_DATA.filter((s) => {
    if (selectedNeed === 'family') return s.category === 'family' || s.category === 'visa';
    return s.category === selectedNeed;
  }).slice(0, 3);

  return (
    <section id="wizard" className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      
      {/* Ambient background styling */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-amber-600/[0.04] blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'المساعد الذكي لتحديد الخدمة' : 'SMART SERVICE RECOMMENDATION WIZARD'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'اعثر على الخدمة المناسبة في 4 خطوات' : 'Find The Right Government Service'}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr 
              ? 'أجب عن بضعة أسئلة بسيطة للحصول على المتطلبات الدقيقة والرسوم والمسار الموصى به لمعاملتك.'
              : 'Answer four quick questions to receive a tailored roadmap of required documents, official fees, and verified typing SLA.'}
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="bg-[#072617] border border-amber-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl">
          
          {/* Step Progress Indicators */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentStep(step)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    currentStep === step
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 ring-2 ring-amber-400/40'
                      : currentStep > step
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {currentStep > step ? '✓' : step}
                </button>
                <span className={`hidden sm:inline text-xs font-mono ${
                  currentStep === step ? 'text-amber-300 font-bold' : 'text-slate-500'
                }`}>
                  {step === 1 && (isAr ? 'نوع المعاملة' : '1. Service Need')}
                  {step === 2 && (isAr ? 'المستفيد' : '2. Applicant')}
                  {step === 3 && (isAr ? 'الإمارة' : '3. Emirate')}
                  {step === 4 && (isAr ? 'السرعة والنتيجة' : '4. Recommendation')}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: What do you need? */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">
                {isAr ? '1. ما هي المعاملة الحكومية التي تحتاجها؟' : '1. What type of government service do you require?'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {needsOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedNeed === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedNeed(opt.id)}
                      className={`p-4 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/10'
                          : 'bg-white/[0.02] border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-amber-400 mb-2" />
                      <p className="text-xs font-bold text-white">{isAr ? opt.labelAr : opt.labelEn}</p>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>{isAr ? 'الخطوة التالية' : 'Next Step'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Who is this for? */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">
                {isAr ? '2. لمن تُقدّم هذه المعاملة؟' : '2. Who is this application being processed for?'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipientOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedRecipient(opt.id)}
                    className={`p-4 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer ${
                      selectedRecipient === opt.id
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/10'
                        : 'bg-white/[0.02] border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <p className="text-sm font-bold text-white">{isAr ? opt.labelAr : opt.labelEn}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {isAr ? 'تجهيز المستندات المناسبة لهذه الفئة' : 'Tailor requirement checklist for this tier'}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 text-xs font-bold"
                >
                  {isAr ? 'السابق' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>{isAr ? 'الخطوة التالية' : 'Next Step'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Which Emirate? */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">
                {isAr ? '3. في أي إمارة مسجلة إقامتك أو منشأتك؟' : '3. Which UAE Emirate holds jurisdiction?'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {emirateOptions.map((em) => (
                  <button
                    key={em}
                    onClick={() => setSelectedEmirate(em)}
                    className={`p-3.5 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                      selectedEmirate === em
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-white/[0.02] border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 text-xs font-bold"
                >
                  {isAr ? 'السابق' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>{isAr ? 'عرض الخدمات الموصى بها' : 'Generate Roadmap'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Dynamic Recommendation Output */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'المسار الموصى به لمعاملتك' : 'RECOMMENDED SERVICE ROADMAP'}
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {isAr 
                      ? `الإمارة: ${selectedEmirate} • الفئة: ${selectedRecipient}`
                      : `Jurisdiction: ${selectedEmirate} • Tier: ${selectedRecipient}`}
                  </p>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-mono"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{isAr ? 'إعادة التحديد' : 'Reset'}</span>
                </button>
              </div>

              {/* Recommended Services Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendedServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-slate-800 hover:border-amber-500/50 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">
                        {isAr ? service.categoryLabelAr : service.categoryLabelEn}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-2">
                        {isAr ? service.nameAr : service.nameEn}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {isAr ? service.shortDescAr : service.shortDescEn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-xs flex items-center justify-between">
                      <span className="text-amber-400 font-mono font-bold">AED {service.typingFeeMin}</span>
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-white hover:text-amber-300 font-bold text-[11px] flex items-center gap-1"
                      >
                        <span>{isAr ? 'عرض الشروط' : 'Inspect'}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 text-xs font-bold"
                >
                  {isAr ? 'تعديل الإمارة' : 'Back'}
                </button>

                <button
                  onClick={() => onOpenAppointment(recommendedServices[0]?.id)}
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center gap-2"
                >
                  <span>{isAr ? 'بدء المعاملة الموصى بها الآن' : 'Start Recommended Service'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
