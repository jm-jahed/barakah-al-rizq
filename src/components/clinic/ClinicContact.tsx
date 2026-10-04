'use client';
import React, { useState } from 'react';

export const ClinicContact: React.FC<any> = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-3xl border border-sky-500/30 text-center">
        <h2 className="text-3xl font-sans font-bold text-white mb-6">Contact Reception</h2>
        {submitted ? (<div className="text-emerald-400 font-mono text-xs">✓ Thank you! Your inquiry has been sent to reception.</div>) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-4">
            <input required placeholder="Your Full Name" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <input required type="email" placeholder="Email Address" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <button type="submit" className="w-full py-3.5 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase">Submit Inquiry</button>
          </form>
        )}
      </div>
    </section>
  );
};
