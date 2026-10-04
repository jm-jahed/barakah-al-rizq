'use client';
import React from 'react';
import { Eye } from 'lucide-react';

export const OpticalFooter: React.FC<any> = () => {
  return (
    <footer className="py-12 bg-[#040912] text-white border-t border-sky-500/20 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center gap-2"><Eye className="w-5 h-5 text-sky-400" /><span className="text-xl font-sans font-bold text-white">VISTAÉYE OPTICAL</span></div>
        <p className="text-xs font-mono text-slate-500">✦ Concept Project Showcase • Demonstrating AED 2,499 Agency Architecture • Fictional Optical Store Data</p>
      </div>
    </footer>
  );
};
