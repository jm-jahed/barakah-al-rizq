'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Terminal, Cpu, Server, ShieldCheck, Filter, RefreshCw, CheckCircle2, Clock, Search, Layers, Bot, AlertTriangle, Play } from 'lucide-react';
import { COMMAND_CENTER_METRICS, TELEMETRY_FEED, TelemetryLog, AI_AGENTS } from '@/data/tensorisData';

interface TensorisCommandCenterProps {
  onOpenModal: (intent?: string) => void;
}

export const TensorisCommandCenter: React.FC<TensorisCommandCenterProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'agents' | 'topology' | 'testbench'>('telemetry');
  const [logs, setLogs] = useState<TelemetryLog[]>(TELEMETRY_FEED);
  const [filterAgent, setFilterAgent] = useState<string>('ALL');
  const [isLiveStreaming, setIsLiveStreaming] = useState<boolean>(true);
  const [customPrompt, setCustomPrompt] = useState<string>('Analyze UAE Port trade volume and flag demurrage risks for Q3');
  const [evalResult, setEvalResult] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  // Periodic streaming simulation
  useEffect(() => {
    if (!isLiveStreaming) return;
    const interval = setInterval(() => {
      const randomAgents = ['KRONOS-Quant', 'AURA-Research', 'SYNAPSE-Ops', 'SENTINEL-Risk', 'VECTRA-Route'];
      const randomEvents = [
        'Evaluated 28,400 FX tick events against Central Bank curve',
        'Auto-reconciled SAP S/4HANA invoice batch #DXB-9182',
        'Validated cryptographic signature on DIFC trade agreement',
        'Optimized Etihad Rail cold-chain route schedule',
        'Intercepted anomalous model token sequence; auto-neutralized'
      ];
      const agent = randomAgents[Math.floor(Math.random() * randomAgents.length)];
      const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;

      const newLog: TelemetryLog = {
        id: `LOG-${Math.floor(Math.random() * 9000 + 1000)}`,
        timestamp: timeStr,
        agent,
        event,
        status: Math.random() > 0.3 ? 'SUCCESS' : 'GUARDRAIL_PASSED',
        latency: `${(Math.random() * 12 + 2).toFixed(1)}ms`,
        payloadSize: `${Math.floor(Math.random() * 200 + 12)}KB`
      };

      setLogs(prev => [newLog, ...prev.slice(0, 14)]);
    }, 2800);

    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  const filteredLogs = filterAgent === 'ALL' ? logs : logs.filter(l => l.agent.includes(filterAgent));

  const handleRunEvaluation = () => {
    setIsEvaluating(true);
    setEvalResult(null);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvalResult('Inference Complete · Routed via DeepSeek-R1 Sovereign Enclave · 0.00% Hallucination · 18 Demurrage exceptions pre-cleared with Dubai Trade.');
    }, 1200);
  };

  return (
    <section id="command-center" className="relative py-24 bg-[#020617] text-slate-100 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE AI COMMAND CENTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real-Time Sovereign Cognitive Telemetry
            </h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              Monitor active inference throughput, multi-agent execution queues, memory vector graphs, and cryptographic security guardrails in real time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLiveStreaming(!isLiveStreaming)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                isLiveStreaming
                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isLiveStreaming ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
              <span>{isLiveStreaming ? 'LIVE TELEMETRY ON' : 'TELEMETRY PAUSED'}</span>
            </button>

            <button
              onClick={() => onOpenModal('Enterprise Command Center Architecture Demo')}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-lg shadow-cyan-500/20"
            >
              Request Custom Enclave
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {COMMAND_CENTER_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-4 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 space-y-1"
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase truncate">
                {metric.label}
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-emerald-400 font-semibold">{metric.change}</span>
                <span className="text-slate-500 truncate">{metric.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Master Command Center Cockpit Container */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-[#020617] border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl overflow-hidden">
          {/* Top Bar Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-1 sm:gap-2">
              {[
                { id: 'telemetry', label: 'Live Telemetry Feed', icon: Activity },
                { id: 'agents', label: 'Active Agent Matrix', icon: Bot },
                { id: 'topology', label: 'Memory Vector Graph', icon: Layers },
                { id: 'testbench', label: 'Inference Testbench', icon: Terminal }
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                      isSelected
                        ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-950/50'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Filter Bar for Telemetry */}
            {activeTab === 'telemetry' && (
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-500">Filter Agent:</span>
                <select
                  value={filterAgent}
                  onChange={(e) => setFilterAgent(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-xs font-mono focus:outline-none focus:border-cyan-500"
                >
                  <option value="ALL">All Agents</option>
                  <option value="KRONOS">KRONOS-Quant</option>
                  <option value="AURA">AURA-Research</option>
                  <option value="SYNAPSE">SYNAPSE-Ops</option>
                  <option value="SENTINEL">SENTINEL-Risk</option>
                  <option value="VECTRA">VECTRA-Route</option>
                </select>
              </div>
            )}
          </div>

          {/* Dynamic Cockpit Content */}
          <div className="p-4 sm:p-6 min-h-[420px]">
            {/* TAB 1: Live Telemetry */}
            {activeTab === 'telemetry' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="hidden sm:grid grid-cols-12 gap-4 pb-2 text-[11px] text-slate-500 uppercase tracking-wider border-b border-slate-800/80 px-3">
                  <div className="col-span-2">Timestamp</div>
                  <div className="col-span-2">Agent ID</div>
                  <div className="col-span-5">Event & Transaction Description</div>
                  <div className="col-span-2 text-center">Status</div>
                  <div className="col-span-1 text-right">Latency</div>
                </div>

                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                  <AnimatePresence initial={false}>
                    {filteredLogs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 p-3 rounded-xl bg-slate-950/70 border border-slate-850 hover:border-slate-700 items-center transition-colors"
                      >
                        <div className="col-span-2 text-slate-400 text-[11px] flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-slate-600" />
                          <span>{log.timestamp}</span>
                        </div>
                        <div className="col-span-2 text-cyan-300 font-bold truncate">
                          {log.agent}
                        </div>
                        <div className="col-span-5 text-slate-200 truncate">
                          {log.event}
                        </div>
                        <div className="col-span-2 flex justify-start sm:justify-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            log.status === 'SUCCESS'
                              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                              : log.status === 'GUARDRAIL_PASSED'
                              ? 'bg-blue-950/80 text-blue-300 border border-blue-500/30'
                              : 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                          }`}>
                            {log.status}
                          </span>
                        </div>
                        <div className="col-span-1 text-right text-emerald-400 font-semibold text-[11px]">
                          {log.latency}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* TAB 2: Active Agent Matrix */}
            {activeTab === 'agents' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {AI_AGENTS.map((agent) => (
                  <div key={agent.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <h4 className="text-sm font-bold text-white font-mono">{agent.name}</h4>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                        {agent.executionMetrics.avgLatency}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">{agent.specialization}</p>
                    <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-slate-900 text-slate-400">
                      <span>Decisions: {agent.executionMetrics.decisionsPerMin}/min</span>
                      <span className="text-emerald-400">{agent.executionMetrics.successRate}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: Memory Vector Graph */}
            {activeTab === 'topology' && (
              <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-4">
                <div className="max-w-md mx-auto space-y-2">
                  <Layers className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Hybrid Vector-Knowledge Graph Fabric</h4>
                  <p className="text-xs text-slate-400">
                    Real-time synchronization across 184.2M high-dimensional entity vectors (4096-d) with sub-2.0ms semantic cosine recall.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left font-mono text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-slate-500">VECTOR EMBEDDING ENGINE</div>
                    <div className="text-sm font-bold text-cyan-300 mt-1">HNSW-Qdrant Sovereign Mesh</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-slate-500">TEMPORAL KNOWLEDGE GRAPH</div>
                    <div className="text-sm font-bold text-emerald-300 mt-1">Neo4j Enterprise Multi-Hop</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-slate-500">DATA RESIDENCY LOCK</div>
                    <div className="text-sm font-bold text-amber-300 mt-1">Dubai Equinix & Masdar Bare-Metal</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Inference Testbench */}
            {activeTab === 'testbench' && (
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Test Enterprise Directive Query:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-700 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs font-mono focus:outline-none focus:border-cyan-500"
                      placeholder="Enter prompt for sovereign AI swarm..."
                    />
                    <button
                      onClick={handleRunEvaluation}
                      disabled={isEvaluating}
                      className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1.5 disabled:opacity-50"
                    >
                      {isEvaluating ? (
                        <>
                          <Activity className="w-3.5 h-3.5 animate-spin" />
                          <span>Routing...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Run Test</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {evalResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs space-y-2"
                  >
                    <div className="flex items-center gap-2 font-bold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>TELEMETRY INFERENCE CONFIRMED</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans">{evalResult}</p>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
