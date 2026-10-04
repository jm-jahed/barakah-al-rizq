'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { GroomingProduct } from '@/data/barberData';

export const BarberCheckout: React.FC<{ isOpen: boolean; cart: GroomingProduct[]; onClose: () => void }> = ({ isOpen, cart, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 text-white relative shadow-2xl space-y-4">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white"><X className="w-5 h-5" /></button>
        {!submitted ? (
          <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-4">
            <h3 className="text-2xl font-sans font-bold text-white">Demo Product Checkout</h3>
            <span className="text-xs font-mono text-amber-300 block">Total: AED {subtotal}</span>
            <button type="submit" className="w-full py-3 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Place Demo Order</button>
          </form>
        ) : (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-sans font-bold text-white">Demo Order Placed</h4>
            <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Confirm via WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
};
