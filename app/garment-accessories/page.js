import GarmentAccessoriesHero from "@/components/GarmentAccessoriesHero";
import GarmentAccessoriesOverview from "@/components/GarmentAccessoriesOverview";
import GarmentAccessoriesCollections from "@/components/GarmentAccessoriesCollections";
import GarmentAccessoriesDevelopment from "@/components/GarmentAccessoriesDevelopment";
import GarmentAccessoriesApplications from "@/components/GarmentAccessoriesApplications";
import GarmentAccessoriesCTA from "@/components/GarmentAccessoriesCTA";

export const metadata = {
  title: "Garment Accessories",
  description:
    "Fastening, structure, decorative and packaging components that complete the garment — from development through distribution.",
};

export default function GarmentAccessoriesPage() {
  return (
    <main id="main-content">
      <GarmentAccessoriesHero />

      <GarmentAccessoriesOverview />

      <GarmentAccessoriesCollections />

      <GarmentAccessoriesDevelopment />

      <GarmentAccessoriesApplications />

      <GarmentAccessoriesCTA />
    </main>
  );
}