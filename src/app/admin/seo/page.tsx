'use client';

import React, { useEffect, useState } from 'react';

export default function AdminSEOCMS() {
  const [seo, setSeo] = useState({
    defaultTitle: '',
    defaultDescription: '',
    ogImage: '',
    indexingEnabled: true,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/admin/seo')
      .then((res) => res.json())
      .then((data) => {
        if (data.seo) setSeo(data.seo);
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch('/api/admin/seo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seo),
    });
    setSaving(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-white">SEO Control Center</h1>
        <p className="text-slate-400 text-xs mt-1">Global metadata, default open-graph sharing images, and indexing policies.</p>
      </div>

      <form onSubmit={handleSave} className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 space-y-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Global Site Title</label>
          <input
            type="text"
            value={seo.defaultTitle}
            onChange={(e) => setSeo({ ...seo, defaultTitle: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Global Meta Description</label>
          <textarea
            rows={3}
            value={seo.defaultDescription}
            onChange={(e) => setSeo({ ...seo, defaultDescription: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Default OG Sharing Image URL</label>
          <input
            type="text"
            value={seo.ogImage}
            onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
        >
          {saving ? 'Saving...' : 'Save SEO Configuration'}
        </button>
      </form>
    </div>
  );
}
