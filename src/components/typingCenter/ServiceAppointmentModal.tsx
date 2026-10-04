'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Building2, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  User, 
  Mail, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language, TYPING_SERVICES_DATA } from '@/data/typingCenterData';

interface ServiceAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedServiceId?: string;
}

export default function ServiceAppointmentModal({
  isOpen,
  onClose,
  lang,
  preselectedServiceId
}: ServiceAppointmentModalProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [serviceId, setServiceId] = useState<string>(preselectedServiceId || 'eid-renewal');
  const [emirate, setEmirate] = useState<string>('Dubai');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM - 12:00 PM');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const activeService = TYPING_SERVICES_DATA.find((s) => s.id === serviceId) || TYPING_SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    const sName = isAr ? activeService.nameAr : activeService.nameEn;
    const msg = `Hello Sanad Government Services, I booked an appointment/application for *${sName}* in *${emirate}*. Name: ${fullName}, Phone: ${phone}, Date: ${date} (${timeSlot}). Notes: ${notes || 'None'}.`;
    window.open(`https://wa.me/971507719900?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#072617] border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{isAr ? 'حجز موعد / تقديم معاملة رسمية' : 'OFFICIAL SERVICE & APPOINTMENT REQUEST'}</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {isAr ? 'تقديم طلب الخدمة وحجز موعد المركز' : 'Submit Application & Book Service'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {isAr
                  ? 'اختر المعاملة وسيقوم فريقنا بتدقيق المستندات وتأكيد الموعد عبر الواتساب والاتصال.'
                  : 'Select your transaction and our government services desk will review requirements and confirm your filing.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Select */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                  {isAr ? 'المعاملة المطلوبة:' : 'Target Service:'}
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  {TYPING_SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-[#072617] text-white">
                      {isAr ? srv.nameAr : srv.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Emirate & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'الإمارة:' : 'Emirate:'}
                  </label>
                  <select
                    value={emirate}
                    onChange={(e) => setEmirate(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'].map((em) => (
                      <option key={em} value={em} className="bg-[#072617] text-white">{em}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'الفترة الزمنية المفضلة:' : 'Time Slot:'}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="08:00 AM - 10:00 AM" className="bg-[#072617] text-white">Morning: 08:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 01:00 PM" className="bg-[#072617] text-white">Midday: 10:00 AM - 01:00 PM</option>
                    <option value="02:00 PM - 05:00 PM" className="bg-[#072617] text-white">Afternoon: 02:00 PM - 05:00 PM</option>
                    <option value="05:00 PM - 08:00 PM" className="bg-[#072617] text-white">Evening: 05:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'الاسم الكامل:' : 'Full Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isAr ? 'أدخل اسمك كما في الجواز' : 'Enter name as per passport'}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'رقم الهاتف / الواتساب:' : 'UAE Mobile (+971):'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'البريد الإلكتروني:' : 'Email Address:'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                    {isAr ? 'التاريخ المفضل:' : 'Preferred Date:'}
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                  {isAr ? 'ملاحظات أو تفاصيل إضافية:' : 'Additional Notes / Questions:'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isAr ? 'مثال: أحتاج مساراً سريعاً أو تعديل وضع داخل الدولة...' : 'e.g. Need inside-country status change, VIP biometric booking...'}
                  className="w-full p-3 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'تأكيد إرسال الطلب وحجز الموعد' : 'Confirm Service Booking'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                {isAr
                  ? 'هذا طلب خدمة. يتم تأكيد المواعيد النهائية حسب التوفر وجاهزية المستندات المطلوبة.'
                  : 'This is a service request. Appointment confirmation is subject to centre availability and verified document readiness.'}
              </p>
            </form>

          </div>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                {isAr ? 'تم استلام طلبك بنجاح' : 'SERVICE REQUEST LOGGED'}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {isAr ? 'شكراً لك، سيتواصل معك فريقنا فوراً' : 'Thank You, Application Received'}
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                {isAr
                  ? `تم تسجيل طلبك لمعاملة [${activeService.nameAr}] في إمارة [${emirate}]. المرجع: SANAD-${Math.floor(10000 + Math.random() * 90000)}.`
                  : `Your request for [${activeService.nameEn}] in [${emirate}] has been registered with reference SANAD-${Math.floor(10000 + Math.random() * 90000)}.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'إرسال التفاصيل مباشرة للواتساب' : 'Dispatch Directly to WhatsApp'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 hover:text-white text-xs font-bold"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
