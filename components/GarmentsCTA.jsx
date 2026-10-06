"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import "./GarmentsCTA.css";

export default function GarmentsCTA() {
  return (
    <section className="garments-cta" id="garment-contact">
      <div className="garments-cta__background">
        <Image
          src="/garments/catalogue.webp"
          alt="Apparel Fastener garment collection"
          fill
          sizes="100vw"
          quality={95}
        />

        <div className="garments-cta__overlay" />
      </div>

      <div className="garments-cta__content">
        {/* TOP */}
        <div className="garments-cta__top">
          <div className="garments-cta__section">
            <span>08</span>
            <span>CONTACT</span>
          </div>

          <span className="garments-cta__brand">
            APPAREL FASTENER
          </span>
        </div>

        {/* MAIN */}
        <div className="garments-cta__main">
          <div className="garments-cta__heading">
            <p>START THE NEXT FORM</p>

            <h2>
              READY TO
              <br />
              BUILD YOUR
              <br />
              NEXT
              <br />
              <em>GARMENT?</em>
            </h2>
          </div>

          <div className="garments-cta__side">
            <div className="garments-cta__line" />

            <p>
              From jackets and sweaters to complete garment
              development, our team works across product, material,
              construction and finishing to bring the right form
              together.
            </p>

            <Link
              href="/contact"
              className="garments-cta__button"
            >
              <span>START A CONVERSATION</span>

              <span className="garments-cta__button-icon">
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="garments-cta__bottom">
          <div className="garments-cta__categories">
            <span>JACKETS</span>
            <i />
            <span>SWEATERS</span>
            <i />
            <span>DEVELOPMENT</span>
          </div>

          <div className="garments-cta__plus">
            <Plus size={15} strokeWidth={1.5} />
          </div>

          <div className="garments-cta__location">
            <span>CHINA</span>
            <i />
            <span>HONGKONG</span>
          </div>
        </div>
      </div>

      <div className="garments-cta__corner garments-cta__corner--tl" />
      <div className="garments-cta__corner garments-cta__corner--br" />
    </section>
  );
}