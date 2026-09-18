"use client";

import React, { useState, useEffect, useRef } from "react";

interface Milestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
  highlight?: boolean;
}

const milestonesData: Milestone[] = [
  {
    year: "2021",
    badge: "Speciality Foundation",
    title: "Advanced Fertility & IVF Wing Inauguration",
    description:
      "Commissioned dedicated Class-10,000 modular cleanroom embryology laboratories and expanded reproductive medicine care in Dharmapuri.",
    metric: "1,200+",
    metricLabel: "Couples Guided",
    icon: "🏥",
  },
  {
    year: "2022",
    badge: "High-Precision Tech",
    title: "Laser Hatching & Cryopreservation Suites",
    description:
      "Integrated micro-manipulation systems, advanced laser-assisted hatching, and high-security vitrification tanks for maximized embryo viability.",
    metric: "88.4%",
    metricLabel: "Clinical Success Rate",
    icon: "🔬",
  },
  {
    year: "2023",
    badge: "Clinical Expansion",
    title: "Multi-Speciality & NICU Upgrade",
    description:
      "Expanded minimally invasive laparoscopic OT units, 24/7 emergency care, and advanced Neonatal Intensive Care Unit (NICU) for high-risk maternal support.",
    metric: "5,000+",
    metricLabel: "Inpatient Treatments",
    icon: "🩺",
  },
  {
    year: "2024",
    badge: "Genetics & Research",
    title: "AI Embryo Screening & PGT-A Genetic Lab",
    description:
      "Introduced pre-implantation genetic testing (PGT-A) and AI-guided embryo morphokinetic monitoring to significantly elevate implantation outcomes.",
    metric: "State Award",
    metricLabel: "Healthcare Distinction",
    icon: "🧬",
  },
  {
    year: "2025",
    badge: "Modern Infrastructure",
    title: "100+ Bed Inpatient & Maternal Suites",
    description:
      "Unveiled state-of-the-art maternal care suites, private recovery lounges, and comprehensive holistic counseling departments.",
    metric: "12,000+",
    metricLabel: "Successful Deliveries",
    icon: "🌟",
  },
  {
    year: "2026",
    badge: "Present & Future",
    title: "Regional Center of Excellence",
    description:
      "Celebrating 15,000+ happy families with extended regional telemedicine, digital patient records, and next-generation reproductive therapies.",
    metric: "15,000+",
    metricLabel: "Happy Families & Growing",
    icon: "🏆",
    highlight: true,
  },
];

export default function YearOnYearTimeline() {
  const [activeYear, setActiveYear] = useState<string>("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Keep each milestone's original index so its left/right placement on the
  // spine never shifts when the year filter narrows the list down.
  const indexedMilestones = milestonesData.map((m, i) => ({ ...m, originalIndex: i }));
  const visibleMilestones =
    activeYear === "all"
      ? indexedMilestones
      : indexedMilestones.filter((m) => m.year === activeYear);

  // Drive the spine line's fill (and which nodes are "lit") off actual
  // scroll position, so the line visibly travels down as the person scrolls
  // through the timeline instead of just fading in once.
  useEffect(() => {
    const track = trackRef.current;
    const line = progressLineRef.current;
    if (!track || !line) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      line.style.height = "100%";
      nodeRefs.current.forEach((n) => n?.classList.add("node-active"));
      return;
    }

    // trim stale refs from a previous, longer filtered list
    rowRefs.current = rowRefs.current.slice(0, visibleMilestones.length);
    nodeRefs.current = nodeRefs.current.slice(0, visibleMilestones.length);

    let ticking = false;

    const update = () => {
      ticking = false;
      const trackRect = track.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // 0 when the track's top has just entered the bottom of the viewport,
      // 1 once the track has fully scrolled past the top of the viewport
      const raw =
        (viewportH - trackRect.top) / (trackRect.height + viewportH);
      const progress = Math.min(1, Math.max(0, raw));
      const filledPx = progress * trackRect.height;

      line.style.height = `${filledPx}px`;

      rowRefs.current.forEach((rowEl, i) => {
        const nodeEl = nodeRefs.current[i];
        if (!rowEl || !nodeEl) return;
        const nodeCenter = rowEl.offsetTop + rowEl.offsetHeight / 2;
        nodeEl.classList.toggle("node-active", filledPx >= nodeCenter);
      });
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [visibleMilestones.length]);

  return (
    <section
      ref={sectionRef}
      className={`yoy-timeline-section p_relative${inView ? " is-in-view" : ""}`}
    >
      <div className="yoy-bg-decor" aria-hidden="true">
        <div className="yoy-glow-1" />
        <div className="yoy-glow-2" />
      </div>

      <div className="auto-container p_relative yoy-z-index">
        {/* Section Header */}
        <div className="sec-title centred mb_45 yoy-reveal yoy-reveal-1">
          <div className="yoy-kicker">
            <span className="yoy-kicker-pulse" />
            <span>Our Journey &amp; Milestones</span>
          </div>
          <h2 className="yoy-title">
            Year-on-Year <span className="text-teal">Growth</span> (2021 – 2026)
          </h2>
          <p className="yoy-subtitle">
            A chronological timeline of transformative medical advancements,
            infrastructure expansion, and clinical milestones that shaped Meenakshi
            Hospital &amp; Fertility Centre.
          </p>
        </div>

        {/* Year Selector Navigation Bar */}
        <div className="yoy-nav-bar yoy-reveal yoy-reveal-2">
          <button
            type="button"
            className={`year-filter-btn ${activeYear === "all" ? "active" : ""}`}
            onClick={() => setActiveYear("all")}
          >
            All Years
          </button>
          {milestonesData.map((m) => (
            <button
              key={m.year}
              type="button"
              className={`year-filter-btn ${activeYear === m.year ? "active" : ""} ${
                m.highlight ? "highlight-year" : ""
              }`}
              onClick={() => setActiveYear(m.year)}
            >
              <span className="year-num">{m.year}</span>
              {m.highlight && <span className="year-pill-dot" />}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div
          className="yoy-timeline-track yoy-reveal yoy-reveal-3"
          ref={trackRef}
        >
          <div className="timeline-progress-line" ref={progressLineRef}>
            <span className="progress-dot" />
          </div>

          {visibleMilestones.map((item, idx) => {
            const side = item.originalIndex % 2 === 0 ? "left" : "right";
            return (
              <div
                key={item.year}
                className={`timeline-row side-${side}${
                  item.highlight ? " row-highlight" : ""
                }`}
                style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
                ref={(el) => {
                  rowRefs.current[idx] = el;
                }}
              >
                {/* Content sits on the "left" grid column for left-side rows */}
                <div className="timeline-content content-left">
                  {side === "left" && (
                    <MilestoneCard item={item} align="right" />
                  )}
                </div>

                {/* Spine node */}
                <div className="timeline-node-col">
                  <div
                    className={`timeline-node ${item.highlight ? "node-highlight" : ""}`}
                    ref={(el) => {
                      nodeRefs.current[idx] = el;
                    }}
                  >
                    <span className="node-icon">{item.icon}</span>
                  </div>
                  <span className="node-year">{item.year}</span>
                </div>

                <div className="timeline-content content-right">
                  {side === "right" && (
                    <MilestoneCard item={item} align="left" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Achievement Summary Bar */}
        <div className="yoy-summary-bar yoy-reveal yoy-reveal-4">
          <div className="summary-item">
            <span className="summary-num">5+</span>
            <span className="summary-text">Years of Progressive Transformation</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-item">
            <span className="summary-num">100%</span>
            <span className="summary-text">Compliance to ICMR Guidelines</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-item">
            <span className="summary-num">15,000+</span>
            <span className="summary-text">Lives Impacted by 2026</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .yoy-timeline-section {
          padding: 70px 0 85px 0;
          background: #fbfdfd;
          position: relative;
          overflow: hidden;
        }

        .yoy-bg-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .yoy-glow-1 {
          position: absolute;
          top: 10%;
          left: -5%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 152, 144, 0.08) 0%, transparent 70%);
          filter: blur(40px);
        }

        .yoy-glow-2 {
          position: absolute;
          bottom: 10%;
          right: -5%;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.08) 0%, transparent 70%);
          filter: blur(40px);
        }

        .yoy-z-index {
          position: relative;
          z-index: 2;
        }

        /* Reveal Animations */
        .yoy-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .is-in-view .yoy-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .is-in-view .yoy-reveal-1 {
          transition-delay: 0.05s;
        }
        .is-in-view .yoy-reveal-2 {
          transition-delay: 0.15s;
        }
        .is-in-view .yoy-reveal-3 {
          transition-delay: 0.25s;
        }
        .is-in-view .yoy-reveal-4 {
          transition-delay: 0.38s;
        }

        @media (prefers-reduced-motion: reduce) {
          .yoy-reveal,
          .timeline-row {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* Section Header */
        .yoy-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 152, 144, 0.08);
          border: 1px solid rgba(0, 152, 144, 0.18);
          color: #007670;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 14px;
        }

        .yoy-kicker-pulse {
          width: 8px;
          height: 8px;
          background: #009890;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.2);
          animation: pulseDot 2.2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.6;
          }
        }

        .yoy-title {
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          letter-spacing: -0.4px;
          line-height: 1.28;
          margin: 0 0 12px 0;
        }

        .text-teal {
          color: #009890;
        }

        .yoy-subtitle {
          font-size: 15.5px;
          color: #556b69;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Year Nav Bar */
        .yoy-nav-bar {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 56px;
          padding: 10px;
        }

        .year-filter-btn {
          position: relative;
          background: #ffffff;
          border: 1.5px solid rgba(0, 152, 144, 0.16);
          color: #3e5250;
          font-size: 14px;
          font-weight: 700;
          padding: 9px 20px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 45, 42, 0.04);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .year-filter-btn:hover {
          border-color: #009890;
          color: #007670;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 152, 144, 0.15);
        }

        .year-filter-btn.active {
          background: #009890;
          border-color: #009890;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 152, 144, 0.3);
          transform: translateY(-2px);
        }

        .year-pill-dot {
          width: 6px;
          height: 6px;
          background: #8ec443;
          border-radius: 50%;
        }

        /* ---------------------------------------------- */
        /* Vertical alternating timeline (replaces card grid) */
        /* ---------------------------------------------- */
        .yoy-timeline-track {
          position: relative;
          max-width: 1080px;
          margin: 0 auto 48px auto;
        }

        .yoy-timeline-track::before {
          content: "";
          position: absolute;
          top: 4px;
          bottom: 4px;
          left: 50%;
          width: 3px;
          transform: translateX(-50%);
          background: rgba(0, 152, 144, 0.12);
          border-radius: 4px;
        }

        /* Scroll-driven fill: height is set directly via JS as the person
           scrolls, so the line visibly travels down the spine */
        .timeline-progress-line {
          position: absolute;
          top: 4px;
          left: 50%;
          width: 3px;
          height: 0px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #20c7bc 0%, #009890 100%);
          border-radius: 4px;
          z-index: 1;
          box-shadow: 0 0 12px rgba(0, 152, 144, 0.35);
          transition: height 0.05s linear;
        }

        .progress-dot {
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #20c7bc;
          transform: translateX(-50%);
          box-shadow: 0 0 0 5px rgba(32, 199, 188, 0.25), 0 0 14px rgba(32, 199, 188, 0.6);
        }

        .timeline-row {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 88px 1fr;
          align-items: center;
          column-gap: 22px;
          padding: 26px 0;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .side-left {
          transform: translateX(-26px);
        }

        .side-right {
          transform: translateX(26px);
        }

        .is-in-view .timeline-row {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-content {
          min-width: 0;
        }

        .content-left {
          display: flex;
          justify-content: flex-end;
        }

        .content-right {
          display: flex;
          justify-content: flex-start;
        }

        /* Node column */
        .timeline-node-col {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }

        .timeline-node {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid rgba(0, 152, 144, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 6px 16px rgba(0, 45, 42, 0.1);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
        }

        /* Muted icon look before the scroll-line reaches this node, without
           touching the circle's own opacity (that would let the spine
           line show through the white disc) */
        .timeline-node .node-icon {
          filter: grayscale(0.5) opacity(0.75);
          transition: filter 0.4s ease;
        }

        .timeline-node.node-active .node-icon {
          filter: none;
        }

        .timeline-row:hover .timeline-node {
          transform: scale(1.1);
        }

        /* Lit up once the scroll-driven line reaches this node */
        .timeline-node.node-active {
          border-color: #009890;
          background: #ecfaf9;
          box-shadow: 0 0 0 6px rgba(0, 152, 144, 0.14), 0 8px 20px rgba(0, 45, 42, 0.14);
          transform: scale(1.05);
        }

        .node-highlight {
          background: linear-gradient(155deg, #094742 0%, #0d6b63 100%);
          border-color: #20c7bc;
          box-shadow: 0 0 0 6px rgba(32, 199, 188, 0.16), 0 10px 24px rgba(9, 71, 66, 0.3);
          animation: node-pulse 2.6s ease-in-out infinite;
        }

        @keyframes node-pulse {
          0%, 100% {
            box-shadow: 0 0 0 6px rgba(32, 199, 188, 0.16), 0 10px 24px rgba(9, 71, 66, 0.3);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(32, 199, 188, 0.08), 0 10px 24px rgba(9, 71, 66, 0.3);
          }
        }

        .node-year {
          font-size: 13px;
          font-weight: 800;
          color: #007670;
          background: #eef8f7;
          padding: 2px 10px;
          border-radius: 12px;
          white-space: nowrap;
        }

        .row-highlight .node-year {
          background: #0d5c55;
          color: #6ef3e7;
        }

        /* Milestone content panel */
        .yoy-panel {
          position: relative;
          background: #ffffff;
          border-radius: 16px;
          padding: 22px 24px;
          border: 1.5px solid rgba(0, 152, 144, 0.12);
          box-shadow: 0 10px 26px rgba(0, 45, 42, 0.05);
          max-width: 420px;
          width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .timeline-row:hover .yoy-panel {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(0, 45, 42, 0.1);
          border-color: rgba(0, 152, 144, 0.3);
        }

        /* Little connector nub pointing at the spine */
        .yoy-panel::after {
          content: "";
          position: absolute;
          top: 24px;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border: 1.5px solid rgba(0, 152, 144, 0.12);
          transform: rotate(45deg);
        }

        .panel-align-right::after {
          right: -7px;
          border-left: none;
          border-bottom: none;
        }

        .panel-align-left::after {
          left: -7px;
          border-right: none;
          border-top: none;
        }

        .panel-highlight {
          background: linear-gradient(165deg, #094742 0%, #0d5c55 55%, #106b63 100%);
          border-color: rgba(32, 199, 188, 0.35);
          box-shadow: 0 18px 40px rgba(9, 71, 66, 0.26);
        }

        .panel-highlight::after {
          background: #0d5c55;
          border-color: rgba(32, 199, 188, 0.35);
        }

        .panel-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .panel-badge {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 20px;
          background: #eef8f7;
          color: #007670;
        }

        .panel-highlight .panel-badge {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .panel-title {
          font-size: 17px;
          font-weight: 700;
          color: #122928;
          line-height: 1.35;
          margin: 0 0 10px 0;
        }

        .panel-highlight .panel-title {
          color: #ffffff;
        }

        .panel-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: #556b69;
          margin: 0 0 16px 0;
          text-align: justify;
          text-justify: inter-word;
        }

        .panel-highlight .panel-desc {
          color: #d1f3ef;
        }

        .panel-metric {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          background: #f7fbfb;
          border: 1px solid rgba(0, 152, 144, 0.1);
          border-radius: 10px;
          padding: 8px 14px;
        }

        .panel-highlight .panel-metric {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .metric-val {
          font-size: 15px;
          font-weight: 800;
          color: #007670;
        }

        .panel-highlight .metric-val {
          color: #6ef3e7;
        }

        .metric-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #627b78;
        }

        .panel-highlight .metric-label {
          color: #e2f9f6;
        }

        /* Summary Bar */
        .yoy-summary-bar {
          max-width: 1140px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          padding: 18px 32px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border: 1px solid rgba(0, 152, 144, 0.14);
          box-shadow: 0 10px 28px rgba(0, 45, 42, 0.05);
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .summary-num {
          font-size: 22px;
          font-weight: 700;
          color: #009890;
          line-height: 1;
        }

        .summary-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #2c3e3c;
        }

        .summary-divider {
          width: 1px;
          height: 32px;
          background: rgba(0, 152, 144, 0.15);
        }

        /* Responsive: collapse spine to the left edge, single column */
        @media only screen and (max-width: 900px) {
          .yoy-timeline-track::before {
            left: 27px;
          }

          .timeline-row {
            grid-template-columns: 56px 1fr;
            column-gap: 16px;
          }

          .timeline-node-col {
            grid-row: 1;
            grid-column: 1;
          }

          /* Whichever side holds the panel (left rows use content-left,
             right rows use content-right), pull it into the single
             visible column next to the spine */
          .content-left,
          .content-right {
            grid-row: 1;
            grid-column: 2;
            justify-content: flex-start;
          }

          .panel-align-right::after,
          .panel-align-left::after {
            left: -7px;
            right: auto;
            border-right: none;
            border-top: none;
            border-left: 1.5px solid rgba(0, 152, 144, 0.12);
            border-bottom: 1.5px solid rgba(0, 152, 144, 0.12);
          }

          .yoy-panel {
            max-width: 100%;
          }

          .node-year {
            display: none;
          }
        }

        @media only screen and (max-width: 991px) {
          .yoy-timeline-section {
            padding: 55px 0 65px 0;
          }

          .yoy-title {
            font-size: 34px;
          }

          .yoy-summary-bar {
            flex-direction: column;
            gap: 14px;
            align-items: flex-start;
            padding: 20px 24px;
          }

          .summary-divider {
            display: none;
          }
        }

        @media only screen and (max-width: 575px) {
          .yoy-title {
            font-size: 28px;
          }

          .year-filter-btn {
            font-size: 13px;
            padding: 7px 14px;
          }

          .timeline-node {
            width: 46px;
            height: 46px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}

function MilestoneCard({
  item,
  align,
}: {
  item: Milestone;
  align: "left" | "right";
}) {
  return (
    <div
      className={`yoy-panel panel-align-${align}${
        item.highlight ? " panel-highlight" : ""
      }`}
    >
      <div className="panel-meta">
        <span className="panel-badge">{item.badge}</span>
      </div>
      <h3 className="panel-title">{item.title}</h3>
      <p className="panel-desc">{item.description}</p>
      <div className="panel-metric">
        <span className="metric-val">{item.metric}</span>
        <span className="metric-label">{item.metricLabel}</span>
      </div>
    </div>
  );
}