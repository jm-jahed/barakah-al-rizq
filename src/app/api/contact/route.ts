import { NextResponse } from 'next/server';
import { createLead } from '@/lib/mongodb';
import { sendGeneralInquiryEmail, sendSalesQuotationEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message, source, productName, quantity, orderType } = body;

    if (!name || !email || !phone || (!message && !productName)) {
      return NextResponse.json({ error: 'Required fields missing (Name, Email, Phone, Message/Product)' }, { status: 400 });
    }

    const isSalesOrQuote =
      source === 'quote' ||
      source === 'sales' ||
      source === 'container' ||
      (service && /quote|quotation|wholesale|container|spot/i.test(service));

    const newLead = await createLead({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company?.trim() || '',
      service: service || (isSalesOrQuote ? 'Wholesale Produce Quotation' : 'General Inquiry'),
      budget: budget || 'Not Specified',
      message: message ? message.trim() : `Quotation request for ${productName || 'Wholesale Produce'} (${quantity || '1 Container'})`,
      source: source || (isSalesOrQuote ? 'quote_modal' : 'contact_form'),
      notes: isSalesOrQuote ? 'Received via wholesale sales / quotation desk.' : 'Received via website contact form.',
    });

    let emailResult;
    if (isSalesOrQuote) {
      emailResult = await sendSalesQuotationEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company?.trim(),
        productName: productName || service,
        quantity,
        orderType,
        notes: message,
      });
    } else {
      emailResult = await sendGeneralInquiryEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company?.trim(),
        service,
        budget,
        message: message || '',
      });
    }

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      emailDispatched: emailResult?.success ?? false,
    });
  } catch (err: any) {
    console.error('[API CONTACT ERROR]:', err?.message || err);
    return NextResponse.json({ error: 'Failed to process inquiry', details: err?.message || String(err) }, { status: 500 });
  }
}

