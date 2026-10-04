"use client";

import React, { useState } from "react";
import { DollarSign, Plus, Trash2, Calendar, FileText, Filter, Search, Tag, CreditCard } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { Expense } from "@/types/shopPos";

export const ShopPosExpensesView: React.FC = () => {
  const { expenses, addExpense, deleteExpense, formatPrice, lang } = useShopPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [category, setCategory] = useState<Expense["category"]>("Supplies");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>(() => new Date().toISOString().split("T")[0]);
  const [paymentMethod, setPaymentMethod] = useState<Expense["paymentMethod"]>("cash");
  const [description, setDescription] = useState<string>("");
  const [referenceNo, setReferenceNo] = useState<string>("");

  const categories: Expense["category"][] = [
    "Rent",
    "Electricity",
    "Transport",
    "Salary",
    "Maintenance",
    "Supplies",
    "Other",
  ];

  const filteredExpenses = expenses.filter((e) => {
    const matchesCat = selectedCategory === "all" || e.category === selectedCategory;
    const matchesQuery =
      !searchQuery ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.referenceNo && e.referenceNo.toLowerCase().includes(searchQuery.toLowerCase())) ||
      e.createdBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const totalExpenseAmount = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return;

    addExpense({
      category,
      amount: numAmount,
      date,
      paymentMethod,
      description: description || `${category} Expense`,
      referenceNo: referenceNo || `EXP-${Math.floor(1000 + Math.random() * 9000)}`,
    });

    setIsModalOpen(false);
    setAmount("");
    setDescription("");
    setReferenceNo("");
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <DollarSign className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "سجل المصروفات النثرية والتشغيلية" : "Store Expense Management"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "إيجار، كهرباء، صيانة، رواتب، ومستلزمات متجر التجزئة"
              : "Track rent, electricity, maintenance, salaries, and daily store operational expenses"}
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>{lang === "ar" ? "تسجيل مصروف جديد" : "Record New Expense"}</span>
        </button>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {lang === "ar" ? "إجمالي المصروفات المسجلة" : "Total Filtered Outflow"}
          </div>
          <div className="text-2xl font-black text-[#D4AF37]">{formatPrice(totalExpenseAmount)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {lang === "ar" ? "عدد العمليات" : "Total Expense Entries"}
          </div>
          <div className="text-2xl font-black text-slate-100">{filteredExpenses.length}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {lang === "ar" ? "متوسط قيمة المصروف" : "Average Expense Amount"}
          </div>
          <div className="text-2xl font-black text-cyan-400">
            {formatPrice(filteredExpenses.length > 0 ? totalExpenseAmount / filteredExpenses.length : 0)}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 bg-[#0E121B] p-3 rounded-2xl border border-[#1C2333]">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "ar" ? "بحث عن وصف أو مرجع أو موظف..." : "Search description, reference, or staff..."}
            className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-[#D4AF37]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#141A26] border border-[#202738] text-xs text-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37] w-full sm:w-48"
        >
          <option value="all">{lang === "ar" ? "جميع التصنيفات" : "All Expense Categories"}</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Data Table */}
      <div className="flex-1 bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">{lang === "ar" ? "التاريخ" : "Date"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "التصنيف" : "Category"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "البيان / الوصف" : "Description"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "رقم المرجع" : "Ref No"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "طريقة الدفع" : "Payment"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "بواسطة" : "Created By"}</th>
                <th className="py-3 px-4 text-end">{lang === "ar" ? "المبلغ" : "Amount"}</th>
                <th className="py-3 px-4 text-center">{lang === "ar" ? "إجراء" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {filteredExpenses.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    {lang === "ar" ? "لا توجد مصروفات مسجلة تطابق البحث" : "No expense records found matching your criteria."}
                  </td>
                </tr>
              ) : (
                filteredExpenses.map((exp) => (
                  <tr key={exp.id} className="hover:bg-[#141A26] transition">
                    <td className="py-3 px-4 font-mono text-slate-400">{exp.date}</td>
                    <td className="py-3 px-4 font-semibold text-slate-200">
                      <span className="px-2 py-0.5 rounded-full bg-[#1A2234] border border-[#26324A] text-[11px] text-[#D4AF37]">
                        {exp.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-100">{exp.description}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">{exp.referenceNo || "-"}</td>
                    <td className="py-3 px-4 uppercase font-mono text-[10px] text-cyan-400">
                      {exp.paymentMethod}
                    </td>
                    <td className="py-3 px-4 text-slate-400">{exp.createdBy}</td>
                    <td className="py-3 px-4 text-end font-bold text-[#D4AF37] font-mono">
                      {formatPrice(exp.amount)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => deleteExpense(exp.id)}
                        className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                        title="Delete expense"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Expense Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-lg bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1C2333]">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#D4AF37]" />
                <span>{lang === "ar" ? "تسجيل مصروف جديد" : "Record New Store Expense"}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-100 transition text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {lang === "ar" ? "تصنيف المصروف" : "Expense Category"}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    {lang === "ar" ? "المبلغ (AED)" : "Amount (AED)"}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    {lang === "ar" ? "التاريخ" : "Date"}
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    {lang === "ar" ? "طريقة السداد" : "Payment Method"}
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  >
                    <option value="cash">Cash Drawer</option>
                    <option value="card">Company Card</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    {lang === "ar" ? "رقم المرجع / الإيصال" : "Ref / Receipt No"}
                  </label>
                  <input
                    type="text"
                    value={referenceNo}
                    onChange={(e) => setReferenceNo(e.target.value)}
                    placeholder="Optional ref #"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {lang === "ar" ? "الوصف والبيان" : "Description / Notes"}
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Details of expense..."
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  {lang === "ar" ? "إلغاء" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition"
                >
                  {lang === "ar" ? "حفظ المصروف" : "Save Expense"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
