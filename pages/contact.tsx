import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const mailtoLink = `mailto:info@margt.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      }, 500);
    } catch {
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | MARGT</title>
        <meta
          name="description"
          content="Get in touch with MARGT for heavy equipment rental, transport, and manpower services across the UAE."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className="hero hero--contact" id="contact">
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
                <Link href="/#equipment">Equipment</Link>
                <Link href="/#about">About</Link>
                <Link href="/contact">Contact</Link>
                <a className="btn btn--outline" href="tel:+971501324882">
                  Call Now
                </a>
              </div>
            </nav>
            <div className="hero__body container">
              <div className="hero__contact-content">
                <div className="hero__contact-info">
                  <div className="hero__eyebrow">Get In Touch</div>
                  <h1>Contact&nbsp;<span>US</span></h1>
                  <p className="hero__description">
                    Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. 
                    We will be happy to answer your questions.
                  </p>
                  <div className="contact-info__list">
                    <div className="contact-info__item">
                      <p className="contact-info__label">Our Address:</p>
                      <p className="contact-info__value">
                        Office No-6, Musaffah 11 Plot # 42 Building-1
                        <br />
                        Abu Dhabi, United Arab Emirates
                      </p>
                    </div>
                    <div className="contact-info__item">
                      <p className="contact-info__label">Our Mailbox:</p>
                      <p className="contact-info__value">
                        <a href="mailto:info@margt.com">info@margt.com</a>
                      </p>
                    </div>
                    <div className="contact-info__item">
                      <p className="contact-info__label">Our Phone:</p>
                      <p className="contact-info__value">
                        <a href="tel:+971501324882">+971 50 132 4882</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hero__contact-form-wrapper">
                  <form className="hero__contact-form" onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>
                    <div className="contact-form__grid">
                      <div className="form-group">
                        <label htmlFor="contact-name">Name *</label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                      <div className="form-group form-group--full">
                        <label htmlFor="contact-email">Email *</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="form-group form-group--full">
                        <label htmlFor="contact-message">Message *</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>
                    {formStatus === "success" && (
                      <div className="form-message form-message--success">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Thank you! Your message has been sent successfully.</span>
                      </div>
                    )}
                    {formStatus === "error" && (
                      <div className="form-message form-message--error">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>Something went wrong. Please try again or call us directly.</span>
                      </div>
                    )}
                    <div className="contact-form__actions">
                      <button
                        type="submit"
                        className="btn btn--large"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>

        <FooterSection currentYear={currentYear} />
      </div>
    </>
  );
}

