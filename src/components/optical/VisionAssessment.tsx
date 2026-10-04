'use client';
import React, { useState } from 'react';

export const VisionAssessment: React.FC<any> = () => {
  const [size, setSize] = useState('Text Size 20/20');

  return (
    <section className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/30 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase">INTERACTIVE VISION ASSESSMENT</span>
          <h3 className="text-2xl font-sans font-bold text-white">Visual Acuity Letter Test</h3>
          <div className="text-5xl font-mono tracking-widest text-sky-300 font-extrabold py-6 bg-slate-950 rounded-2xl border border-slate-800">E F P T O Z</div>
          <p className="text-xs text-slate-400">Demo experience — not a clinical vision test.</p>
        </div>
      </div>
    </section>
  );
};
