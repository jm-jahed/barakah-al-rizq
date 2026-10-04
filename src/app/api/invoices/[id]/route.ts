import { NextResponse } from "next/server";
import { getInvoicesCollection, getPaymentsCollection, getDb, isMongoConfigured } from "@/lib/mongodb";
import { recalculateServerClientTotals } from "@/lib/accountingServer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request, { params }: any) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }
    const { id } = await params;
    const collection = await getInvoicesCollection();
    const invoice = await collection.findOne({ $or: [{ _id: id }, { id: id }] });
    if (!invoice) {
      return NextResponse.json({ success: false, error: "Invoice not found" }, { status: 404 });
    }
    const { _id, ...rest } = invoice;
    return NextResponse.json({ success: true, data: { ...rest, id: rest.id || _id } });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: any) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }
    const { id } = await params;
    const invCol = await getInvoicesCollection();
    const payCol = await getPaymentsCollection();
    const db = await getDb();

    const invoice = await invCol.findOne({ $or: [{ _id: id }, { id: id }] });
    const customerId = invoice?.customer?.id || invoice?.customer?.name;

    await invCol.deleteOne({ $or: [{ _id: id }, { id: id }] });
    // Cleanup related payments
    await payCol.deleteMany({ invoiceId: id });

    // Recalculate client in MongoDB
    if (customerId) {
      await recalculateServerClientTotals(db, customerId);
    }

    return NextResponse.json({ success: true, message: `Invoice ${id} deleted` });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
