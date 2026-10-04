// AUTO-GENERATED ENTERPRISE DEMO SEED DATA
// 100% ISOLATED LOCAL DATASET — NEVER SAVED TO PRODUCTION MONGODB
// Represents 52 unique clients across 10 UAE commercial industries
// 212 invoices, 637 invoice line items, and 218 payments (> 1,000 total records).

import { Client, ManagedInvoice, Payment } from "@/types/dashboard";

export const DEMO_CLIENTS: Client[] = [
  {
    "id": "cli-demo-01",
    "clientCode": "CLI-2001",
    "name": "Al Noor Supermarket L.L.C",
    "companyName": "Al Noor Supermarket L.L.C",
    "arabicName": "سوبرماركت النور ذ.م.م",
    "englishName": "Al Noor Supermarket L.L.C",
    "contactPerson": "Tariq Al-Mansoor",
    "mobile": "+971 50 9566369",
    "email": "accounts@alnoorsupermar.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 1, Plot 10",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100482910400003",
    "accountNumber": "401",
    "paymentTerms": "15 Days",
    "creditLimit": 120000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-01T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "13-09-2026",
    "totalInvoices": 5,
    "totalInvoiced": 4923.98,
    "totalPaid": 3576.83,
    "totalDue": 1347.15,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-02",
    "clientCode": "CLI-2002",
    "name": "Golden Basket Hypermarket L.L.C",
    "companyName": "Golden Basket Hypermarket L.L.C",
    "arabicName": "هايبرماركت السلة الذهبية ذ.م.م",
    "englishName": "Golden Basket Hypermarket L.L.C",
    "contactPerson": "Rashid Bin Fahad",
    "mobile": "+971 50 9908780",
    "email": "accounts@goldenbaskethy.ae",
    "address": "Dubai Commercial Business District, Sector 2, Plot 11",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100294819200003",
    "accountNumber": "402",
    "paymentTerms": "30 Days",
    "creditLimit": 250000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-02T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "13-09-2026",
    "totalInvoices": 5,
    "totalInvoiced": 4458.84,
    "totalPaid": 3749.56,
    "totalDue": 709.28,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-03",
    "clientCode": "CLI-2003",
    "name": "Green Harvest Supermarket",
    "companyName": "Green Harvest Supermarket",
    "arabicName": "سوبرماركت الحصاد الأخضر",
    "englishName": "Green Harvest Supermarket",
    "contactPerson": "Hassan Qasimi",
    "mobile": "+971 50 3366565",
    "email": "accounts@greenharvestsu.ae",
    "address": "Sharjah Commercial Business District, Sector 3, Plot 12",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100839201900003",
    "accountNumber": "403",
    "paymentTerms": "15 Days",
    "creditLimit": 90000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-03T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "14-09-2026",
    "totalInvoices": 5,
    "totalInvoiced": 4650.47,
    "totalPaid": 3634.59,
    "totalDue": 1015.88,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-04",
    "clientCode": "CLI-2004",
    "name": "Family Choice Supermarket L.L.C",
    "companyName": "Family Choice Supermarket L.L.C",
    "arabicName": "سوبرماركت خيار العائلة ذ.م.م",
    "englishName": "Family Choice Supermarket L.L.C",
    "contactPerson": "Mohammad Nuaimi",
    "mobile": "+971 50 6632404",
    "email": "accounts@familychoicesu.ae",
    "address": "Ajman Commercial Business District, Sector 4, Plot 13",
    "city": "Ajman",
    "country": "United Arab Emirates",
    "trn": "100382910400003",
    "accountNumber": "404",
    "paymentTerms": "7 Days",
    "creditLimit": 75000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-04T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "14-09-2026",
    "totalInvoices": 5,
    "totalInvoiced": 3630.9,
    "totalPaid": 2899.05,
    "totalDue": 731.85,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-05",
    "clientCode": "CLI-2005",
    "name": "Grand Central Mart L.L.C",
    "companyName": "Grand Central Mart L.L.C",
    "arabicName": "جراند سنترال مارت ذ.م.م",
    "englishName": "Grand Central Mart L.L.C",
    "contactPerson": "Zaid Al-Balooshi",
    "mobile": "+971 50 9673457",
    "email": "accounts@grandcentralma.ae",
    "address": "Dubai Commercial Business District, Sector 5, Plot 14",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100948271000003",
    "accountNumber": "405",
    "paymentTerms": "30 Days",
    "creditLimit": 180000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-05T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "27-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 4255.14,
    "totalPaid": 4255.14,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-06",
    "clientCode": "CLI-2006",
    "name": "Emirates Fresh Mart",
    "companyName": "Emirates Fresh Mart",
    "arabicName": "مارت الإمارات الطازج",
    "englishName": "Emirates Fresh Mart",
    "contactPerson": "Khalid Al-Romaithi",
    "mobile": "+971 50 2296002",
    "email": "accounts@emiratesfreshm.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 6, Plot 15",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100192840100003",
    "accountNumber": "406",
    "paymentTerms": "15 Days",
    "creditLimit": 110000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-06T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "27-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 2826.61,
    "totalPaid": 2826.61,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-07",
    "clientCode": "CLI-2007",
    "name": "City Star Supermarket L.L.C",
    "companyName": "City Star Supermarket L.L.C",
    "arabicName": "سوبرماركت نجمة المدينة ذ.م.م",
    "englishName": "City Star Supermarket L.L.C",
    "contactPerson": "Sultan Al-Zaabi",
    "mobile": "+971 50 3053563",
    "email": "accounts@citystarsuperm.ae",
    "address": "Ras Al Khaimah Commercial Business District, Sector 7, Plot 16",
    "city": "Ras Al Khaimah",
    "country": "United Arab Emirates",
    "trn": "100728192000003",
    "accountNumber": "407",
    "paymentTerms": "7 Days",
    "creditLimit": 60000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-07T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "28-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 4082.93,
    "totalPaid": 4082.93,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-08",
    "clientCode": "CLI-2008",
    "name": "Royal Garden Restaurant L.L.C",
    "companyName": "Royal Garden Restaurant L.L.C",
    "arabicName": "مطعم الحديقة الملكية ذ.م.م",
    "englishName": "Royal Garden Restaurant L.L.C",
    "contactPerson": "Chef Antoine Merheb",
    "mobile": "+971 50 5886958",
    "email": "accounts@royalgardenres.ae",
    "address": "Dubai Commercial Business District, Sector 8, Plot 17",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100582910200003",
    "accountNumber": "408",
    "paymentTerms": "7 Days",
    "creditLimit": 65000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-08T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "28-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 25258.8,
    "totalPaid": 25258.8,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-09",
    "clientCode": "CLI-2009",
    "name": "Ocean View Seafood Restaurant",
    "companyName": "Ocean View Seafood Restaurant",
    "arabicName": "مطعم إطلالة المحيط للمأكولات البحرية",
    "englishName": "Ocean View Seafood Restaurant",
    "contactPerson": "Karim Haddad",
    "mobile": "+971 50 5065622",
    "email": "accounts@oceanviewseafo.ae",
    "address": "Dubai Commercial Business District, Sector 9, Plot 18",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100482918300003",
    "accountNumber": "409",
    "paymentTerms": "7 Days",
    "creditLimit": 85000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-09T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "28-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 24045,
    "totalPaid": 24045,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-10",
    "clientCode": "CLI-2010",
    "name": "Urban Bites Restaurant L.L.C",
    "companyName": "Urban Bites Restaurant L.L.C",
    "arabicName": "مطعم لقيمات حضرية ذ.م.م",
    "englishName": "Urban Bites Restaurant L.L.C",
    "contactPerson": "Maya Nassar",
    "mobile": "+971 50 6100986",
    "email": "accounts@urbanbitesrest.ae",
    "address": "Dubai Commercial Business District, Sector 10, Plot 19",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100918274000003",
    "accountNumber": "410",
    "paymentTerms": "15 Days",
    "creditLimit": 50000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-10T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "29-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 31177.65,
    "totalPaid": 31177.65,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-11",
    "clientCode": "CLI-2011",
    "name": "Desert Rose Mandi & Grill",
    "companyName": "Desert Rose Mandi & Grill",
    "arabicName": "مطعم ومشاوي وردة الصحراء",
    "englishName": "Desert Rose Mandi & Grill",
    "contactPerson": "Saeed Al-Kindi",
    "mobile": "+971 50 5954587",
    "email": "accounts@desertrosemand.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 11, Plot 20",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100628192000003",
    "accountNumber": "411",
    "paymentTerms": "7 Days",
    "creditLimit": 45000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-11T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "29-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 20596.8,
    "totalPaid": 20596.8,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-12",
    "clientCode": "CLI-2012",
    "name": "Sultan Turkish Cuisine L.L.C",
    "companyName": "Sultan Turkish Cuisine L.L.C",
    "arabicName": "مطعم السلطان للمأكولات التركية ذ.م.م",
    "englishName": "Sultan Turkish Cuisine L.L.C",
    "contactPerson": "Burak Demir",
    "mobile": "+971 50 6664730",
    "email": "accounts@sultanturkishc.ae",
    "address": "Sharjah Commercial Business District, Sector 12, Plot 21",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100827192000003",
    "accountNumber": "412",
    "paymentTerms": "15 Days",
    "creditLimit": 55000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-12T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "29-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 19073.25,
    "totalPaid": 19073.25,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-13",
    "clientCode": "CLI-2013",
    "name": "Al Safeer Lebanese Kitchen",
    "companyName": "Al Safeer Lebanese Kitchen",
    "arabicName": "مطبخ السفير اللبناني",
    "englishName": "Al Safeer Lebanese Kitchen",
    "contactPerson": "Ziad Khoury",
    "mobile": "+971 50 6573413",
    "email": "accounts@alsafeerlebane.ae",
    "address": "Al Ain Commercial Business District, Sector 1, Plot 22",
    "city": "Al Ain",
    "country": "United Arab Emirates",
    "trn": "100372819000003",
    "accountNumber": "413",
    "paymentTerms": "7 Days",
    "creditLimit": 40000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-13T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "30-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 21316.05,
    "totalPaid": 21316.05,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-14",
    "clientCode": "CLI-2014",
    "name": "Bukhara Royal Feast Restaurant",
    "companyName": "Bukhara Royal Feast Restaurant",
    "arabicName": "مطعم بخارى للولائم الملكية",
    "englishName": "Bukhara Royal Feast Restaurant",
    "contactPerson": "Arjun Verma",
    "mobile": "+971 50 2624976",
    "email": "accounts@bukhararoyalfe.ae",
    "address": "Dubai Commercial Business District, Sector 2, Plot 23",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100281920400003",
    "accountNumber": "414",
    "paymentTerms": "15 Days",
    "creditLimit": 70000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-14T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "30-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 31928.4,
    "totalPaid": 31928.4,
    "totalDue": 0,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-15",
    "clientCode": "CLI-2015",
    "name": "Blue Horizon Roastery & Cafe",
    "companyName": "Blue Horizon Roastery & Cafe",
    "arabicName": "محمصة ومقهى الأفق الأزرق",
    "englishName": "Blue Horizon Roastery & Cafe",
    "contactPerson": "Salim Al-Harthy",
    "mobile": "+971 50 6336049",
    "email": "accounts@bluehorizonroa.ae",
    "address": "Dubai Commercial Business District, Sector 3, Plot 24",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100592819000003",
    "accountNumber": "415",
    "paymentTerms": "7 Days",
    "creditLimit": 35000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-15T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "30-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 11135.25,
    "totalPaid": 10161.9,
    "totalDue": 973.35,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-16",
    "clientCode": "CLI-2016",
    "name": "Palm Grove Specialty Coffee",
    "companyName": "Palm Grove Specialty Coffee",
    "arabicName": "مقهى واحة النخيل المختص",
    "englishName": "Palm Grove Specialty Coffee",
    "contactPerson": "Mona Al-Suwaidi",
    "mobile": "+971 50 6417734",
    "email": "accounts@palmgrovespeci.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 4, Plot 25",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100728190400003",
    "accountNumber": "416",
    "paymentTerms": "15 Days",
    "creditLimit": 40000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-16T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "31-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 12761.7,
    "totalPaid": 12331.1,
    "totalDue": 430.6,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-17",
    "clientCode": "CLI-2017",
    "name": "Desert Pearl Lounge & Cafe",
    "companyName": "Desert Pearl Lounge & Cafe",
    "arabicName": "لاونج ومقهى لؤلؤة الصحراء",
    "englishName": "Desert Pearl Lounge & Cafe",
    "contactPerson": "Faris Al-Otaiba",
    "mobile": "+971 50 4246092",
    "email": "accounts@desertpearllou.ae",
    "address": "Dubai Commercial Business District, Sector 5, Plot 26",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100819204900003",
    "accountNumber": "417",
    "paymentTerms": "7 Days",
    "creditLimit": 30000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-17T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "31-08-2026",
    "totalInvoices": 4,
    "totalInvoiced": 14522.55,
    "totalPaid": 11918.55,
    "totalDue": 2604,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-18",
    "clientCode": "CLI-2018",
    "name": "Artisan Roast Cafe L.L.C",
    "companyName": "Artisan Roast Cafe L.L.C",
    "arabicName": "مقهى التحميص الحرفي ذ.م.م",
    "englishName": "Artisan Roast Cafe L.L.C",
    "contactPerson": "Nour Al-Sabah",
    "mobile": "+971 50 8253810",
    "email": "accounts@artisanroastca.ae",
    "address": "Sharjah Commercial Business District, Sector 6, Plot 27",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100492810300003",
    "accountNumber": "418",
    "paymentTerms": "7 Days",
    "creditLimit": 25000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-18T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "01-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 13084.05,
    "totalPaid": 12820.71,
    "totalDue": 263.34,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-19",
    "clientCode": "CLI-2019",
    "name": "Velvet Bean Cafe & Lounge",
    "companyName": "Velvet Bean Cafe & Lounge",
    "arabicName": "مقهى ولاونج فيلفيت بين",
    "englishName": "Velvet Bean Cafe & Lounge",
    "contactPerson": "Elena Rostova",
    "mobile": "+971 50 7110822",
    "email": "accounts@velvetbeancafe.ae",
    "address": "Dubai Commercial Business District, Sector 7, Plot 28",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100619284000003",
    "accountNumber": "419",
    "paymentTerms": "15 Days",
    "creditLimit": 50000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-19T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.977Z",
    "lastInvoiceDate": "01-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 11081.7,
    "totalPaid": 10097.33,
    "totalDue": 984.37,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-20",
    "clientCode": "CLI-2020",
    "name": "Sunrise French Bakery & Patisserie",
    "companyName": "Sunrise French Bakery & Patisserie",
    "arabicName": "مخبز وشروق المعجنات الفرنسية",
    "englishName": "Sunrise French Bakery & Patisserie",
    "contactPerson": "Pierre Dubois",
    "mobile": "+971 50 1760606",
    "email": "accounts@sunrisefrenchb.ae",
    "address": "Dubai Commercial Business District, Sector 8, Plot 29",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100392810400003",
    "accountNumber": "420",
    "paymentTerms": "7 Days",
    "creditLimit": 45000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-20T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "01-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 36651.3,
    "totalPaid": 35415.98,
    "totalDue": 1235.32,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-21",
    "clientCode": "CLI-2021",
    "name": "Golden Wheat Artisan Bakery",
    "companyName": "Golden Wheat Artisan Bakery",
    "arabicName": "مخبز القمح الذهبي الحرفي",
    "englishName": "Golden Wheat Artisan Bakery",
    "contactPerson": "Yousef Al-Hammadi",
    "mobile": "+971 50 3724906",
    "email": "accounts@goldenwheatart.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 9, Plot 30",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100482910500003",
    "accountNumber": "421",
    "paymentTerms": "15 Days",
    "creditLimit": 50000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-21T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "02-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 28788.9,
    "totalPaid": 26665.28,
    "totalDue": 2123.62,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-22",
    "clientCode": "CLI-2022",
    "name": "Crown Sweets & Pastries L.L.C",
    "companyName": "Crown Sweets & Pastries L.L.C",
    "arabicName": "حلويات ومعجنات التاج ذ.م.م",
    "englishName": "Crown Sweets & Pastries L.L.C",
    "contactPerson": "Ahmad Barakat",
    "mobile": "+971 50 7867308",
    "email": "accounts@crownsweetspas.ae",
    "address": "Sharjah Commercial Business District, Sector 10, Plot 31",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100728194000003",
    "accountNumber": "422",
    "paymentTerms": "7 Days",
    "creditLimit": 35000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-22T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "02-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 31104.15,
    "totalPaid": 30438.98,
    "totalDue": 665.17,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-23",
    "clientCode": "CLI-2023",
    "name": "Maison Dorée Pastry Studio",
    "companyName": "Maison Dorée Pastry Studio",
    "arabicName": "استوديو ميزون دوريه للحلويات",
    "englishName": "Maison Dorée Pastry Studio",
    "contactPerson": "Claire Laurent",
    "mobile": "+971 50 5352388",
    "email": "accounts@maisondorepast.ae",
    "address": "Dubai Commercial Business District, Sector 11, Plot 32",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100928194000003",
    "accountNumber": "423",
    "paymentTerms": "15 Days",
    "creditLimit": 60000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-23T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "02-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 21834.75,
    "totalPaid": 19465.42,
    "totalDue": 2369.33,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-24",
    "clientCode": "CLI-2024",
    "name": "Al Barakah Arabic Bakery",
    "companyName": "Al Barakah Arabic Bakery",
    "arabicName": "مخبز البركة للخبز العربي",
    "englishName": "Al Barakah Arabic Bakery",
    "contactPerson": "Bashar Al-Masri",
    "mobile": "+971 50 8769162",
    "email": "accounts@albarakaharabi.ae",
    "address": "Ajman Commercial Business District, Sector 12, Plot 33",
    "city": "Ajman",
    "country": "United Arab Emirates",
    "trn": "100294810200003",
    "accountNumber": "424",
    "paymentTerms": "7 Days",
    "creditLimit": 30000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-24T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "03-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 28655.55,
    "totalPaid": 28272.72,
    "totalDue": 382.83,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-25",
    "clientCode": "CLI-2025",
    "name": "Desert Pearl Hospitality & Catering L.L.C",
    "companyName": "Desert Pearl Hospitality & Catering L.L.C",
    "arabicName": "ضيافة وتموين لؤلؤة الصحراء ذ.م.م",
    "englishName": "Desert Pearl Hospitality & Catering L.L.C",
    "contactPerson": "Hamad Al-Ghurair",
    "mobile": "+971 50 3317939",
    "email": "accounts@desertpearlhos.ae",
    "address": "Dubai Commercial Business District, Sector 1, Plot 34",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100819204000003",
    "accountNumber": "425",
    "paymentTerms": "30 Days",
    "creditLimit": 150000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-25T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "03-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 98784,
    "totalPaid": 91507.5,
    "totalDue": 7276.5,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-26",
    "clientCode": "CLI-2026",
    "name": "Imperial Banquet Catering Services",
    "companyName": "Imperial Banquet Catering Services",
    "arabicName": "خدمات تموين الولائم الإمبراطورية",
    "englishName": "Imperial Banquet Catering Services",
    "contactPerson": "Nasser Al-Dhaheri",
    "mobile": "+971 50 2968316",
    "email": "accounts@imperialbanque.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 2, Plot 35",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100619280400003",
    "accountNumber": "426",
    "paymentTerms": "30 Days",
    "creditLimit": 140000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-01T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "03-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 134767.5,
    "totalPaid": 131298.3,
    "totalDue": 3469.2,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-27",
    "clientCode": "CLI-2027",
    "name": "Golden Spoon Event Caterers",
    "companyName": "Golden Spoon Event Caterers",
    "arabicName": "متعهدو تموين الملعقة الذهبية",
    "englishName": "Golden Spoon Event Caterers",
    "contactPerson": "Sameh Fakhoury",
    "mobile": "+971 50 6607998",
    "email": "accounts@goldenspooneve.ae",
    "address": "Sharjah Commercial Business District, Sector 3, Plot 36",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100519284000003",
    "accountNumber": "427",
    "paymentTerms": "15 Days",
    "creditLimit": 80000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-02T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "04-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 80430,
    "totalPaid": 72933,
    "totalDue": 7497,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-28",
    "clientCode": "CLI-2028",
    "name": "Royal Table Corporate Catering L.L.C",
    "companyName": "Royal Table Corporate Catering L.L.C",
    "arabicName": "تموين الطاولة الملكية للشركات ذ.م.م",
    "englishName": "Royal Table Corporate Catering L.L.C",
    "contactPerson": "Laila Bouhabib",
    "mobile": "+971 50 2750743",
    "email": "accounts@royaltablecorp.ae",
    "address": "Dubai Commercial Business District, Sector 4, Plot 37",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100719284000003",
    "accountNumber": "428",
    "paymentTerms": "30 Days",
    "creditLimit": 120000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-03T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "04-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 211365,
    "totalPaid": 206396.4,
    "totalDue": 4968.6,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-29",
    "clientCode": "CLI-2029",
    "name": "Gulf Feast Catering & Hospitality",
    "companyName": "Gulf Feast Catering & Hospitality",
    "arabicName": "تموين وضيافة ولائم الخليج",
    "englishName": "Gulf Feast Catering & Hospitality",
    "contactPerson": "Ibrahim Al-Mazrouei",
    "mobile": "+971 50 7795781",
    "email": "accounts@gulffeastcater.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 5, Plot 38",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100419284000003",
    "accountNumber": "429",
    "paymentTerms": "15 Days",
    "creditLimit": 95000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-04T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "04-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 146569.5,
    "totalPaid": 122393.25,
    "totalDue": 24176.25,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-30",
    "clientCode": "CLI-2030",
    "name": "Xender For Trading L.L.C",
    "companyName": "Xender For Trading L.L.C",
    "arabicName": "زيندر للتجارة ذ.م.م",
    "englishName": "Xender For Trading L.L.C",
    "contactPerson": "Walid Kattan",
    "mobile": "+971 50 2818224",
    "email": "accounts@xenderfortradi.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 6, Plot 39",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "DUBAI 100584661100003",
    "accountNumber": "430",
    "paymentTerms": "15 Days",
    "creditLimit": 150000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-05T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "05-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 346342.5,
    "totalPaid": 340971.75,
    "totalDue": 5370.75,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-31",
    "clientCode": "CLI-2031",
    "name": "Prime Global General Trading L.L.C",
    "companyName": "Prime Global General Trading L.L.C",
    "arabicName": "برايم جلوبال للتجارة العامة ذ.م.م",
    "englishName": "Prime Global General Trading L.L.C",
    "contactPerson": "Sunil Narang",
    "mobile": "+971 50 2328632",
    "email": "accounts@primeglobalgen.ae",
    "address": "Dubai Commercial Business District, Sector 7, Plot 40",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100319284000003",
    "accountNumber": "431",
    "paymentTerms": "30 Days",
    "creditLimit": 300000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-06T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "05-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 339675,
    "totalPaid": 301586.25,
    "totalDue": 38088.75,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-32",
    "clientCode": "CLI-2032",
    "name": "Gulf Coast Commodities Trading",
    "companyName": "Gulf Coast Commodities Trading",
    "arabicName": "تجارة سلع ساحل الخليج",
    "englishName": "Gulf Coast Commodities Trading",
    "contactPerson": "Majid Al-Suwaidi",
    "mobile": "+971 50 4963071",
    "email": "accounts@gulfcoastcommo.ae",
    "address": "Sharjah Commercial Business District, Sector 8, Plot 41",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100919284000003",
    "accountNumber": "432",
    "paymentTerms": "30 Days",
    "creditLimit": 200000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-07T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "06-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 388447.5,
    "totalPaid": 375280.5,
    "totalDue": 13167,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-33",
    "clientCode": "CLI-2033",
    "name": "Al Manar Import & Export L.L.C",
    "companyName": "Al Manar Import & Export L.L.C",
    "arabicName": "المنار للاستيراد والتصدير ذ.م.م",
    "englishName": "Al Manar Import & Export L.L.C",
    "contactPerson": "Fahim Rahman",
    "mobile": "+971 50 2323061",
    "email": "accounts@almanarimporte.ae",
    "address": "Dubai Commercial Business District, Sector 9, Plot 42",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100819284000003",
    "accountNumber": "433",
    "paymentTerms": "45 Days",
    "creditLimit": 280000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 45 Days.",
    "createdAt": "2026-06-08T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "06-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 389550,
    "totalPaid": 333585,
    "totalDue": 55965,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-34",
    "clientCode": "CLI-2034",
    "name": "Apex Foodstuff Trading FZE",
    "companyName": "Apex Foodstuff Trading FZE",
    "arabicName": "أبيكس لتجارة المواد الغذائية م.ح.ز",
    "englishName": "Apex Foodstuff Trading FZE",
    "contactPerson": "Kashif Siddiqui",
    "mobile": "+971 50 6619604",
    "email": "accounts@apexfoodstufft.ae",
    "address": "Sharjah Commercial Business District, Sector 10, Plot 43",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100219284000003",
    "accountNumber": "434",
    "paymentTerms": "30 Days",
    "creditLimit": 175000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-09T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "06-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 354690,
    "totalPaid": 346794,
    "totalDue": 7896,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-35",
    "clientCode": "CLI-2035",
    "name": "Horizon Agro Trading L.L.C",
    "companyName": "Horizon Agro Trading L.L.C",
    "arabicName": "هورايزون للتجارة الزراعية ذ.م.م",
    "englishName": "Horizon Agro Trading L.L.C",
    "contactPerson": "Adnan Qureshi",
    "mobile": "+971 50 1493853",
    "email": "accounts@horizonagrotra.ae",
    "address": "Dubai Commercial Business District, Sector 11, Plot 44",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100119284000003",
    "accountNumber": "435",
    "paymentTerms": "30 Days",
    "creditLimit": 220000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-10T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "07-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 422835,
    "totalPaid": 355766.25,
    "totalDue": 67068.75,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-36",
    "clientCode": "CLI-2036",
    "name": "Marina Palm Luxury Hotel & Suites",
    "companyName": "Marina Palm Luxury Hotel & Suites",
    "arabicName": "فندق وأجنحة مارينا بالم الفاخرة",
    "englishName": "Marina Palm Luxury Hotel & Suites",
    "contactPerson": "Jean-Luc Bernard",
    "mobile": "+971 50 1013354",
    "email": "accounts@marinapalmluxu.ae",
    "address": "Dubai Commercial Business District, Sector 12, Plot 45",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100918294000003",
    "accountNumber": "436",
    "paymentTerms": "30 Days",
    "creditLimit": 200000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-11T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "07-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 104811,
    "totalPaid": 104059.2,
    "totalDue": 751.8,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-37",
    "clientCode": "CLI-2037",
    "name": "Golden Dunes Resort & Spa",
    "companyName": "Golden Dunes Resort & Spa",
    "arabicName": "منتجع وسبا الكثبان الذهبية",
    "englishName": "Golden Dunes Resort & Spa",
    "contactPerson": "Marwan Al-Nuaimi",
    "mobile": "+971 50 9730693",
    "email": "accounts@goldendunesres.ae",
    "address": "Ras Al Khaimah Commercial Business District, Sector 1, Plot 46",
    "city": "Ras Al Khaimah",
    "country": "United Arab Emirates",
    "trn": "100418294000003",
    "accountNumber": "437",
    "paymentTerms": "30 Days",
    "creditLimit": 160000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-12T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "07-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 149310,
    "totalPaid": 131853.75,
    "totalDue": 17456.25,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-38",
    "clientCode": "CLI-2038",
    "name": "Oasis Grand Palace Hotel L.L.C",
    "companyName": "Oasis Grand Palace Hotel L.L.C",
    "arabicName": "فندق قصر الواحة الكبير ذ.م.م",
    "englishName": "Oasis Grand Palace Hotel L.L.C",
    "contactPerson": "Bader Al-Siyabi",
    "mobile": "+971 50 5311703",
    "email": "accounts@oasisgrandpala.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 2, Plot 47",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100718294000003",
    "accountNumber": "438",
    "paymentTerms": "30 Days",
    "creditLimit": 250000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-13T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "08-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 164178,
    "totalPaid": 158355.75,
    "totalDue": 5822.25,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-39",
    "clientCode": "CLI-2039",
    "name": "Sea Breeze Boutique Hotel",
    "companyName": "Sea Breeze Boutique Hotel",
    "arabicName": "فندق نسيم البحر البوتيكي",
    "englishName": "Sea Breeze Boutique Hotel",
    "contactPerson": "Salem Al-Kaabi",
    "mobile": "+971 50 9549709",
    "email": "accounts@seabreezebouti.ae",
    "address": "Fujairah Commercial Business District, Sector 3, Plot 48",
    "city": "Fujairah",
    "country": "United Arab Emirates",
    "trn": "100618294000003",
    "accountNumber": "439",
    "paymentTerms": "15 Days",
    "creditLimit": 80000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-14T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "08-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 166572,
    "totalPaid": 147252,
    "totalDue": 19320,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-40",
    "clientCode": "CLI-2040",
    "name": "Creek Gate Business Hotel",
    "companyName": "Creek Gate Business Hotel",
    "arabicName": "فندق بوابة الخور لرجال الأعمال",
    "englishName": "Creek Gate Business Hotel",
    "contactPerson": "Dora Papp",
    "mobile": "+971 50 1983789",
    "email": "accounts@creekgatebusin.ae",
    "address": "Dubai Commercial Business District, Sector 4, Plot 49",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100518294000003",
    "accountNumber": "440",
    "paymentTerms": "30 Days",
    "creditLimit": 110000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-15T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "08-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 127071,
    "totalPaid": 124084.8,
    "totalDue": 2986.2,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-41",
    "clientCode": "CLI-2041",
    "name": "Al Madina Fresh Grocery",
    "companyName": "Al Madina Fresh Grocery",
    "arabicName": "بقالة المدينة الطازجة",
    "englishName": "Al Madina Fresh Grocery",
    "contactPerson": "Noushad Ali",
    "mobile": "+971 50 8775134",
    "email": "accounts@almadinafreshg.ae",
    "address": "Dubai Commercial Business District, Sector 5, Plot 50",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100418284000003",
    "accountNumber": "441",
    "paymentTerms": "7 Days",
    "creditLimit": 35000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-16T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "09-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 25680.9,
    "totalPaid": 22188.6,
    "totalDue": 3492.3,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-42",
    "clientCode": "CLI-2042",
    "name": "Corner Fresh Market L.L.C",
    "companyName": "Corner Fresh Market L.L.C",
    "arabicName": "متجر ركن الطازج ذ.م.م",
    "englishName": "Corner Fresh Market L.L.C",
    "contactPerson": "Jasim Al-Ansari",
    "mobile": "+971 50 8253438",
    "email": "accounts@cornerfreshmar.ae",
    "address": "Dubai Commercial Business District, Sector 6, Plot 51",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100318284000003",
    "accountNumber": "442",
    "paymentTerms": "7 Days",
    "creditLimit": 40000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-17T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "09-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 17228.4,
    "totalPaid": 16932.3,
    "totalDue": 296.1,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-43",
    "clientCode": "CLI-2043",
    "name": "Daily Mart Grocery L.L.C",
    "companyName": "Daily Mart Grocery L.L.C",
    "arabicName": "بقالة ديلي مارت ذ.م.م",
    "englishName": "Daily Mart Grocery L.L.C",
    "contactPerson": "Abdul Latif",
    "mobile": "+971 50 4073154",
    "email": "accounts@dailymartgroce.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 7, Plot 52",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100218284000003",
    "accountNumber": "443",
    "paymentTerms": "7 Days",
    "creditLimit": 30000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-18T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "09-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 22285.2,
    "totalPaid": 19443.38,
    "totalDue": 2841.82,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-44",
    "clientCode": "CLI-2044",
    "name": "Al Safa Express Store",
    "companyName": "Al Safa Express Store",
    "arabicName": "متجر الصفا إكسبريس",
    "englishName": "Al Safa Express Store",
    "contactPerson": "Mustafa Qadir",
    "mobile": "+971 50 4474624",
    "email": "accounts@alsafaexpresss.ae",
    "address": "Sharjah Commercial Business District, Sector 8, Plot 53",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100118284000003",
    "accountNumber": "444",
    "paymentTerms": "7 Days",
    "creditLimit": 25000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-19T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "10-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 20998.95,
    "totalPaid": 20372.52,
    "totalDue": 626.43,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-45",
    "clientCode": "CLI-2045",
    "name": "Gourmet Olive & Deli Emporium",
    "companyName": "Gourmet Olive & Deli Emporium",
    "arabicName": "معرض الزيتون والأطعمة الشهية",
    "englishName": "Gourmet Olive & Deli Emporium",
    "contactPerson": "Marco Rossi",
    "mobile": "+971 50 6773429",
    "email": "accounts@gourmetolivede.ae",
    "address": "Dubai Commercial Business District, Sector 9, Plot 54",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100817294000003",
    "accountNumber": "445",
    "paymentTerms": "15 Days",
    "creditLimit": 65000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-20T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "10-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 25515,
    "totalPaid": 23916.38,
    "totalDue": 1598.62,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-46",
    "clientCode": "CLI-2046",
    "name": "Pure Organic Pantry L.L.C",
    "companyName": "Pure Organic Pantry L.L.C",
    "arabicName": "مخزن المنتجات العضوية النقية ذ.م.م",
    "englishName": "Pure Organic Pantry L.L.C",
    "contactPerson": "Amna Al-Muhairi",
    "mobile": "+971 50 5786615",
    "email": "accounts@pureorganicpan.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 10, Plot 55",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100717294000003",
    "accountNumber": "446",
    "paymentTerms": "15 Days",
    "creditLimit": 75000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-21T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "11-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 21787.5,
    "totalPaid": 21313.95,
    "totalDue": 473.55,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-47",
    "clientCode": "CLI-2047",
    "name": "Prime Cuts Butchery & Deli",
    "companyName": "Prime Cuts Butchery & Deli",
    "arabicName": "ملحمة وأطايب اللحوم الفاخرة",
    "englishName": "Prime Cuts Butchery & Deli",
    "contactPerson": "David Campbell",
    "mobile": "+971 50 4574879",
    "email": "accounts@primecutsbutch.ae",
    "address": "Dubai Commercial Business District, Sector 11, Plot 56",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100617294000003",
    "accountNumber": "447",
    "paymentTerms": "7 Days",
    "creditLimit": 55000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 7 Days.",
    "createdAt": "2026-06-22T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "11-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 28418.25,
    "totalPaid": 18425.4,
    "totalDue": 9992.85,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-48",
    "clientCode": "CLI-2048",
    "name": "Green Leaf Nutrition Store",
    "companyName": "Green Leaf Nutrition Store",
    "arabicName": "متجر أوراق خضراء للتغذية",
    "englishName": "Green Leaf Nutrition Store",
    "contactPerson": "Reem Al-Falasi",
    "mobile": "+971 50 3958547",
    "email": "accounts@greenleafnutri.ae",
    "address": "Dubai Commercial Business District, Sector 12, Plot 57",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100517294000003",
    "accountNumber": "448",
    "paymentTerms": "15 Days",
    "creditLimit": 45000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-23T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "11-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 19574.1,
    "totalPaid": 13179.6,
    "totalDue": 6394.5,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-49",
    "clientCode": "CLI-2049",
    "name": "SpeedLine Commercial Delivery Services",
    "companyName": "SpeedLine Commercial Delivery Services",
    "arabicName": "خدمات سبيد لاين للتوصيل التجاري",
    "englishName": "SpeedLine Commercial Delivery Services",
    "contactPerson": "Kamran Baig",
    "mobile": "+971 50 4693872",
    "email": "accounts@speedlinecomme.ae",
    "address": "Dubai Commercial Business District, Sector 1, Plot 58",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100417294000003",
    "accountNumber": "449",
    "paymentTerms": "30 Days",
    "creditLimit": 80000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-24T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "12-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 123270,
    "totalPaid": 86793,
    "totalDue": 36477,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-50",
    "clientCode": "CLI-2050",
    "name": "CleanPro Facility Management L.L.C",
    "companyName": "CleanPro Facility Management L.L.C",
    "arabicName": "كلين برو لإدارة المرافق ذ.م.م",
    "englishName": "CleanPro Facility Management L.L.C",
    "contactPerson": "Hazem Metwally",
    "mobile": "+971 50 7040175",
    "email": "accounts@cleanprofacili.ae",
    "address": "Abu Dhabi Commercial Business District, Sector 2, Plot 59",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "trn": "100317294000003",
    "accountNumber": "450",
    "paymentTerms": "30 Days",
    "creditLimit": 90000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-25T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "12-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 105609,
    "totalPaid": 70234.5,
    "totalDue": 35374.5,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-51",
    "clientCode": "CLI-2051",
    "name": "ColdChain Logistics Services L.L.C",
    "companyName": "ColdChain Logistics Services L.L.C",
    "arabicName": "خدمات سلاسل التبريد اللوجستية ذ.م.م",
    "englishName": "ColdChain Logistics Services L.L.C",
    "contactPerson": "Shaji Mathew",
    "mobile": "+971 50 1271873",
    "email": "accounts@coldchainlogis.ae",
    "address": "Dubai Commercial Business District, Sector 3, Plot 60",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "trn": "100217294000003",
    "accountNumber": "451",
    "paymentTerms": "30 Days",
    "creditLimit": 130000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 30 Days.",
    "createdAt": "2026-06-01T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "12-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 90730.5,
    "totalPaid": 75726,
    "totalDue": 15004.5,
    "totalOverdue": 0
  },
  {
    "id": "cli-demo-52",
    "clientCode": "CLI-2052",
    "name": "FreshFleet Distribution Services",
    "companyName": "FreshFleet Distribution Services",
    "arabicName": "خدمات أسطول الطازج للتوزيع",
    "englishName": "FreshFleet Distribution Services",
    "contactPerson": "Ali Reza",
    "mobile": "+971 50 5056661",
    "email": "accounts@freshfleetdist.ae",
    "address": "Sharjah Commercial Business District, Sector 4, Plot 61",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "trn": "100117294000003",
    "accountNumber": "452",
    "paymentTerms": "15 Days",
    "creditLimit": 70000,
    "notes": "VIP Commercial Client. Approved trade license. Terms: 15 Days.",
    "createdAt": "2026-06-02T00:00:00.000Z",
    "updatedAt": "2026-09-17T00:17:43.978Z",
    "lastInvoiceDate": "13-09-2026",
    "totalInvoices": 4,
    "totalInvoiced": 110544,
    "totalPaid": 72387,
    "totalDue": 38157,
    "totalOverdue": 0
  }
];

export const DEMO_INVOICES: ManagedInvoice[] = [
  {
    "id": "inv-demo-1",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-01",
      "name": "Al Noor Supermarket L.L.C",
      "accountNumber": "401",
      "trn": "100482910400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1001",
      "invoiceDate": "01-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-1-1",
        "itemNumber": 1,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 170
      },
      {
        "id": "item-1-2",
        "itemNumber": 2,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 138
      },
      {
        "id": "item-1-3",
        "itemNumber": 3,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 342
      }
    ],
    "totals": {
      "totalQuantity": 36,
      "subtotal": 650,
      "discount": 0,
      "netAmount": 650,
      "vatAmount": 32.5,
      "grandTotal": 682.5,
      "amountInWordsArabic": "فقط 682 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Hundred Eighty Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "16-07-2026",
    "paidAmount": 682.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-001",
        "paymentNumber": "RCP-2026-2001",
        "invoiceId": "inv-demo-1",
        "invoiceNumber": "INV-2026-1001",
        "clientId": "cli-demo-01",
        "clientName": "Al Noor Supermarket L.L.C",
        "amount": 682.5,
        "paymentDate": "04-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90001",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1001",
        "createdAt": "2026-07-04T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-01T00:00:00.000Z",
    "updatedAt": "2026-07-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-2",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-02",
      "name": "Golden Basket Hypermarket L.L.C",
      "accountNumber": "402",
      "trn": "100294819200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1002",
      "invoiceDate": "01-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-2-1",
        "itemNumber": 1,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 92
      },
      {
        "id": "item-2-2",
        "itemNumber": 2,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 270
      },
      {
        "id": "item-2-3",
        "itemNumber": 3,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 429
      },
      {
        "id": "item-2-4",
        "itemNumber": 4,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 66
      }
    ],
    "totals": {
      "totalQuantity": 49,
      "subtotal": 857,
      "discount": 0,
      "netAmount": 857,
      "vatAmount": 42.85,
      "grandTotal": 899.85,
      "amountInWordsArabic": "فقط 899 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eight Hundred Ninety Nine Dirhams and Eighty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "31-07-2026",
    "paidAmount": 899.85,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-002",
        "paymentNumber": "RCP-2026-2002",
        "invoiceId": "inv-demo-2",
        "invoiceNumber": "INV-2026-1002",
        "clientId": "cli-demo-02",
        "clientName": "Golden Basket Hypermarket L.L.C",
        "amount": 899.85,
        "paymentDate": "05-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90002",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1002",
        "createdAt": "2026-07-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-01T00:00:00.000Z",
    "updatedAt": "2026-07-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-3",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-03",
      "name": "Green Harvest Supermarket",
      "accountNumber": "403",
      "trn": "100839201900003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1003",
      "invoiceDate": "01-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-3-1",
        "itemNumber": 1,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 198
      },
      {
        "id": "item-3-2",
        "itemNumber": 2,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 351
      }
    ],
    "totals": {
      "totalQuantity": 29,
      "subtotal": 549,
      "discount": 0,
      "netAmount": 549,
      "vatAmount": 27.45,
      "grandTotal": 576.45,
      "amountInWordsArabic": "فقط 576 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Hundred Seventy Six Dirhams and Forty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "16-07-2026",
    "paidAmount": 576.45,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-003",
        "paymentNumber": "RCP-2026-2003",
        "invoiceId": "inv-demo-3",
        "invoiceNumber": "INV-2026-1003",
        "clientId": "cli-demo-03",
        "clientName": "Green Harvest Supermarket",
        "amount": 576.45,
        "paymentDate": "06-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90003",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1003",
        "createdAt": "2026-07-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-01T00:00:00.000Z",
    "updatedAt": "2026-07-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-4",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-04",
      "name": "Family Choice Supermarket L.L.C",
      "accountNumber": "404",
      "trn": "100382910400003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1004",
      "invoiceDate": "02-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-4-1",
        "itemNumber": 1,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 273
      },
      {
        "id": "item-4-2",
        "itemNumber": 2,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 346.5
      },
      {
        "id": "item-4-3",
        "itemNumber": 3,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 25.5
      }
    ],
    "totals": {
      "totalQuantity": 38,
      "subtotal": 645,
      "discount": 0,
      "netAmount": 645,
      "vatAmount": 32.25,
      "grandTotal": 677.25,
      "amountInWordsArabic": "فقط 677 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Hundred Seventy Seven Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "09-07-2026",
    "paidAmount": 677.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-004",
        "paymentNumber": "RCP-2026-2004",
        "invoiceId": "inv-demo-4",
        "invoiceNumber": "INV-2026-1004",
        "clientId": "cli-demo-04",
        "clientName": "Family Choice Supermarket L.L.C",
        "amount": 677.25,
        "paymentDate": "08-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90004",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1004",
        "createdAt": "2026-07-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-02T00:00:00.000Z",
    "updatedAt": "2026-07-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-5",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-05",
      "name": "Grand Central Mart L.L.C",
      "accountNumber": "405",
      "trn": "100948271000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1005",
      "invoiceDate": "02-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-5-1",
        "itemNumber": 1,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 280.5
      },
      {
        "id": "item-5-2",
        "itemNumber": 2,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 204
      },
      {
        "id": "item-5-3",
        "itemNumber": 3,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 252
      },
      {
        "id": "item-5-4",
        "itemNumber": 4,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 195
      }
    ],
    "totals": {
      "totalQuantity": 60,
      "subtotal": 931.5,
      "discount": 0,
      "netAmount": 931.5,
      "vatAmount": 46.58,
      "grandTotal": 978.08,
      "amountInWordsArabic": "فقط 978 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Hundred Seventy Eight Dirhams and Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "01-08-2026",
    "paidAmount": 978.08,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-005",
        "paymentNumber": "RCP-2026-2005",
        "invoiceId": "inv-demo-5",
        "invoiceNumber": "INV-2026-1005",
        "clientId": "cli-demo-05",
        "clientName": "Grand Central Mart L.L.C",
        "amount": 978.08,
        "paymentDate": "04-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90005",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1005",
        "createdAt": "2026-07-04T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-02T00:00:00.000Z",
    "updatedAt": "2026-07-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-6",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-06",
      "name": "Emirates Fresh Mart",
      "accountNumber": "406",
      "trn": "100192840100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1006",
      "invoiceDate": "02-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-6-1",
        "itemNumber": 1,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 170
      },
      {
        "id": "item-6-2",
        "itemNumber": 2,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 84
      }
    ],
    "totals": {
      "totalQuantity": 22,
      "subtotal": 254,
      "discount": 0,
      "netAmount": 254,
      "vatAmount": 12.7,
      "grandTotal": 266.7,
      "amountInWordsArabic": "فقط 266 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Hundred Sixty Six Dirhams and Seventy Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "17-07-2026",
    "paidAmount": 266.7,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-006",
        "paymentNumber": "RCP-2026-2006",
        "invoiceId": "inv-demo-6",
        "invoiceNumber": "INV-2026-1006",
        "clientId": "cli-demo-06",
        "clientName": "Emirates Fresh Mart",
        "amount": 266.7,
        "paymentDate": "05-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90006",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1006",
        "createdAt": "2026-07-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-02T00:00:00.000Z",
    "updatedAt": "2026-07-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-7",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-07",
      "name": "City Star Supermarket L.L.C",
      "accountNumber": "407",
      "trn": "100728192000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1007",
      "invoiceDate": "03-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-7-1",
        "itemNumber": 1,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 966
      },
      {
        "id": "item-7-2",
        "itemNumber": 2,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 75
      },
      {
        "id": "item-7-3",
        "itemNumber": 3,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 210
      }
    ],
    "totals": {
      "totalQuantity": 40,
      "subtotal": 1251,
      "discount": 0,
      "netAmount": 1251,
      "vatAmount": 62.55,
      "grandTotal": 1313.55,
      "amountInWordsArabic": "فقط 1313 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Three Hundred Thirteen Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "10-07-2026",
    "paidAmount": 1313.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-007",
        "paymentNumber": "RCP-2026-2007",
        "invoiceId": "inv-demo-7",
        "invoiceNumber": "INV-2026-1007",
        "clientId": "cli-demo-07",
        "clientName": "City Star Supermarket L.L.C",
        "amount": 1313.55,
        "paymentDate": "07-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90007",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1007",
        "createdAt": "2026-07-07T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-03T00:00:00.000Z",
    "updatedAt": "2026-07-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-8",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-08",
      "name": "Royal Garden Restaurant L.L.C",
      "accountNumber": "408",
      "trn": "100582910200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1008",
      "invoiceDate": "03-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-8-1",
        "itemNumber": 1,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 988
      },
      {
        "id": "item-8-2",
        "itemNumber": 2,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 1160
      },
      {
        "id": "item-8-3",
        "itemNumber": 3,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 1020
      },
      {
        "id": "item-8-4",
        "itemNumber": 4,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 2970
      }
    ],
    "totals": {
      "totalQuantity": 71,
      "subtotal": 6138,
      "discount": 0,
      "netAmount": 6138,
      "vatAmount": 306.9,
      "grandTotal": 6444.9,
      "amountInWordsArabic": "فقط 6444 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Four Hundred Forty Four Dirhams and Ninety Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "10-07-2026",
    "paidAmount": 6444.9,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-008",
        "paymentNumber": "RCP-2026-2008",
        "invoiceId": "inv-demo-8",
        "invoiceNumber": "INV-2026-1008",
        "clientId": "cli-demo-08",
        "clientName": "Royal Garden Restaurant L.L.C",
        "amount": 6444.9,
        "paymentDate": "08-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90008",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1008",
        "createdAt": "2026-07-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-03T00:00:00.000Z",
    "updatedAt": "2026-07-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-9",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-09",
      "name": "Ocean View Seafood Restaurant",
      "accountNumber": "409",
      "trn": "100482918300003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1009",
      "invoiceDate": "03-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-9-1",
        "itemNumber": 1,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 580
      },
      {
        "id": "item-9-2",
        "itemNumber": 2,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 748
      }
    ],
    "totals": {
      "totalQuantity": 15,
      "subtotal": 1328,
      "discount": 0,
      "netAmount": 1328,
      "vatAmount": 66.4,
      "grandTotal": 1394.4,
      "amountInWordsArabic": "فقط 1394 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Three Hundred Ninety Four Dirhams and Forty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "10-07-2026",
    "paidAmount": 1394.4,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-009",
        "paymentNumber": "RCP-2026-2009",
        "invoiceId": "inv-demo-9",
        "invoiceNumber": "INV-2026-1009",
        "clientId": "cli-demo-09",
        "clientName": "Ocean View Seafood Restaurant",
        "amount": 1394.4,
        "paymentDate": "09-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90009",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1009",
        "createdAt": "2026-07-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-03T00:00:00.000Z",
    "updatedAt": "2026-07-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-10",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-10",
      "name": "Urban Bites Restaurant L.L.C",
      "accountNumber": "410",
      "trn": "100918274000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1010",
      "invoiceDate": "04-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-10-1",
        "itemNumber": 1,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 476
      },
      {
        "id": "item-10-2",
        "itemNumber": 2,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1890
      },
      {
        "id": "item-10-3",
        "itemNumber": 3,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2415
      }
    ],
    "totals": {
      "totalQuantity": 42,
      "subtotal": 4781,
      "discount": 0,
      "netAmount": 4781,
      "vatAmount": 239.05,
      "grandTotal": 5020.05,
      "amountInWordsArabic": "فقط 5020 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Twenty Dirhams and Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "19-07-2026",
    "paidAmount": 5020.05,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-010",
        "paymentNumber": "RCP-2026-2010",
        "invoiceId": "inv-demo-10",
        "invoiceNumber": "INV-2026-1010",
        "clientId": "cli-demo-10",
        "clientName": "Urban Bites Restaurant L.L.C",
        "amount": 5020.05,
        "paymentDate": "06-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90010",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1010",
        "createdAt": "2026-07-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-04T00:00:00.000Z",
    "updatedAt": "2026-07-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-11",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-11",
      "name": "Desert Rose Mandi & Grill",
      "accountNumber": "411",
      "trn": "100628192000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1011",
      "invoiceDate": "04-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-11-1",
        "itemNumber": 1,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1350
      },
      {
        "id": "item-11-2",
        "itemNumber": 2,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 1955
      },
      {
        "id": "item-11-3",
        "itemNumber": 3,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 2280
      },
      {
        "id": "item-11-4",
        "itemNumber": 4,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 960
      }
    ],
    "totals": {
      "totalQuantity": 57,
      "subtotal": 6545,
      "discount": 0,
      "netAmount": 6545,
      "vatAmount": 327.25,
      "grandTotal": 6872.25,
      "amountInWordsArabic": "فقط 6872 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Eight Hundred Seventy Two Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "11-07-2026",
    "paidAmount": 6872.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-011",
        "paymentNumber": "RCP-2026-2011",
        "invoiceId": "inv-demo-11",
        "invoiceNumber": "INV-2026-1011",
        "clientId": "cli-demo-11",
        "clientName": "Desert Rose Mandi & Grill",
        "amount": 6872.25,
        "paymentDate": "07-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90011",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1011",
        "createdAt": "2026-07-07T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-04T00:00:00.000Z",
    "updatedAt": "2026-07-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-12",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-12",
      "name": "Sultan Turkish Cuisine L.L.C",
      "accountNumber": "412",
      "trn": "100827192000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1012",
      "invoiceDate": "04-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-12-1",
        "itemNumber": 1,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 1495
      },
      {
        "id": "item-12-2",
        "itemNumber": 2,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1900
      }
    ],
    "totals": {
      "totalQuantity": 33,
      "subtotal": 3395,
      "discount": 0,
      "netAmount": 3395,
      "vatAmount": 169.75,
      "grandTotal": 3564.75,
      "amountInWordsArabic": "فقط 3564 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Five Hundred Sixty Four Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "19-07-2026",
    "paidAmount": 3564.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-012",
        "paymentNumber": "RCP-2026-2012",
        "invoiceId": "inv-demo-12",
        "invoiceNumber": "INV-2026-1012",
        "clientId": "cli-demo-12",
        "clientName": "Sultan Turkish Cuisine L.L.C",
        "amount": 3564.75,
        "paymentDate": "08-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90012",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1012",
        "createdAt": "2026-07-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-04T00:00:00.000Z",
    "updatedAt": "2026-07-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-13",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-13",
      "name": "Al Safeer Lebanese Kitchen",
      "accountNumber": "413",
      "trn": "100372819000003",
      "cityOrBranch": "Al Ain"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1013",
      "invoiceDate": "05-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-13-1",
        "itemNumber": 1,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1520
      },
      {
        "id": "item-13-2",
        "itemNumber": 2,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 3680
      },
      {
        "id": "item-13-3",
        "itemNumber": 3,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 2400
      }
    ],
    "totals": {
      "totalQuantity": 44,
      "subtotal": 7600,
      "discount": 0,
      "netAmount": 7600,
      "vatAmount": 380,
      "grandTotal": 7980,
      "amountInWordsArabic": "فقط 7980 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Nine Hundred Eighty Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "12-07-2026",
    "paidAmount": 7980,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-013",
        "paymentNumber": "RCP-2026-2013",
        "invoiceId": "inv-demo-13",
        "invoiceNumber": "INV-2026-1013",
        "clientId": "cli-demo-13",
        "clientName": "Al Safeer Lebanese Kitchen",
        "amount": 7980,
        "paymentDate": "10-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90013",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1013",
        "createdAt": "2026-07-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-05T00:00:00.000Z",
    "updatedAt": "2026-07-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-14",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-14",
      "name": "Bukhara Royal Feast Restaurant",
      "accountNumber": "414",
      "trn": "100281920400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1014",
      "invoiceDate": "05-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-14-1",
        "itemNumber": 1,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 3040
      },
      {
        "id": "item-14-2",
        "itemNumber": 2,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 12480
      },
      {
        "id": "item-14-3",
        "itemNumber": 3,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 256
      },
      {
        "id": "item-14-4",
        "itemNumber": 4,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 570
      }
    ],
    "totals": {
      "totalQuantity": 68,
      "subtotal": 16346,
      "discount": 0,
      "netAmount": 16346,
      "vatAmount": 817.3,
      "grandTotal": 17163.3,
      "amountInWordsArabic": "فقط 17163 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventeen Thousand One Hundred Sixty Three Dirhams and Thirty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "20-07-2026",
    "paidAmount": 17163.3,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-014",
        "paymentNumber": "RCP-2026-2014",
        "invoiceId": "inv-demo-14",
        "invoiceNumber": "INV-2026-1014",
        "clientId": "cli-demo-14",
        "clientName": "Bukhara Royal Feast Restaurant",
        "amount": 17163.3,
        "paymentDate": "11-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90014",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1014",
        "createdAt": "2026-07-11T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-05T00:00:00.000Z",
    "updatedAt": "2026-07-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-15",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-15",
      "name": "Blue Horizon Roastery & Cafe",
      "accountNumber": "415",
      "trn": "100592819000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1015",
      "invoiceDate": "06-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-15-1",
        "itemNumber": 1,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 2090
      },
      {
        "id": "item-15-2",
        "itemNumber": 2,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 216
      }
    ],
    "totals": {
      "totalQuantity": 26,
      "subtotal": 2306,
      "discount": 0,
      "netAmount": 2306,
      "vatAmount": 115.3,
      "grandTotal": 2421.3,
      "amountInWordsArabic": "فقط 2421 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Four Hundred Twenty One Dirhams and Thirty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "13-07-2026",
    "paidAmount": 2421.3,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-015",
        "paymentNumber": "RCP-2026-2015",
        "invoiceId": "inv-demo-15",
        "invoiceNumber": "INV-2026-1015",
        "clientId": "cli-demo-15",
        "clientName": "Blue Horizon Roastery & Cafe",
        "amount": 2421.3,
        "paymentDate": "08-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90015",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1015",
        "createdAt": "2026-07-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-06T00:00:00.000Z",
    "updatedAt": "2026-07-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-16",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-16",
      "name": "Palm Grove Specialty Coffee",
      "accountNumber": "416",
      "trn": "100728190400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1016",
      "invoiceDate": "06-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-16-1",
        "itemNumber": 1,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 1350
      },
      {
        "id": "item-16-2",
        "itemNumber": 2,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 434
      },
      {
        "id": "item-16-3",
        "itemNumber": 3,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 588
      }
    ],
    "totals": {
      "totalQuantity": 46,
      "subtotal": 2372,
      "discount": 0,
      "netAmount": 2372,
      "vatAmount": 118.6,
      "grandTotal": 2490.6,
      "amountInWordsArabic": "فقط 2490 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Four Hundred Ninety Dirhams and Sixty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "21-07-2026",
    "paidAmount": 2490.6,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-016",
        "paymentNumber": "RCP-2026-2016",
        "invoiceId": "inv-demo-16",
        "invoiceNumber": "INV-2026-1016",
        "clientId": "cli-demo-16",
        "clientName": "Palm Grove Specialty Coffee",
        "amount": 2490.6,
        "paymentDate": "09-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90016",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1016",
        "createdAt": "2026-07-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-06T00:00:00.000Z",
    "updatedAt": "2026-07-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-17",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-17",
      "name": "Desert Pearl Lounge & Cafe",
      "accountNumber": "417",
      "trn": "100819204900003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1017",
      "invoiceDate": "06-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-17-1",
        "itemNumber": 1,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 186
      },
      {
        "id": "item-17-2",
        "itemNumber": 2,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 420
      },
      {
        "id": "item-17-3",
        "itemNumber": 3,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 1870
      },
      {
        "id": "item-17-4",
        "itemNumber": 4,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 2040
      }
    ],
    "totals": {
      "totalQuantity": 54,
      "subtotal": 4516,
      "discount": 0,
      "netAmount": 4516,
      "vatAmount": 225.8,
      "grandTotal": 4741.8,
      "amountInWordsArabic": "فقط 4741 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Seven Hundred Forty One Dirhams and Eighty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "13-07-2026",
    "paidAmount": 4741.8,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-017",
        "paymentNumber": "RCP-2026-2017",
        "invoiceId": "inv-demo-17",
        "invoiceNumber": "INV-2026-1017",
        "clientId": "cli-demo-17",
        "clientName": "Desert Pearl Lounge & Cafe",
        "amount": 4741.8,
        "paymentDate": "10-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90017",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1017",
        "createdAt": "2026-07-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-06T00:00:00.000Z",
    "updatedAt": "2026-07-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-18",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-18",
      "name": "Artisan Roast Cafe L.L.C",
      "accountNumber": "418",
      "trn": "100492810300003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1018",
      "invoiceDate": "07-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-18-1",
        "itemNumber": 1,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 252
      },
      {
        "id": "item-18-2",
        "itemNumber": 2,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 1430
      }
    ],
    "totals": {
      "totalQuantity": 19,
      "subtotal": 1682,
      "discount": 0,
      "netAmount": 1682,
      "vatAmount": 84.1,
      "grandTotal": 1766.1,
      "amountInWordsArabic": "فقط 1766 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Seven Hundred Sixty Six Dirhams and Ten Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "14-07-2026",
    "paidAmount": 1766.1,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-018",
        "paymentNumber": "RCP-2026-2018",
        "invoiceId": "inv-demo-18",
        "invoiceNumber": "INV-2026-1018",
        "clientId": "cli-demo-18",
        "clientName": "Artisan Roast Cafe L.L.C",
        "amount": 1766.1,
        "paymentDate": "12-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90018",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1018",
        "createdAt": "2026-07-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-07T00:00:00.000Z",
    "updatedAt": "2026-07-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-19",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-19",
      "name": "Velvet Bean Cafe & Lounge",
      "accountNumber": "419",
      "trn": "100619284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1019",
      "invoiceDate": "07-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-19-1",
        "itemNumber": 1,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 990
      },
      {
        "id": "item-19-2",
        "itemNumber": 2,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 1360
      },
      {
        "id": "item-19-3",
        "itemNumber": 3,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 1794
      }
    ],
    "totals": {
      "totalQuantity": 48,
      "subtotal": 4144,
      "discount": 0,
      "netAmount": 4144,
      "vatAmount": 207.2,
      "grandTotal": 4351.2,
      "amountInWordsArabic": "فقط 4351 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Three Hundred Fifty One Dirhams and Twenty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "22-07-2026",
    "paidAmount": 4351.2,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-019",
        "paymentNumber": "RCP-2026-2019",
        "invoiceId": "inv-demo-19",
        "invoiceNumber": "INV-2026-1019",
        "clientId": "cli-demo-19",
        "clientName": "Velvet Bean Cafe & Lounge",
        "amount": 4351.2,
        "paymentDate": "13-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90019",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1019",
        "createdAt": "2026-07-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-07T00:00:00.000Z",
    "updatedAt": "2026-07-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-20",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-20",
      "name": "Sunrise French Bakery & Patisserie",
      "accountNumber": "420",
      "trn": "100392810400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1020",
      "invoiceDate": "07-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-20-1",
        "itemNumber": 1,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 1500
      },
      {
        "id": "item-20-2",
        "itemNumber": 2,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 1558
      },
      {
        "id": "item-20-3",
        "itemNumber": 3,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 8840
      },
      {
        "id": "item-20-4",
        "itemNumber": 4,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 1120
      }
    ],
    "totals": {
      "totalQuantity": 65,
      "subtotal": 13018,
      "discount": 0,
      "netAmount": 13018,
      "vatAmount": 650.9,
      "grandTotal": 13668.9,
      "amountInWordsArabic": "فقط 13668 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirteen Thousand Six Hundred Sixty Eight Dirhams and Ninety Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "14-07-2026",
    "paidAmount": 13668.9,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-020",
        "paymentNumber": "RCP-2026-2020",
        "invoiceId": "inv-demo-20",
        "invoiceNumber": "INV-2026-1020",
        "clientId": "cli-demo-20",
        "clientName": "Sunrise French Bakery & Patisserie",
        "amount": 13668.9,
        "paymentDate": "09-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90020",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1020",
        "createdAt": "2026-07-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-07T00:00:00.000Z",
    "updatedAt": "2026-07-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-21",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-21",
      "name": "Golden Wheat Artisan Bakery",
      "accountNumber": "421",
      "trn": "100482910500003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1021",
      "invoiceDate": "08-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-21-1",
        "itemNumber": 1,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 1230
      },
      {
        "id": "item-21-2",
        "itemNumber": 2,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 7480
      }
    ],
    "totals": {
      "totalQuantity": 37,
      "subtotal": 8710,
      "discount": 0,
      "netAmount": 8710,
      "vatAmount": 435.5,
      "grandTotal": 9145.5,
      "amountInWordsArabic": "فقط 9145 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand One Hundred Forty Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "23-07-2026",
    "paidAmount": 9145.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-021",
        "paymentNumber": "RCP-2026-2021",
        "invoiceId": "inv-demo-21",
        "invoiceNumber": "INV-2026-1021",
        "clientId": "cli-demo-21",
        "clientName": "Golden Wheat Artisan Bakery",
        "amount": 9145.5,
        "paymentDate": "11-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90021",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1021",
        "createdAt": "2026-07-11T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-08T00:00:00.000Z",
    "updatedAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-22",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-22",
      "name": "Crown Sweets & Pastries L.L.C",
      "accountNumber": "422",
      "trn": "100728194000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1022",
      "invoiceDate": "08-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-22-1",
        "itemNumber": 1,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 6120
      },
      {
        "id": "item-22-2",
        "itemNumber": 2,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 3500
      },
      {
        "id": "item-22-3",
        "itemNumber": 3,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 1365
      }
    ],
    "totals": {
      "totalQuantity": 50,
      "subtotal": 10985,
      "discount": 0,
      "netAmount": 10985,
      "vatAmount": 549.25,
      "grandTotal": 11534.25,
      "amountInWordsArabic": "فقط 11534 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eleven Thousand Five Hundred Thirty Four Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "15-07-2026",
    "paidAmount": 11534.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-022",
        "paymentNumber": "RCP-2026-2022",
        "invoiceId": "inv-demo-22",
        "invoiceNumber": "INV-2026-1022",
        "clientId": "cli-demo-22",
        "clientName": "Crown Sweets & Pastries L.L.C",
        "amount": 11534.25,
        "paymentDate": "12-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90022",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1022",
        "createdAt": "2026-07-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-08T00:00:00.000Z",
    "updatedAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-23",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-23",
      "name": "Maison Dorée Pastry Studio",
      "accountNumber": "423",
      "trn": "100928194000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1023",
      "invoiceDate": "08-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-23-1",
        "itemNumber": 1,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 2940
      },
      {
        "id": "item-23-2",
        "itemNumber": 2,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 585
      },
      {
        "id": "item-23-3",
        "itemNumber": 3,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 1800
      },
      {
        "id": "item-23-4",
        "itemNumber": 4,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 646
      }
    ],
    "totals": {
      "totalQuantity": 51,
      "subtotal": 5971,
      "discount": 0,
      "netAmount": 5971,
      "vatAmount": 298.55,
      "grandTotal": 6269.55,
      "amountInWordsArabic": "فقط 6269 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Two Hundred Sixty Nine Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "23-07-2026",
    "paidAmount": 6269.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-023",
        "paymentNumber": "RCP-2026-2023",
        "invoiceId": "inv-demo-23",
        "invoiceNumber": "INV-2026-1023",
        "clientId": "cli-demo-23",
        "clientName": "Maison Dorée Pastry Studio",
        "amount": 6269.55,
        "paymentDate": "13-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90023",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1023",
        "createdAt": "2026-07-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-08T00:00:00.000Z",
    "updatedAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-24",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-24",
      "name": "Al Barakah Arabic Bakery",
      "accountNumber": "424",
      "trn": "100294810200003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1024",
      "invoiceDate": "09-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-24-1",
        "itemNumber": 1,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 4680
      },
      {
        "id": "item-24-2",
        "itemNumber": 2,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 1080
      }
    ],
    "totals": {
      "totalQuantity": 30,
      "subtotal": 5760,
      "discount": 0,
      "netAmount": 5760,
      "vatAmount": 288,
      "grandTotal": 6048,
      "amountInWordsArabic": "فقط 6048 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Forty Eight Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "16-07-2026",
    "paidAmount": 6048,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-024",
        "paymentNumber": "RCP-2026-2024",
        "invoiceId": "inv-demo-24",
        "invoiceNumber": "INV-2026-1024",
        "clientId": "cli-demo-24",
        "clientName": "Al Barakah Arabic Bakery",
        "amount": 6048,
        "paymentDate": "15-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90024",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1024",
        "createdAt": "2026-07-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-09T00:00:00.000Z",
    "updatedAt": "2026-07-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-25",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-25",
      "name": "Desert Pearl Hospitality & Catering L.L.C",
      "accountNumber": "425",
      "trn": "100819204000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1025",
      "invoiceDate": "09-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-25-1",
        "itemNumber": 1,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 900
      },
      {
        "id": "item-25-2",
        "itemNumber": 2,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 6480
      },
      {
        "id": "item-25-3",
        "itemNumber": 3,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 6080
      }
    ],
    "totals": {
      "totalQuantity": 27,
      "subtotal": 13460,
      "discount": 0,
      "netAmount": 13460,
      "vatAmount": 673,
      "grandTotal": 14133,
      "amountInWordsArabic": "فقط 14133 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fourteen Thousand One Hundred Thirty Three Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "08-08-2026",
    "paidAmount": 14133,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-025",
        "paymentNumber": "RCP-2026-2025",
        "invoiceId": "inv-demo-25",
        "invoiceNumber": "INV-2026-1025",
        "clientId": "cli-demo-25",
        "clientName": "Desert Pearl Hospitality & Catering L.L.C",
        "amount": 14133,
        "paymentDate": "11-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90025",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1025",
        "createdAt": "2026-07-11T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-09T00:00:00.000Z",
    "updatedAt": "2026-07-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-26",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-26",
      "name": "Imperial Banquet Catering Services",
      "accountNumber": "426",
      "trn": "100619280400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1026",
      "invoiceDate": "09-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-26-1",
        "itemNumber": 1,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 3600
      },
      {
        "id": "item-26-2",
        "itemNumber": 2,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 4560
      },
      {
        "id": "item-26-3",
        "itemNumber": 3,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 10450
      },
      {
        "id": "item-26-4",
        "itemNumber": 4,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 10920
      }
    ],
    "totals": {
      "totalQuantity": 62,
      "subtotal": 29530,
      "discount": 0,
      "netAmount": 29530,
      "vatAmount": 1476.5,
      "grandTotal": 31006.5,
      "amountInWordsArabic": "فقط 31006 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty One Thousand Six Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "08-08-2026",
    "paidAmount": 31006.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-026",
        "paymentNumber": "RCP-2026-2026",
        "invoiceId": "inv-demo-26",
        "invoiceNumber": "INV-2026-1026",
        "clientId": "cli-demo-26",
        "clientName": "Imperial Banquet Catering Services",
        "amount": 31006.5,
        "paymentDate": "12-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90026",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1026",
        "createdAt": "2026-07-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-09T00:00:00.000Z",
    "updatedAt": "2026-07-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-27",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-27",
      "name": "Golden Spoon Event Caterers",
      "accountNumber": "427",
      "trn": "100519284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1027",
      "invoiceDate": "10-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-27-1",
        "itemNumber": 1,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 3040
      },
      {
        "id": "item-27-2",
        "itemNumber": 2,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 8250
      }
    ],
    "totals": {
      "totalQuantity": 23,
      "subtotal": 11290,
      "discount": 0,
      "netAmount": 11290,
      "vatAmount": 564.5,
      "grandTotal": 11854.5,
      "amountInWordsArabic": "فقط 11854 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eleven Thousand Eight Hundred Fifty Four Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "25-07-2026",
    "paidAmount": 11854.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-027",
        "paymentNumber": "RCP-2026-2027",
        "invoiceId": "inv-demo-27",
        "invoiceNumber": "INV-2026-1027",
        "clientId": "cli-demo-27",
        "clientName": "Golden Spoon Event Caterers",
        "amount": 11854.5,
        "paymentDate": "14-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90027",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1027",
        "createdAt": "2026-07-14T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-10T00:00:00.000Z",
    "updatedAt": "2026-07-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-28",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-28",
      "name": "Royal Table Corporate Catering L.L.C",
      "accountNumber": "428",
      "trn": "100719284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1028",
      "invoiceDate": "10-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-28-1",
        "itemNumber": 1,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 6050
      },
      {
        "id": "item-28-2",
        "itemNumber": 2,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 7560
      },
      {
        "id": "item-28-3",
        "itemNumber": 3,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 56250
      }
    ],
    "totals": {
      "totalQuantity": 54,
      "subtotal": 69860,
      "discount": 0,
      "netAmount": 69860,
      "vatAmount": 3493,
      "grandTotal": 73353,
      "amountInWordsArabic": "فقط 73353 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventy Three Thousand Three Hundred Fifty Three Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "09-08-2026",
    "paidAmount": 73353,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-028",
        "paymentNumber": "RCP-2026-2028",
        "invoiceId": "inv-demo-28",
        "invoiceNumber": "INV-2026-1028",
        "clientId": "cli-demo-28",
        "clientName": "Royal Table Corporate Catering L.L.C",
        "amount": 73353,
        "paymentDate": "15-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90028",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1028",
        "createdAt": "2026-07-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-10T00:00:00.000Z",
    "updatedAt": "2026-07-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-29",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-29",
      "name": "Gulf Feast Catering & Hospitality",
      "accountNumber": "429",
      "trn": "100419284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1029",
      "invoiceDate": "11-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-29-1",
        "itemNumber": 1,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 5880
      },
      {
        "id": "item-29-2",
        "itemNumber": 2,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 47250
      },
      {
        "id": "item-29-3",
        "itemNumber": 3,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 1350
      },
      {
        "id": "item-29-4",
        "itemNumber": 4,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 7200
      }
    ],
    "totals": {
      "totalQuantity": 48,
      "subtotal": 61680,
      "discount": 0,
      "netAmount": 61680,
      "vatAmount": 3084,
      "grandTotal": 64764,
      "amountInWordsArabic": "فقط 64764 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Sixty Four Thousand Seven Hundred Sixty Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "26-07-2026",
    "paidAmount": 64764,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-029",
        "paymentNumber": "RCP-2026-2029",
        "invoiceId": "inv-demo-29",
        "invoiceNumber": "INV-2026-1029",
        "clientId": "cli-demo-29",
        "clientName": "Gulf Feast Catering & Hospitality",
        "amount": 64764,
        "paymentDate": "17-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90029",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1029",
        "createdAt": "2026-07-17T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-11T00:00:00.000Z",
    "updatedAt": "2026-07-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-30",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-30",
      "name": "Xender For Trading L.L.C",
      "accountNumber": "430",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1030",
      "invoiceDate": "11-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-30-1",
        "itemNumber": 1,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 30600
      },
      {
        "id": "item-30-2",
        "itemNumber": 2,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 46800
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 77400,
      "discount": 0,
      "netAmount": 77400,
      "vatAmount": 3870,
      "grandTotal": 81270,
      "amountInWordsArabic": "فقط 81270 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighty One Thousand Two Hundred Seventy Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "26-07-2026",
    "paidAmount": 81270,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-030",
        "paymentNumber": "RCP-2026-2030",
        "invoiceId": "inv-demo-30",
        "invoiceNumber": "INV-2026-1030",
        "clientId": "cli-demo-30",
        "clientName": "Xender For Trading L.L.C",
        "amount": 81270,
        "paymentDate": "13-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90030",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1030",
        "createdAt": "2026-07-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-11T00:00:00.000Z",
    "updatedAt": "2026-07-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-31",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-31",
      "name": "Prime Global General Trading L.L.C",
      "accountNumber": "431",
      "trn": "100319284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1031",
      "invoiceDate": "11-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-31-1",
        "itemNumber": 1,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 39000
      },
      {
        "id": "item-31-2",
        "itemNumber": 2,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 4200
      },
      {
        "id": "item-31-3",
        "itemNumber": 3,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 23400
      }
    ],
    "totals": {
      "totalQuantity": 31,
      "subtotal": 66600,
      "discount": 0,
      "netAmount": 66600,
      "vatAmount": 3330,
      "grandTotal": 69930,
      "amountInWordsArabic": "فقط 69930 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Sixty Nine Thousand Nine Hundred Thirty Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "10-08-2026",
    "paidAmount": 69930,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-031",
        "paymentNumber": "RCP-2026-2031",
        "invoiceId": "inv-demo-31",
        "invoiceNumber": "INV-2026-1031",
        "clientId": "cli-demo-31",
        "clientName": "Prime Global General Trading L.L.C",
        "amount": 69930,
        "paymentDate": "14-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90031",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1031",
        "createdAt": "2026-07-14T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-11T00:00:00.000Z",
    "updatedAt": "2026-07-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-32",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-32",
      "name": "Gulf Coast Commodities Trading",
      "accountNumber": "432",
      "trn": "100919284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1032",
      "invoiceDate": "12-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-32-1",
        "itemNumber": 1,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 48300
      },
      {
        "id": "item-32-2",
        "itemNumber": 2,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 13000
      },
      {
        "id": "item-32-3",
        "itemNumber": 3,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 26400
      },
      {
        "id": "item-32-4",
        "itemNumber": 4,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 33250
      }
    ],
    "totals": {
      "totalQuantity": 59,
      "subtotal": 120950,
      "discount": 0,
      "netAmount": 120950,
      "vatAmount": 6047.5,
      "grandTotal": 126997.5,
      "amountInWordsArabic": "فقط 126997 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Twenty Six Thousand Nine Hundred Ninety Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "11-08-2026",
    "paidAmount": 126997.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-032",
        "paymentNumber": "RCP-2026-2032",
        "invoiceId": "inv-demo-32",
        "invoiceNumber": "INV-2026-1032",
        "clientId": "cli-demo-32",
        "clientName": "Gulf Coast Commodities Trading",
        "amount": 126997.5,
        "paymentDate": "16-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90032",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1032",
        "createdAt": "2026-07-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-12T00:00:00.000Z",
    "updatedAt": "2026-07-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-33",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-33",
      "name": "Al Manar Import & Export L.L.C",
      "accountNumber": "433",
      "trn": "100819284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1033",
      "invoiceDate": "12-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-33-1",
        "itemNumber": 1,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 67600
      },
      {
        "id": "item-33-2",
        "itemNumber": 2,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 17600
      }
    ],
    "totals": {
      "totalQuantity": 34,
      "subtotal": 85200,
      "discount": 0,
      "netAmount": 85200,
      "vatAmount": 4260,
      "grandTotal": 89460,
      "amountInWordsArabic": "فقط 89460 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighty Nine Thousand Four Hundred Sixty Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "45 Days",
    "dueDate": "19-07-2026",
    "paidAmount": 89460,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-033",
        "paymentNumber": "RCP-2026-2033",
        "invoiceId": "inv-demo-33",
        "invoiceNumber": "INV-2026-1033",
        "clientId": "cli-demo-33",
        "clientName": "Al Manar Import & Export L.L.C",
        "amount": 89460,
        "paymentDate": "17-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90033",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1033",
        "createdAt": "2026-07-17T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-12T00:00:00.000Z",
    "updatedAt": "2026-07-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-34",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-34",
      "name": "Apex Foodstuff Trading FZE",
      "accountNumber": "434",
      "trn": "100219284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1034",
      "invoiceDate": "12-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-34-1",
        "itemNumber": 1,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 8800
      },
      {
        "id": "item-34-2",
        "itemNumber": 2,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 19250
      },
      {
        "id": "item-34-3",
        "itemNumber": 3,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 32400
      }
    ],
    "totals": {
      "totalQuantity": 33,
      "subtotal": 60450,
      "discount": 0,
      "netAmount": 60450,
      "vatAmount": 3022.5,
      "grandTotal": 63472.5,
      "amountInWordsArabic": "فقط 63472 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Sixty Three Thousand Four Hundred Seventy Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "11-08-2026",
    "paidAmount": 63472.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-034",
        "paymentNumber": "RCP-2026-2034",
        "invoiceId": "inv-demo-34",
        "invoiceNumber": "INV-2026-1034",
        "clientId": "cli-demo-34",
        "clientName": "Apex Foodstuff Trading FZE",
        "amount": 63472.5,
        "paymentDate": "18-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90034",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1034",
        "createdAt": "2026-07-18T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-12T00:00:00.000Z",
    "updatedAt": "2026-07-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-35",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-35",
      "name": "Horizon Agro Trading L.L.C",
      "accountNumber": "435",
      "trn": "100119284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1035",
      "invoiceDate": "13-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-35-1",
        "itemNumber": 1,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 12250
      },
      {
        "id": "item-35-2",
        "itemNumber": 2,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 25200
      },
      {
        "id": "item-35-3",
        "itemNumber": 3,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 40950
      },
      {
        "id": "item-35-4",
        "itemNumber": 4,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 6300
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 84700,
      "discount": 0,
      "netAmount": 84700,
      "vatAmount": 4235,
      "grandTotal": 88935,
      "amountInWordsArabic": "فقط 88935 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighty Eight Thousand Nine Hundred Thirty Five Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "12-08-2026",
    "paidAmount": 88935,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-035",
        "paymentNumber": "RCP-2026-2035",
        "invoiceId": "inv-demo-35",
        "invoiceNumber": "INV-2026-1035",
        "clientId": "cli-demo-35",
        "clientName": "Horizon Agro Trading L.L.C",
        "amount": 88935,
        "paymentDate": "15-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90035",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1035",
        "createdAt": "2026-07-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-13T00:00:00.000Z",
    "updatedAt": "2026-07-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-36",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-36",
      "name": "Marina Palm Luxury Hotel & Suites",
      "accountNumber": "436",
      "trn": "100918294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1036",
      "invoiceDate": "13-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-36-1",
        "itemNumber": 1,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 14000
      },
      {
        "id": "item-36-2",
        "itemNumber": 2,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 3740
      }
    ],
    "totals": {
      "totalQuantity": 27,
      "subtotal": 17740,
      "discount": 0,
      "netAmount": 17740,
      "vatAmount": 887,
      "grandTotal": 18627,
      "amountInWordsArabic": "فقط 18627 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighteen Thousand Six Hundred Twenty Seven Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "12-08-2026",
    "paidAmount": 18627,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-036",
        "paymentNumber": "RCP-2026-2036",
        "invoiceId": "inv-demo-36",
        "invoiceNumber": "INV-2026-1036",
        "clientId": "cli-demo-36",
        "clientName": "Marina Palm Luxury Hotel & Suites",
        "amount": 18627,
        "paymentDate": "16-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90036",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1036",
        "createdAt": "2026-07-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-13T00:00:00.000Z",
    "updatedAt": "2026-07-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-37",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-37",
      "name": "Golden Dunes Resort & Spa",
      "accountNumber": "437",
      "trn": "100418294000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1037",
      "invoiceDate": "13-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-37-1",
        "itemNumber": 1,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 2860
      },
      {
        "id": "item-37-2",
        "itemNumber": 2,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 13000
      },
      {
        "id": "item-37-3",
        "itemNumber": 3,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 1900
      }
    ],
    "totals": {
      "totalQuantity": 35,
      "subtotal": 17760,
      "discount": 0,
      "netAmount": 17760,
      "vatAmount": 888,
      "grandTotal": 18648,
      "amountInWordsArabic": "فقط 18648 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighteen Thousand Six Hundred Forty Eight Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "12-08-2026",
    "paidAmount": 18648,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-037",
        "paymentNumber": "RCP-2026-2037",
        "invoiceId": "inv-demo-37",
        "invoiceNumber": "INV-2026-1037",
        "clientId": "cli-demo-37",
        "clientName": "Golden Dunes Resort & Spa",
        "amount": 18648,
        "paymentDate": "17-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90037",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1037",
        "createdAt": "2026-07-17T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-13T00:00:00.000Z",
    "updatedAt": "2026-07-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-38",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-38",
      "name": "Oasis Grand Palace Hotel L.L.C",
      "accountNumber": "438",
      "trn": "100718294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1038",
      "invoiceDate": "14-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-38-1",
        "itemNumber": 1,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 10400
      },
      {
        "id": "item-38-2",
        "itemNumber": 2,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 21850
      },
      {
        "id": "item-38-3",
        "itemNumber": 3,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 4250
      },
      {
        "id": "item-38-4",
        "itemNumber": 4,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 16800
      }
    ],
    "totals": {
      "totalQuantity": 56,
      "subtotal": 53300,
      "discount": 0,
      "netAmount": 53300,
      "vatAmount": 2665,
      "grandTotal": 55965,
      "amountInWordsArabic": "فقط 55965 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty Five Thousand Nine Hundred Sixty Five Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "13-08-2026",
    "paidAmount": 55965,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-038",
        "paymentNumber": "RCP-2026-2038",
        "invoiceId": "inv-demo-38",
        "invoiceNumber": "INV-2026-1038",
        "clientId": "cli-demo-38",
        "clientName": "Oasis Grand Palace Hotel L.L.C",
        "amount": 55965,
        "paymentDate": "19-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90038",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1038",
        "createdAt": "2026-07-19T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-14T00:00:00.000Z",
    "updatedAt": "2026-07-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-39",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-39",
      "name": "Sea Breeze Boutique Hotel",
      "accountNumber": "439",
      "trn": "100618294000003",
      "cityOrBranch": "Fujairah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1039",
      "invoiceDate": "14-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-39-1",
        "itemNumber": 1,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 18050
      },
      {
        "id": "item-39-2",
        "itemNumber": 2,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 22100
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 40150,
      "discount": 0,
      "netAmount": 40150,
      "vatAmount": 2007.5,
      "grandTotal": 42157.5,
      "amountInWordsArabic": "فقط 42157 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Two Thousand One Hundred Fifty Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "29-07-2026",
    "paidAmount": 42157.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-039",
        "paymentNumber": "RCP-2026-2039",
        "invoiceId": "inv-demo-39",
        "invoiceNumber": "INV-2026-1039",
        "clientId": "cli-demo-39",
        "clientName": "Sea Breeze Boutique Hotel",
        "amount": 42157.5,
        "paymentDate": "20-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90039",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1039",
        "createdAt": "2026-07-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-14T00:00:00.000Z",
    "updatedAt": "2026-07-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-40",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-40",
      "name": "Creek Gate Business Hotel",
      "accountNumber": "440",
      "trn": "100518294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1040",
      "invoiceDate": "14-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-40-1",
        "itemNumber": 1,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 18700
      },
      {
        "id": "item-40-2",
        "itemNumber": 2,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 5600
      },
      {
        "id": "item-40-3",
        "itemNumber": 3,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 2420
      }
    ],
    "totals": {
      "totalQuantity": 37,
      "subtotal": 26720,
      "discount": 0,
      "netAmount": 26720,
      "vatAmount": 1336,
      "grandTotal": 28056,
      "amountInWordsArabic": "فقط 28056 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Eight Thousand Fifty Six Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "13-08-2026",
    "paidAmount": 28056,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-040",
        "paymentNumber": "RCP-2026-2040",
        "invoiceId": "inv-demo-40",
        "invoiceNumber": "INV-2026-1040",
        "clientId": "cli-demo-40",
        "clientName": "Creek Gate Business Hotel",
        "amount": 28056,
        "paymentDate": "16-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90040",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1040",
        "createdAt": "2026-07-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-14T00:00:00.000Z",
    "updatedAt": "2026-07-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-41",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-41",
      "name": "Al Madina Fresh Grocery",
      "accountNumber": "441",
      "trn": "100418284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1041",
      "invoiceDate": "15-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-41-1",
        "itemNumber": 1,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 3625
      },
      {
        "id": "item-41-2",
        "itemNumber": 2,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 840
      },
      {
        "id": "item-41-3",
        "itemNumber": 3,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 1610
      },
      {
        "id": "item-41-4",
        "itemNumber": 4,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 2835
      }
    ],
    "totals": {
      "totalQuantity": 67,
      "subtotal": 8910,
      "discount": 0,
      "netAmount": 8910,
      "vatAmount": 445.5,
      "grandTotal": 9355.5,
      "amountInWordsArabic": "فقط 9355 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand Three Hundred Fifty Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "22-07-2026",
    "paidAmount": 9355.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-041",
        "paymentNumber": "RCP-2026-2041",
        "invoiceId": "inv-demo-41",
        "invoiceNumber": "INV-2026-1041",
        "clientId": "cli-demo-41",
        "clientName": "Al Madina Fresh Grocery",
        "amount": 9355.5,
        "paymentDate": "18-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90041",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1041",
        "createdAt": "2026-07-18T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-15T00:00:00.000Z",
    "updatedAt": "2026-07-15T00:00:00.000Z"
  },
  {
    "id": "inv-demo-42",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-42",
      "name": "Corner Fresh Market L.L.C",
      "accountNumber": "442",
      "trn": "100318284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1042",
      "invoiceDate": "15-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-42-1",
        "itemNumber": 1,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 360
      },
      {
        "id": "item-42-2",
        "itemNumber": 2,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 1150
      }
    ],
    "totals": {
      "totalQuantity": 13,
      "subtotal": 1510,
      "discount": 0,
      "netAmount": 1510,
      "vatAmount": 75.5,
      "grandTotal": 1585.5,
      "amountInWordsArabic": "فقط 1585 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Five Hundred Eighty Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "22-07-2026",
    "paidAmount": 1585.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-042",
        "paymentNumber": "RCP-2026-2042",
        "invoiceId": "inv-demo-42",
        "invoiceNumber": "INV-2026-1042",
        "clientId": "cli-demo-42",
        "clientName": "Corner Fresh Market L.L.C",
        "amount": 1585.5,
        "paymentDate": "19-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90042",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1042",
        "createdAt": "2026-07-19T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-15T00:00:00.000Z",
    "updatedAt": "2026-07-15T00:00:00.000Z"
  },
  {
    "id": "inv-demo-43",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-43",
      "name": "Daily Mart Grocery L.L.C",
      "accountNumber": "443",
      "trn": "100218284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1043",
      "invoiceDate": "16-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-43-1",
        "itemNumber": 1,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 690
      },
      {
        "id": "item-43-2",
        "itemNumber": 2,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1755
      },
      {
        "id": "item-43-3",
        "itemNumber": 3,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 960
      }
    ],
    "totals": {
      "totalQuantity": 39,
      "subtotal": 3405,
      "discount": 0,
      "netAmount": 3405,
      "vatAmount": 170.25,
      "grandTotal": 3575.25,
      "amountInWordsArabic": "فقط 3575 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Five Hundred Seventy Five Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "23-07-2026",
    "paidAmount": 3575.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-043",
        "paymentNumber": "RCP-2026-2043",
        "invoiceId": "inv-demo-43",
        "invoiceNumber": "INV-2026-1043",
        "clientId": "cli-demo-43",
        "clientName": "Daily Mart Grocery L.L.C",
        "amount": 3575.25,
        "paymentDate": "21-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90043",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1043",
        "createdAt": "2026-07-21T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-16T00:00:00.000Z",
    "updatedAt": "2026-07-16T00:00:00.000Z"
  },
  {
    "id": "inv-demo-44",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-44",
      "name": "Al Safa Express Store",
      "accountNumber": "444",
      "trn": "100118284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1044",
      "invoiceDate": "16-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-44-1",
        "itemNumber": 1,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1215
      },
      {
        "id": "item-44-2",
        "itemNumber": 2,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 768
      },
      {
        "id": "item-44-3",
        "itemNumber": 3,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 3335
      },
      {
        "id": "item-44-4",
        "itemNumber": 4,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 600
      }
    ],
    "totals": {
      "totalQuantity": 53,
      "subtotal": 5918,
      "discount": 0,
      "netAmount": 5918,
      "vatAmount": 295.9,
      "grandTotal": 6213.9,
      "amountInWordsArabic": "فقط 6213 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Two Hundred Thirteen Dirhams and Ninety Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "23-07-2026",
    "paidAmount": 6213.9,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-044",
        "paymentNumber": "RCP-2026-2044",
        "invoiceId": "inv-demo-44",
        "invoiceNumber": "INV-2026-1044",
        "clientId": "cli-demo-44",
        "clientName": "Al Safa Express Store",
        "amount": 6213.9,
        "paymentDate": "22-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90044",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1044",
        "createdAt": "2026-07-22T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-16T00:00:00.000Z",
    "updatedAt": "2026-07-16T00:00:00.000Z"
  },
  {
    "id": "inv-demo-45",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-45",
      "name": "Gourmet Olive & Deli Emporium",
      "accountNumber": "445",
      "trn": "100817294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1045",
      "invoiceDate": "16-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-45-1",
        "itemNumber": 1,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 2880
      },
      {
        "id": "item-45-2",
        "itemNumber": 2,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 3135
      }
    ],
    "totals": {
      "totalQuantity": 31,
      "subtotal": 6015,
      "discount": 0,
      "netAmount": 6015,
      "vatAmount": 300.75,
      "grandTotal": 6315.75,
      "amountInWordsArabic": "فقط 6315 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Three Hundred Fifteen Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "31-07-2026",
    "paidAmount": 6315.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-045",
        "paymentNumber": "RCP-2026-2045",
        "invoiceId": "inv-demo-45",
        "invoiceNumber": "INV-2026-1045",
        "clientId": "cli-demo-45",
        "clientName": "Gourmet Olive & Deli Emporium",
        "amount": 6315.75,
        "paymentDate": "18-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90045",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1045",
        "createdAt": "2026-07-18T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-16T00:00:00.000Z",
    "updatedAt": "2026-07-16T00:00:00.000Z"
  },
  {
    "id": "inv-demo-46",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-46",
      "name": "Pure Organic Pantry L.L.C",
      "accountNumber": "446",
      "trn": "100717294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1046",
      "invoiceDate": "17-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-46-1",
        "itemNumber": 1,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 2475
      },
      {
        "id": "item-46-2",
        "itemNumber": 2,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 4070
      },
      {
        "id": "item-46-3",
        "itemNumber": 3,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 368
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 6913,
      "discount": 0,
      "netAmount": 6913,
      "vatAmount": 345.65,
      "grandTotal": 7258.65,
      "amountInWordsArabic": "فقط 7258 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Two Hundred Fifty Eight Dirhams and Sixty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "01-08-2026",
    "paidAmount": 7258.65,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-046",
        "paymentNumber": "RCP-2026-2046",
        "invoiceId": "inv-demo-46",
        "invoiceNumber": "INV-2026-1046",
        "clientId": "cli-demo-46",
        "clientName": "Pure Organic Pantry L.L.C",
        "amount": 7258.65,
        "paymentDate": "20-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90046",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1046",
        "createdAt": "2026-07-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-17T00:00:00.000Z",
    "updatedAt": "2026-07-17T00:00:00.000Z"
  },
  {
    "id": "inv-demo-47",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-47",
      "name": "Prime Cuts Butchery & Deli",
      "accountNumber": "447",
      "trn": "100617294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1047",
      "invoiceDate": "17-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-47-1",
        "itemNumber": 1,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 3330
      },
      {
        "id": "item-47-2",
        "itemNumber": 2,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 2300
      },
      {
        "id": "item-47-3",
        "itemNumber": 3,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 525
      },
      {
        "id": "item-47-4",
        "itemNumber": 4,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 3360
      }
    ],
    "totals": {
      "totalQuantity": 64,
      "subtotal": 9515,
      "discount": 0,
      "netAmount": 9515,
      "vatAmount": 475.75,
      "grandTotal": 9990.75,
      "amountInWordsArabic": "فقط 9990 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand Nine Hundred Ninety Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "24-07-2026",
    "paidAmount": 9990.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-047",
        "paymentNumber": "RCP-2026-2047",
        "invoiceId": "inv-demo-47",
        "invoiceNumber": "INV-2026-1047",
        "clientId": "cli-demo-47",
        "clientName": "Prime Cuts Butchery & Deli",
        "amount": 9990.75,
        "paymentDate": "21-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90047",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1047",
        "createdAt": "2026-07-21T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-17T00:00:00.000Z",
    "updatedAt": "2026-07-17T00:00:00.000Z"
  },
  {
    "id": "inv-demo-48",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-48",
      "name": "Green Leaf Nutrition Store",
      "accountNumber": "448",
      "trn": "100517294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1048",
      "invoiceDate": "17-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-48-1",
        "itemNumber": 1,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 1932
      },
      {
        "id": "item-48-2",
        "itemNumber": 2,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 225
      }
    ],
    "totals": {
      "totalQuantity": 24,
      "subtotal": 2157,
      "discount": 0,
      "netAmount": 2157,
      "vatAmount": 107.85,
      "grandTotal": 2264.85,
      "amountInWordsArabic": "فقط 2264 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Two Hundred Sixty Four Dirhams and Eighty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "01-08-2026",
    "paidAmount": 2264.85,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-048",
        "paymentNumber": "RCP-2026-2048",
        "invoiceId": "inv-demo-48",
        "invoiceNumber": "INV-2026-1048",
        "clientId": "cli-demo-48",
        "clientName": "Green Leaf Nutrition Store",
        "amount": 2264.85,
        "paymentDate": "22-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90048",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1048",
        "createdAt": "2026-07-22T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-17T00:00:00.000Z",
    "updatedAt": "2026-07-17T00:00:00.000Z"
  },
  {
    "id": "inv-demo-49",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-49",
      "name": "SpeedLine Commercial Delivery Services",
      "accountNumber": "449",
      "trn": "100417294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1049",
      "invoiceDate": "18-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-49-1",
        "itemNumber": 1,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 4320
      },
      {
        "id": "item-49-2",
        "itemNumber": 2,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 7200
      },
      {
        "id": "item-49-3",
        "itemNumber": 3,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 6240
      }
    ],
    "totals": {
      "totalQuantity": 43,
      "subtotal": 17760,
      "discount": 0,
      "netAmount": 17760,
      "vatAmount": 888,
      "grandTotal": 18648,
      "amountInWordsArabic": "فقط 18648 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighteen Thousand Six Hundred Forty Eight Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "17-08-2026",
    "paidAmount": 18648,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-049",
        "paymentNumber": "RCP-2026-2049",
        "invoiceId": "inv-demo-49",
        "invoiceNumber": "INV-2026-1049",
        "clientId": "cli-demo-49",
        "clientName": "SpeedLine Commercial Delivery Services",
        "amount": 18648,
        "paymentDate": "24-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90049",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1049",
        "createdAt": "2026-07-24T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-18T00:00:00.000Z",
    "updatedAt": "2026-07-18T00:00:00.000Z"
  },
  {
    "id": "inv-demo-50",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-50",
      "name": "CleanPro Facility Management L.L.C",
      "accountNumber": "450",
      "trn": "100317294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1050",
      "invoiceDate": "18-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-50-1",
        "itemNumber": 1,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 2400
      },
      {
        "id": "item-50-2",
        "itemNumber": 2,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 4320
      },
      {
        "id": "item-50-3",
        "itemNumber": 3,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 10400
      },
      {
        "id": "item-50-4",
        "itemNumber": 4,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 4140
      }
    ],
    "totals": {
      "totalQuantity": 50,
      "subtotal": 21260,
      "discount": 0,
      "netAmount": 21260,
      "vatAmount": 1063,
      "grandTotal": 22323,
      "amountInWordsArabic": "فقط 22323 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Two Thousand Three Hundred Twenty Three Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "17-08-2026",
    "paidAmount": 22323,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-050",
        "paymentNumber": "RCP-2026-2050",
        "invoiceId": "inv-demo-50",
        "invoiceNumber": "INV-2026-1050",
        "clientId": "cli-demo-50",
        "clientName": "CleanPro Facility Management L.L.C",
        "amount": 22323,
        "paymentDate": "20-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90050",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1050",
        "createdAt": "2026-07-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-18T00:00:00.000Z",
    "updatedAt": "2026-07-18T00:00:00.000Z"
  },
  {
    "id": "inv-demo-51",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-51",
      "name": "ColdChain Logistics Services L.L.C",
      "accountNumber": "451",
      "trn": "100217294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1051",
      "invoiceDate": "18-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-51-1",
        "itemNumber": 1,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 2400
      },
      {
        "id": "item-51-2",
        "itemNumber": 2,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 7800
      }
    ],
    "totals": {
      "totalQuantity": 17,
      "subtotal": 10200,
      "discount": 0,
      "netAmount": 10200,
      "vatAmount": 510,
      "grandTotal": 10710,
      "amountInWordsArabic": "فقط 10710 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Ten Thousand Seven Hundred Ten Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "17-08-2026",
    "paidAmount": 10710,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-051",
        "paymentNumber": "RCP-2026-2051",
        "invoiceId": "inv-demo-51",
        "invoiceNumber": "INV-2026-1051",
        "clientId": "cli-demo-51",
        "clientName": "ColdChain Logistics Services L.L.C",
        "amount": 10710,
        "paymentDate": "21-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90051",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1051",
        "createdAt": "2026-07-21T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-18T00:00:00.000Z",
    "updatedAt": "2026-07-18T00:00:00.000Z"
  },
  {
    "id": "inv-demo-52",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-52",
      "name": "FreshFleet Distribution Services",
      "accountNumber": "452",
      "trn": "100117294000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1052",
      "invoiceDate": "19-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-52-1",
        "itemNumber": 1,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 5200
      },
      {
        "id": "item-52-2",
        "itemNumber": 2,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 2700
      },
      {
        "id": "item-52-3",
        "itemNumber": 3,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 26400
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 34300,
      "discount": 0,
      "netAmount": 34300,
      "vatAmount": 1715,
      "grandTotal": 36015,
      "amountInWordsArabic": "فقط 36015 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Six Thousand Fifteen Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "03-08-2026",
    "paidAmount": 36015,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-052",
        "paymentNumber": "RCP-2026-2052",
        "invoiceId": "inv-demo-52",
        "invoiceNumber": "INV-2026-1052",
        "clientId": "cli-demo-52",
        "clientName": "FreshFleet Distribution Services",
        "amount": 36015,
        "paymentDate": "23-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90052",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1052",
        "createdAt": "2026-07-23T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-19T00:00:00.000Z",
    "updatedAt": "2026-07-19T00:00:00.000Z"
  },
  {
    "id": "inv-demo-53",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-01",
      "name": "Al Noor Supermarket L.L.C",
      "accountNumber": "401",
      "trn": "100482910400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1053",
      "invoiceDate": "19-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-53-1",
        "itemNumber": 1,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 198
      },
      {
        "id": "item-53-2",
        "itemNumber": 2,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 351
      },
      {
        "id": "item-53-3",
        "itemNumber": 3,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 412.5
      },
      {
        "id": "item-53-4",
        "itemNumber": 4,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 59.5
      }
    ],
    "totals": {
      "totalQuantity": 61,
      "subtotal": 1021,
      "discount": 0,
      "netAmount": 1021,
      "vatAmount": 51.05,
      "grandTotal": 1072.05,
      "amountInWordsArabic": "فقط 1072 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Seventy Two Dirhams and Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "03-08-2026",
    "paidAmount": 1072.05,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-053",
        "paymentNumber": "RCP-2026-2053",
        "invoiceId": "inv-demo-53",
        "invoiceNumber": "INV-2026-1053",
        "clientId": "cli-demo-01",
        "clientName": "Al Noor Supermarket L.L.C",
        "amount": 1072.05,
        "paymentDate": "24-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90053",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1053",
        "createdAt": "2026-07-24T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-19T00:00:00.000Z",
    "updatedAt": "2026-07-19T00:00:00.000Z"
  },
  {
    "id": "inv-demo-54",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-02",
      "name": "Golden Basket Hypermarket L.L.C",
      "accountNumber": "402",
      "trn": "100294819200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1054",
      "invoiceDate": "20-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-54-1",
        "itemNumber": 1,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 273
      },
      {
        "id": "item-54-2",
        "itemNumber": 2,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 346.5
      }
    ],
    "totals": {
      "totalQuantity": 35,
      "subtotal": 619.5,
      "discount": 0,
      "netAmount": 619.5,
      "vatAmount": 30.98,
      "grandTotal": 650.48,
      "amountInWordsArabic": "فقط 650 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Hundred Fifty Dirhams and Forty Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "19-08-2026",
    "paidAmount": 650.48,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-054",
        "paymentNumber": "RCP-2026-2054",
        "invoiceId": "inv-demo-54",
        "invoiceNumber": "INV-2026-1054",
        "clientId": "cli-demo-02",
        "clientName": "Golden Basket Hypermarket L.L.C",
        "amount": 650.48,
        "paymentDate": "26-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90054",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1054",
        "createdAt": "2026-07-26T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-20T00:00:00.000Z",
    "updatedAt": "2026-07-20T00:00:00.000Z"
  },
  {
    "id": "inv-demo-55",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-03",
      "name": "Green Harvest Supermarket",
      "accountNumber": "403",
      "trn": "100839201900003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1055",
      "invoiceDate": "20-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-55-1",
        "itemNumber": 1,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 280.5
      },
      {
        "id": "item-55-2",
        "itemNumber": 2,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 204
      },
      {
        "id": "item-55-3",
        "itemNumber": 3,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 252
      }
    ],
    "totals": {
      "totalQuantity": 47,
      "subtotal": 736.5,
      "discount": 0,
      "netAmount": 736.5,
      "vatAmount": 36.83,
      "grandTotal": 773.33,
      "amountInWordsArabic": "فقط 773 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Hundred Seventy Three Dirhams and Thirty Three Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "04-08-2026",
    "paidAmount": 773.33,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-055",
        "paymentNumber": "RCP-2026-2055",
        "invoiceId": "inv-demo-55",
        "invoiceNumber": "INV-2026-1055",
        "clientId": "cli-demo-03",
        "clientName": "Green Harvest Supermarket",
        "amount": 773.33,
        "paymentDate": "22-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90055",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1055",
        "createdAt": "2026-07-22T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-20T00:00:00.000Z",
    "updatedAt": "2026-07-20T00:00:00.000Z"
  },
  {
    "id": "inv-demo-56",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-04",
      "name": "Family Choice Supermarket L.L.C",
      "accountNumber": "404",
      "trn": "100382910400003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1056",
      "invoiceDate": "20-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-56-1",
        "itemNumber": 1,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 170
      },
      {
        "id": "item-56-2",
        "itemNumber": 2,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 84
      },
      {
        "id": "item-56-3",
        "itemNumber": 3,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 135
      },
      {
        "id": "item-56-4",
        "itemNumber": 4,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 280
      }
    ],
    "totals": {
      "totalQuantity": 47,
      "subtotal": 669,
      "discount": 0,
      "netAmount": 669,
      "vatAmount": 33.45,
      "grandTotal": 702.45,
      "amountInWordsArabic": "فقط 702 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Hundred Two Dirhams and Forty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "27-07-2026",
    "paidAmount": 702.45,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-056",
        "paymentNumber": "RCP-2026-2056",
        "invoiceId": "inv-demo-56",
        "invoiceNumber": "INV-2026-1056",
        "clientId": "cli-demo-04",
        "clientName": "Family Choice Supermarket L.L.C",
        "amount": 702.45,
        "paymentDate": "23-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90056",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1056",
        "createdAt": "2026-07-23T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-20T00:00:00.000Z",
    "updatedAt": "2026-07-20T00:00:00.000Z"
  },
  {
    "id": "inv-demo-57",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-05",
      "name": "Grand Central Mart L.L.C",
      "accountNumber": "405",
      "trn": "100948271000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1057",
      "invoiceDate": "21-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-57-1",
        "itemNumber": 1,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 966
      },
      {
        "id": "item-57-2",
        "itemNumber": 2,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 75
      }
    ],
    "totals": {
      "totalQuantity": 28,
      "subtotal": 1041,
      "discount": 0,
      "netAmount": 1041,
      "vatAmount": 52.05,
      "grandTotal": 1093.05,
      "amountInWordsArabic": "فقط 1093 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Ninety Three Dirhams and Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "20-08-2026",
    "paidAmount": 1093.05,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-057",
        "paymentNumber": "RCP-2026-2057",
        "invoiceId": "inv-demo-57",
        "invoiceNumber": "INV-2026-1057",
        "clientId": "cli-demo-05",
        "clientName": "Grand Central Mart L.L.C",
        "amount": 1093.05,
        "paymentDate": "25-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90057",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1057",
        "createdAt": "2026-07-25T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-21T00:00:00.000Z",
    "updatedAt": "2026-07-21T00:00:00.000Z"
  },
  {
    "id": "inv-demo-58",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-06",
      "name": "Emirates Fresh Mart",
      "accountNumber": "406",
      "trn": "100192840100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1058",
      "invoiceDate": "21-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-58-1",
        "itemNumber": 1,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 390
      },
      {
        "id": "item-58-2",
        "itemNumber": 2,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 140
      },
      {
        "id": "item-58-3",
        "itemNumber": 3,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 427.5
      }
    ],
    "totals": {
      "totalQuantity": 49,
      "subtotal": 957.5,
      "discount": 0,
      "netAmount": 957.5,
      "vatAmount": 47.88,
      "grandTotal": 1005.38,
      "amountInWordsArabic": "فقط 1005 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Five Dirhams and Thirty Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "05-08-2026",
    "paidAmount": 1005.38,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-058",
        "paymentNumber": "RCP-2026-2058",
        "invoiceId": "inv-demo-58",
        "invoiceNumber": "INV-2026-1058",
        "clientId": "cli-demo-06",
        "clientName": "Emirates Fresh Mart",
        "amount": 1005.38,
        "paymentDate": "26-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90058",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1058",
        "createdAt": "2026-07-26T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-21T00:00:00.000Z",
    "updatedAt": "2026-07-21T00:00:00.000Z"
  },
  {
    "id": "inv-demo-59",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-07",
      "name": "City Star Supermarket L.L.C",
      "accountNumber": "407",
      "trn": "100728192000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1059",
      "invoiceDate": "21-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-59-1",
        "itemNumber": 1,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 70
      },
      {
        "id": "item-59-2",
        "itemNumber": 2,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 313.5
      },
      {
        "id": "item-59-3",
        "itemNumber": 3,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 612
      },
      {
        "id": "item-59-4",
        "itemNumber": 4,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 287.5
      }
    ],
    "totals": {
      "totalQuantity": 58,
      "subtotal": 1283,
      "discount": 0,
      "netAmount": 1283,
      "vatAmount": 64.15,
      "grandTotal": 1347.15,
      "amountInWordsArabic": "فقط 1347 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Three Hundred Forty Seven Dirhams and Fifteen Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "28-07-2026",
    "paidAmount": 1347.15,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-059",
        "paymentNumber": "RCP-2026-2059",
        "invoiceId": "inv-demo-59",
        "invoiceNumber": "INV-2026-1059",
        "clientId": "cli-demo-07",
        "clientName": "City Star Supermarket L.L.C",
        "amount": 1347.15,
        "paymentDate": "27-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90059",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1059",
        "createdAt": "2026-07-27T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-21T00:00:00.000Z",
    "updatedAt": "2026-07-21T00:00:00.000Z"
  },
  {
    "id": "inv-demo-60",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-08",
      "name": "Royal Garden Restaurant L.L.C",
      "accountNumber": "408",
      "trn": "100582910200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1060",
      "invoiceDate": "22-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-60-1",
        "itemNumber": 1,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 3360
      },
      {
        "id": "item-60-2",
        "itemNumber": 2,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 448
      }
    ],
    "totals": {
      "totalQuantity": 21,
      "subtotal": 3808,
      "discount": 0,
      "netAmount": 3808,
      "vatAmount": 190.4,
      "grandTotal": 3998.4,
      "amountInWordsArabic": "فقط 3998 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Nine Hundred Ninety Eight Dirhams and Forty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "29-07-2026",
    "paidAmount": 3998.4,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-060",
        "paymentNumber": "RCP-2026-2060",
        "invoiceId": "inv-demo-60",
        "invoiceNumber": "INV-2026-1060",
        "clientId": "cli-demo-08",
        "clientName": "Royal Garden Restaurant L.L.C",
        "amount": 3998.4,
        "paymentDate": "24-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90060",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1060",
        "createdAt": "2026-07-24T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-22T00:00:00.000Z",
    "updatedAt": "2026-07-22T00:00:00.000Z"
  },
  {
    "id": "inv-demo-61",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-09",
      "name": "Ocean View Seafood Restaurant",
      "accountNumber": "409",
      "trn": "100482918300003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1061",
      "invoiceDate": "22-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-61-1",
        "itemNumber": 1,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 320
      },
      {
        "id": "item-61-2",
        "itemNumber": 2,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 646
      },
      {
        "id": "item-61-3",
        "itemNumber": 3,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 3480
      }
    ],
    "totals": {
      "totalQuantity": 51,
      "subtotal": 4446,
      "discount": 0,
      "netAmount": 4446,
      "vatAmount": 222.3,
      "grandTotal": 4668.3,
      "amountInWordsArabic": "فقط 4668 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Six Hundred Sixty Eight Dirhams and Thirty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "29-07-2026",
    "paidAmount": 4668.3,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-061",
        "paymentNumber": "RCP-2026-2061",
        "invoiceId": "inv-demo-61",
        "invoiceNumber": "INV-2026-1061",
        "clientId": "cli-demo-09",
        "clientName": "Ocean View Seafood Restaurant",
        "amount": 4668.3,
        "paymentDate": "25-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90061",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1061",
        "createdAt": "2026-07-25T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-22T00:00:00.000Z",
    "updatedAt": "2026-07-22T00:00:00.000Z"
  },
  {
    "id": "inv-demo-62",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-10",
      "name": "Urban Bites Restaurant L.L.C",
      "accountNumber": "410",
      "trn": "100918274000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1062",
      "invoiceDate": "22-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-62-1",
        "itemNumber": 1,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 494
      },
      {
        "id": "item-62-2",
        "itemNumber": 2,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2900
      },
      {
        "id": "item-62-3",
        "itemNumber": 3,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 136
      },
      {
        "id": "item-62-4",
        "itemNumber": 4,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1215
      }
    ],
    "totals": {
      "totalQuantity": 44,
      "subtotal": 4745,
      "discount": 0,
      "netAmount": 4745,
      "vatAmount": 237.25,
      "grandTotal": 4982.25,
      "amountInWordsArabic": "فقط 4982 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Nine Hundred Eighty Two Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "06-08-2026",
    "paidAmount": 4982.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-062",
        "paymentNumber": "RCP-2026-2062",
        "invoiceId": "inv-demo-62",
        "invoiceNumber": "INV-2026-1062",
        "clientId": "cli-demo-10",
        "clientName": "Urban Bites Restaurant L.L.C",
        "amount": 4982.25,
        "paymentDate": "26-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90062",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1062",
        "createdAt": "2026-07-26T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-22T00:00:00.000Z",
    "updatedAt": "2026-07-22T00:00:00.000Z"
  },
  {
    "id": "inv-demo-63",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-11",
      "name": "Desert Rose Mandi & Grill",
      "accountNumber": "411",
      "trn": "100628192000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1063",
      "invoiceDate": "23-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-63-1",
        "itemNumber": 1,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2320
      },
      {
        "id": "item-63-2",
        "itemNumber": 2,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 1564
      }
    ],
    "totals": {
      "totalQuantity": 39,
      "subtotal": 3884,
      "discount": 0,
      "netAmount": 3884,
      "vatAmount": 194.2,
      "grandTotal": 4078.2,
      "amountInWordsArabic": "فقط 4078 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Seventy Eight Dirhams and Twenty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "30-07-2026",
    "paidAmount": 4078.2,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-063",
        "paymentNumber": "RCP-2026-2063",
        "invoiceId": "inv-demo-63",
        "invoiceNumber": "INV-2026-1063",
        "clientId": "cli-demo-11",
        "clientName": "Desert Rose Mandi & Grill",
        "amount": 4078.2,
        "paymentDate": "28-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90063",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1063",
        "createdAt": "2026-07-28T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-23T00:00:00.000Z",
    "updatedAt": "2026-07-23T00:00:00.000Z"
  },
  {
    "id": "inv-demo-64",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-12",
      "name": "Sultan Turkish Cuisine L.L.C",
      "accountNumber": "412",
      "trn": "100827192000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1064",
      "invoiceDate": "23-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-64-1",
        "itemNumber": 1,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 1292
      },
      {
        "id": "item-64-2",
        "itemNumber": 2,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 3510
      },
      {
        "id": "item-64-3",
        "itemNumber": 3,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 920
      }
    ],
    "totals": {
      "totalQuantity": 53,
      "subtotal": 5722,
      "discount": 0,
      "netAmount": 5722,
      "vatAmount": 286.1,
      "grandTotal": 6008.1,
      "amountInWordsArabic": "فقط 6008 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Eight Dirhams and Ten Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "07-08-2026",
    "paidAmount": 6008.1,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-064",
        "paymentNumber": "RCP-2026-2064",
        "invoiceId": "inv-demo-64",
        "invoiceNumber": "INV-2026-1064",
        "clientId": "cli-demo-12",
        "clientName": "Sultan Turkish Cuisine L.L.C",
        "amount": 6008.1,
        "paymentDate": "29-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90064",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1064",
        "createdAt": "2026-07-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-23T00:00:00.000Z",
    "updatedAt": "2026-07-23T00:00:00.000Z"
  },
  {
    "id": "inv-demo-65",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-13",
      "name": "Al Safeer Lebanese Kitchen",
      "accountNumber": "413",
      "trn": "100372819000003",
      "cityOrBranch": "Al Ain"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1065",
      "invoiceDate": "23-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-65-1",
        "itemNumber": 1,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 2970
      },
      {
        "id": "item-65-2",
        "itemNumber": 2,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 460
      },
      {
        "id": "item-65-3",
        "itemNumber": 3,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1045
      },
      {
        "id": "item-65-4",
        "itemNumber": 4,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 2880
      }
    ],
    "totals": {
      "totalQuantity": 55,
      "subtotal": 7355,
      "discount": 0,
      "netAmount": 7355,
      "vatAmount": 367.75,
      "grandTotal": 7722.75,
      "amountInWordsArabic": "فقط 7722 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Seven Hundred Twenty Two Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "30-07-2026",
    "paidAmount": 7722.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-065",
        "paymentNumber": "RCP-2026-2065",
        "invoiceId": "inv-demo-65",
        "invoiceNumber": "INV-2026-1065",
        "clientId": "cli-demo-13",
        "clientName": "Al Safeer Lebanese Kitchen",
        "amount": 7722.75,
        "paymentDate": "25-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90065",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1065",
        "createdAt": "2026-07-25T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-23T00:00:00.000Z",
    "updatedAt": "2026-07-23T00:00:00.000Z"
  },
  {
    "id": "inv-demo-66",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-14",
      "name": "Bukhara Royal Feast Restaurant",
      "accountNumber": "414",
      "trn": "100281920400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1066",
      "invoiceDate": "24-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-66-1",
        "itemNumber": 1,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2875
      },
      {
        "id": "item-66-2",
        "itemNumber": 2,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 665
      }
    ],
    "totals": {
      "totalQuantity": 32,
      "subtotal": 3540,
      "discount": 0,
      "netAmount": 3540,
      "vatAmount": 177,
      "grandTotal": 3717,
      "amountInWordsArabic": "فقط 3717 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Seven Hundred Seventeen Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "08-08-2026",
    "paidAmount": 3717,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-066",
        "paymentNumber": "RCP-2026-2066",
        "invoiceId": "inv-demo-66",
        "invoiceNumber": "INV-2026-1066",
        "clientId": "cli-demo-14",
        "clientName": "Bukhara Royal Feast Restaurant",
        "amount": 3717,
        "paymentDate": "27-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90066",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1066",
        "createdAt": "2026-07-27T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-24T00:00:00.000Z",
    "updatedAt": "2026-07-24T00:00:00.000Z"
  },
  {
    "id": "inv-demo-67",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-15",
      "name": "Blue Horizon Roastery & Cafe",
      "accountNumber": "415",
      "trn": "100592819000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1067",
      "invoiceDate": "24-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-67-1",
        "itemNumber": 1,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 126
      },
      {
        "id": "item-67-2",
        "itemNumber": 2,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 1100
      },
      {
        "id": "item-67-3",
        "itemNumber": 3,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 1445
      }
    ],
    "totals": {
      "totalQuantity": 30,
      "subtotal": 2671,
      "discount": 0,
      "netAmount": 2671,
      "vatAmount": 133.55,
      "grandTotal": 2804.55,
      "amountInWordsArabic": "فقط 2804 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Eight Hundred Four Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "31-07-2026",
    "paidAmount": 2804.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-067",
        "paymentNumber": "RCP-2026-2067",
        "invoiceId": "inv-demo-67",
        "invoiceNumber": "INV-2026-1067",
        "clientId": "cli-demo-15",
        "clientName": "Blue Horizon Roastery & Cafe",
        "amount": 2804.55,
        "paymentDate": "28-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90067",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1067",
        "createdAt": "2026-07-28T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-24T00:00:00.000Z",
    "updatedAt": "2026-07-24T00:00:00.000Z"
  },
  {
    "id": "inv-demo-68",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-16",
      "name": "Palm Grove Specialty Coffee",
      "accountNumber": "416",
      "trn": "100728190400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1068",
      "invoiceDate": "25-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-68-1",
        "itemNumber": 1,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 660
      },
      {
        "id": "item-68-2",
        "itemNumber": 2,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 1105
      },
      {
        "id": "item-68-3",
        "itemNumber": 3,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 1560
      },
      {
        "id": "item-68-4",
        "itemNumber": 4,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 190
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 3515,
      "discount": 0,
      "netAmount": 3515,
      "vatAmount": 175.75,
      "grandTotal": 3690.75,
      "amountInWordsArabic": "فقط 3690 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Six Hundred Ninety Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "09-08-2026",
    "paidAmount": 3690.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-068",
        "paymentNumber": "RCP-2026-2068",
        "invoiceId": "inv-demo-68",
        "invoiceNumber": "INV-2026-1068",
        "clientId": "cli-demo-16",
        "clientName": "Palm Grove Specialty Coffee",
        "amount": 3690.75,
        "paymentDate": "30-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90068",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1068",
        "createdAt": "2026-07-30T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-25T00:00:00.000Z",
    "updatedAt": "2026-07-25T00:00:00.000Z"
  },
  {
    "id": "inv-demo-69",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-17",
      "name": "Desert Pearl Lounge & Cafe",
      "accountNumber": "417",
      "trn": "100819204900003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1069",
      "invoiceDate": "25-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-69-1",
        "itemNumber": 1,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 765
      },
      {
        "id": "item-69-2",
        "itemNumber": 2,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 1248
      }
    ],
    "totals": {
      "totalQuantity": 25,
      "subtotal": 2013,
      "discount": 0,
      "netAmount": 2013,
      "vatAmount": 100.65,
      "grandTotal": 2113.65,
      "amountInWordsArabic": "فقط 2113 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand One Hundred Thirteen Dirhams and Sixty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "01-08-2026",
    "paidAmount": 2113.65,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-069",
        "paymentNumber": "RCP-2026-2069",
        "invoiceId": "inv-demo-69",
        "invoiceNumber": "INV-2026-1069",
        "clientId": "cli-demo-17",
        "clientName": "Desert Pearl Lounge & Cafe",
        "amount": 2113.65,
        "paymentDate": "31-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90069",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1069",
        "createdAt": "2026-07-31T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-25T00:00:00.000Z",
    "updatedAt": "2026-07-25T00:00:00.000Z"
  },
  {
    "id": "inv-demo-70",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-18",
      "name": "Artisan Roast Cafe L.L.C",
      "accountNumber": "418",
      "trn": "100492810300003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1070",
      "invoiceDate": "25-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-70-1",
        "itemNumber": 1,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 936
      },
      {
        "id": "item-70-2",
        "itemNumber": 2,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1805
      },
      {
        "id": "item-70-3",
        "itemNumber": 3,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 1404
      }
    ],
    "totals": {
      "totalQuantity": 57,
      "subtotal": 4145,
      "discount": 0,
      "netAmount": 4145,
      "vatAmount": 207.25,
      "grandTotal": 4352.25,
      "amountInWordsArabic": "فقط 4352 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Three Hundred Fifty Two Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "01-08-2026",
    "paidAmount": 4352.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-070",
        "paymentNumber": "RCP-2026-2070",
        "invoiceId": "inv-demo-70",
        "invoiceNumber": "INV-2026-1070",
        "clientId": "cli-demo-18",
        "clientName": "Artisan Roast Cafe L.L.C",
        "amount": 4352.25,
        "paymentDate": "27-07-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90070",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1070",
        "createdAt": "2026-07-27T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-25T00:00:00.000Z",
    "updatedAt": "2026-07-25T00:00:00.000Z"
  },
  {
    "id": "inv-demo-71",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-19",
      "name": "Velvet Bean Cafe & Lounge",
      "accountNumber": "419",
      "trn": "100619284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1071",
      "invoiceDate": "26-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-71-1",
        "itemNumber": 1,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1425
      },
      {
        "id": "item-71-2",
        "itemNumber": 2,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 1188
      },
      {
        "id": "item-71-3",
        "itemNumber": 3,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 248
      },
      {
        "id": "item-71-4",
        "itemNumber": 4,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 462
      }
    ],
    "totals": {
      "totalQuantity": 52,
      "subtotal": 3323,
      "discount": 0,
      "netAmount": 3323,
      "vatAmount": 166.15,
      "grandTotal": 3489.15,
      "amountInWordsArabic": "فقط 3489 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Four Hundred Eighty Nine Dirhams and Fifteen Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "10-08-2026",
    "paidAmount": 3489.15,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-071",
        "paymentNumber": "RCP-2026-2071",
        "invoiceId": "inv-demo-71",
        "invoiceNumber": "INV-2026-1071",
        "clientId": "cli-demo-19",
        "clientName": "Velvet Bean Cafe & Lounge",
        "amount": 3489.15,
        "paymentDate": "29-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90071",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1071",
        "createdAt": "2026-07-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-26T00:00:00.000Z",
    "updatedAt": "2026-07-26T00:00:00.000Z"
  },
  {
    "id": "inv-demo-72",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-20",
      "name": "Sunrise French Bakery & Patisserie",
      "accountNumber": "420",
      "trn": "100392810400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1072",
      "invoiceDate": "26-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-72-1",
        "itemNumber": 1,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 2520
      },
      {
        "id": "item-72-2",
        "itemNumber": 2,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 4875
      }
    ],
    "totals": {
      "totalQuantity": 43,
      "subtotal": 7395,
      "discount": 0,
      "netAmount": 7395,
      "vatAmount": 369.75,
      "grandTotal": 7764.75,
      "amountInWordsArabic": "فقط 7764 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Seven Hundred Sixty Four Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "02-08-2026",
    "paidAmount": 7764.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-072",
        "paymentNumber": "RCP-2026-2072",
        "invoiceId": "inv-demo-72",
        "invoiceNumber": "INV-2026-1072",
        "clientId": "cli-demo-20",
        "clientName": "Sunrise French Bakery & Patisserie",
        "amount": 7764.75,
        "paymentDate": "30-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90072",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1072",
        "createdAt": "2026-07-30T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-26T00:00:00.000Z",
    "updatedAt": "2026-07-26T00:00:00.000Z"
  },
  {
    "id": "inv-demo-73",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-21",
      "name": "Golden Wheat Artisan Bakery",
      "accountNumber": "421",
      "trn": "100482910500003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1073",
      "invoiceDate": "26-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-73-1",
        "itemNumber": 1,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 4095
      },
      {
        "id": "item-73-2",
        "itemNumber": 2,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 540
      },
      {
        "id": "item-73-3",
        "itemNumber": 3,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 380
      }
    ],
    "totals": {
      "totalQuantity": 34,
      "subtotal": 5015,
      "discount": 0,
      "netAmount": 5015,
      "vatAmount": 250.75,
      "grandTotal": 5265.75,
      "amountInWordsArabic": "فقط 5265 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Two Hundred Sixty Five Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "10-08-2026",
    "paidAmount": 5265.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-073",
        "paymentNumber": "RCP-2026-2073",
        "invoiceId": "inv-demo-73",
        "invoiceNumber": "INV-2026-1073",
        "clientId": "cli-demo-21",
        "clientName": "Golden Wheat Artisan Bakery",
        "amount": 5265.75,
        "paymentDate": "31-07-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90073",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1073",
        "createdAt": "2026-07-31T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-26T00:00:00.000Z",
    "updatedAt": "2026-07-26T00:00:00.000Z"
  },
  {
    "id": "inv-demo-74",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-22",
      "name": "Crown Sweets & Pastries L.L.C",
      "accountNumber": "422",
      "trn": "100728194000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1074",
      "invoiceDate": "27-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-74-1",
        "itemNumber": 1,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 4320
      },
      {
        "id": "item-74-2",
        "itemNumber": 2,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 228
      },
      {
        "id": "item-74-3",
        "itemNumber": 3,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 1625
      },
      {
        "id": "item-74-4",
        "itemNumber": 4,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 1640
      }
    ],
    "totals": {
      "totalQuantity": 63,
      "subtotal": 7813,
      "discount": 0,
      "netAmount": 7813,
      "vatAmount": 390.65,
      "grandTotal": 8203.65,
      "amountInWordsArabic": "فقط 8203 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eight Thousand Two Hundred Three Dirhams and Sixty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "03-08-2026",
    "paidAmount": 8203.65,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-074",
        "paymentNumber": "RCP-2026-2074",
        "invoiceId": "inv-demo-74",
        "invoiceNumber": "INV-2026-1074",
        "clientId": "cli-demo-22",
        "clientName": "Crown Sweets & Pastries L.L.C",
        "amount": 8203.65,
        "paymentDate": "02-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90074",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1074",
        "createdAt": "2026-08-02T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-27T00:00:00.000Z",
    "updatedAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "inv-demo-75",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-23",
      "name": "Maison Dorée Pastry Studio",
      "accountNumber": "423",
      "trn": "100928194000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1075",
      "invoiceDate": "27-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-75-1",
        "itemNumber": 1,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 76
      },
      {
        "id": "item-75-2",
        "itemNumber": 2,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 1125
      }
    ],
    "totals": {
      "totalQuantity": 11,
      "subtotal": 1201,
      "discount": 0,
      "netAmount": 1201,
      "vatAmount": 60.05,
      "grandTotal": 1261.05,
      "amountInWordsArabic": "فقط 1261 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Two Hundred Sixty One Dirhams and Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "11-08-2026",
    "paidAmount": 1261.05,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-075",
        "paymentNumber": "RCP-2026-2075",
        "invoiceId": "inv-demo-75",
        "invoiceNumber": "INV-2026-1075",
        "clientId": "cli-demo-23",
        "clientName": "Maison Dorée Pastry Studio",
        "amount": 1261.05,
        "paymentDate": "29-07-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90075",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1075",
        "createdAt": "2026-07-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-27T00:00:00.000Z",
    "updatedAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "inv-demo-76",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-24",
      "name": "Al Barakah Arabic Bakery",
      "accountNumber": "424",
      "trn": "100294810200003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1076",
      "invoiceDate": "27-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-76-1",
        "itemNumber": 1,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 625
      },
      {
        "id": "item-76-2",
        "itemNumber": 2,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 984
      },
      {
        "id": "item-76-3",
        "itemNumber": 3,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 6460
      }
    ],
    "totals": {
      "totalQuantity": 36,
      "subtotal": 8069,
      "discount": 0,
      "netAmount": 8069,
      "vatAmount": 403.45,
      "grandTotal": 8472.45,
      "amountInWordsArabic": "فقط 8472 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eight Thousand Four Hundred Seventy Two Dirhams and Forty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "03-08-2026",
    "paidAmount": 8472.45,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-076",
        "paymentNumber": "RCP-2026-2076",
        "invoiceId": "inv-demo-76",
        "invoiceNumber": "INV-2026-1076",
        "clientId": "cli-demo-24",
        "clientName": "Al Barakah Arabic Bakery",
        "amount": 8472.45,
        "paymentDate": "30-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90076",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1076",
        "createdAt": "2026-07-30T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-27T00:00:00.000Z",
    "updatedAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "inv-demo-77",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-25",
      "name": "Desert Pearl Hospitality & Catering L.L.C",
      "accountNumber": "425",
      "trn": "100819204000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1077",
      "invoiceDate": "28-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-77-1",
        "itemNumber": 1,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 3360
      },
      {
        "id": "item-77-2",
        "itemNumber": 2,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 33750
      },
      {
        "id": "item-77-3",
        "itemNumber": 3,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 9900
      },
      {
        "id": "item-77-4",
        "itemNumber": 4,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 2880
      }
    ],
    "totals": {
      "totalQuantity": 49,
      "subtotal": 49890,
      "discount": 0,
      "netAmount": 49890,
      "vatAmount": 2494.5,
      "grandTotal": 52384.5,
      "amountInWordsArabic": "فقط 52384 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty Two Thousand Three Hundred Eighty Four Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "27-08-2026",
    "paidAmount": 52384.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-077",
        "paymentNumber": "RCP-2026-2077",
        "invoiceId": "inv-demo-77",
        "invoiceNumber": "INV-2026-1077",
        "clientId": "cli-demo-25",
        "clientName": "Desert Pearl Hospitality & Catering L.L.C",
        "amount": 52384.5,
        "paymentDate": "01-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90077",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1077",
        "createdAt": "2026-08-01T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-28T00:00:00.000Z",
    "updatedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "inv-demo-78",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-26",
      "name": "Imperial Banquet Catering Services",
      "accountNumber": "426",
      "trn": "100619280400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1078",
      "invoiceDate": "28-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-78-1",
        "itemNumber": 1,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 24750
      },
      {
        "id": "item-78-2",
        "itemNumber": 2,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 8100
      }
    ],
    "totals": {
      "totalQuantity": 29,
      "subtotal": 32850,
      "discount": 0,
      "netAmount": 32850,
      "vatAmount": 1642.5,
      "grandTotal": 34492.5,
      "amountInWordsArabic": "فقط 34492 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Four Thousand Four Hundred Ninety Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "27-08-2026",
    "paidAmount": 34492.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-078",
        "paymentNumber": "RCP-2026-2078",
        "invoiceId": "inv-demo-78",
        "invoiceNumber": "INV-2026-1078",
        "clientId": "cli-demo-26",
        "clientName": "Imperial Banquet Catering Services",
        "amount": 34492.5,
        "paymentDate": "02-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90078",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1078",
        "createdAt": "2026-08-02T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-28T00:00:00.000Z",
    "updatedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "inv-demo-79",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-27",
      "name": "Golden Spoon Event Caterers",
      "accountNumber": "427",
      "trn": "100519284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1079",
      "invoiceDate": "28-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-79-1",
        "itemNumber": 1,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 6300
      },
      {
        "id": "item-79-2",
        "itemNumber": 2,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 15120
      },
      {
        "id": "item-79-3",
        "itemNumber": 3,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 1140
      }
    ],
    "totals": {
      "totalQuantity": 38,
      "subtotal": 22560,
      "discount": 0,
      "netAmount": 22560,
      "vatAmount": 1128,
      "grandTotal": 23688,
      "amountInWordsArabic": "فقط 23688 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Three Thousand Six Hundred Eighty Eight Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "12-08-2026",
    "paidAmount": 23688,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-079",
        "paymentNumber": "RCP-2026-2079",
        "invoiceId": "inv-demo-79",
        "invoiceNumber": "INV-2026-1079",
        "clientId": "cli-demo-27",
        "clientName": "Golden Spoon Event Caterers",
        "amount": 23688,
        "paymentDate": "03-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90079",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1079",
        "createdAt": "2026-08-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-28T00:00:00.000Z",
    "updatedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "inv-demo-80",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-28",
      "name": "Royal Table Corporate Catering L.L.C",
      "accountNumber": "428",
      "trn": "100719284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1080",
      "invoiceDate": "29-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-80-1",
        "itemNumber": 1,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 12240
      },
      {
        "id": "item-80-2",
        "itemNumber": 2,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 9120
      },
      {
        "id": "item-80-3",
        "itemNumber": 3,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 3300
      },
      {
        "id": "item-80-4",
        "itemNumber": 4,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 5460
      }
    ],
    "totals": {
      "totalQuantity": 60,
      "subtotal": 30120,
      "discount": 0,
      "netAmount": 30120,
      "vatAmount": 1506,
      "grandTotal": 31626,
      "amountInWordsArabic": "فقط 31626 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty One Thousand Six Hundred Twenty Six Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "28-08-2026",
    "paidAmount": 31626,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-080",
        "paymentNumber": "RCP-2026-2080",
        "invoiceId": "inv-demo-80",
        "invoiceNumber": "INV-2026-1080",
        "clientId": "cli-demo-28",
        "clientName": "Royal Table Corporate Catering L.L.C",
        "amount": 31626,
        "paymentDate": "31-07-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90080",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1080",
        "createdAt": "2026-07-31T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-29T00:00:00.000Z",
    "updatedAt": "2026-07-29T00:00:00.000Z"
  },
  {
    "id": "inv-demo-81",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-29",
      "name": "Gulf Feast Catering & Hospitality",
      "accountNumber": "429",
      "trn": "100419284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1081",
      "invoiceDate": "29-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-81-1",
        "itemNumber": 1,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 7600
      },
      {
        "id": "item-81-2",
        "itemNumber": 2,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 1100
      }
    ],
    "totals": {
      "totalQuantity": 22,
      "subtotal": 8700,
      "discount": 0,
      "netAmount": 8700,
      "vatAmount": 435,
      "grandTotal": 9135,
      "amountInWordsArabic": "فقط 9135 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand One Hundred Thirty Five Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "13-08-2026",
    "paidAmount": 9135,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-081",
        "paymentNumber": "RCP-2026-2081",
        "invoiceId": "inv-demo-81",
        "invoiceNumber": "INV-2026-1081",
        "clientId": "cli-demo-29",
        "clientName": "Gulf Feast Catering & Hospitality",
        "amount": 9135,
        "paymentDate": "01-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90081",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1081",
        "createdAt": "2026-08-01T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-29T00:00:00.000Z",
    "updatedAt": "2026-07-29T00:00:00.000Z"
  },
  {
    "id": "inv-demo-82",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-30",
      "name": "Xender For Trading L.L.C",
      "accountNumber": "430",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1082",
      "invoiceDate": "30-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-82-1",
        "itemNumber": 1,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 50600
      },
      {
        "id": "item-82-2",
        "itemNumber": 2,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 8750
      },
      {
        "id": "item-82-3",
        "itemNumber": 3,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 21600
      }
    ],
    "totals": {
      "totalQuantity": 40,
      "subtotal": 80950,
      "discount": 0,
      "netAmount": 80950,
      "vatAmount": 4047.5,
      "grandTotal": 84997.5,
      "amountInWordsArabic": "فقط 84997 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighty Four Thousand Nine Hundred Ninety Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "14-08-2026",
    "paidAmount": 84997.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-082",
        "paymentNumber": "RCP-2026-2082",
        "invoiceId": "inv-demo-82",
        "invoiceNumber": "INV-2026-1082",
        "clientId": "cli-demo-30",
        "clientName": "Xender For Trading L.L.C",
        "amount": 84997.5,
        "paymentDate": "03-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90082",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1082",
        "createdAt": "2026-08-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-30T00:00:00.000Z",
    "updatedAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "inv-demo-83",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-31",
      "name": "Prime Global General Trading L.L.C",
      "accountNumber": "431",
      "trn": "100319284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1083",
      "invoiceDate": "30-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-83-1",
        "itemNumber": 1,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 45500
      },
      {
        "id": "item-83-2",
        "itemNumber": 2,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 14400
      },
      {
        "id": "item-83-3",
        "itemNumber": 3,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 29250
      },
      {
        "id": "item-83-4",
        "itemNumber": 4,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 46200
      }
    ],
    "totals": {
      "totalQuantity": 71,
      "subtotal": 135350,
      "discount": 0,
      "netAmount": 135350,
      "vatAmount": 6767.5,
      "grandTotal": 142117.5,
      "amountInWordsArabic": "فقط 142117 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Forty Two Thousand One Hundred Seventeen Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "29-08-2026",
    "paidAmount": 142117.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-083",
        "paymentNumber": "RCP-2026-2083",
        "invoiceId": "inv-demo-83",
        "invoiceNumber": "INV-2026-1083",
        "clientId": "cli-demo-31",
        "clientName": "Prime Global General Trading L.L.C",
        "amount": 142117.5,
        "paymentDate": "04-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90083",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1083",
        "createdAt": "2026-08-04T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-30T00:00:00.000Z",
    "updatedAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "inv-demo-84",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-32",
      "name": "Gulf Coast Commodities Trading",
      "accountNumber": "432",
      "trn": "100919284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1084",
      "invoiceDate": "30-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-84-1",
        "itemNumber": 1,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 7200
      },
      {
        "id": "item-84-2",
        "itemNumber": 2,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 21450
      }
    ],
    "totals": {
      "totalQuantity": 15,
      "subtotal": 28650,
      "discount": 0,
      "netAmount": 28650,
      "vatAmount": 1432.5,
      "grandTotal": 30082.5,
      "amountInWordsArabic": "فقط 30082 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Thousand Eighty Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "29-08-2026",
    "paidAmount": 30082.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-084",
        "paymentNumber": "RCP-2026-2084",
        "invoiceId": "inv-demo-84",
        "invoiceNumber": "INV-2026-1084",
        "clientId": "cli-demo-32",
        "clientName": "Gulf Coast Commodities Trading",
        "amount": 30082.5,
        "paymentDate": "05-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90084",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1084",
        "createdAt": "2026-08-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-30T00:00:00.000Z",
    "updatedAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "inv-demo-85",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-33",
      "name": "Al Manar Import & Export L.L.C",
      "accountNumber": "433",
      "trn": "100819284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1085",
      "invoiceDate": "31-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-85-1",
        "itemNumber": 1,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 13650
      },
      {
        "id": "item-85-2",
        "itemNumber": 2,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 29400
      },
      {
        "id": "item-85-3",
        "itemNumber": 3,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 54600
      }
    ],
    "totals": {
      "totalQuantity": 42,
      "subtotal": 97650,
      "discount": 0,
      "netAmount": 97650,
      "vatAmount": 4882.5,
      "grandTotal": 102532.5,
      "amountInWordsArabic": "فقط 102532 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Two Thousand Five Hundred Thirty Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "45 Days",
    "dueDate": "07-08-2026",
    "paidAmount": 102532.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-085",
        "paymentNumber": "RCP-2026-2085",
        "invoiceId": "inv-demo-85",
        "invoiceNumber": "INV-2026-1085",
        "clientId": "cli-demo-33",
        "clientName": "Al Manar Import & Export L.L.C",
        "amount": 102532.5,
        "paymentDate": "02-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90085",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1085",
        "createdAt": "2026-08-02T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-31T00:00:00.000Z",
    "updatedAt": "2026-07-31T00:00:00.000Z"
  },
  {
    "id": "inv-demo-86",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-34",
      "name": "Apex Foodstuff Trading FZE",
      "accountNumber": "434",
      "trn": "100219284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1086",
      "invoiceDate": "31-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-86-1",
        "itemNumber": 1,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 21000
      },
      {
        "id": "item-86-2",
        "itemNumber": 2,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 44200
      },
      {
        "id": "item-86-3",
        "itemNumber": 3,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 52800
      },
      {
        "id": "item-86-4",
        "itemNumber": 4,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 10500
      }
    ],
    "totals": {
      "totalQuantity": 57,
      "subtotal": 128500,
      "discount": 0,
      "netAmount": 128500,
      "vatAmount": 6425,
      "grandTotal": 134925,
      "amountInWordsArabic": "فقط 134925 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Thirty Four Thousand Nine Hundred Twenty Five Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "30-08-2026",
    "paidAmount": 134925,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-086",
        "paymentNumber": "RCP-2026-2086",
        "invoiceId": "inv-demo-86",
        "invoiceNumber": "INV-2026-1086",
        "clientId": "cli-demo-34",
        "clientName": "Apex Foodstuff Trading FZE",
        "amount": 134925,
        "paymentDate": "03-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90086",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1086",
        "createdAt": "2026-08-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-31T00:00:00.000Z",
    "updatedAt": "2026-07-31T00:00:00.000Z"
  },
  {
    "id": "inv-demo-87",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-35",
      "name": "Horizon Agro Trading L.L.C",
      "accountNumber": "435",
      "trn": "100119284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1087",
      "invoiceDate": "31-07-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-87-1",
        "itemNumber": 1,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 33800
      },
      {
        "id": "item-87-2",
        "itemNumber": 2,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 44000
      }
    ],
    "totals": {
      "totalQuantity": 33,
      "subtotal": 77800,
      "discount": 0,
      "netAmount": 77800,
      "vatAmount": 3890,
      "grandTotal": 81690,
      "amountInWordsArabic": "فقط 81690 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighty One Thousand Six Hundred Ninety Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "30-08-2026",
    "paidAmount": 81690,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-087",
        "paymentNumber": "RCP-2026-2087",
        "invoiceId": "inv-demo-87",
        "invoiceNumber": "INV-2026-1087",
        "clientId": "cli-demo-35",
        "clientName": "Horizon Agro Trading L.L.C",
        "amount": 81690,
        "paymentDate": "04-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90087",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1087",
        "createdAt": "2026-08-04T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-07-31T00:00:00.000Z",
    "updatedAt": "2026-07-31T00:00:00.000Z"
  },
  {
    "id": "inv-demo-88",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-36",
      "name": "Marina Palm Luxury Hotel & Suites",
      "accountNumber": "436",
      "trn": "100918294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1088",
      "invoiceDate": "01-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-88-1",
        "itemNumber": 1,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 10400
      },
      {
        "id": "item-88-2",
        "itemNumber": 2,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 21850
      },
      {
        "id": "item-88-3",
        "itemNumber": 3,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 4250
      }
    ],
    "totals": {
      "totalQuantity": 44,
      "subtotal": 36500,
      "discount": 0,
      "netAmount": 36500,
      "vatAmount": 1825,
      "grandTotal": 38325,
      "amountInWordsArabic": "فقط 38325 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Eight Thousand Three Hundred Twenty Five Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "31-08-2026",
    "paidAmount": 38325,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-088",
        "paymentNumber": "RCP-2026-2088",
        "invoiceId": "inv-demo-88",
        "invoiceNumber": "INV-2026-1088",
        "clientId": "cli-demo-36",
        "clientName": "Marina Palm Luxury Hotel & Suites",
        "amount": 38325,
        "paymentDate": "06-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90088",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1088",
        "createdAt": "2026-08-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-01T00:00:00.000Z",
    "updatedAt": "2026-08-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-89",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-37",
      "name": "Golden Dunes Resort & Spa",
      "accountNumber": "437",
      "trn": "100418294000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1089",
      "invoiceDate": "01-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-89-1",
        "itemNumber": 1,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 18050
      },
      {
        "id": "item-89-2",
        "itemNumber": 2,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 22100
      },
      {
        "id": "item-89-3",
        "itemNumber": 3,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 11200
      },
      {
        "id": "item-89-4",
        "itemNumber": 4,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 3300
      }
    ],
    "totals": {
      "totalQuantity": 68,
      "subtotal": 54650,
      "discount": 0,
      "netAmount": 54650,
      "vatAmount": 2732.5,
      "grandTotal": 57382.5,
      "amountInWordsArabic": "فقط 57382 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty Seven Thousand Three Hundred Eighty Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "31-08-2026",
    "paidAmount": 57382.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-089",
        "paymentNumber": "RCP-2026-2089",
        "invoiceId": "inv-demo-89",
        "invoiceNumber": "INV-2026-1089",
        "clientId": "cli-demo-37",
        "clientName": "Golden Dunes Resort & Spa",
        "amount": 57382.5,
        "paymentDate": "07-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90089",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1089",
        "createdAt": "2026-08-07T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-01T00:00:00.000Z",
    "updatedAt": "2026-08-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-90",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-38",
      "name": "Oasis Grand Palace Hotel L.L.C",
      "accountNumber": "438",
      "trn": "100718294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1090",
      "invoiceDate": "01-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-90-1",
        "itemNumber": 1,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 18700
      },
      {
        "id": "item-90-2",
        "itemNumber": 2,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 5600
      }
    ],
    "totals": {
      "totalQuantity": 26,
      "subtotal": 24300,
      "discount": 0,
      "netAmount": 24300,
      "vatAmount": 1215,
      "grandTotal": 25515,
      "amountInWordsArabic": "فقط 25515 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Five Thousand Five Hundred Fifteen Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "31-08-2026",
    "paidAmount": 25515,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-090",
        "paymentNumber": "RCP-2026-2090",
        "invoiceId": "inv-demo-90",
        "invoiceNumber": "INV-2026-1090",
        "clientId": "cli-demo-38",
        "clientName": "Oasis Grand Palace Hotel L.L.C",
        "amount": 25515,
        "paymentDate": "03-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90090",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1090",
        "createdAt": "2026-08-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-01T00:00:00.000Z",
    "updatedAt": "2026-08-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-91",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-39",
      "name": "Sea Breeze Boutique Hotel",
      "accountNumber": "439",
      "trn": "100618294000003",
      "cityOrBranch": "Fujairah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1091",
      "invoiceDate": "02-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-91-1",
        "itemNumber": 1,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 35000
      },
      {
        "id": "item-91-2",
        "itemNumber": 2,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 1540
      },
      {
        "id": "item-91-3",
        "itemNumber": 3,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 9100
      }
    ],
    "totals": {
      "totalQuantity": 46,
      "subtotal": 45640,
      "discount": 0,
      "netAmount": 45640,
      "vatAmount": 2282,
      "grandTotal": 47922,
      "amountInWordsArabic": "فقط 47922 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Seven Thousand Nine Hundred Twenty Two Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "17-08-2026",
    "paidAmount": 47922,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-091",
        "paymentNumber": "RCP-2026-2091",
        "invoiceId": "inv-demo-91",
        "invoiceNumber": "INV-2026-1091",
        "clientId": "cli-demo-39",
        "clientName": "Sea Breeze Boutique Hotel",
        "amount": 47922,
        "paymentDate": "05-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90091",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1091",
        "createdAt": "2026-08-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-02T00:00:00.000Z",
    "updatedAt": "2026-08-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-92",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-40",
      "name": "Creek Gate Business Hotel",
      "accountNumber": "440",
      "trn": "100518294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1092",
      "invoiceDate": "02-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-92-1",
        "itemNumber": 1,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 660
      },
      {
        "id": "item-92-2",
        "itemNumber": 2,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 6500
      },
      {
        "id": "item-92-3",
        "itemNumber": 3,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 16150
      },
      {
        "id": "item-92-4",
        "itemNumber": 4,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 20400
      }
    ],
    "totals": {
      "totalQuantity": 54,
      "subtotal": 43710,
      "discount": 0,
      "netAmount": 43710,
      "vatAmount": 2185.5,
      "grandTotal": 45895.5,
      "amountInWordsArabic": "فقط 45895 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Five Thousand Eight Hundred Ninety Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "01-09-2026",
    "paidAmount": 45895.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-092",
        "paymentNumber": "RCP-2026-2092",
        "invoiceId": "inv-demo-92",
        "invoiceNumber": "INV-2026-1092",
        "clientId": "cli-demo-40",
        "clientName": "Creek Gate Business Hotel",
        "amount": 45895.5,
        "paymentDate": "06-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90092",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1092",
        "createdAt": "2026-08-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-02T00:00:00.000Z",
    "updatedAt": "2026-08-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-93",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-41",
      "name": "Al Madina Fresh Grocery",
      "accountNumber": "441",
      "trn": "100418284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1093",
      "invoiceDate": "02-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-93-1",
        "itemNumber": 1,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 690
      },
      {
        "id": "item-93-2",
        "itemNumber": 2,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1755
      }
    ],
    "totals": {
      "totalQuantity": 19,
      "subtotal": 2445,
      "discount": 0,
      "netAmount": 2445,
      "vatAmount": 122.25,
      "grandTotal": 2567.25,
      "amountInWordsArabic": "فقط 2567 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Five Hundred Sixty Seven Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "09-08-2026",
    "paidAmount": 2567.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-093",
        "paymentNumber": "RCP-2026-2093",
        "invoiceId": "inv-demo-93",
        "invoiceNumber": "INV-2026-1093",
        "clientId": "cli-demo-41",
        "clientName": "Al Madina Fresh Grocery",
        "amount": 2567.25,
        "paymentDate": "07-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90093",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1093",
        "createdAt": "2026-08-07T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-02T00:00:00.000Z",
    "updatedAt": "2026-08-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-94",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-42",
      "name": "Corner Fresh Market L.L.C",
      "accountNumber": "442",
      "trn": "100318284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1094",
      "invoiceDate": "03-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-94-1",
        "itemNumber": 1,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1215
      },
      {
        "id": "item-94-2",
        "itemNumber": 2,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 768
      },
      {
        "id": "item-94-3",
        "itemNumber": 3,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 3335
      }
    ],
    "totals": {
      "totalQuantity": 48,
      "subtotal": 5318,
      "discount": 0,
      "netAmount": 5318,
      "vatAmount": 265.9,
      "grandTotal": 5583.9,
      "amountInWordsArabic": "فقط 5583 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Five Hundred Eighty Three Dirhams and Ninety Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "10-08-2026",
    "paidAmount": 5583.9,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-094",
        "paymentNumber": "RCP-2026-2094",
        "invoiceId": "inv-demo-94",
        "invoiceNumber": "INV-2026-1094",
        "clientId": "cli-demo-42",
        "clientName": "Corner Fresh Market L.L.C",
        "amount": 5583.9,
        "paymentDate": "09-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90094",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1094",
        "createdAt": "2026-08-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-03T00:00:00.000Z",
    "updatedAt": "2026-08-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-95",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-43",
      "name": "Daily Mart Grocery L.L.C",
      "accountNumber": "443",
      "trn": "100218284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1095",
      "invoiceDate": "03-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-95-1",
        "itemNumber": 1,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 576
      },
      {
        "id": "item-95-2",
        "itemNumber": 2,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2755
      },
      {
        "id": "item-95-3",
        "itemNumber": 3,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 3120
      },
      {
        "id": "item-95-4",
        "itemNumber": 4,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 920
      }
    ],
    "totals": {
      "totalQuantity": 65,
      "subtotal": 7371,
      "discount": 0,
      "netAmount": 7371,
      "vatAmount": 368.55,
      "grandTotal": 7739.55,
      "amountInWordsArabic": "فقط 7739 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Seven Hundred Thirty Nine Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "10-08-2026",
    "paidAmount": 7739.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-095",
        "paymentNumber": "RCP-2026-2095",
        "invoiceId": "inv-demo-95",
        "invoiceNumber": "INV-2026-1095",
        "clientId": "cli-demo-43",
        "clientName": "Daily Mart Grocery L.L.C",
        "amount": 7739.55,
        "paymentDate": "05-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90095",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1095",
        "createdAt": "2026-08-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-03T00:00:00.000Z",
    "updatedAt": "2026-08-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-96",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-44",
      "name": "Al Safa Express Store",
      "accountNumber": "444",
      "trn": "100118284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1096",
      "invoiceDate": "04-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-96-1",
        "itemNumber": 1,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2175
      },
      {
        "id": "item-96-2",
        "itemNumber": 2,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 2640
      }
    ],
    "totals": {
      "totalQuantity": 37,
      "subtotal": 4815,
      "discount": 0,
      "netAmount": 4815,
      "vatAmount": 240.75,
      "grandTotal": 5055.75,
      "amountInWordsArabic": "فقط 5055 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Fifty Five Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "11-08-2026",
    "paidAmount": 5055.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-096",
        "paymentNumber": "RCP-2026-2096",
        "invoiceId": "inv-demo-96",
        "invoiceNumber": "INV-2026-1096",
        "clientId": "cli-demo-44",
        "clientName": "Al Safa Express Store",
        "amount": 5055.75,
        "paymentDate": "07-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90096",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1096",
        "createdAt": "2026-08-07T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-04T00:00:00.000Z",
    "updatedAt": "2026-08-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-97",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-45",
      "name": "Gourmet Olive & Deli Emporium",
      "accountNumber": "445",
      "trn": "100817294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1097",
      "invoiceDate": "04-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-97-1",
        "itemNumber": 1,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 3330
      },
      {
        "id": "item-97-2",
        "itemNumber": 2,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 2300
      },
      {
        "id": "item-97-3",
        "itemNumber": 3,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 525
      }
    ],
    "totals": {
      "totalQuantity": 50,
      "subtotal": 6155,
      "discount": 0,
      "netAmount": 6155,
      "vatAmount": 307.75,
      "grandTotal": 6462.75,
      "amountInWordsArabic": "فقط 6462 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Four Hundred Sixty Two Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "19-08-2026",
    "paidAmount": 6462.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-097",
        "paymentNumber": "RCP-2026-2097",
        "invoiceId": "inv-demo-97",
        "invoiceNumber": "INV-2026-1097",
        "clientId": "cli-demo-45",
        "clientName": "Gourmet Olive & Deli Emporium",
        "amount": 6462.75,
        "paymentDate": "08-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90097",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1097",
        "createdAt": "2026-08-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-04T00:00:00.000Z",
    "updatedAt": "2026-08-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-98",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-46",
      "name": "Pure Organic Pantry L.L.C",
      "accountNumber": "446",
      "trn": "100717294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1098",
      "invoiceDate": "04-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-98-1",
        "itemNumber": 1,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 1932
      },
      {
        "id": "item-98-2",
        "itemNumber": 2,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 225
      },
      {
        "id": "item-98-3",
        "itemNumber": 3,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 2400
      },
      {
        "id": "item-98-4",
        "itemNumber": 4,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 2805
      }
    ],
    "totals": {
      "totalQuantity": 51,
      "subtotal": 7362,
      "discount": 0,
      "netAmount": 7362,
      "vatAmount": 368.1,
      "grandTotal": 7730.1,
      "amountInWordsArabic": "فقط 7730 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Seven Hundred Thirty Dirhams and Ten Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "19-08-2026",
    "paidAmount": 7730.1,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-098",
        "paymentNumber": "RCP-2026-2098",
        "invoiceId": "inv-demo-98",
        "invoiceNumber": "INV-2026-1098",
        "clientId": "cli-demo-46",
        "clientName": "Pure Organic Pantry L.L.C",
        "amount": 7730.1,
        "paymentDate": "09-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90098",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1098",
        "createdAt": "2026-08-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-04T00:00:00.000Z",
    "updatedAt": "2026-08-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-99",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-47",
      "name": "Prime Cuts Butchery & Deli",
      "accountNumber": "447",
      "trn": "100617294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1099",
      "invoiceDate": "05-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-99-1",
        "itemNumber": 1,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 1800
      },
      {
        "id": "item-99-2",
        "itemNumber": 2,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 1440
      }
    ],
    "totals": {
      "totalQuantity": 30,
      "subtotal": 3240,
      "discount": 0,
      "netAmount": 3240,
      "vatAmount": 162,
      "grandTotal": 3402,
      "amountInWordsArabic": "فقط 3402 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Four Hundred Two Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "12-08-2026",
    "paidAmount": 3402,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-099",
        "paymentNumber": "RCP-2026-2099",
        "invoiceId": "inv-demo-99",
        "invoiceNumber": "INV-2026-1099",
        "clientId": "cli-demo-47",
        "clientName": "Prime Cuts Butchery & Deli",
        "amount": 3402,
        "paymentDate": "11-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90099",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1099",
        "createdAt": "2026-08-11T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-05T00:00:00.000Z",
    "updatedAt": "2026-08-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-100",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-48",
      "name": "Green Leaf Nutrition Store",
      "accountNumber": "448",
      "trn": "100517294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1100",
      "invoiceDate": "05-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-100-1",
        "itemNumber": 1,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 480
      },
      {
        "id": "item-100-2",
        "itemNumber": 2,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 1485
      },
      {
        "id": "item-100-3",
        "itemNumber": 3,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 2960
      }
    ],
    "totals": {
      "totalQuantity": 27,
      "subtotal": 4925,
      "discount": 0,
      "netAmount": 4925,
      "vatAmount": 246.25,
      "grandTotal": 5171.25,
      "amountInWordsArabic": "فقط 5171 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand One Hundred Seventy One Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "20-08-2026",
    "paidAmount": 5171.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-100",
        "paymentNumber": "RCP-2026-2100",
        "invoiceId": "inv-demo-100",
        "invoiceNumber": "INV-2026-1100",
        "clientId": "cli-demo-48",
        "clientName": "Green Leaf Nutrition Store",
        "amount": 5171.25,
        "paymentDate": "07-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90100",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1100",
        "createdAt": "2026-08-07T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-05T00:00:00.000Z",
    "updatedAt": "2026-08-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-101",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-49",
      "name": "SpeedLine Commercial Delivery Services",
      "accountNumber": "449",
      "trn": "100417294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1101",
      "invoiceDate": "05-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-101-1",
        "itemNumber": 1,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 900
      },
      {
        "id": "item-101-2",
        "itemNumber": 2,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 14400
      },
      {
        "id": "item-101-3",
        "itemNumber": 3,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 9120
      },
      {
        "id": "item-101-4",
        "itemNumber": 4,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 16900
      }
    ],
    "totals": {
      "totalQuantity": 62,
      "subtotal": 41320,
      "discount": 0,
      "netAmount": 41320,
      "vatAmount": 2066,
      "grandTotal": 43386,
      "amountInWordsArabic": "فقط 43386 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Three Thousand Three Hundred Eighty Six Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "04-09-2026",
    "paidAmount": 43386,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-101",
        "paymentNumber": "RCP-2026-2101",
        "invoiceId": "inv-demo-101",
        "invoiceNumber": "INV-2026-1101",
        "clientId": "cli-demo-49",
        "clientName": "SpeedLine Commercial Delivery Services",
        "amount": 43386,
        "paymentDate": "08-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90101",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1101",
        "createdAt": "2026-08-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-05T00:00:00.000Z",
    "updatedAt": "2026-08-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-102",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-50",
      "name": "CleanPro Facility Management L.L.C",
      "accountNumber": "450",
      "trn": "100317294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1102",
      "invoiceDate": "06-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-102-1",
        "itemNumber": 1,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 9600
      },
      {
        "id": "item-102-2",
        "itemNumber": 2,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 7200
      }
    ],
    "totals": {
      "totalQuantity": 23,
      "subtotal": 16800,
      "discount": 0,
      "netAmount": 16800,
      "vatAmount": 840,
      "grandTotal": 17640,
      "amountInWordsArabic": "فقط 17640 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventeen Thousand Six Hundred Forty Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "05-09-2026",
    "paidAmount": 17640,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-102",
        "paymentNumber": "RCP-2026-2102",
        "invoiceId": "inv-demo-102",
        "invoiceNumber": "INV-2026-1102",
        "clientId": "cli-demo-50",
        "clientName": "CleanPro Facility Management L.L.C",
        "amount": 17640,
        "paymentDate": "10-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90102",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1102",
        "createdAt": "2026-08-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-06T00:00:00.000Z",
    "updatedAt": "2026-08-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-103",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-51",
      "name": "ColdChain Logistics Services L.L.C",
      "accountNumber": "451",
      "trn": "100217294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1103",
      "invoiceDate": "06-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-103-1",
        "itemNumber": 1,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 5280
      },
      {
        "id": "item-103-2",
        "itemNumber": 2,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 11700
      },
      {
        "id": "item-103-3",
        "itemNumber": 3,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 4500
      }
    ],
    "totals": {
      "totalQuantity": 54,
      "subtotal": 21480,
      "discount": 0,
      "netAmount": 21480,
      "vatAmount": 1074,
      "grandTotal": 22554,
      "amountInWordsArabic": "فقط 22554 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Two Thousand Five Hundred Fifty Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "05-09-2026",
    "paidAmount": 22554,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-103",
        "paymentNumber": "RCP-2026-2103",
        "invoiceId": "inv-demo-103",
        "invoiceNumber": "INV-2026-1103",
        "clientId": "cli-demo-51",
        "clientName": "ColdChain Logistics Services L.L.C",
        "amount": 22554,
        "paymentDate": "11-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90103",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1103",
        "createdAt": "2026-08-11T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-06T00:00:00.000Z",
    "updatedAt": "2026-08-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-104",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-52",
      "name": "FreshFleet Distribution Services",
      "accountNumber": "452",
      "trn": "100117294000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1104",
      "invoiceDate": "06-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-104-1",
        "itemNumber": 1,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 9100
      },
      {
        "id": "item-104-2",
        "itemNumber": 2,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 3780
      },
      {
        "id": "item-104-3",
        "itemNumber": 3,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 3600
      },
      {
        "id": "item-104-4",
        "itemNumber": 4,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 4800
      }
    ],
    "totals": {
      "totalQuantity": 48,
      "subtotal": 21280,
      "discount": 0,
      "netAmount": 21280,
      "vatAmount": 1064,
      "grandTotal": 22344,
      "amountInWordsArabic": "فقط 22344 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Two Thousand Three Hundred Forty Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "21-08-2026",
    "paidAmount": 22344,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-104",
        "paymentNumber": "RCP-2026-2104",
        "invoiceId": "inv-demo-104",
        "invoiceNumber": "INV-2026-1104",
        "clientId": "cli-demo-52",
        "clientName": "FreshFleet Distribution Services",
        "amount": 22344,
        "paymentDate": "12-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90104",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1104",
        "createdAt": "2026-08-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-06T00:00:00.000Z",
    "updatedAt": "2026-08-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-105",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-01",
      "name": "Al Noor Supermarket L.L.C",
      "accountNumber": "401",
      "trn": "100482910400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1105",
      "invoiceDate": "07-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-105-1",
        "itemNumber": 1,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 280.5
      },
      {
        "id": "item-105-2",
        "itemNumber": 2,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 204
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 484.5,
      "discount": 0,
      "netAmount": 484.5,
      "vatAmount": 24.23,
      "grandTotal": 508.73,
      "amountInWordsArabic": "فقط 508 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Hundred Eight Dirhams and Seventy Three Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "22-08-2026",
    "paidAmount": 508.73,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-105",
        "paymentNumber": "RCP-2026-2105",
        "invoiceId": "inv-demo-105",
        "invoiceNumber": "INV-2026-1105",
        "clientId": "cli-demo-01",
        "clientName": "Al Noor Supermarket L.L.C",
        "amount": 508.73,
        "paymentDate": "09-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90105",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1105",
        "createdAt": "2026-08-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-07T00:00:00.000Z",
    "updatedAt": "2026-08-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-106",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-02",
      "name": "Golden Basket Hypermarket L.L.C",
      "accountNumber": "402",
      "trn": "100294819200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1106",
      "invoiceDate": "07-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-106-1",
        "itemNumber": 1,
        "itemCode": "SUP-107",
        "description": "Al Ain Mineral Water 1.5L x 6",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 8.5,
        "lineTotal": 170
      },
      {
        "id": "item-106-2",
        "itemNumber": 2,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 84
      },
      {
        "id": "item-106-3",
        "itemNumber": 3,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 135
      }
    ],
    "totals": {
      "totalQuantity": 31,
      "subtotal": 389,
      "discount": 0,
      "netAmount": 389,
      "vatAmount": 19.45,
      "grandTotal": 408.45,
      "amountInWordsArabic": "فقط 408 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Hundred Eight Dirhams and Forty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "06-09-2026",
    "paidAmount": 408.45,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-106",
        "paymentNumber": "RCP-2026-2106",
        "invoiceId": "inv-demo-106",
        "invoiceNumber": "INV-2026-1106",
        "clientId": "cli-demo-02",
        "clientName": "Golden Basket Hypermarket L.L.C",
        "amount": 408.45,
        "paymentDate": "10-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90106",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1106",
        "createdAt": "2026-08-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-07T00:00:00.000Z",
    "updatedAt": "2026-08-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-107",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-03",
      "name": "Green Harvest Supermarket",
      "accountNumber": "403",
      "trn": "100839201900003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1107",
      "invoiceDate": "08-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-107-1",
        "itemNumber": 1,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 966
      },
      {
        "id": "item-107-2",
        "itemNumber": 2,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 75
      },
      {
        "id": "item-107-3",
        "itemNumber": 3,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 210
      },
      {
        "id": "item-107-4",
        "itemNumber": 4,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 541.5
      }
    ],
    "totals": {
      "totalQuantity": 59,
      "subtotal": 1792.5,
      "discount": 0,
      "netAmount": 1792.5,
      "vatAmount": 89.63,
      "grandTotal": 1882.13,
      "amountInWordsArabic": "فقط 1882 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Eight Hundred Eighty Two Dirhams and Thirteen Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "23-08-2026",
    "paidAmount": 1882.13,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-107",
        "paymentNumber": "RCP-2026-2107",
        "invoiceId": "inv-demo-107",
        "invoiceNumber": "INV-2026-1107",
        "clientId": "cli-demo-03",
        "clientName": "Green Harvest Supermarket",
        "amount": 1882.13,
        "paymentDate": "12-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90107",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1107",
        "createdAt": "2026-08-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-08T00:00:00.000Z",
    "updatedAt": "2026-08-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-108",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-04",
      "name": "Family Choice Supermarket L.L.C",
      "accountNumber": "404",
      "trn": "100382910400003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1108",
      "invoiceDate": "08-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-108-1",
        "itemNumber": 1,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 390
      },
      {
        "id": "item-108-2",
        "itemNumber": 2,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 140
      }
    ],
    "totals": {
      "totalQuantity": 34,
      "subtotal": 530,
      "discount": 0,
      "netAmount": 530,
      "vatAmount": 26.5,
      "grandTotal": 556.5,
      "amountInWordsArabic": "فقط 556 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Hundred Fifty Six Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "15-08-2026",
    "paidAmount": 556.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-108",
        "paymentNumber": "RCP-2026-2108",
        "invoiceId": "inv-demo-108",
        "invoiceNumber": "INV-2026-1108",
        "clientId": "cli-demo-04",
        "clientName": "Family Choice Supermarket L.L.C",
        "amount": 556.5,
        "paymentDate": "13-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90108",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1108",
        "createdAt": "2026-08-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-08T00:00:00.000Z",
    "updatedAt": "2026-08-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-109",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-05",
      "name": "Grand Central Mart L.L.C",
      "accountNumber": "405",
      "trn": "100948271000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1109",
      "invoiceDate": "08-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-109-1",
        "itemNumber": 1,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 70
      },
      {
        "id": "item-109-2",
        "itemNumber": 2,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 313.5
      },
      {
        "id": "item-109-3",
        "itemNumber": 3,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 612
      }
    ],
    "totals": {
      "totalQuantity": 33,
      "subtotal": 995.5,
      "discount": 0,
      "netAmount": 995.5,
      "vatAmount": 49.78,
      "grandTotal": 1045.28,
      "amountInWordsArabic": "فقط 1045 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Forty Five Dirhams and Twenty Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "07-09-2026",
    "paidAmount": 1045.28,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-109",
        "paymentNumber": "RCP-2026-2109",
        "invoiceId": "inv-demo-109",
        "invoiceNumber": "INV-2026-1109",
        "clientId": "cli-demo-05",
        "clientName": "Grand Central Mart L.L.C",
        "amount": 1045.28,
        "paymentDate": "14-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90109",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1109",
        "createdAt": "2026-08-14T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-08T00:00:00.000Z",
    "updatedAt": "2026-08-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-110",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-06",
      "name": "Emirates Fresh Mart",
      "accountNumber": "406",
      "trn": "100192840100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1110",
      "invoiceDate": "09-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-110-1",
        "itemNumber": 1,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 199.5
      },
      {
        "id": "item-110-2",
        "itemNumber": 2,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 476
      },
      {
        "id": "item-110-3",
        "itemNumber": 3,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 241.5
      },
      {
        "id": "item-110-4",
        "itemNumber": 4,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 54
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 971,
      "discount": 0,
      "netAmount": 971,
      "vatAmount": 48.55,
      "grandTotal": 1019.55,
      "amountInWordsArabic": "فقط 1019 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Nineteen Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "24-08-2026",
    "paidAmount": 1019.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-110",
        "paymentNumber": "RCP-2026-2110",
        "invoiceId": "inv-demo-110",
        "invoiceNumber": "INV-2026-1110",
        "clientId": "cli-demo-06",
        "clientName": "Emirates Fresh Mart",
        "amount": 1019.55,
        "paymentDate": "11-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90110",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1110",
        "createdAt": "2026-08-11T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-09T00:00:00.000Z",
    "updatedAt": "2026-08-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-111",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-07",
      "name": "City Star Supermarket L.L.C",
      "accountNumber": "407",
      "trn": "100728192000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1111",
      "invoiceDate": "09-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-111-1",
        "itemNumber": 1,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 340
      },
      {
        "id": "item-111-2",
        "itemNumber": 2,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 195.5
      }
    ],
    "totals": {
      "totalQuantity": 27,
      "subtotal": 535.5,
      "discount": 0,
      "netAmount": 535.5,
      "vatAmount": 26.78,
      "grandTotal": 562.28,
      "amountInWordsArabic": "فقط 562 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Hundred Sixty Two Dirhams and Twenty Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "16-08-2026",
    "paidAmount": 562.28,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-111",
        "paymentNumber": "RCP-2026-2111",
        "invoiceId": "inv-demo-111",
        "invoiceNumber": "INV-2026-1111",
        "clientId": "cli-demo-07",
        "clientName": "City Star Supermarket L.L.C",
        "amount": 562.28,
        "paymentDate": "12-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90111",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1111",
        "createdAt": "2026-08-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-09T00:00:00.000Z",
    "updatedAt": "2026-08-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-112",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-08",
      "name": "Royal Garden Restaurant L.L.C",
      "accountNumber": "408",
      "trn": "100582910200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1112",
      "invoiceDate": "09-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-112-1",
        "itemNumber": 1,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1235
      },
      {
        "id": "item-112-2",
        "itemNumber": 2,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 3200
      },
      {
        "id": "item-112-3",
        "itemNumber": 3,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 960
      }
    ],
    "totals": {
      "totalQuantity": 35,
      "subtotal": 5395,
      "discount": 0,
      "netAmount": 5395,
      "vatAmount": 269.75,
      "grandTotal": 5664.75,
      "amountInWordsArabic": "فقط 5664 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Six Hundred Sixty Four Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "16-08-2026",
    "paidAmount": 5664.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-112",
        "paymentNumber": "RCP-2026-2112",
        "invoiceId": "inv-demo-112",
        "invoiceNumber": "INV-2026-1112",
        "clientId": "cli-demo-08",
        "clientName": "Royal Garden Restaurant L.L.C",
        "amount": 5664.75,
        "paymentDate": "13-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90112",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1112",
        "createdAt": "2026-08-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-09T00:00:00.000Z",
    "updatedAt": "2026-08-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-113",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-09",
      "name": "Ocean View Seafood Restaurant",
      "accountNumber": "409",
      "trn": "100482918300003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1113",
      "invoiceDate": "10-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-113-1",
        "itemNumber": 1,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 2560
      },
      {
        "id": "item-113-2",
        "itemNumber": 2,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 11040
      },
      {
        "id": "item-113-3",
        "itemNumber": 3,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 160
      },
      {
        "id": "item-113-4",
        "itemNumber": 4,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 456
      }
    ],
    "totals": {
      "totalQuantity": 56,
      "subtotal": 14216,
      "discount": 0,
      "netAmount": 14216,
      "vatAmount": 710.8,
      "grandTotal": 14926.8,
      "amountInWordsArabic": "فقط 14926 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fourteen Thousand Nine Hundred Twenty Six Dirhams and Eighty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "17-08-2026",
    "paidAmount": 14926.8,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-113",
        "paymentNumber": "RCP-2026-2113",
        "invoiceId": "inv-demo-113",
        "invoiceNumber": "INV-2026-1113",
        "clientId": "cli-demo-09",
        "clientName": "Ocean View Seafood Restaurant",
        "amount": 14926.8,
        "paymentDate": "15-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90113",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1113",
        "createdAt": "2026-08-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-10T00:00:00.000Z",
    "updatedAt": "2026-08-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-114",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-10",
      "name": "Urban Bites Restaurant L.L.C",
      "accountNumber": "410",
      "trn": "100918274000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1114",
      "invoiceDate": "10-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-114-1",
        "itemNumber": 1,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 9120
      },
      {
        "id": "item-114-2",
        "itemNumber": 2,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 832
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 9952,
      "discount": 0,
      "netAmount": 9952,
      "vatAmount": 497.6,
      "grandTotal": 10449.6,
      "amountInWordsArabic": "فقط 10449 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Ten Thousand Four Hundred Forty Nine Dirhams and Sixty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "25-08-2026",
    "paidAmount": 10449.6,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-114",
        "paymentNumber": "RCP-2026-2114",
        "invoiceId": "inv-demo-114",
        "invoiceNumber": "INV-2026-1114",
        "clientId": "cli-demo-10",
        "clientName": "Urban Bites Restaurant L.L.C",
        "amount": 10449.6,
        "paymentDate": "16-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90114",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1114",
        "createdAt": "2026-08-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-10T00:00:00.000Z",
    "updatedAt": "2026-08-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-115",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-11",
      "name": "Desert Rose Mandi & Grill",
      "accountNumber": "411",
      "trn": "100628192000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1115",
      "invoiceDate": "10-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-115-1",
        "itemNumber": 1,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 704
      },
      {
        "id": "item-115-2",
        "itemNumber": 2,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 152
      },
      {
        "id": "item-115-3",
        "itemNumber": 3,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 1595
      }
    ],
    "totals": {
      "totalQuantity": 37,
      "subtotal": 2451,
      "discount": 0,
      "netAmount": 2451,
      "vatAmount": 122.55,
      "grandTotal": 2573.55,
      "amountInWordsArabic": "فقط 2573 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Five Hundred Seventy Three Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "17-08-2026",
    "paidAmount": 2573.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-115",
        "paymentNumber": "RCP-2026-2115",
        "invoiceId": "inv-demo-115",
        "invoiceNumber": "INV-2026-1115",
        "clientId": "cli-demo-11",
        "clientName": "Desert Rose Mandi & Grill",
        "amount": 2573.55,
        "paymentDate": "12-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90115",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1115",
        "createdAt": "2026-08-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-10T00:00:00.000Z",
    "updatedAt": "2026-08-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-116",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-12",
      "name": "Sultan Turkish Cuisine L.L.C",
      "accountNumber": "412",
      "trn": "100827192000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1116",
      "invoiceDate": "11-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-116-1",
        "itemNumber": 1,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 950
      },
      {
        "id": "item-116-2",
        "itemNumber": 2,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 1015
      },
      {
        "id": "item-116-3",
        "itemNumber": 3,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 952
      },
      {
        "id": "item-116-4",
        "itemNumber": 4,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 2835
      }
    ],
    "totals": {
      "totalQuantity": 67,
      "subtotal": 5752,
      "discount": 0,
      "netAmount": 5752,
      "vatAmount": 287.6,
      "grandTotal": 6039.6,
      "amountInWordsArabic": "فقط 6039 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Thirty Nine Dirhams and Sixty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "26-08-2026",
    "paidAmount": 6039.6,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-116",
        "paymentNumber": "RCP-2026-2116",
        "invoiceId": "inv-demo-116",
        "invoiceNumber": "INV-2026-1116",
        "clientId": "cli-demo-12",
        "clientName": "Sultan Turkish Cuisine L.L.C",
        "amount": 6039.6,
        "paymentDate": "14-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90116",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1116",
        "createdAt": "2026-08-14T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-11T00:00:00.000Z",
    "updatedAt": "2026-08-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-117",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-13",
      "name": "Al Safeer Lebanese Kitchen",
      "accountNumber": "413",
      "trn": "100372819000003",
      "cityOrBranch": "Al Ain"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1117",
      "invoiceDate": "11-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-117-1",
        "itemNumber": 1,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 435
      },
      {
        "id": "item-117-2",
        "itemNumber": 2,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 680
      }
    ],
    "totals": {
      "totalQuantity": 13,
      "subtotal": 1115,
      "discount": 0,
      "netAmount": 1115,
      "vatAmount": 55.75,
      "grandTotal": 1170.75,
      "amountInWordsArabic": "فقط 1170 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand One Hundred Seventy Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "18-08-2026",
    "paidAmount": 1170.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-117",
        "paymentNumber": "RCP-2026-2117",
        "invoiceId": "inv-demo-117",
        "invoiceNumber": "INV-2026-1117",
        "clientId": "cli-demo-13",
        "clientName": "Al Safeer Lebanese Kitchen",
        "amount": 1170.75,
        "paymentDate": "15-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90117",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1117",
        "createdAt": "2026-08-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-11T00:00:00.000Z",
    "updatedAt": "2026-08-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-118",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-14",
      "name": "Bukhara Royal Feast Restaurant",
      "accountNumber": "414",
      "trn": "100281920400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1118",
      "invoiceDate": "11-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-118-1",
        "itemNumber": 1,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 408
      },
      {
        "id": "item-118-2",
        "itemNumber": 2,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1755
      },
      {
        "id": "item-118-3",
        "itemNumber": 3,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2300
      }
    ],
    "totals": {
      "totalQuantity": 39,
      "subtotal": 4463,
      "discount": 0,
      "netAmount": 4463,
      "vatAmount": 223.15,
      "grandTotal": 4686.15,
      "amountInWordsArabic": "فقط 4686 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Six Hundred Eighty Six Dirhams and Fifteen Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "26-08-2026",
    "paidAmount": 4686.15,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-118",
        "paymentNumber": "RCP-2026-2118",
        "invoiceId": "inv-demo-118",
        "invoiceNumber": "INV-2026-1118",
        "clientId": "cli-demo-14",
        "clientName": "Bukhara Royal Feast Restaurant",
        "amount": 4686.15,
        "paymentDate": "16-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90118",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1118",
        "createdAt": "2026-08-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-11T00:00:00.000Z",
    "updatedAt": "2026-08-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-119",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-15",
      "name": "Blue Horizon Roastery & Cafe",
      "accountNumber": "415",
      "trn": "100592819000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1119",
      "invoiceDate": "12-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-119-1",
        "itemNumber": 1,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 702
      },
      {
        "id": "item-119-2",
        "itemNumber": 2,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1520
      },
      {
        "id": "item-119-3",
        "itemNumber": 3,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 1242
      },
      {
        "id": "item-119-4",
        "itemNumber": 4,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 310
      }
    ],
    "totals": {
      "totalQuantity": 53,
      "subtotal": 3774,
      "discount": 0,
      "netAmount": 3774,
      "vatAmount": 188.7,
      "grandTotal": 3962.7,
      "amountInWordsArabic": "فقط 3962 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Nine Hundred Sixty Two Dirhams and Seventy Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "19-08-2026",
    "paidAmount": 3962.7,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-119",
        "paymentNumber": "RCP-2026-2119",
        "invoiceId": "inv-demo-119",
        "invoiceNumber": "INV-2026-1119",
        "clientId": "cli-demo-15",
        "clientName": "Blue Horizon Roastery & Cafe",
        "amount": 3962.7,
        "paymentDate": "18-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90119",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1119",
        "createdAt": "2026-08-18T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-12T00:00:00.000Z",
    "updatedAt": "2026-08-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-120",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-16",
      "name": "Palm Grove Specialty Coffee",
      "accountNumber": "416",
      "trn": "100728190400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1120",
      "invoiceDate": "12-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-120-1",
        "itemNumber": 1,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1140
      },
      {
        "id": "item-120-2",
        "itemNumber": 2,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 1026
      }
    ],
    "totals": {
      "totalQuantity": 31,
      "subtotal": 2166,
      "discount": 0,
      "netAmount": 2166,
      "vatAmount": 108.3,
      "grandTotal": 2274.3,
      "amountInWordsArabic": "فقط 2274 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Two Hundred Seventy Four Dirhams and Thirty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "27-08-2026",
    "paidAmount": 2274.3,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-120",
        "paymentNumber": "RCP-2026-2120",
        "invoiceId": "inv-demo-120",
        "invoiceNumber": "INV-2026-1120",
        "clientId": "cli-demo-16",
        "clientName": "Palm Grove Specialty Coffee",
        "amount": 2274.3,
        "paymentDate": "14-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90120",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1120",
        "createdAt": "2026-08-14T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-12T00:00:00.000Z",
    "updatedAt": "2026-08-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-121",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-17",
      "name": "Desert Pearl Lounge & Cafe",
      "accountNumber": "417",
      "trn": "100819204900003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1121",
      "invoiceDate": "13-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-121-1",
        "itemNumber": 1,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 810
      },
      {
        "id": "item-121-2",
        "itemNumber": 2,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 1364
      },
      {
        "id": "item-121-3",
        "itemNumber": 3,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 168
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 2342,
      "discount": 0,
      "netAmount": 2342,
      "vatAmount": 117.1,
      "grandTotal": 2459.1,
      "amountInWordsArabic": "فقط 2459 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Four Hundred Fifty Nine Dirhams and Ten Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "20-08-2026",
    "paidAmount": 2459.1,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-121",
        "paymentNumber": "RCP-2026-2121",
        "invoiceId": "inv-demo-121",
        "invoiceNumber": "INV-2026-1121",
        "clientId": "cli-demo-17",
        "clientName": "Desert Pearl Lounge & Cafe",
        "amount": 2459.1,
        "paymentDate": "16-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90121",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1121",
        "createdAt": "2026-08-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-13T00:00:00.000Z",
    "updatedAt": "2026-08-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-122",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-18",
      "name": "Artisan Roast Cafe L.L.C",
      "accountNumber": "418",
      "trn": "100492810300003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1122",
      "invoiceDate": "13-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-122-1",
        "itemNumber": 1,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 1116
      },
      {
        "id": "item-122-2",
        "itemNumber": 2,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 1050
      },
      {
        "id": "item-122-3",
        "itemNumber": 3,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 770
      },
      {
        "id": "item-122-4",
        "itemNumber": 4,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 1190
      }
    ],
    "totals": {
      "totalQuantity": 64,
      "subtotal": 4126,
      "discount": 0,
      "netAmount": 4126,
      "vatAmount": 206.3,
      "grandTotal": 4332.3,
      "amountInWordsArabic": "فقط 4332 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Three Hundred Thirty Two Dirhams and Thirty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "20-08-2026",
    "paidAmount": 4332.3,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-122",
        "paymentNumber": "RCP-2026-2122",
        "invoiceId": "inv-demo-122",
        "invoiceNumber": "INV-2026-1122",
        "clientId": "cli-demo-18",
        "clientName": "Artisan Roast Cafe L.L.C",
        "amount": 4332.3,
        "paymentDate": "17-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90122",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1122",
        "createdAt": "2026-08-17T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-13T00:00:00.000Z",
    "updatedAt": "2026-08-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-123",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-19",
      "name": "Velvet Bean Cafe & Lounge",
      "accountNumber": "419",
      "trn": "100619284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1123",
      "invoiceDate": "13-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-123-1",
        "itemNumber": 1,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 882
      },
      {
        "id": "item-123-2",
        "itemNumber": 2,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 330
      }
    ],
    "totals": {
      "totalQuantity": 24,
      "subtotal": 1212,
      "discount": 0,
      "netAmount": 1212,
      "vatAmount": 60.6,
      "grandTotal": 1272.6,
      "amountInWordsArabic": "فقط 1272 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Two Hundred Seventy Two Dirhams and Sixty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "28-08-2026",
    "paidAmount": 1272.6,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-123",
        "paymentNumber": "RCP-2026-2123",
        "invoiceId": "inv-demo-123",
        "invoiceNumber": "INV-2026-1123",
        "clientId": "cli-demo-19",
        "clientName": "Velvet Bean Cafe & Lounge",
        "amount": 1272.6,
        "paymentDate": "18-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90123",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1123",
        "createdAt": "2026-08-18T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-13T00:00:00.000Z",
    "updatedAt": "2026-08-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-124",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-20",
      "name": "Sunrise French Bakery & Patisserie",
      "accountNumber": "420",
      "trn": "100392810400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1124",
      "invoiceDate": "14-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-124-1",
        "itemNumber": 1,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 912
      },
      {
        "id": "item-124-2",
        "itemNumber": 2,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 750
      },
      {
        "id": "item-124-3",
        "itemNumber": 3,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 1066
      }
    ],
    "totals": {
      "totalQuantity": 43,
      "subtotal": 2728,
      "discount": 0,
      "netAmount": 2728,
      "vatAmount": 136.4,
      "grandTotal": 2864.4,
      "amountInWordsArabic": "فقط 2864 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Eight Hundred Sixty Four Dirhams and Forty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "21-08-2026",
    "paidAmount": 2864.4,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-124",
        "paymentNumber": "RCP-2026-2124",
        "invoiceId": "inv-demo-124",
        "invoiceNumber": "INV-2026-1124",
        "clientId": "cli-demo-20",
        "clientName": "Sunrise French Bakery & Patisserie",
        "amount": 2864.4,
        "paymentDate": "20-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90124",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1124",
        "createdAt": "2026-08-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-14T00:00:00.000Z",
    "updatedAt": "2026-08-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-125",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-21",
      "name": "Golden Wheat Artisan Bakery",
      "accountNumber": "421",
      "trn": "100482910500003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1125",
      "invoiceDate": "14-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-125-1",
        "itemNumber": 1,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 250
      },
      {
        "id": "item-125-2",
        "itemNumber": 2,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 738
      },
      {
        "id": "item-125-3",
        "itemNumber": 3,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 5440
      },
      {
        "id": "item-125-4",
        "itemNumber": 4,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 3220
      }
    ],
    "totals": {
      "totalQuantity": 50,
      "subtotal": 9648,
      "discount": 0,
      "netAmount": 9648,
      "vatAmount": 482.4,
      "grandTotal": 10130.4,
      "amountInWordsArabic": "فقط 10130 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Ten Thousand One Hundred Thirty Dirhams and Forty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "29-08-2026",
    "paidAmount": 10130.4,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-125",
        "paymentNumber": "RCP-2026-2125",
        "invoiceId": "inv-demo-125",
        "invoiceNumber": "INV-2026-1125",
        "clientId": "cli-demo-21",
        "clientName": "Golden Wheat Artisan Bakery",
        "amount": 10130.4,
        "paymentDate": "16-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90125",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1125",
        "createdAt": "2026-08-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-14T00:00:00.000Z",
    "updatedAt": "2026-08-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-126",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-22",
      "name": "Crown Sweets & Pastries L.L.C",
      "accountNumber": "422",
      "trn": "100728194000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1126",
      "invoiceDate": "14-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-126-1",
        "itemNumber": 1,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 410
      },
      {
        "id": "item-126-2",
        "itemNumber": 2,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 4080
      }
    ],
    "totals": {
      "totalQuantity": 17,
      "subtotal": 4490,
      "discount": 0,
      "netAmount": 4490,
      "vatAmount": 224.5,
      "grandTotal": 4714.5,
      "amountInWordsArabic": "فقط 4714 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Seven Hundred Fourteen Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "21-08-2026",
    "paidAmount": 4714.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-126",
        "paymentNumber": "RCP-2026-2126",
        "invoiceId": "inv-demo-126",
        "invoiceNumber": "INV-2026-1126",
        "clientId": "cli-demo-22",
        "clientName": "Crown Sweets & Pastries L.L.C",
        "amount": 4714.5,
        "paymentDate": "17-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90126",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1126",
        "createdAt": "2026-08-17T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-14T00:00:00.000Z",
    "updatedAt": "2026-08-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-127",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-23",
      "name": "Maison Dorée Pastry Studio",
      "accountNumber": "423",
      "trn": "100928194000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1127",
      "invoiceDate": "15-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-127-1",
        "itemNumber": 1,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 2720
      },
      {
        "id": "item-127-2",
        "itemNumber": 2,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 2100
      },
      {
        "id": "item-127-3",
        "itemNumber": 3,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 4290
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 9110,
      "discount": 0,
      "netAmount": 9110,
      "vatAmount": 455.5,
      "grandTotal": 9565.5,
      "amountInWordsArabic": "فقط 9565 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand Five Hundred Sixty Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "30-08-2026",
    "paidAmount": 9565.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-127",
        "paymentNumber": "RCP-2026-2127",
        "invoiceId": "inv-demo-127",
        "invoiceNumber": "INV-2026-1127",
        "clientId": "cli-demo-23",
        "clientName": "Maison Dorée Pastry Studio",
        "amount": 9565.5,
        "paymentDate": "19-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90127",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1127",
        "createdAt": "2026-08-19T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-15T00:00:00.000Z",
    "updatedAt": "2026-08-15T00:00:00.000Z"
  },
  {
    "id": "inv-demo-128",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-24",
      "name": "Al Barakah Arabic Bakery",
      "accountNumber": "424",
      "trn": "100294810200003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1128",
      "invoiceDate": "15-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-128-1",
        "itemNumber": 1,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 1540
      },
      {
        "id": "item-128-2",
        "itemNumber": 2,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 3510
      },
      {
        "id": "item-128-3",
        "itemNumber": 3,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 4500
      },
      {
        "id": "item-128-4",
        "itemNumber": 4,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 266
      }
    ],
    "totals": {
      "totalQuantity": 61,
      "subtotal": 9816,
      "discount": 0,
      "netAmount": 9816,
      "vatAmount": 490.8,
      "grandTotal": 10306.8,
      "amountInWordsArabic": "فقط 10306 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Ten Thousand Three Hundred Six Dirhams and Eighty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "22-08-2026",
    "paidAmount": 10306.8,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-128",
        "paymentNumber": "RCP-2026-2128",
        "invoiceId": "inv-demo-128",
        "invoiceNumber": "INV-2026-1128",
        "clientId": "cli-demo-24",
        "clientName": "Al Barakah Arabic Bakery",
        "amount": 10306.8,
        "paymentDate": "20-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90128",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1128",
        "createdAt": "2026-08-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-15T00:00:00.000Z",
    "updatedAt": "2026-08-15T00:00:00.000Z"
  },
  {
    "id": "inv-demo-129",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-25",
      "name": "Desert Pearl Hospitality & Catering L.L.C",
      "accountNumber": "425",
      "trn": "100819204000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1129",
      "invoiceDate": "15-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-129-1",
        "itemNumber": 1,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 5320
      },
      {
        "id": "item-129-2",
        "itemNumber": 2,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 11550
      }
    ],
    "totals": {
      "totalQuantity": 35,
      "subtotal": 16870,
      "discount": 0,
      "netAmount": 16870,
      "vatAmount": 843.5,
      "grandTotal": 17713.5,
      "amountInWordsArabic": "فقط 17713 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventeen Thousand Seven Hundred Thirteen Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "14-09-2026",
    "paidAmount": 17713.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-129",
        "paymentNumber": "RCP-2026-2129",
        "invoiceId": "inv-demo-129",
        "invoiceNumber": "INV-2026-1129",
        "clientId": "cli-demo-25",
        "clientName": "Desert Pearl Hospitality & Catering L.L.C",
        "amount": 17713.5,
        "paymentDate": "21-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90129",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1129",
        "createdAt": "2026-08-21T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-15T00:00:00.000Z",
    "updatedAt": "2026-08-15T00:00:00.000Z"
  },
  {
    "id": "inv-demo-130",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-26",
      "name": "Imperial Banquet Catering Services",
      "accountNumber": "426",
      "trn": "100619280400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1130",
      "invoiceDate": "16-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-130-1",
        "itemNumber": 1,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 9350
      },
      {
        "id": "item-130-2",
        "itemNumber": 2,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 10080
      },
      {
        "id": "item-130-3",
        "itemNumber": 3,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 13500
      }
    ],
    "totals": {
      "totalQuantity": 47,
      "subtotal": 32930,
      "discount": 0,
      "netAmount": 32930,
      "vatAmount": 1646.5,
      "grandTotal": 34576.5,
      "amountInWordsArabic": "فقط 34576 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Four Thousand Five Hundred Seventy Six Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "15-09-2026",
    "paidAmount": 34576.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-130",
        "paymentNumber": "RCP-2026-2130",
        "invoiceId": "inv-demo-130",
        "invoiceNumber": "INV-2026-1130",
        "clientId": "cli-demo-26",
        "clientName": "Imperial Banquet Catering Services",
        "amount": 34576.5,
        "paymentDate": "18-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90130",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1130",
        "createdAt": "2026-08-18T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-16T00:00:00.000Z",
    "updatedAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "inv-demo-131",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-27",
      "name": "Golden Spoon Event Caterers",
      "accountNumber": "427",
      "trn": "100519284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1131",
      "invoiceDate": "16-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-131-1",
        "itemNumber": 1,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 8400
      },
      {
        "id": "item-131-2",
        "itemNumber": 2,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 4500
      },
      {
        "id": "item-131-3",
        "itemNumber": 3,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 4050
      },
      {
        "id": "item-131-4",
        "itemNumber": 4,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 11520
      }
    ],
    "totals": {
      "totalQuantity": 47,
      "subtotal": 28470,
      "discount": 0,
      "netAmount": 28470,
      "vatAmount": 1423.5,
      "grandTotal": 29893.5,
      "amountInWordsArabic": "فقط 29893 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Nine Thousand Eight Hundred Ninety Three Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "31-08-2026",
    "paidAmount": 29893.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-131",
        "paymentNumber": "RCP-2026-2131",
        "invoiceId": "inv-demo-131",
        "invoiceNumber": "INV-2026-1131",
        "clientId": "cli-demo-27",
        "clientName": "Golden Spoon Event Caterers",
        "amount": 29893.5,
        "paymentDate": "19-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90131",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1131",
        "createdAt": "2026-08-19T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-16T00:00:00.000Z",
    "updatedAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "inv-demo-132",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-28",
      "name": "Royal Table Corporate Catering L.L.C",
      "accountNumber": "428",
      "trn": "100719284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1132",
      "invoiceDate": "16-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-132-1",
        "itemNumber": 1,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 51750
      },
      {
        "id": "item-132-2",
        "itemNumber": 2,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 2250
      }
    ],
    "totals": {
      "totalQuantity": 28,
      "subtotal": 54000,
      "discount": 0,
      "netAmount": 54000,
      "vatAmount": 2700,
      "grandTotal": 56700,
      "amountInWordsArabic": "فقط 56700 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty Six Thousand Seven Hundred Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "15-09-2026",
    "paidAmount": 56700,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-132",
        "paymentNumber": "RCP-2026-2132",
        "invoiceId": "inv-demo-132",
        "invoiceNumber": "INV-2026-1132",
        "clientId": "cli-demo-28",
        "clientName": "Royal Table Corporate Catering L.L.C",
        "amount": 56700,
        "paymentDate": "20-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90132",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1132",
        "createdAt": "2026-08-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-16T00:00:00.000Z",
    "updatedAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "inv-demo-133",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-29",
      "name": "Gulf Feast Catering & Hospitality",
      "accountNumber": "429",
      "trn": "100419284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1133",
      "invoiceDate": "17-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-133-1",
        "itemNumber": 1,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 11700
      },
      {
        "id": "item-133-2",
        "itemNumber": 2,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 5760
      },
      {
        "id": "item-133-3",
        "itemNumber": 3,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 5700
      }
    ],
    "totals": {
      "totalQuantity": 49,
      "subtotal": 23160,
      "discount": 0,
      "netAmount": 23160,
      "vatAmount": 1158,
      "grandTotal": 24318,
      "amountInWordsArabic": "فقط 24318 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Four Thousand Three Hundred Eighteen Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "01-09-2026",
    "paidAmount": 24318,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-133",
        "paymentNumber": "RCP-2026-2133",
        "invoiceId": "inv-demo-133",
        "invoiceNumber": "INV-2026-1133",
        "clientId": "cli-demo-29",
        "clientName": "Gulf Feast Catering & Hospitality",
        "amount": 24318,
        "paymentDate": "22-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90133",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1133",
        "createdAt": "2026-08-22T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-17T00:00:00.000Z",
    "updatedAt": "2026-08-17T00:00:00.000Z"
  },
  {
    "id": "inv-demo-134",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-30",
      "name": "Xender For Trading L.L.C",
      "accountNumber": "430",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1134",
      "invoiceDate": "17-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-134-1",
        "itemNumber": 1,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 8400
      },
      {
        "id": "item-134-2",
        "itemNumber": 2,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 28600
      },
      {
        "id": "item-134-3",
        "itemNumber": 3,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 39600
      },
      {
        "id": "item-134-4",
        "itemNumber": 4,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 43750
      }
    ],
    "totals": {
      "totalQuantity": 58,
      "subtotal": 120350,
      "discount": 0,
      "netAmount": 120350,
      "vatAmount": 6017.5,
      "grandTotal": 126367.5,
      "amountInWordsArabic": "فقط 126367 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Twenty Six Thousand Three Hundred Sixty Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "01-09-2026",
    "paidAmount": 126367.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-134",
        "paymentNumber": "RCP-2026-2134",
        "invoiceId": "inv-demo-134",
        "invoiceNumber": "INV-2026-1134",
        "clientId": "cli-demo-30",
        "clientName": "Xender For Trading L.L.C",
        "amount": 126367.5,
        "paymentDate": "23-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90134",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1134",
        "createdAt": "2026-08-23T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-17T00:00:00.000Z",
    "updatedAt": "2026-08-17T00:00:00.000Z"
  },
  {
    "id": "inv-demo-135",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-31",
      "name": "Prime Global General Trading L.L.C",
      "accountNumber": "431",
      "trn": "100319284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1135",
      "invoiceDate": "18-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-135-1",
        "itemNumber": 1,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 18200
      },
      {
        "id": "item-135-2",
        "itemNumber": 2,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 30800
      }
    ],
    "totals": {
      "totalQuantity": 21,
      "subtotal": 49000,
      "discount": 0,
      "netAmount": 49000,
      "vatAmount": 2450,
      "grandTotal": 51450,
      "amountInWordsArabic": "فقط 51450 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty One Thousand Four Hundred Fifty Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "17-09-2026",
    "paidAmount": 51450,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-135",
        "paymentNumber": "RCP-2026-2135",
        "invoiceId": "inv-demo-135",
        "invoiceNumber": "INV-2026-1135",
        "clientId": "cli-demo-31",
        "clientName": "Prime Global General Trading L.L.C",
        "amount": 51450,
        "paymentDate": "20-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90135",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1135",
        "createdAt": "2026-08-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-18T00:00:00.000Z",
    "updatedAt": "2026-08-18T00:00:00.000Z"
  },
  {
    "id": "inv-demo-136",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-32",
      "name": "Gulf Coast Commodities Trading",
      "accountNumber": "432",
      "trn": "100919284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1136",
      "invoiceDate": "18-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-136-1",
        "itemNumber": 1,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 22000
      },
      {
        "id": "item-136-2",
        "itemNumber": 2,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 29750
      },
      {
        "id": "item-136-3",
        "itemNumber": 3,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 43200
      }
    ],
    "totals": {
      "totalQuantity": 51,
      "subtotal": 94950,
      "discount": 0,
      "netAmount": 94950,
      "vatAmount": 4747.5,
      "grandTotal": 99697.5,
      "amountInWordsArabic": "فقط 99697 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Ninety Nine Thousand Six Hundred Ninety Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "17-09-2026",
    "paidAmount": 99697.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-136",
        "paymentNumber": "RCP-2026-2136",
        "invoiceId": "inv-demo-136",
        "invoiceNumber": "INV-2026-1136",
        "clientId": "cli-demo-32",
        "clientName": "Gulf Coast Commodities Trading",
        "amount": 99697.5,
        "paymentDate": "21-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90136",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1136",
        "createdAt": "2026-08-21T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-18T00:00:00.000Z",
    "updatedAt": "2026-08-18T00:00:00.000Z"
  },
  {
    "id": "inv-demo-137",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-33",
      "name": "Al Manar Import & Export L.L.C",
      "accountNumber": "433",
      "trn": "100819284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1137",
      "invoiceDate": "18-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-137-1",
        "itemNumber": 1,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 22750
      },
      {
        "id": "item-137-2",
        "itemNumber": 2,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 36000
      },
      {
        "id": "item-137-3",
        "itemNumber": 3,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 3900
      },
      {
        "id": "item-137-4",
        "itemNumber": 4,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 18900
      }
    ],
    "totals": {
      "totalQuantity": 44,
      "subtotal": 81550,
      "discount": 0,
      "netAmount": 81550,
      "vatAmount": 4077.5,
      "grandTotal": 85627.5,
      "amountInWordsArabic": "فقط 85627 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eighty Five Thousand Six Hundred Twenty Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "45 Days",
    "dueDate": "25-08-2026",
    "paidAmount": 85627.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-137",
        "paymentNumber": "RCP-2026-2137",
        "invoiceId": "inv-demo-137",
        "invoiceNumber": "INV-2026-1137",
        "clientId": "cli-demo-33",
        "clientName": "Al Manar Import & Export L.L.C",
        "amount": 85627.5,
        "paymentDate": "22-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90137",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1137",
        "createdAt": "2026-08-22T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-18T00:00:00.000Z",
    "updatedAt": "2026-08-18T00:00:00.000Z"
  },
  {
    "id": "inv-demo-138",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-34",
      "name": "Apex Foodstuff Trading FZE",
      "accountNumber": "434",
      "trn": "100219284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1138",
      "invoiceDate": "19-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-138-1",
        "itemNumber": 1,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 28800
      },
      {
        "id": "item-138-2",
        "itemNumber": 2,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 44850
      }
    ],
    "totals": {
      "totalQuantity": 39,
      "subtotal": 73650,
      "discount": 0,
      "netAmount": 73650,
      "vatAmount": 3682.5,
      "grandTotal": 77332.5,
      "amountInWordsArabic": "فقط 77332 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventy Seven Thousand Three Hundred Thirty Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "18-09-2026",
    "paidAmount": 77332.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-138",
        "paymentNumber": "RCP-2026-2138",
        "invoiceId": "inv-demo-138",
        "invoiceNumber": "INV-2026-1138",
        "clientId": "cli-demo-34",
        "clientName": "Apex Foodstuff Trading FZE",
        "amount": 77332.5,
        "paymentDate": "24-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90138",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1138",
        "createdAt": "2026-08-24T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-19T00:00:00.000Z",
    "updatedAt": "2026-08-19T00:00:00.000Z"
  },
  {
    "id": "inv-demo-139",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-35",
      "name": "Horizon Agro Trading L.L.C",
      "accountNumber": "435",
      "trn": "100119284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1139",
      "invoiceDate": "19-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-139-1",
        "itemNumber": 1,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 37050
      },
      {
        "id": "item-139-2",
        "itemNumber": 2,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 54600
      },
      {
        "id": "item-139-3",
        "itemNumber": 3,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 20800
      }
    ],
    "totals": {
      "totalQuantity": 53,
      "subtotal": 112450,
      "discount": 0,
      "netAmount": 112450,
      "vatAmount": 5622.5,
      "grandTotal": 118072.5,
      "amountInWordsArabic": "فقط 118072 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Eighteen Thousand Seventy Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "18-09-2026",
    "paidAmount": 118072.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-139",
        "paymentNumber": "RCP-2026-2139",
        "invoiceId": "inv-demo-139",
        "invoiceNumber": "INV-2026-1139",
        "clientId": "cli-demo-35",
        "clientName": "Horizon Agro Trading L.L.C",
        "amount": 118072.5,
        "paymentDate": "25-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90139",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1139",
        "createdAt": "2026-08-25T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-19T00:00:00.000Z",
    "updatedAt": "2026-08-19T00:00:00.000Z"
  },
  {
    "id": "inv-demo-140",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-36",
      "name": "Marina Palm Luxury Hotel & Suites",
      "accountNumber": "436",
      "trn": "100918294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1140",
      "invoiceDate": "19-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-140-1",
        "itemNumber": 1,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 18700
      },
      {
        "id": "item-140-2",
        "itemNumber": 2,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 5600
      },
      {
        "id": "item-140-3",
        "itemNumber": 3,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 2420
      },
      {
        "id": "item-140-4",
        "itemNumber": 4,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 11700
      }
    ],
    "totals": {
      "totalQuantity": 55,
      "subtotal": 38420,
      "discount": 0,
      "netAmount": 38420,
      "vatAmount": 1921,
      "grandTotal": 40341,
      "amountInWordsArabic": "فقط 40341 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Thousand Three Hundred Forty One Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "18-09-2026",
    "paidAmount": 40341,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-140",
        "paymentNumber": "RCP-2026-2140",
        "invoiceId": "inv-demo-140",
        "invoiceNumber": "INV-2026-1140",
        "clientId": "cli-demo-36",
        "clientName": "Marina Palm Luxury Hotel & Suites",
        "amount": 40341,
        "paymentDate": "21-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90140",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1140",
        "createdAt": "2026-08-21T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-19T00:00:00.000Z",
    "updatedAt": "2026-08-19T00:00:00.000Z"
  },
  {
    "id": "inv-demo-141",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-37",
      "name": "Golden Dunes Resort & Spa",
      "accountNumber": "437",
      "trn": "100418294000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1141",
      "invoiceDate": "20-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-141-1",
        "itemNumber": 1,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 35000
      },
      {
        "id": "item-141-2",
        "itemNumber": 2,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 1540
      }
    ],
    "totals": {
      "totalQuantity": 32,
      "subtotal": 36540,
      "discount": 0,
      "netAmount": 36540,
      "vatAmount": 1827,
      "grandTotal": 38367,
      "amountInWordsArabic": "فقط 38367 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Eight Thousand Three Hundred Sixty Seven Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "19-09-2026",
    "paidAmount": 38367,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-141",
        "paymentNumber": "RCP-2026-2141",
        "invoiceId": "inv-demo-141",
        "invoiceNumber": "INV-2026-1141",
        "clientId": "cli-demo-37",
        "clientName": "Golden Dunes Resort & Spa",
        "amount": 38367,
        "paymentDate": "23-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90141",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1141",
        "createdAt": "2026-08-23T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-20T00:00:00.000Z",
    "updatedAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "inv-demo-142",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-38",
      "name": "Oasis Grand Palace Hotel L.L.C",
      "accountNumber": "438",
      "trn": "100718294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1142",
      "invoiceDate": "20-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-142-1",
        "itemNumber": 1,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 660
      },
      {
        "id": "item-142-2",
        "itemNumber": 2,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 6500
      },
      {
        "id": "item-142-3",
        "itemNumber": 3,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 16150
      }
    ],
    "totals": {
      "totalQuantity": 30,
      "subtotal": 23310,
      "discount": 0,
      "netAmount": 23310,
      "vatAmount": 1165.5,
      "grandTotal": 24475.5,
      "amountInWordsArabic": "فقط 24475 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Four Thousand Four Hundred Seventy Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "19-09-2026",
    "paidAmount": 24475.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-142",
        "paymentNumber": "RCP-2026-2142",
        "invoiceId": "inv-demo-142",
        "invoiceNumber": "INV-2026-1142",
        "clientId": "cli-demo-38",
        "clientName": "Oasis Grand Palace Hotel L.L.C",
        "amount": 24475.5,
        "paymentDate": "24-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90142",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1142",
        "createdAt": "2026-08-24T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-20T00:00:00.000Z",
    "updatedAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "inv-demo-143",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-39",
      "name": "Sea Breeze Boutique Hotel",
      "accountNumber": "439",
      "trn": "100618294000003",
      "cityOrBranch": "Fujairah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1143",
      "invoiceDate": "20-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-143-1",
        "itemNumber": 1,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 3900
      },
      {
        "id": "item-143-2",
        "itemNumber": 2,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 12350
      },
      {
        "id": "item-143-3",
        "itemNumber": 3,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 17000
      },
      {
        "id": "item-143-4",
        "itemNumber": 4,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 2800
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 36050,
      "discount": 0,
      "netAmount": 36050,
      "vatAmount": 1802.5,
      "grandTotal": 37852.5,
      "amountInWordsArabic": "فقط 37852 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Seven Thousand Eight Hundred Fifty Two Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "04-09-2026",
    "paidAmount": 37852.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-143",
        "paymentNumber": "RCP-2026-2143",
        "invoiceId": "inv-demo-143",
        "invoiceNumber": "INV-2026-1143",
        "clientId": "cli-demo-39",
        "clientName": "Sea Breeze Boutique Hotel",
        "amount": 37852.5,
        "paymentDate": "25-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90143",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1143",
        "createdAt": "2026-08-25T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-20T00:00:00.000Z",
    "updatedAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "inv-demo-144",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-40",
      "name": "Creek Gate Business Hotel",
      "accountNumber": "440",
      "trn": "100518294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1144",
      "invoiceDate": "21-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-144-1",
        "itemNumber": 1,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 8550
      },
      {
        "id": "item-144-2",
        "itemNumber": 2,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 13600
      }
    ],
    "totals": {
      "totalQuantity": 25,
      "subtotal": 22150,
      "discount": 0,
      "netAmount": 22150,
      "vatAmount": 1107.5,
      "grandTotal": 23257.5,
      "amountInWordsArabic": "فقط 23257 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Three Thousand Two Hundred Fifty Seven Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "20-09-2026",
    "paidAmount": 23257.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-144",
        "paymentNumber": "RCP-2026-2144",
        "invoiceId": "inv-demo-144",
        "invoiceNumber": "INV-2026-1144",
        "clientId": "cli-demo-40",
        "clientName": "Creek Gate Business Hotel",
        "amount": 23257.5,
        "paymentDate": "27-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90144",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1144",
        "createdAt": "2026-08-27T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-21T00:00:00.000Z",
    "updatedAt": "2026-08-21T00:00:00.000Z"
  },
  {
    "id": "inv-demo-145",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-41",
      "name": "Al Madina Fresh Grocery",
      "accountNumber": "441",
      "trn": "100418284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1145",
      "invoiceDate": "21-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-145-1",
        "itemNumber": 1,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 576
      },
      {
        "id": "item-145-2",
        "itemNumber": 2,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2755
      },
      {
        "id": "item-145-3",
        "itemNumber": 3,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 3120
      }
    ],
    "totals": {
      "totalQuantity": 57,
      "subtotal": 6451,
      "discount": 0,
      "netAmount": 6451,
      "vatAmount": 322.55,
      "grandTotal": 6773.55,
      "amountInWordsArabic": "فقط 6773 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Seven Hundred Seventy Three Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "28-08-2026",
    "paidAmount": 6773.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-145",
        "paymentNumber": "RCP-2026-2145",
        "invoiceId": "inv-demo-145",
        "invoiceNumber": "INV-2026-1145",
        "clientId": "cli-demo-41",
        "clientName": "Al Madina Fresh Grocery",
        "amount": 6773.55,
        "paymentDate": "23-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90145",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1145",
        "createdAt": "2026-08-23T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-21T00:00:00.000Z",
    "updatedAt": "2026-08-21T00:00:00.000Z"
  },
  {
    "id": "inv-demo-146",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-42",
      "name": "Corner Fresh Market L.L.C",
      "accountNumber": "442",
      "trn": "100318284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1146",
      "invoiceDate": "21-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-146-1",
        "itemNumber": 1,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2175
      },
      {
        "id": "item-146-2",
        "itemNumber": 2,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 2640
      },
      {
        "id": "item-146-3",
        "itemNumber": 3,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 460
      },
      {
        "id": "item-146-4",
        "itemNumber": 4,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1485
      }
    ],
    "totals": {
      "totalQuantity": 52,
      "subtotal": 6760,
      "discount": 0,
      "netAmount": 6760,
      "vatAmount": 338,
      "grandTotal": 7098,
      "amountInWordsArabic": "فقط 7098 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Ninety Eight Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "28-08-2026",
    "paidAmount": 7098,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-146",
        "paymentNumber": "RCP-2026-2146",
        "invoiceId": "inv-demo-146",
        "invoiceNumber": "INV-2026-1146",
        "clientId": "cli-demo-42",
        "clientName": "Corner Fresh Market L.L.C",
        "amount": 7098,
        "paymentDate": "24-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90146",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1146",
        "createdAt": "2026-08-24T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-21T00:00:00.000Z",
    "updatedAt": "2026-08-21T00:00:00.000Z"
  },
  {
    "id": "inv-demo-147",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-43",
      "name": "Daily Mart Grocery L.L.C",
      "accountNumber": "443",
      "trn": "100218284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1147",
      "invoiceDate": "22-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-147-1",
        "itemNumber": 1,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 2160
      },
      {
        "id": "item-147-2",
        "itemNumber": 2,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2875
      }
    ],
    "totals": {
      "totalQuantity": 43,
      "subtotal": 5035,
      "discount": 0,
      "netAmount": 5035,
      "vatAmount": 251.75,
      "grandTotal": 5286.75,
      "amountInWordsArabic": "فقط 5286 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Two Hundred Eighty Six Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "29-08-2026",
    "paidAmount": 5286.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-147",
        "paymentNumber": "RCP-2026-2147",
        "invoiceId": "inv-demo-147",
        "invoiceNumber": "INV-2026-1147",
        "clientId": "cli-demo-43",
        "clientName": "Daily Mart Grocery L.L.C",
        "amount": 5286.75,
        "paymentDate": "26-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90147",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1147",
        "createdAt": "2026-08-26T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-22T00:00:00.000Z",
    "updatedAt": "2026-08-22T00:00:00.000Z"
  },
  {
    "id": "inv-demo-148",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-44",
      "name": "Al Safa Express Store",
      "accountNumber": "444",
      "trn": "100118284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1148",
      "invoiceDate": "22-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-148-1",
        "itemNumber": 1,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2415
      },
      {
        "id": "item-148-2",
        "itemNumber": 2,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 405
      },
      {
        "id": "item-148-3",
        "itemNumber": 3,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 480
      }
    ],
    "totals": {
      "totalQuantity": 34,
      "subtotal": 3300,
      "discount": 0,
      "netAmount": 3300,
      "vatAmount": 165,
      "grandTotal": 3465,
      "amountInWordsArabic": "فقط 3465 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Four Hundred Sixty Five Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "29-08-2026",
    "paidAmount": 3465,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-148",
        "paymentNumber": "RCP-2026-2148",
        "invoiceId": "inv-demo-148",
        "invoiceNumber": "INV-2026-1148",
        "clientId": "cli-demo-44",
        "clientName": "Al Safa Express Store",
        "amount": 3465,
        "paymentDate": "27-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90148",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1148",
        "createdAt": "2026-08-27T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-22T00:00:00.000Z",
    "updatedAt": "2026-08-22T00:00:00.000Z"
  },
  {
    "id": "inv-demo-149",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-45",
      "name": "Gourmet Olive & Deli Emporium",
      "accountNumber": "445",
      "trn": "100817294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1149",
      "invoiceDate": "23-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-149-1",
        "itemNumber": 1,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 1800
      },
      {
        "id": "item-149-2",
        "itemNumber": 2,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 1440
      },
      {
        "id": "item-149-3",
        "itemNumber": 3,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 2145
      },
      {
        "id": "item-149-4",
        "itemNumber": 4,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 3700
      }
    ],
    "totals": {
      "totalQuantity": 63,
      "subtotal": 9085,
      "discount": 0,
      "netAmount": 9085,
      "vatAmount": 454.25,
      "grandTotal": 9539.25,
      "amountInWordsArabic": "فقط 9539 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand Five Hundred Thirty Nine Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "07-09-2026",
    "paidAmount": 9539.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-149",
        "paymentNumber": "RCP-2026-2149",
        "invoiceId": "inv-demo-149",
        "invoiceNumber": "INV-2026-1149",
        "clientId": "cli-demo-45",
        "clientName": "Gourmet Olive & Deli Emporium",
        "amount": 9539.25,
        "paymentDate": "29-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90149",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1149",
        "createdAt": "2026-08-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-23T00:00:00.000Z",
    "updatedAt": "2026-08-23T00:00:00.000Z"
  },
  {
    "id": "inv-demo-150",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-46",
      "name": "Pure Organic Pantry L.L.C",
      "accountNumber": "446",
      "trn": "100717294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1150",
      "invoiceDate": "23-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-150-1",
        "itemNumber": 1,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 480
      },
      {
        "id": "item-150-2",
        "itemNumber": 2,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 1485
      }
    ],
    "totals": {
      "totalQuantity": 11,
      "subtotal": 1965,
      "discount": 0,
      "netAmount": 1965,
      "vatAmount": 98.25,
      "grandTotal": 2063.25,
      "amountInWordsArabic": "فقط 2063 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Sixty Three Dirhams and Twenty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "07-09-2026",
    "paidAmount": 2063.25,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-150",
        "paymentNumber": "RCP-2026-2150",
        "invoiceId": "inv-demo-150",
        "invoiceNumber": "INV-2026-1150",
        "clientId": "cli-demo-46",
        "clientName": "Pure Organic Pantry L.L.C",
        "amount": 2063.25,
        "paymentDate": "25-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90150",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1150",
        "createdAt": "2026-08-25T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-23T00:00:00.000Z",
    "updatedAt": "2026-08-23T00:00:00.000Z"
  },
  {
    "id": "inv-demo-151",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-47",
      "name": "Prime Cuts Butchery & Deli",
      "accountNumber": "447",
      "trn": "100617294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1151",
      "invoiceDate": "23-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-151-1",
        "itemNumber": 1,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 825
      },
      {
        "id": "item-151-2",
        "itemNumber": 2,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 2220
      },
      {
        "id": "item-151-3",
        "itemNumber": 3,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 1748
      }
    ],
    "totals": {
      "totalQuantity": 36,
      "subtotal": 4793,
      "discount": 0,
      "netAmount": 4793,
      "vatAmount": 239.65,
      "grandTotal": 5032.65,
      "amountInWordsArabic": "فقط 5032 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Thirty Two Dirhams and Sixty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "30-08-2026",
    "paidAmount": 5032.65,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-151",
        "paymentNumber": "RCP-2026-2151",
        "invoiceId": "inv-demo-151",
        "invoiceNumber": "INV-2026-1151",
        "clientId": "cli-demo-47",
        "clientName": "Prime Cuts Butchery & Deli",
        "amount": 5032.65,
        "paymentDate": "26-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90151",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1151",
        "createdAt": "2026-08-26T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-23T00:00:00.000Z",
    "updatedAt": "2026-08-23T00:00:00.000Z"
  },
  {
    "id": "inv-demo-152",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-48",
      "name": "Green Leaf Nutrition Store",
      "accountNumber": "448",
      "trn": "100517294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1152",
      "invoiceDate": "24-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-152-1",
        "itemNumber": 1,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 1480
      },
      {
        "id": "item-152-2",
        "itemNumber": 2,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 1380
      },
      {
        "id": "item-152-3",
        "itemNumber": 3,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 1650
      },
      {
        "id": "item-152-4",
        "itemNumber": 4,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 960
      }
    ],
    "totals": {
      "totalQuantity": 49,
      "subtotal": 5470,
      "discount": 0,
      "netAmount": 5470,
      "vatAmount": 273.5,
      "grandTotal": 5743.5,
      "amountInWordsArabic": "فقط 5743 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Seven Hundred Forty Three Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "08-09-2026",
    "paidAmount": 5743.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-152",
        "paymentNumber": "RCP-2026-2152",
        "invoiceId": "inv-demo-152",
        "invoiceNumber": "INV-2026-1152",
        "clientId": "cli-demo-48",
        "clientName": "Green Leaf Nutrition Store",
        "amount": 5743.5,
        "paymentDate": "28-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90152",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1152",
        "createdAt": "2026-08-28T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-24T00:00:00.000Z",
    "updatedAt": "2026-08-24T00:00:00.000Z"
  },
  {
    "id": "inv-demo-153",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-49",
      "name": "SpeedLine Commercial Delivery Services",
      "accountNumber": "449",
      "trn": "100417294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1153",
      "invoiceDate": "24-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-153-1",
        "itemNumber": 1,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 1980
      },
      {
        "id": "item-153-2",
        "itemNumber": 2,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 21600
      }
    ],
    "totals": {
      "totalQuantity": 29,
      "subtotal": 23580,
      "discount": 0,
      "netAmount": 23580,
      "vatAmount": 1179,
      "grandTotal": 24759,
      "amountInWordsArabic": "فقط 24759 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Four Thousand Seven Hundred Fifty Nine Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "23-09-2026",
    "paidAmount": 24759,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-153",
        "paymentNumber": "RCP-2026-2153",
        "invoiceId": "inv-demo-153",
        "invoiceNumber": "INV-2026-1153",
        "clientId": "cli-demo-49",
        "clientName": "SpeedLine Commercial Delivery Services",
        "amount": 24759,
        "paymentDate": "29-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90153",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1153",
        "createdAt": "2026-08-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-24T00:00:00.000Z",
    "updatedAt": "2026-08-24T00:00:00.000Z"
  },
  {
    "id": "inv-demo-154",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-50",
      "name": "CleanPro Facility Management L.L.C",
      "accountNumber": "450",
      "trn": "100317294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1154",
      "invoiceDate": "24-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-154-1",
        "itemNumber": 1,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 16800
      },
      {
        "id": "item-154-2",
        "itemNumber": 2,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 10080
      },
      {
        "id": "item-154-3",
        "itemNumber": 3,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 1950
      }
    ],
    "totals": {
      "totalQuantity": 38,
      "subtotal": 28830,
      "discount": 0,
      "netAmount": 28830,
      "vatAmount": 1441.5,
      "grandTotal": 30271.5,
      "amountInWordsArabic": "فقط 30271 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Thousand Two Hundred Seventy One Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "23-09-2026",
    "paidAmount": 30271.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-154",
        "paymentNumber": "RCP-2026-2154",
        "invoiceId": "inv-demo-154",
        "invoiceNumber": "INV-2026-1154",
        "clientId": "cli-demo-50",
        "clientName": "CleanPro Facility Management L.L.C",
        "amount": 30271.5,
        "paymentDate": "30-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90154",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1154",
        "createdAt": "2026-08-30T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-24T00:00:00.000Z",
    "updatedAt": "2026-08-24T00:00:00.000Z"
  },
  {
    "id": "inv-demo-155",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-51",
      "name": "ColdChain Logistics Services L.L.C",
      "accountNumber": "451",
      "trn": "100217294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1155",
      "invoiceDate": "25-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-155-1",
        "itemNumber": 1,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 8160
      },
      {
        "id": "item-155-2",
        "itemNumber": 2,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 15600
      },
      {
        "id": "item-155-3",
        "itemNumber": 3,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 1080
      },
      {
        "id": "item-155-4",
        "itemNumber": 4,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 15600
      }
    ],
    "totals": {
      "totalQuantity": 60,
      "subtotal": 40440,
      "discount": 0,
      "netAmount": 40440,
      "vatAmount": 2022,
      "grandTotal": 42462,
      "amountInWordsArabic": "فقط 42462 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Two Thousand Four Hundred Sixty Two Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "24-09-2026",
    "paidAmount": 42462,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-155",
        "paymentNumber": "RCP-2026-2155",
        "invoiceId": "inv-demo-155",
        "invoiceNumber": "INV-2026-1155",
        "clientId": "cli-demo-51",
        "clientName": "ColdChain Logistics Services L.L.C",
        "amount": 42462,
        "paymentDate": "27-08-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90155",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1155",
        "createdAt": "2026-08-27T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-25T00:00:00.000Z",
    "updatedAt": "2026-08-25T00:00:00.000Z"
  },
  {
    "id": "inv-demo-156",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-52",
      "name": "FreshFleet Distribution Services",
      "accountNumber": "452",
      "trn": "100117294000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1156",
      "invoiceDate": "25-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-156-1",
        "itemNumber": 1,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 13000
      },
      {
        "id": "item-156-2",
        "itemNumber": 2,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 360
      }
    ],
    "totals": {
      "totalQuantity": 22,
      "subtotal": 13360,
      "discount": 0,
      "netAmount": 13360,
      "vatAmount": 668,
      "grandTotal": 14028,
      "amountInWordsArabic": "فقط 14028 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fourteen Thousand Twenty Eight Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "09-09-2026",
    "paidAmount": 14028,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-156",
        "paymentNumber": "RCP-2026-2156",
        "invoiceId": "inv-demo-156",
        "invoiceNumber": "INV-2026-1156",
        "clientId": "cli-demo-52",
        "clientName": "FreshFleet Distribution Services",
        "amount": 14028,
        "paymentDate": "28-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90156",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1156",
        "createdAt": "2026-08-28T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-25T00:00:00.000Z",
    "updatedAt": "2026-08-25T00:00:00.000Z"
  },
  {
    "id": "inv-demo-157",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-01",
      "name": "Al Noor Supermarket L.L.C",
      "accountNumber": "401",
      "trn": "100482910400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1157",
      "invoiceDate": "25-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-157-1",
        "itemNumber": 1,
        "itemCode": "SUP-108",
        "description": "Ariel Laundry Detergent 5kg",
        "unit": "كيس",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 966
      },
      {
        "id": "item-157-2",
        "itemNumber": 2,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 75
      },
      {
        "id": "item-157-3",
        "itemNumber": 3,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 210
      }
    ],
    "totals": {
      "totalQuantity": 40,
      "subtotal": 1251,
      "discount": 0,
      "netAmount": 1251,
      "vatAmount": 62.55,
      "grandTotal": 1313.55,
      "amountInWordsArabic": "فقط 1313 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Three Hundred Thirteen Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "09-09-2026",
    "paidAmount": 1313.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-157",
        "paymentNumber": "RCP-2026-2157",
        "invoiceId": "inv-demo-157",
        "invoiceNumber": "INV-2026-1157",
        "clientId": "cli-demo-01",
        "clientName": "Al Noor Supermarket L.L.C",
        "amount": 1313.55,
        "paymentDate": "29-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90157",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1157",
        "createdAt": "2026-08-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-25T00:00:00.000Z",
    "updatedAt": "2026-08-25T00:00:00.000Z"
  },
  {
    "id": "inv-demo-158",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-02",
      "name": "Golden Basket Hypermarket L.L.C",
      "accountNumber": "402",
      "trn": "100294819200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1158",
      "invoiceDate": "26-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-158-1",
        "itemNumber": 1,
        "itemCode": "SUP-109",
        "description": "Fine White Sugar 5kg",
        "unit": "كيس",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 15,
        "lineTotal": 390
      },
      {
        "id": "item-158-2",
        "itemNumber": 2,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 140
      },
      {
        "id": "item-158-3",
        "itemNumber": 3,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 427.5
      },
      {
        "id": "item-158-4",
        "itemNumber": 4,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 748
      }
    ],
    "totals": {
      "totalQuantity": 71,
      "subtotal": 1705.5,
      "discount": 0,
      "netAmount": 1705.5,
      "vatAmount": 85.28,
      "grandTotal": 1790.78,
      "amountInWordsArabic": "فقط 1790 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Seven Hundred Ninety Dirhams and Seventy Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "25-09-2026",
    "paidAmount": 1790.78,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-158",
        "paymentNumber": "RCP-2026-2158",
        "invoiceId": "inv-demo-158",
        "invoiceNumber": "INV-2026-1158",
        "clientId": "cli-demo-02",
        "clientName": "Golden Basket Hypermarket L.L.C",
        "amount": 1790.78,
        "paymentDate": "31-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90158",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1158",
        "createdAt": "2026-08-31T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-26T00:00:00.000Z",
    "updatedAt": "2026-08-26T00:00:00.000Z"
  },
  {
    "id": "inv-demo-159",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-03",
      "name": "Green Harvest Supermarket",
      "accountNumber": "403",
      "trn": "100839201900003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1159",
      "invoiceDate": "26-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-159-1",
        "itemNumber": 1,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 70
      },
      {
        "id": "item-159-2",
        "itemNumber": 2,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 313.5
      }
    ],
    "totals": {
      "totalQuantity": 15,
      "subtotal": 383.5,
      "discount": 0,
      "netAmount": 383.5,
      "vatAmount": 19.18,
      "grandTotal": 402.68,
      "amountInWordsArabic": "فقط 402 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Hundred Two Dirhams and Sixty Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "10-09-2026",
    "paidAmount": 402.68,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-159",
        "paymentNumber": "RCP-2026-2159",
        "invoiceId": "inv-demo-159",
        "invoiceNumber": "INV-2026-1159",
        "clientId": "cli-demo-03",
        "clientName": "Green Harvest Supermarket",
        "amount": 402.68,
        "paymentDate": "01-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90159",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1159",
        "createdAt": "2026-09-01T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-26T00:00:00.000Z",
    "updatedAt": "2026-08-26T00:00:00.000Z"
  },
  {
    "id": "inv-demo-160",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-04",
      "name": "Family Choice Supermarket L.L.C",
      "accountNumber": "404",
      "trn": "100382910400003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1160",
      "invoiceDate": "27-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-160-1",
        "itemNumber": 1,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 199.5
      },
      {
        "id": "item-160-2",
        "itemNumber": 2,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 476
      },
      {
        "id": "item-160-3",
        "itemNumber": 3,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 241.5
      }
    ],
    "totals": {
      "totalQuantity": 42,
      "subtotal": 917,
      "discount": 0,
      "netAmount": 917,
      "vatAmount": 45.85,
      "grandTotal": 962.85,
      "amountInWordsArabic": "فقط 962 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Hundred Sixty Two Dirhams and Eighty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "03-09-2026",
    "paidAmount": 962.85,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-160",
        "paymentNumber": "RCP-2026-2160",
        "invoiceId": "inv-demo-160",
        "invoiceNumber": "INV-2026-1160",
        "clientId": "cli-demo-04",
        "clientName": "Family Choice Supermarket L.L.C",
        "amount": 962.85,
        "paymentDate": "29-08-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90160",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1160",
        "createdAt": "2026-08-29T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-27T00:00:00.000Z",
    "updatedAt": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "inv-demo-161",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-05",
      "name": "Grand Central Mart L.L.C",
      "accountNumber": "405",
      "trn": "100948271000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1161",
      "invoiceDate": "27-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-161-1",
        "itemNumber": 1,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 340
      },
      {
        "id": "item-161-2",
        "itemNumber": 2,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 195.5
      },
      {
        "id": "item-161-3",
        "itemNumber": 3,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 432
      },
      {
        "id": "item-161-4",
        "itemNumber": 4,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 117
      }
    ],
    "totals": {
      "totalQuantity": 57,
      "subtotal": 1084.5,
      "discount": 0,
      "netAmount": 1084.5,
      "vatAmount": 54.23,
      "grandTotal": 1138.73,
      "amountInWordsArabic": "فقط 1138 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand One Hundred Thirty Eight Dirhams and Seventy Three Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "30 Days",
    "dueDate": "26-09-2026",
    "paidAmount": 1138.73,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-161",
        "paymentNumber": "RCP-2026-2161",
        "invoiceId": "inv-demo-161",
        "invoiceNumber": "INV-2026-1161",
        "clientId": "cli-demo-05",
        "clientName": "Grand Central Mart L.L.C",
        "amount": 1138.73,
        "paymentDate": "30-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90161",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1161",
        "createdAt": "2026-08-30T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-27T00:00:00.000Z",
    "updatedAt": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "inv-demo-162",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-06",
      "name": "Emirates Fresh Mart",
      "accountNumber": "406",
      "trn": "100192840100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1162",
      "invoiceDate": "27-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-162-1",
        "itemNumber": 1,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 149.5
      },
      {
        "id": "item-162-2",
        "itemNumber": 2,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 360
      }
    ],
    "totals": {
      "totalQuantity": 33,
      "subtotal": 509.5,
      "discount": 0,
      "netAmount": 509.5,
      "vatAmount": 25.48,
      "grandTotal": 534.98,
      "amountInWordsArabic": "فقط 534 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Hundred Thirty Four Dirhams and Ninety Eight Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "11-09-2026",
    "paidAmount": 534.98,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-162",
        "paymentNumber": "RCP-2026-2162",
        "invoiceId": "inv-demo-162",
        "invoiceNumber": "INV-2026-1162",
        "clientId": "cli-demo-06",
        "clientName": "Emirates Fresh Mart",
        "amount": 534.98,
        "paymentDate": "31-08-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90162",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1162",
        "createdAt": "2026-08-31T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-27T00:00:00.000Z",
    "updatedAt": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "inv-demo-163",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-07",
      "name": "City Star Supermarket L.L.C",
      "accountNumber": "407",
      "trn": "100728192000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1163",
      "invoiceDate": "28-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-163-1",
        "itemNumber": 1,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 288
      },
      {
        "id": "item-163-2",
        "itemNumber": 2,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 448.5
      },
      {
        "id": "item-163-3",
        "itemNumber": 3,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 82.5
      }
    ],
    "totals": {
      "totalQuantity": 44,
      "subtotal": 819,
      "discount": 0,
      "netAmount": 819,
      "vatAmount": 40.95,
      "grandTotal": 859.95,
      "amountInWordsArabic": "فقط 859 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Eight Hundred Fifty Nine Dirhams and Ninety Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "04-09-2026",
    "paidAmount": 859.95,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-163",
        "paymentNumber": "RCP-2026-2163",
        "invoiceId": "inv-demo-163",
        "invoiceNumber": "INV-2026-1163",
        "clientId": "cli-demo-07",
        "clientName": "City Star Supermarket L.L.C",
        "amount": 859.95,
        "paymentDate": "02-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90163",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1163",
        "createdAt": "2026-09-02T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-28T00:00:00.000Z",
    "updatedAt": "2026-08-28T00:00:00.000Z"
  },
  {
    "id": "inv-demo-164",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-08",
      "name": "Royal Garden Restaurant L.L.C",
      "accountNumber": "408",
      "trn": "100582910200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1164",
      "invoiceDate": "28-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-164-1",
        "itemNumber": 1,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 2565
      },
      {
        "id": "item-164-2",
        "itemNumber": 2,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2990
      },
      {
        "id": "item-164-3",
        "itemNumber": 3,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 760
      },
      {
        "id": "item-164-4",
        "itemNumber": 4,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 2400
      }
    ],
    "totals": {
      "totalQuantity": 68,
      "subtotal": 8715,
      "discount": 0,
      "netAmount": 8715,
      "vatAmount": 435.75,
      "grandTotal": 9150.75,
      "amountInWordsArabic": "فقط 9150 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand One Hundred Fifty Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "04-09-2026",
    "paidAmount": 9150.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-164",
        "paymentNumber": "RCP-2026-2164",
        "invoiceId": "inv-demo-164",
        "invoiceNumber": "INV-2026-1164",
        "clientId": "cli-demo-08",
        "clientName": "Royal Garden Restaurant L.L.C",
        "amount": 9150.75,
        "paymentDate": "03-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90164",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1164",
        "createdAt": "2026-09-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-28T00:00:00.000Z",
    "updatedAt": "2026-08-28T00:00:00.000Z"
  },
  {
    "id": "inv-demo-165",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-09",
      "name": "Ocean View Seafood Restaurant",
      "accountNumber": "409",
      "trn": "100482918300003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1165",
      "invoiceDate": "28-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-165-1",
        "itemNumber": 1,
        "itemCode": "RES-204",
        "description": "Jumbo Sea Tiger Prawns 2kg",
        "unit": "كرتون",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2530
      },
      {
        "id": "item-165-2",
        "itemNumber": 2,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 380
      }
    ],
    "totals": {
      "totalQuantity": 26,
      "subtotal": 2910,
      "discount": 0,
      "netAmount": 2910,
      "vatAmount": 145.5,
      "grandTotal": 3055.5,
      "amountInWordsArabic": "فقط 3055 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Fifty Five Dirhams and Fifty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "04-09-2026",
    "paidAmount": 3055.5,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-165",
        "paymentNumber": "RCP-2026-2165",
        "invoiceId": "inv-demo-165",
        "invoiceNumber": "INV-2026-1165",
        "clientId": "cli-demo-09",
        "clientName": "Ocean View Seafood Restaurant",
        "amount": 3055.5,
        "paymentDate": "30-08-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90165",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1165",
        "createdAt": "2026-08-30T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-28T00:00:00.000Z",
    "updatedAt": "2026-08-28T00:00:00.000Z"
  },
  {
    "id": "inv-demo-166",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-10",
      "name": "Urban Bites Restaurant L.L.C",
      "accountNumber": "410",
      "trn": "100918274000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1166",
      "invoiceDate": "29-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-166-1",
        "itemNumber": 1,
        "itemCode": "RES-205",
        "description": "Spanish Saffron Super Negin 10g",
        "unit": "علبة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 2375
      },
      {
        "id": "item-166-2",
        "itemNumber": 2,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 1120
      },
      {
        "id": "item-166-3",
        "itemNumber": 3,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 6720
      }
    ],
    "totals": {
      "totalQuantity": 46,
      "subtotal": 10215,
      "discount": 0,
      "netAmount": 10215,
      "vatAmount": 510.75,
      "grandTotal": 10725.75,
      "amountInWordsArabic": "فقط 10725 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Ten Thousand Seven Hundred Twenty Five Dirhams and Seventy Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "13-09-2026",
    "paidAmount": 10725.75,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-166",
        "paymentNumber": "RCP-2026-2166",
        "invoiceId": "inv-demo-166",
        "invoiceNumber": "INV-2026-1166",
        "clientId": "cli-demo-10",
        "clientName": "Urban Bites Restaurant L.L.C",
        "amount": 10725.75,
        "paymentDate": "01-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90166",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1166",
        "createdAt": "2026-09-01T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-29T00:00:00.000Z",
    "updatedAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "inv-demo-167",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-11",
      "name": "Desert Rose Mandi & Grill",
      "accountNumber": "411",
      "trn": "100628192000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1167",
      "invoiceDate": "29-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-167-1",
        "itemNumber": 1,
        "itemCode": "RES-206",
        "description": "Extra Virgin Olive Oil 5L Tin",
        "unit": "تنكة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 160,
        "lineTotal": 480
      },
      {
        "id": "item-167-2",
        "itemNumber": 2,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 4800
      },
      {
        "id": "item-167-3",
        "itemNumber": 3,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 544
      },
      {
        "id": "item-167-4",
        "itemNumber": 4,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 912
      }
    ],
    "totals": {
      "totalQuantity": 54,
      "subtotal": 6736,
      "discount": 0,
      "netAmount": 6736,
      "vatAmount": 336.8,
      "grandTotal": 7072.8,
      "amountInWordsArabic": "فقط 7072 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Seventy Two Dirhams and Eighty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "05-09-2026",
    "paidAmount": 7072.8,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-167",
        "paymentNumber": "RCP-2026-2167",
        "invoiceId": "inv-demo-167",
        "invoiceNumber": "INV-2026-1167",
        "clientId": "cli-demo-11",
        "clientName": "Desert Rose Mandi & Grill",
        "amount": 7072.8,
        "paymentDate": "02-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90167",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1167",
        "createdAt": "2026-09-02T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-29T00:00:00.000Z",
    "updatedAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "inv-demo-168",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-12",
      "name": "Sultan Turkish Cuisine L.L.C",
      "accountNumber": "412",
      "trn": "100827192000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1168",
      "invoiceDate": "29-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-168-1",
        "itemNumber": 1,
        "itemCode": "RES-207",
        "description": "Chilled Local Lamb Carcass 12kg",
        "unit": "ذبيحة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 2880
      },
      {
        "id": "item-168-2",
        "itemNumber": 2,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 416
      }
    ],
    "totals": {
      "totalQuantity": 19,
      "subtotal": 3296,
      "discount": 0,
      "netAmount": 3296,
      "vatAmount": 164.8,
      "grandTotal": 3460.8,
      "amountInWordsArabic": "فقط 3460 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Four Hundred Sixty Dirhams and Eighty Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "13-09-2026",
    "paidAmount": 3460.8,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-168",
        "paymentNumber": "RCP-2026-2168",
        "invoiceId": "inv-demo-168",
        "invoiceNumber": "INV-2026-1168",
        "clientId": "cli-demo-12",
        "clientName": "Sultan Turkish Cuisine L.L.C",
        "amount": 3460.8,
        "paymentDate": "03-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90168",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1168",
        "createdAt": "2026-09-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-29T00:00:00.000Z",
    "updatedAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "inv-demo-169",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-13",
      "name": "Al Safeer Lebanese Kitchen",
      "accountNumber": "413",
      "trn": "100372819000003",
      "cityOrBranch": "Al Ain"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1169",
      "invoiceDate": "30-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-169-1",
        "itemNumber": 1,
        "itemCode": "RES-208",
        "description": "Halloumi Cheese Block 1kg",
        "unit": "حبة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 32,
        "lineTotal": 288
      },
      {
        "id": "item-169-2",
        "itemNumber": 2,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 608
      },
      {
        "id": "item-169-3",
        "itemNumber": 3,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 3335
      }
    ],
    "totals": {
      "totalQuantity": 48,
      "subtotal": 4231,
      "discount": 0,
      "netAmount": 4231,
      "vatAmount": 211.55,
      "grandTotal": 4442.55,
      "amountInWordsArabic": "فقط 4442 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Four Hundred Forty Two Dirhams and Fifty Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "7 Days",
    "dueDate": "06-09-2026",
    "paidAmount": 4442.55,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-169",
        "paymentNumber": "RCP-2026-2169",
        "invoiceId": "inv-demo-169",
        "invoiceNumber": "INV-2026-1169",
        "clientId": "cli-demo-13",
        "clientName": "Al Safeer Lebanese Kitchen",
        "amount": 4442.55,
        "paymentDate": "05-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90169",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1169",
        "createdAt": "2026-09-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-30T00:00:00.000Z",
    "updatedAt": "2026-08-30T00:00:00.000Z"
  },
  {
    "id": "inv-demo-170",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-14",
      "name": "Bukhara Royal Feast Restaurant",
      "accountNumber": "414",
      "trn": "100281920400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1170",
      "invoiceDate": "30-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-170-1",
        "itemNumber": 1,
        "itemCode": "RES-209",
        "description": "Peeled Garlic 5kg Vacuum Pack",
        "unit": "كيس",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 456
      },
      {
        "id": "item-170-2",
        "itemNumber": 2,
        "itemCode": "RES-201",
        "description": "Australian Wagyu Ribeye MB4/5",
        "unit": "كيلو",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 2755
      },
      {
        "id": "item-170-3",
        "itemNumber": 3,
        "itemCode": "RES-202",
        "description": "Fresh Norwegian Salmon Fillet",
        "unit": "كيلو",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 68,
        "lineTotal": 1768
      },
      {
        "id": "item-170-4",
        "itemNumber": 4,
        "itemCode": "RES-203",
        "description": "Royal Biryani Basmati Rice 25kg",
        "unit": "كيس",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 1080
      }
    ],
    "totals": {
      "totalQuantity": 65,
      "subtotal": 6059,
      "discount": 0,
      "netAmount": 6059,
      "vatAmount": 302.95,
      "grandTotal": 6361.95,
      "amountInWordsArabic": "فقط 6361 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Three Hundred Sixty One Dirhams and Ninety Five Fils Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "14-09-2026",
    "paidAmount": 6361.95,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-170",
        "paymentNumber": "RCP-2026-2170",
        "invoiceId": "inv-demo-170",
        "invoiceNumber": "INV-2026-1170",
        "clientId": "cli-demo-14",
        "clientName": "Bukhara Royal Feast Restaurant",
        "amount": 6361.95,
        "paymentDate": "01-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90170",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1170",
        "createdAt": "2026-09-01T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-30T00:00:00.000Z",
    "updatedAt": "2026-08-30T00:00:00.000Z"
  },
  {
    "id": "inv-demo-171",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-15",
      "name": "Blue Horizon Roastery & Cafe",
      "accountNumber": "415",
      "trn": "100592819000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1171",
      "invoiceDate": "30-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-171-1",
        "itemNumber": 1,
        "itemCode": "CAF-304",
        "description": "Oatly Barista Edition Oat Milk 1L x 6",
        "unit": "كرتون",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 62,
        "lineTotal": 930
      },
      {
        "id": "item-171-2",
        "itemNumber": 2,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 924
      }
    ],
    "totals": {
      "totalQuantity": 37,
      "subtotal": 1854,
      "discount": 0,
      "netAmount": 1854,
      "vatAmount": 92.7,
      "grandTotal": 1946.7,
      "amountInWordsArabic": "فقط 1946 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Nine Hundred Forty Six Dirhams and Seventy Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "06-09-2026",
    "paidAmount": 973.35,
    "dueAmount": 973.35,
    "overdueDays": 11,
    "payments": [
      {
        "id": "pay-demo-171",
        "paymentNumber": "RCP-2026-2171",
        "invoiceId": "inv-demo-171",
        "invoiceNumber": "INV-2026-1171",
        "clientId": "cli-demo-15",
        "clientName": "Blue Horizon Roastery & Cafe",
        "amount": 973.35,
        "paymentDate": "02-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90171",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1171",
        "createdAt": "2026-09-02T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-30T00:00:00.000Z",
    "updatedAt": "2026-08-30T00:00:00.000Z"
  },
  {
    "id": "inv-demo-172",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-16",
      "name": "Palm Grove Specialty Coffee",
      "accountNumber": "416",
      "trn": "100728190400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1172",
      "invoiceDate": "31-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-172-1",
        "itemNumber": 1,
        "itemCode": "CAF-305",
        "description": "Monin Vanilla Syrup 1L",
        "unit": "زجاجة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 42,
        "lineTotal": 756
      },
      {
        "id": "item-172-2",
        "itemNumber": 2,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 2750
      },
      {
        "id": "item-172-3",
        "itemNumber": 3,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 595
      }
    ],
    "totals": {
      "totalQuantity": 50,
      "subtotal": 4101,
      "discount": 0,
      "netAmount": 4101,
      "vatAmount": 205.05,
      "grandTotal": 4306.05,
      "amountInWordsArabic": "فقط 4306 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Three Hundred Six Dirhams and Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "15-09-2026",
    "paidAmount": 3014.2400000000002,
    "dueAmount": 1291.81,
    "overdueDays": 2,
    "payments": [
      {
        "id": "pay-demo-172",
        "paymentNumber": "RCP-2026-2172",
        "invoiceId": "inv-demo-172",
        "invoiceNumber": "INV-2026-1172",
        "clientId": "cli-demo-16",
        "clientName": "Palm Grove Specialty Coffee",
        "amount": 2153.03,
        "paymentDate": "04-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90172",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1172",
        "createdAt": "2026-09-04T00:00:00.000Z"
      },
      {
        "id": "pay-demo-173",
        "paymentNumber": "RCP-2026-2173",
        "invoiceId": "inv-demo-172",
        "invoiceNumber": "INV-2026-1172",
        "clientId": "cli-demo-16",
        "clientName": "Palm Grove Specialty Coffee",
        "amount": 861.21,
        "paymentDate": "09-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90173",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1172",
        "createdAt": "2026-09-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-31T00:00:00.000Z",
    "updatedAt": "2026-08-31T00:00:00.000Z"
  },
  {
    "id": "inv-demo-173",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-17",
      "name": "Desert Pearl Lounge & Cafe",
      "accountNumber": "417",
      "trn": "100819204900003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1173",
      "invoiceDate": "31-08-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-173-1",
        "itemNumber": 1,
        "itemCode": "CAF-306",
        "description": "Takeaway Double Wall Cups 12oz (500s)",
        "unit": "كرتون",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 110,
        "lineTotal": 2310
      },
      {
        "id": "item-173-2",
        "itemNumber": 2,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 255
      },
      {
        "id": "item-173-3",
        "itemNumber": 3,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 780
      },
      {
        "id": "item-173-4",
        "itemNumber": 4,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 1615
      }
    ],
    "totals": {
      "totalQuantity": 51,
      "subtotal": 4960,
      "discount": 0,
      "netAmount": 4960,
      "vatAmount": 248,
      "grandTotal": 5208,
      "amountInWordsArabic": "فقط 5208 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Two Hundred Eight Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "07-09-2026",
    "paidAmount": 2604,
    "dueAmount": 2604,
    "overdueDays": 10,
    "payments": [
      {
        "id": "pay-demo-174",
        "paymentNumber": "RCP-2026-2174",
        "invoiceId": "inv-demo-173",
        "invoiceNumber": "INV-2026-1173",
        "clientId": "cli-demo-17",
        "clientName": "Desert Pearl Lounge & Cafe",
        "amount": 2604,
        "paymentDate": "05-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90174",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1173",
        "createdAt": "2026-09-05T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-08-31T00:00:00.000Z",
    "updatedAt": "2026-08-31T00:00:00.000Z"
  },
  {
    "id": "inv-demo-174",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-18",
      "name": "Artisan Roast Cafe L.L.C",
      "accountNumber": "418",
      "trn": "100492810300003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1174",
      "invoiceDate": "01-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-174-1",
        "itemNumber": 1,
        "itemCode": "CAF-307",
        "description": "Pure Matcha Green Tea Powder 500g",
        "unit": "علبة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 85,
        "lineTotal": 2040
      },
      {
        "id": "item-174-2",
        "itemNumber": 2,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 468
      }
    ],
    "totals": {
      "totalQuantity": 30,
      "subtotal": 2508,
      "discount": 0,
      "netAmount": 2508,
      "vatAmount": 125.4,
      "grandTotal": 2633.4,
      "amountInWordsArabic": "فقط 2633 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Six Hundred Thirty Three Dirhams and Forty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "08-09-2026",
    "paidAmount": 1843.38,
    "dueAmount": 790.02,
    "overdueDays": 9,
    "payments": [
      {
        "id": "pay-demo-175",
        "paymentNumber": "RCP-2026-2175",
        "invoiceId": "inv-demo-174",
        "invoiceNumber": "INV-2026-1174",
        "clientId": "cli-demo-18",
        "clientName": "Artisan Roast Cafe L.L.C",
        "amount": 1316.7,
        "paymentDate": "07-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90175",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1174",
        "createdAt": "2026-09-07T00:00:00.000Z"
      },
      {
        "id": "pay-demo-176",
        "paymentNumber": "RCP-2026-2176",
        "invoiceId": "inv-demo-174",
        "invoiceNumber": "INV-2026-1174",
        "clientId": "cli-demo-18",
        "clientName": "Artisan Roast Cafe L.L.C",
        "amount": 526.68,
        "paymentDate": "12-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90176",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1174",
        "createdAt": "2026-09-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-01T00:00:00.000Z",
    "updatedAt": "2026-09-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-175",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-19",
      "name": "Velvet Bean Cafe & Lounge",
      "accountNumber": "419",
      "trn": "100619284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1175",
      "invoiceDate": "01-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-175-1",
        "itemNumber": 1,
        "itemCode": "CAF-301",
        "description": "Colombian Supremo Coffee Beans 1kg",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 78,
        "lineTotal": 156
      },
      {
        "id": "item-175-2",
        "itemNumber": 2,
        "itemCode": "CAF-302",
        "description": "Ethiopian Yirgacheffe Specialty 1kg",
        "unit": "كيس",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 95,
        "lineTotal": 855
      },
      {
        "id": "item-175-3",
        "itemNumber": 3,
        "itemCode": "CAF-303",
        "description": "Barista Edition Whole Milk 1L x 12",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 54,
        "lineTotal": 864
      }
    ],
    "totals": {
      "totalQuantity": 27,
      "subtotal": 1875,
      "discount": 0,
      "netAmount": 1875,
      "vatAmount": 93.75,
      "grandTotal": 1968.75,
      "amountInWordsArabic": "فقط 1968 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Nine Hundred Sixty Eight Dirhams and Seventy Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "16-09-2026",
    "paidAmount": 984.38,
    "dueAmount": 984.37,
    "overdueDays": 1,
    "payments": [
      {
        "id": "pay-demo-177",
        "paymentNumber": "RCP-2026-2177",
        "invoiceId": "inv-demo-175",
        "invoiceNumber": "INV-2026-1175",
        "clientId": "cli-demo-19",
        "clientName": "Velvet Bean Cafe & Lounge",
        "amount": 984.38,
        "paymentDate": "03-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90177",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1175",
        "createdAt": "2026-09-03T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-01T00:00:00.000Z",
    "updatedAt": "2026-09-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-176",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-20",
      "name": "Sunrise French Bakery & Patisserie",
      "accountNumber": "420",
      "trn": "100392810400003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1176",
      "invoiceDate": "01-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-176-1",
        "itemNumber": 1,
        "itemCode": "BAK-402",
        "description": "European Unsalted Butter 25kg Block",
        "unit": "كرتون",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 340,
        "lineTotal": 1700
      },
      {
        "id": "item-176-2",
        "itemNumber": 2,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 1680
      },
      {
        "id": "item-176-3",
        "itemNumber": 3,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 3705
      },
      {
        "id": "item-176-4",
        "itemNumber": 4,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 4680
      }
    ],
    "totals": {
      "totalQuantity": 62,
      "subtotal": 11765,
      "discount": 0,
      "netAmount": 11765,
      "vatAmount": 588.25,
      "grandTotal": 12353.25,
      "amountInWordsArabic": "فقط 12353 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twelve Thousand Three Hundred Fifty Three Dirhams and Twenty Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "08-09-2026",
    "paidAmount": 8647.28,
    "dueAmount": 3705.97,
    "overdueDays": 9,
    "payments": [
      {
        "id": "pay-demo-178",
        "paymentNumber": "RCP-2026-2178",
        "invoiceId": "inv-demo-176",
        "invoiceNumber": "INV-2026-1176",
        "clientId": "cli-demo-20",
        "clientName": "Sunrise French Bakery & Patisserie",
        "amount": 6176.63,
        "paymentDate": "04-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90178",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1176",
        "createdAt": "2026-09-04T00:00:00.000Z"
      },
      {
        "id": "pay-demo-179",
        "paymentNumber": "RCP-2026-2179",
        "invoiceId": "inv-demo-176",
        "invoiceNumber": "INV-2026-1176",
        "clientId": "cli-demo-20",
        "clientName": "Sunrise French Bakery & Patisserie",
        "amount": 2470.65,
        "paymentDate": "09-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90179",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1176",
        "createdAt": "2026-09-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-01T00:00:00.000Z",
    "updatedAt": "2026-09-01T00:00:00.000Z"
  },
  {
    "id": "inv-demo-177",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-21",
      "name": "Golden Wheat Artisan Bakery",
      "accountNumber": "421",
      "trn": "100482910500003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1177",
      "invoiceDate": "02-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-177-1",
        "itemNumber": 1,
        "itemCode": "BAK-403",
        "description": "Instant Dry Yeast 500g x 20",
        "unit": "كرتون",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 140,
        "lineTotal": 1120
      },
      {
        "id": "item-177-2",
        "itemNumber": 2,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 2925
      }
    ],
    "totals": {
      "totalQuantity": 23,
      "subtotal": 4045,
      "discount": 0,
      "netAmount": 4045,
      "vatAmount": 202.25,
      "grandTotal": 4247.25,
      "amountInWordsArabic": "فقط 4247 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Two Hundred Forty Seven Dirhams and Twenty Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "17-09-2026",
    "paidAmount": 2123.63,
    "dueAmount": 2123.62,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-180",
        "paymentNumber": "RCP-2026-2180",
        "invoiceId": "inv-demo-177",
        "invoiceNumber": "INV-2026-1177",
        "clientId": "cli-demo-21",
        "clientName": "Golden Wheat Artisan Bakery",
        "amount": 2123.63,
        "paymentDate": "06-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90180",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1177",
        "createdAt": "2026-09-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-02T00:00:00.000Z",
    "updatedAt": "2026-09-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-178",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-22",
      "name": "Crown Sweets & Pastries L.L.C",
      "accountNumber": "422",
      "trn": "100728194000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1178",
      "invoiceDate": "02-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-178-1",
        "itemNumber": 1,
        "itemCode": "BAK-404",
        "description": "Belgian Dark Chocolate Callets 55% 5kg",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 195,
        "lineTotal": 2145
      },
      {
        "id": "item-178-2",
        "itemNumber": 2,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 3240
      },
      {
        "id": "item-178-3",
        "itemNumber": 3,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 950
      }
    ],
    "totals": {
      "totalQuantity": 54,
      "subtotal": 6335,
      "discount": 0,
      "netAmount": 6335,
      "vatAmount": 316.75,
      "grandTotal": 6651.75,
      "amountInWordsArabic": "فقط 6651 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Six Hundred Fifty One Dirhams and Seventy Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "09-09-2026",
    "paidAmount": 4656.23,
    "dueAmount": 1995.52,
    "overdueDays": 8,
    "payments": [
      {
        "id": "pay-demo-181",
        "paymentNumber": "RCP-2026-2181",
        "invoiceId": "inv-demo-178",
        "invoiceNumber": "INV-2026-1178",
        "clientId": "cli-demo-22",
        "clientName": "Crown Sweets & Pastries L.L.C",
        "amount": 3325.88,
        "paymentDate": "07-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90181",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1178",
        "createdAt": "2026-09-07T00:00:00.000Z"
      },
      {
        "id": "pay-demo-182",
        "paymentNumber": "RCP-2026-2182",
        "invoiceId": "inv-demo-178",
        "invoiceNumber": "INV-2026-1178",
        "clientId": "cli-demo-22",
        "clientName": "Crown Sweets & Pastries L.L.C",
        "amount": 1330.35,
        "paymentDate": "12-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90182",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1178",
        "createdAt": "2026-09-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-02T00:00:00.000Z",
    "updatedAt": "2026-09-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-179",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-23",
      "name": "Maison Dorée Pastry Studio",
      "accountNumber": "423",
      "trn": "100928194000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1179",
      "invoiceDate": "02-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-179-1",
        "itemNumber": 1,
        "itemCode": "BAK-405",
        "description": "Pure Madagascar Vanilla Extract 1L",
        "unit": "زجاجة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 2520
      },
      {
        "id": "item-179-2",
        "itemNumber": 2,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 798
      },
      {
        "id": "item-179-3",
        "itemNumber": 3,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 375
      },
      {
        "id": "item-179-4",
        "itemNumber": 4,
        "itemCode": "BAK-401",
        "description": "French T55 Pastry Flour 25kg",
        "unit": "كيس",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 82,
        "lineTotal": 820
      }
    ],
    "totals": {
      "totalQuantity": 48,
      "subtotal": 4513,
      "discount": 0,
      "netAmount": 4513,
      "vatAmount": 225.65,
      "grandTotal": 4738.65,
      "amountInWordsArabic": "فقط 4738 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Seven Hundred Thirty Eight Dirhams and Sixty Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "17-09-2026",
    "paidAmount": 2369.32,
    "dueAmount": 2369.33,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-183",
        "paymentNumber": "RCP-2026-2183",
        "invoiceId": "inv-demo-179",
        "invoiceNumber": "INV-2026-1179",
        "clientId": "cli-demo-23",
        "clientName": "Maison Dorée Pastry Studio",
        "amount": 2369.32,
        "paymentDate": "08-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90183",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1179",
        "createdAt": "2026-09-08T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-02T00:00:00.000Z",
    "updatedAt": "2026-09-02T00:00:00.000Z"
  },
  {
    "id": "inv-demo-180",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-24",
      "name": "Al Barakah Arabic Bakery",
      "accountNumber": "424",
      "trn": "100294810200003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1180",
      "invoiceDate": "03-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-180-1",
        "itemNumber": 1,
        "itemCode": "BAK-406",
        "description": "Fine Powdered Icing Sugar 10kg",
        "unit": "كيس",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 38,
        "lineTotal": 646
      },
      {
        "id": "item-180-2",
        "itemNumber": 2,
        "itemCode": "BAK-407",
        "description": "Whole Raw Almonds USA 5kg",
        "unit": "كيس",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 125,
        "lineTotal": 3000
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 3646,
      "discount": 0,
      "netAmount": 3646,
      "vatAmount": 182.3,
      "grandTotal": 3828.3,
      "amountInWordsArabic": "فقط 3828 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand Eight Hundred Twenty Eight Dirhams and Thirty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "10-09-2026",
    "paidAmount": 2679.81,
    "dueAmount": 1148.49,
    "overdueDays": 7,
    "payments": [
      {
        "id": "pay-demo-184",
        "paymentNumber": "RCP-2026-2184",
        "invoiceId": "inv-demo-180",
        "invoiceNumber": "INV-2026-1180",
        "clientId": "cli-demo-24",
        "clientName": "Al Barakah Arabic Bakery",
        "amount": 1914.15,
        "paymentDate": "05-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90184",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1180",
        "createdAt": "2026-09-05T00:00:00.000Z"
      },
      {
        "id": "pay-demo-185",
        "paymentNumber": "RCP-2026-2185",
        "invoiceId": "inv-demo-180",
        "invoiceNumber": "INV-2026-1180",
        "clientId": "cli-demo-24",
        "clientName": "Al Barakah Arabic Bakery",
        "amount": 765.66,
        "paymentDate": "10-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90185",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1180",
        "createdAt": "2026-09-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-03T00:00:00.000Z",
    "updatedAt": "2026-09-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-181",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-25",
      "name": "Desert Pearl Hospitality & Catering L.L.C",
      "accountNumber": "425",
      "trn": "100819204000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1181",
      "invoiceDate": "03-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-181-1",
        "itemNumber": 1,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 9000
      },
      {
        "id": "item-181-2",
        "itemNumber": 2,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 1440
      },
      {
        "id": "item-181-3",
        "itemNumber": 3,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 3420
      }
    ],
    "totals": {
      "totalQuantity": 31,
      "subtotal": 13860,
      "discount": 0,
      "netAmount": 13860,
      "vatAmount": 693,
      "grandTotal": 14553,
      "amountInWordsArabic": "فقط 14553 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fourteen Thousand Five Hundred Fifty Three Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "03-10-2026",
    "paidAmount": 7276.5,
    "dueAmount": 7276.5,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-186",
        "paymentNumber": "RCP-2026-2186",
        "invoiceId": "inv-demo-181",
        "invoiceNumber": "INV-2026-1181",
        "clientId": "cli-demo-25",
        "clientName": "Desert Pearl Hospitality & Catering L.L.C",
        "amount": 7276.5,
        "paymentDate": "06-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90186",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1181",
        "createdAt": "2026-09-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-03T00:00:00.000Z",
    "updatedAt": "2026-09-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-182",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-26",
      "name": "Imperial Banquet Catering Services",
      "accountNumber": "426",
      "trn": "100619280400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1182",
      "invoiceDate": "03-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-182-1",
        "itemNumber": 1,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 16560
      },
      {
        "id": "item-182-2",
        "itemNumber": 2,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 1900
      },
      {
        "id": "item-182-3",
        "itemNumber": 3,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 6600
      },
      {
        "id": "item-182-4",
        "itemNumber": 4,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 7980
      }
    ],
    "totals": {
      "totalQuantity": 59,
      "subtotal": 33040,
      "discount": 0,
      "netAmount": 33040,
      "vatAmount": 1652,
      "grandTotal": 34692,
      "amountInWordsArabic": "فقط 34692 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Four Thousand Six Hundred Ninety Two Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "03-10-2026",
    "paidAmount": 24284.4,
    "dueAmount": 10407.6,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-187",
        "paymentNumber": "RCP-2026-2187",
        "invoiceId": "inv-demo-182",
        "invoiceNumber": "INV-2026-1182",
        "clientId": "cli-demo-26",
        "clientName": "Imperial Banquet Catering Services",
        "amount": 17346,
        "paymentDate": "07-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90187",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1182",
        "createdAt": "2026-09-07T00:00:00.000Z"
      },
      {
        "id": "pay-demo-188",
        "paymentNumber": "RCP-2026-2188",
        "invoiceId": "inv-demo-182",
        "invoiceNumber": "INV-2026-1182",
        "clientId": "cli-demo-26",
        "clientName": "Imperial Banquet Catering Services",
        "amount": 6938.4,
        "paymentDate": "12-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90188",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1182",
        "createdAt": "2026-09-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-03T00:00:00.000Z",
    "updatedAt": "2026-09-03T00:00:00.000Z"
  },
  {
    "id": "inv-demo-183",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-27",
      "name": "Golden Spoon Event Caterers",
      "accountNumber": "427",
      "trn": "100519284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1183",
      "invoiceDate": "04-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-183-1",
        "itemNumber": 1,
        "itemCode": "CAT-504",
        "description": "Artisan Finger Food Canape Tray (100 Pcs)",
        "unit": "صينية",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 380,
        "lineTotal": 9880
      },
      {
        "id": "item-183-2",
        "itemNumber": 2,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 4400
      }
    ],
    "totals": {
      "totalQuantity": 34,
      "subtotal": 14280,
      "discount": 0,
      "netAmount": 14280,
      "vatAmount": 714,
      "grandTotal": 14994,
      "amountInWordsArabic": "فقط 14994 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fourteen Thousand Nine Hundred Ninety Four Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "19-09-2026",
    "paidAmount": 7497,
    "dueAmount": 7497,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-189",
        "paymentNumber": "RCP-2026-2189",
        "invoiceId": "inv-demo-183",
        "invoiceNumber": "INV-2026-1183",
        "clientId": "cli-demo-27",
        "clientName": "Golden Spoon Event Caterers",
        "amount": 7497,
        "paymentDate": "09-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90189",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1183",
        "createdAt": "2026-09-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-04T00:00:00.000Z",
    "updatedAt": "2026-09-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-184",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-28",
      "name": "Royal Table Corporate Catering L.L.C",
      "accountNumber": "428",
      "trn": "100719284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1184",
      "invoiceDate": "04-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-184-1",
        "itemNumber": 1,
        "itemCode": "CAT-505",
        "description": "Fresh Tropical Fruit Display Table",
        "unit": "طاولة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 550,
        "lineTotal": 2200
      },
      {
        "id": "item-184-2",
        "itemNumber": 2,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 4620
      },
      {
        "id": "item-184-3",
        "itemNumber": 3,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 40500
      }
    ],
    "totals": {
      "totalQuantity": 33,
      "subtotal": 47320,
      "discount": 0,
      "netAmount": 47320,
      "vatAmount": 2366,
      "grandTotal": 49686,
      "amountInWordsArabic": "فقط 49686 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Nine Thousand Six Hundred Eighty Six Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "04-10-2026",
    "paidAmount": 34780.2,
    "dueAmount": 14905.8,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-190",
        "paymentNumber": "RCP-2026-2190",
        "invoiceId": "inv-demo-184",
        "invoiceNumber": "INV-2026-1184",
        "clientId": "cli-demo-28",
        "clientName": "Royal Table Corporate Catering L.L.C",
        "amount": 24843,
        "paymentDate": "10-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90190",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1184",
        "createdAt": "2026-09-10T00:00:00.000Z"
      },
      {
        "id": "pay-demo-191",
        "paymentNumber": "RCP-2026-2191",
        "invoiceId": "inv-demo-184",
        "invoiceNumber": "INV-2026-1184",
        "clientId": "cli-demo-28",
        "clientName": "Royal Table Corporate Catering L.L.C",
        "amount": 9937.2,
        "paymentDate": "15-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90191",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1184",
        "createdAt": "2026-09-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-04T00:00:00.000Z",
    "updatedAt": "2026-09-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-185",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-29",
      "name": "Gulf Feast Catering & Hospitality",
      "accountNumber": "429",
      "trn": "100419284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1185",
      "invoiceDate": "04-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-185-1",
        "itemNumber": 1,
        "itemCode": "CAT-506",
        "description": "Arabian Hospitality Coffee & Date Station",
        "unit": "محطة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 420,
        "lineTotal": 2940
      },
      {
        "id": "item-185-2",
        "itemNumber": 2,
        "itemCode": "CAT-501",
        "description": "VIP Executive Buffet Catering Package (50 Pax)",
        "unit": "حزمة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 2250,
        "lineTotal": 31500
      },
      {
        "id": "item-185-3",
        "itemNumber": 3,
        "itemCode": "CAT-502",
        "description": "Deluxe Hot Chafing Dish Station Setup",
        "unit": "طقم",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 450,
        "lineTotal": 9450
      },
      {
        "id": "item-185-4",
        "itemNumber": 4,
        "itemCode": "CAT-503",
        "description": "Corporate Bento Lunch Box Set (20 Pax)",
        "unit": "مجموعة",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 720,
        "lineTotal": 2160
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 46050,
      "discount": 0,
      "netAmount": 46050,
      "vatAmount": 2302.5,
      "grandTotal": 48352.5,
      "amountInWordsArabic": "فقط 48352 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Forty Eight Thousand Three Hundred Fifty Two Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "19-09-2026",
    "paidAmount": 24176.25,
    "dueAmount": 24176.25,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-192",
        "paymentNumber": "RCP-2026-2192",
        "invoiceId": "inv-demo-185",
        "invoiceNumber": "INV-2026-1185",
        "clientId": "cli-demo-29",
        "clientName": "Gulf Feast Catering & Hospitality",
        "amount": 24176.25,
        "paymentDate": "06-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90192",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1185",
        "createdAt": "2026-09-06T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-04T00:00:00.000Z",
    "updatedAt": "2026-09-04T00:00:00.000Z"
  },
  {
    "id": "inv-demo-186",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-30",
      "name": "Xender For Trading L.L.C",
      "accountNumber": "430",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1186",
      "invoiceDate": "05-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-186-1",
        "itemNumber": 1,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 18000
      },
      {
        "id": "item-186-2",
        "itemNumber": 2,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 33150
      }
    ],
    "totals": {
      "totalQuantity": 27,
      "subtotal": 51150,
      "discount": 0,
      "netAmount": 51150,
      "vatAmount": 2557.5,
      "grandTotal": 53707.5,
      "amountInWordsArabic": "فقط 53707 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty Three Thousand Seven Hundred Seven Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "20-09-2026",
    "paidAmount": 37595.25,
    "dueAmount": 16112.25,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-193",
        "paymentNumber": "RCP-2026-2193",
        "invoiceId": "inv-demo-186",
        "invoiceNumber": "INV-2026-1186",
        "clientId": "cli-demo-30",
        "clientName": "Xender For Trading L.L.C",
        "amount": 26853.75,
        "paymentDate": "08-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90193",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1186",
        "createdAt": "2026-09-08T00:00:00.000Z"
      },
      {
        "id": "pay-demo-194",
        "paymentNumber": "RCP-2026-2194",
        "invoiceId": "inv-demo-186",
        "invoiceNumber": "INV-2026-1186",
        "clientId": "cli-demo-30",
        "clientName": "Xender For Trading L.L.C",
        "amount": 10741.5,
        "paymentDate": "13-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90194",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1186",
        "createdAt": "2026-09-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-05T00:00:00.000Z",
    "updatedAt": "2026-09-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-187",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-31",
      "name": "Prime Global General Trading L.L.C",
      "accountNumber": "431",
      "trn": "100319284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1187",
      "invoiceDate": "05-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-187-1",
        "itemNumber": 1,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 25350
      },
      {
        "id": "item-187-2",
        "itemNumber": 2,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 42000
      },
      {
        "id": "item-187-3",
        "itemNumber": 3,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 5200
      }
    ],
    "totals": {
      "totalQuantity": 35,
      "subtotal": 72550,
      "discount": 0,
      "netAmount": 72550,
      "vatAmount": 3627.5,
      "grandTotal": 76177.5,
      "amountInWordsArabic": "فقط 76177 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventy Six Thousand One Hundred Seventy Seven Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "05-10-2026",
    "paidAmount": 38088.75,
    "dueAmount": 38088.75,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-195",
        "paymentNumber": "RCP-2026-2195",
        "invoiceId": "inv-demo-187",
        "invoiceNumber": "INV-2026-1187",
        "clientId": "cli-demo-31",
        "clientName": "Prime Global General Trading L.L.C",
        "amount": 38088.75,
        "paymentDate": "09-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90195",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1187",
        "createdAt": "2026-09-09T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-05T00:00:00.000Z",
    "updatedAt": "2026-09-05T00:00:00.000Z"
  },
  {
    "id": "inv-demo-188",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-32",
      "name": "Gulf Coast Commodities Trading",
      "accountNumber": "432",
      "trn": "100919284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1188",
      "invoiceDate": "06-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-188-1",
        "itemNumber": 1,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 33600
      },
      {
        "id": "item-188-2",
        "itemNumber": 2,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 59800
      },
      {
        "id": "item-188-3",
        "itemNumber": 3,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 11000
      },
      {
        "id": "item-188-4",
        "itemNumber": 4,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 21000
      }
    ],
    "totals": {
      "totalQuantity": 56,
      "subtotal": 125400,
      "discount": 0,
      "netAmount": 125400,
      "vatAmount": 6270,
      "grandTotal": 131670,
      "amountInWordsArabic": "فقط 131670 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Thirty One Thousand Six Hundred Seventy Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "06-10-2026",
    "paidAmount": 92169,
    "dueAmount": 39501,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-196",
        "paymentNumber": "RCP-2026-2196",
        "invoiceId": "inv-demo-188",
        "invoiceNumber": "INV-2026-1188",
        "clientId": "cli-demo-32",
        "clientName": "Gulf Coast Commodities Trading",
        "amount": 65835,
        "paymentDate": "11-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90196",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1188",
        "createdAt": "2026-09-11T00:00:00.000Z"
      },
      {
        "id": "pay-demo-197",
        "paymentNumber": "RCP-2026-2197",
        "invoiceId": "inv-demo-188",
        "invoiceNumber": "INV-2026-1188",
        "clientId": "cli-demo-32",
        "clientName": "Gulf Coast Commodities Trading",
        "amount": 26334,
        "paymentDate": "16-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90197",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1188",
        "createdAt": "2026-09-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-06T00:00:00.000Z",
    "updatedAt": "2026-09-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-189",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-33",
      "name": "Al Manar Import & Export L.L.C",
      "accountNumber": "433",
      "trn": "100819284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1189",
      "invoiceDate": "06-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-189-1",
        "itemNumber": 1,
        "itemCode": "TRD-604",
        "description": "Cavendish Green Bananas 13kg (70 Boxes)",
        "unit": "طبلية",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 2600,
        "lineTotal": 49400
      },
      {
        "id": "item-189-2",
        "itemNumber": 2,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 57200
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 106600,
      "discount": 0,
      "netAmount": 106600,
      "vatAmount": 5330,
      "grandTotal": 111930,
      "amountInWordsArabic": "فقط 111930 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Eleven Thousand Nine Hundred Thirty Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "45 Days",
    "dueDate": "13-09-2026",
    "paidAmount": 55965,
    "dueAmount": 55965,
    "overdueDays": 4,
    "payments": [
      {
        "id": "pay-demo-198",
        "paymentNumber": "RCP-2026-2198",
        "invoiceId": "inv-demo-189",
        "invoiceNumber": "INV-2026-1189",
        "clientId": "cli-demo-33",
        "clientName": "Al Manar Import & Export L.L.C",
        "amount": 55965,
        "paymentDate": "12-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90198",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1189",
        "createdAt": "2026-09-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-06T00:00:00.000Z",
    "updatedAt": "2026-09-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-190",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-34",
      "name": "Apex Foodstuff Trading FZE",
      "accountNumber": "434",
      "trn": "100219284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1190",
      "invoiceDate": "06-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-190-1",
        "itemNumber": 1,
        "itemCode": "TRD-605",
        "description": "Greenhouse Dutch Tomatoes 6kg (100 Crates)",
        "unit": "طبلية",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 2200,
        "lineTotal": 48400
      },
      {
        "id": "item-190-2",
        "itemNumber": 2,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 7000
      },
      {
        "id": "item-190-3",
        "itemNumber": 3,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 19800
      }
    ],
    "totals": {
      "totalQuantity": 37,
      "subtotal": 75200,
      "discount": 0,
      "netAmount": 75200,
      "vatAmount": 3760,
      "grandTotal": 78960,
      "amountInWordsArabic": "فقط 78960 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seventy Eight Thousand Nine Hundred Sixty Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "06-10-2026",
    "paidAmount": 55272,
    "dueAmount": 23688,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-199",
        "paymentNumber": "RCP-2026-2199",
        "invoiceId": "inv-demo-190",
        "invoiceNumber": "INV-2026-1190",
        "clientId": "cli-demo-34",
        "clientName": "Apex Foodstuff Trading FZE",
        "amount": 39480,
        "paymentDate": "08-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90199",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1190",
        "createdAt": "2026-09-08T00:00:00.000Z"
      },
      {
        "id": "pay-demo-200",
        "paymentNumber": "RCP-2026-2200",
        "invoiceId": "inv-demo-190",
        "invoiceNumber": "INV-2026-1190",
        "clientId": "cli-demo-34",
        "clientName": "Apex Foodstuff Trading FZE",
        "amount": 15792,
        "paymentDate": "13-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90200",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1190",
        "createdAt": "2026-09-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-06T00:00:00.000Z",
    "updatedAt": "2026-09-06T00:00:00.000Z"
  },
  {
    "id": "inv-demo-191",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-35",
      "name": "Horizon Agro Trading L.L.C",
      "accountNumber": "435",
      "trn": "100119284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1191",
      "invoiceDate": "07-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-191-1",
        "itemNumber": 1,
        "itemCode": "TRD-606",
        "description": "Imported Iceberg Lettuce 10kg (50 Cartons)",
        "unit": "طبلية",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 1750,
        "lineTotal": 43750
      },
      {
        "id": "item-191-2",
        "itemNumber": 2,
        "itemCode": "TRD-601",
        "description": "Wholesale Potato Bags Grade 1 (25kg x 40 Bags Pallet)",
        "unit": "طبلية",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 1800,
        "lineTotal": 12600
      },
      {
        "id": "item-191-3",
        "itemNumber": 3,
        "itemCode": "TRD-602",
        "description": "Red Onion 25kg Sacks (40 Sacks Pallet)",
        "unit": "طبلية",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 1950,
        "lineTotal": 27300
      },
      {
        "id": "item-191-4",
        "itemNumber": 4,
        "itemCode": "TRD-603",
        "description": "Egyptian Valencia Oranges Box 15kg (60 Boxes)",
        "unit": "طبلية",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 2100,
        "lineTotal": 44100
      }
    ],
    "totals": {
      "totalQuantity": 67,
      "subtotal": 127750,
      "discount": 0,
      "netAmount": 127750,
      "vatAmount": 6387.5,
      "grandTotal": 134137.5,
      "amountInWordsArabic": "فقط 134137 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Hundred Thirty Four Thousand One Hundred Thirty Seven Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "07-10-2026",
    "paidAmount": 67068.75,
    "dueAmount": 67068.75,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-201",
        "paymentNumber": "RCP-2026-2201",
        "invoiceId": "inv-demo-191",
        "invoiceNumber": "INV-2026-1191",
        "clientId": "cli-demo-35",
        "clientName": "Horizon Agro Trading L.L.C",
        "amount": 67068.75,
        "paymentDate": "10-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90201",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1191",
        "createdAt": "2026-09-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-07T00:00:00.000Z",
    "updatedAt": "2026-09-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-192",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-36",
      "name": "Marina Palm Luxury Hotel & Suites",
      "accountNumber": "436",
      "trn": "100918294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1192",
      "invoiceDate": "07-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-192-1",
        "itemNumber": 1,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 660
      },
      {
        "id": "item-192-2",
        "itemNumber": 2,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 6500
      }
    ],
    "totals": {
      "totalQuantity": 13,
      "subtotal": 7160,
      "discount": 0,
      "netAmount": 7160,
      "vatAmount": 358,
      "grandTotal": 7518,
      "amountInWordsArabic": "فقط 7518 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Thousand Five Hundred Eighteen Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "07-10-2026",
    "paidAmount": 5262.6,
    "dueAmount": 2255.4,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-202",
        "paymentNumber": "RCP-2026-2202",
        "invoiceId": "inv-demo-192",
        "invoiceNumber": "INV-2026-1192",
        "clientId": "cli-demo-36",
        "clientName": "Marina Palm Luxury Hotel & Suites",
        "amount": 3759,
        "paymentDate": "11-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90202",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1192",
        "createdAt": "2026-09-11T00:00:00.000Z"
      },
      {
        "id": "pay-demo-203",
        "paymentNumber": "RCP-2026-2203",
        "invoiceId": "inv-demo-192",
        "invoiceNumber": "INV-2026-1192",
        "clientId": "cli-demo-36",
        "clientName": "Marina Palm Luxury Hotel & Suites",
        "amount": 1503.6,
        "paymentDate": "16-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90203",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1192",
        "createdAt": "2026-09-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-07T00:00:00.000Z",
    "updatedAt": "2026-09-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-193",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-37",
      "name": "Golden Dunes Resort & Spa",
      "accountNumber": "437",
      "trn": "100418294000003",
      "cityOrBranch": "Ras Al Khaimah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1193",
      "invoiceDate": "07-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-193-1",
        "itemNumber": 1,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 3900
      },
      {
        "id": "item-193-2",
        "itemNumber": 2,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 12350
      },
      {
        "id": "item-193-3",
        "itemNumber": 3,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 17000
      }
    ],
    "totals": {
      "totalQuantity": 39,
      "subtotal": 33250,
      "discount": 0,
      "netAmount": 33250,
      "vatAmount": 1662.5,
      "grandTotal": 34912.5,
      "amountInWordsArabic": "فقط 34912 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Four Thousand Nine Hundred Twelve Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "07-10-2026",
    "paidAmount": 17456.25,
    "dueAmount": 17456.25,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-204",
        "paymentNumber": "RCP-2026-2204",
        "invoiceId": "inv-demo-193",
        "invoiceNumber": "INV-2026-1193",
        "clientId": "cli-demo-37",
        "clientName": "Golden Dunes Resort & Spa",
        "amount": 17456.25,
        "paymentDate": "12-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90204",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1193",
        "createdAt": "2026-09-12T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-07T00:00:00.000Z",
    "updatedAt": "2026-09-07T00:00:00.000Z"
  },
  {
    "id": "inv-demo-194",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-38",
      "name": "Oasis Grand Palace Hotel L.L.C",
      "accountNumber": "438",
      "trn": "100718294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1194",
      "invoiceDate": "08-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-194-1",
        "itemNumber": 1,
        "itemCode": "HTL-705",
        "description": "Conference Banquet Beverage Service (100 Pax)",
        "unit": "جلسة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 950,
        "lineTotal": 8550
      },
      {
        "id": "item-194-2",
        "itemNumber": 2,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 13600
      },
      {
        "id": "item-194-3",
        "itemNumber": 3,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 32200
      },
      {
        "id": "item-194-4",
        "itemNumber": 4,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 1100
      }
    ],
    "totals": {
      "totalQuantity": 53,
      "subtotal": 55450,
      "discount": 0,
      "netAmount": 55450,
      "vatAmount": 2772.5,
      "grandTotal": 58222.5,
      "amountInWordsArabic": "فقط 58222 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifty Eight Thousand Two Hundred Twenty Two Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "08-10-2026",
    "paidAmount": 40755.75,
    "dueAmount": 17466.75,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-205",
        "paymentNumber": "RCP-2026-2205",
        "invoiceId": "inv-demo-194",
        "invoiceNumber": "INV-2026-1194",
        "clientId": "cli-demo-38",
        "clientName": "Oasis Grand Palace Hotel L.L.C",
        "amount": 29111.25,
        "paymentDate": "14-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90205",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1194",
        "createdAt": "2026-09-14T00:00:00.000Z"
      },
      {
        "id": "pay-demo-206",
        "paymentNumber": "RCP-2026-2206",
        "invoiceId": "inv-demo-194",
        "invoiceNumber": "INV-2026-1194",
        "clientId": "cli-demo-38",
        "clientName": "Oasis Grand Palace Hotel L.L.C",
        "amount": 11644.5,
        "paymentDate": "19-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90206",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1194",
        "createdAt": "2026-09-19T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-08T00:00:00.000Z",
    "updatedAt": "2026-09-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-195",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-39",
      "name": "Sea Breeze Boutique Hotel",
      "accountNumber": "439",
      "trn": "100618294000003",
      "cityOrBranch": "Fujairah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1195",
      "invoiceDate": "08-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-195-1",
        "itemNumber": 1,
        "itemCode": "HTL-701",
        "description": "Eco-Friendly Guest Amenity Kit (500 Sets)",
        "unit": "كرتون",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 850,
        "lineTotal": 10200
      },
      {
        "id": "item-195-2",
        "itemNumber": 2,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 19,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 26600
      }
    ],
    "totals": {
      "totalQuantity": 31,
      "subtotal": 36800,
      "discount": 0,
      "netAmount": 36800,
      "vatAmount": 1840,
      "grandTotal": 38640,
      "amountInWordsArabic": "فقط 38640 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Eight Thousand Six Hundred Forty Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "23-09-2026",
    "paidAmount": 19320,
    "dueAmount": 19320,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-207",
        "paymentNumber": "RCP-2026-2207",
        "invoiceId": "inv-demo-195",
        "invoiceNumber": "INV-2026-1195",
        "clientId": "cli-demo-39",
        "clientName": "Sea Breeze Boutique Hotel",
        "amount": 19320,
        "paymentDate": "10-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90207",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1195",
        "createdAt": "2026-09-10T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-08T00:00:00.000Z",
    "updatedAt": "2026-09-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-196",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-40",
      "name": "Creek Gate Business Hotel",
      "accountNumber": "440",
      "trn": "100518294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1196",
      "invoiceDate": "08-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-196-1",
        "itemNumber": 1,
        "itemCode": "HTL-702",
        "description": "Luxury 400TC Egyptian Cotton Bed Sheet Set (20 Sets)",
        "unit": "حزمة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 1400,
        "lineTotal": 21000
      },
      {
        "id": "item-196-2",
        "itemNumber": 2,
        "itemCode": "HTL-703",
        "description": "Hotel Professional Laundry Detergent 25kg",
        "unit": "برميل",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 220,
        "lineTotal": 4840
      },
      {
        "id": "item-196-3",
        "itemNumber": 3,
        "itemCode": "HTL-704",
        "description": "VIP Arrival Fruit & Sweet Basket (10 Sets)",
        "unit": "مجموعة",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 2600
      }
    ],
    "totals": {
      "totalQuantity": 41,
      "subtotal": 28440,
      "discount": 0,
      "netAmount": 28440,
      "vatAmount": 1422,
      "grandTotal": 29862,
      "amountInWordsArabic": "فقط 29862 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Twenty Nine Thousand Eight Hundred Sixty Two Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "30 Days",
    "dueDate": "08-10-2026",
    "paidAmount": 20903.4,
    "dueAmount": 8958.6,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-208",
        "paymentNumber": "RCP-2026-2208",
        "invoiceId": "inv-demo-196",
        "invoiceNumber": "INV-2026-1196",
        "clientId": "cli-demo-40",
        "clientName": "Creek Gate Business Hotel",
        "amount": 14931,
        "paymentDate": "11-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90208",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1196",
        "createdAt": "2026-09-11T00:00:00.000Z"
      },
      {
        "id": "pay-demo-209",
        "paymentNumber": "RCP-2026-2209",
        "invoiceId": "inv-demo-196",
        "invoiceNumber": "INV-2026-1196",
        "clientId": "cli-demo-40",
        "clientName": "Creek Gate Business Hotel",
        "amount": 5972.4,
        "paymentDate": "16-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90209",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1196",
        "createdAt": "2026-09-16T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-08T00:00:00.000Z",
    "updatedAt": "2026-09-08T00:00:00.000Z"
  },
  {
    "id": "inv-demo-197",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-41",
      "name": "Al Madina Fresh Grocery",
      "accountNumber": "441",
      "trn": "100418284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1197",
      "invoiceDate": "09-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-197-1",
        "itemNumber": 1,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 2160
      },
      {
        "id": "item-197-2",
        "itemNumber": 2,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2875
      },
      {
        "id": "item-197-3",
        "itemNumber": 3,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 945
      },
      {
        "id": "item-197-4",
        "itemNumber": 4,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 672
      }
    ],
    "totals": {
      "totalQuantity": 64,
      "subtotal": 6652,
      "discount": 0,
      "netAmount": 6652,
      "vatAmount": 332.6,
      "grandTotal": 6984.6,
      "amountInWordsArabic": "فقط 6984 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Nine Hundred Eighty Four Dirhams and Sixty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "16-09-2026",
    "paidAmount": 3492.3,
    "dueAmount": 3492.3,
    "overdueDays": 1,
    "payments": [
      {
        "id": "pay-demo-210",
        "paymentNumber": "RCP-2026-2210",
        "invoiceId": "inv-demo-197",
        "invoiceNumber": "INV-2026-1197",
        "clientId": "cli-demo-41",
        "clientName": "Al Madina Fresh Grocery",
        "amount": 3492.3,
        "paymentDate": "13-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90210",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1197",
        "createdAt": "2026-09-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-09T00:00:00.000Z",
    "updatedAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-198",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-42",
      "name": "Corner Fresh Market L.L.C",
      "accountNumber": "442",
      "trn": "100318284000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1198",
      "invoiceDate": "09-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-198-1",
        "itemNumber": 1,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2415
      },
      {
        "id": "item-198-2",
        "itemNumber": 2,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 3,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 405
      }
    ],
    "totals": {
      "totalQuantity": 24,
      "subtotal": 2820,
      "discount": 0,
      "netAmount": 2820,
      "vatAmount": 141,
      "grandTotal": 2961,
      "amountInWordsArabic": "فقط 2961 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Two Thousand Nine Hundred Sixty One Dirhams Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "16-09-2026",
    "paidAmount": 2072.7,
    "dueAmount": 888.3,
    "overdueDays": 1,
    "payments": [
      {
        "id": "pay-demo-211",
        "paymentNumber": "RCP-2026-2211",
        "invoiceId": "inv-demo-198",
        "invoiceNumber": "INV-2026-1198",
        "clientId": "cli-demo-42",
        "clientName": "Corner Fresh Market L.L.C",
        "amount": 1480.5,
        "paymentDate": "14-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90211",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1198",
        "createdAt": "2026-09-14T00:00:00.000Z"
      },
      {
        "id": "pay-demo-212",
        "paymentNumber": "RCP-2026-2212",
        "invoiceId": "inv-demo-198",
        "invoiceNumber": "INV-2026-1198",
        "clientId": "cli-demo-42",
        "clientName": "Corner Fresh Market L.L.C",
        "amount": 592.2,
        "paymentDate": "19-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90212",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1198",
        "createdAt": "2026-09-19T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-09T00:00:00.000Z",
    "updatedAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-199",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-43",
      "name": "Daily Mart Grocery L.L.C",
      "accountNumber": "443",
      "trn": "100218284000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1199",
      "invoiceDate": "09-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-199-1",
        "itemNumber": 1,
        "itemCode": "GRO-805",
        "description": "Dettol Antiseptic Liquid 1L x 6",
        "unit": "كرتون",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 135,
        "lineTotal": 3240
      },
      {
        "id": "item-199-2",
        "itemNumber": 2,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 288
      },
      {
        "id": "item-199-3",
        "itemNumber": 3,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 1885
      }
    ],
    "totals": {
      "totalQuantity": 43,
      "subtotal": 5413,
      "discount": 0,
      "netAmount": 5413,
      "vatAmount": 270.65,
      "grandTotal": 5683.65,
      "amountInWordsArabic": "فقط 5683 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Five Thousand Six Hundred Eighty Three Dirhams and Sixty Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "16-09-2026",
    "paidAmount": 2841.83,
    "dueAmount": 2841.82,
    "overdueDays": 1,
    "payments": [
      {
        "id": "pay-demo-213",
        "paymentNumber": "RCP-2026-2213",
        "invoiceId": "inv-demo-199",
        "invoiceNumber": "INV-2026-1199",
        "clientId": "cli-demo-43",
        "clientName": "Daily Mart Grocery L.L.C",
        "amount": 2841.83,
        "paymentDate": "15-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "CH-REF-90213",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1199",
        "createdAt": "2026-09-15T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-09T00:00:00.000Z",
    "updatedAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "inv-demo-200",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-44",
      "name": "Al Safa Express Store",
      "accountNumber": "444",
      "trn": "100118284000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1200",
      "invoiceDate": "10-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-200-1",
        "itemNumber": 1,
        "itemCode": "GRO-801",
        "description": "Al Baker All Purpose Flour 2kg x 10",
        "unit": "كرتون",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 48,
        "lineTotal": 96
      },
      {
        "id": "item-200-2",
        "itemNumber": 2,
        "itemCode": "GRO-802",
        "description": "Lipton Yellow Label Tea 100 Bags x 12",
        "unit": "كرتون",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 145,
        "lineTotal": 1305
      },
      {
        "id": "item-200-3",
        "itemNumber": 3,
        "itemCode": "GRO-803",
        "description": "Heinz Tomato Ketchup 910g x 12",
        "unit": "كرتون",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 120,
        "lineTotal": 1920
      },
      {
        "id": "item-200-4",
        "itemNumber": 4,
        "itemCode": "GRO-804",
        "description": "Nutella Hazelnut Cocoa Spread 750g x 6",
        "unit": "كرتون",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 115,
        "lineTotal": 2645
      }
    ],
    "totals": {
      "totalQuantity": 50,
      "subtotal": 5966,
      "discount": 0,
      "netAmount": 5966,
      "vatAmount": 298.3,
      "grandTotal": 6264.3,
      "amountInWordsArabic": "فقط 6264 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Two Hundred Sixty Four Dirhams and Thirty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "7 Days",
    "dueDate": "17-09-2026",
    "paidAmount": 4385.01,
    "dueAmount": 1879.29,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-214",
        "paymentNumber": "RCP-2026-2214",
        "invoiceId": "inv-demo-200",
        "invoiceNumber": "INV-2026-1200",
        "clientId": "cli-demo-44",
        "clientName": "Al Safa Express Store",
        "amount": 3132.15,
        "paymentDate": "12-09-2026",
        "paymentMethod": "Bank Transfer",
        "referenceNumber": "BA-REF-90214",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1200",
        "createdAt": "2026-09-12T00:00:00.000Z"
      },
      {
        "id": "pay-demo-215",
        "paymentNumber": "RCP-2026-2215",
        "invoiceId": "inv-demo-200",
        "invoiceNumber": "INV-2026-1200",
        "clientId": "cli-demo-44",
        "clientName": "Al Safa Express Store",
        "amount": 1252.86,
        "paymentDate": "17-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "INSTALLMENT-2-90215",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1200",
        "createdAt": "2026-09-17T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-10T00:00:00.000Z",
    "updatedAt": "2026-09-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-201",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-45",
      "name": "Gourmet Olive & Deli Emporium",
      "accountNumber": "445",
      "trn": "100817294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1201",
      "invoiceDate": "10-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-201-1",
        "itemNumber": 1,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 825
      },
      {
        "id": "item-201-2",
        "itemNumber": 2,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 12,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 2220
      }
    ],
    "totals": {
      "totalQuantity": 17,
      "subtotal": 3045,
      "discount": 0,
      "netAmount": 3045,
      "vatAmount": 152.25,
      "grandTotal": 3197.25,
      "amountInWordsArabic": "فقط 3197 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Three Thousand One Hundred Ninety Seven Dirhams and Twenty Five Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "25-09-2026",
    "paidAmount": 1598.63,
    "dueAmount": 1598.62,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-216",
        "paymentNumber": "RCP-2026-2216",
        "invoiceId": "inv-demo-201",
        "invoiceNumber": "INV-2026-1201",
        "clientId": "cli-demo-45",
        "clientName": "Gourmet Olive & Deli Emporium",
        "amount": 1598.63,
        "paymentDate": "13-09-2026",
        "paymentMethod": "Cash",
        "referenceNumber": "CA-REF-90216",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1201",
        "createdAt": "2026-09-13T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-10T00:00:00.000Z",
    "updatedAt": "2026-09-10T00:00:00.000Z"
  },
  {
    "id": "inv-demo-202",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-46",
      "name": "Pure Organic Pantry L.L.C",
      "accountNumber": "446",
      "trn": "100717294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1202",
      "invoiceDate": "11-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-202-1",
        "itemNumber": 1,
        "itemCode": "RET-903",
        "description": "New Zealand Manuka Honey MGO 250+ 500g",
        "unit": "مرطبان",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 185,
        "lineTotal": 1480
      },
      {
        "id": "item-202-2",
        "itemNumber": 2,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 1380
      },
      {
        "id": "item-202-3",
        "itemNumber": 3,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 22,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 1650
      }
    ],
    "totals": {
      "totalQuantity": 45,
      "subtotal": 4510,
      "discount": 0,
      "netAmount": 4510,
      "vatAmount": 225.5,
      "grandTotal": 4735.5,
      "amountInWordsArabic": "فقط 4735 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Four Thousand Seven Hundred Thirty Five Dirhams and Fifty Fils Only"
    },
    "status": "PARTIALLY PAID",
    "paymentTerms": "15 Days",
    "dueDate": "26-09-2026",
    "paidAmount": 3314.85,
    "dueAmount": 1420.65,
    "overdueDays": 0,
    "payments": [
      {
        "id": "pay-demo-217",
        "paymentNumber": "RCP-2026-2217",
        "invoiceId": "inv-demo-202",
        "invoiceNumber": "INV-2026-1202",
        "clientId": "cli-demo-46",
        "clientName": "Pure Organic Pantry L.L.C",
        "amount": 2367.75,
        "paymentDate": "15-09-2026",
        "paymentMethod": "Card",
        "referenceNumber": "CA-REF-90217",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Settlement for invoice #INV-2026-1202",
        "createdAt": "2026-09-15T00:00:00.000Z"
      },
      {
        "id": "pay-demo-218",
        "paymentNumber": "RCP-2026-2218",
        "invoiceId": "inv-demo-202",
        "invoiceNumber": "INV-2026-1202",
        "clientId": "cli-demo-46",
        "clientName": "Pure Organic Pantry L.L.C",
        "amount": 947.1,
        "paymentDate": "20-09-2026",
        "paymentMethod": "Cheque",
        "referenceNumber": "INSTALLMENT-2-90218",
        "bankAccount": "Emirates NBD • Corporate AED Account",
        "notes": "Second installment for invoice #INV-2026-1202",
        "createdAt": "2026-09-20T00:00:00.000Z"
      }
    ],
    "createdAt": "2026-09-11T00:00:00.000Z",
    "updatedAt": "2026-09-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-203",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-47",
      "name": "Prime Cuts Butchery & Deli",
      "accountNumber": "447",
      "trn": "100617294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1203",
      "invoiceDate": "11-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-203-1",
        "itemNumber": 1,
        "itemCode": "RET-904",
        "description": "Scottish Smoked Salmon Sliced 500g",
        "unit": "عبوة",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 92,
        "lineTotal": 1012
      },
      {
        "id": "item-203-2",
        "itemNumber": 2,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 1350
      },
      {
        "id": "item-203-3",
        "itemNumber": 3,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 6000
      },
      {
        "id": "item-203-4",
        "itemNumber": 4,
        "itemCode": "RET-902",
        "description": "DOP Greek Feta Cheese Tub 4kg",
        "unit": "علبة",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 165,
        "lineTotal": 1155
      }
    ],
    "totals": {
      "totalQuantity": 61,
      "subtotal": 9517,
      "discount": 0,
      "netAmount": 9517,
      "vatAmount": 475.85,
      "grandTotal": 9992.85,
      "amountInWordsArabic": "فقط 9992 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Nine Thousand Nine Hundred Ninety Two Dirhams and Eighty Five Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "7 Days",
    "dueDate": "18-09-2026",
    "paidAmount": 0,
    "dueAmount": 9992.85,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-11T00:00:00.000Z",
    "updatedAt": "2026-09-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-204",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-48",
      "name": "Green Leaf Nutrition Store",
      "accountNumber": "448",
      "trn": "100517294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1204",
      "invoiceDate": "11-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-204-1",
        "itemNumber": 1,
        "itemCode": "RET-905",
        "description": "Italian Black Truffle Infused Olive Oil 250ml",
        "unit": "زجاجة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 75,
        "lineTotal": 1050
      },
      {
        "id": "item-204-2",
        "itemNumber": 2,
        "itemCode": "RET-901",
        "description": "Kalamata Greek Olives Barrel 12kg",
        "unit": "برميل",
        "quantity": 21,
        "vatPercent": 5,
        "unitPrice": 240,
        "lineTotal": 5040
      }
    ],
    "totals": {
      "totalQuantity": 35,
      "subtotal": 6090,
      "discount": 0,
      "netAmount": 6090,
      "vatAmount": 304.5,
      "grandTotal": 6394.5,
      "amountInWordsArabic": "فقط 6394 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Six Thousand Three Hundred Ninety Four Dirhams and Fifty Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "15 Days",
    "dueDate": "26-09-2026",
    "paidAmount": 0,
    "dueAmount": 6394.5,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-11T00:00:00.000Z",
    "updatedAt": "2026-09-11T00:00:00.000Z"
  },
  {
    "id": "inv-demo-205",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-49",
      "name": "SpeedLine Commercial Delivery Services",
      "accountNumber": "449",
      "trn": "100417294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1205",
      "invoiceDate": "12-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-205-1",
        "itemNumber": 1,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 3060
      },
      {
        "id": "item-205-2",
        "itemNumber": 2,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 28800
      },
      {
        "id": "item-205-3",
        "itemNumber": 3,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 6,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 2880
      }
    ],
    "totals": {
      "totalQuantity": 47,
      "subtotal": 34740,
      "discount": 0,
      "netAmount": 34740,
      "vatAmount": 1737,
      "grandTotal": 36477,
      "amountInWordsArabic": "فقط 36477 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Six Thousand Four Hundred Seventy Seven Dirhams Only"
    },
    "status": "PENDING",
    "paymentTerms": "30 Days",
    "dueDate": "12-10-2026",
    "paidAmount": 0,
    "dueAmount": 36477,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-12T00:00:00.000Z",
    "updatedAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-206",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-50",
      "name": "CleanPro Facility Management L.L.C",
      "accountNumber": "450",
      "trn": "100317294000003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1206",
      "invoiceDate": "12-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-206-1",
        "itemNumber": 1,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 24000
      },
      {
        "id": "item-206-2",
        "itemNumber": 2,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 960
      },
      {
        "id": "item-206-3",
        "itemNumber": 3,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 5850
      },
      {
        "id": "item-206-4",
        "itemNumber": 4,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 16,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 2880
      }
    ],
    "totals": {
      "totalQuantity": 47,
      "subtotal": 33690,
      "discount": 0,
      "netAmount": 33690,
      "vatAmount": 1684.5,
      "grandTotal": 35374.5,
      "amountInWordsArabic": "فقط 35374 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Five Thousand Three Hundred Seventy Four Dirhams and Fifty Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "30 Days",
    "dueDate": "12-10-2026",
    "paidAmount": 0,
    "dueAmount": 35374.5,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-12T00:00:00.000Z",
    "updatedAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-207",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-51",
      "name": "ColdChain Logistics Services L.L.C",
      "accountNumber": "451",
      "trn": "100217294000003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1207",
      "invoiceDate": "12-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-207-1",
        "itemNumber": 1,
        "itemCode": "SRV-004",
        "description": "Express Food Logistics Multi-Drop Dispatch",
        "unit": "يومية",
        "quantity": 23,
        "vatPercent": 5,
        "unitPrice": 480,
        "lineTotal": 11040
      },
      {
        "id": "item-207-2",
        "itemNumber": 2,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 5,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 3250
      }
    ],
    "totals": {
      "totalQuantity": 28,
      "subtotal": 14290,
      "discount": 0,
      "netAmount": 14290,
      "vatAmount": 714.5,
      "grandTotal": 15004.5,
      "amountInWordsArabic": "فقط 15004 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Fifteen Thousand Four Dirhams and Fifty Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "30 Days",
    "dueDate": "12-10-2026",
    "paidAmount": 0,
    "dueAmount": 15004.5,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-12T00:00:00.000Z",
    "updatedAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "inv-demo-208",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-52",
      "name": "FreshFleet Distribution Services",
      "accountNumber": "452",
      "trn": "100117294000003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1208",
      "invoiceDate": "13-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-208-1",
        "itemNumber": 1,
        "itemCode": "SRV-001",
        "description": "Reefer Temperature-Controlled Route Logistics (DXB - AUH)",
        "unit": "رحلة",
        "quantity": 26,
        "vatPercent": 5,
        "unitPrice": 650,
        "lineTotal": 16900
      },
      {
        "id": "item-208-2",
        "itemNumber": 2,
        "itemCode": "SRV-002",
        "description": "Cold Storage Warehouse Pallet Slot (Monthly Fee)",
        "unit": "طبلية/شهر",
        "quantity": 8,
        "vatPercent": 5,
        "unitPrice": 180,
        "lineTotal": 1440
      },
      {
        "id": "item-208-3",
        "itemNumber": 3,
        "itemCode": "SRV-003",
        "description": "Commercial Kitchen Sanitation & Certification Service",
        "unit": "خدمة",
        "quantity": 15,
        "vatPercent": 5,
        "unitPrice": 1200,
        "lineTotal": 18000
      }
    ],
    "totals": {
      "totalQuantity": 49,
      "subtotal": 36340,
      "discount": 0,
      "netAmount": 36340,
      "vatAmount": 1817,
      "grandTotal": 38157,
      "amountInWordsArabic": "فقط 38157 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Thirty Eight Thousand One Hundred Fifty Seven Dirhams Only"
    },
    "status": "PENDING",
    "paymentTerms": "15 Days",
    "dueDate": "28-09-2026",
    "paidAmount": 0,
    "dueAmount": 38157,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-13T00:00:00.000Z",
    "updatedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-209",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-01",
      "name": "Al Noor Supermarket L.L.C",
      "accountNumber": "401",
      "trn": "100482910400003",
      "cityOrBranch": "Abu Dhabi"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1209",
      "invoiceDate": "13-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-209-1",
        "itemNumber": 1,
        "itemCode": "SUP-110",
        "description": "Farm Fresh Eggs 30 Tray",
        "unit": "طبق",
        "quantity": 4,
        "vatPercent": 5,
        "unitPrice": 17.5,
        "lineTotal": 70
      },
      {
        "id": "item-209-2",
        "itemNumber": 2,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 11,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 313.5
      },
      {
        "id": "item-209-3",
        "itemNumber": 3,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 18,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 612
      },
      {
        "id": "item-209-4",
        "itemNumber": 4,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 25,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 287.5
      }
    ],
    "totals": {
      "totalQuantity": 58,
      "subtotal": 1283,
      "discount": 0,
      "netAmount": 1283,
      "vatAmount": 64.15,
      "grandTotal": 1347.15,
      "amountInWordsArabic": "فقط 1347 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Three Hundred Forty Seven Dirhams and Fifteen Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "15 Days",
    "dueDate": "28-09-2026",
    "paidAmount": 0,
    "dueAmount": 1347.15,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-13T00:00:00.000Z",
    "updatedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-210",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-02",
      "name": "Golden Basket Hypermarket L.L.C",
      "accountNumber": "402",
      "trn": "100294819200003",
      "cityOrBranch": "Dubai"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1210",
      "invoiceDate": "13-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-210-1",
        "itemNumber": 1,
        "itemCode": "SUP-101",
        "description": "Basmati Rice 5kg Grade A",
        "unit": "كيس",
        "quantity": 7,
        "vatPercent": 5,
        "unitPrice": 28.5,
        "lineTotal": 199.5
      },
      {
        "id": "item-210-2",
        "itemNumber": 2,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 14,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 476
      }
    ],
    "totals": {
      "totalQuantity": 21,
      "subtotal": 675.5,
      "discount": 0,
      "netAmount": 675.5,
      "vatAmount": 33.78,
      "grandTotal": 709.28,
      "amountInWordsArabic": "فقط 709 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Hundred Nine Dirhams and Twenty Eight Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "30 Days",
    "dueDate": "13-10-2026",
    "paidAmount": 0,
    "dueAmount": 709.28,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-13T00:00:00.000Z",
    "updatedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "inv-demo-211",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-03",
      "name": "Green Harvest Supermarket",
      "accountNumber": "403",
      "trn": "100839201900003",
      "cityOrBranch": "Sharjah"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1211",
      "invoiceDate": "14-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-211-1",
        "itemNumber": 1,
        "itemCode": "SUP-102",
        "description": "Sunflower Cooking Oil 5L",
        "unit": "علبة",
        "quantity": 10,
        "vatPercent": 5,
        "unitPrice": 34,
        "lineTotal": 340
      },
      {
        "id": "item-211-2",
        "itemNumber": 2,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 17,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 195.5
      },
      {
        "id": "item-211-3",
        "itemNumber": 3,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 24,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 432
      }
    ],
    "totals": {
      "totalQuantity": 51,
      "subtotal": 967.5,
      "discount": 0,
      "netAmount": 967.5,
      "vatAmount": 48.38,
      "grandTotal": 1015.88,
      "amountInWordsArabic": "فقط 1015 درهم إماراتي لاغير",
      "amountInWordsEnglish": "One Thousand Fifteen Dirhams and Eighty Eight Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "15 Days",
    "dueDate": "29-09-2026",
    "paidAmount": 0,
    "dueAmount": 1015.88,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-14T00:00:00.000Z",
    "updatedAt": "2026-09-14T00:00:00.000Z"
  },
  {
    "id": "inv-demo-212",
    "company": {
      "arabicName": "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
      "englishName": "APEX COMMERCIAL TRADING & SERVICES L.L.C",
      "mobile": "+971 50 842 1980",
      "mobileArabic": "متحرك : ٠٥٠٨٤٢١٩٨٠",
      "email": "billing@apextrading.ae",
      "phone": "+971 4 388 9200",
      "trn": "100294817200003",
      "addressArabic1": "منطقة القوز الصناعية ۳ ، دبي",
      "addressArabic2": "دولة الإمارات العربية المتحدة ، ص.ب 48920"
    },
    "customer": {
      "id": "cli-demo-04",
      "name": "Family Choice Supermarket L.L.C",
      "accountNumber": "404",
      "trn": "100382910400003",
      "cityOrBranch": "Ajman"
    },
    "meta": {
      "invoiceNumber": "INV-2026-1212",
      "invoiceDate": "14-09-2026",
      "notes": "Goods received in good condition. Standard 5% UAE VAT applied.",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-212-1",
        "itemNumber": 1,
        "itemCode": "SUP-103",
        "description": "Al Rawabi Fresh Milk 2L",
        "unit": "حبة",
        "quantity": 13,
        "vatPercent": 5,
        "unitPrice": 11.5,
        "lineTotal": 149.5
      },
      {
        "id": "item-212-2",
        "itemNumber": 2,
        "itemCode": "SUP-104",
        "description": "Russet Potatoes 10kg Bag",
        "unit": "كيس",
        "quantity": 20,
        "vatPercent": 5,
        "unitPrice": 18,
        "lineTotal": 360
      },
      {
        "id": "item-212-3",
        "itemNumber": 3,
        "itemCode": "SUP-105",
        "description": "Red Onions 10kg Mesh Bag",
        "unit": "كيس",
        "quantity": 2,
        "vatPercent": 5,
        "unitPrice": 19.5,
        "lineTotal": 39
      },
      {
        "id": "item-212-4",
        "itemNumber": 4,
        "itemCode": "SUP-106",
        "description": "Fresh Chilled Chicken 1.1kg",
        "unit": "حبة",
        "quantity": 9,
        "vatPercent": 5,
        "unitPrice": 16.5,
        "lineTotal": 148.5
      }
    ],
    "totals": {
      "totalQuantity": 44,
      "subtotal": 697,
      "discount": 0,
      "netAmount": 697,
      "vatAmount": 34.85,
      "grandTotal": 731.85,
      "amountInWordsArabic": "فقط 731 درهم إماراتي لاغير",
      "amountInWordsEnglish": "Seven Hundred Thirty One Dirhams and Eighty Five Fils Only"
    },
    "status": "PENDING",
    "paymentTerms": "7 Days",
    "dueDate": "21-09-2026",
    "paidAmount": 0,
    "dueAmount": 731.85,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-14T00:00:00.000Z",
    "updatedAt": "2026-09-14T00:00:00.000Z"
  }
];

export const DEMO_PAYMENTS: Payment[] = [
  {
    "id": "pay-demo-218",
    "paymentNumber": "RCP-2026-2218",
    "invoiceId": "inv-demo-202",
    "invoiceNumber": "INV-2026-1202",
    "clientId": "cli-demo-46",
    "clientName": "Pure Organic Pantry L.L.C",
    "amount": 947.1,
    "paymentDate": "20-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90218",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1202",
    "createdAt": "2026-09-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-206",
    "paymentNumber": "RCP-2026-2206",
    "invoiceId": "inv-demo-194",
    "invoiceNumber": "INV-2026-1194",
    "clientId": "cli-demo-38",
    "clientName": "Oasis Grand Palace Hotel L.L.C",
    "amount": 11644.5,
    "paymentDate": "19-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90206",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1194",
    "createdAt": "2026-09-19T00:00:00.000Z"
  },
  {
    "id": "pay-demo-212",
    "paymentNumber": "RCP-2026-2212",
    "invoiceId": "inv-demo-198",
    "invoiceNumber": "INV-2026-1198",
    "clientId": "cli-demo-42",
    "clientName": "Corner Fresh Market L.L.C",
    "amount": 592.2,
    "paymentDate": "19-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90212",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1198",
    "createdAt": "2026-09-19T00:00:00.000Z"
  },
  {
    "id": "pay-demo-215",
    "paymentNumber": "RCP-2026-2215",
    "invoiceId": "inv-demo-200",
    "invoiceNumber": "INV-2026-1200",
    "clientId": "cli-demo-44",
    "clientName": "Al Safa Express Store",
    "amount": 1252.86,
    "paymentDate": "17-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90215",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1200",
    "createdAt": "2026-09-17T00:00:00.000Z"
  },
  {
    "id": "pay-demo-197",
    "paymentNumber": "RCP-2026-2197",
    "invoiceId": "inv-demo-188",
    "invoiceNumber": "INV-2026-1188",
    "clientId": "cli-demo-32",
    "clientName": "Gulf Coast Commodities Trading",
    "amount": 26334,
    "paymentDate": "16-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90197",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1188",
    "createdAt": "2026-09-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-203",
    "paymentNumber": "RCP-2026-2203",
    "invoiceId": "inv-demo-192",
    "invoiceNumber": "INV-2026-1192",
    "clientId": "cli-demo-36",
    "clientName": "Marina Palm Luxury Hotel & Suites",
    "amount": 1503.6,
    "paymentDate": "16-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90203",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1192",
    "createdAt": "2026-09-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-209",
    "paymentNumber": "RCP-2026-2209",
    "invoiceId": "inv-demo-196",
    "invoiceNumber": "INV-2026-1196",
    "clientId": "cli-demo-40",
    "clientName": "Creek Gate Business Hotel",
    "amount": 5972.4,
    "paymentDate": "16-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90209",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1196",
    "createdAt": "2026-09-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-191",
    "paymentNumber": "RCP-2026-2191",
    "invoiceId": "inv-demo-184",
    "invoiceNumber": "INV-2026-1184",
    "clientId": "cli-demo-28",
    "clientName": "Royal Table Corporate Catering L.L.C",
    "amount": 9937.2,
    "paymentDate": "15-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90191",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1184",
    "createdAt": "2026-09-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-213",
    "paymentNumber": "RCP-2026-2213",
    "invoiceId": "inv-demo-199",
    "invoiceNumber": "INV-2026-1199",
    "clientId": "cli-demo-43",
    "clientName": "Daily Mart Grocery L.L.C",
    "amount": 2841.83,
    "paymentDate": "15-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90213",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1199",
    "createdAt": "2026-09-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-217",
    "paymentNumber": "RCP-2026-2217",
    "invoiceId": "inv-demo-202",
    "invoiceNumber": "INV-2026-1202",
    "clientId": "cli-demo-46",
    "clientName": "Pure Organic Pantry L.L.C",
    "amount": 2367.75,
    "paymentDate": "15-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90217",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1202",
    "createdAt": "2026-09-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-205",
    "paymentNumber": "RCP-2026-2205",
    "invoiceId": "inv-demo-194",
    "invoiceNumber": "INV-2026-1194",
    "clientId": "cli-demo-38",
    "clientName": "Oasis Grand Palace Hotel L.L.C",
    "amount": 29111.25,
    "paymentDate": "14-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90205",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1194",
    "createdAt": "2026-09-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-211",
    "paymentNumber": "RCP-2026-2211",
    "invoiceId": "inv-demo-198",
    "invoiceNumber": "INV-2026-1198",
    "clientId": "cli-demo-42",
    "clientName": "Corner Fresh Market L.L.C",
    "amount": 1480.5,
    "paymentDate": "14-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90211",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1198",
    "createdAt": "2026-09-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-194",
    "paymentNumber": "RCP-2026-2194",
    "invoiceId": "inv-demo-186",
    "invoiceNumber": "INV-2026-1186",
    "clientId": "cli-demo-30",
    "clientName": "Xender For Trading L.L.C",
    "amount": 10741.5,
    "paymentDate": "13-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90194",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1186",
    "createdAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-200",
    "paymentNumber": "RCP-2026-2200",
    "invoiceId": "inv-demo-190",
    "invoiceNumber": "INV-2026-1190",
    "clientId": "cli-demo-34",
    "clientName": "Apex Foodstuff Trading FZE",
    "amount": 15792,
    "paymentDate": "13-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90200",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1190",
    "createdAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-210",
    "paymentNumber": "RCP-2026-2210",
    "invoiceId": "inv-demo-197",
    "invoiceNumber": "INV-2026-1197",
    "clientId": "cli-demo-41",
    "clientName": "Al Madina Fresh Grocery",
    "amount": 3492.3,
    "paymentDate": "13-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90210",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1197",
    "createdAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-216",
    "paymentNumber": "RCP-2026-2216",
    "invoiceId": "inv-demo-201",
    "invoiceNumber": "INV-2026-1201",
    "clientId": "cli-demo-45",
    "clientName": "Gourmet Olive & Deli Emporium",
    "amount": 1598.63,
    "paymentDate": "13-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90216",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1201",
    "createdAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-176",
    "paymentNumber": "RCP-2026-2176",
    "invoiceId": "inv-demo-174",
    "invoiceNumber": "INV-2026-1174",
    "clientId": "cli-demo-18",
    "clientName": "Artisan Roast Cafe L.L.C",
    "amount": 526.68,
    "paymentDate": "12-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90176",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1174",
    "createdAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-182",
    "paymentNumber": "RCP-2026-2182",
    "invoiceId": "inv-demo-178",
    "invoiceNumber": "INV-2026-1178",
    "clientId": "cli-demo-22",
    "clientName": "Crown Sweets & Pastries L.L.C",
    "amount": 1330.35,
    "paymentDate": "12-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90182",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1178",
    "createdAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-188",
    "paymentNumber": "RCP-2026-2188",
    "invoiceId": "inv-demo-182",
    "invoiceNumber": "INV-2026-1182",
    "clientId": "cli-demo-26",
    "clientName": "Imperial Banquet Catering Services",
    "amount": 6938.4,
    "paymentDate": "12-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "INSTALLMENT-2-90188",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1182",
    "createdAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-198",
    "paymentNumber": "RCP-2026-2198",
    "invoiceId": "inv-demo-189",
    "invoiceNumber": "INV-2026-1189",
    "clientId": "cli-demo-33",
    "clientName": "Al Manar Import & Export L.L.C",
    "amount": 55965,
    "paymentDate": "12-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90198",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1189",
    "createdAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-204",
    "paymentNumber": "RCP-2026-2204",
    "invoiceId": "inv-demo-193",
    "invoiceNumber": "INV-2026-1193",
    "clientId": "cli-demo-37",
    "clientName": "Golden Dunes Resort & Spa",
    "amount": 17456.25,
    "paymentDate": "12-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90204",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1193",
    "createdAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-214",
    "paymentNumber": "RCP-2026-2214",
    "invoiceId": "inv-demo-200",
    "invoiceNumber": "INV-2026-1200",
    "clientId": "cli-demo-44",
    "clientName": "Al Safa Express Store",
    "amount": 3132.15,
    "paymentDate": "12-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90214",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1200",
    "createdAt": "2026-09-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-196",
    "paymentNumber": "RCP-2026-2196",
    "invoiceId": "inv-demo-188",
    "invoiceNumber": "INV-2026-1188",
    "clientId": "cli-demo-32",
    "clientName": "Gulf Coast Commodities Trading",
    "amount": 65835,
    "paymentDate": "11-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90196",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1188",
    "createdAt": "2026-09-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-202",
    "paymentNumber": "RCP-2026-2202",
    "invoiceId": "inv-demo-192",
    "invoiceNumber": "INV-2026-1192",
    "clientId": "cli-demo-36",
    "clientName": "Marina Palm Luxury Hotel & Suites",
    "amount": 3759,
    "paymentDate": "11-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90202",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1192",
    "createdAt": "2026-09-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-208",
    "paymentNumber": "RCP-2026-2208",
    "invoiceId": "inv-demo-196",
    "invoiceNumber": "INV-2026-1196",
    "clientId": "cli-demo-40",
    "clientName": "Creek Gate Business Hotel",
    "amount": 14931,
    "paymentDate": "11-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90208",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1196",
    "createdAt": "2026-09-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-185",
    "paymentNumber": "RCP-2026-2185",
    "invoiceId": "inv-demo-180",
    "invoiceNumber": "INV-2026-1180",
    "clientId": "cli-demo-24",
    "clientName": "Al Barakah Arabic Bakery",
    "amount": 765.66,
    "paymentDate": "10-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90185",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1180",
    "createdAt": "2026-09-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-190",
    "paymentNumber": "RCP-2026-2190",
    "invoiceId": "inv-demo-184",
    "invoiceNumber": "INV-2026-1184",
    "clientId": "cli-demo-28",
    "clientName": "Royal Table Corporate Catering L.L.C",
    "amount": 24843,
    "paymentDate": "10-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90190",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1184",
    "createdAt": "2026-09-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-201",
    "paymentNumber": "RCP-2026-2201",
    "invoiceId": "inv-demo-191",
    "invoiceNumber": "INV-2026-1191",
    "clientId": "cli-demo-35",
    "clientName": "Horizon Agro Trading L.L.C",
    "amount": 67068.75,
    "paymentDate": "10-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90201",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1191",
    "createdAt": "2026-09-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-207",
    "paymentNumber": "RCP-2026-2207",
    "invoiceId": "inv-demo-195",
    "invoiceNumber": "INV-2026-1195",
    "clientId": "cli-demo-39",
    "clientName": "Sea Breeze Boutique Hotel",
    "amount": 19320,
    "paymentDate": "10-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90207",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1195",
    "createdAt": "2026-09-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-173",
    "paymentNumber": "RCP-2026-2173",
    "invoiceId": "inv-demo-172",
    "invoiceNumber": "INV-2026-1172",
    "clientId": "cli-demo-16",
    "clientName": "Palm Grove Specialty Coffee",
    "amount": 861.21,
    "paymentDate": "09-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90173",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1172",
    "createdAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-179",
    "paymentNumber": "RCP-2026-2179",
    "invoiceId": "inv-demo-176",
    "invoiceNumber": "INV-2026-1176",
    "clientId": "cli-demo-20",
    "clientName": "Sunrise French Bakery & Patisserie",
    "amount": 2470.65,
    "paymentDate": "09-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "INSTALLMENT-2-90179",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Second installment for invoice #INV-2026-1176",
    "createdAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-189",
    "paymentNumber": "RCP-2026-2189",
    "invoiceId": "inv-demo-183",
    "invoiceNumber": "INV-2026-1183",
    "clientId": "cli-demo-27",
    "clientName": "Golden Spoon Event Caterers",
    "amount": 7497,
    "paymentDate": "09-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90189",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1183",
    "createdAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-195",
    "paymentNumber": "RCP-2026-2195",
    "invoiceId": "inv-demo-187",
    "invoiceNumber": "INV-2026-1187",
    "clientId": "cli-demo-31",
    "clientName": "Prime Global General Trading L.L.C",
    "amount": 38088.75,
    "paymentDate": "09-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90195",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1187",
    "createdAt": "2026-09-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-183",
    "paymentNumber": "RCP-2026-2183",
    "invoiceId": "inv-demo-179",
    "invoiceNumber": "INV-2026-1179",
    "clientId": "cli-demo-23",
    "clientName": "Maison Dorée Pastry Studio",
    "amount": 2369.32,
    "paymentDate": "08-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90183",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1179",
    "createdAt": "2026-09-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-193",
    "paymentNumber": "RCP-2026-2193",
    "invoiceId": "inv-demo-186",
    "invoiceNumber": "INV-2026-1186",
    "clientId": "cli-demo-30",
    "clientName": "Xender For Trading L.L.C",
    "amount": 26853.75,
    "paymentDate": "08-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90193",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1186",
    "createdAt": "2026-09-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-199",
    "paymentNumber": "RCP-2026-2199",
    "invoiceId": "inv-demo-190",
    "invoiceNumber": "INV-2026-1190",
    "clientId": "cli-demo-34",
    "clientName": "Apex Foodstuff Trading FZE",
    "amount": 39480,
    "paymentDate": "08-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90199",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1190",
    "createdAt": "2026-09-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-175",
    "paymentNumber": "RCP-2026-2175",
    "invoiceId": "inv-demo-174",
    "invoiceNumber": "INV-2026-1174",
    "clientId": "cli-demo-18",
    "clientName": "Artisan Roast Cafe L.L.C",
    "amount": 1316.7,
    "paymentDate": "07-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90175",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1174",
    "createdAt": "2026-09-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-181",
    "paymentNumber": "RCP-2026-2181",
    "invoiceId": "inv-demo-178",
    "invoiceNumber": "INV-2026-1178",
    "clientId": "cli-demo-22",
    "clientName": "Crown Sweets & Pastries L.L.C",
    "amount": 3325.88,
    "paymentDate": "07-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90181",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1178",
    "createdAt": "2026-09-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-187",
    "paymentNumber": "RCP-2026-2187",
    "invoiceId": "inv-demo-182",
    "invoiceNumber": "INV-2026-1182",
    "clientId": "cli-demo-26",
    "clientName": "Imperial Banquet Catering Services",
    "amount": 17346,
    "paymentDate": "07-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90187",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1182",
    "createdAt": "2026-09-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-180",
    "paymentNumber": "RCP-2026-2180",
    "invoiceId": "inv-demo-177",
    "invoiceNumber": "INV-2026-1177",
    "clientId": "cli-demo-21",
    "clientName": "Golden Wheat Artisan Bakery",
    "amount": 2123.63,
    "paymentDate": "06-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90180",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1177",
    "createdAt": "2026-09-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-186",
    "paymentNumber": "RCP-2026-2186",
    "invoiceId": "inv-demo-181",
    "invoiceNumber": "INV-2026-1181",
    "clientId": "cli-demo-25",
    "clientName": "Desert Pearl Hospitality & Catering L.L.C",
    "amount": 7276.5,
    "paymentDate": "06-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90186",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1181",
    "createdAt": "2026-09-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-192",
    "paymentNumber": "RCP-2026-2192",
    "invoiceId": "inv-demo-185",
    "invoiceNumber": "INV-2026-1185",
    "clientId": "cli-demo-29",
    "clientName": "Gulf Feast Catering & Hospitality",
    "amount": 24176.25,
    "paymentDate": "06-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90192",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1185",
    "createdAt": "2026-09-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-169",
    "paymentNumber": "RCP-2026-2169",
    "invoiceId": "inv-demo-169",
    "invoiceNumber": "INV-2026-1169",
    "clientId": "cli-demo-13",
    "clientName": "Al Safeer Lebanese Kitchen",
    "amount": 4442.55,
    "paymentDate": "05-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90169",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1169",
    "createdAt": "2026-09-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-174",
    "paymentNumber": "RCP-2026-2174",
    "invoiceId": "inv-demo-173",
    "invoiceNumber": "INV-2026-1173",
    "clientId": "cli-demo-17",
    "clientName": "Desert Pearl Lounge & Cafe",
    "amount": 2604,
    "paymentDate": "05-09-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90174",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1173",
    "createdAt": "2026-09-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-184",
    "paymentNumber": "RCP-2026-2184",
    "invoiceId": "inv-demo-180",
    "invoiceNumber": "INV-2026-1180",
    "clientId": "cli-demo-24",
    "clientName": "Al Barakah Arabic Bakery",
    "amount": 1914.15,
    "paymentDate": "05-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90184",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1180",
    "createdAt": "2026-09-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-172",
    "paymentNumber": "RCP-2026-2172",
    "invoiceId": "inv-demo-172",
    "invoiceNumber": "INV-2026-1172",
    "clientId": "cli-demo-16",
    "clientName": "Palm Grove Specialty Coffee",
    "amount": 2153.03,
    "paymentDate": "04-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90172",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1172",
    "createdAt": "2026-09-04T00:00:00.000Z"
  },
  {
    "id": "pay-demo-178",
    "paymentNumber": "RCP-2026-2178",
    "invoiceId": "inv-demo-176",
    "invoiceNumber": "INV-2026-1176",
    "clientId": "cli-demo-20",
    "clientName": "Sunrise French Bakery & Patisserie",
    "amount": 6176.63,
    "paymentDate": "04-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90178",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1176",
    "createdAt": "2026-09-04T00:00:00.000Z"
  },
  {
    "id": "pay-demo-164",
    "paymentNumber": "RCP-2026-2164",
    "invoiceId": "inv-demo-164",
    "invoiceNumber": "INV-2026-1164",
    "clientId": "cli-demo-08",
    "clientName": "Royal Garden Restaurant L.L.C",
    "amount": 9150.75,
    "paymentDate": "03-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90164",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1164",
    "createdAt": "2026-09-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-168",
    "paymentNumber": "RCP-2026-2168",
    "invoiceId": "inv-demo-168",
    "invoiceNumber": "INV-2026-1168",
    "clientId": "cli-demo-12",
    "clientName": "Sultan Turkish Cuisine L.L.C",
    "amount": 3460.8,
    "paymentDate": "03-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90168",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1168",
    "createdAt": "2026-09-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-177",
    "paymentNumber": "RCP-2026-2177",
    "invoiceId": "inv-demo-175",
    "invoiceNumber": "INV-2026-1175",
    "clientId": "cli-demo-19",
    "clientName": "Velvet Bean Cafe & Lounge",
    "amount": 984.38,
    "paymentDate": "03-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90177",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1175",
    "createdAt": "2026-09-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-163",
    "paymentNumber": "RCP-2026-2163",
    "invoiceId": "inv-demo-163",
    "invoiceNumber": "INV-2026-1163",
    "clientId": "cli-demo-07",
    "clientName": "City Star Supermarket L.L.C",
    "amount": 859.95,
    "paymentDate": "02-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90163",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1163",
    "createdAt": "2026-09-02T00:00:00.000Z"
  },
  {
    "id": "pay-demo-167",
    "paymentNumber": "RCP-2026-2167",
    "invoiceId": "inv-demo-167",
    "invoiceNumber": "INV-2026-1167",
    "clientId": "cli-demo-11",
    "clientName": "Desert Rose Mandi & Grill",
    "amount": 7072.8,
    "paymentDate": "02-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90167",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1167",
    "createdAt": "2026-09-02T00:00:00.000Z"
  },
  {
    "id": "pay-demo-171",
    "paymentNumber": "RCP-2026-2171",
    "invoiceId": "inv-demo-171",
    "invoiceNumber": "INV-2026-1171",
    "clientId": "cli-demo-15",
    "clientName": "Blue Horizon Roastery & Cafe",
    "amount": 973.35,
    "paymentDate": "02-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90171",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1171",
    "createdAt": "2026-09-02T00:00:00.000Z"
  },
  {
    "id": "pay-demo-159",
    "paymentNumber": "RCP-2026-2159",
    "invoiceId": "inv-demo-159",
    "invoiceNumber": "INV-2026-1159",
    "clientId": "cli-demo-03",
    "clientName": "Green Harvest Supermarket",
    "amount": 402.68,
    "paymentDate": "01-09-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90159",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1159",
    "createdAt": "2026-09-01T00:00:00.000Z"
  },
  {
    "id": "pay-demo-166",
    "paymentNumber": "RCP-2026-2166",
    "invoiceId": "inv-demo-166",
    "invoiceNumber": "INV-2026-1166",
    "clientId": "cli-demo-10",
    "clientName": "Urban Bites Restaurant L.L.C",
    "amount": 10725.75,
    "paymentDate": "01-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90166",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1166",
    "createdAt": "2026-09-01T00:00:00.000Z"
  },
  {
    "id": "pay-demo-170",
    "paymentNumber": "RCP-2026-2170",
    "invoiceId": "inv-demo-170",
    "invoiceNumber": "INV-2026-1170",
    "clientId": "cli-demo-14",
    "clientName": "Bukhara Royal Feast Restaurant",
    "amount": 6361.95,
    "paymentDate": "01-09-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90170",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1170",
    "createdAt": "2026-09-01T00:00:00.000Z"
  },
  {
    "id": "pay-demo-158",
    "paymentNumber": "RCP-2026-2158",
    "invoiceId": "inv-demo-158",
    "invoiceNumber": "INV-2026-1158",
    "clientId": "cli-demo-02",
    "clientName": "Golden Basket Hypermarket L.L.C",
    "amount": 1790.78,
    "paymentDate": "31-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90158",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1158",
    "createdAt": "2026-08-31T00:00:00.000Z"
  },
  {
    "id": "pay-demo-162",
    "paymentNumber": "RCP-2026-2162",
    "invoiceId": "inv-demo-162",
    "invoiceNumber": "INV-2026-1162",
    "clientId": "cli-demo-06",
    "clientName": "Emirates Fresh Mart",
    "amount": 534.98,
    "paymentDate": "31-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90162",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1162",
    "createdAt": "2026-08-31T00:00:00.000Z"
  },
  {
    "id": "pay-demo-154",
    "paymentNumber": "RCP-2026-2154",
    "invoiceId": "inv-demo-154",
    "invoiceNumber": "INV-2026-1154",
    "clientId": "cli-demo-50",
    "clientName": "CleanPro Facility Management L.L.C",
    "amount": 30271.5,
    "paymentDate": "30-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90154",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1154",
    "createdAt": "2026-08-30T00:00:00.000Z"
  },
  {
    "id": "pay-demo-161",
    "paymentNumber": "RCP-2026-2161",
    "invoiceId": "inv-demo-161",
    "invoiceNumber": "INV-2026-1161",
    "clientId": "cli-demo-05",
    "clientName": "Grand Central Mart L.L.C",
    "amount": 1138.73,
    "paymentDate": "30-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90161",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1161",
    "createdAt": "2026-08-30T00:00:00.000Z"
  },
  {
    "id": "pay-demo-165",
    "paymentNumber": "RCP-2026-2165",
    "invoiceId": "inv-demo-165",
    "invoiceNumber": "INV-2026-1165",
    "clientId": "cli-demo-09",
    "clientName": "Ocean View Seafood Restaurant",
    "amount": 3055.5,
    "paymentDate": "30-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90165",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1165",
    "createdAt": "2026-08-30T00:00:00.000Z"
  },
  {
    "id": "pay-demo-149",
    "paymentNumber": "RCP-2026-2149",
    "invoiceId": "inv-demo-149",
    "invoiceNumber": "INV-2026-1149",
    "clientId": "cli-demo-45",
    "clientName": "Gourmet Olive & Deli Emporium",
    "amount": 9539.25,
    "paymentDate": "29-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90149",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1149",
    "createdAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-153",
    "paymentNumber": "RCP-2026-2153",
    "invoiceId": "inv-demo-153",
    "invoiceNumber": "INV-2026-1153",
    "clientId": "cli-demo-49",
    "clientName": "SpeedLine Commercial Delivery Services",
    "amount": 24759,
    "paymentDate": "29-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90153",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1153",
    "createdAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-157",
    "paymentNumber": "RCP-2026-2157",
    "invoiceId": "inv-demo-157",
    "invoiceNumber": "INV-2026-1157",
    "clientId": "cli-demo-01",
    "clientName": "Al Noor Supermarket L.L.C",
    "amount": 1313.55,
    "paymentDate": "29-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90157",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1157",
    "createdAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-160",
    "paymentNumber": "RCP-2026-2160",
    "invoiceId": "inv-demo-160",
    "invoiceNumber": "INV-2026-1160",
    "clientId": "cli-demo-04",
    "clientName": "Family Choice Supermarket L.L.C",
    "amount": 962.85,
    "paymentDate": "29-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90160",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1160",
    "createdAt": "2026-08-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-152",
    "paymentNumber": "RCP-2026-2152",
    "invoiceId": "inv-demo-152",
    "invoiceNumber": "INV-2026-1152",
    "clientId": "cli-demo-48",
    "clientName": "Green Leaf Nutrition Store",
    "amount": 5743.5,
    "paymentDate": "28-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90152",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1152",
    "createdAt": "2026-08-28T00:00:00.000Z"
  },
  {
    "id": "pay-demo-156",
    "paymentNumber": "RCP-2026-2156",
    "invoiceId": "inv-demo-156",
    "invoiceNumber": "INV-2026-1156",
    "clientId": "cli-demo-52",
    "clientName": "FreshFleet Distribution Services",
    "amount": 14028,
    "paymentDate": "28-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90156",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1156",
    "createdAt": "2026-08-28T00:00:00.000Z"
  },
  {
    "id": "pay-demo-144",
    "paymentNumber": "RCP-2026-2144",
    "invoiceId": "inv-demo-144",
    "invoiceNumber": "INV-2026-1144",
    "clientId": "cli-demo-40",
    "clientName": "Creek Gate Business Hotel",
    "amount": 23257.5,
    "paymentDate": "27-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90144",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1144",
    "createdAt": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "pay-demo-148",
    "paymentNumber": "RCP-2026-2148",
    "invoiceId": "inv-demo-148",
    "invoiceNumber": "INV-2026-1148",
    "clientId": "cli-demo-44",
    "clientName": "Al Safa Express Store",
    "amount": 3465,
    "paymentDate": "27-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90148",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1148",
    "createdAt": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "pay-demo-155",
    "paymentNumber": "RCP-2026-2155",
    "invoiceId": "inv-demo-155",
    "invoiceNumber": "INV-2026-1155",
    "clientId": "cli-demo-51",
    "clientName": "ColdChain Logistics Services L.L.C",
    "amount": 42462,
    "paymentDate": "27-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90155",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1155",
    "createdAt": "2026-08-27T00:00:00.000Z"
  },
  {
    "id": "pay-demo-147",
    "paymentNumber": "RCP-2026-2147",
    "invoiceId": "inv-demo-147",
    "invoiceNumber": "INV-2026-1147",
    "clientId": "cli-demo-43",
    "clientName": "Daily Mart Grocery L.L.C",
    "amount": 5286.75,
    "paymentDate": "26-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90147",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1147",
    "createdAt": "2026-08-26T00:00:00.000Z"
  },
  {
    "id": "pay-demo-151",
    "paymentNumber": "RCP-2026-2151",
    "invoiceId": "inv-demo-151",
    "invoiceNumber": "INV-2026-1151",
    "clientId": "cli-demo-47",
    "clientName": "Prime Cuts Butchery & Deli",
    "amount": 5032.65,
    "paymentDate": "26-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90151",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1151",
    "createdAt": "2026-08-26T00:00:00.000Z"
  },
  {
    "id": "pay-demo-139",
    "paymentNumber": "RCP-2026-2139",
    "invoiceId": "inv-demo-139",
    "invoiceNumber": "INV-2026-1139",
    "clientId": "cli-demo-35",
    "clientName": "Horizon Agro Trading L.L.C",
    "amount": 118072.5,
    "paymentDate": "25-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90139",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1139",
    "createdAt": "2026-08-25T00:00:00.000Z"
  },
  {
    "id": "pay-demo-143",
    "paymentNumber": "RCP-2026-2143",
    "invoiceId": "inv-demo-143",
    "invoiceNumber": "INV-2026-1143",
    "clientId": "cli-demo-39",
    "clientName": "Sea Breeze Boutique Hotel",
    "amount": 37852.5,
    "paymentDate": "25-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90143",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1143",
    "createdAt": "2026-08-25T00:00:00.000Z"
  },
  {
    "id": "pay-demo-150",
    "paymentNumber": "RCP-2026-2150",
    "invoiceId": "inv-demo-150",
    "invoiceNumber": "INV-2026-1150",
    "clientId": "cli-demo-46",
    "clientName": "Pure Organic Pantry L.L.C",
    "amount": 2063.25,
    "paymentDate": "25-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90150",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1150",
    "createdAt": "2026-08-25T00:00:00.000Z"
  },
  {
    "id": "pay-demo-138",
    "paymentNumber": "RCP-2026-2138",
    "invoiceId": "inv-demo-138",
    "invoiceNumber": "INV-2026-1138",
    "clientId": "cli-demo-34",
    "clientName": "Apex Foodstuff Trading FZE",
    "amount": 77332.5,
    "paymentDate": "24-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90138",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1138",
    "createdAt": "2026-08-24T00:00:00.000Z"
  },
  {
    "id": "pay-demo-142",
    "paymentNumber": "RCP-2026-2142",
    "invoiceId": "inv-demo-142",
    "invoiceNumber": "INV-2026-1142",
    "clientId": "cli-demo-38",
    "clientName": "Oasis Grand Palace Hotel L.L.C",
    "amount": 24475.5,
    "paymentDate": "24-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90142",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1142",
    "createdAt": "2026-08-24T00:00:00.000Z"
  },
  {
    "id": "pay-demo-146",
    "paymentNumber": "RCP-2026-2146",
    "invoiceId": "inv-demo-146",
    "invoiceNumber": "INV-2026-1146",
    "clientId": "cli-demo-42",
    "clientName": "Corner Fresh Market L.L.C",
    "amount": 7098,
    "paymentDate": "24-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90146",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1146",
    "createdAt": "2026-08-24T00:00:00.000Z"
  },
  {
    "id": "pay-demo-134",
    "paymentNumber": "RCP-2026-2134",
    "invoiceId": "inv-demo-134",
    "invoiceNumber": "INV-2026-1134",
    "clientId": "cli-demo-30",
    "clientName": "Xender For Trading L.L.C",
    "amount": 126367.5,
    "paymentDate": "23-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90134",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1134",
    "createdAt": "2026-08-23T00:00:00.000Z"
  },
  {
    "id": "pay-demo-141",
    "paymentNumber": "RCP-2026-2141",
    "invoiceId": "inv-demo-141",
    "invoiceNumber": "INV-2026-1141",
    "clientId": "cli-demo-37",
    "clientName": "Golden Dunes Resort & Spa",
    "amount": 38367,
    "paymentDate": "23-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90141",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1141",
    "createdAt": "2026-08-23T00:00:00.000Z"
  },
  {
    "id": "pay-demo-145",
    "paymentNumber": "RCP-2026-2145",
    "invoiceId": "inv-demo-145",
    "invoiceNumber": "INV-2026-1145",
    "clientId": "cli-demo-41",
    "clientName": "Al Madina Fresh Grocery",
    "amount": 6773.55,
    "paymentDate": "23-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90145",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1145",
    "createdAt": "2026-08-23T00:00:00.000Z"
  },
  {
    "id": "pay-demo-133",
    "paymentNumber": "RCP-2026-2133",
    "invoiceId": "inv-demo-133",
    "invoiceNumber": "INV-2026-1133",
    "clientId": "cli-demo-29",
    "clientName": "Gulf Feast Catering & Hospitality",
    "amount": 24318,
    "paymentDate": "22-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90133",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1133",
    "createdAt": "2026-08-22T00:00:00.000Z"
  },
  {
    "id": "pay-demo-137",
    "paymentNumber": "RCP-2026-2137",
    "invoiceId": "inv-demo-137",
    "invoiceNumber": "INV-2026-1137",
    "clientId": "cli-demo-33",
    "clientName": "Al Manar Import & Export L.L.C",
    "amount": 85627.5,
    "paymentDate": "22-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90137",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1137",
    "createdAt": "2026-08-22T00:00:00.000Z"
  },
  {
    "id": "pay-demo-129",
    "paymentNumber": "RCP-2026-2129",
    "invoiceId": "inv-demo-129",
    "invoiceNumber": "INV-2026-1129",
    "clientId": "cli-demo-25",
    "clientName": "Desert Pearl Hospitality & Catering L.L.C",
    "amount": 17713.5,
    "paymentDate": "21-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90129",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1129",
    "createdAt": "2026-08-21T00:00:00.000Z"
  },
  {
    "id": "pay-demo-136",
    "paymentNumber": "RCP-2026-2136",
    "invoiceId": "inv-demo-136",
    "invoiceNumber": "INV-2026-1136",
    "clientId": "cli-demo-32",
    "clientName": "Gulf Coast Commodities Trading",
    "amount": 99697.5,
    "paymentDate": "21-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90136",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1136",
    "createdAt": "2026-08-21T00:00:00.000Z"
  },
  {
    "id": "pay-demo-140",
    "paymentNumber": "RCP-2026-2140",
    "invoiceId": "inv-demo-140",
    "invoiceNumber": "INV-2026-1140",
    "clientId": "cli-demo-36",
    "clientName": "Marina Palm Luxury Hotel & Suites",
    "amount": 40341,
    "paymentDate": "21-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90140",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1140",
    "createdAt": "2026-08-21T00:00:00.000Z"
  },
  {
    "id": "pay-demo-124",
    "paymentNumber": "RCP-2026-2124",
    "invoiceId": "inv-demo-124",
    "invoiceNumber": "INV-2026-1124",
    "clientId": "cli-demo-20",
    "clientName": "Sunrise French Bakery & Patisserie",
    "amount": 2864.4,
    "paymentDate": "20-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90124",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1124",
    "createdAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-128",
    "paymentNumber": "RCP-2026-2128",
    "invoiceId": "inv-demo-128",
    "invoiceNumber": "INV-2026-1128",
    "clientId": "cli-demo-24",
    "clientName": "Al Barakah Arabic Bakery",
    "amount": 10306.8,
    "paymentDate": "20-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90128",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1128",
    "createdAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-132",
    "paymentNumber": "RCP-2026-2132",
    "invoiceId": "inv-demo-132",
    "invoiceNumber": "INV-2026-1132",
    "clientId": "cli-demo-28",
    "clientName": "Royal Table Corporate Catering L.L.C",
    "amount": 56700,
    "paymentDate": "20-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90132",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1132",
    "createdAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-135",
    "paymentNumber": "RCP-2026-2135",
    "invoiceId": "inv-demo-135",
    "invoiceNumber": "INV-2026-1135",
    "clientId": "cli-demo-31",
    "clientName": "Prime Global General Trading L.L.C",
    "amount": 51450,
    "paymentDate": "20-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90135",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1135",
    "createdAt": "2026-08-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-127",
    "paymentNumber": "RCP-2026-2127",
    "invoiceId": "inv-demo-127",
    "invoiceNumber": "INV-2026-1127",
    "clientId": "cli-demo-23",
    "clientName": "Maison Dorée Pastry Studio",
    "amount": 9565.5,
    "paymentDate": "19-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90127",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1127",
    "createdAt": "2026-08-19T00:00:00.000Z"
  },
  {
    "id": "pay-demo-131",
    "paymentNumber": "RCP-2026-2131",
    "invoiceId": "inv-demo-131",
    "invoiceNumber": "INV-2026-1131",
    "clientId": "cli-demo-27",
    "clientName": "Golden Spoon Event Caterers",
    "amount": 29893.5,
    "paymentDate": "19-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90131",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1131",
    "createdAt": "2026-08-19T00:00:00.000Z"
  },
  {
    "id": "pay-demo-119",
    "paymentNumber": "RCP-2026-2119",
    "invoiceId": "inv-demo-119",
    "invoiceNumber": "INV-2026-1119",
    "clientId": "cli-demo-15",
    "clientName": "Blue Horizon Roastery & Cafe",
    "amount": 3962.7,
    "paymentDate": "18-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90119",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1119",
    "createdAt": "2026-08-18T00:00:00.000Z"
  },
  {
    "id": "pay-demo-123",
    "paymentNumber": "RCP-2026-2123",
    "invoiceId": "inv-demo-123",
    "invoiceNumber": "INV-2026-1123",
    "clientId": "cli-demo-19",
    "clientName": "Velvet Bean Cafe & Lounge",
    "amount": 1272.6,
    "paymentDate": "18-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90123",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1123",
    "createdAt": "2026-08-18T00:00:00.000Z"
  },
  {
    "id": "pay-demo-130",
    "paymentNumber": "RCP-2026-2130",
    "invoiceId": "inv-demo-130",
    "invoiceNumber": "INV-2026-1130",
    "clientId": "cli-demo-26",
    "clientName": "Imperial Banquet Catering Services",
    "amount": 34576.5,
    "paymentDate": "18-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90130",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1130",
    "createdAt": "2026-08-18T00:00:00.000Z"
  },
  {
    "id": "pay-demo-122",
    "paymentNumber": "RCP-2026-2122",
    "invoiceId": "inv-demo-122",
    "invoiceNumber": "INV-2026-1122",
    "clientId": "cli-demo-18",
    "clientName": "Artisan Roast Cafe L.L.C",
    "amount": 4332.3,
    "paymentDate": "17-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90122",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1122",
    "createdAt": "2026-08-17T00:00:00.000Z"
  },
  {
    "id": "pay-demo-126",
    "paymentNumber": "RCP-2026-2126",
    "invoiceId": "inv-demo-126",
    "invoiceNumber": "INV-2026-1126",
    "clientId": "cli-demo-22",
    "clientName": "Crown Sweets & Pastries L.L.C",
    "amount": 4714.5,
    "paymentDate": "17-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90126",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1126",
    "createdAt": "2026-08-17T00:00:00.000Z"
  },
  {
    "id": "pay-demo-114",
    "paymentNumber": "RCP-2026-2114",
    "invoiceId": "inv-demo-114",
    "invoiceNumber": "INV-2026-1114",
    "clientId": "cli-demo-10",
    "clientName": "Urban Bites Restaurant L.L.C",
    "amount": 10449.6,
    "paymentDate": "16-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90114",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1114",
    "createdAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-118",
    "paymentNumber": "RCP-2026-2118",
    "invoiceId": "inv-demo-118",
    "invoiceNumber": "INV-2026-1118",
    "clientId": "cli-demo-14",
    "clientName": "Bukhara Royal Feast Restaurant",
    "amount": 4686.15,
    "paymentDate": "16-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90118",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1118",
    "createdAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-121",
    "paymentNumber": "RCP-2026-2121",
    "invoiceId": "inv-demo-121",
    "invoiceNumber": "INV-2026-1121",
    "clientId": "cli-demo-17",
    "clientName": "Desert Pearl Lounge & Cafe",
    "amount": 2459.1,
    "paymentDate": "16-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90121",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1121",
    "createdAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-125",
    "paymentNumber": "RCP-2026-2125",
    "invoiceId": "inv-demo-125",
    "invoiceNumber": "INV-2026-1125",
    "clientId": "cli-demo-21",
    "clientName": "Golden Wheat Artisan Bakery",
    "amount": 10130.4,
    "paymentDate": "16-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90125",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1125",
    "createdAt": "2026-08-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-113",
    "paymentNumber": "RCP-2026-2113",
    "invoiceId": "inv-demo-113",
    "invoiceNumber": "INV-2026-1113",
    "clientId": "cli-demo-09",
    "clientName": "Ocean View Seafood Restaurant",
    "amount": 14926.8,
    "paymentDate": "15-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90113",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1113",
    "createdAt": "2026-08-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-117",
    "paymentNumber": "RCP-2026-2117",
    "invoiceId": "inv-demo-117",
    "invoiceNumber": "INV-2026-1117",
    "clientId": "cli-demo-13",
    "clientName": "Al Safeer Lebanese Kitchen",
    "amount": 1170.75,
    "paymentDate": "15-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90117",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1117",
    "createdAt": "2026-08-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-109",
    "paymentNumber": "RCP-2026-2109",
    "invoiceId": "inv-demo-109",
    "invoiceNumber": "INV-2026-1109",
    "clientId": "cli-demo-05",
    "clientName": "Grand Central Mart L.L.C",
    "amount": 1045.28,
    "paymentDate": "14-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90109",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1109",
    "createdAt": "2026-08-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-116",
    "paymentNumber": "RCP-2026-2116",
    "invoiceId": "inv-demo-116",
    "invoiceNumber": "INV-2026-1116",
    "clientId": "cli-demo-12",
    "clientName": "Sultan Turkish Cuisine L.L.C",
    "amount": 6039.6,
    "paymentDate": "14-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90116",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1116",
    "createdAt": "2026-08-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-120",
    "paymentNumber": "RCP-2026-2120",
    "invoiceId": "inv-demo-120",
    "invoiceNumber": "INV-2026-1120",
    "clientId": "cli-demo-16",
    "clientName": "Palm Grove Specialty Coffee",
    "amount": 2274.3,
    "paymentDate": "14-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90120",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1120",
    "createdAt": "2026-08-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-108",
    "paymentNumber": "RCP-2026-2108",
    "invoiceId": "inv-demo-108",
    "invoiceNumber": "INV-2026-1108",
    "clientId": "cli-demo-04",
    "clientName": "Family Choice Supermarket L.L.C",
    "amount": 556.5,
    "paymentDate": "13-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90108",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1108",
    "createdAt": "2026-08-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-112",
    "paymentNumber": "RCP-2026-2112",
    "invoiceId": "inv-demo-112",
    "invoiceNumber": "INV-2026-1112",
    "clientId": "cli-demo-08",
    "clientName": "Royal Garden Restaurant L.L.C",
    "amount": 5664.75,
    "paymentDate": "13-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90112",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1112",
    "createdAt": "2026-08-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-104",
    "paymentNumber": "RCP-2026-2104",
    "invoiceId": "inv-demo-104",
    "invoiceNumber": "INV-2026-1104",
    "clientId": "cli-demo-52",
    "clientName": "FreshFleet Distribution Services",
    "amount": 22344,
    "paymentDate": "12-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90104",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1104",
    "createdAt": "2026-08-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-107",
    "paymentNumber": "RCP-2026-2107",
    "invoiceId": "inv-demo-107",
    "invoiceNumber": "INV-2026-1107",
    "clientId": "cli-demo-03",
    "clientName": "Green Harvest Supermarket",
    "amount": 1882.13,
    "paymentDate": "12-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90107",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1107",
    "createdAt": "2026-08-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-111",
    "paymentNumber": "RCP-2026-2111",
    "invoiceId": "inv-demo-111",
    "invoiceNumber": "INV-2026-1111",
    "clientId": "cli-demo-07",
    "clientName": "City Star Supermarket L.L.C",
    "amount": 562.28,
    "paymentDate": "12-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90111",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1111",
    "createdAt": "2026-08-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-115",
    "paymentNumber": "RCP-2026-2115",
    "invoiceId": "inv-demo-115",
    "invoiceNumber": "INV-2026-1115",
    "clientId": "cli-demo-11",
    "clientName": "Desert Rose Mandi & Grill",
    "amount": 2573.55,
    "paymentDate": "12-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90115",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1115",
    "createdAt": "2026-08-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-099",
    "paymentNumber": "RCP-2026-2099",
    "invoiceId": "inv-demo-99",
    "invoiceNumber": "INV-2026-1099",
    "clientId": "cli-demo-47",
    "clientName": "Prime Cuts Butchery & Deli",
    "amount": 3402,
    "paymentDate": "11-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90099",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1099",
    "createdAt": "2026-08-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-103",
    "paymentNumber": "RCP-2026-2103",
    "invoiceId": "inv-demo-103",
    "invoiceNumber": "INV-2026-1103",
    "clientId": "cli-demo-51",
    "clientName": "ColdChain Logistics Services L.L.C",
    "amount": 22554,
    "paymentDate": "11-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90103",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1103",
    "createdAt": "2026-08-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-110",
    "paymentNumber": "RCP-2026-2110",
    "invoiceId": "inv-demo-110",
    "invoiceNumber": "INV-2026-1110",
    "clientId": "cli-demo-06",
    "clientName": "Emirates Fresh Mart",
    "amount": 1019.55,
    "paymentDate": "11-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90110",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1110",
    "createdAt": "2026-08-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-102",
    "paymentNumber": "RCP-2026-2102",
    "invoiceId": "inv-demo-102",
    "invoiceNumber": "INV-2026-1102",
    "clientId": "cli-demo-50",
    "clientName": "CleanPro Facility Management L.L.C",
    "amount": 17640,
    "paymentDate": "10-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90102",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1102",
    "createdAt": "2026-08-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-106",
    "paymentNumber": "RCP-2026-2106",
    "invoiceId": "inv-demo-106",
    "invoiceNumber": "INV-2026-1106",
    "clientId": "cli-demo-02",
    "clientName": "Golden Basket Hypermarket L.L.C",
    "amount": 408.45,
    "paymentDate": "10-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90106",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1106",
    "createdAt": "2026-08-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-094",
    "paymentNumber": "RCP-2026-2094",
    "invoiceId": "inv-demo-94",
    "invoiceNumber": "INV-2026-1094",
    "clientId": "cli-demo-42",
    "clientName": "Corner Fresh Market L.L.C",
    "amount": 5583.9,
    "paymentDate": "09-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90094",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1094",
    "createdAt": "2026-08-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-098",
    "paymentNumber": "RCP-2026-2098",
    "invoiceId": "inv-demo-98",
    "invoiceNumber": "INV-2026-1098",
    "clientId": "cli-demo-46",
    "clientName": "Pure Organic Pantry L.L.C",
    "amount": 7730.1,
    "paymentDate": "09-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90098",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1098",
    "createdAt": "2026-08-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-105",
    "paymentNumber": "RCP-2026-2105",
    "invoiceId": "inv-demo-105",
    "invoiceNumber": "INV-2026-1105",
    "clientId": "cli-demo-01",
    "clientName": "Al Noor Supermarket L.L.C",
    "amount": 508.73,
    "paymentDate": "09-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90105",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1105",
    "createdAt": "2026-08-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-097",
    "paymentNumber": "RCP-2026-2097",
    "invoiceId": "inv-demo-97",
    "invoiceNumber": "INV-2026-1097",
    "clientId": "cli-demo-45",
    "clientName": "Gourmet Olive & Deli Emporium",
    "amount": 6462.75,
    "paymentDate": "08-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90097",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1097",
    "createdAt": "2026-08-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-101",
    "paymentNumber": "RCP-2026-2101",
    "invoiceId": "inv-demo-101",
    "invoiceNumber": "INV-2026-1101",
    "clientId": "cli-demo-49",
    "clientName": "SpeedLine Commercial Delivery Services",
    "amount": 43386,
    "paymentDate": "08-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90101",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1101",
    "createdAt": "2026-08-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-089",
    "paymentNumber": "RCP-2026-2089",
    "invoiceId": "inv-demo-89",
    "invoiceNumber": "INV-2026-1089",
    "clientId": "cli-demo-37",
    "clientName": "Golden Dunes Resort & Spa",
    "amount": 57382.5,
    "paymentDate": "07-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90089",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1089",
    "createdAt": "2026-08-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-093",
    "paymentNumber": "RCP-2026-2093",
    "invoiceId": "inv-demo-93",
    "invoiceNumber": "INV-2026-1093",
    "clientId": "cli-demo-41",
    "clientName": "Al Madina Fresh Grocery",
    "amount": 2567.25,
    "paymentDate": "07-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90093",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1093",
    "createdAt": "2026-08-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-096",
    "paymentNumber": "RCP-2026-2096",
    "invoiceId": "inv-demo-96",
    "invoiceNumber": "INV-2026-1096",
    "clientId": "cli-demo-44",
    "clientName": "Al Safa Express Store",
    "amount": 5055.75,
    "paymentDate": "07-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90096",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1096",
    "createdAt": "2026-08-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-100",
    "paymentNumber": "RCP-2026-2100",
    "invoiceId": "inv-demo-100",
    "invoiceNumber": "INV-2026-1100",
    "clientId": "cli-demo-48",
    "clientName": "Green Leaf Nutrition Store",
    "amount": 5171.25,
    "paymentDate": "07-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90100",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1100",
    "createdAt": "2026-08-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-088",
    "paymentNumber": "RCP-2026-2088",
    "invoiceId": "inv-demo-88",
    "invoiceNumber": "INV-2026-1088",
    "clientId": "cli-demo-36",
    "clientName": "Marina Palm Luxury Hotel & Suites",
    "amount": 38325,
    "paymentDate": "06-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90088",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1088",
    "createdAt": "2026-08-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-092",
    "paymentNumber": "RCP-2026-2092",
    "invoiceId": "inv-demo-92",
    "invoiceNumber": "INV-2026-1092",
    "clientId": "cli-demo-40",
    "clientName": "Creek Gate Business Hotel",
    "amount": 45895.5,
    "paymentDate": "06-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90092",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1092",
    "createdAt": "2026-08-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-084",
    "paymentNumber": "RCP-2026-2084",
    "invoiceId": "inv-demo-84",
    "invoiceNumber": "INV-2026-1084",
    "clientId": "cli-demo-32",
    "clientName": "Gulf Coast Commodities Trading",
    "amount": 30082.5,
    "paymentDate": "05-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90084",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1084",
    "createdAt": "2026-08-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-091",
    "paymentNumber": "RCP-2026-2091",
    "invoiceId": "inv-demo-91",
    "invoiceNumber": "INV-2026-1091",
    "clientId": "cli-demo-39",
    "clientName": "Sea Breeze Boutique Hotel",
    "amount": 47922,
    "paymentDate": "05-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90091",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1091",
    "createdAt": "2026-08-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-095",
    "paymentNumber": "RCP-2026-2095",
    "invoiceId": "inv-demo-95",
    "invoiceNumber": "INV-2026-1095",
    "clientId": "cli-demo-43",
    "clientName": "Daily Mart Grocery L.L.C",
    "amount": 7739.55,
    "paymentDate": "05-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90095",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1095",
    "createdAt": "2026-08-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-083",
    "paymentNumber": "RCP-2026-2083",
    "invoiceId": "inv-demo-83",
    "invoiceNumber": "INV-2026-1083",
    "clientId": "cli-demo-31",
    "clientName": "Prime Global General Trading L.L.C",
    "amount": 142117.5,
    "paymentDate": "04-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90083",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1083",
    "createdAt": "2026-08-04T00:00:00.000Z"
  },
  {
    "id": "pay-demo-087",
    "paymentNumber": "RCP-2026-2087",
    "invoiceId": "inv-demo-87",
    "invoiceNumber": "INV-2026-1087",
    "clientId": "cli-demo-35",
    "clientName": "Horizon Agro Trading L.L.C",
    "amount": 81690,
    "paymentDate": "04-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90087",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1087",
    "createdAt": "2026-08-04T00:00:00.000Z"
  },
  {
    "id": "pay-demo-079",
    "paymentNumber": "RCP-2026-2079",
    "invoiceId": "inv-demo-79",
    "invoiceNumber": "INV-2026-1079",
    "clientId": "cli-demo-27",
    "clientName": "Golden Spoon Event Caterers",
    "amount": 23688,
    "paymentDate": "03-08-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90079",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1079",
    "createdAt": "2026-08-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-082",
    "paymentNumber": "RCP-2026-2082",
    "invoiceId": "inv-demo-82",
    "invoiceNumber": "INV-2026-1082",
    "clientId": "cli-demo-30",
    "clientName": "Xender For Trading L.L.C",
    "amount": 84997.5,
    "paymentDate": "03-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90082",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1082",
    "createdAt": "2026-08-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-086",
    "paymentNumber": "RCP-2026-2086",
    "invoiceId": "inv-demo-86",
    "invoiceNumber": "INV-2026-1086",
    "clientId": "cli-demo-34",
    "clientName": "Apex Foodstuff Trading FZE",
    "amount": 134925,
    "paymentDate": "03-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90086",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1086",
    "createdAt": "2026-08-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-090",
    "paymentNumber": "RCP-2026-2090",
    "invoiceId": "inv-demo-90",
    "invoiceNumber": "INV-2026-1090",
    "clientId": "cli-demo-38",
    "clientName": "Oasis Grand Palace Hotel L.L.C",
    "amount": 25515,
    "paymentDate": "03-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90090",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1090",
    "createdAt": "2026-08-03T00:00:00.000Z"
  },
  {
    "id": "pay-demo-074",
    "paymentNumber": "RCP-2026-2074",
    "invoiceId": "inv-demo-74",
    "invoiceNumber": "INV-2026-1074",
    "clientId": "cli-demo-22",
    "clientName": "Crown Sweets & Pastries L.L.C",
    "amount": 8203.65,
    "paymentDate": "02-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90074",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1074",
    "createdAt": "2026-08-02T00:00:00.000Z"
  },
  {
    "id": "pay-demo-078",
    "paymentNumber": "RCP-2026-2078",
    "invoiceId": "inv-demo-78",
    "invoiceNumber": "INV-2026-1078",
    "clientId": "cli-demo-26",
    "clientName": "Imperial Banquet Catering Services",
    "amount": 34492.5,
    "paymentDate": "02-08-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90078",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1078",
    "createdAt": "2026-08-02T00:00:00.000Z"
  },
  {
    "id": "pay-demo-085",
    "paymentNumber": "RCP-2026-2085",
    "invoiceId": "inv-demo-85",
    "invoiceNumber": "INV-2026-1085",
    "clientId": "cli-demo-33",
    "clientName": "Al Manar Import & Export L.L.C",
    "amount": 102532.5,
    "paymentDate": "02-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90085",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1085",
    "createdAt": "2026-08-02T00:00:00.000Z"
  },
  {
    "id": "pay-demo-077",
    "paymentNumber": "RCP-2026-2077",
    "invoiceId": "inv-demo-77",
    "invoiceNumber": "INV-2026-1077",
    "clientId": "cli-demo-25",
    "clientName": "Desert Pearl Hospitality & Catering L.L.C",
    "amount": 52384.5,
    "paymentDate": "01-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90077",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1077",
    "createdAt": "2026-08-01T00:00:00.000Z"
  },
  {
    "id": "pay-demo-081",
    "paymentNumber": "RCP-2026-2081",
    "invoiceId": "inv-demo-81",
    "invoiceNumber": "INV-2026-1081",
    "clientId": "cli-demo-29",
    "clientName": "Gulf Feast Catering & Hospitality",
    "amount": 9135,
    "paymentDate": "01-08-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90081",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1081",
    "createdAt": "2026-08-01T00:00:00.000Z"
  },
  {
    "id": "pay-demo-069",
    "paymentNumber": "RCP-2026-2069",
    "invoiceId": "inv-demo-69",
    "invoiceNumber": "INV-2026-1069",
    "clientId": "cli-demo-17",
    "clientName": "Desert Pearl Lounge & Cafe",
    "amount": 2113.65,
    "paymentDate": "31-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90069",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1069",
    "createdAt": "2026-07-31T00:00:00.000Z"
  },
  {
    "id": "pay-demo-073",
    "paymentNumber": "RCP-2026-2073",
    "invoiceId": "inv-demo-73",
    "invoiceNumber": "INV-2026-1073",
    "clientId": "cli-demo-21",
    "clientName": "Golden Wheat Artisan Bakery",
    "amount": 5265.75,
    "paymentDate": "31-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90073",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1073",
    "createdAt": "2026-07-31T00:00:00.000Z"
  },
  {
    "id": "pay-demo-080",
    "paymentNumber": "RCP-2026-2080",
    "invoiceId": "inv-demo-80",
    "invoiceNumber": "INV-2026-1080",
    "clientId": "cli-demo-28",
    "clientName": "Royal Table Corporate Catering L.L.C",
    "amount": 31626,
    "paymentDate": "31-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90080",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1080",
    "createdAt": "2026-07-31T00:00:00.000Z"
  },
  {
    "id": "pay-demo-068",
    "paymentNumber": "RCP-2026-2068",
    "invoiceId": "inv-demo-68",
    "invoiceNumber": "INV-2026-1068",
    "clientId": "cli-demo-16",
    "clientName": "Palm Grove Specialty Coffee",
    "amount": 3690.75,
    "paymentDate": "30-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90068",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1068",
    "createdAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "pay-demo-072",
    "paymentNumber": "RCP-2026-2072",
    "invoiceId": "inv-demo-72",
    "invoiceNumber": "INV-2026-1072",
    "clientId": "cli-demo-20",
    "clientName": "Sunrise French Bakery & Patisserie",
    "amount": 7764.75,
    "paymentDate": "30-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90072",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1072",
    "createdAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "pay-demo-076",
    "paymentNumber": "RCP-2026-2076",
    "invoiceId": "inv-demo-76",
    "invoiceNumber": "INV-2026-1076",
    "clientId": "cli-demo-24",
    "clientName": "Al Barakah Arabic Bakery",
    "amount": 8472.45,
    "paymentDate": "30-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90076",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1076",
    "createdAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "pay-demo-064",
    "paymentNumber": "RCP-2026-2064",
    "invoiceId": "inv-demo-64",
    "invoiceNumber": "INV-2026-1064",
    "clientId": "cli-demo-12",
    "clientName": "Sultan Turkish Cuisine L.L.C",
    "amount": 6008.1,
    "paymentDate": "29-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90064",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1064",
    "createdAt": "2026-07-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-071",
    "paymentNumber": "RCP-2026-2071",
    "invoiceId": "inv-demo-71",
    "invoiceNumber": "INV-2026-1071",
    "clientId": "cli-demo-19",
    "clientName": "Velvet Bean Cafe & Lounge",
    "amount": 3489.15,
    "paymentDate": "29-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90071",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1071",
    "createdAt": "2026-07-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-075",
    "paymentNumber": "RCP-2026-2075",
    "invoiceId": "inv-demo-75",
    "invoiceNumber": "INV-2026-1075",
    "clientId": "cli-demo-23",
    "clientName": "Maison Dorée Pastry Studio",
    "amount": 1261.05,
    "paymentDate": "29-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90075",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1075",
    "createdAt": "2026-07-29T00:00:00.000Z"
  },
  {
    "id": "pay-demo-063",
    "paymentNumber": "RCP-2026-2063",
    "invoiceId": "inv-demo-63",
    "invoiceNumber": "INV-2026-1063",
    "clientId": "cli-demo-11",
    "clientName": "Desert Rose Mandi & Grill",
    "amount": 4078.2,
    "paymentDate": "28-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90063",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1063",
    "createdAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "pay-demo-067",
    "paymentNumber": "RCP-2026-2067",
    "invoiceId": "inv-demo-67",
    "invoiceNumber": "INV-2026-1067",
    "clientId": "cli-demo-15",
    "clientName": "Blue Horizon Roastery & Cafe",
    "amount": 2804.55,
    "paymentDate": "28-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90067",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1067",
    "createdAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "pay-demo-059",
    "paymentNumber": "RCP-2026-2059",
    "invoiceId": "inv-demo-59",
    "invoiceNumber": "INV-2026-1059",
    "clientId": "cli-demo-07",
    "clientName": "City Star Supermarket L.L.C",
    "amount": 1347.15,
    "paymentDate": "27-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90059",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1059",
    "createdAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "pay-demo-066",
    "paymentNumber": "RCP-2026-2066",
    "invoiceId": "inv-demo-66",
    "invoiceNumber": "INV-2026-1066",
    "clientId": "cli-demo-14",
    "clientName": "Bukhara Royal Feast Restaurant",
    "amount": 3717,
    "paymentDate": "27-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90066",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1066",
    "createdAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "pay-demo-070",
    "paymentNumber": "RCP-2026-2070",
    "invoiceId": "inv-demo-70",
    "invoiceNumber": "INV-2026-1070",
    "clientId": "cli-demo-18",
    "clientName": "Artisan Roast Cafe L.L.C",
    "amount": 4352.25,
    "paymentDate": "27-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90070",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1070",
    "createdAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "pay-demo-054",
    "paymentNumber": "RCP-2026-2054",
    "invoiceId": "inv-demo-54",
    "invoiceNumber": "INV-2026-1054",
    "clientId": "cli-demo-02",
    "clientName": "Golden Basket Hypermarket L.L.C",
    "amount": 650.48,
    "paymentDate": "26-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90054",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1054",
    "createdAt": "2026-07-26T00:00:00.000Z"
  },
  {
    "id": "pay-demo-058",
    "paymentNumber": "RCP-2026-2058",
    "invoiceId": "inv-demo-58",
    "invoiceNumber": "INV-2026-1058",
    "clientId": "cli-demo-06",
    "clientName": "Emirates Fresh Mart",
    "amount": 1005.38,
    "paymentDate": "26-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90058",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1058",
    "createdAt": "2026-07-26T00:00:00.000Z"
  },
  {
    "id": "pay-demo-062",
    "paymentNumber": "RCP-2026-2062",
    "invoiceId": "inv-demo-62",
    "invoiceNumber": "INV-2026-1062",
    "clientId": "cli-demo-10",
    "clientName": "Urban Bites Restaurant L.L.C",
    "amount": 4982.25,
    "paymentDate": "26-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90062",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1062",
    "createdAt": "2026-07-26T00:00:00.000Z"
  },
  {
    "id": "pay-demo-057",
    "paymentNumber": "RCP-2026-2057",
    "invoiceId": "inv-demo-57",
    "invoiceNumber": "INV-2026-1057",
    "clientId": "cli-demo-05",
    "clientName": "Grand Central Mart L.L.C",
    "amount": 1093.05,
    "paymentDate": "25-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90057",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1057",
    "createdAt": "2026-07-25T00:00:00.000Z"
  },
  {
    "id": "pay-demo-061",
    "paymentNumber": "RCP-2026-2061",
    "invoiceId": "inv-demo-61",
    "invoiceNumber": "INV-2026-1061",
    "clientId": "cli-demo-09",
    "clientName": "Ocean View Seafood Restaurant",
    "amount": 4668.3,
    "paymentDate": "25-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90061",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1061",
    "createdAt": "2026-07-25T00:00:00.000Z"
  },
  {
    "id": "pay-demo-065",
    "paymentNumber": "RCP-2026-2065",
    "invoiceId": "inv-demo-65",
    "invoiceNumber": "INV-2026-1065",
    "clientId": "cli-demo-13",
    "clientName": "Al Safeer Lebanese Kitchen",
    "amount": 7722.75,
    "paymentDate": "25-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90065",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1065",
    "createdAt": "2026-07-25T00:00:00.000Z"
  },
  {
    "id": "pay-demo-049",
    "paymentNumber": "RCP-2026-2049",
    "invoiceId": "inv-demo-49",
    "invoiceNumber": "INV-2026-1049",
    "clientId": "cli-demo-49",
    "clientName": "SpeedLine Commercial Delivery Services",
    "amount": 18648,
    "paymentDate": "24-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90049",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1049",
    "createdAt": "2026-07-24T00:00:00.000Z"
  },
  {
    "id": "pay-demo-053",
    "paymentNumber": "RCP-2026-2053",
    "invoiceId": "inv-demo-53",
    "invoiceNumber": "INV-2026-1053",
    "clientId": "cli-demo-01",
    "clientName": "Al Noor Supermarket L.L.C",
    "amount": 1072.05,
    "paymentDate": "24-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90053",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1053",
    "createdAt": "2026-07-24T00:00:00.000Z"
  },
  {
    "id": "pay-demo-060",
    "paymentNumber": "RCP-2026-2060",
    "invoiceId": "inv-demo-60",
    "invoiceNumber": "INV-2026-1060",
    "clientId": "cli-demo-08",
    "clientName": "Royal Garden Restaurant L.L.C",
    "amount": 3998.4,
    "paymentDate": "24-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90060",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1060",
    "createdAt": "2026-07-24T00:00:00.000Z"
  },
  {
    "id": "pay-demo-052",
    "paymentNumber": "RCP-2026-2052",
    "invoiceId": "inv-demo-52",
    "invoiceNumber": "INV-2026-1052",
    "clientId": "cli-demo-52",
    "clientName": "FreshFleet Distribution Services",
    "amount": 36015,
    "paymentDate": "23-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90052",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1052",
    "createdAt": "2026-07-23T00:00:00.000Z"
  },
  {
    "id": "pay-demo-056",
    "paymentNumber": "RCP-2026-2056",
    "invoiceId": "inv-demo-56",
    "invoiceNumber": "INV-2026-1056",
    "clientId": "cli-demo-04",
    "clientName": "Family Choice Supermarket L.L.C",
    "amount": 702.45,
    "paymentDate": "23-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90056",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1056",
    "createdAt": "2026-07-23T00:00:00.000Z"
  },
  {
    "id": "pay-demo-044",
    "paymentNumber": "RCP-2026-2044",
    "invoiceId": "inv-demo-44",
    "invoiceNumber": "INV-2026-1044",
    "clientId": "cli-demo-44",
    "clientName": "Al Safa Express Store",
    "amount": 6213.9,
    "paymentDate": "22-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90044",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1044",
    "createdAt": "2026-07-22T00:00:00.000Z"
  },
  {
    "id": "pay-demo-048",
    "paymentNumber": "RCP-2026-2048",
    "invoiceId": "inv-demo-48",
    "invoiceNumber": "INV-2026-1048",
    "clientId": "cli-demo-48",
    "clientName": "Green Leaf Nutrition Store",
    "amount": 2264.85,
    "paymentDate": "22-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90048",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1048",
    "createdAt": "2026-07-22T00:00:00.000Z"
  },
  {
    "id": "pay-demo-055",
    "paymentNumber": "RCP-2026-2055",
    "invoiceId": "inv-demo-55",
    "invoiceNumber": "INV-2026-1055",
    "clientId": "cli-demo-03",
    "clientName": "Green Harvest Supermarket",
    "amount": 773.33,
    "paymentDate": "22-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90055",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1055",
    "createdAt": "2026-07-22T00:00:00.000Z"
  },
  {
    "id": "pay-demo-043",
    "paymentNumber": "RCP-2026-2043",
    "invoiceId": "inv-demo-43",
    "invoiceNumber": "INV-2026-1043",
    "clientId": "cli-demo-43",
    "clientName": "Daily Mart Grocery L.L.C",
    "amount": 3575.25,
    "paymentDate": "21-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90043",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1043",
    "createdAt": "2026-07-21T00:00:00.000Z"
  },
  {
    "id": "pay-demo-047",
    "paymentNumber": "RCP-2026-2047",
    "invoiceId": "inv-demo-47",
    "invoiceNumber": "INV-2026-1047",
    "clientId": "cli-demo-47",
    "clientName": "Prime Cuts Butchery & Deli",
    "amount": 9990.75,
    "paymentDate": "21-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90047",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1047",
    "createdAt": "2026-07-21T00:00:00.000Z"
  },
  {
    "id": "pay-demo-051",
    "paymentNumber": "RCP-2026-2051",
    "invoiceId": "inv-demo-51",
    "invoiceNumber": "INV-2026-1051",
    "clientId": "cli-demo-51",
    "clientName": "ColdChain Logistics Services L.L.C",
    "amount": 10710,
    "paymentDate": "21-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90051",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1051",
    "createdAt": "2026-07-21T00:00:00.000Z"
  },
  {
    "id": "pay-demo-039",
    "paymentNumber": "RCP-2026-2039",
    "invoiceId": "inv-demo-39",
    "invoiceNumber": "INV-2026-1039",
    "clientId": "cli-demo-39",
    "clientName": "Sea Breeze Boutique Hotel",
    "amount": 42157.5,
    "paymentDate": "20-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90039",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1039",
    "createdAt": "2026-07-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-046",
    "paymentNumber": "RCP-2026-2046",
    "invoiceId": "inv-demo-46",
    "invoiceNumber": "INV-2026-1046",
    "clientId": "cli-demo-46",
    "clientName": "Pure Organic Pantry L.L.C",
    "amount": 7258.65,
    "paymentDate": "20-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90046",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1046",
    "createdAt": "2026-07-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-050",
    "paymentNumber": "RCP-2026-2050",
    "invoiceId": "inv-demo-50",
    "invoiceNumber": "INV-2026-1050",
    "clientId": "cli-demo-50",
    "clientName": "CleanPro Facility Management L.L.C",
    "amount": 22323,
    "paymentDate": "20-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90050",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1050",
    "createdAt": "2026-07-20T00:00:00.000Z"
  },
  {
    "id": "pay-demo-038",
    "paymentNumber": "RCP-2026-2038",
    "invoiceId": "inv-demo-38",
    "invoiceNumber": "INV-2026-1038",
    "clientId": "cli-demo-38",
    "clientName": "Oasis Grand Palace Hotel L.L.C",
    "amount": 55965,
    "paymentDate": "19-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90038",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1038",
    "createdAt": "2026-07-19T00:00:00.000Z"
  },
  {
    "id": "pay-demo-042",
    "paymentNumber": "RCP-2026-2042",
    "invoiceId": "inv-demo-42",
    "invoiceNumber": "INV-2026-1042",
    "clientId": "cli-demo-42",
    "clientName": "Corner Fresh Market L.L.C",
    "amount": 1585.5,
    "paymentDate": "19-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90042",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1042",
    "createdAt": "2026-07-19T00:00:00.000Z"
  },
  {
    "id": "pay-demo-034",
    "paymentNumber": "RCP-2026-2034",
    "invoiceId": "inv-demo-34",
    "invoiceNumber": "INV-2026-1034",
    "clientId": "cli-demo-34",
    "clientName": "Apex Foodstuff Trading FZE",
    "amount": 63472.5,
    "paymentDate": "18-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90034",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1034",
    "createdAt": "2026-07-18T00:00:00.000Z"
  },
  {
    "id": "pay-demo-041",
    "paymentNumber": "RCP-2026-2041",
    "invoiceId": "inv-demo-41",
    "invoiceNumber": "INV-2026-1041",
    "clientId": "cli-demo-41",
    "clientName": "Al Madina Fresh Grocery",
    "amount": 9355.5,
    "paymentDate": "18-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90041",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1041",
    "createdAt": "2026-07-18T00:00:00.000Z"
  },
  {
    "id": "pay-demo-045",
    "paymentNumber": "RCP-2026-2045",
    "invoiceId": "inv-demo-45",
    "invoiceNumber": "INV-2026-1045",
    "clientId": "cli-demo-45",
    "clientName": "Gourmet Olive & Deli Emporium",
    "amount": 6315.75,
    "paymentDate": "18-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90045",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1045",
    "createdAt": "2026-07-18T00:00:00.000Z"
  },
  {
    "id": "pay-demo-029",
    "paymentNumber": "RCP-2026-2029",
    "invoiceId": "inv-demo-29",
    "invoiceNumber": "INV-2026-1029",
    "clientId": "cli-demo-29",
    "clientName": "Gulf Feast Catering & Hospitality",
    "amount": 64764,
    "paymentDate": "17-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90029",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1029",
    "createdAt": "2026-07-17T00:00:00.000Z"
  },
  {
    "id": "pay-demo-033",
    "paymentNumber": "RCP-2026-2033",
    "invoiceId": "inv-demo-33",
    "invoiceNumber": "INV-2026-1033",
    "clientId": "cli-demo-33",
    "clientName": "Al Manar Import & Export L.L.C",
    "amount": 89460,
    "paymentDate": "17-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90033",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1033",
    "createdAt": "2026-07-17T00:00:00.000Z"
  },
  {
    "id": "pay-demo-037",
    "paymentNumber": "RCP-2026-2037",
    "invoiceId": "inv-demo-37",
    "invoiceNumber": "INV-2026-1037",
    "clientId": "cli-demo-37",
    "clientName": "Golden Dunes Resort & Spa",
    "amount": 18648,
    "paymentDate": "17-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90037",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1037",
    "createdAt": "2026-07-17T00:00:00.000Z"
  },
  {
    "id": "pay-demo-032",
    "paymentNumber": "RCP-2026-2032",
    "invoiceId": "inv-demo-32",
    "invoiceNumber": "INV-2026-1032",
    "clientId": "cli-demo-32",
    "clientName": "Gulf Coast Commodities Trading",
    "amount": 126997.5,
    "paymentDate": "16-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90032",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1032",
    "createdAt": "2026-07-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-036",
    "paymentNumber": "RCP-2026-2036",
    "invoiceId": "inv-demo-36",
    "invoiceNumber": "INV-2026-1036",
    "clientId": "cli-demo-36",
    "clientName": "Marina Palm Luxury Hotel & Suites",
    "amount": 18627,
    "paymentDate": "16-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90036",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1036",
    "createdAt": "2026-07-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-040",
    "paymentNumber": "RCP-2026-2040",
    "invoiceId": "inv-demo-40",
    "invoiceNumber": "INV-2026-1040",
    "clientId": "cli-demo-40",
    "clientName": "Creek Gate Business Hotel",
    "amount": 28056,
    "paymentDate": "16-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90040",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1040",
    "createdAt": "2026-07-16T00:00:00.000Z"
  },
  {
    "id": "pay-demo-024",
    "paymentNumber": "RCP-2026-2024",
    "invoiceId": "inv-demo-24",
    "invoiceNumber": "INV-2026-1024",
    "clientId": "cli-demo-24",
    "clientName": "Al Barakah Arabic Bakery",
    "amount": 6048,
    "paymentDate": "15-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90024",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1024",
    "createdAt": "2026-07-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-028",
    "paymentNumber": "RCP-2026-2028",
    "invoiceId": "inv-demo-28",
    "invoiceNumber": "INV-2026-1028",
    "clientId": "cli-demo-28",
    "clientName": "Royal Table Corporate Catering L.L.C",
    "amount": 73353,
    "paymentDate": "15-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90028",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1028",
    "createdAt": "2026-07-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-035",
    "paymentNumber": "RCP-2026-2035",
    "invoiceId": "inv-demo-35",
    "invoiceNumber": "INV-2026-1035",
    "clientId": "cli-demo-35",
    "clientName": "Horizon Agro Trading L.L.C",
    "amount": 88935,
    "paymentDate": "15-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90035",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1035",
    "createdAt": "2026-07-15T00:00:00.000Z"
  },
  {
    "id": "pay-demo-027",
    "paymentNumber": "RCP-2026-2027",
    "invoiceId": "inv-demo-27",
    "invoiceNumber": "INV-2026-1027",
    "clientId": "cli-demo-27",
    "clientName": "Golden Spoon Event Caterers",
    "amount": 11854.5,
    "paymentDate": "14-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90027",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1027",
    "createdAt": "2026-07-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-031",
    "paymentNumber": "RCP-2026-2031",
    "invoiceId": "inv-demo-31",
    "invoiceNumber": "INV-2026-1031",
    "clientId": "cli-demo-31",
    "clientName": "Prime Global General Trading L.L.C",
    "amount": 69930,
    "paymentDate": "14-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90031",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1031",
    "createdAt": "2026-07-14T00:00:00.000Z"
  },
  {
    "id": "pay-demo-019",
    "paymentNumber": "RCP-2026-2019",
    "invoiceId": "inv-demo-19",
    "invoiceNumber": "INV-2026-1019",
    "clientId": "cli-demo-19",
    "clientName": "Velvet Bean Cafe & Lounge",
    "amount": 4351.2,
    "paymentDate": "13-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90019",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1019",
    "createdAt": "2026-07-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-023",
    "paymentNumber": "RCP-2026-2023",
    "invoiceId": "inv-demo-23",
    "invoiceNumber": "INV-2026-1023",
    "clientId": "cli-demo-23",
    "clientName": "Maison Dorée Pastry Studio",
    "amount": 6269.55,
    "paymentDate": "13-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90023",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1023",
    "createdAt": "2026-07-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-030",
    "paymentNumber": "RCP-2026-2030",
    "invoiceId": "inv-demo-30",
    "invoiceNumber": "INV-2026-1030",
    "clientId": "cli-demo-30",
    "clientName": "Xender For Trading L.L.C",
    "amount": 81270,
    "paymentDate": "13-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90030",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1030",
    "createdAt": "2026-07-13T00:00:00.000Z"
  },
  {
    "id": "pay-demo-018",
    "paymentNumber": "RCP-2026-2018",
    "invoiceId": "inv-demo-18",
    "invoiceNumber": "INV-2026-1018",
    "clientId": "cli-demo-18",
    "clientName": "Artisan Roast Cafe L.L.C",
    "amount": 1766.1,
    "paymentDate": "12-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90018",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1018",
    "createdAt": "2026-07-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-022",
    "paymentNumber": "RCP-2026-2022",
    "invoiceId": "inv-demo-22",
    "invoiceNumber": "INV-2026-1022",
    "clientId": "cli-demo-22",
    "clientName": "Crown Sweets & Pastries L.L.C",
    "amount": 11534.25,
    "paymentDate": "12-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90022",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1022",
    "createdAt": "2026-07-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-026",
    "paymentNumber": "RCP-2026-2026",
    "invoiceId": "inv-demo-26",
    "invoiceNumber": "INV-2026-1026",
    "clientId": "cli-demo-26",
    "clientName": "Imperial Banquet Catering Services",
    "amount": 31006.5,
    "paymentDate": "12-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90026",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1026",
    "createdAt": "2026-07-12T00:00:00.000Z"
  },
  {
    "id": "pay-demo-014",
    "paymentNumber": "RCP-2026-2014",
    "invoiceId": "inv-demo-14",
    "invoiceNumber": "INV-2026-1014",
    "clientId": "cli-demo-14",
    "clientName": "Bukhara Royal Feast Restaurant",
    "amount": 17163.3,
    "paymentDate": "11-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90014",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1014",
    "createdAt": "2026-07-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-021",
    "paymentNumber": "RCP-2026-2021",
    "invoiceId": "inv-demo-21",
    "invoiceNumber": "INV-2026-1021",
    "clientId": "cli-demo-21",
    "clientName": "Golden Wheat Artisan Bakery",
    "amount": 9145.5,
    "paymentDate": "11-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90021",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1021",
    "createdAt": "2026-07-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-025",
    "paymentNumber": "RCP-2026-2025",
    "invoiceId": "inv-demo-25",
    "invoiceNumber": "INV-2026-1025",
    "clientId": "cli-demo-25",
    "clientName": "Desert Pearl Hospitality & Catering L.L.C",
    "amount": 14133,
    "paymentDate": "11-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90025",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1025",
    "createdAt": "2026-07-11T00:00:00.000Z"
  },
  {
    "id": "pay-demo-013",
    "paymentNumber": "RCP-2026-2013",
    "invoiceId": "inv-demo-13",
    "invoiceNumber": "INV-2026-1013",
    "clientId": "cli-demo-13",
    "clientName": "Al Safeer Lebanese Kitchen",
    "amount": 7980,
    "paymentDate": "10-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90013",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1013",
    "createdAt": "2026-07-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-017",
    "paymentNumber": "RCP-2026-2017",
    "invoiceId": "inv-demo-17",
    "invoiceNumber": "INV-2026-1017",
    "clientId": "cli-demo-17",
    "clientName": "Desert Pearl Lounge & Cafe",
    "amount": 4741.8,
    "paymentDate": "10-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90017",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1017",
    "createdAt": "2026-07-10T00:00:00.000Z"
  },
  {
    "id": "pay-demo-009",
    "paymentNumber": "RCP-2026-2009",
    "invoiceId": "inv-demo-9",
    "invoiceNumber": "INV-2026-1009",
    "clientId": "cli-demo-09",
    "clientName": "Ocean View Seafood Restaurant",
    "amount": 1394.4,
    "paymentDate": "09-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90009",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1009",
    "createdAt": "2026-07-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-016",
    "paymentNumber": "RCP-2026-2016",
    "invoiceId": "inv-demo-16",
    "invoiceNumber": "INV-2026-1016",
    "clientId": "cli-demo-16",
    "clientName": "Palm Grove Specialty Coffee",
    "amount": 2490.6,
    "paymentDate": "09-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90016",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1016",
    "createdAt": "2026-07-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-020",
    "paymentNumber": "RCP-2026-2020",
    "invoiceId": "inv-demo-20",
    "invoiceNumber": "INV-2026-1020",
    "clientId": "cli-demo-20",
    "clientName": "Sunrise French Bakery & Patisserie",
    "amount": 13668.9,
    "paymentDate": "09-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90020",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1020",
    "createdAt": "2026-07-09T00:00:00.000Z"
  },
  {
    "id": "pay-demo-004",
    "paymentNumber": "RCP-2026-2004",
    "invoiceId": "inv-demo-4",
    "invoiceNumber": "INV-2026-1004",
    "clientId": "cli-demo-04",
    "clientName": "Family Choice Supermarket L.L.C",
    "amount": 677.25,
    "paymentDate": "08-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90004",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1004",
    "createdAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-008",
    "paymentNumber": "RCP-2026-2008",
    "invoiceId": "inv-demo-8",
    "invoiceNumber": "INV-2026-1008",
    "clientId": "cli-demo-08",
    "clientName": "Royal Garden Restaurant L.L.C",
    "amount": 6444.9,
    "paymentDate": "08-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90008",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1008",
    "createdAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-012",
    "paymentNumber": "RCP-2026-2012",
    "invoiceId": "inv-demo-12",
    "invoiceNumber": "INV-2026-1012",
    "clientId": "cli-demo-12",
    "clientName": "Sultan Turkish Cuisine L.L.C",
    "amount": 3564.75,
    "paymentDate": "08-07-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "BA-REF-90012",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1012",
    "createdAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-015",
    "paymentNumber": "RCP-2026-2015",
    "invoiceId": "inv-demo-15",
    "invoiceNumber": "INV-2026-1015",
    "clientId": "cli-demo-15",
    "clientName": "Blue Horizon Roastery & Cafe",
    "amount": 2421.3,
    "paymentDate": "08-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90015",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1015",
    "createdAt": "2026-07-08T00:00:00.000Z"
  },
  {
    "id": "pay-demo-007",
    "paymentNumber": "RCP-2026-2007",
    "invoiceId": "inv-demo-7",
    "invoiceNumber": "INV-2026-1007",
    "clientId": "cli-demo-07",
    "clientName": "City Star Supermarket L.L.C",
    "amount": 1313.55,
    "paymentDate": "07-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90007",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1007",
    "createdAt": "2026-07-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-011",
    "paymentNumber": "RCP-2026-2011",
    "invoiceId": "inv-demo-11",
    "invoiceNumber": "INV-2026-1011",
    "clientId": "cli-demo-11",
    "clientName": "Desert Rose Mandi & Grill",
    "amount": 6872.25,
    "paymentDate": "07-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90011",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1011",
    "createdAt": "2026-07-07T00:00:00.000Z"
  },
  {
    "id": "pay-demo-003",
    "paymentNumber": "RCP-2026-2003",
    "invoiceId": "inv-demo-3",
    "invoiceNumber": "INV-2026-1003",
    "clientId": "cli-demo-03",
    "clientName": "Green Harvest Supermarket",
    "amount": 576.45,
    "paymentDate": "06-07-2026",
    "paymentMethod": "Cheque",
    "referenceNumber": "CH-REF-90003",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1003",
    "createdAt": "2026-07-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-010",
    "paymentNumber": "RCP-2026-2010",
    "invoiceId": "inv-demo-10",
    "invoiceNumber": "INV-2026-1010",
    "clientId": "cli-demo-10",
    "clientName": "Urban Bites Restaurant L.L.C",
    "amount": 5020.05,
    "paymentDate": "06-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90010",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1010",
    "createdAt": "2026-07-06T00:00:00.000Z"
  },
  {
    "id": "pay-demo-002",
    "paymentNumber": "RCP-2026-2002",
    "invoiceId": "inv-demo-2",
    "invoiceNumber": "INV-2026-1002",
    "clientId": "cli-demo-02",
    "clientName": "Golden Basket Hypermarket L.L.C",
    "amount": 899.85,
    "paymentDate": "05-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90002",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1002",
    "createdAt": "2026-07-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-006",
    "paymentNumber": "RCP-2026-2006",
    "invoiceId": "inv-demo-6",
    "invoiceNumber": "INV-2026-1006",
    "clientId": "cli-demo-06",
    "clientName": "Emirates Fresh Mart",
    "amount": 266.7,
    "paymentDate": "05-07-2026",
    "paymentMethod": "Card",
    "referenceNumber": "CA-REF-90006",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1006",
    "createdAt": "2026-07-05T00:00:00.000Z"
  },
  {
    "id": "pay-demo-001",
    "paymentNumber": "RCP-2026-2001",
    "invoiceId": "inv-demo-1",
    "invoiceNumber": "INV-2026-1001",
    "clientId": "cli-demo-01",
    "clientName": "Al Noor Supermarket L.L.C",
    "amount": 682.5,
    "paymentDate": "04-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90001",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1001",
    "createdAt": "2026-07-04T00:00:00.000Z"
  },
  {
    "id": "pay-demo-005",
    "paymentNumber": "RCP-2026-2005",
    "invoiceId": "inv-demo-5",
    "invoiceNumber": "INV-2026-1005",
    "clientId": "cli-demo-05",
    "clientName": "Grand Central Mart L.L.C",
    "amount": 978.08,
    "paymentDate": "04-07-2026",
    "paymentMethod": "Cash",
    "referenceNumber": "CA-REF-90005",
    "bankAccount": "Emirates NBD • Corporate AED Account",
    "notes": "Settlement for invoice #INV-2026-1005",
    "createdAt": "2026-07-04T00:00:00.000Z"
  }
];
