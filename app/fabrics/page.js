import FabricsHero from "@/components/FabricsHero";
import FabricsOverview from "@/components/FabricsOverview";
import FabricsCollections from "@/components/FabricsCollections";
import FabricsDevelopment from "@/components/FabricsDevelopment";
import FabricsApplications from "@/components/FabricsApplications";
import FabricsCTA from "@/components/FabricsCTA";

export const metadata = {
  title: "Fabrics",
  description:
    "Sustainable, woven and knitted fabrics developed from fibre selection through structure, sampling and finishing.",
};

export default function FabricsPage() {
  return (
    <main id="main-content">
      <FabricsHero />
      <FabricsOverview />
      <FabricsCollections />
      <FabricsDevelopment />
      <FabricsApplications />
      <FabricsCTA />
    </main>
  );
}