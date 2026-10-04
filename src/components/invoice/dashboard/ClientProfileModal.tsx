"use client";

import React, { useState } from "react";
import {
  X,
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
  FileText,
  CreditCard,
  Calendar,
  DollarSign,
  AlertTriangle,
  Plus,
  FileSpreadsheet,
  Edit,
  ExternalLink,
  Receipt,
  CheckCircle2,
  Clock,
  Send
} from "lucide-react";
import { Client, ManagedInvoice, Payment } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { StatusBadge } from "./StatusBadge";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface ClientProfileModalProps {
  isOpen: boolean;
  client: Client | null;
  invoices: ManagedInvoice[];
  payments: Payment[];
  onClose: () => void;
  onEditClient: (client: Client) => void;
  onCreateInvoiceForClient: (client: Client) => void;
  onRecordPaymentForClient: (client: Client) => void;
  onOpenStatement: (client: Client) => void;
  onViewInvoice: (invoice: ManagedInvoice) => void;
  onOpenReminder: (invoice: ManagedInvoice) => void;
}

export const ClientProfileModal: React.FC<ClientProfileModalProps> = ({
  isOpen,
  client,
  invoices,
  payments,
  onClose,
  onEditClient,
  onCreateInvoiceForClient,
  onRecordPaymentForClient,
  onOpenStatement,
  onViewInvoice,
  onOpenReminder,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [activeTab, setActiveTab] = useState<"overview" | "invoices" | "payments">("overview");

  if (!isOpen || !client) return null;

  // Filter client's invoices & payments
  const clientInvoices = invoices.filter(
    (i) => i.customer.id === client.id || i.customer.name.trim().toLowerCase() === client.name.trim().toLowerCase()
  );

  const clientPayments = payments.filter(
    (p) => p.clientId === client.id || p.clientName.trim().toLowerCase() === client.name.trim().toLowerCase()
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* 1. Header & Client Identity */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white flex items-start justify-between border-b border-emerald-500/20">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl font-mono shrink-0">
              {client.accountNumber || client.clientCode.slice(-3)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                  {client.clientCode}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">
                  {lang === "ar" ? `حساب #${client.accountNumber}` : `ACC #${client.accountNumber}`}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300">
                  {lang === "ar" ? `الشروط: ${client.paymentTerms}` : `Terms: ${client.paymentTerms}`}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
                {client.englishName || client.name}
              </h2>
              {client.arabicName && (
                <div className="text-emerald-400 font-arabic text-base mt-0.5" dir="rtl">
                  {client.arabicName}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Top Action Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/60 px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "overview"
                  ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {lang === "ar" ? "نظرة عامة والتفاصيل" : "Overview & Details"}
            </button>
            <button
              onClick={() => setActiveTab("invoices")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === "invoices"
                  ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? `الفواتير (${clientInvoices.length})` : `Invoices (${clientInvoices.length})`}</span>
            </button>
            <button
              onClick={() => setActiveTab("payments")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === "payments"
                  ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? `الدفعات (${clientPayments.length})` : `Payments (${clientPayments.length})`}</span>
            </button>
          </div>

          {/* Quick Client Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenStatement(client)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "ar" ? "كشف حساب" : "Statement of Account"}</span>
            </button>
            <button
              onClick={() => onCreateInvoiceForClient(client)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "إنشاء فاتورة" : "Create Invoice"}</span>
            </button>
            <button
              onClick={() => onEditClient(client)}
              className="p-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 rounded-xl transition-colors cursor-pointer"
              title={lang === "ar" ? "تعديل بيانات العميل" : "Edit Client Information"}
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3. Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Financial Summary Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-500 uppercase">{lang === "ar" ? "إجمالي المبيعات" : "Total Invoiced"}</span>
              <div className="text-lg font-black text-slate-900 dark:text-white font-mono mt-1">
                {currencySymbol} {formatUAEAmount(client.totalInvoiced)}
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/50">
              <span className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase">{lang === "ar" ? "إجمالي المدفوع" : "Total Paid"}</span>
              <div className="text-lg font-black text-teal-600 dark:text-teal-400 font-mono mt-1">
                {currencySymbol} {formatUAEAmount(client.totalPaid)}
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50">
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase">{lang === "ar" ? "إجمالي المستحق" : "Total Due"}</span>
              <div className="text-lg font-black text-amber-600 dark:text-amber-400 font-mono mt-1">
                {currencySymbol} {formatUAEAmount(client.totalDue)}
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50">
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase">{lang === "ar" ? "الحد الائتماني" : "Credit Limit"}</span>
              <div className="text-lg font-black text-blue-600 dark:text-blue-400 font-mono mt-1">
                {currencySymbol} {formatUAEAmount(client.creditLimit)}
              </div>
            </div>
          </div>

          {/* TAB 1: Overview & Contact Information */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Box: Business Profile */}
              <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-500" />
                  <span>{lang === "ar" ? "بيانات الشركة التجارية" : "Commercial Company Details"}</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "الاسم التجاري المسجل" : "Registered Legal Name"}</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{client.companyName || client.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "الرقم الضريبي (TRN)" : "UAE Federal Tax Registration Number (TRN)"}</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                      {client.trn || (lang === "ar" ? "غير مسجل ضريبياً" : "N/A (Unregistered)")}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "مرجع الحساب التجاري" : "Commercial Account Reference"}</span>
                    <span className="font-mono font-semibold text-slate-700 dark:text-slate-200">
                      {lang === "ar" ? `حساب #${client.accountNumber} (${client.clientCode})` : `Account #${client.accountNumber} (${client.clientCode})`}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "شروط الائتمان والأيام" : "Credit Terms & Days"}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{client.paymentTerms}</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Account Terms & Limits */}
              <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-500" />
                  <span>{lang === "ar" ? "شروط الائتمان وحالة الحساب" : "Credit Terms & Account Status"}</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "شروط الائتمان والدفع" : "Payment Credit Terms"}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{client.paymentTerms}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "الحد الائتماني المعتمد" : "Approved Credit Limit"}</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {currencySymbol} {formatUAEAmount(client.creditLimit)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "الرصيد القائم المستحق" : "Current Outstanding Balance"}</span>
                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                      {currencySymbol} {formatUAEAmount(client.totalDue)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{lang === "ar" ? "إجمالي الفواتير الصادرة" : "Total Lifetime Invoices"}</span>
                    <span className="font-mono text-slate-700 dark:text-slate-200 font-bold">{lang === "ar" ? `${client.totalInvoices} فاتورة` : `${client.totalInvoices} Invoices`}</span>
                  </div>
                </div>
              </div>

              {/* Notes Full Width */}
              {client.notes && (
                <div className="md:col-span-2 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-4 text-xs">
                  <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">{lang === "ar" ? "ملاحظات الحساب التشغيلية:" : "Account Operational Notes:"}</span>
                  <p className="text-slate-700 dark:text-slate-300">{client.notes}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Invoices History Table */}
          {activeTab === "invoices" && (
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase">
                    <th className="py-3 pl-4">{lang === "ar" ? "رقم الفاتورة #" : "Invoice #"}</th>
                    <th className="py-3">{lang === "ar" ? "التاريخ" : "Date"}</th>
                    <th className="py-3">{lang === "ar" ? "تاريخ الاستحقاق" : "Due Date"}</th>
                    <th className="py-3 text-right">{lang === "ar" ? `الإجمالي (${currencySymbol})` : `Amount (${currencySymbol})`}</th>
                    <th className="py-3 text-right">{lang === "ar" ? `المدفوع (${currencySymbol})` : `Paid (${currencySymbol})`}</th>
                    <th className="py-3 text-right">{lang === "ar" ? `المتبقي (${currencySymbol})` : `Due (${currencySymbol})`}</th>
                    <th className="py-3 text-center">{lang === "ar" ? "الحالة" : "Status"}</th>
                    <th className="py-3 text-right pr-4">{lang === "ar" ? "الإجراءات" : "Actions"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                  {clientInvoices.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-400">
                        {lang === "ar" ? "لم يتم تسجيل أي فواتير لهذا العميل." : "No invoices recorded for this client."}
                      </td>
                    </tr>
                  ) : (
                    clientInvoices.map((inv) => (
                      <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 pl-4 font-mono font-bold text-slate-900 dark:text-white">
                          #{inv.meta.invoiceNumber}
                        </td>
                        <td className="py-3 font-mono text-slate-500">{inv.meta.invoiceDate}</td>
                        <td className="py-3 font-mono text-slate-500">{inv.dueDate}</td>
                        <td className="py-3 text-right font-mono font-bold text-slate-900 dark:text-white">
                          {formatUAEAmount(inv.totals.grandTotal)}
                        </td>
                        <td className="py-3 text-right font-mono text-emerald-600 dark:text-emerald-400">
                          {formatUAEAmount(inv.paidAmount)}
                        </td>
                        <td className="py-3 text-right font-mono">
                          {inv.dueAmount > 0 ? (
                            <span className={inv.status === "OVERDUE" ? "text-rose-600 font-bold" : "text-amber-600 font-bold"}>
                              {formatUAEAmount(inv.dueAmount)}
                            </span>
                          ) : (
                            <span className="text-slate-400">0.000</span>
                          )}
                        </td>
                        <td className="py-3 text-center">
                          <StatusBadge status={inv.status} overdueDays={inv.overdueDays} size="sm" />
                        </td>
                        <td className="py-3 text-right pr-4">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => onViewInvoice(inv)}
                              title={lang === "ar" ? "عرض الفاتورة" : "View Invoice"}
                              className="p-1 text-slate-500 hover:text-emerald-600 cursor-pointer"
                            >
                              <FileText className="w-3.5 h-3.5" />
                            </button>
                            {inv.dueAmount > 0 && (
                              <button
                                onClick={() => onOpenReminder(inv)}
                                title={lang === "ar" ? "إرسال تذكير" : "Send Reminder"}
                                className="p-1 text-blue-600 hover:text-blue-500 cursor-pointer"
                              >
                                <Send className="w-3.5 h-3.5" />
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
          )}

          {/* TAB 3: Payment History Table */}
          {activeTab === "payments" && (
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase">
                    <th className="py-3 pl-4">{lang === "ar" ? "رقم السند #" : "Payment #"}</th>
                    <th className="py-3">{lang === "ar" ? "التاريخ" : "Date"}</th>
                    <th className="py-3">{lang === "ar" ? "رقم الفاتورة #" : "Invoice #"}</th>
                    <th className="py-3">{lang === "ar" ? "طريقة الدفع" : "Method"}</th>
                    <th className="py-3">{lang === "ar" ? "المرجع" : "Reference"}</th>
                    <th className="py-3 text-right">{lang === "ar" ? `المبلغ (${currencySymbol})` : `Amount (${currencySymbol})`}</th>
                    <th className="py-3 pr-4">{lang === "ar" ? "ملاحظات" : "Notes"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                  {clientPayments.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        {lang === "ar" ? "لم يتم تسجيل أي دفعات لهذا العميل بعد." : "No payments recorded yet for this client."}
                      </td>
                    </tr>
                  ) : (
                    clientPayments.map((pay) => (
                      <tr key={pay.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 pl-4 font-mono font-bold text-slate-900 dark:text-white">
                          {pay.paymentNumber || `REC-${pay.id.slice(-4)}`}
                        </td>
                        <td className="py-3 font-mono text-slate-500">{pay.paymentDate}</td>
                        <td className="py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                          #{pay.invoiceNumber}
                        </td>
                        <td className="py-3">{pay.paymentMethod}</td>
                        <td className="py-3 font-mono text-slate-500">{pay.referenceNumber || "—"}</td>
                        <td className="py-3 text-right font-mono font-black text-emerald-600 dark:text-emerald-400">
                          {currencySymbol} {formatUAEAmount(pay.amount)}
                        </td>
                        <td className="py-3 pr-4 text-slate-400 truncate max-w-[150px]">{pay.notes || "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

