import type { Metadata } from "next";
import { TermsBody } from "@/components/sections/terms/TermsBody";

export const metadata: Metadata = {
  title: "Terms and conditions",
};

export default function TermsPage() {
  return <TermsBody />;
}
