"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./GarmentsManufacturing.css";

const manufacturingStages = [
  {
    number: "01",
    title: "CUTTING",
    description:
      "Accurate preparation of fabric and garment components establishes consistency from the first stage of production.",
  },
  {
    number: "02",
    title: "CONSTRUCTION",
    description:
      "Panels, seams and components are assembled through controlled production processes built around the garment specification.",
  },
  {
    number: "03",
    title: "ASSEMBLY",
    description:
      "Garment components, closures and finishing elements come together to create the complete product structure.",
  },
  {
    number: "04",
    title: "FINISHING",
    description:
      "Final inspection, pressing and finishing details prepare each garment for its intended presentation and use.",
  },
];

export default function GarmentsManufacturing() {
  return (
    <section
      className="garments-manufacturing"
      id="garment-manufacturing"
    >
      <div className="garments-manufacturing__hero">
        <div className="garments-manufacturing__media">
          <Image
            src="/garments/manufacturing.webp"
            alt="Apparel Fastener garment manufacturing"
            fill
            sizes="100vw"
          />

          <div className="garments-manufacturing__overlay" />
        </div>

        <div className="garments-manufacturing__top">
          <span className="garments-manufacturing__number">
            05
          </span>

          <span>GARMENT MANUFACTURING</span>
        </div>

        <div className="garments-manufacturing__content">
          <div className="garments-manufacturing__title">
            <p>BUILT THROUGH PROCESS</p>

            <h2>
              PRECISION
              <br />
              IN
              <br />
              <em>PRODUCTION.</em>
            </h2>
          </div>

          <div className="garments-manufacturing__side">
            <div className="garments-manufacturing__line" />

            <p>
              From the first cut to the final finish, production is
              built around consistency, controlled construction and
              attention to the details that define the finished garment.
            </p>

            <div className="garments-manufacturing__location">
              <span>PRODUCTION</span>
              <i />
              <span>LAHORE, PAKISTAN</span>
            </div>
          </div>
        </div>

        <div className="garments-manufacturing__bottom">
          <span>PROCESS</span>
          <i />
          <span>PRECISION</span>
          <i />
          <span>CONSISTENCY</span>
        </div>
      </div>

      <div className="garments-manufacturing__process">
        <div className="garments-manufacturing__process-header">
          <div>
            <p>PRODUCTION SYSTEM</p>

            <h3>
              MADE THROUGH
              <br />
              <em>CONTROLLED</em>
              PROCESS.
            </h3>
          </div>

          <p className="garments-manufacturing__process-intro">
            Every stage contributes to the final character of the
            garment. Production follows a structured sequence designed
            to maintain quality, accuracy and consistency.
          </p>
        </div>

        <div className="garments-manufacturing__stages">
          {manufacturingStages.map((stage) => (
            <article
              className="garments-manufacturing__stage"
              key={stage.number}
            >
              <div className="garments-manufacturing__stage-number">
                {stage.number}
              </div>

              <div className="garments-manufacturing__stage-main">
                <div className="garments-manufacturing__stage-heading">
                  <h4>{stage.title}</h4>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                  />
                </div>

                <p>{stage.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="garments-manufacturing__detail">
        <div className="garments-manufacturing__detail-image">
          <Image
            src="/garments/factory.webp"
            alt="Garment production facility"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>

        <div className="garments-manufacturing__detail-content">
          <span>PRODUCTION ENVIRONMENT</span>

          <h3>
            WHERE
            <br />
            DETAILS
            <br />
            <em>MATTER.</em>
          </h3>

          <p>
            A considered manufacturing environment connects people,
            equipment and process around one objective: producing
            garments that remain consistent from the first piece to
            the finished production run.
          </p>

          <div className="garments-manufacturing__detail-meta">
            <span>GARMENTS</span>
            <span>JACKETS</span>
            <span>SWEATERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}