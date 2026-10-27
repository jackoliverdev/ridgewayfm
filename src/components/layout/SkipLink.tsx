import { skipLink } from "@/content/site";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-6 focus:z-50 focus:inline-flex focus:h-12 focus:items-center focus:bg-paper focus:px-5 focus:text-ridgeway"
    >
      {skipLink}
    </a>
  );
}
