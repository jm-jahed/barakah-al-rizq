'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import {
  Search, Filter, RefreshCw, Eye, MessageCircle, Printer, Download,
  CheckCircle, Clock, AlertTriangle, Package, Calendar, Phone, Mail,
  Building2, MapPin, X, ArrowUpDown, ChevronRight, FileText, ExternalLink
} from 'lucide-react';
import { WholesaleOrder, WholesaleOrderStatus } from '@/lib/db/types';

interface OrdersApiResponse {
  success: boolean;
  totalCount: number;
  filteredCount: number;
  orders: WholesaleOrder[];
  metrics: {
    totalOrders: number;
    pending: number;
    confirmed: number;
    readyForPickup: number;
    completed: number;
    cancelled: number;
    totalCtn: number;
    totalOrderPipelineAED: number;
    completedSalesAED: number;
  };
}

const STATUS_CONFIG: Record<WholesaleOrderStatus, { label: string; bg: string; text: string; border: string }> = {
  PENDING: { label: 'Pending Approval', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  CONFIRMED: { label: 'Confirmed (Staging)', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  READY_FOR_PICKUP: { label: 'Ready for Pickup', bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  COMPLETED: { label: 'Completed (Collected)', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  CANCELLED: { label: 'Cancelled', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<WholesaleOrder[]>([]);
  const [metrics, setMetrics] = useState<OrdersApiResponse['metrics']>({
    totalOrders: 0,
    pending: 0,
    confirmed: 0,
    readyForPickup: 0,
    completed: 0,
    cancelled: 0,
    totalCtn: 0,
    totalOrderPipelineAED: 0,
    completedSalesAED: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Order Details Modal / Slip
  const [activeOrder, setActiveOrder] = useState<WholesaleOrder | null>(null);
  const [isSlipOpen, setIsSlipOpen] = useState(false);

  // Status Update Modal
  const [statusModal, setStatusModal] = useState<{
    open: boolean;
    order: WholesaleOrder | null;
    targetStatus: WholesaleOrderStatus;
    notes: string;
  }>({ open: false, order: null, targetStatus: 'CONFIRMED', notes: '' });
  const [statusLoading, setStatusLoading] = useState(false);

  // Fetch orders from API
  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.set('search', searchTerm);
      if (selectedStatus !== 'ALL') params.set('status', selectedStatus);
      if (selectedType !== 'ALL') params.set('orderType', selectedType);
      if (startDate) params.set('startDate', startDate);
      if (endDate) params.set('endDate', endDate);

      const res = await fetch(`/api/admin/foodstuff/orders?${params.toString()}`);
      if (!res.ok) {
        throw new Error(`Failed to load orders (HTTP ${res.status})`);
      }
      const data: OrdersApiResponse = await res.json();
      setOrders(data.orders || []);
      if (data.metrics) setMetrics(data.metrics);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch wholesale orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [selectedStatus, selectedType, startDate, endDate]);

  // Handle Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchOrders();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Format UAE Phone for WhatsApp
  const getWhatsAppLink = (phone: string, orderId: string, customerName: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, '');
    const msg = encodeURIComponent(
      `Hello ${customerName}, this is Barakah Al Rizq Foodstuff Trading L.L.C Regarding your Wholesale Order #${orderId} for Store Pickup.`
    );
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  };

  // Status Update Action
  const handleUpdateStatus = async () => {
    if (!statusModal.order) return;
    setStatusLoading(true);

    try {
      const res = await fetch('/api/admin/foodstuff/orders', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: statusModal.order.id,
          status: statusModal.targetStatus,
          notes: statusModal.notes.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to update order status');
      }

      const updated = await res.json();
      if (activeOrder && activeOrder.id === statusModal.order.id) {
        setActiveOrder(updated.order);
      }

      setStatusModal({ open: false, order: null, targetStatus: 'CONFIRMED', notes: '' });
      await fetchOrders();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Status update failed');
    } finally {
      setStatusLoading(false);
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (orders.length === 0) {
      alert('No orders to export.');
      return;
    }

    const headers = [
      'Order ID',
      'Date (UAE GST)',
      'Customer Name',
      'Company Name',
      'Phone',
      'Email',
      'Order Type',
      'Total CTN',
      'Total AED',
      'Status',
      'Pickup Date',
      'Pickup Time',
      'Pickup Location',
      'Notes',
    ];

    const rows = orders.map((o) => [
      `"${o.id}"`,
      `"${new Date(o.createdAt).toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })}"`,
      `"${(o.customerName || '').replace(/"/g, '""')}"`,
      `"${(o.companyName || '').replace(/"/g, '""')}"`,
      `"${o.phone}"`,
      `"${o.email}"`,
      `"${o.orderType}"`,
      o.totalCtn,
      o.totalAED,
      `"${o.status}"`,
      `"${o.pickupDate}"`,
      `"${o.pickupTime || ''}"`,
      `"${(o.pickupLocation || '').replace(/"/g, '""')}"`,
      `"${(o.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `barakah_wholesale_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">Wholesale Orders CRM</h1>
            <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-2.5 py-0.5 rounded-full font-mono">
              Store Pickup Operations
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Real-time B2B orders for Container Wholesale & Dubai Spot Market collection at Al Aweer Central Market.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={fetchOrders}
            disabled={loading}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            title="Refresh Order Feed"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl text-xs flex items-center gap-2 transition"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Overview Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Orders</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">{metrics.totalOrders}</div>
          <div className="text-[10px] text-slate-500 mt-1">{metrics.totalCtn.toLocaleString()} CTN Volume</div>
        </div>

        <div className="bg-[#0F172A] border border-amber-500/20 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Pending Action</div>
          <div className="text-2xl font-black text-amber-400 mt-1 font-mono">{metrics.pending}</div>
          <div className="text-[10px] text-amber-500/80 mt-1">Awaiting confirmation</div>
        </div>

        <div className="bg-[#0F172A] border border-blue-500/20 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">Confirmed (Staging)</div>
          <div className="text-2xl font-black text-blue-400 mt-1 font-mono">{metrics.confirmed}</div>
          <div className="text-[10px] text-slate-500 mt-1">Cold room prepped</div>
        </div>

        <div className="bg-[#0F172A] border border-purple-500/20 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">Ready for Pickup</div>
          <div className="text-2xl font-black text-purple-400 mt-1 font-mono">{metrics.readyForPickup}</div>
          <div className="text-[10px] text-slate-500 mt-1">At collection bay</div>
        </div>

        <div className="bg-[#0F172A] border border-emerald-500/20 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Completed Sales</div>
          <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">{metrics.completed}</div>
          <div className="text-[10px] text-emerald-500/80 mt-1 font-mono">
            {metrics.completedSalesAED.toLocaleString()} AED
          </div>
        </div>

        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Pipeline Value</div>
          <div className="text-xl font-black text-white mt-1 font-mono">
            {metrics.totalOrderPipelineAED.toLocaleString()} <span className="text-[10px] text-emerald-400 font-sans">AED</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Total active gross</div>
        </div>
      </div>

      {/* Filters & Search Control */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Order ID, Buyer Name, Company, Phone, Email, or Product..."
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

          {/* Wholesale Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">All Wholesale Types</option>
              <option value="CONTAINER">Container Wholesale Only</option>
              <option value="DUBAI_WHOLESALE">Dubai Wholesale Market Only</option>
              <option value="MIXED">Mixed Consignment</option>
            </select>
          </div>

          {/* Date Range Inputs */}
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            />
            <span className="text-slate-500 text-xs">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            />
            {(startDate || endDate) && (
              <button
                onClick={() => { setStartDate(''); setEndDate(''); }}
                className="text-xs text-slate-500 hover:text-white p-1"
                title="Clear dates"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0 mr-1">Status:</span>
          {['ALL', 'PENDING', 'CONFIRMED', 'READY_FOR_PICKUP', 'COMPLETED', 'CANCELLED'].map((st) => {
            const count =
              st === 'ALL'
                ? metrics.totalOrders
                : st === 'PENDING'
                  ? metrics.pending
                  : st === 'CONFIRMED'
                    ? metrics.confirmed
                    : st === 'READY_FOR_PICKUP'
                      ? metrics.readyForPickup
                      : st === 'COMPLETED'
                        ? metrics.completed
                        : metrics.cancelled;

            const active = selectedStatus === st;
            return (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1 rounded-lg shrink-0 font-medium transition flex items-center gap-1.5 ${active
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
              >
                <span>{st === 'ALL' ? 'All Orders' : STATUS_CONFIG[st as WholesaleOrderStatus]?.label || st}</span>
                <span className="text-[10px] opacity-80 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Orders Table */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
            <span className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono">Loading Verified Wholesale Orders...</span>
          </div>
        ) : error ? (
          <div className="p-10 text-center text-red-400 space-y-3">
            <AlertTriangle className="w-8 h-8 mx-auto text-red-400" />
            <div className="text-sm font-semibold">{error}</div>
            <button
              onClick={fetchOrders}
              className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-white rounded-xl"
            >
              Try Again
            </button>
          </div>
        ) : orders.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <Package className="w-10 h-10 mx-auto text-slate-600" />
            <div className="text-sm font-semibold text-slate-300">No wholesale orders found</div>
            <div className="text-xs text-slate-500">
              Orders placed by B2B buyers on the wholesale cart will automatically appear here.
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Order Ref / Date</th>
                  <th className="py-3.5 px-3">Buyer & Company</th>
                  <th className="py-3.5 px-3">Wholesale Tier</th>
                  <th className="py-3.5 px-3">Volume & Amount</th>
                  <th className="py-3.5 px-3">Pickup Window</th>
                  <th className="py-3.5 px-3">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {orders.map((ord) => {
                  const cfg = STATUS_CONFIG[ord.status] || STATUS_CONFIG.PENDING;
                  return (
                    <tr key={ord.id} className="hover:bg-slate-900/50 transition-colors">
                      {/* Order Number & Timestamp */}
                      <td className="py-3.5 px-4">
                        <div className="font-mono font-bold text-white text-xs flex items-center gap-1.5">
                          <span>{ord.id}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {new Date(ord.createdAt).toLocaleDateString('en-GB', {
                            timeZone: 'Asia/Dubai',
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })} GST
                        </div>
                      </td>

                      {/* Buyer & Company */}
                      <td className="py-3.5 px-3">
                        <div className="font-bold text-slate-200">{ord.customerName}</div>
                        {ord.companyName && (
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3 h-3 text-slate-500 shrink-0" />
                            <span>{ord.companyName}</span>
                          </div>
                        )}
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5 flex items-center gap-2">
                          <span>{ord.phone}</span>
                          <a
                            href={getWhatsAppLink(ord.phone, ord.id, ord.customerName)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-0.5"
                            title="WhatsApp Buyer"
                          >
                            <MessageCircle className="w-3 h-3" />
                          </a>
                        </div>
                      </td>

                      {/* Wholesale Tier */}
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-mono border ${ord.orderType === 'CONTAINER'
                            ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                            : ord.orderType === 'DUBAI_WHOLESALE'
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                              : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                          }`}>
                          {ord.orderType === 'CONTAINER' ? 'Container Wholesale' : ord.orderType === 'DUBAI_WHOLESALE' ? 'Dubai Wholesale' : 'Mixed Consignment'}
                        </span>
                        <div className="text-[10px] text-slate-500 mt-1">
                          {ord.items?.length || 0} line items
                        </div>
                      </td>

                      {/* Volume & Amount */}
                      <td className="py-3.5 px-3 font-mono">
                        <div className="font-black text-white text-xs">
                          {ord.totalAED.toLocaleString()} <span className="text-[10px] text-emerald-400 font-sans">AED</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {ord.totalCtn} CTN total
                        </div>
                      </td>

                      {/* Pickup Window */}
                      <td className="py-3.5 px-3">
                        <div className="text-slate-200 font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500 shrink-0" />
                          <span>{ord.pickupDate}</span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {ord.pickupTime || 'Standard Trading Session'}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.text.replace('text-', 'bg-')}`} />
                          {cfg.label}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => setActiveOrder(ord)}
                            className="p-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 rounded-lg transition"
                            title="View Full Order Specification"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => { setActiveOrder(ord); setIsSlipOpen(true); }}
                            className="p-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 rounded-lg transition"
                            title="Print Pickup Slip"
                          >
                            <Printer className="w-3.5 h-3.5" />
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

      {/* ORDER DETAILS DRAWER / MODAL */}
      {activeOrder && !isSlipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border-l border-slate-800 w-full max-w-2xl h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold">{activeOrder.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${STATUS_CONFIG[activeOrder.status].bg} ${STATUS_CONFIG[activeOrder.status].text} ${STATUS_CONFIG[activeOrder.status].border}`}>
                    {STATUS_CONFIG[activeOrder.status].label}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Placed on {new Date(activeOrder.createdAt).toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })} GST
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSlipOpen(true)}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Printer className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={() => setActiveOrder(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Pickup Only Notice Banner */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-amber-400 uppercase tracking-wide">
                    Store Pickup Only — No Delivery / No Shipping Fee
                  </div>
                  <div className="text-slate-300 mt-1">
                    {activeOrder.pickupLocation}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    Scheduled Window: <span className="text-white font-semibold">{activeOrder.pickupDate}</span> ({activeOrder.pickupTime || 'Standard'})
                  </div>
                </div>
              </div>

              {/* Buyer Profile Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center justify-between">
                  <span>Buyer Information</span>
                  <a
                    href={getWhatsAppLink(activeOrder.phone, activeOrder.id, activeOrder.customerName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-sans text-xs lowercase"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Customer Name:</span>
                    <span className="font-bold text-white text-sm">{activeOrder.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Company Name:</span>
                    <span className="font-medium text-slate-200">{activeOrder.companyName || 'Private Wholesale Buyer'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Phone Number:</span>
                    <span className="font-mono text-slate-200">{activeOrder.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Email Address:</span>
                    <a href={`mailto:${activeOrder.email}`} className="text-emerald-400 hover:underline font-mono truncate block">
                      {activeOrder.email}
                    </a>
                  </div>
                </div>

                {activeOrder.notes && (
                  <div className="pt-2 border-t border-slate-800 text-xs">
                    <span className="text-slate-500 block text-[10px]">Buyer Pickup Instructions:</span>
                    <p className="text-slate-300 italic mt-0.5">{activeOrder.notes}</p>
                  </div>
                )}
              </div>

              {/* Line Items Table */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Itemized Commodity Allocation ({activeOrder.items?.length || 0} Products)
                </div>

                <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/80 font-mono text-[10px] text-slate-400 uppercase">
                        <th className="py-2.5 px-3">Product</th>
                        <th className="py-2.5 px-2">Wholesale Tier</th>
                        <th className="py-2.5 px-2 text-right">Price / CTN</th>
                        <th className="py-2.5 px-2 text-right">Quantity</th>
                        <th className="py-2.5 px-3 text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {activeOrder.items?.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40">
                          <td className="py-2.5 px-3 font-sans">
                            <div className="font-bold text-white text-xs">{item.productName}</div>
                            {item.productArabicName && (
                              <div className="text-[10px] text-emerald-400 font-arabic">{item.productArabicName}</div>
                            )}
                            <div className="text-[10px] text-slate-500 font-mono">{item.packagingUnit}</div>
                          </td>
                          <td className="py-2.5 px-2 text-[10px]">
                            {item.orderType === 'CONTAINER' ? 'Container Wholesale' : 'Dubai Spot Market'}
                          </td>
                          <td className="py-2.5 px-2 text-right">
                            {item.pricePerCtn.toFixed(2)} Dhs
                          </td>
                          <td className="py-2.5 px-2 text-right font-bold text-slate-200">
                            {item.quantityCtn} CTN
                          </td>
                          <td className="py-2.5 px-3 text-right font-black text-white">
                            {item.lineTotalAED.toFixed(2)} AED
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Total Cartons:</span>
                  <span className="font-mono font-bold text-white">{activeOrder.totalCtn} CTN</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Delivery & Freight:</span>
                  <span className="font-mono text-emerald-400">AED 0.00 (Customer Transport)</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm">
                  <span className="font-bold text-white">Total Order Value:</span>
                  <span className="font-mono font-black text-xl text-emerald-400">
                    {activeOrder.totalAED.toLocaleString()} <span className="text-xs font-sans">AED</span>
                  </span>
                </div>
              </div>

              {/* Status Update Quick Action */}
              <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Update Order Workflow Status</span>
                  <span className="text-[10px] font-mono text-slate-500">Requires Confirmation</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['PENDING', 'CONFIRMED', 'READY_FOR_PICKUP', 'COMPLETED', 'CANCELLED'] as const).map((st) => (
                    <button
                      key={st}
                      disabled={activeOrder.status === st}
                      onClick={() => setStatusModal({ open: true, order: activeOrder, targetStatus: st, notes: '' })}
                      className={`p-2 rounded-xl text-xs font-bold border transition text-center ${activeOrder.status === st
                          ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                        }`}
                    >
                      {STATUS_CONFIG[st].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE ORDER SLIP MODAL */}
      {activeOrder && isSlipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
          <div className="bg-white text-slate-950 rounded-2xl w-full max-w-3xl p-8 space-y-6 shadow-2xl relative my-auto print:p-0 print:shadow-none">
            {/* Modal Controls (Hidden during print) */}
            <div className="flex items-center justify-between border-b pb-4 print:hidden">
              <span className="text-xs font-mono font-bold text-slate-600">
                Printable B2B Wholesale Order & Collection Slip
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-950 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Document</span>
                </button>
                <button
                  onClick={() => setIsSlipOpen(false)}
                  className="p-2 text-slate-600 hover:text-slate-950 rounded-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Document Header */}
            <div className="flex justify-between items-start border-b pb-6">
              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950">
                  BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
                </h2>
                <p className="text-xs text-slate-600 mt-0.5">
                  Import, Export & Wholesale Fresh Produce • Al Aweer Central Market, Ras Al Khor, Dubai
                </p>
                <p className="text-xs text-slate-600">
                  Contact: +971 56 944 8850 • Email: barakahalrizquae@gmail.com
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-300 rounded-lg text-xs font-mono font-bold">
                  STORE PICKUP SLIP
                </span>
                <div className="text-xs font-mono text-slate-700 mt-1">Ref: {activeOrder.id}</div>
                <div className="text-[11px] text-slate-500">
                  {new Date(activeOrder.createdAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Dubai' })} GST
                </div>
              </div>
            </div>

            {/* Buyer & Pickup Information */}
            <div className="grid grid-cols-2 gap-6 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <div className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Buyer Information:</div>
                <div className="font-bold text-slate-950 text-sm mt-1">{activeOrder.customerName}</div>
                {activeOrder.companyName && <div className="text-slate-700 font-medium">{activeOrder.companyName}</div>}
                <div className="text-slate-600 font-mono mt-0.5">Phone: {activeOrder.phone}</div>
                <div className="text-slate-600 font-mono">Email: {activeOrder.email}</div>
              </div>

              <div>
                <div className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Collection Logistics:</div>
                <div className="font-bold text-slate-950 mt-1">{activeOrder.pickupLocation}</div>
                <div className="text-slate-700 mt-1">
                  Scheduled Date: <span className="font-bold">{activeOrder.pickupDate}</span>
                </div>
                <div className="text-slate-700">
                  Trading Session: <span className="font-medium">{activeOrder.pickupTime || 'Standard Session'}</span>
                </div>
                <div className="text-emerald-700 font-bold mt-1 uppercase text-[10px]">
                  ✓ Strictly Store Pickup — No Delivery Fee
                </div>
              </div>
            </div>

            {/* Items Table */}
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b-2 border-slate-950 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-2">Item Description</th>
                  <th className="py-2">Tier</th>
                  <th className="py-2 text-right">Unit Price</th>
                  <th className="py-2 text-right">Quantity</th>
                  <th className="py-2 text-right">Total (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {activeOrder.items?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-2 font-sans">
                      <div className="font-bold text-slate-950">{item.productName}</div>
                      {item.productArabicName && (
                        <div className="text-[10px] text-slate-500 font-arabic">{item.productArabicName}</div>
                      )}
                      <div className="text-[10px] text-slate-500 font-mono">{item.packagingUnit}</div>
                    </td>
                    <td className="py-2 text-[10px] font-sans">
                      {item.orderType === 'CONTAINER' ? 'Container Wholesale' : 'Dubai Wholesale'}
                    </td>
                    <td className="py-2 text-right">{item.pricePerCtn.toFixed(2)} Dhs</td>
                    <td className="py-2 text-right font-bold">{item.quantityCtn} CTN</td>
                    <td className="py-2 text-right font-bold text-slate-950">{item.lineTotalAED.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Section */}
            <div className="border-t-2 border-slate-950 pt-4 flex justify-between items-start text-xs">
              <div className="text-slate-600 max-w-sm">
                <div className="font-bold text-slate-950">Collection Notes:</div>
                <p className="mt-0.5">{activeOrder.notes || 'Inspection upon warehouse release. Store collection verified.'}</p>
              </div>
              <div className="text-right space-y-1 font-mono">
                <div className="text-slate-600">Total Volume: <span className="font-bold text-slate-950">{activeOrder.totalCtn} CTN</span></div>
                <div className="text-slate-600">Freight: <span className="font-bold text-slate-950">AED 0.00</span></div>
                <div className="text-base font-black text-slate-950 pt-1 border-t border-slate-300">
                  Total Payable: AED {activeOrder.totalAED.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-slate-200 text-xs">
              <div className="border-t border-dashed border-slate-400 pt-2 text-slate-600">
                <span>Warehouse Dispatch Officer Signature</span>
              </div>
              <div className="border-t border-dashed border-slate-400 pt-2 text-slate-600 text-right">
                <span>Buyer / Authorized Agent Signature</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STATUS CHANGE CONFIRMATION MODAL */}
      {statusModal.open && statusModal.order && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Update Status to "{STATUS_CONFIG[statusModal.targetStatus].label}"?
                </h3>
                <p className="text-[11px] text-slate-400">
                  Order #{statusModal.order.id} for {statusModal.order.customerName}.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Internal Administrative Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={statusModal.notes}
                onChange={(e) => setStatusModal({ ...statusModal, notes: e.target.value })}
                placeholder="e.g. Staged at Cold Room 3, buyer notified via WhatsApp..."
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
              />
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setStatusModal({ open: false, order: null, targetStatus: 'CONFIRMED', notes: '' })}
                disabled={statusLoading}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdateStatus}
                disabled={statusLoading}
                className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition"
              >
                {statusLoading && <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />}
                <span>Confirm Update</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
