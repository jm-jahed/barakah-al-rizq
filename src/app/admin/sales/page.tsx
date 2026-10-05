'use client';

import React, { useState, useEffect } from 'react';
import { WholesaleOrderItem, WholesaleOrderStatus } from '@/lib/db/types';

interface EnrichedSale {
  id: string;
  customerName: string;
  companyName?: string;
  phone: string;
  email?: string;
  pickupDate: string;
  pickupTime?: string;
  pickupLocation: string;
  orderType: 'CONTAINER' | 'DUBAI_WHOLESALE' | 'MIXED';
  items: WholesaleOrderItem[];
  totalCtn: number;
  totalAED: number;
  notes?: string;
  status: WholesaleOrderStatus;
  createdAt: string;
  updatedAt: string;
  saleDate: string;
  netPaidAED: number;
  refundedAED: number;
  outstandingBalanceAED: number;
  paymentStatus: 'PAID' | 'PARTIALLY_PAID' | 'UNPAID';
  paymentsCount: number;
  lastPaymentDate?: string;
}

export default function AdminSalesPage() {
  const [sales, setSales] = useState<EnrichedSale[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [paymentFilter, setPaymentFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Selected Sale Invoice Modal
  const [selectedSale, setSelectedSale] = useState<EnrichedSale | null>(null);

  const fetchSales = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (statusFilter !== 'ALL') params.set('orderStatus', statusFilter);
      if (paymentFilter !== 'ALL') params.set('paymentStatus', paymentFilter);
      if (typeFilter !== 'ALL') params.set('orderType', typeFilter);
      if (startDate) params.set('startDate', startDate);
      if (endDate) params.set('endDate', endDate);

      const res = await fetch(`/api/admin/foodstuff/sales?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setSales(data.sales || data.data || []);
        setMetrics(data.metrics || null);
      }
    } catch (err) {
      console.error('Failed to load sales history:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales();
  }, [statusFilter, paymentFilter, typeFilter, startDate, endDate]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSales();
  };

  const exportSalesCSV = () => {
    if (sales.length === 0) {
      alert('No sales records to export.');
      return;
    }

    const headers = [
      'Sale ID',
      'Date',
      'Customer',
      'Company',
      'Phone',
      'Wholesale Type',
      'Total CTN',
      'Order Value (AED)',
      'Payments Received (AED)',
      'Outstanding Balance (AED)',
      'Fulfillment Status',
      'Payment Status',
      'Items Detail',
    ];

    const rows = sales.map((s) => {
      const itemsStr = (s.items || [])
        .map((i) => `${i.productName} (${i.quantityCtn} CTN @ AED ${i.pricePerCtn})`)
        .join('; ');

      return [
        `"${s.id}"`,
        `"${s.saleDate}"`,
        `"${(s.customerName || '').replace(/"/g, '""')}"`,
        `"${(s.companyName || '').replace(/"/g, '""')}"`,
        `"${s.phone || ''}"`,
        `"${s.orderType}"`,
        s.totalCtn,
        s.totalAED.toFixed(2),
        s.netPaidAED.toFixed(2),
        s.outstandingBalanceAED.toFixed(2),
        `"${s.status}"`,
        `"${s.paymentStatus}"`,
        `"${itemsStr.replace(/"/g, '""')}"`,
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `barakah_sales_history_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 rounded-2xl border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Commercial Audit & Verification
            </span>
            <span className="text-xs text-slate-400 font-mono">Wholesale Trade Ledger</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Wholesale Sales History
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. — Completed Sales, Order Snapshots, Settlement Status & Line Details
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={exportSalesCSV}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-4 py-2.5 rounded-xl transition-all text-sm active:scale-95 shadow-md"
          >
            <span>📥</span> Export Sales CSV
          </button>
        </div>
      </div>

      {/* KPI Cards (Separating Order Value, Completed Sales, Money Received, Outstanding, Cancelled) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {/* 1. Completed Sales Revenue */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold uppercase tracking-wider">Completed Sales Revenue</span>
            <span className="text-emerald-400 text-base">✅</span>
          </div>
          <div className="text-xl font-black text-emerald-400 tracking-tight">
            AED {metrics ? metrics.totalCompletedSalesValueAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
            <span>Fulfilled Sales:</span>
            <span className="font-bold text-slate-200">{metrics?.completedSalesCount || 0} Orders</span>
          </div>
        </div>

        {/* 2. Confirmed Order Pipeline */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold uppercase tracking-wider">Confirmed Order Pipeline</span>
            <span className="text-blue-400 text-base">📋</span>
          </div>
          <div className="text-xl font-bold text-white tracking-tight">
            AED {metrics ? metrics.totalConfirmedOrderValueAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
            <span>Pending/Confirmed:</span>
            <span className="font-bold text-slate-200">{(metrics?.pendingOrdersCount || 0) + (metrics?.confirmedOrdersCount || 0)} Orders</span>
          </div>
        </div>

        {/* 3. Valid Payments Received */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold uppercase tracking-wider">Payments Collected</span>
            <span className="text-teal-400 text-base">💰</span>
          </div>
          <div className="text-xl font-bold text-white tracking-tight">
            AED {metrics ? metrics.totalValidPaymentsReceivedAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
            <span>Bank / Cash Cleared</span>
            <span className="text-emerald-400 font-mono text-[10px]">VERIFIED</span>
          </div>
        </div>

        {/* 4. Outstanding Receivables */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-rose-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold uppercase tracking-wider">Outstanding Receivables</span>
            <span className="text-amber-400 text-base">⏳</span>
          </div>
          <div className="text-xl font-bold text-amber-300 tracking-tight">
            AED {metrics ? metrics.outstandingReceivablesAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
            <span>Unsettled Balance</span>
            <span className="text-slate-300 text-[10px]">Strict Store Pickup</span>
          </div>
        </div>

        {/* 5. Total CTN Sold & Cancelled */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold uppercase tracking-wider">Total CTN Sold</span>
            <span className="text-purple-400 text-base">📦</span>
          </div>
          <div className="text-xl font-black text-white tracking-tight">
            {metrics?.totalCtnSold?.toLocaleString() || 0} <span className="text-xs font-normal text-slate-400">CTN</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
            <span>Cancelled:</span>
            <span className="text-rose-400 font-semibold">{metrics?.cancelledOrdersCount || 0} (AED {metrics?.totalCancelledOrderValueAED.toLocaleString() || '0'})</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-4 shadow-lg space-y-4">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Order ID, Buyer, Company, Product..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            {search && (
              <button
                type="button"
                onClick={() => { setSearch(''); fetchSales(); }}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Fulfillment Status */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="ALL">All Order Statuses</option>
              <option value="COMPLETED">Completed Sales Only</option>
              <option value="READY_FOR_PICKUP">Ready for Pickup</option>
              <option value="CONFIRMED">Confirmed Orders</option>
              <option value="PENDING">Pending Orders</option>
              <option value="CANCELLED">Cancelled Orders</option>
            </select>
          </div>

          {/* Payment Status */}
          <div>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="ALL">All Payment Statuses</option>
              <option value="PAID">Fully Settled (PAID)</option>
              <option value="PARTIALLY_PAID">Partially Paid</option>
              <option value="UNPAID">Unpaid Balance</option>
            </select>
          </div>

          {/* Wholesale Type */}
          <div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="ALL">All Channels</option>
              <option value="CONTAINER">Container Wholesale</option>
              <option value="DUBAI_WHOLESALE">Dubai Spot Market</option>
              <option value="MIXED">Mixed Wholesale</option>
            </select>
          </div>

          {/* Apply Filter Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium py-2.5 rounded-xl transition text-sm flex items-center justify-center gap-2"
            >
              <span>🔍</span> Filter
            </button>
          </div>
        </form>
      </div>

      {/* Sales History Table */}
      <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-white">Wholesale Sales Transaction Register</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
              {sales.length} Records
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#0F172A] text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800 font-mono">
              <tr>
                <th className="py-3.5 px-4">Sale ID & Date</th>
                <th className="py-3.5 px-4">Customer / Company</th>
                <th className="py-3.5 px-4">Channel & CTN</th>
                <th className="py-3.5 px-4">Order Value (AED)</th>
                <th className="py-3.5 px-4">Paid (AED)</th>
                <th className="py-3.5 px-4">Balance (AED)</th>
                <th className="py-3.5 px-4">Order Status</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {loading ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    <div className="flex items-center justify-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>Loading verified sales ledger...</span>
                    </div>
                  </td>
                </tr>
              ) : sales.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    <p className="text-base font-medium text-slate-400 mb-1">No sales records matching your criteria</p>
                    <p className="text-xs text-slate-500">Adjust the active status or date filters.</p>
                  </td>
                </tr>
              ) : (
                sales.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-900/60 transition group">
                    {/* Sale ID & Date */}
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-semibold text-emerald-400">{s.id}</div>
                      <div className="text-xs text-slate-500">{s.saleDate}</div>
                    </td>

                    {/* Customer & Company */}
                    <td className="py-3.5 px-4">
                      <div className="font-medium text-slate-100">{s.customerName}</div>
                      {s.companyName && (
                        <div className="text-xs text-slate-400">{s.companyName}</div>
                      )}
                      <div className="text-xs text-slate-500 font-mono">{s.phone}</div>
                    </td>

                    {/* Channel & Volume */}
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                        {s.orderType === 'CONTAINER' ? '🚢 Container' : '🏪 Dubai Spot'}
                      </span>
                      <div className="text-xs font-bold text-white mt-1">
                        {s.totalCtn} <span className="text-slate-400 font-normal">CTN</span>
                      </div>
                    </td>

                    {/* Order Total AED */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white text-base">
                        AED {s.totalAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {s.items?.length || 0} line {s.items?.length === 1 ? 'item' : 'items'}
                      </div>
                    </td>

                    {/* Paid AED */}
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-emerald-400 font-mono">
                        AED {s.netPaidAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {s.paymentsCount} {s.paymentsCount === 1 ? 'receipt' : 'receipts'}
                      </div>
                    </td>

                    {/* Outstanding Balance AED */}
                    <td className="py-3.5 px-4">
                      <div className={`font-bold font-mono ${s.outstandingBalanceAED > 0 ? 'text-amber-300' : 'text-slate-400'}`}>
                        AED {s.outstandingBalanceAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                    </td>

                    {/* Order Status */}
                    <td className="py-3.5 px-4">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 ${
                        s.status === 'COMPLETED'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : s.status === 'READY_FOR_PICKUP'
                          ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                          : s.status === 'CONFIRMED'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : s.status === 'CANCELLED'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {s.status}
                      </span>
                    </td>

                    {/* Payment Status */}
                    <td className="py-3.5 px-4">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        s.paymentStatus === 'PAID'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : s.paymentStatus === 'PARTIALLY_PAID'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {s.paymentStatus}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedSale(s)}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition"
                      >
                        📄 Invoice
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* PRINTABLE OFFICIAL SALES INVOICE MODAL */}
      {/* ======================================================== */}
      {selectedSale && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-2xl max-w-3xl w-full p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto print:p-0">
            {/* Action Bar (Hidden on print) */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 print:hidden">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Official Commercial Sales Invoice
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs rounded-lg hover:bg-emerald-700 transition"
                >
                  🖨️ Print Invoice
                </button>
                <button
                  onClick={() => setSelectedSale(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Invoice Body */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-200 pb-6">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950 uppercase">
                    BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
                  </h2>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai, UAE
                  </p>
                  <p className="text-[11px] text-slate-500">TRN: 100234567800003 | Phone: +971 4 123 4567 | WhatsApp: +971 50 123 4567</p>
                  <p className="text-[11px] text-slate-500">Email: sales@barakahalrizquae.com | Web: https://barakahalrizquae.com</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-sm uppercase rounded">
                    COMMERCIAL INVOICE
                  </span>
                  <div className="text-xs font-mono font-bold text-slate-900 mt-2">
                    Invoice #{selectedSale.id}
                  </div>
                  <div className="text-xs text-slate-500">Date: {selectedSale.saleDate}</div>
                  <div className="text-xs text-slate-500">Type: {selectedSale.orderType}</div>
                </div>
              </div>

              {/* Bill To & Pickup Spec */}
              <div className="grid grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Bill To Customer:
                  </span>
                  <div className="font-bold text-slate-900 text-sm">{selectedSale.customerName}</div>
                  {selectedSale.companyName && (
                    <div className="text-slate-700 font-medium">{selectedSale.companyName}</div>
                  )}
                  <div className="text-slate-600 font-mono mt-1">Phone: {selectedSale.phone}</div>
                  {selectedSale.email && <div className="text-slate-600">Email: {selectedSale.email}</div>}
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Collection / Store Pickup Location:
                  </span>
                  <div className="font-semibold text-slate-900">{selectedSale.pickupLocation}</div>
                  <div className="text-slate-600 mt-1">Preferred Date: {selectedSale.pickupDate} ({selectedSale.pickupTime || 'Morning Session'})</div>
                  <div className="text-slate-600 mt-1">Terms: <strong className="text-slate-800">Strict Store Pickup Only (No Delivery)</strong></div>
                </div>
              </div>

              {/* Items Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Item Description</th>
                      <th className="py-2.5 px-3">Packaging Unit</th>
                      <th className="py-2.5 px-3 text-right">Quantity (CTN)</th>
                      <th className="py-2.5 px-3 text-right">Unit Price (AED)</th>
                      <th className="py-2.5 px-3 text-right">Line Total (AED)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {(selectedSale.items || []).map((it, idx) => (
                      <tr key={idx}>
                        <td className="py-2.5 px-3">
                          <div className="font-bold text-slate-900">{it.productName}</div>
                          {it.productArabicName && <div className="text-[11px] text-slate-500">{it.productArabicName}</div>}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600">{it.packagingUnit || 'CTN'}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">{it.quantityCtn}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">
                          AED {it.pricePerCtn.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                          AED {it.lineTotalAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals & Payments Summary */}
              <div className="flex justify-end">
                <div className="w-72 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between text-slate-600">
                    <span>Total Carton Volume:</span>
                    <span className="font-mono font-bold text-slate-900">{selectedSale.totalCtn} CTN</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-bold border-t border-slate-200 pt-2 text-sm">
                    <span>Invoice Total:</span>
                    <span className="font-mono">AED {selectedSale.totalAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Payments Received:</span>
                    <span className="font-mono">- AED {selectedSale.netPaidAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-amber-900 font-black border-t border-slate-200 pt-2 text-sm">
                    <span>Outstanding Balance Due:</span>
                    <span className="font-mono">AED {selectedSale.outstandingBalanceAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Footer Terms */}
              <div className="border-t border-slate-200 pt-4 text-[11px] text-slate-500 space-y-1">
                <p>1. All products sold on standard UAE wholesale cash & carry terms from Al Aweer wholesale facilities.</p>
                <p>2. Direct questions regarding this invoice to Accounts Department at Barakah Al Rizq Foodstuff Trading L.L.C.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
