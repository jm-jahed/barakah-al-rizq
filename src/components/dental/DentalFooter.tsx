'use client';
import React from 'react';
import { Smile } from 'lucide-react';

export const DentalFooter: React.FC<any> = () => {
  return (
    <footer className="py-12 bg-[#040A14] text-white border-t border-cyan-500/20 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center gap-2"><Smile className="w-5 h-5 text-cyan-400" /><span className="text-xl font-sans font-bold text-white">LUMINA DENTAL</span></div>
        <p className="text-xs font-mono text-slate-500">✦ Concept Project Showcase • Demonstrating AED 2,499 Agency Architecture • Fictional Dental Clinic Data</p>
      </div>
    </footer>
  );
};
