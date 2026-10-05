"use client";

import Image from "next/image";
import "./AboutWhoWeAre.css";

export default function AboutWhoWeAre() {
  return (
    <section className="about-who" id="who-we-are">
      <div className="about-who__inner">
        <div className="about-who__top">
          <span className="about-who__eyebrow">WHO WE ARE</span>
          <span className="about-who__index">03 / ABOUT</span>
        </div>

        <div className="about-who__heading">
          <h2>
            BUILT AROUND
            <br />
            THE BUSINESS
            <br />
            OF APPAREL.
          </h2>
        </div>

        <div className="about-who__content">
          <div className="about-who__image-wrap">
            <Image
              src="/home/21%20%E2%80%94%20Design%20Studio.webp"
              alt="Apparel Fastener design studio"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="about-who__image"
            />
          </div>

          <div className="about-who__copy">
            <p className="about-who__lead">
              Apparel Fastener is an apparel-focused company built around
              the different elements that shape a finished garment.
            </p>

            <p>
              We work across garments, fabrics, and garment accessories,
              bringing together materials, components, and apparel
              development within one connected business.
            </p>

            <p>
              Our approach is grounded in understanding how each element
              contributes to the final product — from the character of a
              fabric to the details that complete a garment.
            </p>

            <div className="about-who__statement">
              <span>OUR APPROACH</span>
              <strong>
                DIFFERENT ELEMENTS.
                <br />
                ONE APPAREL
                <br />
                PERSPECTIVE.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}