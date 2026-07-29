"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { company, navLinks, resolveNavHref } from "@/lib/content";

type Props = {
  basePath: string;
  variant: "a" | "b";
};

export function SiteNav({ basePath, variant }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    variant === "a"
      ? "text-sm font-medium text-[var(--ink)]/75 transition hover:text-[var(--blue)]"
      : "text-sm font-semibold text-[var(--ink)]/70 transition hover:text-[var(--blue)]";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--blue)]/10 bg-white/90 shadow-[0_8px_30px_rgba(27,42,107,0.06)] backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div
        className={`h-1 w-full ${
          variant === "a"
            ? "bg-gradient-to-r from-[var(--blue)] via-[var(--gold)] to-[var(--maroon)]"
            : "bg-[var(--blue)]"
        }`}
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={basePath} className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/urc-logo-image.png"
            alt="United Royale Corporation logo"
            className="h-11 w-auto"
          />
          <div className="hidden min-[420px]:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/urc-logo-text.png"
              alt={company.name}
              className="h-5 w-auto max-w-[180px] object-contain sm:max-w-[220px]"
            />
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">
              Est. {company.established}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveNavHref(basePath, link.href)}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`${basePath}#careers`}
            className="rounded-full border border-[var(--blue)]/20 bg-white px-4 py-2 text-sm font-semibold text-[var(--blue)] transition hover:border-[var(--blue)]/40 hover:bg-[var(--blue-soft)]"
          >
            Apply Now
          </a>
          <a
            href={`${basePath}#contact`}
            className="rounded-full bg-[var(--blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--blue-deep)]"
          >
            Request a Consultation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--blue)]/15 text-[var(--blue)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--blue)]/10 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveNavHref(basePath, link.href)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-[var(--ink)] hover:bg-[var(--blue-soft)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${basePath}#careers`}
              className="rounded-full border border-[var(--blue)]/20 px-4 py-3 text-center font-semibold text-[var(--blue)]"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </a>
            <a
              href={`${basePath}#contact`}
              className="rounded-full bg-[var(--blue)] px-4 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
