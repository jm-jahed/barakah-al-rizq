'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { AbayaProduct, ABAYA_BRAND } from '@/data/abayaData';

export interface CartItem {
  product: AbayaProduct;
  size: string;
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [emirate, setEmirate] = useState('Dubai');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'tabby' | 'apple' | 'cod'>('card');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const subtotalAED = cartItems.reduce(
    (sum, item) => sum + item.product.priceAED * item.quantity,
    0
  );

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName && customerPhone) {
      setIsOrderPlaced(true);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md bg-[#121212] border-l border-stone-800 h-full flex flex-col justify-between p-6 shadow-2xl font-sans text-stone-100 relative"
        >
          {/* Cart Header */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h3 className="text-xl font-serif font-bold text-[#FAFAFA]">Your Shopping Bag</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 font-mono text-xs">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#C5A059] mx-auto opacity-40" />
                <span className="text-stone-400 block font-serif text-lg">Your shopping bag is empty</span>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
                >
                  Explore 100 Abayas
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="p-3 rounded-2xl bg-[#0A0A0A] border border-stone-800 flex gap-3 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-20 object-cover rounded-xl bg-black"
                  />

                  <div className="flex-1 space-y-1">
                    <h4 className="font-serif font-bold text-white text-xs line-clamp-1">{item.product.name}</h4>
                    <div className="flex items-center gap-2 text-[10px] text-stone-400">
                      <span>Size: <strong className="text-[#C5A059]">{item.size}</strong></span>
                      <span>•</span>
                      <span>Fabric: {item.product.fabric}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-serif font-bold text-white text-sm">
                        AED {(item.product.priceAED * item.quantity).toLocaleString()}
                      </span>

                      <div className="flex items-center gap-2 bg-[#121212] px-2 py-1 rounded-lg border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                          className="text-stone-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                          className="text-stone-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id, item.size)}
                    className="p-2 text-stone-500 hover:text-rose-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-800 pt-4 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#0A0A0A] border border-emerald-500/30 text-emerald-300 text-[10px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Complimentary Same-Day Delivery in {emirate} | Sheila Included</span>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <span className="text-stone-400 uppercase text-[10px]">SUBTOTAL AMOUNT:</span>
                <span className="text-2xl font-serif font-bold text-[#FAFAFA]">
                  AED {subtotalAED.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Proceed to AED Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Checkout Modal */}
          {isCheckoutModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <div className="bg-[#121212] border border-stone-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative font-sans text-stone-100">
                <button
                  onClick={() => setIsCheckoutModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400"
                >
                  <X className="w-5 h-5" />
                </button>

                {isOrderPlaced ? (
                  <div className="text-center py-8 space-y-4 font-mono text-xs">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-[#C5A059] font-bold uppercase block text-xs">ORDER CONFIRMED</span>
                    <h3 className="text-2xl font-serif font-bold text-white">Thank you, {customerName}!</h3>
                    <p className="text-stone-300 font-sans text-xs">
                      Your order for <strong className="text-white">AED {subtotalAED.toLocaleString()}</strong> has been dispatched to our Dubai tailoring desk for express courier delivery to {emirate}.
                    </p>
                    <button
                      onClick={() => {
                        onClearCart();
                        setIsCheckoutModalOpen(false);
                        onClose();
                      }}
                      className="w-full py-3 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
                    >
                      Done — Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">AED Express Checkout</h3>
                    <p className="text-xs font-mono text-stone-400 mb-4">Complete your luxury abaya order below</p>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-3 font-mono text-xs">
                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">FULL NAME *</label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Sheikha Al-Maktoum"
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">PHONE / WHATSAPP *</label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">DELIVERY EMIRATE</label>
                        <select
                          value={emirate}
                          onChange={(e) => setEmirate(e.target.value)}
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-bold text-[#C5A059]"
                        >
                          <option value="Dubai">Dubai (Same-Day Express)</option>
                          <option value="Abu Dhabi">Abu Dhabi (Same-Day Express)</option>
                          <option value="Sharjah">Sharjah (24-Hour Express)</option>
                          <option value="Ajman">Ajman (24-Hour Express)</option>
                          <option value="Al Ain">Al Ain (24-Hour Express)</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">PAYMENT METHOD</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('card')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'card' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            Credit Card (AED)
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('tabby')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'tabby' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            Tabby (4 Payments)
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('apple')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'apple' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            Apple Pay
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('cod')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'cod' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            Cash on Delivery
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider"
                      >
                        Complete Order (AED {subtotalAED.toLocaleString()})
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
