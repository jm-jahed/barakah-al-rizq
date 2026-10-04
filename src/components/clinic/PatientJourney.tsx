'use client';
import React from 'react';

export const PatientJourney: React.FC<any> = () => {
  const steps = [
    { num: '01', title: 'Book Online', desc: 'Select department & doctor.' },
    { num: '02', title: 'Confirm Visit', desc: 'Receive WhatsApp confirmation.' },
    { num: '03', title: 'Arrive at Jumeirah', desc: 'Free VIP valet parking.' },
    { num: '04', title: 'Consult Doctor', desc: 'Unhurried physical review.' },
    { num: '05', title: 'Follow Up', desc: 'Digital portal summary.' }
  ];

  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">5-Step Patient Journey</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">{steps.map((s, idx) => (<div key={idx} className="bg-slate-900 p-6 rounded-3xl border border-sky-500/20"><span className="text-2xl font-mono font-bold text-sky-400 block">{s.num}</span><h3 className="font-sans text-base font-bold text-white mt-2">{s.title}</h3><p className="text-xs text-slate-400 mt-1">{s.desc}</p></div>))}</div>
      </div>
    </section>
  );
};
