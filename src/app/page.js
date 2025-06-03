"use client"

import FeaturedGrid from "@/components/Global/FeaturedGrid";

import PropertyGrid from "@/components/Global/PropertyGrid";
import FeatureCards from "@/components/HeaderForHome/FeatureCards";
import HeroSection from "@/components/Home/Hero";
import Image from "next/image";
import ReadyToRentSection from "@/components/Home/ReadyToRentSection";
import Location from "@/components/Home/location";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Location />
      <FeatureCards />
      <div className="container mx-auto px-5 sm:py-[40px] pb-0 pt-[40px]">
        <PropertyGrid
          title="Just Added"
          gridSet={[4, 3, 3, 2]}
          limit={4}
        />
      </div>
      <FeaturedGrid />
      <ReadyToRentSection />
    </>
  );
}
