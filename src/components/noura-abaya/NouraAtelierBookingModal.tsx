'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  Award,
  Copy,
  Check,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Crown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NOURA_BRAND } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface NouraAtelierBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NouraAtelierBookingModal: React.FC<NouraAtelierBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t, isRtl } = useNouraLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState(isRtl ? 'غداً (فترة بعد الظهر)' : 'Tomorrow (Afternoon)');
  const [preferredSuite, setPreferredSuite] = useState(isRtl ? 'جناح الأعراس والمناسبات الكبرى' : 'Private Bridal & Gala Suite');
  const [partySize, setPartySize] = useState(isRtl ? '١ – ٢ ضيوف' : '1 – 2 Guests');
  const [isGenerated, setIsGenerated] = useState(false);
  const [vipToken, setVipToken] = useState('');
  const [copiedToken, setCopiedToken] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg(isRtl ? 'يرجى إدخال الاسم الكريم.' : 'Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg(isRtl ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg(isRtl ? 'يرجى إدخال رقم الهاتف / واتساب.' : 'Please enter your phone / WhatsApp number.');
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const token = `NRA-VIP-${randomNum}`;
    setVipToken(token);
    setIsGenerated(true);
    setErrorMsg('');

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#D4AF37', '#ffffff', '#e5e5e5']
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleCopyToken = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(vipToken);
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#121212] border border-stone-800 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 hover:text-white transition-all z-10"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isGenerated ? (
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 mb-3">
                  <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
                  {isRtl ? 'حجز موعد خاص في أتيليه دبي' : 'PRIVATE VIP ATELIER APPOINTMENT'}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#FAFAFA] tracking-tight">
                  {t('bookingTitle')}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-stone-300 mt-2 leading-relaxed">
                  {t('bookingSubtitle')}
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono mb-4">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleBook} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">
                      {isRtl ? 'الاسم الكريم *' : 'FULL NAME *'}
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isRtl ? 'الشيخة فاطمة القاسمي' : 'Sheikha Fatima Al Qasimi'}
                      className="w-full p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">
                      {isRtl ? 'البريد الإلكتروني *' : 'EMAIL ADDRESS *'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="fatima@emirates.ae"
                      className="w-full p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">
                      {isRtl ? 'رقم الهاتف / واتساب *' : 'PHONE / WHATSAPP *'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 888 9900"
                      dir="ltr"
                      className="w-full p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">
                      {isRtl ? 'جناح الاستقبال والتجربة' : 'STYLING SUITE'}
                    </label>
                    <select
                      value={preferredSuite}
                      onChange={(e) => setPreferredSuite(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-[#C5A059] font-bold"
                    >
                      <option value={isRtl ? 'جناح الأعراس والمناسبات الكبرى' : 'Private Bridal & Gala Suite'}>
                        {isRtl ? 'جناح الأعراس والمناسبات الكبرى' : 'Private Bridal & Gala Suite'}
                      </option>
                      <option value={isRtl ? 'جناح العبايات اليومية والعملية' : 'Executive Modest Capsule Suite'}>
                        {isRtl ? 'جناح العبايات اليومية والعملية' : 'Executive Modest Capsule Suite'}
                      </option>
                      <option value={isRtl ? 'صالون تشكيلات رمضان والأعياد' : 'Eid & Ramadan Haute Salon'}>
                        {isRtl ? 'صالون تشكيلات رمضان والأعياد' : 'Eid & Ramadan Haute Salon'}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">
                      {isRtl ? 'الموعد المفضل' : 'PREFERRED TIMING'}
                    </label>
                    <select
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white"
                    >
                      <option value={isRtl ? 'اليوم (الفترة المسائية 5:00 م – 8:00 م)' : 'Today (Evening 5:00 PM – 8:00 PM)'}>
                        {isRtl ? 'اليوم (الفترة المسائية 5:00 م – 8:00 م)' : 'Today (Evening 5:00 PM – 8:00 PM)'}
                      </option>
                      <option value={isRtl ? 'غداً (الفترة الصباحية 10:00 ص – 1:00 م)' : 'Tomorrow (Morning 10:00 AM – 1:00 PM)'}>
                        {isRtl ? 'غداً (الفترة الصباحية 10:00 ص – 1:00 م)' : 'Tomorrow (Morning 10:00 AM – 1:00 PM)'}
                      </option>
                      <option value={isRtl ? 'غداً (فترة بعد الظهر 2:00 م – 6:00 م)' : 'Tomorrow (Afternoon 2:00 PM – 6:00 PM)'}>
                        {isRtl ? 'غداً (فترة بعد الظهر 2:00 م – 6:00 م)' : 'Tomorrow (Afternoon 2:00 PM – 6:00 PM)'}
                      </option>
                      <option value={isRtl ? 'عطلة نهاية الأسبوع (موعد VIP خاص)' : 'Weekend Special VIP Slot'}>
                        {isRtl ? 'عطلة نهاية الأسبوع (موعد VIP خاص)' : 'Weekend Special VIP Slot'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">
                      {isRtl ? 'عدد الضيوف المرافقين' : 'PARTY SIZE'}
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white"
                    >
                      <option value={isRtl ? 'ضيفة واحدة (جلسة فردية خاصة)' : '1 Guest (Solo Private Styling)'}>
                        {isRtl ? 'ضيفة واحدة (جلسة فردية خاصة)' : '1 Guest (Solo Private Styling)'}
                      </option>
                      <option value={isRtl ? '١ – ٢ ضيوف (مع مرافقة)' : '1 – 2 Guests (With Companion)'}>
                        {isRtl ? '١ – ٢ ضيوف (مع مرافقة)' : '1 – 2 Guests (With Companion)'}
                      </option>
                      <option value={isRtl ? '٣ – ٤ ضيوف (جلسة عائلية)' : '3 – 4 Guests (Family Group Fitting)'}>
                        {isRtl ? '٣ – ٤ ضيوف (جلسة عائلية)' : '3 – 4 Guests (Family Group Fitting)'}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-[10px] text-stone-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>
                    {isRtl ? (
                      <>
                        الموقع: <strong>حي دبي للتصميم (d3)، مبنى 7، الطابق 2</strong>. خدمة صف السيارات (فاليه) مجانية عند المدخل الرئيسي.
                      </>
                    ) : (
                      <>
                        Location: <strong>Dubai Design District (d3), Building 7, Level 2</strong>. Valet parking provided at the main atrium entrance.
                      </>
                    )}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>{t('bookingSubmit')}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C5A059] to-[#1a1a1a] p-0.5 mx-auto shadow-xl shadow-[#C5A059]/20">
                <div className="w-full h-full bg-[#0A0A0A] rounded-[14px] flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#C5A059]" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-[#C5A059] font-bold block uppercase tracking-[0.2em] mb-1">
                  {isRtl ? 'تم تأكيد حجز الموعد الخاص بنجاح' : 'VIP ATELIER APPOINTMENT RESERVED'}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FAFAFA]">
                  {t('bookingSuccessTitle')}
                </h3>
                <p className="text-xs font-mono text-stone-300 mt-1">
                  {isRtl
                    ? `تم إصدار بطاقة الدخول للكريمة ${fullName} لحجز ${preferredSuite}.`
                    : `Issued to ${fullName} for ${preferredSuite}.`}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0A0A] border-2 border-[#C5A059] max-w-md mx-auto font-mono text-xs shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 bg-[#C5A059] text-black font-bold text-[9px] px-3 py-0.5 rounded-bl-lg rtl:rounded-bl-none rtl:rounded-br-lg uppercase">
                  {isRtl ? 'بطاقة دخول مؤكدة' : 'CONFIRMED VIP PASS'}
                </div>

                <span className="text-stone-400 text-[10px] uppercase block font-bold">
                  {isRtl ? 'رمز تصريح الدخول:' : 'ATELIER PASSCODE:'}
                </span>
                <span className="text-3xl font-mono font-extrabold text-[#C5A059] tracking-widest block my-2" dir="ltr">
                  {vipToken}
                </span>

                <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 text-left rtl:text-right text-[10px]">
                  <div>
                    <span className="text-stone-500 uppercase block">{isRtl ? 'الموعد' : 'TIMING'}</span>
                    <span className="text-stone-200 font-bold">{preferredDate}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase block">{isRtl ? 'عدد الضيوف' : 'PARTY SIZE'}</span>
                    <span className="text-emerald-400 font-bold">{partySize}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyToken}
                  className="w-full mt-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  {copiedToken ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{isRtl ? 'تم نسخ الرمز إلى الحافظة!' : 'Token Copied to Clipboard!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C5A059]" />
                      <span>{isRtl ? 'نسخ رمز تصريح الدخول' : 'Copy Atelier Passcode'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <a
                  href={`https://wa.me/971508889900?text=${encodeURIComponent(
                    isRtl
                      ? `مرحباً أتيليه نورة عباية دبي،\n\nلقد قمت بحجز موعد خاص في الأتيليه.\nرمز التصريح: ${vipToken}\nالاسم: ${fullName}\nالجناح: ${preferredSuite}\nالموعد: ${preferredDate}\nيرجى تجهيز غرفة القياس والاستقبال.`
                      : `Hello NOURA ABAYA Atelier Concierge,\n\nI have booked my VIP Atelier Fitting Appointment.\nPasscode: ${vipToken}\nName: ${fullName}\nSuite: ${preferredSuite}\nTime: ${preferredDate}\nPlease prepare the styling room.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'واتساب الأتيليه (+971 50)' : 'WhatsApp Concierge'}</span>
                </a>

                <button
                  onClick={onClose}
                  className="py-3.5 px-6 rounded-xl bg-[#C5A059] hover:bg-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider transition-all"
                >
                  {isRtl ? 'إغلاق ومتابعة التسوق' : 'Done'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
