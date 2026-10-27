import type { Metadata } from "next";
import { ContactFaqs } from "@/components/sections/contact/ContactFaqs";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactRoutes } from "@/components/sections/contact/ContactRoutes";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactRoutes />
      <ContactFaqs />
    </>
  );
}
