"use client";

import React, { useState } from "react";
import { Users, Plus, Search, DollarSign, History, FileText, Phone, Mail, MapPin, X, Check, Edit2, Trash2 } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { RetailCustomer } from "@/types/shopPos";

export const ShopPosCustomersView: React.FC = () => {
  const { customers, addCustomer, updateCustomer, deleteCustomer, recordCustomerPayment, formatPrice, lang } = useShopPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<RetailCustomer | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);

  // Payment Form
  const [payAmount, setPayAmount] = useState("");
  const [payMethod, setPayMethod] = useState("cash");
  const [payNotes, setPayNotes] = useState("");

  // New Customer Form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [openingDue, setOpeningDue] = useState("");
  const [creditLimit, setCreditLimit] = useState("2000");

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecordPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(payAmount);
    if (!isNaN(amt) && amt > 0 && selectedCustomer) {
      recordCustomerPayment(selectedCustomer.id, amt, payMethod, payNotes);
      setIsPaymentModalOpen(false);
      setPayAmount("");
      setPayNotes("");
    }
  };

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    const dueVal = parseFloat(openingDue) || 0;
    const limitVal = parseFloat(creditLimit) || 2000;

    addCustomer({
      id: `cus-${Date.now()}`,
      name,
      phone,
      email,
      address,
      openingDue: dueVal,
      outstandingBalance: dueVal,
      creditLimit: limitVal,
      totalSpent: 0,
      points: 0,
      createdAt: new Date().toISOString().split("T")[0],
      ledger: dueVal > 0 ? [{ id: `led-op-${Date.now()}`, date: new Date().toISOString().split("T")[0], type: "opening_balance", referenceNo: "OB-CUS", description: "Opening Due Balance", debit: dueVal, credit: 0, balance: dueVal }] : [],
    });

    setIsAddCustomerOpen(false);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setOpeningDue("");
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <Users className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "دليل العملاء وحسابات الآجل" : "Customers & Ledger Accounts"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "متابعة حسابات العملاء، الذمم المدينة، سداد المستحقات والتحصيل"
              : "Customer profiles, credit balances, ledger transactions, and payment receipts"}
          </p>
        </div>

        <button
          onClick={() => setIsAddCustomerOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>{lang === "ar" ? "إضافة عميل جديد" : "Add New Customer"}</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3 mb-4 bg-[#0E121B] p-3 rounded-2xl border border-[#1C2333]">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search customer name, phone number, or email..."
            className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">Customer Name</th>
                <th className="py-3 px-4 text-start">Contact Info</th>
                <th className="py-3 px-4 text-end">Total Purchased</th>
                <th className="py-3 px-4 text-end">Due Balance</th>
                <th className="py-3 px-4 text-end">Credit Limit</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {filteredCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-[#141A26] transition">
                  <td className="py-3 px-4 font-bold text-slate-100">{c.name}</td>
                  <td className="py-3 px-4 font-mono text-slate-400">
                    <div>{c.phone}</div>
                    <div className="text-[10px] text-slate-500">{c.email}</div>
                  </td>
                  <td className="py-3 px-4 text-end font-mono text-slate-300">{formatPrice(c.totalSpent)}</td>
                  <td className="py-3 px-4 text-end font-mono font-bold">
                    <span className={c.outstandingBalance && c.outstandingBalance > 0 ? "text-amber-400" : "text-emerald-400"}>
                      {formatPrice(c.outstandingBalance || 0)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-end font-mono text-slate-400">{formatPrice(c.creditLimit || 2000)}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => {
                          setSelectedCustomer(c);
                          setIsPaymentModalOpen(true);
                        }}
                        disabled={!c.outstandingBalance || c.outstandingBalance <= 0}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold transition disabled:opacity-40"
                      >
                        Receive Payment
                      </button>
                      <button
                        onClick={() => setSelectedCustomer(c)}
                        className="p-1.5 rounded-lg bg-[#182030] text-slate-200 hover:text-[#D4AF37] border border-[#222B3D] transition cursor-pointer"
                        title="View Customer Ledger"
                      >
                        <History className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteCustomer(c.id)}
                        className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 transition cursor-pointer"
                        title="Delete Customer Profile"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Ledger Drawer View */}
      {selectedCustomer && !isPaymentModalOpen && (
        <div className="mt-4 p-4 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#1C2333]">
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>Customer Ledger Statement: {selectedCustomer.name}</span>
              </h3>
              <p className="text-xs text-slate-400">{selectedCustomer.phone} • {selectedCustomer.address}</p>
            </div>
            <button onClick={() => setSelectedCustomer(null)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs font-mono">
              <thead>
                <tr className="text-slate-400 uppercase border-b border-[#1C2333]">
                  <th className="py-2 text-start">Date</th>
                  <th className="py-2 text-start">Type</th>
                  <th className="py-2 text-start">Ref No</th>
                  <th className="py-2 text-start">Description</th>
                  <th className="py-2 text-end">Debit (+)</th>
                  <th className="py-2 text-end">Credit (-)</th>
                  <th className="py-2 text-end">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#182030] text-slate-300">
                {(selectedCustomer.ledger || []).length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-4 text-center text-slate-500 font-sans">
                      No ledger transactions recorded yet.
                    </td>
                  </tr>
                ) : (
                  selectedCustomer.ledger?.map((entry) => (
                    <tr key={entry.id}>
                      <td className="py-2 text-slate-400">{entry.date}</td>
                      <td className="py-2 uppercase text-cyan-400">{entry.type}</td>
                      <td className="py-2 text-slate-200">{entry.referenceNo}</td>
                      <td className="py-2 text-slate-300">{entry.description}</td>
                      <td className="py-2 text-end text-rose-400">{entry.debit > 0 ? formatPrice(entry.debit) : "-"}</td>
                      <td className="py-2 text-end text-emerald-400">{entry.credit > 0 ? formatPrice(entry.credit) : "-"}</td>
                      <td className="py-2 text-end font-bold text-[#D4AF37]">{formatPrice(entry.balance)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Receive Payment Modal */}
      {isPaymentModalOpen && selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6">
            <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>Record Customer Payment ({selectedCustomer.name})</span>
            </h3>

            <form onSubmit={handleRecordPayment} className="space-y-4">
              <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738] text-xs">
                <div className="text-slate-400">Current Outstanding Due:</div>
                <div className="text-lg font-black text-amber-400 font-mono mt-0.5">
                  {formatPrice(selectedCustomer.outstandingBalance || 0)}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Amount Received (AED)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono font-bold rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Payment Method</label>
                <select
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                >
                  <option value="cash">Cash Drawer</option>
                  <option value="card">Card Payment</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Receipt / Payment Note</label>
                <input
                  type="text"
                  value={payNotes}
                  onChange={(e) => setPayNotes(e.target.value)}
                  placeholder="Optional reference number or check #"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-black text-xs font-bold shadow-md hover:brightness-110 transition"
                >
                  Save Payment Receipt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {isAddCustomerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6">
            <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#D4AF37]" />
              <span>Add New Customer Profile</span>
            </h3>

            <form onSubmit={handleAddCustomer} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Mohammed Al Hashimi"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, City, Villa / Apt #"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Opening Due (AED)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={openingDue}
                    onChange={(e) => setOpeningDue(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Credit Limit (AED)</label>
                  <input
                    type="number"
                    value={creditLimit}
                    onChange={(e) => setCreditLimit(e.target.value)}
                    placeholder="2000"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddCustomerOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition"
                >
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
