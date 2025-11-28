import Link from "next/link";

interface FooterSectionProps {
  currentYear: number;
}

export default function FooterSection({ currentYear }: FooterSectionProps) {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2>Contact MARGT</h2>
          <p className="company-full-name">
            Muhammad Ashraf Rana General Transport L.L.C - S.P.C
          </p>
          <p>
            Office No-6, Musaffah 11 Plot # 42 Building-1
            <br />
            Abu Dhabi, United Arab Emirates
          </p>
        </div>
        <div>
          <ul className="contact">
            <li>
              <span>Phone</span>
              <a href="tel:+971501324882">+971 50 132 4882</a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:info@margt.com">info@margt.com</a>
            </li>
            <li>
              <span>Website</span>
              <a
                href="https://www.margt.com"
                target="_blank"
                rel="noreferrer"
              >
                www.margt.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Follow Up</p>
          <p>
            Share your project scope and schedule. Our team will confirm
            availability and mobilize the right mix of equipment and experts.
          </p>
          <Link className="btn btn--outline" href="/contact">
            Contact Form
          </Link>
        </div>
      </div>
      <p className="footer__note">
        © {currentYear} Muhammad Ashraf Rana General Transport L.L.C - S.P.C. All rights reserved.
      </p>
    </footer>
  );
}

