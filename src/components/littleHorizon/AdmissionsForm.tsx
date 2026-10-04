'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const AdmissionsForm: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].admissions;

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childDob: '',
    childAge: '18-24m',
    campus: 'ranches',
    program: 'toddler-program',
    schedule: 'full-day',
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
    <section id="admissions-form" className="py-24 bg-[#0A120D] border-b border-emerald-900/40 relative">
      <div id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132219] rounded-3xl border border-amber-400/40 p-6 sm:p-10 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
              📝 {tr.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-5 mb-2">
              {tr.title}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
              {tr.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0E1B13] p-8 sm:p-10 rounded-2xl text-center border border-emerald-600/50 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-3xl mx-auto mb-2 text-emerald-400 animate-bounce">
                ✓
              </div>
              <h3 className="font-black text-xl sm:text-2xl text-white">
                {tr.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/90 max-w-lg mx-auto leading-relaxed">
                {tr.successDesc}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={LITTLE_HORIZON_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-600/50 hover:bg-emerald-900/60 px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{tr.advisorDirect}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto text-xs font-semibold text-emerald-400 hover:text-white px-6 py-3 rounded-xl border border-emerald-800/40"
                >
                  {isRtl ? 'تقديم طلب آخر' : 'Submit Another Application'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Parent Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.parentName} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder={isRtl ? 'مثال: حصة المرزوقي' : 'e.g. Hessa Al-Marzooqi'}
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.email} *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.ae"
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Child Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.phone} *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.childName} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder={isRtl ? 'مثال: ليلى راشد' : 'e.g. Layla Rashid'}
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Campus & Program */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.targetCampus} *
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="ranches">{isRtl ? 'دبي — فرع المرابع العربية' : 'Dubai — Arabian Ranches Main Campus'}</option>
                    <option value="jumeirah">{isRtl ? 'دبي — فرع جميرا الساحلي' : 'Dubai — Jumeirah Coastal Campus'}</option>
                    <option value="reem">{isRtl ? 'أبوظبي — فرع جزيرة الريم' : 'Abu Dhabi — Al Reem Island Campus'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.targetProgram} *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="baby-room">{isRtl ? 'جناح الرضع (٦ - ١٨ شهراً)' : 'Baby Room (6 – 18 Months)'}</option>
                    <option value="toddler-program">{isRtl ? 'برنامج البراعم (١٨ شهراً - ٣ سنوات)' : 'Toddler Program (18 Mos – 3 Years)'}</option>
                    <option value="pre-kindergarten">{isRtl ? 'الروضة التمهيدية (٣ - ٤ سنوات)' : 'Pre-Kindergarten (3 – 4 Years)'}</option>
                    <option value="summer-camps">{isRtl ? 'المخيمات الموسمية والصيفية' : 'Summer & Holiday Camps'}</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Schedule & Sibling Checkbox */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                    {tr.preferredSchedule}
                  </label>
                  <select
                    value={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="full-day">{isRtl ? 'دوام كامل (٧:٣٠ ص - ٤:٠٠ م)' : 'Full-Day (7:30 AM - 4:00 PM)'}</option>
                    <option value="half-day">{isRtl ? 'نصف دوام صباحي (٧:٣٠ ص - ١:٠٠ م)' : 'Half-Day (7:30 AM - 1:00 PM)'}</option>
                    <option value="extended">{isRtl ? 'دوام ممتد (٧:٣٠ ص - ٥:٣٠ م)' : 'Extended Day (7:30 AM - 5:30 PM)'}</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0A120D] border border-emerald-700/50 mt-auto cursor-pointer" onClick={() => setFormData({ ...formData, hasSibling: !formData.hasSibling })}>
                  <input
                    type="checkbox"
                    id="adm-sibling"
                    checked={formData.hasSibling}
                    onChange={(e) => setFormData({ ...formData, hasSibling: e.target.checked })}
                    className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                  />
                  <label htmlFor="adm-sibling" className="text-xs text-emerald-200 cursor-pointer select-none">
                    {isRtl ? 'تسجيل أخ/أخت (تفعيل خصم ١٠٪)' : 'Enrolling a sibling (10% Discount)'}
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-bold text-emerald-300 block mb-1.5">
                  {tr.notes}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={isRtl ? 'تفضيلات الوجبات الغذائية، جدول التهيئة، أي استفسارات خاصة...' : 'Dietary restrictions, preferred start dates, settling questions...'}
                  className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-emerald-800/40">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto text-xs font-extrabold text-[#0A120D] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? tr.submitting : tr.submitBtn}
                </button>

                <a
                  href={LITTLE_HORIZON_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-300 hover:text-amber-300 transition-colors flex items-center gap-1.5"
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
