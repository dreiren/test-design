import Link from "next/link";
import { company } from "@/lib/content";

export function SiteFooter({ basePath }: { basePath: string }) {
  return (
    <footer className="border-t border-[var(--blue)]/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/urc-logo-image.png" alt="" className="h-12 w-auto" />
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--blue)]">
                {company.shortName}
              </p>
              <p className="text-sm text-[var(--ink-muted)]">{company.name}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
            DOLE-licensed manpower and business support services since {company.established}.
            We nurture partnerships — not just placements.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-deep)]">
            Explore
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--ink)]/80">
            <a href={`${basePath}#services`}>Services</a>
            <a href={`${basePath}/about`}>About</a>
            <a href={`${basePath}#careers`}>Careers</a>
            <a href={`${basePath}#contact`}>Contact</a>
            <Link href="/" className="text-[var(--blue)]">
              View other designs
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-deep)]">
            Talk to us
          </p>
          <div className="mt-3 space-y-2 text-sm text-[var(--ink)]/80">
            <p>{company.phone}</p>
            <a className="text-[var(--blue)]" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <p className="pt-2 text-[var(--ink-muted)]">{company.locations[0].address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--blue)]/8 px-4 py-4 text-center text-xs text-[var(--ink-muted)]">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
