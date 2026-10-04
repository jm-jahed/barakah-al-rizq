'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DOCTORS_DATA } from '@/data/clinicData';

export const ClinicDoctors: React.FC<any> = ({ onSelectDoctor, onOpenBooking }) => {
  const [activeSpecialty, setActiveSpecialty] = useState('All');
  const specialties = ['All', 'General Medicine', 'Dermatology', "Women's Health", 'Orthopedics', 'Pediatrics', 'Dental Care', 'Physiotherapy', 'Nutrition & Wellness'];
  const filtered = DOCTORS_DATA.filter(doc => activeSpecialty === 'All' || doc.specialty === activeSpecialty);

  return (
    <section id="doctors" className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Board-Certified Specialists</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(doc => (
            <div key={doc.id} className="bg-slate-900 rounded-3xl border border-sky-500/20 p-5 flex flex-col justify-between">
              <div>
                <img src={doc.image} alt={doc.name} className="w-full h-48 object-cover rounded-2xl mb-3" />
                <h3 className="font-sans text-lg font-bold text-white">{doc.name}</h3>
                <span className="text-xs font-mono text-sky-400 block">{doc.role}</span>
              </div>
              <div className="pt-4 flex justify-between items-center mt-3">
                <button onClick={() => onSelectDoctor(doc)} className="text-xs font-mono text-slate-300 underline">Bio</button>
                <button onClick={() => onOpenBooking(doc.id)} className="px-3 py-1.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
