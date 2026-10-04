'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpRight, CheckCircle2, Clock, AlertCircle, Eye } from 'lucide-react';
import { PRESSORA_ORDERS, DemoOrder } from '@/data/pressoraData';

export const PressoraOrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedOrder, setSelectedOrder] = useState<DemoOrder | null>(null);

  const filteredOrders = PRESSORA_ORDERS.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: DemoOrder['status']) => {
    switch (status) {
      case 'In Production':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"><Clock className="w-3 h-3" /> In Production</span>;
      case 'Artwork Review':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"><AlertCircle className="w-3 h-3" /> Preflight Review</span>;
      case 'Finishing':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"><Clock className="w-3 h-3" /> Finishing</span>;
      case 'Ready for Dispatch':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"><Clock className="w-3 h-3" /> Dispatch Ready</span>;
      case 'Delivered':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><CheckCircle2 className="w-3 h-3" /> Delivered</span>;
    }
  };

  return (
    <section className="py-20 bg-neutral-900/40 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              ENTERPRISE DISPATCH & LOGISTICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Commercial Order <span className="font-serif italic text-amber-400">Registry</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Live ledger of commercial print production jobs, client specifications, and UAE dispatch tracking.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search orders, clients, tracking..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 w-64"
              />
            </div>
            <div className="flex items-center gap-1 bg-neutral-950 border border-neutral-800 p-1 rounded-xl text-xs">
              {['ALL', 'In Production', 'Finishing', 'Ready for Dispatch', 'Delivered'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    statusFilter === st
                      ? 'bg-amber-500 text-neutral-950 font-medium'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-900/80 text-neutral-400 uppercase font-mono text-[11px] border-b border-neutral-800">
                <tr>
                  <th className="py-3.5 px-4 font-medium">Job ID</th>
                  <th className="py-3.5 px-4 font-medium">Client / Company</th>
                  <th className="py-3.5 px-4 font-medium">Product & Specs</th>
                  <th className="py-3.5 px-4 font-medium">Status & Stage</th>
                  <th className="py-3.5 px-4 font-medium">Quantity</th>
                  <th className="py-3.5 px-4 font-medium">Value</th>
                  <th className="py-3.5 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900">
                {filteredOrders.map((order) => (
                  <tr 
                    key={order.id} 
                    className="hover:bg-neutral-900/40 transition-colors group cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="py-4 px-4 font-mono font-medium text-amber-400">
                      {order.id}
                      <div className="text-[10px] text-neutral-500 font-sans">{order.date}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-white">{order.client}</div>
                      <div className="text-neutral-500 text-[11px] font-mono">{order.trackingNumber}</div>
                    </td>
                    <td className="py-4 px-4 max-w-xs">
                      <div className="text-white font-medium truncate">{order.product}</div>
                      <div className="text-neutral-400 text-[11px] truncate">{order.configSummary}</div>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(order.status)}
                      <div className="text-[11px] text-neutral-400 mt-1 truncate max-w-[180px]">{order.stage}</div>
                    </td>
                    <td className="py-4 px-4 font-mono text-neutral-300">
                      {order.quantity.toLocaleString()} units
                    </td>
                    <td className="py-4 px-4 font-mono font-medium text-emerald-400">
                      AED {order.totalAED.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedOrder(order);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for inspect order */}
        {selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-amber-400 font-bold">{selectedOrder.id}</span>
                    {getStatusBadge(selectedOrder.status)}
                  </div>
                  <h3 className="text-xl font-light text-white">{selectedOrder.client}</h3>
                </div>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
                  <div className="text-neutral-400 text-[11px] mb-1">Product & Configuration:</div>
                  <div className="text-white font-medium text-sm mb-1">{selectedOrder.product}</div>
                  <div className="text-neutral-300 leading-relaxed">{selectedOrder.configSummary}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <div className="text-neutral-500 text-[11px]">Quantity:</div>
                    <div className="text-white font-mono text-base">{selectedOrder.quantity.toLocaleString()} units</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <div className="text-neutral-500 text-[11px]">Total Job Value:</div>
                    <div className="text-emerald-400 font-mono text-base">AED {selectedOrder.totalAED.toLocaleString()}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Current Production Stage:</span>
                    <span className="text-white font-medium">{selectedOrder.stage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Order Placed:</span>
                    <span className="text-neutral-200">{selectedOrder.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Estimated Delivery:</span>
                    <span className="text-amber-400 font-medium">{selectedOrder.estDelivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">UAE Dispatch Tracking:</span>
                    <span className="text-white font-mono">{selectedOrder.trackingNumber}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-xs transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
