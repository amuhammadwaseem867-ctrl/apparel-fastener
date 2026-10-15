import { Globe, Mail, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import OfficeCards from "@/components/OfficeCards";
import ContactForm from "@/components/ContactForm";
import { company, images, offices } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Apparel Fastener Group — offices in Hong Kong, Guangzhou and Lahore. Email info@afgroup.com.hk or message +852 9850 9479 on WhatsApp / WeChat.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        index="07"
        label="Contact"
        title={["Let's", <em key="a">connect.</em>]}
        lead="Talk to our team about your next garments, fabrics or garment accessories requirement."
        image={images.contactHero}
        imageAlt="Showroom with garment rails and fabric rolls"
        meta={offices.map((office) => `${office.city} · ${office.phone}`)}
      />

      <section id="enquiry" className="section" aria-labelledby="enquiry-title">
        <div className="container contact-layout">
          <div data-reveal>
            <span className="eyebrow">
              <span className="eyebrow__index">01</span>
              <span className="eyebrow__line" />
              Make an enquiry
            </span>
            <h2 id="enquiry-title" className="title section-head__title">
              Start a <em>conversation.</em>
            </h2>

            <div className="contact-methods">
              <a href={`mailto:${company.email}`}>
                <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <small>Email</small>
                  {company.email}
                </span>
              </a>
              <a href={company.messaging.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={22} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <small>{company.messaging.label}</small>
                  {company.messaging.display}
                </span>
              </a>
              <div>
                <Globe size={22} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <small>Website</small>
                  {company.website}
                </span>
              </div>
            </div>

            <div className="contact-group">
              <span className="kicker">{company.groupName}</span>
              <ul>
                {company.companies.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal style={{ "--reveal-delay": 2 }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="offices-title">
        <div className="container">
          <SectionHead
            id="offices-title"
            index="02"
            label="Our offices"
            title={
              <>
                Pakistan. Hong Kong. <em>China.</em>
              </>
            }
            intro="Visit or call any of our three offices."
          />
          <OfficeCards />
        </div>
      </section>
    </main>
  );
}
