import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import {
  company,
  coreValues,
  insights,
  jobSteps,
  serviceCategories,
  stats,
  testimonials,
} from "@/lib/content";

const BASE = "/design-b";

export function DesignBHome() {
  return (
    <div className="design-b min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <SiteNav basePath={BASE} variant="b" />

      <main>
        {/* Hero — full-bleed atmosphere, brand-first */}
        <section className="relative isolate min-h-[min(92vh,880px)] overflow-hidden">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-[center_30%]"
            style={{ backgroundImage: "url('/images/urc-business-philosophy.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(247,250,255,0.96)_0%,rgba(247,250,255,0.86)_42%,rgba(255,248,232,0.35)_100%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 animate-float rounded-full bg-[var(--blue)]/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-64 w-64 animate-float-delayed rounded-full bg-[var(--gold)]/20 blur-3xl" />

          <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <p className="animate-fade-up font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-[var(--blue)] sm:text-6xl md:text-7xl">
              United Royale
              <span className="mt-1 block text-[var(--ink)]">Corporation</span>
            </p>
            <h1 className="animate-fade-up mt-5 max-w-xl text-lg font-medium leading-relaxed text-[var(--ink)] delay-100 sm:text-xl">
              The people partner businesses trust — and the clear path job seekers need.
            </h1>
            <p className="animate-fade-up mt-4 max-w-lg text-base leading-relaxed text-[var(--ink-muted)] delay-200">
              {company.valueProposition}
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3 delay-300">
              <a
                href="#contact"
                className="rounded-2xl bg-blue-surface bg-[var(--blue)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(27,42,107,0.25)] transition hover:-translate-y-0.5"
              >
                Request a Consultation
              </a>
              <a
                href="#careers"
                className="rounded-2xl bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        {/* Audience switch — big friendly UX */}
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="#services"
              className="relative overflow-hidden rounded-[2rem] bg-blue-surface bg-[var(--blue)] p-7 text-white transition hover:brightness-105"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--gold)]/30 blur-2xl" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                Businesses
              </p>
              <h2 className="relative mt-3 font-[family-name:var(--font-display)] text-3xl font-bold">
                Build your team with URC
              </h2>
              <p className="relative mt-3 max-w-sm text-sm text-white/80">
                Customized outsourcing with screening, deployment, and ongoing support.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold">
                Explore services <Icon name="arrow" className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#careers"
              className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/40 bg-white p-7 transition hover:border-[var(--gold)]"
            >
              <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-[var(--blue)]/10 blur-2xl" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--maroon)]">
                Job seekers
              </p>
              <h2 className="relative mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)]">
                Start your next role here
              </h2>
              <p className="relative mt-3 max-w-sm text-sm text-[var(--ink-muted)]">
                Simple steps, real openings, and a team that explains everything clearly.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--blue)]">
                See how to apply <Icon name="arrow" className="h-4 w-4" />
              </span>
            </a>
          </div>
        </section>

        {/* Stats strip */}
        <section id="why-urc" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
              Why choose United Royale?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--ink-muted)]">
              Decades of experience. Nationwide operations. Quality manpower. Client commitment —
              measured in real outcomes.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="rounded-[1.5rem] bg-white p-5 text-center ring-1 ring-[var(--blue)]/10">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Bento services */}
        <section id="services" className="relative py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(27,42,107,0.06),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(201,162,39,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                Services
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
                Grouped for scan-friendly browsing
              </h2>
            </Reveal>

            <div className="mt-10 space-y-8">
              {serviceCategories.map((cat) => (
                <Reveal key={cat.id}>
                  <div className="rounded-[2rem] border border-[var(--blue)]/8 bg-white/80 p-5 backdrop-blur sm:p-7">
                    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--blue)]">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-[var(--ink-muted)]">{cat.blurb}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {cat.services.map((service) => (
                        <div
                          key={service.name}
                          className="rounded-2xl bg-[var(--canvas)] p-4 transition hover:bg-[var(--blue-soft)]"
                        >
                          <div className="mb-3 inline-flex rounded-xl bg-white p-2 text-[var(--blue)] ring-1 ring-[var(--blue)]/10">
                            <Icon name={service.icon} className="h-5 w-5" />
                          </div>
                          <h4 className="font-bold text-[var(--ink)]">{service.name}</h4>
                          <p className="mt-1 text-sm text-[var(--ink-muted)]">{service.benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-blue-surface bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white">
                Request a Proposal
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-blue-surface bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>

        {/* About story */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                About us
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
                From 2000 to today: partnerships over placements
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">{company.aboutGlance}</p>
              <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">{company.philosophy}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-surface bg-[var(--blue)] p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                    Mission
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{company.mission}</p>
                </div>
                <div className="rounded-2xl bg-[#FFF3CC] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--maroon)]">
                    Vision
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">{company.vision}</p>
                </div>
              </div>
              <a
                href={`${BASE}/about`}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-blue-surface bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white"
              >
                Read full About Us
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-3">
                {coreValues.map((v, i) => (
                  <div
                    key={v.title}
                    className={`flex overflow-hidden rounded-2xl bg-white ring-1 ring-[var(--blue)]/10 ${
                      i % 2 === 1 ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.image} alt="" className="h-28 w-28 object-cover sm:h-32 sm:w-36" />
                    <div className="flex flex-1 flex-col justify-center p-4">
                      <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--blue)]">
                        {v.letter}
                        <span className="text-[var(--ink)]">{v.title.slice(1)}</span>
                      </p>
                      <p className="mt-1 text-sm text-[var(--ink-muted)]">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Success stories */}
        <section className="bg-blue-surface bg-[var(--blue)] py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                Client confidence
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                Success stories from the field
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <blockquote className="rounded-[1.5rem] bg-white/10 p-6 backdrop-blur">
                    <p className="text-sm leading-relaxed text-white/90">“{t.quote}”</p>
                    <footer className="mt-5">
                      <p className="font-bold text-[var(--gold)]">{t.name}</p>
                      <p className="text-xs text-white/60">{t.role}</p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
              Careers
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
              Job hunting without the stress
            </h2>
            <p className="mt-3 text-[var(--ink-muted)]">
              Built for Gen Z, Gen Alpha, and anyone who wants a straightforward application —
              especially if you&apos;re not a tech person.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {jobSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <div className="relative rounded-[1.75rem] border border-[var(--blue)]/10 bg-white p-6 pt-10">
                  <span className="absolute -top-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--blue)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-white"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="rounded-2xl bg-blue-surface bg-[var(--blue)] px-6 py-3.5 text-sm font-bold text-white"
            >
              Talk to Recruitment
            </a>
          </Reveal>
        </section>

        {/* Insights */}
        <section id="insights" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                Resources
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)]">
                Insights, careers & community
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {insights.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="group rounded-[1.5rem] bg-[var(--canvas)] p-6 transition hover:-translate-y-1 hover:bg-[var(--blue-soft)]">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--maroon)]">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-[var(--ink)] group-hover:text-[var(--blue)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ink-muted)]">{item.excerpt}</p>
                    <p className="mt-4 text-xs font-semibold text-[var(--blue)]">{item.date}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--blue-soft)] via-white to-[#FFF8E8] p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <Reveal>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--blue)] sm:text-4xl">
                  Ready when you are
                </h2>
                <p className="mt-3 text-[var(--ink-muted)]">
                  Consultation, proposal, or job application — one form, clear next steps.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <p>
                    <span className="font-bold text-[var(--blue)]">Phone:</span> {company.phone}
                  </p>
                  <p>
                    <span className="font-bold text-[var(--blue)]">Email:</span>{" "}
                    <a href={`mailto:${company.email}`} className="underline">
                      {company.email}
                    </a>
                  </p>
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
