'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Phone, Cake } from 'lucide-react';
import { BakeryCatalogItem } from '@/data/bakeryCatalogData';

interface BakeryOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { item: BakeryCatalogItem; quantity: number }[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onSelectItem: (item: BakeryCatalogItem) => void;
  onOpenConsultation: () => void;
}

export const BakeryOrderDrawer: React.FC<BakeryOrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemove,
  onClear,
  onSelectItem,
  onOpenConsultation
}) => {
  if (!isOpen) return null;

  const totalOrderAED = cart.reduce((sum, e) => sum + (e.item.priceAED * e.quantity), 0);

  const handleWhatsAppCheckout = () => {
    const list = cart.map(e => `• ${e.item.title} x${e.quantity} (AED ${(e.item.priceAED * e.quantity).toLocaleString()})`).join('%0A');
    const msg = encodeURIComponent(
      `Hello Maison Crème Concierge! I would like to place an order from your DIFC laboratory:%0A%0A${list}%0A%0ATotal: AED ${totalOrderAED.toLocaleString()}%0A%0APlease confirm delivery slot in Dubai/UAE and custom chocolate plaque inscription.`
    );
    window.open(`https://wa.me/971508887766?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-amber-500/30 text-zinc-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Your Pâtisserie Order</h3>
                <span className="text-[10px] font-mono text-amber-400">
                  {cart.length} unique {cart.length === 1 ? 'creation' : 'creations'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 hover:border-amber-400 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-24 space-y-3">
                <Cake className="w-12 h-12 text-zinc-700 mx-auto" />
                <p className="font-serif text-white font-semibold">Your Order is Empty</p>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Explore our 160 Haute Pâtisserie creations and add items to your order.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((entry) => (
                  <div
                    key={entry.item.id}
                    className="p-3.5 rounded-2xl bg-[#110E0C] border border-zinc-800 flex gap-3.5 items-center group"
                  >
                    <img
                      src={entry.item.heroImage}
                      alt={entry.item.title}
                      className="w-16 h-16 rounded-xl object-cover border border-zinc-700 shrink-0 cursor-pointer"
                      onClick={() => onSelectItem(entry.item)}
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[9px] font-mono text-amber-400 uppercase tracking-wider block truncate">
                        {entry.item.disciplineName.split('&')[0].trim()}
                      </span>
                      <h4
                        className="text-xs font-serif font-bold text-white truncate cursor-pointer hover:text-amber-300 transition-colors"
                        onClick={() => onSelectItem(entry.item)}
                      >
                        {entry.item.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-300 font-bold">
                          AED {(entry.item.priceAED * entry.quantity).toLocaleString()}
                        </span>
                        <span className="text-[10px] text-zinc-400">Qty: {entry.quantity}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemove(entry.item.id)}
                      className="text-zinc-500 hover:text-rose-400 p-1.5 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={onClear}
                  className="text-[11px] font-mono text-zinc-500 hover:text-zinc-300 underline underline-offset-4 block mx-auto pt-2 cursor-pointer"
                >
                  Clear Order
                </button>
              </div>
            )}
          </div>

          {/* Footer Checkout Strip */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-[#0E0C0A] space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Refrigerated Delivery (UAE):</span>
                  <span className="text-emerald-400">Complimentary</span>
                </div>
                <div className="flex items-center justify-between text-base font-mono">
                  <span className="text-white font-bold">Total AED:</span>
                  <span className="text-amber-400 font-extrabold text-xl">
                    AED {totalOrderAED.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:brightness-110 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Dispatch via WhatsApp Concierge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Dubai DIFC Laboratory • Chilled Fleet Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
