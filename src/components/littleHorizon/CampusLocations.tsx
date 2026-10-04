'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA, CampusLocation } from '@/data/littleHorizonData';

export const CampusLocations: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].campuses;
  const tourTr = LH_TRANSLATIONS[lang].tourModal;

  const [bookingCampus, setBookingCampus] = useState<CampusLocation | null>(null);
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (09:00 AM)',
    childAge: '2 Years'
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
        childAge: '2 Years'
      });
    }, 3000);
  };

  return (
    <section id="campuses" className="py-24 bg-[#0A120D] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            🏛️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 3 Flagship Campus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LITTLE_HORIZON_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#132219]/80 rounded-3xl border border-emerald-800/40 hover:border-amber-400/50 hover:bg-[#1A2F22] transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Campus Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132219] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold text-amber-400 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40">
                    📍 {isRtl ? loc.cityAr : loc.city} • {isRtl ? loc.districtAr : loc.district}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {isRtl ? loc.nameAr : loc.name}
                  </h3>
                  <p className="text-xs text-emerald-300/80 mb-6 flex items-start gap-1.5">
                    <span>🏢</span>
                    <span>{isRtl ? loc.addressAr : loc.address}</span>
                  </p>

                  {/* Campus Amenities */}
                  <div className="space-y-2.5 mb-6">
                    {loc.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-emerald-100">
                        <span className="text-amber-400 font-bold mt-0.5">✓</span>
                        <span>{isRtl ? feat.ar : feat.en}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operating Hours */}
                  <div className="text-[11px] text-emerald-300/90 font-medium bg-[#0A120D] p-3 rounded-xl border border-emerald-800/40 mb-2">
                    ⏰ {isRtl ? loc.operatingHours.ar : loc.operatingHours.en}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-emerald-800/30 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${loc.phone}`}
                  className="w-full sm:w-auto flex-1 text-center text-xs font-mono text-emerald-200 border border-emerald-700/50 hover:bg-[#0A120D] py-2.5 rounded-xl transition-colors"
                >
                  📞 {loc.phone}
                </a>
                <button
                  type="button"
                  onClick={() => setBookingCampus(loc)}
                  className="w-full sm:w-auto text-center text-xs font-extrabold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20"
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
          <div className="bg-[#0E1B13] border border-amber-400/50 max-w-xl w-full p-6 sm:p-8 rounded-3xl relative shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setBookingCampus(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#1A2F22] hover:bg-red-950/60 border border-emerald-700/40 text-emerald-200 hover:text-red-300 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            {tourSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
                  ✨
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {isRtl ? 'تم تأكيد موعد جولتك بنجاح!' : 'Campus Tour Requested!'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-md mx-auto mb-6">
                  {isRtl
                    ? `سيتواصل معك فريق الاستقبال في ${bookingCampus.nameAr} لتأكيد موعد زيارتك وترتيب جولة الاستكشاف الخاصة بطفلك.`
                    : `Our admissions team at ${bookingCampus.name} will contact you shortly to confirm your private guided campus walkthrough.`}
                </p>
                <button
                  type="button"
                  onClick={() => setBookingCampus(null)}
                  className="text-xs font-bold text-[#0A120D] bg-amber-400 px-6 py-2.5 rounded-xl"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/40 inline-block mb-2">
                    📍 {isRtl ? bookingCampus.nameAr : bookingCampus.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {tourTr.title}
                  </h3>
                  <p className="text-xs text-emerald-300/80 mt-1">
                    {tourTr.subtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-300 mb-1">
                    {tourTr.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? 'مثال: فاطمة المرزوقي' : 'e.g. Sarah Jenkins'}
                    className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-emerald-300 mb-1">
                      {tourTr.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-300 mb-1">
                      {tourTr.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.ae"
                      className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-emerald-300 mb-1">
                      {tourTr.dateLabel}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-300 mb-1">
                      {tourTr.timeLabel}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Morning (09:00 AM)">{isRtl ? 'صباحاً (٠٩:٠٠ ص)' : 'Morning (09:00 AM)'}</option>
                      <option value="Midday (11:00 AM)">{isRtl ? 'ظهراً (١١:٠٠ ص)' : 'Midday (11:00 AM)'}</option>
                      <option value="Afternoon (02:00 PM)">{isRtl ? 'مساءً (٠٢:٠٠ م)' : 'Afternoon (02:00 PM)'}</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-emerald-800/40">
                  <button
                    type="button"
                    onClick={() => setBookingCampus(null)}
                    className="text-xs font-semibold text-emerald-300 hover:text-white px-4 py-2.5 rounded-xl"
                  >
                    {tourTr.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="text-xs font-extrabold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20"
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
