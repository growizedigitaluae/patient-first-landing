import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Configure Nodemailer for Namecheap Private Email with explicit IPv4 socket bypass
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Forces IPv4 to prevent connection hangups on cloud hosting environments
      socketTimeout: 10000,
      connectionTimeout: 10000,
    });

    await transporter.sendMail({
      from: `"Patients First Worldwide" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_RECEIVER,
      replyTo: email,
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