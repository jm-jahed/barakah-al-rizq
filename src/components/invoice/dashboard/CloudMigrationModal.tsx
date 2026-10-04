"use client";

import React, { useState } from "react";
import { Cloud, CheckCircle2, AlertTriangle, RefreshCw, X, Database, ShieldCheck } from "lucide-react";
import { InvoiceStorageService } from "@/services/invoiceStorage";

interface CloudMigrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CloudMigrationModal({ isOpen, onClose, onSuccess }: CloudMigrationModalProps) {
  const [isMigrating, setIsMigrating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const clients = InvoiceStorageService.getClients();
  const invoices = InvoiceStorageService.getInvoices();
  const payments = InvoiceStorageService.getPayments();

  const handleStartMigration = async () => {
    setIsMigrating(true);
    setError(null);
    try {
      const res = await InvoiceStorageService.uploadLocalToCloud();
      if (res.success) {
        setResult(res);
        onSuccess();
      } else {
        setError(res.error || "Migration failed. Please verify your MongoDB connection string.");
      }
    } catch (err: any) {
      setError(err.message || "Network error occurred.");
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                MongoDB Atlas Cloud Migration
              </h3>
              <p className="text-xs text-slate-500">
                Phase 3 Persistent Cloud Database Sync
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {!result ? (
            <>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                This process uploads your existing browser records directly to your secure <strong>MongoDB Atlas Cloud Cluster</strong> with duplicate protection. Existing records in browser storage will be preserved.
              </p>

              {/* Records Found Box */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Verified Local Records Ready to Migrate:
                </span>
                <div className="grid grid-cols-3 gap-3 text-center font-mono">
                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-lg font-black text-slate-900 dark:text-white block">{clients.length}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Clients</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-lg font-black text-emerald-600 block">{invoices.length}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Invoices</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-lg font-black text-blue-600 block">{payments.length}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Payments</span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl flex items-start gap-2 text-rose-700 dark:text-rose-400 text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero Duplicate Protection: Upsert keys prevent double insertion.</span>
              </div>
            </>
          ) : (
            <div className="text-center py-4 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Migration Successfully Completed!
              </h4>
              <p className="text-xs text-slate-500">
                All records have been synchronized into MongoDB Atlas with zero duplicates.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-800 dark:text-emerald-300">
                Cloud Invoices: {result.cloudTotals?.invoices ?? invoices.length} | Clients: {result.cloudTotals?.clients ?? clients.length} | Payments: {result.cloudTotals?.payments ?? payments.length}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50 dark:bg-slate-800/50">
          {!result ? (
            <>
              <button
                onClick={onClose}
                disabled={isMigrating}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleStartMigration}
                disabled={isMigrating}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md transition disabled:opacity-50 cursor-pointer"
              >
                {isMigrating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Migrating to Cloud...</span>
                  </>
                ) : (
                  <>
                    <Database className="w-4 h-4" />
                    <span>Confirm & Upload to Cloud</span>
                  </>
                )}
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 rounded-xl cursor-pointer"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
