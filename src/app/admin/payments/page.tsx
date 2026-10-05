'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { WholesalePayment, WholesalePaymentMethod, WholesalePaymentType, CustomerStatementItem } from '@/lib/db/types';

interface OrderOption {
  id: string;
  customerName: string;
  companyName?: string;
  phone: string;
  email?: string;
  totalAED: number;
  totalCtn: number;
  orderType: string;
  status: string;
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<WholesalePayment[]>([]);
  const [orders, setOrders] = useState<OrderOption[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [methodFilter, setMethodFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Modals state
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [receiptPayment, setReceiptPayment] = useState<WholesalePayment | null>(null);
  const [reversePayment, setReversePayment] = useState<WholesalePayment | null>(null);
  const [reverseAction, setReverseAction] = useState<'REVERSED' | 'REFUNDED'>('REVERSED');
  const [reverseReason, setReverseReason] = useState('');
  const [submittingReverse, setSubmittingReverse] = useState(false);

  // Statement Drawer state
  const [statementData, setStatementData] = useState<{
    customerInfo: { name: string; companyName?: string; phone: string; email?: string };
    statementItems: CustomerStatementItem[];
    totals: { totalBilledAED: number; totalPaidAED: number; totalRefundedAED: number; netPaidAED: number; outstandingReceivablesAED: number };
  } | null>(null);
  const [statementLoading, setStatementLoading] = useState(false);
  const [statementCustomerName, setStatementCustomerName] = useState('');

  // Record Form state
  const [formOrderId, setFormOrderId] = useState('');
  const [formAmount, setFormAmount] = useState<number | ''>('');
  const [formMethod, setFormMethod] = useState<WholesalePaymentMethod>('BANK_TRANSFER');
  const [formType, setFormType] = useState<WholesalePaymentType>('FULL');
  const [formDate, setFormDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [formReference, setFormReference] = useState('');
  const [formBankAccount, setFormBankAccount] = useState('Emirates NBD — Barakah Al Rizq LLC (AED A/C)');
  const [formNotes, setFormNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [submittingPayment, setSubmittingPayment] = useState(false);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (methodFilter !== 'ALL') params.set('method', methodFilter);
      if (statusFilter !== 'ALL') params.set('status', statusFilter);
      if (startDate) params.set('startDate', startDate);
      if (endDate) params.set('endDate', endDate);

      const res = await fetch(`/api/admin/foodstuff/payments?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setPayments(data.payments || data.data || []);
        setMetrics(data.metrics || null);
      }
    } catch (err) {
      console.error('Failed to load payments:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/admin/foodstuff/orders');
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || data.data || []);
      }
    } catch (err) {
      console.error('Failed to load orders:', err);
    }
  };

  useEffect(() => {
    fetchPayments();
    fetchOrders();
  }, [methodFilter, statusFilter, startDate, endDate]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPayments();
  };

  // Selected Order in Form Details
  const selectedOrder = useMemo(() => {
    if (!formOrderId) return null;
    return orders.find(o => o.id === formOrderId) || null;
  }, [formOrderId, orders]);

  // Outstanding on selected order calculated from payments
  const selectedOrderBalance = useMemo(() => {
    if (!selectedOrder) return 0;
    const orderPayments = payments.filter(p => p.orderId === selectedOrder.id);
    const valid = orderPayments.filter(p => p.status === 'VALID').reduce((sum, p) => sum + p.amountAED, 0);
    const ref = orderPayments.filter(p => p.status === 'REFUNDED').reduce((sum, p) => sum + p.amountAED, 0);
    const net = Math.max(0, valid - ref);
    return Math.max(0, parseFloat((selectedOrder.totalAED - net).toFixed(2)));
  }, [selectedOrder, payments]);

  const handleOrderSelect = (orderId: string) => {
    setFormOrderId(orderId);
    setFormError('');
    const ord = orders.find(o => o.id === orderId);
    if (ord) {
      const orderPayments = payments.filter(p => p.orderId === ord.id);
      const valid = orderPayments.filter(p => p.status === 'VALID').reduce((sum, p) => sum + p.amountAED, 0);
      const ref = orderPayments.filter(p => p.status === 'REFUNDED').reduce((sum, p) => sum + p.amountAED, 0);
      const bal = Math.max(0, parseFloat((ord.totalAED - (valid - ref)).toFixed(2)));
      setFormAmount(bal);
      setFormType(bal >= ord.totalAED ? 'FULL' : 'PARTIAL');
    }
  };

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formOrderId) {
      setFormError('Please select a wholesale order.');
      return;
    }

    const numAmount = Number(formAmount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setFormError('Please enter a valid positive payment amount in AED.');
      return;
    }

    if (numAmount > selectedOrderBalance + 0.05) {
      setFormError(`Amount exceeds remaining order balance of AED ${selectedOrderBalance.toLocaleString()}.`);
      return;
    }

    try {
      setSubmittingPayment(true);
      const res = await fetch('/api/admin/foodstuff/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: formOrderId,
          amountAED: numAmount,
          paymentMethod: formMethod,
          paymentType: formType,
          paymentDate: formDate,
          referenceNumber: formReference,
          bankAccount: formBankAccount,
          notes: formNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setFormError(data.error || 'Failed to record payment.');
        return;
      }

      setIsRecordModalOpen(false);
      setFormOrderId('');
      setFormAmount('');
      setFormReference('');
      setFormNotes('');
      fetchPayments();
      // Prompt receipt
      setReceiptPayment(data.payment);
    } catch (err: any) {
      setFormError(err.message || 'Error communicating with server.');
    } finally {
      setSubmittingPayment(false);
    }
  };

  const handleReverseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reversePayment) return;

    if (!reverseReason.trim()) {
      alert('Please enter a reason for audit tracking.');
      return;
    }

    try {
      setSubmittingReverse(true);
      const res = await fetch('/api/admin/foodstuff/payments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId: reversePayment.id,
          action: reverseAction,
          reason: reverseReason,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        alert(data.error || 'Failed to reverse payment.');
        return;
      }

      setReversePayment(null);
      setReverseReason('');
      fetchPayments();
    } catch (err: any) {
      alert(err.message || 'Error submitting reversal.');
    } finally {
      setSubmittingReverse(false);
    }
  };

  const viewCustomerStatement = async (phoneOrName: string, displayName: string) => {
    try {
      setStatementLoading(true);
      setStatementCustomerName(displayName);
      const res = await fetch(`/api/admin/foodstuff/payments?statement=true&customer=${encodeURIComponent(phoneOrName)}`);
      if (res.ok) {
        const data = await res.json();
        setStatementData(data.statement);
      } else {
        alert('Could not generate statement for this client.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to load statement.');
    } finally {
      setStatementLoading(false);
    }
  };

  const exportPaymentsCSV = () => {
    if (payments.length === 0) {
      alert('No payments to export.');
      return;
    }

    const headers = [
      'Payment ID',
      'Order ID',
      'Date',
      'Customer',
      'Company',
      'Phone',
      'Amount (AED)',
      'Method',
      'Type',
      'Reference Number',
      'Bank Account',
      'Status',
      'Notes',
    ];

    const rows = payments.map(p => [
      `"${p.id}"`,
      `"${p.orderId}"`,
      `"${p.paymentDate}"`,
      `"${(p.customerName || '').replace(/"/g, '""')}"`,
      `"${(p.companyName || '').replace(/"/g, '""')}"`,
      `"${p.phone || ''}"`,
      p.amountAED.toFixed(2),
      `"${p.paymentMethod}"`,
      `"${p.paymentType}"`,
      `"${(p.referenceNumber || '').replace(/"/g, '""')}"`,
      `"${(p.bankAccount || '').replace(/"/g, '""')}"`,
      `"${p.status}"`,
      `"${(p.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `barakah_payments_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 rounded-2xl border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Accounts Receivable & Financial Control
            </span>
            <span className="text-xs text-slate-400 font-mono">AED Direct Settlement</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Wholesale Payments & Receivables
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. — Verified Payment Transactions, Order Settlements & Client Statements
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              setFormOrderId('');
              setFormAmount('');
              setFormReference('');
              setFormNotes('');
              setFormError('');
              setIsRecordModalOpen(true);
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all text-sm active:scale-95"
          >
            <span>+</span> Record Payment
          </button>

          <button
            onClick={exportPaymentsCSV}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-4 py-2.5 rounded-xl transition-all text-sm"
          >
            <span>📥</span> Export CSV
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Collected */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Total Payments Collected</span>
            <span className="text-emerald-400 text-lg">💰</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">
            AED {metrics ? metrics.totalCollectedAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-xs text-slate-400 flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
            <span>Cash: <strong className="text-slate-200">AED {metrics?.cashTotalAED.toLocaleString() || '0'}</strong></span>
            <span>• Bank: <strong className="text-slate-200">AED {metrics?.bankTransferTotalAED.toLocaleString() || '0'}</strong></span>
            <span>• Card: <strong className="text-slate-200">AED {metrics?.cardTotalAED.toLocaleString() || '0'}</strong></span>
          </div>
        </div>

        {/* Outstanding Receivables */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-rose-400" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Outstanding Receivables</span>
            <span className="text-amber-400 text-lg">⏳</span>
          </div>
          <div className="text-2xl font-bold text-amber-300 tracking-tight">
            AED {metrics ? metrics.outstandingReceivablesAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Active Client Receivables</span>
            <span className="text-slate-300 font-mono text-[11px]">Strict UAE Pickup</span>
          </div>
        </div>

        {/* Order Pipeline Total */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Confirmed Wholesale Pipeline</span>
            <span className="text-blue-400 text-lg">📋</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">
            AED {metrics ? metrics.totalOrderPipelineAED.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
          </div>
          <div className="mt-2 text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Non-Cancelled Wholesale Orders</span>
            <span className="text-blue-400 font-medium">{orders.filter(o => o.status !== 'CANCELLED').length} Orders</span>
          </div>
        </div>

        {/* Orders Settlement Status */}
        <div className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500" />
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold uppercase tracking-wider">Order Settlement Status</span>
            <span className="text-teal-400 text-lg">⚖️</span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <div>
              <span className="text-xs text-emerald-400 font-medium block">PAID</span>
              <span className="text-xl font-bold text-white">{metrics?.fullyPaidOrdersCount || 0}</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <span className="text-xs text-amber-400 font-medium block">PARTIAL</span>
              <span className="text-xl font-bold text-white">{metrics?.partiallyPaidOrdersCount || 0}</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <span className="text-xs text-rose-400 font-medium block">UNPAID</span>
              <span className="text-xl font-bold text-white">{metrics?.unpaidOrdersCount || 0}</span>
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
            <span>Verified against payment receipts</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-4 shadow-lg space-y-4">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Payment ID, Order ID, Client, Ref..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            {search && (
              <button
                type="button"
                onClick={() => { setSearch(''); fetchPayments(); }}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Method Filter */}
          <div>
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="ALL">All Payment Methods</option>
              <option value="CASH">Cash Settlement</option>
              <option value="BANK_TRANSFER">Bank Wire Transfer</option>
              <option value="CARD">Credit/Debit Card</option>
              <option value="CHEQUE">Company Cheque</option>
              <option value="OTHER">Other Configured</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <option value="ALL">All Statuses</option>
              <option value="VALID">Valid / Cleared</option>
              <option value="REVERSED">Reversed</option>
              <option value="REFUNDED">Refunded</option>
            </select>
          </div>

          {/* Apply Filter Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium py-2.5 rounded-xl transition text-sm flex items-center justify-center gap-2"
            >
              <span>🔍</span> Apply Filter
            </button>
          </div>
        </form>
      </div>

      {/* Payments Table */}
      <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-white">Payment Transactions Ledger</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
              {payments.length} Records
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#0F172A] text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800 font-mono">
              <tr>
                <th className="py-3.5 px-4">Payment ID & Date</th>
                <th className="py-3.5 px-4">Referenced Order</th>
                <th className="py-3.5 px-4">Client / Company</th>
                <th className="py-3.5 px-4">Amount (AED)</th>
                <th className="py-3.5 px-4">Method & Ref</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    <div className="flex items-center justify-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>Loading verified payment records...</span>
                    </div>
                  </td>
                </tr>
              ) : payments.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    <p className="text-base font-medium text-slate-400 mb-1">No payment transactions found</p>
                    <p className="text-xs text-slate-500">Record a payment or adjust your search filter.</p>
                  </td>
                </tr>
              ) : (
                payments.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-900/60 transition group">
                    {/* Payment ID & Date */}
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-semibold text-emerald-400">{p.id}</div>
                      <div className="text-xs text-slate-500">{p.paymentDate}</div>
                    </td>

                    {/* Order ID */}
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs text-slate-200">{p.orderId}</div>
                    </td>

                    {/* Customer */}
                    <td className="py-3.5 px-4">
                      <div className="font-medium text-slate-100">{p.customerName}</div>
                      {p.companyName && (
                        <div className="text-xs text-slate-400">{p.companyName}</div>
                      )}
                      <div className="text-xs text-slate-500 font-mono">{p.phone}</div>
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white text-base">
                        AED {p.amountAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                    </td>

                    {/* Method & Ref */}
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700">
                        {p.paymentMethod.replace('_', ' ')}
                      </span>
                      {p.referenceNumber && (
                        <div className="text-xs text-slate-400 font-mono mt-1">
                          Ref: {p.referenceNumber}
                        </div>
                      )}
                    </td>

                    {/* Type */}
                    <td className="py-3.5 px-4">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        p.paymentType === 'FULL'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : p.paymentType === 'ADVANCE'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}>
                        {p.paymentType}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center gap-1.5 ${
                        p.status === 'VALID'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : p.status === 'REFUNDED'
                          ? 'bg-rose-500/10 text-rose-400'
                          : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          p.status === 'VALID' ? 'bg-emerald-400' : p.status === 'REFUNDED' ? 'bg-rose-400' : 'bg-amber-400'
                        }`} />
                        {p.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setReceiptPayment(p)}
                          title="Print Official Receipt"
                          className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition"
                        >
                          🧾 Receipt
                        </button>

                        <button
                          onClick={() => viewCustomerStatement(p.phone, p.companyName || p.customerName)}
                          title="View Client Statement of Account"
                          className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition"
                        >
                          📊 Statement
                        </button>

                        {p.status === 'VALID' && (
                          <button
                            onClick={() => {
                              setReversePayment(p);
                              setReverseAction('REVERSED');
                              setReverseReason('');
                            }}
                            title="Reverse or Refund Payment"
                            className="px-2 py-1 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg transition"
                          >
                            ↩ Reverse
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. RECORD PAYMENT MODAL */}
      {/* ======================================================== */}
      {isRecordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0B1120] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">Record Wholesale Payment</h3>
                <p className="text-xs text-slate-400">Apply a verified settlement against a wholesale order</p>
              </div>
              <button
                onClick={() => setIsRecordModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 text-xl"
              >
                ✕
              </button>
            </div>

            {formError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs">
                ⚠️ {formError}
              </div>
            )}

            <form onSubmit={handleRecordPayment} className="space-y-4">
              {/* Order Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Wholesale Order *
                </label>
                <select
                  value={formOrderId}
                  onChange={(e) => handleOrderSelect(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                  required
                >
                  <option value="">-- Choose an active Wholesale Order --</option>
                  {orders
                    .filter(o => o.status !== 'CANCELLED')
                    .map(o => (
                      <option key={o.id} value={o.id}>
                        {o.id} — {o.customerName} {o.companyName ? `(${o.companyName})` : ''} • Total AED {o.totalAED.toLocaleString()} • [{o.status}]
                      </option>
                    ))}
                </select>
              </div>

              {/* Selected Order Summary Card */}
              {selectedOrder && (
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Order Total:</span>
                    <span className="font-bold text-white font-mono">AED {selectedOrder.totalAED.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Remaining Outstanding Balance:</span>
                    <span className="font-bold text-amber-300 font-mono">AED {selectedOrderBalance.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800 text-slate-400">
                    <span>Buyer: <strong className="text-slate-200">{selectedOrder.customerName}</strong></span>
                    <span>Contact: <strong className="text-slate-200 font-mono">{selectedOrder.phone}</strong></span>
                  </div>
                </div>
              )}

              {/* Amount AED */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Payment Amount (AED) *
                  </label>
                  {selectedOrder && (
                    <div className="flex items-center gap-1.5 text-xs">
                      <button
                        type="button"
                        onClick={() => { setFormAmount(selectedOrderBalance); setFormType('FULL'); }}
                        className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded hover:bg-emerald-500/30 text-[11px]"
                      >
                        Full (AED {selectedOrderBalance.toLocaleString()})
                      </button>
                      <button
                        type="button"
                        onClick={() => { setFormAmount(parseFloat((selectedOrderBalance * 0.5).toFixed(2))); setFormType('PARTIAL'); }}
                        className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 text-[11px]"
                      >
                        50%
                      </button>
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={formAmount}
                  onChange={(e) => setFormAmount(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="0.00"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Method & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Payment Method *
                  </label>
                  <select
                    value={formMethod}
                    onChange={(e) => setFormMethod(e.target.value as WholesalePaymentMethod)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="BANK_TRANSFER">Bank Wire Transfer</option>
                    <option value="CASH">Cash Settlement</option>
                    <option value="CARD">Credit / Debit Card</option>
                    <option value="CHEQUE">Company Cheque</option>
                    <option value="OTHER">Other Method</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Payment Allocation Type
                  </label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value as WholesalePaymentType)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="FULL">Full Settlement</option>
                    <option value="PARTIAL">Partial Settlement</option>
                    <option value="ADVANCE">Advance Deposit</option>
                  </select>
                </div>
              </div>

              {/* Date & Reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Payment Date *
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Transaction / Reference No.
                  </label>
                  <input
                    type="text"
                    value={formReference}
                    onChange={(e) => setFormReference(e.target.value)}
                    placeholder="e.g. FT2610059918, CHQ-10492"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                  />
                </div>
              </div>

              {/* Bank Account */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Receiving Bank / Cash Drawer
                </label>
                <input
                  type="text"
                  value={formBankAccount}
                  onChange={(e) => setFormBankAccount(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Internal Settlement Notes
                </label>
                <textarea
                  rows={2}
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="e.g. Verified by Accounts Dept, Al Aweer counter handover"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsRecordModalOpen(false)}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingPayment}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-xl text-sm shadow-lg shadow-emerald-900/30 disabled:opacity-50"
                >
                  {submittingPayment ? 'Recording...' : `Confirm & Record AED ${Number(formAmount || 0).toLocaleString()}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. PRINTABLE OFFICIAL RECEIPT MODAL */}
      {/* ======================================================== */}
      {receiptPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-2xl max-w-xl w-full p-8 shadow-2xl space-y-6 relative print:p-0">
            {/* Action Bar (Hidden on print) */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 print:hidden">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Official Payment Receipt
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs rounded-lg hover:bg-emerald-700 transition"
                >
                  🖨️ Print Receipt
                </button>
                <button
                  onClick={() => setReceiptPayment(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Receipt Body */}
            <div className="space-y-4">
              {/* Header */}
              <div className="text-center border-b border-slate-200 pb-4">
                <h2 className="text-xl font-black tracking-tight text-slate-950 uppercase">
                  BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
                </h2>
                <p className="text-xs text-slate-600 font-medium">
                  Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai, UAE
                </p>
                <p className="text-[11px] text-slate-500">TRN: 100234567800003 | Phone: +971 4 123 4567</p>
                <div className="mt-2 inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-bold text-xs uppercase tracking-widest">
                  OFFICIAL PAYMENT RECEIPT
                </div>
              </div>

              {/* Receipt Meta */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Receipt No:</span>
                  <span className="font-mono font-bold text-slate-900">{receiptPayment.id}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">Receipt Date:</span>
                  <span className="font-bold text-slate-900">{receiptPayment.paymentDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Referenced Order:</span>
                  <span className="font-mono font-bold text-slate-900">{receiptPayment.orderId}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">Payment Method:</span>
                  <span className="font-bold text-slate-900">{receiptPayment.paymentMethod.replace('_', ' ')}</span>
                </div>
              </div>

              {/* Client Info */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Received From:</div>
                <div className="font-bold text-slate-900 text-sm">{receiptPayment.customerName}</div>
                {receiptPayment.companyName && (
                  <div className="text-slate-700 font-medium">{receiptPayment.companyName}</div>
                )}
                <div className="text-slate-600 font-mono">{receiptPayment.phone}</div>
              </div>

              {/* Amount Highlight */}
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-emerald-900 block uppercase tracking-wider">
                    Total Amount Received
                  </span>
                  <span className="text-xs text-emerald-700">Payment Type: {receiptPayment.paymentType} Settlement</span>
                </div>
                <div className="text-2xl font-black text-emerald-950 font-mono">
                  AED {receiptPayment.amountAED.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>

              {/* Reference & Notes */}
              {(receiptPayment.referenceNumber || receiptPayment.notes) && (
                <div className="text-xs space-y-1 text-slate-600 border-t border-slate-200 pt-3">
                  {receiptPayment.referenceNumber && (
                    <div>Reference / Trans ID: <strong className="text-slate-800 font-mono">{receiptPayment.referenceNumber}</strong></div>
                  )}
                  {receiptPayment.bankAccount && (
                    <div>Deposit Account: <span className="text-slate-800">{receiptPayment.bankAccount}</span></div>
                  )}
                  {receiptPayment.notes && (
                    <div>Notes: <span className="text-slate-800 italic">{receiptPayment.notes}</span></div>
                  )}
                </div>
              )}

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200 text-center text-xs">
                <div>
                  <div className="h-10 border-b border-slate-300" />
                  <span className="text-slate-500 mt-1 block">Received By (Barakah Al Rizq)</span>
                </div>
                <div>
                  <div className="h-10 border-b border-slate-300" />
                  <span className="text-slate-500 mt-1 block">Buyer Signature</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. REVERSE / REFUND PAYMENT MODAL */}
      {/* ======================================================== */}
      {reversePayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0B1120] border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Reverse / Refund Payment</h3>
              <button onClick={() => setReversePayment(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleReverseSubmit} className="space-y-4">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <div>Payment ID: <strong className="text-slate-200 font-mono">{reversePayment.id}</strong></div>
                <div>Amount: <strong className="text-emerald-400 font-mono">AED {reversePayment.amountAED.toLocaleString()}</strong></div>
                <div>Order: <span className="text-slate-300 font-mono">{reversePayment.orderId}</span></div>
                <div>Buyer: <span className="text-slate-300">{reversePayment.customerName}</span></div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Action Type *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setReverseAction('REVERSED')}
                    className={`py-2 px-3 text-xs rounded-xl border font-medium transition ${
                      reverseAction === 'REVERSED'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    Correction Reversal
                  </button>
                  <button
                    type="button"
                    onClick={() => setReverseAction('REFUNDED')}
                    className={`py-2 px-3 text-xs rounded-xl border font-medium transition ${
                      reverseAction === 'REFUNDED'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    Customer Refund
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mandatory Audit Reason *
                </label>
                <textarea
                  rows={3}
                  value={reverseReason}
                  onChange={(e) => setReverseReason(e.target.value)}
                  placeholder="Explain why this payment is being reversed/refunded..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setReversePayment(null)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingReverse}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-xl text-xs shadow-lg shadow-rose-900/30 disabled:opacity-50"
                >
                  {submittingReverse ? 'Processing...' : `Confirm ${reverseAction}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. CUSTOMER STATEMENT OF ACCOUNT DRAWER / MODAL */}
      {/* ======================================================== */}
      {(statementData || statementLoading) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0B1120] border border-slate-700 rounded-2xl max-w-4xl w-full p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Client Account Dossier
                </span>
                <h3 className="text-xl font-bold text-white">
                  Statement of Account: {statementCustomerName}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-xl border border-slate-700 transition"
                >
                  🖨️ Print
                </button>
                <button
                  onClick={() => { setStatementData(null); setStatementCustomerName(''); }}
                  className="text-slate-400 hover:text-white p-1 text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {statementLoading ? (
              <div className="py-12 text-center text-slate-400">
                Generating chronological account ledger...
              </div>
            ) : statementData ? (
              <div className="space-y-5">
                {/* Summary Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-xs text-slate-500 block">Total Invoiced:</span>
                    <span className="text-base font-bold text-white font-mono">AED {statementData.totals.totalBilledAED.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Total Paid:</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">AED {statementData.totals.totalPaidAED.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Refunds/Reversals:</span>
                    <span className="text-base font-bold text-rose-400 font-mono">AED {statementData.totals.totalRefundedAED.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Current Balance:</span>
                    <span className="text-base font-black text-amber-300 font-mono">AED {statementData.totals.outstandingReceivablesAED.toLocaleString()}</span>
                  </div>
                </div>

                {/* Ledger Table */}
                <div className="overflow-x-auto border border-slate-800 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#0F172A] text-slate-400 uppercase tracking-wider font-mono">
                      <tr>
                        <th className="py-2.5 px-3">Date</th>
                        <th className="py-2.5 px-3">Type</th>
                        <th className="py-2.5 px-3">Reference</th>
                        <th className="py-2.5 px-3">Description</th>
                        <th className="py-2.5 px-3 text-right">Debit (AED)</th>
                        <th className="py-2.5 px-3 text-right">Credit (AED)</th>
                        <th className="py-2.5 px-3 text-right">Balance (AED)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-sans">
                      {statementData.statementItems.map((item) => (
                        <tr key={item.id + item.date} className="hover:bg-slate-900/50">
                          <td className="py-2.5 px-3 font-mono text-slate-400">{item.date}</td>
                          <td className="py-2.5 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              item.type === 'ORDER_INVOICE'
                                ? 'bg-blue-500/10 text-blue-400'
                                : item.type === 'PAYMENT'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'bg-rose-500/10 text-rose-400'
                            }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono text-slate-300">{item.reference}</td>
                          <td className="py-2.5 px-3 text-slate-300">{item.description}</td>
                          <td className="py-2.5 px-3 text-right font-mono text-slate-200">
                            {item.debitAED > 0 ? `+${item.debitAED.toLocaleString()}` : '-'}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono text-emerald-400">
                            {item.creditAED > 0 ? `-${item.creditAED.toLocaleString()}` : '-'}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-amber-300">
                            AED {item.runningBalanceAED.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
