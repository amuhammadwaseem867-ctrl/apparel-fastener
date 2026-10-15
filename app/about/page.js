import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Stats from "@/components/Stats";
import FeatureGrid from "@/components/FeatureGrid";
import OfficeCards from "@/components/OfficeCards";
import {
  aboutUs,
  company,
  departments,
  departmentsIntro,
  images,
  mission,
  strengths,
  strengthsIntro,
  values,
  valuesIntro,
  vision,
  whoWeAre,
} from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "A privately owned family business uniting three companies in Hong Kong, China and Pakistan — with more than 15 years of experience in textiles and apparel.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        index="01"
        label="About the group"
        title={["One group.", <em key="a">Three companies.</em>]}
        lead="A privately owned family business based in China, uniting companies in Hong Kong, China, and Pakistan."
        image={images.aboutHero}
        imageAlt="Wide view of a modern garment factory interior"
        meta={[
          `${company.experienceYears}+ years of experience`,
          company.regions.join(" · "),
          "Selling on a global level",
        ]}
      />

      {/* Who we are / About us */}
      <section className="section" aria-labelledby="story-title">
        <div className="container">
          <div className="about-story">
            <div className="about-story__lead" data-reveal>
              <span className="eyebrow">
                <span className="eyebrow__index">01</span>
                <span className="eyebrow__line" />
                Who we are
              </span>
              <h2 id="story-title" className="title">
                Offering <em>brilliance</em> in quality.
              </h2>
              <p className="lead">{whoWeAre}</p>
            </div>

            <div className="about-story__body" data-reveal style={{ "--reveal-delay": 2 }}>
              <span className="kicker">About us</span>
              {aboutUs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Stats
            items={[
              { value: `${company.experienceYears}+`, label: "Years in textiles & apparel" },
              { value: company.companies.length, label: "Companies in Asia" },
              { value: company.regions.length, label: "Countries of operation" },
              { value: values.length, label: "Core values guiding our work" },
            ]}
          />
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section section--navy" aria-label="Vision and mission">
        <div className="container">
          <div className="vision-mission">
            <article data-reveal>
              <span className="eyebrow">
                <span className="eyebrow__index">02</span>
                <span className="eyebrow__line" />
                Where we are going
              </span>
              <h2>Vision</h2>
              <p className="lead">{vision}</p>
            </article>

            <article data-reveal style={{ "--reveal-delay": 2 }}>
              <span className="eyebrow">
                <span className="eyebrow__index">03</span>
                <span className="eyebrow__line" />
                What drives us
              </span>
              <h2>Mission</h2>
              <p className="lead">{mission}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHead
            id="values-title"
            index="04"
            label="Core values"
            title={
              <>
                The values behind <em>every action.</em>
              </>
            }
            intro={valuesIntro}
          />
          <FeatureGrid items={values} />
        </div>
      </section>

      {/* Team */}
      <section className="section section--paper" aria-labelledby="team-title">
        <div className="container">
          <SectionHead
            id="team-title"
            index="05"
            label="Meet the team in action"
            title={
              <>
                The team behind <em>the scene.</em>
              </>
            }
            intro={departmentsIntro}
          />

          <ul className="team-cards">
            {departments.map((department, i) => (
              <li key={department.title} className="team-card" data-reveal style={{ "--reveal-delay": i }}>
                <div className="team-card__media">
                  <Image
                    src={department.image}
                    alt={department.imageAlt}
                    fill
                    sizes="(max-width: 960px) 100vw, 33vw"
                  />
                </div>
                <div className="team-card__body">
                  <span className="kicker">Department {String(i + 1).padStart(2, "0")}</span>
                  <h3>{department.title}</h3>
                  <p className="body-copy">{department.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strengths */}
      <section className="section section--navy" aria-labelledby="strengths-title">
        <div className="container">
          <SectionHead
            id="strengths-title"
            index="06"
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

      {/* Group companies */}
      <section className="section" aria-labelledby="group-title">
        <div className="container">
          <SectionHead
            id="group-title"
            index="07"
            label={company.groupName}
            title={
              <>
                One group, <em>three companies.</em>
              </>
            }
            intro="Our offices in Hong Kong, China and Pakistan bring the group's fabrics, garment accessories and garments to clients around the world."
          />

          <ul className="group-list">
            {company.companies.map((name, i) => (
              <li key={name} data-reveal style={{ "--reveal-delay": i }}>
                <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
              </li>
            ))}
          </ul>

          <OfficeCards />

          <div className="section-foot">
            <span className="kicker">{company.regions.join(" · ")}</span>
            <Link href="/contact" className="text-link">
              Contact our offices
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
