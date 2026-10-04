'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, Home } from 'lucide-react';
import { STAYORA_BRAND } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useStayoraLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Apartment',
    community: 'Dubai Marina',
    currentlyRented: 'No',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello STAYORA Team, I would like to request an income forecast for my property:\n` +
    `Name: ${formData.name || 'Owner'}\n` +
    `Location: ${formData.community}\n` +
    `Type: ${formData.propertyType}\n` +
    `Phone: ${formData.phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#133C3E] border border-amber-500/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden"
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
              <div className="w-8 h-8 rounded-lg bg-[#C85A32] flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                {t('brandSubtitle')}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">
              {t('modalTitle')}
            </h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              {t('modalSubtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">
                    {t('modalFullName')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ar' ? 'مثال: محمد الشامسي' : 'e.g. Lena Novak'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">
                    {t('modalEmail')}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="owner@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">
                    {t('modalPhone')}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">
                    {language === 'ar' ? 'نوع العقار' : 'Property Type'}
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#133C3E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value="Apartment">{language === 'ar' ? 'شقة سكنية' : 'Apartment / Condo'}</option>
                    <option value="Villa">{language === 'ar' ? 'فيلا مستقلة' : 'Villa / Townhouse'}</option>
                    <option value="Penthouse">{language === 'ar' ? 'بنتهاوس فاخر' : 'Luxury Penthouse'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">
                  {t('modalCommunity')}
                </label>
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'مثال: دبي مارينا، برج مارينا كراون، غرفتين' : 'e.g. Dubai Marina, Marina Crown 2BR'}
                  value={formData.community}
                  onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E07A5F] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>{t('modalSubmit')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-gray-400 block mb-2 font-light">
                  {language === 'ar' ? 'هل تفضل المحادثة السريعة والمباشرة؟' : 'Prefer instant answers?'}
                </span>
                <a
                  href={`${STAYORA_BRAND.whatsapp}?text=${whatsappMessage}`}
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
            <h3 className="text-2xl font-bold text-white">
              {t('modalSuccessTitle')}
            </h3>
            <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">
              {t('modalSuccessDesc')}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${STAYORA_BRAND.whatsapp}?text=${whatsappMessage}`}
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