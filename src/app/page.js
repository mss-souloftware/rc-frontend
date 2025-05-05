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
      <Location/>
      <FeatureCards />

      <PropertyGrid />
      <FeaturedGrid />
      <ReadyToRentSection />
    </>
  );
}
