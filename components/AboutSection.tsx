import { whyChooseUs } from "@/data/constants";

export default function AboutSection() {
  return (
    <section className="section about-section container" id="about">
      <div className="about-section__header">
        <h2>Why Choose MARGT</h2>
        <p className="about-section__subtitle">Your Trusted Partner for Heavy Machinery Rental Solutions</p>
      </div>
      <div className="grid grid--four">
        {whyChooseUs.map((item) => (
          <div key={item.title} className="benefit-card">
            <div className="benefit-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

