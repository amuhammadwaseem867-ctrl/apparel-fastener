"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./FeaturedProducts.css";

const products = [
  {
    number: "01",
    category: "GARMENTS",
    title: "ENGINEERED APPAREL",
    description:
      "Finished garments developed around construction, performance and precise manufacturing.",
    image: "/home/10%20finished%20garments.webp",
    href: "/garments",
    position: "left",
  },
  {
    number: "02",
    category: "FABRICS",
    title: "TECHNICAL MATERIALS",
    description:
      "Performance-focused materials selected for construction, comfort and application.",
    image: "/home/08%20%E2%80%94%20Technical%20Fabric%20Macro.webp",
    href: "/fabrics",
    position: "right",
  },
  {
    number: "03",
    category: "ACCESSORIES",
    title: "APPAREL COMPONENTS",
    description:
      "Zippers, sliders, trims and essential components that complete the garment system.",
    image: "/home/12%20%E2%80%94%20Zipper%20Macro.webp",
    href: "/garment-accessories",
    position: "bottom",
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("featured-products--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="featured-products"
    >
      <div className="featured-products__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="featured-products__header">

          <div className="featured-products__eyebrow">
            <span className="featured-products__eyebrow-line" />
            <span>FEATURED PRODUCTS</span>
          </div>

          <div className="featured-products__heading-grid">

            <h2 className="featured-products__title">
              <span>SELECTED</span>
              <span>FROM OUR</span>
              <span><em>WORLD.</em></span>
            </h2>

            <div className="featured-products__intro">
              <p>
                A focused selection from across our garments,
                fabrics and garment accessories — developed
                for the demands of modern apparel.
              </p>

              <Link
                href="/garments"
                className="featured-products__all-link"
              >
                <span>Explore All Products</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        <div className="featured-products__grid">

          {products.map((product) => (
            <Link
              key={product.number}
              href={product.href}
              className={`featured-product featured-product--${product.position}`}
            >
              <div className="featured-product__media">

                <img
                  src={product.image}
                  alt={product.title}
                  className="featured-product__image"
                />

                <div className="featured-product__overlay" />

                <span className="featured-product__number">
                  {product.number}
                </span>

                <span className="featured-product__open">
                  ↗
                </span>

              </div>

              <div className="featured-product__content">

                <div className="featured-product__category">
                  {product.category}
                </div>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <span className="featured-product__link">
                  <span>Explore Product Range</span>
                  <span>↗</span>
                </span>

              </div>
            </Link>
          ))}

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="featured-products__bottom">

          <span className="featured-products__bottom-number">
            THREE DIVISIONS
          </span>

          <p>
            MATERIALS, GARMENTS AND COMPONENTS —
            CONNECTED THROUGH ONE APPAREL SYSTEM.
          </p>

          <Link
            href="/garment-accessories"
            className="featured-products__bottom-link"
          >
            View Divisions
            <span>↗</span>
          </Link>

        </div>

      </div>
    </section>
  );
}