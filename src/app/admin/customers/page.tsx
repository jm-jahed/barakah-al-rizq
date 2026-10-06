'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Search, Plus, RefreshCw, MessageCircle, Mail, Phone, Building2,
  Calendar, Package, Download, Edit3, Eye, FileText, ChevronRight,
  ShieldCheck, X, AlertTriangle, Users
} from 'lucide-react';
import { WholesaleCustomer, WholesaleOrder } from '@/lib/db/types';
import { CustomerEmailModal } from '@/components/admin/CustomerEmailModal';

interface CustomersApiResponse {
  success: boolean;
  totalCount: number;
  filteredCount: number;
  customers: WholesaleCustomer[];
}

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<WholesaleCustomer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');

  // Selected Customer Details Drawer
  const [activeCustomer, setActiveCustomer] = useState<WholesaleCustomer | null>(null);
  const [customerOrders, setCustomerOrders] = useState<WholesaleOrder[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // Email Client Modal State
  const [emailModalCustomer, setEmailModalCustomer] = useState<WholesaleCustomer | null>(null);

  // Create / Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'CREATE' | 'EDIT'>('CREATE');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    companyName: '',
    phone: '',
    email: '',
    whatsapp: '',
    trn: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Fetch Customers List
  const fetchCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.set('search', searchTerm);

      const res = await fetch(`/api/admin/foodstuff/customers?${params.toString()}`);
      if (!res.ok) {
        throw new Error(`Failed to load customers (HTTP ${res.status})`);
      }
      const data: CustomersApiResponse = await res.json();
      setCustomers(data.customers || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch customers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCustomers();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Load Single Customer Order History when drawer opens
  const handleOpenCustomerDetails = async (cust: WholesaleCustomer) => {
    setActiveCustomer(cust);
    setLoadingOrders(true);
    setCustomerOrders([]);

    try {
      const res = await fetch(`/api/admin/foodstuff/customers?id=${cust.id}`);
      if (res.ok) {
        const data = await res.json();
        setCustomerOrders(data.orders || []);
      }
    } catch {
      // Non-fatal
    } finally {
      setLoadingOrders(false);
    }
  };

  // Open Create Customer Modal
  const handleOpenCreate = () => {
    setModalMode('CREATE');
    setFormError(null);
    setFormData({
      id: '',
      name: '',
      companyName: '',
      phone: '',
      email: '',
      whatsapp: '',
      trn: '',
      notes: '',
    });
    setIsModalOpen(true);
  };

  // Open Edit Customer Modal
  const handleOpenEdit = (cust: WholesaleCustomer) => {
    setModalMode('EDIT');
    setFormError(null);
    setFormData({
      id: cust.id,
      name: cust.name,
      companyName: cust.companyName || '',
      phone: cust.phone,
      email: cust.email || '',
      whatsapp: cust.whatsapp || cust.phone,
      trn: cust.trn || '',
      notes: cust.notes || '',
    });
    setIsModalOpen(true);
  };

  // Submit Customer Form
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!formData.name.trim()) {
      setFormError('Customer Name is required.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      setFormError('Contact Phone is required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const endpoint = '/api/admin/foodstuff/customers';
      const method = modalMode === 'CREATE' ? 'POST' : 'PUT';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save customer');
      }

      if (activeCustomer && activeCustomer.id === formData.id) {
        setActiveCustomer(data.customer);
      }

      setIsModalOpen(false);
      await fetchCustomers();
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Save operation failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp Link Helper
  const getWhatsAppLink = (phone: string, name: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, '');
    const msg = encodeURIComponent(
      `Hello ${name}, this is Barakah Al Rizq Foodstuff Trading L.L.C Regarding your B2B Wholesale account.`
    );
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  };

  // Export Customers to CSV
  const handleExportCSV = () => {
    if (customers.length === 0) {
      alert('No customer records to export.');
      return;
    }

    const headers = [
      'Customer ID',
      'Name',
      'Company Name',
      'Phone',
      'Email',
      'WhatsApp',
      'TRN',
      'Total Orders',
      'Total CTN',
      'Completed Sales (AED)',
      'Total Order Value (AED)',
      'Last Order Date',
      'Notes',
    ];

    const rows = customers.map((c) => [
      `"${c.id}"`,
      `"${(c.name || '').replace(/"/g, '""')}"`,
      `"${(c.companyName || '').replace(/"/g, '""')}"`,
      `"${c.phone}"`,
      `"${c.email}"`,
      `"${c.whatsapp || c.phone}"`,
      `"${c.trn || ''}"`,
      c.totalOrders,
      c.totalCtn,
      c.completedOrderValueAED,
      c.totalOrderValueAED,
      `"${c.lastOrderDate || ''}"`,
      `"${(c.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `barakah_wholesale_clients_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics
  const stats = useMemo(() => {
    const total = customers.length;
    const active = customers.filter((c) => c.totalOrders > 0).length;
    const totalOrders = customers.reduce((sum, c) => sum + (c.totalOrders || 0), 0);
    const completedSales = customers.reduce((sum, c) => sum + (c.completedOrderValueAED || 0), 0);
    return { total, active, totalOrders, completedSales };
  }, [customers]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">Clients & Buyers Directory</h1>
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-mono">
              B2B Accounts CRM
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Verified UAE supermarkets, wholesale traders, catering firms, and bulk fresh produce buyers.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={fetchCustomers}
            disabled={loading}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            title="Refresh Directory"
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

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Buyer</span>
          </button>
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Registered Accounts</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">{stats.total}</div>
          <div className="text-[10px] text-slate-500 mt-1">Wholesale accounts on file</div>
        </div>

        <div className="bg-[#0F172A] border border-emerald-500/20 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Active Buyers</div>
          <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">{stats.active}</div>
          <div className="text-[10px] text-emerald-500/80 mt-1">Clients with verified orders</div>
        </div>

        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Trade Orders</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">{stats.totalOrders}</div>
          <div className="text-[10px] text-slate-500 mt-1">Cumulative wholesale transactions</div>
        </div>

        <div className="bg-[#0F172A] border border-emerald-500/20 rounded-2xl p-4">
          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Completed Trade Volume</div>
          <div className="text-xl font-black text-emerald-400 mt-1 font-mono">
            {stats.completedSales.toLocaleString()} <span className="text-[10px] text-slate-400 font-sans">AED</span>
          </div>
          <div className="text-[10px] text-emerald-500/80 mt-1">Completed store collections</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Buyer Name, Company, Phone, WhatsApp, or Email..."
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
      </div>

      {/* Customers Table */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
            <span className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono">Loading Wholesale Clients Directory...</span>
          </div>
        ) : error ? (
          <div className="p-10 text-center text-red-400 space-y-3">
            <AlertTriangle className="w-8 h-8 mx-auto text-red-400" />
            <div className="text-sm font-semibold">{error}</div>
            <button
              onClick={fetchCustomers}
              className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-white rounded-xl"
            >
              Try Again
            </button>
          </div>
        ) : customers.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <Users className="w-10 h-10 mx-auto text-slate-600" />
            <div className="text-sm font-semibold text-slate-300">No client accounts found</div>
            <div className="text-xs text-slate-500">
              Clients are automatically unified from wholesale orders, or you can register a new buyer above.
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Client / Company</th>
                  <th className="py-3.5 px-3">Contact Channels</th>
                  <th className="py-3.5 px-3">TRN / Tax ID</th>
                  <th className="py-3.5 px-3 text-center">Orders</th>
                  <th className="py-3.5 px-3 text-right">Completed Sales</th>
                  <th className="py-3.5 px-3">Last Trade Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {customers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-slate-900/50 transition-colors">
                    {/* Name & Company */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white text-sm">{cust.name}</div>
                      {cust.companyName && (
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Building2 className="w-3 h-3 text-slate-500 shrink-0" />
                          <span>{cust.companyName}</span>
                        </div>
                      )}
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        ID: {cust.id}
                      </div>
                    </td>

                    {/* Contact Channels */}
                    <td className="py-3.5 px-3">
                      <div className="font-mono text-slate-300 flex items-center gap-2">
                        <span>{cust.phone}</span>
                        <a
                          href={getWhatsAppLink(cust.phone, cust.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
                          title="WhatsApp Buyer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      {cust.email && (
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5 truncate max-w-xs">
                          {cust.email}
                        </div>
                      )}
                    </td>

                    {/* TRN */}
                    <td className="py-3.5 px-3 font-mono text-[11px] text-slate-400">
                      {cust.trn ? (
                        <span className="text-slate-300">{cust.trn}</span>
                      ) : (
                        <span className="text-slate-600 italic">Unregistered</span>
                      )}
                    </td>

                    {/* Orders Count & Volume */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      <div className="font-bold text-white text-xs">{cust.totalOrders}</div>
                      <div className="text-[10px] text-slate-500">{cust.totalCtn} CTN</div>
                    </td>

                    {/* Completed Sales */}
                    <td className="py-3.5 px-3 text-right font-mono">
                      <div className="font-bold text-emerald-400 text-xs">
                        {cust.completedOrderValueAED.toLocaleString()} <span className="text-[10px] text-slate-400 font-sans">AED</span>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Pipeline: {cust.totalOrderValueAED.toLocaleString()} AED
                      </div>
                    </td>

                    {/* Last Trade Date */}
                    <td className="py-3.5 px-3">
                      {cust.lastOrderDate ? (
                        <>
                          <div className="text-slate-300 text-[11px] font-mono">
                            {new Date(cust.lastOrderDate).toLocaleDateString('en-GB', {
                              timeZone: 'Asia/Dubai',
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </div>
                          {cust.latestStatus && (
                            <span className="text-[10px] font-mono text-slate-500">
                              Status: {cust.latestStatus}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-slate-600 text-[11px] italic">No orders yet</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => setEmailModalCustomer(cust)}
                          disabled={!cust.email}
                          className={`px-2.5 py-1.5 border rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                            cust.email
                              ? 'bg-emerald-950/50 border-emerald-700/60 hover:border-emerald-400 text-emerald-300 hover:text-white shadow-xs'
                              : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed opacity-60'
                          }`}
                          title={cust.email ? `Email Client (${cust.email})` : 'No email address available'}
                        >
                          <Mail className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Email</span>
                        </button>

                        <button
                          onClick={() => handleOpenCustomerDetails(cust)}
                          className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                          title="View Order History & Profile"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span>History</span>
                        </button>

                        <button
                          onClick={() => handleOpenEdit(cust)}
                          className="p-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 rounded-lg transition"
                          title="Edit Customer Profile"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CUSTOMER DETAILS & ORDER HISTORY DRAWER */}
      {activeCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border-l border-slate-800 w-full max-w-2xl h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-white">{activeCustomer.name}</h2>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                    {activeCustomer.id}
                  </span>
                </div>
                {activeCustomer.companyName && (
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    <span>{activeCustomer.companyName}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEmailModalCustomer(activeCustomer)}
                  disabled={!activeCustomer.email}
                  className={`px-3 py-1.5 border rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                    activeCustomer.email
                      ? 'bg-emerald-950/70 border-emerald-600 text-emerald-300 hover:bg-emerald-900 hover:text-white shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed opacity-60'
                  }`}
                  title={activeCustomer.email ? `Email Client (${activeCustomer.email})` : 'No email address available'}
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Email Client</span>
                </button>

                <button
                  onClick={() => handleOpenEdit(activeCustomer)}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Edit Profile</span>
                </button>
                <button
                  onClick={() => setActiveCustomer(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Profile Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center justify-between">
                  <span>Client Profile & Verification</span>
                  <a
                    href={getWhatsAppLink(activeCustomer.phone, activeCustomer.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-sans text-xs lowercase"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Liaison</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Phone Number:</span>
                    <span className="font-mono text-white">{activeCustomer.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Email Address:</span>
                    <span className="font-mono text-white">{activeCustomer.email || 'None'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Tax Registration No (TRN):</span>
                    <span className="font-mono text-slate-300">{activeCustomer.trn || 'Not Registered'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Customer Since:</span>
                    <span className="font-mono text-slate-300">
                      {new Date(activeCustomer.createdAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Dubai' })}
                    </span>
                  </div>
                </div>

                {activeCustomer.notes && (
                  <div className="pt-2 border-t border-slate-800 text-xs">
                    <span className="text-slate-500 block text-[10px]">Account Notes:</span>
                    <p className="text-slate-300 italic mt-0.5">{activeCustomer.notes}</p>
                  </div>
                )}
              </div>

              {/* Lifetime Volume Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-mono block">TOTAL ORDERS</span>
                  <span className="text-lg font-black text-white font-mono">{activeCustomer.totalOrders}</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-mono block">TOTAL CTN</span>
                  <span className="text-lg font-black text-white font-mono">{activeCustomer.totalCtn}</span>
                </div>
                <div className="bg-slate-900 border border-emerald-500/20 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-emerald-400 font-mono block">COMPLETED VALUE</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">
                    {activeCustomer.completedOrderValueAED.toLocaleString()} AED
                  </span>
                </div>
              </div>

              {/* Order History */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Chronological Wholesale Order History ({customerOrders.length})
                </div>

                {loadingOrders ? (
                  <div className="p-8 text-center text-slate-400 text-xs font-mono">
                    Loading historical orders...
                  </div>
                ) : customerOrders.length === 0 ? (
                  <div className="p-8 text-center bg-slate-900/40 border border-slate-800 rounded-2xl text-xs text-slate-500">
                    No order records found for this buyer.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {customerOrders.map((ord) => (
                      <div
                        key={ord.id}
                        className="bg-slate-900/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white">{ord.id}</span>
                            <span className="text-[10px] font-mono px-2 py-0.2 rounded-full border border-slate-700 text-slate-300">
                              {ord.status}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                            Pickup: {ord.pickupDate} • {ord.items?.length || 0} line items • {ord.totalCtn} CTN
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-mono font-bold text-emerald-400 text-xs">
                            {ord.totalAED.toLocaleString()} AED
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            {new Date(ord.createdAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Dubai' })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT CUSTOMER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl w-full max-w-lg p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  {modalMode === 'CREATE' ? <Plus className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    {modalMode === 'CREATE' ? 'Register New Wholesale Client' : `Edit Client: ${formData.name}`}
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    B2B Wholesale account record and communication profile.
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
                  Contact / Buyer Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tariq Al Mansoori"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Al Madina Supermarket Chain / Gulf Catering"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="buyer@domain.ae"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Tax Registration No (TRN)
                  </label>
                  <input
                    type="text"
                    value={formData.trn}
                    onChange={(e) => setFormData({ ...formData, trn: e.target.value })}
                    placeholder="100XXXXXXXXX003"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Account Notes / Commercial Terms
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Prefers morning collection at Al Aweer warehouse..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                />
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
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition"
                >
                  {isSubmitting ? 'Saving...' : modalMode === 'CREATE' ? 'Register Client' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DIRECT CUSTOMER EMAIL COMPOSE MODAL */}
      <CustomerEmailModal
        isOpen={!!emailModalCustomer}
        onClose={() => setEmailModalCustomer(null)}
        customer={emailModalCustomer}
        onSuccess={fetchCustomers}
      />
    </div>
  );
}
