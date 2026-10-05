'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import {
  Plus,
  Edit3,
  CheckCircle,
  AlertTriangle,
  Layers,
  RefreshCw,
  Trash2,
  ExternalLink,
  ShieldCheck,
  Tag,
  Boxes,
  Sparkles,
  Building2,
  FolderTree,
  ChevronRight,
} from 'lucide-react';

interface EnrichedCategory {
  id: string;
  name: string;
  displayName: string;
  arabicName: string;
  description?: string;
  image?: string;
  displayOrder: number;
  active: boolean;
  productCount: number;
  activeProductCount: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<EnrichedCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'CREATE' | 'EDIT'>('CREATE');
  const [editingCategory, setEditingCategory] = useState<EnrichedCategory | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Deactivate Modal State
  const [deactivateModal, setDeactivateModal] = useState<{
    open: boolean;
    category: EnrichedCategory | null;
  }>({ open: false, category: null });
  const [actionLoading, setActionLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    displayName: '',
    name: '',
    arabicName: '',
    description: '',
    image: '',
    displayOrder: 1,
    active: true,
  });

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/foodstuff/categories');
      if (!res.ok) throw new Error(`Failed to load categories (HTTP ${res.status})`);
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const totalCommodities = useMemo(() => {
    return categories.reduce((sum, c) => sum + (c.productCount || 0), 0);
  }, [categories]);

  const activeDepartmentsCount = useMemo(() => {
    return categories.filter((c) => c.active !== false).length;
  }, [categories]);

  const handleOpenCreate = () => {
    setModalMode('CREATE');
    setEditingCategory(null);
    setFormError(null);
    setFormData({
      displayName: '',
      name: '',
      arabicName: '',
      description: '',
      image: '',
      displayOrder: categories.length + 1,
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (cat: EnrichedCategory) => {
    setModalMode('EDIT');
    setEditingCategory(cat);
    setFormError(null);
    setFormData({
      displayName: cat.displayName,
      name: cat.name,
      arabicName: cat.arabicName || '',
      description: cat.description || '',
      image: cat.image || '',
      displayOrder: cat.displayOrder ?? 1,
      active: cat.active !== false,
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!formData.displayName.trim()) {
      setFormError('Display name is required.');
      setIsSubmitting(false);
      return;
    }

    try {
      if (modalMode === 'CREATE') {
        const res = await fetch('/api/admin/foodstuff/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to create category');

        setIsModalOpen(false);
        await fetchCategories();
      } else if (modalMode === 'EDIT' && editingCategory) {
        const res = await fetch('/api/admin/foodstuff/categories', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingCategory.id,
            ...formData,
          }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to update category');

        setIsModalOpen(false);
        await fetchCategories();
      }
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleActive = async (cat: EnrichedCategory) => {
    setActionLoading(true);
    try {
      const res = await fetch('/api/admin/foodstuff/categories', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: cat.id,
          active: !cat.active,
        }),
      });

      if (!res.ok) throw new Error('Failed to toggle status');
      await fetchCategories();
      setDeactivateModal({ open: false, category: null });
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Action failed');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      {/* Executive Operations Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#0E1B38] to-[#0A1020] border border-emerald-500/20 p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <FolderTree className="w-3 h-3" />
                Taxonomy Master
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Building2 className="w-3 h-3" />
                Al Aweer Commodity Departments
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 font-arabic">
                التبويب والفئات
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Commodity Categories
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Configure wholesale commodity departments, Arabic translations, packaging units, and display hierarchy for the Dubai B2B wholesale catalog.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap shrink-0">
            <button
              onClick={fetchCategories}
              disabled={loading}
              className="p-2.5 bg-slate-900/90 border border-slate-700/80 hover:border-emerald-500/50 text-slate-300 hover:text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
              title="Refresh Categories"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleOpenCreate}
              className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Add New Category</span>
            </button>
          </div>
        </div>

        {/* Quick Summary Pill Strip */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-800/80">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Departments</span>
            <span className="text-base font-black text-white font-mono">{categories.length} Total</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Active Status</span>
            <span className="text-base font-black text-emerald-400 font-mono">{activeDepartmentsCount} Online</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between col-span-2 sm:col-span-1">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Total Listed</span>
            <span className="text-base font-black text-amber-300 font-mono">{totalCommodities} Commodities</span>
          </div>
        </div>
      </div>

      {/* Grid of Luxury Category Cards */}
      {loading ? (
        <div className="p-16 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
          <span className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-emerald-400 tracking-wider">Syncing Wholesale Departments...</span>
        </div>
      ) : error ? (
        <div className="p-10 text-center text-red-400 space-y-3 bg-[#0A0E1A] border border-red-500/30 rounded-2xl shadow-xl">
          <AlertTriangle className="w-8 h-8 mx-auto text-red-400" />
          <div className="text-sm font-semibold">{error}</div>
          <button
            onClick={fetchCategories}
            className="px-4 py-2 bg-slate-900 border border-slate-800 text-xs text-white rounded-xl hover:border-slate-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 shadow-xl group ${
                cat.active
                  ? 'border-slate-800/90 hover:border-emerald-500/50 hover:shadow-emerald-950/20'
                  : 'border-slate-800/60 opacity-60'
              }`}
            >
              {/* Subtle top glow highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent group-hover:via-emerald-400 transition-all" />

              <div className="space-y-4">
                {/* Top Row: Thumbnail + Title + Display Order */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 group-hover:border-emerald-500/50 overflow-hidden shrink-0 shadow-md transition-colors">
                      {cat.image ? (
                        <Image
                          src={cat.image}
                          alt={cat.displayName}
                          fill
                          sizes="56px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-emerald-400 bg-emerald-500/10">
                          <Tag className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-emerald-300 transition-colors">
                        {cat.displayName}
                      </h3>
                      {cat.arabicName && (
                        <div className="text-xs text-emerald-400 font-arabic mt-0.5">
                          {cat.arabicName}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 shrink-0">
                    #{cat.displayOrder < 10 ? `0${cat.displayOrder}` : cat.displayOrder} Priority
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {cat.description || 'Verified wholesale foodstuff commodity department.'}
                </p>

                {/* System Identifier & Commodity Count Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div className="text-slate-400 flex items-center gap-1.5">
                    <span className="text-slate-400">Key:</span>
                    <span className="text-slate-200 bg-slate-900 border border-slate-700/60 px-2 py-0.5 rounded text-[10px] font-bold">
                      {cat.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{cat.productCount} Items ({cat.activeProductCount} live)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() =>
                    cat.productCount > 0 && cat.active
                      ? setDeactivateModal({ open: true, category: cat })
                      : handleToggleActive(cat)
                  }
                  className={`text-[11px] font-mono font-semibold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                    cat.active
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.active ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]' : 'bg-slate-600'}`} />
                  <span>{cat.active ? 'Active' : 'Inactive'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(cat)}
                    className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-700/80 hover:border-amber-500/50 hover:text-amber-300 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CREATE / EDIT CATEGORY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0A0E1A] border border-slate-800/90 rounded-3xl w-full max-w-lg p-6 sm:p-7 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  {modalMode === 'CREATE' ? <Plus className="w-4 h-4 stroke-[2.5]" /> : <Edit3 className="w-4 h-4" />}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white tracking-wide">
                    {modalMode === 'CREATE' ? 'Add Commodity Category' : `Edit Category: ${editingCategory?.displayName}`}
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    Department taxonomy and public wholesale catalog hierarchy.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              {formError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Display Name (English) <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  placeholder="e.g. Fresh Vegetables / Pulses & Grains"
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  System Identifier Code (Uppercase)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value.toUpperCase() })}
                  placeholder="e.g. VEGETABLES (Auto-generated if left empty)"
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Arabic Name (الاسم بالعربي)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={formData.arabicName}
                  onChange={(e) => setFormData({ ...formData, arabicName: e.target.value })}
                  placeholder="خضروات طازجة"
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-arabic text-sm"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Department Description
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Description of commodities included in this department..."
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center pt-2">
                <div>
                  <label className="block text-slate-400 mb-1">Display Priority Order:</label>
                  <input
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white font-mono focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <label className="flex items-center gap-2.5 cursor-pointer mt-5">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="font-semibold text-slate-200">Active Department</span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-950/40 transition"
                >
                  {isSubmitting ? 'Saving...' : modalMode === 'CREATE' ? 'Create Category' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DEACTIVATE CONFIRMATION MODAL */}
      {deactivateModal.open && deactivateModal.category && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#0A0E1A] border border-slate-800 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Deactivate "{deactivateModal.category.displayName}"?
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  This category contains {deactivateModal.category.productCount} commodities. Deactivating it will hide the category tab from the wholesale catalog, but products and historical orders will remain intact.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeactivateModal({ open: false, category: null })}
                disabled={actionLoading}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleToggleActive(deactivateModal.category!)}
                disabled={actionLoading}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-2"
              >
                {actionLoading && <span className="w-3 h-3 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />}
                <span>Confirm Deactivation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
