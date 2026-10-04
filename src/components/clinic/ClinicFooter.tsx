'use client';
import React from 'react';
import { HeartPulse } from 'lucide-react';

export const ClinicFooter: React.FC<any> = () => {
  return (
    <footer className="py-12 bg-[#070D1B] text-white border-t border-sky-500/20 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center gap-2"><HeartPulse className="w-5 h-5 text-sky-400" /><span className="text-xl font-sans font-bold text-white">NOVA PRIVATE CLINIC</span></div>
        <p className="text-xs font-mono text-slate-500">✦ Concept Agency Build • Demonstrating AED 2,499 Agency Architecture • Fictional Healthcare Data</p>
      </div>
    </footer>
  );
};
