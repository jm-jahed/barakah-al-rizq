"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  Clock,
  FileSpreadsheet,
  Plus,
  Search,
  LogOut,
  ArrowLeft,
  ShieldCheck,
  Menu,
  X,
  Bell,
  CheckCircle2,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Building2,
  Receipt,
  HelpCircle,
  RefreshCw,
  FolderSync,
  Download,
  MessageSquare
} from "lucide-react";

// Types
import { Invoice } from "@/types/invoice";
import {
  Client,
  ManagedInvoice,
  Payment,
  DashboardStats,
  ReceivablesSummary
} from "@/types/dashboard";

// Services & Seed
import { InvoiceStorageService } from "@/services/invoiceStorage";
import { SAMPLE_INVOICE, getSampleInvoice } from "@/data/sampleInvoice";
import { calculateInvoiceTotals, formatUAEAmount } from "@/utils/calculations";
import { exportInvoiceToPDF, shareInvoiceViaWhatsApp, triggerPrintInvoice } from "@/utils/pdfExport";

// Auth & Base Invoice Generator Components
import InvoiceLogin from "@/components/invoice/InvoiceLogin";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import InvoiceHistory from "@/components/invoice/InvoiceHistory";

// Dashboard Views & Modals
import { DashboardOverview } from "@/components/invoice/dashboard/DashboardOverview";
import { InvoicesView } from "@/components/invoice/dashboard/InvoicesView";
import { ClientsView } from "@/components/invoice/dashboard/ClientsView";
import { PaymentsView } from "@/components/invoice/dashboard/PaymentsView";
import { ReceivablesView } from "@/components/invoice/dashboard/ReceivablesView";
import { ReportsView } from "@/components/invoice/dashboard/ReportsView";
import { RecordPaymentModal } from "@/components/invoice/dashboard/RecordPaymentModal";
import { PaymentReminderModal } from "@/components/invoice/dashboard/PaymentReminderModal";
import { ClientStatementModal } from "@/components/invoice/dashboard/ClientStatementModal";
import { ClientFormModal } from "@/components/invoice/dashboard/ClientFormModal";
import { ClientProfileModal } from "@/components/invoice/dashboard/ClientProfileModal";
import { ViewInvoiceModal } from "@/components/invoice/dashboard/ViewInvoiceModal";
import { GlobalSearchModal } from "@/components/invoice/dashboard/GlobalSearchModal";
import CloudMigrationModal from "@/components/invoice/dashboard/CloudMigrationModal";
import BackupRestoreModal from "@/components/invoice/dashboard/BackupRestoreModal";
import { Cloud, Database, Sun, Moon, Languages } from "lucide-react";
import { InvoiceLanguageProvider, useInvoiceLanguage } from "@/context/InvoiceLanguageContext";
import { InvoiceThemeProvider, useInvoiceTheme } from "@/context/InvoiceThemeContext";
import { isDemoMode, getAuthMode } from "@/services/invoiceStorage";

type ActiveTab =
  | "dashboard"
  | "invoices"
  | "clients"
  | "payments"
  | "receivables"
  | "reports"
  | "generator";

export default function InvoiceGeneratorPage() {
  return (
    <InvoiceThemeProvider>
      <InvoiceLanguageProvider>
        <InvoiceGeneratorMainContent />
      </InvoiceLanguageProvider>
    </InvoiceThemeProvider>
  );
}

function InvoiceGeneratorMainContent() {
  const { lang, toggleLang, isRtl, t } = useInvoiceLanguage();
  const { theme, toggleTheme, isDark } = useInvoiceTheme();

  // Auth & Mode state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [authMode, setAuthMode] = useState<"demo" | "production">("production");
  const [isResetDemoModalOpen, setIsResetDemoModalOpen] = useState(false);

  // Active View Tab
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const [invoiceStatusFilter, setInvoiceStatusFilter] = useState<string>("ALL");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Core Relational Data State
  const [clients, setClients] = useState<Client[]>([]);
  const [invoices, setInvoices] = useState<ManagedInvoice[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalClients: 0,
    totalInvoices: 0,
    totalSales: 0,
    totalPaid: 0,
    totalDue: 0,
    totalPending: 0,
    totalOverdue: 0,
    totalPartial: 0,
  });
  const [receivables, setReceivables] = useState<ReceivablesSummary>({
    totalReceivable: 0,
    current: 0,
    days1To30: 0,
    days31To60: 0,
    days61To90: 0,
    days90Plus: 0,
    buckets: [],
  });

  // Generator Active Invoice state
  const [currentInvoice, setCurrentInvoice] = useState<Invoice>(() => {
    const mode = typeof window !== "undefined" ? localStorage.getItem("nabta_auth_mode") : "production";
    return getSampleInvoice(mode === "demo");
  });
  const [zoom, setZoom] = useState<number>(0.92);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Modal Control States
  const [isRecordPaymentOpen, setIsRecordPaymentOpen] = useState(false);
  const [selectedInvoiceForPayment, setSelectedInvoiceForPayment] = useState<ManagedInvoice | undefined>(undefined);

  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [selectedInvoiceForReminder, setSelectedInvoiceForReminder] = useState<ManagedInvoice | null>(null);

  const [isStatementOpen, setIsStatementOpen] = useState(false);
  const [selectedClientForStatement, setSelectedClientForStatement] = useState<Client | null>(null);

  const [isClientFormOpen, setIsClientFormOpen] = useState(false);
  const [clientToEdit, setClientToEdit] = useState<Client | null>(null);

  const [isClientProfileOpen, setIsClientProfileOpen] = useState(false);
  const [selectedClientForProfile, setSelectedClientForProfile] = useState<Client | null>(null);

  const [isViewInvoiceOpen, setIsViewInvoiceOpen] = useState(false);
  const [selectedInvoiceForView, setSelectedInvoiceForView] = useState<ManagedInvoice | null>(null);

  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);
  const [isMigrationModalOpen, setIsMigrationModalOpen] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);

  // Cloud Sync Status State
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);

  // Generator Toolbar PDF & WhatsApp states
  const [generatorPdfStatus, setGeneratorPdfStatus] = useState<string | null>(null);
  const [generatorWaStatus, setGeneratorWaStatus] = useState<string | null>(null);

  const handleGeneratorDownloadPDF = async () => {
    if (generatorPdfStatus) return;
    setGeneratorPdfStatus("Generating PDF...");
    try {
      await exportInvoiceToPDF(
        "invoice-print-container",
        `Tax_Invoice_${currentInvoice.meta.invoiceNumber || "8206"}.pdf`,
        (s) => setGeneratorPdfStatus(s)
      );
      setTimeout(() => setGeneratorPdfStatus(null), 2500);
    } catch {
      setGeneratorPdfStatus("Unable to generate PDF. Please try again.");
      setTimeout(() => setGeneratorPdfStatus(null), 3000);
    }
  };

  const handleGeneratorWhatsApp = async () => {
    if (generatorWaStatus) return;
    setGeneratorWaStatus("Preparing PDF...");
    try {
      const managedInv: ManagedInvoice = {
        ...currentInvoice,
        paymentTerms: "30 Days",
        dueDate: "",
        paidAmount: 0,
        dueAmount: currentInvoice.totals.grandTotal,
        status: "PENDING",
        overdueDays: 0,
        payments: [],
      };
      const res = await shareInvoiceViaWhatsApp(
        managedInv,
        "invoice-print-container",
        undefined,
        (s) => setGeneratorWaStatus(s)
      );
      if (res?.fallbackNotice) {
        showNotification(res.fallbackNotice);
      }
      setTimeout(() => setGeneratorWaStatus(null), 2500);
    } catch {
      setGeneratorWaStatus("Unable to generate PDF. Please try again.");
      setTimeout(() => setGeneratorWaStatus(null), 3000);
    }
  };

  // Trigger Cloud Sync across all open devices
  const performCloudSync = async () => {
    setIsSyncing(true);
    try {
      const res = await InvoiceStorageService.syncWithCloud();
      refreshData();
      if (res.synced) {
        setLastSyncTime(new Date().toLocaleTimeString("en-GB"));
      }
    } catch (err) {
      console.warn("Cloud sync failed:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  // 1. Initial Load & Auth Check
  useEffect(() => {
    try {
      const localAuth = localStorage.getItem("nabta_invoice_auth");
      const sessionAuth = sessionStorage.getItem("nabta_invoice_auth");
      const mode = (localStorage.getItem("nabta_auth_mode") as "demo" | "production") || "production";
      setAuthMode(mode);
      setCurrentInvoice(getSampleInvoice(mode === "demo"));

      if (localAuth === "true" || sessionAuth === "true") {
        setIsAuthenticated(true);
        InvoiceStorageService.initializeStorage();
        refreshData();
        // Background sync with MongoDB Cloud ONLY in production mode
        if (mode === "production") {
          performCloudSync();
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  // Periodic & Focus-based Cloud Sync (ONLY for production mode)
  useEffect(() => {
    if (!isAuthenticated || authMode === "demo") return;

    const handleFocus = () => performCloudSync();
    const handleVisibility = () => {
      if (document.visibilityState === "visible") performCloudSync();
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);
    const interval = setInterval(performCloudSync, 6000);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearInterval(interval);
    };
  }, [isAuthenticated, authMode]);

  // Keyboard shortcut for Cmd+K / Ctrl+K global search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsGlobalSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Refresh all relational data from storage
  const refreshData = () => {
    const c = InvoiceStorageService.getClients();
    const inv = InvoiceStorageService.getInvoices();
    const p = InvoiceStorageService.getPayments();
    const s = InvoiceStorageService.getDashboardStats();
    const r = InvoiceStorageService.getReceivablesSummary();

    setClients(c);
    setInvoices(inv);
    setPayments(p);
    setStats(s);
    setReceivables(r);
  };

  const handleLogout = () => {
    localStorage.removeItem("nabta_invoice_auth");
    sessionStorage.removeItem("nabta_invoice_auth");
    localStorage.removeItem("nabta_auth_mode");
    setIsAuthenticated(false);
  };

  const showNotification = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(null), 3500);
  };

  // --- Handlers for Invoices ---
  const handleCreateNewInvoice = () => {
    const isDemo = authMode === "demo";
    const baseSample = getSampleInvoice(isDemo);

    // Generate next invoice number
    const maxNum = invoices.reduce((max, i) => Math.max(max, parseInt(i.meta.invoiceNumber) || (isDemo ? 1000 : 9300)), isDemo ? 1000 : 9326);
    const newInvoiceNumber = isDemo ? `INV-2026-${maxNum + 1}` : String(maxNum + 1);

    const demoClient = isDemo && clients.length > 0 ? clients[0] : null;

    const blankInvoice: Invoice = {
      ...baseSample,
      id: `inv-${Date.now()}`,
      meta: {
        ...baseSample.meta,
        invoiceNumber: newInvoiceNumber,
        invoiceDate: new Date().toLocaleDateString("en-GB").replace(/\//g, "-"),
        notes: "Goods received in good condition. Standard 5% UAE VAT applied.",
      },
      customer: demoClient
        ? {
            id: demoClient.id,
            name: demoClient.name,
            trn: demoClient.trn,
            accountNumber: demoClient.accountNumber,
            cityOrBranch: demoClient.city,
          }
        : {
            ...baseSample.customer,
          },
      items: [
        {
          id: "item-1",
          itemNumber: 1,
          itemCode: isDemo ? "200101" : "100002",
          description: isDemo ? "Commercial Supplies & Materials" : "Raw Potato",
          unit: isDemo ? "وحدة" : "كيلو",
          quantity: 100,
          unitPrice: 5.0,
          vatPercent: 5,
          lineTotal: 500.0,
        },
      ],
      totals: calculateInvoiceTotals([
        {
          id: "item-1",
          itemNumber: 1,
          itemCode: isDemo ? "200101" : "100002",
          description: isDemo ? "Commercial Supplies & Materials" : "Raw Potato",
          unit: isDemo ? "وحدة" : "كيلو",
          quantity: 100,
          unitPrice: 5.0,
          vatPercent: 5,
          lineTotal: 500.0,
        },
      ]),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setCurrentInvoice(blankInvoice);
    setActiveTab("generator");
  };

  const handleEditInvoiceInGenerator = (inv: ManagedInvoice) => {
    setCurrentInvoice(inv);
    setActiveTab("generator");
  };

  const handleDuplicateInvoice = (inv: ManagedInvoice | Invoice) => {
    const nextNum = (parseInt(inv.meta.invoiceNumber) || 9326) + 1;
    const duplicated: Invoice = {
      ...inv,
      id: `inv-${Date.now()}`,
      meta: {
        ...inv.meta,
        invoiceNumber: String(nextNum),
        invoiceDate: new Date().toLocaleDateString("en-GB").replace(/\//g, "-"),
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setCurrentInvoice(duplicated);
    setActiveTab("generator");
    showNotification(`Invoice #${inv.meta.invoiceNumber} duplicated as #${nextNum}`);
  };

  const handleDeleteInvoice = async (id: string) => {
    try {
      await InvoiceStorageService.deleteInvoice(id);
      refreshData();
      showNotification("Invoice deleted & ledger balances recalculated.");
    } catch (err: any) {
      showNotification(`Error: ${err?.message || "Failed to delete invoice"}`);
    }
  };

  const handleSaveInvoiceFromGenerator = async (invToSave: Invoice) => {
    try {
      const existing = InvoiceStorageService.getInvoiceById(invToSave.id);
      const managed: ManagedInvoice = {
        ...invToSave,
        paymentTerms: existing?.paymentTerms || "30 Days",
        dueDate: existing?.dueDate || "",
        paidAmount: existing?.paidAmount || 0,
        dueAmount: invToSave.totals.grandTotal - (existing?.paidAmount || 0),
        status: existing?.status || "PENDING",
        overdueDays: 0,
        payments: existing?.payments || [],
      };

      await InvoiceStorageService.saveInvoice(managed);
      refreshData();
      showNotification(`Invoice #${invToSave.meta.invoiceNumber} saved successfully!`);
    } catch (err: any) {
      showNotification(`Error: ${err?.message || "Failed to save invoice"}`);
    }
  };

  // --- Handlers for Clients ---
  const handleSaveClient = async (clientData: Partial<Client>) => {
    try {
      if (clientToEdit) {
        await InvoiceStorageService.saveClient({
          ...clientToEdit,
          ...clientData,
        } as Client);
        showNotification(`Client ${clientData.name} updated.`);
      } else {
        const codeNum = clients.length + 1001;
        const newClient: Client = {
          id: `cli-${Date.now()}`,
          clientCode: `CLI-${codeNum}`,
          name: clientData.name || "",
          companyName: clientData.companyName || clientData.name || "",
          arabicName: clientData.arabicName || "",
          englishName: clientData.englishName || clientData.name || "",
          contactPerson: clientData.contactPerson || "",
          mobile: clientData.mobile || "",
          email: clientData.email || "",
          address: clientData.address || "",
          city: clientData.city || "Dubai",
          country: "United Arab Emirates",
          trn: clientData.trn || "",
          accountNumber: clientData.accountNumber || String(codeNum),
          paymentTerms: clientData.paymentTerms || "30 Days",
          creditLimit: clientData.creditLimit || 50000,
          notes: clientData.notes || "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          totalInvoices: 0,
          totalInvoiced: 0,
          totalPaid: 0,
          totalDue: 0,
          totalOverdue: 0,
        };
        await InvoiceStorageService.saveClient(newClient);
        showNotification(`Client ${newClient.name} created.`);
      }
      setIsClientFormOpen(false);
      setClientToEdit(null);
      refreshData();
    } catch (err: any) {
      showNotification(`Error: ${err?.message || "Failed to save client"}`);
    }
  };

  const handleDeleteClient = async (clientId: string) => {
    try {
      await InvoiceStorageService.deleteClient(clientId);
      refreshData();
      showNotification("Client account deleted.");
    } catch (err: any) {
      showNotification(`Error: ${err?.message || "Failed to delete client"}`);
    }
  };

  // --- Handlers for Payments ---
  const handleSavePayment = async (paymentData: Omit<Payment, "id" | "createdAt">) => {
    try {
      await InvoiceStorageService.addPayment(paymentData);
      refreshData();
      showNotification(`Payment of AED ${formatUAEAmount(paymentData.amount)} recorded!`);
    } catch (err: any) {
      showNotification(`Error: ${err?.message || "Failed to record payment"}`);
    }
  };

  const handleDeletePayment = async (paymentId: string) => {
    try {
      await InvoiceStorageService.deletePayment(paymentId);
      refreshData();
      showNotification("Payment deleted and invoice balance reversed.");
    } catch (err: any) {
      showNotification(`Error: ${err?.message || "Failed to delete payment"}`);
    }
  };

  // --- Reset All Test Data ---
  const handleResetData = () => {
    if (confirm("Reset database to initial test state with master invoice #9305/9326 & client records?")) {
      InvoiceStorageService.resetToSeed();
      refreshData();
      showNotification("Database reset to reference test dataset.");
    }
  };

  // Navigation Helper
  const handleNavigate = (tab: ActiveTab, filter?: string) => {
    setActiveTab(tab);
    if (filter) {
      setInvoiceStatusFilter(filter);
    }
    setMobileSidebarOpen(false);
  };

  // If still checking auth or not authenticated
  if (isAuthenticated === null) {
    return <div className="min-h-screen bg-white dark:bg-[#07090E] flex items-center justify-center text-slate-600 dark:text-slate-400 font-semibold">Loading UAE Accounting Portal...</div>;
  }

  if (!isAuthenticated) {
    return (
      <InvoiceLogin
        onLoginSuccess={async (mode) => {
          setAuthMode(mode);
          setIsAuthenticated(true);
          setCurrentInvoice(getSampleInvoice(mode === "demo"));
          InvoiceStorageService.initializeStorage();
          refreshData();
          if (mode === "production") {
            await performCloudSync();
          }
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090E] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-150">
      {/* Global Print Style for Exact 1-Page A4 output */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #invoice-print-container,
          #invoice-print-container * {
            visibility: visible;
          }
          #invoice-print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 15mm 12mm !important;
            transform: none !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
          }
          @page {
            size: A4 portrait;
            margin: 0;
          }
        }
      `}</style>

      {/* 1. TOP GLOBAL NAVIGATION HEADER */}
      <header className="border-b border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-40 px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-xs">
        <div className="max-w-[1780px] mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Left: Mobile Toggle & Brand */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              href="/"
              className="hidden sm:flex p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition shrink-0"
              title="Return to Agency Hub"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
              <div
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl shrink-0 flex items-center justify-center text-slate-950 font-black shadow-md ${
                  authMode === "demo"
                    ? "bg-gradient-to-br from-amber-500 to-teal-700 shadow-amber-500/20"
                    : "bg-gradient-to-br from-emerald-500 to-teal-700 shadow-emerald-500/20"
                }`}
              >
                <Building2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-950" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h1 className="font-extrabold text-xs sm:text-base text-slate-900 dark:text-white tracking-tight truncate">
                    {authMode === "demo"
                      ? (isRtl ? "نظام الفواتير الشامل" : "UAE Invoicing ERP")
                      : (isRtl ? "شركة نبتة لتجارة الخضار والفواكه" : "Nabta Vegetables & Fruits Trading")}
                  </h1>
                  {authMode === "demo" ? (
                    <span className="lg:hidden inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-mono font-black bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shrink-0">
                      DEMO
                    </span>
                  ) : (
                    <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      FTA UAE 5%
                    </span>
                  )}
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap truncate hidden sm:block">
                  {authMode === "demo"
                    ? (isRtl
                        ? "سوبرماركت • مطاعم • مقاهي • تجارة جملة • تموين • خدمات تجارية"
                        : "Supermarkets • Restaurants • Cafes • Wholesale • Catering • Services")
                    : "Commercial Business & Invoice Management ERP"}
                </p>
              </div>
            </div>
          </div>

          {/* Center: Demo Mode Badge (Desktop / Tablet only) */}
          {authMode === "demo" && (
            <div
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-400 text-[11.5px] font-extrabold tracking-wide shrink-0 shadow-xs"
              title={t("demoBadgeTooltip")}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{t("demoBadge")}</span>
            </div>
          )}

          {/* Right: Quick Action + Reset Data + Theme + Language + User Profile + Logout */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={() => setIsGlobalSearchOpen(true)}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition shrink-0 cursor-pointer"
              title={t("globalSearch")}
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={handleCreateNewInvoice}
              className="inline-flex items-center gap-1.5 p-1.5 sm:px-3.5 sm:py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 hover:scale-[1.02] transition-all shrink-0 cursor-pointer"
              title={t("newInvoice")}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">+{t("newInvoice")}</span>
            </button>

            {/* Reset Demo Data Button (Shown on md+ screens, accessible on mobile in sidebar drawer) */}
            {authMode === "demo" && (
              <button
                onClick={() => setIsResetDemoModalOpen(true)}
                className="hidden md:inline-flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-xs font-bold transition shrink-0 cursor-pointer"
                title="Reset Demo Dataset (Local only, Never touches MongoDB)"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-500" />
                <span>{t("resetDemoData")}</span>
              </button>
            )}

            {/* Production Only: Sync, Cloud DB, Backup */}
            {authMode === "production" && (
              <>
                <button
                  onClick={() => performCloudSync()}
                  title={lastSyncTime ? `Live MongoDB Atlas. Last synced: ${lastSyncTime}. Click to re-sync.` : "Sync now with MongoDB Atlas"}
                  className={`inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 md:w-[98px] shrink-0 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                    isSyncing
                      ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 animate-pulse"
                      : "bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-emerald-500 shrink-0 ${isSyncing ? "animate-spin" : ""}`} />
                  <span className="hidden md:inline whitespace-nowrap">{isSyncing ? t("syncing") : "Sync"}</span>
                </button>

                <button
                  onClick={() => setIsMigrationModalOpen(true)}
                  title="MongoDB Atlas Cloud Database Sync & Migration"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-bold transition shrink-0 cursor-pointer"
                >
                  <Cloud className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="hidden md:inline">Cloud DB</span>
                </button>

                <button
                  onClick={() => setIsBackupModalOpen(true)}
                  title="Export or Restore JSON Database Backup"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold transition shrink-0 cursor-pointer"
                >
                  <Database className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden md:inline">Backup</span>
                </button>
              </>
            )}

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5 shrink-0 cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
              <span className="hidden xl:inline">{isDark ? t("lightMode") : t("darkMode")}</span>
            </button>

            {/* Language Switcher (English / Arabic RTL) */}
            <button
              onClick={toggleLang}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1 shrink-0 cursor-pointer"
              title={lang === "en" ? "تبديل إلى العربية (RTL)" : "Switch to English (LTR)"}
            >
              <Languages className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold">{lang === "en" ? "عربي" : "EN"}</span>
            </button>

            {/* Workstation User Badge */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <div className={isRtl ? "text-left" : "text-right"}>
                <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                  {authMode === "demo" ? "Demo Mode" : "Nabta Admin"}
                </span>
                <span
                  className={`text-[10px] font-mono ${
                    authMode === "demo" ? "text-amber-600 dark:text-amber-400 font-bold" : "text-emerald-600 dark:text-emerald-400"
                  }`}
                >
                  {authMode === "demo" ? "PIN: 1234 • Local" : "TRN: 104798388500003"}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/50 text-slate-500 hover:text-rose-600 transition shrink-0 cursor-pointer"
              title={t("logout")}
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN LAYOUT WITH PERSISTENT SIDEBAR */}
      <div className="flex-1 flex max-w-[1780px] w-full mx-auto">
        {/* Sidebar Desktop & Mobile */}
        <aside
          className={`fixed lg:sticky top-0 lg:top-[57px] ${isRtl ? "right-0 border-l" : "left-0 border-r"} h-full lg:h-[calc(100vh-57px)] w-64 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between z-50 transition-transform duration-200 ${
            mobileSidebarOpen ? "translate-x-0" : isRtl ? "translate-x-full lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="space-y-6">
            {/* Mobile close button */}
            <div className="lg:hidden flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation Menu</span>
              <button onClick={() => setMobileSidebarOpen(false)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {[
                { id: "dashboard", label: t("tabDashboard"), icon: LayoutDashboard, badge: null },
                { id: "invoices", label: t("tabInvoices"), icon: FileText, badge: stats.totalInvoices },
                { id: "clients", label: t("tabClients"), icon: Users, badge: stats.totalClients },
                { id: "payments", label: t("tabPayments"), icon: CreditCard, badge: payments.length },
                { id: "receivables", label: t("tabReceivables"), icon: Clock, badge: stats.totalDue > 0 ? "Due" : null },
                { id: "reports", label: t("tabReports"), icon: FileSpreadsheet, badge: "FTA" },
                { id: "generator", label: t("tabGenerator"), icon: Receipt, badge: "1:1 Match" },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id as ActiveTab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-black"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== null && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                          isActive
                            ? "bg-slate-950/20 text-slate-950 font-black"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Summary Pill in Sidebar */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs space-y-2.5">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                {authMode === "demo" ? (lang === "ar" ? "ملخص المحفظة التجريبية" : "Demo Portfolio Summary") : (lang === "ar" ? "حالة المحفظة الحية" : "Live Portfolio Status")}
              </span>
              <div className="space-y-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {t("totalRevenue")}:
                  </span>
                  <span className="font-bold text-[13px] text-slate-900 dark:text-white font-mono whitespace-nowrap tracking-tight">
                    {lang === "ar" ? "د.إ" : "Dhs"} {formatUAEAmount(stats.totalSales)}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pt-1.5 border-t border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {t("totalCollected")}:
                  </span>
                  <span className="font-bold text-[13px] text-teal-600 dark:text-teal-400 font-mono whitespace-nowrap tracking-tight">
                    {lang === "ar" ? "د.إ" : "Dhs"} {formatUAEAmount(stats.totalPaid)}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pt-1.5 border-t border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {t("totalOutstanding")}:
                  </span>
                  <span className="font-bold text-[13px] text-amber-600 dark:text-amber-400 font-mono whitespace-nowrap tracking-tight">
                    {lang === "ar" ? "د.إ" : "Dhs"} {formatUAEAmount(stats.totalDue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Actions: Demo Reset or Production Cloud/Backup */}
            <div className="space-y-1.5 lg:hidden pt-2 border-t border-slate-200 dark:border-slate-800">
              {authMode === "demo" ? (
                <button
                  onClick={() => {
                    setMobileSidebarOpen(false);
                    setIsResetDemoModalOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-amber-500" />
                    <span>{t("resetDemoData")}</span>
                  </div>
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold bg-amber-500/20 px-1.5 py-0.5 rounded">{lang === "ar" ? "محلي" : "Local"}</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileSidebarOpen(false);
                      setIsMigrationModalOpen(true);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-500/10 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-emerald-500" />
                      <span>{lang === "ar" ? "قاعدة البيانات السحابية" : "Cloud DB (Atlas)"}</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">{lang === "ar" ? "مزامنة" : "Sync"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileSidebarOpen(false);
                      setIsBackupModalOpen(true);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-slate-500" />
                      <span>{lang === "ar" ? "النسخ الاحتياطي والاستعادة" : "Backup & Restore"}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">JSON</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 space-y-2">
            <div className="flex items-center justify-between">
              <span>{lang === "ar" ? "العملة" : "Currency"}</span>
              <strong className="text-slate-900 dark:text-white font-mono">{lang === "ar" ? "درهم (د.إ)" : "Dhs (درهم)"}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>{lang === "ar" ? "الضريبة القياسية" : "Standard Tax"}</span>
              <strong className="text-emerald-500 font-mono">{lang === "ar" ? "5% ضريبة القيمة المضافة" : "5% VAT"}</strong>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
          />
        )}

        {/* 3. ACTIVE VIEWPORT CONTAINER */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          {/* VIEW 1: Dashboard Overview */}
          {activeTab === "dashboard" && (
            <DashboardOverview
              stats={stats}
              invoices={invoices}
              clients={clients}
              payments={payments}
              receivables={receivables}
              onNavigate={handleNavigate}
              onNewInvoice={handleCreateNewInvoice}
              onNewClient={() => {
                setClientToEdit(null);
                setIsClientFormOpen(true);
              }}
              onRecordPayment={(inv) => {
                setSelectedInvoiceForPayment(inv);
                setIsRecordPaymentOpen(true);
              }}
              onOpenReminder={(inv) => {
                setSelectedInvoiceForReminder(inv);
                setIsReminderOpen(true);
              }}
              onViewInvoice={(inv) => {
                setSelectedInvoiceForView(inv);
                setIsViewInvoiceOpen(true);
              }}
            />
          )}

          {/* VIEW 2: Invoices Management */}
          {activeTab === "invoices" && (
            <InvoicesView
              invoices={invoices}
              initialFilter={invoiceStatusFilter}
              onNewInvoice={handleCreateNewInvoice}
              onViewInvoice={(inv) => {
                setSelectedInvoiceForView(inv);
                setIsViewInvoiceOpen(true);
              }}
              onEditInvoice={handleEditInvoiceInGenerator}
              onDuplicateInvoice={handleDuplicateInvoice}
              onDeleteInvoice={handleDeleteInvoice}
              onRecordPayment={(inv) => {
                setSelectedInvoiceForPayment(inv);
                setIsRecordPaymentOpen(true);
              }}
              onOpenReminder={(inv) => {
                setSelectedInvoiceForReminder(inv);
                setIsReminderOpen(true);
              }}
            />
          )}

          {/* VIEW 3: Clients CRM */}
          {activeTab === "clients" && (
            <ClientsView
              clients={clients}
              invoices={invoices}
              onNewClient={() => {
                setClientToEdit(null);
                setIsClientFormOpen(true);
              }}
              onEditClient={(c) => {
                setClientToEdit(c);
                setIsClientFormOpen(true);
              }}
              onDeleteClient={handleDeleteClient}
              onSelectClient={(c) => {
                setSelectedClientForProfile(c);
                setIsClientProfileOpen(true);
              }}
              onCreateInvoiceForClient={(c) => {
                handleCreateNewInvoice();
                setCurrentInvoice((prev) => ({
                  ...prev,
                  customer: {
                    ...prev.customer,
                    id: c.id,
                    name: c.name,
                    trn: c.trn,
                    accountNumber: c.accountNumber,
                    cityOrBranch: c.city || "Dubai",
                  },
                }));
              }}
              onRecordPaymentForClient={(c) => {
                const clientInvs = invoices.filter((i) => i.customer.id === c.id && i.dueAmount > 0);
                setSelectedInvoiceForPayment(clientInvs[0]);
                setIsRecordPaymentOpen(true);
              }}
              onOpenStatement={(c) => {
                setSelectedClientForStatement(c);
                setIsStatementOpen(true);
              }}
            />
          )}

          {/* VIEW 4: Payments Ledger */}
          {activeTab === "payments" && (
            <PaymentsView
              payments={payments}
              onNewPayment={() => {
                setSelectedInvoiceForPayment(undefined);
                setIsRecordPaymentOpen(true);
              }}
              onDeletePayment={handleDeletePayment}
            />
          )}

          {/* VIEW 5: Accounts Receivable Aging */}
          {activeTab === "receivables" && (
            <ReceivablesView
              receivables={receivables}
              clients={clients}
              invoices={invoices}
              onSelectClient={(c) => {
                setSelectedClientForProfile(c);
                setIsClientProfileOpen(true);
              }}
              onOpenStatement={(c) => {
                setSelectedClientForStatement(c);
                setIsStatementOpen(true);
              }}
              onOpenReminder={(inv) => {
                setSelectedInvoiceForReminder(inv);
                setIsReminderOpen(true);
              }}
            />
          )}

          {/* VIEW 6: Financial Reports */}
          {activeTab === "reports" && (
            <ReportsView
              invoices={invoices}
              clients={clients}
              payments={payments}
              receivables={receivables}
            />
          )}

          {/* VIEW 7: Invoice Studio Generator (1:1 Reference Match Preserved) */}
          {activeTab === "generator" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-emerald-500" />
                    <span>{t("editorTitle")}</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    {lang === "ar" ? `تعديل الفاتورة الضريبية رقم #${currentInvoice.meta.invoiceNumber} مع المعاينة الحية لورقة A4` : `Editing Tax Invoice #${currentInvoice.meta.invoiceNumber} with live exact A4 canvas rendering`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsHistoryOpen(true)}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 transition"
                  >
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{t("savedDrafts")}</span>
                  </button>
                  <button
                    onClick={() => handleNavigate("invoices")}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold cursor-pointer"
                  >
                    {t("backToInvoices")}
                  </button>
                </div>
              </div>

              {/* Split Screen Studio */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Form (5 cols) */}
                <div className="lg:col-span-5 flex flex-col">
                  <InvoiceForm
                    invoice={currentInvoice}
                    onChange={(updated) => setCurrentInvoice(updated)}
                    onSave={() => handleSaveInvoiceFromGenerator(currentInvoice)}
                    onPrint={triggerPrintInvoice}
                    onExportPDF={() => exportInvoiceToPDF("invoice-print-container", `Tax_Invoice_${currentInvoice.meta.invoiceNumber}.pdf`)}
                    onResetSample={() => {
                      const isDemo = authMode === "demo";
                      const promptMsg = isDemo
                        ? "Reset current invoice to Generic Demo Sample?"
                        : "Reset current invoice to sample #9326?";
                      if (confirm(promptMsg)) {
                        setCurrentInvoice({ ...getSampleInvoice(isDemo), id: `inv-${Date.now()}` });
                      }
                    }}
                  />
                </div>

                {/* Right Canvas (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  {/* Canvas Zoom Controls */}
                  <div className="w-full max-w-[850px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 mb-3 flex items-center justify-between text-xs shadow-xs">
                    <div className="flex items-center gap-2 text-slate-500">
                      <FileText className="w-4 h-4 text-emerald-500" />
                      <span className="font-bold text-slate-900 dark:text-white">{t("liveA4Sheet")}</span>
                      <span className="text-[10px] font-mono">(210mm × 297mm)</span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* WhatsApp PDF Button */}
                      <button
                        onClick={handleGeneratorWhatsApp}
                        disabled={Boolean(generatorWaStatus)}
                        className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer shadow-xs disabled:opacity-75"
                        title={lang === "ar" ? "إرسال الفاتورة الضريبية عبر واتساب" : "Send Tax Invoice PDF to WhatsApp"}
                      >
                        {generatorWaStatus ? (
                          <>
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>{generatorWaStatus}</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-3 h-3" />
                            <span>{lang === "ar" ? "واتساب PDF" : "WhatsApp PDF"}</span>
                          </>
                        )}
                      </button>

                      {/* Download PDF Button */}
                      <button
                        onClick={handleGeneratorDownloadPDF}
                        disabled={Boolean(generatorPdfStatus)}
                        className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-[11px] font-bold border border-slate-700 flex items-center gap-1 transition cursor-pointer shadow-xs disabled:opacity-75"
                        title={lang === "ar" ? "تحميل ملف PDF المعتمد" : "Download valid PDF file"}
                      >
                        {generatorPdfStatus ? (
                          <>
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>{generatorPdfStatus}</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3 h-3" />
                            <span>{t("downloadPdf")}</span>
                          </>
                        )}
                      </button>

                      <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-0.5 hidden sm:block" />

                      <button
                        onClick={() => setZoom((z) => Math.max(0.35, z - 0.05))}
                        className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        title={lang === "ar" ? "تصغير" : "Zoom Out"}
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-slate-700 dark:text-slate-300 text-[11px] w-10 text-center">
                        {Math.round(zoom * 100)}%
                      </span>
                      <button
                        onClick={() => setZoom((z) => Math.min(1.4, z + 0.05))}
                        className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        title={lang === "ar" ? "تكبير" : "Zoom In"}
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (typeof window !== "undefined" && window.innerWidth < 850) {
                            const fitScale = Math.min(0.92, Math.max(0.38, (window.innerWidth - 32) / 800));
                            setZoom(fitScale);
                          } else {
                            setZoom(0.92);
                          }
                        }}
                        className="px-2 py-0.5 text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-500 hover:text-white rounded-md transition-colors ml-1"
                        title={lang === "ar" ? "ملائمة الشاشة" : "Fit to Screen"}
                      >
                        {lang === "ar" ? "ملائمة" : "Fit"}
                      </button>
                      <button
                        onClick={() => setZoom(0.92)}
                        className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        title="Reset 92% Zoom"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile swipe hint */}
                  <div className="sm:hidden w-full text-center text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-center gap-1.5">
                    <span>⟵</span>
                    <span>Swipe left or right to inspect full invoice</span>
                    <span>⟶</span>
                  </div>

                  {/* The Exact Pixel Invoice Component */}
                  <div className="w-full overflow-x-auto overscroll-x-contain pb-12">
                    <InvoicePreview invoice={currentInvoice} previewScale={zoom} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 4. MODALS & POPUPS */}

      {/* Record Payment Modal */}
      <RecordPaymentModal
        isOpen={isRecordPaymentOpen}
        onClose={() => setIsRecordPaymentOpen(false)}
        invoices={invoices}
        clients={clients}
        selectedInvoice={selectedInvoiceForPayment}
        onSavePayment={handleSavePayment}
        onRefresh={refreshData}
      />

      {/* WhatsApp / Email Payment Reminder Modal */}
      <PaymentReminderModal
        isOpen={isReminderOpen}
        onClose={() => {
          setIsReminderOpen(false);
          setSelectedInvoiceForReminder(null);
        }}
        invoice={selectedInvoiceForReminder}
        client={clients.find((c) => c.id === selectedInvoiceForReminder?.customer.id || c.name === selectedInvoiceForReminder?.customer.name)}
      />

      {/* Client Statement of Account Modal */}
      <ClientStatementModal
        isOpen={isStatementOpen}
        onClose={() => {
          setIsStatementOpen(false);
          setSelectedClientForStatement(null);
        }}
        statement={selectedClientForStatement ? InvoiceStorageService.generateClientStatement(selectedClientForStatement.id) : null}
      />

      {/* Client Add / Edit Form Modal */}
      <ClientFormModal
        isOpen={isClientFormOpen}
        onClose={() => {
          setIsClientFormOpen(false);
          setClientToEdit(null);
        }}
        onSave={handleSaveClient}
        clientToEdit={clientToEdit}
      />

      {/* Client 360° Profile Modal */}
      <ClientProfileModal
        isOpen={isClientProfileOpen}
        onClose={() => {
          setIsClientProfileOpen(false);
          setSelectedClientForProfile(null);
        }}
        client={selectedClientForProfile}
        invoices={invoices}
        payments={payments}
        onEditClient={(c) => {
          setIsClientProfileOpen(false);
          setClientToEdit(c);
          setIsClientFormOpen(true);
        }}
        onCreateInvoiceForClient={(c) => {
          setIsClientProfileOpen(false);
          handleCreateNewInvoice();
          setCurrentInvoice((prev) => ({
            ...prev,
            customer: {
              ...prev.customer,
              id: c.id,
              name: c.name,
              trn: c.trn,
              accountNumber: c.accountNumber,
              cityOrBranch: c.city || "Dubai",
            },
          }));
        }}
        onRecordPaymentForClient={(c) => {
          setIsClientProfileOpen(false);
          const clientInvs = invoices.filter((i) => i.customer.id === c.id && i.dueAmount > 0);
          setSelectedInvoiceForPayment(clientInvs[0]);
          setIsRecordPaymentOpen(true);
        }}
        onOpenStatement={(c) => {
          setIsClientProfileOpen(false);
          setSelectedClientForStatement(c);
          setIsStatementOpen(true);
        }}
        onViewInvoice={(inv) => {
          setSelectedInvoiceForView(inv);
          setIsViewInvoiceOpen(true);
        }}
        onOpenReminder={(inv) => {
          setSelectedInvoiceForReminder(inv);
          setIsReminderOpen(true);
        }}
      />

      {/* View 1:1 Scan Reference Invoice Modal */}
      <ViewInvoiceModal
        isOpen={isViewInvoiceOpen}
        invoice={selectedInvoiceForView}
        onClose={() => {
          setIsViewInvoiceOpen(false);
          setSelectedInvoiceForView(null);
        }}
        onEdit={handleEditInvoiceInGenerator}
        onRecordPayment={(inv) => {
          setSelectedInvoiceForPayment(inv);
          setIsRecordPaymentOpen(true);
        }}
        onSendReminder={(inv) => {
          setSelectedInvoiceForReminder(inv);
          setIsReminderOpen(true);
        }}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isGlobalSearchOpen}
        onClose={() => setIsGlobalSearchOpen(false)}
        invoices={invoices}
        clients={clients}
        payments={payments}
        onSelectInvoice={(inv) => {
          setSelectedInvoiceForView(inv);
          setIsViewInvoiceOpen(true);
        }}
        onSelectClient={(c) => {
          setSelectedClientForProfile(c);
          setIsClientProfileOpen(true);
        }}
      />

      {/* Drafts History Modal */}
      <InvoiceHistory
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onSelectInvoice={(selected) => {
          setCurrentInvoice(selected);
          setIsHistoryOpen(false);
        }}
        onDuplicateInvoice={handleDuplicateInvoice}
        currentInvoiceId={currentInvoice.id}
      />

      {/* Cloud Migration Modal */}
      <CloudMigrationModal
        isOpen={isMigrationModalOpen}
        onClose={() => setIsMigrationModalOpen(false)}
        onSuccess={() => {
          refreshData();
          showNotification("MongoDB Atlas Cloud Sync completed!");
        }}
      />

      {/* Backup & Restore Modal */}
      <BackupRestoreModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        onDataRestored={() => {
          refreshData();
          showNotification("Database restored successfully!");
        }}
      />

      {/* Reset Demo Data Confirmation Modal */}
      {isResetDemoModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {t("resetConfirmTitle")}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t("resetConfirmMessage")}
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsResetDemoModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                {t("cancel")}
              </button>
              <button
                type="button"
                onClick={() => {
                  InvoiceStorageService.resetDemoData();
                  refreshData();
                  setIsResetDemoModalOpen(false);
                  showNotification("Demo dataset successfully reset to 52 clients & 212 invoices!");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-600/30 transition cursor-pointer"
              >
                {t("confirmReset")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-3 rounded-2xl font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce border border-emerald-400">
          <CheckCircle2 className="w-4 h-4 text-slate-950" />
          <span>{saveToast}</span>
        </div>
      )}
    </div>
  );
}
