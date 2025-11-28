import { equipmentList } from "@/data/constants";

interface InstantQuoteSectionProps {
  showContactForm: boolean;
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    equipment: string;
    rentalDuration: string;
    startDate: string;
    location: string;
  };
  formStatus: "idle" | "submitting" | "success" | "error";
  onShowForm: () => void;
  onHideForm: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResetForm: () => void;
}

export default function InstantQuoteSection({
  showContactForm,
  formData,
  formStatus,
  onShowForm,
  onHideForm,
  onInputChange,
  onSubmit,
  onResetForm,
}: InstantQuoteSectionProps) {
  return (
    <>
      <section className="section highlight container" id="cta">
        <div className="highlight__content">
          <div>
            <p className="eyebrow">Instant Quote</p>
            <h2>Have Any Questions?</h2>
            <p>
              Get an instant quote for your project. Our team is available 24/7 to
              help you find the right equipment for your needs.
            </p>
          </div>
          <div className="highlight__actions">
            <a className="btn btn--black btn--large" href="tel:+971501324882">
              Call Now
            </a>
            <button
              className="btn btn--outline btn--large"
              onClick={onShowForm}
            >
              Leave Inquiry
            </button>
          </div>
        </div>
      </section>

      {showContactForm && (
        <div 
          className="inquiry-modal-overlay" 
          onClick={() => {
            onHideForm();
            onResetForm();
          }}
        >
          <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
            <div className="inquiry-modal__header">
              <div>
                <h2>Inquiry Form</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <button
                type="button"
                className="inquiry-modal__close"
                onClick={() => {
                  onHideForm();
                  onResetForm();
                }}
                aria-label="Close form"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form className="inquiry-modal__form" onSubmit={onSubmit}>
              <div className="inquiry-form__grid">
                <div className="form-group">
                  <label htmlFor="inquiry-name">Full Name *</label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inquiry-email">Email Address *</label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inquiry-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={onInputChange}
                    required
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inquiry-equipment">Equipment Type *</label>
                  <select
                    id="inquiry-equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={onInputChange}
                    required
                  >
                    <option value="">Select Equipment</option>
                    {equipmentList.map((equipment) => (
                      <option key={equipment.name} value={equipment.name}>
                        {equipment.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inquiry-duration">Rental Duration *</label>
                  <select
                    id="inquiry-duration"
                    name="rentalDuration"
                    value={formData.rentalDuration}
                    onChange={onInputChange}
                    required
                  >
                    <option value="">Select Duration</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inquiry-date">Start Date</label>
                  <input
                    type="date"
                    id="inquiry-date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="inquiry-location">Project Location</label>
                  <input
                    type="text"
                    id="inquiry-location"
                    name="location"
                    value={formData.location}
                    onChange={onInputChange}
                    placeholder="Enter project location"
                  />
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="inquiry-message">Project Details / Message *</label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={onInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>
              </div>
              {formStatus === "success" && (
                <div className="form-message form-message--success">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Thank you! Your inquiry has been sent successfully. We'll get back to you soon.</span>
                </div>
              )}
              {formStatus === "error" && (
                <div className="form-message form-message--error">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Something went wrong. Please try again or call us directly at +971 50 132 4882</span>
                </div>
              )}
              <div className="inquiry-form__actions">
                <button
                  type="submit"
                  className="btn btn--black btn--large"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg className="spinner" width="20" height="20" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="32" strokeDashoffset="24"/>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn--outline btn--large"
                  onClick={() => {
                    onHideForm();
                    onResetForm();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
