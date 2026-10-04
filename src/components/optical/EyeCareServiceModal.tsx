'use client';
import React from 'react';
import { X, Calendar } from 'lucide-react';
import { EyeCareService } from '@/data/opticalData';

export const EyeCareServiceModal: React.FC<{ service: EyeCareService | null; onClose: () => void; onOpenBooking: () => void }> = ({ service, onClose, onOpenBooking }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>
        <h3 className="text-2xl font-sans font-bold text-white">{service.name}</h3>
        <p className="text-xs text-slate-300">{service.description}</p>
        <span className="text-sm font-mono font-bold text-sky-300 block">Sample Fee: AED {service.price} • {service.duration}</span>
        <button onClick={() => { onClose(); onOpenBooking(); }} className="w-full py-3 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Book Eye Examination</button>
      </div>
    </div>
  );
};
