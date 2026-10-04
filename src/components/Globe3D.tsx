'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2
} from 'lucide-react';

export interface TargetCountry {
  id: string;
  name: string;
  code: string;
  iso: string;
  flag: string;
  lat: number;
  lng: number;
  region: 'GCC & Middle East' | 'Europe' | 'North America' | 'Asia Pacific' | 'Latin America' | 'Africa';
  status: 'Primary Base' | 'Global Target Market';
  scope: string;
  currency: string;
  edgeRouting: string;
  latency: string;
}

export const TARGET_COUNTRIES: TargetCountry[] = [
  // 1. Primary Base
  { id: 'uae', name: 'United Arab Emirates', code: 'UAE', iso: 'ae', flag: '🇦🇪', lat: 24.4539, lng: 54.3773, region: 'GCC & Middle East', status: 'Primary Base', scope: 'WebStudio AE Headquarters / Primary Base Market (All 84 Live Platforms)', currency: 'AED', edgeRouting: 'Local UAE Edge (DXB-01)', latency: '3ms' },
  
  // GCC & Middle East
  { id: 'saudi', name: 'Saudi Arabia', code: 'KSA', iso: 'sa', flag: '🇸🇦', lat: 24.7136, lng: 46.6753, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'Vision 2030 Enterprise, PropTech & Multi-Tenant Retail', currency: 'SAR', edgeRouting: 'Riyadh Central Edge', latency: '12ms' },
  { id: 'qatar', name: 'Qatar', code: 'QAT', iso: 'qa', flag: '🇶🇦', lat: 25.2854, lng: 51.5310, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'Cross-Gulf Corporate, Wealth & Luxury Portals', currency: 'QAR', edgeRouting: 'Doha Gulf Mesh', latency: '8ms' },
  { id: 'kuwait', name: 'Kuwait', code: 'KWT', iso: 'kw', flag: '🇰🇼', lat: 29.3759, lng: 47.9774, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'High-Volume E-Commerce & Commercial Banking Gateways', currency: 'KWD', edgeRouting: 'Kuwait City Node', latency: '14ms' },
  { id: 'bahrain', name: 'Bahrain', code: 'BHR', iso: 'bh', flag: '🇧🇭', lat: 26.0667, lng: 50.5577, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'FinTech Sandboxes, Cloud Compute & Logistics', currency: 'BHD', edgeRouting: 'Manama Central Node', latency: '9ms' },
  { id: 'oman', name: 'Oman', code: 'OMN', iso: 'om', flag: '🇴🇲', lat: 23.5880, lng: 58.3829, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'Maritime Logistics, Clean Energy & Eco-Tourism Portals', currency: 'OMR', edgeRouting: 'Muscat Transit Edge', latency: '11ms' },
  { id: 'turkey', name: 'Turkey', code: 'TUR', iso: 'tr', flag: '🇹🇷', lat: 38.9637, lng: 35.2433, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'Eurasian E-Commerce, Manufacturing & Luxury Real Estate', currency: 'TRY / USD', edgeRouting: 'Istanbul Gateway Edge', latency: '32ms' },
  { id: 'egypt', name: 'Egypt', code: 'EGY', iso: 'eg', flag: '🇪🇬', lat: 26.8206, lng: 30.8025, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'North African Regional Commerce & High-Scale SaaS', currency: 'EGP / USD', edgeRouting: 'Cairo Regional Hub', latency: '28ms' },
  { id: 'jordan', name: 'Jordan', code: 'JOR', iso: 'jo', flag: '🇯🇴', lat: 31.2400, lng: 36.5100, region: 'GCC & Middle East', status: 'Global Target Market', scope: 'Levant Tech Bootcamps, EdTech & Digital Health', currency: 'JOD', edgeRouting: 'Amman Interconnect', latency: '22ms' },

  // Europe
  { id: 'uk', name: 'United Kingdom', code: 'UK', iso: 'gb', flag: '🇬🇧', lat: 55.3781, lng: -3.4360, region: 'Europe', status: 'Global Target Market', scope: 'London Family Offices, Cross-Border FinTech & Luxury Estates', currency: 'GBP', edgeRouting: 'London LHR Cloudflare PoP', latency: '78ms' },
  { id: 'germany', name: 'Germany', code: 'DE', iso: 'de', flag: '🇩🇪', lat: 51.1657, lng: 10.4515, region: 'Europe', status: 'Global Target Market', scope: 'Industrial B2B Platforms, Automotive & Privacy-First SaaS', currency: 'EUR', edgeRouting: 'Frankfurt FRA Central Fabric', latency: '72ms' },
  { id: 'france', name: 'France', code: 'FR', iso: 'fr', flag: '🇫🇷', lat: 46.2276, lng: 2.2137, region: 'Europe', status: 'Global Target Market', scope: 'Haute Horlogerie, Luxury Retail & Parisian E-Commerce', currency: 'EUR', edgeRouting: 'Paris CDG Sub-10ms Mesh', latency: '75ms' },
  { id: 'italy', name: 'Italy', code: 'IT', iso: 'it', flag: '🇮🇹', lat: 41.8719, lng: 12.5674, region: 'Europe', status: 'Global Target Market', scope: 'Design Systems, Haute Gastronomy & Supercar Showrooms', currency: 'EUR', edgeRouting: 'Milan MXP Node', latency: '68ms' },
  { id: 'spain', name: 'Spain', code: 'ES', iso: 'es', flag: '🇪🇸', lat: 40.4637, lng: -3.7492, region: 'Europe', status: 'Global Target Market', scope: 'Hospitality Tech, Vacation Portals & Latin Gateway Trade', currency: 'EUR', edgeRouting: 'Madrid MAD Edge PoP', latency: '82ms' },
  { id: 'netherlands', name: 'Netherlands', code: 'NL', iso: 'nl', flag: '🇳🇱', lat: 52.1326, lng: 5.2913, region: 'Europe', status: 'Global Target Market', scope: 'Global Logistics Twins, Cloud Data Centers & FinTech', currency: 'EUR', edgeRouting: 'Amsterdam AMS-IX', latency: '71ms' },
  { id: 'switzerland', name: 'Switzerland', code: 'CH', iso: 'ch', flag: '🇨🇭', lat: 46.8182, lng: 8.2275, region: 'Europe', status: 'Global Target Market', scope: 'Private Wealth Management, Institutional Custody & Biotech', currency: 'CHF', edgeRouting: 'Zurich ZRH Vault Node', latency: '69ms' },
  { id: 'sweden', name: 'Sweden', code: 'SWE', iso: 'se', flag: '🇸🇪', lat: 60.1282, lng: 18.6435, region: 'Europe', status: 'Global Target Market', scope: 'Nordic CleanTech, Gaming Platforms & Streamlined UX', currency: 'SEK', edgeRouting: 'Stockholm ARN Baltic PoP', latency: '84ms' },
  { id: 'norway', name: 'Norway', code: 'NOR', iso: 'no', flag: '🇳🇴', lat: 60.4720, lng: 8.4689, region: 'Europe', status: 'Global Target Market', scope: 'Renewable Utilities, Sovereign Asset Mgmt & Marine Fleet', currency: 'NOK', edgeRouting: 'Oslo OSL Fabric', latency: '86ms' },
  { id: 'ireland', name: 'Ireland', code: 'IE', iso: 'ie', flag: '🇮🇪', lat: 53.4129, lng: -8.2439, region: 'Europe', status: 'Global Target Market', scope: 'European Cloud Operations & Enterprise SaaS Architecture', currency: 'EUR', edgeRouting: 'Dublin DUB Cloud Node', latency: '81ms' },
  { id: 'belgium', name: 'Belgium', code: 'BE', iso: 'be', flag: '🇧🇪', lat: 50.8503, lng: 4.3517, region: 'Europe', status: 'Global Target Market', scope: 'EU Cross-Border Trade & Policy-Compliant Architecture', currency: 'EUR', edgeRouting: 'Brussels BRU Node', latency: '74ms' },
  { id: 'austria', name: 'Austria', code: 'AT', iso: 'at', flag: '🇦🇹', lat: 47.5162, lng: 14.5501, region: 'Europe', status: 'Global Target Market', scope: 'Central European Alpine Hospitality & Industrial Engineering', currency: 'EUR', edgeRouting: 'Vienna VIE Hub', latency: '67ms' },
  { id: 'poland', name: 'Poland', code: 'PL', iso: 'pl', flag: '🇵🇱', lat: 51.9194, lng: 19.1451, region: 'Europe', status: 'Global Target Market', scope: 'Eastern European Tech Corridors & Scaled Engineering Teams', currency: 'PLN / EUR', edgeRouting: 'Warsaw WAW Regional Node', latency: '73ms' },
  { id: 'portugal', name: 'Portugal', code: 'PT', iso: 'pt', flag: '🇵🇹', lat: 39.3999, lng: -8.2245, region: 'Europe', status: 'Global Target Market', scope: 'Atlantic Tech Hubs, Web3 Infrastructure & Remote Work Engines', currency: 'EUR', edgeRouting: 'Lisbon LIS Subsea Cable PoP', latency: '85ms' },
  { id: 'denmark', name: 'Denmark', code: 'DK', iso: 'dk', flag: '🇩🇰', lat: 56.2639, lng: 9.5018, region: 'Europe', status: 'Global Target Market', scope: 'Nordic Clean Energy, Maritime Tech & Minimalist Systems', currency: 'DKK', edgeRouting: 'Copenhagen CPH Edge', latency: '79ms' },
  { id: 'finland', name: 'Finland', code: 'FI', iso: 'fi', flag: '🇫🇮', lat: 61.9241, lng: 25.7482, region: 'Europe', status: 'Global Target Market', scope: 'Telecom Infrastructure, DeepTech & Cold-Climate Compute', currency: 'EUR', edgeRouting: 'Helsinki HEL Transit', latency: '87ms' },
  { id: 'greece', name: 'Greece', code: 'GR', iso: 'gr', flag: '🇬🇷', lat: 39.0742, lng: 21.8243, region: 'Europe', status: 'Global Target Market', scope: 'Aegean Maritime Shipping Portals & Luxury Island Escapes', currency: 'EUR', edgeRouting: 'Athens ATH PoP', latency: '46ms' },

  // North America
  { id: 'usa', name: 'United States', code: 'USA', iso: 'us', flag: '🇺🇸', lat: 37.0902, lng: -95.7129, region: 'North America', status: 'Global Target Market', scope: 'Silicon Valley AI Workflows, NYC Financial Portals & US Trade', currency: 'USD', edgeRouting: 'US-East / US-West Anycast', latency: '138ms' },
  { id: 'canada', name: 'Canada', code: 'CAN', iso: 'ca', flag: '🇨🇦', lat: 56.1304, lng: -106.3468, region: 'North America', status: 'Global Target Market', scope: 'Toronto FinTech, Montreal AI Labs & Cross-Border Retail', currency: 'CAD', edgeRouting: 'Toronto YYZ Edge', latency: '142ms' },
  { id: 'mexico', name: 'Mexico', code: 'MEX', iso: 'mx', flag: '🇲🇽', lat: 23.6345, lng: -102.5528, region: 'North America', status: 'Global Target Market', scope: 'Nearshore Software Architecture & Latin Commerce', currency: 'MXN / USD', edgeRouting: 'Mexico City MEX Gateway', latency: '168ms' },

  // Asia Pacific
  { id: 'singapore', name: 'Singapore', code: 'SGP', iso: 'sg', flag: '🇸🇬', lat: 1.3521, lng: 103.8198, region: 'Asia Pacific', status: 'Global Target Market', scope: 'APAC Financial Hub, Cross-Border Escrow & Sovereign Portals', currency: 'SGD / USD', edgeRouting: 'Singapore SIN Equinix Node', latency: '58ms' },
  { id: 'japan', name: 'Japan', code: 'JPN', iso: 'jp', flag: '🇯🇵', lat: 36.2048, lng: 138.2529, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Automotive Digital Twins, High-Density Robotics & Web Apps', currency: 'JPY', edgeRouting: 'Tokyo NRT Cloud Edge', latency: '118ms' },
  { id: 'south-korea', name: 'South Korea', code: 'KOR', iso: 'kr', flag: '🇰🇷', lat: 35.9078, lng: 127.7669, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Next-Gen Esports Platforms, Semiconductor UI & Mobile Edge', currency: 'KRW', edgeRouting: 'Seoul ICN Node', latency: '112ms' },
  { id: 'india', name: 'India', code: 'IND', iso: 'in', flag: '🇮🇳', lat: 20.5937, lng: 78.9629, region: 'Asia Pacific', status: 'Global Target Market', scope: 'High-Scale UPI / Payment Gateway Integrations & Enterprise Systems', currency: 'INR / USD', edgeRouting: 'Mumbai BOM Sub-20ms', latency: '24ms' },
  { id: 'pakistan', name: 'Pakistan', code: 'PAK', iso: 'pk', flag: '🇵🇰', lat: 30.3753, lng: 69.3451, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Remittance Networks, Freelance Portals & Tech Services', currency: 'PKR', edgeRouting: 'Karachi KHI Transit Fiber', latency: '21ms' },
  { id: 'bangladesh', name: 'Bangladesh', code: 'BGD', iso: 'bd', flag: '🇧🇩', lat: 23.6850, lng: 90.3563, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Garment Export Supply Chain & Mobile Financial Services (MFS)', currency: 'BDT', edgeRouting: 'Dhaka DAC Node', latency: '38ms' },
  { id: 'malaysia', name: 'Malaysia', code: 'MYS', iso: 'my', flag: '🇲🇾', lat: 4.2105, lng: 101.9758, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Islamic FinTech, Halal Logistics & Data Center Infrastructure', currency: 'MYR', edgeRouting: 'Kuala Lumpur KUL Edge', latency: '54ms' },
  { id: 'indonesia', name: 'Indonesia', code: 'IDN', iso: 'id', flag: '🇮🇩', lat: -0.7893, lng: 113.9213, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Archipelago E-Commerce & Rapid Consumer Mobile Engines', currency: 'IDR', edgeRouting: 'Jakarta CGK SEA Mesh', latency: '62ms' },
  { id: 'thailand', name: 'Thailand', code: 'THA', iso: 'th', flag: '🇹🇭', lat: 15.8700, lng: 100.9925, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Medical Tourism Portals, Hospitality Booking & Digital Trade', currency: 'THB', edgeRouting: 'Bangkok BKK Edge', latency: '49ms' },
  { id: 'vietnam', name: 'Vietnam', code: 'VN', iso: 'vn', flag: '🇻🇳', lat: 14.0583, lng: 108.2772, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Rapid Growth E-Commerce & Manufacturing Operations', currency: 'VND', edgeRouting: 'Ho Chi Minh SGN PoP', latency: '56ms' },
  { id: 'philippines', name: 'Philippines', code: 'PH', iso: 'ph', flag: '🇵🇭', lat: 12.8797, lng: 121.7740, region: 'Asia Pacific', status: 'Global Target Market', scope: 'BPO Operational Systems, Digital Wallets & Archipelagic Logistics', currency: 'PHP', edgeRouting: 'Manila MNL Transit', latency: '64ms' },
  { id: 'hong-kong', name: 'Hong Kong', code: 'HK', iso: 'hk', flag: '🇭🇰', lat: 22.3193, lng: 114.1694, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Global Trade Settlement, Wealth Management & Multi-Asset Portals', currency: 'HKD / USD', edgeRouting: 'Hong Kong HKG Central IX', latency: '61ms' },
  { id: 'taiwan', name: 'Taiwan', code: 'TW', iso: 'tw', flag: '🇹🇼', lat: 23.6978, lng: 120.9605, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Precision Hardware Supply Chain & Global Export Portals', currency: 'TWD', edgeRouting: 'Taipei TPE Gateway', latency: '72ms' },
  { id: 'australia', name: 'Australia', code: 'AUS', iso: 'au', flag: '🇦🇺', lat: -25.2744, lng: 133.7751, region: 'Asia Pacific', status: 'Global Target Market', scope: 'Mining Telemetry Dashboards, PropTech & Trans-Pacific Commerce', currency: 'AUD', edgeRouting: 'Sydney SYD Edge', latency: '124ms' },
  { id: 'new-zealand', name: 'New Zealand', code: 'NZ', iso: 'nz', flag: '🇳🇿', lat: -40.9006, lng: 174.8860, region: 'Asia Pacific', status: 'Global Target Market', scope: 'AgriTech Platforms, Sustainable Tourism & Cloud Scalability', currency: 'NZD', edgeRouting: 'Auckland AKL Gateway', latency: '136ms' },

  // Latin America
  { id: 'brazil', name: 'Brazil', code: 'BRA', iso: 'br', flag: '🇧🇷', lat: -14.2350, lng: -51.9253, region: 'Latin America', status: 'Global Target Market', scope: 'PIX Instant Settlement Architecture & South American FinTech', currency: 'BRL', edgeRouting: 'São Paulo GRU Hub', latency: '154ms' },
  { id: 'chile', name: 'Chile', code: 'CL', iso: 'cl', flag: '🇨🇱', lat: -35.6751, lng: -71.5430, region: 'Latin America', status: 'Global Target Market', scope: 'Clean Mining Systems, Renewable Telemetry & Andean Trade', currency: 'CLP', edgeRouting: 'Santiago SCL Node', latency: '172ms' },
  { id: 'colombia', name: 'Colombia', code: 'CO', iso: 'co', flag: '🇨🇴', lat: 4.5709, lng: -74.2973, region: 'Latin America', status: 'Global Target Market', scope: 'Northern South America Tech Hub & Cross-Border Logistics', currency: 'COP', edgeRouting: 'Bogota BOG Gateway', latency: '162ms' },
  { id: 'argentina', name: 'Argentina', code: 'ARG', iso: 'ar', flag: '🇦🇷', lat: -38.4161, lng: -63.6167, region: 'Latin America', status: 'Global Target Market', scope: 'Agri-Commodity Portals, Digital Engineering & FinTech', currency: 'ARS / USD', edgeRouting: 'Buenos Aires EZE Hub', latency: '178ms' },

  // Africa
  { id: 'south-africa', name: 'South Africa', code: 'ZAF', iso: 'za', flag: '🇿🇦', lat: -30.5595, lng: 22.9375, region: 'Africa', status: 'Global Target Market', scope: 'Johannesburg Corporate Banking, Mining Logistics & Retail', currency: 'ZAR', edgeRouting: 'Cape Town CPT Cable', latency: '92ms' },
  { id: 'nigeria', name: 'Nigeria', code: 'NGA', iso: 'ng', flag: '🇳🇬', lat: 9.0820, lng: 8.6753, region: 'Africa', status: 'Global Target Market', scope: 'West African FinTech, Telecom Payment Rails & High-Scale Commerce', currency: 'NGN / USD', edgeRouting: 'Lagos LOS Internet PoP', latency: '76ms' },
  { id: 'kenya', name: 'Kenya', code: 'KEN', iso: 'ke', flag: '🇰🇪', lat: -0.0236, lng: 37.9062, region: 'Africa', status: 'Global Target Market', scope: 'East African Silicon Savannah, Mobile Money & Safari Portals', currency: 'KES', edgeRouting: 'Nairobi NBO Fabric', latency: '42ms' },
  { id: 'morocco', name: 'Morocco', code: 'MAR', iso: 'ma', flag: '🇲🇦', lat: 31.7917, lng: -7.0926, region: 'Africa', status: 'Global Target Market', scope: 'North-West African Logistics, Automotive Portals & Nearshore Hubs', currency: 'MAD', edgeRouting: 'Casablanca CMN Hub', latency: '58ms' },
];

function latLngToVector3(lat: number, lng: number, radius: number = 1.0) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta)
  };
}

function slerpPoints(p1: { x: number; y: number; z: number }, p2: { x: number; y: number; z: number }, t: number, altitudeFactor: number = 1.0) {
  const dot = (p1.x * p2.x + p1.y * p2.y + p1.z * p2.z) / (Math.hypot(p1.x, p1.y, p1.z) * Math.hypot(p2.x, p2.y, p2.z));
  const clampedDot = Math.max(-1, Math.min(1, dot));
  const omega = Math.acos(clampedDot);

  if (Math.abs(omega) < 0.001) {
    return {
      x: p1.x + (p2.x - p1.x) * t,
      y: p1.y + (p2.y - p1.y) * t,
      z: p1.z + (p2.z - p1.z) * t
    };
  }

  const sinOmega = Math.sin(omega);
  const scale1 = Math.sin((1 - t) * omega) / sinOmega;
  const scale2 = Math.sin(t * omega) / sinOmega;
  const arcLift = Math.sin(t * Math.PI) * (altitudeFactor - 1.0) + 1.0;

  return {
    x: (p1.x * scale1 + p2.x * scale2) * arcLift,
    y: (p1.y * scale1 + p2.y * scale2) * arcLift,
    z: (p1.z * scale1 + p2.z * scale2) * arcLift
  };
}

const CONTINENT_POLYGONS: { lat: number; lng: number }[][] = [
  // North America
  [
    { lat: 70, lng: -160 }, { lat: 72, lng: -125 }, { lat: 60, lng: -75 },
    { lat: 48, lng: -55 }, { lat: 30, lng: -80 }, { lat: 25, lng: -80 },
    { lat: 18, lng: -105 }, { lat: 32, lng: -117 }, { lat: 50, lng: -128 },
    { lat: 60, lng: -140 }, { lat: 65, lng: -168 }, { lat: 70, lng: -160 }
  ],
  // South America
  [
    { lat: 12, lng: -72 }, { lat: -5, lng: -35 }, { lat: -22, lng: -41 },
    { lat: -54, lng: -68 }, { lat: -40, lng: -74 }, { lat: -18, lng: -70 },
    { lat: 0, lng: -80 }, { lat: 10, lng: -75 }, { lat: 12, lng: -72 }
  ],
  // Europe
  [
    { lat: 36, lng: -9 }, { lat: 44, lng: -1 }, { lat: 50, lng: 2 },
    { lat: 54, lng: 8 }, { lat: 58, lng: 5 }, { lat: 70, lng: 28 },
    { lat: 65, lng: 40 }, { lat: 48, lng: 38 }, { lat: 40, lng: 26 },
    { lat: 36, lng: -5 }, { lat: 36, lng: -9 }
  ],
  // Africa
  [
    { lat: 37, lng: 10 }, { lat: 32, lng: 32 }, { lat: 12, lng: 51 },
    { lat: -4, lng: 40 }, { lat: -34, lng: 18 }, { lat: -34, lng: 26 },
    { lat: 5, lng: 10 }, { lat: 5, lng: -10 }, { lat: 15, lng: -17 },
    { lat: 30, lng: -10 }, { lat: 37, lng: 10 }
  ],
  // Asia
  [
    { lat: 70, lng: 40 }, { lat: 72, lng: 130 }, { lat: 60, lng: 165 },
    { lat: 38, lng: 120 }, { lat: 22, lng: 114 }, { lat: 10, lng: 105 },
    { lat: 8, lng: 77 }, { lat: 25, lng: 62 }, { lat: 40, lng: 50 },
    { lat: 50, lng: 60 }, { lat: 70, lng: 40 }
  ],
  // Australia
  [
    { lat: -12, lng: 132 }, { lat: -16, lng: 145 }, { lat: -28, lng: 153 },
    { lat: -38, lng: 145 }, { lat: -35, lng: 115 }, { lat: -22, lng: 114 },
    { lat: -15, lng: 125 }, { lat: -12, lng: 132 }
  ]
];

interface Globe3DProps {
  onSelectCountry?: (country: TargetCountry) => void;
  selectedCountryId?: string;
  activeRegion?: string;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  onSelectCountry,
  selectedCountryId = 'uae',
  activeRegion = 'All'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const rotationRef = useRef<{ x: number; y: number }>({ x: 0.35, y: -0.95 });
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.35, y: -0.95 });
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const zoomRef = useRef<number>(1.12);
  const dragStartRef = useRef<{ x: number; y: number; rotX: number; rotY: number; moved: boolean; lastX: number; lastY: number; time: number } | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number>(0);
  const projectedNodesRef = useRef<{ id: string; x: number; y: number; isFront: boolean; country: TargetCountry }[]>([]);

  // Preload real country flag images for crisp multi-platform rendering
  const flagImagesRef = useRef<Map<string, HTMLImageElement>>(new Map());

  useEffect(() => {
    TARGET_COUNTRIES.forEach((c) => {
      if (!flagImagesRef.current.has(c.iso)) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = `https://flagcdn.com/w80/${c.iso}.png`;
        img.onload = () => {
          flagImagesRef.current.set(c.iso, img);
        };
      }
    });
  }, []);

  // Focus on selected country
  useEffect(() => {
    const found = TARGET_COUNTRIES.find((c) => c.id === selectedCountryId);
    if (found) {
      const targetY = -((found.lng + 90) * (Math.PI / 180));
      const targetX = (found.lat) * (Math.PI / 180) * 0.65;
      targetRotationRef.current = {
        x: Math.max(-1.1, Math.min(1.1, targetX)),
        y: targetY
      };
      idleTimerRef.current = 0;
    }
  }, [selectedCountryId]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: targetRotationRef.current.x,
      rotY: targetRotationRef.current.y,
      lastX: e.clientX,
      lastY: e.clientY,
      time: performance.now(),
      moved: false
    };
    velocityRef.current = { x: 0, y: 0 };
    setIsInteracting(true);
    idleTimerRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found: string | null = null;
      for (const node of projectedNodesRef.current) {
        if (node.isFront) {
          const dist = Math.hypot(mouseX - node.x, mouseY - node.y);
          if (dist < 22) {
            found = node.id;
            break;
          }
        }
      }
      setHoveredCountryId(found);
    }

    if (!dragStartRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    
    if (Math.hypot(deltaX, deltaY) > 3) {
      dragStartRef.current.moved = true;
    }

    const now = performance.now();
    const dt = Math.max(1, now - dragStartRef.current.time);
    const vx = (e.clientX - dragStartRef.current.lastX) / dt;
    const vy = (e.clientY - dragStartRef.current.lastY) / dt;

    velocityRef.current = { x: vy * 0.003, y: vx * 0.003 };
    dragStartRef.current.lastX = e.clientX;
    dragStartRef.current.lastY = e.clientY;
    dragStartRef.current.time = now;

    targetRotationRef.current.y = dragStartRef.current.rotY + deltaX * 0.005;
    targetRotationRef.current.x = Math.max(
      -1.15,
      Math.min(1.15, dragStartRef.current.rotX - deltaY * 0.005)
    );
    idleTimerRef.current = 0;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (dragStartRef.current && !dragStartRef.current.moved) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        for (const node of projectedNodesRef.current) {
          if (node.isFront) {
            const dist = Math.hypot(mouseX - node.x, mouseY - node.y);
            if (dist < 24) {
              onSelectCountry?.(node.country);
              break;
            }
          }
        }
      }
    }

    dragStartRef.current = null;
    setIsInteracting(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    zoomRef.current = Math.max(0.85, Math.min(1.5, zoomRef.current - e.deltaY * 0.001));
    idleTimerRef.current = 0;
  };

  const handleResetView = () => {
    targetRotationRef.current = { x: 0.35, y: -0.95 };
    zoomRef.current = 1.12;
    idleTimerRef.current = 0;
    const uae = TARGET_COUNTRIES[0];
    onSelectCountry?.(uae);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxDpr = isMobile ? 1.5 : 2.0;
    let dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      const currentMobile = window.innerWidth < 768;
      const currentMaxDpr = currentMobile ? 1.5 : 2.0;
      dpr = Math.min(window.devicePixelRatio || 1, currentMaxDpr);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Inertia & idle auto-rotation
      if (!isInteracting) {
        idleTimerRef.current += 1;
        if (idleTimerRef.current > 40) {
          targetRotationRef.current.y += 0.0015;
        }
      }

      // Smooth camera interpolation
      rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.085;
      rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.085;

      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = Math.min(width, height) * 0.44 * zoomRef.current;

      ctx.clearRect(0, 0, width, height);

      // Projection Helper
      const rotX = rotationRef.current.x;
      const rotY = rotationRef.current.y;

      const project = (p3: { x: number; y: number; z: number }, r: number = baseRadius) => {
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = p3.x * r * cosY + p3.z * r * sinY;
        const z1 = -p3.x * r * sinY + p3.z * r * cosY;

        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = p3.y * r * cosX - z1 * sinX;
        const z2 = p3.y * r * sinX + z1 * cosX;

        return {
          x: cx + x1,
          y: cy + y2,
          z: z2,
          isFront: z2 > 0
        };
      };

      // --- 1. ATMOSPHERIC HALO ---
      const outerAtmos = ctx.createRadialGradient(cx, cy, baseRadius * 0.88, cx, cy, baseRadius * 1.35);
      outerAtmos.addColorStop(0, 'rgba(245, 158, 11, 0.12)');
      outerAtmos.addColorStop(0.4, 'rgba(56, 189, 248, 0.08)');
      outerAtmos.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = outerAtmos;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // --- 2. 3D SPHERICAL BODY (CLIPPED) ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      ctx.clip();

      // Deep dark oceanic gradient
      const oceanGrad = ctx.createRadialGradient(
        cx - baseRadius * 0.28, 
        cy - baseRadius * 0.32, 
        baseRadius * 0.1, 
        cx, 
        cy, 
        baseRadius
      );
      oceanGrad.addColorStop(0, '#0d1322');
      oceanGrad.addColorStop(0.6, '#060810');
      oceanGrad.addColorStop(1, '#020306');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(cx - baseRadius, cy - baseRadius, baseRadius * 2, baseRadius * 2);

      // Lat/Long Graticule Lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        for (let lng = -180; lng <= 180; lng += 8) {
          const pt = project(latLngToVector3(lat, lng, 1.0));
          if (pt.isFront) {
            if (lng === -180) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // --- 3. CONTINENT OUTLINES & TINTED LANDMASSES ---
      CONTINENT_POLYGONS.forEach((poly) => {
        ctx.beginPath();
        let first = true;
        poly.forEach((coord) => {
          const pt3 = latLngToVector3(coord.lat, coord.lng, 1.0);
          const proj = project(pt3);
          if (proj.isFront) {
            if (first) {
              ctx.moveTo(proj.x, proj.y);
              first = false;
            } else {
              ctx.lineTo(proj.x, proj.y);
            }
          }
        });
        ctx.fillStyle = 'rgba(245, 158, 11, 0.035)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.32)';
        ctx.lineWidth = 1.0;
        ctx.stroke();
      });

      // Fresnel Rim Highlight
      const rimGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.75, cx, cy, baseRadius);
      rimGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      rimGrad.addColorStop(0.85, 'rgba(56, 189, 248, 0.15)');
      rimGrad.addColorStop(1, 'rgba(245, 158, 11, 0.35)');
      ctx.fillStyle = rimGrad;
      ctx.fillRect(cx - baseRadius, cy - baseRadius, baseRadius * 2, baseRadius * 2);

      ctx.restore(); // end clip

      // Outer golden boundary ring
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // --- 4. PROJECT ALL COUNTRY NODES ---
      const activeTargets = TARGET_COUNTRIES.filter((c) => {
        if (c.id === 'uae') return true;
        return activeRegion === 'All' || c.region === activeRegion;
      });

      const projectedNodes: { id: string; x: number; y: number; isFront: boolean; country: TargetCountry }[] = [];
      activeTargets.forEach((country) => {
        const v3 = latLngToVector3(country.lat, country.lng, 1.0);
        const proj = project(v3);
        projectedNodes.push({
          id: country.id,
          x: proj.x,
          y: proj.y,
          isFront: proj.isFront,
          country
        });
      });
      projectedNodesRef.current = projectedNodes;

      const uaeNode = projectedNodes.find((n) => n.id === 'uae');
      const uaeCountry = TARGET_COUNTRIES[0];
      const uaeV3 = latLngToVector3(uaeCountry.lat, uaeCountry.lng, 1.0);

      // --- 5. GREAT-CIRCLE PHOTON ARCS ---
      activeTargets.forEach((tgtCountry) => {
        if (tgtCountry.id === 'uae') return;

        const tgtV3 = latLngToVector3(tgtCountry.lat, tgtCountry.lng, 1.0);
        const isSelected = tgtCountry.id === selectedCountryId;
        const isHovered = tgtCountry.id === hoveredCountryId;

        const segments = 24;
        const arcPoints: { x: number; y: number; z: number; isFront: boolean }[] = [];
        let anyFront = false;
        const altitude = isSelected ? 1.28 : isHovered ? 1.25 : 1.18;

        for (let s = 0; s <= segments; s++) {
          const t = s / segments;
          const slerped = slerpPoints(uaeV3, tgtV3, t, altitude);
          const proj = project(slerped);
          if (proj.isFront) anyFront = true;
          arcPoints.push(proj);
        }

        if (anyFront) {
          ctx.save();
          ctx.beginPath();
          let started = false;
          arcPoints.forEach((pt) => {
            if (pt.isFront) {
              if (!started) {
                ctx.moveTo(pt.x, pt.y);
                started = true;
              } else {
                ctx.lineTo(pt.x, pt.y);
              }
            } else {
              started = false;
            }
          });

          if (isSelected) {
            ctx.strokeStyle = '#F59E0B';
            ctx.lineWidth = 2.4;
            ctx.shadowColor = '#F59E0B';
            ctx.shadowBlur = 10;
          } else if (isHovered) {
            ctx.strokeStyle = '#38BDF8';
            ctx.lineWidth = 1.8;
            ctx.shadowColor = '#38BDF8';
            ctx.shadowBlur = 8;
          } else {
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.28)';
            ctx.lineWidth = 1.0;
            ctx.setLineDash([3, 5]);
          }
          ctx.stroke();

          // Animated energy pulse traveling along arc
          const speed = isSelected ? 0.45 : 0.28;
          const tParam = (time * speed + (tgtCountry.lat % 1 + 1)) % 1;
          const pulsePt = slerpPoints(uaeV3, tgtV3, tParam, altitude);
          const pulseProj = project(pulsePt);

          if (pulseProj.isFront) {
            ctx.beginPath();
            ctx.arc(pulseProj.x, pulseProj.y, isSelected ? 3.5 : 2.2, 0, Math.PI * 2);
            ctx.fillStyle = isSelected ? '#FEF08A' : '#38BDF8';
            ctx.shadowColor = isSelected ? '#F59E0B' : '#0284C7';
            ctx.shadowBlur = 8;
            ctx.fill();
          }

          ctx.restore();
        }
      });

      // --- 6. RENDER COUNTRY NODES WITH REAL VIVID NATIONAL FLAGS ---
      projectedNodes.forEach((node) => {
        if (node.id === 'uae') return;
        if (!node.isFront) return;

        const isSelected = node.id === selectedCountryId;
        const isHovered = node.id === hoveredCountryId;

        ctx.save();

        // Node Glow Halo
        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, isSelected ? 17 : 14, 0, Math.PI * 2);
          ctx.fillStyle = isSelected ? 'rgba(245, 158, 11, 0.35)' : 'rgba(56, 189, 248, 0.3)';
          ctx.fill();
        }

        const badgeRadius = isSelected ? 11 : isHovered ? 10 : 8.5;
        const img = flagImagesRef.current.get(node.country.iso);

        if (img && img.complete && img.naturalWidth > 0) {
          // Circular clip and draw real high-res flag image
          ctx.save();
          ctx.beginPath();
          ctx.arc(node.x, node.y, badgeRadius, 0, Math.PI * 2);
          ctx.clip();

          // Fill flag inside circular clip
          const drawW = badgeRadius * 2.6;
          const drawH = badgeRadius * 2;
          ctx.drawImage(img, node.x - drawW / 2, node.y - drawH / 2, drawW, drawH);
          ctx.restore();

          // Border ring around flag
          ctx.beginPath();
          ctx.arc(node.x, node.y, badgeRadius, 0, Math.PI * 2);
          ctx.strokeStyle = isSelected ? '#F59E0B' : isHovered ? '#38BDF8' : 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = isSelected ? 2.0 : 1.2;
          ctx.stroke();
        } else {
          // Fallback circular pin
          ctx.beginPath();
          ctx.arc(node.x, node.y, badgeRadius, 0, Math.PI * 2);
          ctx.fillStyle = isSelected ? '#F59E0B' : 'rgba(255, 255, 255, 0.85)';
          ctx.strokeStyle = '#07090E';
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();
        }

        // On Hover Tooltip showing details
        if (isHovered || isSelected) {
          const tooltipText = `${node.country.name} (${node.country.code})`;
          ctx.font = 'bold 10px "JetBrains Mono", monospace';
          const textWidth = ctx.measureText(tooltipText).width;

          ctx.fillStyle = 'rgba(7, 9, 14, 0.95)';
          ctx.strokeStyle = isSelected ? '#F59E0B' : '#38BDF8';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(node.x - textWidth / 2 - 8, node.y - 28, textWidth + 16, 20, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isSelected ? '#FEF08A' : '#7DD3FC';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(tooltipText, node.x, node.y - 18);
        }

        ctx.restore();
      });

      // --- 7. UAE SOVEREIGN ORIGIN BEACON & REAL UAE FLAG ---
      if (uaeNode && uaeNode.isFront) {
        ctx.save();

        // Vertical Laser Beam into space
        const beamTopPt = project(latLngToVector3(uaeCountry.lat, uaeCountry.lng, 1.4));
        const beamGrad = ctx.createLinearGradient(uaeNode.x, uaeNode.y, beamTopPt.x, beamTopPt.y);
        beamGrad.addColorStop(0, 'rgba(245, 158, 11, 0.95)');
        beamGrad.addColorStop(0.7, 'rgba(254, 240, 138, 0.45)');
        beamGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

        ctx.beginPath();
        ctx.moveTo(uaeNode.x, uaeNode.y);
        ctx.lineTo(beamTopPt.x, beamTopPt.y);
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Concentric Expanding Pulse Ring
        const pulseR = 14 + Math.sin(time * 3.5) * 4;
        ctx.beginPath();
        ctx.arc(uaeNode.x, uaeNode.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // UAE Sovereign Badge
        const uaeImg = flagImagesRef.current.get('ae');
        const badgeW = 96;
        const badgeH = 26;
        ctx.fillStyle = 'rgba(7, 9, 14, 0.95)';
        ctx.strokeStyle = '#FEF08A';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(uaeNode.x + 12, uaeNode.y - 13, badgeW, badgeH, 6);
        ctx.fill();
        ctx.stroke();

        // Draw UAE Flag in badge
        if (uaeImg && uaeImg.complete && uaeImg.naturalWidth > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(uaeNode.x + 16, uaeNode.y - 7, 20, 14, 2);
          ctx.clip();
          ctx.drawImage(uaeImg, uaeNode.x + 16, uaeNode.y - 7, 20, 14);
          ctx.restore();
        }

        ctx.font = '900 10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#FEF08A';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText('UAE BASE', uaeNode.x + 42, uaeNode.y);

        ctx.restore();
      }

      if (isVisibleOnScreen) {
        animFrameIdRef.current = requestAnimationFrame(render);
      }
    };

    let isVisibleOnScreen = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleOnScreen = entry.isIntersecting;
      if (isVisibleOnScreen && !animFrameIdRef.current) {
        animFrameIdRef.current = requestAnimationFrame(render);
      } else if (!isVisibleOnScreen && animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    }, { threshold: 0.05 });

    if (canvas) observer.observe(canvas);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) observer.unobserve(canvas);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isInteracting, selectedCountryId, hoveredCountryId, activeRegion]);

  const selectedCountry = TARGET_COUNTRIES.find((c) => c.id === selectedCountryId) || TARGET_COUNTRIES[0];

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full min-h-[480px] rounded-3xl bg-[#030712] border border-amber-500/25 p-3 sm:p-5 shadow-2xl overflow-hidden flex flex-col items-center justify-center ${
        isFullscreen ? 'fixed inset-0 z-[100] rounded-none p-6 bg-black min-h-screen' : ''
      }`}
    >
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        className="w-full h-full min-h-[420px] cursor-grab active:cursor-grabbing touch-none select-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Floating Control Deck */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
        <button
          type="button"
          onClick={() => {
            zoomRef.current = Math.min(1.5, zoomRef.current + 0.15);
            idleTimerRef.current = 0;
          }}
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          title="Zoom In"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => {
            zoomRef.current = Math.max(0.85, zoomRef.current - 0.15);
            idleTimerRef.current = 0;
          }}
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleResetView}
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          title="Reset to UAE Origin"
          aria-label="Reset to UAE Origin"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen 3D Mode'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen 3D Mode'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Top Left Live Origin Telemetry Pill */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-1.5">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-amber-500/30 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono font-bold text-slate-200 tracking-wider flex items-center gap-1.5">
            <span>3D EARTH</span>
            <span className="text-amber-400">•</span>
            <span>{selectedCountry.name.toUpperCase()}</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-400">
          <span>Latency: <strong className="text-amber-300">{selectedCountry.latency}</strong></span>
          <span>•</span>
          <span>Edge: <strong className="text-slate-200">{selectedCountry.edgeRouting}</strong></span>
        </div>
      </div>

      {/* Floating Status / Interactive Hint Footbar */}
      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-[10px] font-mono text-slate-400 z-20">
        <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
          🖱️ Drag to rotate • 🔍 Scroll to zoom • 📍 Click flag to inspect
        </span>
        <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-amber-500/30 backdrop-blur-md text-amber-300 font-semibold">
          🇦🇪 UAE Sovereign Origin • 50+ Global Target Reach
        </span>
      </div>
    </div>
  );
};
