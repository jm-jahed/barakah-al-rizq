'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

type ImportType = 'products' | 'categories' | 'customers' | 'orders' | 'payments';
type ExportType = 'products' | 'categories' | 'customers' | 'orders' | 'payments' | 'sales' | 'reports';

interface ValidationResult {
  totalRows: number;
  validCount: number;
  duplicateCount: number;
  invalidCount: number;
  errors: Array<{
    rowNumber: number;
    identifier: string;
    field: string;
    value: string;
    error: string;
    severity: string;
  }>;
  preview: Array<{
    rowNumber: number;
    identifier: string;
    status: 'VALID' | 'DUPLICATE' | 'INVALID';
    data: Record<string, string>;
    message?: string;
    errors?: string[];
  }>;
}

interface ExecutionResult {
  totalRows: number;
  importedCount: number;
  skippedDuplicatesCount: number;
  failedCount: number;
  errors: Array<{
    rowNumber: number;
    identifier: string;
    field: string;
    value: string;
    error: string;
    severity: string;
  }>;
  timestamp: string;
}

export default function ImportExportPage() {
  const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');

  // Record Counts
  const [counts, setCounts] = useState<{
    products: number;
    categories: number;
    customers: number;
    orders: number;
    payments: number;
    sales: number;
  }>({
    products: 0,
    categories: 0,
    customers: 0,
    orders: 0,
    payments: 0,
    sales: 0,
  });

  // Export State
  const [exportingType, setExportingType] = useState<ExportType | null>(null);

  // Import State
  const [importType, setImportType] = useState<ImportType>('products');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvContent, setCsvContent] = useState<string>('');
  const [isValidating, setIsValidating] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [validationData, setValidationData] = useState<ValidationResult | null>(null);
  const [executionData, setExecutionData] = useState<ExecutionResult | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load baseline counts
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [prodRes, catRes, custRes, ordRes, payRes, salesRes] = await Promise.all([
          fetch('/api/admin/foodstuff/products'),
          fetch('/api/admin/foodstuff/categories'),
          fetch('/api/admin/foodstuff/customers'),
          fetch('/api/admin/foodstuff/orders'),
          fetch('/api/admin/foodstuff/payments'),
          fetch('/api/admin/foodstuff/sales'),
        ]);

        const [pData, cData, cuData, oData, pyData, sData] = await Promise.all([
          prodRes.ok ? prodRes.json() : null,
          catRes.ok ? catRes.json() : null,
          custRes.ok ? custRes.json() : null,
          ordRes.ok ? ordRes.json() : null,
          payRes.ok ? payRes.json() : null,
          salesRes.ok ? salesRes.json() : null,
        ]);

        setCounts({
          products: pData?.products?.length || pData?.data?.length || 0,
          categories: cData?.categories?.length || cData?.data?.length || 0,
          customers: cuData?.customers?.length || cuData?.data?.length || 0,
          orders: oData?.orders?.length || oData?.data?.length || 0,
          payments: pyData?.payments?.length || pyData?.data?.length || 0,
          sales: sData?.totalCount || sData?.sales?.length || 0,
        });
      } catch (err) {
        console.warn('Failed to load count metrics:', err);
      }
    };
    fetchCounts();
  }, []);

  // Handle Export Trigger
  const handleExport = async (type: ExportType) => {
    setExportingType(type);
    try {
      const res = await fetch(`/api/admin/foodstuff/export?type=${type}`);
      if (!res.ok) {
        const err = await res.json();
        alert(`Export failed: ${err.error || 'Server error'}`);
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `barakah_${type}_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      alert(`Export error: ${msg}`);
    } finally {
      setExportingType(null);
    }
  };

  // Handle Template Download
  const handleDownloadTemplate = async () => {
    try {
      const res = await fetch(`/api/admin/foodstuff/import/template?type=${importType}`);
      if (!res.ok) throw new Error('Failed to download template');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `barakah_template_${importType}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      alert(`Template download failed: ${msg}`);
    }
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      alert('Please upload a valid .csv file.');
      return;
    }

    setCsvFile(file);
    setValidationData(null);
    setExecutionData(null);
    setErrorMessage('');

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvContent(text);
    };
    reader.readAsText(file);
  };

  // Handle Validate CSV
  const handleValidateCsv = async () => {
    if (!csvContent) {
      alert('Please select a CSV file first.');
      return;
    }

    setIsValidating(true);
    setErrorMessage('');
    setExecutionData(null);

    try {
      const res = await fetch('/api/admin/foodstuff/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: importType,
          action: 'validate',
          csvContent,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'CSV validation failed.');
        setValidationData(null);
      } else {
        setValidationData(data);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setErrorMessage(`Validation error: ${msg}`);
    } finally {
      setIsValidating(false);
    }
  };

  // Handle Confirm & Execute Import
  const handleExecuteImport = async () => {
    setShowConfirmModal(false);
    setIsImporting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/admin/foodstuff/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: importType,
          action: 'execute',
          csvContent,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || data.message || 'Import execution failed.');
      } else {
        setExecutionData(data);
        // Refresh counts
        const refreshRes = await fetch(`/api/admin/foodstuff/${importType === 'orders' ? 'orders' : importType === 'payments' ? 'payments' : importType}`);
        if (refreshRes.ok) {
          const rData = await refreshRes.json();
          setCounts((prev) => ({
            ...prev,
            [importType]: rData?.[importType]?.length || rData?.data?.length || prev[importType],
          }));
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setErrorMessage(`Import error: ${msg}`);
    } finally {
      setIsImporting(false);
    }
  };

  // Handle Download Error Log CSV
  const handleDownloadErrorCsv = () => {
    const errors = executionData?.errors || validationData?.errors || [];
    if (errors.length === 0) return;

    const headers = ['Row Number', 'Identifier', 'Field', 'Value', 'Error Message', 'Severity'];
    const rows = errors.map((e) => [
      e.rowNumber,
      `"${(e.identifier || '').replace(/"/g, '""')}"`,
      `"${(e.field || '').replace(/"/g, '""')}"`,
      `"${(e.value || '').replace(/"/g, '""')}"`,
      `"${(e.error || '').replace(/"/g, '""')}"`,
      e.severity,
    ]);

    const csvStr = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `barakah_import_errors_${importType}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const exportCards = [
    {
      type: 'products' as ExportType,
      title: 'Products Catalog',
      icon: '🥦',
      count: counts.products,
      desc: 'Complete produce catalog with SKU, grading, pricing & packaging specs.',
      color: 'from-emerald-500/20 to-emerald-700/10 border-emerald-500/30 text-emerald-400',
    },
    {
      type: 'categories' as ExportType,
      title: 'Product Categories',
      icon: '🏷️',
      count: counts.categories,
      desc: 'Taxonomy categories, display orders, and bilingual Arabic names.',
      color: 'from-blue-500/20 to-blue-700/10 border-blue-500/30 text-blue-400',
    },
    {
      type: 'customers' as ExportType,
      title: 'Clients & Buyers CRM',
      icon: '👥',
      count: counts.customers,
      desc: 'Registered B2B buyers, contact info, TRN, order volume & calculated balances.',
      color: 'from-purple-500/20 to-purple-700/10 border-purple-500/30 text-purple-400',
    },
    {
      type: 'orders' as ExportType,
      title: 'Wholesale Orders',
      icon: '📦',
      count: counts.orders,
      desc: 'Full order ledger with line item snapshots, pickup schedules & fulfillment statuses.',
      color: 'from-amber-500/20 to-amber-700/10 border-amber-500/30 text-amber-400',
    },
    {
      type: 'payments' as ExportType,
      title: 'Payments & Collections',
      icon: '💳',
      count: counts.payments,
      desc: 'Accounts receivable ledger including VALID, REVERSED and REFUNDED records.',
      color: 'from-teal-500/20 to-teal-700/10 border-teal-500/30 text-teal-400',
    },
    {
      type: 'sales' as ExportType,
      title: 'Sales History Ledger',
      icon: '📈',
      count: counts.sales,
      desc: 'Enriched sales registry with collected funds, outstanding balances & fulfillment tracking.',
      color: 'from-indigo-500/20 to-indigo-700/10 border-indigo-500/30 text-indigo-400',
    },
    {
      type: 'reports' as ExportType,
      title: 'Multi-Period Sales Analytics',
      icon: '📑',
      count: 1,
      desc: 'Aggregated executive summary, wholesale channel breakdown & commodity volume.',
      color: 'from-rose-500/20 to-rose-700/10 border-rose-500/30 text-rose-400',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔄</span>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Central Import & Export Center
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Enterprise data management, audited CSV exports, and safe bulk import workflows for Barakah Al Rizq.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => {
              setActiveTab('export');
              setErrorMessage('');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'export'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📤</span>
            <span>Export Center</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('import');
              setErrorMessage('');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'import'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📥</span>
            <span>Import Hub</span>
          </button>
        </div>
      </div>

      {/* ERROR BANNER */}
      {errorMessage && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 text-xs text-red-400">
          <span className="text-base leading-none">⚠️</span>
          <div className="flex-1">
            <span className="font-bold block">Action Required</span>
            <span>{errorMessage}</span>
          </div>
          <button onClick={() => setErrorMessage('')} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: EXPORT CENTER */}
      {/* ========================================================================= */}
      {activeTab === 'export' && (
        <div className="space-y-6">
          {/* Info Card */}
          <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                AUDITED CSV EXPORT PROTOCOL
              </span>
              <h2 className="text-sm font-bold text-white">
                Deterministic UTF-8 RFC 4180 Exports with Excel Compatibility
              </h2>
              <p className="text-xs text-slate-400 max-w-2xl">
                All exports include genuine historical records, exact pricing snapshots, bilingual Arabic/Bangla Unicode, and verified receipt totals. Zero synthetic data.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UTF-8 BOM READY</span>
            </div>
          </div>

          {/* Export Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {exportCards.map((card) => (
              <div
                key={card.type}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl flex flex-col justify-between space-y-4 transition-all hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl p-2 rounded-xl bg-slate-950 border border-slate-800">
                        {card.icon}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-white">{card.title}</h3>
                        <span className="text-[10px] font-mono text-slate-400">
                          {card.type === 'reports' ? 'Active Analytics' : `${card.count} Recorded Records`}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-slate-950 border border-slate-800 text-slate-400">
                      CSV
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleExport(card.type)}
                    disabled={exportingType === card.type}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-slate-950 rounded-xl text-xs font-bold transition-all disabled:opacity-50"
                  >
                    <span>{exportingType === card.type ? '⏳' : '📥'}</span>
                    <span>{exportingType === card.type ? 'Generating CSV...' : 'Export CSV'}</span>
                  </button>

                  {card.type === 'sales' && (
                    <Link
                      href="/admin/sales"
                      className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs"
                      title="View & Filter Sales"
                    >
                      🔍
                    </Link>
                  )}
                  {card.type === 'orders' && (
                    <Link
                      href="/admin/orders"
                      className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs"
                      title="View & Filter Orders"
                    >
                      🔍
                    </Link>
                  )}
                  {card.type === 'payments' && (
                    <Link
                      href="/admin/payments"
                      className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs"
                      title="View & Filter Payments"
                    >
                      🔍
                    </Link>
                  )}
                  {card.type === 'reports' && (
                    <Link
                      href="/admin/reports"
                      className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs"
                      title="View Live Analytics"
                    >
                      🔍
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: IMPORT HUB */}
      {/* ========================================================================= */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          {/* Step 1 & 2: Select Target & Download Template */}
          <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                  STEP 1 & 2: TARGET SELECTION & TEMPLATE
                </span>
                <h2 className="text-sm font-bold text-white">Select Entity & Download Official CSV Template</h2>
              </div>

              <button
                onClick={handleDownloadTemplate}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-all"
              >
                <span>📄</span>
                <span>Download {importType.toUpperCase()} Template CSV</span>
              </button>
            </div>

            {/* Target Select Radio Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { type: 'products' as ImportType, title: 'Products', icon: '🥦', count: counts.products },
                { type: 'categories' as ImportType, title: 'Categories', icon: '🏷️', count: counts.categories },
                { type: 'customers' as ImportType, title: 'Customers', icon: '👥', count: counts.customers },
                { type: 'orders' as ImportType, title: 'Orders', icon: '📦', count: counts.orders },
                { type: 'payments' as ImportType, title: 'Payments', icon: '💳', count: counts.payments },
              ].map((t) => (
                <button
                  key={t.type}
                  onClick={() => {
                    setImportType(t.type);
                    setValidationData(null);
                    setExecutionData(null);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                    importType === t.type
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-950'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{t.icon}</span>
                    {importType === t.type && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold block">{t.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{t.count} Records</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 & 4: Upload CSV & Validate */}
          <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                STEP 3 & 4: UPLOAD & VALIDATE
              </span>
              <h2 className="text-sm font-bold text-white">Upload Your Prepared CSV File</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full md:w-auto px-5 py-3 bg-slate-950 hover:bg-slate-800 border border-dashed border-slate-700 hover:border-slate-500 text-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-3 transition-all"
              >
                <span className="text-lg">📁</span>
                <span>{csvFile ? `Selected: ${csvFile.name}` : 'Browse or Drop CSV File'}</span>
              </button>

              {csvFile && (
                <button
                  onClick={handleValidateCsv}
                  disabled={isValidating}
                  className="w-full md:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
                >
                  <span>{isValidating ? '⏳' : '⚡'}</span>
                  <span>{isValidating ? 'Validating CSV Structure...' : 'Validate & Preview Data'}</span>
                </button>
              )}
            </div>

            {/* Strict Policy Reminder */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2.5 text-[11px] text-amber-300">
              <span>🛡️</span>
              <span>
                <strong>Data Overwrite Protection:</strong> Existing records with identical IDs/keys are strictly <strong>SKIPPED</strong> and never silently replaced.
              </span>
            </div>
          </div>

          {/* Step 5: Validation Result & Preview Table */}
          {validationData && (
            <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                    STEP 5: VALIDATION SUMMARY & PREVIEW
                  </span>
                  <h2 className="text-sm font-bold text-white">Parsed {validationData.totalRows} Data Rows</h2>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {validationData.errors.length > 0 && (
                    <button
                      onClick={handleDownloadErrorCsv}
                      className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl text-xs font-bold transition-all"
                    >
                      Download Error CSV ({validationData.errors.length})
                    </button>
                  )}

                  {validationData.validCount > 0 && (
                    <button
                      onClick={() => setShowConfirmModal(true)}
                      className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                    >
                      <span>🚀</span>
                      <span>Confirm & Import {validationData.validCount} Valid Records</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Badges Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Total Rows</span>
                  <span className="text-lg font-black text-white">{validationData.totalRows}</span>
                </div>
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block">Valid New Records</span>
                  <span className="text-lg font-black text-emerald-400">{validationData.validCount}</span>
                </div>
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-amber-400 uppercase block">Duplicates (Skipped)</span>
                  <span className="text-lg font-black text-amber-400">{validationData.duplicateCount}</span>
                </div>
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-red-400 uppercase block">Invalid / Errors</span>
                  <span className="text-lg font-black text-red-400">{validationData.invalidCount}</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono text-[10px] uppercase">
                      <th className="p-3">Row</th>
                      <th className="p-3">Identifier</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Summary Details</th>
                      <th className="p-3">Action Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {validationData.preview.slice(0, 50).map((row) => (
                      <tr key={row.rowNumber} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-3 text-slate-500">#{row.rowNumber}</td>
                        <td className="p-3 text-white font-bold">{row.identifier}</td>
                        <td className="p-3">
                          {row.status === 'VALID' && (
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              VALID NEW
                            </span>
                          )}
                          {row.status === 'DUPLICATE' && (
                            <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              DUPLICATE (SKIP)
                            </span>
                          )}
                          {row.status === 'INVALID' && (
                            <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 border border-red-500/30">
                              ERROR
                            </span>
                          )}
                        </td>
                        <td className="p-3 text-slate-300 truncate max-w-xs font-sans">
                          {row.data.name || row.data.customername || row.data['customer name'] || row.data.productname || Object.values(row.data).slice(0, 3).join(' | ')}
                        </td>
                        <td className="p-3 text-[11px] font-sans">
                          {row.status === 'VALID' && (
                            <span className="text-emerald-400">Ready for durable import</span>
                          )}
                          {row.status === 'DUPLICATE' && (
                            <span className="text-amber-400">{row.message || 'Skipped duplicate'}</span>
                          )}
                          {row.status === 'INVALID' && (
                            <span className="text-red-400">{row.errors?.join(', ') || 'Validation error'}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Execution Result Banner */}
          {executionData && (
            <div className="p-6 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="text-base font-bold text-white">Import Execution Completed Successfully</h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Processed at {new Date(executionData.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Total Processed</span>
                  <span className="text-lg font-black text-white">{executionData.totalRows}</span>
                </div>
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block">Imported Successfully</span>
                  <span className="text-lg font-black text-emerald-400">{executionData.importedCount}</span>
                </div>
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-amber-400 uppercase block">Skipped Duplicates</span>
                  <span className="text-lg font-black text-amber-400">{executionData.skippedDuplicatesCount}</span>
                </div>
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-red-400 uppercase block">Failed Rows</span>
                  <span className="text-lg font-black text-red-400">{executionData.failedCount}</span>
                </div>
              </div>

              {executionData.errors.length > 0 && (
                <div className="pt-2">
                  <button
                    onClick={handleDownloadErrorCsv}
                    className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <span>📑</span>
                    <span>Download Execution Error Log ({executionData.errors.length})</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {showConfirmModal && validationData && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-base font-bold text-white">Confirm Bulk Import Execution</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              You are about to persist <strong>{validationData.validCount} valid new records</strong> into Barakah Al Rizq database for <strong>{importType.toUpperCase()}</strong>.
            </p>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[11px] font-mono space-y-1 text-slate-400">
              <div className="flex justify-between">
                <span>Valid to Import:</span>
                <span className="text-emerald-400 font-bold">{validationData.validCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Duplicates to Skip:</span>
                <span className="text-amber-400 font-bold">{validationData.duplicateCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Invalid Errors:</span>
                <span className="text-red-400 font-bold">{validationData.invalidCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteImport}
                disabled={isImporting}
                className="flex-1 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black shadow-lg shadow-emerald-500/20"
              >
                {isImporting ? 'Importing...' : 'Yes, Execute Import'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
