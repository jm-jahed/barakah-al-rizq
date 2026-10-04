'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Plane, FileText } from 'lucide-react';
import { SKYVAULT_BRAND } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  const { lang, isRtl, t } = useSkyvaultLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    aircraftType: 'Gulfstream G650ER',
    currentBase: 'Dubai (DWC)',
    managementModule: 'Full Turnkey Aircraft Management',
    notes: ''
  });

  useEffect(() => {
    if (serviceTitle) {
      setFormData(prev => ({
        ...prev,
        managementModule: serviceTitle,
        notes: `Inquiry regarding: ${serviceTitle}`
      }));
    }
  }, [serviceTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SKYVAULT UAE Executive Desk,\n\nI would like to request a confidential aircraft management proposal:\n• Name: ${formData.name || 'Aircraft Owner'}\n• Aircraft: ${formData.aircraftType}\n• Primary Base: ${formData.currentBase}\n• Module: ${formData.managementModule}\n• Notes: ${formData.notes || 'N/A'}`
  );

  const whatsappUrl = `https://wa.me/971503889922?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#0D1118] border border-[#E5C378]/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden"
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
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest">
                {t('modal.tag')}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 font-sans text-white">
              {t('modal.title')}
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              {t('modal.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {t('modal.name')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'مثال: ممثل المكتب العائلي' : 'e.g. Family Office Representative'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {t('modal.phone')}
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
                    {t('modal.aircraft')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'مثال: جلف ستريم G650ER / جلوبال ٧٥٠٠' : 'e.g. Gulfstream G650ER / Global 7500'}
                    value={formData.aircraftType}
                    onChange={(e) => setFormData({ ...formData, aircraftType: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    {t('modal.module')}
                  </label>
                  <select
                    value={formData.managementModule}
                    onChange={(e) => setFormData({ ...formData, managementModule: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#11161F] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                  >
                    <option value="Full Turnkey Management" className="bg-[#11161F]">
                      {lang === 'ar' ? 'الإدارة التشغيلية الشاملة (Turnkey)' : 'Full Turnkey Aircraft Management'}
                    </option>
                    <option value="CAMO Airworthiness" className="bg-[#11161F]">
                      {lang === 'ar' ? 'صلاحية الطيران GCAA / EASA CAMO' : 'GCAA / EASA CAMO Airworthiness'}
                    </option>
                    <option value="Charter Revenue Offset" className="bg-[#11161F]">
                      {lang === 'ar' ? 'برنامج تعويض عوائد التأجير' : 'Charter Revenue Offset Program'}
                    </option>
                    <option value="Hangarage & Ground" className="bg-[#11161F]">
                      {lang === 'ar' ? 'الهناجر المكيفة والدعم الأرضي' : 'VIP Hangarage & Ground Support'}
                    </option>
                    <option value="Crew Staffing" className="bg-[#11161F]">
                      {lang === 'ar' ? 'توظيف وتدريب أطقم الطيران' : 'Flight Crew Recruitment & Staffing'}
                    </option>
                    <option value="Pre-Purchase Advisory" className="bg-[#11161F]">
                      {lang === 'ar' ? 'فحص واستشارات شراء الطائرات' : 'Aircraft Acquisition & Pre-Purchase Advisory'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-300 mb-1">
                  {t('modal.notes')}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'ar' ? 'مثال: الطائرة متمركزة حالياً في مطار DWC آل مكتوم. نود دراسة صلاحية الطيران وبرنامج تعويض ٢٠٠ ساعة تأجير.' : 'e.g. Currently based at DWC ExecuJet. Looking to enroll in CAMO airworthiness and 200 hours/yr charter offset.'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>{t('modal.submit')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-slate-400 block mb-2 font-light">
                  {t('modal.urgent')}
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('modal.whatsappDirect')}</span>
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
              {t('modal.successTitle')}
            </h3>
            <p className="text-sm text-slate-300 font-light max-w-sm mx-auto">
              {t('modal.successDesc')}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20 transition-all"
              >
                {t('modal.close')}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};