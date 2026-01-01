interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  formStatus: "idle" | "submitting" | "success" | "error";
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactSection({
  formData,
  formStatus,
  onInputChange,
  onSubmit,
}: ContactSectionProps) {
  return (
    <section className="section contact-section container" id="contact">
      <div className="contact-section__header">
        <h2>Let&apos;s Get In Touch</h2>
        <p>
          Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. 
          We will be happy to answer your questions.
        </p>
      </div>

      <div className="contact-section__content">
        <div className="contact-section__info">
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
              <a href="mailto:rana.margt339@gmail.com">rana.margt339@gmail.com</a>
            </p>
          </div>
          <div className="contact-info__item">
            <p className="contact-info__label">Our Phone:</p>
            <p className="contact-info__value">
              <a href="tel:+971501324882">+971 50 132 4882</a>
            </p>
          </div>
        </div>

        <div className="contact-section__form-wrapper">
          <form className="contact-section-form" onSubmit={onSubmit}>
            <div className="contact-form__grid">
              <div className="form-group">
                <label htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
              <div className="form-group form-group--full">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  required
                  rows={5}
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
                className="btn btn--black"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

