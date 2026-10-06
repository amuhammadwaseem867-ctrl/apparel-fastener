import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./QualityPage.css";

const stages = [
  {
    number: "01",
    title: "MATERIAL REVIEW",
    text: "Incoming materials and components are reviewed for consistency, appearance and suitability to the intended garment before they enter production.",
  },
  {
    number: "02",
    title: "IN-PROCESS CONTROL",
    text: "Construction is monitored through cutting, assembly and finishing so that measurements and details follow the approved specification.",
  },
  {
    number: "03",
    title: "MEASUREMENT",
    text: "Defined measurements and tolerances are applied across materials, components and finished apparel to maintain accuracy.",
  },
  {
    number: "04",
    title: "FINAL INSPECTION",
    text: "Each finished piece is reviewed for surface appearance, pressing, detailing and presentation before it leaves the production floor.",
  },
];

function QualityButton({ href, children, navy = false }) {
  return (
    <Link
      href={href}
      className={`af-button${navy ? " af-button--navy" : ""}`}
    >
      <span>{children}</span>

      <span className="af-button__icon" aria-hidden="true">
        <ArrowUpRight size={17} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

export default function QualityPage() {
  return (
    <main className="quality-page">
      {/* ==================================================
          01 / HERO
      ================================================== */}

      <section
        className="quality-hero af-hero"
        style={{ "--hero-object-position": "center center", "--hero-mobile-object-position": "center center" }}
      >
        <div className="quality-hero__media af-hero__media" aria-hidden="true">
          <Image
            src="/home/15%20%E2%80%94%20Quality%20Control.webp"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        <div className="quality-hero__veil af-hero__overlay" aria-hidden="true" />
        <div className="af-hero__grid" aria-hidden="true" />

        <div className="quality-hero__inner af-hero__content">
          <div className="quality-hero__kicker af-hero__meta">
            <span>APPAREL FASTENER</span>
            <span>01 / QUALITY</span>
          </div>

          <div className="quality-hero__main af-hero__main">
            <div className="af-hero__heading">
              <p className="af-hero__eyebrow">QUALITY CONTROL</p>
              <h1 className="quality-hero__title af-hero__title">
                BUILT INTO
                <br />
                THE <em>PROCESS.</em>
              </h1>
            </div>

            <div className="af-hero__info">
              <span className="af-hero__info-line" />
              <p className="quality-hero__lead">
                Quality is not applied at the end of a process. It is built
                into every stage — from the materials we receive to the
                finished garment that leaves our floor.
              </p>

              <Link href="/contact" className="af-hero__button">
                <span>Discuss Quality</span>
                <span className="af-hero__button-icon" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="quality-hero__footer af-hero__bottom">
          <span className="af-hero__categories">INSPECTION / MEASUREMENT / CONTROL</span>
          <span className="af-hero__location">LAHORE · PAKISTAN</span>
        </div>
      </section>

      {/* ==================================================
          02 / PRINCIPLE
      ================================================== */}

      <section className="quality-principle">
        <div className="container">
          <p className="quality-principle__eyebrow">
            THE PRINCIPLE
          </p>

          <div className="quality-principle__grid">
            <h2 className="quality-principle__title">
              PRECISION
              <br />
              AT EVERY
              <br />
              STAGE.
            </h2>

            <div className="quality-principle__copy">
              <p>
                A reliable apparel product depends on thousands of
                individual decisions. Each one is made against a defined
                standard rather than left to interpretation.
              </p>

              <p>
                Our approach connects material review, construction,
                measurement and final inspection into one continuous
                framework — so the garment that is approved is the garment
                that is produced.
              </p>
            </div>
          </div>

          <div className="quality-principle__visual">
            <Image
              src="/home/16%20%E2%80%94%20Measurement.webp"
              alt="Garment measurement and quality inspection"
              fill
              quality={88}
              sizes="(max-width: 1360px) 100vw, 1360px"
            />
          </div>
        </div>
      </section>

      {/* ==================================================
          03 / PROCESS
      ================================================== */}

      <section className="quality-stages">
        <div className="container">
          <p className="quality-stages__eyebrow">
            QUALITY FRAMEWORK
          </p>

          <div className="quality-stages__heading">
            <h2 className="quality-stages__title">
              FOUR POINTS
              <br />
              OF CONTROL.
            </h2>

            <p className="quality-stages__intro">
              A controlled quality framework keeps every stage connected,
              measurable and aligned with the approved garment standard.
            </p>
          </div>

          <div className="quality-stages__grid">
            {stages.map((stage) => (
              <article
                className="quality-stage"
                key={stage.number}
              >
                <div className="quality-stage__top">
                  <span className="quality-stage__number">
                    {stage.number}
                  </span>

                  <ArrowUpRight
                    className="quality-stage__arrow"
                    size={19}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="quality-stage__title">
                  {stage.title}
                </h3>

                <p className="quality-stage__text">
                  {stage.text}
                </p>
              </article>
            ))}
          </div>

          <div className="quality-stages__action">
            <QualityButton href="/garments" navy>
              Explore Garments
            </QualityButton>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 / CONTACT
      ================================================== */}

      <section className="quality-cta">
        <div className="container quality-cta__inner">
          <p className="quality-cta__eyebrow">
            DISCUSS YOUR REQUIREMENTS
          </p>

          <h2 className="quality-cta__title">
            LET&apos;S BUILD TO THE
            <br />
            <em>STANDARD.</em>
          </h2>

          <div className="quality-cta__action">
            <QualityButton href="/contact">
              Inquire
            </QualityButton>
          </div>
        </div>
      </section>
    </main>
  );
}