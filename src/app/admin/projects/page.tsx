'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowUp, ArrowDown, Trash2, Plus, CheckCircle2, Save, RotateCcw, Search, ShieldCheck } from 'lucide-react';
import { parseProjectNumberQuery } from '@/data/siteData';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featuredRank?: number;
  projectNumber?: number;
}

export default function AdminProjectsPage() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/admin/projects')
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data.projects || []);
        if (data.selectedProjectIds && Array.isArray(data.selectedProjectIds)) {
          setSelectedIds(data.selectedProjectIds);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Ordered Top 20 projects
  const top20Projects = selectedIds
    .map((id) => allProjects.find((p) => p.id === id))
    .filter(Boolean) as Project[];

  // Projects available to add to Top 20
  const availableProjects = allProjects
    .filter((p) => !selectedIds.includes(p.id))
    .filter((p) => {
      if (!searchQuery) return true;
      const numQuery = parseProjectNumberQuery(searchQuery);
      if (numQuery !== null) {
        return p.projectNumber === numQuery;
      }
      const q = searchQuery.toLowerCase();
      return p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    });

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newIds = [...selectedIds];
    const temp = newIds[index - 1];
    newIds[index - 1] = newIds[index];
    newIds[index] = temp;
    setSelectedIds(newIds);
  };

  const handleMoveDown = (index: number) => {
    if (index === selectedIds.length - 1) return;
    const newIds = [...selectedIds];
    const temp = newIds[index + 1];
    newIds[index + 1] = newIds[index];
    newIds[index] = temp;
    setSelectedIds(newIds);
  };

  const handleRemove = (id: string) => {
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const handleAdd = (id: string) => {
    if (selectedIds.length >= 20) {
      alert('Top 20 is already full. Remove a project first or reorder.');
      return;
    }
    setSelectedIds([...selectedIds, id]);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedProjectIds: selectedIds }),
      });
      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefault = () => {
    const defaultIds = allProjects
      .filter((p) => p.featuredRank !== undefined)
      .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999))
      .slice(0, 20)
      .map((p) => p.id);
    setSelectedIds(defaultIds);
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-400 font-mono text-sm">
        Loading Top 20 CMS Engine...
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl font-sans pb-16">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Crown className="w-5 h-5 text-amber-400" />
            <h1 className="text-2xl font-extrabold text-white">Top 20 Flagship Showcase Admin</h1>
          </div>
          <p className="text-slate-400 text-xs">
            Manage the exact projects and rankings (#01 through #20) displayed on the Home Page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors flex items-center gap-2 border border-slate-700 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-slate-400" />
            <span>Reset Default</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
          >
            {savedSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Saved Live!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-black" />
                <span>{saving ? 'Saving...' : 'Save Rankings'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Selected Top 20 Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Active Top 20 Sequence
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
              {selectedIds.length} / 20 Selected
            </span>
          </div>
          <span className="text-xs text-slate-400">
            Use arrows to reorder. Changes immediately affect the Home Page after saving.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {top20Projects.map((p, idx) => (
            <motion.div
              key={p.id}
              layout
              className="p-4 rounded-2xl bg-[#090D16] border border-amber-500/30 hover:border-amber-400 flex flex-col justify-between space-y-3 shadow-lg group relative"
            >
              <div className="relative h-28 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-mono font-bold">
                  #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                  {p.category}
                </span>
                <h3 className="text-sm font-bold text-white truncate mt-0.5">{p.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">{p.description}</p>
              </div>

              {/* Order Controls */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleMoveUp(idx)}
                    disabled={idx === 0}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 disabled:hover:text-slate-300 transition-colors"
                    title="Move Up"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveDown(idx)}
                    disabled={idx === selectedIds.length - 1}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 disabled:hover:text-slate-300 transition-colors"
                    title="Move Down"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(p.id)}
                  className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-colors"
                  title="Remove from Top 20"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Projects to Add to Top 20 */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white">Other Available Projects</h2>
            <p className="text-xs text-slate-400">
              Click &quot;Add to Top 20&quot; to include any of the remaining published platforms.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {availableProjects.map((p) => (
            <div
              key={p.id}
              className="p-4 rounded-2xl bg-[#090D16]/60 border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-3"
            >
              <div className="relative h-24 rounded-xl overflow-hidden bg-slate-900">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  {p.category}
                </span>
                <h3 className="text-sm font-bold text-white truncate mt-0.5">{p.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{p.description}</p>
              </div>

              <button
                type="button"
                onClick={() => handleAdd(p.id)}
                disabled={selectedIds.length >= 20}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-200 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Top 20</span>
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
