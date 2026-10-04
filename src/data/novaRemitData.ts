export interface CurrencyRate {
  code: string;
  name: string;
  flag: string;
  rateToAED: number; // 1 AED = X Currency
  buyRate: number;
  sellRate: number;
  popular: boolean;
  region: 'Asia & Pacific' | 'Middle East & Africa' | 'Europe & Americas';
}

export interface DestinationCountry {
  id: string;
  name: string;
  code: string;
  flag: string;
  currency: string;
  rate: number;
  speed: string;
  deliveryMethods: string[];
  popularAmounts: number[];
}

export interface TransferRecord {
  ref: string;
  recipient: string;
  country: string;
  currency: string;
  sendAED: number;
  receiveAmount: number;
  fee: number;
  date: string;
  status: 'Completed' | 'Processing' | 'Verification' | 'Pending';
  deliveryMethod: string;
}

export const CURRENCY_RATES: CurrencyRate[] = [
  // Popular Corridors
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', rateToAED: 22.65, buyRate: 22.70, sellRate: 22.60, popular: true, region: 'Asia & Pacific' },
  { code: 'BDT', name: 'Bangladeshi Taka', flag: '🇧🇩', rateToAED: 32.50, buyRate: 32.65, sellRate: 32.35, popular: true, region: 'Asia & Pacific' },
  { code: 'PKR', name: 'Pakistani Rupee', flag: '🇵🇰', rateToAED: 75.80, buyRate: 76.00, sellRate: 75.50, popular: true, region: 'Asia & Pacific' },
  { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', rateToAED: 15.42, buyRate: 15.50, sellRate: 15.35, popular: true, region: 'Asia & Pacific' },
  { code: 'NPR', name: 'Nepalese Rupee', flag: '🇳🇵', rateToAED: 36.20, buyRate: 36.35, sellRate: 36.05, popular: true, region: 'Asia & Pacific' },
  { code: 'LKR', name: 'Sri Lankan Rupee', flag: '🇱🇰', rateToAED: 82.40, buyRate: 82.80, sellRate: 82.00, popular: true, region: 'Asia & Pacific' },
  { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬', rateToAED: 13.20, buyRate: 13.25, sellRate: 13.15, popular: true, region: 'Middle East & Africa' },
  
  // Major Global Reserve Currencies
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', rateToAED: 0.2722, buyRate: 0.2725, sellRate: 0.2718, popular: true, region: 'Europe & Americas' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', rateToAED: 0.2505, buyRate: 0.2510, sellRate: 0.2498, popular: true, region: 'Europe & Americas' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', rateToAED: 0.2138, buyRate: 0.2142, sellRate: 0.2132, popular: true, region: 'Europe & Americas' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', rateToAED: 0.3680, buyRate: 0.3690, sellRate: 0.3670, popular: true, region: 'Europe & Americas' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', rateToAED: 0.4120, buyRate: 0.4135, sellRate: 0.4105, popular: true, region: 'Asia & Pacific' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', rateToAED: 0.3650, buyRate: 0.3665, sellRate: 0.3635, popular: false, region: 'Asia & Pacific' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', rateToAED: 41.25, buyRate: 41.40, sellRate: 41.10, popular: false, region: 'Asia & Pacific' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', rateToAED: 0.2410, buyRate: 0.2415, sellRate: 0.2405, popular: false, region: 'Europe & Americas' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', rateToAED: 1.965, buyRate: 1.970, sellRate: 1.960, popular: false, region: 'Asia & Pacific' },
  
  // GCC & Middle East
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', rateToAED: 1.0200, buyRate: 1.0215, sellRate: 1.0185, popular: true, region: 'Middle East & Africa' },
  { code: 'QAR', name: 'Qatari Riyal', flag: '🇶🇦', rateToAED: 0.9910, buyRate: 0.9925, sellRate: 0.9895, popular: false, region: 'Middle East & Africa' },
  { code: 'KWD', name: 'Kuwaiti Dinar', flag: '🇰🇼', rateToAED: 0.0835, buyRate: 0.0838, sellRate: 0.0832, popular: false, region: 'Middle East & Africa' },
  { code: 'BHD', name: 'Bahraini Dinar', flag: '🇧🇭', rateToAED: 0.1025, buyRate: 0.1028, sellRate: 0.1022, popular: false, region: 'Middle East & Africa' },
  { code: 'OMR', name: 'Omani Rial', flag: '🇴🇲', rateToAED: 0.1048, buyRate: 0.1052, sellRate: 0.1044, popular: false, region: 'Middle East & Africa' },
  { code: 'JOD', name: 'Jordanian Dinar', flag: '🇯🇴', rateToAED: 0.1930, buyRate: 0.1935, sellRate: 0.1925, popular: false, region: 'Middle East & Africa' },
  { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷', rateToAED: 9.45, buyRate: 9.50, sellRate: 9.40, popular: false, region: 'Middle East & Africa' },
  { code: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦', rateToAED: 2.72, buyRate: 2.74, sellRate: 2.70, popular: false, region: 'Middle East & Africa' },
  
  // African Remittance Corridors
  { code: 'KES', name: 'Kenyan Shilling', flag: '🇰🇪', rateToAED: 35.20, buyRate: 35.40, sellRate: 35.00, popular: true, region: 'Middle East & Africa' },
  { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬', rateToAED: 435.00, buyRate: 438.00, sellRate: 432.00, popular: true, region: 'Middle East & Africa' },
  { code: 'GHS', name: 'Ghanaian Cedi', flag: '🇬🇭', rateToAED: 4.15, buyRate: 4.18, sellRate: 4.12, popular: false, region: 'Middle East & Africa' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦', rateToAED: 5.02, buyRate: 5.05, sellRate: 4.99, popular: false, region: 'Middle East & Africa' },

  // Asia Pacific & Americas
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩', rateToAED: 4320.00, buyRate: 4340.00, sellRate: 4300.00, popular: false, region: 'Asia & Pacific' },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', rateToAED: 1.285, buyRate: 1.290, sellRate: 1.280, popular: false, region: 'Asia & Pacific' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', rateToAED: 9.85, buyRate: 9.90, sellRate: 9.80, popular: false, region: 'Asia & Pacific' },
  { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳', rateToAED: 6850.00, buyRate: 6880.00, sellRate: 6820.00, popular: false, region: 'Asia & Pacific' },
  { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷', rateToAED: 375.00, buyRate: 377.00, sellRate: 373.00, popular: false, region: 'Asia & Pacific' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', rateToAED: 0.448, buyRate: 0.450, sellRate: 0.446, popular: false, region: 'Asia & Pacific' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', rateToAED: 1.48, buyRate: 1.49, sellRate: 1.47, popular: false, region: 'Europe & Americas' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', rateToAED: 5.15, buyRate: 5.18, sellRate: 5.12, popular: false, region: 'Europe & Americas' }
];

export const DESTINATIONS: DestinationCountry[] = [
  {
    id: 'india',
    name: 'India',
    code: 'IN',
    flag: '🇮🇳',
    currency: 'INR',
    rate: 22.65,
    speed: 'Instant (UPI & IMPS)',
    deliveryMethods: ['Direct Bank Deposit (IMPS)', 'UPI Instant Transfer', 'Cash Pickup Over Counter'],
    popularAmounts: [500, 1000, 2000, 5000, 10000]
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    code: 'BD',
    flag: '🇧🇩',
    currency: 'BDT',
    rate: 32.50,
    speed: '10 Mins (bKash/Bank)',
    deliveryMethods: ['Bank Account Deposit', 'bKash Mobile Wallet', 'Nagad Wallet', 'Cash Pickup Counter'],
    popularAmounts: [500, 1000, 2000, 5000, 10000]
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    code: 'PK',
    flag: '🇵🇰',
    currency: 'PKR',
    rate: 75.80,
    speed: 'Instant (Raast / 1LINK)',
    deliveryMethods: ['Raast Instant Deposit', 'Easypaisa / JazzCash', 'Cash Pickup Over Counter'],
    popularAmounts: [500, 1000, 2000, 5000, 10000]
  },
  {
    id: 'philippines',
    name: 'Philippines',
    code: 'PH',
    flag: '🇵🇭',
    currency: 'PHP',
    rate: 15.42,
    speed: 'Instant (GCash / InstaPay)',
    deliveryMethods: ['GCash / Maya Wallet', 'InstaPay Direct Bank', 'Cebuana / Palawan Cash Pickup'],
    popularAmounts: [500, 1000, 2000, 5000, 10000]
  },
  {
    id: 'egypt',
    name: 'Egypt',
    code: 'EG',
    flag: '🇪🇬',
    currency: 'EGP',
    rate: 13.20,
    speed: 'Sub-30 Mins (InstaPay / Bank)',
    deliveryMethods: ['InstaPay Egypt Bank', 'Vodafone Cash Wallet', 'National Bank Cash Pickup'],
    popularAmounts: [500, 1000, 2500, 5000]
  },
  {
    id: 'nepal',
    name: 'Nepal',
    code: 'NP',
    flag: '🇳🇵',
    currency: 'NPR',
    rate: 36.20,
    speed: 'Same-Day Settlement',
    deliveryMethods: ['eSewa Wallet', 'Direct Bank Account', 'Global IME Cash Counter'],
    popularAmounts: [500, 1000, 2000, 5000]
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    code: 'LK',
    flag: '🇱🇰',
    currency: 'LKR',
    rate: 82.40,
    speed: 'Same-Day Bank Account',
    deliveryMethods: ['Commercial Bank Account', 'eZ Cash', 'Bank Cash Pickup'],
    popularAmounts: [500, 1000, 2000, 5000]
  },
  {
    id: 'kenya',
    name: 'Kenya',
    code: 'KE',
    flag: '🇰🇪',
    currency: 'KES',
    rate: 35.20,
    speed: 'Instant (M-PESA)',
    deliveryMethods: ['M-PESA Mobile Wallet', 'Equity Bank Direct', 'KCB Bank Account'],
    popularAmounts: [500, 1000, 2000, 5000]
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    code: 'NG',
    flag: '🇳🇬',
    currency: 'NGN',
    rate: 435.00,
    speed: 'Instant NIBSS Wire',
    deliveryMethods: ['Direct NIBSS Bank Credit', 'OPay Wallet', 'FirstBank Direct'],
    popularAmounts: [500, 1000, 2500, 5000]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    currency: 'GBP',
    rate: 0.2138,
    speed: 'Faster Payments (Sub-hour)',
    deliveryMethods: ['UK Sort Code & Account Number', 'SWIFT IBAN Wire'],
    popularAmounts: [1000, 2500, 5000, 15000]
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    currency: 'USD',
    rate: 0.2722,
    speed: 'Same-Day ACH / Wire',
    deliveryMethods: ['ABA Routing & Account', 'FedWire Direct', 'SWIFT Wire'],
    popularAmounts: [1000, 2500, 5000, 20000]
  },
  {
    id: 'eurozone',
    name: 'Eurozone (Europe)',
    code: 'EU',
    flag: '🇪🇺',
    currency: 'EUR',
    rate: 0.2505,
    speed: 'SEPA Instant Credit',
    deliveryMethods: ['SEPA Instant IBAN Transfer', 'SWIFT International Wire'],
    popularAmounts: [1000, 2500, 5000, 15000]
  }
];

export const MOCK_TRANSFERS: TransferRecord[] = [
  { ref: 'NVR-2026-88192', recipient: 'Rajesh Kumar', country: 'India 🇮🇳', currency: 'INR', sendAED: 2500, receiveAmount: 56625, fee: 15, date: '2026-09-02 19:40', status: 'Completed', deliveryMethod: 'IMPS Bank Deposit' },
  { ref: 'NVR-2026-88191', recipient: 'Mohammed Hossain', country: 'Bangladesh 🇧🇩', currency: 'BDT', sendAED: 1800, receiveAmount: 58500, fee: 15, date: '2026-09-02 18:12', status: 'Completed', deliveryMethod: 'bKash Wallet' },
  { ref: 'NVR-2026-88190', recipient: 'Maria Santos', country: 'Philippines 🇵🇭', currency: 'PHP', sendAED: 3200, receiveAmount: 49344, fee: 15, date: '2026-09-02 16:50', status: 'Processing', deliveryMethod: 'GCash Wallet' },
  { ref: 'NVR-2026-88189', recipient: 'Tariq Mahmood', country: 'Pakistan 🇵🇰', currency: 'PKR', sendAED: 5000, receiveAmount: 379000, fee: 15, date: '2026-09-02 14:20', status: 'Completed', deliveryMethod: 'Raast Transfer' },
  { ref: 'NVR-2026-88188', recipient: 'Sarah Jenkins', country: 'United Kingdom 🇬🇧', currency: 'GBP', sendAED: 12000, receiveAmount: 2565.60, fee: 25, date: '2026-09-01 11:30', status: 'Completed', deliveryMethod: 'UK Faster Payments' }
];

export const UAE_BRANCHES = [
  {
    city: 'Dubai',
    branch: 'DIFC Gate Precinct 4',
    address: 'Level 2, Gate Precinct Building 4, DIFC, Dubai',
    phone: '+971 4 398 4000',
    hours: 'Mon - Sat: 8:00 AM - 9:00 PM',
    services: ['VIP Counter', 'Corporate FX Settlement', 'Mass Remittance', 'Multi-Currency Cash']
  },
  {
    city: 'Dubai',
    branch: 'Al Rigga Central Plaza',
    address: 'Al Rigga Road, Near Al Rigga Metro Station, Deira, Dubai',
    phone: '+971 4 222 8100',
    hours: 'Mon - Sun: 7:30 AM - 10:30 PM',
    services: ['Retail Cash Exchange', 'Instant Money Gram / Remittance', 'Utility Payments']
  },
  {
    city: 'Abu Dhabi',
    branch: 'Al Maryah Island Financial Tower',
    address: 'ADGM Square, Al Maryah Island, Abu Dhabi',
    phone: '+971 2 612 9000',
    hours: 'Mon - Sat: 8:00 AM - 8:30 PM',
    services: ['Institutional Wire', 'Personal Remittance', 'Rate Lock Advisory']
  },
  {
    city: 'Abu Dhabi',
    branch: 'Hamdan Street Exchange Pavilion',
    address: 'Hamdan Bin Mohammed St, Opposite Centrepoint, Abu Dhabi',
    phone: '+971 2 633 4500',
    hours: 'Mon - Sun: 7:30 AM - 10:00 PM',
    services: ['Cash Pickup Dispenser', 'Remittance Counter', 'Mobile Wallet Top-Up']
  },
  {
    city: 'Sharjah',
    branch: 'Al Majaz Waterfront Galleria',
    address: 'Corniche Street, Al Majaz 2, Sharjah',
    phone: '+971 6 556 2200',
    hours: 'Mon - Sun: 8:00 AM - 10:00 PM',
    services: ['Express Remittance', 'Currency Exchange', 'Family Payout Desk']
  }
];

export const FAQS = [
  {
    q: "How does AED currency exchange and international remittance work?",
    a: "Nova Remit allows you to convert UAE Dirhams (AED) into 135+ global currencies and send funds directly to bank accounts, mobile wallets (bKash, GCash, Easypaisa, UPI, M-PESA, InstaPay), or over-the-counter cash pickup locations worldwide."
  },
  {
    q: "Are exchange rates guaranteed before I confirm the transfer?",
    a: "Yes. When you initiate a transfer on Nova Remit, your exchange rate is locked in for 15 minutes. The exact recipient amount and zero-hidden-fee breakdown are displayed before you submit."
  },
  {
    q: "How long does it take for money to reach the recipient?",
    a: "Over 85% of transfers to India, Bangladesh, Pakistan, Philippines, Egypt, and Kenya settle within 60 seconds via UPI, IMPS, bKash, M-PESA, or Raast. Standard international bank wires arrive within 1 to 2 business hours."
  },
  {
    q: "What documents are required for UAE identity verification (KYC)?",
    a: "As a registered UAE financial service demo, identity checks require a valid Emirates ID or UAE Passport. Verification takes less than 2 minutes online using our digital scan verification."
  },
  {
    q: "What is the transfer fee per transaction?",
    a: "Standard retail remittance fees start at a flat AED 15 per transfer regardless of the amount sent. High-volume business transfers and VIP accounts receive custom wholesale FX margin tiers."
  },
  {
    q: "Can UAE businesses use Nova Remit for global payroll and supplier invoices?",
    a: "Yes. Nova Remit Business enables corporate accounts to process batch CSV payroll, execute supplier payments in 190+ countries, and hedge FX volatility with rate lock contracts."
  },
  {
    q: "How can I track the status of my money transfer?",
    a: "Simply enter your 12-digit transaction reference (e.g. NVR-2026-88192) into our live Transfer Tracker tool to view step-by-step progress from debit authorization to final delivery."
  },
  {
    q: "What delivery methods are supported in recipient countries?",
    a: "We support direct bank account credit (SWIFT / IMPS / ACH / Faster Payments), instant mobile wallets (bKash, GCash, Easypaisa, eSewa, Maya, M-PESA, Vodafone Cash), and 250,000+ cash pickup counters worldwide."
  }
];
