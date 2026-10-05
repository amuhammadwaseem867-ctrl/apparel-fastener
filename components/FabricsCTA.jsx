import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./FabricsCTA.css";

export default function FabricsCTA() {
  return (
    <section className="fabrics-cta" id="fabrics-cta">
      <div className="fabrics-cta__image">
        <Image
          src="/garments/catalogue.webp"
          alt="Apparel fabric development"
          fill
          sizes="100vw"
        />

        <div className="fabrics-cta__overlay" />
      </div>

      <div className="fabrics-cta__content">
        <div className="fabrics-cta__top">
          <span>06</span>
          <span>FABRICS / CONTACT</span>
        </div>

        <div className="fabrics-cta__main">
          <p className="fabrics-cta__eyebrow">
            FROM MATERIAL TO FINISHED FORM.
          </p>

          <h2>
            READY TO
            <br />
            DEVELOP THE
            <br />
            RIGHT FABRIC?
          </h2>

          <p className="fabrics-cta__description">
            Tell us about your application, material requirements and intended
            garment. Our team can help develop the right fabric structure for
            the finished product.
          </p>

          <Link href="/contact" className="fabrics-cta__button">
            Start a Conversation
            <ArrowUpRight size={19} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="fabrics-cta__bottom">
          <span>APPAREL FASTENER</span>
          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>
    </section>
  );
}