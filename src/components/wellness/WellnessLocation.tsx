'use client';
import React from 'react';

export const WellnessLocation: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#161411] rounded-3xl p-8 border border-amber-500/20 text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold text-white">Downtown Dubai Location</h2>
          <p className="text-xs font-mono text-gray-300">Level 2, Boulevard Plaza Tower 1, Downtown Dubai, UAE • Free VIP Valet Parking</p>
        </div>
      </div>
    </section>
  );
};
