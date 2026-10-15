"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import { company, navigation, offices } from "@/lib/site";
import { startScroll, stopScroll } from "./SmoothScroll";
import "./Header.css";

// Every routed page opens with a full-bleed PageHero; anything else (404) doesn't.
const HERO_ROUTES = new Set(["/", ...navigation.map((item) => item.href)]);

function isActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const hasHero = HERO_ROUTES.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    stopScroll();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      startScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const solid = !menuOpen && (scrolled || !hasHero);

  return (
    <>
      <header
        className={[
          "site-header",
          solid ? "site-header--solid" : "",
          menuOpen ? "site-header--open" : "",
        ].join(" ")}
      >
        <div className="site-header__bar">
          <div className="container site-header__bar-inner">
            <ul className="site-header__offices">
              {offices.map((office) => (
                <li key={office.id}>
                  <a href={`tel:${office.tel}`}>
                    <span>{office.city}</span>
                    {office.phone}
                  </a>
                </li>
              ))}
            </ul>

            <a href={`mailto:${company.email}`} className="site-header__email">
              {company.email}
            </a>
          </div>
        </div>

        <div className="container site-header__main">
          <Link href="/" className="site-header__logo" aria-label={`${company.name} — home`}>
            <Image
              src="/logos/logo in white.png"
              alt=""
              width={160}
              height={50}
              loading="eager"
              className="site-header__logo-img site-header__logo-img--light"
            />
            <Image
              src="/logos/logo in navy.png"
              alt=""
              width={160}
              height={50}
              loading="eager"
              className="site-header__logo-img site-header__logo-img--dark"
            />
          </Link>

          <nav className="site-header__nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="site-header__link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact#enquiry" className="site-header__cta">
            Make an enquiry
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>

          <button
            type="button"
            className="site-header__toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} strokeWidth={1.6} /> : <Menu size={24} strokeWidth={1.6} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        inert={!menuOpen}
        data-lenis-prevent
      >
        <div className="container mobile-menu__inner">
          <nav aria-label="Mobile navigation">
            <ol className="mobile-menu__nav">
              <li>
                <Link href="/" className="mobile-menu__link" aria-current={pathname === "/" ? "page" : undefined}>
                  <span>00</span>
                  Home
                </Link>
              </li>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-menu__link"
                    style={{ "--i": index + 1 }}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mobile-menu__contact">
            <a href={`mailto:${company.email}`}>
              <Mail size={16} strokeWidth={1.6} />
              {company.email}
            </a>
            <a href={company.messaging.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} strokeWidth={1.6} />
              {company.messaging.label}: {company.messaging.display}
            </a>
          </div>

          <ul className="mobile-menu__offices">
            {offices.map((office) => (
              <li key={office.id}>
                <span className="kicker">{office.label}</span>
                <p>{office.address.join(", ")}</p>
                <a href={`tel:${office.tel}`}>{office.phone}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
