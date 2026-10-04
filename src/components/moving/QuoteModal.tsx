'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Home, Send, MessageCircle, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: any;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefillData }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    movingFrom: prefillData?.origin || prefillData?.movingFrom || 'Downtown Dubai, UAE',
    movingTo: prefillData?.destination || prefillData?.movingTo || 'Saadiyat Beach Villas, Abu Dhabi, UAE',
    propertyType: prefillData?.propertyType || prefillData?.packageType || '2-Bedroom Luxury Apartment',
    packingTier: prefillData?.packingTier || 'White-Glove VIP Pack',
    moveDate: 'Preferred This Weekend',
    notes: prefillData?.addons ? `Selected Add-Ons: ${prefillData.addons}` : '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#14100C] border border-amber-500/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative font-sans text-white max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Relocation Request Dispatched!</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              Thank you {formData.fullName}. Your reference code is <strong className="text-amber-400">NM-QUOTE-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our Senior Relocation Concierge will contact you within 15 minutes to finalize inventory and lock in your binding quote.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 text-left space-y-1">
              <div>Property: <strong className="text-white">{formData.propertyType}</strong></div>
              <div>Route: <strong className="text-amber-300">{formData.movingFrom} ➔ {formData.movingTo}</strong></div>
              {prefillData?.estimatedTotalAED && (
                <div>Estimated Total: <strong className="text-emerald-400">AED {prefillData.estimatedTotalAED.toLocaleString()} (Fixed)</strong></div>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${NESTMOVE_BRAND.whatsapp}%20I%20just%20submitted%20relocation%20quote%20request%20for%20${encodeURIComponent(formData.propertyType)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1 pr-8 mb-6">
              <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-950 border border-amber-500/30">
                OFFICIAL LUXURY RELOCATION RFQ
              </span>
              <h3 className="text-2xl font-black text-white mt-2">Request Free Moving Estimate</h3>
              <p className="text-xs text-slate-400">
                Guaranteed sub-15 minute response from NestMove UAE Relocation Concierge.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">CONTACT FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoori"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">UAE PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@residence.ae"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">TARGET MOVING WINDOW</label>
                  <input
                    type="text"
                    value={formData.moveDate}
                    onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                    placeholder="e.g. Saturday 14th (Morning)"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">PICKUP ADDRESS</label>
                  <input
                    type="text"
                    value={formData.movingFrom}
                    onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">DESTINATION ADDRESS</label>
                  <input
                    type="text"
                    value={formData.movingTo}
                    onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">PROPERTY TYPE & SCALE</label>
                <input
                  type="text"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 font-mono text-[10px] uppercase font-bold">SPECIAL INSTRUCTIONS / FRAGILE CRATES</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Grand piano on 2nd floor, 3 crystal chandeliers requiring custom wooden crates..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AED 1M Insurance Included</span>
                </span>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 text-black font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Submit Relocation RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
