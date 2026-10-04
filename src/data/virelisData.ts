export interface DiagnosticCase {
  id: string;
  caseNumber: string;
  patientReference: string; // Anonymous e.g. "CASE-DX-904"
  clinicalDomain: 'Hematology' | 'Oncology' | 'Cardiology' | 'Neurology' | 'Genomics';
  priority: 'STAT Critical' | 'Urgent' | 'Routine Clinical';
  status: 'In Analysis' | 'Specialist Review' | 'Verified Ready' | 'Correlating';
  imagingStudies: string[];
  labPanels: string[];
  sampleTurnaround: string;
  assignedSpecialistRole: string;
  aiAssistFlag: string;
  specimenType: string;
}

export interface LabWorkflowCategory {
  id: string;
  category: string;
  activeBatches: number;
  sampleCount: number;
  avgTurnaroundMinutes: number;
  qualityControlScore: number;
  primaryInstruments: string[];
  description: string;
  status: 'Nominal' | 'Processing Batch' | 'Quality Review';
}

export interface ImagingModality {
  id: string;
  modality: string;
  code: string;
  activeStudies: number;
  avgReconTime: string;
  sliceResolution: string;
  routingTarget: string;
  description: string;
  diagnosticFocus: string[];
}

export interface DiagnosticJourneyStage {
  step: string;
  name: string;
  title: string;
  description: string;
  clinicalRigor: string;
  qualityMechanism: string;
  icon: string;
  metric: { label: string; value: string };
}

export interface QualityTraceabilityNode {
  nodeNumber: number;
  stageName: string;
  title: string;
  action: string;
  auditSignature: string;
  roleAssigned: string;
}

export interface MultiModalStream {
  id: string;
  domain: string;
  dataType: string;
  inputSource: string;
  processingPipeline: string;
  clinicalOutput: string;
  icon: string;
}

export interface DiagnosticCapability {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  impactMetric: string;
  features: string[];
  clinicalWorkflowRole: string;
}

export interface DiagnosticSecurityPillar {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  safeguards: string[];
  architectureStandard: string;
}

export interface DiagnosticWorkflowStep {
  stepId: string;
  stepNumber: string;
  name: string;
  role: string;
  summary: string;
  deepDive: string;
  technologies: string[];
}

// -------------------------------------------------------------
// 1. DIAGNOSTIC CASES (ANONYMIZED SIMULATION)
// -------------------------------------------------------------
export const VIRELIS_DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: 'case-901',
    caseNumber: 'CASE-DX-901',
    patientReference: 'PATIENT-ANON-7841',
    clinicalDomain: 'Neurology',
    priority: 'STAT Critical',
    status: 'In Analysis',
    imagingStudies: ['3T Brain MRI Diffusion Weighted', 'MR Angiography (MRA)'],
    labPanels: ['CSF Biomarker Assay', 'High-Sensitivity Troponin'],
    sampleTurnaround: '18 min elapsed',
    assignedSpecialistRole: 'Neuro-Radiology & Clinical Neuro-Pathologist',
    aiAssistFlag: 'Cerebrovascular Perfusion Discrepancy Flagged for Specialist Verification',
    specimenType: 'Cerebrospinal Fluid & Whole Blood'
  },
  {
    id: 'case-902',
    caseNumber: 'CASE-DX-902',
    patientReference: 'PATIENT-ANON-4102',
    clinicalDomain: 'Oncology',
    priority: 'Urgent',
    status: 'Specialist Review',
    imagingStudies: ['Dual-Energy Chest CT (0.5mm Slices)', 'Whole-Body PET-CT Fusion'],
    labPanels: ['Next-Generation Sequencing (NGS 500-Gene Panel)', 'Liquid Biopsy cfDNA'],
    sampleTurnaround: '2.4 hrs elapsed',
    assignedSpecialistRole: 'Molecular Oncologist & Thoracic Radiologist',
    aiAssistFlag: 'EGFR Exon 19 Variant Highlighted with Longitudinal Volumetric Growth',
    specimenType: 'FFPE Tissue Core & Plasma cfDNA'
  },
  {
    id: 'case-903',
    caseNumber: 'CASE-DX-903',
    patientReference: 'PATIENT-ANON-6338',
    clinicalDomain: 'Cardiology',
    priority: 'STAT Critical',
    status: 'Verified Ready',
    imagingStudies: ['Coronary CT Angiogram with Fractional Flow Reserve (FFR-CT)'],
    labPanels: ['hs-cTnI Serial Kinetics', 'NT-proBNP Biomarker Assay', 'D-Dimer'],
    sampleTurnaround: '12 min elapsed',
    assignedSpecialistRole: 'Interventional Cardiologist',
    aiAssistFlag: 'Proximal LAD Plaque Morphology & Significant Luminal Stenosis Index',
    specimenType: 'Lithium Heparin Plasma'
  },
  {
    id: 'case-904',
    caseNumber: 'CASE-DX-904',
    patientReference: 'PATIENT-ANON-1994',
    clinicalDomain: 'Hematology',
    priority: 'Routine Clinical',
    status: 'Correlating',
    imagingStudies: ['Abdominal High-Resolution Ultrasound'],
    labPanels: ['Automated Digital Cell Morphology', 'Flow Cytometry (8-Color Panel)'],
    sampleTurnaround: '45 min elapsed',
    assignedSpecialistRole: 'Hematopathologist',
    aiAssistFlag: 'Atypical Lymphocyte Cluster Pattern Correlated with Peripheral Smear',
    specimenType: 'EDTA Anticoagulated Blood'
  }
];

// -------------------------------------------------------------
// 2. LABORATORY INTELLIGENCE CATEGORIES
// -------------------------------------------------------------
export const LAB_CATEGORIES: LabWorkflowCategory[] = [
  {
    id: 'hematology',
    category: 'Hematology & Coagulation',
    activeBatches: 18,
    sampleCount: 420,
    avgTurnaroundMinutes: 24,
    qualityControlScore: 99.94,
    primaryInstruments: ['Automated Laser Flow Cytometer', 'Digital Cell Morphology Scanner'],
    description: 'High-throughput complete blood counts, differential leukocyte classification, and coagulation cascade assays.',
    status: 'Nominal'
  },
  {
    id: 'biochemistry',
    category: 'Clinical Biochemistry',
    activeBatches: 32,
    sampleCount: 1250,
    avgTurnaroundMinutes: 35,
    qualityControlScore: 99.98,
    primaryInstruments: ['Photometric Multi-Channel Analyzer', 'Ion-Selective Electrode Array'],
    description: 'Electrolyte kinetics, liver/renal panels, cardiac enzymatic assays, and metabolic homeostasis profiling.',
    status: 'Nominal'
  },
  {
    id: 'microbiology',
    category: 'Microbiology & Infectious Disease',
    activeBatches: 12,
    sampleCount: 280,
    avgTurnaroundMinutes: 180,
    qualityControlScore: 99.91,
    primaryInstruments: ['MALDI-TOF Mass Spectrometer', 'Automated Micro-Broth Dilution'],
    description: 'Rapid microbial identification via laser desorption mass spectrometry and automated antimicrobial susceptibility testing (AST).',
    status: 'Processing Batch'
  },
  {
    id: 'molecular',
    category: 'Molecular Diagnostics & Genomics',
    activeBatches: 8,
    sampleCount: 96,
    avgTurnaroundMinutes: 240,
    qualityControlScore: 99.99,
    primaryInstruments: ['High-Throughput Next-Gen Sequencer (NGS)', 'Multiplex Digital Droplet PCR'],
    description: 'Comprehensive somatic genomic profiling, hereditary germline risk screening, and pathogen viral load quantitation.',
    status: 'Quality Review'
  },
  {
    id: 'immunology',
    category: 'Immunology & Serology',
    activeBatches: 14,
    sampleCount: 340,
    avgTurnaroundMinutes: 42,
    qualityControlScore: 99.95,
    primaryInstruments: ['Chemiluminescent Immunoassay (CLIA)', 'Multiplex Bead-Based Array'],
    description: 'Autoimmune antibody titrations, immunodeficiency profiling, cytokine storm monitoring, and vaccine seroconversion.',
    status: 'Nominal'
  }
];

// -------------------------------------------------------------
// 3. MEDICAL IMAGING MODALITIES
// -------------------------------------------------------------
export const IMAGING_MODALITIES: ImagingModality[] = [
  {
    id: 'mri-workflow',
    modality: 'Magnetic Resonance Imaging (3T MRI)',
    code: 'MRI-3T',
    activeStudies: 14,
    avgReconTime: '< 90 sec',
    sliceResolution: '0.4 mm Isotropic',
    routingTarget: 'Neuro-Radiology & Musculoskeletal Review',
    description: 'High-gradient neuro-cranial diffusion, functional MRI (fMRI), magnetic resonance spectroscopy (MRS), and cardiac tissue mapping.',
    diagnosticFocus: ['Cerebral White Matter Integrity', 'Myocardial Viability', 'Spinal Encroachment']
  },
  {
    id: 'ct-workflow',
    modality: 'Dual-Source Spectral CT (256-Slice)',
    code: 'CT-SPECTRAL',
    activeStudies: 28,
    avgReconTime: '< 45 sec',
    sliceResolution: '0.3 mm Ultra-High Definition',
    routingTarget: 'Cardio-Thoracic & Acute Trauma Queue',
    description: 'Sub-millimeter volumetric angiograms, mono-energetic iodine mapping, and motion-compensated coronary lumen evaluation.',
    diagnosticFocus: ['Fractional Flow Reserve (FFR-CT)', 'Pulmonary Embolism Mapping', 'Acute Trauma Triad']
  },
  {
    id: 'ultrasound-workflow',
    modality: 'Point-of-Care & Doppler Ultrasound',
    code: 'US-DOPPLER',
    activeStudies: 22,
    avgReconTime: 'Real-time Stream',
    sliceResolution: 'High-Frequency Linear Matrix',
    routingTarget: 'Vascular & Maternal-Fetal Triage',
    description: 'Color-flow hemodynamic velocity measurements, shear-wave liver elastography, and musculoskeletal joint ultrasound.',
    diagnosticFocus: ['Carotid Artery Stenosis', 'Hepatic Fibrosis Index', 'Deep Vein Thrombosis (DVT)']
  },
  {
    id: 'xray-workflow',
    modality: 'Digital Radiography (Flat Panel DR)',
    code: 'DR-XRAY',
    activeStudies: 45,
    avgReconTime: '< 15 sec',
    sliceResolution: '100 Micron Detector Pitch',
    routingTarget: 'Emergency General Radiography',
    description: 'Instant low-dose chest and skeletal imaging with automated positioning verification and bone suppression algorithms.',
    diagnosticFocus: ['Pneumothorax & Infiltrate Flags', 'Micro-Fracture Line Detection', 'Line/Tube Placement Verification']
  }
];

// -------------------------------------------------------------
// 4. THE DIAGNOSTIC JOURNEY (FROM SIGNAL TO INSIGHT)
// -------------------------------------------------------------
export const DIAGNOSTIC_JOURNEY_STAGES: DiagnosticJourneyStage[] = [
  {
    step: '01',
    name: 'INTAKE',
    title: 'Clinical Order Harmonization & Context Ingestion',
    description: 'Physician diagnostic request enters the platform. Clinical indication, prior medical records, and relevant medications are mapped to the diagnostic protocol.',
    clinicalRigor: 'Zero ambiguity in diagnostic requisition protocols.',
    qualityMechanism: 'Automated ICD-11 / SNOMED CT clinical intent validation.',
    icon: 'FileText',
    metric: { label: 'Order Processing', value: '< 2.4 sec' }
  },
  {
    step: '02',
    name: 'COLLECTION',
    title: 'Barcoded Specimen Tracking & Scan Acquisition',
    description: 'Biological samples are laser-barcoded with RFID audit caps; imaging appointments synchronize directly with DICOM worklists.',
    clinicalRigor: 'Unbroken chain of custody from patient bedside to laboratory intake.',
    qualityMechanism: 'Continuous temperature logging and positive patient biometric ID.',
    icon: 'Barcode',
    metric: { label: 'Specimen Integrity', value: '100% Chain-of-Custody' }
  },
  {
    step: '03',
    name: 'ANALYSIS',
    title: 'Multi-Modal Instrumental Processing & Reconstruction',
    description: 'High-throughput analyzers and spectral imaging scanners generate raw measurement matrices and volumetric reconstruction arrays.',
    clinicalRigor: 'Standardized instrumental calibration verified against internal reference controls.',
    qualityMechanism: 'Real-time Westgard multirule quality control checks.',
    icon: 'Cpu',
    metric: { label: 'Analysis Throughput', value: '12,500 tests/hr' }
  },
  {
    step: '04',
    name: 'VALIDATION',
    title: 'Quality Check, Anomaly Flagging & Delta Checking',
    description: 'Automated algorithms cross-reference results against patient historical baselines, biological plausibility rules, and instrumental flags.',
    clinicalRigor: 'Rigorous delta-checking prevents laboratory errors before clinician presentation.',
    qualityMechanism: 'Automated Delta-Check engine flagging >2.5 SD shifts from baseline.',
    icon: 'ShieldCheck',
    metric: { label: 'Verification Velocity', value: '< 800ms / panel' }
  },
  {
    step: '05',
    name: 'INSIGHT',
    title: 'Clinician-Readable Synthesized Diagnostic Summary',
    description: 'Laboratory values, imaging reconstructions, molecular biomarkers, and longitudinal trends coalesce into one unified multi-modal workspace.',
    clinicalRigor: 'Complex multi-specialty data organized into clear diagnostic hierarchy.',
    qualityMechanism: 'Context-aware diagnostic timeline visualization.',
    icon: 'Layers',
    metric: { label: 'Cognitive Load Reduction', value: '-65% Review Time' }
  },
  {
    step: '06',
    name: 'DECISION',
    title: 'Specialist-Supervised Treatment Decision Support',
    description: 'Authorized medical specialists evaluate structured findings to confirm diagnoses, stage conditions, and initiate targeted therapeutic regimens.',
    clinicalRigor: 'Human clinical expertise empowered by comprehensive objective evidence.',
    qualityMechanism: 'Cryptographically signed clinical authorization and audit trail.',
    icon: 'CheckCircle2',
    metric: { label: 'Decision Confidence', value: 'Full Evidence Trail' }
  }
];

// -------------------------------------------------------------
// 5. QUALITY & TRACEABILITY AUDIT PATH
// -------------------------------------------------------------
export const TRACEABILITY_PATH: QualityTraceabilityNode[] = [
  {
    nodeNumber: 1,
    stageName: 'SPECIMEN INTAKE',
    title: '2D Matrix Barcode Ingestion',
    action: 'Blood sample received with digital chain of custody; accession #VIR-90412 created.',
    auditSignature: 'HMAC-SHA256: 8a4f91b...290e',
    roleAssigned: 'Certified Phlebotomy Specialist'
  },
  {
    nodeNumber: 2,
    stageName: 'INSTRUMENT CALIBRATION',
    title: 'Pre-Run QC Standard Verification',
    action: 'Analyzer calibrated with multi-level control standards within +/- 0.5 SD tolerance.',
    auditSignature: 'QC-TOKEN: NIST-CERT-4410',
    roleAssigned: 'Biomedical Instrument Engineer'
  },
  {
    nodeNumber: 3,
    stageName: 'ANALYTICAL RUN',
    title: 'Laser Spectrophotometry Execution',
    action: 'Dual-wavelength optical absorption measurement logged at 540nm and 660nm.',
    auditSignature: 'RAW-SIGNAL: 1.482 OD',
    roleAssigned: 'Automated Robotic Track'
  },
  {
    nodeNumber: 4,
    stageName: 'DELTA CHECK VALIDATION',
    title: 'Longitudinal Plausibility Check',
    action: 'Algorithm verified result consistency against patient 6-month historical trajectory.',
    auditSignature: 'DELTA-PASS: Shift < 1.2%',
    roleAssigned: 'Clinical Decision Engine'
  },
  {
    nodeNumber: 5,
    stageName: 'SPECIALIST SIGN-OFF',
    title: 'Consultant Clinical Authorization',
    action: 'Consultant Pathologist reviews findings and cryptographically signs digital report.',
    auditSignature: 'PKI-SIGN: Dr. L. Al-Hashimi (MD, FRCPath)',
    roleAssigned: 'Consultant Clinical Pathologist'
  }
];

// -------------------------------------------------------------
// 6. MULTI-MODAL DIAGNOSTIC STREAMS
// -------------------------------------------------------------
export const MULTI_MODAL_STREAMS: MultiModalStream[] = [
  {
    id: 'lab-stream',
    domain: 'Laboratory Hematology & Biochemistry',
    dataType: 'Quantitative Numerical Biomarkers',
    inputSource: 'Photometric & CLIA Analyzers',
    processingPipeline: 'Reference Interval Alignment & Kinetic Delta Checking',
    clinicalOutput: 'Standardized Analyte Values with Historical Trajectory',
    icon: 'FlaskConical'
  },
  {
    id: 'imaging-stream',
    domain: 'Radiological DICOM Imaging',
    dataType: 'Volumetric 3D/4D Pixel Matrices',
    inputSource: '3T MRI, Spectral CT, Ultrasound',
    processingPipeline: 'Multi-Planar Reconstruction & AI Lesion Co-Registration',
    clinicalOutput: 'Interactive Volumetric DICOM Viewer with Annotated Regions of Interest',
    icon: 'Eye'
  },
  {
    id: 'molecular-stream',
    domain: 'Molecular Genetics & Next-Gen Sequencing',
    dataType: 'Genomic Variant Call Format (VCF)',
    inputSource: 'High-Throughput Sequencing Systems',
    processingPipeline: 'Bioinformatics Variant Annotation & ACMG Classification',
    clinicalOutput: 'Clinically Actionable Somatic/Germline Variant Summary',
    icon: 'Dna'
  },
  {
    id: 'pathology-stream',
    domain: 'Digital Histopathology',
    dataType: 'Gigapixel Whole Slide Images (WSI)',
    inputSource: 'Ultra-High-Resolution Digital Slide Scanners',
    processingPipeline: 'Tissue Segmentation, Cellular Density & Nuclear Pleomorphism Scoring',
    clinicalOutput: 'Sub-Micron Cellular Review with Automated Mitotic Figure Highlighting',
    icon: 'Microscope'
  },
  {
    id: 'longitudinal-stream',
    domain: 'Longitudinal Patient History',
    dataType: 'Chronological Health Record Time-Series',
    inputSource: 'Integrated Electronic Health Record (EHR)',
    processingPipeline: 'Temporal Trajectory Analytics & Comorbidity Synthesis',
    clinicalOutput: 'Multi-Year Comparative Trends & Baseline Variance Visualization',
    icon: 'TrendingUp'
  }
];

// -------------------------------------------------------------
// 7. DIAGNOSTIC CAPABILITIES (8 MODULES)
// -------------------------------------------------------------
export const VIRELIS_CAPABILITIES: DiagnosticCapability[] = [
  {
    id: 'diagnostic-workflow',
    tag: 'CAPABILITY 01',
    title: 'Diagnostic Workflow Coordination',
    subtitle: 'Unified Patient Journey from Requisition to Final Report',
    description: 'Eliminate fragmented clinical silos by synchronizing laboratory orders, radiology queues, and specialist reviews into one continuous digital pipeline.',
    icon: 'GitMerge',
    impactMetric: '-45% Overall Diagnostic Turnaround',
    features: [
      'Automated bidirectional EHR order reconciliation',
      'Dynamic multi-specialty case assignment',
      'Priority STAT routing for critical indicators',
      'Unified cross-departmental milestone tracking'
    ],
    clinicalWorkflowRole: 'Enterprise Diagnostic Operations'
  },
  {
    id: 'lab-intelligence',
    tag: 'CAPABILITY 02',
    title: 'Laboratory Intelligence',
    subtitle: 'High-Throughput Analytical Automation & Auto-Verification',
    description: 'Transform raw instrumental telemetry into verified clinical results with rules-based auto-validation, delta checking, and instrument surveillance.',
    icon: 'FlaskConical',
    impactMetric: '94% Safe Auto-Verification Rate',
    features: [
      'Westgard multirule quality control surveillance',
      'Intelligent biological plausibility delta-checks',
      'Automated reflex testing rule triggers',
      'Instrument maintenance & reagent level tracking'
    ],
    clinicalWorkflowRole: 'Clinical Laboratory Operations'
  },
  {
    id: 'imaging-coordination',
    tag: 'CAPABILITY 03',
    title: 'Imaging Workflow & PACS Integration',
    subtitle: 'Zero-Footprint Web DICOM Streaming & Collaborative Review',
    description: 'High-speed multi-planar reconstruction, volume rendering, and cross-modality comparison delivered to clinicians on any authorized browser.',
    icon: 'Eye',
    impactMetric: '< 1.2s Multi-Slice Volumetric Load',
    features: [
      'WebAssembly-accelerated zero-latency DICOM viewer',
      'Multi-modality side-by-side temporal registration',
      'Structured radiological reporting templates',
      'Direct integration with enterprise PACS archives'
    ],
    clinicalWorkflowRole: 'Radiology & Medical Imaging'
  },
  {
    id: 'ai-assisted-analysis',
    tag: 'CAPABILITY 04',
    title: 'AI-Assisted Pattern Recognition',
    subtitle: 'Clinician-Supervised Algorithmic Decision Support',
    description: 'Identify subtle morphological patterns in digital pathology, highlight nodules on volumetric CT, and prioritize urgent findings for specialist review.',
    icon: 'Cpu',
    impactMetric: 'Supervised Decision Support',
    features: [
      'Volumetric lung nodule & micro-calcification highlighting',
      'Cellular mitosis & nuclear pleomorphism heatmaps',
      'Critical value prioritization in specialist worklists',
      'Transparent reasoning overlays with confidence metrics'
    ],
    clinicalWorkflowRole: 'Augmented Specialist Review'
  },
  {
    id: 'clinical-collaboration',
    tag: 'CAPABILITY 05',
    title: 'Clinical Collaboration Hub',
    subtitle: 'Multi-Disciplinary Tumor Board & Specialist Consultations',
    description: 'Enable pathologists, radiologists, and treating oncologists to review synchronized patient cases simultaneously with interactive screen sharing.',
    icon: 'Users',
    impactMetric: 'Real-Time Multi-Specialty Quorum',
    features: [
      'Synchronized multi-user cursor & annotation sharing',
      'Integrated clinical discussion thread & audio notes',
      'Instant secondary specialist second-opinion routing',
      'Automated tumor board consensus documentation'
    ],
    clinicalWorkflowRole: 'Multi-Disciplinary Team (MDT)'
  },
  {
    id: 'quality-traceability',
    tag: 'CAPABILITY 06',
    title: 'Quality & Traceability Matrix',
    subtitle: 'Cryptographic Chain-of-Custody & Complete Audit Trail',
    description: 'Every measurement, calibration run, and report modification is permanently logged with tamper-proof signatures to ensure total medical defensibility.',
    icon: 'ShieldCheck',
    impactMetric: '100% Immutable Forensic Audit Trail',
    features: [
      'End-to-end sample barcode verification',
      'Instrument calibration cryptographic logging',
      'Role-based electronic report signing (PKI)',
      'Detailed timestamped access & review audit logs'
    ],
    clinicalWorkflowRole: 'Clinical Governance & Accreditation'
  },
  {
    id: 'data-intelligence',
    tag: 'CAPABILITY 07',
    title: 'Diagnostic Data Intelligence',
    subtitle: 'Longitudinal Trend Synthesis & Population Baselines',
    description: 'Convert disconnected test results into coherent physiological trajectories, allowing doctors to distinguish acute disease from chronic baselines.',
    icon: 'TrendingUp',
    impactMetric: '5-Year Longitudinal Trajectory View',
    features: [
      'Automated normalized biomarker trend charts',
      'Reference interval age/gender dynamic adjustments',
      'Population-level epidemiological anomaly alerts',
      'Diagnostic turnaround time bottleneck analytics'
    ],
    clinicalWorkflowRole: 'Preventive & Precision Medicine'
  },
  {
    id: 'secure-architecture',
    tag: 'CAPABILITY 08',
    title: 'Secure Health Data Architecture',
    subtitle: 'Zero-Trust Enclaves & Sovereign UAE Data Residency',
    description: 'High-security micro-segmented database architecture with end-to-end AES-256 GCM encryption, strict RBAC, and granular access audit trails.',
    icon: 'Lock',
    impactMetric: 'Zero-Trust Enclave Isolation',
    features: [
      'AES-256 hardware-encrypted database storage',
      'Granular role-based access control (RBAC)',
      'Transient memory-only DICOM image decompression',
      'UAE Sovereign Health Cloud deployment compatibility'
    ],
    clinicalWorkflowRole: 'Information Security & Compliance'
  }
];

// -------------------------------------------------------------
// 8. SECURITY & PRIVACY ARCHITECTURE
// -------------------------------------------------------------
export const VIRELIS_SECURITY_PILLARS: DiagnosticSecurityPillar[] = [
  {
    id: 'rbac-identity',
    title: 'Role-Based Clinical Access Control',
    category: 'Identity & Authentication',
    description: 'Clinicians, laboratory scientists, and administrative personnel access only the precise data tiers required for their designated clinical role.',
    icon: 'Key',
    safeguards: [
      'Hardware token FIDO2 multi-factor authentication',
      'Granular attribute-based access control (ABAC)',
      'Automatic session timeout after 5 minutes of inactivity',
      'Biometric workstation locking integration'
    ],
    architectureStandard: 'Zero-Trust Identity Protocol'
  },
  {
    id: 'encryption-vault',
    title: 'End-to-End Diagnostic Encryption',
    category: 'Data Protection in Transit & at Rest',
    description: 'All genomic sequences, high-resolution DICOM slices, and patient health markers are encrypted with customer-managed keys.',
    icon: 'Lock',
    safeguards: [
      'AES-256-GCM hardware encryption at rest',
      'TLS 1.3 with Perfect Forward Secrecy in transit',
      'Hardware Security Module (HSM) key isolation',
      'Zero unencrypted temporary files on client devices'
    ],
    architectureStandard: 'FIPS 140-3 Cryptographic Standard'
  },
  {
    id: 'audit-traceability',
    title: 'Immutable Access Audit Trail',
    category: 'Forensic Governance & Logging',
    description: 'Every record view, export, annotation, and verification action generates an immutable cryptographic log entry for clinical compliance.',
    icon: 'FileCode',
    safeguards: [
      'Write-once read-many (WORM) audit log streams',
      'Tamper-proof HMAC SHA-256 event chaining',
      'Real-time anomaly detection on bulk record exports',
      'Automated audit export for healthcare regulators'
    ],
    architectureStandard: 'Comprehensive Traceability Standard'
  },
  {
    id: 'data-segmentation',
    title: 'Clinical Data Segmentation',
    category: 'Network & Database Isolation',
    description: 'Direct patient identifiers are cryptographically separated from high-density imaging and molecular sequencing repositories.',
    icon: 'Shield',
    safeguards: [
      'Pseudonymized internal analytical identifiers',
      'Isolated micro-segmented VPC database clusters',
      'Strict API egress filtering and token validation',
      'UAE sovereign health data residency compliance'
    ],
    architectureStandard: 'Sovereign Enclave Isolation'
  }
];

// -------------------------------------------------------------
// 9. INTERACTIVE DIAGNOSTIC WORKFLOW MAP (8 STEPS)
// -------------------------------------------------------------
export const DIAGNOSTIC_WORKFLOW_MAP: DiagnosticWorkflowStep[] = [
  {
    stepId: 'req',
    stepNumber: 'STEP 01',
    name: 'REQUEST',
    role: 'Electronic Physician Order Entry (CPOE)',
    summary: 'Physician places clinical diagnostic order with integrated decision support verifying test appropriateness.',
    deepDive: 'The order is automatically structured with SNOMED CT and LOINC codes to ensure laboratory instruments configure correct reagents without manual entry.',
    technologies: ['CPOE Integration', 'LOINC Coding', 'SNOMED CT', 'HL7 FHIR API']
  },
  {
    stepId: 'sched',
    stepNumber: 'STEP 02',
    name: 'SCHEDULING',
    role: 'Automated Radiology & Phlebotomy Logistics',
    summary: 'Synchronizes patient appointment slots with scanner availability and cold-chain sample courier logistics.',
    deepDive: 'Predictive algorithms optimize scanner time slots based on patient mobility and contrast clearance requirements.',
    technologies: ['DICOM Modality Worklist', 'Resource Scheduler', 'Patient Portal API']
  },
  {
    stepId: 'coll',
    stepNumber: 'STEP 03',
    name: 'COLLECTION / IMAGING',
    role: 'Bedside Barcode Scanning & Scan Acquisition',
    summary: 'Patient identity verified with positive biometrics; samples barcoded and scans acquired on calibrated instruments.',
    deepDive: 'Instruments perform automated pre-scan calibration checks and verify sample fill volume using optical laser sensors.',
    technologies: ['Positive Patient ID', 'Laser RFID Barcoding', 'DICOM Ingestion Engine']
  },
  {
    stepId: 'proc',
    stepNumber: 'STEP 04',
    name: 'PROCESSING',
    role: 'Robotic Pre-Analytics & Spectral Reconstruction',
    summary: 'Specimens centrifuged, aliquoted, and loaded onto robotic analytical tracks; raw imaging arrays reconstructed in memory.',
    deepDive: 'Robotic pre-analytic tracks detect hemolysis, icterus, and lipemia (HIL indices) automatically before photometric aspiration.',
    technologies: ['Robotic Automation', 'Spectral Reconstruction', 'HIL Optical Sensor']
  },
  {
    stepId: 'ana',
    stepNumber: 'STEP 05',
    name: 'ANALYSIS',
    role: 'Instrumental Execution & AI Pattern Recognition',
    summary: 'Spectrophotometry, flow cytometry, and deep neural imaging algorithms execute in parallel.',
    deepDive: 'AI vision models inspect digitized slide images and CT volumetric series to highlight areas of interest for the review queue.',
    technologies: ['High-Throughput Analyzers', 'AI Decision Support', 'Bioinformatics Pipeline']
  },
  {
    stepId: 'val',
    stepNumber: 'STEP 06',
    name: 'VALIDATION',
    role: 'Multi-Rule Delta Checking & Quality Assurance',
    summary: 'Automated validation engine evaluates results against patient baseline and analytical multirules.',
    deepDive: '94% of routine normal tests auto-verify safely; statistical outliers are immediately routed with prior history to the specialist.',
    technologies: ['Delta-Check Engine', 'Westgard Multirules', 'Auto-Verification Logic']
  },
  {
    stepId: 'rep',
    stepNumber: 'STEP 07',
    name: 'REPORT',
    role: 'Unified Multi-Modal Diagnostic Synthesis',
    summary: 'Interactive digital diagnostic report compiled with laboratory values, key image slices, and molecular findings.',
    deepDive: 'The interactive report replaces flat PDFs with dynamic charts, expandable DICOM views, and annotated specialist observations.',
    technologies: ['WebAssembly DICOM', 'Interactive Data Visualizer', 'FHIR DiagnosticReport']
  },
  {
    stepId: 'clin',
    stepNumber: 'STEP 08',
    name: 'CLINICAL REVIEW',
    role: 'Physician Authorization & Care Action',
    summary: 'Attending clinical team reviews evidence-backed findings to initiate targeted precision therapy.',
    deepDive: 'Clinicians communicate securely with laboratory consultants and radiologists directly inside the case review interface.',
    technologies: ['Consultation Workspace', 'EHR Push Gateway', 'PKI Digital Signature']
  }
];

// -------------------------------------------------------------
// 10. VIRELIS METADATA
// -------------------------------------------------------------
export const VIRELIS_METADATA = {
  projectNumber: 72,
  brandName: 'VIRELIS',
  positioning: 'Diagnostic Intelligence Platform',
  tagline: 'See What Matters. Earlier.',
  headline: 'See What Matters. Earlier.',
  eyebrow: 'MEDICAL DIAGNOSTIC INTELLIGENCE',
  heroDescription: 'A connected diagnostic platform designed to bring laboratory data, imaging workflows, and clinical insight into one intelligent experience.',
  conceptualNotice: 'DIAGNOSTIC OPERATIONS — SIMULATION • CONCEPTUAL HEALTHCARE TECHNOLOGY • ALL DATA ANONYMIZED FOR SYSTEM DEMONSTRATION ONLY',
  uaeAnchor: 'Dubai & Abu Dhabi Medical Intelligence Concept • DIFC & Healthcare City Compliance Architecture • Diagnostic Decision Support Standard'
};
