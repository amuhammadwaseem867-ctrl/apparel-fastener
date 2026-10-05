"use client";

import { useEffect, useRef } from "react";
import "./CompanyIntro.css";

export default function CompanyIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("company-intro--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="company-intro">
      <div className="company-intro__container">

        {/* Top Label */}
        <div className="company-intro__top">
          <div className="company-intro__eyebrow">
            <span className="company-intro__eyebrow-line" />
            <span>WHO WE ARE</span>
          </div>

          <span className="company-intro__index">
            APPAREL FASTENER
          </span>
        </div>

        {/* Main Editorial Content */}
        <div className="company-intro__grid">

          {/* Heading */}
          <div className="company-intro__heading-wrap">
            <h2 className="company-intro__heading">
              <span>BUILDING</span>
              <span>THE SYSTEMS</span>
              <span className="company-intro__heading-accent">
                BEHIND
              </span>
              <span>MODERN APPAREL.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="company-intro__copy">
            <p className="company-intro__lead">
              Apparel Fastener brings together garments, fabrics and
              garment accessories within one connected apparel
              ecosystem.
            </p>

            <p className="company-intro__text">
              From material selection and product development to
              manufacturing and finishing, we connect the essential
              elements behind modern apparel with a focus on quality,
              consistency and precision.
            </p>

            <a href="/about" className="company-intro__link">
              <span>Discover Apparel Fastener</span>
              <span className="company-intro__link-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="company-intro__image-wrap">
          <div className="company-intro__image-frame">
            <img
              src="/home/02%20%E2%80%94%20Garment%20Production%20Floor.webp"
              alt="Garment production floor"
              className="company-intro__image"
            />

            <div className="company-intro__image-overlay" />
          </div>

          <div className="company-intro__caption">
            <span>APPAREL MANUFACTURING</span>
            <span>LAHORE · PAKISTAN</span>
          </div>
        </div>

      </div>
    </section>
  );
}