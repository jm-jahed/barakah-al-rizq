'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Tag, 
  Check, 
  ChevronRight,
  Armchair
} from 'lucide-react';
import Image from 'next/image';
import { FurnitureProduct } from '@/data/furnitureData';

export interface CartItem {
  product: FurnitureProduct;
  quantity: number;
  selectedColor?: string;
  selectedMaterial?: string;
}

interface FormaCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number, color?: string, material?: string) => void;
  onRemoveItem: (productId: string, color?: string, material?: string) => void;
  onCheckout: () => void;
  onClearCart?: () => void;
  onQuickView?: (product: FurnitureProduct) => void;
}

export const FormaCartDrawer: React.FC<FormaCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onClearCart,
  onQuickView
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [includeWhiteGlove, setIncludeWhiteGlove] = useState(true);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const promoDiscount = appliedPromo ? Math.round(subtotal * (appliedPromo.discountPercent / 100)) : 0;
  const whiteGloveCost = includeWhiteGlove ? 0 : 0; // Free above 10,000 AED or included
  const total = Math.max(0, subtotal - promoDiscount);

  const FREE_SHIPPING_THRESHOLD = 15000;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFreeAssembly = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'DUBAI10' || code === 'FORMA10') {
      setAppliedPromo({ code, discountPercent: 10 });
      setPromoInput('');
    } else if (code === 'VILLA15') {
      setAppliedPromo({ code, discountPercent: 15 });
      setPromoInput('');
    } else {
      setPromoError('Invalid promotion code. Try "DUBAI10" or "VILLA15"');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F0D0C]/80 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md md:max-w-lg bg-[#141210] border-l border-stone-800/80 text-[#F5F2EB] flex flex-col shadow-2xl shadow-black/80"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-800/80 flex items-center justify-between bg-[#191613]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9E7A52]/10 border border-[#9E7A52]/30 flex items-center justify-center text-[#C9A97A]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif font-light tracking-wide text-white">
                      Curated Order Portfolio
                    </h2>
                    <p className="text-xs text-stone-400">
                      {items.reduce((acc, i) => acc + i.quantity, 0)} {items.length === 1 ? 'curated piece' : 'curated pieces'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {items.length > 0 && onClearCart && (
                    <button
                      onClick={onClearCart}
                      className="text-xs text-stone-400 hover:text-rose-400 px-2 py-1 rounded transition-colors"
                      title="Clear portfolio"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800/60 transition-colors"
                    aria-label="Close cart"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Free White-Glove Shipping Milestone Bar */}
              <div className="px-6 py-3.5 bg-[#1C1815] border-b border-stone-800/60 text-xs">
                <div className="flex items-center justify-between text-stone-300 mb-1.5 font-sans">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#C9A97A]" />
                    {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                      <span className="text-emerald-400 font-medium">Complimentary UAE White-Glove Delivery & Assembly Unlocked</span>
                    ) : (
                      <span>Add <strong className="text-white">AED {remainingForFreeAssembly.toLocaleString()}</strong> for complimentary White-Glove installation</span>
                    )}
                  </span>
                  <span className="text-[#C9A97A] font-mono">{progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#9E7A52] to-[#D4B996] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-stone-800/40">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-stone-900/80 border border-stone-800 flex items-center justify-center text-stone-500">
                      <Armchair className="w-10 h-10 stroke-[1.2]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif text-white font-light">Your portfolio is empty</h3>
                      <p className="text-sm text-stone-400 max-w-xs">
                        Explore our architectural seating, travertine monoliths, and bespoke living works.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-4 px-6 py-2.5 bg-[#9E7A52] hover:bg-[#8A6740] text-white text-xs uppercase tracking-widest font-sans font-medium rounded-sm transition-colors shadow-lg"
                    >
                      Explore The Collection
                    </button>
                  </div>
                ) : (
                  items.map((item, idx) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedColor || 'default'}-${item.selectedMaterial || 'default'}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-4 first:pt-0 flex gap-4 items-start"
                    >
                      {/* Product Thumbnail */}
                      <div 
                        onClick={() => onQuickView && onQuickView(item.product)}
                        className="relative w-20 h-20 rounded-sm bg-stone-900/60 border border-stone-800 overflow-hidden flex-shrink-0 cursor-pointer group"
                      >
                        <Image
                          src={item.product.images[0] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80'}
                          alt={item.product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#C9A97A] font-medium">
                              {item.product.room} • {item.product.collection}
                            </span>
                            <h4 
                              onClick={() => onQuickView && onQuickView(item.product)}
                              className="text-sm font-serif font-light text-white truncate hover:text-[#C9A97A] cursor-pointer transition-colors"
                            >
                              {item.product.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.selectedColor, item.selectedMaterial)}
                            className="text-stone-500 hover:text-rose-400 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Variants */}
                        {(item.selectedColor || item.selectedMaterial || item.product.dimensions) && (
                          <div className="mt-1 text-[11px] text-stone-400 space-x-2">
                            {item.selectedColor && <span>Tone: {item.selectedColor}</span>}
                            {item.selectedMaterial && <span>• {item.selectedMaterial}</span>}
                            <div className="text-[10px] text-stone-400/80 font-mono truncate">{item.product.dimensions}</div>
                          </div>
                        )}

                        {/* Quantity and Price */}
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center border border-stone-800 rounded-sm bg-stone-900/80">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1, item.selectedColor, item.selectedMaterial)}
                              className="p-1 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-xs font-mono text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1, item.selectedColor, item.selectedMaterial)}
                              className="p-1 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-medium font-sans text-[#F5F2EB]">
                              AED {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                            {item.quantity > 1 && (
                              <p className="text-[10px] text-stone-400 font-mono">
                                AED {item.product.price.toLocaleString()} ea
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer / Summary */}
              {items.length > 0 && (
                <div className="p-6 bg-[#171412] border-t border-stone-800/80 space-y-4">
                  {/* Promo Input */}
                  <form onSubmit={handleApplyPromo} className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Promo code (e.g. DUBAI10)"
                          className="w-full bg-[#0F0D0C] border border-stone-800 rounded-sm pl-9 pr-3 py-2 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#9E7A52] font-mono uppercase"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-sm transition-colors font-sans uppercase tracking-wider"
                      >
                        Apply
                      </button>
                    </div>
                    {promoError && (
                      <p className="text-[11px] text-rose-400">{promoError}</p>
                    )}
                    {appliedPromo && (
                      <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Code <strong className="font-mono">{appliedPromo.code}</strong> applied ({appliedPromo.discountPercent}% off subtotal)
                      </p>
                    )}
                  </form>

                  {/* Calculations */}
                  <div className="space-y-2 text-xs text-stone-300 font-sans">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono text-white">AED {subtotal.toLocaleString()}</span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-emerald-400">
                        <span>VIP Privilege ({appliedPromo.code})</span>
                        <span className="font-mono">- AED {promoDiscount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-stone-400">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C9A97A]" />
                        UAE In-Home White Glove Placement
                      </span>
                      <span className="text-emerald-400 font-medium">COMPLIMENTARY</span>
                    </div>

                    <div className="pt-2 border-t border-stone-800 flex justify-between items-baseline">
                      <span className="text-sm font-medium text-white">Estimated Total</span>
                      <div className="text-right">
                        <span className="text-lg font-serif font-light text-[#C9A97A]">
                          AED {total.toLocaleString()}
                        </span>
                        <p className="text-[10px] text-stone-400 font-mono">Inclusive of 5% UAE VAT</p>
                      </div>
                    </div>
                  </div>

                  {/* Checkout CTA */}
                  <button
                    onClick={onCheckout}
                    className="w-full py-3.5 bg-gradient-to-r from-[#9E7A52] to-[#B89265] hover:from-[#8C6943] hover:to-[#A37E52] text-white text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#9E7A52]/20 hover:shadow-xl"
                  >
                    <span>Proceed to VIP Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-stone-400 pt-1">
                    <span>5-Year Master Warranty</span>
                    <span>•</span>
                    <span>Unmatched In-Home Placement</span>
                    <span>•</span>
                    <span>Direct Atelier Dispatch</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
