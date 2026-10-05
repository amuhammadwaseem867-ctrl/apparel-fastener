"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./FinalCTA.css";

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("final-cta--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="final-cta"
    >
      <div className="final-cta__media">
        <img
          src="/home/28%20%E2%80%94%20Closing%20Hero%20Factory.webp"
          alt="Apparel Fastener manufacturing facility"
          className="final-cta__image"
        />

        <div className="final-cta__overlay" />
        <div className="final-cta__vignette" />
      </div>

      <div className="final-cta__grid" />

      <div className="final-cta__container">

        <div className="final-cta__top">
          <div className="final-cta__eyebrow">
            <span className="final-cta__eyebrow-line" />
            <span>START A CONVERSATION</span>
          </div>

          <span className="final-cta__index">
            APPAREL FASTENER
          </span>
        </div>

        <div className="final-cta__content">

          <h2 className="final-cta__title">
            <span>READY TO</span>
            <span>BUILD</span>
            <span><em>WHAT&apos;S NEXT?</em></span>
          </h2>

          <div className="final-cta__action">

            <p>
              Tell us what you are building.
              <br />
              Let&apos;s create the right apparel system together.
            </p>

            <Link
              href="/contact"
              className="final-cta__button"
            >
              <span>Start a Conversation</span>
              <span className="final-cta__button-arrow">
                ↗
              </span>
            </Link>

          </div>

        </div>

        <div className="final-cta__bottom">

          <div className="final-cta__locations">
            <span>LAHORE</span>
            <i />
            <span>HONG KONG</span>
            <i />
            <span>CHINA</span>
          </div>

          <div className="final-cta__scroll">
            APPAREL FASTENER
          </div>

        </div>

      </div>
    </section>
  );
}