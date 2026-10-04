'use client';
import React, { useEffect, useState } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/admin/settings').then((r) => r.json()).then((d) => setSettings(d.settings || []));
  }, []);
  return (
    <div className="space-y-6 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-white">Agency Site Settings</h1>
      <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-4">
        {settings.map((s) => (
          <div key={s.id} className="flex justify-between items-center text-xs">
            <span className="font-mono text-amber-400 uppercase">{s.key}</span>
            <span className="text-white font-bold">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
