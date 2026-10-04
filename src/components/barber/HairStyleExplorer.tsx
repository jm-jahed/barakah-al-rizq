'use client';
import React from 'react';

export const HairStyleExplorer: React.FC<any> = () => {
  const styles = ['Classic Side Part', 'Textured Crop', 'Slick Back', 'Low Skin Fade', 'Mid Fade', 'High Fade', 'Pompadour', 'Modern Quiff'];

  return (
    <section className="py-24 bg-neutral-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Hair Style Explorer</h2></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{styles.map((st, i) => (<div key={i} className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 font-sans font-bold text-sm text-white">{st}</div>))}</div>
      </div>
    </section>
  );
};
