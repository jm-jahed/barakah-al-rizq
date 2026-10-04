'use client';
import React from 'react';
import { X, Calendar } from 'lucide-react';
import { WellnessInstructor } from '@/data/wellnessData';

export const InstructorProfileModal: React.FC<{ instructor: WellnessInstructor | null; onClose: () => void; onOpenBooking: () => void }> = ({ instructor, onClose, onOpenBooking }) => {
  if (!instructor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#161411] border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white"><X className="w-5 h-5" /></button>
        <div className="flex items-center gap-6">
          <img src={instructor.image} alt={instructor.name} className="w-24 h-24 rounded-2xl object-cover" />
          <div><h3 className="text-2xl font-serif font-bold text-white">{instructor.name}</h3><span className="text-xs font-mono text-amber-300">{instructor.role}</span></div>
        </div>
        <p className="text-xs text-gray-300">{instructor.biography}</p>
        <button onClick={() => { onClose(); onOpenBooking(); }} className="w-full py-3 bg-amber-500 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Book Class</button>
      </div>
    </div>
  );
};
