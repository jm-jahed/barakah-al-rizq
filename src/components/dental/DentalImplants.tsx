'use client';
import React from 'react';

export const DentalImplants: React.FC<any> = () => {
  const timeline = [
    { num: '01', title: 'Guided 3D Scan & Plan', desc: 'Intraoral imaging and jawbone density mapping.' },
    { num: '02', title: 'Implant Placement', desc: 'Precision titanium post placement under anesthesia.' },
    { num: '03', title: 'Osseointegration', desc: 'Healing phase bonding post securely to bone.' },
    { num: '04', title: 'Zirconia Crown Fitting', desc: 'Final custom ceramic crown attached.' }
  ];

  return (
    <section id="implants" className="py-24 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">4-Step Dental Implant Journey</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{timeline.map((t, idx) => (<div key={idx} className="bg-slate-900 p-6 rounded-3xl border border-cyan-500/20"><span className="text-2xl font-mono font-bold text-cyan-400 block">{t.num}</span><h3 className="font-sans text-base font-bold text-white mt-2">{t.title}</h3><p className="text-xs text-slate-400 mt-1">{t.desc}</p></div>))}</div>
      </div>
    </section>
  );
};
