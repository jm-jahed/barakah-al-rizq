import { NextResponse } from "next/server";
import { getInvoicesCollection, getDb, isMongoConfigured } from "@/lib/mongodb";
import { ManagedInvoice } from "@/types/dashboard";
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
    const collection = await getInvoicesCollection();
    const invoices = await collection.find({}).toArray();
    // Strip MongoDB _id or format as id
    const formatted = invoices.map((inv) => {
      const { _id, ...rest } = inv;
      return { ...rest, id: rest.id || _id };
    });

    // Authoritative chronological sort: Newest invoice date at the top
    formatted.sort((a, b) => parseDMY(b.meta?.invoiceDate) - parseDMY(a.meta?.invoiceDate));

    return NextResponse.json(
      { success: true, data: formatted },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate" } }
    );
  } catch (err: any) {
    console.error("GET /api/invoices error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to fetch invoices" },
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
    const body: ManagedInvoice = await req.json();
    if (!body || !body.id) {
      return NextResponse.json({ success: false, error: "Invoice id and payload required" }, { status: 400 });
    }

    const collection = await getInvoicesCollection();
    const db = await getDb();
    const doc = { ...body, _id: body.id, updatedAt: new Date().toISOString() };

    await collection.updateOne(
      { _id: body.id },
      { $set: doc },
      { upsert: true }
    );

    // Recalculate client balances in MongoDB
    if (body.customer?.id || body.customer?.name) {
      await recalculateServerClientTotals(db, body.customer.id || body.customer.name);
    }

    return NextResponse.json({ success: true, data: body });
  } catch (err: any) {
    console.error("POST /api/invoices error:", err);
    return NextResponse.json({ success: false, error: err.message || "Failed to save invoice" }, { status: 500 });
  }
}
