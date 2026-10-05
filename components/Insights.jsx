"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./Insights.css";

const insights = [
  {
    number: "01",
    category: "APPAREL",
    title: "THE SYSTEMS BEHIND MODERN APPAREL",
    description:
      "Exploring how materials, manufacturing and garment components come together to create finished apparel.",
    image: "/home/27%20Finished%20Production.webp",
    href: "/insights",
    featured: true,
  },
  {
    number: "02",
    category: "MATERIALS",
    title: "WHY MATERIAL SELECTION MATTERS",
    description:
      "Understanding the relationship between material characteristics, construction and final garment performance.",
    image: "/home/20%20%E2%80%94%20Material%20Research.webp",
    href: "/insights",
  },
  {
    number: "03",
    category: "MANUFACTURING",
    title: "PRECISION ON THE PRODUCTION FLOOR",
    description:
      "A closer look at the processes and attention to detail that support consistent apparel production.",
    image: "/home/02%20%E2%80%94%20Garment%20Production%20Floor.webp",
    href: "/insights",
  },
  {
    number: "04",
    category: "DETAIL",
    title: "THE DETAILS THAT COMPLETE A GARMENT",
    description:
      "From closures and trims to finishing, small components can shape the function and character of a garment.",
    image: "/home/11%20%E2%80%94%20Apparel%20Accessories.webp",
    href: "/insights",
  },
];

export default function Insights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("insights--visible");
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
      className="insights"
    >
      <div className="insights__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="insights__header">

          <div className="insights__eyebrow">
            <span className="insights__eyebrow-line" />
            <span>INSIGHTS</span>
          </div>

          <div className="insights__heading-grid">

            <h2 className="insights__title">
              <span>IDEAS</span>
              <span>BEHIND THE</span>
              <span><em>APPAREL.</em></span>
            </h2>

            <div className="insights__intro">
              <p>
                Perspectives on apparel, materials, manufacturing
                and the details that shape the products people wear.
              </p>

              <Link
                href="/insights"
                className="insights__link"
              >
                <span>Explore All Insights</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>

        {/* =================================================
            FEATURED STORY
        ================================================= */}

        <Link
          href={insights[0].href}
          className="insights__featured"
        >

          <div className="insights__featured-media">

            <img
              src={insights[0].image}
              alt={insights[0].title}
              className="insights__featured-image"
            />

            <div className="insights__featured-overlay" />

            <span className="insights__featured-number">
              {insights[0].number}
            </span>

            <span className="insights__featured-arrow">
              ↗
            </span>

            <div className="insights__featured-label">
              FEATURED STORY
            </div>

          </div>

          <div className="insights__featured-content">

            <div className="insights__featured-category">
              {insights[0].category}
            </div>

            <h3>{insights[0].title}</h3>

            <p>{insights[0].description}</p>

            <span className="insights__read">
              <span>Read Story</span>
              <span>↗</span>
            </span>

          </div>

        </Link>

        {/* =================================================
            SUPPORTING STORIES
        ================================================= */}

        <div className="insights__stories">

          {insights.slice(1).map((insight) => (
            <Link
              key={insight.number}
              href={insight.href}
              className="insight-story"
            >

              <div className="insight-story__media">

                <img
                  src={insight.image}
                  alt={insight.title}
                  className="insight-story__image"
                />

                <div className="insight-story__overlay" />

                <span className="insight-story__number">
                  {insight.number}
                </span>

                <span className="insight-story__arrow">
                  ↗
                </span>

              </div>

              <div className="insight-story__content">

                <div className="insight-story__meta">
                  <span>{insight.category}</span>
                  <span>INSIGHT</span>
                </div>

                <h3>{insight.title}</h3>

                <p>{insight.description}</p>

                <span className="insight-story__link">
                  <span>Read Story</span>
                  <span>↗</span>
                </span>

              </div>

            </Link>
          ))}

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="insights__bottom">

          <span className="insights__bottom-label">
            INSIGHTS / JOURNAL
          </span>

          <div className="insights__bottom-line" />

          <p>
            MATERIAL. PROCESS. APPAREL. PERSPECTIVE.
          </p>

        </div>

      </div>
    </section>
  );
}