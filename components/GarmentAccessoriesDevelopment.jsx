import Image from "next/image";
import Link from "next/link";
import "./GarmentAccessoriesDevelopment.css";

const developmentStages = [
  {
    number: "01",
    title: "COMPONENT SELECTION",
    description:
      "Accessory development begins with selecting the right component for the garment, construction, application and desired finish.",
  },
  {
    number: "02",
    title: "SAMPLING & DEVELOPMENT",
    description:
      "Components are evaluated through sampling to establish compatibility, placement, proportions and overall garment integration.",
  },
  {
    number: "03",
    title: "PRODUCTION",
    description:
      "Once the specification is established, components move into controlled production with attention to consistency and application.",
  },
  {
    number: "04",
    title: "QUALITY & DISTRIBUTION",
    description:
      "Finished accessories are prepared for garment production and distribution, supporting the journey from component to finished product.",
  },
];

export default function GarmentAccessoriesDevelopment() {
  return (
    <section className="accessories-development">
      <div className="accessories-development__intro">
        <div className="accessories-development__eyebrow">
          <span>04</span>
          <span>ACCESSORIES DEVELOPMENT</span>
        </div>

        <div className="accessories-development__intro-grid">
          <div>
            <p className="accessories-development__kicker">
              FROM COMPONENT TO
              <br />
              FINISHED GARMENT.
            </p>
          </div>

          <div className="accessories-development__copy">
            <h2>DEVELOPED AROUND THE GARMENT.</h2>

            <p>
              Every accessory has a role within the final garment. From
              fastening and support to decoration and presentation, our
              development approach considers how each component works within
              the complete production process.
            </p>
          </div>
        </div>
      </div>

      <div className="accessories-development__hero">
        <Image
          src="/garments/development.webp"
          alt="Garment accessory development"
          fill
          sizes="100vw"
          className="accessories-development__hero-image"
        />

        <div className="accessories-development__hero-overlay" />

        <div className="accessories-development__hero-content">
          <span>DEVELOPMENT / PROCESS</span>
          <h3>EVERY DETAIL STARTS WITH PURPOSE.</h3>
        </div>
      </div>

      <div className="accessories-development__stages">
        {developmentStages.map((stage) => (
          <article
            className="accessories-development__stage"
            key={stage.number}
          >
            <span className="accessories-development__stage-number">
              {stage.number}
            </span>

            <div className="accessories-development__stage-content">
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="accessories-development__detail">
        <div className="accessories-development__detail-image">
          <Image
            src="/garments/sewing.webp"
            alt="Garment production detail"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="accessories-development__detail-img"
          />
        </div>

        <div className="accessories-development__detail-content">
          <span>COMPONENT / CONSTRUCTION / FINISH</span>

          <h3>
            THE RIGHT
            <br />
            COMPONENT
            <br />
            COMPLETES
            <br />
            THE CONSTRUCTION.
          </h3>

          <p>
            Accessories become part of the garment&apos;s identity through their
            placement, finish and interaction with the overall construction.
            The objective is a considered result where function and appearance
            work together.
          </p>

          <Link
            href="#accessories-collections"
            className="accessories-development__link"
          >
            VIEW ACCESSORY COLLECTION
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}