"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./FabricsOverview.css";

const fabricSystems = [
  {
    number: "01",
    category: "SUSTAINABLE FABRICS",
    title: "MATERIALS WITH A LOWER IMPACT.",
    description:
      "A considered range of natural, recycled and regenerated fibres developed for modern apparel applications.",
    image: "/garments/quality.webp",
    href: "#sustainable-fabrics",
  },
  {
    number: "02",
    category: "WOVEN FABRICS",
    title: "STRUCTURE THROUGH WEAVE.",
    description:
      "Woven structures across a broad range of textures, weights and constructions for diverse garment applications.",
    image: "/garments/collection.webp",
    href: "#woven-fabrics",
  },
  {
    number: "03",
    category: "KNITTED FABRICS",
    title: "FLEXIBILITY THROUGH LOOP.",
    description:
      "Knitted structures developed around comfort, stretch, texture and performance for contemporary garments.",
    image: "/garments/detail.webp",
    href: "#knitted-fabrics",
  },
];

export default function FabricsOverview() {
  return (
    <section className="fabrics-overview" id="fabric-overview">
      <div className="fabrics-overview__intro">
        <div className="fabrics-overview__eyebrow">
          <span>02</span>
          <span>FABRIC SYSTEMS</span>
        </div>

        <div className="fabrics-overview__intro-grid">
          <div className="fabrics-overview__heading">
            <p>THE MATERIALS</p>

            <h2>
              FROM
              <br />
              FIBRE
              <br />
              <em>TO FORM.</em>
            </h2>
          </div>

          <div className="fabrics-overview__copy">
            <p>
              Raw materials, machinery and controlled production
              processes allow a wide range of fabric structures to be
              developed for apparel and technical applications.
            </p>

            <p>
              Our fabric offering is organised across three distinct
              systems — sustainable fibres, woven structures and knitted
              fabrics.
            </p>
          </div>
        </div>
      </div>

      <div className="fabrics-overview__systems">
        {fabricSystems.map((system) => (
          <article
            className="fabrics-overview__system"
            key={system.number}
          >
            <div className="fabrics-overview__image">
              <Image
                src={system.image}
                alt={system.category}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />

              <div className="fabrics-overview__image-overlay" />

              <span className="fabrics-overview__number">
                {system.number}
              </span>

              <span className="fabrics-overview__category">
                {system.category}
              </span>
            </div>

            <div className="fabrics-overview__details">
              <div className="fabrics-overview__detail-heading">
                <span>{system.category}</span>

                <h3>{system.title}</h3>
              </div>

              <p>{system.description}</p>

              <Link
                href={system.href}
                className="fabrics-overview__link"
              >
                <span>EXPLORE SYSTEM</span>

                <span className="fabrics-overview__link-icon">
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