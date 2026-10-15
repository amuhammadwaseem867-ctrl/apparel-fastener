import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Stats from "@/components/Stats";
import DivisionCards from "@/components/DivisionCards";
import FeatureGrid from "@/components/FeatureGrid";
import ProcessCards from "@/components/ProcessCards";
import SplitMedia from "@/components/SplitMedia";
import ClientsMarquee from "@/components/ClientsMarquee";
import Certifications from "@/components/Certifications";
import OfficeCards from "@/components/OfficeCards";
import {
  clients,
  company,
  divisions,
  images,
  strengths,
  strengthsIntro,
  sustainabilityFocus,
  sustainabilityIntro,
  whoWeAre,
} from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content">
      <PageHero
        size="full"
        index="AF"
        label={company.name}
        title={["Pioneering", "excellence", <em key="a">in apparel.</em>]}
        lead={company.tagline}
        image={images.homeHero}
        imageAlt="Garment production floor with rows of sewing operators"
        actions={
          <>
            <a href="#divisions" className="btn btn--light">
              Our divisions
              <ArrowDown size={16} strokeWidth={1.8} />
            </a>
            <Link href="/contact#enquiry" className="btn btn--ghost">
              Make an enquiry
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </>
        }
        meta={divisions.map((division) => (
          <Link key={division.id} href={division.href}>
            {division.title}
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </Link>
        ))}
      />

      {/* Who we are */}
      <section className="section" aria-labelledby="who-we-are">
        <div className="container">
          <div className="intro-grid">
            <div data-reveal>
              <span className="eyebrow">
                <span className="eyebrow__index">01</span>
                <span className="eyebrow__line" />
                Who we are
              </span>
              <h2 id="who-we-are" className="title section-head__title">
                Excellence in <em>everything</em> we do.
              </h2>
            </div>

            <div data-reveal style={{ "--reveal-delay": 2 }}>
              <p className="lead">{whoWeAre}</p>
              <Link href="/about" className="text-link">
                About the group
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <Stats
            items={[
              { value: `${company.experienceYears}+`, label: "Years in textiles & apparel" },
              { value: company.companies.length, label: "Companies across Asia" },
              { value: divisions.length, label: "Divisions under one group" },
              { value: clients.length, label: "International brands served" },
            ]}
          />

          <figure className="wide-figure" data-reveal>
            <div className="wide-figure__frame">
              <Image
                src={images.productionFloor}
                alt="Operators working at sewing stations on a garment production floor"
                fill
                sizes="(max-width: 1440px) 100vw, 1360px"
              />
            </div>
            <figcaption className="kicker">
              <span>Fabrics · Garment accessories · Garments</span>
              <span>{company.regions.join(" · ")}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Core classifications */}
      <section id="divisions" className="section section--paper" aria-labelledby="divisions-title">
        <div className="container">
          <SectionHead
            id="divisions-title"
            index="02"
            label="Our core classifications"
            title={
              <>
                Three divisions. <em>One</em> integrated group.
              </>
            }
            intro="A single enterprise with multiple manufacturing hubs. Garments make up 40% of our core classifications, with fabrics and garment accessories at 30% each."
          />
          <DivisionCards />
        </div>
      </section>

      {/* Strengths */}
      <section className="section section--navy" aria-labelledby="strengths-title">
        <div className="container">
          <SectionHead
            id="strengths-title"
            index="03"
            label="Our strengths"
            title={
              <>
                Precision of technology <em>&amp; technique.</em>
              </>
            }
            intro={strengthsIntro}
          />
          <FeatureGrid items={strengths} />
        </div>
      </section>

      {/* Production cycle */}
      <section className="section" aria-labelledby="cycle-title">
        <div className="container">
          <SectionHead
            id="cycle-title"
            index="04"
            label="The production cycle"
            title={
              <>
                From design to <em>quality control.</em>
              </>
            }
            intro="Every stage — from procurement to grading and beyond — is highly supervised, in a controlled environment with quality assurance."
          />
          <ProcessCards />
          <div className="section-foot">
            <span className="kicker">Quality management system — ENSURE200</span>
            <Link href="/quality" className="text-link">
              Our approach to quality
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section section--paper" aria-labelledby="clients-title">
        <div className="container">
          <SectionHead
            id="clients-title"
            index="05"
            label="Our clients"
            title={
              <>
                Trusted by <em>global</em> brands.
              </>
            }
            intro={`Through the quality of our products and resources, we create unmatched value for our global clientele — with relationships across ${company.markets.join(" and ")} built to last a lifetime.`}
          />
        </div>
        <ClientsMarquee />
      </section>

      {/* Sustainability */}
      <section className="section" aria-labelledby="sustainability-title">
        <div className="container">
          <SplitMedia
            image={images.sustainabilityHero}
            imageAlt="Hands feeling the texture of a woven wool fabric"
            caption="Sustainable fabrics, garment accessories and garments"
          >
            <span className="eyebrow">
              <span className="eyebrow__index">06</span>
              <span className="eyebrow__line" />
              Sustainability
            </span>
            <h2 id="sustainability-title" className="title">
              Our global <em>responsibility.</em>
            </h2>
            <p className="body-copy">{sustainabilityIntro}</p>
            <ul className="pill-list pill-list--light">
              {sustainabilityFocus.map((focus, i) => (
                <li key={focus.title}>
                  {focus.title}
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
            <Link href="/sustainability" className="text-link">
              Our sustainability commitments
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </SplitMedia>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section--paper" aria-labelledby="certifications-title">
        <div className="container">
          <SectionHead
            id="certifications-title"
            index="07"
            label="Certifications & standards"
            title={
              <>
                Recognized <em>standards.</em>
              </>
            }
            intro="We work to internationally recognized certification, testing and social-compliance standards."
          />
          <Certifications />
        </div>
      </section>

      {/* Global presence */}
      <section className="section" aria-labelledby="presence-title">
        <div className="container">
          <SectionHead
            id="presence-title"
            index="08"
            label="Global presence"
            title={
              <>
                Selling on a <em>global level.</em>
              </>
            }
            intro="A masterly unification of three mainstream companies in Asia — Hong Kong, China, and Pakistan — selling on a global level."
          />
          <OfficeCards />
        </div>
      </section>
    </main>
  );
}
