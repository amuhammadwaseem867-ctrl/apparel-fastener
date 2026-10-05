import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./FabricsApplications.css";

const applications = [
  {
    number: "01",
    title: "APPAREL",
    description:
      "Fabric structures developed for garments where comfort, appearance, construction and finish work together.",
    image: "/garments/collection.webp",
  },
  {
    number: "02",
    title: "OUTERWEAR",
    description:
      "Structured and performance-oriented fabrics suited to jackets, coats and garments designed for changing conditions.",
    image: "/garments/herogarment.webp",
  },
  {
    number: "03",
    title: "KNITWEAR",
    description:
      "Flexible knitted structures developed around softness, stretch, texture and everyday wearability.",
    image: "/garments/detail.webp",
  },
  {
    number: "04",
    title: "TECHNICAL",
    description:
      "Selected structures and materials developed for applications where fabric performance is as important as appearance.",
    image: "/garments/factory-detail.webp",
  },
];

export default function FabricsApplications() {
  return (
    <section className="fabrics-applications" id="fabric-applications">
      <div className="fabrics-applications__header">
        <div className="fabrics-applications__eyebrow">
          <span>05</span>
          <span>FABRIC APPLICATIONS</span>
        </div>

        <div className="fabrics-applications__title">
          <p>BUILT FOR DIFFERENT PURPOSES.</p>

          <h2>
            ONE MATERIAL.
            <br />
            MANY FORMS.
          </h2>
        </div>

        <p className="fabrics-applications__intro">
          Fabric performance is defined by its final purpose. Our structures
          can be developed across apparel, outerwear, knitwear and technical
          applications.
        </p>
      </div>

      <div className="fabrics-applications__grid">
        {applications.map((application) => (
          <article
            className="fabrics-applications__item"
            key={application.number}
          >
            <div className="fabrics-applications__image">
              <Image
                src={application.image}
                alt={application.title}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />

              <div className="fabrics-applications__image-overlay" />

              <span className="fabrics-applications__number">
                {application.number}
              </span>

              <span className="fabrics-applications__arrow">
                <ArrowUpRight size={20} strokeWidth={1.4} />
              </span>
            </div>

            <div className="fabrics-applications__content">
              <h3>{application.title}</h3>

              <p>{application.description}</p>

              <span className="fabrics-applications__line" />
            </div>
          </article>
        ))}
      </div>

      <div className="fabrics-applications__statement">
        <div className="fabrics-applications__statement-label">
          APPLICATION / MATERIAL / PERFORMANCE
        </div>

        <h3>
          THE RIGHT FABRIC
          <br />
          STARTS WITH THE
          <br />
          RIGHT PURPOSE.
        </h3>

        <p>
          From the first fibre choice to the finished structure, development
          begins with understanding how the fabric will ultimately be used.
        </p>
      </div>
    </section>
  );
}