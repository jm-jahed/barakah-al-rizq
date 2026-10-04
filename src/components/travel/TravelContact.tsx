'use client';
import React, { useState } from 'react';

export const TravelContact: React.FC<any> = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-[#0A1017] text-white border-b border-amber-500/20">
      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-3xl border border-amber-500/30 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">Contact Travel Desk</h2>
        {submitted ? (<div className="text-amber-400 font-mono text-xs">✓ Thank you! Your travel inquiry has been submitted.</div>) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-4">
            <input required placeholder="Your Name" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <button type="submit" className="w-full py-3.5 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase">Send Inquiry</button>
          </form>
        )}
      </div>
    </section>
  );
};
