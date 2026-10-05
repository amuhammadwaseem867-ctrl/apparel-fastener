import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./FabricsDevelopment.css";

const developmentStages = [
  {
    number: "01",
    title: "FIBRE SELECTION",
    text: "Material selection begins with the intended application, balancing fibre characteristics, hand feel, durability and performance.",
  },
  {
    number: "02",
    title: "STRUCTURE",
    text: "The selected material is developed into a woven or knitted structure with consideration for weight, texture, density and construction.",
  },
  {
    number: "03",
    title: "SAMPLING",
    text: "Initial fabric samples are developed and reviewed to establish the required appearance, handle and functional characteristics.",
  },
  {
    number: "04",
    title: "FINISHING",
    text: "Finishing processes refine the fabric surface, appearance and performance while maintaining consistency across production.",
  },
];

export default function FabricsDevelopment() {
  return (
    <section className="fabrics-development" id="fabric-development">
      <div className="fabrics-development__intro">
        <div className="fabrics-development__eyebrow">
          <span>04</span>
          <span>FABRIC DEVELOPMENT</span>
        </div>

        <div className="fabrics-development__heading">
          <p className="fabrics-development__kicker">
            FROM FIBRE TO STRUCTURE.
          </p>

          <h2>
            DEVELOPED
            <br />
            WITH MATERIAL
            <br />
            IN MIND.
          </h2>
        </div>

        <p className="fabrics-development__description">
          Fabric development brings together raw material, construction and
          finishing to create structures suited to the demands of modern
          apparel and technical applications.
        </p>
      </div>

      <div className="fabrics-development__visual">
        <Image
          src="/garments/development.webp"
          alt="Fabric development and textile production"
          fill
          sizes="(max-width: 900px) 100vw, 58vw"
        />

        <div className="fabrics-development__visual-label">
          <span>DEVELOPMENT</span>
          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>

      <div className="fabrics-development__process">
        {developmentStages.map((stage) => (
          <div className="fabrics-development__stage" key={stage.number}>
            <div className="fabrics-development__stage-top">
              <span>{stage.number}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>

            <h3>{stage.title}</h3>

            <p>{stage.text}</p>
          </div>
        ))}
      </div>

      <div className="fabrics-development__detail">
        <div className="fabrics-development__detail-image">
          <Image
            src="/garments/sewing.webp"
            alt="Textile production detail"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>

        <div className="fabrics-development__detail-copy">
          <span className="fabrics-development__detail-number">04 / 04</span>

          <h3>
            EVERY STRUCTURE
            <br />
            HAS A PURPOSE.
          </h3>

          <p>
            From lightweight woven constructions to textured knits, each
            development is considered around the final garment, its intended
            use and the experience of the finished fabric.
          </p>

          <a href="#fabric-collections">
            VIEW FABRIC COLLECTIONS
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}