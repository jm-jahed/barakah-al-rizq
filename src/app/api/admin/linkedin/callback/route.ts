import { NextRequest, NextResponse } from 'next/server';
import { LinkedInClient } from '@/lib/linkedin/client';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    if (error) {
      const errorMsg = errorDescription || error;
      const redirectUrl = new URL(`/admin/linkedin?error=${encodeURIComponent(errorMsg)}`, req.url);
      return NextResponse.redirect(redirectUrl);
    }

    if (!code) {
      const redirectUrl = new URL('/admin/linkedin?error=' + encodeURIComponent('No authorization code was found in the URL. Please use the "Connect LinkedIn" button below to initiate the OAuth authorization flow.'), req.url);
      return NextResponse.redirect(redirectUrl);
    }

    // Exchange authorization code for fresh access token
    const redirectUri = process.env.LINKEDIN_REDIRECT_URI || `${req.nextUrl.origin}/api/admin/linkedin/callback`;
    const client = new LinkedInClient({
      redirectUri,
    });
    const tokenData = await client.exchangeCodeForToken(code);

    // Immediately fetch authenticated member identity via OpenID userinfo
    const authenticatedClient = new LinkedInClient({
      accessToken: tokenData.accessToken,
    });
    
    let profileData: any = null;
    let authorUrn = '';
    let authorName = '';

    try {
      profileData = await authenticatedClient.getProfile();
      authorUrn = profileData.urn;
      authorName = profileData.name;
    } catch (profileErr: any) {
      console.error('Profile discovery error during OAuth callback');
    }

    // Persist securely to .env.local without exposing secrets in logs
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      let envContent = fs.readFileSync(envPath, 'utf8');

      // Update access token
      if (envContent.includes('LINKEDIN_ACCESS_TOKEN=')) {
        envContent = envContent.replace(
          /LINKEDIN_ACCESS_TOKEN=.*/,
          `LINKEDIN_ACCESS_TOKEN="${tokenData.accessToken}"`
        );
      } else {
        envContent += `\nLINKEDIN_ACCESS_TOKEN="${tokenData.accessToken}"\n`;
      }

      // Update author URN if discovered
      if (authorUrn) {
        if (envContent.includes('LINKEDIN_AUTHOR_URN=')) {
          envContent = envContent.replace(
            /LINKEDIN_AUTHOR_URN=.*/,
            `LINKEDIN_AUTHOR_URN="${authorUrn}"`
          );
        } else {
          envContent += `\nLINKEDIN_AUTHOR_URN="${authorUrn}"\n`;
        }
      }

      // Update author name if discovered
      if (authorName) {
        if (envContent.includes('LINKEDIN_AUTHOR_NAME=')) {
          envContent = envContent.replace(
            /LINKEDIN_AUTHOR_NAME=.*/,
            `LINKEDIN_AUTHOR_NAME="${authorName}"`
          );
        } else {
          envContent += `\nLINKEDIN_AUTHOR_NAME="${authorName}"\n`;
        }
      }

      fs.writeFileSync(envPath, envContent, 'utf8');
    }

    // Redirect user back to the Admin LinkedIn Studio with a success flag
    const redirectUrl = new URL('/admin/linkedin?auth=success', req.url);
    return NextResponse.redirect(redirectUrl);
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 });
  }
}
