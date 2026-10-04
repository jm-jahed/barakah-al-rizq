'use client';
import React from 'react';
import { X, Calendar } from 'lucide-react';
import { Optometrist } from '@/data/opticalData';

export const OptometristProfileModal: React.FC<{ optometrist: Optometrist | null; onClose: () => void; onOpenBooking: (id?: string) => void }> = ({ optometrist, onClose, onOpenBooking }) => {
  if (!optometrist) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>
        <div className="flex items-center gap-6">
          <img src={optometrist.image} alt={optometrist.name} className="w-24 h-24 rounded-2xl object-cover" />
          <div><h3 className="text-2xl font-sans font-bold text-white">{optometrist.name}</h3><span className="text-xs font-mono text-sky-300">{optometrist.specialty}</span></div>
        </div>
        <p className="text-xs text-slate-300">{optometrist.bio}</p>
        <button onClick={() => { onClose(); onOpenBooking(optometrist.id); }} className="w-full py-3 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Book Appointment</button>
      </div>
    </div>
  );
};
