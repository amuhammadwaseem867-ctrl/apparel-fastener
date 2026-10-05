import GarmentsHero from "@/components/GarmentsHero";
import GarmentsOverview from "@/components/GarmentsOverview";
import GarmentsProducts from "@/components/GarmentsProducts";
import GarmentsDevelopment from "@/components/GarmentsDevelopment";
import GarmentsManufacturing from "@/components/GarmentsManufacturing";
import GarmentsQuality from "@/components/GarmentsQuality";
import GarmentsFinished from "@/components/GarmentsFinished";
import GarmentsCTA from "@/components/GarmentsCTA";

export const metadata = {
  title: "Garments",
  description:
    "Structured jackets and refined sweaters developed from material and construction through production and finishing.",
};

export default function GarmentsPage() {
  return (
    <main id="main-content">
      <GarmentsHero />
      <GarmentsOverview />
      <GarmentsProducts />
      <GarmentsDevelopment />
      <GarmentsManufacturing />
      <GarmentsQuality />
      <GarmentsFinished />
      <GarmentsCTA />
    </main>
  );
}