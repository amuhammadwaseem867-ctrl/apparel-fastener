import Image from "next/image";
import "./GarmentAccessoriesApplications.css";

const applications = [
  {
    number: "01",
    title: "APPAREL",
    description:
      "Components selected and integrated around the construction, function and finishing requirements of everyday garments.",
    image: "/garments/collection.webp",
  },
  {
    number: "02",
    title: "OUTERWEAR",
    description:
      "Fastening, support and finishing components developed for jackets and outerwear where construction and durability matter.",
    image: "/garments/herogarment.webp",
  },
  {
    number: "03",
    title: "KNITWEAR",
    description:
      "Accessories considered around knitted structures, proportions, comfort and the overall character of the finished garment.",
    image: "/garments/detail.webp",
  },
  {
    number: "04",
    title: "BRANDING & PACKAGING",
    description:
      "Hang tags, polybags and finishing elements that carry the garment from production through presentation and distribution.",
    image: "/garments/catalogue.webp",
  },
];

export default function GarmentAccessoriesApplications() {
  return (
    <section className="accessories-applications">
      <div className="accessories-applications__intro">
        <div className="accessories-applications__eyebrow">
          <span>05</span>
          <span>ACCESSORIES APPLICATIONS</span>
        </div>

        <div className="accessories-applications__heading">
          <p>ONE SYSTEM.</p>
          <h2>MANY GARMENT APPLICATIONS.</h2>
        </div>

        <p className="accessories-applications__description">
          Garment accessories become meaningful when they work within the
          finished product. From construction and fastening to branding and
          packaging, each component has a place within the wider garment
          ecosystem.
        </p>
      </div>

      <div className="accessories-applications__grid">
        {applications.map((application) => (
          <article
            className="accessories-applications__item"
            key={application.number}
          >
            <div className="accessories-applications__image">
              <Image
                src={application.image}
                alt={application.title}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className="accessories-applications__img"
              />

              <div className="accessories-applications__overlay" />

              <span className="accessories-applications__number">
                {application.number}
              </span>

              <span className="accessories-applications__arrow">↗</span>
            </div>

            <div className="accessories-applications__content">
              <h3>{application.title}</h3>
              <p>{application.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="accessories-applications__statement">
        <span>THE COMPLETE GARMENT ECOSYSTEM</span>

        <h3>
          FROM THE FIRST
          <br />
          COMPONENT
          <br />
          TO THE FINAL FORM.
        </h3>

        <p>
          The right accessories connect function, construction, appearance
          and presentation into one considered garment.
        </p>
      </div>
    </section>
  );
}