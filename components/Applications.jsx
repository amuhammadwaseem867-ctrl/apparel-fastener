"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./Applications.css";

const applications = [
  {
    number: "01",
    title: "ACTIVEWEAR",
    description:
      "Performance-driven apparel built around movement, comfort and technical construction.",
    image: "/home/18%20%E2%80%94%20Activewear.webp",
    href: "/applications",
    className: "application--large",
  },
  {
    number: "02",
    title: "OUTERWEAR",
    description:
      "Layered apparel systems where materials, closures and finishing work together.",
    image: "/home/17%20%E2%80%94%20Finished%20Jacket.webp",
    href: "/applications",
    className: "application--small",
  },
  {
    number: "03",
    title: "FASHION",
    description:
      "Refined apparel where material, proportion and finishing define the final expression.",
    image: "/home/09%20%E2%80%94%20Apparel%20Detail.webp",
    href: "/applications",
    className: "application--small",
  },
  {
    number: "04",
    title: "PERFORMANCE",
    description:
      "Technical apparel engineered for demanding environments and active use.",
    image: "/home/08%20%E2%80%94%20Technical%20Fabric%20Macro.webp",
    href: "/applications",
    className: "application--wide",
  },
  {
    number: "05",
    title: "WORKWEAR",
    description:
      "Durable apparel systems designed around function, construction and everyday performance.",
    image: "/home/07%20%E2%80%94%20Garment%20Assembly.webp",
    href: "/applications",
    className: "application--small",
  },
  {
    number: "06",
    title: "UNIFORMS",
    description:
      "Consistent apparel solutions combining identity, durability and dependable production.",
    image: "/home/27%20Finished%20Production.webp",
    href: "/applications",
    className: "application--small",
  },
];

export default function Applications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("applications--visible");
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
      className="applications"
    >
      <div className="applications__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="applications__header">

          <div className="applications__eyebrow">
            <span className="applications__eyebrow-line" />
            <span>APPLICATIONS</span>
          </div>

          <div className="applications__heading-grid">

            <h2 className="applications__title">
              <span>BUILT FOR</span>
              <span>EVERY KIND</span>
              <span>OF <em>APPAREL.</em></span>
            </h2>

            <div className="applications__intro">
              <p>
                From performance-driven activewear to refined fashion
                and durable workwear, our apparel ecosystem supports
                different applications, constructions and performance
                requirements.
              </p>

              <Link
                href="/applications"
                className="applications__explore"
              >
                <span>Explore Applications</span>
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>

        {/* =================================================
            APPLICATION GRID
        ================================================= */}

        <div className="applications__grid">

          {applications.map((application) => (
            <Link
              key={application.number}
              href={application.href}
              className={`application ${application.className}`}
            >
              <div className="application__media">

                <img
                  src={application.image}
                  alt={application.title}
                  className="application__image"
                />

                <div className="application__overlay" />

                <span className="application__number">
                  {application.number}
                </span>

                <span className="application__arrow">
                  ↗
                </span>

              </div>

              <div className="application__content">

                <div className="application__category">
                  APPLICATION
                </div>

                <h3>{application.title}</h3>

                <p>{application.description}</p>

                <span className="application__link">
                  <span>Explore</span>
                  <span>↗</span>
                </span>

              </div>
            </Link>
          ))}

        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="applications__bottom">

          <span className="applications__bottom-label">
            APPLICATION / 06
          </span>

          <div className="applications__bottom-line" />

          <p>
            DIFFERENT APPLICATIONS.
            ONE CONNECTED APPAREL APPROACH.
          </p>

        </div>

      </div>
    </section>
  );
}