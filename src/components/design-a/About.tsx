import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { company, coreValues, stats } from "@/lib/content";

const BASE = "/design-a";

export function DesignAAbout() {
  return (
    <div className="design-a min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <SiteNav basePath={BASE} variant="a" />

      <main>
        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/urc-header.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F9FD]/96 via-[#F7F9FD]/88 to-[#F7F9FD]/40" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              About us
            </p>
            <h1 className="animate-fade-up mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--blue)] delay-100 sm:text-5xl">
              United Royale Corporation (URC) at a glance
            </h1>
            <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] delay-200 sm:text-lg">
              DOLE-licensed outsourcing since {company.established}. We provide solutions — we
              don&apos;t just develop clients, we nurture partnerships.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3 delay-300">
              <a
                href={`${BASE}#contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--blue)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--blue-deep)]"
              >
                Request a Consultation
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href={`${BASE}#careers`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-105"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div className="rounded-3xl bg-white p-5 ring-1 ring-[var(--blue)]/8">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--ink)]">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                Our journey
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)]">
                A partner you can rely on all year round
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--ink-muted)]">
                {company.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-[var(--blue-soft)] px-4 py-3 text-sm">
                  <p className="font-bold text-[var(--blue)]">DOLE Permit</p>
                  <p className="text-[var(--ink-muted)]">{company.permit}</p>
                </div>
                <div className="rounded-2xl bg-[#FFF8E8] px-4 py-3 text-sm">
                  <p className="font-bold text-[var(--gold-deep)]">Paid-up capital</p>
                  <p className="text-[var(--ink-muted)]">{company.paidUpCapital}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_rgba(27,42,107,0.08)] ring-1 ring-[var(--blue)]/8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/urc-business-philosophy.jpg"
                  alt="United Royale operations"
                  className="h-56 w-full object-cover"
                />
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--blue)]">
                      Mission
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {company.mission}
                    </p>
                  </div>
                  <div className="border-t border-[var(--blue)]/10 pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-deep)]">
                      Vision
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {company.vision}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#EEF3FB_0%,#F7F9FD_100%)] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                Core values
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)]">
                WE CARE
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
                We adhere to these values to serve our partners better and preserve relationships
                for years to come.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, i) => (
                <Reveal key={value.title} delay={i * 70}>
                  <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-[var(--blue)]/8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={value.image} alt="" className="h-36 w-full object-cover" />
                    <div className="p-5">
                      <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--blue)]">
                        {value.letter}
                        <span className="text-base font-semibold text-[var(--ink)]">
                          {value.title.slice(1)}
                        </span>
                      </p>
                      <p className="mt-2 text-sm text-[var(--ink-muted)]">{value.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)]">
                Contact our team
              </h2>
              <p className="mt-3 text-[var(--ink-muted)]">
                Call {company.phone} or email{" "}
                <a className="font-semibold text-[var(--blue)]" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                .
              </p>
              <div className="mt-6 space-y-3">
                {company.locations.map((loc) => (
                  <div
                    key={loc.title}
                    className="rounded-2xl border border-[var(--blue)]/10 bg-white p-4"
                  >
                    <p className="font-bold text-[var(--blue)]">{loc.title}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{loc.address}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_20px_50px_rgba(27,42,107,0.08)] ring-1 ring-[var(--blue)]/8 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter basePath={BASE} />
    </div>
  );
}
