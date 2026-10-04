'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, CheckCircle2, Send, Key, Calendar, Users, Car, ShieldCheck } from 'lucide-react';
import { AURELIA_RESIDENCES_DATA, AURELIA_BRAND } from '@/data/aureliaData';

interface AureliaViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedResidence?: string;
}

export const AureliaViewingModal: React.FC<AureliaViewingModalProps> = ({
  isOpen,
  onClose,
  preselectedResidence = 'Aurelia Palm Waterfront Estate'
}) => {
  const [step, setStep] = useState<number>(1);
  const [estateName, setEstateName] = useState<string>(preselectedResidence);
  const [date, setDate] = useState<string>('2026-10-20 (Private Slot 14:00)');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [transferType, setTransferType] = useState<string>('rolls-royce');
  const [intent, setIntent] = useState<string>('Primary Residence');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequirements, setSpecialRequirements] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedResidence) {
      setEstateName(preselectedResidence);
    }
  }, [preselectedResidence]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#13191D] border border-stone-600 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#090C0E]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-stone-500/10 border border-stone-500/30 text-stone-300">
                <Key className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">
                  Confidential Private Estate Viewing
                </h3>
                <p className="text-xs font-mono text-stone-400">
                  DIFC Gate Village 3 • Private Client Gallery
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Header */}
          {!isSubmitted && (
            <div className="px-6 py-4 bg-[#0D1215] border-b border-white/5 flex items-center justify-between font-mono text-xs">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-stone-200 font-bold' : 'text-gray-500'}`}>
                <span className="w-5 h-5 rounded-full bg-stone-200/20 border border-stone-400 flex items-center justify-center text-[10px]">1</span>
                <span>Estate & Schedule</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-stone-200 font-bold' : 'text-gray-500'}`}>
                <span className="w-5 h-5 rounded-full bg-stone-200/20 border border-stone-400 flex items-center justify-center text-[10px]">2</span>
                <span>VIP Chauffeur</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-stone-200 font-bold' : 'text-gray-500'}`}>
                <span className="w-5 h-5 rounded-full bg-stone-200/20 border border-stone-400 flex items-center justify-center text-[10px]">3</span>
                <span>Principal Details</span>
              </div>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Viewing Request Transmitted
                </h3>
                <p className="text-xs font-mono text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our Senior Private Client Director from DIFC Gate Village 3 will coordinate access for <strong>{estateName}</strong> and confirm your chauffeur dispatch via <strong>{phone}</strong> within 15 minutes.
                </p>

                <div className="p-4 rounded-2xl bg-[#090C0E] border border-stone-700 max-w-md mx-auto font-mono text-xs text-left space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Selected Estate:</span>
                    <span className="text-white font-bold">{estateName}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Viewing Slot:</span>
                    <span className="text-stone-300 font-bold">{date}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>VIP Escort:</span>
                    <span className="text-emerald-400 font-bold">Rolls-Royce Chauffeur</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      onClose();
                    }}
                    className="px-8 py-3.5 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    RETURN TO SHOWCASE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-mono font-bold text-stone-300 uppercase block mb-1.5">
                        Selected Signature Estate *
                      </label>
                      <select
                        value={estateName}
                        onChange={(e) => setEstateName(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                      >
                        {AURELIA_RESIDENCES_DATA.map((r) => (
                          <option key={r.id} value={r.name} className="bg-[#13191D]">
                            {r.name} ({r.location}) — {r.priceFormatted}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-1.5">
                          Preferred Viewing Date & Slot *
                        </label>
                        <input
                          type="text"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          placeholder="e.g. 2026-10-25 at 15:00"
                          className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-1.5">
                          Acquisition Intent
                        </label>
                        <select
                          value={intent}
                          onChange={(e) => setIntent(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                        >
                          <option value="Primary Residence">Primary Family Residence</option>
                          <option value="Investment Trophy Asset">Trophy Investment Asset</option>
                          <option value="Custom Plot Commission">Custom Plot Commission</option>
                          <option value="Family Office Portfolio">Family Office Allocation</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      NEXT: VIP CHAUFFEUR ESCORT →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-mono font-bold text-stone-300 uppercase block mb-2">
                        Complimentary VIP Chauffeur Transfer
                      </label>
                      <div className="space-y-2.5">
                        {[
                          { id: 'rolls-royce', label: 'Rolls-Royce Phantom VIII Chauffeur', desc: 'Direct escort from your hotel/villa to the estate private gates' },
                          { id: 'maybach', label: 'Mercedes-Maybach S680 Chauffeur', desc: 'Discreet luxury executive transport from DIFC or airport terminal' },
                          { id: 'direct-arrival', label: 'Self-Arrival with Security Gate Clearance', desc: 'Pre-clearance at community gate for your private security convoy' },
                        ].map((item) => (
                          <label
                            key={item.id}
                            className={`flex flex-col p-3.5 rounded-xl border cursor-pointer transition-all ${
                              transferType === item.id
                                ? 'bg-stone-500/15 border-stone-300 text-white'
                                : 'bg-[#090C0E] border-white/10 text-gray-400 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <input
                                type="radio"
                                name="transfer"
                                checked={transferType === item.id}
                                onChange={() => setTransferType(item.id)}
                                className="accent-stone-300"
                              />
                              <span className="text-xs font-mono font-bold text-white">{item.label}</span>
                            </div>
                            <span className="text-[11px] font-mono text-gray-400 ml-6 mt-1">{item.desc}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="w-2/3 py-3.5 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: PRINCIPAL DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">
                        Principal Buyer / Family Office Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sheikh Sultan Al-Qasimi / Lord Sterling"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">
                          UAE Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 882 1122"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">
                          Confidential Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="principal@qasimi.ae"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">
                        Special Requests / Security Clearances
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Specify family office requirements, private NDAs, or architectural customization queries..."
                        value={specialRequirements}
                        onChange={(e) => setSpecialRequirements(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300 resize-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-1/3 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-3.5 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase shadow-lg flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>CONFIRM PRIVATE VIEWING ✓</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
