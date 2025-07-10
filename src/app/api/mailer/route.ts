import { getFormattedDateTime } from "@/utils/timeconvetor";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 456,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `You’ve Got a New Message, Shubham! from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333;">You’ve Got a New Message, Shubham!</h2>
      <p style="font-size: 16px; color: #555;">Someone just reached out through your portfolio! Here's what they had to say:</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="font-weight: bold; padding: 8px; background: #f8f8f8;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; background: #f8f8f8;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; background: #f8f8f8;">Message:</td>
          <td style="padding: 8px;">${message}</td>
        </tr>
      </table>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />

       <p style="font-size: 16px; color: #333; font-weight: bold;">Submission Details</p>

      <p style="font-size: 14px; color: #555;"><strong>Date & Time:</strong> ${getFormattedDateTime()}</p>

      <p style="font-size: 14px; color: #777;">This email was automatically generated from your website's contact form.</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
