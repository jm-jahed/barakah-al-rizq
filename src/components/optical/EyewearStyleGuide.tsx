'use client';
import React from 'react';

export const EyewearStyleGuide: React.FC<any> = () => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-950 p-8 rounded-3xl border border-sky-500/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold text-white mb-2">Frame Geometry & Style Guide</h2>
          <p className="text-xs text-slate-300">Square, Round, Oval, Cat-Eye, Aviator, and Rectangle silhouettes.</p>
        </div>
      </div>
    </section>
  );
};
