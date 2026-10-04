import { NextResponse } from 'next/server';
import { createLead } from '@/lib/mongodb';
import { sendLeadNotificationEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message, source } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Required fields missing (Name, Email, Phone, Message)' }, { status: 400 });
    }

    const newLead = await createLead({
      name,
      email,
      phone,
      company: company || '',
      service: service || 'General Inquiry',
      budget: budget || 'Not Specified',
      message,
      source: source || 'website',
      notes: 'Received via website contact form.',
    });

    await sendLeadNotificationEmail(newLead);

    return NextResponse.json({ success: true, leadId: newLead.id });
  } catch (err: any) {
    console.error('Contact error:', err);
    return NextResponse.json({ error: 'Failed to process inquiry', details: err?.message || String(err) }, { status: 500 });
  }
}
