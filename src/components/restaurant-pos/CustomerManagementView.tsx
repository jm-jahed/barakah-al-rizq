"use client";

import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  Phone,
  MapPin,
  Mail,
  Receipt,
  Star,
  X,
  CreditCard,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Customer } from "../../types/restaurantPos";

export const CustomerManagementView: React.FC = () => {
  const {
    customers,
    addCustomer,
    setSelectedCustomer,
    setActiveView,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New customer form state
  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [phone, setPhone] = useState("+971 50 ");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const filteredCustomers = customers.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      c.name.toLowerCase().includes(q) ||
      (c.arabicName && c.arabicName.toLowerCase().includes(q)) ||
      c.phone.includes(q) ||
      (c.deliveryArea && c.deliveryArea.toLowerCase().includes(q))
    );
  });

  const handleCreateCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addCustomer({
      name,
      arabicName,
      phone,
      email,
      address,
      deliveryArea: address.split(",")[1]?.trim() || address,
      notes,
    });

    setIsAddModalOpen(false);
    setName("");
    setArabicName("");
    setPhone("+971 50 ");
    setEmail("");
    setAddress("");
    setNotes("");
  };

  const handleStartOrderForCustomer = (cust: Customer) => {
    setSelectedCustomer(cust);
    setActiveView("pos");
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden p-3 sm:p-6 space-y-4">
      {/* View Header */}
      <div className="flex-shrink-0 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-[#1E2230]">
        <div>
          <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-600 dark:text-[#D4AF37]" />
            <span>{t.customer_directory}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] font-mono text-slate-700 dark:text-[#D4AF37]">
              {customers.length} registered
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            UAE resident profiles, VIP accounts, delivery history and preferences
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black text-xs font-black shadow-md shadow-[#D4AF37]/20 transition active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>{t.add_customer}</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-shrink-0 relative max-w-sm">
        <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={lang === "ar" ? "ابحث بالاسم، الهاتف (+971)، المنطقة..." : "Search by name, phone (+971), area..."}
          className="w-full ps-9 pe-4 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-[#262B3B] bg-white dark:bg-[#161924] text-slate-800 dark:text-slate-100 placeholder-slate-400"
        />
      </div>

      {/* Customer Cards Grid */}
      <div className="flex-1 overflow-y-auto min-h-0 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
        {filteredCustomers.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between hover:border-amber-400 transition"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{c.name}</span>
                    {c.totalSpent > 3000 && (
                      <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                        VIP
                      </span>
                    )}
                  </h4>
                  {c.arabicName && (
                    <div className="text-xs text-slate-400 mt-0.5">{c.arabicName}</div>
                  )}
                </div>

                <div className="text-right font-mono text-xs">
                  <div className="font-extrabold text-amber-600 dark:text-amber-400">
                    {formatDhs(c.totalSpent)}
                  </div>
                  <div className="text-[10px] text-slate-400">{c.totalOrders} {lang === "ar" ? "طلب" : "orders"}</div>
                </div>
              </div>

              <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 font-mono">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{c.phone}</span>
                </div>
                {c.address && (
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{c.address}</span>
                  </div>
                )}
                {c.notes && (
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-500 italic mt-2">
                    “{c.notes}”
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => handleStartOrderForCustomer(c)}
                className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 hover:bg-amber-100 text-xs font-bold transition flex items-center gap-1.5"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Start Bill with Guest</span>
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Add Customer Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateCustomer}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 max-w-md w-full shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.add_customer}
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300">Name (English)</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Al Nuaimi"
                  className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300">Name (Arabic)</label>
                <input
                  type="text"
                  value={arabicName}
                  onChange={(e) => setArabicName(e.target.value)}
                  placeholder="مثال: طارق النعيمي"
                  className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-right"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300">Mobile Phone (+971)</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 123 4567"
                  className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300">Delivery Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Marina Gate 2, Apt 1804, Dubai Marina"
                  className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300">Guest Preferences / Notes</label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Always terrace seating, medium well meat"
                  className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold"
              >
                {t.save}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
