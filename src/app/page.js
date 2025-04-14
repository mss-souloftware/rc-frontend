import ListingHeader from "@/components/Filters/Filters";
import LocationGrid from "@/components/Global/Locations/LocationGrid";
import PropertyGrid from "@/components/Global/PropertyGrid";
import FeatureCards from "@/components/Header/FeatureCards";
import HeroSection from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <ListingHeader />
      <PropertyGrid />
      <LocationGrid />
    </>
  );
}
