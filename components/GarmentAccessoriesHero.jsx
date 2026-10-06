import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GarmentAccessoriesHero() {
  return (
    <section
      className="garment-accessories-hero af-hero"
      style={{ "--hero-object-position": "55% 62%", "--hero-mobile-object-position": "55% 64%" }}
    >
      {/* Background Image */}
      <div className="garment-accessories-hero__media af-hero__media">
        <Image
          src="/garments/detail.webp"
          alt="Garment accessories and apparel details"
          fill
          priority
          quality={95}
          sizes="100vw"
        />
      </div>

      {/* Image Overlay */}
      <div className="garment-accessories-hero__overlay af-hero__overlay" />

      {/* Editorial Grid */}
      <div className="garment-accessories-hero__grid af-hero__grid" />

      {/* Main Content */}
      <div className="garment-accessories-hero__content af-hero__content">
        {/* Top Meta */}
        <div className="garment-accessories-hero__meta af-hero__meta">
          <span>APPAREL FASTENER</span>
          <span>01 / GARMENT ACCESSORIES</span>
        </div>

        {/* Main Area */}
        <div className="garment-accessories-hero__main af-hero__main">
          {/* Heading */}
          <div className="garment-accessories-hero__heading af-hero__heading">
            <span className="garment-accessories-hero__eyebrow af-hero__eyebrow">
              COMPONENTS / DETAILS / FUNCTION
            </span>

            <h1 className="af-hero__title">
              THE DETAILS
              <br />
              THAT COMPLETE
              <br />
              <em>THE GARMENT.</em>
            </h1>
          </div>

          {/* Description */}
          <div className="garment-accessories-hero__info af-hero__info">
            <span className="garment-accessories-hero__info-line af-hero__info-line" />

            <p>
              From fastening and structure to decoration and packaging, we
              provide the components that bring garments together from
              development through distribution.
            </p>

            <Link
              href="#accessories-collections"
              className="garment-accessories-hero__button af-hero__button"
            >
              <span>Explore Details</span>

              <span className="garment-accessories-hero__button-icon af-hero__button-icon">
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="garment-accessories-hero__bottom af-hero__bottom">
        <div className="garment-accessories-hero__categories af-hero__categories">
          <span>FASTENING</span>
          <i />
          <span>STRUCTURE</span>
          <i />
          <span>DECORATION</span>
        </div>

        <div className="garment-accessories-hero__location af-hero__location">
          <span>PACKAGING</span>
          <i />
          <span>LAHORE</span>
        </div>
      </div>

      {/* Corner Details */}
      <span className="af-hero__corner af-hero__corner--top" />
      <span className="af-hero__corner af-hero__corner--bottom" />
    </section>
  );
}