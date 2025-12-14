import Image from "next/image";

export default function CompanyOverviewSection() {
  return (
    <section className="section company-overview container" id="company-overview">
      <div className="company-overview__header">
        <h2>About Us.</h2>
      </div>

      <div className="company-overview__content">
        <div className="company-overview__intro">
          <p>
            MARGT L.L.C–S.P.C. is a leading service provider in the construction and oil & gas sectors, 
            delivering consistent, reliable, and high-quality solutions across infrastructure projects throughout the UAE. Committed to maintaining the highest standards of excellence, we offer a comprehensive range of services, including heavy equipment rental and the transportation of assembled materials for both public and private sector clients.
            Our reputation is built on professionalism, operational efficiency, and a dedication to exceeding client expectations in every project we undertake.
          </p>
        </div>

        <div className="company-overview__grid company-overview__grid--vision-mission">
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
        </div>

        <div className="company-overview__values-wrapper">
          <div className="overview-card overview-card--values overview-card--full-width">
            <div className="overview-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Our Values</h3>
            <p>
              Our core values serve as the foundation of our operations and guide our interactions with clients, employees, and stakeholders. Integrity remains paramount to all business dealings, ensuring honesty, transparency, Excellence in Innovation, Guaranteed Quality of Work, Commitment to Partnerships, Keen Business Insight and ethical conduct. We are dedicated to excellence, consistently striving to deliver superior services from candidate selection to achieving client satisfaction.
            </p>
            <p>
              At MARGT L.L.C–S.P.C., acknowledge and recognize the unique value of those who work with us, and encourage humility, hard work, and excellence. We are a family business and a family in business. We treat our customers, partners and team members as we would treat our own family, with respect. We are strengthened by a culturally diverse team whose unique backgrounds and perspectives drive our success. Our people are our strength; professional team members working together to achieve our goals. We respect individuality while fostering inclusiveness in the workplace.
            </p>
          </div>
        </div>

        <div className="company-overview__grid">
          <div className="overview-card overview-card--respect">
            <div className="overview-card__icon">
              <Image 
                src="/respect.png" 
                alt="Respect" 
                width={48}
                height={48}
                className="overview-card__icon-image"
              />
            </div>
            <h3>Respect</h3>
            <p>
              We acknowledge and recognize the unique value of those who work with us.
            </p>
          </div>

          <div className="overview-card overview-card--integrity">
            <div className="overview-card__icon">
              <Image 
                src="/integrity.png" 
                alt="Integrity" 
                width={48}
                height={48}
                className="overview-card__icon-image"
              />
            </div>
            <h3>Integrity</h3>
            <p>
              We approach our position and our responsibility as industry leaders with authenticity and integrity.
            </p>
          </div>

          <div className="overview-card overview-card--innovation">
            <div className="overview-card__icon">
              <Image 
                src="/innovation.png" 
                alt="Innovation" 
                width={48}
                height={48}
                className="overview-card__icon-image"
              />
            </div>
            <h3>Innovation</h3>
            <p>
              We pioneer an ethos of creative problem solving and share the benefit of our business insights internally as well as with our clients.
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
        </div>

        <div className="company-overview__divider"></div>

        <div className="company-overview__management">
          <div className="management-team__header">
            <h2>Management Team</h2>
            <p>
              At MARGT L.L.C–S.P.C., our commitment goes beyond fulfilling contracts it&apos;s about 
              empowering individuals with meaningful job opportunities while consistently exceeding 
              client expectations. We believe that ethical business practices not only drive success 
              but also foster trust and long-term partnerships. By prioritizing worker well-being and 
              client satisfaction, we uphold the highest standards in everything we do.
            </p>
          </div>

          <div className="management-team__profile">
            <div className="profile-card">
              <div className="profile-card__content">
                <h3>Muhammad Ashraf Rana</h3>
                <p className="profile-card__title">OWNER</p>
                <p className="profile-card__description">
                  Mr. Muhammad Ashraf Rana, Owner and Founder of the (MARGT L.L.C–S.P.C.), worked here in UAE Oil and Gas sector since 2008, which led to the establishment of a Rental of Heavy Equipment company with diverse business interests under his visionary leadership. His passion for excellence and commitment to integrity are the foundational pillars of the MARGT family.
                </p>
              </div>
              <div className="profile-card__image">
                <Image 
                  src="/ashraf_rana.png" 
                  alt="Muhammad Ashraf Rana" 
                  width={300}
                  height={300}
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

