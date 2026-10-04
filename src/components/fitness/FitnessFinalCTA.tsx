'use client';
import React from 'react';

interface FitnessFinalCTAProps {
  onBookTrial?: () => void;
}

export const FitnessFinalCTA: React.FC<FitnessFinalCTAProps> = ({ onBookTrial }) => {
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl font-serif text-white font-black mb-6 uppercase">Your Stronger Chapter Starts Here.</h2>
        <p className="text-xs sm:text-sm text-gray-400 mb-8">Book a complimentary day pass pass pass at APEX ATHLETICS Downtown Dubai.</p>
        <button onClick={onBookTrial} className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl shadow-xl shadow-red-600/30">
          Book Free Trial Pass →
        </button>
      </div>
    </section>
  );
};
