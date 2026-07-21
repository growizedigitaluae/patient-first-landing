import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Configured for Port 587 with STARTTLS (required for Vercel serverless)
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 587,
      secure: false, // MUST be false for port 587 (uses STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Patient First Landing" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: 'New Lead: Patient First Worldwide Launch Notification',
      text: `New subscriber email: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #0A192F;">New Lead Registered</h2>
          <p>A new visitor has requested launch updates:</p>
          <p style="background: #fff; padding: 15px; border-radius: 5px; font-size: 16px; color: #333;"><strong>${email}</strong></p>
          <p style="font-size: 12px; color: #777;">Patient First Worldwide Landing Page</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('SMTP Detailed Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}