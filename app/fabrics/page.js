import Image from "next/image";
import { ArrowDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import DivisionCards from "@/components/DivisionCards";
import { divisions, fabricCollections, fabricsIntro, images } from "@/lib/site";

const division = divisions.find((item) => item.id === "fabrics");

export const metadata = {
  title: "Fabrics",
  description:
    "Sustainable, woven, knitted and denim fabrics — from organic cotton, Tencel and recycled polyester to jersey, gabardine and selvedge denim — for applications from clothing to technical purposes.",
};

export default function FabricsPage() {
  return (
    <main id="main-content">
      <PageHero
        index="03"
        label="Fabrics"
        title={["Fabrics for", "every", <em key="a">application.</em>]}
        lead="A great number of fabric structures — used for a wide range of applications, from clothing to technical purposes."
        image={images.fabricsHero}
        imageAlt="Wall of textured fabric panels in a material library"
        meta={[
          `${division.share}% of our core classifications`,
          ...fabricCollections.map((collection) => `${collection.items.length} ${collection.title.toLowerCase()}`),
        ]}
      />

      {/* Overview */}
      <section className="section" aria-labelledby="overview-title">
        <div className="container">
          <SectionHead
            id="overview-title"
            index="01"
            label="Fabrics we manufacture"
            title={
              <>
                From clothing to <em>technical</em> purposes.
              </>
            }
            intro={fabricsIntro}
          />

          <ul className="fabric-index">
            {fabricCollections.map((collection, i) => (
              <li key={collection.id} data-reveal style={{ "--reveal-delay": i }}>
                <a href={`#${collection.id}`}>
                  <strong>{collection.items.length}</strong>
                  <span>
                    {collection.title}
                    <ArrowDown size={14} strokeWidth={1.8} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Collections */}
      {fabricCollections.map((collection, i) => (
        <section
          key={collection.id}
          id={collection.id}
          className={`section ${i % 2 === 0 ? "section--paper" : ""}`}
          aria-labelledby={`${collection.id}-title`}
        >
          <div className="container fabric-collection">
            <div className="fabric-collection__aside" data-reveal>
              <div className="fabric-collection__frame">
                <Image
                  src={collection.image}
                  alt={collection.imageAlt}
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                />
              </div>

              <span className="eyebrow">
                <span className="eyebrow__index">{String(i + 2).padStart(2, "0")}</span>
                <span className="eyebrow__line" />
                Collection
              </span>
              <h2 id={`${collection.id}-title`} className="title">
                {collection.title}
              </h2>
              <p className="body-copy">{collection.text}</p>
            </div>

            <div data-reveal style={{ "--reveal-delay": 2 }}>
              <div className="fabric-collection__count">
                <strong>{collection.items.length}</strong>
                <span className="kicker">{collection.title}</span>
              </div>

              <ul className="fabric-list">
                {collection.items.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* One-stop */}
      <section className="section" aria-labelledby="one-stop-title">
        <div className="container">
          <SectionHead
            id="one-stop-title"
            label="One-stop solution"
            title={
              <>
                From fabric to <em>finished garment.</em>
              </>
            }
            intro="A single enterprise with multiple manufacturing hubs — we also manufacture the garments and garment accessories that complete your product."
          />
          <DivisionCards exclude="fabrics" />
        </div>
      </section>
    </main>
  );
}
