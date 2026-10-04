'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GIFT_CARD_OPTIONS } from '@/data/restaurantData';
import { CheckCircle2 } from 'lucide-react';

export const GiftCards: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(250);
  const [recipientName, setRecipientName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleGiftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              DIGITAL HOSPITALITY VOUCHERS
            </span>
            <h3 className="text-3xl font-extrabold text-white font-serif">Al-Majlis Dining Gift Cards</h3>
            <p className="text-xs text-gray-400">
              Gift a luxury modern Middle Eastern dining experience in DIFC.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#161D27] border border-emerald-500/40 text-center space-y-4 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white font-serif">Gift Card Issued — Demo Experience</h4>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                Demo Gift Card Experience — No real payment processed. Digital voucher for AED {selectedAmount} created for {recipientName || 'Recipient'}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs"
              >
                Create Another Gift Card
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Card Options */}
              <div className="lg:col-span-6 space-y-4">
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                  01. Select Gift Amount:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {GIFT_CARD_OPTIONS.map((g) => (
                    <button
                      key={g.amount}
                      onClick={() => setSelectedAmount(g.amount)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        selectedAmount === g.amount
                          ? 'bg-amber-500/20 border-amber-400 shadow-lg'
                          : 'bg-[#161D27] border-white/10 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="text-xl font-extrabold text-amber-400 font-mono">AED {g.amount}</div>
                      <div className="text-xs font-bold text-white font-serif mt-1">{g.title}</div>
                      <div className="text-[10px] text-gray-400 mt-1 font-sans line-clamp-2">{g.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gift Form */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#161D27] border border-white/10 space-y-4 shadow-xl">
                <form onSubmit={handleGiftSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Recipient Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Camilla Rossi"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        className="w-full bg-[#0E131A] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Sender Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Mansoor"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="w-full bg-[#0E131A] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">Personalized Message</label>
                    <textarea
                      rows={2}
                      placeholder="Write your greeting..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#0E131A] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
                  >
                    Issue Digital Gift Card (AED {selectedAmount}) →
                  </button>

                  <span className="text-[10px] font-mono text-gray-400 text-center block">
                    Demo Gift Card Experience — No real payment will be processed.
                  </span>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
