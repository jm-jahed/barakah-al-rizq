'use client';
import React, { useState } from 'react';

export const WellnessContact: React.FC<any> = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-2xl mx-auto bg-[#181512] p-8 rounded-3xl border border-amber-500/20 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">Inquire & Connect</h2>
        {submitted ? (<div className="text-emerald-400 font-mono text-xs">✓ Thank you! Your inquiry has been logged.</div>) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-4">
            <input required placeholder="Your Name" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white" />
            <input required type="email" placeholder="Email Address" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white" />
            <button type="submit" className="w-full py-3.5 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs uppercase">Submit Inquiry</button>
          </form>
        )}
      </div>
    </section>
  );
};
