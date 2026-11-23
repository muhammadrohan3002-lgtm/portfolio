import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  timestamp?: number;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message, honeypot, timestamp } = body;

    // 1. Anti-spam honeypot detection
    if (honeypot && honeypot.trim().length > 0) {
      console.warn("[Contact API] Bot submission blocked by honeypot field.");
      return NextResponse.json(
        { success: false, error: "Automated submission detected." },
        { status: 400 }
      );
    }

    // 2. Anti-spam rapid submission check (< 1200ms humanly impossible)
    if (timestamp && typeof timestamp === "number") {
      const elapsed = Date.now() - timestamp;
      if (elapsed < 1200) {
        console.warn(`[Contact API] Rapid submission rejected (${elapsed}ms).`);
        return NextResponse.json(
          { success: false, error: "Submission was too fast. Please take a moment and try again." },
          { status: 400 }
        );
      }
    }

    // 3. Strict field validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name (at least 2 characters)." },
        { status: 400 }
      );
    }
    if (name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must not exceed 100 characters." },
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
    if (email.trim().length > 120) {
      return NextResponse.json(
        { success: false, error: "Email must not exceed 120 characters." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }
    if (subject.trim().length > 150) {
      return NextResponse.json(
        { success: false, error: "Subject must not exceed 150 characters." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please write a message with at least 10 characters." },
        { status: 400 }
      );
    }
    if (message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must not exceed 5000 characters." },
        { status: 400 }
      );
    }

    const destinationEmail = process.env.CONTACT_EMAIL || "muhammadrohan3002@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // Server-side audit log for contact inquiry
    const logTimestamp = new Date().toISOString();
    console.log(`[Contact Inquiry ${logTimestamp}] From: ${name.trim()} <${email.trim()}> | Subject: ${subject.trim()}`);
    console.log(`[Message Body]:\n${message.trim()}`);

    // Pre-filled direct email URL fallback
    const mailtoSubject = encodeURIComponent(`[Inquiry] ${subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hi Rohan,\n\n${message.trim()}\n\n---\nSent by: ${name.trim()}\nEmail: ${email.trim()}`
    );
    const directMailtoUrl = `mailto:${destinationEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // 4. Actual email delivery via Resend (when configured)
    if (resendApiKey) {
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
          console.error("[Contact API] Resend dispatch failed:", errData);
          throw new Error("Resend external API rejected the email request");
        }

        return NextResponse.json({
          success: true,
          delivered: true,
          configured: true,
          message: "Your message has been sent successfully! Rohan will get back to you shortly.",
        });
      } catch (err: unknown) {
        console.error("[Contact API] Email delivery error:", err);
        return NextResponse.json(
          {
            success: false,
            delivered: false,
            configured: true,
            error: "Unable to dispatch email through the automated gateway at this moment. Please use the direct email link below.",
            directMailtoUrl,
          },
          { status: 502 }
        );
      }
    }

    // 5. When automated delivery credentials are NOT configured:
    // IMPORTANT: Never report success=true when email wasn't delivered!
    return NextResponse.json({
      success: false,
      delivered: false,
      configured: false,
      error: "Automated email delivery is awaiting server configuration (RESEND_API_KEY environment variable is not set).",
      message: "Automated email delivery is not yet configured on this deployment. Please click the button below to send your pre-filled message directly to Rohan via your email client.",
      directMailtoUrl,
    });
  } catch (error: unknown) {
    console.error("[Contact API] Internal route error:", error);
    return NextResponse.json(
      { success: false, delivered: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
