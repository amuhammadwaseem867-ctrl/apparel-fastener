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

    if (!name || !email || !division || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receivingEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!receivingEmail) {
      console.error("CONTACT_TO_EMAIL is missing.");

      return Response.json(
        { error: "Receiving email is not configured." },
        { status: 500 }
      );
    }

    if (!fromEmail) {
      console.error("CONTACT_FROM_EMAIL is missing.");

      return Response.json(
        { error: "Sender email is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [receivingEmail],
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

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send your enquiry. Please try again." },
        { status: 500 }
      );
    }

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