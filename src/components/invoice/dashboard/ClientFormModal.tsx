"use client";

import React, { useState, useEffect } from "react";
import { Client, PaymentTerms } from "@/types/dashboard";
import { X, Check, Building2, CreditCard, FileText, MapPin } from "lucide-react";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface ClientFormModalProps {
  isOpen?: boolean;
  clientToEdit?: Client | null;
  initialClient?: Client | null;
  onClose: () => void;
  onSave?: (client: Partial<Client>) => void;
  onClientSaved?: (client: Client) => void;
}

export function ClientFormModal({
  isOpen = true,
  clientToEdit,
  initialClient,
  onClose,
  onSave,
  onClientSaved,
}: ClientFormModalProps) {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const activeClient = clientToEdit || initialClient;

  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [trn, setTrn] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [city, setCity] = useState("Abu Dhabi");
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>("30 Days");
  const [creditLimit, setCreditLimit] = useState("100000");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (activeClient) {
      setName(activeClient.name || "");
      setArabicName(activeClient.arabicName || "");
      setTrn(activeClient.trn || "");
      setAccountNumber(activeClient.accountNumber || "");
      setCity(activeClient.city || "Abu Dhabi");
      setPaymentTerms(activeClient.paymentTerms || "30 Days");
      setCreditLimit(activeClient.creditLimit ? String(activeClient.creditLimit) : "100000");
      setNotes(activeClient.notes || "");
    } else {
      setName("");
      setArabicName("");
      setTrn("");
      setAccountNumber(String(Math.floor(400 + Math.random() * 500)));
      setCity("Abu Dhabi");
      setPaymentTerms("30 Days");
      setCreditLimit("100000");
      setNotes("");
    }
  }, [activeClient, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const clientData: Partial<Client> = {
      name: name.trim(),
      companyName: name.trim(),
      arabicName: arabicName.trim() || name.trim(),
      englishName: name.trim(),
      contactPerson: "",
      mobile: "",
      email: "",
      trn: trn.trim(),
      accountNumber: accountNumber.trim() || String(Math.floor(100 + Math.random() * 900)),
      address: "",
      city,
      country: "United Arab Emirates",
      paymentTerms,
      creditLimit: parseFloat(creditLimit) || 100000,
      notes: notes.trim(),
    };

    if (onSave) {
      onSave(clientData);
    } else if (onClientSaved) {
      const merged: Client = {
        name: name.trim(),
        companyName: name.trim(),
        arabicName: arabicName.trim() || name.trim(),
        englishName: name.trim(),
        contactPerson: "",
        mobile: "",
        email: "",
        trn: trn.trim(),
        accountNumber: accountNumber.trim() || String(Math.floor(100 + Math.random() * 900)),
        address: "",
        city,
        country: "United Arab Emirates",
        paymentTerms,
        creditLimit: parseFloat(creditLimit) || 100000,
        notes: notes.trim(),
        id: activeClient?.id || `cli-${Date.now()}`,
        clientCode: activeClient?.clientCode || `CLI-${Math.floor(1000 + Math.random() * 9000)}`,
        createdAt: activeClient?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        totalInvoices: activeClient?.totalInvoices || 0,
        totalInvoiced: activeClient?.totalInvoiced || 0,
        totalPaid: activeClient?.totalPaid || 0,
        totalDue: activeClient?.totalDue || 0,
        totalOverdue: activeClient?.totalOverdue || 0,
      };
      onClientSaved(merged);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-xl bg-white dark:bg-[#0C101A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                {activeClient
                  ? (lang === "ar" ? "تعديل بيانات العميل" : "Edit Client Account")
                  : (lang === "ar" ? "تسجيل عميل جديد" : "Register New Client")}
              </h2>
              <p className="text-xs text-slate-500">
                {lang === "ar" ? "الملف التجاري والضريبي للعميل (معتمد لضريبة القيمة المضافة 5%)" : "UAE Commercial Client & Tax Profile (VAT 5% Compliant)"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* English / Legal Name */}
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "اسم الشركة بالإنجليزية *" : "Company Legal Name (English) *"}
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder={lang === "ar" ? "مثال: XENDER FOR TRADING L.L.C" : "e.g. XENDER FOR TRADING L.L.C"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Arabic Name */}
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "اسم الشركة بالعربية" : "Company Name (Arabic)"}
              </label>
              <input
                type="text"
                dir="rtl"
                placeholder={lang === "ar" ? "مثال: زيندر للتجارة العامة ذ.م.م" : "مثال: زيندر للتجارة العامة ذ.م.م"}
                value={arabicName}
                onChange={(e) => setArabicName(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-arabic text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            {/* UAE TRN */}
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "الرقم الضريبي (15 رقم)" : "UAE TRN (15 Digits)"}
              </label>
              <input
                type="text"
                placeholder="100584661100003"
                value={trn}
                onChange={(e) => setTrn(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-emerald-600 dark:text-emerald-400 font-bold focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            {/* Account Number */}
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "رقم الحساب #" : "Account Number #"}
              </label>
              <input
                type="text"
                placeholder="429"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-mono font-bold text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            {/* Emirate / City */}
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "الإمارة / المدينة" : "Emirate / City"}
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-semibold"
              >
                <option value="Abu Dhabi">{lang === "ar" ? "أبوظبي" : "Abu Dhabi"}</option>
                <option value="Dubai">{lang === "ar" ? "دبي" : "Dubai"}</option>
                <option value="Sharjah">{lang === "ar" ? "الشارقة" : "Sharjah"}</option>
                <option value="Ajman">{lang === "ar" ? "عجمان" : "Ajman"}</option>
                <option value="Ras Al Khaimah">{lang === "ar" ? "رأس الخيمة" : "Ras Al Khaimah"}</option>
                <option value="Fujairah">{lang === "ar" ? "الفجيرة" : "Fujairah"}</option>
                <option value="Umm Al Quwain">{lang === "ar" ? "أم القيوين" : "Umm Al Quwain"}</option>
                <option value="Al Ain">{lang === "ar" ? "العين" : "Al Ain"}</option>
              </select>
            </div>

            {/* Payment Terms */}
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "شروط الائتمان والدفع" : "Payment Credit Terms"}
              </label>
              <select
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value as PaymentTerms)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              >
                <option value="Due Immediately">{lang === "ar" ? "دفع فوري عند الاستلام" : "Due Immediately"}</option>
                <option value="15 Days">{lang === "ar" ? "15 يوماً" : "15 Days"}</option>
                <option value="30 Days">{lang === "ar" ? "30 يوماً" : "30 Days"}</option>
                <option value="45 Days">{lang === "ar" ? "45 يوماً" : "45 Days"}</option>
                <option value="60 Days">{lang === "ar" ? "60 يوماً" : "60 Days"}</option>
                <option value="90 Days">{lang === "ar" ? "90 يوماً" : "90 Days"}</option>
                <option value="Custom">{lang === "ar" ? "مخصص" : "Custom"}</option>
              </select>
            </div>

            {/* Credit Limit */}
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? `الحد الائتماني (${currencySymbol})` : `Credit Limit (${currencySymbol})`}
              </label>
              <input
                type="number"
                value={creditLimit}
                onChange={(e) => setCreditLimit(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            {/* Notes */}
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === "ar" ? "ملاحظات الحساب الداخلية" : "Internal Account Notes"}
              </label>
              <textarea
                rows={2}
                placeholder={lang === "ar" ? "ملاحظات أو تعليمات الفواتير الخاصة..." : "Special billing instructions or notes..."}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold rounded-xl transition cursor-pointer"
            >
              {lang === "ar" ? "إلغاء" : "Cancel"}
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>
                {activeClient
                  ? (lang === "ar" ? "حفظ التغييرات" : "Save Changes")
                  : (lang === "ar" ? "تسجيل الحساب" : "Register Account")}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientFormModal;
