export default function CompanySection() {
  return (
    <section className="section company-services container" id="company">
      <div className="company-services__header">
        <h2>Our Services & Solutions</h2>
        <p className="company-services__subtitle">Comprehensive Equipment Rental, Transport, and Manpower Services</p>
      </div>

      <div className="company-services__content">
        <div className="services-showcase">
          <div className="service-item service-item--primary">
            <div className="service-item__badge">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </div>
            <div className="service-item__content">
              <h3>Equipment & Transport Services</h3>
              <div className="service-item__features">
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Rental of Heavy Machines and Equipment</span>
                </div>
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Transport of Materials Assembly Heavy Truck</span>
                </div>
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Transport of Materials Assembly Light Truck</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-item service-item--secondary">
            <div className="service-item__badge">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="service-item__content">
              <h3>Manpower Services</h3>
              <div className="service-item__features">
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Supervisor / Foreman</span>
                </div>
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Safety Officer</span>
                </div>
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Heavy Machinery Operator</span>
                </div>
                <div className="service-feature">
                  <span className="service-feature__check">✓</span>
                  <span>Driver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-services__divider"></div>
    </section>
  );
}

