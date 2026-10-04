import React from "react";
import type { Metadata } from "next";
import InvoiceGeneratorPage from "@/app/projects/invoice-generator/page";

export const metadata: Metadata = {
  title: "UAE Multi-Industry Invoicing ERP — FTA Tax Generator & Accounts Receivable | WebStudio AE",
  description: "Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, dual-mode PIN security, and PDF/Print export.",
  openGraph: {
    title: "UAE Multi-Industry Invoicing ERP — FTA Tax Generator & Accounts Receivable",
    description: "Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, dual-mode PIN security, and PDF/Print export.",
    url: "https://webstudioae.com/work/inv",
    siteName: "WebStudio AE",
    images: [
      {
        url: "https://webstudioae.com/inv-promo.jpg",
        width: 1200,
        height: 1500,
        alt: "UAE Multi-Industry Invoicing ERP Promotional Poster",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Multi-Industry Invoicing ERP — FTA Tax Generator & Accounts Receivable",
    description: "Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, dual-mode PIN security, and PDF/Print export.",
    images: ["https://webstudioae.com/inv-promo.jpg"],
  },
};

export default function WorkInvAliasPage() {
  return <InvoiceGeneratorPage />;
}
