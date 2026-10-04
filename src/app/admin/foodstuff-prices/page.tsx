'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, Minus, RefreshCw, Upload, Download, 
  CheckCircle, AlertCircle, Clock, Search, Edit3, X, Save,
  Calendar, Layers, Box, FileSpreadsheet
} from 'lucide-react';
import * as XLSX from 'xlsx';

interface Product {
  id: string;
  name: string;
  arabicName: string;
  category: string;
  origin: string;
  grade: string;
  defaultPackagingUnit: string;
  defaultPackagingDetails: string;
  defaultNetWeightKg: number | null;
  defaultMoq: string;
}

interface ContainerPrice {
  id: string;
  productId: string;
  importerSupplierName: string;
  packagingUnit: string;
  packagingDetails: string;
  netWeightKg: number | null;
  priceAED: number | null;
  calculatedPricePerKg: number | null;
  moq: string;
  containerAvailability: string;
  portOfArrival?: string;
  businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  lastUpdated: string | null;
  updateSession: string | null;
  updateSource: string | null;
  quotationNotes?: string;
}

interface MarketPrice {
  id: string;
  productId: string;
  marketLocation: string;
  packagingUnit: string;
  packagingDetails: string;
  netWeightKg: number | null;
  priceAED: number | null;
  previousPriceAED: number | null;
  changePercent: number | null;
  trend: 'UP' | 'DOWN' | 'STABLE' | null;
  calculatedPricePerKg: number | null;
  minPurchaseQty: string;
  qualityGrade: string;
  marketSession: string | null;
  businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  lastUpdated: string | null;
  updateSource: string | null;
}

interface PriceHistory {
  id: string;
  priceType: 'CONTAINER' | 'DUBAI_MARKET';
  productName: string;
  packagingDetails: string;
  oldPriceAED: number | null;
  newPriceAED: number | null;
  differenceAED: number | null;
  changePercent: number | null;
  oldStatus?: string;
  newStatus?: string;
  session: string;
  source: string;
  updatedBy: string;
  timestamp: string;
}

interface Schedule {
  morningTime: string;
  middayTime: string;
  eveningTime: string;
  timezone: string;
  staleThresholdHours: number;
  lastSyncAt: string | null;
}

interface DynamicSessionInfo {
  session: string;
  label?: string;
  timeRange?: string;
  uaeTime?: string;
  currentTimeUAE?: string;
  isWithinWindow?: boolean;
  nextSession?: string;
}

interface DryRunRow {
  rowNumber: number;
  productId: string;
  matchedProductName: string;
  type: string;
  priceAED: number | null;
  packagingUnit: string;
  packagingDetails: string;
  netWeightKg: number | null;
  moq?: string;
  containerAvailability?: string;
  minPurchaseQty?: string;
  businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  quotationNotes?: string;
  oldPriceAED: number | null;
  changePercent: number | null;
  isValid: boolean;
  errors: string[];
}

interface DryRunResult {
  success: boolean;
  action: string;
  targetType: 'CONTAINER' | 'DUBAI_MARKET';
  summary: {
    totalRows: number;
    validCount: number;
    errorCount: number;
    canCommit: boolean;
  };
  rows: DryRunRow[];
}

export default function FoodstuffPricesAdminPage() {
  const [activeTab, setActiveTab] = useState<'container' | 'market' | 'import' | 'history' | 'schedule'>('container');
  const [loading, setLoading] = useState(true);
  const [dynamicSession, setDynamicSession] = useState<DynamicSessionInfo | null>(null);
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [containerPrices, setContainerPrices] = useState<ContainerPrice[]>([]);
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([]);
  const [history, setHistory] = useState<PriceHistory[]>([]);
  const [search, setSearch] = useState('');

  // Editing state for container price
  const [editingContainer, setEditingContainer] = useState<ContainerPrice | null>(null);
  const [containerForm, setContainerForm] = useState<Record<string, string | number | null>>({});

  // Editing state for market price
  const [editingMarket, setEditingMarket] = useState<MarketPrice | null>(null);
  const [marketForm, setMarketForm] = useState<Record<string, string | number | null>>({});

  // Schedule editing
  const [scheduleForm, setScheduleForm] = useState<Partial<Schedule>>({});
  const [savingSchedule, setSavingSchedule] = useState(false);

  // Bulk Import state
  const [importType, setImportType] = useState<'CONTAINER' | 'DUBAI_MARKET'>('CONTAINER');
  const [dryRunResult, setDryRunResult] = useState<DryRunResult | null>(null);
  const [importing, setImporting] = useState(false);
  const [importSuccessMsg, setImportSuccessMsg] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/foodstuff/prices');
      if (res.ok) {
        const data = await res.json();
        setDynamicSession(data.dynamicSession);
        setSchedule(data.schedule);
        setScheduleForm(data.schedule);
        setProducts(data.products || []);
        setContainerPrices(data.containerPrices || []);
        setMarketPrices(data.marketPrices || []);
        setHistory(data.priceHistory || []);
      }
    } catch (err) {
      console.error('Failed to load foodstuff prices admin data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    async function loadInitial() {
      try {
        const res = await fetch('/api/admin/foodstuff/prices');
        if (!isMounted) return;
        if (res.ok) {
          const data = await res.json();
          setDynamicSession(data.dynamicSession);
          setSchedule(data.schedule);
          setScheduleForm(data.schedule);
          setProducts(data.products || []);
          setContainerPrices(data.containerPrices || []);
          setMarketPrices(data.marketPrices || []);
          setHistory(data.priceHistory || []);
        }
      } catch (err) {
        console.error('Failed to load foodstuff prices admin data', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadInitial();
    return () => {
      isMounted = false;
    };
  }, []);

  const getProductName = (productId: string) => {
    const p = products.find((prod) => prod.id === productId);
    return p ? p.name : productId;
  };

  const getProductArabic = (productId: string) => {
    const p = products.find((prod) => prod.id === productId);
    return p ? p.arabicName : '';
  };

  const formatUAE = (iso: string | null) => {
    if (!iso) return 'Not Yet Set (Price on Request)';
    try {
      return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dubai',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(new Date(iso)) + ' GST';
    } catch {
      return 'Invalid Date';
    }
  };

  // Quick edit container price
  const handleEditContainer = (cp: ContainerPrice) => {
    setEditingContainer(cp);
    setContainerForm({
      priceAED: cp.priceAED !== null ? cp.priceAED : '',
      packagingUnit: cp.packagingUnit,
      packagingDetails: cp.packagingDetails,
      netWeightKg: cp.netWeightKg !== null ? cp.netWeightKg : '',
      moq: cp.moq,
      containerAvailability: cp.containerAvailability,
      businessStatus: cp.businessStatus,
      quotationNotes: cp.quotationNotes || '',
    });
  };

  const handleSaveContainer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingContainer) return;

    try {
      const payloadPrice = containerForm.priceAED === '' || containerForm.priceAED === null
        ? null
        : parseFloat(String(containerForm.priceAED));

      const payloadWeight = containerForm.netWeightKg === '' || containerForm.netWeightKg === null
        ? null
        : parseFloat(String(containerForm.netWeightKg));

      const updates: Partial<ContainerPrice> = {
        priceAED: payloadPrice,
        packagingUnit: String(containerForm.packagingUnit || ''),
        packagingDetails: String(containerForm.packagingDetails || ''),
        netWeightKg: payloadWeight,
        moq: String(containerForm.moq || ''),
        containerAvailability: String(containerForm.containerAvailability || ''),
        businessStatus: payloadPrice === null ? 'PRICE_ON_REQUEST' : (containerForm.businessStatus as 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST'),
        quotationNotes: containerForm.quotationNotes ? String(containerForm.quotationNotes) : undefined,
      };

      const res = await fetch('/api/admin/foodstuff/prices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'CONTAINER',
          id: editingContainer.id,
          updates,
        }),
      });

      if (res.ok) {
        setEditingContainer(null);
        fetchData();
      }
    } catch {
      alert('Failed to save container price');
    }
  };

  // Quick edit market price
  const handleEditMarket = (mp: MarketPrice) => {
    setEditingMarket(mp);
    setMarketForm({
      priceAED: mp.priceAED !== null ? mp.priceAED : '',
      packagingUnit: mp.packagingUnit,
      packagingDetails: mp.packagingDetails,
      netWeightKg: mp.netWeightKg !== null ? mp.netWeightKg : '',
      minPurchaseQty: mp.minPurchaseQty,
      qualityGrade: mp.qualityGrade,
      businessStatus: mp.businessStatus,
    });
  };

  const handleSaveMarket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMarket) return;

    try {
      const payloadPrice = marketForm.priceAED === '' || marketForm.priceAED === null
        ? null
        : parseFloat(String(marketForm.priceAED));

      const payloadWeight = marketForm.netWeightKg === '' || marketForm.netWeightKg === null
        ? null
        : parseFloat(String(marketForm.netWeightKg));

      const updates: Partial<MarketPrice> = {
        priceAED: payloadPrice,
        packagingUnit: String(marketForm.packagingUnit || ''),
        packagingDetails: String(marketForm.packagingDetails || ''),
        netWeightKg: payloadWeight,
        minPurchaseQty: String(marketForm.minPurchaseQty || ''),
        qualityGrade: String(marketForm.qualityGrade || ''),
        businessStatus: payloadPrice === null ? 'PRICE_ON_REQUEST' : (marketForm.businessStatus as 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST'),
      };

      const res = await fetch('/api/admin/foodstuff/prices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'DUBAI_MARKET',
          id: editingMarket.id,
          updates,
        }),
      });

      if (res.ok) {
        setEditingMarket(null);
        fetchData();
      }
    } catch {
      alert('Failed to save market price');
    }
  };

  // Save schedule settings
  const handleSaveSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSavingSchedule(true);
      const res = await fetch('/api/admin/foodstuff/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleForm),
      });
      if (res.ok) {
        alert('Schedule settings saved successfully.');
        fetchData();
      }
    } catch {
      alert('Failed to update schedule');
    } finally {
      setSavingSchedule(false);
    }
  };

  // Template download
  const handleDownloadTemplate = () => {
    const templateRows = products.map((p) => ({
      'Product ID': p.id,
      'Product Name': p.name,
      'Packaging Unit': p.defaultPackagingUnit,
      'Packaging Details': p.defaultPackagingDetails,
      'Net Weight (KG)': p.defaultNetWeightKg || '',
      'Price (AED)': '',
      'MOQ': p.defaultMoq || '',
      'Status': 'AVAILABLE',
      'Notes': '',
    }));

    const ws = XLSX.utils.json_to_sheet(templateRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Price Rate Sheet');
    XLSX.writeFile(wb, `Barakah_Foodstuff_${importType}_Template.xlsx`);
  };

  // Dry-run file upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setDryRunResult(null);
    setImportSuccessMsg(null);
    setImporting(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', importType);
      formData.append('action', 'DRY_RUN');

      const res = await fetch('/api/admin/foodstuff/bulk-import', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setDryRunResult(data);
      } else {
        alert(data.error || 'Failed to process file for preview');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'File upload error';
      alert(msg);
    } finally {
      setImporting(false);
    }
  };

  // Confirm commit
  const handleCommitImport = async () => {
    if (!dryRunResult || !dryRunResult.rows) return;

    const validRows = dryRunResult.rows.filter((r: DryRunRow) => r.isValid);
    if (validRows.length === 0) {
      alert('No valid rows to commit.');
      return;
    }

    try {
      setImporting(true);
      const res = await fetch('/api/admin/foodstuff/bulk-import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'COMMIT',
          type: importType,
          rows: validRows,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setImportSuccessMsg(`Successfully committed ${data.updatedCount} verified price records at ${formatUAE(data.timestamp)}.`);
        setDryRunResult(null);
        fetchData();
      } else {
        alert(data.error || 'Commit failed');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to commit import';
      alert(msg);
    } finally {
      setImporting(false);
    }
  };

  const filteredContainerPrices = containerPrices.filter((cp) => {
    const name = getProductName(cp.productId).toLowerCase();
    const arabic = getProductArabic(cp.productId);
    return name.includes(search.toLowerCase()) || arabic.includes(search) || cp.productId.includes(search.toLowerCase());
  });

  const filteredMarketPrices = marketPrices.filter((mp) => {
    const name = getProductName(mp.productId).toLowerCase();
    const arabic = getProductArabic(mp.productId);
    return name.includes(search.toLowerCase()) || arabic.includes(search) || mp.productId.includes(search.toLowerCase());
  });

  return (
    <div className="space-y-6">
      
      {/* Header banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0B0F19] p-6 rounded-2xl border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              AL AWEER WHOLESALE PRICING CONTROL DESK
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 font-mono text-[10px] font-bold">
              BARAKAH AL RIZQ L.L.C
            </span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight font-sans">
            Foodstuff Wholesale Live Price System
          </h1>
          <p className="text-xs text-slate-400">
            Dedicated Dubai wholesale pricing engine with strict separation between Container Shipments &amp; Al Aweer Spot Desk.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={fetchData}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Live DB</span>
          </button>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Current UAE Time</span>
          <span className="text-xs font-mono font-bold text-amber-400 block mt-1 truncate">
            {dynamicSession?.currentTimeUAE || 'Loading...'}
          </span>
        </div>

        <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Active UAE Session</span>
          <span className="text-xs font-mono font-black text-emerald-400 block mt-1">
            {dynamicSession?.session || 'MORNING'} SESSION
          </span>
        </div>

        <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Verified Products</span>
          <span className="text-lg font-black text-white block mt-0.5">
            {products.length}
          </span>
        </div>

        <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Container Quotes</span>
          <span className="text-lg font-black text-white block mt-0.5">
            {containerPrices.filter((c) => c.priceAED !== null).length} / {containerPrices.length}
          </span>
        </div>

        <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Dubai Market Quotes</span>
          <span className="text-lg font-black text-white block mt-0.5">
            {marketPrices.filter((m) => m.priceAED !== null).length} / {marketPrices.length}
          </span>
        </div>

        <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Stale Threshold</span>
          <span className="text-xs font-mono text-slate-300 block mt-1">
            {schedule?.staleThresholdHours || 8} Hours
          </span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-800 gap-1 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('container')}
          className={`px-4 py-2.5 text-xs font-mono font-bold whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'container'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>Container Wholesale ({containerPrices.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('market')}
          className={`px-4 py-2.5 text-xs font-mono font-bold whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'market'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Dubai Market Spot ({marketPrices.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('import')}
          className={`px-4 py-2.5 text-xs font-mono font-bold whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'import'
              ? 'border-amber-500 text-amber-400 bg-amber-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Bulk Import (Excel / CSV)</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2.5 text-xs font-mono font-bold whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'history'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Price Audit Log ({history.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-4 py-2.5 text-xs font-mono font-bold whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'schedule'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Session &amp; Stale Settings</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: CONTAINER WHOLESALE PRICES                                        */}
      {/* ========================================================================= */}
      {activeTab === 'container' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search container produce..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-2 px-3 pl-9 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-2.5 top-2.5" />
            </div>

            <span className="text-xs text-slate-400 font-mono">
              Showing {filteredContainerPrices.length} container records
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0B0F19]">
            <table className="w-full text-left text-xs text-slate-300 font-sans">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Packaging Unit</th>
                  <th className="py-3 px-4">Net Wt</th>
                  <th className="py-3 px-4">Wholesale Price (AED)</th>
                  <th className="py-3 px-4">Calculated AED/KG</th>
                  <th className="py-3 px-4">MOQ</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Last Updated (UAE)</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {filteredContainerPrices.map((cp) => (
                  <tr key={cp.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-white">
                      <div>{getProductName(cp.productId)}</div>
                      <div className="text-[10px] text-amber-500/70 font-mono">{getProductArabic(cp.productId)}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px]">
                        {cp.packagingDetails}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {cp.netWeightKg ? `${cp.netWeightKg} KG` : 'Variable'}
                    </td>
                    <td className="py-3 px-4 font-bold">
                      {cp.priceAED !== null ? (
                        <span className="text-emerald-400">AED {cp.priceAED.toFixed(2)}</span>
                      ) : (
                        <span className="text-amber-400 font-normal">PRICE ON REQUEST</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {cp.calculatedPricePerKg !== null ? (
                        <span className="text-slate-200">AED {cp.calculatedPricePerKg.toFixed(2)} / KG</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-400 text-[11px] truncate max-w-[120px]">
                      {cp.moq}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        cp.businessStatus === 'AVAILABLE'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : cp.businessStatus === 'OUT_OF_STOCK'
                          ? 'bg-red-950/80 text-red-400 border border-red-500/30'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                      }`}>
                        {cp.businessStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px]">
                      {formatUAE(cp.lastUpdated)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleEditContainer(cp)}
                        className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 hover:bg-emerald-600 hover:text-white transition-colors text-xs flex items-center gap-1.5 ml-auto"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: DUBAI AL AWEER MARKET SPOT PRICES                                  */}
      {/* ========================================================================= */}
      {activeTab === 'market' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0B0F19] p-4 rounded-xl border border-slate-800">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search Al Aweer market produce..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-2 px-3 pl-9 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-2.5 top-2.5" />
            </div>

            <span className="text-xs text-slate-400 font-mono">
              Showing {filteredMarketPrices.length} market spot records
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0B0F19]">
            <table className="w-full text-left text-xs text-slate-300 font-sans">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Produce</th>
                  <th className="py-3 px-4">Packaging Unit</th>
                  <th className="py-3 px-4">Net Wt</th>
                  <th className="py-3 px-4">Spot Wholesale Price</th>
                  <th className="py-3 px-4">AED / KG</th>
                  <th className="py-3 px-4">Trend</th>
                  <th className="py-3 px-4">Min Qty</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Last Updated (UAE)</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {filteredMarketPrices.map((mp) => (
                  <tr key={mp.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-white">
                      <div>{getProductName(mp.productId)}</div>
                      <div className="text-[10px] text-amber-500/70 font-mono">{getProductArabic(mp.productId)}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px]">
                        {mp.packagingDetails}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {mp.netWeightKg ? `${mp.netWeightKg} KG` : 'Variable'}
                    </td>
                    <td className="py-3 px-4 font-bold">
                      {mp.priceAED !== null ? (
                        <span className="text-emerald-400">AED {mp.priceAED.toFixed(2)}</span>
                      ) : (
                        <span className="text-amber-400 font-normal">PRICE ON REQUEST</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {mp.calculatedPricePerKg !== null ? (
                        <span className="text-slate-200">AED {mp.calculatedPricePerKg.toFixed(2)} / KG</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {mp.trend === 'UP' && (
                        <span className="text-emerald-400 flex items-center gap-1 font-bold">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>+{mp.changePercent}%</span>
                        </span>
                      )}
                      {mp.trend === 'DOWN' && (
                        <span className="text-rose-400 flex items-center gap-1 font-bold">
                          <TrendingDown className="w-3.5 h-3.5" />
                          <span>{mp.changePercent}%</span>
                        </span>
                      )}
                      {mp.trend === 'STABLE' && (
                        <span className="text-slate-400 flex items-center gap-1">
                          <Minus className="w-3.5 h-3.5" />
                          <span>0.0%</span>
                        </span>
                      )}
                      {!mp.trend && <span className="text-slate-600">—</span>}
                    </td>
                    <td className="py-3 px-4 text-slate-400 text-[11px]">
                      {mp.minPurchaseQty}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        mp.businessStatus === 'AVAILABLE'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : mp.businessStatus === 'OUT_OF_STOCK'
                          ? 'bg-red-950/80 text-red-400 border border-red-500/30'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                      }`}>
                        {mp.businessStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px]">
                      {formatUAE(mp.lastUpdated)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleEditMarket(mp)}
                        className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 hover:bg-emerald-600 hover:text-white transition-colors text-xs flex items-center gap-1.5 ml-auto"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BULK IMPORT (EXCEL / CSV DRY RUN & COMMIT)                          */}
      {/* ========================================================================= */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          <div className="bg-[#0B0F19] p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>Bulk Rate Sheet Upload (Strict Dry-Run Validation)</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upload supplier rate sheets. The system validates all rows against verified products before committing changes.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={importType}
                  onChange={(e) => {
                    setImportType(e.target.value as 'CONTAINER' | 'DUBAI_MARKET');
                    setDryRunResult(null);
                  }}
                  className="bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 py-2 px-3 rounded-lg focus:outline-none"
                >
                  <option value="CONTAINER">Target: Container Wholesale</option>
                  <option value="DUBAI_MARKET">Target: Dubai Al Aweer Spot</option>
                </select>

                <button
                  type="button"
                  onClick={handleDownloadTemplate}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Sample Template</span>
                </button>
              </div>
            </div>

            {/* Drop Zone */}
            <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-emerald-500/60 transition-colors bg-slate-950/40">
              <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <div className="text-xs text-slate-300 font-medium">
                Choose an Excel (.xlsx, .xls) or CSV rate sheet
              </div>
              <p className="text-[11px] text-slate-500 mt-1 font-mono">
                Columns supported: Product ID, Product Name, Price (AED), Packaging Details, Net Weight (KG), MOQ
              </p>
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
                disabled={importing}
                className="mt-4 text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {importSuccessMsg && (
            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{importSuccessMsg}</span>
            </div>
          )}

          {/* Dry Run Preview Table */}
          {dryRunResult && (
            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Dry-Run Analysis Report</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                      Zero DB Mutations Applied Yet
                    </span>
                  </h4>
                  <div className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-4">
                    <span>Total Rows: <strong>{dryRunResult.summary.totalRows}</strong></span>
                    <span className="text-emerald-400">Valid: <strong>{dryRunResult.summary.validCount}</strong></span>
                    {dryRunResult.summary.errorCount > 0 && (
                      <span className="text-rose-400">Errors: <strong>{dryRunResult.summary.errorCount}</strong></span>
                    )}
                  </div>
                </div>

                <div>
                  {dryRunResult.summary.canCommit ? (
                    <button
                      onClick={handleCommitImport}
                      disabled={importing}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-mono font-bold text-xs hover:bg-emerald-500 transition-colors shadow-lg flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{importing ? 'Committing...' : `Commit ${dryRunResult.summary.validCount} Valid Prices Now`}</span>
                    </button>
                  ) : (
                    <div className="text-rose-400 text-xs font-mono flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      <span>Resolve {dryRunResult.summary.errorCount} error(s) before committing</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Rows List */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs font-mono text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">Row</th>
                      <th className="py-2.5 px-3">Product ID / Match</th>
                      <th className="py-2.5 px-3">Packaging Spec</th>
                      <th className="py-2.5 px-3">Old Price</th>
                      <th className="py-2.5 px-3">New Price (AED)</th>
                      <th className="py-2.5 px-3">Change %</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3">Validation Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {dryRunResult.rows.map((row: DryRunRow) => (
                      <tr key={row.rowNumber} className={row.isValid ? 'hover:bg-slate-900/40' : 'bg-rose-950/20'}>
                        <td className="py-2.5 px-3 text-slate-500">#{row.rowNumber}</td>
                        <td className="py-2.5 px-3 font-medium text-white">
                          <div>{row.matchedProductName}</div>
                          <div className="text-[10px] text-slate-500">{row.productId}</div>
                        </td>
                        <td className="py-2.5 px-3 text-slate-400">{row.packagingDetails}</td>
                        <td className="py-2.5 px-3 text-slate-500">
                          {row.oldPriceAED !== null ? `AED ${row.oldPriceAED.toFixed(2)}` : 'POR'}
                        </td>
                        <td className="py-2.5 px-3 font-bold">
                          {row.priceAED !== null ? (
                            <span className="text-emerald-400">AED {row.priceAED.toFixed(2)}</span>
                          ) : (
                            <span className="text-amber-400">PRICE ON REQUEST</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3">
                          {row.changePercent !== null ? (
                            <span className={row.changePercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                              {row.changePercent > 0 ? `+${row.changePercent}%` : `${row.changePercent}%`}
                            </span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-[10px]">
                          {row.businessStatus}
                        </td>
                        <td className="py-2.5 px-3">
                          {row.isValid ? (
                            <span className="text-emerald-400 text-[11px] flex items-center gap-1 font-semibold">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Valid</span>
                            </span>
                          ) : (
                            <div className="text-rose-400 text-[10px] space-y-0.5">
                              {row.errors.map((e: string, i: number) => (
                                <div key={i} className="flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3 shrink-0" />
                                  <span>{e}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: AUDIT LOG & PRICE HISTORY                                         */}
      {/* ========================================================================= */}
      {activeTab === 'history' && (
        <div className="bg-[#0B0F19] p-6 rounded-2xl border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Immutable Price History &amp; Audit Trail</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Every single price modification is recorded with prior verified rate, new rate, admin user, session tag, and canonical timestamp.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs font-mono text-slate-300">
              <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Date / Time (GST)</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Packaging</th>
                  <th className="py-3 px-4">Old AED</th>
                  <th className="py-3 px-4">New AED</th>
                  <th className="py-3 px-4">Diff / %</th>
                  <th className="py-3 px-4">Session</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Updated By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {history.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-8 text-center text-slate-500 font-mono text-xs">
                      No price updates recorded in history yet. All prices currently initialized as PRICE ON REQUEST.
                    </td>
                  </tr>
                ) : (
                  history.map((h) => (
                    <tr key={h.id} className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 text-slate-400 text-[11px] whitespace-nowrap">
                        {formatUAE(h.timestamp)}
                      </td>
                      <td className="py-2.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          h.priceType === 'CONTAINER' 
                            ? 'bg-blue-950/80 text-blue-400 border border-blue-500/30' 
                            : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {h.priceType}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 font-sans font-medium text-white">{h.productName}</td>
                      <td className="py-2.5 px-4 text-slate-400 text-[11px]">{h.packagingDetails}</td>
                      <td className="py-2.5 px-4 text-slate-400">
                        {h.oldPriceAED !== null ? `AED ${h.oldPriceAED.toFixed(2)}` : <span className="text-slate-600">Initial (null)</span>}
                      </td>
                      <td className="py-2.5 px-4 font-bold">
                        {h.newPriceAED !== null ? (
                          <span className="text-emerald-400">AED {h.newPriceAED.toFixed(2)}</span>
                        ) : (
                          <span className="text-amber-400">PRICE ON REQUEST</span>
                        )}
                      </td>
                      <td className="py-2.5 px-4">
                        {h.changePercent !== null ? (
                          <span className={h.changePercent >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                            {h.changePercent > 0 ? `+${h.changePercent}%` : `${h.changePercent}%`}
                          </span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-2.5 px-4 text-[10px] font-bold text-slate-300">{h.session}</td>
                      <td className="py-2.5 px-4 text-[10px] text-slate-400">{h.source}</td>
                      <td className="py-2.5 px-4 text-slate-500 text-[11px] truncate max-w-[120px]">{h.updatedBy}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: SCHEDULE & STALE SETTINGS                                          */}
      {/* ========================================================================= */}
      {activeTab === 'schedule' && (
        <div className="bg-[#0B0F19] p-6 rounded-2xl border border-slate-800 max-w-2xl space-y-6">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Update Schedule &amp; Freshness Configuration</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Configure session cutoff times for Al Aweer market daily trading. Note: Schedule does NOT automatically fabricate prices; it tags verified updates and flags overdue stale sessions.
            </p>
          </div>

          <form onSubmit={handleSaveSchedule} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Morning Session (GST)</label>
                <input
                  type="time"
                  value={scheduleForm.morningTime || '06:30'}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, morningTime: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Midday Session (GST)</label>
                <input
                  type="time"
                  value={scheduleForm.middayTime || '12:30'}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, middayTime: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Evening Session (GST)</label>
                <input
                  type="time"
                  value={scheduleForm.eveningTime || '18:00'}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, eveningTime: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Stale Price Threshold (Hours)</label>
              <input
                type="number"
                min="1"
                max="72"
                value={scheduleForm.staleThresholdHours || 8}
                onChange={(e) => setScheduleForm({ ...scheduleForm, staleThresholdHours: parseInt(e.target.value, 10) || 8 })}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Prices un-updated after this duration dynamically shift to &quot;STALE — Please confirm today&apos;s rate&quot;.
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={savingSchedule}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-mono font-bold text-xs hover:bg-emerald-500 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>{savingSchedule ? 'Saving...' : 'Save Schedule Settings'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: EDIT CONTAINER PRICE                                              */}
      {/* ========================================================================= */}
      {editingContainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-6 max-w-lg w-full text-slate-200 font-sans shadow-2xl relative">
            <button
              onClick={() => setEditingContainer(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-1">
              Edit Container Wholesale Price
            </h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">
              Product: {getProductName(editingContainer.productId)} ({editingContainer.productId})
            </p>

            <form onSubmit={handleSaveContainer} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Wholesale Price (AED) per Unit</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Leave empty for PRICE ON REQUEST"
                  value={containerForm.priceAED ?? ''}
                  onChange={(e) => setContainerForm({ ...containerForm, priceAED: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Leave blank to set status to PRICE ON REQUEST.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Packaging Unit</label>
                  <select
                    value={containerForm.packagingUnit ?? 'BOX'}
                    onChange={(e) => setContainerForm({ ...containerForm, packagingUnit: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none"
                  >
                    <option value="BOX">BOX</option>
                    <option value="CTN">CTN</option>
                    <option value="BAG">BAG</option>
                    <option value="KG">KG</option>
                    <option value="TON">TON</option>
                    <option value="PCS">PCS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Net Weight (KG)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 10.0"
                    value={containerForm.netWeightKg ?? ''}
                    onChange={(e) => setContainerForm({ ...containerForm, netWeightKg: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Packaging Details Description</label>
                <input
                  type="text"
                  value={containerForm.packagingDetails ?? ''}
                  onChange={(e) => setContainerForm({ ...containerForm, packagingDetails: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Minimum Order Qty (MOQ)</label>
                  <input
                    type="text"
                    value={containerForm.moq ?? ''}
                    onChange={(e) => setContainerForm({ ...containerForm, moq: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Business Status</label>
                  <select
                    value={containerForm.businessStatus ?? 'AVAILABLE'}
                    onChange={(e) => setContainerForm({ ...containerForm, businessStatus: e.target.value as any })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none"
                  >
                    <option value="AVAILABLE">AVAILABLE</option>
                    <option value="OUT_OF_STOCK">OUT_OF_STOCK</option>
                    <option value="PRICE_ON_REQUEST">PRICE_ON_REQUEST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Container Availability Note</label>
                <input
                  type="text"
                  value={containerForm.containerAvailability ?? ''}
                  onChange={(e) => setContainerForm({ ...containerForm, containerAvailability: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingContainer(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
                >
                  Save Container Price
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: EDIT MARKET PRICE                                                 */}
      {/* ========================================================================= */}
      {editingMarket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-6 max-w-lg w-full text-slate-200 font-sans shadow-2xl relative">
            <button
              onClick={() => setEditingMarket(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-1">
              Edit Al Aweer Wholesale Spot Price
            </h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">
              Product: {getProductName(editingMarket.productId)} ({editingMarket.productId})
            </p>

            <form onSubmit={handleSaveMarket} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Wholesale Spot Price (AED)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Leave empty for PRICE ON REQUEST"
                  value={marketForm.priceAED ?? ''}
                  onChange={(e) => setMarketForm({ ...marketForm, priceAED: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Leave blank to set status to PRICE ON REQUEST.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Packaging Unit</label>
                  <select
                    value={marketForm.packagingUnit ?? 'BOX'}
                    onChange={(e) => setMarketForm({ ...marketForm, packagingUnit: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none"
                  >
                    <option value="BOX">BOX</option>
                    <option value="CTN">CTN</option>
                    <option value="BAG">BAG</option>
                    <option value="KG">KG</option>
                    <option value="TON">TON</option>
                    <option value="PCS">PCS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Net Weight (KG)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 6.0"
                    value={marketForm.netWeightKg ?? ''}
                    onChange={(e) => setMarketForm({ ...marketForm, netWeightKg: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Packaging Details Description</label>
                <input
                  type="text"
                  value={marketForm.packagingDetails ?? ''}
                  onChange={(e) => setMarketForm({ ...marketForm, packagingDetails: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Min Purchase Qty</label>
                  <input
                    type="text"
                    value={marketForm.minPurchaseQty ?? ''}
                    onChange={(e) => setMarketForm({ ...marketForm, minPurchaseQty: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Business Status</label>
                  <select
                    value={marketForm.businessStatus ?? 'AVAILABLE'}
                    onChange={(e) => setMarketForm({ ...marketForm, businessStatus: e.target.value as any })}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none"
                  >
                    <option value="AVAILABLE">AVAILABLE</option>
                    <option value="OUT_OF_STOCK">OUT_OF_STOCK</option>
                    <option value="PRICE_ON_REQUEST">PRICE_ON_REQUEST</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingMarket(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
                >
                  Save Market Spot Price
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
