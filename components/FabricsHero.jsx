"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FabricsHero() {
  return (
    <section
      className="fabrics-hero af-hero"
      style={{ "--hero-object-position": "center center", "--hero-mobile-object-position": "center center" }}
    >
      {/* =====================================================
          MEDIA
      ===================================================== */}

      <div className="fabrics-hero__media af-hero__media">
        <Image
          src="/garments/hero.webp"
          alt="Apparel Fastener fabric development"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="fabrics-hero__image af-hero__image"
        />

        <div className="fabrics-hero__overlay af-hero__overlay" />
      </div>

      <div className="fabrics-hero__grid af-hero__grid" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="fabrics-hero__container af-hero__content">

        {/* TOP */}

        <div className="fabrics-hero__top af-hero__meta">
          <span>APPAREL FASTENER</span>

          <span className="fabrics-hero__brand">
            01 / FABRICS
          </span>
        </div>


        {/* BODY */}

        <div className="fabrics-hero__body af-hero__main">

          <div className="fabrics-hero__title-wrap af-hero__heading">

            <span className="fabrics-hero__kicker af-hero__eyebrow">
              FABRIC COLLECTION
            </span>

            <h1 className="fabrics-hero__title af-hero__title">
              <span>BUILT</span>
              <span>FROM</span>
              <span>FIBRE.</span>
            </h1>

          </div>


          <div className="fabrics-hero__side af-hero__info">

            <div className="fabrics-hero__line af-hero__info-line" />

            <p>
              From sustainable fibres to woven and knitted
              structures, we develop fabrics for apparel and
              technical applications through considered
              materials and controlled processes.
            </p>

            <Link
              href="#fabric-collections"
              className="fabrics-hero__cta af-hero__button"
            >
              <span>Explore Fabrics</span>

              <span className="fabrics-hero__cta-icon af-hero__button-icon">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                />
              </span>
            </Link>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="fabrics-hero__bottom af-hero__bottom">

          <div className="fabrics-hero__system af-hero__categories">
            <span>SUSTAINABLE</span>

            <i />

            <span>WOVEN</span>

            <i />

            <span>KNITTED</span>
          </div>

          <div className="fabrics-hero__location af-hero__location">
            <span>LAHORE</span>

            <i />

            <span>PAKISTAN</span>
          </div>

        </div>

      </div>

    </section>
  );
}