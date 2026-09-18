"use client";

import React from "react";
import Image from "next/image";
import { FaAmbulance, FaHeartbeat, FaClock, FaMicroscope, FaBed } from "react-icons/fa";
import { IconType } from "react-icons";

interface EmergencyPillar {
  id: number;
  icon: IconType;
  accentColor: string;
  glowRgba: string;
  responseStat: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const emergencyPillars: EmergencyPillar[] = [
  {
    id: 1,
    icon: FaAmbulance,
    accentColor: "#e63946",
    glowRgba: "rgba(230, 57, 70, 0.22)",
    responseStat: "< 15 Min Quick Dispatch",
    title: "Emergency Response",
    description:
      "Rapid medical assistance during urgent, life-threatening situations to save lives.",
    image: "/assets/images/service/emergency-ambulance.jpg",
    alt: "Meenakshi Hospital Emergency Ambulance Fleet",
  },
  {
    id: 2,
    icon: FaHeartbeat,
    accentColor: "#74a135",
    glowRgba: "rgba(116, 161, 53, 0.22)",
    responseStat: "Zero-Waiting Emergency Triage",
    title: "Critical Care",
    description:
      "Advanced, lifesaving medical care for critically ill or injured patients.",
    image: "/assets/images/service/emergency-critical-care.jpg",
    alt: "Emergency Critical Care and Resuscitation Team",
  },
  {
    id: 3,
    icon: FaMicroscope,
    accentColor: "#1d78c9",
    glowRgba: "rgba(29, 120, 201, 0.22)",
    responseStat: "< 10 Min Stat Lab Turnaround",
    title: "Portable Healthcare",
    description:
      "On-the-go healthcare for emergencies, diagnostics, and remote treatments.",
    image: "/assets/images/service/emergency-portable-care.jpg",
    alt: "Portable Healthcare & Emergency Bedside Diagnostics",
  },
  {
    id: 4,
    icon: FaBed,
    accentColor: "#8a3ffc",
    glowRgba: "rgba(138, 63, 252, 0.22)",
    responseStat: "24x7 Intensivist Coverage",
    title: "ICU & NICU",
    description:
      "Round-the-clock intensive care and advanced neonatal support for critical patients.",
    image: "/assets/images/service/emergency-icu-nicu.jpg",
    alt: "Meenakshi Hospital ICU & NICU Critical Care Unit",
  },
];

export default function EmergencyServicesSection() {
  return (
    <section className="emergency-services-section p_relative">
      {/* Decorative ambient background accents */}
      <div className="emergency-bg-pattern" aria-hidden="true" />
      <div className="emergency-glow-left" aria-hidden="true" />
      <div className="emergency-glow-right" aria-hidden="true" />

      <div className="auto-container p_relative" style={{ zIndex: 3 }}>
        {/* Top Section Header */}
        <div className="emergency-section-header">
          <div className="emergency-pill-tag">
            <span className="live-dot" />
            <span className="tag-text">24/7 EMERGENCY &amp; CRITICAL CARE</span>
          </div>

          <h2 className="emergency-main-title">
            Immediate Lifesaving Care <br />
            <span className="highlight-text">When Every Second Counts.</span>
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="emergency-pillars-grid">
          {emergencyPillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div key={pillar.id} className="emergency-card">
                {/* Card Image Container */}
                <div className="card-image-wrap">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="pillar-image"
                    loading="lazy"
                  />
                  <div className="card-image-overlay" />

                  {/* Stat Pill */}
                  <div className="card-stat-pill">
                    <FaClock style={{ fontSize: "11px", marginRight: "5px" }} />
                    <span>{pillar.responseStat}</span>
                  </div>

                  {/* Floating Animated Icon Badge */}
                  <div
                    className="card-icon-badge"
                    style={
                      {
                        color: pillar.accentColor,
                        "--glow-color": pillar.glowRgba,
                      } as React.CSSProperties
                    }
                  >
                    <span className="icon-badge-ring ring-1" style={{ borderColor: pillar.accentColor }} />
                    <span className="icon-badge-ring ring-2" style={{ borderColor: pillar.accentColor }} />
                    <PillarIcon className="icon-badge-glyph" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h3 className="card-title" style={{ color: pillar.accentColor }}>
                    {pillar.title}
                  </h3>
                  <p className="card-description">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        .emergency-services-section {
          padding: 85px 0 90px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .emergency-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(0, 152, 144, 0.05) 1px,
            transparent 1px
          );
          background-size: 26px 26px;
          pointer-events: none;
          opacity: 0.6;
        }

        .emergency-glow-left {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 450px;
          height: 450px;
          background: radial-gradient(
            circle,
            rgba(0, 152, 144, 0.08) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          pointer-events: none;
        }

        .emergency-glow-right {
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(116, 161, 53, 0.06) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          pointer-events: none;
        }

        /* Section Header */
        .emergency-section-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 50px auto;
        }

        .emergency-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid rgba(0, 152, 144, 0.28);
          padding: 6px 18px;
          border-radius: 25px;
          margin-bottom: 16px;
          box-shadow: 0 4px 14px rgba(0, 152, 144, 0.08);
        }

        .live-dot {
          width: 9px;
          height: 9px;
          background: #e63946;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7);
          animation: pulseEmergency 1.8s infinite;
        }

        @keyframes pulseEmergency {
          0% {
            box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(230, 57, 70, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(230, 57, 70, 0);
          }
        }

        .tag-text {
          font-family: "Roboto Serif", serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #009890;
          text-transform: uppercase;
        }

        .emergency-main-title {
          font-family: "Roboto Serif", serif;
          font-size: clamp(23px, 2.4vw, 28px);
          font-weight: 700;
          color: #102a3a;
          line-height: 1.28;
          margin-bottom: 0;
          letter-spacing: -0.3px;
        }

        .highlight-text {
          color: #009890;
        }

        /* Pillars Grid */
        .emergency-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .emergency-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: visible;
          box-shadow: 0 10px 30px rgba(16, 42, 58, 0.07);
          border: 1px solid rgba(0, 152, 144, 0.12);
          display: flex;
          flex-direction: column;
          min-width: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .emergency-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 45px rgba(0, 152, 144, 0.16);
          border-color: rgba(0, 152, 144, 0.35);
        }

        /* Card Image */
        .card-image-wrap {
          position: relative;
          width: 100%;
          height: 230px;
          min-width: 0;
          overflow: hidden;
          border-radius: 18px 18px 0 0;
          background: #dbe6e3;
        }

        .pillar-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .emergency-card:hover .pillar-image {
          transform: scale(1.06);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
          pointer-events: none;
        }

        .card-stat-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(6px);
          color: #102a3a;
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }

        /* Floating Animated Icon Badge (overlaps image bottom) */
        .card-icon-badge {
          position: absolute;
          bottom: -34px;
          left: 50%;
          transform: translateX(-50%);
          width: 78px;
          height: 78px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(16, 42, 58, 0.22);
          z-index: 4;
          animation: iconBadgeFloat 2.2s ease-in-out infinite,
            iconBadgeGlow 2.2s ease-in-out infinite;
        }

        .icon-badge-ring {
          position: absolute;
          inset: -6px;
          border: 2px solid;
          border-radius: 50%;
          opacity: 0.5;
          animation: iconBadgePulse 1.8s ease-out infinite;
        }

        .icon-badge-ring.ring-2 {
          animation-delay: 0.9s;
        }

        .icon-badge-glyph {
          font-size: 27px;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
          animation: iconGlyphWiggle 2.2s ease-in-out infinite;
        }

        .emergency-card:hover .card-icon-badge {
          transform: translateX(-50%) scale(1.15);
        }

        .emergency-card:hover .icon-badge-glyph {
          animation-play-state: paused;
          transform: rotate(-14deg) scale(1.25);
        }
        /* Assign colors as inline styles on JSX */

        @keyframes iconBadgeFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        @keyframes iconBadgeGlow {
          0%,
          100% {
            box-shadow: 0 8px 22px rgba(16, 42, 58, 0.22);
          }
          50% {
            box-shadow: 0 10px 26px rgba(16, 42, 58, 0.28),
              0 0 0 7px var(--glow-color, rgba(0, 152, 144, 0.18));
          }
        }

        @keyframes iconBadgePulse {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }
          70% {
            transform: scale(1.55);
            opacity: 0;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes iconGlyphWiggle {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-8deg) scale(1.08);
          }
          50% {
            transform: rotate(0deg) scale(1);
          }
          75% {
            transform: rotate(8deg) scale(1.08);
          }
        }

        /* Card Body */
        .card-body {
          padding: 46px 24px 30px 24px;
          text-align: center;
        }

        .card-title {
          font-family: "Roboto Serif", serif;
          font-size: 17.5px;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .card-description {
          font-size: 14px;
          line-height: 1.62;
          color: #556875;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .emergency-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .emergency-services-section {
            padding: 60px 0 65px 0;
          }
          .emergency-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}