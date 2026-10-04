'use client';
import React from 'react';

export const WellnessNutrition: React.FC<any> = () => {
  return (
    <section className="py-20 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-[#181512] p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Pre & Post-Practice Hydration</h3>
          <p className="text-xs text-gray-300">Complement your physical movement with cellular electrolyte hydration and plant nutrients.</p>
        </div>
      </div>
    </section>
  );
};
