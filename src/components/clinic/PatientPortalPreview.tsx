'use client';
import React from 'react';

export const PatientPortalPreview: React.FC<any> = () => {
  return (
    <section id="portal" className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 border border-sky-500/30 text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold text-white">Patient Portal Dashboard Preview</h2>
          <p className="text-xs text-slate-300">Sample UI mockup showing secure patient records, upcoming visits, and care reminders.</p>
        </div>
      </div>
    </section>
  );
};
