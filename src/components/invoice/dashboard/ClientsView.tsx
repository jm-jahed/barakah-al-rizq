"use client";

import React, { useState, useMemo } from "react";
import {
  Users,
  Search,
  Plus,
  Edit,
  Trash2,
  FileSpreadsheet,
  FileText,
  CreditCard,
  Building2,
  ExternalLink,
  X
} from "lucide-react";
import { Client, ManagedInvoice } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface ClientsViewProps {
  clients: Client[];
  invoices: ManagedInvoice[];
  onNewClient: () => void;
  onEditClient: (client: Client) => void;
  onDeleteClient: (clientId: string) => void;
  onSelectClient: (client: Client) => void;
  onCreateInvoiceForClient: (client: Client) => void;
  onRecordPaymentForClient: (client: Client) => void;
  onOpenStatement: (client: Client) => void;
}

export const ClientsView: React.FC<ClientsViewProps> = ({
  clients,
  invoices,
  onNewClient,
  onEditClient,
  onDeleteClient,
  onSelectClient,
  onCreateInvoiceForClient,
  onRecordPaymentForClient,
  onOpenStatement,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Filter clients
  const filteredClients = useMemo(() => {
    if (!searchTerm.trim()) return clients;
    const q = searchTerm.toLowerCase();
    return clients.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.companyName || "").toLowerCase().includes(q) ||
        (c.arabicName || "").includes(q) ||
        (c.trn || "").toLowerCase().includes(q) ||
        (c.accountNumber || "").toLowerCase().includes(q)
    );
  }, [clients, searchTerm]);

  const handleConfirmDelete = (id: string) => {
    onDeleteClient(id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <span>{lang === "ar" ? "دليل حسابات العملاء" : "Client Accounts CRM"}</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {lang === "ar" ? "حسابات تجارية، تسجيلات ضريبية، شروط الائتمان، والأرصدة المالية الشاملة" : "Commercial accounts, TRN registrations, credit terms, and 360° financial balances"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNewClient}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+{lang === "ar" ? "تسجيل عميل جديد" : "Add New Client"}</span>
          </button>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === "ar" ? "بحث باسم العميل، الرقم الضريبي، رقم الحساب..." : "Search by client name, TRN, account #..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="text-xs text-slate-500 font-semibold">
          {lang === "ar" ? "إجمالي الحسابات المسجلة:" : "Total Registered Accounts:"} <span className="font-mono text-slate-900 dark:text-white">{filteredClients.length}</span>
        </div>
      </div>

      {/* 3. Clients CRM Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 whitespace-nowrap min-w-[110px]">{t("accountNo")}</th>
                <th className="py-3.5 px-4 min-w-[200px]">{t("clientName")}</th>
                <th className="py-3.5 px-4 whitespace-nowrap min-w-[150px]">{t("trn")}</th>
                <th className="py-3.5 px-3 text-center whitespace-nowrap min-w-[80px]">{t("tabInvoices")}</th>
                <th className="py-3.5 px-4 text-right whitespace-nowrap min-w-[130px]">{t("totalBilled")} ({currencySymbol})</th>
                <th className="py-3.5 px-4 text-right whitespace-nowrap min-w-[130px]">{t("paid")} ({currencySymbol})</th>
                <th className="py-3.5 px-4 text-right whitespace-nowrap min-w-[140px]">{t("balance")} ({currencySymbol})</th>
                <th className="py-3.5 px-4 text-right whitespace-nowrap min-w-[130px]">{t("actions")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    <Users className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700" />
                    <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">{lang === "ar" ? "لم يتم العثور على أي عملاء." : "No clients found."}</p>
                  </td>
                </tr>
              ) : (
                filteredClients.map((client) => {
                  const isDeletePrompt = deleteConfirmId === client.id;

                  return (
                    <tr
                      key={client.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Account / Code */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-mono font-black text-slate-900 dark:text-white block">
                          #{client.accountNumber || "—"}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {client.clientCode}
                        </span>
                      </td>

                      {/* Client Name */}
                      <td className="py-3.5 px-4 max-w-[240px]">
                        <button
                          onClick={() => onSelectClient(client)}
                          className="font-bold text-slate-900 dark:text-white hover:text-emerald-600 text-left block truncate cursor-pointer"
                        >
                          {client.englishName || client.name}
                        </button>
                        {client.arabicName && (
                          <span className="text-[11px] text-slate-400 font-arabic truncate block mt-0.5" dir="rtl">
                            {client.arabicName}
                          </span>
                        )}
                      </td>

                      {/* TRN */}
                      <td className="py-3.5 px-4 font-mono text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {client.trn || <span className="text-slate-400 italic">No TRN</span>}
                      </td>

                      {/* Total Invoices */}
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        {client.totalInvoices}
                      </td>

                      {/* Total Invoiced */}
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {formatUAEAmount(client.totalInvoiced)}
                      </td>

                      {/* Total Paid */}
                      <td className="py-3.5 px-4 text-right font-mono text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap">
                        {formatUAEAmount(client.totalPaid)}
                      </td>

                      {/* Total Due */}
                      <td className="py-3.5 px-4 text-right font-mono whitespace-nowrap">
                        {client.totalDue > 0 ? (
                          <span className={client.totalOverdue > 0 ? "text-rose-600 font-bold" : "text-amber-600 font-bold"}>
                            {formatUAEAmount(client.totalDue)}
                          </span>
                        ) : (
                          <span className="text-emerald-500 font-semibold">0.000</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        {isDeletePrompt ? (
                          <div className="flex items-center justify-end gap-1.5 bg-rose-50 dark:bg-rose-950/80 p-1 rounded-lg border border-rose-300">
                            <span className="text-[10px] text-rose-600 font-bold">{lang === "ar" ? "حذف؟" : "Delete?"}</span>
                            <button
                              onClick={() => handleConfirmDelete(client.id)}
                              className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold"
                            >
                              {lang === "ar" ? "نعم" : "Yes"}
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-[10px]"
                            >
                              {lang === "ar" ? "لا" : "No"}
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Profile 360 */}
                            <button
                              onClick={() => onSelectClient(client)}
                              title="View Client 360° Profile"
                              className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </button>

                            {/* Statement of Account */}
                            <button
                              onClick={() => onOpenStatement(client)}
                              title="Statement of Account"
                              className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-colors cursor-pointer"
                            >
                              <FileSpreadsheet className="w-4 h-4" />
                            </button>

                            {/* Create Invoice */}
                            <button
                              onClick={() => onCreateInvoiceForClient(client)}
                              title="Create Invoice for Client"
                              className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition-colors cursor-pointer"
                            >
                              <Plus className="w-4 h-4" />
                            </button>

                            {/* Edit */}
                            <button
                              onClick={() => onEditClient(client)}
                              title="Edit Client"
                              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              <Edit className="w-4 h-4" />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => setDeleteConfirmId(client.id)}
                              title="Delete Client"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <span>
            {lang === "ar" ? "إجمالي الحسابات:" : "Total Accounts:"} <strong className="text-slate-900 dark:text-white font-mono">{clients.length}</strong>
          </span>
          <div className="flex items-center gap-4 font-mono">
            <span>
              {lang === "ar" ? "إجمالي المبيعات:" : "Total Invoiced:"} <strong className="text-slate-900 dark:text-white">{currencySymbol} {formatUAEAmount(clients.reduce((a, b) => a + b.totalInvoiced, 0))}</strong>
            </span>
            <span>
              {lang === "ar" ? "إجمالي الذمم:" : "Total Receivables:"} <strong className="text-amber-600 dark:text-amber-400">{currencySymbol} {formatUAEAmount(clients.reduce((a, b) => a + b.totalDue, 0))}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsView;
