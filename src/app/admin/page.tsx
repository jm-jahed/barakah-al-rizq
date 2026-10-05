'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  CreditCard,
  Package,
  Boxes,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  AlertCircle,
  ArrowLeftRight,
  Plus,
  FileText,
  DollarSign,
  Building2,
  Sparkles,
  RefreshCw,
  ShoppingBag,
  Truck,
  Users,
  Inbox,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BarChart3,
} from 'lucide-react';

interface DashboardMetrics {
  totalRevenueAED: number;
  totalReceivedAED: number;
  outstandingReceivablesAED: number;
  collectionRate: number;
  totalOrders: number;
  pendingOrders: number;
  confirmedOrders: number;
  completedOrders: number;
  totalCtnSold: number;
  activeProductsCount: number;
  activeInquiriesCount: number;
}

export default function AdminDashboardHome() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalRevenueAED: 0,
    totalReceivedAED: 0,
    outstandingReceivablesAED: 0,
    collectionRate: 100,
    totalOrders: 0,
    pendingOrders: 0,
    confirmedOrders: 0,
    completedOrders: 0,
    totalCtnSold: 0,
    activeProductsCount: 22,
    activeInquiriesCount: 0,
  });

  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [reportsRes, ordersRes, leadsRes, productsRes] = await Promise.all([
        fetch('/api/admin/foodstuff/reports?period=all').then((r) => (r.ok ? r.json() : null)),
        fetch('/api/admin/foodstuff/orders').then((r) => (r.ok ? r.json() : null)),
        fetch('/api/admin/leads').then((r) => (r.ok ? r.json() : null)),
        fetch('/api/admin/foodstuff/products').then((r) => (r.ok ? r.json() : null)),
      ]);

      const fin = reportsRes?.financialSummary;
      const ordMetrics = ordersRes?.metrics;
      const ordList = ordersRes?.orders || [];
      const leadList = leadsRes?.leads || [];
      const prodList = productsRes?.products || [];

      setMetrics({
        totalRevenueAED: fin?.totalSalesVolumeAED || ordMetrics?.totalOrderPipelineAED || 0,
        totalReceivedAED: fin?.verifiedCashReceivedAED || 0,
        outstandingReceivablesAED: fin?.outstandingReceivablesAED || 0,
        collectionRate: fin?.collectionRatePercent || 100,
        totalOrders: ordMetrics?.totalOrders || ordList.length || 0,
        pendingOrders: ordMetrics?.pending || 0,
        confirmedOrders: ordMetrics?.confirmed || 0,
        completedOrders: ordMetrics?.completed || 0,
        totalCtnSold: ordMetrics?.totalCtn || fin?.totalCtnSold || 0,
        activeProductsCount: prodList.length > 0 ? prodList.length : 22,
        activeInquiriesCount: leadList.length,
      });

      setRecentOrders(ordList.slice(0, 5));
      setRecentLeads(leadList.slice(0, 5));
    } catch (err) {
      console.error('Error loading dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Executive Operations Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#0E1B38] to-[#0A1020] border border-emerald-500/20 p-6 md:p-8 shadow-2xl">
        {/* Glow ambient background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DUBAI AL AWEER LIVE AUCTION
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Building2 className="w-3 h-3" />
                HEADQUARTERS DESK
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Truck className="w-3 h-3" />
                JEBEL ALI PORT IMPORT
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              Barakah Operations Command
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Barakah Al Rizq Foodstuff Trading L.L.C — Real-time Dubai wholesale commodity settlement, accounts receivable reconciliation, and supply chain tracking.
            </p>
          </div>

          {/* Quick Command Action Bar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Link
              href="/admin/orders"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              New Wholesale Order
            </Link>

            <Link
              href="/admin/payments"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 text-amber-300 font-semibold text-xs shadow-md transition-all"
            >
              <CreditCard className="w-4 h-4 text-amber-400" />
              Record Payment
            </Link>

            <button
              onClick={fetchDashboardData}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all disabled:opacity-50"
              title="Refresh Live Metrics"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Top Luxury Financial & Operations KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Total Revenue */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border border-slate-800 hover:border-emerald-500/40 p-5 rounded-2xl shadow-xl transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
              Total Wholesale Sales
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              AED {metrics.totalRevenueAED.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
              <span className="text-slate-400 font-medium">Verified Pipeline</span>
              <span className="text-emerald-400 font-mono font-bold">{metrics.totalCtnSold} Cartons</span>
            </div>
          </div>
        </div>

        {/* Card 2: Verified Received Payments */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border border-slate-800 hover:border-teal-500/40 p-5 rounded-2xl shadow-xl transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400">
              Received Payments
            </span>
            <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono tracking-tight">
              AED {metrics.totalReceivedAED.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
              <span className="text-slate-400 font-medium">Bank & Cash Settlements</span>
              <span className="text-teal-400 font-mono font-bold">{metrics.collectionRate.toFixed(1)}% Health</span>
            </div>
          </div>
        </div>

        {/* Card 3: Outstanding Receivables */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border border-slate-800 hover:border-amber-500/40 p-5 rounded-2xl shadow-xl transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
              Accounts Receivable
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight">
              AED {metrics.outstandingReceivablesAED.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
              <span className="text-slate-400 font-medium">Pending Client Settlement</span>
              <Link href="/admin/payments" className="text-amber-400 hover:underline font-mono font-semibold flex items-center gap-0.5">
                Collect <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4: Orders & RFQ Inquiries */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border border-slate-800 hover:border-blue-500/40 p-5 rounded-2xl shadow-xl transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">
              Orders & RFQ Leads
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
              <span>{metrics.totalOrders}</span>
              <span className="text-xs font-sans text-slate-400 font-normal">Orders</span>
              <span className="text-slate-600">/</span>
              <span className="text-lg text-amber-400 font-bold">{metrics.activeInquiriesCount}</span>
              <span className="text-xs font-sans text-slate-400 font-normal">RFQs</span>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
              <span className="text-slate-400 font-medium">Pending Dispatch</span>
              <span className="text-amber-400 font-mono font-bold">{metrics.pendingOrders} Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Command Hub: 4 High-End Action Portals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link
          href="/admin/orders"
          className="group relative overflow-hidden bg-[#0A0F1D] border border-slate-800/90 hover:border-emerald-500/50 p-6 rounded-2xl shadow-xl transition-all hover:shadow-emerald-950/30 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <Package className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              COMMERCIAL TRADING
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
              Wholesale Orders
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </h3>
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              Process wholesale B2B invoices, carton pick-lists, confirmed buyer bookings, and dispatch status.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
            <span>Manage Orders</span>
            <span>→</span>
          </div>
        </Link>

        <Link
          href="/admin/payments"
          className="group relative overflow-hidden bg-[#0A0F1D] border border-slate-800/90 hover:border-amber-500/50 p-6 rounded-2xl shadow-xl transition-all hover:shadow-amber-950/30 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
              SETTLEMENT & AUDIT
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
              Payments & Receivables
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
            </h3>
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              Record bank transfers, issue printable PDF receipts, adjust credit lines, and verify customer balances.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-amber-400">
            <span>Reconcile Ledger</span>
            <span>→</span>
          </div>
        </Link>

        <Link
          href="/admin/foodstuff-prices"
          className="group relative overflow-hidden bg-[#0A0F1D] border border-slate-800/90 hover:border-teal-500/50 p-6 rounded-2xl shadow-xl transition-all hover:shadow-teal-950/30 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-1">
              MARKET SPOT RATES
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors flex items-center justify-between">
              Live Commodity Matrix
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
            </h3>
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              Update daily Al Aweer wholesale spot prices per KG/bag and Jebel Ali FCL container pricing.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-teal-400">
            <span>Update Rates</span>
            <span>→</span>
          </div>
        </Link>

        <Link
          href="/admin/import-export"
          className="group relative overflow-hidden bg-[#0A0F1D] border border-slate-800/90 hover:border-purple-500/50 p-6 rounded-2xl shadow-xl transition-all hover:shadow-purple-950/30 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1">
              CENTRAL DATA HUB
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
              Import & Export Center
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
            </h3>
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              Comprehensive CSV/JSON bulk catalog import, full backup snapshots, and enterprise system sync.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-purple-400">
            <span>Data Operations</span>
            <span>→</span>
          </div>
        </Link>
      </div>

      {/* Dual Real-Time Trading Activity Streams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel 1: Recent Wholesale Orders */}
        <div className="bg-[#0A0E1A] border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Recent Wholesale Orders</h3>
                <span className="text-[10px] font-mono text-slate-400">Latest Commercial Invoices</span>
              </div>
            </div>
            <Link
              href="/admin/orders"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              All Orders ({metrics.totalOrders}) <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/60 text-slate-400 uppercase text-[9.5px] font-mono tracking-wider">
                <tr>
                  <th className="p-2.5 rounded-l-lg">Order ID</th>
                  <th className="p-2.5">Customer</th>
                  <th className="p-2.5">Cartons</th>
                  <th className="p-2.5">Total AED</th>
                  <th className="p-2.5 rounded-r-lg text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">
                      No wholesale orders registered in system yet.
                    </td>
                  </tr>
                ) : (
                  recentOrders.map((ord) => (
                    <tr key={ord.id || ord.orderNumber} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-2.5 font-mono font-bold text-white">
                        <Link href="/admin/orders" className="hover:text-emerald-400">
                          {ord.orderNumber || ord.id}
                        </Link>
                      </td>
                      <td className="p-2.5 max-w-[140px] truncate text-slate-300">
                        {ord.customer?.companyName || ord.customer?.name || 'Walk-in Trader'}
                      </td>
                      <td className="p-2.5 font-mono text-slate-400">{ord.totalCtn || 0} CTN</td>
                      <td className="p-2.5 font-mono font-bold text-emerald-300">
                        AED {(ord.totalAED || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="p-2.5 text-right">
                        <span
                          className={`inline-flex px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                            ord.status === 'COMPLETED'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : ord.status === 'CONFIRMED'
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel 2: Recent RFQ Inquiries */}
        <div className="bg-[#0A0E1A] border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Inbox className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Direct Wholesale Inquiries</h3>
                <span className="text-[10px] font-mono text-slate-400">RFQ Leads & Quote Requests</span>
              </div>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              All RFQs ({metrics.activeInquiriesCount}) <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/60 text-slate-400 uppercase text-[9.5px] font-mono tracking-wider">
                <tr>
                  <th className="p-2.5 rounded-l-lg">Buyer</th>
                  <th className="p-2.5">Contact</th>
                  <th className="p-2.5">Commodity Requested</th>
                  <th className="p-2.5 rounded-r-lg text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {recentLeads.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500">
                      No direct website inquiries received yet. Live quotes will populate automatically.
                    </td>
                  </tr>
                ) : (
                  recentLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-2.5 font-bold text-white">{lead.name}</td>
                      <td className="p-2.5 text-[11px] text-slate-400">{lead.phone || lead.email}</td>
                      <td className="p-2.5 text-emerald-400 font-medium truncate max-w-[140px]">
                        {lead.service || lead.productName || 'Bulk Fresh Produce'}
                      </td>
                      <td className="p-2.5 text-right">
                        <span className="inline-flex px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {lead.status || 'NEW'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* UAE Market Infrastructure & Compliance Status Footer Bar */}
      <div className="p-5 rounded-2xl bg-[#0A0D18] border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dubai Municipality Food Safety Standard: <strong className="text-white">Active</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>UAE Federal Tax Authority (VAT 5%): <strong className="text-white">Compliant</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Cold Chain Logistics: <strong className="text-white">+4°C to +8°C Verified</strong></span>
          </div>
        </div>

        <div className="font-mono text-[10px] text-slate-500">
          Terminal Session: <span className="text-emerald-400 font-bold">2026.Q4-PROD</span>
        </div>
      </div>
    </div>
  );
}
