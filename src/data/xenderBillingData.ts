import { Client, ManagedInvoice, Payment } from "@/types/dashboard";

export const XENDER_CLIENT: Client = {
  "id": "cli-8206",
  "clientCode": "CLI-1001",
  "name": "XENDER FOR TRADING L.L.C",
  "companyName": "Xender General Trading L.L.C",
  "arabicName": "زيندر للتجارة العامة ذ.م.م",
  "englishName": "XENDER FOR TRADING L.L.C",
  "contactPerson": "",
  "mobile": "",
  "email": "",
  "address": "ICAD III, Port of Abu Dhabi Industrial Zone, Building 3",
  "city": "Abu Dhabi",
  "country": "United Arab Emirates",
  "trn": "DUBAI 100584661100003",
  "accountNumber": "429",
  "paymentTerms": "Custom",
  "creditLimit": 150000,
  "notes": "Primary ICAD wholesale trading account with daily fresh potato deliveries.",
  "createdAt": "2026-08-25T08:00:00.000Z",
  "updatedAt": "2026-09-16T10:00:00.000Z",
  "totalInvoices": 21,
  "totalInvoiced": 10248,
  "totalPaid": 6552,
  "totalDue": 3696,
  "totalOverdue": 0
};

export const XENDER_INVOICES: ManagedInvoice[] = [
  {
    "id": "inv-xender-1",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "25-08-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-1-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "25-08-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-08-25T08:00:00.000Z",
    "updatedAt": "2026-08-25T10:00:00.000Z"
  },
  {
    "id": "inv-xender-2",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "26-08-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-2-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "26-08-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-08-26T08:00:00.000Z",
    "updatedAt": "2026-08-26T10:00:00.000Z"
  },
  {
    "id": "inv-xender-3",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "27-08-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-3-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "27-08-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-08-27T08:00:00.000Z",
    "updatedAt": "2026-08-27T10:00:00.000Z"
  },
  {
    "id": "inv-xender-4",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "28-08-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-4-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "28-08-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-08-28T08:00:00.000Z",
    "updatedAt": "2026-08-28T10:00:00.000Z"
  },
  {
    "id": "inv-xender-5",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "30-08-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-5-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "30-08-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-08-30T08:00:00.000Z",
    "updatedAt": "2026-08-30T10:00:00.000Z"
  },
  {
    "id": "inv-xender-6",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "31-08-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-6-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "31-08-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-08-31T08:00:00.000Z",
    "updatedAt": "2026-08-31T10:00:00.000Z"
  },
  {
    "id": "inv-xender-7",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "01-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-7-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "01-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-01T08:00:00.000Z",
    "updatedAt": "2026-09-01T10:00:00.000Z"
  },
  {
    "id": "inv-xender-8",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "02-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-8-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "02-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-02T08:00:00.000Z",
    "updatedAt": "2026-09-02T10:00:00.000Z"
  },
  {
    "id": "inv-xender-9",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "03-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-9-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "03-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-03T08:00:00.000Z",
    "updatedAt": "2026-09-03T10:00:00.000Z"
  },
  {
    "id": "inv-xender-10",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "04-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-10-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "04-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-04T08:00:00.000Z",
    "updatedAt": "2026-09-04T10:00:00.000Z"
  },
  {
    "id": "inv-xender-11",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "06-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-11-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "06-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-06T08:00:00.000Z",
    "updatedAt": "2026-09-06T10:00:00.000Z"
  },
  {
    "id": "inv-xender-12",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "07-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-12-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "07-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-07T08:00:00.000Z",
    "updatedAt": "2026-09-07T10:00:00.000Z"
  },
  {
    "id": "inv-xender-13",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "08-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-13-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "PAID",
    "paymentTerms": "15 Days",
    "dueDate": "08-09-2026",
    "paidAmount": 504,
    "dueAmount": 0,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-08T08:00:00.000Z",
    "updatedAt": "2026-09-08T10:00:00.000Z"
  },
  {
    "id": "inv-xender-14",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "09-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-14-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "09-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-09T08:00:00.000Z",
    "updatedAt": "2026-09-09T10:00:00.000Z"
  },
  {
    "id": "inv-xender-15",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "10-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-15-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "10-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-10T08:00:00.000Z",
    "updatedAt": "2026-09-10T10:00:00.000Z"
  },
  {
    "id": "inv-xender-16",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "11-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-16-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "11-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-11T08:00:00.000Z",
    "updatedAt": "2026-09-11T10:00:00.000Z"
  },
  {
    "id": "inv-xender-17",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "12-09-2026",
      "notes": "Peeled 40",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-17-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 40,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 168
      }
    ],
    "totals": {
      "totalQuantity": 40,
      "subtotal": 160,
      "discount": 0,
      "netAmount": 160,
      "vatAmount": 8,
      "grandTotal": 168,
      "amountInWordsArabic": "فقط مائة و ثمانية و ستون درهم لاغير",
      "amountInWordsEnglish": "One Hundred Sixty-Eight Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "12-09-2026",
    "paidAmount": 0,
    "dueAmount": 168,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-12T08:00:00.000Z",
    "updatedAt": "2026-09-12T10:00:00.000Z"
  },
  {
    "id": "inv-xender-18",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "13-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-18-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "13-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-13T08:00:00.000Z",
    "updatedAt": "2026-09-13T10:00:00.000Z"
  },
  {
    "id": "inv-xender-19",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "14-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-19-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "14-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-14T08:00:00.000Z",
    "updatedAt": "2026-09-14T10:00:00.000Z"
  },
  {
    "id": "inv-xender-20",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "15-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-20-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "15-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-15T08:00:00.000Z",
    "updatedAt": "2026-09-15T10:00:00.000Z"
  },
  {
    "id": "inv-xender-21",
    "company": {
      "arabicName": "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
      "englishName": "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
      "mobile": "052512775",
      "mobileArabic": "متحرك : ٠٥٢٥١٢٧٧٥",
      "email": "kattan4@hotmail.com",
      "phone": "052512775",
      "trn": "104798388500003",
      "addressArabic1": "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
      "addressArabic2": "شركة ابوظبي المواني ش م ع"
    },
    "customer": {
      "id": "cli-8206",
      "name": "XENDER FOR TRADING L.L.C",
      "accountNumber": "429",
      "trn": "DUBAI 100584661100003",
      "cityOrBranch": "DUBAI"
    },
    "meta": {
      "invoiceNumber": "0000",
      "invoiceDate": "16-09-2026",
      "notes": "Peeled 120",
      "receiverTitle": ":المستلم",
      "sellerTitle": ":البائع"
    },
    "items": [
      {
        "id": "item-21-1",
        "itemNumber": 1,
        "itemCode": "100004",
        "description": "Potato Cubes",
        "unit": "وحدة",
        "quantity": 120,
        "vatPercent": 5,
        "unitPrice": 4,
        "lineTotal": 504
      }
    ],
    "totals": {
      "totalQuantity": 120,
      "subtotal": 480,
      "discount": 0,
      "netAmount": 480,
      "vatAmount": 24,
      "grandTotal": 504,
      "amountInWordsArabic": "فقط خمس مائة و أربعة درهم لاغير",
      "amountInWordsEnglish": "Five Hundred Four Dirhams Only"
    },
    "status": "DUE",
    "paymentTerms": "15 Days",
    "dueDate": "16-09-2026",
    "paidAmount": 0,
    "dueAmount": 504,
    "overdueDays": 0,
    "payments": [],
    "createdAt": "2026-09-16T08:00:00.000Z",
    "updatedAt": "2026-09-16T10:00:00.000Z"
  }
];

export const XENDER_PAYMENTS: Payment[] = [
  {
    "id": "pay-xender-1",
    "paymentNumber": "RCT-2026-0830",
    "invoiceId": "inv-xender-5",
    "invoiceNumber": "0000",
    "clientId": "cli-8206",
    "clientName": "XENDER FOR TRADING L.L.C",
    "amount": 2520,
    "paymentDate": "30-08-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "TXN-AUG30-2520",
    "notes": "Settlement for 25 Aug to 30 Aug deliveries (5 deliveries @ 504 AED)",
    "createdAt": "2026-08-30T14:30:00.000Z"
  },
  {
    "id": "pay-xender-2",
    "paymentNumber": "RCT-2026-0908",
    "invoiceId": "inv-xender-13",
    "invoiceNumber": "0000",
    "clientId": "cli-8206",
    "clientName": "XENDER FOR TRADING L.L.C",
    "amount": 4032,
    "paymentDate": "08-09-2026",
    "paymentMethod": "Bank Transfer",
    "referenceNumber": "TXN-SEP08-4032",
    "notes": "Settlement for 31 Aug to 8 Sep deliveries (8 deliveries @ 504 AED)",
    "createdAt": "2026-09-08T15:00:00.000Z"
  }
];
