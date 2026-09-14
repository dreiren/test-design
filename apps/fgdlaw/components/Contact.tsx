"use client";

import { FormEvent, useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!name.trim()) errors.name = "Full name is required.";
  if (!email.trim()) errors.email = "Email address is required.";
  else if (!emailPattern.test(email.trim())) errors.email = "Enter a valid email address.";
  if (!message.trim()) errors.message = "Please tell us about your legal concern.";
  return errors;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(name, email, message);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 56 }}>
          <div className="kicker">Contact Us</div>
          <h2>Let&apos;s discuss your legal matter</h2>
        </div>
        <div className="contact-grid">
          <div>
            <div className="info-item">
              <div className="ic">📍</div>
              <div>
                <h4>Office Address</h4>
                <p>
                  Unit 316, 3rd Floor, JARS Building, JP Laurel Street, San
                  Miguel, Manila, Philippines 1008
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="ic">📞</div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+6327275011">(632) 727-5011-2</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="ic">✉️</div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@fgdlaw.net">info@fgdlaw.net</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="ic">🕘</div>
              <div>
                <h4>Office Hours</h4>
                <p>Monday – Friday, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <form className="form-card" onSubmit={onSubmit} noValidate>
            {status === "success" ? (
              <div className="form-status success" role="status">
                Thank you. We&apos;ve received your inquiry and will be in touch
                shortly.
              </div>
            ) : null}
            {status === "error" ? (
              <div className="form-status error" role="alert">
                Please complete all required fields with a valid email address.
              </div>
            ) : null}

            <label htmlFor="full-name">Full Name</label>
            <input
              id="full-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Juan Dela Cruz"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={errors.name ? "invalid" : undefined}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <p className="field-error">{errors.name}</p> : null}

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="juan@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={errors.email ? "invalid" : undefined}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <p className="field-error">{errors.email}</p> : null}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your legal concern..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={errors.message ? "invalid" : undefined}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? <p className="field-error">{errors.message}</p> : null}

            <button className="btn-gold" type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
