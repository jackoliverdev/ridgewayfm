import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { trades } from "@/content/services";

export function Trades() {
  return (
    <Section id="trades" className="scroll-mt-24">
      <h2>{trades.title}</h2>
      <p className="mt-4">{trades.intro}</p>
      <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {trades.items.map((item) => (
          <li key={item.slug} className="min-w-0">
            <Link
              href={`/services/${item.slug}`}
              className="group flex h-full flex-col"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={1152}
                height={864}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] w-full rounded-[2px] object-cover"
              />
              <h3 className="mt-4 min-h-[2.5em] group-hover:text-ridgeway">
                {item.title}
              </h3>
              <p className="mt-2 min-h-[4.8em]">{item.summary}</p>
              <span className="mt-auto inline-flex min-h-11 items-center text-ridgeway underline decoration-2 underline-offset-4 group-hover:text-ridgeway-deep">
                {trades.link}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
