import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import SplitMedia from "@/components/SplitMedia";
import Certifications from "@/components/Certifications";
import { certifications, departments, images, productionCycle, strengths } from "@/lib/site";

const qualityAssurance = departments.find((item) => item.title === "Quality Assurance");
const accountable = strengths.find((item) => item.title === "Highly Accountable");

export const metadata = {
  title: "Quality",
  description:
    "Quality at every stage — design, production, manufacturing and quality control, managed through our ENSURE200 quality management system.",
};

export default function QualityPage() {
  return (
    <main id="main-content">
      <PageHero
        index="05"
        label="Quality"
        title={["Quality at", "every", <em key="a">stage.</em>]}
        lead="Reliability in manufacturing encompasses both process and product."
        image={images.qualityHero}
        imageAlt="Quality inspectors examining a finished garment"
        meta={[
          "ENSURE200 quality management",
          `${productionCycle.length}-stage production cycle`,
          `${certifications.length} recognized standards`,
        ]}
      />

      {/* Quality assurance */}
      <section className="section" aria-labelledby="qa-title">
        <div className="container">
          <SplitMedia
            image={images.fabricInspection}
            imageAlt="Technician inspecting fabric on a cutting table"
            caption="Quality assurance"
          >
            <span className="eyebrow">
              <span className="eyebrow__index">01</span>
              <span className="eyebrow__line" />
              Quality assurance
            </span>
            <h2 id="qa-title" className="title">
              A combination of <em>art and technology.</em>
            </h2>
            <p className="body-copy">{qualityAssurance.text}</p>
            <div className="callout">
              <strong>ENSURE200</strong>
              <p>
                Our extensive quality management system — focused on defining and optimizing procedures in
                order to reduce waste.
              </p>
            </div>
          </SplitMedia>
        </div>
      </section>

      {/* Production cycle */}
      <section className="section section--paper" aria-labelledby="cycle-title">
        <div className="container">
          <SectionHead
            id="cycle-title"
            index="02"
            label="The production cycle"
            title={
              <>
                Four stages, <em>fully supervised.</em>
              </>
            }
            intro="From procurement to grading and beyond, every stage is highly supervised — so the product meets the specifications demanded by our clientele."
          />

          <div className="cycle-rows">
            {productionCycle.map((step, i) => (
              <SplitMedia key={step.title} image={step.image} imageAlt={step.imageAlt} reverse={i % 2 === 1}>
                <span className="cycle-row__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="cycle-row__title">{step.title}</h3>
                <p className="lead">{step.text}</p>
              </SplitMedia>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="section section--navy" aria-labelledby="accountable-title">
        <div className="container statement-grid">
          <div data-reveal>
            <span className="eyebrow">
              <span className="eyebrow__index">03</span>
              <span className="eyebrow__line" />
              {accountable.title}
            </span>
            <p id="accountable-title" className="statement">
              Adherence to process and procedure drives improvements in <em>safety, quality, and efficiency.</em>
            </p>
          </div>

          <ul className="pill-list" data-reveal style={{ "--reveal-delay": 2 }}>
            {["Safety", "Quality", "Efficiency"].map((item, i) => (
              <li key={item}>
                {item}
                <span>{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" aria-labelledby="certifications-title">
        <div className="container">
          <SectionHead
            id="certifications-title"
            index="04"
            label="Certifications & standards"
            title={
              <>
                Recognized <em>standards.</em>
              </>
            }
            intro="We work to internationally recognized certification, testing and social-compliance standards."
          />
          <Certifications />
          <div className="section-foot">
            <span className="kicker">Quality · Sustainability · Expert knowledge</span>
            <Link href="/sustainability" className="text-link">
              Our sustainability commitments
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
