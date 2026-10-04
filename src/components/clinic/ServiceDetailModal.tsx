'use client';
import React from 'react';
import { X, Calendar } from 'lucide-react';
import { MedicalService } from '@/data/clinicData';

export const ServiceDetailModal: React.FC<{ item: MedicalService | null; onClose: () => void; onOpenBooking: () => void }> = ({ item, onClose, onOpenBooking }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-2xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>
        <div className="space-y-4">
          <div className="flex items-center justify-between"><h2 className="text-2xl font-sans font-bold text-white">{item.name}</h2><span className="text-xl font-mono font-bold text-teal-300">AED {item.price}</span></div>
          <p className="text-xs text-slate-300">{item.description}</p>
          <div className="bg-slate-950 p-4 rounded-xl text-xs space-y-2"><div>What to expect: {item.whatToExpect}</div><div>Preparation: {item.preparation}</div></div>
          <button onClick={() => { onClose(); onOpenBooking(); }} className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Book Appointment</button>
        </div>
      </div>
    </div>
  );
};
