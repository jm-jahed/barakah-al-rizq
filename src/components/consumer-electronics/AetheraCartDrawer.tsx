'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Crown, 
  Tag, 
  Check, 
  Truck,
  RotateCcw
} from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

export interface CartItem {
  product: GadgetProduct;
  quantity: number;
  selectedVariant?: string;
  selectedStorage?: string;
}

interface AetheraCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  onSelectProduct: (product: GadgetProduct) => void;
  recommendedProducts: GadgetProduct[];
  onAddToCart: (product: GadgetProduct) => void;
}

export const AetheraCartDrawer: React.FC<AetheraCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onSelectProduct,
  recommendedProducts,
  onAddToCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent?: number; fixedDiscount?: number } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [lastRemoved, setLastRemoved] = useState<CartItem | null>(null);

  if (!isOpen) return null;

  // Calculate totals in AED
  const rawSubtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountAmount = Math.round(rawSubtotal * (appliedPromo.discountPercent / 100));
    } else if (appliedPromo.fixedDiscount) {
      discountAmount = Math.min(rawSubtotal, appliedPromo.fixedDiscount);
    }
  }

  const vatAmount = Math.round((rawSubtotal - discountAmount) * 0.05); // 5% UAE VAT
  const finalTotal = rawSubtotal - discountAmount + vatAmount;
  const freeShippingThreshold = 500;
  const progressToFreeShipping = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'DUBAI10') {
      setAppliedPromo({ code: 'DUBAI10', discountPercent: 10 });
      setPromoCode('');
    } else if (code === 'VIPAETHERA') {
      setAppliedPromo({ code: 'VIPAETHERA', fixedDiscount: 200 });
      setPromoCode('');
    } else {
      setPromoError('Invalid code. Try "DUBAI10" or "VIPAETHERA"');
    }
  };

  const handleRemoveWithUndo = (item: CartItem) => {
    setLastRemoved(item);
    onRemoveItem(item.product.id);
    setTimeout(() => setLastRemoved(null), 6000);
  };

  const handleUndo = () => {
    if (lastRemoved) {
      onAddToCart(lastRemoved.product);
      setLastRemoved(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D0E12] border-l border-white/10 shadow-2xl shadow-black flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 bg-[#090A0C] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white font-mono tracking-wide">
                Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>

            {/* Clear, Prominent Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 hover:text-rose-400 text-white transition-all"
              title="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-white/[0.02] border-b border-white/5 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-white/60 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                {rawSubtotal >= freeShippingThreshold ? (
                  <strong className="text-emerald-400 font-semibold">You unlocked Free UAE VIP Delivery!</strong>
                ) : (
                  <span>Add <strong>AED {(freeShippingThreshold - rawSubtotal).toLocaleString()}</strong> for Free VIP Dispatch</span>
                )}
              </span>
              <span className="text-white/40">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-500" 
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Scrollable Items Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
            
            {/* Undo Toast */}
            {lastRemoved && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-300 flex items-center justify-between animate-in slide-in-from-top-2">
                <span>Removed {lastRemoved.product.name}</span>
                <button onClick={handleUndo} className="text-white font-bold underline ml-2">
                  Undo
                </button>
              </div>
            )}

            {items.length > 0 ? (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-2xl bg-[#121419] border border-white/5 flex gap-3.5 items-center group relative hover:border-white/15 transition-all"
                  >
                    {/* Item Thumbnail */}
                    <div 
                      onClick={() => {
                        onSelectProduct(item.product);
                        onClose();
                      }}
                      className="w-16 h-16 rounded-xl bg-black/60 border border-white/10 p-1.5 shrink-0 cursor-pointer overflow-hidden"
                    >
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-contain" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="text-[10px] font-mono text-white/40 uppercase truncate">{item.product.brand}</div>
                      <h4 
                        onClick={() => {
                          onSelectProduct(item.product);
                          onClose();
                        }}
                        className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate cursor-pointer"
                      >
                        {item.product.name}
                      </h4>
                      {item.selectedVariant && (
                        <div className="text-[10px] text-white/50">{item.selectedVariant}</div>
                      )}
                      <div className="text-xs font-mono font-bold text-amber-300">
                        AED {(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => handleRemoveWithUndo(item)}
                        className="text-white/30 hover:text-rose-400 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center rounded-lg bg-black/60 border border-white/10 p-0.5 text-xs font-mono">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-1.5 py-0.5 text-white/60 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-1.5 py-0.5 text-white/60 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-white/20 mx-auto" />
                <h4 className="text-sm font-bold text-white">Your bag is currently empty</h4>
                <p className="text-xs text-white/50 max-w-xs mx-auto">
                  Explore our 210+ curated luxury gadgets and add your desired technology instruments.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase tracking-wider"
                >
                  Start Browsing
                </button>
              </div>
            )}

            {/* Quick Add Recommendations in Drawer */}
            {items.length > 0 && recommendedProducts.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Crown className="w-3 h-3" /> Recommended Add-ons
                </span>
                <div className="space-y-2">
                  {recommendedProducts.slice(0, 2).map((rec) => (
                    <div key={rec.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img src={rec.images[0]} alt="" className="w-10 h-10 rounded-lg bg-black/60 p-1 object-contain shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">{rec.name}</div>
                          <div className="text-[11px] font-mono text-amber-300">AED {rec.price.toLocaleString()}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => onAddToCart(rec)}
                        className="px-2.5 py-1.5 rounded-lg bg-amber-400 text-black text-[10px] font-bold uppercase shrink-0 hover:bg-amber-300"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Drawer Footer / Checkout Strip */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#090A0C] space-y-4">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (e.g. DUBAI10)"
                  className="flex-1 bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/30 font-mono uppercase"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase font-mono"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="text-xs text-emerald-400 flex items-center justify-between font-mono bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  <span>Code Applied: <strong>{appliedPromo.code}</strong></span>
                  <button onClick={() => setAppliedPromo(null)} className="text-white/40 hover:text-white">✕</button>
                </div>
              )}

              {promoError && (
                <div className="text-[11px] text-rose-400 font-mono">{promoError}</div>
              )}

              {/* Price Calculation Matrix */}
              <div className="space-y-1.5 text-xs text-white/70 font-mono">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>AED {rawSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-AED {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated UAE VAT (5%)</span>
                  <span>AED {vatAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/10">
                  <span className="font-sans">Total in AED</span>
                  <span className="text-amber-300">AED {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to UAE VIP Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-white/40 text-center font-mono flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>256-Bit Encrypted UAE Checkout • 2-Year VIP Warranty</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
