import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="about-hero af-hero"
      style={{ "--hero-object-position": "center center", "--hero-mobile-object-position": "center center" }}
    >
      <div className="about-hero__media af-hero__media">
        <Image
          src="/home/22%20%E2%80%94%20Factory%20Architecture.webp"
          alt="Apparel Fastener manufacturing facility"
          fill
          priority
          sizes="100vw"
          className="about-hero__image af-hero__image"
        />

        <div className="about-hero__overlay af-hero__overlay" />
      </div>

      <div className="about-hero__grid af-hero__grid" />

      <div className="about-hero__container af-hero__content">

        {/* TOP */}

        <div className="about-hero__top af-hero__meta">
          <span>APPAREL FASTENER</span>
          <span className="about-hero__brand">
            01 / ABOUT
          </span>
        </div>

        {/* MAIN CONTENT */}

        <div className="about-hero__content af-hero__main">

          <div className="af-hero__heading">
          <span className="af-hero__eyebrow">CONNECTED APPAREL</span>
          <h1 className="about-hero__title af-hero__title">
            <span>ONE</span>
            <span>CONNECTED</span>
            <span>APPAREL</span>
            <span>SYSTEM.</span>
          </h1>
          </div>

          <div className="about-hero__copy af-hero__info">
            <span className="af-hero__info-line" />
            <p>
              Apparel Fastener brings together garments,
              fabrics and garment accessories through one
              connected approach to apparel production.
            </p>

            <Link
              href="#story"
              className="about-hero__link af-hero__button"
            >
              <span>Our Story</span>
              <span className="about-hero__arrow af-hero__button-icon">↗</span>
            </Link>
          </div>

        </div>

        {/* BOTTOM */}

        <div className="about-hero__bottom af-hero__bottom">

          <div className="about-hero__locations af-hero__categories">
            <span>LAHORE</span>
            <i />
            <span>HONG KONG</span>
            <i />
            <span>CHINA</span>
          </div>

          <span className="about-hero__label">
            APPAREL / MATERIAL / COMPONENTS
          </span>

        </div>

      </div>

      <span className="af-hero__corner af-hero__corner--top" />
      <span className="af-hero__corner af-hero__corner--bottom" />
    </section>
  );
}