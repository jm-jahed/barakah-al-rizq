'use client';
import React from 'react';

export const HealthPlanner: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-sans font-bold text-white mb-2">Annual Health Review Checklist</h3>
          <p className="text-xs text-slate-300">General informational wellness planning checklist for preventative care.</p>
        </div>
      </div>
    </section>
  );
};
