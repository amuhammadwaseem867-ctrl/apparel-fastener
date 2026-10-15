import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import DivisionCards from "@/components/DivisionCards";
import {
  accessoriesIntro,
  accessoryFunctions,
  accessoryGroups,
  divisions,
  images,
} from "@/lib/site";

const division = divisions.find((item) => item.id === "garment-accessories");
const accessoryCount = accessoryGroups.reduce((sum, group) => sum + group.items.length, 0);

export const metadata = {
  title: "Garment Accessories",
  description:
    "Your one-stop shop for garment accessories — zippers, interlining, buttons, motifs, velcro, elastic, cords, ribbons, toggles, rivets, hang tags, polybags, tapes, fringes and tassels.",
};

export default function GarmentAccessoriesPage() {
  return (
    <main id="main-content">
      <PageHero
        index="04"
        label="Garment accessories"
        title={["Your", "one-stop", <em key="a">shop.</em>]}
        lead={accessoriesIntro[1]}
        image={images.accessoriesHero}
        imageAlt="Metal zipper sliders and pullers in assorted finishes"
        meta={[
          `${division.share}% of our core classifications`,
          `${accessoryCount} accessory types`,
          "Production to distribution",
        ]}
      />

      {/* Overview */}
      <section className="section" aria-labelledby="overview-title">
        <div className="container">
          <SectionHead
            id="overview-title"
            index="01"
            label="Overview"
            title={
              <>
                More than <em>decoration.</em>
              </>
            }
            intro={accessoriesIntro[0]}
          />

          <ul className="function-tiles">
            {accessoryFunctions.map((item, i) => (
              <li key={item} data-reveal style={{ "--reveal-delay": i }}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Range */}
      <section className="section section--paper" aria-labelledby="range-title">
        <div className="container">
          <SectionHead
            id="range-title"
            index="02"
            label="Our range"
            title={
              <>
                {accessoryCount} accessories, <em>one source.</em>
              </>
            }
            intro="Some of the functions of a garment accessory include increasing a garment's versatility, durability, flexibility, and wearability."
          />

          <div className="accessory-groups">
            {accessoryGroups.map((group, i) => (
              <article key={group.title} className="accessory-group" data-reveal style={{ "--reveal-delay": i % 2 }}>
                <div className="accessory-group__media">
                  <Image
                    src={group.image}
                    alt={group.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 45vw, 25vw"
                  />
                </div>
                <div className="accessory-group__body">
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section section--navy" aria-label="Production to distribution">
        <div className="container statement-grid">
          <p className="statement" data-reveal>
            We walk with our clients through the journey of <em>production until distribution.</em>
          </p>

          <ul className="pill-list" data-reveal style={{ "--reveal-delay": 2 }}>
            {accessoryGroups.map((group) => (
              <li key={group.title}>
                {group.title}
                <span>{String(group.items.length).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One-stop */}
      <section className="section" aria-labelledby="one-stop-title">
        <div className="container">
          <SectionHead
            id="one-stop-title"
            label="One-stop solution"
            title={
              <>
                The complete <em>garment.</em>
              </>
            }
            intro="The hassle of dealing with multiple companies is eliminated — our group also manufactures the fabrics and garments your accessories belong to."
          />
          <DivisionCards exclude="garment-accessories" />
        </div>
      </section>
    </main>
  );
}
