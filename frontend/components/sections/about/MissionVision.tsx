"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MissionVision() {
  const values = [
    { label: "Compassion First", icon: "❤️" },
    { label: "Clinical Excellence", icon: "🩺" },
    { label: "Integrity & Trust", icon: "🤝" },
    { label: "Advanced Technology", icon: "🔬" },
    { label: "Patient Well-Being", icon: "🌱" },
  ];

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Respect users who've asked for less motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mission-vision-section p_relative${inView ? " is-in-view" : ""}`}
    >
      {/* Subtle Medical Pattern Background */}
      <div className="mv-bg-layer" />

      <div className="auto-container p_relative mv-z-index">
        {/* Section Header */}
        <div className="sec-title centred mb_50 mv-reveal mv-reveal-1">
          <div className="mv-kicker">
            <span className="mv-kicker-dot" />
            <span>Guiding Principles &amp; Purpose</span>
          </div>
          <h2 className="mv-main-title">
            Our <span className="text-teal">Mission</span> &amp;{" "}
            <span className="text-teal">Vision</span>
          </h2>
          <p className="mv-main-subtitle">
            Dedicated to clinical distinction, ethical practice, and the timeless
            promise of bringing hope and new life to families.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="mv-grid">
          {/* VISION CARD — inverted, dark treatment so it reads as the "north star" */}
          <div className="mv-card vision-card mv-reveal mv-reveal-from-left mv-reveal-2">
            <div className="vision-glow" aria-hidden="true" />

            <div className="card-top-bar">
              <div className="card-icon-bubble vision-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M6.34 17.66l-1.41 1.41 M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <span className="card-badge vision-badge">Our Vision</span>
            </div>

            <h3 className="card-title vision-title">Pioneering Hope &amp; Life</h3>

            <p className="card-statement vision-statement">
              To be recognized as the most trusted and advanced center of
              excellence in fertility medicine and multi-speciality healthcare in
              South India—celebrated for transformative clinical success, revolutionary
              embryology labs, and unwavering patient empathy.
            </p>

            <ul className="card-points">
              {[
                "Pioneering high-success IVF & reproductive science",
                "Setting benchmark standards in ethical and transparent clinical care",
                "Empowering patients through advanced diagnostic precision",
              ].map((text, i) => (
                <li key={i} style={{ transitionDelay: `${0.15 + i * 0.08}s` }}>
                  <span className="point-check vision-check">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="card-watermark vision-watermark" aria-hidden="true">
              👁️
            </div>
          </div>

          {/* MISSION CARD — warm, light treatment: the "how" beside the vision's "what" */}
          <div className="mv-card mission-card mv-reveal mv-reveal-from-right mv-reveal-3">
            <div className="card-top-bar">
              <div className="card-icon-bubble mission-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="card-badge mission-badge">Our Mission</span>
            </div>

            <h3 className="card-title">Healing with Compassion</h3>

            <p className="card-statement">
              To provide world-class, affordable, and personalized healthcare
              solutions by blending cutting-edge medical technologies with heartfelt
              compassion—ensuring every individual and aspiring parent receives the
              highest quality of dedicated treatment.
            </p>

            <ul className="card-points">
              {[
                "Individualized treatment protocols with tailored care plans",
                "Compassionate guidance and psychological support at every stage",
                "24/7 accessible emergency and multi-speciality patient support",
              ].map((text, i) => (
                <li key={i} style={{ transitionDelay: `${0.15 + i * 0.08}s` }}>
                  <span className="point-check">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="card-watermark mission-watermark" aria-hidden="true">
              🩺
            </div>
          </div>
        </div>

        {/* CORE VALUES BAR */}
        <div className="mv-values-bar mv-reveal mv-reveal-4">
          <span className="values-title">Our Core Values:</span>
          <div className="values-list">
            {values.map((v, i) => (
              <div
                className="value-item"
                key={i}
                style={{ transitionDelay: `${0.35 + i * 0.07}s` }}
              >
                <span className="value-icon">{v.icon}</span>
                <span className="value-label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-vision-section {
          padding: 60px 0 80px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f6fbfb 100%);
          position: relative;
          overflow: hidden;
        }

        .mv-bg-layer {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              circle at 10% 20%,
              rgba(0, 152, 144, 0.04) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(116, 161, 53, 0.04) 0%,
              transparent 40%
            );
          pointer-events: none;
        }

        .mv-z-index {
          position: relative;
          z-index: 2;
        }

        /* ---------------------------------------------- */
        /* Orchestrated scroll reveal — one sequence, four beats */
        /* ---------------------------------------------- */
        .mv-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mv-reveal-from-left {
          transform: translate(-28px, 14px);
        }

        .mv-reveal-from-right {
          transform: translate(28px, 14px);
        }

        .is-in-view .mv-reveal {
          opacity: 1;
          transform: translate(0, 0);
        }

        .is-in-view .mv-reveal-1 {
          transition-delay: 0s;
        }
        .is-in-view .mv-reveal-2 {
          transition-delay: 0.12s;
        }
        .is-in-view .mv-reveal-3 {
          transition-delay: 0.22s;
        }
        .is-in-view .mv-reveal-4 {
          transition-delay: 0.4s;
        }

        .card-points li {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .is-in-view .card-points li {
          opacity: 1;
          transform: translateY(0);
        }

        .value-item {
          opacity: 0;
          transform: translateY(8px) scale(0.96);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .is-in-view .value-item {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .mv-reveal,
          .mv-reveal-from-left,
          .mv-reveal-from-right,
          .card-points li,
          .value-item {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        /* Header */
        .mv-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 152, 144, 0.08);
          border: 1px solid rgba(0, 152, 144, 0.18);
          color: #007670;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 16px;
        }

        .mv-kicker-dot {
          width: 8px;
          height: 8px;
          background: #009890;
          border-radius: 50%;
          animation: mv-pulse-dot 2.4s ease-in-out infinite;
        }

        @keyframes mv-pulse-dot {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(0, 152, 144, 0.45);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(0, 152, 144, 0);
          }
        }

        .mv-main-title {
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          letter-spacing: -0.4px;
          line-height: 1.28;
          margin: 0 0 14px 0;
        }

        .text-teal {
          color: #009890;
        }

        .mv-main-subtitle {
          font-size: 16px;
          color: #556b69;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* 2-Column Cards Grid */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1140px;
          margin: 0 auto 40px auto;
          align-items: stretch;
        }

        .mv-card {
          position: relative;
          border-radius: 20px;
          padding: 38px 34px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .mv-card:hover {
          transform: translateY(-6px);
        }

        /* ---------------------------------------------- */
        /* Vision card — inverted dark treatment, the "north star" */
        /* ---------------------------------------------- */
        .vision-card {
          background: linear-gradient(155deg, #063d38 0%, #0a5650 55%, #0d6b63 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 50px rgba(3, 34, 31, 0.35), 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .vision-card:hover {
          box-shadow: 0 28px 64px rgba(3, 34, 31, 0.45), 0 4px 14px rgba(0, 0, 0, 0.12);
          border-color: rgba(32, 199, 188, 0.4);
        }

        .vision-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(32, 199, 188, 0.35) 0%, transparent 70%);
          filter: blur(10px);
          pointer-events: none;
          transition: transform 0.6s ease;
        }

        .vision-card:hover .vision-glow {
          transform: scale(1.15);
        }

        .mission-card {
          background: #fffdf8;
          border: 1px solid rgba(116, 161, 53, 0.16);
          box-shadow: 0 16px 40px rgba(0, 45, 42, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .mission-card:hover {
          box-shadow: 0 24px 50px rgba(0, 45, 42, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05);
          border-color: rgba(116, 161, 53, 0.32);
        }

        .vision-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #20c7bc, #9cf0e8, #20c7bc);
          background-size: 200% 100%;
          animation: mv-shimmer 5s linear infinite;
        }

        .mission-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #74a135, #9cd943);
        }

        @keyframes mv-shimmer {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
          position: relative;
          z-index: 1;
        }

        .card-icon-bubble {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mv-card:hover .card-icon-bubble {
          transform: scale(1.08) rotate(-6deg);
        }

        .vision-icon {
          background: rgba(255, 255, 255, 0.12);
          color: #7cf0e6;
          backdrop-filter: blur(4px);
        }

        .mission-icon {
          background: #f1f8e8;
          color: #618f26;
        }

        .card-badge {
          font-size: 12px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 20px;
          position: relative;
          z-index: 1;
        }

        .vision-badge {
          background: rgba(255, 255, 255, 0.12);
          color: #a9f5ec;
        }

        .mission-badge {
          background: #f1f8e8;
          color: #558021;
        }

        .card-title {
          font-size: 21px;
          font-weight: 700;
          color: #122928;
          margin: 0 0 12px 0;
          letter-spacing: -0.3px;
          position: relative;
          z-index: 1;
        }

        .vision-title {
          color: #f4fffd;
        }

        .card-statement {
          font-size: 15px;
          line-height: 1.7;
          color: #4a5d5b;
          margin: 0 0 22px 0;
          font-weight: 400;
          position: relative;
          z-index: 1;
          text-align: justify;
          text-justify: inter-word;
        }

        .vision-statement {
          color: #cdeeea;
        }

        /* List points */
        .card-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .card-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          line-height: 1.5;
          color: #2b3d3b;
          font-weight: 500;
        }

        .vision-card .card-points li {
          color: #e4f8f5;
        }

        .point-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #e6f7f6;
          color: #009890;
          flex-shrink: 0;
          margin-top: 1px;
          transition: transform 0.3s ease;
        }

        .card-points li:hover .point-check {
          transform: scale(1.15);
        }

        .mission-card .point-check {
          background: #f1f8e8;
          color: #618f26;
        }

        .vision-check {
          background: rgba(255, 255, 255, 0.14);
          color: #7cf0e6;
        }

        .card-watermark {
          position: absolute;
          bottom: 12px;
          right: 18px;
          font-size: 64px;
          opacity: 0.08;
          pointer-events: none;
          user-select: none;
          animation: mv-float 5s ease-in-out infinite;
        }

        .mission-watermark {
          opacity: 0.06;
        }

        @keyframes mv-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Values Bar */
        .mv-values-bar {
          max-width: 1140px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 28px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
          border: 1px solid rgba(0, 152, 144, 0.12);
          box-shadow: 0 8px 24px rgba(0, 45, 42, 0.04);
        }

        .values-title {
          font-size: 14px;
          font-weight: 700;
          color: #007670;
          letter-spacing: 0.3px;
        }

        .values-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .value-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: #2c3e3c;
          background: #f7fbfb;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(0, 152, 144, 0.1);
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        .value-item:hover {
          transform: translateY(-3px);
          background: #eef8f7;
          border-color: rgba(0, 152, 144, 0.3);
        }

        .value-icon {
          font-size: 15px;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .value-item:hover .value-icon {
          transform: scale(1.25) rotate(-8deg);
        }

        /* Responsive */
        @media only screen and (max-width: 991px) {
          .mission-vision-section {
            padding: 50px 0 60px 0;
          }

          .mv-main-title {
            font-size: 36px;
          }

          .mv-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .mv-card {
            padding: 30px 24px;
          }

          .mv-values-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .values-list {
            gap: 10px;
          }
        }

        @media only screen and (max-width: 575px) {
          .mv-main-title {
            font-size: 28px;
          }

          .card-title {
            font-size: 22px;
          }

          .value-item {
            font-size: 12.5px;
            padding: 5px 10px;
          }
        }
      `}</style>
    </section>
  );
}