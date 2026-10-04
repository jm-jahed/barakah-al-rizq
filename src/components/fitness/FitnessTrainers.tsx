'use client';
import React from 'react';
import { FITNESS_TRAINERS, Trainer } from '@/data/fitnessData';

interface FitnessTrainersProps {
  onSelectTrainer?: (trainer: Trainer) => void;
}

export const FitnessTrainers: React.FC<FitnessTrainersProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full inline-block mb-3">
            MASTER COACHING FACULTY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Elite Trainers.</h2>
          <p className="text-xs sm:text-sm text-gray-400">8 dedicated specialists across strength, hypertrophy, Reformer Pilates, and combat conditioning.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FITNESS_TRAINERS.map((trainer) => (
            <div key={trainer.id} className="bg-[#12100F] rounded-2xl border border-red-500/15 overflow-hidden flex flex-col justify-between">
              <div>
                <img src={trainer.image} alt={trainer.name} className="w-full h-72 object-cover" />
                <div className="p-5">
                  <span className="text-[10px] font-mono text-red-400 uppercase block mb-1">{trainer.specialty}</span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-3">{trainer.title}</p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-red-500/10">
                <button onClick={() => onSelectTrainer?.(trainer)} className="w-full py-2.5 bg-red-500/10 hover:bg-red-600 text-red-300 hover:text-white font-mono text-xs uppercase font-bold tracking-wider rounded-xl transition-all">
                  View Profile & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
