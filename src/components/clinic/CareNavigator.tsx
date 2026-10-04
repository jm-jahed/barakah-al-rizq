'use client';
import React, { useState } from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { DEPARTMENTS_DATA, SERVICES_DATA } from '@/data/clinicData';

export const CareNavigator: React.FC<any> = ({ onSelectService, onOpenBooking }) => {
  const [selectedTopic, setSelectedTopic] = useState('General Health');

  const topics = [
    { name: 'General Health', deptId: 'general' },
    { name: 'Skin & Aesthetics', deptId: 'dermatology' },
    { name: 'Dental Health', deptId: 'dental' },
    { name: 'Women’s Health', deptId: 'women' },
    { name: 'Child Health', deptId: 'pediatrics' },
    { name: 'Joints & Back Pain', deptId: 'orthopedics' }
  ];

  const currentTopicObj = topics.find(t => t.name === selectedTopic) || topics[0];
  const matchedDept = DEPARTMENTS_DATA.find(d => d.id === currentTopicObj.deptId) || DEPARTMENTS_DATA[0];
  const matchedServices = SERVICES_DATA.filter(s => s.departmentId === currentTopicObj.deptId);

  return (
    <section id="navigator" className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Smart Care Navigator</h2></div>
        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl max-w-4xl mx-auto mb-8 flex items-start gap-3 text-xs text-amber-200">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span>Informational Guidance Notice: This tool assists with clinic navigation only. It does not diagnose medical conditions. For acute medical emergencies, please dial 998 (UAE Ambulance).</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-2">
            {topics.map(t => (
              <button key={t.name} onClick={() => setSelectedTopic(t.name)} className={`w-full text-left p-3.5 rounded-xl text-xs font-mono font-bold ${selectedTopic === t.name ? 'bg-sky-400 text-slate-950' : 'bg-slate-900 text-slate-300'}`}>
                {t.name}
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 bg-slate-900 p-6 rounded-3xl border border-sky-500/30 space-y-4">
            <h3 className="text-xl font-sans font-bold text-white">{matchedDept.name}</h3>
            <p className="text-xs text-slate-300">{matchedDept.description}</p>
            <div className="space-y-2">
              {matchedServices.map(svc => (
                <div key={svc.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-sans font-bold text-white">{svc.name}</span>
                  <button onClick={() => { if(onSelectService) onSelectService(svc); onOpenBooking(); }} className="px-3 py-1.5 bg-sky-400 text-slate-950 font-mono text-xs font-bold uppercase rounded-lg">Book</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
