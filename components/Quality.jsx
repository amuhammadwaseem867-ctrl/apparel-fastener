"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./Quality.css";

const qualityPoints = [
  {
    number: "01",
    title: "INSPECTION",
    text:
      "Products and materials are inspected throughout the production process to maintain consistent standards.",
  },
  {
    number: "02",
    title: "MEASUREMENT",
    text:
      "Defined measurements and specifications help maintain accuracy across materials, components and finished apparel.",
  },
  {
    number: "03",
    title: "CONSISTENCY",
    text:
      "Controlled processes support repeatable results across production runs and apparel applications.",
  },
  {
    number: "04",
    title: "ATTENTION TO DETAIL",
    text:
      "From construction to finishing, details are considered at every stage of the apparel production system.",
  },
];

export default function Quality() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("quality--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="quality"
    >
      <div className="quality__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="quality__header">

          <div className="quality__eyebrow">
            <span className="quality__eyebrow-line" />
            <span>QUALITY</span>
          </div>

          <div className="quality__heading-grid">

            <h2 className="quality__title">
              <span>PRECISION</span>
              <span>AT EVERY</span>
              <span><em>STAGE.</em></span>
            </h2>

            <div className="quality__intro">
              <p>
                Quality is built into the process, not added at
                the end. From materials and construction to
                measurement and finishing, every stage contributes
                to the final product.
              </p>

              <Link
                href="/quality"
                className="quality__link"
              >
                <span>Our Quality Approach</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>

        {/* =================================================
            FEATURE
        ================================================= */}

        <div className="quality__feature">

          <div className="quality__image-wrap">

            <img
              src="/home/16%20%E2%80%94%20Measurement.webp"
              alt="Apparel quality measurement and inspection"
              className="quality__image"
            />

            <div className="quality__image-overlay" />

            <div className="quality__image-top">
              <span>QUALITY CONTROL</span>
              <span>01</span>
            </div>

            <div className="quality__image-bottom">
              <span>MEASUREMENT / INSPECTION</span>
            </div>

          </div>

          <div className="quality__feature-copy">

            <span className="quality__feature-label">
              BUILT INTO THE PROCESS
            </span>

            <h3>
              DETAILS
              <br />
              DEFINE
              <br />
              <em>QUALITY.</em>
            </h3>

            <p>
              A reliable apparel product depends on thousands of
              individual decisions. Our quality approach focuses
              on the details that influence construction, function,
              appearance and consistency.
            </p>

          </div>

        </div>

        {/* =================================================
            QUALITY POINTS
        ================================================= */}

        <div className="quality__points">

          {qualityPoints.map((point) => (
            <div
              key={point.number}
              className="quality-point"
            >
              <div className="quality-point__top">
                <span>{point.number}</span>
                <span className="quality-point__mark">
                  +
                </span>
              </div>

              <div className="quality-point__body">
                <h3>{point.title}</h3>

                <p>{point.text}</p>
              </div>
            </div>
          ))}

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="quality__bottom">

          <span className="quality__bottom-label">
            QUALITY / CONTROL
          </span>

          <div className="quality__bottom-line" />

          <p>
            CONSISTENCY IS PART OF THE PRODUCT.
          </p>

        </div>

      </div>
    </section>
  );
}