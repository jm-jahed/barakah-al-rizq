'use client';
import React, { useEffect, useState } from 'react';

export default function AdminServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/admin/services').then((r) => r.json()).then((d) => setServices(d.services || []));
  }, []);
  return (
    <div className="space-y-6 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-white">Services CMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white">{s.title}</h3>
            <p className="text-xs text-slate-400 mt-2">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
