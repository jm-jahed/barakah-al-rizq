"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  DollarSign,
  CheckCircle2,
  Clock,
  AlertCircle,
  Coins,
  PieChart,
  Receipt,
  Users,
  Eye,
  FileDown,
  Share2,
  Plus,
  ArrowLeft,
  Search,
  Copy,
  Check,
  X,
  Mail,
  Printer,
  ChevronDown,
  Building2,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { FlagIcon } from "./FlagIcon";

// Currencies definition
const CURRENCIES: Record<string, { symbol: string; rate: number; name: string }> = {
  AED: { symbol: "AED", rate: 1.0, name: "UAE Dirham" },
  USD: { symbol: "$", rate: 0.272, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.252, name: "Euro" },
  GBP: { symbol: "£", rate: 0.215, name: "British Pound" },
  SAR: { symbol: "SAR", rate: 1.02, name: "Saudi Riyal" },
  BDT: { symbol: "৳", rate: 32.5, name: "Bangladeshi Taka" },
  QAR: { symbol: "QAR", rate: 0.99, name: "Qatari Riyal" },
  INR: { symbol: "₹", rate: 22.8, name: "Indian Rupee" },
};

// 14 International Languages with Vector SVG flags
const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", country: "gb", isRtl: false },
  { code: "ar", name: "Arabic (UAE)", nativeName: "العربية (الإمارات)", country: "ae", isRtl: true },
  { code: "ar_sa", name: "Arabic (KSA)", nativeName: "العربية (السعودية)", country: "sa", isRtl: true },
  { code: "bn", name: "Bangla", nativeName: "বাংলা", country: "bd", isRtl: false },
  { code: "fr", name: "Français", nativeName: "Français", country: "fr", isRtl: false },
  { code: "de", name: "Deutsch", nativeName: "Deutsch", country: "de", isRtl: false },
  { code: "es", name: "Español", nativeName: "Español", country: "es", isRtl: false },
  { code: "it", name: "Italiano", nativeName: "Italiano", country: "it", isRtl: false },
  { code: "pt", name: "Português", nativeName: "Português", country: "pt", isRtl: false },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", country: "in", isRtl: false },
  { code: "tr", name: "Türkçe", nativeName: "Türkçe", country: "tr", isRtl: false },
  { code: "zh", name: "Chinese", nativeName: "中文", country: "cn", isRtl: false },
  { code: "jp", name: "Japanese", nativeName: "日本語", country: "jp", isRtl: false },
  { code: "kr", name: "Korean", nativeName: "한국어", country: "kr", isRtl: false },
];

// Seed Invoice Records
interface DemoInvoice {
  id: string;
  invoiceNumber: string;
  client: string;
  dueDate: string;
  issueDate: string;
  amountAED: number;
  status: "PAID" | "PARTIALLY_PAID" | "DUE" | "OVERDUE" | "DRAFT";
  items: Array<{ desc: string; qty: number; unitPrice: number }>;
}

const INITIAL_INVOICES: DemoInvoice[] = [
  {
    id: "inv-1017",
    invoiceNumber: "INV-1017",
    client: "Apex Cloud Technologies LLC",
    dueDate: "2026-10-20",
    issueDate: "2026-09-18",
    amountAED: 8610,
    status: "PARTIALLY_PAID",
    items: [
      { desc: "Enterprise Cloud Hosting & Multi-Tenant Infrastructure", qty: 1, unitPrice: 5200 },
      { desc: "DevOps & Continuous Security Advisory", qty: 20, unitPrice: 150 },
    ],
  },
  {
    id: "inv-1016",
    invoiceNumber: "INV-1016",
    client: "Horizon Architectural Services",
    dueDate: "2026-08-11",
    issueDate: "2026-07-15",
    amountAED: 14437.5,
    status: "PAID",
    items: [
      { desc: "Commercial Tower BIM & Structural Review", qty: 1, unitPrice: 12500 },
      { desc: "Authority Permit Compliance Documentation", qty: 1, unitPrice: 1250 },
    ],
  },
  {
    id: "inv-1015",
    invoiceNumber: "INV-1015",
    client: "Marina Hospitality Group",
    dueDate: "2026-10-06",
    issueDate: "2026-09-06",
    amountAED: 15960,
    status: "PARTIALLY_PAID",
    items: [
      { desc: "POS Terminal Network Licensing (12 Terminals)", qty: 12, unitPrice: 850 },
      { desc: "Server High-Availability Cluster Configuration", qty: 1, unitPrice: 5000 },
    ],
  },
  {
    id: "inv-1014",
    invoiceNumber: "INV-1014",
    client: "Emirates Trade & Logistics FZ-LLC",
    dueDate: "2026-08-26",
    issueDate: "2026-08-01",
    amountAED: 18270,
    status: "PAID",
    items: [
      { desc: "Cold-Chain Supply ERP Integration", qty: 1, unitPrice: 14000 },
      { desc: "JAFZA Customs Automated Filing Gateway", qty: 1, unitPrice: 3400 },
    ],
  },
  {
    id: "inv-1013",
    invoiceNumber: "INV-1013",
    client: "Apex Cloud Technologies LLC",
    dueDate: "2026-08-21",
    issueDate: "2026-07-21",
    amountAED: 13125,
    status: "PAID",
    items: [
      { desc: "Cybersecurity Penetration Testing & Audit", qty: 1, unitPrice: 12500 },
    ],
  },
  {
    id: "inv-1012",
    invoiceNumber: "INV-1012",
    client: "Vertex Digital Consulting Ltd",
    dueDate: "2026-10-19",
    issueDate: "2026-09-19",
    amountAED: 9765,
    status: "DUE",
    items: [
      { desc: "Digital Transformation & Business Automation", qty: 1, unitPrice: 9300 },
    ],
  },
  {
    id: "inv-1011",
    invoiceNumber: "INV-1011",
    client: "Oasis Global Retail Network",
    dueDate: "2026-07-10",
    issueDate: "2026-06-10",
    amountAED: 47775,
    status: "OVERDUE",
    items: [
      { desc: "Omnichannel E-Commerce Inventory Gateway", qty: 1, unitPrice: 45500 },
    ],
  },
];

const OUTSTANDING_CLIENTS = [
  { name: "Oasis Global Retail Network", amountAED: 46305, openBills: 2 },
  { name: "Marina Hospitality Group", amountAED: 42080, openBills: 3 },
  { name: "Vertex Digital Consulting Ltd", amountAED: 33915, openBills: 2 },
  { name: "Horizon Architectural Services", amountAED: 21805.98, openBills: 2 },
  { name: "Emirates Trade & Logistics FZ-LLC", amountAED: 16857.75, openBills: 1 },
];

export const UniversalBillingApp: React.FC = () => {
  const [currency, setCurrency] = useState("AED");
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langSearch, setLangSearch] = useState("");
  const [timeRange, setTimeRange] = useState<"7D" | "30D" | "3M" | "6M" | "12M">("6M");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Modals state
  const [previewInvoice, setPreviewInvoice] = useState<DemoInvoice | null>(null);
  const [shareInvoice, setShareInvoice] = useState<DemoInvoice | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const curr = CURRENCIES[currency] || CURRENCIES.AED;

  // Currency formatter
  const formatAmount = (amountAED: number) => {
    const converted = amountAED * curr.rate;
    return `${curr.symbol} ${converted.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // Filtered language list
  const filteredLanguages = useMemo(() => {
    return LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(langSearch.toLowerCase()) ||
        l.nativeName.toLowerCase().includes(langSearch.toLowerCase())
    );
  }, [langSearch]);

  // Status-filtered invoices
  const filteredInvoices = useMemo(() => {
    if (statusFilter === "ALL") return INITIAL_INVOICES;
    return INITIAL_INVOICES.filter((inv) => inv.status === statusFilter);
  }, [statusFilter]);

  // Summary figures in AED
  const totalRevenueAED = 125601.13;
  const totalOutstandingAED = 164573.73;
  const totalOverdueAED = 47775.0;
  const totalBilledGrossAED = 290174.86;

  // Monthly trends for SVG Chart
  const monthlyTrends = [
    { month: "Apr 26", billed: 42000, collected: 38000 },
    { month: "May 26", billed: 58000, collected: 49000 },
    { month: "Jun 26", billed: 64000, collected: 52000 },
    { month: "Jul 26", billed: 51000, collected: 46000 },
    { month: "Aug 26", billed: 79000, collected: 68000 },
    { month: "Sep 26", billed: 92000, collected: 79000 },
  ];

  const renderFinancialChart = () => {
    const maxVal = Math.max(...monthlyTrends.map((d) => Math.max(d.billed, d.collected)), 1000);
    const height = 180;
    const width = 580;
    const paddingX = 40;
    const paddingY = 25;
    const usableW = width - paddingX * 2;
    const usableH = height - paddingY * 2;

    const pointsInvoiced = monthlyTrends.map((d, i) => {
      const x = paddingX + (i / (monthlyTrends.length - 1)) * usableW;
      const y = height - paddingY - (d.billed / maxVal) * usableH;
      return `${x},${y}`;
    });

    const pointsCollected = monthlyTrends.map((d, i) => {
      const x = paddingX + (i / (monthlyTrends.length - 1)) * usableW;
      const y = height - paddingY - (d.collected / maxVal) * usableH;
      return `${x},${y}`;
    });

    return (
      <div className="relative w-full overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-52 overflow-visible">
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1={paddingX} y1={paddingY + usableH / 2} x2={width - paddingX} y2={paddingY + usableH / 2} stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="rgba(255,255,255,0.1)" />

          <path d={`M ${pointsInvoiced.join(" L ")}`} fill="none" stroke="#3A465C" strokeWidth="1.75" />
          <path d={`M ${pointsCollected.join(" L ")}`} fill="none" stroke="#D4AF37" strokeWidth="2.5" />

          {monthlyTrends.map((d, i) => {
            const x = paddingX + (i / (monthlyTrends.length - 1)) * usableW;
            const y = height - paddingY - (d.collected / maxVal) * usableH;
            return (
              <g key={d.month} className="group cursor-pointer">
                <circle cx={x} cy={y} r="3.5" fill="#D4AF37" className="transition-all group-hover:r-5 group-hover:fill-[#F3DC87]" />
                <text x={x} y={height - 8} textAnchor="middle" fill="#718096" fontSize="9" fontFamily="monospace">
                  {d.month}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="flex items-center justify-end gap-5 pt-2 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 rounded bg-[#D4AF37]" />
            <span className="text-slate-300 font-semibold">Settled Collections</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 rounded bg-[#3A465C]" />
            <span>Total Invoiced</span>
          </div>
        </div>
      </div>
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PAID":
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">PAID</span>;
      case "PARTIALLY_PAID":
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25">PARTIAL</span>;
      case "OVERDUE":
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/25">OVERDUE</span>;
      default:
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/25">DUE</span>;
    }
  };

  return (
    <div
      dir={language.isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#06080E] text-slate-100 font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3DC87]"
    >
      {/* 0. Top Agency Header & Global Control Bar */}
      <header className="sticky top-0 z-40 bg-[#080B11]/95 backdrop-blur-md border-b border-[#161D2B] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back to Portfolio & Breadcrumb */}
        <div className="flex items-center gap-3">
          <Link
            href="/work"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1420] border border-[#1C2538] text-xs text-slate-300 hover:text-white hover:border-[#D4AF37]/40 transition"
          >
            <ArrowLeft className={`w-3.5 h-3.5 ${language.isRtl ? "rotate-180" : ""}`} />
            <span>Work Showcase</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
              PROJECT #91 • B2B FINANCIAL SAAS
            </span>
          </div>
        </div>

        {/* Right: Currency & 14-Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Currency Switcher */}
          <div className="flex items-center gap-1.5 bg-[#0F1420] border border-[#1C2538] rounded-lg px-2.5 py-1.5 text-xs">
            <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-white font-mono text-xs font-bold outline-none cursor-pointer"
            >
              {Object.keys(CURRENCIES).map((code) => (
                <option key={code} value={code} className="bg-[#0D111A] text-white">
                  {code} ({CURRENCIES[code].symbol})
                </option>
              ))}
            </select>
          </div>

          {/* 14-Language Selector with Vector Flags */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1420] border border-[#1C2538] hover:border-[#D4AF37]/40 transition text-xs text-slate-200 cursor-pointer"
            >
              <FlagIcon countryCode={language.country} className="w-4 h-3" />
              <span className="font-semibold text-xs">{language.name}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isLangOpen && (
              <div
                className={`absolute ${
                  language.isRtl ? "left-0" : "right-0"
                } top-full mt-1.5 w-64 rounded-xl bg-[#0D121B] border border-[#1E283C] shadow-2xl p-2 z-50`}
              >
                <input
                  type="text"
                  placeholder="Search languages..."
                  value={langSearch}
                  onChange={(e) => setLangSearch(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#080B11] border border-[#1A2333] text-xs text-white placeholder-slate-500 mb-2 outline-none"
                />

                <div className="max-h-56 overflow-y-auto space-y-1">
                  {filteredLanguages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition cursor-pointer ${
                        language.code === l.code
                          ? "bg-[#161D2C] text-[#D4AF37] font-bold"
                          : "text-slate-300 hover:bg-[#121824] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FlagIcon countryCode={l.country} className="w-4 h-3" />
                        <span>{l.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">{l.nativeName}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Command Center Container */}
      <main className="max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* 1. Executive Hero Command Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0C101A] via-[#0E1422] to-[#0A0D15] border border-[#1A2234] p-5 sm:p-6 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Financial Suite & Billing Operations</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
              Good morning, Tariq Mansoor
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
              Unified billing, VAT compliance & ledger telemetry synchronized across UAE & international payment channels.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-[#121826] border border-[#1F2B3E] text-left">
              <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                Financial Ledger Status
              </span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live & Synchronized
              </span>
            </div>

            <button
              onClick={() => alert("Interactive Demo: New Invoice generator drawer opened!")}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#A37B19] hover:brightness-110 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-[#D4AF37]/20 transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span>+ Create Invoice</span>
            </button>
          </div>
        </div>

        {/* 2. Restaurant POS Style 4-KPI Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Total Revenue */}
          <div className="relative overflow-hidden rounded-2xl bg-[#090C13] border border-[#D4AF37]/30 p-4 sm:p-4.5 transition-all duration-200 hover:bg-[#0E131E] group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Total Revenue</span>
              <div className="w-8 h-8 rounded-xl bg-[#111724] border border-[#1F2A3D] flex items-center justify-center text-[#D4AF37]">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="my-2.5 relative z-10 font-mono font-black text-2xl text-white">
              {formatAmount(totalRevenueAED)}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 relative z-10 border-t border-[#141C2B] pt-2 mt-0.5">
              <span>Settled turnover</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold border bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/25">
                ↑ 12.8% MoM
              </span>
            </div>
          </div>

          {/* Paid Collections */}
          <div className="relative overflow-hidden rounded-2xl bg-[#090C13] border border-emerald-500/25 p-4 sm:p-4.5 transition-all duration-200 hover:bg-[#0E131E] group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Paid Collections</span>
              <div className="w-8 h-8 rounded-xl bg-[#111724] border border-[#1F2A3D] flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="my-2.5 relative z-10 font-mono font-black text-2xl text-white">
              {formatAmount(totalRevenueAED)}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 relative z-10 border-t border-[#141C2B] pt-2 mt-0.5">
              <span>Realized bank funds</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                43.3% rate
              </span>
            </div>
          </div>

          {/* Outstanding Receivables */}
          <div className="relative overflow-hidden rounded-2xl bg-[#090C13] border border-amber-500/25 p-4 sm:p-4.5 transition-all duration-200 hover:bg-[#0E131E] group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Outstanding Receivables</span>
              <div className="w-8 h-8 rounded-xl bg-[#111724] border border-[#1F2A3D] flex items-center justify-center text-amber-400">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="my-2.5 relative z-10 font-mono font-black text-2xl text-slate-100">
              {formatAmount(totalOutstandingAED)}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 relative z-10 border-t border-[#141C2B] pt-2 mt-0.5">
              <span>Across active billing</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold border bg-amber-500/10 text-amber-400 border-amber-500/20">
                Active Debt
              </span>
            </div>
          </div>

          {/* Overdue Invoices */}
          <div className="relative overflow-hidden rounded-2xl bg-[#090C13] border border-rose-500/25 p-4 sm:p-4.5 transition-all duration-200 hover:bg-[#0E131E] group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-500/20 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-slate-400 tracking-wide">Overdue Invoices</span>
              <div className="w-8 h-8 rounded-xl bg-[#111724] border border-[#1F2A3D] flex items-center justify-center text-rose-400">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>
            <div className="my-2.5 relative z-10 font-mono font-black text-2xl text-rose-400">
              {formatAmount(totalOverdueAED)}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 relative z-10 border-t border-[#141C2B] pt-2 mt-0.5">
              <span>Needs collection</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold border bg-rose-500/10 text-rose-400 border-rose-500/20">
                Action Required
              </span>
            </div>
          </div>
        </div>

        {/* 3. Financial Stream & Lifecycle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Revenue Stream & Timeframe Chart (2 Columns) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#090C13] border border-[#1A2234] p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#141B2A] pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                  <Coins className="w-4 h-4" />
                  <span>Revenue Stream & Collection Velocity</span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-0.5">
                  Monthly Invoicing vs Settled Collections
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#121824] border border-[#1F2B3E] text-slate-300">
                  Currency: <strong className="text-emerald-400">{currency}</strong>
                </span>

                <div className="flex items-center bg-[#07090F] border border-[#1C2538] rounded-lg p-0.5 text-[10px] font-mono">
                  {(["7D", "30D", "3M", "6M", "12M"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-2.5 py-1 rounded transition cursor-pointer ${
                        timeRange === r ? "bg-[#161D2C] text-[#D4AF37] font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
              <div className="p-3.5 rounded-xl bg-[#0E131E] border border-[#1C2538]">
                <div className="text-[11px] font-semibold text-slate-400">Total Billed Gross</div>
                <div className="text-xl font-black font-mono text-white mt-1">
                  {formatAmount(totalBilledGrossAED)}
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">17 invoices generated</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0E131E] border border-[#1C2538]">
                <div className="text-[11px] font-semibold text-slate-400">Settled Collections</div>
                <div className="text-xl font-black font-mono text-emerald-400 mt-1">
                  {formatAmount(totalRevenueAED)}
                </div>
                <div className="text-[10px] text-emerald-400 font-medium mt-1">43.3% settlement velocity</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0E131E] border border-[#1C2538]">
                <div className="text-[11px] font-semibold text-slate-400">Net Outstanding</div>
                <div className="text-xl font-black font-mono text-[#D4AF37] mt-1">
                  {formatAmount(totalOutstandingAED)}
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Awaiting client remittances</div>
              </div>
            </div>

            {renderFinancialChart()}
          </div>

          {/* Invoice Status Cohorts & Real VAT (1 Column) */}
          <div className="rounded-2xl bg-[#090C13] border border-[#1A2234] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#141B2A] pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                    <PieChart className="w-4 h-4" />
                    <span>Invoice Status Cohorts</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white mt-0.5">Lifecycle Distribution</h3>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">17 Total</span>
              </div>

              {/* Progress Bar */}
              <div className="h-3.5 w-full bg-[#141C2B] rounded-full overflow-hidden flex my-4 p-0.5 gap-0.5">
                <div style={{ width: "35%" }} className="h-full bg-emerald-400 rounded-sm" title="Paid: 6" />
                <div style={{ width: "24%" }} className="h-full bg-amber-400 rounded-sm" title="Partial: 4" />
                <div style={{ width: "18%" }} className="h-full bg-blue-400 rounded-sm" title="Due: 3" />
                <div style={{ width: "12%" }} className="h-full bg-rose-400 rounded-sm" title="Overdue: 2" />
                <div style={{ width: "11%" }} className="h-full bg-slate-600 rounded-sm" title="Draft: 2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#0D121B] border border-[#1A2333]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-slate-300">Paid Invoices</span>
                  </div>
                  <span className="font-mono text-white font-bold">6 (35%)</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#0D121B] border border-[#1A2333]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="font-semibold text-slate-300">Partially Paid</span>
                  </div>
                  <span className="font-mono text-white font-bold">4 (24%)</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#0D121B] border border-[#1A2333]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <span className="font-semibold text-slate-300">Awaiting Due Date</span>
                  </div>
                  <span className="font-mono text-white font-bold">3 (18%)</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#0D121B] border border-[#1A2333]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="font-semibold text-slate-300">Overdue (Critical)</span>
                  </div>
                  <span className="font-mono text-rose-400 font-bold">2 (12%)</span>
                </div>
              </div>
            </div>

            {/* VAT Compliance Card */}
            <div className="mt-4 pt-4 border-t border-[#141B2A]">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
                  VAT / TAX COMPLIANCE
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37]">TRN: 100492819000003</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0D15] border border-[#182234] space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Taxable Supplies:</span>
                  <span className="font-mono text-slate-200">{formatAmount(totalBilledGrossAED / 1.05)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>VAT Collected (5%):</span>
                  <span className="font-mono text-[#D4AF37] font-bold">
                    {formatAmount(totalBilledGrossAED - totalBilledGrossAED / 1.05)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Recent Invoices Table & Outstanding Client Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Recent Invoices Table (2 Columns) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#090C13] border border-[#1A2234] p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#141B2A] gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                  <Receipt className="w-4 h-4" />
                  <span>Transaction Log</span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-0.5">Recent Invoices</h3>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center bg-[#07090F] border border-[#1C2538] rounded-lg p-0.5 text-[10px] font-mono">
                {["ALL", "PAID", "PARTIALLY_PAID", "DUE", "OVERDUE"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-2.5 py-1 rounded transition cursor-pointer ${
                      statusFilter === s ? "bg-[#161D2C] text-[#D4AF37] font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {s === "PARTIALLY_PAID" ? "PARTIAL" : s}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#161D2B] text-[10px] font-mono uppercase text-slate-400">
                    <th className="py-2.5 px-3 font-semibold">Invoice #</th>
                    <th className="py-2.5 px-3 font-semibold">Client Company</th>
                    <th className="py-2.5 px-3 font-semibold">Due Date</th>
                    <th className="py-2.5 px-3 font-semibold text-right">Grand Total</th>
                    <th className="py-2.5 px-3 font-semibold text-center">Status</th>
                    <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#121824]">
                  {filteredInvoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-[#0E131E] transition">
                      <td className="py-3 px-3 font-mono font-bold text-white">{inv.invoiceNumber}</td>
                      <td className="py-3 px-3 text-slate-300 font-medium">{inv.client}</td>
                      <td className="py-3 px-3 font-mono text-slate-400">{inv.dueDate}</td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-white">{formatAmount(inv.amountAED)}</td>
                      <td className="py-3 px-3 text-center">{getStatusBadge(inv.status)}</td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setPreviewInvoice(inv)}
                            title="View A4 Invoice"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#161D2C] transition cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setPreviewInvoice(inv)}
                            title="Download PDF"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#161D2C] transition cursor-pointer"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setShareInvoice(inv)}
                            title="Share Invoice"
                            className="p-1.5 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/15 transition cursor-pointer"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Outstanding Clients Ledger (1 Column) */}
          <div className="rounded-2xl bg-[#090C13] border border-[#1A2234] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#141B2A]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                  <Users className="w-4 h-4" />
                  <span>Client Balances</span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-0.5">Outstanding Clients</h3>
              </div>
              <span className="text-xs font-mono text-[#D4AF37]">5 Debtors</span>
            </div>

            <div className="space-y-2.5">
              {OUTSTANDING_CLIENTS.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0C1018] border border-[#161F2E] hover:border-[#D4AF37]/35 transition cursor-pointer group"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-bold text-white truncate block group-hover:text-[#D4AF37] transition">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{c.openBills} open pending bills</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-xs font-bold text-amber-400 block">{formatAmount(c.amountAED)}</span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Balance Due</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#141B2A]">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Total Active Debtors:</span>
                <span className="text-white font-bold">5 Accounts</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL 1: Luxury A4 Invoice Preview */}
      {previewInvoice && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#0C1018] border border-[#1E283C] rounded-2xl p-6 shadow-2xl text-slate-200 my-8">
            <button
              onClick={() => setPreviewInvoice(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#161D2C]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#1A2436] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Alpha Business Solutions LLC</h4>
                    <span className="text-[10px] font-mono text-[#D4AF37]">TRN: 100492819000003</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">Office 602, Building 4, Dubai Media City, UAE</p>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono uppercase text-slate-400">TAX INVOICE</span>
                <h3 className="text-lg font-black font-mono text-white mt-0.5">{previewInvoice.invoiceNumber}</h3>
                <span className="text-xs font-mono text-slate-400 block mt-1">Due: {previewInvoice.dueDate}</span>
              </div>
            </div>

            {/* Billed to */}
            <div className="my-4 p-3 rounded-xl bg-[#090C13] border border-[#161F2E]">
              <span className="text-[10px] font-mono uppercase text-slate-400">BILLED TO:</span>
              <div className="text-sm font-bold text-white mt-0.5">{previewInvoice.client}</div>
              <div className="text-xs text-slate-400">Dubai, United Arab Emirates • Terms: Net 30</div>
            </div>

            {/* Line items table */}
            <table className="w-full text-xs text-left mb-4">
              <thead>
                <tr className="border-b border-[#1A2436] text-[10px] font-mono uppercase text-slate-400">
                  <th className="py-2">Item Description</th>
                  <th className="py-2 text-center">Qty</th>
                  <th className="py-2 text-right">Price</th>
                  <th className="py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141C2B]">
                {previewInvoice.items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 text-white font-medium">{item.desc}</td>
                    <td className="py-2.5 text-center font-mono text-slate-300">{item.qty}</td>
                    <td className="py-2.5 text-right font-mono text-slate-300">{formatAmount(item.unitPrice)}</td>
                    <td className="py-2.5 text-right font-mono font-bold text-white">{formatAmount(item.qty * item.unitPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals & Bank details */}
            <div className="flex items-end justify-between border-t border-[#1A2436] pt-4">
              <div className="text-[11px] text-slate-400 space-y-0.5">
                <div>Bank: <strong className="text-white">Emirates NBD</strong></div>
                <div>IBAN: <strong className="text-[#D4AF37] font-mono">AE440260000123456789012</strong></div>
              </div>

              <div className="text-right space-y-1">
                <div className="text-xs text-slate-400">VAT (5%): {formatAmount(previewInvoice.amountAED * 0.05)}</div>
                <div className="text-lg font-mono font-black text-white">
                  Grand Total: <span className="text-[#D4AF37]">{formatAmount(previewInvoice.amountAED)}</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-[#1A2436] flex items-center justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141A26] hover:bg-[#1A2234] text-xs text-white font-bold transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / A4 PDF</span>
              </button>
              <button
                onClick={() => {
                  setPreviewInvoice(null);
                  setShareInvoice(previewInvoice);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#E0BE46] text-xs text-black font-extrabold transition cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Invoice</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Advanced Share Modal (WhatsApp, Email, Copy Link) */}
      {shareInvoice && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#0C1018] border border-[#1E283C] rounded-2xl p-6 shadow-2xl text-slate-200">
            <button
              onClick={() => setShareInvoice(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#161D2C]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase font-bold">
              <Share2 className="w-4 h-4" />
              <span>Multi-Channel Dispatch</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">Share Invoice {shareInvoice.invoiceNumber}</h3>
            <p className="text-xs text-slate-400 mt-0.5">Dispatched to {shareInvoice.client}</p>

            <div className="space-y-3 my-5">
              {/* WhatsApp Share Action */}
              <a
                href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(
                  `Hello,\n\nPlease find attached Tax Invoice ${shareInvoice.invoiceNumber} for ${formatAmount(
                    shareInvoice.amountAED
                  )}.\nDue Date: ${shareInvoice.dueDate}\n\nView Online: https://universal-billing.ae/view/${shareInvoice.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0E1420] border border-[#1C283C] hover:border-[#25D366]/40 hover:bg-[#121A2A] transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">WhatsApp Message</span>
                    <span className="text-[11px] text-slate-400">Pre-filled message with total and PDF link</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>

              {/* Email Client Action */}
              <a
                href={`mailto:accounts@company.ae?subject=${encodeURIComponent(
                  `Tax Invoice ${shareInvoice.invoiceNumber} from Alpha Business Solutions`
                )}&body=${encodeURIComponent(
                  `Dear Finance Team,\n\nPlease find invoice ${shareInvoice.invoiceNumber} for ${formatAmount(
                    shareInvoice.amountAED
                  )}.\nDue: ${shareInvoice.dueDate}\n\nRegards,\nAlpha Business Solutions LLC`
                )}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0E1420] border border-[#1C283C] hover:border-blue-500/40 hover:bg-[#121A2A] transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">Email Dispatch</span>
                    <span className="text-[11px] text-slate-400">Open default mail client with draft</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>

              {/* Copy Direct Link */}
              <div className="p-3.5 rounded-xl bg-[#0E1420] border border-[#1C283C] flex items-center justify-between gap-3">
                <input
                  type="text"
                  readOnly
                  value={`https://universal-billing.ae/invoice/view/${shareInvoice.id}`}
                  className="bg-transparent text-xs text-slate-300 font-mono flex-1 outline-none truncate"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`https://universal-billing.ae/invoice/view/${shareInvoice.id}`);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2500);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-bold hover:bg-[#D4AF37]/25 transition flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? "Copied" : "Copy Link"}</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setShareInvoice(null)}
              className="w-full py-2.5 rounded-xl bg-[#141A26] hover:bg-[#1A2234] text-xs text-white font-bold transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
