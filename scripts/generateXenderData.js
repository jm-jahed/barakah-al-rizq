const fs = require('fs');
const path = require('path');

const rawData = [
  { date: '04-06-2026', desc: 'Peeled 200 , Raw 100', peeled: 200, raw: 100, bill: 1207, paid: 1207, invNum: '0000' },
  { date: '05-06-2026', desc: 'Peeled 200 , Raw 200', peeled: 200, raw: 200, bill: 1575, paid: 1575, invNum: '0000' },
  { date: '07-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '08-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '09-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '10-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '11-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '12-06-2026', desc: 'Peeled 200 , Raw 70', peeled: 200, raw: 70, bill: 1097.25, paid: 1097.25, invNum: '0000' },
  { date: '14-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '15-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '16-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '18-06-2026', desc: 'Peeled 150', peeled: 150, raw: 0, bill: 630, paid: 630, invNum: '0000' },
  { date: '19-06-2026', desc: 'Peeled 120, Raw 80', peeled: 120, raw: 80, bill: 798, paid: 798, invNum: '0000' },
  { date: '23-06-2026', desc: 'Peeled 120 , Raw 60', peeled: 120, raw: 60, bill: 724.5, paid: 724.5, invNum: '0000' },
  { date: '24-06-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 504, invNum: '0000' },
  { date: '25-06-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 504, invNum: '0000' },
  { date: '26-06-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 504, invNum: '0000' },
  { date: '28-06-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 504, invNum: '0000' },
  { date: '29-06-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 504, invNum: '0000' },
  { date: '30-06-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '05-07-2026', invNum: '0000' },
  { date: '01-07-2026', desc: '(Invoice 6465) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '05-07-2026', invNum: '6465' },
  { date: '02-07-2026', desc: '(Invoice 6488) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '05-07-2026', invNum: '6488' },
  { date: '03-07-2026', desc: '(Invoice 6515) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '05-07-2026', invNum: '6515' },
  { date: '05-07-2026', desc: '(Invoice 6598) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 2520, batchSettler: true, payDate: '05-07-2026', invNum: '6598' },
  { date: '06-07-2026', desc: '(Invoice 6667) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '13-07-2026', invNum: '6667' },
  { date: '07-07-2026', desc: '(Invoice 6668) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '13-07-2026', invNum: '6668' },
  { date: '08-07-2026', desc: '(Invoice 6691) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '13-07-2026', invNum: '6691' },
  { date: '09-07-2026', desc: '(Invoice 6724) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '13-07-2026', invNum: '6724' },
  { date: '10-07-2026', desc: '(Invoice 6760) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '13-07-2026', invNum: '6760' },
  { date: '12-07-2026', desc: '(Invoice 6827) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '13-07-2026', invNum: '6827' },
  { date: '13-07-2026', desc: '(Invoice 6857) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 3528, batchSettler: true, payDate: '13-07-2026', invNum: '6857' },
  { date: '14-07-2026', desc: '(Invoice 6889) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '17-07-2026', invNum: '6889' },
  { date: '15-07-2026', desc: '(Invoice 7036) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '17-07-2026', invNum: '7036' },
  { date: '16-07-2026', desc: '(Invoice 7049) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '17-07-2026', invNum: '7049' },
  { date: '17-07-2026', desc: '(Invoice 7084) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 2016, batchSettler: true, payDate: '17-07-2026', invNum: '7084' },
  { date: '21-07-2026', desc: '(Invoice 7220) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '26-07-2026', invNum: '7220' },
  { date: '22-07-2026', desc: '(Invoice 7249) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '26-07-2026', invNum: '7249' },
  { date: '23-07-2026', desc: '(Invoice 7284) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '26-07-2026', invNum: '7284' },
  { date: '24-07-2026', desc: '(Invoice 7320) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '26-07-2026', invNum: '7320' },
  { date: '26-07-2026', desc: '(Invoice 7572) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 2520, batchSettler: true, payDate: '26-07-2026', invNum: '7572' },
  { date: '27-07-2026', desc: '(Invoice 7424) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '03-08-2026', invNum: '7424' },
  { date: '28-07-2026', desc: '(Invoice 7458) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '03-08-2026', invNum: '7458' },
  { date: '29-07-2026', desc: '(Invoice 7495) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '03-08-2026', invNum: '7495' },
  { date: '30-07-2026', desc: '(Invoice 7534) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '03-08-2026', invNum: '7534' },
  { date: '31-07-2026', desc: '(Invoice 7572 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '03-08-2026', invNum: '7572-B' },
  { date: '02-08-2026', desc: '(Invoice 7649) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '03-08-2026', invNum: '7649' },
  { date: '03-08-2026', desc: '(Invoice 7683) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 3528, batchSettler: true, payDate: '03-08-2026', invNum: '7683' },
  { date: '06-08-2026', desc: '(Invoice 7782 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '12-08-2026', invNum: '7782' },
  { date: '07-08-2026', desc: '(Invoice 7817 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '12-08-2026', invNum: '7817' },
  { date: '09-08-2026', desc: '(Invoice 7892) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '12-08-2026', invNum: '7892' },
  { date: '10-08-2026', desc: '(Invoice 7930 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '12-08-2026', invNum: '7930' },
  { date: '11-08-2026', desc: '(Invoice 7963 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '12-08-2026', invNum: '7963' },
  { date: '12-08-2026', desc: '(Invoice 8017 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 3024, batchSettler: true, payDate: '12-08-2026', invNum: '8017' },
  { date: '13-08-2026', desc: '(Invoice 8034 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '19-08-2026', invNum: '8034' },
  { date: '14-08-2026', desc: '(Invoice 8095 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '19-08-2026', invNum: '8095' },
  { date: '16-08-2026', desc: '(Invoice 8181 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '19-08-2026', invNum: '8181' },
  { date: '17-08-2026', desc: '(Invoice 8206 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '19-08-2026', invNum: '8206' },
  { date: '18-08-2026', desc: '(Invoice 8221 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '19-08-2026', invNum: '8221' },
  { date: '19-08-2026', desc: '(Invoice 8257) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 3024, batchSettler: true, payDate: '19-08-2026', invNum: '8257' },
  { date: '20-08-2026', desc: '(Invoice 8298 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '24-08-2026', invNum: '8298' },
  { date: '21-08-2026', desc: '(Invoice 8339 ) Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '24-08-2026', invNum: '8339' },
  { date: '24-08-2026', desc: 'No Delivery', peeled: 0, raw: 0, bill: 0, paid: 1008, directPayment: true, payDate: '24-08-2026', invNum: 'REC-1008' },
  { date: '25-08-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '30-08-2026', invNum: '0000' },
  { date: '26-08-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '30-08-2026', invNum: '0000' },
  { date: '27-08-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '30-08-2026', invNum: '0000' },
  { date: '28-08-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '30-08-2026', invNum: '0000' },
  { date: '30-08-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 2520, batchSettler: true, payDate: '30-08-2026', invNum: '0000' },
  { date: '31-08-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '01-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '02-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '03-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '04-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '06-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '07-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, payDate: '08-09-2026', invNum: '0000' },
  { date: '08-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 4032, batchSettler: true, payDate: '08-09-2026', invNum: '0000' },
  // Unpaid current deliveries:
  { date: '09-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
  { date: '10-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
  { date: '11-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
  { date: '12-09-2026', desc: 'Peeled 40', peeled: 40, raw: 0, bill: 168, paid: 0, invNum: '0000' },
  { date: '13-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
  { date: '14-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
  { date: '15-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
  { date: '16-09-2026', desc: 'Peeled 120', peeled: 120, raw: 0, bill: 504, paid: 0, invNum: '0000' },
];

function generateTypeScriptFile() {
  let invoicesCode = '';
  let paymentsCode = '';

  let totalInvoiced = 0;
  let totalPaid = 0;
  let totalDue = 0;

  const invoices = [];
  const payments = [];

  rawData.forEach((row, index) => {
    if (row.bill > 0) {
      totalInvoiced += row.bill;
      const isPaid = row.payDate !== undefined || row.paid > 0 || (index < 75);
      const isDue = index >= 75; // last 8 records

      const paidAmount = isDue ? 0 : row.bill;
      const dueAmount = isDue ? row.bill : 0;
      if (!isDue) totalPaid += row.bill;
      else totalDue += row.bill;

      const items = [];
      if (row.peeled > 0 && row.raw > 0) {
        items.push({
          id: `item-${index}-1`,
          itemNumber: 1,
          itemCode: '100004',
          description: 'Potato Cubes (Peeled)',
          unit: 'وحدة',
          quantity: row.peeled,
          unitPrice: 4.0,
          vatPercent: 5,
          lineTotal: row.peeled * 4.0,
        });
        const rawUnitPrice = ((row.bill / 1.05) - (row.peeled * 4.0)) / row.raw;
        items.push({
          id: `item-${index}-2`,
          itemNumber: 2,
          itemCode: '100002',
          description: 'Raw Potato (Fresh)',
          unit: 'كيلو',
          quantity: row.raw,
          unitPrice: Math.round(rawUnitPrice * 1000) / 1000,
          vatPercent: 5,
          lineTotal: Math.round(row.raw * rawUnitPrice * 1000) / 1000,
        });
      } else if (row.peeled > 0) {
        items.push({
          id: `item-${index}-1`,
          itemNumber: 1,
          itemCode: '100004',
          description: 'Potato Cubes',
          unit: 'وحدة',
          quantity: row.peeled,
          unitPrice: 4.0,
          vatPercent: 5,
          lineTotal: row.peeled * 4.0,
        });
      }

      const subtotal = items.reduce((s, it) => s + it.lineTotal, 0);
      const vat = subtotal * 0.05;
      const grandTotal = subtotal + vat;

      const invId = `inv-xender-${index + 1}`;
      const invNumber = row.invNum || '0000';

      const invObj = {
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
          invoiceNumber: invNumber,
          invoiceDate: row.date,
          notes: row.desc,
          receiverTitle: ":المستلم",
          sellerTitle: ":البائع",
        },
        items: items,
        totals: {
          subtotal: Math.round(subtotal * 1000) / 1000,
          discount: 0,
          netAmount: Math.round(subtotal * 1000) / 1000,
          vatAmount: Math.round(vat * 1000) / 1000,
          grandTotal: Math.round(row.bill * 1000) / 1000,
          totalQuantity: (row.peeled || 0) + (row.raw || 0),
          amountInWordsArabic: "",
          amountInWordsEnglish: "",
        },
        paymentTerms: "15 Days",
        dueDate: row.date,
        paidAmount: Math.round(paidAmount * 1000) / 1000,
        dueAmount: Math.round(dueAmount * 1000) / 1000,
        status: isPaid ? "PAID" : "DUE",
        overdueDays: 0,
        payments: isPaid ? [{
          id: `pay-${index + 1}`,
          invoiceId: invId,
          invoiceNumber: invNumber,
          clientId: "cli-8206",
          clientName: "XENDER FOR TRADING L.L.C",
          paymentNumber: `REC-${1000 + index}`,
          paymentDate: row.payDate || row.date,
          amount: Math.round(row.bill * 1000) / 1000,
          paymentMethod: "Bank Transfer",
          referenceNumber: `TXN-XND-${index + 1}`,
          bankAccount: "Emirates NBD",
          notes: `Settlement for ${row.desc}`,
          createdAt: "2026-06-04T10:00:00.000Z",
        }] : [],
        createdAt: "2026-06-04T08:00:00.000Z",
        updatedAt: "2026-09-16T10:00:00.000Z",
      };

      invoices.push(invObj);
      if (isPaid) {
        payments.push(...invObj.payments);
      }
    }
  });

  const fileContent = `import { Client, ManagedInvoice, Payment } from "@/types/dashboard";
import { numberToArabicWords, numberToEnglishWords } from "@/utils/tafqeet";

export const XENDER_CLIENT: Client = {
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
  createdAt: "2026-06-04T08:00:00.000Z",
  updatedAt: "2026-09-16T10:00:00.000Z",
  totalInvoices: ${invoices.length},
  totalInvoiced: ${totalInvoiced},
  totalPaid: ${totalPaid},
  totalDue: ${totalDue},
  totalOverdue: 0,
};

export const XENDER_INVOICES: ManagedInvoice[] = ${JSON.stringify(invoices, null, 2)}.map(inv => ({
  ...inv,
  totals: {
    ...inv.totals,
    amountInWordsArabic: numberToArabicWords(inv.totals.grandTotal),
    amountInWordsEnglish: numberToEnglishWords(inv.totals.grandTotal),
  }
}));

export const XENDER_PAYMENTS: Payment[] = ${JSON.stringify(payments, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '../src/data/xenderBillingData.ts'), fileContent, 'utf8');
  console.log(`Successfully generated xenderBillingData.ts with ${invoices.length} invoices and ${payments.length} payments. Total Sales: AED ${totalInvoiced}, Total Paid: AED ${totalPaid}, Total Due: AED ${totalDue}`);
}

generateTypeScriptFile();

