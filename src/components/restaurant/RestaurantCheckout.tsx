'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, ShieldCheck, ShoppingBag, Utensils } from 'lucide-react';
import { CartItem } from './RestaurantCartDrawer';

interface RestaurantCheckoutProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onClearCart: () => void;
}

export const RestaurantCheckout: React.FC<RestaurantCheckoutProps> = ({
  isOpen,
  cart,
  onClose,
  onClearCart,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [orderType, setOrderType] = useState<'Delivery' | 'Pickup'>('Delivery');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Dubai',
    address: '',
    notes: '',
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const deliveryFee = orderType === 'Delivery' ? (subtotal >= 150 ? 0 : 20) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppCheckout = () => {
    const itemsText = cart.map((i) => `• ${i.item.name} (${i.quantity}x) - AED ${i.item.price * i.quantity}`).join('\n');
    const text = `Hello Al-Majlis Restaurant,\nI am placing a demo ${orderType} order:\nCustomer: ${formData.name} (${formData.phone})\nType: ${orderType}\nAddress: ${formData.address}\n\nItems:\n${itemsText}\n\nTotal: AED ${grandTotal.toLocaleString()}`;
    window.open(`https://wa.me/971500000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0E131A] border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl my-auto p-6 sm:p-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-gray-300 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 shrink-0">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                DEMO CHECKOUT PORTAL
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-serif">Al-Majlis Digital Ordering Checkout</h3>
            </div>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6 overflow-y-auto flex-1 pr-1">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#161D27] border border-emerald-500/40 text-center space-y-4 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-white font-serif">Order Received — Demo Experience</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Demo Checkout — No real payment will be processed. Thank you for testing our agency portfolio showcase!
                </p>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-left text-xs font-mono space-y-1 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Order Reference:</span>
                    <span className="text-amber-400 font-bold">#MAJLIS-DINING-772</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Order Type:</span>
                    <span className="text-white font-bold">{orderType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Order Investment:</span>
                    <span className="text-emerald-400 font-bold">AED {grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => {
                      onClearCart();
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/15"
                  >
                    Done & Close
                  </button>

                  <button
                    onClick={handleWhatsAppCheckout}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" /> Send Order to WhatsApp
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Form */}
                <div className="md:col-span-7 space-y-4">
                  {/* Delivery vs Pickup Selector */}
                  <div className="flex gap-2 p-1 bg-black/60 rounded-xl border border-white/10">
                    {['Delivery', 'Pickup'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setOrderType(type as 'Delivery' | 'Pickup')}
                        className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                          orderType === type
                            ? 'bg-amber-500 text-black shadow-md'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {type === 'Delivery' ? 'Express Delivery' : 'Curbside Pickup (DIFC)'}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Mansoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.ae"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
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
                          className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                        />
                      </div>
                    </div>

                    {orderType === 'Delivery' && (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1">Area / Emirate</label>
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                          >
                            <option value="DIFC">DIFC</option>
                            <option value="Downtown Dubai">Downtown Dubai</option>
                            <option value="Business Bay">Business Bay</option>
                            <option value="Dubai Marina">Dubai Marina</option>
                            <option value="Jumeirah">Jumeirah</option>
                            <option value="Dubai Hills">Dubai Hills</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1">Street Address</label>
                          <input
                            type="text"
                            required
                            placeholder="Building / Villa No, Street"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
                    >
                      Complete Demo Order →
                    </button>
                  </form>
                </div>

                {/* Summary */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-[#161D27] border border-amber-500/30 space-y-4 shrink-0">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                    ORDER SUMMARY ({cart.length} DISHES)
                  </span>

                  <div className="space-y-2 max-h-48 overflow-y-auto text-xs font-mono text-gray-300 pr-1">
                    {cart.map((i) => (
                      <div key={i.item.id} className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="line-clamp-1">{i.item.name} ({i.quantity}x)</span>
                        <span className="text-amber-300 font-bold">AED {i.item.price * i.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1 pt-2 border-t border-white/10 text-xs font-mono text-gray-300">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>AED {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span className="text-emerald-400 font-bold">{deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-amber-400 border-t border-white/10 pt-2">
                      <span>Total:</span>
                      <span>AED {grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Order via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
