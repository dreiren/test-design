import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { company, coreValues, stats } from "@/lib/content";

const BASE = "/design-b";

export function DesignBAbout() {
  return (
    <div className="design-b min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <SiteNav basePath={BASE} variant="b" />

      <main>
        <section className="relative isolate min-h-[min(70vh,640px)] overflow-hidden">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-[center_30%]"
            style={{ backgroundImage: "url('/images/urc-business-philosophy.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(247,250,255,0.96)_0%,rgba(247,250,255,0.86)_45%,rgba(255,248,232,0.4)_100%)]" />
          <div className="relative mx-auto flex min-h-[min(70vh,640px)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
            <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
              About us
            </p>
            <h1 className="animate-fade-up mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--blue)] delay-100 sm:text-5xl md:text-6xl">
              United Royale Corporation (URC) at a glance
            </h1>
            <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] delay-200 sm:text-lg">
              Established {company.established}. Licensed. Nationwide. Built to nurture
              partnerships — not just placements.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3 delay-300">
              <a
                href={`${BASE}#contact`}
                className="rounded-2xl bg-[var(--blue)] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                Request a Consultation
              </a>
              <a
                href={`${BASE}#careers`}
                className="rounded-2xl bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="rounded-[1.5rem] bg-white p-5 text-center ring-1 ring-[var(--blue)]/10">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
              Our story
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
              From 2000 to today: integrity and reliability
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {company.aboutParagraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 40)} delay={(i % 2) * 80}>
                <div className="h-full rounded-[1.5rem] border border-[var(--blue)]/8 bg-white/90 p-6">
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    {paragraph}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-2xl bg-[var(--blue)] px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                DOLE Permit
              </p>
              <p className="mt-1 font-semibold">{company.permit}</p>
            </div>
            <div className="rounded-2xl bg-[var(--gold)] px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                Paid-up capital
              </p>
              <p className="mt-1 font-semibold">{company.paidUpCapital}</p>
            </div>
          </Reveal>
        </section>

        <section className="bg-[var(--blue)] py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                Mission
              </p>
              <p className="mt-3 text-lg leading-relaxed text-white/90">{company.mission}</p>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                Vision
              </p>
              <p className="mt-3 text-lg leading-relaxed text-white/90">{company.vision}</p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
              WE CARE
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)]">
              Values that guide every deployment
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div
                  className={`flex overflow-hidden rounded-2xl bg-white ring-1 ring-[var(--blue)]/10 ${
                    i % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.image} alt="" className="h-28 w-28 object-cover sm:h-32 sm:w-40" />
                  <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
                    <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--blue)]">
                      {v.letter}
                      <span className="text-[var(--ink)]">{v.title.slice(1)}</span>
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--blue-soft)] via-white to-[#FFF8E8] p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <Reveal>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)]">
                  Talk with URC
                </h2>
                <p className="mt-3 text-[var(--ink-muted)]">
                  Consultation, proposal, or application — we&apos;ll guide the next step.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`${BASE}#contact`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white"
                  >
                    Contact Our Team <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a
                    href={`${BASE}#careers`}
                    className="rounded-2xl bg-[var(--gold)] px-5 py-3 text-sm font-bold text-white"
                  >
                    Apply Now
                  </a>
                </div>
                <div className="mt-6 space-y-3">
                  {company.locations.map((loc) => (
                    <div key={loc.title} className="rounded-xl bg-white/80 p-3">
                      <p className="font-bold text-[var(--blue)]">{loc.title}</p>
                      <p className="text-xs text-[var(--ink-muted)]">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={90}>
                <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_20px_60px_rgba(27,42,107,0.1)]">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter basePath={BASE} />
    </div>
  );
}
