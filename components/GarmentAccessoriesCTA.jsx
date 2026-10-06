"use client";

import Image from "next/image";
import Link from "next/link";
import "./GarmentAccessoriesCTA.css";

export default function GarmentAccessoriesCTA() {
  return (
    <section className="accessories-cta">
      {/* BACKGROUND */}
      <div className="accessories-cta__media">
        <Image
          src="/garments/catalogue.webp"
          alt="Garment accessories and production"
          fill
          priority
          sizes="100vw"
          className="accessories-cta__image"
        />

        <div className="accessories-cta__overlay" />
        <div className="accessories-cta__vignette" />
      </div>

      {/* TECHNICAL GRID */}
      <div className="accessories-cta__grid" />

      {/* CONTENT */}
      <div className="accessories-cta__container">
        {/* TOP META */}
        <div className="accessories-cta__top">
          <div className="accessories-cta__section">
            <span className="accessories-cta__section-number">06</span>
            <span className="accessories-cta__section-line" />
            <span>ACCESSORIES / CONTACT</span>
          </div>

          <span className="accessories-cta__brand">
            APPAREL FASTENER
          </span>
        </div>

        {/* MAIN */}
        <div className="accessories-cta__content">
          <div className="accessories-cta__heading">
            <p className="accessories-cta__eyebrow">
              FROM COMPONENT
              <br />
              TO FINISHED FORM.
            </p>

            <h1 className="accessories-cta__title">
              <span>READY TO</span>
              <span>BUILD THE</span>
              <span>RIGHT</span>
              <span>GARMENT?</span>
            </h1>
          </div>

          <div className="accessories-cta__copy">
            <p>
              Tell us what you are developing. We can help identify the
              components, details and finishing elements required to move your
              garment from development through production and distribution.
            </p>

            <Link href="/contact" className="accessories-cta__link">
              <span>Start a Conversation</span>
              <span className="accessories-cta__arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* BOTTOM META */}
        <div className="accessories-cta__bottom">
          <div className="accessories-cta__locations">
            <span>LAHORE</span>
            <i />
            <span>HONG KONG</span>
            <i />
            <span>CHINA</span>
          </div>

          <span className="accessories-cta__label">
            GARMENT ACCESSORIES / APPAREL SYSTEM
          </span>
        </div>
      </div>
    </section>
  );
}