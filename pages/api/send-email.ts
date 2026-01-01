import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone, message, equipment, rentalDuration, startDate, location, type } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Missing SMTP credentials. Please check your .env.local file.");
      return res.status(500).json({ 
        success: false, 
        error: "Email service not configured. Please contact the administrator." 
      });
    }

    // Create transporter - configure with your email service
    // For Gmail, you'll need to use an App Password
    // For other services, update the host and credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
    });

    // Determine email subject based on form type
    const subject = type === "inquiry" && equipment
      ? `Equipment Inquiry: ${equipment} - ${name}`
      : type === "contact"
      ? `Contact Form Submission from ${name}`
      : `New Inquiry from ${name}`;

    // Build email body
    const emailBody = `
      <h2>New ${type === "inquiry" ? "Equipment Inquiry" : "Contact Form"} Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${equipment ? `<p><strong>Equipment:</strong> ${equipment}</p>` : ""}
      ${rentalDuration ? `<p><strong>Rental Duration:</strong> ${rentalDuration}</p>` : ""}
      ${startDate ? `<p><strong>Start Date:</strong> ${startDate}</p>` : ""}
      ${location ? `<p><strong>Location:</strong> ${location}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"MARGT Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "rana.margt339@gmail.com", // Where to send the email
      replyTo: email, // Reply to the sender's email
      subject: subject,
      html: emailBody,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || "Failed to send email" 
    });
  }
}

