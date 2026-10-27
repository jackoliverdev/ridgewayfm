import type { Metadata } from "next";
import { FixedPrices } from "@/components/sections/services/FixedPrices";
import { OutOfHours } from "@/components/sections/services/OutOfHours";
import { PlannedMaintenance } from "@/components/sections/services/PlannedMaintenance";
import { ResponseTimes } from "@/components/sections/services/ResponseTimes";
import { ServicesIntro } from "@/components/sections/services/ServicesIntro";
import { SmallWorks } from "@/components/sections/services/SmallWorks";
import { Trades } from "@/components/sections/services/Trades";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesIntro />
      <Trades />
      <PlannedMaintenance />
      <ResponseTimes />
      <OutOfHours />
      <SmallWorks />
      <FixedPrices />
    </>
  );
}
