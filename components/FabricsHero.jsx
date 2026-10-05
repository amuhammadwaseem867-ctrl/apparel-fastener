"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./FabricsHero.css";

export default function FabricsHero() {
  return (
    <section className="fabrics-hero">
      <div className="fabrics-hero__media">
        <Image
          src="/garments/hero.webp"
          alt="Apparel Fastener fabric development"
          fill
          priority
          quality={95}
          sizes="100vw"
        />
      </div>

      <div className="fabrics-hero__veil" />
      <div className="fabrics-hero__grid" />

      <div className="fabrics-hero__content">
        <div className="fabrics-hero__top">
          <span>APPAREL FASTENER</span>
          <span>01 / FABRICS</span>
        </div>

        <div className="fabrics-hero__body">
          <div className="fabrics-hero__title-wrap">
            <p className="fabrics-hero__kicker">
              FABRIC COLLECTION
            </p>

            <h1>
              BUILT
              <br />
              FROM
              <br />
              <em>FIBRE.</em>
            </h1>
          </div>

          <div className="fabrics-hero__side">
            <div className="fabrics-hero__line" />

            <p>
              From sustainable fibres to woven and knitted structures,
              we develop fabrics for apparel and technical applications
              through considered materials and controlled processes.
            </p>

            <Link
              href="#fabric-collections"
              className="fabrics-hero__cta"
            >
              <span>Explore Fabrics</span>

              <span className="fabrics-hero__cta-icon">
                <ArrowUpRight size={19} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="fabrics-hero__bottom">
        <div className="fabrics-hero__system">
          <span>SUSTAINABLE</span>
          <i />
          <span>WOVEN</span>
          <i />
          <span>KNITTED</span>
        </div>

        <div className="fabrics-hero__scroll">
          <span className="fabrics-hero__scroll-icon">
            <ArrowDown size={15} strokeWidth={1.8} />
          </span>

          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="fabrics-hero__location">
          <span>LAHORE</span>
          <i />
          <span>PAKISTAN</span>
        </div>
      </div>

      <div className="fabrics-hero__corner fabrics-hero__corner--tl" />
      <div className="fabrics-hero__corner fabrics-hero__corner--br" />
    </section>
  );
}