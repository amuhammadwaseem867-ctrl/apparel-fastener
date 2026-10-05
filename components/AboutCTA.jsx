"use client";

import Link from "next/link";
import Image from "next/image";
import "./AboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta__visual">
        <Image
          src="/home/28%20%E2%80%94%20Closing%20Hero%20Factory.webp"
          alt="Apparel Fastener factory"
          fill
          sizes="100vw"
          className="about-cta__image"
        />

        <div className="about-cta__overlay" />
      </div>

      <div className="about-cta__content">
        <div className="about-cta__top">
          <span>APPAREL FASTENER</span>
          <span>06 / ABOUT</span>
        </div>

        <div className="about-cta__main">
          <span className="about-cta__eyebrow">
            LET&apos;S BUILD
            <br />
            WHAT&apos;S NEXT
          </span>

          <h2>
            ONE APPAREL
            <br />
            PERSPECTIVE.
            <br />
            MANY
            <br />
            POSSIBILITIES.
          </h2>

          <p>
            Whether you are developing a collection, sourcing materials,
            or building the details of a finished garment, we are ready
            to connect with you.
          </p>

          <Link href="/contact" className="about-cta__button">
            <span>Start a Conversation</span>
            <span className="about-cta__arrow">↗</span>
          </Link>
        </div>

        <div className="about-cta__bottom">
          <span>LAHORE · HONG KONG · GUANGZHOU</span>
          <span>APPAREL / MATERIAL / COMPONENTS</span>
        </div>
      </div>
    </section>
  );
}