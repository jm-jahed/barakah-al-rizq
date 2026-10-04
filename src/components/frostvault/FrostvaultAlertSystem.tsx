'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertTriangle, CheckCircle2, Clock, Eye, Check, X, Shield } from 'lucide-react';
import { FROSTVAULT_ALERTS, SmartAlert } from '@/data/frostvaultData';

export const FrostvaultAlertSystem: React.FC = () => {
  const [alerts, setAlerts] = useState<SmartAlert[]>(FROSTVAULT_ALERTS);
  const [selectedAlert, setSelectedAlert] = useState<SmartAlert | null>(null);

  const handleAcknowledge = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'Acknowledged' } : a))
    );
    if (selectedAlert?.id === id) {
      setSelectedAlert((prev) => (prev ? { ...prev, status: 'Acknowledged' } : null));
    }
  };

  const handleResolve = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'Resolved' } : a))
    );
    if (selectedAlert?.id === id) {
      setSelectedAlert((prev) => (prev ? { ...prev, status: 'Resolved' } : null));
    }
  };

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b120c] border border-[#5c301b] text-xs text-[#f59e0b] font-mono uppercase tracking-[0.25em] mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>SMART ALERT SYSTEM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Find the Change Before It Becomes a Problem.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Predictive anomaly detection monitors micro-shifts in temperature delta, door aperture duration, and humidity equilibrium before product integrity is impacted.
          </p>
        </div>

        {/* Alerts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {alerts.map((alert) => {
            const isResolved = alert.status === 'Resolved';
            const isAcknowledged = alert.status === 'Acknowledged';

            return (
              <motion.div
                key={alert.id}
                layout
                onClick={() => setSelectedAlert(alert)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isResolved
                    ? 'bg-[#08121a]/60 border-[#15273b] opacity-60'
                    : isAcknowledged
                    ? 'bg-[#0b1724] border-[#0284c7]/50'
                    : 'bg-[#121922] border-[#f59e0b]/40 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold ${
                        alert.severity === 'Critical'
                          ? 'bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/40'
                          : alert.severity === 'Warning'
                          ? 'bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/40'
                          : 'bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40'
                      }`}>
                        {alert.type}
                      </span>
                      <span className="text-xs font-mono text-[#64748b]">Sensor: {alert.sensorId}</span>
                    </div>

                    <span className={`text-xs font-mono font-medium ${
                      isResolved
                        ? 'text-[#4ade80]'
                        : isAcknowledged
                        ? 'text-[#38bdf8]'
                        : 'text-[#f59e0b]'
                    }`}>
                      {alert.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#f8fafc] mb-1">
                    {alert.title}
                  </h3>
                  <div className="text-xs font-mono text-[#38bdf8] mb-3">
                    {alert.zone} · {alert.timestamp}
                  </div>

                  <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-4">
                    {alert.details}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-mono p-3 rounded-xl bg-[#070e16] border border-[#142539] mb-4">
                    <div>
                      <span className="text-[#64748b] block text-[10px]">CURRENT METRIC</span>
                      <strong className="text-[#f8fafc] font-normal">{alert.currentMetric}</strong>
                    </div>
                    <div>
                      <span className="text-[#64748b] block text-[10px]">SAFETY THRESHOLD</span>
                      <strong className="text-[#38bdf8] font-normal">{alert.thresholdMetric}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#162a3f] flex items-center justify-between">
                  <span className="text-[11px] text-[#64748b] font-mono">
                    Click card for full telemetry details
                  </span>

                  <div className="flex items-center gap-2">
                    {!isAcknowledged && !isResolved && (
                      <button
                        onClick={(e) => handleAcknowledge(alert.id, e)}
                        className="px-3 py-1.5 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-semibold transition-colors"
                      >
                        Acknowledge
                      </button>
                    )}
                    {!isResolved && (
                      <button
                        onClick={(e) => handleResolve(alert.id, e)}
                        className="px-3 py-1.5 rounded-lg bg-[#15803d] hover:bg-[#166534] text-[#ffffff] text-xs font-mono font-semibold transition-colors flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Resolve</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Alert Detail Modal */}
      {selectedAlert && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0c1622] border border-[#1c3858] p-6 sm:p-8 text-[#f1f5f9] shadow-2xl"
            >
              <button
                onClick={() => setSelectedAlert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#102030] text-[#64748b] hover:text-[#ffffff] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#f59e0b] mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{selectedAlert.type} · {selectedAlert.severity}</span>
              </div>

              <h3 className="text-xl font-bold text-[#f8fafc] mb-1">
                {selectedAlert.title}
              </h3>
              <div className="text-xs font-mono text-[#38bdf8] mb-4">
                {selectedAlert.zone} · Node {selectedAlert.sensorId}
              </div>

              <p className="text-xs text-[#94a3b8] leading-relaxed mb-6 font-light">
                {selectedAlert.details}
              </p>

              <div className="p-4 rounded-xl bg-[#081018] border border-[#14263b] space-y-2 text-xs font-mono mb-6">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Observed Telemetry:</span>
                  <span className="text-[#f8fafc] font-bold">{selectedAlert.currentMetric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Configured Setpoint:</span>
                  <span className="text-[#38bdf8]">{selectedAlert.thresholdMetric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Incident Status:</span>
                  <span className="text-[#4ade80]">{selectedAlert.status}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedAlert(null)}
                  className="flex-1 py-2.5 rounded-xl bg-[#142538] hover:bg-[#1a334d] text-xs font-mono text-[#cbd5e1] transition-colors"
                >
                  Close Window
                </button>
                {selectedAlert.status !== 'Resolved' && (
                  <button
                    onClick={(e) => {
                      handleResolve(selectedAlert.id, e);
                      setSelectedAlert(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-xs font-mono font-bold text-[#ffffff] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Confirm Resolved</span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </section>
  );
};
