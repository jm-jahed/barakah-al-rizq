'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CLASSES_DATA } from '@/data/wellnessData';

export const WellnessGoalMatcher: React.FC<any> = ({ onSelectClass, onOpenBooking }) => {
  const [goal, setGoal] = useState('Reduce Stress');
  const [experience, setExperience] = useState('All Levels');
  const [category, setCategory] = useState('Yoga');

  const goalsList = ['Reduce Stress', 'Improve Flexibility', 'Build Strength', 'Better Sleep', 'Mindfulness'];
  const expList = ['All Levels', 'Beginner', 'Intermediate'];
  const catList = ['Yoga', 'Pilates', 'Meditation', 'Breathwork', 'Mobility', 'Recovery'];

  const filteredMatches = CLASSES_DATA.filter(c => {
    return (c.category === category || category === 'Yoga') && 
           (c.level === experience || experience === 'All Levels');
  }).slice(0, 3);

  return (
    <section id="matcher" className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">INTELLIGENT WELLNESS MATCHER</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Find Your Ideal Movement Practice</h2>
          <p className="text-sm text-gray-400 font-sans">Answer a few quick questions to receive a tailored class recommendation for your current body state and goals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-[#161411] p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-6 shadow-2xl">
            <div>
              <label className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-3">1. Primary Wellness Goal</label>
              <div className="flex flex-wrap gap-2">
                {goalsList.map(g => (
                  <button key={g} onClick={() => setGoal(g)} className={`px-3 py-2 rounded-xl text-xs font-mono transition-all ${goal === g ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 border border-white/10 text-gray-300'}`}>{g}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-3">2. Experience Level</label>
              <div className="flex flex-wrap gap-2">
                {expList.map(e => (
                  <button key={e} onClick={() => setExperience(e)} className={`px-3 py-2 rounded-xl text-xs font-mono transition-all ${experience === e ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 border border-white/10 text-gray-300'}`}>{e}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-3">3. Modality Preference</label>
              <div className="flex flex-wrap gap-2">
                {catList.map(c => (
                  <button key={c} onClick={() => setCategory(c)} className={`px-3 py-2 rounded-xl text-xs font-mono transition-all ${category === c ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 border border-white/10 text-gray-300'}`}>{c}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">✓ Recommended Practices ({filteredMatches.length} Matches Found)</span>
            </div>

            {filteredMatches.map(item => (
              <div key={item.id} className="bg-[#181512] p-5 rounded-2xl border border-amber-500/20 flex flex-col sm:flex-row items-center gap-5 hover:border-amber-400/50 transition-all">
                <img src={item.image} alt={item.name} className="w-full sm:w-28 h-28 object-cover rounded-xl" />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300">{item.category}</span>
                    <span className="text-[10px] font-mono text-gray-400">{item.duration} • {item.level}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-1">{item.description}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
                  <span className="text-sm font-mono font-bold text-amber-200">AED {item.priceSingle}</span>
                  <button onClick={() => { if(onSelectClass) onSelectClass(item); onOpenBooking(item.id); }} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-1">
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
