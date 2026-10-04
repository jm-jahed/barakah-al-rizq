'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Box, Thermometer, Calendar, ShieldCheck, Eye, ArrowUpDown, X, CheckCircle2 } from 'lucide-react';
import { FROSTVAULT_INVENTORY, InventoryItem } from '@/data/frostvaultData';

export const FrostvaultInventoryIntelligence: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedZone, setSelectedZone] = useState<string>('All Zones');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Statuses');
  const [sortField, setSortField] = useState<'quantityUnits' | 'expiryDate' | 'product'>('expiryDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

  const categories = [
    'All Categories',
    'Pharmaceutical',
    'Food & Beverage',
    'Fresh Produce',
    'Seafood',
    'Dairy & Poultry',
  ];

  const zones = ['All Zones', 'ZONE-A', 'ZONE-B', 'ZONE-C', 'ZONE-D'];
  const statuses = ['All Statuses', 'In Storage', 'Pending Pick', 'Quality Verified', 'Staged for Dispatch'];

  const filteredItems = useMemo(() => {
    return FROSTVAULT_INVENTORY.filter((item) => {
      const matchesSearch =
        item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.batchNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All Categories' || item.category === selectedCategory;

      const matchesZone =
        selectedZone === 'All Zones' || item.storageZone === selectedZone;

      const matchesStatus =
        selectedStatus === 'All Statuses' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesZone && matchesStatus;
    }).sort((a, b) => {
      if (sortField === 'quantityUnits') {
        return sortOrder === 'asc'
          ? a.quantityUnits - b.quantityUnits
          : b.quantityUnits - a.quantityUnits;
      }
      if (sortField === 'expiryDate') {
        return sortOrder === 'asc'
          ? a.expiryDate.localeCompare(b.expiryDate)
          : b.expiryDate.localeCompare(a.expiryDate);
      }
      return sortOrder === 'asc'
        ? a.product.localeCompare(b.product)
        : b.product.localeCompare(a.product);
    });
  }, [searchQuery, selectedCategory, selectedZone, selectedStatus, sortField, sortOrder]);

  const toggleSort = (field: 'quantityUnits' | 'expiryDate' | 'product') => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <section id="inventory" className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            WMS LOT INVENTORY DIRECTORY
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Storage That Knows What Is Inside.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Complete unit-level traceability with active core temperature logging, lot expiry countdowns, and automated slot allocations across 22+ live demo stock records.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-6 rounded-3xl bg-[#0a131e] border border-[#162e48] mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search SKU, product, brand, batch or client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#081018] border border-[#18314c] text-xs font-mono text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>

            {/* Quick Filter Counts */}
            <div className="text-xs font-mono text-[#64748b] flex items-center gap-3">
              <span>Showing <strong className="text-[#38bdf8]">{filteredItems.length}</strong> of {FROSTVAULT_INVENTORY.length} Lots</span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                  setSelectedZone('All Zones');
                  setSelectedStatus('All Statuses');
                }}
                className="text-[11px] text-[#38bdf8] hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Filter Pills Horizontal Groups */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#132538]">
            {/* Category Select */}
            <div>
              <label className="text-[10px] uppercase font-mono text-[#64748b] mb-1 block">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#081018] border border-[#18314c] text-xs font-mono text-[#cbd5e1] focus:outline-none focus:border-[#38bdf8]"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#081018] text-[#cbd5e1]">{c}</option>
                ))}
              </select>
            </div>

            {/* Zone Select */}
            <div>
              <label className="text-[10px] uppercase font-mono text-[#64748b] mb-1 block">Storage Zone</label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#081018] border border-[#18314c] text-xs font-mono text-[#cbd5e1] focus:outline-none focus:border-[#38bdf8]"
              >
                {zones.map((z) => (
                  <option key={z} value={z} className="bg-[#081018] text-[#cbd5e1]">{z}</option>
                ))}
              </select>
            </div>

            {/* Status Select */}
            <div>
              <label className="text-[10px] uppercase font-mono text-[#64748b] mb-1 block">Inventory Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#081018] border border-[#18314c] text-xs font-mono text-[#cbd5e1] focus:outline-none focus:border-[#38bdf8]"
              >
                {statuses.map((s) => (
                  <option key={s} value={s} className="bg-[#081018] text-[#cbd5e1]">{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Inventory Desktop Table & Mobile Cards */}
        <div className="rounded-3xl bg-[#0a121c] border border-[#172d45] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-[#0e1b29] border-b border-[#18314c] text-[#64748b] uppercase text-[10px]">
                  <th className="p-4 cursor-pointer hover:text-[#38bdf8]" onClick={() => toggleSort('product')}>
                    <div className="flex items-center gap-1">
                      <span>Product & SKU</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Zone & Temp</th>
                  <th className="p-4 cursor-pointer hover:text-[#38bdf8]" onClick={() => toggleSort('quantityUnits')}>
                    <div className="flex items-center gap-1">
                      <span>Quantity</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer hover:text-[#38bdf8]" onClick={() => toggleSort('expiryDate')}>
                    <div className="flex items-center gap-1">
                      <span>Lot Expiry</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#13263b]">
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className="hover:bg-[#0f2134] transition-colors cursor-pointer group"
                  >
                    <td className="p-4">
                      <div className="font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                        {item.product}
                      </div>
                      <div className="text-[10px] text-[#64748b]">
                        SKU: {item.sku} · {item.brand}
                      </div>
                    </td>

                    <td className="p-4 text-[#94a3b8]">
                      {item.category}
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-[#08121c] border border-[#162c44] text-[#38bdf8] text-[11px] font-bold">
                        {item.storageZone}
                      </span>
                      <div className="text-[10px] text-[#64748b] mt-0.5">
                        Current: {item.currentTemp}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-[#f8fafc] font-bold">
                        {item.quantityUnits.toLocaleString()} units
                      </div>
                      <div className="text-[10px] text-[#64748b]">
                        {item.palletCount} Pallets
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-[#cbd5e1]">{item.expiryDate}</div>
                      <div className="text-[10px] text-[#64748b]">{item.batchNumber}</div>
                    </td>

                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === 'In Storage'
                          ? 'bg-[#0284c7]/20 text-[#38bdf8] border border-[#0284c7]/40'
                          : item.status === 'Pending Pick'
                          ? 'bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/40'
                          : item.status === 'Quality Verified'
                          ? 'bg-[#15803d]/20 text-[#4ade80] border border-[#15803d]/40'
                          : 'bg-[#9333ea]/20 text-[#c084fc] border border-[#9333ea]/40'
                      }`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItem(item);
                        }}
                        className="p-2 rounded-lg bg-[#0c1825] hover:bg-[#14283c] text-[#38bdf8] border border-[#18324e] transition-colors cursor-pointer"
                        title="View Lot Dossier"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Item Inspection Drawer/Modal */}
      {activeItem && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0c1622] border border-[#1d3c5f] p-6 sm:p-8 text-[#f1f5f9] shadow-2xl overflow-hidden my-8"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#122234] text-[#64748b] hover:text-[#ffffff] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-2">
                <Box className="w-4 h-4" />
                <span>LOT DOSSIER · {activeItem.sku}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#f8fafc] mb-1">
                {activeItem.product}
              </h3>
              <p className="text-xs font-mono text-[#64748b] mb-6">
                Client: {activeItem.client}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs mb-6">
                <div className="p-3 rounded-xl bg-[#08111a] border border-[#14283c]">
                  <span className="text-[10px] text-[#64748b] block">Zone</span>
                  <strong className="text-[#38bdf8] text-base">{activeItem.storageZone}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#08111a] border border-[#14283c]">
                  <span className="text-[10px] text-[#64748b] block">Units</span>
                  <strong className="text-[#f8fafc] text-base">{activeItem.quantityUnits.toLocaleString()}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#08111a] border border-[#14283c]">
                  <span className="text-[10px] text-[#64748b] block">Pallets</span>
                  <strong className="text-[#f8fafc] text-base">{activeItem.palletCount}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#08111a] border border-[#14283c]">
                  <span className="text-[10px] text-[#64748b] block">Live Temp</span>
                  <strong className="text-[#4ade80] text-base">{activeItem.currentTemp}</strong>
                </div>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-[#081018] border border-[#14253a] font-mono text-xs mb-6">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Batch Code:</span>
                  <span className="text-[#cbd5e1]">{activeItem.batchNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Arrival Date:</span>
                  <span className="text-[#cbd5e1]">{activeItem.arrivalDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Expiry Date:</span>
                  <span className="text-[#f59e0b] font-bold">{activeItem.expiryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Target Setpoint:</span>
                  <span className="text-[#38bdf8]">{activeItem.targetTemp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Lot Health:</span>
                  <span className="text-[#4ade80]">{activeItem.lotHealth}</span>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-xs font-mono font-bold text-[#ffffff] transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </section>
  );
};
