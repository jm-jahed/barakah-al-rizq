'use client';
import React, { useState } from 'react';

export const FitnessCalculator: React.FC = () => {
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(178);
  const [age, setAge] = useState(32);

  const bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  const maintenance = Math.round(bmr * 1.55);

  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">CALORIE ESTIMATOR</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-10">Metabolic Calculator.</h2>

        <div className="max-w-3xl mx-auto bg-[#12100F] p-8 rounded-3xl border border-red-500/20 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-4 text-left">
            <div>
              <label className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Body Weight (KG): {weight}</label>
              <input type="range" min="50" max="130" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-red-600" />
            </div>
            <div>
              <label className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Height (CM): {height}</label>
              <input type="range" min="150" max="210" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-red-600" />
            </div>
          </div>

          <div className="md:col-span-2 bg-[#090807] p-6 rounded-2xl border border-red-500/20 flex flex-col sm:flex-row items-center justify-around gap-4">
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase block">Est. BMR Rate</span>
              <span className="font-mono text-2xl font-bold text-white">{bmr} kcal</span>
            </div>
            <div className="w-px h-10 bg-red-500/20 hidden sm:block" />
            <div>
              <span className="text-[10px] font-mono text-red-400 uppercase block">Daily TDEE Target</span>
              <span className="font-mono text-3xl font-extrabold text-red-400">{maintenance} kcal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
