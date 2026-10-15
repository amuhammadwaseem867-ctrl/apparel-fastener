"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/site";

const DIVISION_OPTIONS = [...divisions.map((division) => division.title), "Multiple divisions"];

export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    if (status.type === "sending") return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setStatus({ type: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you — your enquiry has been received. Our team will be in touch shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  }

  const sending = status.type === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label className="field">
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label className="field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>

        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>

        <label className="field field--full">
          <span>Division *</span>
          <select name="division" required defaultValue="">
            <option value="" disabled>
              Select a division
            </option>
            {DIVISION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field field--full">
          <span>Message *</span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Tell us about your product, quantities and timeline."
          />
        </label>
      </div>

      <div className="contact-form__footer">
        <button type="submit" className="btn btn--solid" disabled={sending}>
          {sending ? "Sending…" : "Send enquiry"}
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </button>

        <p
          className={`contact-form__status contact-form__status--${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
