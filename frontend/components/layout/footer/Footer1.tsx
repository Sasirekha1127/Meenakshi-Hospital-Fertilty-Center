import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div className="widget-section p_relative">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{ backgroundImage: "url(/assets/images/shape/shape-21.png)" }}
            ></div>
            <div
              className="pattern-2"
              style={{ backgroundImage: "url(/assets/images/shape/shape-22.png)" }}
            ></div>
            <div
              className="pattern-3"
              style={{ backgroundImage: "url(/assets/images/shape/shape-23.png)" }}
            ></div>
            <div
              className="pattern-4"
              style={{ backgroundImage: "url(/assets/images/shape/shape-24.png)" }}
            ></div>
          </div>

          <div className="auto-container">
            {/* OPD / EMERGENCY Top Highlight Banner */}
            <div className="footer-emergency-strip">
              <div className="emergency-strip-inner">
                <div className="emergency-strip-left">
                  <div className="emergency-badges">
                    <span className="emergency-pill">
                      <i className="fas fa-ambulance mr-2"></i>
                      OPD / Emergency
                    </span>
                    <span className="priority-pill">
                      <i className="fas fa-heartbeat mr-1"></i>
                      Your Health, Our Priority
                    </span>
                  </div>
                  <h3 className="emergency-title">
                    24x7 Duty Doctors Available
                  </h3>
                  <p className="emergency-desc">
                    Emergency response, maternal delivery suites &amp; Level-III NICU backup in Dharmapuri.
                  </p>
                </div>

                <div className="emergency-strip-right">
                  <a href="tel:04342269010" className="emergency-call-cta">
                    <div className="cta-icon-box">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="cta-text-box">
                      <span className="cta-label">Emergency &amp; Reception</span>
                      <strong className="cta-phone">04342 - 269010</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Main Widgets */}
            <div className="row clearfix">
              {/* Col 1: Hospital Logo & Brand Overview */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget about-widget">
                  <div className="footer-logo mb_20">
                    <Link href="/">
                      <div className="footer-logo-badge">
                        <Image
                          src="/assets/images/mhfc-logo.png"
                          alt="Meenakshi Hospital &amp; Fertility Centre Logo"
                          width={160}
                          height={65}
                          style={{ width: "auto", height: "52px", objectFit: "contain" }}
                          priority
                        />
                      </div>
                    </Link>
                  </div>
                  <p className="footer-brand-desc">
                    Dharmapuri&apos;s premier healthcare institution, offering advanced IVF &amp; reproductive genetics, painless normal delivery, 3D keyhole laparoscopy, and 24x7 emergency care.
                  </p>
                  <div className="footer-social-box">
                    <span className="footer-social-label">Follow Us</span>
                    <ul className="social-links clearfix">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="social-icon facebook"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className="social-icon instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="YouTube"
                          className="social-icon youtube"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Col 2: Quick Links */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/departments">Services</Link></li>
                      <li><Link href="/appointment">Booking Appointment</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Col 3: Address & Contact */}
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Address &amp; Contact</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li className="hospital-name-item">
                        <i className="fas fa-hospital-alt"></i>
                        <strong>Meenakshi Hospital &amp; Fertility Centre</strong>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <a
                          href="https://maps.google.com/?q=18/61,+Sengodipuram,+Dharmapuri+-+636701,+Tamil+Nadu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          18/61, Sengodipuram, Dharmapuri - 636701, Tamil Nadu
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-phone-alt"></i>
                        Phone: <a href="tel:04342269010" className="fw-bold">04342 - 269010</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="footer-bottom-inner">
              <p className="copyright-left">
                &copy; {new Date().getFullYear()}{" "}
                <Link href="/">Meenakshi Hospital &amp; Fertility Centre</Link>. All Rights Reserved.
              </p>
              <p className="developer-right">
                Developed by{" "}
                <a
                  href="https://saitechnosolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-link"
                >
                  Sai Techno Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-emergency-strip {
          background: linear-gradient(135deg, #072a27 0%, #0c3e3a 55%, #12433f 100%);
          border: 1px solid rgba(0, 152, 144, 0.25);
          border-radius: 14px;
          padding: 22px 28px;
          margin-bottom: 45px;
          box-shadow: 0 10px 24px rgba(0, 20, 18, 0.18);
          position: relative;
          z-index: 2;
        }

        .emergency-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .emergency-strip-left {
          flex: 1;
          min-width: 260px;
        }

        .emergency-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }

        .emergency-pill,
        .priority-pill {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
        }

        .emergency-pill {
          background: #e63946;
          color: #ffffff;
        }

        .priority-pill {
          background: rgba(116, 161, 53, 0.15);
          border: 1px solid rgba(116, 161, 53, 0.35);
          color: #8cc343;
        }

        .emergency-title {
          font-family: var(--title-font);
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
          letter-spacing: 0.2px;
        }

        .emergency-desc {
          font-size: 13px;
          color: #a8cfcb;
          margin: 0;
          line-height: 1.6;
        }

        .emergency-strip-right {
          flex-shrink: 0;
        }

        .emergency-call-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #009890;
          color: #ffffff;
          padding: 11px 20px;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .emergency-call-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(116, 161, 53, 0.35);
          color: #ffffff;
        }

        .cta-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .cta-text-box {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }

        .cta-label {
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.85;
        }

        .cta-phone {
          font-size: 17px;
          font-weight: 800;
        }

        .footer-logo-badge {
          background: #ffffff;
          padding: 6px 16px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
        }

        .footer-brand-desc {
          color: #a8cfcb;
          font-size: 13.5px;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .widget-title h3 {
          font-size: 17px;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .info-list li,
        .hospital-name-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .info-list i,
        .hospital-name-item i {
          color: #009890;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .hospital-name-item strong {
          color: #ffffff;
          font-size: 14.5px;
        }

        .info-list a {
          color: #c4d7d3;
        }

        .fw-bold {
          font-weight: 700;
          color: #ffffff;
        }

        .footer-bottom {
          padding: 20px 0;
          background: #111a18;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .copyright-left,
        .developer-right {
          margin: 0;
          font-size: 13.5px;
          color: #c4d7d3;
        }

        .copyright-left a {
          color: #009890;
          font-weight: 600;
          text-decoration: none;
        }

        .copyright-left a:hover {
          text-decoration: underline;
        }

        .developer-right .dev-link {
          color: #009890;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .developer-right .dev-link:hover {
          color: #74a135;
          text-decoration: underline;
        }

        .widget-section .auto-container {
          position: relative;
          z-index: 2;
        }

        .pattern-layer {
          pointer-events: none;
          z-index: 1;
        }

        .footer-social-box {
          margin-top: 22px;
        }

        .footer-social-label {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #a8cfcb;
          margin-bottom: 10px;
        }

        .social-links {
          display: flex !important;
          align-items: center;
          gap: 12px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .social-links li {
          display: inline-flex !important;
          margin: 0 !important;
          padding: 0 !important;
          float: none !important;
        }

        .social-links li .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .social-links li .social-icon:hover {
          transform: translateY(-3px);
        }

        .social-links li .social-icon.facebook:hover {
          background: #1877f2;
          border-color: #1877f2;
          color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(24, 119, 242, 0.45);
        }

        .social-links li .social-icon.instagram:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
          border-color: #d6249f;
          color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(214, 36, 159, 0.45);
        }

        .social-links li .social-icon.youtube:hover {
          background: #ff0000;
          border-color: #ff0000;
          color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(255, 0, 0, 0.45);
        }


        @media (max-width: 991px) {
          .emergency-strip-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .emergency-strip-right,
          .emergency-call-cta {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 10px;
          }
        }

        @media (max-width: 575px) {
          .footer-emergency-strip {
            padding: 18px 16px;
          }

          .emergency-title {
            font-size: 17px;
          }
        }
      `}</style>
    </>
  );
}