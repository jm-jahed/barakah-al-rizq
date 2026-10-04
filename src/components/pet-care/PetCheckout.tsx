'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Sparkles } from 'lucide-react';
import { PetProduct } from '@/data/petCareData';

interface PetCheckoutProps {
  isOpen: boolean;
  cart: PetProduct[];
  onClose: () => void;
}

export const PetCheckout: React.FC<PetCheckoutProps> = ({
  isOpen,
  cart,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emirate, setEmirate] = useState('Dubai');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card' | 'cod'>('apple');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + (subtotal > 200 ? 0 : 25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#0E1720] border border-emerald-500/30 shadow-2xl p-6 sm:p-8 space-y-6 text-white my-8 backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                  SECURE UAE DISPATCH
                </span>
                <h3 className="text-xl font-bold text-white font-sans">
                  Express Pharmacy Checkout
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {cart.length} Prescription Items • Total AED {total}
                </span>
              </div>

              {/* Delivery Details */}
              <div className="space-y-3 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Parent Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mansoor Al-Nuaimi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">UAE Phone (+971):</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Emirate:</label>
                    <select
                      value={emirate}
                      onChange={(e) => setEmirate(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 mb-1">Street Address / Villa:</label>
                    <input
                      type="text"
                      required
                      placeholder="Villa 14, Palm Jumeirah, Dubai"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2 text-xs font-mono">
                <label className="block text-slate-400 font-bold uppercase">Payment Rails:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'apple', label: 'Apple Pay' },
                    { id: 'card', label: 'Debit / Credit' },
                    { id: 'cod', label: 'Cash on Delivery' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPaymentMethod(p.id as any)}
                      className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                        paymentMethod === p.id
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono shadow-xl shadow-emerald-500/25 hover:scale-102 transition-all cursor-pointer"
              >
                Confirm Order • AED {total}
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 font-mono">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white font-sans">
                Order Confirmed!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans leading-relaxed">
                Thank you, {name}. Your prescription order (AED {total}) has been received. Our temperature-controlled courier will arrive within 2–4 hours in {emirate}.
              </p>
              <div className="p-4 rounded-2xl bg-[#090F16] border border-white/10 text-xs text-emerald-300 text-left space-y-1">
                <span className="block font-bold">Tracking ID: #PC-DXB-{Math.floor(100000 + Math.random() * 900000)}</span>
                <span className="text-slate-400 text-[11px] block">Live dispatch updates will be sent to {phone} via WhatsApp.</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PetCheckout;
