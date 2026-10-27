"use client";

import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { email, header, nav } from "@/content/site";
import Link from "next/link";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
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
        id="mobile-nav"
        inert={!open}
        className={`mobile-menu-panel absolute top-full right-0 left-0 border-b border-rule bg-paper md:hidden ${open ? "is-open" : ""}`}
      >
        <nav
          aria-label="Menu"
          className="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-4"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center text-ridgeway"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={`mailto:${email}`}
            className="mt-3 self-start"
            onClick={close}
          >
            <Mail aria-hidden="true" size={20} />
            {header.emailLabel}
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
