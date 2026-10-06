"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./GarmentsHero.css";

export default function GarmentsHero() {
  return (
    <section className="garments-hero">
      {/* Background Image */}
      <div className="garments-hero__media">
        <Image
          src="/garments/herogarment.webp"
          alt="Apparel Fastener garment collection"
          fill
          priority
          quality={95}
          sizes="100vw"
        />
      </div>

      {/* Image Overlay */}
      <div className="garments-hero__overlay" />

      {/* Editorial Grid */}
      <div className="garments-hero__grid" />

      {/* Main Content */}
      <div className="garments-hero__content">
        {/* Top Meta */}
        <div className="garments-hero__meta">
          <span>APPAREL FASTENER</span>
          <span>01 / GARMENTS</span>
        </div>

        {/* Main Area */}
        <div className="garments-hero__main">
          {/* Heading */}
          <div className="garments-hero__heading">
            <span className="garments-hero__eyebrow">
              GARMENT COLLECTION
            </span>

            <h1>
              BUILT
              <br />
              FOR THE
              <br />
              FINISHED
              <br />
              <em>GARMENT.</em>
            </h1>
          </div>

          {/* Description */}
          <div className="garments-hero__info">
            <span className="garments-hero__info-line" />

            <p>
              From structured jackets to refined sweaters, we develop
              garments where material, construction, precision and
              finishing come together as one complete product.
            </p>

            <Link
              href="#garment-collections"
              className="garments-hero__button"
            >
              <span>Explore Garments</span>

              <span className="garments-hero__button-icon">
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="garments-hero__bottom">
        <div className="garments-hero__categories">
          <span>JACKETS</span>
          <i />
          <span>SWEATERS</span>
          <i />
          <span>DEVELOPMENT</span>
        </div>

        <div className="garments-hero__location">
          <span>CHINA</span>
          <i />
          <span>HONGKONG</span>
        </div>
      </div>

      {/* Corner Details */}
      <span className="garments-hero__corner garments-hero__corner--top" />
      <span className="garments-hero__corner garments-hero__corner--bottom" />
    </section>
  );
}