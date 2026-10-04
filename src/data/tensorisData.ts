export interface ArchitectureLayer {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  features: {
    name: string;
    description: string;
    metric: string;
  }[];
  technicalDetails: {
    label: string;
    value: string;
  }[];
}

export interface AiCapability {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  impactMetric: string;
  features: string[];
  techStack: string[];
  codeSample: string;
}

export interface AiAgent {
  id: string;
  name: string;
  role: string;
  specialization: string;
  autonomyLevel: 'Autonomous' | 'Human-Supervised' | 'Deterministic Enclave';
  status: 'Active' | 'Executing' | 'Standby';
  avatarGradient: string;
  icon: string;
  systemPrompt: string;
  executionMetrics: {
    avgLatency: string;
    successRate: string;
    decisionsPerMin: string;
    tokensProcessed: string;
  };
  sampleWorkflow: {
    step: number;
    title: string;
    action: string;
    toolUsed: string;
    outputSummary: string;
  }[];
  enterpriseIntegrations: string[];
}

export interface CommandMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  subtext: string;
}

export interface TelemetryLog {
  id: string;
  timestamp: string;
  agent: string;
  event: string;
  status: 'SUCCESS' | 'IN_PROGRESS' | 'REASONING' | 'GUARDRAIL_PASSED';
  latency: string;
  payloadSize: string;
}

export interface IndustrySolution {
  id: string;
  industry: string;
  tagline: string;
  description: string;
  icon: string;
  uaeContext: string;
  keyUseCases: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  architectureHighlight: string;
}

export interface WorkflowStage {
  step: string;
  name: string;
  title: string;
  description: string;
  technicalMechanism: string;
  icon: string;
  outputArtifact: string;
}

export interface SecurityPillar {
  id: string;
  title: string;
  standard: string;
  description: string;
  icon: string;
  complianceBadges: string[];
  points: string[];
}

export interface TechEcosystemCategory {
  category: string;
  description: string;
  technologies: {
    name: string;
    role: string;
    latency: string;
    status: string;
  }[];
}

export interface CaseStudyDetail {
  client: string;
  sector: string;
  location: string;
  scale: string;
  challenge: string;
  cognitiveSolution: string;
  outcomes: {
    metric: string;
    label: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
}

export interface EnterprisePlan {
  id: string;
  name: string;
  tier: string;
  tagline: string;
  aedBaseMonthly: number;
  setupFeeAED: number;
  inferenceAllowance: string;
  dedicatedAgents: number;
  highlighted?: boolean;
  features: string[];
  sla: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Platform' | 'Sovereignty & Security' | 'Integration' | 'Economics';
}

/* =========================================================================
   TENSORIS ENTERPRISE DATASET
========================================================================= */

export const TENSORIS_BRAND = {
  name: 'TENSORIS',
  legalName: 'TENSORIS Cognitive Technologies LLC',
  tagline: 'Enterprise Cognitive Infrastructure & Autonomous Agent Matrix',
  positioning: 'Transforming enterprise data complexity into sovereign real-time reasoning, autonomous multi-agent orchestration, and deterministic business outcomes.',
  headquarters: 'DIFC Innovation One, Level 14, Dubai, United Arab Emirates',
  satelliteOffices: 'Abu Dhabi ADGM & Masdar City AI Enclave',
  contactPhone: '+971 4 820 9000',
  whatsappDisplay: '+971 52 339 4001',
  whatsappDirect: '+971523394001',
  supportEmail: 'enterprise@tensoris.ae',
  foundedYear: '2024',
  sovereigntyStandard: 'UAE National AI Strategy 2031 & TDRA Cloud Security Framework Level 3'
};

export const ENTERPRISE_METRICS = [
  { label: 'Tensor Inferences / Day', value: '850M+', sub: 'Sub-12ms latency SLA' },
  { label: 'Decision Acceleration', value: '94.2%', sub: 'Cycle compression vs manual' },
  { label: 'Autonomous Agents Live', value: '14,800+', sub: 'Across 48 enterprise clusters' },
  { label: 'Sovereign Enclave Uptime', value: '99.999%', sub: 'High Availability Multi-Region' },
  { label: 'Enterprise Value Created', value: 'AED 4.8B+', sub: 'Documented client ROI' }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'intelligence',
    tag: '01 / REASONING',
    title: 'Cognitive Intelligence Layer',
    subtitle: 'Multi-Modal Reasoning & Foundation Inference Engine',
    description: 'Ultra-low latency inference routing across custom fine-tuned MoE models, DeepSeek-R1 sovereign reasoning weights, and proprietary domain neural embeddings.',
    badge: 'Sub-12ms Latency',
    color: 'from-cyan-500/20 to-blue-600/20',
    features: [
      { name: 'Dynamic Inference Router', description: 'Real-time complexity classification routing queries to optimal model topologies.', metric: '<8ms Route' },
      { name: 'Sovereign MoE Ensembles', description: 'Domain-specialized mixture-of-experts trained on proprietary UAE & global enterprise corpora.', metric: '128 Experts' },
      { name: 'Self-Correcting Reasoning Loops', description: 'Tree-of-thought verification engine evaluating counterfactual validity before output commitment.', metric: '99.8% Accuracy' }
    ],
    technicalDetails: [
      { label: 'Primary Inference Engine', value: 'Tensoris-NeuraCore v4.2' },
      { label: 'Quantization Framework', value: 'FP8 / INT4 FlashAttention-3' },
      { label: 'Context Window', value: '1,000,000 Tokens Native' }
    ]
  },
  {
    id: 'data',
    tag: '02 / FABRIC',
    title: 'Enterprise Knowledge Fabric',
    subtitle: 'Unified Vector-Graph Neural Memory & Real-Time Sync',
    description: 'Harmonizes structured ERP tables, unstructured legal document vaults, real-time telemetric streams, and organizational graph hierarchies into a queryable semantic vector-graph.',
    badge: 'Hybrid Vector-Graph',
    color: 'from-emerald-500/20 to-teal-600/20',
    features: [
      { name: 'Dynamic Graph-RAG Pipeline', description: 'Combines dense vector search with hierarchical knowledge graph traversal for zero-hallucination factual grounding.', metric: '0.001% Hallucination' },
      { name: 'Sub-Second Enterprise Connectors', description: 'Bidirectional change-data-capture pipelines for SAP S/4HANA, Oracle, Salesforce, and Snowflake.', metric: '500k Ops/sec' },
      { name: 'Semantic Privacy Scrubber', description: 'Real-time tokenized redaction of PII, financial secrets, and confidential national records at the edge.', metric: 'AES-256 GCM' }
    ],
    technicalDetails: [
      { label: 'Vector Indexing Engine', value: 'HNSW-Qdrant Distributed Fabric' },
      { label: 'Knowledge Graph Topology', value: 'Temporal Knowledge Graph v2.8' },
      { label: 'Embedding Dimensions', value: '4096-d Custom Semantic Space' }
    ]
  },
  {
    id: 'automation',
    tag: '03 / ORCHESTRATION',
    title: 'Autonomous Multi-Agent Swarm',
    subtitle: 'Goal-Directed Tool Execution & Workflow Synthesis',
    description: 'Hierarchical agent matrix where specialized autonomous agents decompose complex business mandates, execute secure API actions, and coordinate across departmental silos.',
    badge: 'Multi-Agent Swarm',
    color: 'from-violet-500/20 to-purple-600/20',
    features: [
      { name: 'Autonomous Tool Invocation', description: 'Deterministic OpenAPI synthesis generating safe execution sandboxes for transactional enterprise systems.', metric: '250+ Tools' },
      { name: 'Consensus Decision Matrix', description: 'Multi-agent adversarial review where audit agents cross-examine proposed actions before execution.', metric: '3-Layer Audit' },
      { name: 'Human-in-the-Loop Gateway', description: 'Granular policy escalation pausing high-risk workflows for executive biometrics or multi-sig approval.', metric: '<15s Escalation' }
    ],
    technicalDetails: [
      { label: 'Orchestration Standard', value: 'Distributed Actor Protocol (DAP)' },
      { label: 'Execution Sandbox', value: 'gVisor Micro-VM Isolated Enclaves' },
      { label: 'State Checkpointing', value: 'Immutable WAL with 1-click Rollback' }
    ]
  },
  {
    id: 'governance',
    tag: '04 / SOVEREIGNTY',
    title: 'Sovereign Governance & Guardrails',
    subtitle: 'Zero-Trust AI Compliance, Explainability & Audit Trail',
    description: 'Comprehensive enterprise defense perimeter enforcing prompt injection protection, mathematical explainability proofs, bias mitigation, and sovereign UAE data residency.',
    badge: 'ISO 42001 & TDRA Tier 3',
    color: 'from-amber-500/20 to-orange-600/20',
    features: [
      { name: 'Cryptographic Audit Trail', description: 'Every reasoning step, embedding match, and tool execution is signed with SHA-256 verifiable provenance.', metric: '100% Traceable' },
      { name: 'Sovereign In-Country Cloud', description: 'Zero outbound foreign data leakage; fully contained in UAE sovereign data centers (G42 / Equinix Dubai).', metric: '100% Onshore' },
      { name: 'Dynamic Guardrail Engine', description: 'Multi-layer semantic filters neutralizing adversarial prompt injection, data exfiltration, and policy breach.', metric: '<1.2ms Overhead' }
    ],
    technicalDetails: [
      { label: 'Compliance Standards', value: 'ISO 42001, SOC2 Type II, UAE AI Council' },
      { label: 'Data Residency', value: 'Dubai & Abu Dhabi Dedicated Bare-Metal' },
      { label: 'Explainability Model', value: 'SHAP / Integrated Gradients Tensor Audit' }
    ]
  }
];

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: 'sovereign-strategy',
    tag: '01',
    title: 'Sovereign AI Infrastructure',
    subtitle: 'Private Enterprise LLM Deployment & Sovereign Data Enclaves',
    description: 'Architecting dedicated, on-premise and sovereign cloud AI computing stacks compliant with UAE national data residency mandates, eliminating external API dependencies.',
    icon: 'ShieldCheck',
    impactMetric: '100% UAE Data Residency',
    features: [
      'Bare-metal GPU cluster configuration (H100/H200 NVLink)',
      'Custom domain pre-training on proprietary enterprise corpus',
      'Zero external data egress with hardware cryptographic isolation',
      'Air-gapped deployment options for critical infrastructure & defence'
    ],
    techStack: ['NVIDIA NeMo', 'vLLM Sovereign', 'Kubernetes GPU Operator', 'TPM 2.0 Enclave'],
    codeSample: `// Sovereign Enclave Model Configuration
const cluster = new SovereignGPUCluster({
  region: 'me-central-uae-dubai-01',
  residency: 'MANDATORY_ONSHORE_DATA',
  securityLevel: 'TDRA_LEVEL_3_DEFENCE',
  computeTopology: { nodes: 16, gpusPerNode: 8, model: 'H200-SXM-141GB' },
  airGappedGateway: true,
  zeroDataEgressPolicy: true
});`
  },
  {
    id: 'intelligent-automation',
    tag: '02',
    title: 'Intelligent Process Automation',
    subtitle: 'End-to-End Enterprise Workflow Autonomous Synthesis',
    description: 'Replacing rigid legacy RPA scripts with adaptive neural cognitive engines that read messy documents, resolve exception edge-cases, and auto-correct transactional errors.',
    icon: 'Activity',
    impactMetric: '88.4% Process Cycle Cut',
    features: [
      'Multi-modal document parsing (PDFs, trade invoices, customs manifests)',
      'Autonomous exception handler predicting and resolving system mismatches',
      'Continuous workflow self-optimization based on telemetry feedback',
      'Zero-code enterprise ERP & CRM connector fabric'
    ],
    techStack: ['Vision Transformers', 'Temporal IO', 'Apache Flink', 'GraphQL Enterprise Mesh'],
    codeSample: `// Dynamic Process Automation Pipeline
const workflow = new CognitivePipeline({
  source: 'SAP_S4HANA_INVOICE_STREAM',
  ocrEngine: 'TensorisMultiModalVision_v4',
  reconciliationLogic: 'AutonomousCrossLedgerMatch',
  exceptionEscalation: 'FinanceAuditAgent'
});
await workflow.orchestrateBatch({ autoCommitConfidence: 0.985 });`
  },
  {
    id: 'agentic-swarms',
    tag: '03',
    title: 'Autonomous AI Agent Swarms',
    subtitle: 'Collaborative Multi-Agent Ecosystems for Complex Mandates',
    description: 'Deploying autonomous swarms of goal-driven AI agents equipped with long-term memory, secure tool calling, reflection loops, and peer-to-peer verification protocols.',
    icon: 'Bot',
    impactMetric: '14,800+ Active Swarms',
    features: [
      'Hierarchical agent management with supervisory master agents',
      'Dynamic sandboxed Python and SQL tool execution environments',
      'Episodic and semantic memory persistence across session lifetimes',
      'Deterministic safety firewalls preventing unauthorized actions'
    ],
    techStack: ['LangGraph Enterprise', 'Custom Actor Engine', 'gVisor Sandboxing', 'Zep Memory Vector'],
    codeSample: `// Multi-Agent Swarm Orchestration
const swarm = new AgentSwarm({
  coordinator: 'MasterStrategyAgent',
  specialists: ['QuantFinanceAgent', 'ComplianceAuditAgent', 'LogisticsRouterAgent'],
  coordinationProtocol: 'CONSENSUS_VOTING_MIN_3',
  maxAutonomousStepLimit: 40
});
const solution = await swarm.executeTask("Optimize Q3 GCC Supply Chain Inventory");`
  },
  {
    id: 'predictive-intelligence',
    tag: '04',
    title: 'Predictive Decision Engines',
    subtitle: 'High-Dimensional Forecasting & Prescriptive Analytics',
    description: 'Moving beyond retrospective dashboards into prescriptive intelligence engines that forecast demand spikes, financial volatility, churn probabilities, and asset degradation.',
    icon: 'TrendingUp',
    impactMetric: '94.2% Forecast Precision',
    features: [
      'Temporal transformer architectures for multi-horizon forecasting',
      'Real-time simulation of market shocks, tariffs, and currency shifts',
      'Automated prescriptive scenario modeling with confidence intervals',
      'Real-time streaming anomaly detection across millions of events/sec'
    ],
    techStack: ['Chronos Foundation Time-Series', 'PyTorch Lightning', 'ClickHouse', 'Kafka Stream'],
    codeSample: `// Real-Time Predictive Risk Engine
const predictor = new PrescriptiveEngine({
  model: 'Tensoris-Chronos-GCC-Macro',
  horizons: ['7D', '30D', '90D', '365D'],
  features: ['DLD_PROPERTY_TRANSACTIONS', 'BRENT_CRUDE_TICKS', 'USD_AED_PEG_STABILITY']
});
const forecast = await predictor.simulateScenario({ oilShock: '+12%', interestRateDelta: '-50bps' });`
  },
  {
    id: 'neural-knowledge-graph',
    tag: '05',
    title: 'Enterprise Neural Knowledge Graph',
    subtitle: 'Contextual Semantic Interconnection of Fragmented Data',
    description: 'Synthesizing all company manuals, legal contracts, board minutes, communications, and database schemas into a unified, queryable cognitive entity relationship graph.',
    icon: 'Network',
    impactMetric: '12M+ Entities Mapped',
    features: [
      'Dynamic entity and relation extraction from multi-source silos',
      'Bi-directional graph traversal combining semantic vector similarity',
      'Real-time access permission inheritance respecting corporate RBAC',
      'Natural language SQL and Cypher query translation with zero latency'
    ],
    techStack: ['Neo4j Enterprise', 'Qdrant Vector Cluster', 'Entity-Relation LLM Embeddings'],
    codeSample: `// Graph-RAG Query Engine
const graphQuery = new SemanticGraphRAG({
  graph: 'EnterpriseGlobalKnowledgeGraph',
  rbacContext: { role: 'CFO_EXECUTIVE', jurisdiction: 'DIFC_DUBAI' },
  retrievalMode: 'HYBRID_VECTOR_AND_GRAPH_HOP_3'
});
const response = await graphQuery.ask("Trace legal exposure across GCC subsidiary contracts");`
  },
  {
    id: 'governance-guardrails',
    tag: '06',
    title: 'AI Governance & Compliance Enclaves',
    subtitle: 'Mathematical Explainability, Alignment & Model Auditing',
    description: 'Providing chief risk officers and regulatory bodies with verifiable mathematical proofs of why an AI reached a decision, ensuring total compliance with global and UAE laws.',
    icon: 'Lock',
    impactMetric: '0% Regulatory Breach',
    features: [
      'Token-level attribution and counterfactual reasoning inspection',
      'Automated bias, toxicity, and hallucinations red-teaming sweeps',
      'Continuous compliance reporting tailored to Central Bank & TDRA standards',
      'Automated kill-switch and circuit breaker triggers on confidence anomaly'
    ],
    techStack: ['SHAP / Captum', 'OpenFGA Policy Engine', 'Continuous Red-Teaming Enclave'],
    codeSample: `// Regulatory Compliance Guardrail
const guardrail = new SovereignGuardrail({
  framework: 'UAE_NATIONAL_AI_ETHICS_2031',
  strictness: 'FINANCIAL_GRADE_ZERO_TOLERANCE',
  circuitBreakerThreshold: 0.95
});
guardrail.onViolation((event) => {
  auditLogger.logCriticalBreach(event);
  emergencyCircuitBreaker.quarantineAgent(event.agentId);
});`
  }
];

export const AI_AGENTS: AiAgent[] = [
  {
    id: 'agent-research',
    name: 'AURA-Research',
    role: 'Deep Cognitive Analyst',
    specialization: 'Multi-jurisdiction market intelligence, competitor synthesis & macro forecasting',
    autonomyLevel: 'Autonomous',
    status: 'Active',
    avatarGradient: 'from-blue-600 to-cyan-500',
    icon: 'Search',
    systemPrompt: 'Deconstruct complex enterprise market queries across 200+ global financial databases, regulatory registries, and proprietary documents with verifiable citation chains.',
    executionMetrics: {
      avgLatency: '142ms',
      successRate: '99.7%',
      decisionsPerMin: '1,420',
      tokensProcessed: '124M/day'
    },
    sampleWorkflow: [
      { step: 1, title: 'Query Ingestion', action: 'Parse unstructured mandate and identify target entities', toolUsed: 'SemanticTokenParser', outputSummary: 'Identified 18 DIFC corporate targets' },
      { step: 2, title: 'Multi-Source Search', action: 'Scan Bloomberg, DLD, and proprietary contract repositories', toolUsed: 'VectorGraphRetriever', outputSummary: '4,280 documents retrieved in 28ms' },
      { step: 3, title: 'Cross-Synthesis', action: 'Evaluate balance sheets, ownership structures, and regulatory filings', toolUsed: 'DeepReasoningEngine', outputSummary: 'Synthesized 9-page investment thesis' },
      { step: 4, title: 'Fact Validation', action: 'Run counterfactual verification loop across primary citations', toolUsed: 'AuditVerifier', outputSummary: '100% citations verified with source timestamps' }
    ],
    enterpriseIntegrations: ['Bloomberg Terminal API', 'DLD Land Registry', 'LexisNexis', 'Snowflake Vault']
  },
  {
    id: 'agent-quant',
    name: 'KRONOS-Quant',
    role: 'Algorithmic Financial Strategist',
    specialization: 'Portfolio stress testing, FX volatility hedging & dynamic liquidity allocation',
    autonomyLevel: 'Autonomous',
    status: 'Active',
    avatarGradient: 'from-emerald-500 to-teal-400',
    icon: 'DollarSign',
    systemPrompt: 'Monitor real-time Treasury liquidity, simulate VaR under extreme geopolitical stress scenarios, and recommend sub-second multi-currency balancing schedules.',
    executionMetrics: {
      avgLatency: '8ms',
      successRate: '99.99%',
      decisionsPerMin: '8,900',
      tokensProcessed: '380M/day'
    },
    sampleWorkflow: [
      { step: 1, title: 'Tick Stream Analysis', action: 'Ingest 50,000 order book ticks/sec across AED, USD, EUR, SAR', toolUsed: 'KafkaStreamProcessor', outputSummary: 'Detected 0.04% cross-rail FX arbitrage window' },
      { step: 2, title: 'Monte Carlo Stress Test', action: 'Execute 100,000 path simulation for 200bps sudden rate hike', toolUsed: 'CUDAParallelMonteCarlo', outputSummary: 'Portfolio downside risk contained to <0.12%' },
      { step: 3, title: 'Optimal Hedging Routing', action: 'Generate synthetic swap allocation minimizing transaction costs', toolUsed: 'ConvexOptimizerEngine', outputSummary: 'Generated AED 14.2M hedging schedule' },
      { step: 4, title: 'ERP Ledger Commit', action: 'Synchronize proposed hedges with SAP S/4HANA Treasury module', toolUsed: 'SAP_Treasury_API', outputSummary: 'Committed with zero slip in 14ms' }
    ],
    enterpriseIntegrations: ['SWIFT Rail', 'Central Bank Gateway', 'SAP S/4HANA Treasury', 'Oracle Cloud Financials']
  },
  {
    id: 'agent-operations',
    name: 'SYNAPSE-Ops',
    role: 'Enterprise Workflow Orchestrator',
    specialization: 'Cross-silo process automation, incident self-healing & ERP task reconciliation',
    autonomyLevel: 'Autonomous',
    status: 'Active',
    avatarGradient: 'from-violet-600 to-indigo-500',
    icon: 'Cpu',
    systemPrompt: 'Orchestrate distributed enterprise workflows across disparate CRM, ERP, HR, and supply chain APIs with zero human intervention and instant failure recovery.',
    executionMetrics: {
      avgLatency: '24ms',
      successRate: '99.85%',
      decisionsPerMin: '4,650',
      tokensProcessed: '210M/day'
    },
    sampleWorkflow: [
      { step: 1, title: 'Event Interception', action: 'Detect incoming customs release notification from Dubai Trade portal', toolUsed: 'WebhookIngestionBroker', outputSummary: 'Container #DXB-94812 cleared JAFZA port' },
      { step: 2, title: 'Warehouse Fleet Dispatch', action: 'Calculate optimal electric fleet routing to Al Quoz Distribution Hub', toolUsed: 'FleetRoutingSolver', outputSummary: 'Dispatched Van #14 with ETA 38 mins' },
      { step: 3, title: 'Inventory Re-allocation', action: 'Update e-commerce warehouse SKUs across 4 regional fulfillment centers', toolUsed: 'ERP_Inventory_Writer', outputSummary: '1,450 units released for instant sale' },
      { step: 4, title: 'Audit Telemetry Sync', action: 'Log timestamped custody transfer with SHA-256 verifiable hash', toolUsed: 'SovereignAuditChain', outputSummary: 'Signed and stored in Dubai data vault' }
    ],
    enterpriseIntegrations: ['Dubai Trade API', 'Salesforce CRM', 'Microsoft Dynamics 365', 'ServiceNow Enterprise']
  },
  {
    id: 'agent-risk',
    name: 'SENTINEL-Risk',
    role: 'Sovereign Compliance & Anti-Fraud Sentry',
    specialization: 'AML transaction graph clustering, sanctions screening & prompt red-teaming',
    autonomyLevel: 'Deterministic Enclave',
    status: 'Active',
    avatarGradient: 'from-amber-500 to-red-500',
    icon: 'ShieldAlert',
    systemPrompt: 'Inspect every transaction, model prompt, and system API call for regulatory violations, fraud topology signatures, and prompt injection attacks.',
    executionMetrics: {
      avgLatency: '4ms',
      successRate: '100%',
      decisionsPerMin: '18,500',
      tokensProcessed: '540M/day'
    },
    sampleWorkflow: [
      { step: 1, title: 'Graph Topology Scan', action: 'Analyze multi-hop transaction graph around new AED 8.5M transfer', toolUsed: 'GraphNeuralFraudSentry', outputSummary: 'Zero links to known sanction entities detected' },
      { step: 2, title: 'AML Velocity Check', action: 'Compare against 180-day baseline historical behavior patterns', toolUsed: 'TemporalAnomalyModel', outputSummary: 'Risk score 0.02 (Extremely Low Risk)' },
      { step: 3, title: 'Prompt Integrity Guard', action: 'Inspect downstream LLM instructions for covert jailbreak vectors', toolUsed: 'AdversarialTokenFilter', outputSummary: 'Zero payload injection detected' },
      { step: 4, title: 'Compliance Sign-off', action: 'Issue cryptographic certificate for Central Bank compliance archive', toolUsed: 'CentralBank_GoAML_Gateway', outputSummary: 'Auto-cleared and registered with zero delay' }
    ],
    enterpriseIntegrations: ['UAE goAML Portal', 'UN & OFAC Sanctions DB', 'WORM Compliant Vault', 'Splunk Enterprise']
  },
  {
    id: 'agent-customer',
    name: 'CONVERSE-VIP',
    role: 'Hyper-Personalized Client Intelligence',
    specialization: 'Omnichannel luxury concierge, sentiment analysis & predictive lifetime value modeling',
    autonomyLevel: 'Human-Supervised',
    status: 'Active',
    avatarGradient: 'from-pink-500 to-rose-500',
    icon: 'Users',
    systemPrompt: 'Deliver bespoke, ultra-high-context luxury client interactions across WhatsApp, email, and mobile apps with nuanced cultural etiquette and instant resolution.',
    executionMetrics: {
      avgLatency: '68ms',
      successRate: '99.4%',
      decisionsPerMin: '2,900',
      tokensProcessed: '160M/day'
    },
    sampleWorkflow: [
      { step: 1, title: 'WhatsApp Audio Ingest', action: 'Transcribe high-net-worth client Arabic audio note into English/Arabic intent', toolUsed: 'WhisperSovereignArabic', outputSummary: 'Requesting private jet transfer to Abu Dhabi F1' },
      { step: 2, title: 'Contextual Preference Lookup', action: 'Retrieve past catering choices, preferred FBO, and family seating notes', toolUsed: 'VIPMemoryGraph', outputSummary: 'Loaded: Vegan catering, Gulfstream G650ER preference' },
      { step: 3, title: 'Flight Manifest Draft', action: 'Assemble 3 optimal flight options with instant pricing in AED', toolUsed: 'AviationDispatcherAPI', outputSummary: 'Drafted VIP itinerary proposal in <45s' },
      { step: 4, title: 'Concierge Dispatch', action: 'Send branded interactive WhatsApp itinerary card with 1-tap Apple Pay', toolUsed: 'WhatsAppCloudEnterprise', outputSummary: 'Delivered and confirmed via biometrics' }
    ],
    enterpriseIntegrations: ['WhatsApp Cloud API', 'HubSpot Enterprise', 'Zendesk VIP', 'Stripe & Nexora Pay']
  },
  {
    id: 'agent-logistics',
    name: 'VECTRA-Route',
    role: 'Predictive Supply Chain & Port Dispatcher',
    specialization: 'Dynamic maritime route optimization, customs clearance & cold-chain telemetry',
    autonomyLevel: 'Autonomous',
    status: 'Active',
    avatarGradient: 'from-cyan-500 to-blue-600',
    icon: 'Truck',
    systemPrompt: 'Predict global shipping delays, optimize multi-modal freight routes across GCC land and sea bridges, and automate customs documentation.',
    executionMetrics: {
      avgLatency: '32ms',
      successRate: '99.8%',
      decisionsPerMin: '3,800',
      tokensProcessed: '190M/day'
    },
    sampleWorkflow: [
      { step: 1, title: 'Suez & Hormuz AIS Feed', action: 'Track 1,200 commercial vessels with weather and geopolitical choke points', toolUsed: 'SatelliteAISIngest', outputSummary: 'Predicted 18-hour congestion delay at Jebel Ali Port' },
      { step: 2, title: 'Dynamic Reroute Solver', action: 'Reroute 42 temperature-sensitive pharmaceuticals via Khalifa Port & Etihad Rail', toolUsed: 'MultiModalTransitOptimizer', outputSummary: 'Preserved cold-chain SLA; saved AED 340,000' },
      { step: 3, title: 'Customs Pre-Clearance', action: 'Generate and submit unified GCC electronic customs declarations', toolUsed: 'Bayan_AbuDhabiCustoms_API', outputSummary: 'Pre-cleared with green lane status' },
      { step: 4, title: 'Customer Telemetry Alert', action: 'Broadcast real-time micro-ETA updates to hospital supply managers', toolUsed: 'PushTelemetryStream', outputSummary: 'Delivered 4 hours ahead of emergency schedule' }
    ],
    enterpriseIntegrations: ['DP World CARGOES', 'Etihad Rail Logistics API', 'IoT Cold-Chain Sensors', 'Oracle SCM']
  }
];

export const COMMAND_CENTER_METRICS: CommandMetric[] = [
  { id: 'inferences', label: 'Active Tensor Operations', value: '48,290 / sec', change: '+14.8%', trend: 'up', subtext: 'Distributed across 16 GPU nodes' },
  { id: 'latency', label: 'Median Inference Latency', value: '9.4 ms', change: '-18.2%', trend: 'up', subtext: 'P99 Latency: 14.8 ms' },
  { id: 'memory', label: 'Knowledge Graph Vectors', value: '184.2M Vectors', change: '+2.4M today', trend: 'up', subtext: '99.98% semantic recall' },
  { id: 'agents', label: 'Swarm Agents Operating', value: '1,420 Active', change: '100% Health', trend: 'neutral', subtext: 'Zero deadlock states' },
  { id: 'guardrails', label: 'Security Breaches Prevented', value: '14,921 Blocked', change: '100% Mitigated', trend: 'up', subtext: 'Zero data exfiltration' },
  { id: 'roi', label: 'Cost Savings Generated', value: 'AED 842k / mo', change: '+24.5%', trend: 'up', subtext: 'Calculated against legacy ops' }
];

export const TELEMETRY_FEED: TelemetryLog[] = [
  { id: 'LOG-9041', timestamp: '14:28:49.102', agent: 'KRONOS-Quant', event: 'Rebalanced AED 14.2M FX hedging portfolio on SAP S/4HANA', status: 'SUCCESS', latency: '8.4ms', payloadSize: '24KB' },
  { id: 'LOG-9040', timestamp: '14:28:48.880', agent: 'SENTINEL-Risk', event: 'Passed goAML Central Bank compliance inspection on batch #8812', status: 'GUARDRAIL_PASSED', latency: '3.1ms', payloadSize: '8KB' },
  { id: 'LOG-9039', timestamp: '14:28:47.310', agent: 'SYNAPSE-Ops', event: 'Triggered autonomous customs manifest reconciliation with JAFZA API', status: 'SUCCESS', latency: '31.2ms', payloadSize: '412KB' },
  { id: 'LOG-9038', timestamp: '14:28:46.042', agent: 'AURA-Research', event: 'Synthesizing 42-page commercial real estate yield model for DIFC fund', status: 'REASONING', latency: '124.0ms', payloadSize: '1.8MB' },
  { id: 'LOG-9037', timestamp: '14:28:45.912', agent: 'VECTRA-Route', event: 'Rerouted 18 cold-chain reefer trucks via Etihad Rail transit hub', status: 'SUCCESS', latency: '18.9ms', payloadSize: '94KB' },
  { id: 'LOG-9036', timestamp: '14:28:44.201', agent: 'CONVERSE-VIP', event: 'Dispatched Arabic luxury itinerary card with Apple Pay to VIP client', status: 'SUCCESS', latency: '44.5ms', payloadSize: '18KB' },
  { id: 'LOG-9035', timestamp: '14:28:43.089', agent: 'SENTINEL-Risk', event: 'Neutralized multi-hop adversarial prompt injection attempt', status: 'GUARDRAIL_PASSED', latency: '1.8ms', payloadSize: '4KB' }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'finance',
    industry: 'Financial Institutions & Sovereign Funds',
    tagline: 'Algorithmic Risk, Automated AML & High-Frequency Treasury Orchestration',
    description: 'Transforming institutional banking with sub-millisecond market modeling, automated Central Bank compliance filings, and autonomous multi-asset treasury rebalancing.',
    icon: 'Landmark',
    uaeContext: 'Engineered specifically for DIFC, ADGM, and UAE Central Bank tier-1 regulatory frameworks with zero data exfiltration.',
    keyUseCases: [
      'Real-time AML & goAML anti-money laundering transaction clustering',
      'Automated credit decisioning with explainable SHAP reasoning proofs',
      'Multi-currency liquidity optimization across AED/USD/EUR/SAR rails',
      'AI-driven algorithmic trading & automated collateral management'
    ],
    metrics: [
      { label: 'AML False Positives', value: '-84.5%' },
      { label: 'Audit Reporting Speed', value: '18x Faster' },
      { label: 'Treasury Yield Uplift', value: '+42 bps' }
    ],
    architectureHighlight: 'Zero-Knowledge MPC Enclaves running on dedicated UAE bare-metal GPUs.'
  },
  {
    id: 'healthcare',
    industry: 'Healthcare Networks & Life Sciences',
    tagline: 'Clinical Decision Acceleration & Autonomous Medical Operations',
    description: 'Empowering hospital groups and bio-laboratories with vision-assisted diagnostics, clinical trial patient matching, and autonomous insurance pre-authorization.',
    icon: 'Activity',
    uaeContext: 'Compliant with DHA, DoH Abu Dhabi, and UAE Health Data Law (Federal Law No. 2 of 2019).',
    keyUseCases: [
      'Multi-modal radiological and histopathological scan segmentation',
      'Autonomous insurance claim submission and denial appeal drafting',
      'Predictive hospital bed occupancy and ICU nurse dispatch schedules',
      'Electronic Health Record (EHR) semantic synthesis across Malaffi and Nabidh'
    ],
    metrics: [
      { label: 'Claim Approval Rate', value: '98.8%' },
      { label: 'Diagnostic Review Time', value: '-62.0%' },
      { label: 'ICU Triage Accuracy', value: '99.4%' }
    ],
    architectureHighlight: 'HIPAA & UAE Health Law isolated enclaves with automated on-the-fly medical de-identification.'
  },
  {
    id: 'logistics',
    industry: 'Logistics, Ports & Global Maritime',
    tagline: 'Predictive Freight Routing, Port Automation & Cold-Chain Telemetry',
    description: 'Synchronizing container terminals, customs authorities, and overland fleet logistics into a single continuous neural optimization loop.',
    icon: 'Ship',
    uaeContext: 'Integrated with DP World CARGOES, JAFZA, Abu Dhabi Ports, and Etihad Rail infrastructure.',
    keyUseCases: [
      'Predictive port congestion and vessel dwell time minimization',
      'Dynamic customs documentation generation with zero error rate',
      'Multi-modal freight route planning under fuel and weather constraints',
      'Real-time IoT temperature anomaly prediction for vaccine and food cold-chains'
    ],
    metrics: [
      { label: 'Fleet Fuel Cost', value: '-19.4%' },
      { label: 'Customs Turnaround', value: 'Sub-3 Mins' },
      { label: 'On-Time Deliveries', value: '99.7%' }
    ],
    architectureHighlight: 'Real-time spatial-temporal graph neural network with satellite AIS telemetry feeds.'
  },
  {
    id: 'real-estate',
    industry: 'Real Estate Developers & Asset Managers',
    tagline: 'Predictive Property Valuation, Land Yields & VIP Buyer Intelligence',
    description: 'Enabling mega-developers and investment syndicates to predict master-community capital appreciation, score off-plan buyers, and automate facility operations.',
    icon: 'Building2',
    uaeContext: 'Pre-integrated with Dubai Land Department (DLD) historical transaction ledgers and UAE zoning models.',
    keyUseCases: [
      'Automated valuation model (AVM) with macro-economic sensitivity factors',
      'Predictive lead scoring converting high-net-worth international investors',
      'Smart building HVAC and energy optimization cutting operational expenditure',
      'Bespoke virtual 3D property concierge closing sales in 18 languages'
    ],
    metrics: [
      { label: 'Lead Conversion Rate', value: '3.4x Uplift' },
      { label: 'Facility Energy Costs', value: '-28.0%' },
      { label: 'Valuation Precision', value: '99.2%' }
    ],
    architectureHighlight: 'Continuous ingestion of spatial GIS, macro yields, and global high-net-worth migration patterns.'
  },
  {
    id: 'retail',
    industry: 'Luxury Retail & E-Commerce Conglomerates',
    tagline: 'Dynamic Demand Elasticity, Autonomous Inventory & VIP Concierge',
    description: 'Elevating regional retail conglomerates with hyper-personalized shopping engines, algorithmic pricing, and autonomous cross-mall inventory transfers.',
    icon: 'ShoppingBag',
    uaeContext: 'Designed for UAE luxury mall operations (Dubai Mall, Galleria) and high-volume regional e-commerce.',
    keyUseCases: [
      'Dynamic pricing optimization reacting to real-time competitor stock',
      'Predictive SKU demand forecasting preventing stockouts during Eid/DSF',
      'AI luxury concierge delivering bespoke conversational commerce',
      'Autonomous return fraud detection and reverse-logistics routing'
    ],
    metrics: [
      { label: 'Cart Conversion', value: '+34.2%' },
      { label: 'Stockout Incidents', value: '-76.0%' },
      { label: 'Customer LTV', value: '+48.5%' }
    ],
    architectureHighlight: 'Real-time multi-modal recommendation engine with sub-15ms edge inference.'
  },
  {
    id: 'government',
    industry: 'Government Entities & Smart Cities',
    tagline: 'Citizen Service Acceleration & Sovereign Decision Intelligence',
    description: 'Powering government ministries and municipalities with automated citizen query resolution, urban planning simulation, and sovereign policy impact analysis.',
    icon: 'Crown',
    uaeContext: 'Directly aligned with the UAE Digital Government Strategy 2025 and UAE National AI Strategy 2031.',
    keyUseCases: [
      'Unified citizen service cognitive agent handling 100,000+ inquiries concurrently',
      'Urban traffic and infrastructure stress simulation under population growth',
      'Automated legislative compliance and public policy economic impact analysis',
      'Sovereign crisis response and emergency resource allocation optimizer'
    ],
    metrics: [
      { label: 'Citizen Wait Times', value: '-92.0%' },
      { label: 'Resolution Rate', value: '98.5%' },
      { label: 'Sovereign Compliance', value: '100% In-Country' }
    ],
    architectureHighlight: 'Isolated sovereign air-gapped deployment on UAE government cloud infrastructure.'
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    name: 'CONNECT',
    title: 'Harmonize Enterprise Data Streams',
    description: 'Non-invasive connectors bridge your legacy SAP, Oracle, SQL, Salesforce, and unstructured document silos into a unified semantic streaming bus.',
    technicalMechanism: 'Zero-ETL Change Data Capture with automated PII redaction and real-time schema mapping.',
    icon: 'Layers',
    outputArtifact: 'Unified Semantic Vector-Graph Memory'
  },
  {
    step: '02',
    name: 'UNDERSTAND',
    title: 'Multi-Modal Contextual Interpretation',
    description: 'Neural perception engines deconstruct complex legal documents, audio streams, financial spreadsheets, and CAD blueprints into clean mathematical representations.',
    technicalMechanism: 'Domain-trained Vision Transformers, OCR-free document parsing, and acoustic phoneme analysis.',
    icon: 'Eye',
    outputArtifact: 'High-Dimensional Entity Embeddings (4096-d)'
  },
  {
    step: '03',
    name: 'REASON',
    title: 'Tree-of-Thought Neural Deliberation',
    description: 'High-capacity reasoning models evaluate multiple plausible outcomes, stress-test counterfactual scenarios, and construct verifiable chain-of-logic proofs.',
    technicalMechanism: 'Monte Carlo Tree Search with reward-model verification and mathematical constraints.',
    icon: 'Brain',
    outputArtifact: 'Deterministic Action Strategy & Proof'
  },
  {
    step: '04',
    name: 'ACT',
    title: 'Autonomous Swarm Execution',
    description: 'Specialized autonomous agents invoke secure enterprise APIs, execute transactions, dispatch logistical assets, and commit ledger entries.',
    technicalMechanism: 'Sandboxed OpenAPI synthesis with multi-sig cryptographic approval barriers.',
    icon: 'Cpu',
    outputArtifact: 'Committed Enterprise Transaction & System Update'
  },
  {
    step: '05',
    name: 'LEARN',
    title: 'Continuous Telemetric Reinforcement',
    description: 'Systems continuously learn from telemetry outcomes, human supervisor feedback, and market shifts to tune future model weights without catastrophic forgetting.',
    technicalMechanism: 'Online Reinforcement Learning from Enterprise Feedback (RL-EF) & Direct Preference Optimization.',
    icon: 'ShieldCheck',
    outputArtifact: 'Self-Optimizing Cognitive Model Weights'
  }
];

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    id: 'sovereignty',
    title: 'UAE Data Sovereignty & Onshore Hosting',
    standard: 'TDRA Cloud Security Tier 3 & UAE AI Strategy 2031',
    description: 'All training weights, embeddings, inference buffers, and customer transaction logs remain physically within UAE borders inside tier-4 enterprise data centers.',
    icon: 'Shield',
    complianceBadges: ['UAE Data Law 2021', 'TDRA Level 3', 'DIFC Data Protection', 'ADGM FSRA Compliant'],
    points: [
      'Guaranteed zero foreign IP egress or third-party cloud telemetry',
      'Air-gapped deployment options for defence and government installations',
      'Full compliance with UAE Central Bank Consumer Protection Standard'
    ]
  },
  {
    id: 'encryption',
    title: 'Hardware-Enforced Cryptographic Isolation',
    standard: 'NIST FIPS 140-3 & AES-256-GCM',
    description: 'Confidential computing instances running on AMD SEV-SNP and NVIDIA H100 Confidential GPUs ensure data is encrypted in-use, in-transit, and at-rest.',
    icon: 'Lock',
    complianceBadges: ['FIPS 140-3', 'SOC 2 Type II', 'ISO 27001', 'ISO 42001'],
    points: [
      'Model weights executed inside hardware-isolated micro-enclaves',
      'Quantum-resistant lattice key exchange for inter-node communication',
      'WORM (Write Once, Read Many) tamper-proof cryptographic audit log'
    ]
  },
  {
    id: 'guardrails',
    title: 'Active Adversarial Defense & Explainability',
    standard: 'Responsible AI & Explainable AI (XAI) Framework',
    description: 'Continuous real-time semantic guardrails intercept adversarial prompt injections, data extraction probes, and hallucinated reasoning steps before execution.',
    icon: 'ShieldAlert',
    complianceBadges: ['OWASP Top 10 for LLMs', 'NIST AI RMF 1.0', 'SHAP Attribution Proof'],
    points: [
      '<1.2ms latency overhead for real-time tokenized security screening',
      'Deterministic circuit breakers quarantining anomalous agent decisions',
      'Mathematical SHAP attribution proofs accompanying every critical decision'
    ]
  }
];

export const TECH_ECOSYSTEM: TechEcosystemCategory[] = [
  {
    category: 'Sovereign Reasoning & Foundation Models',
    description: 'High-throughput model serving engines optimized for low-latency reasoning and specialized enterprise fine-tunes.',
    technologies: [
      { name: 'Tensoris-NeuraCore v4 (Proprietary)', role: 'Flagship Enterprise MoE Reasoning Model', latency: '8.2 ms', status: 'Production Active' },
      { name: 'DeepSeek-R1 (Sovereign On-Premise)', role: 'Complex Math & Chain-of-Thought Engine', latency: '14.0 ms', status: 'Sovereign Enclave' },
      { name: 'Llama 3.3 70B Instruct (UAE Fine-Tuned)', role: 'High-Speed Multilingual Conversational Model', latency: '6.4 ms', status: 'Accelerated' },
      { name: 'Claude 3.5 Sonnet / Custom LoRA', role: 'Complex Code & Structured JSON Synthesis', latency: '18.5 ms', status: 'Enterprise Bridge' }
    ]
  },
  {
    category: 'Vector Memory & Knowledge Graph Fabric',
    description: 'High-dimensional semantic retrieval and persistent episodic memory infrastructure.',
    technologies: [
      { name: 'Qdrant Distributed Vector Cluster', role: 'Sub-Millisecond HNSW Hybrid Dense Search', latency: '<2.0 ms', status: 'Production Tier-1' },
      { name: 'Neo4j Enterprise Graph Fabric', role: 'Deep Multi-Hop Entity Relationship Traversal', latency: '<4.5 ms', status: 'Synchronized' },
      { name: 'ClickHouse Columnar Storage', role: 'Real-Time Streaming Telemetry Analytics', latency: '<1.8 ms', status: 'Real-Time' },
      { name: 'Milvus High-Capacity Vector Engine', role: 'Billion-Scale Deep Unstructured Document Index', latency: '<5.0 ms', status: 'Active' }
    ]
  },
  {
    category: 'Enterprise Integration Mesh',
    description: 'Bidirectional transactional connectors into legacy enterprise systems of record.',
    technologies: [
      { name: 'SAP S/4HANA & NetWeaver', role: 'Bidirectional Enterprise ERP Ledger Syncer', latency: '<25.0 ms', status: 'Certified Connector' },
      { name: 'Oracle Cloud & Autonomous Database', role: 'Direct Financials & Supply Chain Mesh', latency: '<20.0 ms', status: 'Native OCI' },
      { name: 'Salesforce & Dynamics 365', role: 'Real-Time CRM Entity & Pipeline Orchestrator', latency: '<15.0 ms', status: 'Connected' },
      { name: 'Snowflake & AWS UAE Sovereign Enclave', role: 'Zero-Copy Data Sharing & Secure Compute', latency: '<10.0 ms', status: 'Zero-Egress' }
    ]
  }
];

export const FLAGSHIP_CASE_STUDY: CaseStudyDetail = {
  client: 'Al-Futtaim Global Logistics & DIFC Financial Consortium',
  sector: 'Cross-Border Supply Chain & Trade Finance',
  location: 'Dubai & Abu Dhabi, UAE',
  scale: 'AED 12.4B Annual Transaction Volume across 28 Countries',
  challenge: 'The consortium struggled with fragmented legacy ERP silos, 72-hour manual customs clearance delays at Jebel Ali Port, and high currency volatility risks across AED/USD/SAR settlement corridors.',
  cognitiveSolution: 'Deployed the complete TENSORIS Cognitive Architecture, orchestrating 14 specialized autonomous agents (VECTRA-Route, KRONOS-Quant, and SENTINEL-Risk) connected directly into SAP S/4HANA, Dubai Trade, and Central Bank goAML gateways.',
  outcomes: [
    { metric: '94.2%', label: 'Decision Cycle Compression', description: 'Reduced customs documentation and trade finance approval from 72 hours to under 4 minutes.' },
    { metric: 'AED 64.8M', label: 'Documented First-Year ROI', description: 'Generated through automated FX hedging, port demurrage elimination, and reduced administrative labor.' },
    { metric: '0.00%', label: 'Regulatory Non-Compliance', description: 'Over 1.8M transactions audited and reported to Central Bank and UAE Customs with zero compliance penalties.' },
    { metric: '<11ms', label: 'Mean Inference Speed', description: 'All cognitive operations executed on sovereign UAE GPU bare-metal with 99.999% system uptime.' }
  ],
  quote: {
    text: 'TENSORIS delivered what our previous global consulting firms failed to achieve in three years: a true sovereign intelligence layer that thinks, reconciles, and executes inside our core systems with zero human latency.',
    author: 'His Excellency Tariq Al-Mansoor',
    title: 'Chief Technology & Strategy Officer, Sovereign Logistics Group'
  }
};

export const ENTERPRISE_PLANS: EnterprisePlan[] = [
  {
    id: 'pilot',
    name: 'Sovereign AI Foundation',
    tier: 'Single-Department Enclave',
    tagline: 'Ideal for single-division AI transformation and focused workflow automation.',
    aedBaseMonthly: 45000,
    setupFeeAED: 75000,
    inferenceAllowance: '50M Tensor Ops / Month',
    dedicatedAgents: 4,
    features: [
      'Dedicated Sovereign GPU Enclave in Dubai (G42 / Equinix)',
      '4 Pre-Configured Autonomous AI Agents (Research, Ops, Risk, Conversational)',
      'Enterprise Vector Memory (10M Vector Storage Allowance)',
      'Direct Connectors for SAP, Salesforce, or Oracle (1 System)',
      '99.9% Uptime SLA with 24/7 UAE-Based Engineering Support',
      'Standard ISO 42001 & UAE Data Residency Audit Verification'
    ],
    sla: '99.9% Uptime · 4-Hour Response'
  },
  {
    id: 'enterprise',
    name: 'Cognitive Matrix Pro',
    tier: 'Enterprise-Wide Swarm',
    tagline: 'The flagship infrastructure for multi-division conglomerates and financial institutions.',
    aedBaseMonthly: 115000,
    setupFeeAED: 160000,
    inferenceAllowance: '250M Tensor Ops / Month',
    dedicatedAgents: 12,
    highlighted: true,
    features: [
      'Multi-Node Sovereign Bare-Metal GPU Cluster (H100 NVLink Acceleration)',
      '12 Custom Fine-Tuned Autonomous Agents with Multi-Agent Swarm Orchestration',
      'Full Enterprise Knowledge Graph Fabric (100M Vector & Graph Nodes)',
      'Unlimited Bidirectional Connectors (SAP, Oracle, Snowflake, SWIFT, Customs)',
      'Real-Time Adversarial Guardrail Sentry with SHAP Mathematical Explainability',
      '99.99% Uptime SLA with Dedicated UAE Solutions Architect & 15-Min Response'
    ],
    sla: '99.99% Uptime · 15-Min Dedicated SLA'
  },
  {
    id: 'sovereign',
    name: 'Sovereign Defense & Government',
    tier: 'Air-Gapped & Custom Silicon',
    tagline: 'Custom bare-metal sovereign clusters for critical national infrastructure and banking.',
    aedBaseMonthly: 280000,
    setupFeeAED: 450000,
    inferenceAllowance: 'Unlimited Inferences (Dedicated Compute)',
    dedicatedAgents: 48,
    features: [
      '100% Air-Gapped or Private Dedicated On-Premise GPU Supercomputing SuperPod',
      'Proprietary Foundation Model Pre-Training on Exclusive National Corpora',
      'Unlimited Custom Swarm Agents with Hardware Security Module (HSM) Enclaves',
      'Direct UAE Central Bank, TDRA, and National Security Compliance Attestation',
      'Full Source-Code & Model Weight Escrow with On-Premise Sovereign Ownership',
      '99.999% High Availability with 24/7 On-Site Sovereign Cleared Engineers'
    ],
    sla: '99.999% Uptime · Instant On-Site Dispatch'
  }
];

export const TENSORIS_FAQS: FaqItem[] = [
  {
    category: 'Sovereignty & Security',
    question: 'How does TENSORIS guarantee 100% UAE Data Sovereignty?',
    answer: 'All TENSORIS infrastructure runs strictly on dedicated bare-metal GPU clusters located inside verified tier-3/4 data centers in Dubai and Abu Dhabi (such as G42 Cloud and Equinix DX1). No customer data, document embeddings, reasoning tokens, or logs ever cross UAE national borders or touch foreign hyperscaler APIs.'
  },
  {
    category: 'Platform',
    question: 'How does TENSORIS differ from generic AI wrappers or SaaS chat tools?',
    answer: 'TENSORIS is not a chatbot wrapper. It is a full-stack cognitive infrastructure layer combining low-latency local model inference, a unified hybrid vector-knowledge graph, and an autonomous multi-agent swarm capable of executing deterministic transactional actions inside SAP, Oracle, and banking systems with mathematical explainability proofs.'
  },
  {
    category: 'Integration',
    question: 'How long does an enterprise deployment typically take?',
    answer: 'Thanks to our pre-built enterprise connectors (SAP S/4HANA, Oracle, Salesforce, Snowflake) and pre-trained domain agents, a standard Sovereign AI Foundation pilot goes live within 14 to 21 business days. Full enterprise-wide swarm deployment typically spans 6 to 8 weeks.'
  },
  {
    category: 'Economics',
    question: 'What ROI metrics can an enterprise expect from TENSORIS?',
    answer: 'Across our UAE enterprise deployments, clients achieve an average of 94.2% compression in decision cycle times, an 84.5% reduction in manual document processing costs, and documented annual operational savings ranging between AED 4.2M and AED 65M depending on organizational scale.'
  },
  {
    category: 'Sovereignty & Security',
    question: 'Can TENSORIS be deployed in completely air-gapped environments?',
    answer: 'Yes. For government entities, sovereign wealth funds, and critical energy/defence installations, TENSORIS offers a 100% air-gapped deployment model with zero external internet connectivity, utilizing local TPM 2.0 hardware security modules.'
  },
  {
    category: 'Integration',
    question: 'How are hallucinations and unauthorized actions prevented?',
    answer: 'TENSORIS enforces a three-tier safety perimeter: (1) Graph-RAG factual grounding that requires mathematical citation verification, (2) SENTINEL-Risk adversarial token filters running at <1.2ms latency, and (3) a human-in-the-loop cryptographic escalation gateway for high-value financial actions.'
  }
];
