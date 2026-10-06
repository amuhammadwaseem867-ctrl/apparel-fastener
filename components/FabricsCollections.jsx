"use client";

import { ArrowUpRight } from "lucide-react";
import "./FabricsCollections.css";

const sustainableFabrics = [
  "Organic Cotton",
  "Recycled Cotton",
  "Organic Hemp",
  "Organic Linen",
  "Organic Bamboo",
  "Lyocell",
  "Modal",
  "Ramie",
  "Bamboo Lyocell",
  "EcoVero",
  "ECONYL",
  "Recycled Polyester",
  "Organic Wool",
  "Merino Wool",
  "Cashmere",
  "Organic Jute",
  "Tencel",
  "Organic Silk",
  "Recyclable PET Fabric",
  "Polylactic Acid Fabric",
];

const wovenFabrics = [
  "Cambric",
  "Chiffon",
  "Crepe",
  "Flannel",
  "Sateen",
  "Lawn",
  "Muslin",
  "Organdy",
  "Jacquard",
  "Khadi",
  "Georgette",
  "Taffeta",
  "Velvet",
  "Mesh",
  "Drill",
  "Cashmere",
  "Clip Jacquard",
  "Canvas",
  "Damask",
  "Cotton",
  "Lace",
  "Gingham",
  "Leather",
  "Linen",
  "Organza",
  "Toile",
  "Twill",
  "Corduroy",
  "Casement",
  "Cheese",
  "Chintz",
  "Gabardine",
  "Poplin",
  "Sheeting",
  "Tissue",
  "Silk",
  "Chenille",
];

const knittedFabrics = [
  "Single Jersey",
  "Double Jersey",
  "Burnout Jersey",
  "Rib",
  "Interlock",
  "Pique",
  "Lacoste",
  "Fleece",
  "Spandex",
  "Merino Wool",
  "Velvet",
  "Scuba Knit",
  "Ruffle Knit",
  "Tricot",
  "Thermal",
  "Denim",
];

function FabricGroup({
  number,
  id,
  title,
  description,
  fabrics,
}) {
  return (
    <section
      className="fabrics-collections__group"
      id={id}
    >
      <div className="fabrics-collections__group-header">
        <div className="fabrics-collections__group-title">
          <span className="fabrics-collections__number">
            {number}
          </span>

          <div>
            <p>FABRIC SYSTEM</p>
            <h3>{title}</h3>
          </div>
        </div>

        <p className="fabrics-collections__group-description">
          {description}
        </p>
      </div>

      <div className="fabrics-collections__list">
        {fabrics.map((fabric, index) => (
          <article
            className="fabrics-collections__item"
            key={`${fabric}-${index}`}
          >
            <span className="fabrics-collections__item-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h4>{fabric}</h4>

            <span className="fabrics-collections__item-icon">
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
              />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function FabricsCollections() {
  return (
    <section
      className="fabrics-collections"
      id="fabric-collections"
    >
      <div className="fabrics-collections__intro">
        <div className="fabrics-collections__eyebrow">
          <span>03</span>
          <span>FABRIC COLLECTIONS</span>
        </div>

        <div className="fabrics-collections__intro-grid">
          <div>
            <p className="fabrics-collections__kicker">
              THE FABRIC DIRECTORY
            </p>

            <h2>
              A BROAD
              <br />
              RANGE OF
              <br />
              <em>STRUCTURES.</em>
            </h2>
          </div>

          <div className="fabrics-collections__intro-copy">
            <p>
              Our fabric range spans natural, recycled and regenerated
              fibres alongside woven and knitted structures developed
              for a wide range of apparel applications.
            </p>

            <div className="fabrics-collections__stats">
              <div>
                <strong>20+</strong>
                <span>SUSTAINABLE</span>
              </div>

              <div>
                <strong>38+</strong>
                <span>WOVEN</span>
              </div>

              <div>
                <strong>16+</strong>
                <span>KNITTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fabrics-collections__groups">
        <FabricGroup
          number="01"
          id="sustainable-fabrics"
          title="SUSTAINABLE FABRICS"
          description="Natural, recycled and regenerated fibres selected for apparel applications with a focus on responsible material choices."
          fabrics={sustainableFabrics}
        />

        <FabricGroup
          number="02"
          id="woven-fabrics"
          title="WOVEN FABRICS"
          description="Structured fabric constructions covering a broad spectrum of textures, weights, finishes and garment applications."
          fabrics={wovenFabrics}
        />

        <FabricGroup
          number="03"
          id="knitted-fabrics"
          title="KNITTED FABRICS"
          description="Flexible knitted structures developed around comfort, stretch, texture, warmth and contemporary garment performance."
          fabrics={knittedFabrics}
        />
      </div>
    </section>
  );
}