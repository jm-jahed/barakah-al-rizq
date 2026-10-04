'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, MapPin, User, FileText } from 'lucide-react';
import { CartItem } from './PressoraCartDrawer';

interface PressoraCheckoutModalProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onClearCart: () => void;
}

export const PressoraCheckoutModal: React.FC<PressoraCheckoutModalProps> = ({
  isOpen,
  items,
  onClose,
  onClearCart,
}) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [emirate, setEmirate] = useState<string>('Dubai');
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');
  const [orderRef, setOrderRef] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.priceAED, 0);
  const delivery = deliverySpeed === 'express' ? 40 : 20;
  const total = subtotal + delivery;

  const handleNext = () => {
    if (step === 3) {
      const ref = `PRS-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderRef(ref);
      setStep(4);
      onClearCart();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0c131d] border border-[#1a2e45] text-[#f8fafc] shadow-2xl overflow-hidden my-8 font-mono"
        >
          {/* Top Bar */}
          <div className="p-6 bg-[#080e16] border-b border-[#15273d] flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#38bdf8] uppercase tracking-[0.25em] font-bold block">
                STEP 0{step} OF 04
              </span>
              <h3 className="text-xl font-bold font-sans text-[#f8fafc]">
                {step === 1 && 'Client & Business Details'}
                {step === 2 && 'UAE Delivery Destination'}
                {step === 3 && 'Order Review & Plate Authorization'}
                {step === 4 && 'Production Job Authorized'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#111c2a] hover:bg-[#18273a] text-[#64748b] hover:text-[#f8fafc] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="flex h-1 bg-[#09111b]">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 transition-all duration-300 ${
                  s <= step ? 'bg-[#38bdf8]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto text-xs space-y-4">
            {step === 1 && (
              <div className="space-y-3">
                <p className="text-[#94a3b8] font-light">
                  Provide enterprise contact details for digital proofing & invoice dispatch:
                </p>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#080d14] border border-[#16273c] text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
                <input
                  type="text"
                  placeholder="Company / Trade License Entity *"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#080d14] border border-[#16273c] text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
                <input
                  type="email"
                  placeholder="Official Email for Digital Proofing *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#080d14] border border-[#16273c] text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone / WhatsApp (+971 50 ...) *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#080d14] border border-[#16273c] text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-[#94a3b8] font-light">
                  Specify physical delivery address within the United Arab Emirates:
                </p>
                <div>
                  <label className="text-[10px] uppercase text-[#64748b] mb-1 block">Emirate</label>
                  <select
                    value={emirate}
                    onChange={(e) => setEmirate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#080d14] border border-[#16273c] text-[#f8fafc] focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option value="Dubai">Dubai (Downtown / DIFC / Marina / JAFZA)</option>
                    <option value="Abu Dhabi">Abu Dhabi (ADGM / Yas / Mussafah)</option>
                    <option value="Sharjah">Sharjah (Industrial Area / SAIF Zone)</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                  </select>
                </div>

                <textarea
                  rows={3}
                  placeholder="Building, Street, Office / Warehouse Unit No. *"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#080d14] border border-[#16273c] text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8] resize-none"
                />

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setDeliverySpeed('standard')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      deliverySpeed === 'standard' ? 'bg-[#122236] border-[#38bdf8] text-[#38bdf8]' : 'bg-[#080d14] border-[#16273c] text-[#64748b]'
                    }`}
                  >
                    <div className="font-bold">Standard Courier (2-3 Days)</div>
                    <div className="text-[10px] text-[#94a3b8]">AED 20 Included</div>
                  </button>

                  <button
                    onClick={() => setDeliverySpeed('express')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      deliverySpeed === 'express' ? 'bg-[#122236] border-[#38bdf8] text-[#38bdf8]' : 'bg-[#080d14] border-[#16273c] text-[#64748b]'
                    }`}
                  >
                    <div className="font-bold">Express 24H Courier</div>
                    <div className="text-[10px] text-[#94a3b8]">AED 40 Priority</div>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#080d14] border border-[#152538] space-y-2">
                  <div className="font-bold text-sm text-[#f8fafc] font-sans pb-2 border-b border-[#142334]">
                    Production Order Manifest
                  </div>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-1 text-xs">
                      <div>
                        <span className="text-[#f8fafc]">{item.productName}</span>
                        <div className="text-[10px] text-[#64748b]">{item.configSummary}</div>
                      </div>
                      <span className="text-[#38bdf8] font-bold">AED {item.priceAED.toLocaleString()}</span>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-[#142334] flex justify-between font-bold">
                    <span>Total (with {deliverySpeed} courier)</span>
                    <span className="text-[#38bdf8] text-base">AED {total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#09111b] border border-[#16283d] text-[#64748b] text-[11px] leading-relaxed">
                  By confirming, you authorize Pressora automated prepress ripping and laser plate exposure upon digital proof sign-off.
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#38bdf8] mx-auto animate-pulse" />
                <div>
                  <span className="text-[10px] text-[#38bdf8] uppercase tracking-widest block">
                    PRODUCTION JOB REFERENCE
                  </span>
                  <h4 className="text-2xl font-bold font-mono text-[#f8fafc]">{orderRef}</h4>
                </div>

                <div className="p-4 rounded-2xl bg-[#080d14] border border-[#16273c] text-left space-y-1.5 max-w-md mx-auto text-xs">
                  <div className="flex justify-between text-[#64748b]">
                    <span>Client:</span>
                    <strong className="text-[#f8fafc] font-normal">{company || name || 'Valued Client'}</strong>
                  </div>
                  <div className="flex justify-between text-[#64748b]">
                    <span>Destination:</span>
                    <strong className="text-[#f8fafc] font-normal">{emirate}, UAE</strong>
                  </div>
                  <div className="flex justify-between text-[#64748b]">
                    <span>Production Status:</span>
                    <strong className="text-[#4ade80] font-normal">Prepress Queued</strong>
                  </div>
                  <div className="flex justify-between text-[#64748b] pt-2 border-t border-[#142334]">
                    <span>Total Investment:</span>
                    <strong className="text-[#38bdf8] font-bold">AED {total.toLocaleString()}</strong>
                  </div>
                </div>

                <p className="text-[11px] text-[#64748b] italic max-w-sm mx-auto">
                  Demonstration order authorized. Pre-press proof PDF has been queued to your registered inbox.
                </p>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="p-6 bg-[#080e16] border-t border-[#15273d] flex items-center justify-between font-mono text-xs">
            {step < 4 ? (
              <>
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="px-5 py-2.5 rounded-xl bg-[#0e1724] hover:bg-[#142030] disabled:opacity-30 text-[#cbd5e1] border border-[#1b2f48] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#2563eb] hover:from-[#0369a1] hover:to-[#1d4ed8] text-[#ffffff] font-bold uppercase transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>{step === 3 ? 'Authorize Print Production' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-lg"
              >
                Return to Print Operating System
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
