'use client';
import React, { useState } from 'react';

export const BarberContact: React.FC<any> = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-2xl mx-auto bg-neutral-900 p-8 rounded-3xl border border-amber-500/30 text-center">
        <h2 className="text-3xl font-sans font-bold text-white mb-6">Contact Reception Desk</h2>
        {submitted ? (<div className="text-emerald-400 font-mono text-xs">✓ Thank you! Your inquiry has been received.</div>) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-4">
            <input required placeholder="Your Full Name" className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white" />
            <button type="submit" className="w-full py-3.5 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase">Submit Inquiry</button>
          </form>
        )}
      </div>
    </section>
  );
};
