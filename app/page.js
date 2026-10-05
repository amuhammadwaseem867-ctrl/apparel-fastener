import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import ThreeDivisions from "@/components/ThreeDivisions";
import ApparelEcosystem from "@/components/ApparelEcosystem";
import FeaturedProducts from "@/components/FeaturedProducts";
import Clients from "@/components/Clients";
import Quality from "@/components/Quality";
import GlobalPresence from "@/components/GlobalPresence";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <CompanyIntro />
      <ThreeDivisions />
      <ApparelEcosystem />
      <FeaturedProducts />
      <Clients />
      <Quality />
      <GlobalPresence />
      <FinalCTA />
    </main>
  );
}