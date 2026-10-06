import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./GarmentAccessoriesOverview.css";

const accessorySystems = [
  {
    number: "01",
    title: "FASTENING",
    description:
      "Components that bring garments together while supporting function, durability and ease of use.",
    image: "/home/12%20%E2%80%94%20Zipper%20Macro.webp",
  },
  {
    number: "02",
    title: "STRUCTURE",
    description:
      "Supporting materials that influence garment shape, flexibility, stability and overall construction.",
    image: "/home/05%20%E2%80%94%20Fabric%20Inspection.webp",
  },
  {
    number: "03",
    title: "DETAIL",
    description:
      "Decorative and functional elements that add character, identity and finishing to the garment.",
    image: "/home/09%20%E2%80%94%20Apparel%20Detail2.webp",
  },
];

export default function GarmentAccessoriesOverview() {
  return (
    <section className="garment-accessories-overview">
      <div className="garment-accessories-overview__intro">
        <div className="garment-accessories-overview__eyebrow">
          <span>02</span>
          <span>ACCESSORIES SYSTEM</span>
        </div>

        <div className="garment-accessories-overview__heading">
          <p>MORE THAN COMPONENTS.</p>

          <h2>
            THE DETAILS
            <br />
            BEHIND THE
            <br />
            GARMENT.
          </h2>
        </div>

        <div className="garment-accessories-overview__copy">
          <p>
            We are a one-stop source for garment accessories, providing the
            components that support the garment throughout its production
            journey.
          </p>

          <p>
            From functionality and durability to decorative finishing, every
            accessory has a role in shaping the final product.
          </p>
        </div>
      </div>

      <div className="garment-accessories-overview__statement">
        <div className="garment-accessories-overview__statement-image">
          <Image
            src="/garments/factory-detail.webp"
            alt="Garment production detail"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>

        <div className="garment-accessories-overview__statement-content">
          <span>FROM PRODUCTION TO DISTRIBUTION</span>

          <h3>
            WE WALK
            <br />
            WITH THE
            <br />
            GARMENT.
          </h3>

          <p>
            Our role extends beyond supplying individual components. We work
            alongside clients through development, production and finishing,
            helping ensure that each detail works together as part of the
            finished garment.
          </p>

          <a href="#accessories-collections">
            EXPLORE COLLECTION
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <div className="garment-accessories-overview__systems">
        {accessorySystems.map((system) => (
          <article
            className="garment-accessories-overview__system"
            key={system.number}
          >
            <div className="garment-accessories-overview__system-image">
              <Image
                src={system.image}
                alt={system.title}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />

              <span>{system.number}</span>
            </div>

            <div className="garment-accessories-overview__system-content">
              <h3>{system.title}</h3>
              <p>{system.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}