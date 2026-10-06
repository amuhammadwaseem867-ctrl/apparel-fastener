import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const division = String(body.division || "").trim();
    const message = String(body.message || "").trim();

    // Required fields
    if (!name || !email || !division || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is missing.");

      return Response.json(
        { error: "Receiving email is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_FROM_EMAIL) {
      console.error("CONTACT_FROM_EMAIL is missing.");

      return Response.json(
        { error: "Sender email is not configured." },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Website Enquiry — ${division}`,
      text: [
        "NEW APPAREL FASTENER WEBSITE ENQUIRY",
        "",
        `Name: ${name}`,
        `Company: ${company || "Not provided"}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Division: ${division}`,
        "",
        "Message:",
        message,
        "",
        "Submitted from the Apparel Fastener website.",
      ].join("\n"),
    });

    // Resend error
    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send your enquiry. Please try again." },
        { status: 500 }
      );
    }

    // Success
    return Response.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}