"use client";

import Image from "next/image";
import "./AboutPresence.css";

const locations = [
  {
    city: "LAHORE",
    country: "PAKISTAN",
    role: "ORIGIN",
    description:
      "Our foundation and connection to apparel manufacturing, development and production.",
  },
  {
    city: "HONG KONG",
    country: "HONG KONG",
    role: "INTERNATIONAL",
    description:
      "A strategic international presence connecting the business with global apparel markets.",
  },
  {
    city: "GUANGZHOU",
    country: "CHINA",
    role: "REGIONAL",
    description:
      "A regional base supporting our connection with one of the world's major apparel markets.",
  },
];

export default function AboutPresence() {
  return (
    <section className="about-presence" id="presence">
      <div className="about-presence__inner">
        <div className="about-presence__top">
          <span className="about-presence__eyebrow">
            OUR PRESENCE
          </span>
          <span className="about-presence__index">05 / ABOUT</span>
        </div>

        <div className="about-presence__intro">
          <div>
            <h2>
              ROOTED
              <br />
              LOCALLY.
              <br />
              CONNECTED
              <br />
              GLOBALLY.
            </h2>
          </div>

          <div className="about-presence__intro-copy">
            <p className="about-presence__lead">
              Apparel is global by nature. Our presence is built to reflect
              that reality.
            </p>

            <p>
              With connections across Pakistan, Hong Kong and China, we
              operate with an international outlook while remaining close
              to the realities of apparel production and development.
            </p>
          </div>
        </div>

        <div className="about-presence__visual">
          <Image
            src="/home/26%20%E2%80%94%20Global%20Apparel.webp"
            alt="Global apparel industry"
            fill
            sizes="100vw"
            className="about-presence__image"
          />

          <div className="about-presence__visual-overlay">
            <span>APPAREL FASTENER</span>
            <strong>
              FROM
              <br />
              LOCAL ROOTS
              <br />
              TO GLOBAL
              <br />
              CONNECTIONS.
            </strong>
          </div>
        </div>

        <div className="about-presence__locations">
          {locations.map((location, index) => (
            <article
              className="about-presence__location"
              key={location.city}
            >
              <div className="about-presence__location-number">
                0{index + 1}
              </div>

              <div className="about-presence__location-main">
                <div className="about-presence__location-heading">
                  <h3>{location.city}</h3>
                  <span>{location.country}</span>
                </div>

                <span className="about-presence__location-role">
                  {location.role}
                </span>

                <p>{location.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-presence__closing">
          <span>OUR POSITION</span>

          <p>
            We bring a local understanding of apparel together with an
            international perspective — creating a business designed to
            move with the industry.
          </p>
        </div>
      </div>
    </section>
  );
}