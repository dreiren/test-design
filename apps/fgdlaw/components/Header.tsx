"use client";

import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div>
            <span>📍 Unit 316, JARS Building, San Miguel, Manila</span>
            <span>📞 (632) 727-5011-2</span>
          </div>
          <div>
            <a href="mailto:info@fgdlaw.net">info@fgdlaw.net</a>
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#about" onClick={closeMenu}>
            <div className="mark">FG</div>
            <div className="name">
              FGDLaw<small>Est. 2002 · Manila, PH</small>
            </div>
          </a>
          <nav className="links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="cta-btn gold" href="#contact" onClick={closeMenu}>
              Book a Consultation
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        {open ? (
          <nav className="mobile-links" aria-label="Mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>
    </>
  );
}
