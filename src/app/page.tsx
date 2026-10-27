import type { Metadata } from "next";
import { ClosingStrip } from "@/components/sections/home/ClosingStrip";
import { FactStrip } from "@/components/sections/home/FactStrip";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HowAJobRuns } from "@/components/sections/home/HowAJobRuns";
import { LookAfter } from "@/components/sections/home/LookAfter";
import { Reporting } from "@/components/sections/home/Reporting";
import { WhoWeWorkFor } from "@/components/sections/home/WhoWeWorkFor";

export const metadata: Metadata = {};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FactStrip />
      <LookAfter />
      <WhoWeWorkFor />
      <HowAJobRuns />
      <Reporting />
      <ClosingStrip />
    </>
  );
}
