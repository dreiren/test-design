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

const BASE = "/design-a";

export function DesignAHome() {
  return (
    <div className="design-a min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <SiteNav basePath={BASE} variant="a" />

      <main>
        {/* Hero — one composition, brand-first, full-bleed visual */}
        <section className="relative isolate min-h-[min(92vh,880px)] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/urc-header.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F9FD]/96 via-[#F7F9FD]/88 to-[#F7F9FD]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,162,39,0.18),transparent_45%)]" />

          <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <p className="animate-fade-up font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--blue)] sm:text-5xl md:text-6xl">
              United Royale
              <span className="block text-[var(--ink)]">Corporation</span>
            </p>
            <h1 className="animate-fade-up mt-5 max-w-xl text-xl font-semibold leading-snug text-[var(--ink)] delay-100 sm:text-2xl">
              Trusted manpower partners for workplaces that need reliable people — fast.
            </h1>
            <p className="animate-fade-up mt-4 max-w-lg text-base leading-relaxed text-[var(--ink-muted)] delay-200 sm:text-lg">
              {company.valueProposition}
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3 delay-300">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-surface bg-[var(--blue)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(27,42,107,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--blue-deep)]"
              >
                Request a Consultation
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#careers"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-white/80 px-6 py-3.5 text-sm font-bold text-[var(--blue)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--gold)]"
              >
                Apply for a Job
              </a>
            </div>
          </div>
        </section>

        {/* Soft path chooser for non-technical visitors */}
        <section className="relative -mt-10 px-4 sm:px-6">
          <Reveal className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
            <a
              href="#contact"
              className="group rounded-[1.75rem] border border-[var(--blue)]/10 bg-white p-6 shadow-[0_18px_50px_rgba(27,42,107,0.08)] transition hover:-translate-y-1"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                For businesses
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--blue)]">
                I need quality manpower
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                Tell us your role needs. We screen, deploy, and support people who fit your
                operations.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--blue)]">
                Request a Proposal <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#careers"
              className="group rounded-[1.75rem] border border-[var(--gold)]/25 bg-gradient-to-br from-white to-[#FFF8E8] p-6 shadow-[0_18px_50px_rgba(201,162,39,0.12)] transition hover:-translate-y-1"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--maroon)]">
                For job seekers
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--blue)]">
                I want a steady job
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                No complicated steps. Browse openings, apply in plain language, and we guide you.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--blue)]">
                Start Application <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </section>

        {/* Why URC */}
        <section id="why-urc" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              Why clients choose URC
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--blue)] sm:text-4xl">
              Experience, nationwide reach, and people who show up ready.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Since {company.established}, we have helped partners maximize investments with
              effective HR support — licensed, accountable, and built for long partnerships.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="rounded-3xl bg-white p-6 ring-1 ring-[var(--blue)]/8">
                  <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[var(--blue)]">
                    {item.value}
                  </p>
                  <p className="mt-2 font-semibold text-[var(--ink)]">{item.label}</p>
                  <p className="mt-1 text-sm text-[var(--ink-muted)]">{item.hint}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF3FB_0%,#F7F9FD_100%)] py-20"
        >
          <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[var(--gold)]/15 blur-3xl" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                Strategic service solutions
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)] sm:text-4xl">
                Clear categories. Clear benefits.
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
                From facilities to admin to specialized support — grouped so you can find what you
                need without the noise.
              </p>
            </Reveal>

            <div className="mt-12 space-y-10">
              {serviceCategories.map((cat, idx) => (
                <Reveal key={cat.id} delay={idx * 60}>
                  <div>
                    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--blue)]">
                          {cat.title}
                        </h3>
                        <p className="text-sm text-[var(--ink-muted)]">{cat.blurb}</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {cat.services.map((service) => (
                        <div
                          key={service.name}
                          className="rounded-3xl border border-white bg-white/90 p-5 shadow-[0_10px_30px_rgba(27,42,107,0.05)]"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--blue-soft)] text-[var(--blue)]">
                            <Icon name={service.icon} className="h-5 w-5" />
                          </div>
                          <h4 className="mt-4 font-bold text-[var(--ink)]">{service.name}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                            {service.benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-blue-surface bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white"
              >
                Request a Proposal
              </a>
              <a
                href="#contact"
                className="rounded-full bg-blue-surface bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white"
              >
                Contact Our Team
              </a>
            </Reveal>
          </div>
        </section>

        {/* About + CARE */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                Our story
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)] sm:text-4xl">
                Built on professionalism. Driven by WE CARE.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
                {company.aboutGlance}
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-[var(--blue-soft)] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--blue)]">
                    Mission
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink)]">{company.mission}</p>
                </div>
                <div className="rounded-2xl bg-[#FFF8E8] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-deep)]">
                    Vision
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink)]">{company.vision}</p>
                </div>
              </div>
              <a
                href={`${BASE}/about`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-surface bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--blue-deep)]"
              >
                Read full About Us
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {coreValues.map((value) => (
                  <div key={value.title} className="overflow-hidden rounded-3xl bg-white ring-1 ring-[var(--blue)]/8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={value.image}
                      alt=""
                      className="h-28 w-full object-cover"
                    />
                    <div className="p-4">
                      <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--blue)]">
                        {value.letter}
                        <span className="text-base font-semibold text-[var(--ink)]">
                          {value.title.slice(1)}
                        </span>
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                        {value.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                Trust signals
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)]">
                Partners who stay with us
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <blockquote className="flex h-full flex-col rounded-3xl border border-[var(--blue)]/8 bg-[var(--canvas)] p-6">
                    <p className="flex-1 text-sm leading-relaxed text-[var(--ink)]">“{t.quote}”</p>
                    <footer className="mt-5 border-t border-[var(--blue)]/8 pt-4">
                      <p className="font-bold text-[var(--blue)]">{t.name}</p>
                      <p className="text-xs text-[var(--ink-muted)]">{t.role}</p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Careers for non-technical applicants */}
        <section id="careers" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              Careers made simple
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)] sm:text-4xl">
              Looking for work? Three easy steps.
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
              Designed for first-time applicants and experienced workers alike — clear language,
              friendly guidance, no tech overwhelm.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {jobSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div className="rounded-3xl bg-blue-surface bg-[var(--blue)] p-6 text-white">
                  <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[var(--gold)]">
                    {step.step}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-105"
            >
              Apply Now <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>
        </section>

        {/* Insights */}
        <section id="insights" className="bg-[linear-gradient(180deg,#FFF8E8_0%,#F7F9FD_100%)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--maroon)]">
                News & insights
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)]">
                Stay informed. Stay inspired.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {insights.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="rounded-3xl bg-white p-6 ring-1 ring-[var(--blue)]/8">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold-deep)]">
                      {item.category} · {item.date}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {item.excerpt}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                Next step
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--blue)] sm:text-4xl">
                Request a consultation or apply today
              </h2>
              <p className="mt-3 text-[var(--ink-muted)]">
                Prefer talking? Call {company.phone} or email{" "}
                <a className="font-semibold text-[var(--blue)]" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                .
              </p>
              <div className="mt-8 space-y-4">
                {company.locations.map((loc) => (
                  <div key={loc.title} className="rounded-2xl border border-[var(--blue)]/10 bg-white p-4">
                    <p className="font-bold text-[var(--blue)]">{loc.title}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{loc.address}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
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
