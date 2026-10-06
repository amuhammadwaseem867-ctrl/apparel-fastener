"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import "./ContactPage.css";

const OFFICES = [
  {
    number: "01",
    city: "Lahore",
    role: "MANUFACTURING",
    address:
      "33B PUNJAB SMALL INDUSTRIES CORPORATION, SUNDER II, LAHORE, PAKISTAN",
    phone: "+92 313 4710325",
    tel: "+923134710325",
  },
  {
    number: "02",
    city: "Hong Kong",
    role: "GLOBAL OFFICE",
    address:
      "UNIT 2406B, 24/F, LOW BLOCK, GRAND MILLENNIUM PLAZA, 181 QUEEN'S ROAD CENTRAL, SHEUNG WAN, HONG KONG",
    phone: "+852 9850 9479",
    tel: "+85298509479",
  },
  {
    number: "03",
    city: "Guangzhou",
    role: "GLOBAL OFFICE",
    address:
      "RM 1101, 11/F, BLOCK A, GUANGZHOU INTERNATIONAL TRADE CENTER, 6 ZHONGXIN ROAD, HAIZHU DISTRICT, GUANGZHOU, CHINA",
    phone: "+86 20 8963 7634",
    tel: "+862089637634",
  },
];

const DIVISIONS = [
  "Garments",
  "Fabrics",
  "Garment Accessories",
  "Multiple divisions",
];

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;

    setStatus("");
    setIsSubmitting(true);

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      division: formData.get("division"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your enquiry."
        );
      }

      setStatus(
        "Thank you. Your enquiry has been received — our team will contact you shortly."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="contact-hero af-hero">
        <div className="contact-hero__media">
          <Image
            src="/home/26%20%E2%80%94%20Global%20Apparel.webp"
            alt="Apparel Fastener global apparel network"
            fill
            priority
            sizes="100vw"
            className="contact-hero__image"
          />

          <div className="contact-hero__overlay" />
          <div className="contact-hero__vignette" />
        </div>

        <div className="contact-hero__grid" />

        <div className="contact-hero__content">
          <div className="contact-hero__top">
            <div className="contact-hero__eyebrow">
              <span>06</span>
              <span className="contact-hero__line" />
              <span>CONTACT</span>
            </div>

            <span className="contact-hero__brand">
              APPAREL FASTENER
            </span>
          </div>

          <div className="contact-hero__main">
            <div className="contact-hero__heading">
              <p className="contact-hero__kicker">
                GLOBAL CONNECTIONS.
              </p>

              <h1 className="contact-hero__title">
                <span>LET'S</span>
                <span>BUILD</span>
                <span>TOGETHER.</span>
              </h1>
            </div>

            <div className="contact-hero__copy">
              <p>
                From product development to production,
                connect with our team to discuss your next
                apparel requirement.
              </p>

              <a
                href="#enquiry"
                className="contact-hero__link"
              >
                <span>Send Enquiry</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>

          <div className="contact-hero__bottom">
            <div className="contact-hero__locations">
              <span>LAHORE</span>
              <i />
              <span>HONG KONG</span>
              <i />
              <span>CHINA</span>
            </div>

            <span className="contact-hero__label">
              GLOBAL APPAREL NETWORK
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICES
      ========================================================= */}
      <section className="contact-offices">
        <div className="contact-offices__intro">
          <div className="contact-offices__eyebrow">
            <span>01</span>
            <span>OUR OFFICES</span>
          </div>

          <div className="contact-offices__heading">
            <p>CONNECTED GLOBALLY.</p>

            <h2>
              THREE LOCATIONS.
              <br />
              ONE NETWORK.
            </h2>
          </div>

          <p className="contact-offices__description">
            Our teams connect manufacturing, sourcing and
            apparel development across key locations in
            South Asia and East Asia.
          </p>
        </div>

        <div className="contact-offices__grid">
          {OFFICES.map((office) => (
            <article
              className="contact-office"
              key={office.number}
            >
              <div className="contact-office__top">
                <span>{office.number}</span>
                <span>{office.role}</span>
              </div>

              <div className="contact-office__main">
                <h3>{office.city}</h3>

                <div className="contact-office__address">
                  <MapPin
                    size={16}
                    strokeWidth={1.4}
                  />

                  <p>{office.address}</p>
                </div>

                <a
                  href={`tel:${office.tel}`}
                  className="contact-office__phone"
                >
                  {office.phone}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          ENQUIRY
      ========================================================= */}
      <section
        id="enquiry"
        className="contact-enquiry"
      >
        <div className="contact-enquiry__intro">
          <div className="contact-enquiry__eyebrow">
            <span>02</span>
            <span>START A CONVERSATION</span>
          </div>

          <div className="contact-enquiry__heading">
            <p>TELL US WHAT YOU ARE BUILDING.</p>

            <h2>
              LET'S DISCUSS
              <br />
              YOUR NEXT PROJECT.
            </h2>
          </div>

          <p className="contact-enquiry__description">
            Share your requirements with our team. Whether
            you are developing a new collection, sourcing
            materials or looking for garment components,
            we will connect you with the right division.
          </p>
        </div>

        <div className="contact-enquiry__form-wrap">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* NAME */}
            <div className="contact-form__field">
              <label htmlFor="name">
                Name <span>*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            {/* COMPANY */}
            <div className="contact-form__field">
              <label htmlFor="company">
                Company
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                autoComplete="organization"
              />
            </div>

            {/* EMAIL */}
            <div className="contact-form__field">
              <label htmlFor="email">
                Email <span>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            {/* PHONE */}
            <div className="contact-form__field">
              <label htmlFor="phone">
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+92"
                autoComplete="tel"
              />
            </div>

            {/* DIVISION */}
            <div className="contact-form__field">
              <label htmlFor="division">
                Division <span>*</span>
              </label>

              <select
                id="division"
                name="division"
                defaultValue=""
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select a division
                </option>

                {DIVISIONS.map((division) => (
                  <option
                    key={division}
                    value={division}
                  >
                    {division}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}
            <div className="contact-form__field contact-form__field--message">
              <label htmlFor="message">
                Message <span>*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your project, requirements or enquiry."
                required
              />
            </div>

            {/* SUBMIT */}
            <div className="contact-form__submit-wrap">
              <button
                type="submit"
                className="contact-form__submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? "Sending..."
                    : "Send an Enquiry"}
                </span>

                {!isSubmitting && (
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                )}
              </button>

              {status && (
                <p
                  className="contact-form__status"
                  aria-live="polite"
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="contact-final-cta">
        <div className="contact-final-cta__media">
          <Image
            src="/home/22%20%E2%80%94%20Factory%20Architecture.webp"
            alt="Apparel Fastener manufacturing facility"
            fill
            sizes="100vw"
            className="contact-final-cta__image"
          />

          <div className="contact-final-cta__overlay" />
          <div className="contact-final-cta__grid" />
        </div>

        <div className="contact-final-cta__content">
          <div className="contact-final-cta__top">
            <span>03 / CONNECT</span>
            <span>APPAREL FASTENER</span>
          </div>

          <div className="contact-final-cta__main">
            <p className="contact-final-cta__eyebrow">
              GLOBAL APPAREL CONNECTIONS.
            </p>

            <h2>
              <span>LET'S START</span>
              <span>THE NEXT</span>
              <span>PROJECT.</span>
            </h2>

            <a
              href="#enquiry"
              className="contact-final-cta__link"
            >
              <span>Send an Enquiry</span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
              />
            </a>
          </div>

          <div className="contact-final-cta__bottom">
            <span>
              LAHORE · HONG KONG · GUANGZHOU
            </span>

            <span>
              APPAREL / FABRICS / ACCESSORIES
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}