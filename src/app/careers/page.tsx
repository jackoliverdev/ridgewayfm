import type { Metadata } from "next";
import { CareersApply } from "@/components/sections/careers/CareersApply";
import { CareersIntro } from "@/components/sections/careers/CareersIntro";
import { CareersRoles } from "@/components/sections/careers/CareersRoles";
import { CareersVacancies } from "@/components/sections/careers/CareersVacancies";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <>
      <CareersIntro />
      <CareersVacancies />
      <CareersRoles />
      <CareersApply />
    </>
  );
}
