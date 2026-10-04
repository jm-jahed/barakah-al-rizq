'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { EyewearProduct } from '@/data/opticalData';

export const OpticalCheckout: React.FC<{ isOpen: boolean; cart: EyewearProduct[]; onClose: () => void }> = ({ isOpen, cart, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  if (!isOpen) return null;
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-lg w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>

        {step === 1 ? (
          <form onSubmit={(e)=>{e.preventDefault(); setStep(2);}} className="space-y-4">
            <h3 className="text-2xl font-sans font-bold text-white">Demo Optical Checkout</h3>
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full Customer Name" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <div className="text-xs font-mono text-sky-300">Total Order Amount: AED {subtotal}</div>
            <button type="submit" className="w-full py-3.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Place Demo Order</button>
          </form>
        ) : (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-sans font-bold text-white">Demo Order Received</h4>
            <p className="text-xs text-slate-300">Thank you, <span className="text-sky-300">{name}</span>. Order of AED {subtotal} placed successfully.</p>
            <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Confirm Order via WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
};
