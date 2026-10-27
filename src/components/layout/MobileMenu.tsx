"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PrimaryNav } from "@/components/layout/PrimaryNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { header } from "@/content/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-ridgeway-deep"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X aria-hidden="true" size={24} />
        ) : (
          <Menu aria-hidden="true" size={24} />
        )}
        <span className="sr-only">
          {open ? header.closeMenu : header.openMenu}
        </span>
      </button>
      <div
        inert={!open}
        className={`mobile-menu-panel absolute top-full right-0 left-0 border-b border-rule bg-paper lg:hidden ${open ? "is-open" : ""}`}
      >
        <div
          id="mobile-nav"
          className="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-4 md:px-10"
        >
          <PrimaryNav
            label="Menu"
            onNavigate={close}
            className="flex flex-col"
          />
          <ButtonLink
            href={header.cta.href}
            onClick={close}
            className="mt-4 self-start"
          >
            {header.cta.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
