import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="hero" id="home">
      <div
        className="hero__background"
        style={{
          backgroundImage: "url(/india-stage-v-range-banner.webp)",
        }}
      />
      <div className="hero__overlay">
        <nav className="hero__nav container">
          <Link href="/" className="logo-group">
            <span className="logo-line logo-line--primary">Muhammad Ashraf Rana</span>
            <span className="logo-line logo-line--secondary">
              General Transport L.L.C - S.P.C
            </span>
          </Link>
          <div className="nav__actions">
            <a href="#equipment">Equipment</a>
            <a href="#about">About</a>
            <Link href="/contact">Contact</Link>
            <a className="btn btn--outline" href="tel:+971501324882">
              Call Now
            </a>
          </div>
        </nav>
        <div className="hero__body container">
          <div className="hero__content">
            <div className="hero__eyebrow">24/7 Equipment Rental</div>
            <h1>
              Rental Across
              <span> The UAE</span>
            </h1>
            <p className="hero__callout">
              Call Now – <a href="tel:+971501324882">+971 50 132 4882</a> | <a href="tel:+971501324882">042349750</a>
            </p>
            <p className="hero__description">
              Premium JCB and Bobcat equipment rental services. Well-maintained
              machinery with certified operators ready for your construction projects across all Emirates.
            </p>
            <div className="hero__actions">
              <a className="btn btn--large" href="#equipment">
                View Equipment
              </a>
              <a className="btn btn--ghost btn--large" href="tel:+971501324882">
                Instant Quote
              </a>
            </div>
            <div className="hero__trust">
              <div className="trust-item">
                <span className="trust-number">99%</span>
                <span className="trust-label">Satisfaction</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">24/7</span>
                <span className="trust-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

