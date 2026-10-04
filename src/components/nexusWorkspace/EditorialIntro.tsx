'use client';

import React from 'react';

export default function EditorialIntro() {
  return (
    <section className="py-20 bg-[#0B1120] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
          The UAE Corporate Headquarters Blueprint
        </span>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug tracking-tight">
          "A prestigious business address in DIFC or Downtown Dubai is not an expense — it is an immediate multiplier on enterprise credibility, regulatory velocity, and sovereign client trust."
        </blockquote>
        <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
        <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          NEXUS WORKSPACE eliminates traditional 6-month fit-out lead times and heavy capital outlays. Move in within 24 hours with an official DED Ejari certificate, fully customized corporate signage, and 5-star executive hospitality.
        </p>
      </div>
    </section>
  );
}
