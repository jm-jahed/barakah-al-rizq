'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, Wrench } from 'lucide-react';
import { AUTOVANTA_BRAND } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useAutovantaLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    makeModelYear: '',
    branch: 'Dubai — Al Quoz Industrial 3',
    serviceNeeded: 'Minor Servicing',
    preferredDate: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AUTOVANTA Service Desk, I would like to book a service appointment:\n` +
    `Name: ${formData.name || 'Customer'}\n` +
    `Vehicle: ${formData.makeModelYear}\n` +
    `Service: ${formData.serviceNeeded}\n` +
    `Branch: ${formData.branch}\n` +
    `Phone: ${formData.phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#181A1D] border border-orange-500/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF5722] flex items-center justify-center">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                {t('brandSubtitle')}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">{t('modalTitle')}</h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              {t('modalSubtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalFullName')}</label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ar' ? 'مثال: يوسف البلوشي' : 'e.g. Yusuf Al Balushi'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalPhone')}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalCarMake')}</label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ar' ? 'مثال: تويوتا لاندكروزر ٢٠٢٢' : 'e.g. 2022 Toyota Land Cruiser'}
                    value={formData.makeModelYear}
                    onChange={(e) => setFormData({ ...formData, makeModelYear: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalBranch')}</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#121315] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="Dubai — Al Quoz Industrial 3">{t('modalBranchDubai')}</option>
                    <option value="Sharjah — Industrial Area 12">{t('modalBranchSharjah')}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalServiceType')}</label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#121315] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="Minor Servicing">{language === 'ar' ? 'صيانة دورية بسيطة (زيت وفلتر)' : 'Minor Servicing (Oil + Check)'}</option>
                    <option value="Major Servicing">{language === 'ar' ? 'صيانة كبرى شاملة' : 'Major Servicing & Spark Plugs'}</option>
                    <option value="Brake Replacement">{language === 'ar' ? 'صيانة وتبديل الفرامل والهوبات' : 'Brake Replacement / Rotors'}</option>
                    <option value="AC Repair">{language === 'ar' ? 'صيانة التكييف وشحن الغاز' : 'AC Repair & Gas Flush'}</option>
                    <option value="Computer Diagnostics">{language === 'ar' ? 'فحص كمبيوتر وكشف لمبة المحرك' : 'Check Engine Diagnostics'}</option>
                    <option value="Pre-Purchase Inspection">{language === 'ar' ? 'فحص قبل الشراء (PPI)' : 'Pre-Purchase Inspection'}</option>
                    <option value="Fleet Servicing">{language === 'ar' ? 'استفسار صيانة أسطول تجاري' : 'Fleet Contract Inquiry'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalDate')}</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#FF5722]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>{t('modalSubmit')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-gray-400 block mb-2 font-light">
                  {language === 'ar' ? 'هل تفضل الحجز المباشر عبر واتساب؟' : 'Prefer instant answers?'}
                </span>
                <a
                  href={`${AUTOVANTA_BRAND.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('modalSendWhatsapp')}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t('modalSuccessTitle')}</h3>
            <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">
              {t('modalSuccessDesc')}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${AUTOVANTA_BRAND.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('modalSendWhatsapp')}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20 transition-all"
              >
                {t('modalClose')}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};