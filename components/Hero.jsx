"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!hero || !image || !content) return;

    const handleMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      image.style.transform = `
        scale(1.055)
        translate3d(${x * -12}px, ${y * -8}px, 0)
      `;

      content.style.setProperty("--mx", `${x * 5}px`);
      content.style.setProperty("--my", `${y * 3}px`);
    };

    const reset = () => {
      image.style.transform =
        "scale(1.055) translate3d(0, 0, 0)";

      content.style.setProperty("--mx", "0px");
      content.style.setProperty("--my", "0px");
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", reset);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero">
      {/* Background */}
      <div className="hero__media">
        <Image
          ref={imageRef}
          src="/home/01%20%E2%80%94%20Hero%20Factory.webp"
          alt="Apparel Fastener manufacturing facility"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="hero__image"
        />

        <div className="hero__overlay" />
        <div className="hero__vignette" />
      </div>

      {/* Minimal editorial lines */}
      <div className="hero__line hero__line--left" />
      <div className="hero__line hero__line--bottom" />

      {/* Main Content */}
      <div ref={contentRef} className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          <span>APPAREL FASTENER</span>
        </div>

        <h1 className="hero__title">
          <span>ENGINEERED</span>
          <span>FOR</span>
          <span className="hero__title-accent">APPAREL.</span>
        </h1>

        <div className="hero__action">
          <Link href="/about" className="hero__cta">
            <span>Explore Our World</span>
            <span className="hero__arrow">↗</span>
          </Link>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="hero__bottom">
        <div className="hero__scroll">
          <span className="hero__scroll-line">
            <span />
          </span>

          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero__locations">
          <span>LAHORE</span>
          <i />
          <span>HONG KONG</span>
          <i />
          <span>CHINA</span>
        </div>
      </div>
    </section>
  );
}