"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-[var(--blue)]/15 bg-[var(--blue-soft)] p-6 text-[var(--blue)]">
        <p className="font-semibold">Thanks — we received your message.</p>
        <p className="mt-1 text-sm opacity-80">
          Our team will get back to you soon. For faster help, call us or email directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Full name</span>
        <input
          required
          name="name"
          className="w-full rounded-xl border border-[var(--blue)]/15 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--gold)]/40 transition focus:ring-2"
          placeholder="Your name"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Email</span>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-xl border border-[var(--blue)]/15 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--gold)]/40 transition focus:ring-2"
          placeholder="you@email.com"
        />
      </label>
      {!compact && (
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">I am</span>
          <select
            name="audience"
            className="w-full rounded-xl border border-[var(--blue)]/15 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--gold)]/40 transition focus:ring-2"
            defaultValue="client"
          >
            <option value="client">A business looking for manpower</option>
            <option value="applicant">Someone looking for a job</option>
          </select>
        </label>
      )}
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">Message</span>
        <textarea
          required
          name="message"
          rows={compact ? 4 : 5}
          className="w-full resize-y rounded-xl border border-[var(--blue)]/15 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--gold)]/40 transition focus:ring-2"
          placeholder="Tell us what you need — keep it simple."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-[var(--blue)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--blue-deep)] sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
