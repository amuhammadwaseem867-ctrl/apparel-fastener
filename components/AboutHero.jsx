"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./AboutHero.css";

export default function AboutHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const timer = window.setTimeout(() => {
      section.classList.add("about-hero--visible");
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-hero"
    >
      <div className="about-hero__media">
        <img
          src="/home/22%20%E2%80%94%20Factory%20Architecture.webp"
          alt="Apparel Fastener manufacturing facility"
          className="about-hero__image"
        />

        <div className="about-hero__overlay" />
        <div className="about-hero__vignette" />
      </div>

      <div className="about-hero__grid" />

      <div className="about-hero__container">

        <div className="about-hero__top">

          <div className="about-hero__eyebrow">
            <span className="about-hero__eyebrow-line" />
            <span>ABOUT APPAREL FASTENER</span>
          </div>

          <span className="about-hero__index">
            01 / ABOUT
          </span>

        </div>

        <div className="about-hero__content">

          <h1 className="about-hero__title">
            <span>ONE</span>
            <span>CONNECTED</span>
            <span><em>APPAREL</em></span>
            <span>SYSTEM.</span>
          </h1>

          <div className="about-hero__copy">

            <p>
              Apparel Fastener brings together garments,
              fabrics and garment accessories through one
              connected approach to apparel production.
            </p>

            <Link
              href="#story"
              className="about-hero__link"
            >
              <span>Discover Our Story</span>
              <span>↓</span>
            </Link>

          </div>

        </div>

        <div className="about-hero__bottom">

          <div className="about-hero__locations">
            <span>LAHORE</span>
            <i />
            <span>HONG KONG</span>
            <i />
            <span>CHINA</span>
          </div>

          <span className="about-hero__label">
            APPAREL / MATERIAL / COMPONENTS
          </span>

        </div>

      </div>
    </section>
  );
}