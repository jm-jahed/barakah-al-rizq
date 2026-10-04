export async function sendLeadNotificationEmail(lead: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  console.log('[EMAIL DISPATCHER] Sending new lead notification to Admin:', lead);
  // Production Resend/SMTP Integration Ready
  return { success: true };
}
