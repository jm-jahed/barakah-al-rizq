'use client';
import React from 'react';
import { Scissors } from 'lucide-react';

export const BarberFooter: React.FC<any> = () => {
  return (
    <footer className="py-12 bg-[#050506] text-white border-t border-amber-500/20 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center gap-2"><Scissors className="w-5 h-5 text-amber-400" /><span className="text-xl font-sans font-bold text-white">THE GENTLEMEN'S ROOM</span></div>
        <p className="text-xs font-mono text-neutral-500">✦ Concept Project Showcase • Demonstrating AED 2,499 Agency Architecture • Fictional Barber Studio Data</p>
      </div>
    </footer>
  );
};
