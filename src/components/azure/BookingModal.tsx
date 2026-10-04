'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, Anchor, Calendar, Users, Clock } from 'lucide-react';
import { AZURE_BRAND, AZURE_YACHTS } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedYachtId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedYachtId }) => {
  const [submitted, setSubmitted] = useState(false);
  const { language, t, toArabicDigits } = useAzureLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    yachtId: selectedYachtId || 'azure-52',
    occasion: 'Sunset Cruise',
    guestCount: '15',
    duration: '3',
    preferredDate: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedYachtId) {
      setFormData(prev => ({ ...prev, yachtId: selectedYachtId }));
    }
  }, [selectedYachtId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedYachtObj = AZURE_YACHTS.find(y => y.id === formData.yachtId) || AZURE_YACHTS[0];

  const whatsappMessage = encodeURIComponent(
    `Hello AZURE YACHTS, I would like to check availability for ${selectedYachtObj.name} (${formData.occasion}) for ${formData.guestCount} guests on ${formData.preferredDate || 'upcoming weekend'}. My name is ${formData.name}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#0B1A2F] border border-amber-500/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans max-h-[95vh] overflow-y-auto"
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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black">
                <Anchor className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                {language === 'ar' ? 'مكتب حجوزات أزور لليخوت' : 'AZURE YACHTS RESERVATION DESK'}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-1 font-sans">{t('modalTitle')}</h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              {t('modalSubtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalNameLabel')}</label>
                  <input
                    type="text"
                    required
                    placeholder={t('modalNamePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalPhoneLabel')}</label>
                  <input
                    type="tel"
                    required
                    placeholder={t('modalPhonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Yacht Picker */}
              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalYachtSelectLabel')}</label>
                <select
                  value={formData.yachtId}
                  onChange={(e) => setFormData({ ...formData, yachtId: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                >
                  {AZURE_YACHTS.map((yacht) => (
                    <option key={yacht.id} value={yacht.id} className="bg-[#0B1A2F]">
                      {language === 'ar' ? yacht.nameAr : yacht.name} ({yacht.lengthFt} FT • Max {yacht.guestCapacity} Guests)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalOccasionLabel')}</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  >
                    <option value="Sunset Cruise" className="bg-[#0B1A2F]">{language === 'ar' ? 'جولة الغروب وأفق دبي' : 'Sunset Skyline Cruise'}</option>
                    <option value="Birthday Party" className="bg-[#0B1A2F]">{language === 'ar' ? 'أعياد الميلاد وحفلات خاصة' : 'Birthday & Private Party'}</option>
                    <option value="Corporate Event" className="bg-[#0B1A2F]">{language === 'ar' ? 'فعالية أو اجتماع شركات' : 'Corporate Product Launch'}</option>
                    <option value="Deep Sea Fishing" className="bg-[#0B1A2F]">{language === 'ar' ? 'رحلة صيد أعماق' : 'Deep Sea Fishing Trip'}</option>
                    <option value="Multi-Day Voyage" className="bg-[#0B1A2F]">{language === 'ar' ? 'رحلة جزر لعدة أيام' : 'Multi-Day GCC Voyage'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalDateLabel')}</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalGuestsLabel')}</label>
                  <input
                    type="number"
                    min="2"
                    max="75"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalDurationLabel')}</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  >
                    <option value="2" className="bg-[#0B1A2F]">{language === 'ar' ? `${toArabicDigits(2)} ساعات` : '2 Hours'}</option>
                    <option value="3" className="bg-[#0B1A2F]">{language === 'ar' ? `${toArabicDigits(3)} ساعات` : '3 Hours'}</option>
                    <option value="4" className="bg-[#0B1A2F]">{language === 'ar' ? `${toArabicDigits(4)} ساعات` : '4 Hours'}</option>
                    <option value="6" className="bg-[#0B1A2F]">{language === 'ar' ? `${toArabicDigits(6)} ساعات` : '6 Hours'}</option>
                    <option value="8" className="bg-[#0B1A2F]">{language === 'ar' ? `يوم كامل (${toArabicDigits(8)} ساعات)` : 'Full Day (8 Hours)'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalNotesLabel')}</label>
                <textarea
                  rows={2}
                  placeholder={t('modalNotesPlaceholder')}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#06101E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>{t('modalSubmitBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-gray-400 block mb-2 font-light">{t('modalNeedImmediate')}</span>
                <a
                  href={`https://wa.me/971509988112?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('modalWhatsappDirect')}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">{t('modalSuccessTitle')}</h3>
            <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">
              {t('modalSuccessDesc')}
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/971509988112?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('modalWhatsappDirect')}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20 transition-all"
              >
                {t('modalCloseBtn')}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};