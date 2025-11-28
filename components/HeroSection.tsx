import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          <Link href="/" className="logo-group" onClick={closeMenu}>
            <span className="logo-line logo-line--primary">Muhammad Ashraf Rana</span>
            <span className="logo-line logo-line--secondary">
              General Transport L.L.C - S.P.C
            </span>
          </Link>
          <button 
            className="nav__toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`nav__toggle-icon ${isMenuOpen ? 'nav__toggle-icon--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`nav__actions ${isMenuOpen ? 'nav__actions--open' : ''}`}>
            <a href="#equipment" onClick={closeMenu}>Equipment</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
            <a className="btn btn--outline" href="tel:+971501324882" onClick={closeMenu}>
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

