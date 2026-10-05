"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./GlobalPresence.css";

const locations = [
  {
    number: "01",
    city: "LAHORE",
    country: "PAKISTAN",
    role: "MANUFACTURING",
    description:
      "Our Lahore base connects apparel manufacturing with production, development and finishing capabilities.",
    image: "/home/22%20%E2%80%94%20Factory%20Architecture.webp",
  },
  {
    number: "02",
    city: "HONG KONG",
    country: "HONG KONG",
    role: "GLOBAL OFFICE",
    description:
      "Our Hong Kong presence connects the business with international apparel markets, partners and customers.",
    image: "/home/26%20%E2%80%94%20Global%20Apparel.webp",
  },
  {
    number: "03",
    city: "GUANGZHOU",
    country: "CHINA",
    role: "GLOBAL OFFICE",
    description:
      "Our China presence strengthens connections across one of the world's major apparel and manufacturing regions.",
    image: "/home/22%20%E2%80%94%20Factory%20Architecture2.webp",
  },
];

export default function GlobalPresence() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("global-presence--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="global-presence"
    >
      <div className="global-presence__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="global-presence__header">

          <div className="global-presence__eyebrow">
            <span className="global-presence__eyebrow-line" />
            <span>GLOBAL PRESENCE</span>
          </div>

          <div className="global-presence__heading-grid">

            <h2 className="global-presence__title">
              <span>CONNECTED</span>
              <span>BEYOND</span>
              <span><em>BORDERS.</em></span>
            </h2>

            <div className="global-presence__intro">
              <p>
                Apparel Fastener operates across key apparel and
                manufacturing markets, connecting production
                capabilities with international business networks.
              </p>

              <Link
                href="/contact"
                className="global-presence__link"
              >
                <span>Connect With Us</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>

        {/* =================================================
            NETWORK VISUAL
        ================================================= */}

        <div className="global-presence__network">

          <div className="global-presence__network-image">
            <img
              src="/home/26%20%E2%80%94%20Global%20Apparel.webp"
              alt="Global apparel manufacturing network"
            />

            <div className="global-presence__network-overlay" />

            <div className="global-presence__network-label">
              <span>APPAREL FASTENER</span>
              <span>GLOBAL NETWORK</span>
            </div>

            <div className="global-presence__network-grid" />

            <div className="global-presence__route global-presence__route--one" />
            <div className="global-presence__route global-presence__route--two" />

            <div className="global-presence__marker global-presence__marker--lahore">
              <span />
              <strong>LAHORE</strong>
            </div>

            <div className="global-presence__marker global-presence__marker--hongkong">
              <span />
              <strong>HONG KONG</strong>
            </div>

            <div className="global-presence__marker global-presence__marker--china">
              <span />
              <strong>CHINA</strong>
            </div>
          </div>

          <div className="global-presence__network-copy">
            <span>THREE LOCATIONS</span>

            <h3>
              LOCAL
              <br />
              KNOWLEDGE.
              <br />
              <em>GLOBAL REACH.</em>
            </h3>

            <p>
              Our locations bring together manufacturing,
              international business and apparel-market access
              within one connected network.
            </p>
          </div>

        </div>

        {/* =================================================
            LOCATIONS
        ================================================= */}

        <div className="global-presence__locations">

          {locations.map((location) => (
            <article
              key={location.number}
              className="global-location"
            >

              <div className="global-location__media">
                <img
                  src={location.image}
                  alt={`${location.city} ${location.country}`}
                  className="global-location__image"
                />

                <div className="global-location__overlay" />

                <span className="global-location__number">
                  {location.number}
                </span>

                <span className="global-location__arrow">
                  ↗
                </span>
              </div>

              <div className="global-location__content">

                <div className="global-location__meta">
                  <span>{location.role}</span>
                  <span>{location.country}</span>
                </div>

                <h3>{location.city}</h3>

                <p>{location.description}</p>

              </div>

            </article>
          ))}

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="global-presence__bottom">

          <span className="global-presence__bottom-label">
            GLOBAL / 03 LOCATIONS
          </span>

          <div className="global-presence__bottom-line" />

          <p>
            FROM LAHORE TO THE WORLD.
          </p>

        </div>

      </div>
    </section>
  );
}