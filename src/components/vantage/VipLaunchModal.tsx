'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  ShieldCheck,
  Calendar,
  MessageCircle,
  ArrowRight,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VantageDevelopment } from '@/data/vantageData';
import { VANTAGE_BRAND } from '@/data/vantageData';

interface VipLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
  development?: VantageDevelopment | null;
}

export const VipLaunchModal: React.FC<VipLaunchModalProps> = ({
  isOpen,
  onClose,
  development,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [buyerType, setBuyerType] = useState<'Individual Investor' | 'Institutional Fund' | 'End-User Resident'>('Individual Investor');
  const [selectedCity, setSelectedCity] = useState<string>(development ? development.city : 'Dubai');
  const [targetBudget, setTargetBudget] = useState('AED 2.5M – 5.0M');
  const [isGenerated, setIsGenerated] = useState(false);
  const [vipToken, setVipToken] = useState('');
  const [copiedToken, setCopiedToken] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full legal or corporate name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your phone or WhatsApp number.');
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const token = `VTG-VIP-${randomNum}`;
    setVipToken(token);
    setIsGenerated(true);
    setErrorMsg('');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#D4AF37', '#ffffff', '#38bdf8']
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleCopyToken = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(vipToken);
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2000);
    }
  };

  const selectedDevName = development ? development.name : 'VANTAGE Masterplan Portfolio';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#0A192F] border border-stone-700/80 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-stone-400 hover:text-white transition-all z-10"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isGenerated ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  VIP EARLY-BIRD LAUNCH RESERVATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#FAFAFA] tracking-tight">
                  Reserve Priority Allocation Token.
                </h3>
                <p className="text-xs sm:text-sm font-mono text-stone-300 mt-2 leading-relaxed">
                  Generate an official VANTAGE VIP Allocation Pass for pre-launch release access, 0% administrative fee exemption, and dedicated Sales Director priority booking.
                </p>
              </div>

              {/* Selected Development Pill if passed */}
              {development && (
                <div className="p-4 rounded-2xl bg-[#06101E] border border-[#C5A059]/40 mb-6 font-mono text-xs flex items-center justify-between">
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase block font-bold">RESERVATION TARGET DEVELOPMENT:</span>
                    <span className="text-[#C5A059] font-serif font-bold text-base">{development.name}</span>
                    <span className="text-stone-400 text-[10px] block">{development.location} ({development.city}) • Starting AED {development.startingPriceAed.toLocaleString()}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#0A192F] text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    {development.status}
                  </span>
                </div>
              )}

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono mb-4">
                  {errorMsg}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleGeneratePass} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">FULL NAME / ENTITY *</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Lord Alistair Sterling"
                      className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="a.sterling@sterling-capital.ae"
                      className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">PHONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 882 1944"
                      className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">INVESTOR PROFILE</label>
                    <select
                      value={buyerType}
                      onChange={(e) => setBuyerType(e.target.value as any)}
                      className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-[#C5A059] font-bold"
                    >
                      <option value="Individual Investor">Individual High-Net-Worth Investor</option>
                      <option value="Institutional Fund">Institutional Family Office / Fund</option>
                      <option value="End-User Resident">End-User Luxury Resident</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">PREFERRED EMIRATE</label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white"
                    >
                      <option value="Dubai">Dubai (Prime Freehold)</option>
                      <option value="Abu Dhabi">Abu Dhabi (Saadiyat & Yas)</option>
                      <option value="Sharjah">Sharjah (Sustainable City)</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah (Al Marjan / Hayat)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px] font-bold">ALLOCATION BUDGET</label>
                    <select
                      value={targetBudget}
                      onChange={(e) => setTargetBudget(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white"
                    >
                      <option value="AED 1.2M – 2.5M">AED 1.2M – 2.5M (High Yield Urban)</option>
                      <option value="AED 2.5M – 5.0M">AED 2.5M – 5.0M (Waterfront & Golden Visa)</option>
                      <option value="AED 5.0M – 12.0M">AED 5.0M – 12.0M (Mansions & Penthouses)</option>
                      <option value="AED 12.0M+">AED 12.0M+ (Bespoke Palaces / Bulk Floors)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-[10px] text-stone-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>
                    Your priority pass guarantees zero queuing on launch day, direct DLD escrow allocation, and invitation to our private launch cocktail reception.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Generate Official VIP Allocation Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            /* Pass Generated Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C5A059] to-[#0A192F] p-0.5 mx-auto shadow-xl shadow-[#C5A059]/20">
                <div className="w-full h-full bg-[#06101E] rounded-[14px] flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#C5A059]" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-[#C5A059] font-bold block uppercase tracking-[0.2em] mb-1">
                  OFFICIAL VIP LAUNCH ALLOCATION ISSUED
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FAFAFA]">
                  Priority Pass Confirmed
                </h3>
                <p className="text-xs font-mono text-stone-300 mt-1">
                  Issued to <strong className="text-white">{fullName}</strong> for <strong className="text-[#C5A059]">{selectedDevName}</strong>.
                </p>
              </div>

              {/* VIP Token Card */}
              <div className="p-6 rounded-2xl bg-[#06101E] border-2 border-[#C5A059] max-w-md mx-auto font-mono text-xs shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#C5A059] text-black font-bold text-[9px] px-3 py-0.5 rounded-bl-lg uppercase">
                  ACTIVE TOKEN
                </div>

                <span className="text-stone-400 text-[10px] uppercase block font-bold">VANTAGE VIP PASSCODE:</span>
                <span className="text-3xl font-mono font-extrabold text-[#C5A059] tracking-widest block my-2">
                  {vipToken}
                </span>

                <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 text-left text-[10px]">
                  <div>
                    <span className="text-stone-500 uppercase block">INVESTOR CATEGORY</span>
                    <span className="text-stone-200 font-bold">{buyerType}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase block">ALLOCATION TIER</span>
                    <span className="text-emerald-400 font-bold">{targetBudget}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyToken}
                  className="w-full mt-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  {copiedToken ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Token Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C5A059]" />
                      <span>Copy VIP Token</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <a
                  href={`https://wa.me/971508821944?text=${encodeURIComponent(
                    `Hello VANTAGE Developments,\n\nI have generated my VIP Priority Allocation Token: ${vipToken} for ${selectedDevName}.\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPlease register my allocation on the developer priority roster.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Priority Desk</span>
                </a>

                <button
                  onClick={onClose}
                  className="py-3.5 px-6 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
