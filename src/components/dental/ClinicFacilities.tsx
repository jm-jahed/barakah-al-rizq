'use client';
import React from 'react';

export const ClinicFacilities: React.FC<any> = () => {
  const facilities = [
    { title: 'City Walk Lounge', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },
    { title: '3D Scanning Suite', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Clinic Spaces</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{facilities.map((f, idx) => (
          <div key={idx} className="bg-slate-950 rounded-3xl border border-cyan-500/20 overflow-hidden"><img src={f.image} alt={f.title} className="w-full h-56 object-cover" /><div className="p-6"><h3 className="font-sans font-bold text-xl text-white">{f.title}</h3></div></div>
        ))}</div>
      </div>
    </section>
  );
};
