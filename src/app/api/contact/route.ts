import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Patient First Worldwide <onboarding@resend.dev>', 
      to: ['m.dayasena1980@gmail.com'], // <-- Put your personal Gmail here for instant testing
      replyTo: email,
      subject: 'New Lead: Patient First Worldwide Launch Notification',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #0A192F;">New Lead Registered</h2>
          <p>A new visitor has requested launch updates:</p>
          <p style="background: #fff; padding: 15px; border-radius: 5px; font-size: 16px; color: #333;"><strong>${email}</strong></p>
          <p style="font-size: 12px; color: #777;">Patient First Worldwide Landing Page</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}