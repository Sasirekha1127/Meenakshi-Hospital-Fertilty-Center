"use client";

import React from "react";
import Link from "next/link";

export default function UniqueTreatments() {
  const treatments = [
    {
      id: 1,
      tag: "Fertility Signature",
      icon: "fas fa-dna",
      iconColor: "#009890",
      title: "Advanced IVF & Laser Blastocyst Transfer",
      description:
        "High-definition ICSI, laser-assisted hatching, and Day-5 blastocyst culture in ISO cleanroom labs delivering industry-leading 92%+ cumulative clinical success.",
      features: [
        "High-Definition ICSI precision",
        "Laser-Assisted embryo hatching",
        "Vitri-cryopreservation storage",
      ],
      link: "/department-details-4",
    },
    {
      id: 2,
      tag: "Maternity Excellence",
      icon: "fas fa-heartbeat",
      iconColor: "#74A135",
      title: "High-Risk Pregnancy & Maternal-Foetal Care",
      description:
        "Dedicated maternal-foetal specialists, round-the-clock hemodynamic monitoring, and comfortable painless delivery suites ensuring absolute safety for mother and baby.",
      features: [
        "Continuous 24/7 obstetric monitoring",
        "Advanced Painless Labor Epidural",
        "Level-III Neonatal ICU backup",
      ],
      link: "/services",
    },
    {
      id: 3,
      tag: "Minimally Invasive",
      icon: "fas fa-procedures",
      iconColor: "#009890",
      title: "3D Laparoscopic & Hysteroscopic Surgeries",
      description:
        "State-of-the-art keyhole surgical procedures for uterine fibroids, ovarian cysts, endometriosis, and tubal recanalization with minimal discomfort and same-day recovery.",
      features: [
        "Pinhole scarless surgical precision",
        "Significantly reduced hospital stay",
        "Preservation of ovarian reserve",
      ],
      link: "/services",
    },
    {
      id: 4,
      tag: "Dermatology & Hair",
      icon: "fas fa-spa",
      iconColor: "#74A135",
      title: "Clinical Dermatology & Aesthetic Trichology",
      description:
        "Comprehensive science-backed care for chronic skin conditions, targeted laser therapy, chemical peeling, and advanced PRP hair restoration protocols.",
      features: [
        "Advanced medical laser treatments",
        "PRP & Growth factor scalp therapy",
        "Personalized skincare formulations",
      ],
      link: "/departments",
    },
    {
      id: 5,
      tag: "Joints & Mobility",
      icon: "fas fa-bone",
      iconColor: "#009890",
      title: "Arthroscopic Joint Care & Orthopaedics",
      description:
        "Advanced surgical and non-surgical restoration of knees, hips, and shoulders, sports medicine rehabilitation, and minimally invasive fracture trauma care.",
      features: [
        "Minimally invasive arthroscopy",
        "Customized joint rehabilitation",
        "High-resolution digital diagnostics",
      ],
      link: "/departments",
    },
    {
      id: 6,
      tag: "Pediatrics & NICU",
      icon: "fas fa-baby",
      iconColor: "#74A135",
      title: "Neonatal Intensive Care & Pediatric Wellness",
      description:
        "Specialized warmers, modern neonatal ventilators, and round-the-clock pediatricians dedicated to premature infants and routine childhood growth management.",
      features: [
        "Dedicated Level-III Neonatal ICU",
        "Complete newborn vaccination series",
        "Pediatric emergency team on-call",
      ],
      link: "/services",
    },
  ];

  return (
    <section className="unique-treatments-section">
      <div className="ut-bg-accent" aria-hidden="true" />

      <div className="auto-container">
        {/* Section Header */}
        <div className="ut-head">
          <div className="ut-badge">
            <i className="fas fa-award"></i>
            <span>Our Unique Treatments</span>
          </div>

          <h2 className="ut-title">
            Specialized Care Built Around <span>Clinical Outcomes</span>
          </h2>

          <p className="ut-subtitle">
            Combining state-of-the-art medical technology, ISO cleanroom
            embryology laboratories, and compassionate clinical specialists to
            deliver individualized care across every milestone of healing.
          </p>
        </div>

        {/* Treatments grid */}
        <div className="ut-grid">
          {treatments.map((item) => (
            <div className="ut-card reveal-item" key={item.id}>
              <div className="ut-card-top">
                <div
                  className="ut-card-icon"
                  style={{
                    background:
                      item.iconColor === "#009890"
                        ? "rgba(0, 152, 144, 0.1)"
                        : "rgba(116, 161, 53, 0.12)",
                    color: item.iconColor,
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <span className="ut-card-tag">{item.tag}</span>
              </div>

              <h3 className="ut-card-title">
                <Link href={item.link}>{item.title}</Link>
              </h3>

              <p className="ut-card-desc">{item.description}</p>

              <ul className="ut-card-features">
                {item.features.map((feat, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="ut-card-footer">
                <Link href={item.link} className="ut-card-link">
                  <span>Learn Details</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/appointment" className="ut-card-cta">
                  Book Visit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .unique-treatments-section {
          position: relative;
          background: #f8faf9;
          padding: 95px 0 85px 0;
          overflow: hidden;
          font-family: var(--text-font);
        }

        .ut-bg-accent {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 152, 144, 0.06) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* Header */
        .ut-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px auto;
        }

        .ut-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 30px;
          background: rgba(0, 152, 144, 0.08);
          border: 1px solid rgba(0, 152, 144, 0.22);
          color: #009890;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .ut-badge i {
          color: #74a135;
          font-size: 13px;
        }

        .ut-title {
          font-family: var(--title-font);
          font-size: 36px;
          font-weight: 800;
          color: #0c3e3a;
          line-height: 1.25;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .ut-title span {
          color: #009890;
        }

        .ut-subtitle {
          color: #556b69;
          font-size: 15px;
          line-height: 26px;
          margin: 0 auto;
        }

        /* Grid */
        .ut-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ut-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(0, 152, 144, 0.1);
          padding: 26px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .ut-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0, 152, 144, 0.1);
          border-color: rgba(0, 152, 144, 0.22);
        }

        .ut-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ut-card-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          flex-shrink: 0;
        }

        .ut-card-tag {
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #74a135;
        }

        .ut-card-title {
          font-family: var(--title-font);
          font-size: 18px;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 10px;
        }

        .ut-card-title a {
          color: #0c3e3a;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ut-card-title a:hover {
          color: #009890;
        }

        .ut-card-desc {
          color: #556b69;
          font-size: 13.5px;
          line-height: 22px;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .ut-card-features {
          list-style: none;
          padding: 14px 0 0 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .ut-card-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #2b4240;
          font-weight: 500;
        }

        .ut-card-features li i {
          color: #009890;
          font-size: 11px;
          flex-shrink: 0;
        }

        .ut-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .ut-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #009890;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .ut-card-link:hover {
          gap: 10px;
          color: #0c3e3a;
        }

        .ut-card-cta {
          display: inline-flex;
          align-items: center;
          background: #eef7f6;
          color: #009890;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .ut-card-cta:hover {
          background: #009890;
          color: #ffffff;
        }

        /* Responsive */
        @media only screen and (max-width: 991px) {
          .unique-treatments-section {
            padding: 70px 0;
          }

          .ut-title {
            font-size: 28px;
          }

          .ut-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (max-width: 575px) {
          .ut-title {
            font-size: 24px;
          }

          .ut-grid {
            grid-template-columns: 1fr;
          }

          .ut-card {
            padding: 22px 20px;
          }
        }
      `}</style>
    </section>
  );
}