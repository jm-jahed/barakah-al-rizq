'use client';

import React, { useEffect, useState } from 'react';

export default function AdminNavigationCMS() {
  const [navItems, setNavItems] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/admin/navigation')
      .then((res) => res.json())
      .then((data) => {
        if (data.navigation) setNavItems(data.navigation);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch('/api/admin/navigation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(navItems),
    });
    setSaving(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Header & Footer Navigation CMS</h1>
          <p className="text-slate-400 text-xs mt-1">Manage navbar link labels, URLs, display order, and visibility.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
        >
          {saving ? 'Saving...' : 'Save Navigation Changes'}
        </button>
      </div>

      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 space-y-4">
        {navItems.map((item, idx) => (
          <div key={item.id} className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <input
              type="text"
              value={item.label}
              onChange={(e) => {
                const updated = [...navItems];
                updated[idx].label = e.target.value;
                setNavItems(updated);
              }}
              className="bg-slate-900 border border-slate-800 text-white rounded-lg p-2 text-xs font-bold w-1/3"
            />
            <input
              type="text"
              value={item.url}
              onChange={(e) => {
                const updated = [...navItems];
                updated[idx].url = e.target.value;
                setNavItems(updated);
              }}
              className="bg-slate-900 border border-slate-800 text-slate-300 rounded-lg p-2 text-xs font-mono w-1/3"
            />
            <label className="flex items-center gap-2 text-xs text-slate-400">
              <input
                type="checkbox"
                checked={item.visible}
                onChange={(e) => {
                  const updated = [...navItems];
                  updated[idx].visible = e.target.checked;
                  setNavItems(updated);
                }}
              />
              Visible
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
