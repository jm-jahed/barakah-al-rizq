'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA, CampusLocation } from '@/data/eduvantaData';

export const CampusLocations: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCampus, setSelectedCampus] = useState<string>('Dubai Knowledge Park');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [visitForm, setVisitForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    programInterest: 'Project Management & Agile',
    notes: ''
  });

  const handleOpenModal = (campusName: string) => {
    setSelectedCampus(campusName);
    setModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitForm.fullName || !visitForm.email || !visitForm.phone) {
      alert(language === 'ar' ? 'يرجى إكمال جميع الحقول الإلزامية' : 'Please fill all required fields');
      return;
    }
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setVisitForm({
      fullName: '',
      email: '',
      phone: '',
      date: '',
      programInterest: 'Project Management & Agile',
      notes: ''
    });
  };

  return (
    <section id="campuses" className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.campuses.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.campuses.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.campuses.subtitle}
          </p>
        </div>

        {/* 2 Campus Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUVANTA_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#0D1118] border border-white/[0.08] hover:border-[#E5C378]/30 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              <div>
                {/* Top Location Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#E5C378] px-3 py-1 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/20 uppercase">
                    {language === 'ar' ? loc.cityAr : loc.city} HUB
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {language === 'ar' ? 'مقر معتمد' : 'Authorized Center'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'ar' ? loc.nameAr : loc.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {language === 'ar' ? loc.addressAr : loc.address}
                </p>

                {/* Operating Hours */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 mb-6 font-mono">
                  <span className="text-slate-400 block text-[10.5px] uppercase mb-0.5">
                    {language === 'ar' ? 'ساعات العمل الرسمية' : 'Operating Hours'}
                  </span>
                  {language === 'ar' ? loc.hoursAr : loc.hours}
                </div>

                {/* Features Grid */}
                <div className="space-y-2.5 mb-8">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? 'تجهيزات ومرافق المقر' : 'Campus Facilities'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(language === 'ar' ? loc.featuresAr : loc.features).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-[#E5C378]">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`tel:${loc.phone}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-[#E5C378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{loc.phone}</span>
                </a>

                <button
                  onClick={() => handleOpenModal(language === 'ar' ? loc.nameAr : loc.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 transition-all cursor-pointer"
                >
                  <span>{t.campuses.scheduleVisit}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Visit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-[#0D1118] border border-white/15 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-scaleUp text-slate-200"
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
                    {t.campuses.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {t.campuses.modalTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t.campuses.modalSubtitle}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.campuses.selectCampus}
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={selectedCampus}
                      className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#E5C378] font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.campuses.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={visitForm.fullName}
                        onChange={(e) => setVisitForm({ ...visitForm, fullName: e.target.value })}
                        placeholder="e.g. Tariq Mansour"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.campuses.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.campuses.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={visitForm.email}
                        onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })}
                        placeholder="tariq@work.ae"
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.campuses.preferredDate}
                      </label>
                      <input
                        type="date"
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                        className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.campuses.programInterest}
                    </label>
                    <select
                      value={visitForm.programInterest}
                      onChange={(e) => setVisitForm({ ...visitForm, programInterest: e.target.value })}
                      className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378]"
                    >
                      <option value="Project Management & Agile">Project Management & Agile</option>
                      <option value="Executive Leadership Diploma">Executive Leadership Diploma</option>
                      <option value="Corporate Finance & Valuation">Corporate Finance & Valuation</option>
                      <option value="Digital Growth Certification">Digital Growth Certification</option>
                      <option value="Strategic HR & Emiratization">Strategic HR & Emiratization</option>
                      <option value="FinTech & Digital Banking">FinTech & Digital Banking</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/20 transition-all cursor-pointer"
                    >
                      {t.campuses.submitVisit}
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
                  {t.campuses.visitConfirmedTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  {t.campuses.visitConfirmedDesc}
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#E5C378] font-mono mb-6 max-w-md mx-auto">
                  {selectedCampus} • {language === 'ar' ? 'رقم الحجز: TOUR-4509' : 'Booking Ref: TOUR-4509'}
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
