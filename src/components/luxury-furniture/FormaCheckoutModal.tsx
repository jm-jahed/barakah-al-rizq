'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Crown, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  CheckCircle2,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from './FormaCartDrawer';

interface FormaCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

const UAE_EMIRATES = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain'
];

export const FormaCheckoutModal: React.FC<FormaCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    firstName: 'H.E. Mansoor',
    lastName: 'Al Nahyan',
    email: 'mansoor.alnahyan@private-office.ae',
    phone: '+971 50 882 9100',
    emirate: 'Dubai',
    area: 'Palm Jumeirah, Frond N',
    streetAddress: 'Villa Serenity, Crescent West',
    residenceType: 'Private Villa',
    floorLevel: 'Ground + 1st Floor (Elevator Equipped)',
    deliveryDate: '2026-09-15',
    specialInstructions: 'Please coordinate with estate manager prior to entry. Request protective floor coverings for polished travertine slabs.',
    paymentMethod: 'card', // 'card' | 'apple-pay' | 'bank-transfer' | 'white-glove-pos'
    cardNumber: '•••• •••• •••• 8821',
    cardExp: '08/29',
    cardCvc: '•••'
  });

  const [orderRef, setOrderRef] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal;

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as any);
    } else if (currentStep === 3) {
      // Place Order
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const ref = `FORMA-UAE-2026-${randomNum}`;
        setOrderRef(ref);
        setCurrentStep(4);

        // Fire luxury confetti
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#C9A97A', '#9E7A52', '#F5F2EB', '#D4B996']
          });
        } catch {
          // Ignore
        }
      }, 1200);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1 && currentStep <= 3) {
      setCurrentStep((prev) => (prev - 1) as any);
    }
  };

  const resetAndClose = () => {
    if (currentStep === 4) {
      onOrderComplete();
    }
    setCurrentStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#0A0908]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="min-h-full flex items-center justify-center p-4 sm:p-6 my-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#141210] border border-stone-800 rounded-sm shadow-2xl overflow-hidden text-[#F5F2EB]"
            >
              {/* Top Banner */}
              <div className="bg-[#1C1815] px-6 py-4 border-b border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A97A] font-medium">
                    FORMA ATELIER • VIP In-Home Placement
                  </span>
                  <h2 className="text-xl font-serif text-white font-light">
                    {currentStep === 4 ? 'Commission Confirmed' : 'Private Client Order Settlement'}
                  </h2>
                </div>
                <button
                  onClick={resetAndClose}
                  className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Steps (1 to 3) */}
              {currentStep < 4 && (
                <div className="bg-[#171412] px-6 py-3 border-b border-stone-800/80 flex items-center justify-between text-xs">
                  {[
                    { step: 1, label: 'Client Details' },
                    { step: 2, label: 'UAE White-Glove Logistics' },
                    { step: 3, label: 'Payment & Review' }
                  ].map((s) => (
                    <div
                      key={s.step}
                      className={`flex items-center gap-2 ${
                        currentStep === s.step
                          ? 'text-[#C9A97A] font-medium'
                          : currentStep > s.step
                          ? 'text-emerald-400'
                          : 'text-stone-400'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-mono ${
                        currentStep === s.step
                          ? 'bg-[#9E7A52] text-white'
                          : currentStep > s.step
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-stone-800 text-stone-400'
                      }`}>
                        {currentStep > s.step ? <Check className="w-3 h-3" /> : s.step}
                      </span>
                      <span className="hidden sm:inline">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Body */}
              <div className="p-6 sm:p-8">
                {currentStep === 1 && (
                  /* Step 1: Client Information */
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-serif text-white mb-1">Client Profile</h3>
                      <p className="text-xs text-stone-400">
                        Our private client curatorial team will maintain direct contact for production status and delivery appointment scheduling.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          First Name & Title
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          Last Name / Family Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          Direct UAE Contact / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52] font-mono"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-[#181512] border border-[#9E7A52]/20 rounded-sm flex items-start gap-3 text-xs text-stone-300">
                      <ShieldCheck className="w-4 h-4 text-[#C9A97A] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block mb-0.5">Complimentary In-Home Architectural Consultation</strong>
                        All orders above AED 15,000 include a private on-site inspection by our senior interior architect prior to dispatch to verify door clearances and floor loadings.
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  /* Step 2: UAE Logistics & Residence Type */
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-serif text-white mb-1">UAE Residence & Placement Coordinates</h3>
                      <p className="text-xs text-stone-400">
                        Our specialized furniture handling teams deliver in climate-controlled transport with dedicated white-glove technicians.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          Emirate
                        </label>
                        <select
                          value={formData.emirate}
                          onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        >
                          {UAE_EMIRATES.map((em) => (
                            <option key={em} value={em}>{em}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          Residence Archetype
                        </label>
                        <select
                          value={formData.residenceType}
                          onChange={(e) => setFormData({ ...formData, residenceType: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        >
                          <option value="Private Villa">Private Villa / Palace</option>
                          <option value="Penthouse">High-Floor Penthouse</option>
                          <option value="Luxury Apartment">Luxury Residence / Duplex</option>
                          <option value="Corporate Office">Executive Suite / Office</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          District / Community
                        </label>
                        <input
                          type="text"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          placeholder="e.g. Emirates Hills, Palm Jumeirah, Al Bateen"
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                          Street / Villa Number
                        </label>
                        <input
                          type="text"
                          value={formData.streetAddress}
                          onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                        Floor Access & Elevator Specifications
                      </label>
                      <input
                        type="text"
                        value={formData.floorLevel}
                        onChange={(e) => setFormData({ ...formData, floorLevel: e.target.value })}
                        className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#9E7A52]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5 font-sans">
                        Architectural Handling Notes & Security Clearances
                      </label>
                      <textarea
                        rows={2}
                        value={formData.specialInstructions}
                        onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                        className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm p-3 text-xs text-white focus:outline-none focus:border-[#9E7A52] resize-none"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  /* Step 3: Payment & Summary */
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-serif text-white mb-1">Payment Method & Authorization</h3>
                      <p className="text-xs text-stone-400">
                        Secure transaction processed under Central Bank of UAE compliance.
                      </p>
                    </div>

                    {/* Payment Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'card', label: 'UAE Debit/Credit', desc: 'Visa, Mastercard, Amex' },
                        { id: 'apple-pay', label: 'Apple Pay', desc: 'Touch ID / Face ID' },
                        { id: 'bank-transfer', label: 'Emirates NBD Wire', desc: 'Corporate / IBAN' }
                      ].map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setFormData({ ...formData, paymentMethod: p.id })}
                          className={`p-3.5 rounded-sm border cursor-pointer transition-all ${
                            formData.paymentMethod === p.id
                              ? 'bg-[#201C18] border-[#9E7A52] text-white'
                              : 'bg-[#0F0D0C] border-stone-800 text-stone-400 hover:border-stone-700'
                          }`}
                        >
                          <span className="text-xs font-medium text-white block mb-0.5">{p.label}</span>
                          <span className="text-[10px] text-stone-400">{p.desc}</span>
                        </div>
                      ))}
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="space-y-3 p-4 bg-[#110F0D] border border-stone-800/80 rounded-sm">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                            className="w-full bg-[#0A0908] border border-stone-800 rounded-sm px-3 py-2 text-xs text-white font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              value={formData.cardExp}
                              onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                              className="w-full bg-[#0A0908] border border-stone-800 rounded-sm px-3 py-2 text-xs text-white font-mono"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                              Security CVC
                            </label>
                            <input
                              type="text"
                              value={formData.cardCvc}
                              onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                              className="w-full bg-[#0A0908] border border-stone-800 rounded-sm px-3 py-2 text-xs text-white font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Order Review List */}
                    <div className="border-t border-stone-800 pt-4 space-y-2 text-xs">
                      <div className="flex justify-between text-stone-400">
                        <span>Items Subtotal ({items.length} works)</span>
                        <span className="font-mono text-stone-200">AED {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span>White-Glove Placement & Packaging Removal</span>
                        <span className="text-emerald-400 font-medium">COMPLIMENTARY</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span>5-Year Structural Atelier Guarantee</span>
                        <span className="text-emerald-400 font-medium">INCLUDED</span>
                      </div>
                      <div className="pt-2 border-t border-stone-800 flex justify-between items-baseline">
                        <span className="text-sm font-medium text-white">Final Authorization Amount</span>
                        <span className="text-xl font-serif text-[#C9A97A] font-light">
                          AED {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  /* Step 4: Confirmation */
                  <div className="text-center py-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest text-[#C9A97A] font-mono">
                        Reference: {orderRef}
                      </span>
                      <h3 className="text-2xl font-serif text-white font-light">
                        Thank You, {formData.firstName}
                      </h3>
                      <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                        Your private client order is registered in our Treviso and Dubai workshop logs. Our lead logistics curator will reach out at <strong className="text-white font-mono">{formData.phone}</strong> to coordinate white-glove delivery to {formData.area}, {formData.emirate}.
                      </p>
                    </div>

                    <div className="p-4 bg-[#181512] border border-stone-800 rounded-sm max-w-md mx-auto text-left text-xs space-y-2">
                      <div className="flex justify-between text-stone-400">
                        <span>Delivery Destination:</span>
                        <span className="text-white font-medium">{formData.residenceType}, {formData.emirate}</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span>Estimated Arrival:</span>
                        <span className="text-[#C9A97A] font-mono">4–7 Business Days</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span>Order Total:</span>
                        <span className="text-white font-mono">AED {total.toLocaleString()} (Paid)</span>
                      </div>
                    </div>

                    <button
                      onClick={resetAndClose}
                      className="px-8 py-3 bg-[#9E7A52] hover:bg-[#8A6740] text-white text-xs uppercase tracking-widest font-medium rounded-sm transition-colors shadow-lg"
                    >
                      Return to FORMA ATELIER
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls (Steps 1 to 3) */}
              {currentStep < 4 && (
                <div className="bg-[#171412] px-6 py-4 border-t border-stone-800 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      onClick={handlePrevStep}
                      className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white uppercase tracking-wider transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                  ) : (
                    <span />
                  )}

                  <button
                    onClick={handleNextStep}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#9E7A52] hover:bg-[#8A6740] text-white text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Authorizing...</span>
                    ) : currentStep === 3 ? (
                      <>
                        <span>Confirm & Place Order</span>
                        <Check className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Proceed to {currentStep === 1 ? 'Logistics' : 'Payment'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
