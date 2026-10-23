"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import { mainNav } from "@/data/site";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-white shadow-lg"
        >
          <ul className="divide-y divide-line px-4 sm:px-6">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-4 font-medium transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-4 pt-2 pb-6 sm:px-6">
            <ButtonLink href="#contact" onClick={close} className="w-full">
              Talk to an Expert
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </nav>
      )}
    </div>
  );
}
