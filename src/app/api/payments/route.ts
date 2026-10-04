import { NextResponse } from "next/server";
import { getPaymentsCollection, getInvoicesCollection, getDb, isMongoConfigured } from "@/lib/mongodb";
import { Payment } from "@/types/dashboard";
import { calculateInvoiceStatus } from "@/services/invoiceStorage";
import { recalculateServerClientTotals } from "@/lib/accountingServer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function parseDMY(dateStr?: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    if (parts[0].length === 4) return new Date(dateStr).getTime() || 0;
    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0])).getTime() || 0;
  }
  return new Date(dateStr).getTime() || 0;
}

export async function GET() {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        { success: false, error: "MongoDB not configured", data: [] },
        { status: 503, headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
      );
    }
    const collection = await getPaymentsCollection();
    const payments = await collection.find({}).toArray();
    const formatted = payments.map((p) => {
      const { _id, ...rest } = p;
      return { ...rest, id: rest.id || _id };
    });

    // Authoritative chronological sort: Newest payment date at the top
    formatted.sort((a, b) => {
      const timeDiff = parseDMY(b.paymentDate) - parseDMY(a.paymentDate);
      if (timeDiff !== 0) return timeDiff;
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    });

    return NextResponse.json(
      { success: true, data: formatted },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate" } }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function POST(req: Request) {
  try {
    if (req.headers.get("x-demo-mode") === "true") {
      return NextResponse.json({ success: false, error: "Demo mode is completely isolated from production MongoDB." }, { status: 403 });
    }
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }
    const payment: Payment = await req.json();
    if (!payment || !payment.id || !payment.invoiceId) {
      return NextResponse.json({ success: false, error: "Payment payload incomplete" }, { status: 400 });
    }

    const payCol = await getPaymentsCollection();
    const invCol = await getInvoicesCollection();
    const db = await getDb();

    // 1. Insert or update the payment
    const doc = { ...payment, _id: payment.id, createdAt: payment.createdAt || new Date().toISOString() };
    await payCol.updateOne({ _id: payment.id }, { $set: doc }, { upsert: true });

    // 2. Recalculate and update the associated invoice in MongoDB
    const invoice = await invCol.findOne({ $or: [{ _id: payment.invoiceId }, { id: payment.invoiceId }] });
    if (invoice) {
      const allPayments = await payCol.find({ invoiceId: invoice.id || invoice._id }).toArray();
      const totalPaid = allPayments.reduce((s, p) => s + p.amount, 0);
      const grandTotal = invoice.totals?.grandTotal || 0;
      const remainingDue = Math.max(0, Math.round((grandTotal - totalPaid) * 1000) / 1000);

      const { status, overdueDays } = calculateInvoiceStatus(grandTotal, totalPaid, invoice.dueDate);

      await invCol.updateOne(
        { _id: invoice._id },
        {
          $set: {
            paidAmount: totalPaid,
            dueAmount: remainingDue,
            status,
            overdueDays,
            updatedAt: new Date().toISOString(),
          },
        }
      );
    }

    // 3. Recalculate client financial rollups in MongoDB
    const clientId = payment.clientId || invoice?.customer?.id;
    if (clientId) {
      await recalculateServerClientTotals(db, clientId);
    }

    return NextResponse.json({ success: true, data: payment });
  } catch (err: any) {
    console.error("POST /api/payments error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    if (req.headers.get("x-demo-mode") === "true") {
      return NextResponse.json({ success: false, error: "Demo mode is completely isolated from production MongoDB." }, { status: 403 });
    }
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Payment id parameter required" }, { status: 400 });
    }

    const payCol = await getPaymentsCollection();
    const invCol = await getInvoicesCollection();
    const db = await getDb();

    const payment = await payCol.findOne({ $or: [{ _id: id }, { id }] });
    if (payment) {
      await payCol.deleteOne({ _id: payment._id });

      // Recalculate invoice
      const invoice = await invCol.findOne({ $or: [{ _id: payment.invoiceId }, { id: payment.invoiceId }] });
      if (invoice) {
        const remainingPayments = await payCol.find({ invoiceId: invoice.id || invoice._id }).toArray();
        const totalPaid = remainingPayments.reduce((s, p) => s + p.amount, 0);
        const grandTotal = invoice.totals?.grandTotal || 0;
        const remainingDue = Math.max(0, Math.round((grandTotal - totalPaid) * 1000) / 1000);

        const { status, overdueDays } = calculateInvoiceStatus(grandTotal, totalPaid, invoice.dueDate);

        await invCol.updateOne(
          { _id: invoice._id },
          {
            $set: {
              paidAmount: totalPaid,
              dueAmount: remainingDue,
              status,
              overdueDays,
              payments: remainingPayments.map(({ _id, ...r }) => ({ ...r, id: r.id || _id })),
              updatedAt: new Date().toISOString(),
            },
          }
        );
      }

      // Recalculate Client in MongoDB
      const targetClientId = payment.clientId || invoice?.customer?.id;
      if (targetClientId) {
        await recalculateServerClientTotals(db, targetClientId);
      }
    }

    return NextResponse.json({ success: true, message: "Payment deleted" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
