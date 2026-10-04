'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AdmissionsForm: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].admissions;

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    studentDob: '',
    campus: 'barsha',
    targetStage: 'primary',
    curriculumTrack: 'ib',
    hasSibling: false,
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="admissions-form" className="py-24 bg-[#050A17] border-b border-amber-500/20 relative">
      <div id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1B3E] rounded-3xl border border-amber-500/40 p-6 sm:p-10 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#050A17] px-4 py-1.5 rounded-full border border-amber-500/30">
              📝 {tr.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-5 mb-2 font-serif">
              {tr.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {tr.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#070D1E] p-8 sm:p-10 rounded-2xl text-center border border-emerald-500/40 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-3xl mx-auto mb-2 text-emerald-400 animate-bounce">
                ✓
              </div>
              <h3 className="font-black text-xl sm:text-2xl text-white font-serif">
                {tr.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                {tr.successDesc}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={ALTAIR_ACADEMY_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-600/50 hover:bg-emerald-900/60 px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{tr.advisorDirect}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto text-xs font-semibold text-amber-300 hover:text-white px-6 py-3 rounded-xl border border-slate-700"
                >
                  {isRtl ? 'تقديم طلب طالب آخر' : 'Submit Another Application'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Parent Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.parentName} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder={isRtl ? 'مثال: سعادة راشد المنصوري' : 'e.g. Dr. Arthur Sterling'}
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.email} *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.ae"
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Student Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.phone} *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.studentName} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder={isRtl ? 'مثال: سارة راشد المنصوري' : 'e.g. Sara Al Mansoori'}
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Campus & Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.targetCampus} *
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="barsha">{isRtl ? 'دبي — فرع البرشاء الرئيسي' : 'Dubai — Al Barsha Flagship Campus'}</option>
                    <option value="khalifa">{isRtl ? 'أبوظبي — فرع مدينة خليفة' : 'Abu Dhabi — Khalifa City Capital Campus'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.targetStage} *
                  </label>
                  <select
                    value={formData.targetStage}
                    onChange={(e) => setFormData({ ...formData, targetStage: e.target.value })}
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="foundation">{isRtl ? 'مرحلة التأسيس (FS1 - FS2)' : 'Foundation Stage (FS1 - FS2)'}</option>
                    <option value="primary">{isRtl ? 'المرحلة الابتدائية (السنوات ١ - ٦)' : 'Primary School (Years 1 - 6)'}</option>
                    <option value="secondary">{isRtl ? 'المرحلة الثانوية المتوسطة (IGCSE)' : 'Secondary School (Years 7 - 11)'}</option>
                    <option value="sixth-form">{isRtl ? 'المرحلة الجامعية التحضيرية السكث فورم (IB / A-Levels)' : 'Sixth Form (Years 12 - 13 / IBDP)'}</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Curriculum Track & Sibling Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-amber-300 block mb-1.5">
                    {tr.curriculumTrack}
                  </label>
                  <select
                    value={formData.curriculumTrack}
                    onChange={(e) => setFormData({ ...formData, curriculumTrack: e.target.value })}
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="ib">{isRtl ? 'دبلوما البكالوريا الدولية (IB World Track)' : 'International Baccalaureate (IB World Track)'}</option>
                    <option value="british">{isRtl ? 'المنهاج البريطاني كامبريدج (A-Levels Track)' : 'Cambridge British Curriculum (A-Levels)'}</option>
                    <option value="dual">{isRtl ? 'المسار المزدوج / استشارة تشخيصية مسبقة' : 'Dual Track / Request Academic Counseling'}</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#070D1E] border border-amber-500/30 mt-auto cursor-pointer" onClick={() => setFormData({ ...formData, hasSibling: !formData.hasSibling })}>
                  <input
                    type="checkbox"
                    id="adm-sibling-altair"
                    checked={formData.hasSibling}
                    onChange={(e) => setFormData({ ...formData, hasSibling: e.target.checked })}
                    className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                  />
                  <label htmlFor="adm-sibling-altair" className="text-xs text-slate-200 cursor-pointer select-none">
                    {isRtl ? 'تسجيل أخ/أخت (تطبيق خصم الإخوة ١٠٪)' : 'Enrolling a sibling (Apply 10% Sibling Benefit)'}
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-bold text-amber-300 block mb-1.5">
                  {tr.notes}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={isRtl ? 'المدرسة الحالية، الاهتمامات الأكاديمية أو الرياضية الخاصة، أي متطلبات دعم...' : 'Current school, target subjects, gifted sports talents, special educational requirements...'}
                  className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto text-xs font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? tr.submitting : tr.submitBtn}
                </button>

                <a
                  href={ALTAIR_ACADEMY_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>💬</span>
                  <span>{tr.advisorDirect}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
