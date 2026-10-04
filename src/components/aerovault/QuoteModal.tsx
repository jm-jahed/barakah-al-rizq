'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import { AEROVAULT_BRAND } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJetId?: string | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, selectedJetId }) => {
  const { lang, isRtl } = useAerovaultLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    origin: 'Dubai (DWC ExecuJet FBO)',
    destination: 'London Stansted (STN)',
    passengers: '8',
    preferredDate: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedJetId) {
      setFormData(prev => ({
        ...prev,
        notes: `Inquiry for: ${selectedJetId}`
      }));
    }
  }, [selectedJetId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AEROVAULT Desk,\n\nI would like to request a private charter flight quote:\n• Name: ${formData.name || 'VIP Client'}\n• Route: ${formData.origin} ➔ ${formData.destination}\n• Passengers: ${formData.passengers}\n• Details: ${formData.notes || 'N/A'}`
  );

  const whatsappUrl = `https://wa.me/971502998811?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#0D1118] border border-[#E5C378]/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#E5C378] flex items-center justify-center text-black">
                <Plane className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest">
                {lang === 'ar' ? 'مكتب عمليات الطيران الخاص' : 'AEROVAULT CHARTER DESK'}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 font-sans text-white">
              {lang === 'ar' ? 'طلب تسعيرة طيران خاصة' : 'Request Flight Quote'}
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              {lang === 'ar'
                ? 'يرجى تقديم تفاصيل الرحلة لتأكيد توفر الطائرة والأسعار الشاملة خلال ١٥ دقيقة.'
                : 'Submit your private flight details below for 90-minute guaranteed aircraft availability and pricing.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {lang === 'ar' ? 'الاسم الكامل / اللقب *' : 'Your Name / Title *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'مثال: سلطان القاسمي' : 'e.g. Sultan Al Qassimi'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {lang === 'ar' ? 'رقم الهاتف / واتساب *' : 'UAE Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {lang === 'ar' ? 'مطار المغادرة (FBO)' : 'Origin FBO Airport'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {lang === 'ar' ? 'مطار الوصول' : 'Destination Airport'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-300 mb-1">
                  {lang === 'ar' ? 'عدد الركاب وأي طلبات ضيافة خاصة' : 'Passenger Count & Catering Requests'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'ar' ? 'مثال: ٨ ركاب، كافيار وضيافة خاصة، سفر حيوان أليف، موعد الإقلاع ٢٠ أكتوبر' : 'e.g. 8 passengers, caviar & champagne, pet in cabin, departure Oct 20.'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>{lang === 'ar' ? 'إرسال طلب التسعيرة الفورية' : 'REQUEST IMMEDIATE FLIGHT QUOTE'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-slate-400 block mb-2 font-light">
                  {lang === 'ar' ? 'هل تحتاج إقلاعاً طارئاً خلال ٩٠ دقيقة؟' : 'Urgent 90-minute dispatch required?'}
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'محادثة مسؤول العمليات عبر واتساب مباشرة' : 'WhatsApp VIP Charter Broker Directly'}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">
              {lang === 'ar' ? 'تم استلام طلب التسعيرة بنجاح!' : 'Flight Quote Request Received!'}
            </h3>
            <p className="text-sm text-slate-300 font-light max-w-sm mx-auto">
              {lang === 'ar'
                ? 'شكراً لتواصلك. سيقوم مسؤول عمليات إيروفولت بصالة إكسيكوجيت DWC بالتحقق من تموضع الطائرات والتواصل معك خلال ١٥ دقيقة.'
                : 'Thank you. Our ExecuJet DWC flight broker will check aircraft positioning and contact your phone with confirmed pricing within 15 minutes.'}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20 transition-all"
              >
                {lang === 'ar' ? 'إغلاق النافذة' : 'CLOSE WINDOW'}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};