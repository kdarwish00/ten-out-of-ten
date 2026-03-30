"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo<NavItem[]>(
    () => [
      { href: "/ten-out-of-ten", label: "Barbershop" },
      { href: "/ten-out-of-ten-tailor", label: "Tailor" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  function handleToggleMenu() {
    setIsOpen((value) => !value);
  }

  return (
    <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Ten Out Of Ten
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 sm:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-stone-50 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={handleToggleMenu}
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stone-200 bg-white sm:hidden">
          <div className="mx-auto w-full max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 transition-colors hover:bg-stone-50 hover:text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
