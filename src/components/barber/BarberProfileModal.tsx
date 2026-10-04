'use client';
import React from 'react';
import { X, Calendar } from 'lucide-react';
import { Barber } from '@/data/barberData';

export const BarberProfileModal: React.FC<{ barber: Barber | null; onClose: () => void; onOpenBooking: (id?: string) => void }> = ({ barber, onClose, onOpenBooking }) => {
  if (!barber) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white"><X className="w-5 h-5" /></button>
        <div className="flex items-center gap-6">
          <img src={barber.image} alt={barber.name} className="w-24 h-24 rounded-2xl object-cover" />
          <div><h3 className="text-2xl font-sans font-bold text-white">{barber.name}</h3><span className="text-xs font-mono text-amber-300">{barber.title}</span></div>
        </div>
        <p className="text-xs text-neutral-300">{barber.bio}</p>
        <button onClick={() => { onClose(); onOpenBooking(barber.id); }} className="w-full py-3 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Book Appointment</button>
      </div>
    </div>
  );
};
