"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface CounterItem {
  id: number;
  number: number;
  decimals?: number;
  suffix: string;
  label: string;
  accentColor: string;
}

const countersData: CounterItem[] = [
  {
    id: 1,
    number: 15000,
    suffix: "+",
    label: "Happy Families Blessed",
    accentColor: "#009890",
  },
  {
    id: 2,
    number: 25,
    suffix: "+",
    label: "Years of Medical Excellence",
    accentColor: "#0c3e3a",
  },
  {
    id: 3,
    number: 98.6,
    decimals: 1,
    suffix: "%",
    label: "Patient Satisfaction & Trust",
    accentColor: "#74a135",
  },
  {
    id: 4,
    number: 50,
    suffix: "+",
    label: "Super-Specialists & Embryologists",
    accentColor: "#0284c7",
  },
];

export default function AboutCounters() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());

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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const markComplete = (id: number) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <section ref={sectionRef} className="about-counters-section" id="about-counters">
      {/* Soft ambient glow, kept quiet so the numbers stay the focus */}
      <div className="ambient-glow glow-top-left" aria-hidden="true" />
      <div className="ambient-glow glow-bottom-right" aria-hidden="true" />

      <div className="auto-container">
        {/* Section Header */}
        <div className={`counters-header ${inView ? "revealed" : ""}`}>
          <div className="counters-kicker">
            <span className="kicker-pulse" />
            <span className="kicker-text">Our Impact &amp; Clinical Milestones</span>
          </div>
          <h2 className="counters-title">
            Numbers That Define Our <span className="text-teal">Healing Legacy</span>
          </h2>
        </div>

        {/* Minimal Stat Row */}
        <div className="stats-row">
          {countersData.map((item, index) => {
            const isComplete = completedIds.has(item.id);
            return (
              <div
                key={item.id}
                className={`stat-item ${inView ? "revealed" : ""} ${
                  isComplete ? "is-complete" : ""
                }`}
                style={{ transitionDelay: `${index * 120 + 80}ms` }}
              >
                <div className="stat-number" style={{ color: item.accentColor }}>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.2}
                      separator=","
                      decimals={item.decimals || 0}
                      onEnd={() => markComplete(item.id)}
                    />
                  ) : (
                    "0"
                  )}
                  <span>{item.suffix}</span>
                </div>

                <span
                  className="stat-underline"
                  style={{ background: item.accentColor }}
                />

                <p className="stat-label">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .about-counters-section {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbfa 50%, #ffffff 100%);
          padding: 90px 0 100px;
          overflow: hidden;
        }

        .ambient-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 1;
        }

        .glow-top-left {
          top: -60px;
          left: -80px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(0, 152, 144, 0.06), transparent 70%);
        }

        .glow-bottom-right {
          bottom: -80px;
          right: -60px;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.06), transparent 70%);
        }

        .auto-container {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .counters-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .counters-header.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .counters-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 152, 144, 0.08);
          border: 1px solid rgba(0, 152, 144, 0.2);
          color: #007670;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 16px;
        }

        .kicker-pulse {
          width: 8px;
          height: 8px;
          background: #009890;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.25);
          animation: pulseAnim 2.2s infinite;
        }

        @keyframes pulseAnim {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.25);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 0 0 6px rgba(0, 152, 144, 0.1);
          }
        }

        .counters-title {
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          letter-spacing: -0.4px;
          line-height: 1.3;
          margin: 0;
        }

        .text-teal {
          color: #009890;
        }

        /* ---------------------------------------------- */
        /* Minimal stat row — numbers only, no card chrome */
        /* ---------------------------------------------- */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-item {
          position: relative;
          text-align: center;
          padding: 8px 24px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .stat-item.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Thin divider between stats, echoing a data-sheet rather than a card grid */
        .stat-item + .stat-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10%;
          bottom: 10%;
          width: 1px;
          background: rgba(0, 152, 144, 0.14);
        }

        .stat-number {
          font-size: 34px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.5px;
          font-variant-numeric: tabular-nums;
          display: inline-flex;
          align-items: baseline;
          gap: 2px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stat-item:hover .stat-number {
          transform: scale(1.06);
        }

        /* A brief settling "pop" the instant the count finishes */
        .stat-item.is-complete .stat-number {
          animation: countSettle 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes countSettle {
          0% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Underline draws in right after the number lands */
        .stat-underline {
          display: block;
          height: 3px;
          width: 0;
          margin: 14px auto 14px auto;
          border-radius: 3px;
          transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .stat-item.is-complete .stat-underline {
          width: 42px;
        }

        .stat-label {
          font-size: 14.5px;
          font-weight: 500;
          color: #5d7573;
          line-height: 1.5;
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .counters-header,
          .stat-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .stat-item.is-complete .stat-number {
            animation: none;
          }
          .stat-underline {
            width: 42px !important;
            transition: none !important;
          }
        }

        /* Responsive */
        @media (max-width: 991px) {
          .counters-title {
            font-size: 32px;
          }

          .stats-row {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 40px;
          }

          .stat-item:nth-child(3)::before {
            display: none;
          }
        }

        @media (max-width: 575px) {
          .about-counters-section {
            padding: 65px 0 70px;
          }

          .counters-header {
            margin-bottom: 44px;
          }

          .counters-title {
            font-size: 26px;
          }

          .stats-row {
            grid-template-columns: 1fr;
            row-gap: 36px;
          }

          .stat-item + .stat-item::before {
            display: none;
          }

          .stat-number {
            font-size: 38px;
          }
        }
      `}</style>
    </section>
  );
}
