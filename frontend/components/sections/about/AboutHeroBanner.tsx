"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutHeroBannerProps {
  doctorImage?: string;
  doctorAlt?: string;
}

export default function AboutHeroBanner({
  doctorImage = "/assets/images/banner/banner-img-1.png",
  doctorAlt = "Senior Specialist - Meenakshi Hospital & Fertility Centre",
}: AboutHeroBannerProps) {
  return (
    <section className="about-hero-banner p_relative">
      {/* Background Layer with Medical Gradient & Ambient Highlights */}
      <div className="banner-bg-base" />

      {/* Decorative SVG Medical Watermarks & Molecular Grid */}
      <div className="banner-svg-pattern" aria-hidden="true">
        <svg
          className="watermark-grid"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="medical-grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="rgba(255, 255, 255, 0.12)" />
              <path
                d="M30 22 V38 M22 30 H38"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-grid-pattern)" />
        </svg>

        {/* Large Decorative Faded Medical Cross Watermark in Center */}
        <div className="cross-watermark cross-1" />
        <div className="cross-watermark cross-2" />
      </div>

      <div className="auto-container p_relative banner-z-index">
        <div className="banner-inner-grid">
          {/* LEFT CONTENT COLUMN */}
          <div className="banner-content-col">
            {/* Breadcrumb Bar */}
            <nav className="banner-breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="crumb-link" style={{ color: "#000000", fontWeight: 600 }}>
                Home
              </Link>
              <span className="crumb-separator">»</span>
              <span className="crumb-current">About Us</span>
            </nav>

            {/* Institution Badge */}
            <div className="banner-badge">
              <span className="badge-pulse-dot" />
              <span className="badge-text">
                Meenakshi Hospital &amp; Fertility Centre
              </span>
            </div>

            {/* Main Title */}
            <h1 className="banner-title">
              About Meenakshi Hospital{" "}
              <span className="title-accent">&amp; Fertility Centre</span>
            </h1>

            {/* Description Narrative */}
            <p className="banner-description">
              Meenakshi Hospital &amp; Fertility Centre is a premier multi-speciality
              healthcare and reproductive medicine institution in Dharmapuri. Driven
              by clinical distinction and deep compassion, our team of seasoned
              specialists, advanced embryology laboratories, and cutting-edge technology
              combine to provide world-class medical care and turn the cherished dream
              of parenthood into reality.
            </p>

            {/* Key Trust Highlights */}
            <div className="banner-highlights">
              <div className="highlight-pill">
                <span className="highlight-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>25+ Years of Care</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Advanced IVF &amp; Embryology</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>15,000+ Happy Families</span>
              </div>
            </div>

            <div className="banner-btn-group">
              <Link href="/appointment" className="btn-banner-primary">
                <span className="btn-icon-calendar" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span className="btn-text">Book Appointment</span>
                <span className="btn-arrow-wrap" aria-hidden="true">
                  <svg
                    className="btn-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
           
          </div>

          {/* RIGHT VISUAL DOCTOR COLUMN */}
          <div className="banner-visual-col">
            {/* Luminous Radiant Glow Backdrop */}
            <div className="doctor-halo-glow" />

            {/* Circular Ambient Accent Ring */}
            <div className="doctor-ring-accent" />

            {/* Doctor Portrait Container with Soft Fade Mask */}
            <div className="doctor-portrait-container">
              <Image
                src={doctorImage}
                alt={doctorAlt}
                width={520}
                height={620}
                priority
                className="doctor-image"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
              />
            </div>

            
          </div>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style jsx>{`
        .about-hero-banner {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          background: #009890;
          color: #ffffff;
          padding: 60px 0 0 0;
          box-sizing: border-box;
        }

        /* Gradient Base matching MHFC Teal Palette */
        .banner-bg-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #008f88 0%,
            #009890 35%,
            #04756e 70%,
            #0c3e3a 100%
          );
          z-index: 1;
        }

        /* SVG Grid & Watermark Layers */
        .banner-svg-pattern {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .watermark-grid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.85;
        }

        .cross-watermark {
          position: absolute;
          background: transparent;
          pointer-events: none;
        }

        .cross-1 {
          top: 15%;
          right: 32%;
          width: 220px;
          height: 220px;
          opacity: 0.08;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
        }

        .cross-2 {
          bottom: 5%;
          left: 5%;
          width: 160px;
          height: 160px;
          opacity: 0.06;
          background: radial-gradient(circle, rgba(142, 196, 67, 0.4) 0%, transparent 70%);
        }

        .banner-z-index {
          position: relative;
          z-index: 3;
        }

        /* Grid Layout */
        .banner-inner-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 40px;
        }

        /* LEFT CONTENT COLUMN */
        .banner-content-col {
          padding-bottom: 50px;
          text-align: left;
        }

        .banner-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
        }

        :global(.about-hero-banner .crumb-link),
        .crumb-link {
          color: #000000 !important;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        :global(.about-hero-banner .crumb-link:hover),
        .crumb-link:hover {
          color: #000000 !important;
          opacity: 0.75;
          text-decoration: underline;
        }

        .crumb-separator {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }

        .crumb-current {
          color: #ffffff;
          font-weight: 600;
        }

        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.28);
          padding: 6px 14px;
          border-radius: 30px;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }

        .badge-pulse-dot {
          width: 8px;
          height: 8px;
          background: #8ec443;
          border-radius: 50%;
          box-shadow: 0 0 8px #8ec443;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.7;
          }
        }

        .badge-text {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #ffffff;
        }

        .banner-title {
          font-size: 30px;
          font-weight: 700;
          line-height: 1.25;
          color: #ffffff;
          margin: 0 0 18px 0;
          letter-spacing: -0.4px;
        }

        .title-accent {
          display: inline;
          color: #e3fdf9;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.18);
        }

        .banner-description {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
          max-width: 580px;
          margin: 0 0 26px 0;
          font-weight: 400;
          text-align: justify;
          text-justify: inter-word;
        }

        /* Highlights Pills */
        .banner-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 13.5px;
          font-weight: 500;
          color: #ffffff;
          backdrop-filter: blur(4px);
        }

        .highlight-icon {
          display: flex;
          align-items: center;
          color: #8ec443;
        }

        /* CTA Buttons */
        .banner-btn-group {
        /* CTA Button Design */
        .banner-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 10px;
        }

        :global(.about-hero-banner .btn-banner-primary),
        .btn-banner-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff !important;
          color: #0c3e3a !important;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.2px;
          padding: 12px 22px 12px 16px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(0, 42, 38, 0.25), 0 2px 6px rgba(0, 0, 0, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.95);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }

        :global(.about-hero-banner .btn-banner-primary::before) {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0c3e3a 0%, #007670 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          border-radius: 50px;
        }

        /* Subtle animated light shimmer sweep across button */
        :global(.about-hero-banner .btn-banner-primary::after) {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.45) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          transition: left 0.75s ease;
          pointer-events: none;
        }

        :global(.about-hero-banner .btn-banner-primary:hover::after) {
          left: 130%;
        }

        :global(.about-hero-banner .btn-banner-primary:hover) {
          color: #ffffff !important;
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(12, 62, 58, 0.42);
          border-color: rgba(255, 255, 255, 0.4);
        }

        :global(.about-hero-banner .btn-banner-primary:hover::before) {
          opacity: 1;
        }

        .btn-icon-calendar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 152, 144, 0.12);
          color: #00847d;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        :global(.about-hero-banner .btn-banner-primary:hover .btn-icon-calendar) {
          background: rgba(255, 255, 255, 0.22);
          color: #8ec443;
          transform: scale(1.05);
        }

        .btn-text {
          font-weight: 700;
          font-size: 15px;
          line-height: 1;
          color: inherit;
        }

        .btn-arrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(12, 62, 58, 0.08);
          color: #0c3e3a;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        :global(.about-hero-banner .btn-banner-primary:hover .btn-arrow-wrap) {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
          transform: translateX(4px);
        }

        .btn-arrow {
          transition: transform 0.25s ease;
        }

        /* RIGHT VISUAL COLUMN */
        .banner-visual-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          min-height: 520px;
        }

        .doctor-halo-glow {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(64, 224, 208, 0.38) 0%,
            rgba(0, 152, 144, 0.2) 50%,
            transparent 70%
          );
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }

        .doctor-ring-accent {
          position: absolute;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
          width: 340px;
          height: 340px;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.16);
          z-index: 1;
          pointer-events: none;
        }

        .doctor-portrait-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 460px;
          height: 510px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          /* Soft fade at the bottom so doctor smoothly blends into the banner background */
          -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 78%,
            rgba(0, 0, 0, 0.75) 88%,
            rgba(0, 0, 0, 0) 100%
          );
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 78%,
            rgba(0, 0, 0, 0.75) 88%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        :global(.doctor-image) {
          width: auto !important;
          height: 100% !important;
          max-height: 510px !important;
          object-fit: contain !important;
          object-position: bottom center !important;
          filter: drop-shadow(0 15px 30px rgba(0, 30, 28, 0.3));
        }

        /* Floating Trust Card */
        .doctor-floating-card {
          position: absolute;
          bottom: 60px;
          left: -10px;
          z-index: 3;
          background: rgba(255, 255, 255, 0.94);
          color: #0c3e3a;
          padding: 12px 18px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 16px 36px rgba(0, 40, 36, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.6);
          animation: floatSlow 4s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-8px);
          }
        }

        .card-star-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: #fff8e5;
          border-radius: 8px;
        }

        .card-score {
          font-size: 16px;
          font-weight: 700;
          color: #0c3e3a;
          line-height: 1.1;
        }

        .card-caption {
          font-size: 11px;
          font-weight: 500;
          color: #556b69;
          margin-top: 2px;
        }

        /* Floating Speciality Card */
        .doctor-speciality-card {
          position: absolute;
          top: 70px;
          right: 0px;
          z-index: 3;
          background: rgba(12, 62, 58, 0.85);
          backdrop-filter: blur(10px);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
        }

        .spec-dot {
          width: 8px;
          height: 8px;
          background: #8ec443;
          border-radius: 50%;
        }

        /* RESPONSIVE DESIGN */
        @media only screen and (max-width: 1199px) {
          .banner-title {
            font-size: 40px;
          }
          .banner-description {
            font-size: 15px;
          }
          .doctor-portrait-container {
            max-width: 400px;
            height: 460px;
          }
        }

        @media only screen and (max-width: 991px) {
          .about-hero-banner {
            padding: 40px 0 0 0;
            min-height: auto;
          }
          .banner-inner-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .banner-content-col {
            padding-bottom: 10px;
            text-align: center;
          }
          .banner-breadcrumb,
          .banner-badge,
          .banner-highlights {
            justify-content: center;
          }
          .banner-description {
            margin-left: auto;
            margin-right: auto;
          }
          .banner-btn-group {
            justify-content: center;
          }
          .banner-call-info {
            margin-left: 0;
            width: 100%;
            margin-top: 10px;
          }
          .banner-visual-col {
            min-height: 420px;
          }
          .doctor-portrait-container {
            max-width: 360px;
            height: 420px;
          }
          .doctor-floating-card {
            left: 20px;
            bottom: 30px;
          }
          .doctor-speciality-card {
            right: 20px;
            top: 20px;
          }
        }

        @media only screen and (max-width: 575px) {
          .banner-title {
            font-size: 30px;
          }
          .banner-btn-group {
            flex-direction: column;
            width: 100%;
          }
          .btn-banner-primary,
          .btn-banner-secondary {
            width: 100%;
            justify-content: center;
          }
          .doctor-portrait-container {
            max-width: 300px;
            height: 360px;
          }
          .doctor-floating-card {
            left: 10px;
            bottom: 20px;
            padding: 10px 14px;
          }
        }
      `}</style>
    </section>
  );
}
