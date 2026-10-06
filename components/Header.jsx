"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.css";

const NAV_ITEMS = [
  { number: "01", label: "About", href: "/about" },
  { number: "02", label: "Garments", href: "/garments" },
  { number: "03", label: "Fabrics", href: "/fabrics" },
  { number: "04", label: "Accessories", href: "/garment-accessories" },
  { number: "05", label: "Quality", href: "/quality" },
  { number: "06", label: "Contact", href: "/contact" },
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

  const [heroVisible, setHeroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    /*
      HOME PAGE:
      Detect whether the hero is still underneath the header.
    */

    if (pathname !== "/") {
      setHeroVisible(false);
      return;
    }

    const hero = document.querySelector(".hero");

    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

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

  /*
    Navy while hero is visible.
    White everywhere else.
  */
  const isDarkHeader = pathname === "/" && heroVisible;

  const headerClassName = [
    "header",
    isDarkHeader ? "header--hero" : "header--light",
    menuOpen ? "header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClassName}>
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

        <div className="header__main">
          <Link
            href="/"
            className="header__logo"
            aria-label="Apparel Fastener"
          >
            <Image
              src={
                isDarkHeader && !menuOpen
                  ? "/logos/logo in white.png"
                  : "/logos/logo in navy.png"
              }
              alt="Apparel Fastener"
              width={170}
              height={48}
              priority
            />
          </Link>

          <nav
            className="header__nav"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.number}
                  href={item.href}
                  className={`header__nav-item ${
                    isActive
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
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="header__cta"
          >
            <span>Start a Conversation</span>

            <span className="header__cta-icon">
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </span>
          </Link>

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
              <X size={23} strokeWidth={1.8} />
            ) : (
              <Menu size={23} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

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
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.number}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-menu__item ${
                    isActive
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
                    size={19}
                    strokeWidth={1.7}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mobile-menu__offices">
            {OFFICES.map((office) => (
              <div
                key={office.number}
                className="mobile-menu__office"
              >
                <div className="mobile-menu__office-top">
                  <span>{office.number}</span>
                  <span>{office.type}</span>
                </div>

                <strong>{office.city}</strong>

                <p>{office.address}</p>

                <a href={office.href}>
                  Contact Office
                  <span>{office.phone}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mobile-menu__bottom">
            <span>GLOBAL APPAREL NETWORK</span>

            <span>
              LAHORE · HONG KONG · GUANGZHOU
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}