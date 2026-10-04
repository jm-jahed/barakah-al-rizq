'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA, CampusLocation } from '@/data/altairAcademyData';

export const CampusLocations: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].campuses;
  const tourTr = ALTAIR_TRANSLATIONS[lang].tourModal;

  const [bookingCampus, setBookingCampus] = useState<CampusLocation | null>(null);
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (09:00 AM)',
    yearGroup: 'Primary (Years 1 - 6)'
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTourSubmitted(true);
    setTimeout(() => {
      setTourSubmitted(false);
      setBookingCampus(null);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        timeSlot: 'Morning (09:00 AM)',
        yearGroup: 'Primary (Years 1 - 6)'
      });
    }, 3000);
  };

  return (
    <section id="campuses" className="py-24 bg-[#070D1E] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            🏛️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 2 Flagship Campus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ALTAIR_ACADEMY_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#0D1B3E]/80 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 hover:bg-[#122452] transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Campus Image */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40">
                    📍 {isRtl ? loc.cityAr : loc.city} • {isRtl ? loc.districtAr : loc.district}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-serif">
                    {isRtl ? loc.nameAr : loc.name}
                  </h3>
                  <p className="text-xs text-slate-300 mb-6 flex items-start gap-1.5">
                    <span>🏢</span>
                    <span>{isRtl ? loc.addressAr : loc.address}</span>
                  </p>

                  {/* Campus Amenities */}
                  <div className="space-y-2.5 mb-6">
                    {loc.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <span className="text-amber-400 font-bold mt-0.5">✓</span>
                        <span>{isRtl ? feat.ar : feat.en}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operating Hours */}
                  <div className="text-[11px] text-amber-300 font-medium bg-[#070D1E] p-3 rounded-xl border border-slate-800 mb-2">
                    ⏰ {isRtl ? loc.operatingHours.ar : loc.operatingHours.en}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${loc.phone}`}
                  className="w-full sm:w-auto flex-1 text-center text-xs font-mono text-slate-300 border border-slate-700 hover:bg-[#070D1E] py-3 rounded-xl transition-colors"
                >
                  📞 {loc.phone}
                </a>
                <button
                  type="button"
                  onClick={() => setBookingCampus(loc)}
                  className="w-full sm:w-auto text-center text-xs font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-5 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20"
                >
                  {tr.bookTourBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Tour Booking Modal */}
      {bookingCampus && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#0D1B3E] border border-amber-500/40 max-w-xl w-full p-6 sm:p-8 rounded-3xl relative shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setBookingCampus(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#070D1E] hover:bg-red-950/60 border border-slate-700 text-slate-300 hover:text-red-300 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            {tourSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
                  ✨
                </div>
                <h3 className="text-2xl font-black text-white mb-2 font-serif">
                  {isRtl ? 'تم تأكيد موعد زيارتك بنجاح!' : 'Campus Tour Requested!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                  {isRtl
                    ? `سيتواصل معك فريق القبول والتسجيل في ${bookingCampus.nameAr} لتأكيد موعد الجولة والترتيب للقاء مدير المرحلة الأكاديمية.`
                    : `Our admissions team at ${bookingCampus.name} will contact you shortly to confirm your private guided campus walkthrough.`}
                </p>
                <button
                  type="button"
                  onClick={() => setBookingCampus(null)}
                  className="text-xs font-bold text-[#070D1E] bg-amber-400 px-6 py-2.5 rounded-xl"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-[#050A17] px-3 py-1 rounded-full border border-amber-500/30 inline-block mb-2">
                    📍 {isRtl ? bookingCampus.nameAr : bookingCampus.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                    {tourTr.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {tourTr.subtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">
                    {tourTr.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? 'مثال: سعادة محمد المنصوري' : 'e.g. Dr. Arthur Sterling'}
                    className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-amber-300 mb-1">
                      {tourTr.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-300 mb-1">
                      {tourTr.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.ae"
                      className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-amber-300 mb-1">
                      {tourTr.dateLabel}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-300 mb-1">
                      {tourTr.yearGroupLabel}
                    </label>
                    <select
                      value={formData.yearGroup}
                      onChange={(e) => setFormData({ ...formData, yearGroup: e.target.value })}
                      className="w-full bg-[#070D1E] border border-amber-500/30 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Foundation Stage">{isRtl ? 'مرحلة التأسيس (FS1 - FS2)' : 'Foundation Stage (FS1 - FS2)'}</option>
                      <option value="Primary School">{isRtl ? 'المرحلة الابتدائية (السنوات ١ - ٦)' : 'Primary School (Years 1 - 6)'}</option>
                      <option value="Secondary School">{isRtl ? 'المرحلة الثانوية (السنوات ٧ - ١١)' : 'Secondary School (Years 7 - 11)'}</option>
                      <option value="Sixth Form">{isRtl ? 'مرحلة السكث فورم (IB / A-Levels)' : 'Sixth Form (Years 12 - 13)'}</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setBookingCampus(null)}
                    className="text-xs font-semibold text-slate-300 hover:text-white px-4 py-2.5 rounded-xl"
                  >
                    {tourTr.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="text-xs font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20"
                  >
                    {tourTr.confirmBtn}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
