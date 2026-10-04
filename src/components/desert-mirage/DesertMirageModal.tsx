'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Compass, Calendar, Users, Mail, Phone, User, MessageSquare, Share2, ShieldCheck } from 'lucide-react';
import { EXPEDITIONS, DESERT_MIRAGE_BRAND } from '@/data/desertMirageData';

interface DesertMirageModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExpeditionId?: string;
  defaultIntent?: string;
}

export const DesertMirageModal: React.FC<DesertMirageModalProps> = ({
  isOpen,
  onClose,
  defaultExpeditionId,
  defaultIntent
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedExp, setSelectedExp] = useState(defaultExpeditionId || EXPEDITIONS[0].id);
  const [guestCount, setGuestCount] = useState(2);
  const [notes, setNotes] = useState(defaultIntent || 'Request Private Desert Expedition Itinerary');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultExpeditionId) setSelectedExp(defaultExpeditionId);
    if (defaultIntent) setNotes(defaultIntent);
  }, [defaultExpeditionId, defaultIntent]);

  if (!isOpen) return null;

  const activeExpObj = EXPEDITIONS.find(e => e.id === selectedExp) || EXPEDITIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1100);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Desert Mirage VIP Concierge,\n` +
      `I am requesting an expedition reservation from WebStudio AE:\n` +
      `• Guest Name: ${fullName || 'Guest'}\n` +
      `• Email: ${email || 'Pending'}\n` +
      `• Phone: ${phoneNumber || 'Pending'}\n` +
      `• Expedition: ${activeExpObj.title}\n` +
      `• Guests: ${guestCount} Persons\n` +
      `• Special Notes: ${notes}\n` +
      `Please connect me with a senior expedition designer.`
    );
    window.open(`https://wa.me/${DESERT_MIRAGE_BRAND.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090706]/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#F3EFEA]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#090706] hover:bg-[#18130F] text-stone-400 hover:text-white border border-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A265]/20 border border-[#C9A265]/40 text-[#C9A265] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-white">
                Expedition Dossier Request Received
              </h3>
              <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed font-light">
                Our Senior Desert Concierge will contact you at <strong>{email || 'your phone'}</strong> within 2 hours to finalize your private itinerary.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C9A265] text-[#090706] font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Open WhatsApp Thread</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#090706] hover:bg-[#18130F] text-stone-300 text-xs font-mono font-bold uppercase border border-stone-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090706] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>DUBAI CONCIERGE DISPATCH</span>
                </div>
                <h3 className="text-2xl font-serif text-white">
                  Reserve Your Desert Expedition
                </h3>
                <p className="text-xs text-stone-400 mt-1 font-light">
                  Direct VIP reservation line for private safaris, overnight retreats, and romantic duneside dining.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-400">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Lord Alexander Cavendish"
                        className="w-full bg-[#090706] border border-stone-800 text-stone-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-[#C9A265]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-400">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alexander@domain.com"
                        className="w-full bg-[#090706] border border-stone-800 text-stone-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-[#C9A265]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-400">UAE / International Phone *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#090706] border border-stone-800 text-stone-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-[#C9A265]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-400">Expedition Choice</label>
                    <select
                      value={selectedExp}
                      onChange={(e) => setSelectedExp(e.target.value)}
                      className="w-full bg-[#090706] border border-stone-800 text-stone-200 text-xs font-mono px-3 py-2.5 rounded-xl focus:outline-none focus:border-[#C9A265]"
                    >
                      {EXPEDITIONS.map(exp => (
                        <option key={exp.id} value={exp.id}>
                          {exp.title} (From AED {exp.basePriceAED.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-stone-400">Party Size: {guestCount} Guests</label>
                  <div className="flex gap-2">
                    {[1, 2, 4, 6, 8, 12].map(num => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuestCount(num)}
                        className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          guestCount === num
                            ? 'bg-[#C9A265] text-[#090706]'
                            : 'bg-[#090706] border border-stone-800 text-stone-400 hover:text-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-stone-400">Special Notes / Dietary / Itinerary Requests</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#090706] border border-stone-800 text-stone-200 text-xs font-mono pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-[#C9A265]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C9A265] to-[#A87B38] text-[#090706] font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C9A265]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to Concierge...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Reservation Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-[#090706] hover:bg-[#18130F] border border-stone-800 text-stone-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
