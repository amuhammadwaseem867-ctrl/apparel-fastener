"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./GarmentsFinished.css";

export default function GarmentsFinished() {
  return (
    <section className="garments-finished" id="garment-finished">
      <div className="garments-finished__media">
        <Image
          src="/garments/herogarment.webp"
          alt="Finished garment collection"
          fill
          sizes="100vw"
        />

        <div className="garments-finished__overlay" />
      </div>

      <div className="garments-finished__content">
        <div className="garments-finished__top">
          <span className="garments-finished__number">07</span>

          <span>THE FINISHED FORM</span>
        </div>

        <div className="garments-finished__main">
          <div className="garments-finished__title">
            <p>THE RESULT</p>

            <h2>
              MADE
              <br />
              TO
              <br />
              <em>FINISH.</em>
            </h2>
          </div>

          <div className="garments-finished__side">
            <div className="garments-finished__line" />

            <p>
              A finished garment brings every decision together —
              material, silhouette, construction, fastening, detail and
              final presentation.
            </p>

            <a
              href="#garment-collections"
              className="garments-finished__link"
            >
              <span>EXPLORE THE COLLECTION</span>

              <span className="garments-finished__link-icon">
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </span>
            </a>
          </div>
        </div>

        <div className="garments-finished__bottom">
          <div className="garments-finished__system">
            <span>JACKETS</span>
            <i />
            <span>SWEATERS</span>
            <i />
            <span>FINISHED FORM</span>
          </div>

          <div className="garments-finished__scroll">
            <span className="garments-finished__scroll-icon">
              <ArrowDown size={14} strokeWidth={1.8} />
            </span>

            <span>CONTINUE</span>
          </div>

          <div className="garments-finished__location">
            <span>APPAREL FASTENER</span>
          </div>
        </div>
      </div>

      <div className="garments-finished__corner garments-finished__corner--tl" />
      <div className="garments-finished__corner garments-finished__corner--br" />
    </section>
  );
}