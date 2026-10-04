'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Phone, Mail, Sliders, Star, X, Send, 
  Layers, Users, Check, Activity, Building, Menu, CreditCard, Globe, Lock, 
  TrendingUp, FileText, Repeat, GitFork, Link as LinkIcon, Building2, Bell, 
  Code, Copy, RotateCcw, Search, ChevronRight, Eye, EyeOff, Cpu, Server, 
  ArrowUpRight, ArrowDownLeft, CheckCircle, Clock, AlertTriangle, RefreshCw, 
  Terminal, Shield, Briefcase, Smartphone, ChevronDown, Download, Zap, MessageSquare
} from 'lucide-react';
import { 
  NEXORA_BRAND,
  PRODUCTS as PAY_PRODUCTS, 
  TRANSACTIONS as PAY_TXNS, 
  CUSTOMERS as PAY_CUST, 
  WEBHOOK_EVENTS as PAY_WEBHOOKS, 
  CODE_SNIPPETS as PAY_SNIPPETS, 
  FAQS as PAY_FAQS,
  POS_TERMINALS as PAY_POS,
  CASE_STUDIES as PAY_CASES,
  NexoraProduct as PayProduct,
  Transaction as PayTxn,
  CustomerProfile as PayCustomer,
  WebhookEvent as PayWebhook,
  POSTerminal as PayPOSTerminal
} from '@/data/nexoraPayData';

export const NexoraPayShowcase: React.FC = () => {
  // Navigation & Active Tabs
  const [activeDashTab, setActiveDashTab] = useState<'overview' | 'payments' | 'customers' | 'treasury' | 'developers'>('overview');
  const [activeCodeLang, setActiveCodeLang] = useState<'node' | 'python' | 'go' | 'curl'>('node');
  const [copiedCode, setCopiedCode] = useState(false);

  // Modals & Drawers
  const [selectedProductModal, setSelectedProductModal] = useState<PayProduct | null>(null);
  const [selectedTxnDrawer, setSelectedTxnDrawer] = useState<PayTxn | null>(null);
  const [selectedCustDrawer, setSelectedCustDrawer] = useState<PayCustomer | null>(null);
  const [selectedPOSModal, setSelectedPOSModal] = useState<PayPOSTerminal | null>(null);
  const [isAlertsOpen, setIsAlertsOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState<boolean>(false);

  // Timeframe filter state for Dashboard
  const [timeframe, setTimeframe] = useState<'24H' | '7D' | '30D' | '90D' | '1Y'>('30D');

  // Transactions Search & Filter State
  const [txnSearch, setTxnSearch] = useState<string>('');
  const [txnStatusFilter, setTxnStatusFilter] = useState<string>('all');

  // Interactive Pricing Calculator State (AED)
  const [calcPaymentType, setCalcPaymentType] = useState<'aani' | 'card' | 'jaywan' | 'intl'>('card');
  const [calcVolumeAED, setCalcVolumeAED] = useState<number>(750000);

  // Fee rate calculations in AED
  const feeRate = calcPaymentType === 'aani' ? 0.004 : calcPaymentType === 'jaywan' ? 0.012 : calcPaymentType === 'card' ? 0.0175 : 0.026;
  const estimatedMonthlyCostAED = Math.round(calcVolumeAED * feeRate);
  const estimatedAnnualSavingsAED = Math.round(estimatedMonthlyCostAED * 12 * 0.28); // 28% savings vs legacy UAE banks

  // Currency Converter State (AED Primary)
  const [convAmount, setConvAmount] = useState<number>(50000);
  const [convFrom, setConvFrom] = useState<string>('USD');
  const [convTo, setConvTo] = useState<string>('AED');

  const exchangeRates: Record<string, number> = {
    'USD_AED': 3.6725,
    'AED_USD': 0.2723,
    'EUR_AED': 3.9850,
    'AED_EUR': 0.2509,
    'GBP_AED': 4.6820,
    'AED_GBP': 0.2135,
    'SAR_AED': 0.9790,
    'AED_SAR': 1.0214
  };
  const rateKey = `${convFrom}_${convTo}`;
  const currentRate = exchangeRates[rateKey] || (convFrom === convTo ? 1 : 3.6725);
  const convertedAmount = Math.round(convAmount * currentRate * 100) / 100;

  // Virtual Card Controls State
  const [cardHolderCompany, setCardHolderCompany] = useState<string>('SOVEREIGN ADVISORS LLC');
  const [cardFrozen, setCardFrozen] = useState<boolean>(false);
  const [revealCardDetails, setRevealCardDetails] = useState<boolean>(false);
  const [cardLimitAED, setCardLimitAED] = useState<number>(50000);

  // Webhook Monitor Retry simulation state
  const [webhooks, setWebhooks] = useState<PayWebhook[]>(PAY_WEBHOOKS);

  const handleRetryWebhook = (id: string) => {
    setWebhooks(webhooks.map(w => w.id === id ? { ...w, status: 200, response: '{"retried": true, "status": "200 OK — Ledger Balanced"}', retries: w.retries + 1 } : w));
  };

  // Enterprise Sales Form State
  const [salesSubmitted, setSalesSubmitted] = useState<boolean>(false);
  const [sName, setSName] = useState<string>('');
  const [sEmail, setSEmail] = useState<string>('');
  const [sCompany, setSCompany] = useState<string>('');
  const [sVolume, setSVolume] = useState<string>('AED 500k – AED 2M / month');
  const [sLicenseEmirate, setSLicenseEmirate] = useState<string>('Dubai (DIFC / DED)');

  const handleSalesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSalesSubmitted(true);
  };

  const handleCopyCode = () => {
    const code = PAY_SNIPPETS[activeCodeLang];
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Filtered Transactions
  const filteredTxns = PAY_TXNS.filter(t => {
    const matchesSearch = t.customer.toLowerCase().includes(txnSearch.toLowerCase()) || 
                          t.id.toLowerCase().includes(txnSearch.toLowerCase()) ||
                          t.company.toLowerCase().includes(txnSearch.toLowerCase());
    const matchesStatus = txnStatusFilter === 'all' || t.status === txnStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Accordion FAQ State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ── TOP REGULATORY STRIP ── */}
      <div className="bg-[#030508] border-b border-emerald-500/15 py-2 px-4 text-[11px] font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              CBUAE Aani & Jaywan Rail Active
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">DFSA Category 4 (DIFC) • FSRA (ADGM) Regulated</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+97148006396" className="text-slate-300 hover:text-emerald-400 transition-colors">
              UAE Toll Free: <strong className="text-white">800-NEXORA (6396)</strong>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-semibold">T+0 Instant AED Settlement</span>
          </div>
        </div>
      </div>

      {/* ── STICKY TOP NAVBAR ── */}
      <header className="sticky top-0 z-40 bg-[#06080D]/95 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-600 to-indigo-900 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <div className="w-full h-full bg-[#06080D] rounded-[10px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                NEXORA <span className="text-emerald-400">PAY</span>
              </span>
              <span className="block text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase">
                UAE Financial Operating System
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-slate-300">
            <a href="#products" className="hover:text-emerald-400 transition-colors">SOLUTIONS</a>
            <a href="#dashboard-preview" className="hover:text-emerald-400 transition-colors">LIVE CONSOLE</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">AED CALCULATOR</a>
            <a href="#hardware" className="hover:text-emerald-400 transition-colors">POS HARDWARE</a>
            <a href="#virtual-card" className="hover:text-emerald-400 transition-colors">CORPORATE CARDS</a>
            <a href="#developers" className="hover:text-emerald-400 transition-colors">DEVELOPER API</a>
            <a href="#case-studies" className="hover:text-emerald-400 transition-colors">CASE STUDIES</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAlertsOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 transition-all cursor-pointer"
              title="System Alerts"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 text-black font-mono text-[9px] font-bold flex items-center justify-center">
                3
              </span>
            </button>

            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 hover:brightness-110 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] items-center gap-2 cursor-pointer"
            >
              <span>OPEN MERCHANT ACCOUNT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0F17] border-b border-emerald-500/20 p-4 space-y-3 font-mono text-xs">
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">SOLUTIONS</a>
            <a href="#dashboard-preview" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">LIVE CONSOLE</a>
            <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">AED CALCULATOR</a>
            <a href="#hardware" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">POS HARDWARE</a>
            <a href="#virtual-card" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">CORPORATE CARDS</a>
            <a href="#developers" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">DEVELOPER API</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsSalesModalOpen(true); }} 
              className="w-full py-2.5 text-center bg-emerald-400 text-black font-bold rounded-xl uppercase"
            >
              OPEN MERCHANT ACCOUNT
            </button>
          </div>
        )}
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-emerald-500/15 bg-gradient-to-b from-[#06080D] via-[#090E16] to-[#06080D]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-emerald-500/10 blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>CBUAE Licensed Payment Service Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-mono">
                THE FINANCIAL <br />
                INFRASTRUCTURE FOR <br />
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  UAE ENTERPRISE.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
                Accept cards, Apple Pay, CBUAE Aani transfers, and Jaywan debit directly. Automate multi-currency treasury, issue unlimited AED corporate cards, and achieve sub-second settlement across Dubai, Abu Dhabi, and the GCC.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setIsSalesModalOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>REQUEST ENTERPRISE ACCESS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#dashboard-preview"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>EXPLORE LIVE CONSOLE</span>
                </a>
              </div>

              {/* UAE Metric Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">{NEXORA_BRAND.metrics.annualVolumeAED}</span>
                  <span className="text-[10px] text-slate-400 uppercase">Annual Volume Settled</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">{NEXORA_BRAND.metrics.avgLatency}</span>
                  <span className="text-[10px] text-slate-400 uppercase">Avg Gateway Latency</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">{NEXORA_BRAND.metrics.settlementSpeed}</span>
                  <span className="text-[10px] text-slate-400 uppercase">UAE Bank Payout SLA</span>
                </div>
              </div>

            </div>

            {/* HERO ANIMATED INFRASTRUCTURE VISUALIZATION */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-6 bg-[#0B0F17] border border-emerald-500/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-pulse" />
                    LIVE UAE TRANSACTION ROUTER
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-emerald-500/10 px-2 py-0.5 rounded-full text-emerald-300 border border-emerald-500/30">
                    1.8ms Latency
                  </span>
                </div>

                {/* Nodes Workflow */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-white font-bold block">1. DUBAI MALL CHECKOUT</span>
                        <span className="text-[10px] text-slate-400">H.E. Tariq Al-Hashimi (Apple Pay)</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold">AED 84,500.00</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 via-emerald-400 to-emerald-500 animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-400 text-black font-bold">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-white font-bold block">2. CBUAE AANI / JAYWAN DIRECT</span>
                        <span className="text-[10px] text-emerald-300">AI Risk Score: 2/100 • 3DS Exempt</span>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                      AUTH OK
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-white font-bold block">3. REAL-TIME AED SETTLEMENT</span>
                        <span className="text-[10px] text-slate-400">FAB / Emirates NBD Corporate Vault</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold font-mono">T+0 CONFIRMED</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-300">Total Authorization Roundtrip:</span>
                  <span className="text-emerald-400 font-bold">42 milliseconds</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8 ENTERPRISE PAYMENT SOLUTIONS ── */}
      <section id="products" className="py-24 border-b border-white/10 bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                UNIFIED FINTECH STACK
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mt-4">
                Enterprise Payment Modules.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-normal mt-2 max-w-xl">
                Modular API building blocks engineered for high-volume UAE corporate entities, marketplaces, luxury retailers, and cross-border institutions.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>PCI-DSS LEVEL 1 v4.0 CERTIFIED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAY_PRODUCTS.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProductModal(p)}
                className="p-6 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-emerald-500/50 transition-all shadow-xl hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    {p.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-[9px] font-mono font-bold">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-emerald-400 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-6 font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Rates Starting</span>
                    <span className="text-emerald-400 font-bold">{p.startingFee}</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-400 flex items-center gap-1">
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LIVE INTERACTIVE FINANCIAL OPERATIONS CONSOLE ── */}
      <section id="dashboard-preview" className="py-24 border-b border-white/10 bg-[#090E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              MERCHANT CONSOLE TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mt-4">
              Real-Time Financial Operating System.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal mt-2">
              Inspect live transaction streams, customer registries, multi-currency treasury vaults, and developer webhooks in action.
            </p>
          </div>

          {/* Main Dashboard Frame */}
          <div className="rounded-3xl bg-[#06080D] border border-emerald-500/30 shadow-2xl overflow-hidden">
            
            {/* Top Bar of Console */}
            <div className="p-4 sm:p-6 bg-[#0B0F17] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              
              {/* Tab Switchers */}
              <div className="flex items-center gap-2 bg-[#06080D] p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
                <button
                  onClick={() => setActiveDashTab('overview')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeDashTab === 'overview' ? 'bg-emerald-400 text-black shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview HUD
                </button>
                <button
                  onClick={() => setActiveDashTab('payments')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeDashTab === 'payments' ? 'bg-emerald-400 text-black shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Payments Ledger ({PAY_TXNS.length})
                </button>
                <button
                  onClick={() => setActiveDashTab('customers')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeDashTab === 'customers' ? 'bg-emerald-400 text-black shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Enterprise Clients
                </button>
                <button
                  onClick={() => setActiveDashTab('treasury')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeDashTab === 'treasury' ? 'bg-emerald-400 text-black shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Treasury & FX Vault
                </button>
                <button
                  onClick={() => setActiveDashTab('developers')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeDashTab === 'developers' ? 'bg-emerald-400 text-black shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Developer Webhooks
                </button>
              </div>

              {/* Timeframe selector */}
              <div className="flex items-center gap-1.5 font-mono text-xs bg-[#06080D] p-1 rounded-xl border border-white/10">
                {(['24H', '7D', '30D', '90D', '1Y'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      timeframe === tf ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>

            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {activeDashTab === 'overview' && (
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* 4 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase">Gross Volume ({timeframe})</span>
                    <div className="text-3xl font-extrabold text-white font-mono">AED 42,850,200</div>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono">
                      <TrendingUp className="w-3.5 h-3.5" /> +18.4% vs last period
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase">Settled Transactions</span>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">148,920</div>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 99.98% Success SLA
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase">Aani & Jaywan Share</span>
                    <div className="text-3xl font-extrabold text-white font-mono">64.2%</div>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono">
                      Zero Interchange Route
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase">Available Payout Vault</span>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">AED 8,940,150</div>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                      Next Auto-Sweep: 08:00 AM
                    </span>
                  </div>
                </div>

                {/* Live Recent Transactions Preview in Overview */}
                <div className="bg-[#0B0F17] rounded-2xl border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      Live Settlement Stream (Real-Time UAE Feed)
                    </h3>
                    <button
                      onClick={() => setActiveDashTab('payments')}
                      className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      View All Transactions ({PAY_TXNS.length}) <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 pb-2">
                          <th className="pb-3">TRANSACTION ID</th>
                          <th className="pb-3">CUSTOMER & COMPANY</th>
                          <th className="pb-3">METHOD</th>
                          <th className="pb-3">AMOUNT (AED)</th>
                          <th className="pb-3">STATUS</th>
                          <th className="pb-3">SETTLEMENT</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {PAY_TXNS.slice(0, 5).map((t) => (
                          <tr key={t.id} onClick={() => setSelectedTxnDrawer(t)} className="hover:bg-white/5 cursor-pointer transition-colors">
                            <td className="py-3 text-emerald-400 font-bold">{t.id}</td>
                            <td className="py-3">
                              <span className="text-white font-bold block">{t.customer}</span>
                              <span className="text-[10px] text-slate-400">{t.company}</span>
                            </td>
                            <td className="py-3 text-slate-300">{t.method}</td>
                            <td className="py-3 text-white font-bold">
                              {t.currency} {t.amount.toLocaleString()}
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                t.status === 'paid' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                                t.status === 'pending' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                                'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              }`}>
                                {t.status.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-3 text-slate-400 text-[11px]">{t.settlementTime}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB CONTENT: PAYMENTS LEDGER */}
            {activeDashTab === 'payments' && (
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Search & Filter Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search txn ID, customer, or company..."
                      value={txnSearch}
                      onChange={(e) => setTxnSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B0F17] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs">
                    {['all', 'paid', 'pending', 'failed', 'refunded'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setTxnStatusFilter(st)}
                        className={`px-3 py-1.5 rounded-xl capitalize transition-all ${
                          txnStatusFilter === st ? 'bg-emerald-400 text-black font-bold' : 'bg-[#0B0F17] border border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="bg-[#0B0F17] rounded-2xl border border-white/10 overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-400 bg-white/5">
                        <th className="p-4">TXN ID</th>
                        <th className="p-4">CLIENT & LOCATION</th>
                        <th className="p-4">PAYMENT METHOD</th>
                        <th className="p-4">AMOUNT</th>
                        <th className="p-4">FEE (AED)</th>
                        <th className="p-4">RISK</th>
                        <th className="p-4">STATUS</th>
                        <th className="p-4">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredTxns.map((t) => (
                        <tr key={t.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 text-emerald-400 font-bold">{t.id}</td>
                          <td className="p-4">
                            <span className="text-white font-bold block">{t.customer}</span>
                            <span className="text-[10px] text-slate-400">{t.company} • {t.location}</span>
                          </td>
                          <td className="p-4 text-slate-300">{t.method}</td>
                          <td className="p-4 text-white font-bold">
                            {t.currency} {t.amount.toLocaleString()}
                          </td>
                          <td className="p-4 text-slate-400">AED {t.fee.toFixed(2)}</td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] ${
                              t.riskScore < 15 ? 'text-emerald-400 bg-emerald-500/10' :
                              t.riskScore < 50 ? 'text-amber-400 bg-amber-500/10' :
                              'text-rose-400 bg-rose-500/10'
                            }`}>
                              Score: {t.riskScore}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              t.status === 'paid' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                              t.status === 'pending' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                              'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            }`}>
                              {t.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => setSelectedTxnDrawer(t)}
                              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-emerald-400 hover:text-black border border-white/10 text-slate-300 transition-all text-[11px]"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* TAB CONTENT: ENTERPRISE CLIENTS */}
            {activeDashTab === 'customers' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PAY_CUST.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedCustDrawer(c)}
                      className="p-6 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer shadow-lg space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-400">{c.id}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-[9px] font-bold">
                          {c.status}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white font-mono">{c.name}</h4>
                        <span className="text-xs text-slate-400 block">{c.company}</span>
                        <span className="text-[11px] text-emerald-400/80 font-mono mt-1 block">{c.city}, {c.country}</span>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">Lifetime Volume</span>
                          <span className="text-white font-bold text-sm">AED {c.totalSpendAED.toLocaleString()}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block uppercase">Total Txns</span>
                          <span className="text-emerald-400 font-bold">{c.totalTxns}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: TREASURY & FX VAULT */}
            {activeDashTab === 'treasury' && (
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Currency Balances */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-emerald-500/30">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold">AED Operating Vault</span>
                    <div className="text-2xl font-extrabold text-white mt-1">AED 14,850,200.00</div>
                    <span className="text-[10px] text-slate-400">FAB DIFC Primary IBAN</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">USD Institutional Vault</span>
                    <div className="text-2xl font-extrabold text-white mt-1">$4,120,450.00</div>
                    <span className="text-[10px] text-slate-400">JP Morgan Chase NY Fed</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">EUR Clearing Vault</span>
                    <div className="text-2xl font-extrabold text-white mt-1">€1,850,000.00</div>
                    <span className="text-[10px] text-slate-400">BNP Paribas Frankfurt</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">SAR GCC Rail Vault</span>
                    <div className="text-2xl font-extrabold text-white mt-1">SAR 8,400,000.00</div>
                    <span className="text-[10px] text-slate-400">Al Rajhi Riyadh SAR Rail</span>
                  </div>
                </div>

                {/* Interactive Multi-Currency Converter */}
                <div className="p-6 rounded-2xl bg-[#0B0F17] border border-emerald-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      INSTITUTIONAL WHOLESALE FX ENGINE
                    </span>
                    <h3 className="text-xl font-bold text-white font-mono">
                      Sub-Millisecond Treasury Conversion.
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Convert gross USD, EUR, GBP, and SAR merchant proceeds directly to AED with institutional wholesale interbank spreads (+0.15% flat vs 2.5% at traditional UAE retail banks).
                    </p>
                  </div>

                  <div className="lg:col-span-7 bg-[#06080D] p-6 rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 block mb-2">AMOUNT TO CONVERT</label>
                        <input
                          type="number"
                          value={convAmount}
                          onChange={(e) => setConvAmount(Number(e.target.value))}
                          className="w-full p-3 rounded-xl bg-[#0B0F17] border border-white/10 text-white font-bold"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-slate-400 block mb-2">FROM</label>
                          <select
                            value={convFrom}
                            onChange={(e) => setConvFrom(e.target.value)}
                            className="w-full p-3 rounded-xl bg-[#0B0F17] border border-white/10 text-white font-bold"
                          >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="SAR">SAR</option>
                            <option value="AED">AED</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-slate-400 block mb-2">TO</label>
                          <select
                            value={convTo}
                            onChange={(e) => setConvTo(e.target.value)}
                            className="w-full p-3 rounded-xl bg-[#0B0F17] border border-white/10 text-white font-bold"
                          >
                            <option value="AED">AED</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="SAR">SAR</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">SETTLEMENT RATE: 1 {convFrom} = {currentRate} {convTo}</span>
                        <span className="text-lg font-extrabold text-white">{convTo} {convertedAmount.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => alert(`Simulated Treasury Swap: Converted ${convFrom} ${convAmount.toLocaleString()} to ${convTo} ${convertedAmount.toLocaleString()} at interbank rate.`)}
                        className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs uppercase"
                      >
                        Execute Swap
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB CONTENT: DEVELOPER WEBHOOKS */}
            {activeDashTab === 'developers' && (
              <div className="p-6 sm:p-8 space-y-6 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    Live Webhook Delivery Logs
                  </h3>
                  <span className="text-slate-400 text-[11px]">Real-Time Retries & Payload Inspection</span>
                </div>

                <div className="space-y-3">
                  {webhooks.map((w) => (
                    <div key={w.id} className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                            w.status === 200 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          }`}>
                            HTTP {w.status}
                          </span>
                          <span className="text-white font-bold">{w.event}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                          <span>{w.timestamp}</span>
                          <span>{w.payloadSize}</span>
                          {w.status !== 200 && (
                            <button
                              onClick={() => handleRetryWebhook(w.id)}
                              className="px-2.5 py-1 rounded bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <RotateCcw className="w-3 h-3" /> Retry Webhook
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="text-slate-400 text-[11px] truncate">
                        Target URL: <span className="text-slate-300">{w.endpoint}</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#06080D] text-[11px] text-slate-300 font-mono overflow-x-auto">
                        Response: {w.response}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── DYNAMIC AED PROCESSING FEE & ROI CALCULATOR ── */}
      <section id="calculator" className="py-24 border-b border-white/10 bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              TRANSPARENT UAE PRICING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mt-4">
              Processing Fee & Savings Calculator.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal mt-2">
              Calculate exact transaction costs and projected annual savings compared to legacy UAE banking acquirers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 bg-[#0B0F17] p-8 rounded-3xl border border-white/10 space-y-6 font-mono">
              
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase block mb-3">
                  PRIMARY PAYMENT METHOD ROUTE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'aani', label: 'CBUAE Aani', rate: '0.40%' },
                    { id: 'jaywan', label: 'Jaywan Card', rate: '1.20%' },
                    { id: 'card', label: 'Visa / MC / Apple', rate: '1.75%' },
                    { id: 'intl', label: 'Cross-Border', rate: '2.60%' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setCalcPaymentType(m.id as any)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        calcPaymentType === m.id
                          ? 'bg-emerald-400 text-black font-bold border-emerald-400 shadow-lg'
                          : 'bg-[#06080D] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs block">{m.label}</span>
                      <span className="text-[10px] block opacity-80">{m.rate}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-400 uppercase">MONTHLY TRANSACTION VOLUME</label>
                  <span className="text-lg font-black text-emerald-400">AED {calcVolumeAED.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={calcVolumeAED}
                  onChange={(e) => setCalcVolumeAED(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>AED 50,000 / mo</span>
                  <span>AED 5,000,000</span>
                  <span>AED 10,000,000+</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <span className="text-white font-bold block">INCLUDED ENTERPRISE PRIVILEGES:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-[11px]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> T+0 Real-Time UAE Payouts</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Dedicated DIFC Account Lead</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 3DS 2.3 AI Fraud Shield</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% FTA E-Invoice Sync</span>
                </div>
              </div>

            </div>

            {/* Right Results Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B0F17] via-[#0E1624] to-[#0B0F17] p-8 rounded-3xl border border-emerald-500/40 shadow-2xl flex flex-col justify-between font-mono space-y-6">
              
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  PROJECTED MONTHLY FEE
                </span>
                <div className="text-4xl font-extrabold text-white">
                  AED {estimatedMonthlyCostAED.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal"> / mo</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Blended Effective Rate: {(feeRate * 100).toFixed(2)}% flat
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 space-y-1">
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">
                  PROJECTED ANNUAL SAVINGS
                </span>
                <div className="text-3xl font-black text-emerald-400">
                  AED {estimatedAnnualSavingsAED.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-300 leading-tight block">
                  Savings vs 2.85% + AED 1.50 legacy UAE banking merchant rates.
                </span>
              </div>

              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="w-full py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LOCK IN THIS RATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ── POS HARDWARE TERMINALS SHOWCASE ── */}
      <section id="hardware" className="py-24 border-b border-white/10 bg-[#090E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                IN-STORE COMMERCE HARDWARE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mt-4">
                Smart POS Terminals.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-normal mt-2 max-w-xl">
                High-speed Android smart payment terminals with 4G LTE, built-in thermal printers, and instant Apple Pay / Jaywan contactless tap-to-pay.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <Zap className="w-4 h-4" />
              <span>SAME-DAY DUBAI / ABU DHABI HARDWARE DISPATCH</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAY_POS.map((term) => (
              <div
                key={term.id}
                className="p-6 rounded-3xl bg-[#06080D] border border-white/10 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 rounded-2xl overflow-hidden bg-black mb-6">
                    <img src={term.image} alt={term.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-400/40 font-mono text-xs font-bold">
                      AED {term.priceAED}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-mono mb-1">{term.name}</h3>
                  <span className="text-xs text-emerald-400/80 font-mono block mb-3">{term.tagline}</span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">{term.description}</p>

                  <div className="space-y-2 mb-6 font-mono text-xs">
                    {term.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono">
                  <span className="text-[10px] text-slate-400">{term.idealFor}</span>
                  <button
                    onClick={() => { setSelectedPOSModal(term); setIsSalesModalOpen(true); }}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-emerald-400 hover:text-black border border-white/10 text-xs font-bold transition-all cursor-pointer"
                  >
                    Order POS
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── VIRTUAL & PHYSICAL CORPORATE CARDS ── */}
      <section id="virtual-card" className="py-24 border-b border-white/10 bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Interactive Card Mockup (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                
                {/* Visual Card Component */}
                <div className={`relative h-64 rounded-3xl p-6 bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#0A0E1A] border ${
                  cardFrozen ? 'border-rose-500 shadow-rose-500/20' : 'border-emerald-500/40 shadow-emerald-500/20'
                } shadow-2xl flex flex-col justify-between font-mono text-white transition-all`}>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 tracking-widest">NEXORA PLATINUM</span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
                      cardFrozen ? 'bg-rose-500/20 text-rose-300 border border-rose-500' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500'
                    }`}>
                      {cardFrozen ? 'CARD FROZEN' : 'ACTIVE & UNLOCKED'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-black tracking-widest font-mono">
                      {revealCardDetails ? '4820  9914  8201  4420' : '••••  ••••  ••••  4420'}
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-slate-400">
                      <span>EXP: {revealCardDetails ? '09/29' : '••/••'}</span>
                      <span>CVV: {revealCardDetails ? '842' : '•••'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">CORPORATE ACCOUNT</span>
                      <span className="text-xs font-bold">{cardHolderCompany}</span>
                    </div>
                    <div className="w-10 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-md opacity-80" />
                  </div>

                </div>

                {/* Card Controls Below */}
                <div className="mt-6 bg-[#0B0F17] p-5 rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Lock / Freeze Card:</span>
                    <button
                      onClick={() => setCardFrozen(!cardFrozen)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                        cardFrozen ? 'bg-rose-500 text-white' : 'bg-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {cardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Reveal Card Details:</span>
                    <button
                      onClick={() => setRevealCardDetails(!revealCardDetails)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {revealCardDetails ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{revealCardDetails ? 'Hide' : 'Show CVV'}</span>
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">Monthly Spending Limit:</span>
                      <span className="text-emerald-400 font-bold">AED {cardLimitAED.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="200000"
                      step="5000"
                      value={cardLimitAED}
                      onChange={(e) => setCardLimitAED(Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Right Info Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 font-sans">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                ZERO-FX CORPORATE CARDS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                Corporate Visa Cards with Unlimited AED Cashback.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Issue unlimited physical matte black metal cards and instant Apple Wallet virtual cards for marketing spend (Google Ads, Meta, TikTok), SaaS subscriptions, and executive corporate travel with 0% FX transaction markup.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-1">
                  <span className="text-2xl font-black text-emerald-400">2.0%</span>
                  <span className="text-white font-bold block">Unlimited Cashback in AED</span>
                  <p className="text-[11px] text-slate-400 font-sans">Credited directly to your corporate balance monthly.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-1">
                  <span className="text-2xl font-black text-white">0% FX</span>
                  <span className="text-white font-bold block">Zero Cross-Border Fee</span>
                  <p className="text-[11px] text-slate-400 font-sans">Pay in USD, EUR, and GBP at exact interbank rates.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsSalesModalOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>ORDER PHYSICAL METAL CARDS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── DEVELOPER API SANDBOX ── */}
      <section id="developers" className="py-24 border-b border-white/10 bg-[#090E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                DEVELOPER FIRST
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                Integrate in Under 10 Lines of Code.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Comprehensive SDKs for Node.js, Python, Go, PHP, iOS, Android, and React Native. Full sandbox emulator with simulated 3DS challenges and instant Aani transfers.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Interactive API sandbox with instant test keys</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Webhook delivery guarantees with automated retries</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>FTA UAE Corporate Tax XML / PDF receipt generator</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact-sales"
                  onClick={() => setIsSalesModalOpen(true)}
                  className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold hover:underline"
                >
                  <span>Explore Developer Documentation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Code Box (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#06080D] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Header */}
                <div className="p-4 bg-[#0B0F17] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {(['node', 'python', 'go', 'curl'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveCodeLang(lang)}
                        className={`px-3 py-1.5 rounded-lg uppercase text-[11px] font-bold transition-all ${
                          activeCodeLang === lang ? 'bg-emerald-400 text-black' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-all text-[11px] cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                {/* Code Content */}
                <pre className="p-6 text-slate-200 overflow-x-auto leading-relaxed max-h-[420px]">
                  <code>{PAY_SNIPPETS[activeCodeLang]}</code>
                </pre>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── UAE CASE STUDIES ── */}
      <section id="case-studies" className="py-24 border-b border-white/10 bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              PROVEN GCC AT-SCALE EXECUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mt-4">
              Enterprise Case Studies.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal mt-2">
              See how leading UAE luxury hospitality groups and digital enterprises scale with Nexora Pay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PAY_CASES.map((c) => (
              <div key={c.id} className="p-8 rounded-3xl bg-[#0B0F17] border border-white/10 shadow-xl space-y-6 flex flex-col justify-between font-sans">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-xs font-bold text-emerald-400">{c.industry}</span>
                    <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-lg">{c.logo}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-mono">{c.client}</h3>
                  <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-emerald-400 pl-4">
                    "{c.quote}"
                  </blockquote>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
                    {c.metrics.map((m, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#06080D] border border-white/5">
                        <span className="text-lg font-black text-emerald-400 block">{m.value}</span>
                        <span className="text-[10px] text-slate-400 uppercase">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono text-xs">
                  <span className="text-white font-bold block">{c.author}</span>
                  <span className="text-slate-400 text-[11px]">{c.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-24 border-b border-white/10 bg-[#090E16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mt-4">
              Everything You Need to Know.
            </h2>
          </div>

          <div className="space-y-4 font-mono">
            {PAY_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="rounded-2xl bg-[#06080D] border border-white/10 overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-xs text-slate-300 leading-relaxed font-sans border-t border-white/5 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FINAL ENTERPRISE CTA ── */}
      <section id="contact-sales" className="py-24 bg-gradient-to-t from-[#030508] via-[#06080D] to-[#090E16] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            DIFC & ADGM ONBOARDING
          </span>

          <h2 className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight">
            Ready to Upgrade Your UAE Financial Infrastructure?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Get activated on CBUAE Aani & Jaywan within 24 hours. Contact our DIFC institutional team for custom high-volume interchange rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono">
            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 transition-all cursor-pointer"
            >
              SCHEDULE ONBOARDING BRIEFING
            </button>

            <a
              href={NEXORA_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp DIFC Concierge</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#030508] border-t border-white/10 py-16 text-slate-400 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>NEXORA PAY UAE</span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              {NEXORA_BRAND.subheading}
            </p>
            <span className="text-[10px] text-emerald-400 block">{NEXORA_BRAND.difcAddress}</span>
          </div>

          <div className="space-y-2">
            <span className="text-white font-bold block uppercase text-xs">UAE Solutions</span>
            <a href="#products" className="block text-slate-400 hover:text-emerald-400">Payment Gateway</a>
            <a href="#products" className="block text-slate-400 hover:text-emerald-400">CBUAE Aani Transfers</a>
            <a href="#products" className="block text-slate-400 hover:text-emerald-400">Jaywan Card Processing</a>
            <a href="#hardware" className="block text-slate-400 hover:text-emerald-400">POS Smart Terminals</a>
            <a href="#virtual-card" className="block text-slate-400 hover:text-emerald-400">Corporate Expense Cards</a>
          </div>

          <div className="space-y-2">
            <span className="text-white font-bold block uppercase text-xs">Compliance & Legal</span>
            <span className="block text-slate-400">Central Bank of the UAE (RPSCS)</span>
            <span className="block text-slate-400">DFSA Category 4 Authorised Firm</span>
            <span className="block text-slate-400">FSRA ADGM Regulated</span>
            <span className="block text-slate-400">PCI-DSS Level 1 v4.0</span>
            <span className="block text-slate-400">ISO/IEC 27001 Certified</span>
          </div>

          <div className="space-y-3">
            <span className="text-white font-bold block uppercase text-xs">Contact & Chambers</span>
            <a href={`tel:${NEXORA_BRAND.phone}`} className="block text-slate-300 hover:text-emerald-400">Toll Free: 800-NEXORA (6396)</a>
            <a href={`mailto:${NEXORA_BRAND.email}`} className="block text-slate-300 hover:text-emerald-400">{NEXORA_BRAND.email}</a>
            <span className="text-[10px] text-slate-500 block">DIFC Currency House • ADGM Square</span>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mt-10 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <span>© 2026 Nexora Financial Technologies UAE LLC. All Rights Reserved.</span>
          <span>Dual DFSA & CBUAE Supervised Financial Architecture.</span>
        </div>
      </footer>

      {/* ── ENTERPRISE ONBOARDING / SALES MODAL ── */}
      <AnimatePresence>
        {isSalesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0B0F17] border border-emerald-500/40 rounded-3xl max-w-xl w-full p-8 shadow-2xl relative text-white"
            >
              <button
                onClick={() => { setIsSalesModalOpen(false); setSalesSubmitted(false); }}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!salesSubmitted ? (
                <form onSubmit={handleSalesSubmit} className="space-y-5 font-mono text-xs">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-400 uppercase">ENTERPRISE ONBOARDING INQUIRY</span>
                    <h3 className="text-xl font-extrabold text-white">Open a UAE Merchant Account</h3>
                    <p className="text-slate-300 text-xs font-sans">Our DIFC corporate onboarding team will respond within 2 hours with customized interchange pricing.</p>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">FULL NAME / EXECUTIVE TITLE</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Tariq Al-Hashimi (Managing Director)"
                      value={sName}
                      onChange={(e) => setSName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#06080D] border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 block mb-1">CORPORATE EMAIL</label>
                      <input
                        required
                        type="email"
                        placeholder="tariq@company.ae"
                        value={sEmail}
                        onChange={(e) => setSEmail(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#06080D] border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">COMPANY NAME</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sovereign Capital LLC"
                        value={sCompany}
                        onChange={(e) => setSCompany(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#06080D] border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 block mb-1">ESTIMATED MONTHLY VOLUME</label>
                      <select
                        value={sVolume}
                        onChange={(e) => setSVolume(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#06080D] border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                      >
                        <option value="AED 100k – AED 500k">AED 100k – AED 500k</option>
                        <option value="AED 500k – AED 2M">AED 500k – AED 2M</option>
                        <option value="AED 2M – AED 10M">AED 2M – AED 10M</option>
                        <option value="AED 10M+ Enterprise">AED 10M+ Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">LICENSE EMIRATE / JURISDICTION</label>
                      <select
                        value={sLicenseEmirate}
                        onChange={(e) => setSLicenseEmirate(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#06080D] border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                      >
                        <option value="Dubai (DIFC)">Dubai (DIFC)</option>
                        <option value="Dubai (DED Mainland)">Dubai (DED Mainland)</option>
                        <option value="Abu Dhabi (ADGM)">Abu Dhabi (ADGM)</option>
                        <option value="Abu Dhabi (Mainland)">Abu Dhabi (Mainland)</option>
                        <option value="Sharjah / RAK / Freezone">Sharjah / RAK / Freezone</option>
                        <option value="International / Offshore">International / Offshore</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer"
                  >
                    SUBMIT ONBOARDING APPLICATION
                  </button>

                </form>
              ) : (
                <div className="py-8 text-center space-y-4 font-mono">
                  <div className="w-14 h-14 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Application Received</h3>
                  <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto">
                    Thank you, {sName || 'Partner'}. Your inquiry for {sCompany || 'your enterprise'} has been dispatched to our DIFC Corporate Desk. Our lead partner will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setIsSalesModalOpen(false); setSalesSubmitted(false); }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-400 text-black font-bold text-xs uppercase"
                  >
                    Close Window
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── TRANSACTION DETAIL INSPECTION DRAWER ── */}
      <AnimatePresence>
        {selectedTxnDrawer && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="bg-[#0B0F17] border-l border-emerald-500/30 w-full max-w-md p-6 sm:p-8 h-full overflow-y-auto space-y-6 font-mono text-xs text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-emerald-400">TRANSACTION AUDIT RECEIPT</span>
                <button onClick={() => setSelectedTxnDrawer(null)} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">TRANSACTION ID</span>
                  <span className="text-lg font-bold text-white">{selectedTxnDrawer.id}</span>
                </div>

                <div className="p-4 rounded-xl bg-[#06080D] border border-white/10 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Amount Charged:</span>
                    <span className="text-white font-bold">{selectedTxnDrawer.currency} {selectedTxnDrawer.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Processing Fee:</span>
                    <span className="text-emerald-400 font-bold">AED {selectedTxnDrawer.fee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Net Settled:</span>
                    <span className="text-white font-bold">AED {(selectedTxnDrawer.amount - selectedTxnDrawer.fee).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Settlement SLA:</span>
                    <span className="text-emerald-300">{selectedTxnDrawer.settlementTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 block uppercase">CLIENT INFORMATION</span>
                  <div className="p-3.5 rounded-xl bg-white/5 space-y-1">
                    <span className="text-white font-bold block">{selectedTxnDrawer.customer}</span>
                    <span className="text-slate-300 block">{selectedTxnDrawer.company}</span>
                    <span className="text-slate-400 block text-[11px]">{selectedTxnDrawer.email}</span>
                    <span className="text-emerald-400 text-[11px] block">{selectedTxnDrawer.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 block uppercase">SECURITY & COMPLIANCE TELEMETRY</span>
                  <div className="p-3.5 rounded-xl bg-white/5 space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Risk Assessment Score:</span>
                      <span className="text-emerald-400 font-bold">{selectedTxnDrawer.riskScore} / 100 (Safe)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">3DS Protocol:</span>
                      <span className="text-white">EMV 3D Secure 2.3 Verified</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Acquirer Clearing Rail:</span>
                      <span className="text-white">CBUAE Aani / FAB Direct Rail</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedTxnDrawer(null)}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs"
              >
                Close Audit View
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── PRODUCT DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0B0F17] border border-emerald-500/40 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative text-white space-y-6"
            >
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">{selectedProductModal.badge || 'NEXORA MODULE'}</span>
                <h3 className="text-2xl font-bold font-mono text-white">{selectedProductModal.title}</h3>
                <span className="text-xs text-slate-400 block font-mono">{selectedProductModal.tagline}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{selectedProductModal.description}</p>

              <div className="space-y-2 font-mono text-xs">
                <span className="text-slate-400 uppercase text-[10px] block font-bold">CORE CAPABILITIES</span>
                {selectedProductModal.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Standard Fee</span>
                  <span className="text-emerald-400 font-bold text-sm">{selectedProductModal.startingFee}</span>
                </div>
                <button
                  onClick={() => { setSelectedProductModal(null); setIsSalesModalOpen(true); }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold uppercase text-xs cursor-pointer"
                >
                  Activate Module
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
