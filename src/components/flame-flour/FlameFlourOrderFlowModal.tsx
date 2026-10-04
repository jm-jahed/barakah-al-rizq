'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Clock, MapPin, Phone, Mail, User, ShieldCheck, ArrowRight, ArrowLeft, Truck, Store } from 'lucide-react';
import { CartItem } from './FlameFlourCartDrawer';

interface FlameFlourOrderFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const FlameFlourOrderFlowModal: React.FC<FlameFlourOrderFlowModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<number>(1);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('delivery');
  const [pickupSlot, setPickupSlot] = useState('Morning (08:00 – 11:00 AM)');
  const [deliverySpeed, setDeliverySpeed] = useState('Express Morning Dispatch (07:30 – 09:30 AM)');
  const [selectedDate, setSelectedDate] = useState('Tomorrow Morning (Fresh 04:30 AM Bake)');
  
  // Customer Details Form
  const [name, setName] = useState('Mariam Al Nuaimi');
  const [phone, setPhone] = useState('+971 50 847 2910');
  const [email, setEmail] = useState('mariam.alnuaimi@example.ae');
  const [address, setAddress] = useState('Villa 42, Jumeirah 2, Dubai, United Arab Emirates');
  const [notes, setNotes] = useState('Please leave with reception concierge if not available.');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.priceAED * item.quantity, 0);
  const deliveryFee = orderType === 'pickup' || subtotal >= 250 ? 0 : 25;
  const total = subtotal + deliveryFee;

  const handleConfirmOrder = () => {
    setStep(4); // Move to final confirmation screen
    onOrderCompleted();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#120f0d] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-stone-100"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-850 flex items-center justify-between bg-stone-950/60">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                FLAME & FLOUR · DEMO ORDER CHECKOUT
              </span>
              <h3 className="text-xl font-serif text-stone-100">
                {step === 4 ? 'Order Confirmed' : 'Bakery Order Fulfillment'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {/* STEP 1: PICKUP OR DELIVERY */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-serif text-stone-100">Choose Fulfillment Method</h4>
                  <p className="text-xs text-stone-400 mt-1">Select whether to pick up warm at the bakery counter or schedule courier delivery.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setOrderType('delivery')}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      orderType === 'delivery'
                        ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500/50'
                        : 'bg-stone-900/60 border-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Truck className="w-5 h-5 text-amber-400" />
                      <span className="font-serif text-base text-stone-100">Courier Delivery</span>
                    </div>
                    <p className="text-xs text-stone-400">Fresh morning delivery directly to your doorstep in Dubai, Abu Dhabi, or Sharjah.</p>
                  </div>

                  <div
                    onClick={() => setOrderType('pickup')}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      orderType === 'pickup'
                        ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500/50'
                        : 'bg-stone-900/60 border-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Store className="w-5 h-5 text-amber-400" />
                      <span className="font-serif text-base text-stone-100">Bakery Pickup</span>
                    </div>
                    <p className="text-xs text-stone-400">Collect fresh from the Alserkal Avenue Bakery Counter. Ready right out of the hearth.</p>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2"
                  >
                    <span>Continue to Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-serif text-stone-100">Select Date & Time Window</h4>
                  <p className="text-xs text-stone-400 mt-1">Our ovens fire at 04:30 AM daily for peak morning aroma and crust crispness.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Bake Date</label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Tomorrow Morning (Fresh 04:30 AM Bake)">Tomorrow Morning (Fresh 04:30 AM Bake)</option>
                      <option value="Saturday Weekend Special Bake">Saturday Weekend Special Bake</option>
                      <option value="Sunday Grand Brunch Bake">Sunday Grand Brunch Bake</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">
                      {orderType === 'delivery' ? 'Delivery Window' : 'Pickup Slot'}
                    </label>
                    <select
                      value={orderType === 'delivery' ? deliverySpeed : pickupSlot}
                      onChange={(e) => orderType === 'delivery' ? setDeliverySpeed(e.target.value) : setPickupSlot(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    >
                      {orderType === 'delivery' ? (
                        <>
                          <option value="Express Morning Dispatch (07:30 – 09:30 AM)">Express Morning Dispatch (07:30 – 09:30 AM)</option>
                          <option value="Standard Daytime Delivery (10:00 AM – 01:00 PM)">Standard Daytime Delivery (10:00 AM – 01:00 PM)</option>
                          <option value="Afternoon Tea Dispatch (02:00 – 05:00 PM)">Afternoon Tea Dispatch (02:00 – 05:00 PM)</option>
                        </>
                      ) : (
                        <>
                          <option value="Morning (08:00 – 11:00 AM)">Morning (08:00 – 11:00 AM)</option>
                          <option value="Afternoon (12:00 – 03:00 PM)">Afternoon (12:00 – 03:00 PM)</option>
                          <option value="Evening (04:00 – 07:00 PM)">Evening (04:00 – 07:00 PM)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl bg-stone-900 text-stone-300 text-xs font-medium border border-stone-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2"
                  >
                    <span>Customer Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CUSTOMER DETAILS & REVIEW */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-serif text-stone-100">Customer & Contact Details</h4>
                  <p className="text-xs text-stone-400 mt-1">Provide your delivery information and contact phone number.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">UAE Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono text-stone-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-mono text-stone-400 mb-1">Delivery Address (UAE)</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100"
                      />
                    </div>
                  )}
                </div>

                {/* Order Summary Pill */}
                <div className="bg-stone-900/80 p-4 rounded-2xl border border-stone-800 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-stone-400">
                    <span>Items ({cartItems.length}):</span>
                    <span>AED {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Delivery:</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-amber-400 pt-2 border-t border-stone-800">
                    <span>Total Order Amount:</span>
                    <span>AED {total}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-stone-900 text-stone-300 text-xs font-medium border border-stone-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-950/40"
                  >
                    <span>Confirm Bakery Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: ORDER CONFIRMED */}
            {step === 4 && (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    ORDER CONFIRMED · DEMO RECEIPT
                  </div>
                  <h3 className="text-3xl font-serif text-stone-100 mt-1">
                    Order #FF-2084
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto font-light">
                    Thank you, {name}. Your batch has been scheduled for tomorrow’s 04:30 AM fire bake.
                  </p>
                </div>

                {/* Simulated Bakery Workflow Timeline */}
                <div className="bg-stone-900/60 p-5 rounded-2xl border border-stone-800 text-left text-xs font-mono space-y-2">
                  <div className="text-amber-400 font-semibold mb-2">Live Status: Being Prepared in Oven Batch 042</div>
                  <div className="flex items-center gap-2 text-stone-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Order Received & Autolyse Scheduled</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>Fermentation & Hearth Deck Loading</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <span className="w-2 h-2 rounded-full bg-stone-700" />
                    <span>Quality Check & Cooling Rack</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <span className="w-2 h-2 rounded-full bg-stone-700" />
                    <span>Packed in Linen & Dispatched</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  Close & Return to Bakery
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
