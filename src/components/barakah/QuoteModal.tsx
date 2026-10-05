'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductName?: string | null;
  orderType?: string | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, selectedProductName, orderType }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    quantity: orderType === 'Container Wholesale' ? '1x40ft FCL Container' : '50 Boxes / 500 KG',
    productName: selectedProductName || 'Fresh Red Tomatoes',
    orderType: orderType || 'Container Wholesale',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-white border border-emerald-200 p-6 sm:p-8 text-[#111827] relative shadow-2xl overflow-hidden font-sans"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#063D24] flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-xs font-mono font-bold text-[#063D24] uppercase tracking-widest">
                AL AWEER WHOLESALE SALES DESK
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 font-sans text-[#063D24]">Request Wholesale Quote</h3>
            <p className="text-xs text-gray-600 mb-6 font-light">
              Submit your produce quantity requirements for immediate spot market pricing from Managing Director Habeeb Khan&apos;s team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-700 mb-1">Your Name / Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sultan Al Qassimi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-700 mb-1">UAE Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-700 mb-1">Product Requested</label>
                  <input
                    type="text"
                    required
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-700 mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 KG / 50 Bags"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-700 mb-1">Delivery Location &amp; Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Ras Al Khor Warehouse / Dubai Supermarket Branch"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-md hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span className="text-amber-300">REQUEST IMMEDIATE SPOT QUOTE</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-gray-600 block mb-2 font-light">Need immediate phone verification?</span>
                <a
                  href={BARAKAH_BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Habeeb Khan Directly</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#063D24] font-sans">Wholesale Quote Request Sent!</h3>
            <p className="text-sm text-gray-600 font-light max-w-sm mx-auto">
              Thank you. Our sales team at Al Aweer Veg Market will contact your phone with official pricing within 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-800 font-mono text-xs font-bold hover:bg-gray-200 transition-all border border-gray-200"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};