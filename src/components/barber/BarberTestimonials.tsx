'use client';
import React from 'react';

export const BarberTestimonials: React.FC<any> = () => {
  return (
    <section className="py-24 bg-neutral-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-neutral-950 p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold text-white mb-2">Sample Client Feedback</h2>
          <p className="text-xs text-neutral-300 italic">"Best skin fade in DIFC. The hot towel razor shave is unmatched." - Alexander H.</p>
        </div>
      </div>
    </section>
  );
};
