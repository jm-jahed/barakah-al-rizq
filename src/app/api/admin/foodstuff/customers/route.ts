import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getWholesaleCustomers, saveWholesaleCustomer, getWholesaleOrders, normalizePhone } from '@/lib/mongodb';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const search = (searchParams.get('search') || searchParams.get('q') || '').toLowerCase().trim();
    const customerId = searchParams.get('id') || searchParams.get('customerId');

    const [customers, orders] = await Promise.all([
      getWholesaleCustomers(),
      getWholesaleOrders(),
    ]);

    if (customerId) {
      const match = customers.find(c => c.id === customerId);
      if (!match) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
      }

      // Attach customer's full order history
      const normPhone = normalizePhone(match.phone);
      const normEmail = (match.email || '').toLowerCase().trim();
      const customerOrders = orders.filter(o => {
        const orderPhone = normalizePhone(o.phone);
        const orderEmail = (o.email || '').toLowerCase().trim();
        return (normPhone && orderPhone === normPhone) || (normEmail && orderEmail === normEmail);
      });

      return NextResponse.json({
        success: true,
        customer: match,
        orders: customerOrders,
      });
    }

    // Compute live metrics across all verified customers
    const metrics = {
      totalCustomers: customers.length,
      totalCompanies: customers.filter(c => !!c.companyName).length,
      activeBuyers: customers.filter(c => c.totalOrders > 0).length,
      totalCompletedSalesAED: parseFloat(customers.reduce((sum, c) => sum + (c.completedOrderValueAED || 0), 0).toFixed(2)),
      totalPipelineAED: parseFloat(customers.reduce((sum, c) => sum + (c.totalOrderValueAED || 0), 0).toFixed(2)),
    };

    let filtered = customers;
    if (search) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(search) ||
        (c.companyName && c.companyName.toLowerCase().includes(search)) ||
        c.phone.includes(search) ||
        (c.email && c.email.toLowerCase().includes(search))
      );
    }

    return NextResponse.json({
      success: true,
      totalCount: customers.length,
      filteredCount: filtered.length,
      metrics,
      customers: filtered,
      data: filtered,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch customers';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { name, companyName, phone, email, whatsapp, trn, notes } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Buyer / Contact name is required (minimum 2 characters).' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return NextResponse.json({ error: 'Valid UAE contact phone/WhatsApp number is required.' }, { status: 400 });
    }

    const saved = await saveWholesaleCustomer({
      name: name.trim(),
      companyName: companyName && typeof companyName === 'string' ? companyName.trim() : undefined,
      phone: phone.trim(),
      email: email && typeof email === 'string' ? email.trim() : undefined,
      whatsapp: whatsapp && typeof whatsapp === 'string' ? whatsapp.trim() : phone.trim(),
      trn: trn && typeof trn === 'string' ? trn.trim() : undefined,
      notes: notes && typeof notes === 'string' ? notes.trim() : undefined,
    }, session.email);

    return NextResponse.json({ success: true, customer: saved }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to create customer';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, name, companyName, phone, email, whatsapp, trn, notes } = body;

    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Customer ID is required.' }, { status: 400 });
    }

    const customers = await getWholesaleCustomers();
    const existing = customers.find(c => c.id === id);
    if (!existing) {
      return NextResponse.json({ error: 'Customer not found.' }, { status: 404 });
    }

    const updated = await saveWholesaleCustomer({
      ...existing,
      ...(name !== undefined ? { name: name.trim() } : {}),
      ...(companyName !== undefined ? { companyName: companyName.trim() } : {}),
      ...(phone !== undefined ? { phone: phone.trim() } : {}),
      ...(email !== undefined ? { email: email.trim() } : {}),
      ...(whatsapp !== undefined ? { whatsapp: whatsapp.trim() } : {}),
      ...(trn !== undefined ? { trn: trn.trim() } : {}),
      ...(notes !== undefined ? { notes: notes.trim() } : {}),
      id,
    }, session.email);

    return NextResponse.json({ success: true, customer: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update customer';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
