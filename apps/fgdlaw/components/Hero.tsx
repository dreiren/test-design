import { ShieldCheckIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="wrap">
        <div>
          <div className="eyebrow">⚖ Trusted Counsel Since 2002</div>
          <h1>
            Just and equitable
            <br />
            legal counsel, <em>
              built on
              <br />
              integrity.
            </em>
          </h1>
          <p>
            The Law Firm of Frederick G. Dedace represents individuals and
            corporations across the Philippines and abroad — delivering
            strategic, principled representation for over two decades.
          </p>
          <div className="actions">
            <a className="btn-gold" href="#contact">
              Schedule a Consultation →
            </a>
            <a className="btn-outline" href="#practice">
              View Practice Areas
            </a>
          </div>
          <div className="hero-badge-row">
            <div>
              <strong>23+</strong>Years in Practice
            </div>
            <div>
              <strong>500+</strong>Clients Represented
            </div>
            <div>
              <strong>5</strong>Attorneys &amp; Counsel
            </div>
            <div>
              <strong>IBP</strong>Registered Member Firm
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="seal">
            <div className="seal-inner">
              <ShieldCheckIcon />
              <div className="est">FGDLaw</div>
              <div className="yr">EST. 2002</div>
            </div>
          </div>
          <div className="float-card">
            <div className="row">
              <div className="dot">⚖</div>
              <div>
                <div className="t">Corporate &amp; Labor Law</div>
                <div className="s">Primary practice focus</div>
              </div>
            </div>
            <div className="row">
              <div className="dot">🛡</div>
              <div>
                <div className="t">Data Privacy Compliance</div>
                <div className="s">Certified DPO on staff</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
