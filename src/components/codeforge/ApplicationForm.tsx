'use client';

import React, { useState } from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const ApplicationForm: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    track: 'fullstack-eng',
    schedule: 'Full-Time Immersive',
    paymentPlan: '0% Interest Monthly Installment Plan (6 Months)',
    backgroundNotes: ''
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
      track: 'fullstack-eng',
      schedule: 'Full-Time Immersive',
      paymentPlan: '0% Interest Monthly Installment Plan (6 Months)',
      backgroundNotes: ''
    });
  };

  const selectedTrackObj = CODEFORGE_DATA.programs.find((p) => p.id === formData.track);

  return (
    <section id="apply" className="bg-[#050811] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
            {t.admissions.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.admissions.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.admissions.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {!submitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between gap-2 mb-8 pb-6 border-b border-white/[0.08] overflow-x-auto">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="flex items-center gap-2 shrink-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                        step === s
                          ? 'bg-[#38BDF8] text-[#070A12] ring-4 ring-sky-500/20'
                          : step > s
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {step > s ? '✓' : s}
                    </div>
                    <span className={`text-[11px] font-mono ${step === s ? 'text-white font-bold' : 'text-slate-400'} hidden sm:inline`}>
                      {s === 1 && t.admissions.step1}
                      {s === 2 && t.admissions.step2}
                      {s === 3 && t.admissions.step3}
                      {s === 4 && t.admissions.step4}
                      {s === 5 && t.admissions.step5}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Flow */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: Details */}
                {step === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">
                      {t.admissions.step1Title}
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        {t.admissions.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Tariq Al-Nuaimi"
                        className="w-full bg-[#121829] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                          {t.admissions.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tariq@developer.ae"
                          className="w-full bg-[#121829] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                          {t.admissions.phone} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className="w-full bg-[#121829] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8] font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Track */}
                {step === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">
                      {t.admissions.step2Title}
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                      {CODEFORGE_DATA.programs.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, track: p.id })}
                          className={`p-4 rounded-xl border text-start flex items-center justify-between gap-4 transition-all cursor-pointer ${
                            formData.track === p.id
                              ? 'bg-sky-500/10 border-[#38BDF8] ring-1 ring-sky-500/30 shadow-md'
                              : 'bg-[#121829] border-white/5 hover:border-white/15'
                          }`}
                        >
                          <div>
                            <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider block">
                              TRACK {language === 'ar' ? `٠${p.num}` : p.num} • {language === 'ar' ? p.categoryAr : p.category}
                            </span>
                            <span className="text-sm font-bold text-white font-mono">
                              {language === 'ar' ? p.titleAr : p.title}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#38BDF8] shrink-0">
                            {p.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: Schedule Format */}
                {step === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">
                      {t.admissions.step3Title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {[
                        { id: 'Full-Time Immersive', label: t.catalog.fullTime, desc: language === 'ar' ? 'الإثنين – الجمعة (٩ ص – ٥ م)' : 'Mon–Fri, 9 AM – 5 PM' },
                        { id: 'Part-Time Evening', label: t.catalog.partTime, desc: language === 'ar' ? 'الأمسيات وعطلات الأسبوع' : 'Weekday Evenings + Sat' },
                        { id: 'Hybrid Blend', label: t.catalog.hybrid, desc: language === 'ar' ? 'مختبرات حضورية + مشاريع عن بُعد' : 'Campus Labs + Remote' }
                      ].map((fmt) => (
                        <button
                          key={fmt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, schedule: fmt.id })}
                          className={`p-4 rounded-xl border text-start transition-all cursor-pointer ${
                            formData.schedule === fmt.id
                              ? 'bg-sky-500/10 border-[#38BDF8] ring-1 ring-sky-500/30 shadow-md'
                              : 'bg-[#121829] border-white/5 hover:border-white/15'
                          }`}
                        >
                          <div className="text-sm font-bold text-white mb-1 font-mono">{fmt.label}</div>
                          <div className="text-xs text-slate-400">{fmt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 4: Background & Financing */}
                {step === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">
                      {t.admissions.step4Title}
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        {t.admissions.paymentPlan}
                      </label>
                      <select
                        value={formData.paymentPlan}
                        onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value })}
                        className="w-full bg-[#121829] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#38BDF8]"
                      >
                        <option value="0% Interest Monthly Installment Plan (6 Months)">{language === 'ar' ? 'خطة تقسيط شهري بدون فوائد (٦ أشهر)' : '0% Interest Monthly Installment Plan (6 Months)'}</option>
                        <option value="Upfront Self-Funded (5% Early Discount)">{language === 'ar' ? 'سداد كامل مقدماً (خصم ٥٪ للتسجيل المبكر)' : 'Upfront Self-Funded (5% Early Discount)'}</option>
                        <option value="Employer / Corporate Sponsorship">{language === 'ar' ? 'رعاية جهة العمل / شركة تقنية' : 'Employer / Corporate Sponsorship'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        {t.admissions.backgroundNotes}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.backgroundNotes}
                        onChange={(e) => setFormData({ ...formData, backgroundNotes: e.target.value })}
                        placeholder={language === 'ar' ? 'أخبرنا عن خلفيتك الحالية وأهدافك المهنية في مجال البرمجة...' : 'Describe your coding background, timeline, or target engineering role...'}
                        className="w-full bg-[#121829] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: Review */}
                {step === 5 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">
                      {t.admissions.step5Title}
                    </h3>

                    <div className="p-4 rounded-xl bg-[#121829] border border-white/10 space-y-2.5 text-xs text-slate-300 font-mono">
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.admissions.fullName}:</span>
                        <span className="font-bold text-white">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.admissions.email}:</span>
                        <span className="font-bold text-white">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.admissions.phone}:</span>
                        <span className="font-bold text-white">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{language === 'ar' ? 'المسار' : 'Track'}:</span>
                        <span className="font-bold text-[#38BDF8]">
                          {selectedTrackObj ? (language === 'ar' ? selectedTrackObj.titleAr : selectedTrackObj.title) : formData.track}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{language === 'ar' ? 'الدوام' : 'Schedule'}:</span>
                        <span className="font-bold text-white">{formData.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{language === 'ar' ? 'الرسوم' : 'Tuition'}:</span>
                        <span className="font-bold text-emerald-400">
                          {selectedTrackObj?.price}
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
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors font-mono"
                    >
                      {t.admissions.back}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-md shadow-sky-500/20 transition-all cursor-pointer font-sans"
                    >
                      <span>{t.admissions.next}</span>
                      <span className={isRtl ? 'rotate-180' : ''}>→</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-extrabold text-[#070A12] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#0369A1] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-lg shadow-sky-500/25 transition-all cursor-pointer font-sans"
                    >
                      <span>{t.admissions.submitApplication}</span>
                      <span className={isRtl ? 'rotate-180' : ''}>→</span>
                    </button>
                  )}
                </div>
              </form>

              {/* Fast-Track WhatsApp */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
                <a
                  href={CODEFORGE_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.admissions.whatsappDirect} (+971 50 700 89120)</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                {t.admissions.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-4">
                {t.admissions.successDesc}
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#38BDF8] font-mono mb-6 max-w-md mx-auto">
                {language === 'ar' ? 'الرقم المرجعي للطلب: DEV-2026-4821' : 'Application Reference ID: DEV-2026-4821'}
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#070A12] bg-[#38BDF8] hover:bg-[#7DD3FC] transition-colors font-sans"
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
