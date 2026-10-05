import { ArrowUpRight } from "lucide-react";
import "./GarmentAccessoriesCollections.css";

const accessoryGroups = [
  {
    number: "01",
    category: "FASTENING",
    title: "COMPONENTS THAT CONNECT.",
    description:
      "Functional components that secure garments, support movement and contribute to long-term wearability.",
    items: [
      "Zipper",
      "Buttons",
      "Velcro",
      "Toggles",
      "Rivet",
    ],
  },
  {
    number: "02",
    category: "STRUCTURE & SUPPORT",
    title: "BUILT INTO THE CONSTRUCTION.",
    description:
      "Supporting materials that help define garment structure, flexibility, stability and finishing.",
    items: [
      "Interlining",
      "Elastic",
      "Elastic Tape",
      "Cord",
      "Buttonhole Tape",
      "Welted Tape",
    ],
  },
  {
    number: "03",
    category: "DECORATIVE",
    title: "DETAILS THAT DEFINE.",
    description:
      "Decorative elements that introduce texture, identity and visual character to the finished garment.",
    items: [
      "Motif",
      "Ribbons",
      "Fringes",
      "Tassels",
    ],
  },
  {
    number: "04",
    category: "PACKAGING & BRANDING",
    title: "THE FINAL TOUCH.",
    description:
      "Branding and packaging components that carry the garment from production into its final presentation.",
    items: [
      "Hang Tag",
      "Polybag",
    ],
  },
];

function AccessoryGroup({ group }) {
  return (
    <article
      className="garment-accessories-collections__group"
      id={
        group.category === "FASTENING"
          ? "accessory-fastening"
          : group.category === "STRUCTURE & SUPPORT"
            ? "accessory-structure"
            : group.category === "DECORATIVE"
              ? "accessory-decorative"
              : "accessory-packaging"
      }
    >
      <div className="garment-accessories-collections__group-header">
        <div className="garment-accessories-collections__number">
          {group.number}
        </div>

        <div className="garment-accessories-collections__category">
          {group.category}
        </div>
      </div>

      <div className="garment-accessories-collections__group-title">
        <h3>{group.title}</h3>
        <p>{group.description}</p>
      </div>

      <div className="garment-accessories-collections__items">
        {group.items.map((item, index) => (
          <div
            className="garment-accessories-collections__item"
            key={item}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <h4>{item}</h4>

            <ArrowUpRight size={18} strokeWidth={1.4} />
          </div>
        ))}
      </div>
    </article>
  );
}

export default function GarmentAccessoriesCollections() {
  return (
    <section
      className="garment-accessories-collections"
      id="accessories-collections"
    >
      <div className="garment-accessories-collections__intro">
        <div className="garment-accessories-collections__eyebrow">
          <span>03</span>
          <span>ACCESSORIES COLLECTION</span>
        </div>

        <div className="garment-accessories-collections__heading">
          <p>COMPLETE THE GARMENT.</p>

          <h2>
            EVERY
            <br />
            COMPONENT.
            <br />
            ONE SYSTEM.
          </h2>
        </div>

        <div className="garment-accessories-collections__intro-copy">
          <p>
            A complete range of garment accessories developed around the
            functional, structural, decorative and presentation requirements
            of modern apparel.
          </p>

          <div className="garment-accessories-collections__stats">
            <div>
              <strong>04</strong>
              <span>SYSTEMS</span>
            </div>

            <div>
              <strong>17+</strong>
              <span>COMPONENTS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="garment-accessories-collections__groups">
        {accessoryGroups.map((group) => (
          <AccessoryGroup group={group} key={group.number} />
        ))}
      </div>
    </section>
  );
}