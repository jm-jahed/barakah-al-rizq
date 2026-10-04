'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PERFUME_BRAND_INFO } from '@/data/perfumeData';

export const PerfumeContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collection: 'Oud Extrait',
    occasion: 'Special Gift',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppFallback = () => {
    const text = `Hello Maison De L'Ambre,\nI am reaching out regarding:\nName: ${formData.name}\nCollection: ${formData.collection}\nOccasion: ${formData.occasion}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/971500000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10141C] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              BOUTIQUE CONCIERGE DESK
            </span>
            <h2 className="text-3xl font-bold text-white font-serif">Connect With Our Olfactory House</h2>
            <p className="text-xs text-gray-400">
              Send your inquiry to our Dubai Mall boutique fragrance specialists.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#161D27] border border-emerald-500/40 text-center space-y-4 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white font-serif">Message Received</h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                Demo Inquiry — No real order or consultation has been created. Thank you for testing our agency portfolio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/15"
                >
                  Send Another Inquiry
                </button>

                <button
                  onClick={handleWhatsAppFallback}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" /> Send directly via WhatsApp
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Camilla Rossi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">WhatsApp Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Interested Collection</label>
                  <select
                    value={formData.collection}
                    onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  >
                    <option value="Oud Extrait">Royal Oud Extraits</option>
                    <option value="Men">Men's Collection</option>
                    <option value="Women">Women's Collection</option>
                    <option value="Unisex">Unisex Collection</option>
                    <option value="Discovery">Discovery Set (6 x 2ml)</option>
                    <option value="Gifts">Custom Gift Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Occasion / Reason</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  >
                    <option value="Special Gift">Special Gift</option>
                    <option value="Personal Scent">Personal Signature Scent</option>
                    <option value="Corporate Gift">Corporate Gift Suites</option>
                    <option value="Wedding Order">Wedding Favors</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1">Message & Preferences</label>
                <textarea
                  rows={3}
                  placeholder="Share details about scent notes you love or gift requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
                >
                  Send Inquiry to Concierge →
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppFallback}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Send via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
