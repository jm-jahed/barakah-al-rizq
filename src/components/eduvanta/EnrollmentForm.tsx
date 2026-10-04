'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const EnrollmentForm: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'pm-prep',
    format: 'Hybrid',
    sponsorship: 'Self-Funded (Individual)',
    notes: ''
  });

  const handleNext = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert(language === 'ar' ? 'يرجى إكمال بيانات الاتصال الأساسية' : 'Please complete all contact fields');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: 'pm-prep',
      format: 'Hybrid',
      sponsorship: 'Self-Funded (Individual)',
      notes: ''
    });
  };

  const selectedCourseObj = EDUVANTA_DATA.courses.find((c) => c.id === formData.course);

  return (
    <section id="enroll" className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.enrollment.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.enrollment.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.enrollment.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {!submitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between gap-2 mb-8 pb-6 border-b border-white/[0.08] overflow-x-auto">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="flex items-center gap-2 shrink-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                        step === s
                          ? 'bg-[#E5C378] text-[#07090E] ring-4 ring-[#E5C378]/20'
                          : step > s
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {step > s ? '✓' : s}
                    </div>
                    <span className={`text-[11px] font-medium hidden sm:inline ${step === s ? 'text-white font-bold' : 'text-slate-400'}`}>
                      {s === 1 && t.enrollment.step1}
                      {s === 2 && t.enrollment.step2}
                      {s === 3 && t.enrollment.step3}
                      {s === 4 && t.enrollment.step4}
                      {s === 5 && t.enrollment.step5}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Flow */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: Details */}
                {step === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.enrollment.step1Title}
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.enrollment.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rashid Al Nuaimi"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.enrollment.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rashid@work.ae"
                          className="w-full bg-[#11161F] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.enrollment.phone} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className="w-full bg-[#11161F] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Program */}
                {step === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.enrollment.step2Title}
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                      {EDUVANTA_DATA.courses.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, course: c.id })}
                          className={`p-4 rounded-xl border text-start flex items-center justify-between gap-4 transition-all cursor-pointer ${
                            formData.course === c.id
                              ? 'bg-[#E5C378]/10 border-[#E5C378] ring-1 ring-[#E5C378]/30 shadow-md'
                              : 'bg-[#11161F] border-white/5 hover:border-white/15'
                          }`}
                        >
                          <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              {language === 'ar' ? c.categoryAr : c.category}
                            </span>
                            <span className="text-sm font-bold text-white">
                              {language === 'ar' ? c.titleAr : c.title}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#E5C378] shrink-0">
                            {c.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: Learning Format */}
                {step === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.enrollment.step3Title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {[
                        { id: 'Hybrid', label: t.catalog.hybrid, desc: language === 'ar' ? 'عطلة نهاية الأسبوع + عن بُعد' : 'Weekend Campus + Online' },
                        { id: 'In-Person', label: t.catalog.inPerson, desc: language === 'ar' ? 'حرم دبي / أبوظبي' : 'Dubai / Abu Dhabi Campus' },
                        { id: 'Online', label: t.catalog.online, desc: language === 'ar' ? 'أمسيات افتراضية مباشرة' : 'Weekday Evening Webinars' }
                      ].map((fmt) => (
                        <button
                          key={fmt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, format: fmt.id })}
                          className={`p-4 rounded-xl border text-start transition-all cursor-pointer ${
                            formData.format === fmt.id
                              ? 'bg-[#E5C378]/10 border-[#E5C378] ring-1 ring-[#E5C378]/30 shadow-md'
                              : 'bg-[#11161F] border-white/5 hover:border-white/15'
                          }`}
                        >
                          <div className="text-sm font-bold text-white mb-1">{fmt.label}</div>
                          <div className="text-xs text-slate-400">{fmt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 4: Specifics */}
                {step === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.enrollment.step4Title}
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {language === 'ar' ? 'طريقة السداد / الرعاية' : 'Tuition Funding Type'}
                      </label>
                      <select
                        value={formData.sponsorship}
                        onChange={(e) => setFormData({ ...formData, sponsorship: e.target.value })}
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#E5C378]"
                      >
                        <option value="Self-Funded (Individual)">{language === 'ar' ? 'سداد ذاتي (أفراد)' : 'Self-Funded (Individual)'}</option>
                        <option value="0% Interest Installment Plan">{language === 'ar' ? 'خطة تقسيط شهري بدون فوائد (٣ أو ٦ أشهر)' : '0% Interest Installment Plan (3 or 6 Months)'}</option>
                        <option value="Employer Sponsored / Corporate L&D">{language === 'ar' ? 'رعاية جهة العمل / شركة' : 'Employer Sponsored / Corporate L&D'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.enrollment.notes}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder={language === 'ar' ? 'أهدافك المهنية الخاصة أو أي متطلبات دراسية...' : 'Specific career goals, timeline preferences, or questions for your advisor...'}
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: Review & Submit */}
                {step === 5 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.enrollment.step5Title}
                    </h3>

                    <div className="p-4 rounded-xl bg-[#11161F] border border-white/10 space-y-2.5 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.enrollment.fullName}:</span>
                        <span className="font-bold text-white">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.enrollment.email}:</span>
                        <span className="font-bold text-white">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.enrollment.phone}:</span>
                        <span className="font-bold text-white">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{language === 'ar' ? 'البرنامج' : 'Program'}:</span>
                        <span className="font-bold text-[#E5C378]">
                          {selectedCourseObj ? (language === 'ar' ? selectedCourseObj.titleAr : selectedCourseObj.title) : formData.course}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{language === 'ar' ? 'الصيغة' : 'Format'}:</span>
                        <span className="font-bold text-white">{formData.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{language === 'ar' ? 'الرسوم' : 'Tuition'}:</span>
                        <span className="font-bold text-emerald-400 font-mono">
                          {selectedCourseObj?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Controls */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {t.enrollment.back}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 transition-all cursor-pointer"
                    >
                      <span>{t.enrollment.next}</span>
                      <span className={isRtl ? 'rotate-180' : ''}>→</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-extrabold text-[#07090E] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C8A030] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/25 transition-all cursor-pointer"
                    >
                      <span>{t.enrollment.submitApplication}</span>
                      <span className={isRtl ? 'rotate-180' : ''}>→</span>
                    </button>
                  )}
                </div>
              </form>

              {/* Fast-Track WhatsApp Option */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
                <a
                  href={EDUVANTA_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.enrollment.whatsappDirect} (+971 50 900 78210)</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.enrollment.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-4">
                {t.enrollment.successDesc}
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#E5C378] font-mono mb-6 max-w-md mx-auto">
                {language === 'ar' ? 'الرقم المرجعي للطلب: ADM-2026-9081' : 'Application Reference ID: ADM-2026-9081'}
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#07090E] bg-[#E5C378] hover:bg-[#F0D595] transition-colors"
              >
                {language === 'ar' ? 'تقديم طلب آخر' : 'Submit Another Application'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
