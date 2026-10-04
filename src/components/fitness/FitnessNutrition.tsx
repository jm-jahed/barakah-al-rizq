'use client';
import React from 'react';

export const FitnessNutrition: React.FC = () => {
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">MACRO ARCHITECTURE</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-6">Precision Nutrition.</h2>
        <p className="text-xs text-gray-400 max-w-2xl mx-auto mb-8">Custom macro blueprints and executive nutrition coaching tailored for Dubai lifestyles.</p>
        <a href="https://wa.me/971501234567?text=Hi!%20I%20would%20like%20to%20book%20a%20Nutrition%20Consultation." target="_blank" rel="noreferrer" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl inline-block">
          Book Nutrition Consultation
        </a>
      </div>
    </section>
  );
};
