import React, { useState, useMemo } from 'react';
import { X, CheckCircle2, MessageSquare, Crown } from 'lucide-react';
import { RestaurantDish } from '@/data/restaurantCatalogData';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface TableReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDish?: RestaurantDish | null;
  customQuote?: any;
}

export const TableReservationDrawer: React.FC<TableReservationDrawerProps> = ({
  isOpen,
  onClose,
  selectedDish,
  customQuote
}) => {
  const { t, translateDish, formatPrice, toArabicDigits, isRtl, language } = useRestaurantLanguage();

  const venueLocations = useMemo(() => [
    { id: 'difc', name: isRtl ? 'مركز دبي المالي قرية البوابة ٠٨ — قاعة التذوق الرئيسية والقبو' : 'DIFC Gate Village 08 — Main Gastronomy Room & Cellar' },
    { id: 'palm', name: isRtl ? 'هلال نخلة جميرا — الشرفة البحرية والمجلس الملكي' : 'Palm Jumeirah Crescent — Sea Terrace & Majlis' },
    { id: 'downtown', name: isRtl ? 'منطقة الأوبرا وسط مدينة دبي — إطلالة الطابق ٥٤' : 'Downtown Opera District — 54th Floor Skyview' }
  ], [isRtl]);

  const timeSlots = useMemo(() => isRtl ? [
    '١٢:٣٠ ظهراً (غداء تنفيذي)',
    '٠١:٣٠ ظهراً (مأدبة التراث)',
    '٠٧:٠٠ مساءً (جلسة الغروب الأولى)',
    '٠٨:٣٠ مساءً (جلسة التذوق الكبرى)',
    '١٠:٠٠ مساءً (الضيافة الملكية الفاخرة)',
    '١١:٣٠ ليلاً (جلسة الأوماكاسي المسائية)'
  ] : [
    '12:30 PM (Executive Lunch)',
    '01:30 PM (Heritage Luncheon)',
    '07:00 PM (First Sunset Seating)',
    '08:30 PM (Grand Gastronomy Seating)',
    '10:00 PM (Royal Degustation)',
    '11:30 PM (Late Night Omakase)'
  ], [isRtl]);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState(isRtl ? '٠٠٠٠ ٠٠٠ ٥٠ ٩٧١+' : '+971 50 ');
  const [email, setEmail] = useState('');
  const [guestCount, setGuestCount] = useState(customQuote?.guestCount || 2);
  const [selectedLocation, setSelectedLocation] = useState(venueLocations[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState(timeSlots[2]);
  const [specialRequests, setSpecialRequests] = useState(
    selectedDish ? `${isRtl ? 'طلب مسبق للطبق:' : 'Pre-order requirement:'} ${translateDish(selectedDish).title}` : customQuote ? `${isRtl ? 'مأدبة الصالون الخاص:' : 'Private Salon Banquet:'} ${customQuote.tier}` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef] = useState(() => Math.floor(100000 + Math.random() * 900000));

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const localizedDish = selectedDish ? translateDish(selectedDish) : null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className={`fixed inset-y-0 ${isRtl ? 'left-0 pr-10' : 'right-0 pl-10'} max-w-full flex`}>
        <div className={`w-screen max-w-md bg-zinc-950 ${isRtl ? 'border-r' : 'border-l'} border-amber-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl`}>
          
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  {t('reservation_drawer_title')}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                
                {/* Pre-selected context box */}
                {localizedDish && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                    <div className="text-[10px] uppercase font-mono text-amber-400 font-semibold">{t('priority_tasting_dish')}</div>
                    <div className="font-serif font-bold text-zinc-200">{localizedDish.title}</div>
                    <div className="text-amber-300 font-mono mt-0.5">{formatPrice(selectedDish!.priceAED)}</div>
                  </div>
                )}

                {customQuote && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                    <div className="text-[10px] uppercase font-mono text-amber-400 font-semibold">{t('private_salon_banquet')}</div>
                    <div className="font-serif font-bold text-zinc-200">{customQuote.venue} ({toArabicDigits(customQuote.guestCount)} {t('guests')})</div>
                    <div className="text-amber-300 font-mono mt-0.5">{t('total_estimate')}: {formatPrice(customQuote.grandTotalAED)}</div>
                  </div>
                )}

                {/* Location Selection */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                    {t('dining_salon_location')}
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                  >
                    {venueLocations.map(loc => (
                      <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      {t('date_label')}
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      {t('guest_count_label')}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                    {t('seating_window_label')}
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                  >
                    {timeSlots.map(tSlot => (
                      <option key={tSlot} value={tSlot}>{tSlot}</option>
                    ))}
                  </select>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 pt-2 border-t border-zinc-900">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      {t('guest_name_label')}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isRtl ? 'مثال: سمو الشيخ منصور / د. يعقوب الفلاسي' : 'e.g. H.E. Sheikh Mansoor / Dr. James Vance'}
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      {t('phone_label')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={isRtl ? '٠٠٠٠ ٠٠٠ ٥٠ ٩٧١+' : '+971 50 000 0000'}
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      {t('email_label')}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="concierge@domain.ae"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      {t('notes_label')}
                    </label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder={isRtl ? 'حساسية من المأكولات البحرية، موقف خاص لكبار الشخصيات...' : 'Strict shellfish allergy, private VIP parking required...'}
                      className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2"
                >
                  <Crown className="w-4 h-4" />
                  <span>{t('submit_booking_btn')}</span>
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="mt-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-serif font-bold text-zinc-100">
                  {t('reservation_transmitted')}
                </h4>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {isRtl ? (
                    <>شكراً لك، <span className="font-semibold text-amber-300">{fullName}</span>. تم تسجيل طلب حجزك لعدد <span className="font-semibold text-amber-300">{toArabicDigits(guestCount)} ضيوف</span> بتاريخ <span className="font-semibold text-amber-300">{toArabicDigits(selectedDate)}</span> لدى كبير مضيفي القصر.</>
                  ) : (
                    <>Thank you, <span className="font-semibold text-amber-300">{fullName}</span>. Your reservation request for <span className="font-semibold text-amber-300">{guestCount} Guests</span> on <span className="font-semibold text-amber-300">{selectedDate}</span> has been registered with our Head Maître d'.</>
                  )}
                </p>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-left space-y-1.5 font-mono text-zinc-300">
                  <div className="text-[10px] text-amber-400 uppercase">{t('booking_ref_label')}: #AS-{toArabicDigits(bookingRef)}</div>
                  <div>{t('window_label')}: {selectedTime}</div>
                  <div>{t('location_label')}: {selectedLocation.toUpperCase()}</div>
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href={`https://wa.me/971508889999?text=${encodeURIComponent(isRtl ? `مرحباً كونسيرج السلطان، قمت بتقديم حجز VIP باسم ${fullName} لعدد ${toArabicDigits(guestCount)} ضيوف بتاريخ ${toArabicDigits(selectedDate)}.` : `Hello Al Sultan Concierge, I have submitted a VIP reservation for ${fullName} for ${guestCount} guests on ${selectedDate}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('whatsapp_verify')}</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 text-xs text-zinc-400 hover:text-white"
                  >
                    {t('close_window')}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guarantee Footer */}
          <div className="pt-6 border-t border-zinc-900 text-center text-[10px] text-zinc-500">
            {t('valet_guarantee')}
          </div>

        </div>
      </div>
    </div>
  );
};
