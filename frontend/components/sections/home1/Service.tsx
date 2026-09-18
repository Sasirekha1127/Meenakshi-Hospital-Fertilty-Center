'use client';

import React, { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceItems = [
  {
    id: 1,
    code: "URO",
    image: "/assets/images/service/urology.jpg",
    title: "Urology",
    link: "/department-details-2",
    description: "Advanced laser lithotripsy, kidney stone removal, prostate care, and minimally invasive endourology.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 11c-4 0-7 4-7 9 0 7 5 11 8 11 3 0 4-3 4-6 0-3-2-4-2-7 0-4-1-7-3-7z" />
        <path d="M33 11c4 0 7 4 7 9 0 7-5 11-8 11-3 0-4-3-4-6 0-3 2-4 2-7 0-4 1-7 3-7z" />
        <path d="M17 25c0 6 4 11 7 14" />
        <path d="M31 25c0 6-4 11-7 14" />
        <ellipse cx="24" cy="41" rx="4" ry="2.5" />
      </svg>
    ),
  },
  {
    id: 2,
    code: "OBG",
    image: "/assets/images/service/emergency-icu-nicu.jpg",
    title: "Obstetrics, Gynaecology & Infertility",
    link: "/department-details-4",
    description: "Advanced IVF & ICSI fertility treatments, high-risk pregnancy monitoring, and painless delivery.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="11" r="5" />
        <path d="M15 38c0-6 4-11 9-11s9 5 9 11" />
        <circle cx="24" cy="23" r="3.2" />
        <path d="M20 33a4 4 0 0 1 8 0" />
        <path d="M11 21c-2-3-1-6 2-7 3-1 6 2 7 4 1-2 4-5 7-4 3 1 4 4 2 7-3 4-9 10-9 10s-6-6-9-10z" opacity="0.45" />
      </svg>
    ),
  },
  {
    id: 3,
    code: "ORTHO",
    image: "/assets/images/service/orthopaedics.jpg",
    title: "Orthopaedics",
    link: "/department-details-5",
    description: "State-of-the-art joint replacement, keyhole arthroscopy, spine care, and trauma rehabilitation.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7c-2 0-3 2-3 4 0 3 4 4 4 7v6h6v-6c0-3 4-4 4-7 0-2-1-4-3-4-2 0-3 2-4 2s-2-2-4-2z" />
        <path d="M20 41c-2 0-3-2-3-4 0-3 4-4 4-7v-6h6v6c0 3 4 4 4 7 0 2-1 4-3 4-2 0-3-2-4-2s-2 2-4 2z" />
        <circle cx="24" cy="24" r="3" />
        <line x1="16" y1="24" x2="32" y2="24" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 4,
    code: "SURG",
    image: "/assets/images/service/surgery.jpg",
    title: "General Surgery",
    link: "/department-details-5",
    description: "Precision laparoscopic and open surgical interventions for hernia, appendicitis, and daycare surgeries.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 38l18-18" />
        <path d="M28 20l6-6c2-2 5-2 7 0s2 5 0 7l-6 6" />
        <path d="M10 38c-1 1-3 1-4 0s-1-3 0-4l14-14 4 4-14 14z" fill="currentColor" fillOpacity="0.15" />
        <line x1="32" y1="16" x2="35" y2="19" />
      </svg>
    ),
  },
  {
    id: 5,
    code: "MED",
    image: "/assets/images/service/emergency-critical-care.jpg",
    title: "General Medicine",
    link: "/department-details",
    description: "Holistic adult healthcare, chronic diabetes, hypertension management, and preventive wellness checkups.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 10v10a10 10 0 0 0 20 0v-10" />
        <path d="M24 30v4a6 6 0 0 0 6 6h2" />
        <circle cx="36" cy="40" r="3" fill="currentColor" fillOpacity="0.2" />
        <circle cx="14" cy="10" r="2" />
        <circle cx="34" cy="10" r="2" />
        <path d="M24 16v6M21 19h6" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 6,
    code: "PAED",
    image: "/assets/images/service/emergency-icu-nicu.jpg",
    title: "Paediatrics",
    link: "/department-details-6",
    description: "Compassionate child healthcare, dedicated Level-III NICU backup, and routine childhood immunization.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="17" r="8.5" />
        <path d="M24 8.5c-1-2.5 2-3.5 3-1.5" />
        <circle cx="21" cy="16" r="1" fill="currentColor" />
        <circle cx="27" cy="16" r="1" fill="currentColor" />
        <path d="M21 20a3.5 3.5 0 0 0 6 0" />
        <path d="M16 38c0-5 4-9 8-9s8 4 8 9" />
        <path d="M14 31c2 1 4 3 4 5" />
        <path d="M34 31c-2 1-4 3-4 5" />
      </svg>
    ),
  },
  {
    id: 7,
    code: "CARDIO",
    image: "/assets/images/service/cardiology.jpg",
    title: "Cardiology",
    link: "/department-details",
    description: "Specialized cardiovascular evaluations, computerized ECG, 2D Echo, and round-the-clock emergency heart care.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 41s-14-9-17-19c-2-7 3-13 10-12 4 1 6 4 7 6 1-2 3-5 7-6 7-1 12 5 10 12-3 10-17 19-17 19z" />
        <path d="M10 24h6l3-6 4 12 4-9 3 5h8" strokeWidth="2.4" />
      </svg>
    ),
  },
  {
    id: 8,
    code: "PULM",
    image: "/assets/images/service/emergency-portable-care.jpg",
    title: "Pulmonology",
    link: "/department-details-2",
    description: "Advanced respiratory diagnostics, asthma, allergy care, chronic COPD therapies, and spirometry (PFT).",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 7v13" />
        <line x1="21" y1="10" x2="27" y2="10" />
        <line x1="21" y1="14" x2="27" y2="14" />
        <path d="M24 20l-5 4M24 20l5 4" />
        <path d="M19 24c-5 0-9 4-9 10 0 6 4 8 8 8 2 0 4-2 4-6v-12z" />
        <path d="M29 24c5 0 9 4 9 10 0 6-4 8-8 8-2 0-4-2-4-6v-12z" />
      </svg>
    ),
  },
  {
    id: 9,
    code: "ENT",
    image: "/assets/images/service/emergency-portable-care.jpg",
    title: "ENT",
    link: "/department-details-6",
    description: "Specialized care for ear, nose, throat, sinusitis, hearing diagnostics, and micro-ear surgery.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 10c-7 0-12 5-12 13 0 9 5 13 8 16 2 2 4 1 5-1 1-3 0-5 0-7 0-2 2-3 3-4 3-2 4-5 4-8 0-5-4-9-8-9z" />
        <path d="M25 18c-3 0-5 2-5 5 0 4 2 6 4 7" />
        <path d="M33 16a8 8 0 0 1 0 12" />
        <path d="M37 12a14 14 0 0 1 0 20" />
      </svg>
    ),
  },
  {
    id: 10,
    code: "NEURO",
    image: "/assets/images/service/emergency-critical-care.jpg",
    title: "Neurology",
    link: "/department-details-4",
    description: "Expert therapies for acute stroke, epileptic seizures, migraines, and peripheral nerve disorders.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10c-3-2-7-2-10 1-3 2-4 6-3 9-3 2-4 6-2 9 1 3 4 5 7 5 1 3 4 5 7 5v-29z" />
        <path d="M24 10c3-2 7-2 10 1 3 2 4 6 3 9 3 2 4 6 2 9-1 3-4 5-7 5-1 3-4 5-7 5v-29z" />
        <path d="M15 20c2 0 4 2 4 4s-2 3-2 5" />
        <path d="M33 20c-2 0-4 2-4 4s2 3 2 5" />
        <path d="M19 15c1 2 1 4 0 6" />
        <path d="M29 15c-1 2-1 4 0 6" />
      </svg>
    ),
  },
  {
    id: 11,
    code: "NEPHRO",
    image: "/assets/images/service/urology.jpg",
    title: "Nephrology",
    link: "/department-details-3",
    description: "Dedicated renal health, modern haemodialysis unit, acute kidney injury care, and diabetic nephropathy.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11c-5 0-8 5-8 11 0 8 6 13 10 13 3 0 4-4 4-7 0-4-2-5-2-9 0-5-1-8-4-8z" />
        <path d="M32 11c5 0 8 5 8 11 0 8-6 13-10 13-3 0-4-4-4-7 0-4 2-5 2-9 0-5 1-8 4-8z" />
        <path d="M20 22c2 1 4 1 8 0" />
        <path d="M24 10v28" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 12,
    code: "GASTRO",
    image: "/assets/images/service/gastroenterology.jpg",
    title: "Gastroenterology",
    link: "/department-details-3",
    description: "Advanced therapeutic video endoscopy, colonoscopy, hepatic liver disease care, and digestive wellness.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 7v9" />
        <path d="M24 16c-6 0-11 4-11 10 0 8 6 14 13 14 6 0 10-5 10-10 0-4-3-8-7-9-2-1-3-3-3-5h-2z" />
        <path d="M18 24c3 3 7 3 9 0" />
      </svg>
    ),
  },
  {
    id: 13,
    code: "ANAES",
    image: "/assets/images/service/surgery.jpg",
    title: "Anaesthesiology",
    link: "/department-details-2",
    description: "Modern surgical anaesthesia, continuous patient monitoring, painless epidural care, and acute pain relief.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="14" width="12" height="20" rx="2" transform="rotate(-45 24 24)" />
        <line x1="13" y1="35" x2="7" y2="41" strokeWidth="2.5" />
        <line x1="31" y1="17" x2="38" y2="10" strokeWidth="2.5" />
        <line x1="35" y1="7" x2="41" y2="13" strokeWidth="2.5" />
        <line x1="22" y1="21" x2="25" y2="18" />
        <line x1="25" y1="24" x2="28" y2="21" />
        <line x1="28" y1="27" x2="31" y2="24" />
      </svg>
    ),
  },
  {
    id: 14,
    code: "RAD",
    image: "/assets/images/service/emergency-ambulance.jpg",
    title: "Radiology Service",
    link: "/department-details-4",
    description: "Round-the-clock digital X-ray diagnostics, high-definition 3D/4D ultrasound, colour Doppler, and fast reporting.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="21" rx="14" ry="12" />
        <ellipse cx="24" cy="21" rx="7" ry="6" fill="currentColor" fillOpacity="0.2" />
        <rect x="12" y="32" width="24" height="4" rx="2" />
        <line x1="24" y1="36" x2="24" y2="42" strokeWidth="3" />
        <line x1="18" y1="42" x2="30" y2="42" strokeWidth="2.5" />
      </svg>
    ),
  },
];

// duplicate the list so the loop is seamless
const carouselItems = [...serviceItems, ...serviceItems];

const CARD_WIDTH = 320;
const GAP = 28;
const STEP = CARD_WIDTH + GAP;

export default function Service() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const halfWidthRef = useRef<number>(0);

  // continuous auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    halfWidthRef.current = track.scrollWidth / 2;

    const speed = 0.6; // px per frame

    const step = () => {
      if (!isPausedRef.current && track) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= halfWidthRef.current) {
          track.scrollLeft -= halfWidthRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const scrollByStep = useCallback((direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * STEP, behavior: "smooth" });

    // wrap-around correction after the smooth scroll settles
    setTimeout(() => {
      if (!track) return;
      if (track.scrollLeft >= halfWidthRef.current) {
        track.scrollLeft -= halfWidthRef.current;
      } else if (track.scrollLeft < 0) {
        track.scrollLeft += halfWidthRef.current;
      }
    }, 350);
  }, []);

  return (
    <section className="spec-section">
      <div className="auto-container">
        <div className="spec-head">
          <span className="spec-kicker">
            <i className="fas fa-hospital"></i>
            14 specialities under one roof
          </span>
          <h2 className="spec-title">Our Unique Treatments</h2>
          {/* <p className="spec-subtitle">
            Meenakshi Hospital &amp; Fertility Centre offers dedicated medical
            care with personalized attention, experienced doctors, and
            multi-speciality clinical excellence in Dharmapuri.
          </p> */}
        </div>
      </div>

      {/* Full-bleed carousel with hover arrows */}
      <div
        className="spec-carousel-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="spec-carousel-fade spec-carousel-fade--left" />
        <div className="spec-carousel-fade spec-carousel-fade--right" />

        <button
          type="button"
          className="spec-nav spec-nav--left"
          aria-label="Previous"
          onClick={() => scrollByStep(-1)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          type="button"
          className="spec-nav spec-nav--right"
          aria-label="Next"
          onClick={() => scrollByStep(1)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="spec-carousel-track" ref={trackRef}>
          {carouselItems.map((item, index) => {
            const accent = index % 2 === 0 ? "teal" : "olive";
            return (
              <article
                key={`${item.id}-${index}`}
                className={`spec-card spec-card--${accent}`}
              >
                <div className="spec-media">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={416}
                    height={358}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <span className="spec-code">{item.code}</span>
                </div>

                <div className="spec-medal">{item.iconSvg}</div>

                <div className="spec-body">
                  <h3 className="spec-title-sm">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <p className="spec-desc">{item.description}</p>
                  <Link href={item.link} className="spec-view">
                    View department
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .spec-section {
          --ink: #0c2e2a;
          --muted: #56706c;
          --teal: #007b74;
          --teal-soft: rgba(0, 123, 116, 0.08);
          --olive: #6b9930;
          --olive-soft: rgba(107, 153, 48, 0.1);
          --paper: #fbfcfb;
          --hairline: rgba(12, 46, 42, 0.1);

          position: relative;
          background: var(--paper);
          padding: 90px 0 100px 0;
          font-family: var(--text-font);
          overflow: hidden;
        }

        .spec-head {
          max-width: 640px;
          margin: 0 auto 48px auto;
          text-align: center;
        }

        .spec-kicker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--teal);
          font-size: 13.5px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .spec-kicker i {
          font-size: 12px;
        }

        .spec-title {
          font-family: var(--title-font);
          font-size: 32px;
          font-weight: 800;
          color: var(--ink);
          line-height: 1.3;
          letter-spacing: -0.4px;
          margin-bottom: 14px;
        }

        .spec-subtitle {
          color: var(--muted);
          font-size: 15px;
          line-height: 25px;
          max-width: 56ch;
          margin: 0 auto;
        }

        /* Carousel */
        .spec-carousel-wrap {
          position: relative;
          width: 100%;
          padding: 10px 0;
        }

        .spec-carousel-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 3;
          pointer-events: none;
        }

        .spec-carousel-fade--left {
          left: 0;
          background: linear-gradient(to right, var(--paper), transparent);
        }

        .spec-carousel-fade--right {
          right: 0;
          background: linear-gradient(to left, var(--paper), transparent);
        }

        .spec-carousel-track {
          display: flex;
          align-items: stretch;
          gap: 28px;
          width: 100%;
          overflow-x: hidden;
          scroll-behavior: auto;
          padding: 10px 0;
        }

        /* Nav arrows */
        .spec-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: #fff;
          color: var(--ink);
          box-shadow: 0 6px 18px rgba(12, 46, 42, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
          z-index: 4;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.25s ease, visibility 0.25s ease, background 0.2s ease, color 0.2s ease;
        }

        .spec-nav:hover {
          background: var(--teal);
          color: #fff;
        }

        .spec-nav--left {
          left: 24px;
        }

        .spec-nav--right {
          right: 24px;
        }

        .spec-carousel-wrap:hover .spec-nav {
          opacity: 1;
          visibility: visible;
        }

        .spec-card {
          position: relative;
          background: #fff;
          border-radius: 16px;
          border: 1px solid var(--hairline);
          overflow: hidden;
          flex: 0 0 320px;
          display: flex;
          flex-direction: column;
          transform: none !important;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .spec-card:hover {
          box-shadow: 0 10px 26px rgba(12, 46, 42, 0.12);
          border-color: rgba(0, 123, 116, 0.25);
        }

        .spec-media {
          position: relative;
          height: 172px;
          overflow: hidden;
        }

        .spec-code {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 5px 12px;
          border-radius: 20px;
          font-family: var(--title-font);
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #fff;
          background: rgba(12, 46, 42, 0.55);
          backdrop-filter: blur(3px);
        }

        .spec-medal {
          position: absolute;
          top: 148px;
          left: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(12, 46, 42, 0.14);
          z-index: 2;
        }

        .spec-medal svg {
          width: 26px;
          height: 26px;
        }

        .spec-card--teal .spec-medal {
          color: var(--teal);
          border: 2px solid var(--teal-soft);
        }

        .spec-card--olive .spec-medal {
          color: var(--olive);
          border: 2px solid var(--olive-soft);
        }

        .spec-body {
          padding: 38px 22px 24px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .spec-title-sm {
          font-family: var(--title-font);
          font-size: 17.5px;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .spec-title-sm a {
          color: var(--ink);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .spec-card--teal .spec-title-sm a:hover {
          color: var(--teal);
        }

        .spec-card--olive .spec-title-sm a:hover {
          color: var(--olive);
        }

        .spec-desc {
          color: var(--muted);
          font-size: 13.5px;
          line-height: 21px;
          margin-bottom: 16px;
          flex: 1;
        }

        .spec-view {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          align-self: flex-start;
          padding-top: 12px;
          border-top: 1px solid var(--hairline);
          width: 100%;
          transition: gap 0.2s ease;
        }

        .spec-view:hover {
          gap: 10px;
        }

        .spec-view i {
          font-size: 10.5px;
        }

        .spec-card--teal .spec-view {
          color: var(--teal);
        }

        .spec-card--olive .spec-view {
          color: var(--olive);
        }

        @media only screen and (max-width: 767px) {
          .spec-card {
            flex: 0 0 260px;
          }

          .spec-nav {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
        }

        @media only screen and (max-width: 575px) {
          .spec-section {
            padding: 64px 0 70px 0;
          }

          .spec-title {
            font-size: 25px;
          }

          .spec-carousel-fade {
            width: 60px;
          }

          .spec-nav--left {
            left: 10px;
          }

          .spec-nav--right {
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}