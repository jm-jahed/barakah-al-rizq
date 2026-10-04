'use client';
import React from 'react';

export const InsuranceSection: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/30 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Direct Self-Pay & Insurance Support</h2>
          <p className="text-xs text-slate-300">Itemized medical receipts suitable for insurance claim reimbursement.</p>
        </div>
      </div>
    </section>
  );
};
