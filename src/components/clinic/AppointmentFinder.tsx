'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DEPARTMENTS_DATA, DOCTORS_DATA } from '@/data/clinicData';

export const AppointmentFinder: React.FC<any> = ({ onOpenBooking }) => {
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedDay, setSelectedDay] = useState('Today');

  const filteredDoctors = DOCTORS_DATA.filter(doc => {
    if (selectedDept === 'all') return true;
    const deptObj = DEPARTMENTS_DATA.find(d => d.id === selectedDept);
    return deptObj ? doc.specialty.toLowerCase().includes(deptObj.name.toLowerCase().split(' ')[0]) : true;
  });

  return (
    <section id="finder" className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.3em] block mb-2 font-bold">SMART SCHEDULER</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Interactive Appointment Finder</h2>
        </div>

        <div className="bg-slate-900/90 p-6 md:p-8 rounded-3xl border border-sky-500/30 max-w-5xl mx-auto space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider block mb-2">Department</label>
              <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs font-mono text-white">
                <option value="all">All Departments</option>
                {DEPARTMENTS_DATA.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider block mb-2">Preferred Day</label>
              <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs font-mono text-white">
                <option value="Today">Today (Same-Day)</option><option value="Tomorrow">Tomorrow</option><option value="This Weekend">This Weekend</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-sky-500/20 space-y-3">
            <span className="text-xs font-mono text-sky-400 font-bold uppercase block">Matching Open Demo Slots:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredDoctors.map(doc => (
                <div key={doc.id} className="bg-slate-950 p-4 rounded-2xl border border-sky-500/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">{doc.name}</h4>
                    <span className="text-[11px] font-mono text-sky-300 block">{doc.specialty} • {selectedDay}</span>
                  </div>
                  <button onClick={() => onOpenBooking(doc.id)} className="px-3 py-1.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                    <span>Reserve</span><ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
