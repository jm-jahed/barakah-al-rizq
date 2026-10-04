'use client';
import React, { useEffect, useState } from 'react';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/admin/testimonials').then((r) => r.json()).then((d) => setTestimonials(d.testimonials || []));
  }, []);
  return (
    <div className="space-y-6 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-white">Testimonials CMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <p className="text-xs italic text-slate-300">"{t.message}"</p>
            <span className="text-xs font-bold text-white block mt-2">{t.name} — {t.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
