"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./GarmentsOverview.css";

const garmentCategories = [
  {
    number: "01",
    category: "JACKETS",
    title: "STRUCTURED OUTERWEAR",
    description:
      "A focused collection of jackets developed around structure, material, function and refined finishing.",
    image: "/garments/bomber jacket.webp",
    href: "#garment-collections",
  },
  {
    number: "02",
    category: "SWEATERS",
    title: "REFINED KNITWEAR",
    description:
      "Sweater forms developed with attention to texture, construction, comfort and the final character of the garment.",
    image: "/garments/cash mere sweaters.webp",
    href: "#garment-collections",
  },
];

export default function GarmentsOverview() {
  return (
    <section className="garments-overview" id="garment-overview">
      <div className="garments-overview__intro">
        <div className="garments-overview__eyebrow">
          <span>02</span>
          <span>GARMENT COLLECTION</span>
        </div>

        <div className="garments-overview__intro-grid">
          <div className="garments-overview__heading">
            <p>THE COLLECTION</p>

            <h2>
              FROM
              <br />
              STRUCTURE
              <br />
              <em>TO TEXTURE.</em>
            </h2>
          </div>

          <div className="garments-overview__copy">
            <p>
              Our garment collection brings together two distinct product
              directions: structured jackets and refined sweaters.
            </p>

            <p>
              Each garment is developed with a clear focus on material,
              construction, proportion and finishing — creating products
              designed to perform as complete finished forms.
            </p>
          </div>
        </div>
      </div>

      <div className="garments-overview__categories">
        {garmentCategories.map((item) => (
          <article
            className="garments-overview__category"
            key={item.number}
          >
            <div className="garments-overview__image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />

              <div className="garments-overview__image-overlay" />

              <span className="garments-overview__number">
                {item.number}
              </span>

              <span className="garments-overview__category-label">
                {item.category}
              </span>
            </div>

            <div className="garments-overview__details">
              <div>
                <p className="garments-overview__detail-label">
                  {item.category}
                </p>

                <h3>{item.title}</h3>
              </div>

              <p className="garments-overview__description">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="garments-overview__link"
              >
                <span>VIEW COLLECTION</span>

                <span className="garments-overview__link-icon">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}