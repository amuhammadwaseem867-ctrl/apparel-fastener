import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import FeatureGrid from "@/components/FeatureGrid";
import SplitMedia from "@/components/SplitMedia";
import ChipList from "@/components/ChipList";
import Certifications from "@/components/Certifications";
import {
  fabricCollections,
  images,
  strengths,
  sustainabilityAims,
  sustainabilityFocus,
  sustainabilityIntro,
} from "@/lib/site";

const sustainableFabrics = fabricCollections.find((item) => item.id === "sustainable");
const powerEfficiency = strengths.find((item) => item.title === "Power Efficiency");
const bringValue = strengths.find((item) => item.title === "We Bring Value");
const focusIcons = ["energy", "waste", "process"];

export const metadata = {
  title: "Sustainability",
  description:
    "Our global responsibility — climate and energy, waste control management and reliable management of core processes, with sustainable fabrics, garment accessories and garments.",
};

export default function SustainabilityPage() {
  return (
    <main id="main-content">
      <PageHero
        index="06"
        label="Sustainability"
        title={["Our global", <em key="a">responsibility.</em>]}
        lead="In order to achieve success in our work towards a sustainable environment, we strive for excellence in everything we do."
        image={images.sustainabilityHero}
        imageAlt="Hands feeling the texture of a woven wool fabric"
        meta={sustainabilityFocus.map((focus) => focus.title)}
      />

      {/* Focus areas */}
      <section className="section" aria-labelledby="focus-title">
        <div className="container">
          <SectionHead
            id="focus-title"
            index="01"
            label="Where we focus"
            title={
              <>
                Three <em>focus</em> areas.
              </>
            }
            intro={sustainabilityIntro}
          />
          <FeatureGrid
            items={sustainabilityFocus.map((focus, i) => ({ ...focus, icon: focusIcons[i] }))}
          />
        </div>
      </section>

      {/* Aims */}
      <section className="section section--navy" aria-labelledby="aims-title">
        <div className="container">
          <SectionHead
            id="aims-title"
            index="02"
            label="Our commitments"
            title={
              <>
                As part of our global responsibility, <em>we aim to:</em>
              </>
            }
          />
          <ol className="aims-list">
            {sustainabilityAims.map((aim, i) => (
              <li key={aim} data-reveal style={{ "--reveal-delay": i % 2 }}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {aim}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sustainable fabrics */}
      <section className="section section--paper" aria-labelledby="fabrics-title">
        <div className="container">
          <SplitMedia
            image={images.materialResearch}
            imageAlt="Team reviewing fabric swatches and samples in a material library"
            caption="Eco-friendly resources"
          >
            <span className="eyebrow">
              <span className="eyebrow__index">03</span>
              <span className="eyebrow__line" />
              Sustainable fabrics
            </span>
            <h2 id="fabrics-title" className="title">
              Natural fibers. <em>Recycled materials.</em>
            </h2>
            <p className="body-copy">{sustainableFabrics.text}</p>
            <ChipList items={sustainableFabrics.items} label="Sustainable fabrics we manufacture" />
            <Link href="/fabrics#sustainable" className="text-link">
              View all fabrics
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </SplitMedia>
        </div>
      </section>

      {/* Efficiency & value */}
      <section className="section" aria-labelledby="efficiency-title">
        <div className="container">
          <SectionHead
            id="efficiency-title"
            index="04"
            label="In practice"
            title={
              <>
                Responsible <em>operations.</em>
              </>
            }
          />
          <div className="two-col-text">
            {[powerEfficiency, bringValue].map((item, i) => (
              <div key={item.title} data-reveal style={{ "--reveal-delay": i * 2 }}>
                <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="body-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section section--paper" aria-labelledby="standards-title">
        <div className="container">
          <SectionHead
            id="standards-title"
            index="05"
            label="Textile standards"
            title={
              <>
                Organic, recycled, <em>tested.</em>
              </>
            }
            intro="Recognized textile standards for organic fibers, recycled content and harmful-substance testing."
          />
          <Certifications only={["GOTS", "GRS", "OEKO-TEX®"]} />
        </div>
      </section>
    </main>
  );
}
