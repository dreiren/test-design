import Image from "next/image";
import Link from "next/link";

const designs = [
  {
    href: "/design-a",
    name: "Soft Path",
    vibe: "Calm · Career-clear · Soft modern",
    fonts: "Outfit + Plus Jakarta Sans",
    points: [
      "Light sky canvas with royal blue + gold nav accents from the logo",
      "Dual doors for businesses and non-technical job seekers",
      "Grouped services, stats, CARE values, insights & strong CTAs",
    ],
    image: "/images/urc-header.jpg",
  },
  {
    href: "/design-b",
    name: "Bright Signal",
    vibe: "Fresh · Gen Z/Alpha · High clarity",
    fonts: "Sora + Manrope",
    points: [
      "Airy light UI with logo blue brand bar and gold Apply CTAs",
      "Scan-friendly service bento and stress-free career steps",
      "Story-forward About, testimonials, and always-visible next actions",
    ],
    image: "/images/urc-business-philosophy.jpg",
  },
];

export default function PickerPage() {
  return (
    <div className="picker-shell">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex items-center gap-3">
          <Image
            src="/images/urc-logo-image.png"
            alt="United Royale Corporation"
            width={72}
            height={50}
            priority
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7a12]">
              Redesign concepts
            </p>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#1b2a6b] sm:text-3xl">
              United Royale Corporation
            </h1>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5b6478] sm:text-lg">
          Two lighter, Gen Z / Gen Alpha–friendly website directions — professional fonts, logo
          colors in navigation, clearer value messaging, and a job path that non-technical
          applicants can follow with confidence.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {designs.map((design) => (
            <Link
              key={design.href}
              href={design.href}
              className="group overflow-hidden rounded-[1.75rem] border border-[#1b2a6b]/10 bg-white shadow-[0_20px_50px_rgba(27,42,107,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(27,42,107,0.12)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={design.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2a6b]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9a227]">
                    {design.vibe}
                  </p>
                  <p className="text-2xl font-extrabold text-white">{design.name}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a7a12]">
                  {design.fonts}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#5b6478]">
                  {design.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1b2a6b]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1b2a6b]">
                  Open design
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#5b6478]">
          Live reference:{" "}
          <a
            className="font-semibold text-[#1b2a6b] underline"
            href="https://unitedroyalecorp.net/"
            target="_blank"
            rel="noreferrer"
          >
            unitedroyalecorp.net
          </a>
        </p>
      </div>
    </div>
  );
}
