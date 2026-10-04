'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const CorporateTraining: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  // Proposal modal state
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    teamSize: '10–25 Employees',
    trainingNeed: 'Leadership & Executive Management',
    deliveryPref: 'Hybrid (Campus + Virtual)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.workEmail || !formData.phone) {
      alert(language === 'ar' ? 'يرجى إكمال جميع الحقول الإلزامية' : 'Please fill all required fields');
      return;
    }
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setFormData({
      companyName: '',
      contactName: '',
      workEmail: '',
      phone: '',
      teamSize: '10–25 Employees',
      trainingNeed: 'Leadership & Executive Management',
      deliveryPref: 'Hybrid (Campus + Virtual)',
      message: ''
    });
  };

  return (
    <section id="corporate" className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Card Banner */}
        <div className="bg-gradient-to-br from-[#0D1118] via-[#11161F] to-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5C378]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6366F1]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
                {t.corporate.badge}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                {language === 'ar' ? EDUVANTA_DATA.corporateTraining.headingAr : EDUVANTA_DATA.corporateTraining.heading}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {language === 'ar' ? EDUVANTA_DATA.corporateTraining.subheadingAr : EDUVANTA_DATA.corporateTraining.subheading}
              </p>

              {/* 6 Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {EDUVANTA_DATA.corporateTraining.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="w-4 h-4 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/40 flex items-center justify-center text-[#E5C378] text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug">{language === 'ar' ? b.ar : b.en}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-extrabold text-[#07090E] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C8A030] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/20 hover:shadow-xl transition-all cursor-pointer"
                >
                  <span>{t.corporate.requestProposal}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </button>

                <a
                  href={`tel:${EDUVANTA_DATA.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-center"
                >
                  <svg className="w-4 h-4 text-[#E5C378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{language === 'ar' ? 'استشارة تدريب الشركات: ٠٤٩٠٠٧٨٢١٠' : 'Corporate L&D Hotline: +971 4 900 78210'}</span>
                </a>
              </div>
            </div>

            {/* Right Card: Corporate Guarantee & Trust Snapshot */}
            <div className="lg:col-span-5 bg-[#07090E]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <div className="text-xs font-mono text-[#E5C378] uppercase tracking-wider mb-2">
                {language === 'ar' ? 'أثر التدريب المؤسسي' : 'Enterprise Capability Framework'}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {language === 'ar' ? 'نتائج تشغيلية قابلة للقياس' : 'Measurable Organizational Outcomes'}
              </h3>
              
              <div className="space-y-4 text-xs text-slate-300 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-bold text-white mb-1">
                    {language === 'ar' ? 'تخصيص المنهج بالكامل' : '100% Customized Case Studies'}
                  </div>
                  <div className="text-slate-400">
                    {language === 'ar' ? 'محاكاة التحديات التشغيلية الخاصة بشركتكم وتدريب الفرق على معالجتها.' : 'Curriculum engineered around your specific operational workflows & KPIs.'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-bold text-white mb-1">
                    {language === 'ar' ? 'لوحات مؤشرات تحليلية' : 'Executive Reporting & Skill Audits'}
                  </div>
                  <div className="text-slate-400">
                    {language === 'ar' ? 'تقارير أسبوعية تفصيلية لقياس حضور وتفاعل المتدربين وتقييم التطور المكتسب.' : 'Detailed attendance, progress, and post-cohort competency assessment reports.'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-bold text-white mb-1">
                    {language === 'ar' ? 'شهادات اعتماد موحدة' : 'Accredited Team Credentials'}
                  </div>
                  <div className="text-slate-400">
                    {language === 'ar' ? 'منح شهادات مهنية لجميع الموظفين الذين يجتازون متطلبات البرنامج.' : 'Formal certification awarded to all qualifying cohort participants.'}
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 italic">
                {language === 'ar'
                  ? 'يتم تقديم برامج الشركات لمجموعات تبدأ من ٥ موظفين وحتى ٢٥٠ موظفاً.'
                  : 'Enterprise cohort packages available for teams from 5 to 250+ employees across the UAE.'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Proposal Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-[#0D1118] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-scaleUp text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className={`absolute top-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer ${
                isRtl ? 'left-6' : 'right-6'
              }`}
            >
              ✕
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#E5C378] uppercase tracking-wider block mb-1">
                    {t.corporate.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {t.corporate.modalTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {t.corporate.modalSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.companyName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Al Futtaim Group / Emirates NBD"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.contactName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="e.g. Tariq Mansour"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.workEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="tariq@company.ae"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.phoneNum} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.teamSize}
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378]"
                      >
                        <option value="5–10 Employees">5–10 Employees</option>
                        <option value="10–25 Employees">10–25 Employees</option>
                        <option value="25–50 Employees">25–50 Employees</option>
                        <option value="50–100+ Employees">50–100+ Employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.trainingNeed}
                      </label>
                      <select
                        value={formData.trainingNeed}
                        onChange={(e) => setFormData({ ...formData, trainingNeed: e.target.value })}
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378]"
                      >
                        <option value="Leadership & Executive Management">Leadership & Management</option>
                        <option value="Project Management & Agile">Project Management & Agile</option>
                        <option value="Corporate Finance & Valuation">Corporate Finance & Tax</option>
                        <option value="Strategic HR & Emiratization">Strategic HR & Emiratization</option>
                        <option value="Digital Growth & FinTech">Digital Growth & FinTech</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.corporate.deliveryPref}
                      </label>
                      <select
                        value={formData.deliveryPref}
                        onChange={(e) => setFormData({ ...formData, deliveryPref: e.target.value })}
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378]"
                      >
                        <option value="On-Site at Company HQ">On-Site at HQ</option>
                        <option value="Dubai / Abu Dhabi Campus">EDUVANTA Campus</option>
                        <option value="Hybrid Blend">Hybrid Blend</option>
                        <option value="Live Virtual">Live Virtual</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.corporate.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'ar' ? 'اذكر أهداف التدريب الرئيسية، أو موعد البدء المتوقع، أو المتطلبات الخاصة...' : 'Describe specific training objectives, expected start date, or customized modules needed...'}
                      className="w-full bg-[#11161F] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/20 transition-all cursor-pointer"
                    >
                      {t.corporate.submitProposal}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.corporate.proposalSentTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  {t.corporate.proposalSentDesc}
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#E5C378] font-mono mb-6 max-w-md mx-auto">
                  {language === 'ar' ? 'الرقم المرجعي للاستفسار المؤسسي: CORP-78210' : 'Inquiry Reference ID: CORP-78210'}
                </div>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#07090E] bg-[#E5C378] hover:bg-[#F0D595] transition-colors"
                >
                  {t.corporate.closeBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
