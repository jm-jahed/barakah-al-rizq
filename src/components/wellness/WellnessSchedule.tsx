'use client';
import React, { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';

export const WellnessSchedule: React.FC<any> = ({ onOpenBooking }) => {
  const [activeDay, setActiveDay] = useState('Mon');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const scheduleItems = [
    { time: '07:00 AM', name: 'Sunrise Vinyasa Flow', category: 'Yoga', duration: '60 min', instructor: 'Maya Lin', level: 'All Levels', spots: '3 Spots Left' },
    { time: '08:30 AM', name: 'Reformer Pilates Core', category: 'Pilates', duration: '50 min', instructor: 'Sofia Laurent', level: 'Intermediate', spots: '2 Spots Left' },
    { time: '09:30 AM', name: 'Slow Flow & Restore', category: 'Yoga', duration: '60 min', instructor: 'Aria Sterling', level: 'Beginner', spots: '5 Spots Left' },
    { time: '01:00 PM', name: 'Executive De-Stress Express', category: 'Breathwork', duration: '35 min', instructor: 'Kaelen Thorne', level: 'All Levels', spots: '4 Spots Left' },
    { time: '05:30 PM', name: 'Power Sculpt Yoga', category: 'Yoga', duration: '60 min', instructor: 'Liam Vance', level: 'Intermediate', spots: '1 Spot Left' },
    { time: '06:30 PM', name: 'Pranayama & Somatic Breathwork', category: 'Breathwork', duration: '45 min', instructor: 'Kaelen Thorne', level: 'All Levels', spots: '6 Spots Left' },
    { time: '07:30 PM', name: 'Yin & Deep Release', category: 'Yoga', duration: '75 min', instructor: 'Elena Rostova', level: 'All Levels', spots: '2 Spots Left' }
  ];

  return (
    <section id="schedule" className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">LIVE STUDIO TIMETABLE</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Weekly Class Schedule</h2>
          <p className="text-sm text-gray-400 font-sans">Select your preferred day and reserve your spot in our intimate 12-person sanctuary space.</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {days.map(d => (
            <button key={d} onClick={() => setActiveDay(d)} className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold ${activeDay === d ? 'bg-amber-500 text-black' : 'bg-[#181512] border border-amber-500/20 text-gray-300'}`}>{d}</button>
          ))}
        </div>

        <div className="bg-[#14120F] rounded-3xl border border-amber-500/20 p-4 md:p-6 space-y-3">
          {scheduleItems.map((item, idx) => (
            <div key={idx} className="bg-[#1C1915] p-4 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-24 px-3 py-2 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
                  <span className="text-xs font-mono font-bold text-amber-300 block">{item.time}</span>
                  <span className="text-[10px] font-mono text-gray-400">{item.duration}</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-white">{item.name}</h4>
                  <span className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><User className="w-3 h-3 text-amber-400" /> {item.instructor}</span>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4">
                <span className="text-xs font-mono text-emerald-400 font-bold">{item.spots}</span>
                <button onClick={() => onOpenBooking()} className="px-4 py-2 bg-amber-500 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                  <span>Reserve</span><ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
