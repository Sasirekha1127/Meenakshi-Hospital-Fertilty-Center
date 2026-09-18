"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorSpotlight() {
  const stats = [
    { value: "18+", label: "Years in practice" },
    { value: "8,000+", label: "Patients seen" },
    { value: "Board", label: "Certified dermatologist" },
  ];

  const focusAreas = [
    "Acne & scar therapy",
    "Hair loss & scalp care",
    "Skin rejuvenation",
  ];

  return (
    <section className="ds">
      <div className="auto-container">
        <div className="ds-grid">
          {/* Content column — left */}
          <div className="ds-content">
            <p className="ds-tag">A dermatologist your skin can trust</p>

            <h2 className="ds-name">Dr. Ananya Menon</h2>
            <div className="ds-role">Lead Consultant, Dermatology &amp; Aesthetics</div>

            <p className="ds-bio">
              Skin concerns rarely arrive on a schedule, so consultations here
              start with listening, not a checklist. Dr. Menon builds a plan
              around your skin&apos;s history, not a generic protocol — combining
              clinical dermatology with honest, unhurried advice.
            </p>

            <ul className="ds-focus">
              {focusAreas.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="ds-stats">
              {stats.map((s, i) => (
                <div className="ds-stat" key={i}>
                  <div className="ds-stat-value">{s.value}</div>
                  <div className="ds-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column — right */}
          <div className="ds-visual">
            <svg className="ds-blob" viewBox="0 0 520 560" aria-hidden="true">
              <path
                d="M256 20C356 8 452 62 486 154C520 246 500 340 440 412C380 484 288 540 196 528C104 516 40 448 20 356C0 264 24 156 96 92C140 53 196 27 256 20Z"
                fill="#EAF3F0"
              />
            </svg>

            <div className="ds-portrait-wrap">
              <Image
                src="/assets/images/gallery/doctor.png"
                alt="Dr. Ananya Menon, Lead Consultant Dermatology & Aesthetics"
                fill
                className="ds-portrait"
                sizes="(max-width: 991px) 60vw, 320px"
                priority
              />
            </div>

            <div className="ds-ticks" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ds {
          background: #fcfbf8;
          padding: 96px 0;
          font-family: var(--text-font);
        }

        .ds-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 64px;
        }

        /* Content column — left aligned */
        .ds-content {
          text-align: left;
        }

        .ds-tag {
          color: #c1553b;
          font-weight: 600;
          font-size: 14.5px;
          margin: 0 0 14px 0;
        }

        .ds-name {
          font-family: var(--title-font);
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          line-height: 1.25;
          margin: 0 0 8px 0;
        }

        .ds-role {
          font-size: 15.5px;
          font-weight: 600;
          color: #55655f;
          margin-bottom: 22px;
        }

        .ds-bio {
          color: #45524d;
          font-size: 15.5px;
          line-height: 27px;
          margin: 0 0 24px 0;
          max-width: 52ch;
        }

        .ds-focus {
          list-style: none;
          margin: 0 0 32px 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ds-focus li {
          position: relative;
          padding-left: 20px;
          color: #1b2421;
          font-size: 14.5px;
          font-weight: 500;
        }

        .ds-focus li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0b4f49;
        }

        .ds-stats {
          display: flex;
          gap: 0;
          margin-bottom: 36px;
        }

        .ds-stat {
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(27, 36, 33, 0.12);
        }

        .ds-stat:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }

        .ds-stat-value {
          font-family: var(--title-font);
          font-size: 20px;
          font-weight: 700;
          color: #0b4f49;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .ds-stat-label {
          font-size: 12.5px;
          font-weight: 500;
          color: #55655f;
        }

        .ds-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .ds-btn-primary {
          background: #009890;
          color: #ffffff;
          font-weight: 600;
          font-size: 14.5px;
          padding: 14px 30px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .ds-btn-primary:hover {
          background: #007d76;
        }

        .ds-btn-secondary {
          color: #1b2421;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Visual column */
        .ds-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 480px;
        }

        .ds-blob {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .ds-portrait-wrap {
          position: relative;
          z-index: 1;
          width: 62%;
          max-width: 300px;
          aspect-ratio: 4 / 5;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 28px 56px rgba(11, 79, 73, 0.18);
        }

        .ds-portrait {
          object-fit: cover;
        }

        .ds-note {
          position: absolute;
          bottom: 8%;
          left: 4%;
          z-index: 2;
          background: #ffffff;
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 16px 32px rgba(27, 36, 33, 0.14);
        }

        .ds-note-value {
          font-family: var(--title-font);
          font-size: 20px;
          font-weight: 700;
          color: #0b4f49;
        }

        .ds-note-label {
          font-size: 11px;
          font-weight: 500;
          color: #55655f;
          margin-top: 2px;
        }

        .ds-ticks {
          position: absolute;
          top: 6%;
          right: 4%;
          z-index: 2;
          display: flex;
          gap: 6px;
        }

        .ds-ticks span {
          width: 3px;
          height: 22px;
          border-radius: 2px;
          background: #c1553b;
          opacity: 0.55;
        }

        .ds-ticks span:nth-child(2n) {
          height: 14px;
          opacity: 0.3;
        }

        /* Responsive */
        @media only screen and (max-width: 991px) {
          .ds {
            padding: 64px 0;
          }

          .ds-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .ds-visual {
            order: -1;
            max-width: 360px;
            margin: 0 auto;
            min-height: 420px;
          }

          .ds-content {
            text-align: center;
          }

          .ds-bio {
            margin-left: auto;
            margin-right: auto;
          }

          .ds-focus {
            align-items: center;
          }

          .ds-stats,
          .ds-actions {
            justify-content: center;
          }
        }

        @media only screen and (max-width: 575px) {
          .ds-name {
            font-size: 30px;
          }

          .ds-stats {
            flex-wrap: wrap;
            gap: 18px;
          }

          .ds-stat {
            border-right: none;
            margin-right: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
}