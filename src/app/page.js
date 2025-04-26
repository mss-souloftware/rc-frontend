import ListingHeader from "@/components/Filters/Filters";
import LocationGrid from "@/components/Global/Locations/LocationGrid";
import PropertyGrid from "@/components/Global/PropertyGrid";
import FeatureCards from "@/components/HeaderForHome/FeatureCards";
import HeroSection from "@/components/Home/Hero";
import Image from "next/image";
import ReadyToRentSection from "@/components/Home/ReadyToRentSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <ListingHeader />
      <PropertyGrid />
      <LocationGrid />
      <ReadyToRentSection />
    </>
  );
}
