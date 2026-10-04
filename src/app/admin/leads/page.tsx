'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingBag, Users, Store, CheckCircle, Clock, AlertCircle, Eye, X } from 'lucide-react';
import { WholesaleOrder, WholesaleOrderStatus } from '@/lib/db/types';

export default function AdminLeadsPage() {
  const [activeTab, setActiveTab] = useState<'ORDERS' | 'LEADS'>('ORDERS');

  // Wholesale Orders State
  const [orders, setOrders] = useState<WholesaleOrder[]>([]);
  const [orderFilterStatus, setOrderFilterStatus] = useState<string>('ALL');
  const [orderSearch, setOrderSearch] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<WholesaleOrder | null>(null);

  // Inquiries Leads State
  const [leads, setLeads] = useState<any[]>([]);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [search, setSearch] = useState('');
  const [selectedLead, setSelectedLead] = useState<any | null>(null);

  const fetchOrders = () => {
    fetch('/api/admin/foodstuff/orders')
      .then((res) => res.json())
      .then((data) => {
        if (data.orders) setOrders(data.orders);
      })
      .catch((err) => console.error('Failed to load orders', err));
  };

  const fetchLeads = () => {
    fetch('/api/admin/leads')
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) setLeads(data.leads);
      })
      .catch((err) => console.error('Failed to load leads', err));
  };

  useEffect(() => {
    fetchOrders();
    fetchLeads();
  }, []);

  const handleUpdateOrderStatus = async (id: string, status: WholesaleOrderStatus) => {
    const res = await fetch('/api/admin/foodstuff/orders', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      fetchOrders();
      if (selectedOrder && selectedOrder.id === id) {
        setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
      }
    }
  };

  const handleUpdateStatus = async (id: string, status: string, notes?: string) => {
    await fetch('/api/admin/leads', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, notes }),
    });
    fetchLeads();
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead((prev: any) => ({ ...prev, status, notes }));
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = orderFilterStatus === 'ALL' || o.status === orderFilterStatus;
    const s = orderSearch.toLowerCase();
    const matchesSearch =
      o.id.toLowerCase().includes(s) ||
      o.customerName.toLowerCase().includes(s) ||
      o.phone.toLowerCase().includes(s) ||
      (o.companyName && o.companyName.toLowerCase().includes(s));
    return matchesStatus && matchesSearch;
  });

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = filterStatus === 'ALL' || l.status === filterStatus;
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl font-sans">
      {/* Page Header & Tab Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Commercial CRM &amp; Orders</h1>
          <p className="text-slate-400 text-xs mt-1 font-mono">
            Barakah Al Rizq Foodstuff Trading L.L.C • Central Al Aweer Dispatch Operations
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-[#0F172A] p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('ORDERS')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
              activeTab === 'ORDERS'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Wholesale Orders</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-900/60 text-current text-[10px]">
              {orders.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('LEADS')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
              activeTab === 'LEADS'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>General Inquiries</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-900/60 text-current text-[10px]">
              {leads.length}
            </span>
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* TAB 1: B2B WHOLESALE ORDERS TABLE                             */}
      {/* ============================================================= */}
      {activeTab === 'ORDERS' && (
        <div className="space-y-4">
          {/* Filters & Status Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#0F172A] p-4 rounded-2xl border border-slate-800">
            <input
              type="text"
              placeholder="Search by order ID, customer name, phone, or company..."
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              className="w-full sm:w-80 bg-slate-950 border border-slate-800 text-white rounded-xl p-2.5 text-xs focus:border-amber-400 focus:outline-none font-mono"
            />
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
              {['ALL', 'PENDING', 'CONFIRMED', 'READY_FOR_PICKUP', 'COMPLETED', 'CANCELLED'].map((st) => (
                <button
                  key={st}
                  onClick={() => setOrderFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors shrink-0 ${
                    orderFilterStatus === st
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {st.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-mono">
                  <tr>
                    <th className="p-4">Order ID &amp; Type</th>
                    <th className="p-4">Customer &amp; Company</th>
                    <th className="p-4">Products &amp; Volume</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Pickup Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-sans">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-slate-500 font-mono text-xs">
                        No wholesale pickup orders match the current criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((ord) => {
                      const isContainer = ord.orderType === 'CONTAINER';
                      const isMixed = ord.orderType === 'MIXED';

                      return (
                        <tr key={ord.id} className="hover:bg-slate-900/60 transition-colors">
                          <td className="p-4">
                            <span className="font-mono font-bold text-amber-400 block text-xs">
                              {ord.id}
                            </span>
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase mt-1 ${
                                isContainer
                                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                                  : isMixed
                                  ? 'bg-purple-900/40 text-purple-300 border border-purple-500/30'
                                  : 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/30'
                              }`}
                            >
                              {ord.orderType.replace(/_/g, ' ')}
                            </span>
                          </td>

                          <td className="p-4">
                            <strong className="text-white block">{ord.customerName}</strong>
                            {ord.companyName && (
                              <span className="text-[11px] text-slate-400 block font-normal">
                                {ord.companyName}
                              </span>
                            )}
                            <span className="text-[10px] text-slate-500 font-mono block">
                              {ord.phone}
                            </span>
                          </td>

                          <td className="p-4">
                            <span className="font-mono font-bold text-white block">
                              {ord.totalCtn} CTN Total
                            </span>
                            <span className="text-[10px] text-slate-400 line-clamp-1">
                              {ord.items.map((i) => `${i.productName} (${i.quantityCtn} CTN)`).join(', ')}
                            </span>
                          </td>

                          <td className="p-4 font-mono">
                            <strong className="text-emerald-400 font-bold block text-sm">
                              AED {ord.totalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </strong>
                            <span className="text-[10px] text-slate-500 block">
                              {ord.items.length} produce line{ord.items.length > 1 ? 's' : ''}
                            </span>
                          </td>

                          <td className="p-4 font-mono text-xs">
                            <span className="text-slate-300 block">{ord.pickupDate}</span>
                            <span className="text-[10px] text-amber-300/80 flex items-center gap-1 mt-0.5">
                              <Store className="w-3 h-3 text-amber-400 shrink-0" />
                              <span>Store Pickup</span>
                            </span>
                          </td>

                          <td className="p-4">
                            <select
                              value={ord.status}
                              onChange={(e) =>
                                handleUpdateOrderStatus(ord.id, e.target.value as WholesaleOrderStatus)
                              }
                              className={`border font-mono font-bold rounded-lg text-xs p-1.5 focus:outline-none ${
                                ord.status === 'PENDING'
                                  ? 'bg-amber-950/40 border-amber-500 text-amber-300'
                                  : ord.status === 'CONFIRMED'
                                  ? 'bg-blue-950/40 border-blue-500 text-blue-300'
                                  : ord.status === 'READY_FOR_PICKUP'
                                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300'
                                  : ord.status === 'COMPLETED'
                                  ? 'bg-slate-900 border-slate-700 text-slate-300'
                                  : 'bg-rose-950/40 border-rose-500 text-rose-300'
                              }`}
                            >
                              <option value="PENDING">PENDING</option>
                              <option value="CONFIRMED">CONFIRMED</option>
                              <option value="READY_FOR_PICKUP">READY FOR PICKUP</option>
                              <option value="COMPLETED">COMPLETED</option>
                              <option value="CANCELLED">CANCELLED</option>
                            </select>
                          </td>

                          <td className="p-4 text-right">
                            <button
                              type="button"
                              onClick={() => setSelectedOrder(ord)}
                              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-mono font-bold transition-colors inline-flex items-center gap-1"
                            >
                              <Eye className="w-3.5 h-3.5 text-amber-400" />
                              <span>Details</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* TAB 2: GENERAL LEADS INQUIRIES                                 */}
      {/* ============================================================= */}
      {activeTab === 'LEADS' && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0F172A] p-4 rounded-2xl border border-slate-800">
            <input
              type="text"
              placeholder="Search by client name, email, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-80 bg-slate-950 border border-slate-800 text-white rounded-xl p-2.5 text-xs focus:border-amber-400 focus:outline-none"
            />
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
              {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'WON', 'LOST'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                    filterStatus === st
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-mono">
                <tr>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Email / Phone</th>
                  <th className="p-4">Service &amp; Budget</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-900/50">
                    <td className="p-4 font-bold text-white">
                      {lead.name}
                      {lead.company && <span className="text-slate-400 block font-normal text-[11px]">{lead.company}</span>}
                    </td>
                    <td className="p-4 font-mono">
                      {lead.email}
                      <span className="text-[10px] text-slate-500 block">{lead.phone}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-amber-400 font-semibold block">{lead.service}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{lead.budget}</span>
                    </td>
                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                        className="bg-slate-950 border border-slate-800 text-amber-400 font-bold rounded-lg text-xs p-1.5 font-mono"
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="QUALIFIED">QUALIFIED</option>
                        <option value="PROPOSAL">PROPOSAL</option>
                        <option value="WON">WON</option>
                        <option value="LOST">LOST</option>
                      </select>
                    </td>
                    <td className="p-4 text-slate-500 font-mono">{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-mono font-bold"
                      >
                        View Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* ORDER DETAILS MODAL                                           */}
      {/* ============================================================= */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                  B2B Wholesale Pickup Order
                </span>
                <h3 className="text-xl font-black text-white font-mono">{selectedOrder.id}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px] font-mono">CUSTOMER DETAILS</span>
                <strong className="text-white block text-sm mt-0.5">{selectedOrder.customerName}</strong>
                {selectedOrder.companyName && <span className="text-slate-300 block">{selectedOrder.companyName}</span>}
                <span className="text-amber-400 font-mono block mt-1">{selectedOrder.phone}</span>
                <span className="text-slate-400 font-mono block">{selectedOrder.email}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px] font-mono">PICKUP &amp; DISPATCH TERMS</span>
                <span className="text-emerald-400 font-mono font-bold block text-sm mt-0.5">
                  📍 STORE PICKUP ONLY
                </span>
                <span className="text-slate-300 block text-[11px] mt-1">
                  <strong>Date:</strong> {selectedOrder.pickupDate} ({selectedOrder.pickupTime})
                </span>
                <span className="text-slate-400 block text-[10px] mt-1 leading-tight">
                  {selectedOrder.pickupLocation}
                </span>
              </div>
            </div>

            {/* Line items breakdown */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">
                Order Manifest ({selectedOrder.items.length} Produce Lines • {selectedOrder.totalCtn} CTN)
              </span>
              <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden divide-y divide-slate-800 text-xs">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between font-mono">
                    <div>
                      <strong className="text-white block">{item.productName}</strong>
                      <span className="text-[10px] text-slate-400">
                        {item.orderType === 'CONTAINER' ? '🔒 Container Wholesale' : '🏪 Dubai Wholesale'} • MOQ: {item.moq} CTN
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-bold block">
                        {item.quantityCtn} CTN @ AED {item.pricePerCtn.toFixed(2)}
                      </span>
                      <span className="text-emerald-400 font-bold text-[11px]">
                        AED {item.lineTotalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#063D24] text-white flex items-baseline justify-between font-mono">
              <div>
                <span className="text-[10px] text-emerald-200 block uppercase font-bold">Total Volume</span>
                <strong className="text-base text-amber-300 font-black">{selectedOrder.totalCtn} CTN</strong>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-emerald-200 block uppercase font-bold">Total AED</span>
                <strong className="text-xl text-white font-black">
                  AED {selectedOrder.totalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </strong>
              </div>
            </div>

            {selectedOrder.notes && (
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-500 block text-[10px] font-mono">BUYER NOTES / VEHICLE DISPATCH:</span>
                <p className="text-slate-300 mt-1">{selectedOrder.notes}</p>
              </div>
            )}

            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Status:</span>
                <select
                  value={selectedOrder.status}
                  onChange={(e) =>
                    handleUpdateOrderStatus(selectedOrder.id, e.target.value as WholesaleOrderStatus)
                  }
                  className="bg-slate-900 border border-slate-700 text-amber-300 font-mono font-bold rounded-lg text-xs p-1.5"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="READY_FOR_PICKUP">READY FOR PICKUP</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEAD DETAILS MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl max-w-xl w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-white">Lead Details: {selectedLead.name}</h3>
              <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-3 text-xs">
              <div><span className="text-slate-500">Email:</span> <strong className="text-white">{selectedLead.email}</strong></div>
              <div><span className="text-slate-500">Phone:</span> <strong className="text-white">{selectedLead.phone}</strong></div>
              <div><span className="text-slate-500">Company:</span> <strong className="text-white">{selectedLead.company || 'N/A'}</strong></div>
              <div><span className="text-slate-500">Service Requested:</span> <strong className="text-amber-400">{selectedLead.service}</strong></div>
              <div><span className="text-slate-500">Budget Allocation:</span> <strong className="text-white">{selectedLead.budget}</strong></div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 block mb-1">Message Content:</span>
                <p className="text-slate-200 leading-relaxed whitespace-pre-line">{selectedLead.message}</p>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button onClick={() => setSelectedLead(null)} className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
