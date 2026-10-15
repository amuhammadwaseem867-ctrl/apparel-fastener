import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ProductGrid from "@/components/ProductGrid";
import DivisionCards from "@/components/DivisionCards";
import { divisions, garmentCategories, garmentProcess, garmentsIntro, images } from "@/lib/site";

const division = divisions.find((item) => item.id === "garments");
const productCount = garmentCategories.reduce((sum, category) => sum + category.items.length, 0);

export const metadata = {
  title: "Garments",
  description:
    "Jackets and sweaters co-created with the best in the industry — bomber, woolen, trench, puffy, pull over and hooded jackets; fisherman's, cardigan, cashmere, chunky, crew neck and funnel neck sweaters.",
};

export default function GarmentsPage() {
  return (
    <main id="main-content">
      <PageHero
        index="02"
        label="Garments"
        title={["Jackets", <em key="a">&amp; sweaters.</em>]}
        lead="We co-create with the best in the industry to fabricate jackets and sweaters — from raw material to finished product."
        image={images.garmentsHero}
        imageAlt="Jackets and knitwear displayed on a gallery wall"
        meta={[
          `${division.share}% of our core classifications`,
          `${productCount} garment styles`,
          `${garmentProcess.length} sequential processes`,
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
                Timeless style. <em>Trending color.</em> Artisan details.
              </>
            }
            intro={
              <>
                {garmentsIntro.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </>
            }
          />

          <figure className="wide-figure wide-figure--flush" data-reveal>
            <div className="wide-figure__frame">
              <Image
                src={images.garmentsCatalogue}
                alt="Flat lay of jackets, sweaters and trousers"
                fill
                sizes="(max-width: 1440px) 100vw, 1360px"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Process */}
      <section className="section section--paper" aria-labelledby="process-title">
        <div className="container">
          <SectionHead
            id="process-title"
            index="02"
            label="Garment production"
            title={
              <>
                Seven <em>sequential</em> processes.
              </>
            }
            intro="The garment production process involves sequential processes such as laying out, dyeing, marking, cutting, stitching, checking, and packaging. Raw materials are converted into finished products through this process."
          />

          <ol className="process-line">
            {garmentProcess.map((step, i) => (
              <li key={step} data-reveal style={{ "--reveal-delay": i }}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>

          <div className="image-pair">
            <figure data-reveal>
              <Image
                src={images.cutting}
                alt="Automated fabric cutting table in a garment factory"
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
              />
            </figure>
            <figure data-reveal style={{ "--reveal-delay": 2 }}>
              <Image
                src={images.sewing}
                alt="Close-up of a garment being stitched on a sewing machine"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" aria-labelledby="products-title">
        <div className="container">
          <SectionHead
            id="products-title"
            index="03"
            label="Our manufacturing"
            title={
              <>
                What we <em>make.</em>
              </>
            }
            intro="Whether you are looking for a timeless style or a trending color, our design team curates each style according to your needs."
          />

          {garmentCategories.map((category) => (
            <div key={category.id} id={category.id} className="category-block">
              <div className="category-head" data-reveal>
                <h3>{category.title}</h3>
                <span className="kicker">{category.items.length} styles</span>
              </div>
              <ProductGrid items={category.items} />
            </div>
          ))}
        </div>
      </section>

      {/* One-stop */}
      <section className="section section--paper" aria-labelledby="one-stop-title">
        <div className="container">
          <SectionHead
            id="one-stop-title"
            label="One-stop solution"
            title={
              <>
                Everything your <em>garment</em> needs.
              </>
            }
            intro="A single enterprise with multiple manufacturing hubs — source the fabrics and garment accessories for your collection from the same group."
          />
          <DivisionCards exclude="garments" />
        </div>
      </section>
    </main>
  );
}
