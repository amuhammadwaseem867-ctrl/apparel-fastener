"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./GarmentsProducts.css";

const jackets = [
  {
    name: "Bomber Jacket",
    image: "/garments/bomber jacket.webp",
  },
  {
    name: "Long Bomber Jacket",
    image: "/garments/long bomber jacket.webp",
  },
 
  {
    name: "Hooded Jacket",
    image: "/garments/hooded jacket .webp",
  },
  {
    name: "Puffy Jacket",
    image: "/garments/puffy jacket.webp",
  },
  {
    name: "Trench Jacket",
    image: "/garments/trench jacket.webp",
  },
  {
    name: "Woolen Jacket",
    image: "/garments/woolen-jacket.webp",
  },
];

const sweaters = [
  {
    name: "Cardigan",
    image: "/garments/cardigan.webp",
  },
  {
    name: "Cashmere Sweater",
    image: "/garments/cash mere sweaters.webp",
  },
  {
    name: "Chunky Sweater",
    image: "/garments/chunky sweaters.webp",
  },
  {
    name: "Crew Neck Sweater",
    image: "/garments/Crew Neck Sweater.webp",
  },
  {
    name: "Fisherman Sweater",
    image: "/garments/fisher man sweater.webp",
  },
  {
    name: "Funnel Neck Sweater",
    image: "/garments/Funnel Neck Sweater.webp",
  },
  {
    name: "Hoodie",
    image: "/garments/hoodie.webp",
  },
  {
    name: "Sweater",
    image: "/garments/sweater.webp",
  },
];

function ProductCard({ product, index }) {
  return (
    <article className="garments-products__card">
      <div className="garments-products__image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />

        <div className="garments-products__image-overlay" />

        <span className="garments-products__index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="garments-products__arrow">
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </span>
      </div>

      <div className="garments-products__card-info">
        <span>GARMENT</span>
        <h3>{product.name}</h3>
      </div>
    </article>
  );
}

function ProductGroup({ number, title, description, products }) {
  return (
    <div className="garments-products__group">
      <div className="garments-products__group-header">
        <div className="garments-products__group-title">
          <span>{number}</span>

          <div>
            <p>COLLECTION</p>
            <h3>{title}</h3>
          </div>
        </div>

        <p className="garments-products__group-description">
          {description}
        </p>
      </div>

      <div className="garments-products__grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.name}
            product={product}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default function GarmentsProducts() {
  return (
    <section
      className="garments-products"
      id="garment-collections"
    >
      <div className="garments-products__header">
        <div className="garments-products__eyebrow">
          <span>03</span>
          <span>GARMENT COLLECTIONS</span>
        </div>

        <div className="garments-products__header-grid">
          <div>
            <p className="garments-products__kicker">
              PRODUCT EXPLORER
            </p>

            <h2>
              THE
              <br />
              GARMENT
              <br />
              <em>FORM.</em>
            </h2>
          </div>

          <div className="garments-products__intro">
            <p>
              Explore a focused range of jackets and sweaters developed
              as finished garment forms.
            </p>

            <span>
              JACKETS / SWEATERS
            </span>
          </div>
        </div>
      </div>

      <div className="garments-products__collections">
        <ProductGroup
          number="01"
          title="JACKETS"
          description="Structured outerwear developed across different silhouettes, materials and finishing approaches."
          products={jackets}
        />

        <ProductGroup
          number="02"
          title="SWEATERS"
          description="Refined knitwear developed around texture, construction, comfort and distinctive garment character."
          products={sweaters}
        />
      </div>
    </section>
  );
}