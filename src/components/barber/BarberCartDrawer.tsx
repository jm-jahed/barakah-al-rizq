'use client';
import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { GroomingProduct } from '@/data/barberData';

export const BarberCartDrawer: React.FC<{ isOpen: boolean; cart: GroomingProduct[]; onClose: () => void; onRemove: (id: string) => void; onOpenCheckout: () => void }> = ({ isOpen, cart, onClose, onRemove, onOpenCheckout }) => {
  if (!isOpen) return null;
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
      <div className="bg-neutral-900 border-l border-amber-500/30 w-full max-w-md h-full p-6 text-white flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <h3 className="font-sans text-xl font-bold text-white flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-amber-400" /> Shopping Cart ({cart.length})</h3>
            <button onClick={onClose} className="p-2 rounded-full bg-neutral-800"><X className="w-5 h-5" /></button>
          </div>

          <div className="space-y-4 py-6 max-h-[60vh] overflow-y-auto">
            {cart.length === 0 ? <p className="text-xs text-neutral-400 text-center py-8">Your cart is empty.</p> : (
              cart.map((item, idx) => (
                <div key={idx} className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 flex items-center justify-between gap-4">
                  <div><h4 className="font-sans font-bold text-xs text-white">{item.name}</h4><span className="text-xs font-mono text-amber-300">AED {item.price}</span></div>
                  <button onClick={() => onRemove(item.id)} className="p-2 text-neutral-400 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-800 space-y-4">
          <div className="flex justify-between items-center text-sm font-mono"><span className="text-neutral-400">Subtotal:</span><span className="text-amber-300 font-bold">AED {subtotal}</span></div>
          <button disabled={cart.length === 0} onClick={() => { onClose(); onOpenCheckout(); }} className="w-full py-3.5 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 disabled:opacity-50">
            <span>Checkout</span><ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
