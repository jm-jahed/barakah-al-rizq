'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Search, DollarSign, Cpu, ShieldAlert, Users, Truck, ArrowRight, CheckCircle, Layers, Activity, Terminal, Play, RotateCcw, ShieldCheck } from 'lucide-react';
import { AI_AGENTS, AiAgent } from '@/data/tensorisData';

interface TensorisAgentSystemProps {
  onOpenModal: (agentName?: string) => void;
}

export const TensorisAgentSystem: React.FC<TensorisAgentSystemProps> = ({ onOpenModal }) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(AI_AGENTS[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulatingTrace, setIsSimulatingTrace] = useState<boolean>(false);

  const currentAgent = AI_AGENTS.find(a => a.id === selectedAgentId) || AI_AGENTS[0];

  const getAgentIcon = (icon: string) => {
    switch (icon) {
      case 'Search': return Search;
      case 'DollarSign': return DollarSign;
      case 'Cpu': return Cpu;
      case 'ShieldAlert': return ShieldAlert;
      case 'Users': return Users;
      case 'Truck': return Truck;
      default: return Bot;
    }
  };

  const runStepSimulation = () => {
    setIsSimulatingTrace(true);
    setActiveStepIndex(0);
    setTimeout(() => setActiveStepIndex(1), 600);
    setTimeout(() => setActiveStepIndex(2), 1200);
    setTimeout(() => {
      setActiveStepIndex(3);
      setIsSimulatingTrace(false);
    }, 1900);
  };

  return (
    <section id="agents" className="relative py-24 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-900">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Bot className="w-3.5 h-3.5" />
            <span>AUTONOMOUS AGENT ORCHESTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Specialized Autonomous Swarms for Every Business Domain
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Deploy self-coordinating fleets of AI agents equipped with episodic memory, secure sandboxed tool calling, and deterministic human-in-the-loop escalation.
          </p>
        </div>

        {/* Agent Fleet Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {AI_AGENTS.map((agent) => {
            const Icon = getAgentIcon(agent.icon);
            const isSelected = selectedAgentId === agent.id;

            return (
              <button
                key={agent.id}
                onClick={() => {
                  setSelectedAgentId(agent.id);
                  setActiveStepIndex(0);
                }}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 to-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg border ${
                    isSelected ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div>
                  <div className="text-xs font-bold text-white truncate">{agent.name}</div>
                  <div className="text-[10px] font-mono text-slate-500 truncate">{agent.role}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Agent Interactive Workspace */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAgent.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-[#030712] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl"
          >
            {/* Left Side: Agent Profile & Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${currentAgent.avatarGradient} text-white shadow-lg shadow-cyan-950/50`}>
                  {React.createElement(getAgentIcon(currentAgent.icon), { className: 'w-7 h-7' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">{currentAgent.name}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                      {currentAgent.autonomyLevel}
                    </span>
                  </div>
                  <div className="text-sm font-mono text-cyan-400 mt-0.5">{currentAgent.role}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Specialization:</div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {currentAgent.specialization}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">System Directives:</div>
                <p className="text-xs font-mono text-slate-400 italic p-3 rounded-xl bg-slate-950 border border-slate-800 leading-relaxed">
                  &ldquo;{currentAgent.systemPrompt}&rdquo;
                </p>
              </div>

              {/* Execution Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500">AVG INFERENCE LATENCY</div>
                  <div className="text-lg font-bold font-mono text-cyan-300 mt-0.5">{currentAgent.executionMetrics.avgLatency}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500">DECISION SUCCESS RATE</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">{currentAgent.executionMetrics.successRate}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500">THROUGHPUT DECISIONS/MIN</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">{currentAgent.executionMetrics.decisionsPerMin}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500">TOKENS PROCESSED / DAY</div>
                  <div className="text-lg font-bold font-mono text-purple-300 mt-0.5">{currentAgent.executionMetrics.tokensProcessed}</div>
                </div>
              </div>

              {/* Enterprise Connectors */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Connected Enterprise APIs:</div>
                <div className="flex flex-wrap gap-1.5">
                  {currentAgent.enterpriseIntegrations.map((conn, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {conn}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Step-by-Step Autonomous Execution Trace */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300 font-bold uppercase">
                    Execution Trace & Tool Invocation Sequence
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={runStepSimulation}
                    disabled={isSimulatingTrace}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors disabled:opacity-50"
                  >
                    <Play className="w-3 h-3" />
                    <span>{isSimulatingTrace ? 'Running...' : 'Simulate Workflow'}</span>
                  </button>
                  <button
                    onClick={() => setActiveStepIndex(0)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Interactive Step Cards */}
              <div className="space-y-3">
                {currentAgent.sampleWorkflow.map((step, idx) => {
                  const isActive = activeStepIndex === idx;
                  const isPast = activeStepIndex > idx;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-950/40 border-cyan-500/50 shadow-md shadow-cyan-950/40'
                          : isPast
                          ? 'bg-slate-950/80 border-emerald-500/30'
                          : 'bg-slate-950/60 border-slate-850 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                            isPast 
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                              : isActive 
                              ? 'bg-cyan-500 text-slate-950' 
                              : 'bg-slate-900 text-slate-400'
                          }`}>
                            0{step.step}
                          </span>
                          <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                          Tool: {step.toolUsed}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 mt-2 font-mono leading-relaxed">
                        {step.action}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-slate-850 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500">Output Summary:</span>
                        <span className="text-emerald-400 font-semibold">{step.outputSummary}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Deploy Action */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <div className="text-xs font-mono text-slate-400">
                  Ready to deploy <strong>{currentAgent.name}</strong> inside your private VPC?
                </div>
                <button
                  onClick={() => onOpenModal(`Deploy Agent: ${currentAgent.name}`)}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1.5"
                >
                  <span>Provision Agent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
