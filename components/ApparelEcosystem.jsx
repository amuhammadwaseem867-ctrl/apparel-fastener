"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./ApparelEcosystem.css";

const stages = [
  {
    number: "01",
    title: "MATERIAL",
    description:
      "The apparel journey begins with the right materials. Fabrics, components and construction details establish the foundation of every product.",
    image: "/home/04%20%E2%80%94%20Fabric%20Rolls.webp",
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    description:
      "Materials move into development, where construction, performance, appearance and function come together.",
    image: "/home/20%20%E2%80%94%20Material%20Research.webp",
  },
  {
    number: "03",
    title: "MANUFACTURING",
    description:
      "Production transforms developed materials into finished garments through controlled processes and skilled manufacturing.",
    image: "/home/02%20%E2%80%94%20Garment%20Production%20Floor.webp",
  },
  {
    number: "04",
    title: "FINISHING",
    description:
      "Details define the final product. Accessories, trims, closures and finishing processes complete the garment.",
    image: "/home/11%20%E2%80%94%20Apparel%20Accessories.webp",
  },
  {
    number: "05",
    title: "APPAREL",
    description:
      "The result is a complete apparel system where material, construction and finishing work together as one.",
    image: "/home/27%20%20Finished%20Production.webp",
  },
];

export default function ApparelEcosystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("ecosystem--visible");
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
      className="ecosystem"
    >
      <div className="ecosystem__container">

        {/* =================================================
            INTRO
        ================================================= */}

        <div className="ecosystem__intro">

          <div className="ecosystem__eyebrow">
            <span className="ecosystem__eyebrow-line" />
            <span>THE APPAREL ECOSYSTEM</span>
          </div>

          <div className="ecosystem__intro-grid">
            <h2 className="ecosystem__title">
              <span>FROM</span>
              <span>MATERIAL</span>
              <span>TO <em>APPAREL.</em></span>
            </h2>

            <div className="ecosystem__intro-copy">
              <p>
                Every finished garment is the result of connected
                decisions — from material and development to
                manufacturing and finishing.
              </p>

              <p>
                Apparel Fastener brings these elements together
                to create a more complete apparel ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            JOURNEY
        ================================================= */}

        <div className="ecosystem__journey">
          {stages.map((stage, index) => (
            <article
              key={stage.number}
              className={`ecosystem-stage ecosystem-stage--${index + 1}`}
            >
              <div className="ecosystem-stage__media">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="ecosystem-stage__image"
                />

                <div className="ecosystem-stage__overlay" />

                <span className="ecosystem-stage__number">
                  {stage.number}
                </span>
              </div>

              <div className="ecosystem-stage__content">
                <h3>{stage.title}</h3>

                <p>{stage.description}</p>
              </div>

              {index < stages.length - 1 && (
                <span className="ecosystem-stage__connector">
                  →
                </span>
              )}
            </article>
          ))}
        </div>

        {/* =================================================
            FOOTER STATEMENT
        ================================================= */}

        <div className="ecosystem__statement">
          <div className="ecosystem__statement-line" />

          <p>
            ONE CONNECTED APPROACH TO MODERN APPAREL.
          </p>

          <Link
            href="/about"
            className="ecosystem__statement-link"
          >
            <span>Explore Our Approach</span>
            <span>↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}