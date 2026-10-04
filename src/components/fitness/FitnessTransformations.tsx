'use client';
import React from 'react';
import { TRANSFORMATION_RESULTS } from '@/data/fitnessData';

export const FitnessTransformations: React.FC = () => {
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">PROVEN RESULTS</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Member Transformations.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRANSFORMATION_RESULTS.map((res) => (
            <div key={res.id} className="bg-[#12100F] p-6 rounded-3xl border border-red-500/20 flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <img src={res.beforeImage} alt="Before" className="w-full h-56 object-cover rounded-xl" />
                <img src={res.afterImage} alt="After" className="w-full h-56 object-cover rounded-xl" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-red-400 uppercase block mb-1">{res.programName} • Coach {res.trainerName}</span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{res.memberName}</h3>
                <p className="text-xs text-gray-300 italic mb-4">{res.story}</p>
                <div className="flex items-center gap-4 text-xs font-mono font-bold text-emerald-400">
                  <span>{res.weightChangeKg}</span>
                  <span>•</span>
                  <span>{res.bodyFatChange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
