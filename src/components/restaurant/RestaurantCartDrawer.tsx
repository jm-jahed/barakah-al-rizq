'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { MenuItem } from '@/data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface RestaurantCartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToCheckout: () => void;
}

export const RestaurantCartDrawer: React.FC<RestaurantCartDrawerProps> = ({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const deliveryFee = subtotal >= 150 || cart.length === 0 ? 0 : 20;
  const grandTotal = subtotal + deliveryFee;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-[#0E131A] border-l border-amber-500/30 h-full flex flex-col justify-between shadow-2xl p-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-serif">Your Order ({cart.reduce((sum, i) => sum + i.quantity, 0)})</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart List */}
          <div className="py-4 space-y-4 overflow-y-auto flex-1 pr-1">
            {cart.length > 0 ? (
              cart.map((i) => (
                <div
                  key={i.item.id}
                  className="p-3.5 rounded-2xl bg-[#161D27] border border-white/10 flex items-center gap-3"
                >
                  <img
                    src={i.item.image}
                    alt={i.item.name}
                    className="w-16 h-20 rounded-xl object-cover bg-black border border-white/10 shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <span className="text-[9px] font-mono text-amber-300 font-bold uppercase">{i.item.category}</span>
                    <h4 className="text-xs font-bold text-white font-serif line-clamp-1">{i.item.name}</h4>
                    <div className="text-xs font-mono font-bold text-amber-400">AED {i.item.price}</div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center bg-black/60 rounded-lg border border-white/10 text-xs font-mono">
                        <button
                          onClick={() => onUpdateQuantity(i.item.id, i.quantity - 1)}
                          className="px-2 py-0.5 text-gray-300 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-amber-300 font-bold">{i.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(i.item.id, i.quantity + 1)}
                          className="px-2 py-0.5 text-gray-300 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(i.item.id)}
                        className="text-gray-400 hover:text-rose-400 p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <ShoppingBag className="w-10 h-10 text-amber-400/50" />
                <h4 className="text-base font-bold text-white font-serif">Your Order Cart is Empty</h4>
                <p className="text-xs text-gray-400 max-w-xs">Explore our menu to add contemporary Arabic dishes to your order.</p>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-3 shrink-0">
              <div className="space-y-1.5 text-xs font-mono text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white">AED {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dubai Express Delivery:</span>
                  <span className="text-emerald-400 font-bold">
                    {deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-amber-400 border-t border-white/10 pt-2">
                  <span>Total Order Investment:</span>
                  <span>AED {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] font-mono text-gray-400">
                Fresh Hot Delivery • Free Cardamom Dates Box Included
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
