"use client";

import Image from "next/image";
import "./AboutPhilosophy.css";

export default function AboutPhilosophy() {
  return (
    <section className="about-philosophy" id="philosophy">
      <div className="about-philosophy__inner">
        <div className="about-philosophy__top">
          <span className="about-philosophy__eyebrow">
            OUR PHILOSOPHY
          </span>
          <span className="about-philosophy__index">04 / ABOUT</span>
        </div>

        <div className="about-philosophy__intro">
          <h2>
            THINK BEYOND
            <br />
            THE PRODUCT.
          </h2>

          <p>
            We believe better apparel begins with a better understanding
            of everything that goes into it.
          </p>
        </div>

        <div className="about-philosophy__feature">
          <div className="about-philosophy__image-wrap">
            <Image
              src="/home/20%20%E2%80%94%20Material%20Research.webp"
              alt="Material research and apparel development"
              fill
              sizes="(max-width: 800px) 100vw, 52vw"
              className="about-philosophy__image"
            />
          </div>

          <div className="about-philosophy__principles">
            <div className="about-philosophy__principle">
              <span>01</span>
              <div>
                <h3>UNDERSTAND THE WHOLE</h3>
                <p>
                  Apparel is a connected system. We look beyond individual
                  products to understand how materials and components work
                  together.
                </p>
              </div>
            </div>

            <div className="about-philosophy__principle">
              <span>02</span>
              <div>
                <h3>DETAIL MATTERS</h3>
                <p>
                  The character of a finished garment is shaped by its
                  materials, construction and smallest finishing details.
                </p>
              </div>
            </div>

            <div className="about-philosophy__principle">
              <span>03</span>
              <div>
                <h3>BUILD FOR THE LONG TERM</h3>
                <p>
                  We value consistency, dependable relationships and a
                  clear understanding of what modern apparel businesses need.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-philosophy__closing">
          <span>THE PRINCIPLE</span>
          <strong>
            BETTER CONNECTIONS
            <br />
            CREATE BETTER
            <br />
            APPAREL.
          </strong>
        </div>
      </div>
    </section>
  );
}