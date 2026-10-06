'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { 
  Search, Plus, Filter, Edit3, Archive, CheckCircle, AlertTriangle, 
  Trash2, Upload, ExternalLink, RefreshCw, X, Eye, Layers, ShieldCheck, Box
} from 'lucide-react';

interface EnrichedProduct {
  id: string;
  slug?: string;
  name: string;
  arabicName: string;
  category: string;
  origin: string;
  variety?: string;
  grade: string;
  size?: string;
  image: string;
  description: string;
  defaultPackagingUnit: string;
  defaultPackagingDetails: string;
  defaultNetWeightKg: number | null;
  defaultMoq: string;
  published: boolean;
  featured?: boolean;
  displayOrder?: number;
  createdAt: string;
  updatedAt: string;
  containerPriceAED: number | null;
  containerMoq: string;
  containerPackagingDetails: string;
  containerBusinessStatus: string;
  marketPriceAED: number | null;
  marketMoq: string;
  marketTrend: string;
  marketBusinessStatus: string;
}

interface CategoryItem {
  id: string;
  name: string;
  displayName: string;
  arabicName: string;
  active: boolean;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<EnrichedProduct[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'ACTIVE' | 'ARCHIVED'>('ALL');

  // Modal / Drawer state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'CREATE' | 'EDIT'>('CREATE');
  const [editingProduct, setEditingProduct] = useState<EnrichedProduct | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Archive / Delete Confirmation
  const [confirmModal, setConfirmModal] = useState<{
    open: boolean;
    type: 'ARCHIVE' | 'ACTIVATE' | 'DELETE';
    product: EnrichedProduct | null;
  }>({ open: false, type: 'ARCHIVE', product: null });
  const [actionLoading, setActionLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    arabicName: '',
    slug: '',
    category: 'VEGETABLES',
    origin: '',
    grade: 'GRADE A (PREMIUM)',
    variety: '',
    size: '',
    image: '',
    description: '',
    defaultPackagingUnit: 'CTN',
    defaultPackagingDetails: '',
    defaultNetWeightKg: '',
    defaultMoq: '100 CTN',
    containerPriceAED: '',
    containerMoq: '100 CTN',
    marketPriceAED: '',
    marketMoq: '10 CTN',
    published: true,
    featured: false,
    displayOrder: 0,
  });

  // Image upload state
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load Products & Categories
  const fetchProductsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/foodstuff/products');
      if (!res.ok) {
        throw new Error(`Failed to load products (HTTP ${res.status})`);
      }
      const data = await res.json();
      setProducts(data.products || []);
      setCategories(data.categories || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'ALL' && p.category.toUpperCase() !== selectedCategory.toUpperCase()) {
        return false;
      }
      // Status filter
      if (selectedStatus === 'ACTIVE' && p.published === false) return false;
      if (selectedStatus === 'ARCHIVED' && p.published !== false) return false;

      // Search filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesArabic = p.arabicName && p.arabicName.includes(query);
        const matchesOrigin = p.origin && p.origin.toLowerCase().includes(query);
        const matchesId = p.id.toLowerCase().includes(query);
        return matchesName || matchesArabic || matchesOrigin || matchesId;
      }

      return true;
    });
  }, [products, selectedCategory, selectedStatus, searchTerm]);

  // KPIs
  const stats = useMemo(() => {
    const total = products.length;
    const active = products.filter((p) => p.published !== false).length;
    const archived = products.filter((p) => p.published === false).length;
    const containerVerified = products.filter((p) => p.containerPriceAED !== null).length;
    return { total, active, archived, containerVerified };
  }, [products]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setModalMode('CREATE');
    setEditingProduct(null);
    setFormError(null);
    setUploadError(null);
    setFormData({
      name: '',
      arabicName: '',
      slug: '',
      category: categories.length > 0 ? categories[0].name : 'VEGETABLES',
      origin: 'UAE / GCC',
      grade: 'GRADE A (PREMIUM)',
      variety: '',
      size: '',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop',
      description: '',
      defaultPackagingUnit: 'CTN',
      defaultPackagingDetails: '10 KG Master Carton Box',
      defaultNetWeightKg: '10',
      defaultMoq: '100 CTN',
      containerPriceAED: '',
      containerMoq: '100 CTN',
      marketPriceAED: '',
      marketMoq: '10 CTN',
      published: true,
      featured: false,
      displayOrder: products.length + 1,
    });
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (prod: EnrichedProduct) => {
    setModalMode('EDIT');
    setEditingProduct(prod);
    setFormError(null);
    setUploadError(null);
    setFormData({
      name: prod.name,
      arabicName: prod.arabicName || '',
      slug: prod.id,
      category: prod.category,
      origin: prod.origin || '',
      grade: prod.grade || 'GRADE A (PREMIUM)',
      variety: prod.variety || '',
      size: prod.size || '',
      image: prod.image,
      description: prod.description || '',
      defaultPackagingUnit: prod.defaultPackagingUnit || 'CTN',
      defaultPackagingDetails: prod.defaultPackagingDetails || '',
      defaultNetWeightKg: prod.defaultNetWeightKg !== null ? String(prod.defaultNetWeightKg) : '',
      defaultMoq: prod.defaultMoq || '100 CTN',
      containerPriceAED: prod.containerPriceAED !== null ? String(prod.containerPriceAED) : '',
      containerMoq: prod.containerMoq || prod.defaultMoq || '100 CTN',
      marketPriceAED: prod.marketPriceAED !== null ? String(prod.marketPriceAED) : '',
      marketMoq: prod.marketMoq || '10 CTN',
      published: prod.published !== false,
      featured: Boolean(prod.featured),
      displayOrder: prod.displayOrder ?? 0,
    });
    setIsModalOpen(true);
  };

  // Image File Upload Handler
  const handleImageFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    setUploadError(null);

    const fd = new FormData();
    fd.append('file', file);

    try {
      const res = await fetch('/api/admin/foodstuff/media/upload', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to upload image');
      }

      setFormData((prev) => ({ ...prev, image: data.url }));
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Form Submit Handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!formData.name.trim()) {
      setFormError('Product Name is required.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.origin.trim()) {
      setFormError('Origin country is required.');
      setIsSubmitting(false);
      return;
    }

    try {
      if (modalMode === 'CREATE') {
        const payload = {
          name: formData.name.trim(),
          arabicName: formData.arabicName.trim(),
          slug: formData.slug.trim(),
          category: formData.category,
          origin: formData.origin.trim(),
          grade: formData.grade,
          variety: formData.variety.trim() || undefined,
          size: formData.size.trim() || undefined,
          image: formData.image.trim(),
          description: formData.description.trim(),
          defaultPackagingUnit: formData.defaultPackagingUnit,
          defaultPackagingDetails: formData.defaultPackagingDetails.trim(),
          defaultNetWeightKg: formData.defaultNetWeightKg ? parseFloat(formData.defaultNetWeightKg) : null,
          defaultMoq: formData.defaultMoq.trim(),
          containerPriceAED: formData.containerPriceAED !== '' ? parseFloat(formData.containerPriceAED) : null,
          containerMoq: formData.containerMoq.trim(),
          marketPriceAED: formData.marketPriceAED !== '' ? parseFloat(formData.marketPriceAED) : null,
          marketMoq: formData.marketMoq.trim(),
          published: formData.published,
          featured: formData.featured,
          displayOrder: Number(formData.displayOrder),
        };

        const res = await fetch('/api/admin/foodstuff/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to create product');
        }

        setIsModalOpen(false);
        await fetchProductsData();
      } else if (modalMode === 'EDIT' && editingProduct) {
        const payload = {
          id: editingProduct.id,
          productUpdates: {
            name: formData.name.trim(),
            arabicName: formData.arabicName.trim(),
            category: formData.category,
            origin: formData.origin.trim(),
            grade: formData.grade,
            variety: formData.variety.trim() || undefined,
            size: formData.size.trim() || undefined,
            image: formData.image.trim(),
            description: formData.description.trim(),
            defaultPackagingUnit: formData.defaultPackagingUnit,
            defaultPackagingDetails: formData.defaultPackagingDetails.trim(),
            defaultNetWeightKg: formData.defaultNetWeightKg ? parseFloat(formData.defaultNetWeightKg) : null,
            defaultMoq: formData.defaultMoq.trim(),
            published: formData.published,
            featured: formData.featured,
            displayOrder: Number(formData.displayOrder),
          },
          containerUpdates: {
            priceAED: formData.containerPriceAED !== '' ? parseFloat(formData.containerPriceAED) : null,
            moq: formData.containerMoq.trim(),
            packagingUnit: formData.defaultPackagingUnit,
            packagingDetails: formData.defaultPackagingDetails.trim(),
            netWeightKg: formData.defaultNetWeightKg ? parseFloat(formData.defaultNetWeightKg) : null,
          },
          marketUpdates: {
            priceAED: formData.marketPriceAED !== '' ? parseFloat(formData.marketPriceAED) : null,
            minPurchaseQty: formData.marketMoq.trim(),
            packagingUnit: formData.defaultPackagingUnit,
            packagingDetails: formData.defaultPackagingDetails.trim(),
            netWeightKg: formData.defaultNetWeightKg ? parseFloat(formData.defaultNetWeightKg) : null,
          },
        };

        const res = await fetch('/api/admin/foodstuff/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to update product');
        }

        setIsModalOpen(false);
        await fetchProductsData();
      }
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Save operation failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Perform Archive / Activate / Delete
  const handleConfirmAction = async () => {
    if (!confirmModal.product) return;
    setActionLoading(true);

    try {
      if (confirmModal.type === 'ARCHIVE') {
        const res = await fetch('/api/admin/foodstuff/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: confirmModal.product.id, action: 'ARCHIVE' }),
        });
        if (!res.ok) throw new Error('Failed to archive product');
      } else if (confirmModal.type === 'ACTIVATE') {
        const res = await fetch('/api/admin/foodstuff/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: confirmModal.product.id, action: 'ACTIVATE' }),
        });
        if (!res.ok) throw new Error('Failed to activate product');
      } else if (confirmModal.type === 'DELETE') {
        const prodId = confirmModal.product.id;
        // Optimistically remove from state immediately so UI updates with zero lag
        setProducts((prev) => prev.filter((p) => p.id !== prodId));
        setConfirmModal({ open: false, type: 'ARCHIVE', product: null });

        const res = await fetch(`/api/admin/foodstuff/products?id=${encodeURIComponent(prodId)}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
          throw new Error(data.error || data.message || 'Failed to permanently delete product');
        }
        await fetchProductsData();
        return;
      }

      setConfirmModal({ open: false, type: 'ARCHIVE', product: null });
      await fetchProductsData();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Action failed');
      await fetchProductsData();
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">Commodity Products Master</h1>
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-mono">
              UAE B2B Catalog
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Manage live commodity specs, packaging units, and wholesale container baselines for Al Aweer and UAE market supply.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchProductsData}
            disabled={loading}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            title="Refresh Catalog"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* KPI Overview Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Total Products</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">{stats.total}</div>
          <div className="text-[10px] text-slate-500 mt-1">Complete wholesale roster</div>
        </div>

        <div className="bg-[#0F172A] border border-emerald-500/20 rounded-2xl p-4">
          <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Active Published</div>
          <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">{stats.active}</div>
          <div className="text-[10px] text-emerald-500/80 mt-1">Live on public store</div>
        </div>

        <div className="bg-[#0F172A] border border-amber-500/20 rounded-2xl p-4">
          <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">Archived / Inactive</div>
          <div className="text-2xl font-black text-amber-400 mt-1 font-mono">{stats.archived}</div>
          <div className="text-[10px] text-slate-500 mt-1">Hidden, order history preserved</div>
        </div>

        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Container Priced</div>
          <div className="text-2xl font-black text-slate-200 mt-1 font-mono">{stats.containerVerified}</div>
          <div className="text-[10px] text-slate-500 mt-1">Active verified rates</div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by commodity name, Arabic title, origin or product ID..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
            {(['ALL', 'ACTIVE', 'ARCHIVED'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedStatus === status
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {status === 'ALL' ? 'All' : status === 'ACTIVE' ? 'Active' : 'Archived'}
              </button>
            ))}
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Category:
          </span>
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1 rounded-lg shrink-0 font-medium transition ${
              selectedCategory === 'ALL'
                ? 'bg-white text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category.toUpperCase() === cat.name.toUpperCase()).length;
            const active = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 py-1 rounded-lg shrink-0 font-medium transition flex items-center gap-1.5 ${
                  active
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.displayName}</span>
                <span className="text-[10px] opacity-70 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
            <span className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono">Loading Barakah Commodities Master...</span>
          </div>
        ) : error ? (
          <div className="p-10 text-center text-red-400 space-y-3">
            <AlertTriangle className="w-8 h-8 mx-auto text-red-400" />
            <div className="text-sm font-semibold">{error}</div>
            <button
              onClick={fetchProductsData}
              className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-white rounded-xl"
            >
              Try Again
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <Box className="w-8 h-8 mx-auto text-slate-600" />
            <div className="text-sm font-semibold text-slate-300">No commodities match your filter</div>
            <div className="text-xs text-slate-500">Try adjusting your search query or category filters.</div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Commodity / ID</th>
                  <th className="py-3.5 px-3">Category</th>
                  <th className="py-3.5 px-3">Origin & Grade</th>
                  <th className="py-3.5 px-3">Packaging Specs</th>
                  <th className="py-3.5 px-3">Container Wholesale</th>
                  <th className="py-3.5 px-3">Dubai Spot Market</th>
                  <th className="py-3.5 px-3">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProducts.map((prod) => {
                  const isArchived = prod.published === false;
                  return (
                    <tr
                      key={prod.id}
                      className={`hover:bg-slate-900/50 transition-colors ${
                        isArchived ? 'opacity-60 bg-slate-950/40' : ''
                      }`}
                    >
                      {/* Product Name & Thumbnail */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                            {prod.image ? (
                              <Image
                                src={prod.image}
                                alt={prod.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                                unoptimized
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-xs">
                                N/A
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-xs truncate flex items-center gap-1.5">
                              <span>{prod.name}</span>
                              {prod.featured && (
                                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] px-1.5 py-0.2 rounded font-mono">
                                  ★ FEATURED
                                </span>
                              )}
                            </div>
                            {prod.arabicName && (
                              <div className="text-[11px] text-emerald-400 font-arabic truncate">
                                {prod.arabicName}
                              </div>
                            )}
                            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                              ID: {prod.id}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-3">
                        <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-lg whitespace-nowrap">
                          {prod.category}
                        </span>
                      </td>

                      {/* Origin & Grade */}
                      <td className="py-3.5 px-3">
                        <div className="font-medium text-slate-200">{prod.origin}</div>
                        <div className="text-[10px] text-slate-400">{prod.grade}</div>
                        {prod.variety && (
                          <div className="text-[10px] text-slate-500 italic">{prod.variety}</div>
                        )}
                      </td>

                      {/* Packaging Specs */}
                      <td className="py-3.5 px-3">
                        <div className="text-slate-300">{prod.defaultPackagingDetails}</div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          Unit: {prod.defaultPackagingUnit}
                          {prod.defaultNetWeightKg ? ` • ${prod.defaultNetWeightKg} KG Net` : ''}
                        </div>
                      </td>

                      {/* Container Wholesale */}
                      <td className="py-3.5 px-3 font-mono">
                        {prod.containerPriceAED !== null ? (
                          <>
                            <div className="text-white font-bold text-xs">
                              {prod.containerPriceAED.toFixed(2)} <span className="text-[10px] text-emerald-400 font-sans">Dhs</span>
                            </div>
                            <div className="text-[10px] text-slate-400">
                              MOQ: {prod.containerMoq || '100 CTN'}
                            </div>
                          </>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic font-sans">
                            Price on Request
                          </span>
                        )}
                      </td>

                      {/* Dubai Spot Market */}
                      <td className="py-3.5 px-3 font-mono">
                        {prod.marketPriceAED !== null ? (
                          <>
                            <div className="text-white font-bold text-xs">
                              {prod.marketPriceAED.toFixed(2)} <span className="text-[10px] text-emerald-400 font-sans">Dhs</span>
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Spot MOQ: {prod.marketMoq || '10 CTN'}
                            </div>
                          </>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic font-sans">
                            Price on Request
                          </span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-3">
                        {prod.published !== false ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Archived
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(prod)}
                            className="p-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 rounded-lg transition"
                            title="Edit Commodity Specs & Prices"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          {prod.published !== false ? (
                            <button
                              onClick={() => setConfirmModal({ open: true, type: 'ARCHIVE', product: prod })}
                              className="p-1.5 bg-slate-900 border border-slate-800 hover:border-amber-500/40 hover:text-amber-400 text-slate-400 rounded-lg transition"
                              title="Archive Product"
                            >
                              <Archive className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <button
                              onClick={() => setConfirmModal({ open: true, type: 'ACTIVATE', product: prod })}
                              className="p-1.5 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition"
                              title="Activate Product"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                            </button>
                          )}

                          <button
                            onClick={() => setConfirmModal({ open: true, type: 'DELETE', product: prod })}
                            className="p-1.5 bg-slate-900 border border-slate-800 hover:border-red-500/40 hover:text-red-400 text-slate-400 rounded-lg transition"
                            title="Permanently Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CREATE / EDIT MODAL DRAWER */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  {modalMode === 'CREATE' ? <Plus className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">
                    {modalMode === 'CREATE' ? 'Add New Wholesale Commodity' : `Edit Commodity: ${editingProduct?.name}`}
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    {modalMode === 'CREATE'
                      ? 'Define commodity details, container MOQ, spot price, and origin.'
                      : 'Update commodity pricing baselines and physical specifications.'}
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

            {/* Modal Form Body */}
            <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {formError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Basic Information */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>1. Commodity Identification</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      English Product Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Fresh Red Tomato"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
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
                      placeholder="طماطم طازجة"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-arabic"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Category <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.displayName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Origin Country / Region <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      placeholder="e.g. UAE / Jordan / Egypt"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Quality Grade
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="GRADE A (PREMIUM)">GRADE A (PREMIUM)</option>
                      <option value="GRADE B (COMMERCIAL)">GRADE B (COMMERCIAL)</option>
                      <option value="STANDARD">STANDARD</option>
                      <option value="ORGANIC">ORGANIC</option>
                    </select>
                  </div>
                </div>

                {modalMode === 'CREATE' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Slug / Unique Product ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="Auto-generated from name if left empty (e.g. tomato-fresh)"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>
                )}
              </div>

              {/* Physical Specs & Packaging */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                  <Box className="w-3.5 h-3.5" />
                  <span>2. Packaging & Physical Specifications</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Packaging Unit
                    </label>
                    <select
                      value={formData.defaultPackagingUnit}
                      onChange={(e) => setFormData({ ...formData, defaultPackagingUnit: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="CTN">CTN (Carton)</option>
                      <option value="BOX">BOX (Wooden/Telescopic Box)</option>
                      <option value="BAG">BAG (Mesh / PP Bag)</option>
                      <option value="KG">KG (Kilograms)</option>
                      <option value="TON">TON (Metric Tons)</option>
                      <option value="PCS">PCS (Pieces)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Packaging Details
                    </label>
                    <input
                      type="text"
                      value={formData.defaultPackagingDetails}
                      onChange={(e) => setFormData({ ...formData, defaultPackagingDetails: e.target.value })}
                      placeholder="e.g. 10 KG Mesh Bag / 6 KG Wooden Box"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Net Weight (KG)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.defaultNetWeightKg}
                      onChange={(e) => setFormData({ ...formData, defaultNetWeightKg: e.target.value })}
                      placeholder="e.g. 10.0"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Commodity Commercial Description
                  </label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Short B2B commercial description for trade buyers..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>
              </div>

              {/* Wholesale Pricing & MOQ */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>3. Wholesale Rates & MOQ Rules (Store Pickup Only)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Container Wholesale */}
                  <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-3">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Container Wholesale Rate</span>
                      <span className="text-[10px] text-emerald-400 font-mono">BULK ORDER</span>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Price (Dhs / {formData.defaultPackagingUnit})
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={formData.containerPriceAED}
                        onChange={(e) => setFormData({ ...formData, containerPriceAED: e.target.value })}
                        placeholder="e.g. 18.00 (leave empty for POR)"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 font-mono focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Container MOQ</label>
                      <input
                        type="text"
                        value={formData.containerMoq}
                        onChange={(e) => setFormData({ ...formData, containerMoq: e.target.value })}
                        placeholder="e.g. 100 CTN / 1 x 40ft Reefer"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 font-mono focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Dubai Wholesale Spot */}
                  <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-3">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Dubai Wholesale Spot Rate</span>
                      <span className="text-[10px] text-amber-400 font-mono">SPOT MARKET</span>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Price (Dhs / {formData.defaultPackagingUnit})
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={formData.marketPriceAED}
                        onChange={(e) => setFormData({ ...formData, marketPriceAED: e.target.value })}
                        placeholder="e.g. 22.00 (leave empty for POR)"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 font-mono focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Spot MOQ</label>
                      <input
                        type="text"
                        value={formData.marketMoq}
                        onChange={(e) => setFormData({ ...formData, marketMoq: e.target.value })}
                        placeholder="e.g. 10 CTN / 20 Boxes"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 font-mono focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Image & Media */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                  <Upload className="w-3.5 h-3.5" />
                  <span>4. Product Media & Image Management</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Image Preview Box */}
                  <div className="relative w-28 h-28 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0">
                    {formData.image ? (
                      <Image
                        src={formData.image}
                        alt="Product Preview"
                        fill
                        sizes="112px"
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 text-[10px] font-mono">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Upload Controls */}
                  <div className="flex-1 space-y-3 w-full">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Image URL (Unsplash or Hosted Asset)
                      </label>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageFileUpload}
                        accept="image/png,image/jpeg,image/webp,image/avif"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploadingImage}
                        className="px-3 py-2 bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-2 transition"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>{isUploadingImage ? 'Uploading Image...' : 'Upload Image File'}</span>
                      </button>

                      {formData.image && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image: '' })}
                          className="text-xs text-red-400 hover:text-red-300 font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    {uploadError && (
                      <div className="text-[11px] text-red-400">{uploadError}</div>
                    )}
                    <div className="text-[10px] text-slate-500">
                      Supported formats: JPG, PNG, WEBP, AVIF. Max file size: 5MB.
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Options */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-semibold text-slate-200">Active (Public Catalog)</span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-amber-500"
                  />
                  <span className="text-xs font-semibold text-slate-200">Featured Commodity</span>
                </label>

                <div className="flex items-center gap-2">
                  <label className="text-xs text-slate-400 whitespace-nowrap">Display Order:</label>
                  <input
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
                    className="w-16 px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white text-center font-mono focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl text-xs font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Saving Commodity...</span>
                    </>
                  ) : (
                    <span>{modalMode === 'CREATE' ? 'Create Commodity' : 'Save Changes'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL (ARCHIVE / ACTIVATE / DELETE) */}
      {confirmModal.open && confirmModal.product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                confirmModal.type === 'DELETE' 
                  ? 'bg-red-500/10 text-red-400 border border-red-500/30' 
                  : confirmModal.type === 'ARCHIVE'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              }`}>
                {confirmModal.type === 'DELETE' ? (
                  <Trash2 className="w-5 h-5" />
                ) : confirmModal.type === 'ARCHIVE' ? (
                  <Archive className="w-5 h-5" />
                ) : (
                  <CheckCircle className="w-5 h-5" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  {confirmModal.type === 'DELETE'
                    ? `Delete "${confirmModal.product.name}"?`
                    : confirmModal.type === 'ARCHIVE'
                    ? `Archive "${confirmModal.product.name}"?`
                    : `Activate "${confirmModal.product.name}"?`}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {confirmModal.type === 'DELETE'
                    ? 'This commodity and all its wholesale pricing records will be permanently deleted from the catalog. This action cannot be undone.'
                    : confirmModal.type === 'ARCHIVE'
                    ? 'Archiving hides this product from the live public wholesale grid. Historical orders remain intact.'
                    : 'Activating will immediately restore this commodity to the live public catalog.'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setConfirmModal({ open: false, type: 'ARCHIVE', product: null })}
                disabled={actionLoading}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmAction}
                disabled={actionLoading}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  confirmModal.type === 'DELETE'
                    ? 'bg-red-500 hover:bg-red-400 text-white'
                    : confirmModal.type === 'ARCHIVE'
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                }`}
              >
                {actionLoading && <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />}
                <span>
                  {confirmModal.type === 'DELETE'
                    ? 'Permanently Delete'
                    : confirmModal.type === 'ARCHIVE'
                    ? 'Confirm Archive'
                    : 'Confirm Activate'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
