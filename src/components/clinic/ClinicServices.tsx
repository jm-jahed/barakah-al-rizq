'use client';
import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, DEPARTMENTS_DATA } from '@/data/clinicData';

export const ClinicServices: React.FC<any> = ({ onSelectService, onOpenBooking, searchQuery }) => {
  const [activeDept, setActiveDept] = useState('all');

  const filtered = SERVICES_DATA.filter(item => {
    const matchesDept = activeDept === 'all' || item.departmentId === activeDept;
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Comprehensive Private Medical Care</h2></div>
        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          <button onClick={() => setActiveDept('all')} className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold ${activeDept === 'all' ? 'bg-sky-400 text-slate-950' : 'bg-slate-900 text-slate-300'}`}>All ({SERVICES_DATA.length})</button>
          {DEPARTMENTS_DATA.map(d => (
            <button key={d.id} onClick={() => setActiveDept(d.id)} className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap ${activeDept === d.id ? 'bg-sky-400 text-slate-950' : 'bg-slate-900 text-slate-300'}`}>{d.name}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="bg-slate-900 rounded-3xl border border-sky-500/20 p-6 flex flex-col justify-between hover:border-sky-400/50 transition-all">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase font-bold">{item.departmentName}</span>
                <h3 className="font-sans text-lg font-bold text-white mt-1 mb-2">{item.name}</h3>
                <p className="text-xs text-slate-300 line-clamp-3">{item.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-4">
                <span className="text-base font-mono font-bold text-teal-300">AED {item.price}</span>
                <div className="flex gap-2">
                  <button onClick={() => onSelectService(item)} className="px-3 py-1.5 bg-slate-800 text-white font-mono text-xs rounded-xl">Details</button>
                  <button onClick={() => { onSelectService(item); onOpenBooking(); }} className="px-3 py-1.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1"><span>Book</span><ArrowRight className="w-3 h-3" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
