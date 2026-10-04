'use client';
import React from 'react';
import { Award } from 'lucide-react';

export const WellnessFooter: React.FC<any> = () => {
  return (
    <footer className="py-12 bg-[#0A0908] text-white border-t border-amber-500/15 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center gap-2"><Award className="w-5 h-5 text-amber-400" /><span className="text-xl font-serif font-bold text-white">AURA WELLNESS</span></div>
        <p className="text-xs font-mono text-gray-500">✦ Concept Agency Build • Demonstrating AED 2,499 Agency Architecture • Fictional Business Data</p>
      </div>
    </footer>
  );
};
