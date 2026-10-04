'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  CheckCircle2, 
  Crown, 
  ArrowRight, 
  Lock, 
  MessageSquare,
  Building,
  Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from './AetheraCartDrawer';

interface AetheraCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const AetheraCheckoutModal: React.FC<AetheraCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    name: 'Hamdan Al-Falasi',
    email: 'hamdan.alfalasi@dubai.ae',
    phone: '+971 50 892 4410',
    emirate: 'Dubai',
    area: 'Downtown Dubai / Burj Khalifa Boulevard',
    building: 'The Address Sky View, Tower 1, Apt 4202',
    deliveryMethod: 'same-day',
    paymentMethod: 'apple-pay',
    cardNumber: '•••• •••• •••• 8812',
    cardExpiry: '09/28',
    cardCvc: '•••'
  });
  const [trackingNumber, setTrackingNumber] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const vat = Math.round(rawSubtotal * 0.05);
  const grandTotal = rawSubtotal + vat;

  const handlePlaceOrder = () => {
    const orderId = `AE-VIP-${Math.floor(10000 + Math.random() * 90000)}`;
    setTrackingNumber(orderId);
    setStep(4);
    
    // Trigger confetti fireworks
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#FFFFFF', '#6366F1']
    });

    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={step === 4 ? onClose : undefined} />

      <div className="relative w-full max-w-2xl bg-[#0E1015] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0B0E]">
          <div className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-wider font-bold">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>AETHERA UAE VIP Sovereign Checkout</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 text-white hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Progress Bar */}
        {step < 4 && (
          <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5 flex items-center justify-between text-xs font-mono">
            <span className={step >= 1 ? 'text-amber-400 font-bold' : 'text-white/40'}>1. Contact</span>
            <span className="text-white/20">→</span>
            <span className={step >= 2 ? 'text-amber-400 font-bold' : 'text-white/40'}>2. UAE Address</span>
            <span className="text-white/20">→</span>
            <span className={step >= 3 ? 'text-amber-400 font-bold' : 'text-white/40'}>3. Payment</span>
          </div>
        )}

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
          
          {/* STEP 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-lg font-bold text-white">Client Identification</h3>
              
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-white/50">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-white/50">Email Receipt</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-white/50">UAE Mobile (+971)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white font-mono"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Continue to UAE Delivery Address</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Address & Emirate */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-lg font-bold text-white">UAE White-Glove Delivery</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-white/50">Emirate</label>
                  <select
                    value={formData.emirate}
                    onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white font-mono"
                  >
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-white/50">Community / Area</label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-white/50">Building, Villa & Street Address</label>
                <input
                  type="text"
                  value={formData.building}
                  onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white"
                />
              </div>

              {/* Delivery Speed Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-mono uppercase text-white/50">Delivery Speed</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer transition-all ${
                    formData.deliveryMethod === 'same-day' ? 'bg-amber-400/10 border-amber-400 text-amber-300' : 'bg-white/5 border-white/10 text-white/70'
                  }`}>
                    <input
                      type="radio"
                      name="del"
                      checked={formData.deliveryMethod === 'same-day'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'same-day' })}
                      className="accent-amber-400 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">Same-Day VIP Courier</div>
                      <div className="text-[10px] text-white/50">Dispatched within 90 min (Free)</div>
                    </div>
                  </label>

                  <label className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer transition-all ${
                    formData.deliveryMethod === 'pickup' ? 'bg-amber-400/10 border-amber-400 text-amber-300' : 'bg-white/5 border-white/10 text-white/70'
                  }`}>
                    <input
                      type="radio"
                      name="del"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                      className="accent-amber-400 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">Showroom VIP Pickup</div>
                      <div className="text-[10px] text-white/50">Dubai Mall / DIFC / Abu Dhabi</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl bg-white/10 text-white text-xs font-semibold uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 flex items-center justify-center gap-2"
                >
                  <span>Continue to Payment (AED {grandTotal.toLocaleString()})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in">
              <h3 className="text-lg font-bold text-white">Payment Method</h3>

              {/* Payment selector */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'apple-pay', label: ' Apple Pay', sub: 'Instant Touch ID / Face ID' },
                  { id: 'card', label: 'Credit Card', sub: 'Visa, Mastercard, Amex' },
                  { id: 'tabby', label: 'Tabby (4x 0%)', sub: `4 payments of AED ${Math.round(grandTotal / 4)}` },
                  { id: 'cod', label: 'Cash / Card on Delivery', sub: 'VIP Mobile POS Terminal' }
                ].map((pay) => (
                  <button
                    key={pay.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: pay.id })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.paymentMethod === pay.id
                        ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{pay.label}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">{pay.sub}</div>
                  </button>
                ))}
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-xs font-mono text-white/70">
                <div className="flex justify-between">
                  <span>Items ({items.length})</span>
                  <span>AED {rawSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>UAE 5% VAT</span>
                  <span>AED {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>VIP Delivery</span>
                  <span className="text-emerald-400">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm text-white font-bold pt-2 border-t border-white/10">
                  <span className="font-sans">Grand Total:</span>
                  <span className="text-amber-300">AED {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl bg-white/10 text-white text-xs font-semibold uppercase"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Authorize Order (AED {grandTotal.toLocaleString()})</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono">
                  <Crown className="w-3.5 h-3.5" /> Order Dispatched to UAE Fulfillment
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Payment Authorized Successfully
                </h3>
                <p className="text-xs text-white/60 max-w-md mx-auto">
                  Thank you, {formData.name}. Your luxury hardware instruments are being prepared under cleanroom conditions for immediate VIP courier dispatch.
                </p>
              </div>

              {/* Order Info Card */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-white/40">Tracking ID:</span>
                  <span className="text-amber-300 font-bold">{trackingNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Delivery Destination:</span>
                  <span className="text-white">{formData.area}, {formData.emirate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Estimated Arrival:</span>
                  <span className="text-emerald-400 font-bold">Today by 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Warranty Status:</span>
                  <span className="text-white">2-Year Official VIP Active</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/971523394001?text=Hello%20AETHERA,%20I%20just%20placed%20order%20${trackingNumber}.%20Please%20send%20live%20courier%20updates.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Receive WhatsApp Updates</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300"
                >
                  Return to Showroom
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
