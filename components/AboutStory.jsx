"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./AboutStory.css";

const divisions = [
  {
    number: "01",
    title: "GARMENTS",
    text: "Finished apparel developed through controlled construction, production and finishing.",
    href: "/garments",
  },
  {
    number: "02",
    title: "FABRICS",
    text: "Materials and fabrics selected around construction, performance and application.",
    href: "/fabrics",
  },
  {
    number: "03",
    title: "GARMENT ACCESSORIES",
    text: "Components, trims and finishing details that complete the apparel system.",
    href: "/garment-accessories",
  },
];

export default function AboutStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about-story--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-story"
      id="story"
    >
      <div className="about-story__container">

        {/* HEADER */}

        <div className="about-story__header">

          <div className="about-story__eyebrow">
            <span className="about-story__eyebrow-line" />
            <span>OUR STORY</span>
          </div>

          <span className="about-story__index">
            02 / ABOUT
          </span>

        </div>

        {/* INTRO */}

        <div className="about-story__intro">

          <h2 className="about-story__title">
            <span>APPAREL IS</span>
            <span>MORE THAN</span>
            <span><em>ONE PRODUCT.</em></span>
          </h2>

          <div className="about-story__intro-copy">
            <p>
              Behind every finished garment is a connected chain
              of materials, development, manufacturing and
              finishing.
            </p>

            <p>
              Apparel Fastener brings these essential elements
              together through three complementary divisions:
              garments, fabrics and garment accessories.
            </p>
          </div>

        </div>

        {/* FEATURE STORY */}

        <div className="about-story__feature">

          <div className="about-story__feature-media">
            <img
              src="/home/02%20%E2%80%94%20Garment%20Production%20Floor.webp"
              alt="Apparel Fastener garment production floor"
              className="about-story__feature-image"
            />

            <div className="about-story__feature-overlay" />

            <div className="about-story__feature-top">
              <span>APPAREL FASTENER</span>
              <span>02</span>
            </div>

            <div className="about-story__feature-bottom">
              <span>PRODUCTION / APPAREL</span>
            </div>
          </div>

          <div className="about-story__feature-copy">

            <span className="about-story__feature-label">
              A CONNECTED APPROACH
            </span>

            <h3>
              FROM
              <br />
              MATERIAL
              <br />
              TO <em>FINISHED</em>
              <br />
              APPAREL.
            </h3>

            <p>
              We believe apparel works best when the elements
              behind it are understood as one system. Materials
              influence construction. Construction influences
              performance. Components influence function and
              finishing.
            </p>

            <p>
              By bringing these areas together, we create stronger
              connections between product development and
              production.
            </p>

            <Link
              href="/garments"
              className="about-story__feature-link"
            >
              <span>Explore Our Divisions</span>
              <span>↗</span>
            </Link>

          </div>

        </div>

        {/* DIVISIONS */}

        <div className="about-story__divisions">

          <div className="about-story__divisions-header">

            <span>THREE DIVISIONS</span>

            <p>
              Different capabilities.
              One connected apparel ecosystem.
            </p>

          </div>

          <div className="about-story__division-list">

            {divisions.map((division) => (
              <Link
                href={division.href}
                key={division.number}
                className="about-story__division"
              >

                <div className="about-story__division-number">
                  {division.number}
                </div>

                <h3>
                  {division.title}
                </h3>

                <p>
                  {division.text}
                </p>

                <span className="about-story__division-arrow">
                  ↗
                </span>

              </Link>
            ))}

          </div>

        </div>

        {/* STATEMENT */}

        <div className="about-story__statement">

          <div className="about-story__statement-line" />

          <h3>
            WE CONNECT THE
            <br />
            ELEMENTS <em>BEHIND</em>
            <br />
            MODERN APPAREL.
          </h3>

          <div className="about-story__statement-copy">
            <p>
              From Lahore to international apparel markets,
              our approach is built around practical knowledge,
              coordinated production and long-term relationships.
            </p>

            <Link
              href="/contact"
              className="about-story__statement-link"
            >
              <span>Start a Conversation</span>
              <span>↗</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}