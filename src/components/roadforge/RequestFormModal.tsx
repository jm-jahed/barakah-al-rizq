'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, Phone, ArrowRight, Truck } from 'lucide-react';
import { ROADFORGE_BRAND } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface RequestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIssue?: string | null;
}

export const RequestFormModal: React.FC<RequestFormModalProps> = ({ isOpen, onClose, initialIssue }) => {
  const { language, t } = useRoadforgeLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    issueType: 'Towing / Flatbed Recovery',
    message: ''
  });

  useEffect(() => {
    if (initialIssue) {
      setFormData(prev => ({ ...prev, issueType: initialIssue }));
    }
  }, [initialIssue]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `EMERGENCY ROAD RECOVERY REQUEST:\n` +
    `Name: ${formData.name || 'Driver'}\n` +
    `Location: ${formData.location}\n` +
    `Issue: ${formData.issueType}\n` +
    `Phone: ${formData.phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#162032] border border-amber-500/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans"
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
              <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
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
                    placeholder={language === 'ar' ? 'مثال: حسن الكعبي' : 'e.g. Hassan Al Kaabi'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
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
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalLocation')}</label>
                <input
                  type="text"
                  required
                  placeholder={language === 'ar' ? 'مثال: شارع الشيخ زايد مخرج ٣٩ باتجاه أبوظبي' : 'e.g. E11 Sheikh Zayed Road near Exit 39 / Dubai Marina'}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">{t('modalServiceType')}</label>
                <select
                  value={formData.issueType}
                  onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#0B132B] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value="Towing / Flatbed Recovery">{language === 'ar' ? 'سحب السيارة / سطحة هيدروليكية' : 'Vehicle Towing / Flatbed'}</option>
                  <option value="Battery Jumpstart">{language === 'ar' ? 'اشتراك بطارية / تبديل في الموقع' : 'Battery Jumpstart / On-site Replace'}</option>
                  <option value="Flat Tyre Assistance">{language === 'ar' ? 'تبديل إطار مثقوب' : 'Flat Tyre Change'}</option>
                  <option value="Fuel Delivery">{language === 'ar' ? 'توصيل وقود طارئ (بنزين/ديزل)' : 'Emergency Fuel Delivery'}</option>
                  <option value="Lockout Unlocking">{language === 'ar' ? 'فتح باب السيارة المقفل' : 'Key Lockout Assistance'}</option>
                  <option value="Accident Recovery">{language === 'ar' ? 'ونش حوادث وسحب رمال' : 'Accident Winching & Recovery'}</option>
                  <option value="Fleet Partnership Inquiry">{language === 'ar' ? 'عقد صيانة وإنقاذ أساطيل' : 'Fleet / Insurance Contract Inquiry'}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#DC2626] hover:bg-[#b91c1c] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>{t('modalSubmit')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <div className="pt-3 text-center space-y-2">
                <a
                  href={`tel:${ROADFORGE_BRAND.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-extrabold text-amber-400 hover:underline"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-yellow-300" />
                  <span>Call 24/7 Hotline: {ROADFORGE_BRAND.phone}</span>
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
                href={`${ROADFORGE_BRAND.whatsapp}?text=${whatsappMessage}`}
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