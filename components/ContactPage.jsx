"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import "./QualityPage.css";
import "./ContactPage.css";

const OFFICES = [
  {
    number: "01",
    role: "MANUFACTURING",
    city: "LAHORE",
    address: "20 KM Ferozepur Road, Lahore, Pakistan",
    phone: "+92 313 4710325",
    tel: "+923134710325",
  },
  {
    number: "02",
    role: "GLOBAL OFFICE",
    city: "HONG KONG",
    address:
      "Rm 701-702, 7/F, Fu Fai Commercial Centre, 27 Hillier Street, Sheung Wan, Hong Kong",
    phone: "+852 9850 9479",
    tel: "+85298509479",
  },
  {
    number: "03",
    role: "GLOBAL OFFICE",
    city: "GUANGZHOU",
    address:
      "Rm C214-C215, Poly International Plaza, West Building, 686 Yuejiang Middle Road, Haizhu District, Guangzhou, China",
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

  function handleSubmit(event) {
    event.preventDefault();

    setStatus(
      "Thank you. Your enquiry has been received — our team will contact you shortly."
    );

    event.currentTarget.reset();
  }

  return (
    <main className="contact-page">
      {/* ==================================================
          01 / HERO
      ================================================== */}

      <section className="contact-hero">
        <div className="contact-hero__media" aria-hidden="true">
          <Image
            src="/home/26%20%E2%80%94%20Global%20Apparel.webp"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        <div className="contact-hero__veil" />

        <div className="contact-hero__grid" aria-hidden="true" />

        <div className="contact-hero__inner">
          <div className="contact-hero__content">
            <p className="contact-hero__kicker">
              <span>01</span>
              CONTACT
            </p>

            <h1 className="contact-hero__title">
              START A
              <br />
              <em>CONVERSATION.</em>
            </h1>

            <p className="contact-hero__lead">
              Tell us what you are building. From garments and fabrics to
              garment accessories, connect with the team closest to your
              requirements.
            </p>

            <div className="contact-hero__actions">
              <a
                href="#enquiry"
                className="af-button"
              >
                Send an Enquiry

                <span className="af-button__icon">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="        Contact-hero__footer">
          <span>LAHORE · HONG KONG · GUANGZHOU</span>
          <span>INTERNATIONAL APPAREL NETWORK</span>
        </div>
      </section>

      {/* ==================================================
          02 / GLOBAL OFFICES
      ================================================== */}

      <section className="contact-offices">
        <div className="container">
          <div className="contact-section-head">
            <div>
              <p className="contact-section-head__eyebrow">
                <span>02</span>
                GLOBAL OFFICES
              </p>

              <h2 className="contact-section-head__title">
                REACH US
                <br />
                <em>DIRECTLY.</em>
              </h2>
            </div>

            <p className="contact-section-head__description">
              Our network connects manufacturing, development and
              international operations across key apparel markets.
            </p>
          </div>

          <div className="contact-offices__grid">
            {OFFICES.map((office) => (
              <article
                className="contact-office"
                key={office.number}
              >
                <div className="contact-office__top">
                  <span className="contact-office__number">
                    {office.number}
                  </span>

                  <span className="contact-office__role">
                    {office.role}
                  </span>
                </div>

                <div className="contact-office__body">
                  <h3 className="contact-office__city">
                    {office.city}
                  </h3>

                  <div className="contact-office__address">
                    <MapPin
                      size={16}
                      strokeWidth={1.5}
                    />

                    <p>{office.address}</p>
                  </div>
                </div>

                <a
                  className="contact-office__phone"
                  href={`tel:${office.tel}`}
                  aria-label={`Call our ${office.city} office on ${office.phone}`}
                >
                  <span>Contact Office</span>

                  <strong>{office.phone}</strong>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          03 / ENQUIRY
      ================================================== */}

      <section
        className="contact-form-section"
        id="enquiry"
      >
        <div className="container">
          <div className="contact-form-section__top">
            <p className="contact-section-head__eyebrow">
              <span>03</span>
              Send an Enquiry
            </p>

            <div className="contact-form-section__heading">
              <h2 className="contact-form-section__title">
                TELL US ABOUT
                <br />
                <em>YOUR PROJECT.</em>
              </h2>

              <p className="contact-form-section__intro">
                Share your requirements, application and development
                needs. We will connect your enquiry with the relevant
                Apparel Fastener division.
              </p>
            </div>
          </div>

          <div className="contact-form-section__layout">
            <aside className="contact-form-aside">
              <div className="contact-form-aside__line" />

              <p className="contact-form-aside__label">
                What We Work With
              </p>

              <ul className="contact-form-aside__list">
                <li>
                  <span>01</span>
                  Garments
                </li>

                <li>
                  <span>02</span>
                  Fabrics
                </li>

                <li>
                  <span>03</span>
                  Garment Accessories
                </li>

                <li>
                  <span>04</span>
                  Multiple Divisions
                </li>
              </ul>

              <div className="contact-form-aside__contact">
                <p>Direct Contact</p>

                <a href="tel:+923134710325">
                  +92 313 4710325
                </a>
              </div>
            </aside>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label
                    className="contact-form__label"
                    htmlFor="contact-name"
                  >
                    Name <span>*</span>
                  </label>

                  <input
                    className="contact-form__input"
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label
                    className="contact-form__label"
                    htmlFor="contact-company"
                  >
                    Company
                  </label>

                  <input
                    className="contact-form__input"
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label
                    className="contact-form__label"
                    htmlFor="contact-email"
                  >
                    Email <span>*</span>
                  </label>

                  <input
                    className="contact-form__input"
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label
                    className="contact-form__label"
                    htmlFor="contact-phone"
                  >
                    Phone
                  </label>

                  <input
                    className="contact-form__input"
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+92"
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label
                  className="contact-form__label"
                  htmlFor="contact-division"
                >
                  Division <span>*</span>
                </label>

                <select
                  className="contact-form__select"
                  id="contact-division"
                  name="division"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
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

              <div className="contact-form__field">
                <label
                  className="contact-form__label"
                  htmlFor="contact-message"
                >
                  Message <span>*</span>
                </label>

                <textarea
                  className="contact-form__textarea"
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project, requirements or development needs."
                  required
                />
              </div>

              <div className="contact-form__bottom">
                <p className="contact-form__required">
                  <span>*</span> Required fields
                </p>

                <button
                  type="submit"
                  className="af-button af-button--navy"
                >
                  Send an Enquiry

                  <span className="af-button__icon">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </button>
              </div>

              {status && (
                <p
                  className="contact-form__status"
                  role="status"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 / FINAL CTA
      ================================================== */}

      <section className="contact-final">
        <div className="contact-final__media" aria-hidden="true">
          <Image
            src="/home/26%20%E2%80%94%20Global%20Apparel.webp"
            alt=""
            fill
            quality={82}
            sizes="100vw"
          />
        </div>

        <div className="contact-final__veil" />

        <div className="contact-final__inner">
          <p className="contact-final__eyebrow">
            APPAREL FASTENER
          </p>

          <h2 className="contact-final__title">
            LET&apos;S BUILD
            <br />
            <em>WHAT&apos;S NEXT.</em>
          </h2>

          <p className="contact-final__copy">
            From the first requirement to the finished product,
            our teams are ready to support your next development.
          </p>

          <a
            href="#enquiry"
            className="af-button"
          >
            Start a Conversation

            <span className="af-button__icon">
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
              />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}