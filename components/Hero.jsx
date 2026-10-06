import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero af-hero" style={{ "--hero-object-position": "center center", "--hero-mobile-object-position": "center center" }}>
      {/* Background */}

      <div className="hero__media af-hero__media">
        <Image
          src="/home/01%20%E2%80%94%20Hero%20Factory.webp"
          alt="Apparel Fastener manufacturing facility"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="hero__image af-hero__image"
        />

        <div className="hero__overlay af-hero__overlay" />
      </div>

      <div className="hero__grid af-hero__grid" />

      {/* Main Content */}

      <div className="hero__content af-hero__content">
        <div className="hero__eyebrow af-hero__meta">
          <span>APPAREL FASTENER</span>
          <span>01 / HOME</span>
        </div>

        <div className="hero__main af-hero__main">
          <div className="hero__heading af-hero__heading">
            <p className="hero__kicker af-hero__eyebrow">
              ENGINEERED APPAREL COMPONENTS
            </p>

            <h1 className="hero__title af-hero__title">
              <span>ENGINEERED</span>
              <span>FOR</span>
              <span className="hero__title-accent">
                APPAREL.
              </span>
            </h1>
          </div>

          <div className="hero__side af-hero__info">
            <div className="hero__side-line af-hero__info-line" />

            <p>
              Precision fasteners engineered for apparel
              manufacturers, designers and global production
              networks.
            </p>

            <Link href="/about" className="hero__cta af-hero__button">
              <span>EXPLORE WORLD</span>

              <span className="hero__arrow af-hero__button-icon">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Information */}

      <div className="hero__bottom af-hero__bottom">
        <span>APPAREL / MATERIAL / COMPONENTS</span>

        <div className="hero__locations af-hero__categories">
          <span>LAHORE</span>
          <i />
          <span>HONG KONG</span>
          <i />
          <span>CHINA</span>
        </div>
      </div>

      {/* Corners */}

      <span className="af-hero__corner af-hero__corner--top" />
      <span className="af-hero__corner af-hero__corner--bottom" />
    </section>
  );
}