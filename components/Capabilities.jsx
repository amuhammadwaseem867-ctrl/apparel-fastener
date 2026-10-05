"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./Capabilities.css";

const capabilities = [
  {
    number: "01",
    title: "PRODUCT DEVELOPMENT",
    text:
      "From initial requirements to production-ready specifications, we connect product development with practical manufacturing.",
  },
  {
    number: "02",
    title: "MATERIAL & FABRIC",
    text:
      "Material selection and fabric development aligned with construction, performance, appearance and end application.",
  },
  {
    number: "03",
    title: "CUTTING & CONSTRUCTION",
    text:
      "Controlled cutting and garment construction processes designed for consistency, accuracy and repeatable production.",
  },
  {
    number: "04",
    title: "ACCESSORY INTEGRATION",
    text:
      "Zippers, sliders, trims and other garment components integrated into the finished apparel system.",
  },
  {
    number: "05",
    title: "QUALITY CONTROL",
    text:
      "Inspection and measurement processes applied throughout production to maintain consistent product standards.",
  },
  {
    number: "06",
    title: "FINISHED PRODUCTION",
    text:
      "A connected production approach bringing materials, garments and components together into finished apparel.",
  },
];

export default function Capabilities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("capabilities--visible");
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
      className="capabilities"
    >
      <div className="capabilities__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="capabilities__header">

          <div className="capabilities__eyebrow">
            <span className="capabilities__eyebrow-line" />
            <span>CAPABILITIES</span>
          </div>

          <div className="capabilities__heading-grid">

            <h2 className="capabilities__title">
              <span>BUILT TO</span>
              <span>MAKE</span>
              <span><em>APPAREL.</em></span>
            </h2>

            <div className="capabilities__intro">
              <p>
                Our capabilities connect development, materials,
                manufacturing and finishing into one coordinated
                apparel production system.
              </p>

              <Link
                href="/capabilities"
                className="capabilities__link"
              >
                <span>Discover Our Capabilities</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>

        {/* =================================================
            FEATURE IMAGE
        ================================================= */}

        <div className="capabilities__feature">

          <div className="capabilities__feature-media">
            <img
              src="/home/25%20%E2%80%94%20Machinery.webp"
              alt="Apparel manufacturing machinery"
              className="capabilities__feature-image"
            />

            <div className="capabilities__feature-overlay" />

            <span className="capabilities__feature-label">
              MANUFACTURING / PRODUCTION
            </span>

            <span className="capabilities__feature-number">
              01
            </span>
          </div>

          <div className="capabilities__feature-copy">
            <span>CONNECTED PRODUCTION</span>

            <p>
              Every stage is part of a larger system. Our approach
              brings technical development and production together
              to create apparel with consistency from beginning
              to finish.
            </p>
          </div>

        </div>

        {/* =================================================
            CAPABILITY LIST
        ================================================= */}

        <div className="capabilities__list">

          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="capability"
            >
              <div className="capability__number">
                {capability.number}
              </div>

              <h3>{capability.title}</h3>

              <p>{capability.text}</p>

              <span className="capability__arrow">
                ↗
              </span>
            </div>
          ))}

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="capabilities__bottom">

          <span className="capabilities__bottom-label">
            CAPABILITY / PRODUCTION
          </span>

          <div className="capabilities__bottom-line" />

          <p>
            FROM DEVELOPMENT TO FINISHED PRODUCTION.
          </p>

        </div>

      </div>
    </section>
  );
}