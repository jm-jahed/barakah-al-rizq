'use client';

import React, { useEffect, useState } from 'react';

export default function AdminHomepageCMS() {
  const [form, setForm] = useState({
    heroEyebrow: '',
    heroHeadline: '',
    heroSubtitle: '',
    heroPrimaryCtaLabel: '',
    heroPrimaryCtaUrl: '',
    heroSecondaryCtaLabel: '',
    heroSecondaryCtaUrl: '',
    aboutTitle: '',
    aboutDescription: '',
    statsProjects: '',
    statsClients: '',
    statsUaeDistricts: '',
    statsCompileRate: '',
    selectedProjectIds: ['p-1', 'p-2', 'p-3'],
  });

  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/admin/homepage')
      .then((res) => res.json())
      .then((data) => {
        if (data.homepage) {
          setForm((prev) => ({
            ...prev,
            ...data.homepage,
            selectedProjectIds: data.homepage.selectedProjectIds || ['p-1', 'p-2', 'p-3'],
          }));
        }
      });

    fetch('/api/admin/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.projects) {
          setAllProjects(data.projects);
        }
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedMsg('');
    setErrorMsg('');

    if (form.selectedProjectIds.length > 20) {
      setErrorMsg('Maximum 20 featured projects allowed.');
      setSaving(false);
      return;
    }

    const res = await fetch('/api/admin/homepage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setSaving(false);
    if (res.ok) {
      setSavedMsg('Top 20 Featured Projects & Homepage CMS saved!');
      setTimeout(() => setSavedMsg(''), 3000);
    } else {
      setErrorMsg('Failed to save configuration');
    }
  };

  const getProjectById = (id: string) => allProjects.find((p) => String(p.id) === String(id));

  const addProject = (pId: string) => {
    if (!pId) return;
    setErrorMsg('');

    if (form.selectedProjectIds.map(String).includes(String(pId))) {
      setErrorMsg('Duplicate selection is not allowed. This project is already in Top 20.');
      return;
    }

    if (form.selectedProjectIds.length >= 20) {
      setErrorMsg('Maximum 20 featured projects allowed.');
      return;
    }

    setForm({
      ...form,
      selectedProjectIds: [...form.selectedProjectIds, pId],
    });
  };

  const removeProject = (id: string) => {
    setForm({
      ...form,
      selectedProjectIds: form.selectedProjectIds.filter((pId) => String(pId) !== String(id)),
    });
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...form.selectedProjectIds];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    setForm({ ...form, selectedProjectIds: updated });
  };

  const moveDown = (index: number) => {
    if (index === form.selectedProjectIds.length - 1) return;
    const updated = [...form.selectedProjectIds];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    setForm({ ...form, selectedProjectIds: updated });
  };

  const filteredProjects = allProjects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.slug && p.slug.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8 max-w-4xl w-full overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Homepage Top 20 Featured Platforms</h1>
          <p className="text-slate-400 text-xs mt-1">
            Rank and order up to 20 featured projects displayed on the main landing page.
          </p>
        </div>
        {savedMsg && (
          <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-xl shrink-0">
            ✓ {savedMsg}
          </div>
        )}
        {errorMsg && (
          <div className="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold rounded-xl shrink-0">
            ⚠ {errorMsg}
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Top 20 Featured Projects List */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-4 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Selected Featured Platforms (Rank 1 to 20)</h3>
              <p className="text-xs text-slate-400">
                Currently showing <strong className="text-amber-400">{form.selectedProjectIds.length}</strong> / 20 projects.
              </p>
            </div>
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-lg w-max">
              Max 20 Projects
            </span>
          </div>

          {/* Quick Select Project Dropdown */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
            <label className="block text-xs font-bold text-amber-400 uppercase font-mono">
              + Select Any Project to Add to Top 20 ({allProjects.length} Projects Available)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Filter search project name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-1/3 bg-slate-900 border border-slate-800 text-white rounded-xl p-2.5 text-xs focus:border-amber-400 focus:outline-none"
              />
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addProject(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full sm:w-2/3 bg-slate-900 border border-amber-500/40 text-white font-bold rounded-xl p-2.5 text-xs focus:border-amber-400 focus:outline-none"
              >
                <option value="">-- Choose Project to Add to Featured List --</option>
                {filteredProjects.map((p) => {
                  const isSelected = form.selectedProjectIds.map(String).includes(String(p.id));
                  return (
                    <option key={p.id} value={p.id} disabled={isSelected}>
                      {isSelected ? '✓ ' : ''}{p.title} ({p.category}) — /{p.slug}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Ranked List */}
          <div className="space-y-3">
            {form.selectedProjectIds.map((pId, idx) => {
              const project = getProjectById(pId) || {
                id: pId,
                title: `Project #${pId}`,
                category: 'UAE Enterprise',
                slug: 'work',
                heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
              };

              return (
                <div
                  key={pId}
                  className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-12 h-12 object-cover rounded-xl border border-slate-800 shrink-0"
                    />
                    <div className="min-w-0">
                      <strong className="text-white text-sm font-bold block truncate">{project.title}</strong>
                      <span className="text-xs text-amber-400 block font-mono">{project.category}</span>
                      <span className="text-[10px] text-slate-500 block truncate">/{project.slug}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 border-slate-800/80 pt-3 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-mono disabled:opacity-30"
                      title="Move Up"
                    >
                      ↑ Up
                    </button>
                    <button
                      type="button"
                      onClick={() => moveDown(idx)}
                      disabled={idx === form.selectedProjectIds.length - 1}
                      className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-mono disabled:opacity-30"
                      title="Move Down"
                    >
                      ↓ Down
                    </button>
                    <button
                      type="button"
                      onClick={() => removeProject(pId)}
                      className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-bold rounded-lg transition-colors ml-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Section Controls */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-4 sm:p-8 space-y-6 shadow-2xl">
          <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Hero Section Controls</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Eyebrow Pill Text</label>
              <input
                type="text"
                value={form.heroEyebrow}
                onChange={(e) => setForm({ ...form, heroEyebrow: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Headline</label>
              <input
                type="text"
                value={form.heroHeadline}
                onChange={(e) => setForm({ ...form, heroHeadline: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Subtitle / Description</label>
              <textarea
                rows={3}
                value={form.heroSubtitle}
                onChange={(e) => setForm({ ...form, heroSubtitle: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-2xl text-xs transition-all shadow-lg shadow-amber-500/20"
        >
          {saving ? 'Saving...' : 'Save Top 20 Featured Projects Configuration'}
        </button>
      </form>
    </div>
  );
}
