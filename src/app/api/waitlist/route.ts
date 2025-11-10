import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Initialize Resend with API key (lazy initialization)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const { email, botpoison } = body;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Verify Botpoison token
    if (!botpoison) {
      return NextResponse.json(
        { error: 'Bot verification required' },
        { status: 400 }
      );
    }

    const verifyResponse = await fetch('https://api.botpoison.com/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.BOTPOISON_SECRET_KEY,
        solution: botpoison,
      }),
    });

    const verification = await verifyResponse.json();

    if (!verification.ok) {
      return NextResponse.json(
        { error: 'Bot verification failed' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'SDD Adopters <onboarding@sdd-adopters.com>',
      to: process.env.NOTIFICATION_EMAIL || 'hello@sdd-adopters.com',
      subject: 'New Waitlist Signup - SDD Adopters',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // Also send confirmation to user
    await resend.emails.send({
      from: 'SDD Adopters <hello@sdd-adopters.com>',
      to: email,
      subject: "You're on the list! 🎉",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #8b5cf6; font-size: 24px; margin-bottom: 20px;">Welcome to SDD Adopters!</h1>

          <p style="color: #292524; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thanks for joining our waitlist! You're now part of the first group to experience gamified onboarding.
          </p>

          <div style="background: #fff0df; border-radius: 12px; padding: 20px; margin: 30px 0;">
            <h2 style="color: #292524; font-size: 18px; margin-top: 0;">What's next?</h2>
            <ul style="color: #292524; font-size: 14px; line-height: 1.8; padding-left: 20px;">
              <li>We're launching in Q1 2026</li>
              <li>You'll get lifetime free access as an early adopter</li>
              <li>We'll keep you updated on our progress</li>
            </ul>
          </div>

          <p style="color: #292524; font-size: 14px; line-height: 1.6; margin-top: 30px;">
            Have questions? Just reply to this email.<br/>
            <span style="color: #8b5cf6;">— The SDD Adopters Team</span>
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
