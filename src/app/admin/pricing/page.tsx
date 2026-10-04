'use client';
import React, { useEffect, useState } from 'react';

export default function AdminPricingPage() {
  const [pricing, setPricing] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/admin/pricing').then((r) => r.json()).then((d) => setPricing(d.pricing || []));
  }, []);
  return (
    <div className="space-y-6 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-white">Pricing CMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricing.map((p) => (
          <div key={p.id} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <div className="text-2xl font-black text-amber-400">AED {p.priceAED}</div>
            <p className="text-xs text-slate-400">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
