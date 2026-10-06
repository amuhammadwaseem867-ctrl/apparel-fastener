"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.css";

const NAV_ITEMS = [
  {
    number: "01",
    label: "About",
    href: "/about",
  },
  {
    number: "02",
    label: "Garments",
    href: "/garments",
  },
  {
    number: "03",
    label: "Fabrics",
    href: "/fabrics",
  },
  {
    number: "04",
    label: "Accessories",
    href: "/garment-accessories",
  },
  {
    number: "05",
    label: "Quality",
    href: "/quality",
  },
  {
    number: "06",
    label: "Contact",
    href: "/contact",
  },
];

const OFFICES = [
  {
    number: "01",
    city: "Lahore",
    type: "Head Office",
    address: "20 KM Ferozepur Road, Lahore, Pakistan",
    phone: "+92 313 4710325",
    href: "tel:+923134710325",
  },
  {
    number: "02",
    city: "Hong Kong",
    type: "Global Office",
    address:
      "Rm 701-702, 7/F, Fu Fai Commercial Centre, 27 Hillier Street, Sheung Wan, Hong Kong",
    phone: "+852 9850 9479",
    href: "tel:+85298509479",
  },
  {
    number: "03",
    city: "Guangzhou",
    type: "Global Office",
    address:
      "Rm C214-C215, Poly International Plaza, West Building, 686 Yuejiang Middle Road, Haizhu District, Guangzhou, China",
    phone: "+86 20 8963 7634",
    href: "tel:+862089637634",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("menu-open");
      document.body.classList.add("menu-is-open");
    } else {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-is-open");
    }

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const headerClassName = [
    "header",
    scrolled ? "header--scrolled" : "",
    menuOpen ? "header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClassName}>
        {/* =====================================================
            TOP OFFICE BAR
            ===================================================== */}

        <div className="header__office-bar">
          <div className="header__office-list">
            {OFFICES.map((office) => (
              <a
                key={office.number}
                href={office.href}
                className="header__office"
              >
                <span className="header__office-number">
                  {office.number}
                </span>

                <span className="header__office-city">
                  {office.city}
                </span>

                <span className="header__office-phone">
                  {office.phone}
                </span>
              </a>
            ))}
          </div>

          <span className="header__office-network">
            GLOBAL APPAREL NETWORK
          </span>
        </div>

        {/* =====================================================
            MAIN HEADER
            ===================================================== */}

        <div className="header__main">
          <Link
            href="/"
            className="header__logo"
            aria-label="Apparel Fastener"
          >
            <Image
              src={
                scrolled || menuOpen
                  ? "/logos/logo in navy.png"
                  : "/logos/logo in white.png"
              }
              alt="Apparel Fastener"
              width={160}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Navigation */}

          <nav
            className="header__nav"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className={`header__nav-item ${
                  pathname === item.href
                    ? "header__nav-item--active"
                    : ""
                }`}
              >
                <span className="header__nav-number">
                  {item.number}
                </span>

                <span className="header__nav-label">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}

          <Link
            href="/contact"
            className="header__cta"
          >
            <span>Start a Conversation</span>

            <span className="header__cta-icon">
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
              />
            </span>
          </Link>

          {/* Mobile Button */}

          <button
            type="button"
            className="header__menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X
                size={22}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </header>

      {/* =======================================================
          MOBILE MENU
          ======================================================= */}

      <aside
        className={`mobile-menu ${
          menuOpen ? "mobile-menu--open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">

          <div className="mobile-menu__intro">
            <span>Navigation</span>

            <span>APPAREL FASTENER</span>
          </div>

          <nav
            className="mobile-menu__nav"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-menu__item ${
                  pathname === item.href
                    ? "mobile-menu__item--active"
                    : ""
                }`}
              >
                <span className="mobile-menu__number">
                  {item.number}
                </span>

                <span className="mobile-menu__label">
                  {item.label}
                </span>

                <ArrowUpRight
                  className="mobile-menu__arrow"
                  size={18}
                  strokeWidth={1.4}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Offices */}

          <div className="mobile-menu__offices">
            {OFFICES.map((office) => (
              <div
                key={office.number}
                className="mobile-menu__office"
              >
                <div className="mobile-menu__office-top">
                  <span>
                    {office.number}
                  </span>

                  <span>
                    {office.type}
                  </span>
                </div>

                <strong>
                  {office.city}
                </strong>

                <p>
                  {office.address}
                </p>

                <a href={office.href}>
                  Contact Office
                  <span>{office.phone}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mobile-menu__bottom">
            <span>
              GLOBAL APPAREL NETWORK
            </span>

            <span>
              LAHORE · HONG KONG · GUANGZHOU
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}