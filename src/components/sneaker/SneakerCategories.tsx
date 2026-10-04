'use client';
import React from 'react';

export const SneakerCategories: React.FC = () => {
  const cats = [
    { title: 'Basketball', count: '14 Models', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop' },
    { title: 'Running', count: '18 Models', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop' },
    { title: 'Lifestyle', count: '22 Models', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop' },
    { title: 'Skate', count: '12 Models', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop' },
  ];
  return (
    <section id="categories" className="py-24 bg-[#0A0908] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-2">CATEGORY BENTO</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Sneaker Silhouettes.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cats.map((c) => (
            <div key={c.title} className="group relative rounded-3xl overflow-hidden border border-amber-500/20 bg-[#141210] h-80">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-amber-400">{c.count}</span>
                <h3 className="font-serif text-2xl text-white font-bold mb-3">{c.title}</h3>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
