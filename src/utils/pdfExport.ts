import jsPDF from "jspdf";
import html2canvas from "@/lib/html2canvas.esm";
import { ManagedInvoice, ReceivablesSummary } from "@/types/dashboard";
import { formatUAEAmount } from "./calculations";
import { isDemoMode } from "@/services/invoiceStorage";

export async function generateInvoicePDFBlob(
  elementOrId: string | HTMLElement = "invoice-print-container"
): Promise<{ pdf: jsPDF; blob: Blob } | null> {
  const element = typeof elementOrId === "string" ? document.getElementById(elementOrId) : elementOrId;
  if (!element) {
    console.error(`Element ${elementOrId} not found for PDF generation`);
    return null;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc: Document) => {
        const targetId = typeof elementOrId === "string" ? elementOrId : element.id;
        const clonedEl = targetId ? clonedDoc.getElementById(targetId) : null;
        if (clonedEl) {
          clonedEl.style.transform = "none";
          clonedEl.style.margin = "0 auto";
          clonedEl.style.boxShadow = "none";
          clonedEl.style.background = "#ffffff";
          clonedEl.style.position = "static";

          // Ensure zero letter-spacing on all elements to prevent html2canvas from breaking Arabic ligatures
          const allTextNodes = clonedEl.querySelectorAll("*");
          allTextNodes.forEach((node: any) => {
            if (node.style) {
              node.style.letterSpacing = "0px";
              node.style.fontKerning = "normal";
            }
          });
        }
      },
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.98);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    if (pdfHeight <= 297) {
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
    } else {
      const scale = 297 / pdfHeight;
      const finalWidth = pdfWidth * scale;
      const offsetX = (210 - finalWidth) / 2;
      pdf.addImage(imgData, "JPEG", offsetX, 0, finalWidth, 297, undefined, "FAST");
    }

    const blob = pdf.output("blob");
    return { pdf, blob };
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    return null;
  }
}

export function isMobileDevice(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const isTouch = navigator.maxTouchPoints > 1;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  return isMobileUA || (isTouch && window.innerWidth <= 1024);
}

export async function exportInvoiceToPDF(
  elementOrId: string | HTMLElement = "invoice-print-container",
  filename: string = "invoice.pdf",
  onStatusChange?: (status: string) => void
): Promise<{ success: boolean; error?: string }> {
  const cleanFilename = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
  if (onStatusChange) onStatusChange("Generating PDF...");

  const result = await generateInvoicePDFBlob(elementOrId);
  if (!result) {
    console.error("PDF generation could not find target element");
    if (onStatusChange) onStatusChange("Unable to generate PDF. Please try again.");
    return { success: false, error: "Unable to generate PDF" };
  }

  try {
    const isMobile = isMobileDevice();
    const file = new File([result.blob], cleanFilename, { type: "application/pdf" });

    // On mobile devices (iOS Safari / Android Chrome), prefer native Web Share API
    if (isMobile && typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [file] })) {
      if (onStatusChange) onStatusChange("Opening share sheet...");
      try {
        await navigator.share({
          files: [file],
          title: cleanFilename,
        });
        if (onStatusChange) onStatusChange("PDF ready");
        return { success: true };
      } catch (err: any) {
        if (err.name === "AbortError") {
          if (onStatusChange) onStatusChange("PDF ready");
          return { success: true };
        }
        console.warn("[PDF Export] Native share failed, falling back to direct download:", err);
      }
    }

    // Direct download / Blob URL fallback
    if (onStatusChange) onStatusChange("PDF ready");
    if (isMobile) {
      const blobUrl = URL.createObjectURL(result.blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = cleanFilename;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
    } else {
      result.pdf.save(cleanFilename);
    }
    return { success: true };
  } catch (error: any) {
    console.error("PDF export error:", error);
    if (onStatusChange) onStatusChange("Unable to generate PDF. Please try again.");
    return { success: false, error: error.message };
  }
}

export async function shareInvoiceViaWhatsApp(
  invoice: ManagedInvoice,
  elementOrId: string | HTMLElement = "invoice-print-container",
  customPhone?: string,
  onStatusChange?: (status: string) => void
): Promise<{ success: boolean; fallbackNotice?: string; error?: string }> {
  const filename = `Tax_Invoice_${invoice.meta.invoiceNumber || "8206"}.pdf`;
  const grandTotalStr = formatUAEAmount(invoice.totals.grandTotal);
  const dueAmountStr = formatUAEAmount(invoice.dueAmount);

  const phone = (customPhone || "971505846611").replace(/[^0-9]/g, "");

  const messageText = [
    `*TAX INVOICE / فاتورة ضريبية*`,
    `--------------------------------`,
    `📄 *Invoice #:* ${invoice.meta.invoiceNumber}`,
    `📅 *Date:* ${invoice.meta.invoiceDate}`,
    `🏢 *Client:* ${invoice.customer.name}`,
    invoice.customer.trn ? `🔢 *TRN:* ${invoice.customer.trn}` : "",
    `💰 *Grand Total:* AED ${grandTotalStr}`,
    `💳 *Status:* ${invoice.status}`,
    invoice.dueAmount > 0 ? `⚠️ *Amount Due:* AED ${dueAmountStr}` : `✅ *Settled in Full*`,
    `--------------------------------`,
    `📎 *Official FTA Tax Invoice PDF attached.*`,
    `Thank you for your business!`
  ].filter(Boolean).join("\n");

  if (onStatusChange) onStatusChange("Preparing PDF...");
  const result = await generateInvoicePDFBlob(elementOrId);

  if (!result) {
    if (onStatusChange) onStatusChange("Unable to generate PDF. Please try again.");
    return { success: false, error: "Unable to generate PDF" };
  }

  const file = new File([result.blob], filename, { type: "application/pdf" });

  // 1. Try native Web Share API with attached PDF file (Mobile / Android / iOS)
  if (typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      if (onStatusChange) onStatusChange("Opening share sheet...");
      await navigator.share({
        files: [file],
        title: `Tax Invoice #${invoice.meta.invoiceNumber}`,
        text: messageText,
      });
      if (onStatusChange) onStatusChange("PDF ready");
      return { success: true };
    } catch (err: any) {
      if (err.name === "AbortError") {
        if (onStatusChange) onStatusChange("PDF ready");
        return { success: true };
      }
      console.warn("[WhatsApp PDF] Native share failed, falling back to download & link:", err);
    }
  }

  // 2. Fallback if native file share is not supported (Desktop or unsupported browser)
  if (onStatusChange) onStatusChange("Opening WhatsApp...");

  // Download the PDF file to device
  const blobUrl = URL.createObjectURL(result.blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);

  // Open WhatsApp with prefilled message
  const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messageText)}`;
  window.open(waUrl, "_blank");

  if (onStatusChange) onStatusChange("PDF ready");
  return {
    success: true,
    fallbackNotice: "PDF saved to your downloads. Please attach it in WhatsApp.",
  };
}

export function triggerPrintInvoice() {
  window.print();
}

export function exportAgingMatrixToPDF(
  receivables: ReceivablesSummary,
  asOfDate: string = "16-09-2026",
  invoices: ManagedInvoice[] = []
) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 269mm

  const isDemo = isDemoMode();
  const companyTitle = isDemo ? "APEX COMMERCIAL TRADING & SERVICES L.L.C" : "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C";
  const trnSubtitle = isDemo
    ? "Tax Registration Number (TRN): 100294817200003  |  Dubai & Abu Dhabi, United Arab Emirates"
    : "Tax Registration Number (TRN): 104798388500003  |  Abu Dhabi & Dubai, United Arab Emirates";

  // Helper to draw top banner
  const drawHeader = (pageNumber: number) => {
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, pageWidth, 26, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text(companyTitle, margin, 10);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(trnSubtitle, margin, 16);
    doc.text("Corporate Accounts Receivable & Credit Control Department", margin, 21);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(16, 185, 129);
    doc.text("ACCOUNTS RECEIVABLE AGING & INVOICE LEDGER", pageWidth - margin, 10, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text(`Required As-Of Date: ${asOfDate}`, pageWidth - margin, 16, { align: "right" });
    doc.text(`Currency: AED (UAE Dirham) • Page ${pageNumber}`, pageWidth - margin, 21, { align: "right" });
  };

  // PAGE 1
  drawHeader(1);

  // 3 Commercial KPI Cards
  const totalInvoiced = invoices.reduce((s, i) => s + (i.totals?.grandTotal || 0), 0) || receivables.totalReceivable;
  const totalPaid = invoices.reduce((s, i) => s + (i.paidAmount || 0), 0);
  const totalDue = invoices.reduce((s, i) => s + (i.dueAmount || 0), 0) || receivables.totalReceivable;
  
  const currentReceivables = receivables.current || invoices.filter(i => (i.overdueDays || 0) <= 0 && i.dueAmount > 0).reduce((s, i) => s + i.dueAmount, 0) || totalDue;

  const kpis = [
    { title: "TOTAL OUTSTANDING BALANCE", val: formatUAEAmount(totalDue), note: "Across all commercial ledgers", r: 15, g: 23, b: 42, tr: 248, tg: 113, tb: 113 },
    { title: "CURRENT RECEIVABLES", val: formatUAEAmount(currentReceivables), note: "Within agreed credit terms", r: 236, g: 253, b: 245, tr: 5, tg: 150, tb: 105 },
    { title: "TOTAL SETTLED (PAID)", val: formatUAEAmount(totalPaid), note: "Confirmed payments received", r: 240, g: 253, b: 250, tr: 13, tg: 148, tb: 136 },
  ];

  const cardWidth = (contentWidth - 6) / 3;
  const cardY = 30;
  const cardH = 15;

  kpis.forEach((k, idx) => {
    const x = margin + idx * (cardWidth + 3);
    doc.setFillColor(k.r, k.g, k.b);
    doc.roundedRect(x, cardY, cardWidth, cardH, 2, 2, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(k.tr, k.tg, k.tb);
    doc.text(k.title, x + 4, cardY + 5.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(`AED ${k.val}`, x + 4, cardY + 11.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    doc.setTextColor(idx === 0 ? 148 : 100, idx === 0 ? 163 : 116, idx === 0 ? 184 : 139);
    doc.text(k.note, x + cardWidth - 4, cardY + 11.5, { align: "right" });
  });

  // Section 1: Summary Matrix
  let currentY = 49;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("1. Commercial Clients Accounts Summary", margin, currentY);
  currentY += 3;

  const summaryCols = [
    { title: "Account #", width: 24, align: "left" },
    { title: "Commercial Client Name", width: 85, align: "left" },
    { title: "Total Invoiced (AED)", width: 40, align: "right" },
    { title: "Settled Paid (AED)", width: 40, align: "right" },
    { title: "Current (AED)", width: 40, align: "right" },
    { title: "Total Due (AED)", width: 40, align: "right" },
  ];

  const sumRowH = 7;
  doc.setFillColor(30, 41, 59);
  doc.rect(margin, currentY, contentWidth, sumRowH, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);

  let sumColX = margin;
  summaryCols.forEach((col) => {
    const textX = col.align === "right" ? sumColX + col.width - 2 : sumColX + 2;
    doc.text(col.title, textX, currentY + 4.8, { align: col.align as any });
    sumColX += col.width;
  });

  currentY += sumRowH;

  receivables.buckets.forEach((b, index) => {
    if (index % 2 === 0) doc.setFillColor(248, 250, 252);
    else doc.setFillColor(255, 255, 255);
    doc.rect(margin, currentY, contentWidth, sumRowH, "F");

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, currentY + sumRowH, margin + contentWidth, currentY + sumRowH);

    doc.setFontSize(7.5);
    let cellX = margin;

    const clientInvs = invoices.filter(
      (inv) => inv.customer?.id === b.clientId || inv.customer?.name?.trim().toLowerCase() === b.clientName.trim().toLowerCase()
    );
    const clientInvoiced = clientInvs.reduce((s, i) => s + (i.totals?.grandTotal || 0), 0) || b.totalDue;
    const clientPaid = clientInvs.reduce((s, i) => s + (i.paidAmount || 0), 0);
    const isCustom = b.paymentTerms?.toLowerCase() === "custom";
    const clientCurrent = isCustom ? b.totalDue : (b.current !== undefined && b.current > 0 ? b.current : (b.within7Days !== undefined ? b.within7Days : b.totalDue));

    const values = [
      { val: `#${b.accountNumber || "429"}`, align: "left", bold: true },
      { val: b.clientName, align: "left", bold: true },
      { val: formatUAEAmount(clientInvoiced), align: "right" },
      { val: formatUAEAmount(clientPaid), align: "right", color: [5, 150, 105] as [number, number, number] },
      { val: formatUAEAmount(clientCurrent), align: "right" },
      { val: formatUAEAmount(b.totalDue), align: "right", bold: true, color: [225, 29, 72] as [number, number, number] },
    ];

    values.forEach((v, i) => {
      const colDef = summaryCols[i];
      if (v.bold) doc.setFont("helvetica", "bold");
      else doc.setFont("helvetica", "normal");
      if (v.color) doc.setTextColor(v.color[0], v.color[1], v.color[2]);
      else doc.setTextColor(15, 23, 42);

      const textX = colDef.align === "right" ? cellX + colDef.width - 2 : cellX + 2;
      doc.text(v.val, textX, currentY + 4.8, { align: colDef.align as any });
      cellX += colDef.width;
    });

    currentY += sumRowH;
  });

  // Section 2: Detailed Invoices Breakdown (All Invoices)
  currentY += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(`2. Detailed Invoice Receivables Ledger (${invoices.length || 21} Invoices)`, margin, currentY);
  currentY += 3;

  const invCols = [
    { title: "Invoice #", width: 20, align: "left" },
    { title: "Date", width: 22, align: "left" },
    { title: "Commercial Client", width: 62, align: "left" },
    { title: "Item Code & Description", width: 48, align: "left" },
    { title: "Total (AED)", width: 28, align: "right" },
    { title: "Paid (AED)", width: 26, align: "right" },
    { title: "Due (AED)", width: 28, align: "right" },
    { title: "Status", width: 35, align: "center" },
  ];

  const drawInvHeader = (y: number) => {
    doc.setFillColor(30, 41, 59);
    doc.rect(margin, y, contentWidth, sumRowH, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);

    let x = margin;
    invCols.forEach((col) => {
      const tx = col.align === "right" ? x + col.width - 2 : col.align === "center" ? x + col.width / 2 : x + 2;
      doc.text(col.title, tx, y + 4.8, { align: col.align as any });
      x += col.width;
    });
  };

  drawInvHeader(currentY);
  currentY += sumRowH;

  let pageNum = 1;

  invoices.forEach((inv, index) => {
    if (currentY + sumRowH > 195) {
      doc.addPage();
      pageNum += 1;
      drawHeader(pageNum);
      currentY = 32;
      drawInvHeader(currentY);
      currentY += sumRowH;
    }

    if (index % 2 === 0) doc.setFillColor(248, 250, 252);
    else doc.setFillColor(255, 255, 255);
    doc.rect(margin, currentY, contentWidth, sumRowH, "F");

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, currentY + sumRowH, margin + contentWidth, currentY + sumRowH);

    doc.setFontSize(7.2);
    let x = margin;

    const rowData = [
      { val: `#${inv.meta.invoiceNumber}`, align: "left", bold: true },
      { val: inv.meta.invoiceDate, align: "left" },
      { val: inv.customer.name, align: "left" },
      { val: "100004 Potato Cubes", align: "left", bold: true },
      { val: `AED ${formatUAEAmount(inv.totals.grandTotal)}`, align: "right", bold: true },
      { val: formatUAEAmount(inv.paidAmount), align: "right", color: inv.paidAmount > 0 ? ([5, 150, 105] as [number, number, number]) : undefined },
      { val: formatUAEAmount(inv.dueAmount), align: "right", bold: true, color: inv.dueAmount > 0 ? ([225, 29, 72] as [number, number, number]) : ([100, 116, 139] as [number, number, number]) },
      { val: inv.status, align: "center", bold: true, color: inv.status === "PAID" ? ([5, 150, 105] as [number, number, number]) : ([217, 119, 6] as [number, number, number]) },
    ];

    rowData.forEach((item, i) => {
      const colDef = invCols[i];
      if (item.bold) doc.setFont("helvetica", "bold");
      else doc.setFont("helvetica", "normal");
      if (item.color) doc.setTextColor(item.color[0], item.color[1], item.color[2]);
      else doc.setTextColor(15, 23, 42);

      const tx = colDef.align === "right" ? x + colDef.width - 2 : colDef.align === "center" ? x + colDef.width / 2 : x + 2;
      doc.text(item.val, tx, currentY + 4.8, { align: colDef.align as any });
      x += colDef.width;
    });

    currentY += sumRowH;
  });

  // Grand Total of Invoices
  if (currentY + sumRowH > 195) {
    doc.addPage();
    pageNum += 1;
    drawHeader(pageNum);
    currentY = 32;
  }

  doc.setFillColor(15, 23, 42);
  doc.rect(margin, currentY, contentWidth, sumRowH + 1, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text("ALL INVOICES TOTAL (AED)", margin + 2, currentY + 5.5);

  const grandTotalInvoiced = invoices.reduce((s, i) => s + (i.totals?.grandTotal || 0), 0) || receivables.totalReceivable;
  const grandTotalPaid = invoices.reduce((s, i) => s + (i.paidAmount || 0), 0);
  const grandTotalDue = invoices.reduce((s, i) => s + (i.dueAmount || 0), 0) || receivables.totalReceivable;

  let totalOffset = margin + invCols[0].width + invCols[1].width + invCols[2].width + invCols[3].width;
  doc.text(`AED ${formatUAEAmount(grandTotalInvoiced)}`, totalOffset + invCols[4].width - 2, currentY + 5.5, { align: "right" });
  totalOffset += invCols[4].width;
  doc.setTextColor(52, 211, 153);
  doc.text(`AED ${formatUAEAmount(grandTotalPaid)}`, totalOffset + invCols[5].width - 2, currentY + 5.5, { align: "right" });
  totalOffset += invCols[5].width;
  doc.setTextColor(248, 113, 113);
  doc.text(`AED ${formatUAEAmount(grandTotalDue)}`, totalOffset + invCols[6].width - 2, currentY + 5.5, { align: "right" });

  currentY += sumRowH + 8;

  // Footer notes
  const footerNote = isDemo
    ? "Official Commercial Document • Generated via UAE Multi-Industry Invoicing ERP System • Confidential"
    : "Official Commercial Document • Generated via Nabta Vegetables & Fruits Trading ERP System • Confidential";

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text(footerNote, margin, currentY);
  doc.text(`Report As Of: ${asOfDate}  |  Total Pages: ${pageNum}`, pageWidth - margin, currentY, { align: "right" });

  doc.save(`AR_Aging_Matrix_${asOfDate || "16-09-2026"}.pdf`);
}


