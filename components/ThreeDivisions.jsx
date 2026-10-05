"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./ThreeDivisions.css";

const divisions = [
  {
    number: "01",
    title: "GARMENTS",
    description:
      "Apparel manufacturing built around quality, precision and consistent production.",
    image: "/home/10%20finished%20garments.webp",
    href: "/garments",
  },
  {
    number: "02",
    title: "FABRICS",
    description:
      "Materials selected and developed to support performance, construction and finish.",
    image: "/home/04%20%E2%80%94%20Fabric%20Rolls.webp",
    href: "/fabrics",
  },
  {
    number: "03",
    title: "GARMENT ACCESSORIES",
    description:
      "Essential components and finishing details that complete the apparel system.",
    image: "/home/11%20%E2%80%94%20Apparel%20Accessories.webp",
    href: "/garment-accessories",
  },
];

export default function ThreeDivisions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("three-divisions--visible");
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
      className="three-divisions"
    >
      <div className="three-divisions__container">

        {/* Header */}
        <div className="three-divisions__header">
          <div className="three-divisions__eyebrow">
            <span className="three-divisions__eyebrow-line" />
            <span>OUR WORLD</span>
          </div>

          <h2 className="three-divisions__title">
            <span>THREE DIVISIONS.</span>
            <span>
              ONE{" "}
              <em>APPAREL</em>
            </span>
            <span>ECOSYSTEM.</span>
          </h2>

          <p className="three-divisions__intro">
            From materials to finished apparel, our capabilities
            connect the essential elements of modern garment
            production.
          </p>
        </div>

        {/* Division Grid */}
        <div className="three-divisions__grid">
          {divisions.map((division) => (
            <Link
              key={division.number}
              href={division.href}
              className="division-card"
            >
              <div className="division-card__image-wrap">
                <img
                  src={division.image}
                  alt={division.title}
                  className="division-card__image"
                />

                <div className="division-card__overlay" />
              </div>

              <div className="division-card__content">

                <div className="division-card__top">
                  <span>{division.number}</span>

                  <span className="division-card__plus">
                    +
                  </span>
                </div>

                <div className="division-card__bottom">
                  <h3>{division.title}</h3>

                  <p>{division.description}</p>

                  <span className="division-card__link">
                    <span>Explore Division</span>
                    <span className="division-card__arrow">
                      ↗
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}