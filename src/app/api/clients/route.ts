import { NextResponse } from "next/server";
import { getClientsCollection, getDb, isMongoConfigured } from "@/lib/mongodb";
import { Client } from "@/types/dashboard";
import { recalculateServerClientTotals } from "@/lib/accountingServer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        { success: false, error: "MongoDB not configured", data: [] },
        { status: 503, headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
      );
    }
    const collection = await getClientsCollection();
    const clients = await collection.find({}).sort({ name: 1 }).toArray();
    const formatted = clients.map((c) => {
      const { _id, ...rest } = c;
      return { ...rest, id: rest.id || _id };
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
    const body: Client = await req.json();
    if (!body || !body.id) {
      return NextResponse.json({ success: false, error: "Client id and payload required" }, { status: 400 });
    }

    const collection = await getClientsCollection();
    const db = await getDb();
    const doc = { ...body, _id: body.id, updatedAt: new Date().toISOString() };

    await collection.updateOne(
      { _id: body.id },
      { $set: doc },
      { upsert: true }
    );

    // Sync client balances from invoices/payments in MongoDB
    await recalculateServerClientTotals(db, body.id);

    return NextResponse.json({ success: true, data: body });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
