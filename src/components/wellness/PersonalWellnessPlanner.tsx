'use client';
import React from 'react';

export const PersonalWellnessPlanner: React.FC<any> = () => {
  const planSchedule = [
    { day: 'Monday', activity: 'Sunrise Vinyasa Flow', duration: '60 min', focus: 'Spinal Mobility & Breath' },
    { day: 'Tuesday', activity: 'Functional Mobility & Kinstretch', duration: '60 min', focus: 'Hip & Shoulder ROM' },
    { day: 'Wednesday', activity: 'Rest & Somatic Hydration', duration: 'Full Day', focus: 'Recovery & Mineral Water' },
    { day: 'Thursday', activity: 'Reformer Pilates Core', duration: '50 min', focus: 'Transverse Core Conditioning' },
    { day: 'Friday', activity: 'Crystal Bowl Sound Bath', duration: '60 min', focus: 'Theta Brainwave Relaxation' },
    { day: 'Saturday', activity: 'Power Sculpt Yoga', duration: '60 min', focus: 'Full Body Heat' },
    { day: 'Sunday', activity: 'Yin & Deep Release', duration: '75 min', focus: 'Connective Tissue Unwinding' }
  ];

  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">PERSONALIZED WEEKLY PROTOCOL</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Custom Weekly Ritual Planner</h2>
        </div>

        <div className="bg-[#14120F] rounded-3xl p-6 md:p-8 border border-amber-500/20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {planSchedule.map((item, idx) => (
              <div key={idx} className="bg-[#1C1915] p-4 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block mb-1">{item.day}</span>
                  <h4 className="font-serif font-bold text-sm text-white mb-1 leading-tight">{item.activity}</h4>
                  <span className="text-[10px] font-mono text-gray-400 block mb-2">{item.duration}</span>
                </div>
                <span className="text-[10px] font-sans text-gray-400 border-t border-white/5 pt-2 block">{item.focus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
