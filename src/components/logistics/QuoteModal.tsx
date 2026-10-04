'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Truck, Send, MessageSquare } from 'lucide-react';
import { LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: any;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefillData }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    pickupLocation: prefillData?.pickup || 'Dubai, UAE',
    deliveryLocation: prefillData?.destination || 'Abu Dhabi, UAE',
    packageType: prefillData?.packageType || 'Standard Express Parcel',
    notes: '',
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
        className="bg-[#0F172A] border border-blue-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative font-sans text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Quote Request Received!</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-mono">
              Thank you {formData.contactName}. Your reference code is <strong className="text-cyan-300">VLX-QUOTE-8849</strong>. A senior dispatch specialist will review your cargo parameters and respond within 15 minutes.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={LOGISTICS_BRAND_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch Follow-up</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300"
              >
                Close Modal
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                VELOX EXPRESS QUOTE DISPATCH
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1">Request Logistics Proposal</h3>
            <p className="text-xs text-gray-400 mb-6">
              Enter your corporate logistics details to receive an official rate card & SLA guarantee.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 block mb-1">COMPANY NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Al-Futtaim LLC"
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">CONTACT NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 block mb-1">BUSINESS EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@company.ae"
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">PHONE / WHATSAPP</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 block mb-1">PICKUP</label>
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">DESTINATION</label>
                  <input
                    type="text"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 block mb-1">SPECIAL CARGO NOTES / SLA REQUIREMENTS</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Temperature range 2-8°C, pre-dawn hotel delivery..."
                  className="w-full p-3 rounded-xl bg-[#070B14] border border-blue-500/30 text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Official Quote Request</span>
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
