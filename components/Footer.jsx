"use client";

import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

const OFFICES = [
  { city: "Pakistan", tel: "+923134710325" },
  { city: "Hong Kong", tel: "+85298509479" },
  { city: "China", tel: "+862089637634" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* =====================================================
          MAIN CTA
      ====================================================== */}

      <section className="footer-cta">
        <div className="footer-cta__inner">
          <div className="footer-cta__eyebrow">
            <span className="footer-cta__line" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="footer-cta__title">
            <span>LET&apos;S BUILD</span>
            <span>SOMETHING</span>
            <span className="footer-cta__accent">BETTER.</span>
          </h2>

          <Link href="/contact" className="footer-cta__button">
            <span>Make an Inquiry</span>
            <span className="footer-cta__arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          FOOTER MAIN
      ====================================================== */}

      <div className="footer-main">
        <div className="footer-main__top">

          {/* Brand */}
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-brand__logo"
              aria-label="Apparel Fastener — home"
            >
              <Image
                src="/logos/logo in white.png"
                alt="APPAREL FASTENER"
                width={3956}
                height={1242}
                sizes="200px"
                className="footer-brand__logo-img"
              />
            </Link>

            <p className="footer-brand__description">
              An integrated apparel company connecting garments,
              fabrics and garment accessories through quality,
              precision and manufacturing expertise.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <div className="footer-column">
              <span className="footer-column__title">
                Explore
              </span>

              <Link href="/about">About</Link>
              <Link href="/garments">Garments</Link>
              <Link href="/fabrics">Fabrics</Link>
              <Link href="/garment-accessories">
                Accessories
              </Link>
            </div>

            <div className="footer-column">
              <span className="footer-column__title">
                Company
              </span>

              <Link href="/quality">Quality</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <span className="footer-column__title">
                Offices
              </span>

              {OFFICES.map((office) => (
                <a
                  key={office.city}
                  href={`tel:${office.tel}`}
                >
                  {office.city}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="footer-locations">

          <div className="footer-location">
            <div className="footer-location__header">
              <span>Hong Kong</span>
              <span>01</span>
            </div>

            <p>
              Rm 701-702, 7/F, Fu Fai Commercial Centre,
              27 Hillier Street, Sheung Wan,
              Hong Kong
            </p>

            <a href="tel:+85298509479">
              +852 9850 9479
            </a>
          </div>

          <div className="footer-location">
            <div className="footer-location__header">
              <span>China</span>
              <span>02</span>
            </div>

            <p>
              Rm C214-C215, Poly International Plaza,
              West Building, 686 Yuejiang Middle Road,
              Haizhu District, Guangzhou, China
            </p>

            <a href="tel:+862089637634">
              +86 20 8963 7634
            </a>
          </div>

          <div className="footer-location">
            <div className="footer-location__header">
              <span>Pakistan</span>
              <span>03</span>
            </div>

            <p>
              20 KM Ferozepur Road,
              Lahore, Pakistan
            </p>

            <a href="tel:+923134710325">
              +92 313 4710325
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © {currentYear} APPAREL FASTENER. All Rights Reserved.
          </span>

          <span>
            Lahore · Hong Kong · China
          </span>
        </div>
      </div>
    </footer>
  );
}