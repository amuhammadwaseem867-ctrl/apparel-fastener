"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./GarmentsQuality.css";

const qualityPoints = [
  {
    number: "01",
    title: "MATERIAL",
    description:
      "Materials are reviewed for consistency, appearance and suitability to the intended garment.",
  },
  {
    number: "02",
    title: "CONSTRUCTION",
    description:
      "Seams, panels, closures and garment components are checked against the required construction.",
  },
  {
    number: "03",
    title: "FINISH",
    description:
      "Surface appearance, pressing, detailing and final presentation are reviewed before completion.",
  },
  {
    number: "04",
    title: "CONSISTENCY",
    description:
      "Production output is assessed to maintain a consistent standard across the finished garment.",
  },
];

export default function GarmentsQuality() {
  return (
    <section className="garments-quality" id="garment-quality">
      <div className="garments-quality__hero">
        <div className="garments-quality__media">
          <Image
            src="/garments/quality.webp"
            alt="Garment quality and finishing"
            fill
            sizes="100vw"
          />

          <div className="garments-quality__overlay" />
        </div>

        <div className="garments-quality__top">
          <span className="garments-quality__number">06</span>
          <span>GARMENT QUALITY</span>
        </div>

        <div className="garments-quality__content">
          <div className="garments-quality__title">
            <p>FINISHING WITH PURPOSE</p>

            <h2>
              QUALITY
              <br />
              IN THE
              <br />
              <em>DETAIL.</em>
            </h2>
          </div>

          <div className="garments-quality__side">
            <div className="garments-quality__line" />

            <p>
              Quality is considered throughout the garment journey —
              from material selection and construction to inspection and
              final presentation.
            </p>

            <div className="garments-quality__meta">
              <span>CONTROL</span>
              <i />
              <span>FINISH</span>
              <i />
              <span>CONSISTENCY</span>
            </div>
          </div>
        </div>

        <div className="garments-quality__bottom">
          <span>INSPECT</span>
          <i />
          <span>REFINE</span>
          <i />
          <span>COMPLETE</span>
        </div>
      </div>

      <div className="garments-quality__body">
        <div className="garments-quality__intro">
          <p>QUALITY FRAMEWORK</p>

          <h3>
            EVERY DETAIL
            <br />
            HAS A
            <br />
            <em>PURPOSE.</em>
          </h3>

          <div className="garments-quality__intro-line" />

          <p className="garments-quality__intro-copy">
            A finished garment is defined by more than its overall
            appearance. Construction, material behaviour, fit,
            finishing and consistency all contribute to the final
            result.
          </p>
        </div>

        <div className="garments-quality__points">
          {qualityPoints.map((point) => (
            <article
              className="garments-quality__point"
              key={point.number}
            >
              <div className="garments-quality__point-top">
                <span>{point.number}</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                />
              </div>

              <div className="garments-quality__point-content">
                <h4>{point.title}</h4>

                <p>{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="garments-quality__statement">
        <div className="garments-quality__statement-image">
          <Image
            src="/garments/detail.webp"
            alt="Garment detail and finishing"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>

        <div className="garments-quality__statement-content">
          <span>FINAL INSPECTION</span>

          <h3>
            THE
            <br />
            DIFFERENCE
            <br />
            IS IN THE
            <br />
            <em>FINISH.</em>
          </h3>

          <p>
            Before a garment reaches its final form, the details are
            reviewed with the same attention given to its overall
            construction.
          </p>
        </div>
      </div>
    </section>
  );
}