import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { company, divisions, navigation, offices } from "@/lib/site";
import "./Footer.css";

const companyLinks = navigation.filter(
  (item) => !divisions.some((division) => division.href === item.href)
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="container footer-cta__inner">
          <div data-reveal>
            <span className="eyebrow">
              <span className="eyebrow__line" />
              Start a conversation
            </span>

            <h2 id="footer-cta-title" className="title footer-cta__title">
              Let&apos;s create <em>unmatched value</em> together.
            </h2>
          </div>

          <div className="footer-cta__side" data-reveal style={{ "--reveal-delay": 2 }}>
            <p>
              We bring the comfort of expertise and reliability to your business with more than{" "}
              {company.experienceYears} years in the textile and apparel industry.
            </p>

            <div className="btn-row">
              <Link href="/contact#enquiry" className="btn btn--light">
                Make an enquiry
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
              <a href={`mailto:${company.email}`} className="btn btn--ghost">
                Email us
                <Mail size={16} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-main">
        <div className="container">
          <div className="footer-main__top">
            <div className="footer-brand">
              <Link href="/" className="footer-brand__logo" aria-label={`${company.name} — home`}>
                <Image src="/logos/logo in white.png" alt="" width={200} height={63} />
              </Link>

              <p>{company.tagline}</p>

              <p className="footer-brand__group">
                <span className="kicker">{company.groupName}</span>
                {company.companies.join(" · ")}
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer">
              <div>
                <span className="kicker">Divisions</span>
                <ul>
                  {divisions.map((division) => (
                    <li key={division.id}>
                      <Link href={division.href}>{division.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="kicker">Company</span>
                <ul>
                  {companyLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="kicker">Contact</span>
                <ul>
                  <li>
                    <a href={`mailto:${company.email}`} className="footer-links__icon">
                      <Mail size={15} strokeWidth={1.6} />
                      {company.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={company.messaging.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-links__icon"
                    >
                      <MessageCircle size={15} strokeWidth={1.6} />
                      {company.messaging.display}
                    </a>
                    <span className="footer-links__note">{company.messaging.label}</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <ul className="footer-offices">
            {offices.map((office) => (
              <li key={office.id}>
                <span className="kicker">{office.label}</span>
                <address>
                  {office.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={`tel:${office.tel}`}>{office.phone}</a>
              </li>
            ))}
          </ul>

          <div className="footer-bottom">
            <span>
              © {year} {company.name}. All rights reserved.
            </span>
            <span>{company.regions.join(" · ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
