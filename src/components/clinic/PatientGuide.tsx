'use client';
import React from 'react';

export const PatientGuide: React.FC<any> = () => {
  return (
    <section id="guide" className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Patient Visit Guide</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-base text-white">What to Bring</h3><p className="text-xs text-slate-300 mt-2">Emirates ID or Passport & medical records.</p></div>
          <div className="bg-slate-900 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-base text-white">Arrival Time</h3><p className="text-xs text-slate-300 mt-2">Please arrive 10 mins prior to appointment.</p></div>
          <div className="bg-slate-900 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-base text-white">Payment Methods</h3><p className="text-xs text-slate-300 mt-2">Cards, UAE PASS, or cash direct self-pay.</p></div>
          <div className="bg-slate-900 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-base text-white">Follow-Up Records</h3><p className="text-xs text-slate-300 mt-2">Digital copies available on patient portal.</p></div>
        </div>
      </div>
    </section>
  );
};
