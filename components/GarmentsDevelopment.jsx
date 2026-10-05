"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./GarmentsDevelopment.css";

const developmentSteps = [
  {
    number: "01",
    title: "CONCEPT",
    text: "Understanding the garment direction, intended use, silhouette and visual character before development begins.",
  },
  {
    number: "02",
    title: "MATERIAL",
    text: "Selecting fabrics, trims and construction details according to the required performance and finished appearance.",
  },
  {
    number: "03",
    title: "PROTOTYPE",
    text: "Translating the initial direction into a physical garment through pattern development, sampling and refinement.",
  },
  {
    number: "04",
    title: "REFINEMENT",
    text: "Reviewing proportion, construction, fit and finishing details before moving the garment toward production.",
  },
];

export default function GarmentsDevelopment() {
  return (
    <section className="garments-development" id="garment-development">
      <div className="garments-development__hero">
        <div className="garments-development__image">
          <Image
            src="/garments/development.webp"
            alt="Garment development and product development"
            fill
            sizes="100vw"
          />

          <div className="garments-development__image-overlay" />
        </div>

        <div className="garments-development__top">
          <span>04</span>
          <span>GARMENT DEVELOPMENT</span>
        </div>

        <div className="garments-development__hero-content">
          <div>
            <p>FROM IDEA TO FORM</p>

            <h2>
              DEVELOPED
              <br />
              WITH
              <br />
              <em>INTENT.</em>
            </h2>
          </div>

          <div className="garments-development__hero-side">
            <span className="garments-development__hero-line" />

            <p>
              Every finished garment begins with a clear direction.
              Development brings concept, material, construction and
              refinement together before production begins.
            </p>
          </div>
        </div>

        <div className="garments-development__hero-bottom">
          <span>CONCEPT</span>
          <i />
          <span>MATERIAL</span>
          <i />
          <span>PROTOTYPE</span>
          <i />
          <span>REFINEMENT</span>
        </div>
      </div>

      <div className="garments-development__process">
        <div className="garments-development__process-intro">
          <p>THE DEVELOPMENT PROCESS</p>

          <h3>
            A CLEAR PATH
            <br />
            FROM <em>IDEA</em> TO
            <br />
            FINISHED FORM.
          </h3>
        </div>

        <div className="garments-development__steps">
          {developmentSteps.map((step) => (
            <article
              className="garments-development__step"
              key={step.number}
            >
              <div className="garments-development__step-top">
                <span>{step.number}</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                />
              </div>

              <div className="garments-development__step-content">
                <h4>{step.title}</h4>

                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}