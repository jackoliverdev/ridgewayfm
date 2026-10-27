import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TradeDetail } from "@/components/sections/services/TradeDetail";
import { trades } from "@/content/services";

export function generateStaticParams() {
  return trades.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trade = trades.items.find((item) => item.slug === slug);

  if (!trade) {
    return { title: "Services" };
  }

  return { title: trade.title };
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!trades.items.some((item) => item.slug === slug)) {
    notFound();
  }

  return <TradeDetail slug={slug} />;
}
