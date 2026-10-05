'use client';

import React, { useState, useEffect } from 'react';

interface ReportTimelineItem {
  periodLabel: string;
  completedSalesAED: number;
  confirmedOrdersAED: number;
  paymentsReceivedAED: number;
  ordersCount: number;
  ctnSold: number;
}

interface ChannelComparisonItem {
  channel: string;
  code: string;
  totalOrders: number;
  completedOrders: number;
  completedSalesAED: number;
  pipelineAED: number;
  ctnSold: number;
  averageOrderAED: number;
}

interface CustomerReportItem {
  customerName: string;
  companyName?: string;
  phone: string;
  totalOrders: number;
  completedOrders: number;
  completedSalesAED: number;
  pipelineAED: number;
  ctnSold: number;
  totalPaidAED: number;
  outstandingBalanceAED: number;
}

interface ProductReportItem {
  productId: string;
  productName: string;
  totalCtnSold: number;
  completedSalesAED: number;
  pipelineCtn: number;
  pipelineAED: number;
  orderCount: number;
  averagePricePerCtn: number;
}

export default function AdminReportsPage() {
  const [period, setPeriod] = useState<'all' | 'today' | 'week' | 'month' | 'year' | 'custom'>('all');
  const [orderType, setOrderType] = useState('ALL');
  const [customerFilter, setCustomerFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const [activeTab, setActiveTab] = useState<'timeline' | 'channels' | 'products' | 'customers'>('timeline');

  const [metrics, setMetrics] = useState<any>(null);
  const [timeline, setTimeline] = useState<ReportTimelineItem[]>([]);
  const [channels, setChannels] = useState<ChannelComparisonItem[]>([]);
  const [customers, setCustomers] = useState<CustomerReportItem[]>([]);
  const [products, setProducts] = useState<ProductReportItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.set('period', period);
      if (orderType !== 'ALL') params.set('orderType', orderType);
      if (customerFilter) params.set('customer', customerFilter);
      if (productFilter) params.set('product', productFilter);
      if (period === 'custom') {
        if (customStartDate) params.set('startDate', customStartDate);
        if (customEndDate) params.set('endDate', customEndDate);
      }

      const res = await fetch(`/api/admin/foodstuff/reports?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setMetrics(data.metrics || null);
        setTimeline(data.timeline || []);
        setChannels(data.channelComparison || []);
        setCustomers(data.salesByCustomer || []);
        setProducts(data.salesByProduct || []);
      }
    } catch (err) {
      console.error('Failed to load reports:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [period, orderType]);

  const handleCustomFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchReports();
  };

  const exportReportCSV = () => {
    let headers: string[] = [];
    let rows: (string | number)[][] = [];
    const reportDate = new Date().toISOString().slice(0, 10);

    if (activeTab === 'timeline') {
      headers = ['Period', 'Orders Count', 'Completed Sales (AED)', 'Confirmed Pipeline (AED)', 'Payments Received (AED)', 'CTN Sold'];
      rows = timeline.map(t => [
        `"${t.periodLabel}"`,
        t.ordersCount,
        t.completedSalesAED.toFixed(2),
        t.confirmedOrdersAED.toFixed(2),
        t.paymentsReceivedAED.toFixed(2),
        t.ctnSold,
      ]);
    } else if (activeTab === 'channels') {
      headers = ['Channel', 'Total Orders', 'Completed Orders', 'Completed Sales (AED)', 'Pipeline (AED)', 'CTN Sold', 'Average Order (AED)'];
      rows = channels.map(c => [
        `"${c.channel}"`,
        c.totalOrders,
        c.completedOrders,
        c.completedSalesAED.toFixed(2),
        c.pipelineAED.toFixed(2),
        c.ctnSold,
        c.averageOrderAED.toFixed(2),
      ]);
    } else if (activeTab === 'products') {
      headers = ['Product Name', 'Total CTN Sold', 'Completed Sales (AED)', 'Avg Price/CTN (AED)', 'Orders Count'];
      rows = products.map(p => [
        `"${p.productName.replace(/"/g, '""')}"`,
        p.totalCtnSold,
        p.completedSalesAED.toFixed(2),
        p.averagePricePerCtn.toFixed(2),
        p.orderCount,
      ]);
    } else {
      headers = ['Customer Name', 'Company', 'Phone', 'Completed Orders', 'Completed Sales (AED)', 'CTN Sold', 'Payments Received (AED)', 'Outstanding Balance (AED)'];
      rows = customers.map(c => [
        `"${c.customerName.replace(/"/g, '""')}"`,
        `"${(c.companyName || '').replace(/"/g, '""')}"`,
        `"${c.phone}"`,
        c.completedOrders,
        c.completedSalesAED.toFixed(2),
        c.ctnSold,
        c.totalPaidAED.toFixed(2),
        c.outstandingBalanceAED.toFixed(2),
      ]);
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `barakah_report_${activeTab}_${reportDate}.csv`);
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
              Executive Analytics & Financial Intelligence
            </span>
            <span className="text-xs text-slate-400 font-mono">B2B Foodstuff Trade Metrics</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Wholesale Sales Reports & Analytics
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. — Completed Sales Revenue, Channel Breakdown, Commodity Performance & Client Volume
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-3.5 py-2 rounded-xl transition text-xs active:scale-95"
          >
            <span>🖨️</span> Print Report
          </button>
          <button
            onClick={exportReportCSV}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium px-4 py-2 rounded-xl transition text-xs shadow-md active:scale-95"
          >
            <span>📥</span> Export Tab CSV
          </button>
        </div>
      </div>

      {/* Period & Filter Controls */}
      <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-4 shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Quick Period Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {(['all', 'today', 'week', 'month', 'year', 'custom'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition capitalize ${
                  period === p
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {p === 'all' ? 'All Time' : p === 'week' ? 'This Week' : p === 'month' ? 'This Month' : p === 'year' ? 'This Year' : p}
              </button>
            ))}
          </div>

          {/* Wholesale Channel Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Channel:</span>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Wholesale Channels</option>
              <option value="CONTAINER">Container Wholesale Only</option>
              <option value="DUBAI_WHOLESALE">Dubai Spot Market Only</option>
            </select>
          </div>
        </div>

        {/* Custom Date Form (if period === 'custom') */}
        {period === 'custom' && (
          <form onSubmit={handleCustomFilterSubmit} className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Start Date:</span>
              <input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200"
              />
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">End Date:</span>
              <input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200"
              />
            </div>
            <button
              type="submit"
              className="px-3.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold"
            >
              Apply Dates
            </button>
          </form>
        )}
      </div>

      {/* Financial Metrics Cards (Separating Completed Sales from Pipeline, Payments, and Receivables) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Completed Sales Revenue */}
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Completed Sales Revenue</span>
            <span className="text-emerald-400 text-lg">💰</span>
          </div>
          <div className="text-2xl font-black text-emerald-400 tracking-tight">
            AED {metrics ? metrics.totalCompletedSalesValueAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
            <span>Completed Orders:</span>
            <span className="font-bold text-slate-200">{metrics?.completedOrdersCount || 0}</span>
          </div>
        </div>

        {/* Confirmed Pipeline */}
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Confirmed Wholesale Pipeline</span>
            <span className="text-blue-400 text-lg">📋</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">
            AED {metrics ? metrics.totalConfirmedOrderValueAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
            <span>Active Non-Cancelled:</span>
            <span className="font-bold text-slate-200">{(metrics?.completedOrdersCount || 0) + (metrics?.confirmedOrdersCount || 0)}</span>
          </div>
        </div>

        {/* Payments Collected vs Outstanding */}
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Payments Collected</span>
            <span className="text-teal-400 text-lg">🏦</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">
            AED {metrics ? metrics.totalValidPaymentsReceivedAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
            <span>Outstanding Due:</span>
            <span className="font-bold text-amber-300 font-mono">AED {metrics?.outstandingReceivablesAED.toLocaleString() || '0'}</span>
          </div>
        </div>

        {/* Volume & Average Sale */}
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Total CTN Sold</span>
            <span className="text-purple-400 text-lg">📦</span>
          </div>
          <div className="text-2xl font-black text-white tracking-tight">
            {metrics?.totalCtnSold?.toLocaleString() || 0} <span className="text-xs font-normal text-slate-400">CTN</span>
          </div>
          <div className="mt-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
            <span>Avg Sale Value:</span>
            <span className="font-bold text-slate-200">AED {metrics?.averageCompletedSaleValueAED.toLocaleString() || '0'}</span>
          </div>
        </div>
      </div>

      {/* Analytical Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
            activeTab === 'timeline'
              ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          📅 Timeline Breakdown
        </button>

        <button
          onClick={() => setActiveTab('channels')}
          className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
            activeTab === 'channels'
              ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          🚢 Wholesale Channels
        </button>

        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
            activeTab === 'products'
              ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          🥦 Top Commodities
        </button>

        <button
          onClick={() => setActiveTab('customers')}
          className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
            activeTab === 'customers'
              ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          👥 Top Buyers & Clients
        </button>
      </div>

      {/* Tab 1: Timeline Breakdown */}
      {activeTab === 'timeline' && (
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-base font-semibold text-white">Sales & Settlement Progression by Date</h3>
            <p className="text-xs text-slate-400">Chronological grouping of completed sales, pipeline value, and verified collections</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-[#0F172A] text-slate-400 text-xs uppercase tracking-wider font-mono border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4 text-center">Orders Count</th>
                  <th className="py-3 px-4 text-right">Completed Sales (AED)</th>
                  <th className="py-3 px-4 text-right">Confirmed Pipeline (AED)</th>
                  <th className="py-3 px-4 text-right">Payments Received (AED)</th>
                  <th className="py-3 px-4 text-right">Volume (CTN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {timeline.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">
                      No sales recorded in the selected period.
                    </td>
                  </tr>
                ) : (
                  timeline.map((t) => (
                    <tr key={t.periodLabel} className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-mono font-bold text-slate-200">{t.periodLabel}</td>
                      <td className="py-3 px-4 text-center font-bold text-slate-300">{t.ordersCount}</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                        AED {t.completedSalesAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-slate-300">
                        AED {t.confirmedOrdersAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-teal-400">
                        AED {t.paymentsReceivedAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-white">
                        {t.ctnSold.toLocaleString()} CTN
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Wholesale Channels */}
      {activeTab === 'channels' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {channels.map((c) => (
            <div key={c.code} className="bg-[#0B1120] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{c.code === 'CONTAINER' ? '🚢' : '🏪'}</span>
                  <h3 className="text-base font-bold text-white">{c.channel}</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 font-mono">
                  {c.totalOrders} Orders
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-500 block">Completed Sales:</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">AED {c.completedSalesAED.toLocaleString()}</span>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-500 block">Pipeline Value:</span>
                  <span className="text-lg font-bold text-white font-mono">AED {c.pipelineAED.toLocaleString()}</span>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-500 block">Cartons Sold:</span>
                  <span className="text-lg font-bold text-white">{c.ctnSold.toLocaleString()} CTN</span>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-500 block">Average Order Size:</span>
                  <span className="text-lg font-bold text-amber-300 font-mono">AED {c.averageOrderAED.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Products Performance */}
      {activeTab === 'products' && (
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-base font-semibold text-white">Commodity & Product Sales Ranking</h3>
            <p className="text-xs text-slate-400">Ranked by verified completed sales revenue and master carton volume</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-[#0F172A] text-slate-400 text-xs uppercase tracking-wider font-mono border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4 text-center">Orders Count</th>
                  <th className="py-3 px-4 text-right">Volume Sold (CTN)</th>
                  <th className="py-3 px-4 text-right">Avg Price / CTN (AED)</th>
                  <th className="py-3 px-4 text-right">Completed Sales (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-slate-500">
                      No product sales recorded in the selected period.
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.productId || p.productName} className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-bold text-white">{p.productName}</td>
                      <td className="py-3 px-4 text-center text-slate-300 font-medium">{p.orderCount}</td>
                      <td className="py-3 px-4 text-right font-bold text-purple-300">{p.totalCtnSold.toLocaleString()} CTN</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-300">
                        AED {p.averagePricePerCtn.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                        AED {p.completedSalesAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Top Clients */}
      {activeTab === 'customers' && (
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-base font-semibold text-white">Wholesale Client Performance</h3>
            <p className="text-xs text-slate-400">Top buyers ranked by completed wholesale purchases and outstanding balances</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-[#0F172A] text-slate-400 text-xs uppercase tracking-wider font-mono border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Client / Company</th>
                  <th className="py-3 px-4 text-center">Completed Orders</th>
                  <th className="py-3 px-4 text-right">Volume (CTN)</th>
                  <th className="py-3 px-4 text-right">Completed Purchases (AED)</th>
                  <th className="py-3 px-4 text-right">Payments Received (AED)</th>
                  <th className="py-3 px-4 text-right">Outstanding (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">
                      No client sales recorded in the selected period.
                    </td>
                  </tr>
                ) : (
                  customers.map((c) => (
                    <tr key={c.phone || c.customerName} className="hover:bg-slate-900/50">
                      <td className="py-3 px-4">
                        <div className="font-bold text-white">{c.customerName}</div>
                        {c.companyName && <div className="text-xs text-slate-400">{c.companyName}</div>}
                        <div className="text-xs text-slate-500 font-mono">{c.phone}</div>
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-slate-300">{c.completedOrders}</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-200">{c.ctnSold.toLocaleString()} CTN</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                        AED {c.completedSalesAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-teal-400">
                        AED {c.totalPaidAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-amber-300">
                        AED {c.outstandingBalanceAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
