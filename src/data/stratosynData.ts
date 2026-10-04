export interface ComputeRegion {
  id: string;
  name: string;
  city: string;
  country: string;
  code: string;
  coordinates: { x: number; y: number };
  tier: 'Sovereign Core' | 'Enterprise Edge' | 'Global Transit Fabric';
  latencyMs: number;
  activeNodes: number;
  capacityUtilization: number;
  primaryWorkload: string;
  status: 'Optimal' | 'Balancing' | 'High-Throughput';
  bandwidthCapacity: string;
  availabilityZones: string[];
  features: string[];
}

export interface SystemLayer {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  accentHex: string;
  capabilities: {
    name: string;
    description: string;
    metric: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface CloudSystemStoryStage {
  step: string;
  name: string;
  title: string;
  description: string;
  subDescription: string;
  technicalMechanism: string;
  icon: string;
  metrics: { label: string; value: string };
}

export interface LiveSimulationMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  subtext: string;
  category: 'throughput' | 'compute' | 'latency' | 'mesh';
}

export interface SimulationLog {
  id: string;
  timestamp: string;
  region: string;
  event: string;
  status: 'OPTIMAL' | 'SCALED' | 'ROUTED' | 'ENCLAVE_VERIFIED' | 'REBALANCED';
  latency: string;
  throughput: string;
}

export interface OrchestrationStep {
  stepNumber: number;
  label: string;
  title: string;
  action: string;
  automatedPolicy: string;
  telemetryTrigger: string;
  resolvedInMs: string;
}

export interface CloudCapability {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  impactMetric: string;
  keyHighlights: string[];
  techStack: string[];
  codeSample: string;
  architectureTier: string;
}

export interface SecurityLayerPillar {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  complianceStandard: string;
  securityPoints: string[];
  enclaveType: string;
}

export interface IndustryUseCase {
  id: string;
  industry: string;
  tagline: string;
  description: string;
  icon: string;
  uaeContext: string;
  workloadPattern: string;
  keyBenefits: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  infrastructureSolution: string;
}

export interface ArchitectureTierNode {
  tierId: string;
  tierNumber: string;
  name: string;
  role: string;
  summary: string;
  deepDive: string;
  keyTechnologies: string[];
  latencyFootprint: string;
}

export interface TechEcosystemItem {
  name: string;
  category: 'Container & Runtime' | 'Orchestration & IaC' | 'Observability & Telemetry' | 'Data & Caching' | 'Network & Protocols';
  role: string;
  status: string;
  version: string;
}

export interface ObservabilityState {
  state: 'Healthy' | 'Scaling' | 'Processing' | 'Routing' | 'Recovering';
  code: string;
  badgeColor: string;
  description: string;
  activeProcesses: number;
  errorRate: string;
  clusterP99: string;
}

// -------------------------------------------------------------
// 1. GLOBAL COMPUTE FABRIC (REGIONS)
// -------------------------------------------------------------
export const STRATOSYN_REGIONS: ComputeRegion[] = [
  {
    id: 'uae-central',
    name: 'STRATOSYN Dubai Fabric',
    city: 'Dubai',
    country: 'United Arab Emirates',
    code: 'ME-DXB-01',
    coordinates: { x: 62.4, y: 44.5 },
    tier: 'Sovereign Core',
    latencyMs: 2.1,
    activeNodes: 128,
    capacityUtilization: 89.4,
    primaryWorkload: 'Sovereign AI & Financial Processing',
    status: 'Optimal',
    bandwidthCapacity: '400 Gbps Edge Uplink',
    availabilityZones: ['me-dxb-az1', 'me-dxb-az2', 'me-dxb-az3'],
    features: ['UAE Data Residency Enclave', 'Direct ADGM & DIFC Fiber Peering', 'Zero-Trust HSM Gateways']
  },
  {
    id: 'eu-central',
    name: 'STRATOSYN Frankfurt Fabric',
    city: 'Frankfurt',
    country: 'Germany',
    code: 'EU-FRA-01',
    coordinates: { x: 50.8, y: 31.2 },
    tier: 'Sovereign Core',
    latencyMs: 14.2,
    activeNodes: 256,
    capacityUtilization: 86.8,
    primaryWorkload: 'Distributed DB & Enterprise ERP',
    status: 'Optimal',
    bandwidthCapacity: '1.2 Tbps Backbone',
    availabilityZones: ['eu-fra-az1', 'eu-fra-az2', 'eu-fra-az3'],
    features: ['GDPR Compliant Hardware Vaults', 'DE-CIX Anycast Mesh', 'Liquid-Cooled GPU Clusters']
  },
  {
    id: 'uk-south',
    name: 'STRATOSYN London Fabric',
    city: 'London',
    country: 'United Kingdom',
    code: 'UK-LON-01',
    coordinates: { x: 47.2, y: 28.6 },
    tier: 'Enterprise Edge',
    latencyMs: 18.5,
    activeNodes: 192,
    capacityUtilization: 81.2,
    primaryWorkload: 'High-Frequency FinTech Routing',
    status: 'Optimal',
    bandwidthCapacity: '800 Gbps Low-Latency Edge',
    availabilityZones: ['uk-lon-az1', 'uk-lon-az2'],
    features: ['Sub-Millisecond Financial Transit', 'LINX Direct Peering', 'Kernel-Bypass eBPF Drivers']
  },
  {
    id: 'ap-southeast',
    name: 'STRATOSYN Singapore Fabric',
    city: 'Singapore',
    country: 'Singapore',
    code: 'AP-SIN-01',
    coordinates: { x: 77.8, y: 58.6 },
    tier: 'Sovereign Core',
    latencyMs: 32.4,
    activeNodes: 320,
    capacityUtilization: 92.1,
    primaryWorkload: 'High-Throughput API Gateways',
    status: 'High-Throughput',
    bandwidthCapacity: '1.6 Tbps APAC Subsea Hub',
    availabilityZones: ['ap-sin-az1', 'ap-sin-az2', 'ap-sin-az3'],
    features: ['Equinix SG1 Direct Interconnect', 'Cross-Ocean Active Active Sync', 'Real-time Video Transcode']
  },
  {
    id: 'us-east',
    name: 'STRATOSYN New York Fabric',
    city: 'New York',
    country: 'United States',
    code: 'US-NYC-01',
    coordinates: { x: 28.5, y: 34.8 },
    tier: 'Global Transit Fabric',
    latencyMs: 48.0,
    activeNodes: 384,
    capacityUtilization: 78.5,
    primaryWorkload: 'Global Ingestion & Edge Compute',
    status: 'Optimal',
    bandwidthCapacity: '2.4 Tbps Atlantic Gateway',
    availabilityZones: ['us-nyc-az1', 'us-nyc-az2', 'us-nyc-az3', 'us-nyc-az4'],
    features: ['Multi-Tenant Isolated VPCs', 'NVMe-oF Tier 0 Storage Fabric', 'Global BGP Anycast Ring']
  },
  {
    id: 'ap-northeast',
    name: 'STRATOSYN Tokyo Fabric',
    city: 'Tokyo',
    country: 'Japan',
    code: 'AP-TYO-01',
    coordinates: { x: 86.4, y: 38.2 },
    tier: 'Enterprise Edge',
    latencyMs: 54.2,
    activeNodes: 160,
    capacityUtilization: 85.3,
    primaryWorkload: 'GPU Model Inference & Gaming Telemetry',
    status: 'Optimal',
    bandwidthCapacity: '900 Gbps Pacific Ring',
    availabilityZones: ['ap-tyo-az1', 'ap-tyo-az2'],
    features: ['PCIe Gen5 Direct Memory Access', 'JPIX High-Density Node Mesh', 'Ultra-Low Jitter QoS']
  },
  {
    id: 'oc-east',
    name: 'STRATOSYN Sydney Fabric',
    city: 'Sydney',
    country: 'Australia',
    code: 'OC-SYD-01',
    coordinates: { x: 89.2, y: 78.4 },
    tier: 'Enterprise Edge',
    latencyMs: 78.6,
    activeNodes: 112,
    capacityUtilization: 73.8,
    primaryWorkload: 'Distributed Object Storage & Edge CDN',
    status: 'Optimal',
    bandwidthCapacity: '600 Gbps Edge Ingress',
    availabilityZones: ['oc-syd-az1', 'oc-syd-az2'],
    features: ['Autonomous Regional Fallback', 'Active Edge Cache Invalidation', 'Localized TLS Termination']
  }
];

// -------------------------------------------------------------
// 2. CORE SYSTEM LAYERS (4 SYSTEM LAYERS)
// -------------------------------------------------------------
export const STRATOSYN_SYSTEM_LAYERS: SystemLayer[] = [
  {
    id: 'compute-layer',
    tag: 'LAYER 01',
    title: 'COMPUTE LAYER',
    subtitle: 'Elastic Execution & High-Density Heterogeneous Cores',
    description: 'Bare-metal virtualization and bare-container primitives that autoscale from single micro-tasks to multi-thousand core GPU inference fabrics across distributed geographies.',
    badge: 'Hardware Acceleration',
    color: 'sky',
    accentHex: '#38BDF8',
    capabilities: [
      {
        name: 'Elastic Compute Instances',
        description: 'Microsecond boot times with sub-millisecond dynamic CPU pinning and memory ballooning.',
        metric: '<120ms Warm Boot'
      },
      {
        name: 'GPU & Tensor Acceleration',
        description: 'Direct PCIe passthrough for clustered FP8/FP16 AI model training and parallel compute.',
        metric: '98.6% Native GPU IO'
      },
      {
        name: 'Containerized Microservices',
        description: 'Zero-overhead lightweight OCI runtime sandboxes with hardware-enforced isolation.',
        metric: '50k+ Pods / Fabric'
      },
      {
        name: 'Serverless Event Workers',
        description: 'V8 isolates and WebAssembly event runtimes executed directly at the nearest network point.',
        metric: '<1.2ms Edge Invocation'
      }
    ],
    specifications: [
      { label: 'Virtualization Engine', value: 'Custom KVM MicroVM / Firecracker Fork' },
      { label: 'Memory Allocation', value: 'Zero-Copy Shared Ring Buffers' },
      { label: 'Scheduling Frequency', value: '10,000 Decisions / sec / cluster' },
      { label: 'Hardware Enclave', value: 'AMD SEV-SNP & Intel SGX Enclaves' }
    ]
  },
  {
    id: 'network-layer',
    tag: 'LAYER 02',
    title: 'NETWORK LAYER',
    subtitle: 'Autonomous Global Mesh & Intelligent Traffic Routing',
    description: 'A sovereign BGP Anycast transport layer combining software-defined WAN, kernel-bypass eBPF routing, and wireguard encrypted micro-tunnels for zero-jitter data transit.',
    badge: 'Sub-Millisecond Transit',
    color: 'cyan',
    accentHex: '#06B6D4',
    capabilities: [
      {
        name: 'Global Anycast Routing',
        description: 'Autonomous BGP path optimization routing requests to the nearest computational node in real time.',
        metric: '<5ms Regional Hop'
      },
      {
        name: 'Edge Connectivity Mesh',
        description: 'Direct fiber peering at major Internet exchange points with localized DDoS absorption.',
        metric: '140+ Tbps Capacity'
      },
      {
        name: 'Private Wireguard VPC Mesh',
        description: 'Zero-overhead multi-region software defined networks with automatic cryptographic rotation.',
        metric: 'Line-Rate 100GbE Encryption'
      },
      {
        name: 'Intelligent Traffic Balancing',
        description: 'Layer 7 load dispatching based on real-time CPU saturation and latency vectors.',
        metric: '0.0001% Packet Loss'
      }
    ],
    specifications: [
      { label: 'Transit Protocol', value: 'QUIC / HTTP3 & BGP Multi-Path' },
      { label: 'Packet Inspection', value: 'Kernel-Bypass eBPF XDP Layer' },
      { label: 'DDoS Mitigation SLA', value: '<800ms Autonomous Scrubbing' },
      { label: 'Tunnel Encryption', value: 'ChaCha20-Poly1305 Line Speed' }
    ]
  },
  {
    id: 'data-layer',
    tag: 'LAYER 03',
    title: 'DATA LAYER',
    subtitle: 'Globally Distributed Storage & Multi-Region Consistency',
    description: 'Active-active multi-master databases, resilient NVMe-oF block volumes, and globally replicated S3-compatible object layers with conflict-free deterministic resolution.',
    badge: 'Active-Active Replicated',
    color: 'indigo',
    accentHex: '#818CF8',
    capabilities: [
      {
        name: 'Distributed Object Storage',
        description: 'Geo-replicated S3 API storage with automatic lifecycle tiering and instant edge caching.',
        metric: '99.999999999% Durability'
      },
      {
        name: 'Multi-Region Replication',
        description: 'Synchronous Raft-consensus transactional databases with sub-second cross-ocean sync.',
        metric: '<45ms Global Consensus'
      },
      {
        name: 'Real-Time Stream Processing',
        description: 'Distributed log queues processing millions of state events per second with exactly-once delivery.',
        metric: '12M Events / sec'
      },
      {
        name: 'Automated Snapshot Architecture',
        description: 'Continuous immutable point-in-time state capture without performance degradation.',
        metric: 'Zero-Downtime Snapshots'
      }
    ],
    specifications: [
      { label: 'Consensus Engine', value: 'Multi-Raft with Epoch Verification' },
      { label: 'Storage Interface', value: 'NVMe-over-Fabrics (RoCEv2)' },
      { label: 'Encryption At Rest', value: 'AES-256 GCM Hardware Encrypted' },
      { label: 'Compression Ratio', value: '3.8x High-Throughput Zstandard' }
    ]
  },
  {
    id: 'control-layer',
    tag: 'LAYER 04',
    title: 'CONTROL LAYER',
    subtitle: 'Declarative Orchestration & Automated Self-Healing',
    description: 'An autonomous control plane managing fleet health, zero-downtime rolling deploys, dynamic workload rebalancing, and programmatic policy enforcement across all clusters.',
    badge: 'Autonomous Control Plane',
    color: 'emerald',
    accentHex: '#34D399',
    capabilities: [
      {
        name: 'Workload Orchestration',
        description: 'Declarative GitOps engine continuously aligning running infrastructure to target state manifests.',
        metric: '100% Manifest Drift Lock'
      },
      {
        name: 'Automated Elastic Scaling',
        description: 'Predictive machine-learning scaling reacting before traffic spikes hit application boundaries.',
        metric: '<400ms Scale Trigger'
      },
      {
        name: 'Continuous Policy Governance',
        description: 'Open Policy Agent (OPA) validation enforcing sovereign UAE data residency at compile time.',
        metric: 'Zero Unauthorized Ingress'
      },
      {
        name: 'Autonomous Self-Healing',
        description: 'Degraded nodes are seamlessly drained, cordoned, and replaced in milliseconds without traffic interruption.',
        metric: '<1.5s Pod Recovery'
      }
    ],
    specifications: [
      { label: 'Orchestrator Engine', value: 'Sovereign K8s Control Plane Mesh' },
      { label: 'Configuration Language', value: 'HCL / Declarative YAML & Cue' },
      { label: 'Policy Engine', value: 'OPA Rego & Custom WASM Filters' },
      { label: 'State Store', value: 'Distributed Memory-Mapped Key-Value' }
    ]
  }
];

// -------------------------------------------------------------
// 3. "THE CLOUD IS A SYSTEM" 5-TIER STORYLINE
// -------------------------------------------------------------
export const CLOUD_SYSTEM_STORY: CloudSystemStoryStage[] = [
  {
    step: '01',
    name: 'COMPUTE',
    title: 'Workload Execution Without Host Boundaries',
    description: 'Compute is freed from single-server hardware locks. Applications run as distributed micro-enclaves allocated on demand.',
    subDescription: 'Heterogeneous compute clusters dynamically apportion CPU, GPU, and memory resources around incoming demand spikes.',
    technicalMechanism: 'MicroVM sandbox isolation with sub-millisecond execution dispatching.',
    icon: 'Cpu',
    metrics: { label: 'Cluster Elasticity', value: '10x in <1.2s' }
  },
  {
    step: '02',
    name: 'NETWORK',
    title: 'The Connective Tissue of Global Operations',
    description: 'No request travels unguided. Traffic is analyzed at the network edge and routed through high-throughput private backbones.',
    subDescription: 'BGP Anycast routing and kernel-bypass packet filtering ensure every packet takes the path of lowest geographic latency.',
    technicalMechanism: 'Wireguard-encrypted Anycast mesh with eBPF Layer 4/7 steering.',
    icon: 'Network',
    metrics: { label: 'Global Backbone', value: '142.8 Tbps' }
  },
  {
    step: '03',
    name: 'DATA',
    title: 'Immutable State Replicated in Real Time',
    description: 'Data is no longer trapped in a single database instance. State is synchronized continuously across sovereign geographic boundaries.',
    subDescription: 'Multi-Raft consensus algorithms ensure immediate consistency for financial transactions and eventual consistency for high-volume telemetry.',
    technicalMechanism: 'Active-active multi-master storage with cryptographic hash reconciliation.',
    icon: 'Database',
    metrics: { label: 'Consensus Latency', value: '<25ms Global' }
  },
  {
    step: '04',
    name: 'OBSERVABILITY',
    title: 'Continuous Visibility Into Every Micro-State',
    description: 'You cannot scale what you cannot see. Millions of distributed signals are consolidated into actionable telemetry.',
    subDescription: 'OpenTelemetry traces, kernel eBPF probes, and metric streams pinpoint bottlenecks across microservice call graphs in real time.',
    technicalMechanism: 'Sub-second stream aggregation with automated anomaly detection.',
    icon: 'Activity',
    metrics: { label: 'Telemetry Ingest', value: '45M metrics/s' }
  },
  {
    step: '05',
    name: 'AUTOMATION',
    title: 'Autonomous Adaptation & Self-Healing',
    description: 'Infrastructure that manages itself. Policies govern deployments, scaling, security audits, and fault recovery programmatically.',
    subDescription: 'Human operators define the desired high-level business objectives; the STRATOSYN control plane maintains the equilibrium.',
    technicalMechanism: 'Declarative GitOps reconciliation with automated fault cordoning.',
    icon: 'Terminal',
    metrics: { label: 'Mean Time to Heal', value: '<800ms' }
  }
];

// -------------------------------------------------------------
// 4. LIVE SIMULATION TELEMETRY & COMMAND CENTER METRICS
// -------------------------------------------------------------
export const LIVE_SIMULATION_METRICS: LiveSimulationMetric[] = [
  {
    id: 'global-throughput',
    label: 'Aggregate Mesh Throughput',
    value: '142.8',
    unit: 'Tbps',
    change: '+12.4%',
    trend: 'up',
    subtext: 'Across 7 Global Fabric Centers',
    category: 'throughput'
  },
  {
    id: 'workload-rate',
    label: 'Global Ingestion Velocity',
    value: '4.82',
    unit: 'M req/s',
    change: '+8.1%',
    trend: 'up',
    subtext: 'P99 Latency: 4.2ms Avg',
    category: 'compute'
  },
  {
    id: 'cluster-health',
    label: 'Mesh Reliability Index',
    value: '99.999',
    unit: '%',
    change: '0.000%',
    trend: 'neutral',
    subtext: '0 Unscheduled Failovers',
    category: 'latency'
  },
  {
    id: 'active-containers',
    label: 'Active Container Pods',
    value: '48,290',
    unit: 'Instances',
    change: '+3,410',
    trend: 'up',
    subtext: 'Across 1,544 Bare-Metal Nodes',
    category: 'compute'
  },
  {
    id: 'gpu-allocation',
    label: 'GPU Cluster Saturation',
    value: '92.4',
    unit: '%',
    change: '+4.2%',
    trend: 'up',
    subtext: 'FP8 Model Inference Active',
    category: 'compute'
  },
  {
    id: 'autoscale-time',
    label: 'Mean Auto-Scale Trigger',
    value: '380',
    unit: 'ms',
    change: '-45ms',
    trend: 'down',
    subtext: 'Predictive Load Buffer Active',
    category: 'mesh'
  }
];

export const SIMULATION_LOGS: SimulationLog[] = [
  {
    id: 'log-101',
    timestamp: '14:22:01.892',
    region: 'ME-DXB-01',
    event: 'Sovereign Enclave Ingress: DIFC Banking Stream provisioned 16 pods',
    status: 'OPTIMAL',
    latency: '1.8ms',
    throughput: '42.6 Gbps'
  },
  {
    id: 'log-102',
    timestamp: '14:22:02.104',
    region: 'EU-FRA-01',
    event: 'Multi-Raft Consensus Replicated across Frankfurt-London Ring',
    status: 'ROUTED',
    latency: '12.4ms',
    throughput: '89.2 Gbps'
  },
  {
    id: 'log-103',
    timestamp: '14:22:02.418',
    region: 'AP-SIN-01',
    event: 'Predictive Autoscaler dynamically scaled 40 worker pods for peak traffic',
    status: 'SCALED',
    latency: '4.1ms',
    throughput: '118.0 Gbps'
  },
  {
    id: 'log-104',
    timestamp: '14:22:02.720',
    region: 'US-NYC-01',
    event: 'Kernel eBPF XDP Filter blocked unauthorized spoofed packet sequence',
    status: 'ENCLAVE_VERIFIED',
    latency: '0.2ms',
    throughput: '1.4 Gbps'
  },
  {
    id: 'log-105',
    timestamp: '14:22:03.011',
    region: 'AP-TYO-01',
    event: 'GPU Inference Cluster allocated 8x H100 tensor cores for LLM pipeline',
    status: 'OPTIMAL',
    latency: '2.4ms',
    throughput: '64.5 Gbps'
  },
  {
    id: 'log-106',
    timestamp: '14:22:03.350',
    region: 'GLOBAL-MESH',
    event: 'Automated Global Rebalancer shifted 15% US-East traffic to EU-Central',
    status: 'REBALANCED',
    latency: '18.9ms',
    throughput: '210.4 Gbps'
  }
];

// -------------------------------------------------------------
// 5. INTELLIGENT ORCHESTRATION 6-STAGE ADAPTIVE WORKFLOW
// -------------------------------------------------------------
export const ORCHESTRATION_WORKFLOW: OrchestrationStep[] = [
  {
    stepNumber: 1,
    label: 'STAGE 01',
    title: 'Workload Detected',
    action: 'Inbound traffic packet arrives at the nearest BGP Anycast edge node; payload signature and compute requirements are parsed in memory.',
    automatedPolicy: 'L7 Request Header Inspection & Zero-Trust Token Verification',
    telemetryTrigger: 'Inbound Ingress Threshold > 10,000 req/s',
    resolvedInMs: '<2ms'
  },
  {
    stepNumber: 2,
    label: 'STAGE 02',
    title: 'Capacity Evaluated',
    action: 'Global orchestrator evaluates regional CPU, GPU, memory, and thermal overhead across adjacent mesh zones.',
    automatedPolicy: 'Sovereign UAE Data Residency & Resource Saturation Bounds',
    telemetryTrigger: 'Node Saturation Metric Scanned across 7 Regions',
    resolvedInMs: '<8ms'
  },
  {
    stepNumber: 3,
    label: 'STAGE 03',
    title: 'Optimal Region Selected',
    action: 'Algorithms determine optimal execution target balancing latency, cost, and compliance constraints.',
    automatedPolicy: 'Minimum Latency Graph Optimization Algorithm',
    telemetryTrigger: 'Optimal Route Selected: ME-DXB-01 Primary',
    resolvedInMs: '<12ms'
  },
  {
    stepNumber: 4,
    label: 'STAGE 04',
    title: 'Resources Provisioned',
    action: 'MicroVM or container sandbox is instantiated with dedicated hardware-pinned memory and network interfaces.',
    automatedPolicy: 'Firecracker Container Warm Pool Allocation',
    telemetryTrigger: 'Container ID #90412 Online & Health Check Passed',
    resolvedInMs: '<120ms'
  },
  {
    stepNumber: 5,
    label: 'STAGE 05',
    title: 'Traffic Balanced',
    action: 'Dynamic weight updates are pushed to edge routers, seamlessly streaming client connections with zero dropped packets.',
    automatedPolicy: 'Consistent Hashing with Virtual Node Multiplexing',
    telemetryTrigger: 'Connection Switched to New Target Pod',
    resolvedInMs: '<15ms'
  },
  {
    stepNumber: 6,
    label: 'STAGE 06',
    title: 'System Rebalanced',
    action: 'Continuous evaluation monitors post-scaling telemetry; excess capacity is gracefully retired once traffic subsides.',
    automatedPolicy: 'Predictive Cooldown and Memory Compaction Engine',
    telemetryTrigger: 'Steady State Re-Established Across Fabric',
    resolvedInMs: '<350ms'
  }
];

// -------------------------------------------------------------
// 6. CLOUD COMPUTING CAPABILITIES (8 DEEP TECHNICAL MODULES)
// -------------------------------------------------------------
export const CLOUD_CAPABILITIES: CloudCapability[] = [
  {
    id: 'elastic-compute',
    tag: 'CAPABILITY 01',
    title: 'Elastic Compute',
    subtitle: 'Dynamic Virtualization Built for High-Density Scaling',
    description: 'Scale instances instantly from 1 to 10,000+ vCPUs without configuration bottlenecks. Powered by lightweight MicroVMs that boot in under 120ms.',
    icon: 'Cpu',
    impactMetric: '120ms MicroVM Boot',
    keyHighlights: [
      'Sub-millisecond CPU scheduling',
      'Hardware-isolated multi-tenant memory',
      'Zero-overhead bare-metal execution',
      'Continuous memory defragmentation'
    ],
    techStack: ['KVM', 'Firecracker', 'Linux Kernel 6.x', 'eBPF'],
    codeSample: `// Deploying Elastic MicroVM Instance
import { StratosynCompute } from '@stratosyn/sdk';

const compute = new StratosynCompute({
  region: 'me-dxb-01',
  compliance: 'uae-sovereign'
});

const instance = await compute.instances.spawn({
  vCpu: 16,
  ramGb: 64,
  image: 'stratosyn/enterprise-runtime:v4.2',
  autoscale: { min: 4, max: 128, targetCpuPct: 75 },
  enclave: 'amd-sev-snp'
});`,
    architectureTier: 'Bare-Metal Virtualization Layer'
  },
  {
    id: 'container-infrastructure',
    tag: 'CAPABILITY 02',
    title: 'Container Infrastructure',
    subtitle: 'Enterprise Kubernetes & Lightweight OCI Orchestration',
    description: 'Deploy, manage, and scale containerized enterprise applications with sub-second pod scheduling, native service mesh, and automated rolling deployments.',
    icon: 'Boxes',
    impactMetric: '50,000+ Pods / Cluster',
    keyHighlights: [
      'Zero-management declarative control plane',
      'Automated pod horizontal & vertical autoscaling',
      'Built-in Wireguard overlay mesh networking',
      'Instant container image pull via localized edge cache'
    ],
    techStack: ['Kubernetes 1.30', 'Containerd', 'Cilium CNI', 'Envoy'],
    codeSample: `apiVersion: stratosyn.io/v1alpha1
kind: DistributedWorkload
metadata:
  name: payment-orchestrator
  namespace: banking-core
spec:
  replicas: 24
  regions:
    - me-dxb-01: 60%
    - eu-fra-01: 40%
  resilience:
    maxUnavailable: 0%
    failoverLatencyTarget: <50ms`,
    architectureTier: 'Container Runtime & CNI Mesh'
  },
  {
    id: 'gpu-compute',
    tag: 'CAPABILITY 03',
    title: 'GPU Compute',
    subtitle: 'High-Performance Acceleration for AI & HPC Workloads',
    description: 'Direct-access GPU clusters optimized for distributed AI model training, real-time transformer inference, fluid dynamics, and cryptographic computation.',
    icon: 'Activity',
    impactMetric: '98.6% Native GPU IO',
    keyHighlights: [
      'NVIDIA H100 & B200 Tensor Core availability',
      'InfiniBand NDR 400Gbps cross-node fabric',
      'FP8/FP16 mixed-precision optimization',
      'Direct RoCEv2 memory interconnects'
    ],
    techStack: ['CUDA 12.x', 'TensorRT-LLM', 'NCCL', 'InfiniBand'],
    codeSample: `// Allocating Distributed GPU Tensor Cluster
const cluster = await stratosyn.gpu.allocateCluster({
  nodes: 8,
  gpusPerNode: 8, // 64x H100 SXM5
  interconnect: 'infiniband-ndr-400',
  storageTier: 'nvme-roce-direct',
  workload: 'deep-learning-distributed-training'
});`,
    architectureTier: 'Heterogeneous Accelerator Layer'
  },
  {
    id: 'serverless-execution',
    tag: 'CAPABILITY 04',
    title: 'Serverless Execution',
    subtitle: 'Event-Driven Micro-Execution at Global Scale',
    description: 'Execute TypeScript, Go, Python, and WebAssembly handlers in isolated lightweight V8 sandboxes directly at the network edge without managing infrastructure.',
    icon: 'PlayCircle',
    impactMetric: '<1.2ms Cold Start',
    keyHighlights: [
      'Sub-2ms cold start execution',
      'True scale-to-zero billing model',
      'Automatic multi-region global replication',
      'Direct integration with event queues & databases'
    ],
    techStack: ['V8 Isolates', 'WebAssembly', 'Rust', 'Edge KV'],
    codeSample: `// Edge Serverless Event Handler
export default async function handle(event: StratosynRequest) {
  const { geo, headers } = event;
  // Route immediately inside UAE sovereign perimeter
  if (geo.country === 'AE') {
    return StratosynEdge.forwardTo('me-dxb-01', {
      zeroTrustToken: headers.get('x-stratosyn-auth')
    });
  }
  return StratosynEdge.executeLocalized(event);
}`,
    architectureTier: 'Edge Worker Runtime'
  },
  {
    id: 'edge-computing',
    tag: 'CAPABILITY 05',
    title: 'Edge Computing',
    subtitle: 'Compute Moved to the User’s Geographic Perimeter',
    description: 'Terminate TLS, evaluate zero-trust security policies, transcode media, and process transactions within 5ms of end users worldwide.',
    icon: 'Radio',
    impactMetric: '<5ms Edge Latency',
    keyHighlights: [
      '140+ Points of Presence across major metros',
      'Sub-millisecond localized TLS termination',
      'Active-edge cache purge in <150ms globally',
      'Dynamic WebAssembly edge pipeline execution'
    ],
    techStack: ['BGP Anycast', 'eBPF', 'Rust Edge Runtime', 'TLS 1.3'],
    codeSample: `// Edge Policy Execution at Ingress
const edgePolicy = new EdgeGatewayPolicy({
  ddosScrubbing: 'autonomous',
  wafEngine: 'coraza-wasm',
  geoFencing: ['AE', 'GCC', 'EU', 'US'],
  tlsTermination: 'tls-1.3-only'
});`,
    architectureTier: 'Global Anycast Edge Layer'
  },
  {
    id: 'distributed-storage',
    tag: 'CAPABILITY 06',
    title: 'Distributed Storage',
    subtitle: 'Geo-Replicated Object & High-IOPS Block Storage',
    description: 'High-durability storage architecture supporting S3-compatible object storage, low-latency NVMe block volumes, and globally synchronized key-value stores.',
    icon: 'Database',
    impactMetric: '11 Nines (99.999999999%)',
    keyHighlights: [
      'Erasure-coded distributed object storage',
      'Sub-500 microsecond NVMe block volume latency',
      'Automatic multi-tier data lifecycle archival',
      'Hardware AES-256 transparent encryption'
    ],
    techStack: ['NVMe-oF', 'Ceph Engine', 'RocksDB', 'SPDK'],
    codeSample: `// Geo-Replicated S3 Bucket Configuration
const bucket = await stratosyn.storage.createBucket({
  name: 'uae-sovereign-financial-vault',
  replication: {
    primary: 'me-dxb-01',
    replicas: ['eu-fra-01', 'ap-sin-01'],
    consistency: 'strong-read-after-write'
  },
  encryption: 'customer-managed-hsm'
});`,
    architectureTier: 'Resilient Multi-Consensus Storage'
  },
  {
    id: 'observability',
    tag: 'CAPABILITY 07',
    title: 'Observability',
    subtitle: 'Deep-Trace Telemetry & Kernel-Level Visibility',
    description: 'Inspect every microsecond of distributed execution. Continuous profiling, distributed OpenTelemetry traces, and eBPF kernel probes without code instrumentation.',
    icon: 'Activity',
    impactMetric: '45M Metrics / sec',
    keyHighlights: [
      'Zero-overhead eBPF continuous profiling',
      'OpenTelemetry-native distributed tracing',
      'High-cardinality time-series metric storage',
      'Predictive AI anomaly detection & alerts'
    ],
    techStack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'eBPF Probes'],
    codeSample: `// Subscribing to Live Cluster Traces
const stream = stratosyn.telemetry.traceStream({
  filter: { latencyGt: '50ms', service: 'payment-gateway' },
  onAnomalyDetected: (event) => {
    stratosyn.orchestrator.triggerHealthCheck(event.nodeId);
  }
});`,
    architectureTier: 'Continuous Observability Pipeline'
  },
  {
    id: 'infrastructure-automation',
    tag: 'CAPABILITY 08',
    title: 'Infrastructure Automation',
    subtitle: 'Declarative Infrastructure as Code & GitOps Delivery',
    description: 'Treat your entire cloud footprint as software. Automated Terraform providers, Kubernetes CRDs, and programmable API endpoints for reproducible architectures.',
    icon: 'Terminal',
    impactMetric: '100% Declarative Drift Lock',
    keyHighlights: [
      'Native Terraform & OpenTofu provider integrations',
      'GitOps-driven continuous deployment pipelines',
      'Drift detection with automated self-correction',
      'Programmatic REST & GraphQL management APIs'
    ],
    techStack: ['Terraform', 'OpenTofu', 'ArgoCD', 'TypeScript SDK'],
    codeSample: `// Terraform Definition for STRATOSYN Cloud
resource "stratosyn_cluster" "uae_core" {
  name        = "stratosyn-dubai-prod"
  region      = "me-dxb-01"
  node_count  = 128
  node_type   = "c3.metal.96xlarge"
  vpc_mesh_id = stratosyn_vpc.global_mesh.id
}`,
    architectureTier: 'Declarative GitOps Control Layer'
  }
];

// -------------------------------------------------------------
// 7. PERFORMANCE & RELIABILITY ("BUILT FOR THE WORKLOAD AHEAD")
// -------------------------------------------------------------
export const PERFORMANCE_PILLARS = [
  {
    icon: 'Layers',
    title: 'Elastic Capacity',
    description: 'Auto-adjust infrastructure in milliseconds around volatile workload demand without pre-provisioning waste or downtime.'
  },
  {
    icon: 'Globe',
    title: 'Global Distribution',
    description: 'Route traffic across 7 strategic worldwide regions, delivering compute within 5ms of major financial and enterprise hubs.'
  },
  {
    icon: 'Eye',
    title: 'Real-Time Visibility',
    description: 'Observe infrastructure continuously with sub-second kernel telemetry, distributed traces, and high-frequency health probes.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Automated Recovery',
    description: 'Design systems to self-heal. Degraded nodes are automatically cordoned, isolated, and replaced before client connections fail.'
  }
];

// -------------------------------------------------------------
// 8. SECURITY ARCHITECTURE (LAYERED ZERO-TRUST DEFENSE)
// -------------------------------------------------------------
export const SECURITY_PILLARS: SecurityLayerPillar[] = [
  {
    id: 'iam-zero-trust',
    title: 'Identity & Access Architecture',
    category: 'Zero-Trust Authentication',
    description: 'Every request, node, and microservice is explicitly authenticated using short-lived cryptographically signed tokens and mutual TLS (mTLS).',
    icon: 'Key',
    complianceStandard: 'NIST 800-207 & OIDC',
    securityPoints: [
      'Ephemeral identity tokens rotated every 15 minutes',
      'Role-based granular access control (RBAC)',
      'Hardware token FIDO2 WebAuthn multi-factor enforcement',
      'Hardware-rooted attestation per compute host'
    ],
    enclaveType: 'Zero-Trust Enclave'
  },
  {
    id: 'encryption-layer',
    title: 'End-to-End Cryptography',
    category: 'Data Protection in Transit & at Rest',
    description: 'Transparent hardware encryption across all data volumes, network interfaces, and inter-cluster links with customer-managed keys.',
    icon: 'Lock',
    complianceStandard: 'FIPS 140-3 Level 4 & AES-256',
    securityPoints: [
      'AES-256-GCM hardware line-rate encryption',
      'TLS 1.3 with strict Forward Secrecy',
      'Post-Quantum Kyber-based key exchange algorithms',
      'Dedicated Hardware Security Module (HSM) key isolation'
    ],
    enclaveType: 'Quantum-Ready Vault'
  },
  {
    id: 'network-isolation',
    title: 'Micro-Segmented VPC Mesh',
    category: 'Network & Perimeter Defense',
    description: 'Zero-trust virtual private clouds with strict hardware network isolation, preventing lateral movement across multi-tenant boundaries.',
    icon: 'Shield',
    complianceStandard: 'ISO 27001 & SOC 2 Type II',
    securityPoints: [
      'Private Wireguard overlay network with line-speed encryption',
      'Strict Layer 3/4 firewall rules managed via policy manifests',
      'Autonomous BGP Anycast DDoS mitigation (>140 Tbps capacity)',
      'Private peering bypassing the public Internet entirely'
    ],
    enclaveType: 'VPC Micro-Segmentation'
  },
  {
    id: 'secrets-management',
    title: 'Hardware Enclave Secrets',
    category: 'Secrets & Credential Protection',
    description: 'Dynamic secret generation, automated credential rotation, and memory-only storage ensuring zero plain-text leaks on persistent disks.',
    icon: 'FileCode',
    complianceStandard: 'PCI-DSS v4.0 Level 1',
    securityPoints: [
      'Just-In-Time short-lived database credentials',
      'Sealed memory enclaves protected by AMD SEV-SNP',
      'Zero plaintext keys written to non-volatile storage',
      'Cryptographic hash verification of all deployment binaries'
    ],
    enclaveType: 'Memory Enclave'
  },
  {
    id: 'policy-enforcement',
    title: 'Policy as Code Governance',
    category: 'Automated Regulatory Governance',
    description: 'Deterministic Open Policy Agent (OPA) validation enforcing sovereign UAE data residency rules before containers can be scheduled.',
    icon: 'CheckCircle2',
    complianceStandard: 'UAE NESA & UAE Sovereign Cloud Standard',
    securityPoints: [
      'Pre-deployment manifest static analysis',
      'Compile-time validation of storage region compliance',
      'Automatic rejection of non-compliant network ingress routes',
      'Continuous drift remediation against approved security postures'
    ],
    enclaveType: 'OPA Guardrail Matrix'
  },
  {
    id: 'threat-monitoring',
    title: 'Continuous eBPF Threat Detection',
    category: 'Kernel-Level Telemetry & Auditing',
    description: 'Kernel-level behavioral monitoring detecting zero-day exploits, unauthorized memory access, and anomalous syscalls in sub-milliseconds.',
    icon: 'Radar',
    complianceStandard: 'CIS Benchmark Level 2',
    securityPoints: [
      'Kernel eBPF probes monitoring all system calls in real time',
      'Immutable tamper-proof write-once audit log streams',
      'Automated quarantine of compromised worker nodes in <500ms',
      'Continuous compliance audit exports for enterprise regulators'
    ],
    enclaveType: 'eBPF Behavioral Sentinel'
  }
];

// -------------------------------------------------------------
// 9. INDUSTRY USE CASES
// -------------------------------------------------------------
export const STRATOSYN_USE_CASES: IndustryUseCase[] = [
  {
    id: 'ai-ml',
    industry: 'AI & Machine Learning',
    tagline: 'Distributed Model Training & Ultra-Low Latency Inference',
    description: 'Scale foundational model training and high-throughput tensor inference across interconnected GPU nodes with RoCEv2 memory fabrics.',
    icon: 'Cpu',
    uaeContext: 'Sovereign UAE enterprise LLM deployments compliant with UAE AI Council & TDRA frameworks.',
    workloadPattern: 'High-burst GPU tensor throughput, FP8/FP16 mixed precision, multi-node checkpointing.',
    keyBenefits: [
      'Direct access to NVIDIA H100/B200 GPU clusters',
      'Sub-2ms cold model weights loading from NVMe edge cache',
      'Automated token streaming & auto-batching queues'
    ],
    metrics: [
      { label: 'Inference Velocity', value: '<8ms P99' },
      { label: 'GPU IO Bandwidth', value: '400 Gbps/node' }
    ],
    infrastructureSolution: 'Heterogeneous GPU Cluster Mesh + RoCEv2 Direct Memory'
  },
  {
    id: 'financial-systems',
    industry: 'Financial Systems & FinTech',
    tagline: 'High-Frequency Distributed Transaction Processing',
    description: 'Execute high-volume ledger transactions, foreign exchange orders, and real-time fraud scoring with multi-Raft deterministic consensus.',
    icon: 'Coins',
    uaeContext: 'Engineered for DIFC, ADGM, and Central Bank regulated financial platforms requiring sovereign data boundaries.',
    workloadPattern: 'Sub-millisecond transactional write consistency, immutable audit ledgering.',
    keyBenefits: [
      'Sub-millisecond order routing via direct fiber interconnects',
      'Hardware-enforced zero-trust credential isolation',
      'Synchronous multi-region active-active database replication'
    ],
    metrics: [
      { label: 'Settlement Latency', value: '<1.8ms' },
      { label: 'Durability Standard', value: '99.99999%' }
    ],
    infrastructureSolution: 'Multi-Raft Consensus Storage + Wireguard Micro-Mesh'
  },
  {
    id: 'global-ecommerce',
    industry: 'Global E-Commerce',
    tagline: 'Elastic Scale for High-Volume Shopping Spikes',
    description: 'Absorb sudden million-user shopping flash sales and international holiday traffic without latency degradation or checkout timeouts.',
    icon: 'ShoppingBag',
    uaeContext: 'Powers GCC regional omnichannel retail platforms with synchronized localized product catalogs & currency engines.',
    workloadPattern: 'Unpredictable 20x traffic spikes, high read/write ratio, localized inventory caching.',
    keyBenefits: [
      'Predictive auto-scaling reacting in <380ms',
      'Edge-rendered dynamic product catalogs at <5ms latency',
      'Zero-downtime rolling deploys during peak campaign launches'
    ],
    metrics: [
      { label: 'Checkout Availability', value: '99.999%' },
      { label: 'Scale-Up Velocity', value: '10x in <1.2s' }
    ],
    infrastructureSolution: 'Elastic MicroVM Clusters + Anycast Edge Caching'
  },
  {
    id: 'media-streaming',
    industry: 'Media & High-Throughput Streaming',
    tagline: 'Sub-Second Global Video & Content Distribution',
    description: 'Real-time video transcoding, adaptive bitrate streaming, and dynamic CDN asset delivery across high-density fiber exchange points.',
    icon: 'Film',
    uaeContext: 'Optimized for Middle East broadcasting networks, live sports streaming, and sovereign creative studios.',
    workloadPattern: 'Multi-terabit continuous streaming, real-time WebRTC ingest, edge transcode.',
    keyBenefits: [
      '140+ Tbps aggregate backbone bandwidth capacity',
      'Edge WebAssembly live stream transcode & watermarking',
      'Zero-buffering multi-bitrate delivery to mobile devices'
    ],
    metrics: [
      { label: 'Throughput Capacity', value: '142.8 Tbps' },
      { label: 'Buffer Ratio', value: '<0.01%' }
    ],
    infrastructureSolution: 'Anycast CDN Edge + Distributed Object Storage'
  },
  {
    id: 'enterprise-apps',
    industry: 'Enterprise Applications & ERP',
    tagline: 'Mission-Critical Digital Workload Backbone',
    description: 'Run complex ERP platforms, supply chain databases, and internal enterprise software with strict SLA-backed reliability.',
    icon: 'Building2',
    uaeContext: 'Tailored for UAE government entities, real estate conglomerates, and international corporate groups.',
    workloadPattern: 'Continuous enterprise CRUD operations, multi-tenant RBAC, batch data processing.',
    keyBenefits: [
      'Automated zero-downtime snapshots and continuous backup',
      'SOC-2 and ISO-27001 verified security perimeter',
      'Direct dedicated fiber links bypassing public internet'
    ],
    metrics: [
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Recovery Point (RPO)', value: '<1s' }
    ],
    infrastructureSolution: 'Dedicated Private Enclave VPC + Multi-AZ Storage'
  },
  {
    id: 'real-time-platforms',
    industry: 'Real-Time Telematics & IoT',
    tagline: 'Millions of Connected Devices Streaming Simultaneously',
    description: 'Ingest and analyze massive sensor streams, vehicle telematics, and smart city data with ultra-low jitter stream processing.',
    icon: 'Activity',
    uaeContext: 'Supports Dubai Smart City infrastructure, autonomous vehicle fleets, and UAE energy grid telemetry.',
    workloadPattern: 'High-frequency telemetry ingestion, sub-second sliding window analytics.',
    keyBenefits: [
      'Processes 12M+ concurrent telemetry events per second',
      'Sub-5ms MQTT and WebSockets edge ingestion termination',
      'Continuous stream analytics directly into columnar stores'
    ],
    metrics: [
      { label: 'Ingest Capacity', value: '12M events/s' },
      { label: 'Ingest Jitter', value: '<0.4ms' }
    ],
    infrastructureSolution: 'Edge WebSockets Mesh + Distributed Stream Ingestion'
  }
];

// -------------------------------------------------------------
// 10. INTERACTIVE MULTI-TIER ARCHITECTURE STORY (7 TIERS)
// -------------------------------------------------------------
export const ARCHITECTURE_STORY_NODES: ArchitectureTierNode[] = [
  {
    tierId: 'application',
    tierNumber: 'TIER 01',
    name: 'APPLICATION',
    role: 'Client Interfaces, APIs & Frontend Entrypoints',
    summary: 'The top-level consumer layer: Next.js applications, mobile endpoints, GraphQL gateways, and enterprise web portals.',
    deepDive: 'Requests originate here from global users and devices. Client requests immediately connect to the nearest STRATOSYN edge POP via Anycast routing.',
    keyTechnologies: ['Next.js 16', 'React 19', 'GraphQL', 'gRPC-Web', 'REST API'],
    latencyFootprint: '<1ms Client Ingress'
  },
  {
    tierId: 'orchestration',
    tierNumber: 'TIER 02',
    name: 'ORCHESTRATION',
    role: 'Intelligent Control Plane & GitOps Dispatcher',
    summary: 'The brain of the platform: parses workload manifests, enforces zero-trust rules, and directs traffic to optimal execution enclaves.',
    deepDive: 'The control plane evaluates real-time capacity and sovereign data requirements before dispatching tasks to target clusters without manual human intervention.',
    keyTechnologies: ['Declarative K8s Mesh', 'OPA Engine', 'ArgoCD', 'Terraform OpenTofu'],
    latencyFootprint: '<4ms Decision Cycle'
  },
  {
    tierId: 'compute',
    tierNumber: 'TIER 03',
    name: 'COMPUTE',
    role: 'Heterogeneous Execution & MicroVM Instances',
    summary: 'High-density compute nodes executing containerized microservices, serverless functions, and GPU inference pipelines.',
    deepDive: 'Bare-metal virtualization with memory-isolated enclaves provides sub-millisecond execution with zero noisy-neighbor performance penalties.',
    keyTechnologies: ['Firecracker MicroVM', 'NVIDIA H100 GPUs', 'Containerd', 'V8 Isolates'],
    latencyFootprint: '<120ms Warm Boot'
  },
  {
    tierId: 'network',
    tierNumber: 'TIER 04',
    name: 'NETWORK',
    role: 'Global Anycast Backbone & Kernel-Bypass Mesh',
    summary: 'High-speed software-defined transit network connecting 7 strategic world regions with wireguard encrypted backbones.',
    deepDive: 'eBPF kernel-bypass drivers handle packet inspection at 100GbE line rate, ensuring zero jitter between distributed compute nodes.',
    keyTechnologies: ['BGP Anycast', 'eBPF XDP', 'Wireguard Mesh', 'QUIC / HTTP3'],
    latencyFootprint: '<5ms Regional Hop'
  },
  {
    tierId: 'data',
    tierNumber: 'TIER 05',
    name: 'DATA',
    role: 'Distributed Storage & Active-Active Consensus',
    summary: 'Resilient multi-master databases, S3-compatible object storage, and NVMe block volumes replicated across global fault domains.',
    deepDive: 'Multi-Raft consensus algorithms guarantee immediate transactional consistency for banking ledgers and high throughput for object archives.',
    keyTechnologies: ['Multi-Raft DB', 'NVMe-oF (RoCEv2)', 'S3-Compatible Object Store', 'Redis Cluster'],
    latencyFootprint: '<25ms Global Consensus'
  },
  {
    tierId: 'observability',
    tierNumber: 'TIER 06',
    name: 'OBSERVABILITY',
    role: 'Telemetry Ingestion, eBPF Tracing & Monitoring',
    summary: 'Continuous real-time visibility engine ingesting millions of telemetry metrics, traces, and audit logs every second.',
    deepDive: 'Kernel-level probes stream performance telematics into high-cardinality storage, powering predictive anomaly detection and automated healing.',
    keyTechnologies: ['OpenTelemetry', 'Prometheus', 'eBPF Probes', 'High-Cardinality Store'],
    latencyFootprint: 'Real-time Stream (<100ms)'
  },
  {
    tierId: 'global-infrastructure',
    tierNumber: 'TIER 07',
    name: 'GLOBAL INFRASTRUCTURE',
    role: 'Physical Datacenters, Fiber Backbone & Sovereign Enclaves',
    summary: 'The physical foundation: Tier IV carrier-neutral facilities, private undersea cables, and hardware-rooted security modules.',
    deepDive: 'Located across Dubai, Frankfurt, London, Singapore, New York, Tokyo, and Sydney, providing geographic redundancy and sovereign isolation.',
    keyTechnologies: ['Tier IV Facilities', 'Dark Fiber Backbone', 'AMD SEV-SNP', 'Liquid-Cooled Racks'],
    latencyFootprint: 'Sub-second Global Transit'
  }
];

// -------------------------------------------------------------
// 11. TECHNOLOGY ECOSYSTEM
// -------------------------------------------------------------
export const STRATOSYN_TECH_ECOSYSTEM: TechEcosystemItem[] = [
  { name: 'Kubernetes', category: 'Orchestration & IaC', role: 'Container Orchestration Standard', status: 'Core Stack', version: 'v1.30.2' },
  { name: 'Docker / OCI', category: 'Container & Runtime', role: 'Container Image Packaging', status: 'Core Stack', version: 'v26.1' },
  { name: 'Terraform / OpenTofu', category: 'Orchestration & IaC', role: 'Declarative Infrastructure as Code', status: 'Core Stack', version: 'v1.7.0' },
  { name: 'PostgreSQL', category: 'Data & Caching', role: 'Distributed Relational Database', status: 'Core Stack', version: 'v16.3' },
  { name: 'Redis', category: 'Data & Caching', role: 'Ultra-Fast In-Memory Cache & Queues', status: 'Core Stack', version: 'v7.2' },
  { name: 'Linux Kernel', category: 'Container & Runtime', role: 'Low-Latency OS with eBPF Hooks', status: 'Core Stack', version: 'v6.8 LTS' },
  { name: 'OpenTelemetry', category: 'Observability & Telemetry', role: 'Vendor-Neutral Distributed Tracing', status: 'Core Stack', version: 'v1.26' },
  { name: 'Prometheus', category: 'Observability & Telemetry', role: 'High-Frequency Metric Ingestion', status: 'Core Stack', version: 'v2.52' },
  { name: 'GraphQL', category: 'Network & Protocols', role: 'Declarative API Query Layer', status: 'Core Stack', version: 'Spec 2024' },
  { name: 'REST & gRPC', category: 'Network & Protocols', role: 'High-Throughput Binary Microservices', status: 'Core Stack', version: 'HTTP/2' },
  { name: 'TypeScript', category: 'Orchestration & IaC', role: 'Type-Safe SDK & Infrastructure Scripts', status: 'Core Stack', version: 'v5.4' },
  { name: 'Python', category: 'Container & Runtime', role: 'AI / ML Workloads & Data Pipelines', status: 'Core Stack', version: 'v3.12' }
];

// -------------------------------------------------------------
// 12. OBSERVABILITY REAL-TIME STATES
// -------------------------------------------------------------
export const OBSERVABILITY_STATES: ObservabilityState[] = [
  {
    state: 'Healthy',
    code: 'STATE_NOMINAL_01',
    badgeColor: 'emerald',
    description: 'All 7 global fabrics reporting nominal latency, zero packet loss, and balanced CPU/GPU allocation.',
    activeProcesses: 48290,
    errorRate: '0.0001%',
    clusterP99: '3.8ms'
  },
  {
    state: 'Scaling',
    code: 'STATE_AUTOSCALE_ACTIVE',
    badgeColor: 'sky',
    description: 'Predictive autoscaler dynamically spinning up 120 additional container pods in Dubai & Singapore.',
    activeProcesses: 52140,
    errorRate: '0.0003%',
    clusterP99: '4.6ms'
  },
  {
    state: 'Processing',
    code: 'STATE_HPC_ACTIVE',
    badgeColor: 'indigo',
    description: 'Distributed GPU tensor inference pipeline actively executing large-scale FP8 model evaluations.',
    activeProcesses: 49810,
    errorRate: '0.0001%',
    clusterP99: '4.1ms'
  },
  {
    state: 'Routing',
    code: 'STATE_MESH_REBALANCE',
    badgeColor: 'cyan',
    description: 'Anycast edge adjusting BGP paths to optimize inter-ocean transit routes around fiber maintenance.',
    activeProcesses: 48290,
    errorRate: '0.0002%',
    clusterP99: '5.2ms'
  },
  {
    state: 'Recovering',
    code: 'STATE_SELF_HEAL_ACTIVE',
    badgeColor: 'amber',
    description: 'Single node in Frankfurt cordoned for memory compaction; all workloads transferred in <400ms.',
    activeProcesses: 48290,
    errorRate: '0.0005%',
    clusterP99: '4.9ms'
  }
];

// -------------------------------------------------------------
// 13. WORKLOAD CONFIGURATOR PRESETS & SIZING MATRIX
// -------------------------------------------------------------
export interface WorkloadProfile {
  id: string;
  name: string;
  description: string;
  defaultVcpu: number;
  defaultRamGb: number;
  defaultGpu: number;
  defaultStorageTb: number;
  defaultRegions: number;
  trafficGbps: number;
  estimatedAedMonth: number;
  recommendedFabricTier: string;
}

export const WORKLOAD_PRESETS: WorkloadProfile[] = [
  {
    id: 'startup-edge',
    name: 'Edge API & Microservices',
    description: 'Ideal for fast-growth SaaS, mobile backends, and low-latency API platforms.',
    defaultVcpu: 32,
    defaultRamGb: 128,
    defaultGpu: 0,
    defaultStorageTb: 2,
    defaultRegions: 2,
    trafficGbps: 10,
    estimatedAedMonth: 3500,
    recommendedFabricTier: 'Enterprise Edge (Dubai + Frankfurt)'
  },
  {
    id: 'enterprise-core',
    name: 'Enterprise Core & Distributed DB',
    description: 'For mission-critical enterprise systems, banking engines, and sovereign workloads.',
    defaultVcpu: 128,
    defaultRamGb: 512,
    defaultGpu: 0,
    defaultStorageTb: 10,
    defaultRegions: 3,
    trafficGbps: 40,
    estimatedAedMonth: 12500,
    recommendedFabricTier: 'Sovereign Core (Dubai + Frankfurt + London)'
  },
  {
    id: 'ai-hpc-mesh',
    name: 'AI Model Inference & HPC Cluster',
    description: 'High-density GPU acceleration for LLM inference, model fine-tuning, and real-time vision.',
    defaultVcpu: 256,
    defaultRamGb: 1024,
    defaultGpu: 16,
    defaultStorageTb: 50,
    defaultRegions: 4,
    trafficGbps: 100,
    estimatedAedMonth: 38000,
    recommendedFabricTier: 'Global GPU Fabric (Dubai + Frankfurt + Tokyo + NY)'
  }
];

// -------------------------------------------------------------
// 14. STRATOSYN PROJECT OVERVIEW METADATA
// -------------------------------------------------------------
export const STRATOSYN_METADATA = {
  projectNumber: 70,
  brandName: 'STRATOSYN',
  positioning: 'Distributed Cloud Infrastructure',
  tagline: 'Compute, Everywhere.',
  headline: 'Compute, Everywhere.',
  eyebrow: 'DISTRIBUTED CLOUD INFRASTRUCTURE',
  heroDescription: 'A distributed cloud platform engineered to move workloads closer to where the world needs them — with intelligent orchestration, real-time visibility, and infrastructure built for scale.',
  conceptualNotice: 'PLATFORM SIMULATION • CONCEPTUAL ARCHITECTURE • ALL METRICS FOR DEMONSTRATION & SYSTEM DESIGN VISUALIZATION ONLY',
  uaeAnchor: 'Dubai Sovereign Cloud Hub • DIFC & ADGM Compliant Enclave • UAE Data Residency Standard'
};
