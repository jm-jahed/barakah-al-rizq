'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { 
  Plus, Edit3, CheckCircle, AlertTriangle, Layers, RefreshCw, 
  Trash2, ExternalLink, ShieldCheck, Tag
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
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">Commodity Categories</h1>
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-mono">
              Taxonomy Master
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Configure product departments, Arabic translations, and display hierarchy for the B2B catalog.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchCategories}
            disabled={loading}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            title="Refresh Categories"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Category</span>
          </button>
        </div>
      </div>

      {/* Grid of Categories */}
      {loading ? (
        <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
          <span className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono">Loading Commodity Categories...</span>
        </div>
      ) : error ? (
        <div className="p-10 text-center text-red-400 space-y-3 bg-[#0F172A] border border-slate-800 rounded-2xl">
          <AlertTriangle className="w-8 h-8 mx-auto text-red-400" />
          <div className="text-sm font-semibold">{error}</div>
          <button
            onClick={fetchCategories}
            className="px-4 py-2 bg-slate-900 border border-slate-800 text-xs text-white rounded-xl"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`bg-[#0F172A] border rounded-2xl p-5 flex flex-col justify-between transition-all ${
                cat.active ? 'border-slate-800 hover:border-slate-700' : 'border-slate-800/60 opacity-60'
              }`}
            >
              <div className="space-y-4">
                {/* Top Row: Icon/Image + Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0">
                      {cat.image ? (
                        <Image
                          src={cat.image}
                          alt={cat.displayName}
                          fill
                          sizes="48px"
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-emerald-400">
                          <Tag className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{cat.displayName}</h3>
                      {cat.arabicName && (
                        <div className="text-xs text-emerald-400 font-arabic">{cat.arabicName}</div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                    Order #{cat.displayOrder}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 line-clamp-2">
                  {cat.description || 'No description provided.'}
                </p>

                {/* Internal Key & Metrics */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div className="text-slate-500">
                    System Key: <span className="text-slate-300 font-semibold">{cat.name}</span>
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    {cat.productCount} Commodities ({cat.activeProductCount} active)
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => cat.productCount > 0 && cat.active ? setDeactivateModal({ open: true, category: cat }) : handleToggleActive(cat)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition ${
                    cat.active
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.active ? '● Active' : '○ Inactive'}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(cat)}
                    className="p-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-lg text-xs flex items-center gap-1.5 px-3 transition"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl w-full max-w-lg p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  {modalMode === 'CREATE' ? <Plus className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    {modalMode === 'CREATE' ? 'Add New Commodity Category' : `Edit Category: ${editingCategory?.displayName}`}
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    Department taxonomy and public catalog filter.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 text-base"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {formError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Display Name (English) <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  placeholder="e.g. Fresh Vegetables / Dairy / Grains"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  System Identifier Code (Uppercase)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value.toUpperCase() })}
                  placeholder="e.g. VEGETABLES (Auto-generated if left empty)"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Arabic Name (الاسم بالعربي)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={formData.arabicName}
                  onChange={(e) => setFormData({ ...formData, arabicName: e.target.value })}
                  placeholder="خضروات طازجة"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-arabic"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Description of commodities included in this department..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center pt-2">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Display Order:</label>
                  <input
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white font-mono focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <label className="flex items-center gap-2.5 cursor-pointer mt-4">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-semibold text-slate-200">Active Department</span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Deactivate "{deactivateModal.category.displayName}"?
                </h3>
                <p className="text-[11px] text-slate-400">
                  This category contains {deactivateModal.category.productCount} commodities. Deactivating it will hide the category filter tab from the wholesale portal, but existing products and historical orders will remain completely intact.
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
