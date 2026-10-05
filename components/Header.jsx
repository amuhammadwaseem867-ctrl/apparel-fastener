"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
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

const CONTACTS = [
  {
    location: "Pakistan",
    phone: "+92 313 4710325",
    href: "tel:+923134710325",
  },
  {
    location: "Hong Kong",
    phone: "+852 9850 9479",
    href: "tel:+85298509479",
  },
  {
    location: "China",
    phone: "+86 20 8963 7634",
    href: "tel:+862089637634",
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
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
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".header__utility-inner", {
          y: -12,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".header__brand",
          {
            x: -20,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.25"
        )
        .from(
          ".header__nav-item",
          {
            y: -10,
            opacity: 0,
            duration: 0.5,
            stagger: 0.045,
          },
          "-=0.45"
        )
        .from(
          ".header__inquire",
          {
            x: 15,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.3"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const panel = mobileMenuRef.current;

    if (!panel) return;

    const links = panel.querySelectorAll(".mobile-menu__item");
    const heading = panel.querySelector(".mobile-menu__heading");
    const footer = panel.querySelector(".mobile-menu__footer");

    gsap.killTweensOf([
      panel,
      heading,
      footer,
      ...links,
    ]);

    if (menuOpen) {
      gsap.set(panel, {
        display: "block",
        clipPath: "inset(0 0 100% 0)",
      });

      const timeline = gsap.timeline();

      timeline
        .to(panel, {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.7,
          ease: "power4.inOut",
        })
        .from(
          heading,
          {
            opacity: 0,
            y: -15,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          links,
          {
            opacity: 0,
            y: 40,
            duration: 0.55,
            stagger: 0.05,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          footer,
          {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.25"
        );

      return () => timeline.kill();
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(panel, {
          display: "none",
        });
      },
    });

    timeline
      .to(footer, {
        opacity: 0,
        y: 10,
        duration: 0.2,
      })
      .to(
        links,
        {
          opacity: 0,
          y: -15,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.in",
        },
        "-=0.1"
      )
      .to(
        panel,
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.55,
          ease: "power4.inOut",
        },
        "-=0.05"
      );

    return () => timeline.kill();
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      root.classList.add("menu-open");
      body.classList.add("menu-is-open");
    } else {
      root.classList.remove("menu-open");
      body.classList.remove("menu-is-open");
    }

    return () => {
      root.classList.remove("menu-open");
      body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "header",
          scrolled ? "header--scrolled" : "",
          menuOpen ? "header--menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="header__utility">
          <div className="header__utility-inner">
            <div className="header__contacts">
              <span className="header__utility-title">
                Global Offices
              </span>

              <span className="header__utility-divider" />

              {CONTACTS.map((contact) => (
                <a
                  key={contact.location}
                  href={contact.href}
                  className="header__contact"
                  aria-label={`${contact.location} ${contact.phone}`}
                >
                  <span className="header__contact-location">
                    {contact.location}
                  </span>

                  <span className="header__contact-phone">
                    {contact.phone}
                  </span>
                </a>
              ))}
            </div>

            <div className="header__utility-right">
              <span className="header__utility-dot" />

              <span>
                Garments · Fabrics · Garment Accessories
              </span>
            </div>
          </div>
        </div>

        <div className="header__main">
          <div className="header__main-inner">
            <Link
              href="/"
              className="header__brand"
              aria-label="APPAREL FASTENER home"
            >
              <span className="header__logo-box">
                <Image
                  src="/logos/logo in white.png"
                  alt="APPAREL FASTENER"
                  width={240}
                  height={65}
                  priority
                  className="header__logo header__logo--white"
                />

                <Image
                  src="/logos/logo in navy.png"
                  alt=""
                  width={240}
                  height={65}
                  priority
                  aria-hidden="true"
                  className="header__logo header__logo--navy"
                />
              </span>
            </Link>

            <nav
              className="header__nav"
              aria-label="Primary navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "header__nav-item",
                    isActive(item.href)
                      ? "is-active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-current={
                    isActive(item.href) ? "page" : undefined
                  }
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

            <Link
              href="/contact"
              className="header__inquire"
            >
              <span className="header__inquire-label">
                Inquire
              </span>

              <span className="header__inquire-icon">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                />
              </span>
            </Link>

            <button
              type="button"
              className="header__mobile-button"
              onClick={toggleMenu}
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span>
                {menuOpen ? "Close" : "Menu"}
              </span>

              {menuOpen ? (
                <X
                  size={21}
                  strokeWidth={1.7}
                />
              ) : (
                <Menu
                  size={21}
                  strokeWidth={1.7}
                />
              )}
            </button>
          </div>

          <div className="header__main-line" />
        </div>
      </header>

      <aside
        id="mobile-navigation"
        ref={mobileMenuRef}
        className="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__heading">
            <span>Navigation</span>
            <span>APPAREL FASTENER</span>
          </div>

          <nav className="mobile-menu__nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "mobile-menu__item",
                  isActive(item.href)
                    ? "is-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={
                  isActive(item.href)
                    ? "page"
                    : undefined
                }
                onClick={closeMenu}
              >
                <span className="mobile-menu__number">
                  {item.number}
                </span>

                <span className="mobile-menu__name">
                  {item.label}
                </span>

                <ArrowUpRight
                  size={24}
                  strokeWidth={1.6}
                />
              </Link>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            {CONTACTS.map((contact) => (
              <div key={contact.location}>
                <span>{contact.location}</span>

                <a href={contact.href}>
                  {contact.phone}
                </a>
              </div>
            ))}

            <div className="mobile-menu__footer-meta">
              <span>Global Apparel Network</span>
              <span>Lahore · Pakistan</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}