import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { HealthAndSafety } from "@/components/sections/about/HealthAndSafety";
import { HowWeWork } from "@/components/sections/about/HowWeWork";
import { Qualifications } from "@/components/sections/about/Qualifications";
import { Team } from "@/components/sections/about/Team";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <HowWeWork />
      <Team />
      <HealthAndSafety />
      <Qualifications />
    </>
  );
}
