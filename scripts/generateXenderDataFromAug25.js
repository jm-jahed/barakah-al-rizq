import fs from "fs";
import path from "path";

// List of only records from 25 August 26 onwards as requested by user
const rows = [
  { date: "25-08-2026", dateDisplay: "25 August 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 0, bill: 504, paid: 0, closing: 504, batch: 1 },
  { date: "26-08-2026", dateDisplay: "26 August 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 504, bill: 504, paid: 0, closing: 1008, batch: 1 },
  { date: "27-08-2026", dateDisplay: "27 August 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1008, bill: 504, paid: 0, closing: 1512, batch: 1 },
  { date: "28-08-2026", dateDisplay: "28 August 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1512, bill: 504, paid: 0, closing: 2016, batch: 1 },
  { date: "30-08-2026", dateDisplay: "30 August 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 2016, bill: 504, paid: 2520, closing: 0, batch: 1 },

  { date: "31-08-2026", dateDisplay: "31 August 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 0, bill: 504, paid: 0, closing: 504, batch: 2 },
  { date: "01-09-2026", dateDisplay: "1 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 504, bill: 504, paid: 0, closing: 1008, batch: 2 },
  { date: "02-09-2026", dateDisplay: "2 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1008, bill: 504, paid: 0, closing: 1512, batch: 2 },
  { date: "03-09-2026", dateDisplay: "3 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1512, bill: 504, paid: 0, closing: 2016, batch: 2 },
  { date: "04-09-2026", dateDisplay: "4 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 2016, bill: 504, paid: 0, closing: 2520, batch: 2 },
  { date: "06-09-2026", dateDisplay: "6 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 2520, bill: 504, paid: 0, closing: 3024, batch: 2 },
  { date: "07-09-2026", dateDisplay: "7 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 3024, bill: 504, paid: 0, closing: 3528, batch: 2 },
  { date: "08-09-2026", dateDisplay: "8 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 3528, bill: 504, paid: 4032, closing: 0, batch: 2 },

  { date: "09-09-2026", dateDisplay: "9 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 0, bill: 504, paid: 0, closing: 504, batch: null },
  { date: "10-09-2026", dateDisplay: "10 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 504, bill: 504, paid: 0, closing: 1008, batch: null },
  { date: "11-09-2026", dateDisplay: "11 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1008, bill: 504, paid: 0, closing: 1512, batch: null },
  { date: "12-09-2026", dateDisplay: "12 September 26", desc: "Peeled 40", peeled: 40, raw: 0, opening: 1008, bill: 168, paid: 0, closing: 1176, batch: null },
  { date: "13-09-2026", dateDisplay: "13 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1176, bill: 504, paid: 0, closing: 1680, batch: null },
  { date: "14-09-2026", dateDisplay: "14 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 1680, bill: 504, paid: 0, closing: 2184, batch: null },
  { date: "15-09-2026", dateDisplay: "15 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 2184, bill: 504, paid: 0, closing: 2688, batch: null },
  { date: "16-09-2026", dateDisplay: "16 September 26", desc: "Peeled 120", peeled: 120, raw: 0, opening: 2688, bill: 504, paid: 0, closing: 3192, batch: null },
];

function generateData() {
  const invoices = [];
  const payments = [];

  let totalInvoiced = 0;
  let totalPaid = 0;
  let totalDue = 0;

  rows.forEach((r, idx) => {
    const isPaid = r.batch !== null;
    const invId = `inv-xender-${idx + 1}`;
    const invoiceNumber = "0000"; // All set to 0000 as requested

    const items = [];
    if (r.peeled > 0) {
      const gross = r.peeled * 4.0;
      const vat = gross * 0.05;
      const net = gross + vat;
      items.push({
        id: `item-${idx + 1}-1`,
        itemNumber: 1,
        itemCode: "100004",
        description: "Potato Cubes",
        unit: "وحدة",
        quantity: r.peeled,
        vatPercent: 5,
        unitPrice: 4.0,
        lineTotal: net,
      });
    }

    const totalQty = items.reduce((sum, it) => sum + it.quantity, 0);
    const totalSubtotal = items.reduce((sum, it) => sum + (it.quantity * it.unitPrice), 0);
    const totalVat = totalSubtotal * 0.05;
    const grandTotal = r.bill;

    totalInvoiced += grandTotal;
    if (isPaid) {
      totalPaid += grandTotal;
    } else {
      totalDue += grandTotal;
    }

    const arabicWords = grandTotal === 504 ? "فقط خمس مائة و أربعة درهم لاغير" : grandTotal === 168 ? "فقط مائة و ثمانية و ستون درهم لاغير" : "";
    const englishWords = grandTotal === 504 ? "Five Hundred Four Dirhams Only" : grandTotal === 168 ? "One Hundred Sixty-Eight Dirhams Only" : "";

    invoices.push({
      id: invId,
      company: {
        arabicName: "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
        englishName: "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
        mobile: "052512775",
        mobileArabic: "متحرك : ٠٥٢٥١٢٧٧٥",
        email: "kattan4@hotmail.com",
        phone: "052512775",
        trn: "104798388500003",
        addressArabic1: "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
        addressArabic2: "شركة ابوظبي المواني ش م ع",
      },
      customer: {
        id: "cli-8206",
        name: "XENDER FOR TRADING L.L.C",
        accountNumber: "429",
        trn: "DUBAI 100584661100003",
        cityOrBranch: "DUBAI",
      },
      meta: {
        invoiceNumber: invoiceNumber,
        invoiceDate: r.date,
        notes: r.desc,
        receiverTitle: ":المستلم",
        sellerTitle: ":البائع",
      },
      items: items,
      totals: {
        totalQuantity: totalQty,
        subtotal: totalSubtotal,
        discount: 0,
        netAmount: totalSubtotal,
        vatAmount: totalVat,
        grandTotal: grandTotal,
        amountInWordsArabic: arabicWords,
        amountInWordsEnglish: englishWords,
      },
      status: isPaid ? "PAID" : "DUE",
      paymentTerms: "15 Days",
      dueDate: r.date,
      paidAmount: isPaid ? grandTotal : 0,
      dueAmount: isPaid ? 0 : grandTotal,
      overdueDays: 0,
      payments: [],
      createdAt: `${r.date.split("-").reverse().join("-")}T08:00:00.000Z`,
      updatedAt: `${r.date.split("-").reverse().join("-")}T10:00:00.000Z`,
    });
  });

  // Payments
  // Batch 1: 30 August 26 (AED 2520)
  payments.push({
    id: "pay-xender-1",
    paymentNumber: "RCT-2026-0830",
    invoiceId: "inv-xender-5",
    invoiceNumber: "0000",
    clientId: "cli-8206",
    clientName: "XENDER FOR TRADING L.L.C",
    amount: 2520,
    paymentDate: "30-08-2026",
    paymentMethod: "Bank Transfer",
    referenceNumber: "TXN-AUG30-2520",
    notes: "Settlement for 25 Aug to 30 Aug deliveries (5 deliveries @ 504 AED)",
    createdAt: "2026-08-30T14:30:00.000Z",
  });

  // Batch 2: 8 September 26 (AED 4032)
  payments.push({
    id: "pay-xender-2",
    paymentNumber: "RCT-2026-0908",
    invoiceId: "inv-xender-13",
    invoiceNumber: "0000",
    clientId: "cli-8206",
    clientName: "XENDER FOR TRADING L.L.C",
    amount: 4032,
    paymentDate: "08-09-2026",
    paymentMethod: "Bank Transfer",
    referenceNumber: "TXN-SEP08-4032",
    notes: "Settlement for 31 Aug to 8 Sep deliveries (8 deliveries @ 504 AED)",
    createdAt: "2026-09-08T15:00:00.000Z",
  });

  const client = {
    id: "cli-8206",
    clientCode: "CLI-1001",
    name: "XENDER FOR TRADING L.L.C",
    companyName: "Xender General Trading L.L.C",
    arabicName: "زيندر للتجارة العامة ذ.م.م",
    englishName: "XENDER FOR TRADING L.L.C",
    contactPerson: "",
    mobile: "",
    email: "",
    address: "ICAD III, Port of Abu Dhabi Industrial Zone, Building 3",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    trn: "DUBAI 100584661100003",
    accountNumber: "429",
    paymentTerms: "15 Days",
    creditLimit: 150000,
    notes: "Primary ICAD wholesale trading account with daily fresh potato deliveries.",
    createdAt: "2026-08-25T08:00:00.000Z",
    updatedAt: "2026-09-16T10:00:00.000Z",
    totalInvoices: invoices.length,
    totalInvoiced: totalInvoiced,
    totalPaid: 6552, // 2520 + 4032
    totalDue: totalDue,
    totalOverdue: 0,
  };

  const tsContent = `import { Client, ManagedInvoice, Payment } from "@/types/dashboard";

export const XENDER_CLIENT: Client = ${JSON.stringify(client, null, 2)};

export const XENDER_INVOICES: ManagedInvoice[] = ${JSON.stringify(invoices, null, 2)};

export const XENDER_PAYMENTS: Payment[] = ${JSON.stringify(payments, null, 2)};
`;

  fs.writeFileSync(path.join(process.cwd(), "src/data/xenderBillingData.ts"), tsContent, "utf8");
  console.log(`Generated ${invoices.length} invoices and ${payments.length} payments. Total invoiced: ${totalInvoiced}, Total paid: 6552, Total due: ${totalDue}`);
}

generateData();
