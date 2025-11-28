export default function CompanyOverviewSection() {
  return (
    <section className="section company-overview container" id="company-overview">
      <div className="company-overview__header">
        <h2>About Us</h2>
      </div>

      <div className="company-overview__content">
        <div className="company-overview__intro">
          <p>
            MARGT L.L.C-S.P.C. is a leading service provider in the construction and oil & gas sectors, 
            delivering reliable excellence in infrastructure projects across the UAE. As part of our 
            commitment to quality, we offer premium services, including the rental of heavy equipment 
            for clients in the public and private sector.
          </p>
        </div>

        <div className="company-overview__grid">
          <div className="overview-card overview-card--vision">
            <div className="overview-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3>Vision</h3>
            <p>
              To strengthen our presence across the UAE by empowering businesses to thrive through 
              innovation, intelligence, and integrity.
            </p>
          </div>

          <div className="overview-card overview-card--mission">
            <div className="overview-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Mission</h3>
            <p>
              To provide high-quality services tailored to the diverse needs of our clients, while 
              promoting growth and creating opportunities for our employees.
            </p>
          </div>

          <div className="overview-card overview-card--values">
            <div className="overview-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Company Values</h3>
            <p>
              At MARGT L.L.C-S.P.C., our core values serve as the foundation of our operations and 
              guide our interactions with clients, employees, and stakeholders. Integrity remains 
              paramount to all business dealings, ensuring honesty, transparency, and ethical conduct. 
              We are dedicated to excellence, consistently striving to deliver superior services from 
              candidate selection to achieving client satisfaction.
            </p>
          </div>
        </div>

        <div className="company-overview__additional">
          <div className="info-card">
            <h3>Diversity</h3>
            <p>
              While most of our workforce comes from Pakistan, India, and Bangladesh, we remain 
              committed to promoting diversity and inclusivity. Our team is certified, well-trained, 
              and highly skilled, with extensive experience in executing major projects across the UAE.
            </p>
          </div>

          <div className="info-card">
            <h3>Management Team</h3>
            <p>
              At MARGT L.L.C-S.P.C., our commitment goes beyond fulfilling contracts it&apos;s about 
              empowering individuals with meaningful job opportunities while consistently exceeding 
              client expectations. We believe that ethical business practices not only drive success 
              but also foster trust and long-term partnerships. By prioritizing worker well-being and 
              client satisfaction, we uphold the highest standards in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

