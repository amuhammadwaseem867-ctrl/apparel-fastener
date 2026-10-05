"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./GarmentsHero.css";

export default function GarmentsHero() {
  return (
    <section className="garments-hero">
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

      <div className="garments-hero__veil" />
      <div className="garments-hero__grid" />

      <div className="garments-hero__content">
        <div className="garments-hero__top">
          <span>APPAREL FASTENER</span>
          <span>01 / GARMENTS</span>
        </div>

        <div className="garments-hero__body">
          <div className="garments-hero__title-wrap">
            <p className="garments-hero__kicker">
              GARMENT COLLECTION
            </p>

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

          <div className="garments-hero__side">
            <div className="garments-hero__line" />

            <p className="garments-hero__description">
              From structured jackets to refined sweaters, we develop
              garments where material, construction, precision and
              finishing come together as one complete product.
            </p>

            <Link
              href="#garment-collections"
              className="garments-hero__cta"
            >
              <span>Explore Garments</span>

              <span className="garments-hero__cta-icon">
                <ArrowUpRight size={19} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="garments-hero__bottom">
        <div className="garments-hero__system">
          <span>JACKETS</span>
          <i />
          <span>SWEATERS</span>
          <i />
          <span>DEVELOPMENT</span>
        </div>

        <div className="garments-hero__scroll">
          <span className="garments-hero__scroll-icon">
            <ArrowDown size={15} strokeWidth={1.8} />
          </span>

          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="garments-hero__location">
          <span>LAHORE</span>
          <i />
          <span>PAKISTAN</span>
        </div>
      </div>

      <div className="garments-hero__corner garments-hero__corner--tl" />
      <div className="garments-hero__corner garments-hero__corner--br" />
    </section>
  );
}