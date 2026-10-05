import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutPresence from "@/components/AboutPresence";
import AboutCTA from "@/components/AboutCTA";

export const metadata = {
  title: "About",
  description:
    "Apparel Fastener brings together garments, fabrics and garment accessories through one connected approach to apparel production.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <AboutStory />
      <AboutWhoWeAre />
      <AboutPhilosophy />
      <AboutPresence />
      <AboutCTA />
    </main>
  );
}