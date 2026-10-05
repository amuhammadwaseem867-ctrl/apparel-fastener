import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import "./GarmentAccessoriesHero.css";

export default function GarmentAccessoriesHero() {
  return (
    <section className="garment-accessories-hero">
      <div className="garment-accessories-hero__image">
        <Image
          src="/garments/detail.webp"
          alt="Garment accessories and apparel details"
          fill
          priority
          sizes="100vw"
        />

        <div className="garment-accessories-hero__overlay" />
      </div>

      <div className="garment-accessories-hero__grid" />

      <div className="garment-accessories-hero__content">
        <div className="garment-accessories-hero__top">
          <span>APPAREL FASTENER</span>
          <span>01 / GARMENT ACCESSORIES</span>
        </div>

        <div className="garment-accessories-hero__main">
          <p className="garment-accessories-hero__eyebrow">
            COMPONENTS / DETAILS / FUNCTION
          </p>

          <h1>
            THE DETAILS
            <br />
            THAT COMPLETE
            <br />
            THE GARMENT.
          </h1>

          <p className="garment-accessories-hero__description">
            From fastening and structure to decoration and packaging, we
            provide the components that bring garments together from
            development through distribution.
          </p>

          <Link
            href="#accessories-collections"
            className="garment-accessories-hero__button"
          >
            Explore Accessories
            <span>
              <ArrowDown size={17} strokeWidth={1.8} />
            </span>
          </Link>
        </div>

        <div className="garment-accessories-hero__bottom">
          <span>FASTENING</span>
          <span>STRUCTURE</span>
          <span>DECORATION</span>
          <span>PACKAGING</span>
          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>
    </section>
  );
}