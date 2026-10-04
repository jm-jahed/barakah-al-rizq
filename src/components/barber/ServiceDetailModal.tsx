'use client';
import React from 'react';
import { X, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { BarberService } from '@/data/barberData';

export const ServiceDetailModal: React.FC<{ item: BarberService | null; onClose: () => void; onOpenBooking: () => void }> = ({ item, onClose, onOpenBooking }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white"><X className="w-5 h-5" /></button>

        <div className="relative h-56 rounded-2xl overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold uppercase">{item.category}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sans font-bold text-white">{item.name}</h2>
            <span className="text-xl font-mono font-bold text-amber-300">AED {item.price}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 bg-neutral-950 p-3 rounded-xl">
            <span><Clock className="w-3.5 h-3.5 text-amber-400 inline mr-1" /> Duration: {item.duration}</span>
            <span>Suitable For: {item.suitableFor}</span>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed font-sans">{item.description}</p>

          <div className="space-y-2 bg-neutral-950 p-4 rounded-xl text-xs text-neutral-300">
            <span className="font-mono text-amber-400 font-bold uppercase block mb-1">What's Included</span>
            {item.included.map((inc, i) => (
              <div key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>{inc}</span></div>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex justify-between items-center">
            <button onClick={() => { onClose(); onOpenBooking(); }} className="w-full py-3.5 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Book This Service Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
