"use client";
import ModalVideo from "../../../components/elements/VideoPopup";

export default function Chooseus() {
  const reasons = [
    {
      icon: "fas fa-microscope",
      heading: "Advanced IVF technology & cleanroom labs",
      text: "Our laboratory runs on cutting-edge incubation and micro-manipulation technology built to optimize embryo viability and implantation success.",
      tags: ["Ultra-clean air IVF labs", "Laser-assisted hatching"],
    },
    {
      icon: "fas fa-chart-line",
      heading: "Consistently high clinical success rates",
      text: "Customized stimulation protocols, endometrial receptivity monitoring, and blastocyst-stage transfers give couples significantly higher success across all age groups.",
      tags: ["92%+ success rate", "Blastocyst Day-5 transfer"],
    },
    {
      icon: "fas fa-user-md",
      heading: "Distinguished doctors & embryologists",
      text: "Senior reproductive endocrinologists, clinical embryologists, and counselors guide every milestone with deep expertise and genuine warmth.",
      tags: ["Senior embryologists", "Dedicated care coordinator"],
    },
    {
      icon: "fas fa-shield-alt",
      heading: "Honest, transparent & ethical protocols",
      text: "From the first diagnostic workup to cost breakdowns and timelines, we prioritize your trust and peace of mind at every step.",
      tags: ["Zero hidden costs", "Strict ethical standards"],
    },
  ];

  const badges = [
    { value: "92%+", label: "Success rate" },
    { value: "15,000+", label: "Families" },
    { value: "20+", label: "Years" },
  ];

  return (
    <section className="wc">
      <div className="auto-container">
        <div className="wc-head">
          <div className="wc-eyebrow">
            <i className="fas fa-heartbeat"></i>
            <span>Why Choose Meenakshi Fertility Center</span>
          </div>
          <h2>
            A fertility program built around outcomes,
            <br />
            not just promises
          </h2>
    
        </div>

        <div className="wc-grid">
          <div className="wc-media">
            <div
              className="wc-media-img"
              style={{ backgroundImage: "url(/assets/images/resource/why-choose-us.jpg)" }}
            >
              <div className="wc-media-tint" />
              <div className="wc-media-video">
                <ModalVideo />
              </div>
              <div className="wc-media-plate">
                <div className="wc-media-name">Meenakshi Hospital Fertility Center</div>
                <div className="wc-media-sub">NABH accredited · ICMR compliant</div>
              </div>
            </div>

            <div className="wc-badges">
              {badges.map((b, i) => (
                <div className="wc-badge reveal-item" key={i}>
                  <span className="wc-badge-value">{b.value}</span>
                  <span className="wc-badge-label">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="wc-list">
            {reasons.map((r, i) => (
              <div className="wc-row reveal-item" key={i}>
                <div className="wc-row-icon">
                  <i className={r.icon}></i>
                </div>
                <div className="wc-row-body">
                  <h3>{r.heading}</h3>
                  <p>{r.text}</p>
                  <div className="wc-row-tags">
                    {r.tags.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .wc {
          background: #ffffff;
          padding: 96px 0;
          font-family: var(--text-font);
          color: #10231f;
        }

        .wc-head {
          max-width: 720px;
          margin: 0 auto 56px auto;
          text-align: center;
        }

        .wc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border-radius: 30px;
          background: rgba(3, 125, 114, 0.08);
          border: 1px solid rgba(3, 125, 114, 0.22);
          color: #037d72;
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .wc-eyebrow i {
          color: #6f8f2e;
          font-size: 13px;
        }

        .wc-head h2 {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.28;
          letter-spacing: -0.4px;
          margin: 0 0 16px 0;
        }

        .wc-head p {
          font-size: 16px;
          line-height: 27px;
          color: #4d635f;
          margin: 0;
          max-width: 58ch;
        }

        .wc-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          margin-bottom: 0;
        }

        /* Sticky media column */
        .wc-media {
          position: sticky;
          top: 32px;
          align-self: start;
        }

        .wc-media-img {
          position: relative;
          height: 560px;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .wc-media-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            190deg,
            rgba(3, 125, 114, 0.25) 0%,
            rgba(16, 35, 31, 0.82) 100%
          );
        }

        .wc-media-video {
          position: absolute;
          top: 22px;
          left: 22px;
          z-index: 2;
        }

        .wc-media-plate {
          position: absolute;
          left: 22px;
          bottom: 22px;
          right: 22px;
          z-index: 2;
        }

        .wc-media-name {
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .wc-media-sub {
          color: #a9d9d1;
          font-size: 13px;
          font-weight: 500;
        }

        .wc-badges {
          display: flex;
          margin-top: -34px;
          margin-left: 22px;
          position: relative;
          z-index: 3;
          width: calc(100% - 44px);
        }

        .wc-badge {
          background: #ffffff;
          border: 1px solid rgba(16, 35, 31, 0.1);
          flex: 1;
          padding: 16px 14px;
          text-align: center;
          border-right: none;
        }

        .wc-badge:first-child {
          border-radius: 4px 0 0 4px;
        }

        .wc-badge:last-child {
          border-right: 1px solid rgba(16, 35, 31, 0.1);
          border-radius: 0 4px 4px 0;
        }

        .wc-badge-value {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #037d72;
          margin-bottom: 2px;
        }

        .wc-badge-label {
          display: block;
          font-size: 11.5px;
          color: #4d635f;
          font-weight: 600;
        }

        /* Feature rows */
        .wc-list {
          display: flex;
          flex-direction: column;
        }

        .wc-row {
          display: flex;
          gap: 22px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(16, 35, 31, 0.1);
        }

        .wc-row:first-child {
          padding-top: 4px;
        }

        .wc-row-icon {
          flex: 0 0 48px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f5f7f4;
          color: #037d72;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .wc-row-body h3 {
          font-size: 17px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #10231f;
        }

        .wc-row-body p {
          font-size: 14.5px;
          line-height: 24px;
          color: #4d635f;
          margin: 0 0 14px 0;
          max-width: 56ch;
        }

        .wc-row-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .wc-row-tags span {
          font-size: 12.5px;
          font-weight: 600;
          color: #4c6a1f;
          background: rgba(111, 143, 46, 0.1);
          padding: 5px 12px;
          border-radius: 3px;
        }

        @media (max-width: 991px) {
          .wc-grid {
            grid-template-columns: 1fr;
          }

          .wc-media {
            position: static;
          }

          .wc-head h2 {
            font-size: 29px;
          }

          .wc-media-img {
            height: 420px;
          }

          .wc-badges {
            flex-wrap: wrap;
            margin-top: -28px;
          }

          .wc-badge {
            flex: 1 1 33%;
            border-right: 1px solid rgba(16, 35, 31, 0.1) !important;
          }
        }
      `}</style>
    </section>
  );
}