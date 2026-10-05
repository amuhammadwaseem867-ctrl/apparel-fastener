import Image from "next/image";
import Link from "next/link";
import "./GarmentAccessoriesCTA.css";

export default function GarmentAccessoriesCTA() {
  return (
    <section className="accessories-cta">
      <Image
        src="/garments/catalogue.webp"
        alt="Garment accessories and production"
        fill
        sizes="100vw"
        className="accessories-cta__image"
      />

      <div className="accessories-cta__overlay" />

      <div className="accessories-cta__grid" />

      <div className="accessories-cta__content">
        <div className="accessories-cta__top">
          <span>06 / ACCESSORIES / CONTACT</span>
          <span>APPAREL FASTENER</span>
        </div>

        <div className="accessories-cta__main">
          <p className="accessories-cta__eyebrow">
            FROM COMPONENT
            <br />
            TO FINISHED FORM.
          </p>

          <h1>
            READY TO BUILD
            <br />
            THE RIGHT
            <br />
            GARMENT?
          </h1>

          <p className="accessories-cta__description">
            Tell us what you are developing. We can help identify the
            components, details and finishing elements required to move your
            garment from development through production and distribution.
          </p>

          <Link href="/contact" className="accessories-cta__button">
            Start a Conversation
            <span>↗</span>
          </Link>
        </div>

        <div className="accessories-cta__bottom">
          <span>GARMENT ACCESSORIES</span>
          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>
    </section>
  );
}