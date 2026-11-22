import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please write a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Check if an email dispatch service is configured via environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.CONTACT_EMAIL || "rohan.cse.dev@gmail.com";

    // Server-side audit log for contact inquiry
    const timestamp = new Date().toISOString();
    console.log(`[Contact Inquiry ${timestamp}] From: ${name.trim()} <${email.trim()}> | Subject: ${subject.trim()}`);
    console.log(`[Message Body]: ${message.trim()}`);

    if (resendApiKey) {
      // If Resend API Key is provided in environment variables:
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: destinationEmail,
            reply_to: email.trim(),
            subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
            text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          console.error("Resend delivery failed:", errData);
          throw new Error("Failed to dispatch email via external provider");
        }

        return NextResponse.json({
          success: true,
          delivered: true,
          message: "Your message has been sent successfully! Rohan will get back to you shortly.",
        });
      } catch (err: unknown) {
        console.error("Email service error:", err);
        return NextResponse.json(
          {
            success: false,
            error: "Unable to dispatch email through the automated gateway at this moment. Please use the direct email link.",
          },
          { status: 502 }
        );
      }
    }

    // When no third-party email API key is configured in local/dev environment:
    // We clearly report that the inquiry was captured on the server and provide the direct mailto fallback
    const mailtoSubject = encodeURIComponent(`[Inquiry] ${subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hi Rohan,\n\n${message.trim()}\n\nBest regards,\n${name.trim()}\n${email.trim()}`
    );
    const directMailtoUrl = `mailto:${destinationEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      success: true,
      delivered: false,
      configuredProvider: false,
      message:
        "Your message was received and logged on the server. Because automated email delivery credentials are not set on this server, you can also launch a direct email pre-filled with your message.",
      directMailtoUrl,
    });
  } catch (error: unknown) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
