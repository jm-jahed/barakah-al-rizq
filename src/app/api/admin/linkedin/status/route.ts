import { NextResponse } from 'next/server';
import { LinkedInClient } from '@/lib/linkedin/client';

export async function GET() {
  try {
    const hasToken = !!process.env.LINKEDIN_ACCESS_TOKEN;
    const hasClient = !!process.env.LINKEDIN_CLIENT_ID && !!process.env.LINKEDIN_CLIENT_SECRET;

    if (!hasToken) {
      return NextResponse.json({
        connected: false,
        hasClientConfigured: hasClient,
        message: 'No LinkedIn access token configured.',
      });
    }

    const client = new LinkedInClient();
    const orgId = process.env.LINKEDIN_ORG_ID || '143603354';
    const orgUrn = process.env.LINKEDIN_ORG_URN || `urn:li:organization:${orgId}`;
    const orgName = process.env.LINKEDIN_ORG_NAME || 'WebStudio AE';

    try {
      const profile = await client.getProfile();
      return NextResponse.json({
        connected: true,
        hasClientConfigured: true,
        profile: {
          name: profile.name,
          email: profile.email,
          urn: profile.urn,
          picture: profile.picture,
        },
        organization: {
          id: orgId,
          name: orgName,
          urn: orgUrn,
        },
      });
    } catch (profileErr: any) {
      // If userinfo scope is pending but token is present
      const fallbackUrn = process.env.LINKEDIN_AUTHOR_URN;
      const fallbackName = process.env.LINKEDIN_AUTHOR_NAME;

      return NextResponse.json({
        connected: true,
        hasClientConfigured: true,
        profile: fallbackName || fallbackUrn ? {
          name: fallbackName || 'LinkedIn Member',
          urn: fallbackUrn,
        } : null,
        organization: {
          id: orgId,
          name: orgName,
          urn: orgUrn,
        },
        note: 'Token active.',
      });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
