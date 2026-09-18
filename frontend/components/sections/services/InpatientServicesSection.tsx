"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaProcedures,
  FaBaby,
  FaUtensils,
  FaShieldAlt,
  FaUserNurse,
  FaCheckCircle,
  FaPhoneAlt,
  FaCalendarCheck,
  FaHospital,
  FaFileAlt,
  FaDoorOpen,
  FaUserMd,
  FaHeartbeat,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface RoomCategory {
  id: number;
  title: string;
  tag: string;
  image: string;
  description: string;
  amenities: string[];
  recommendedFor: string;
}

const roomCategories: RoomCategory[] = [
  {
    id: 1,
    title: "Deluxe Inpatient Suite",
    tag: "Premium Comfort",
    image: "/assets/images/service/emergency-icu-nicu.jpg",
    description:
      "Spacious, private, hotel-standard patient suite equipped with dedicated attendant resting facilities, continuous nursing call bell, and complete privacy.",
    amenities: [
      "Motorized multi-position hospital bed",
      "Air-conditioned private room with attached bathroom",
      "Sofa-cum-bed for patient attendant",
      "Smart LED TV, High-speed Wi-Fi & Refrigerator",
      "Personalized dietary service for patient & attendant",
    ],
    recommendedFor: "Maternity stays, post-IVF rest, and executive surgical recovery",
  },
  {
    id: 2,
    title: "Single Private AC Room",
    tag: "Quiet & Private",
    image: "/assets/images/service/orthopaedics.jpg",
    description:
      "Individual air-conditioned room offering a quiet, peaceful healing environment for patients recovering from surgery or medical treatments.",
    amenities: [
      "Adjustable ergonomic patient bed",
      "Individual air-conditioning & ventilation",
      "Comfortable couch for one attendant",
      "Attached sanitized private bathroom",
      "Nurse calling system at bedside",
    ],
    recommendedFor: "General surgery, laparoscopic procedures, and maternity recovery",
  },
  {
    id: 3,
    title: "Semi-Private Room",
    tag: "Dual Occupancy",
    image: "/assets/images/service/emergency-critical-care.jpg",
    description:
      "Comfortable two-bed accommodation sharing a spacious air-conditioned room with individual privacy partition curtains and separate bedside facilities.",
    amenities: [
      "Individual privacy curtains between beds",
      "Air-conditioned environment",
      "Dedicated attendant chair for each bed",
      "Shared sanitized bathroom facility",
      "Direct bedside medical gas & suction supply",
    ],
    recommendedFor: "Short-stay admissions, intermediate care, and medical observation",
  },
  {
    id: 4,
    title: "Specialized General Wards",
    tag: "Economical & Clean",
    image: "/assets/images/service/urology.jpg",
    description:
      "Spacious, hygienic, naturally ventilated wards separated for male and female patients with continuous 24/7 nursing station surveillance.",
    amenities: [
      "Continuous central nursing station monitoring",
      "Central oxygen & vacuum lines at each bed",
      "Daily sanitized hygienic washroom blocks",
      "Clean hospital linen changed daily",
      "Economical medical stay with quality clinical care",
    ],
    recommendedFor: "Cost-effective medical management and clinical monitoring",
  },
];

interface InpatientPillar {
  id: number;
  icon: IconType;
  accentColor: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const inpatientPillars: InpatientPillar[] = [
  {
    id: 1,
    icon: FaProcedures,
    accentColor: "#009890",
    tag: "Class-10000 cleanroom",
    title: "Modular Operation Theatres",
    description:
      "Advanced surgical suites equipped with laminar airflow, HEPA filtration, 3D laparoscopy towers, and C-Arm fluoroscopy for zero infection risk.",
    image: "/assets/images/service/surgery.jpg",
    features: [
      "Positive pressure air filtration system",
      "Minimally invasive laparoscopic towers",
      "Continuous central anaesthesia gas pipeline",
    ],
  },
  {
    id: 2,
    icon: FaBaby,
    accentColor: "#74a135",
    tag: "Mother & baby care",
    title: "Maternity & Labour Suites",
    description:
      "Comfortable labour, delivery, and recovery (LDR) rooms with continuous foetal CTG heart rate monitoring and painless epidural anesthesia support.",
    image: "/assets/images/service/emergency-icu-nicu.jpg",
    features: [
      "24/7 obstetrician and paediatrician on-site",
      "Continuous foetal cardiotocography (CTG)",
      "Direct Level-III NICU backup connectivity",
    ],
  },
  {
    id: 3,
    icon: FaUserNurse,
    accentColor: "#1d78c9",
    tag: "1:4 dedicated ratio",
    title: "24/7 Inpatient Nursing & RMO",
    description:
      "Compassionate, skilled nursing care with twice-daily senior consultant rounds, 24/7 resident medical officers, and bedside medicine administration.",
    image: "/assets/images/service/emergency-critical-care.jpg",
    features: [
      "Round-the-clock resident medical officers",
      "Twice-daily senior consultant ward rounds",
      "Strict medication schedule and vital charting",
    ],
  },
  {
    id: 4,
    icon: FaShieldAlt,
    accentColor: "#8a3ffc",
    tag: "Hassle-free approval",
    title: "Cashless Insurance & TPA Desk",
    description:
      "Dedicated hospital insurance coordination desk providing seamless pre-authorization, claim approvals, and paperwork assistance with all leading TPAs.",
    image: "/assets/images/service/cardiology.jpg",
    features: [
      "Tie-ups with leading health insurance TPAs",
      "Fast pre-authorization within 2–4 hours",
      "Assistance for planned & emergency admissions",
    ],
  },
  {
    id: 5,
    icon: FaUtensils,
    accentColor: "#e67e22",
    tag: "Nutritionist planned",
    title: "Clinical Diet & In-House Kitchen",
    description:
      "Customized patient meals designed by qualified dietitians tailored to clinical needs — diabetic, renal, liquid, post-surgical, and high-protein diets.",
    image: "/assets/images/service/orthopaedics.jpg",
    features: [
      "Condition-specific therapeutic meal plans",
      "Prepared under strict hospital hygiene standards",
      "Nutritious complimentary diet for inpatients",
    ],
  },
  {
    id: 6,
    icon: FaFileAlt,
    accentColor: "#e63946",
    tag: "Smooth process",
    title: "Discharge Counseling & Care",
    description:
      "Structured discharge workflow with clear medical summaries, take-home medication counseling, wound dressing guidance, and scheduled follow-up dates.",
    image: "/assets/images/service/emergency-portable-care.jpg",
    features: [
      "Comprehensive computerized discharge summary",
      "Pharmacist explanation of dosage schedules",
      "Easy follow-up appointment booking",
    ],
  },
];

const admissionSteps = [
  {
    step: "01",
    title: "Doctor Recommendation",
    desc: "Consultant advises hospital admission following outpatient evaluation or emergency triage.",
    icon: FaCalendarCheck,
  },
  {
    step: "02",
    title: "Admission Desk & TPA",
    desc: "Quick registration, room category selection, and submission of insurance cards for cashless pre-auth.",
    icon: FaHospital,
  },
  {
    step: "03",
    title: "Treatment & Recovery",
    desc: "Settling into room, continuous nursing care, modular surgery or medical therapy, and consultant rounds.",
    icon: FaBed,
  },
  {
    step: "04",
    title: "Discharge & Medication",
    desc: "Final insurance settlement, comprehensive discharge summary, take-home medicines, and home care advice.",
    icon: FaDoorOpen,
  },
];

const ribbonStats = [
  { value: "50+", label: "Inpatient beds — suites, AC rooms & wards" },
  { value: "1:4", label: "Nurse-to-patient ratio, every shift" },
  { value: "4", label: "Modular, HEPA-filtered operation theatres" },
  { value: "24/7", label: "Cashless TPA & admission helpdesk" },
];

// Content for the new LEFT-content / RIGHT-image intro split
const introHighlights: string[] = [
  "Private, hotel-standard suites & AC rooms",
  "24/7 resident doctors & dedicated nursing care",
  "Modular, HEPA-filtered operation theatres",
  "Cashless insurance & TPA coordination desk",
  "Clinical, dietitian-planned in-house meals",
  "Structured, paperwork-free discharge process",
];

/** Small hook: adds `.is-in-view` once an element scrolls into view. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

  return { ref, inView };
}

export default function InpatientServicesSection() {
  const [selectedRoomId, setSelectedRoomId] = useState<number>(1);
  const activeRoom = roomCategories.find((r) => r.id === selectedRoomId) || roomCategories[0];

  const header = useReveal<HTMLDivElement>();
  const intro = useReveal<HTMLDivElement>();
  const ribbon = useReveal<HTMLDivElement>();
  const rooms = useReveal<HTMLDivElement>();
  const pillars = useReveal<HTMLDivElement>();
  const timeline = useReveal<HTMLDivElement>();
  const banner = useReveal<HTMLDivElement>();

  return (
    <section className="ipd-section p_relative" id="inpatient-services">
      {/* Decorative Background Elements */}
      <div className="ipd-bg-glow-left" aria-hidden="true" />
      <div className="ipd-dots-pattern" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="ipd-dot" />
        ))}
      </div>

      <div className="auto-container p_relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div
          className={`ipd-header text-center mb_50 ${header.inView ? "is-in-view" : ""}`}
          ref={header.ref}
        >
          <div className="ipd-badge-wrap">
            <span className="badge-line" />
            <span className="ipd-badge">Inpatient Services (IPD)</span>
            <span className="badge-line" />
          </div>
          <h2 className="ipd-main-title">
            <span className="title-line">A hospital stay made to feel like</span>
            <br />
            <span className="title-line">recovery, not confinement</span>
          </h2>
          <p className="ipd-lead-text">
            Meenakshi Hospital &amp; Fertility Centre delivers round-the-clock hospitalization
            with private suites, sterile modular surgical theatres, attentive nursing, clinical
            dietetics, and hassle-free cashless insurance support in Dharmapuri.
          </p>
        </div>

        {/* Intro split: LEFT = content & checklist, RIGHT = hospital image card + phone & location bar */}
        <div
          className={`ipd-intro-split mb_70 ${intro.inView ? "is-in-view" : ""}`}
          ref={intro.ref}
        >
          <div className="intro-content-col">
            <div className="intro-eyebrow-wrap">
              <span className="intro-eyebrow-line" />
              <span className="intro-eyebrow">Why choose our IPD care</span>
            </div>
            <h3 className="intro-title">
              Comfortable rooms, attentive care, and complete clinical support
            </h3>
            <p className="intro-desc">
              From the moment you’re admitted to the day you’re discharged, our inpatient
              team manages every detail — comfortable accommodation, round-the-clock nursing,
              modular surgical care, and cashless insurance support.
            </p>

            <div className="intro-features-split">
              <div className="features-sub-col">
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <FaBed size={16} />
                  </div>
                  <span className="feature-text">Private, hotel-standard suites &amp; AC rooms</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <FaHeartbeat size={16} />
                  </div>
                  <span className="feature-text">Modular, HEPA-filtered operation theatres</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <FaUtensils size={15} />
                  </div>
                  <span className="feature-text">Clinical, dietitian-planned in-house meals</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <FaFileAlt size={15} />
                  </div>
                  <span className="feature-text">Structured, paperwork-free discharge process</span>
                </div>
              </div>

              <div className="features-sub-col">
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <FaUserNurse size={16} />
                  </div>
                  <span className="feature-text">24/7 resident doctors &amp; dedicated nursing care</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-box">
                    <FaShieldAlt size={16} />
                  </div>
                  <span className="feature-text">Cashless insurance &amp; TPA coordination desk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-image-col">
            <div className="hospital-card-wrapper">
              <div className="hospital-card-img-wrap">
                <Image
                  src="/assets/images/banner/hospital-building.jpg"
                  alt="Meenakshi Hospital & Fertility Centre"
                  width={640}
                  height={480}
                  priority
                  className="hospital-building-img"
                />
              </div>

              <div className="hospital-info-bar">
                <a href="tel:09443224499" className="info-bar-phone">
                  <div className="info-icon-circle">
                    <FaPhoneAlt size={14} />
                  </div>
                  <span className="info-phone-number">094432 24499</span>
                </a>

                <div className="info-bar-divider" />

                <div className="info-bar-location">
                  <div className="info-icon-circle">
                    <FaMapMarkerAlt size={15} />
                  </div>
                  <div className="info-location-text">
                    <span className="info-loc-name">Meenakshi Hospital</span>
                    <span className="info-loc-city">Erode, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core facilities — alternating editorial rows, not a card grid */}
        <div
          className={`ipd-pillars mb_70 ${pillars.inView ? "is-in-view" : ""}`}
          ref={pillars.ref}
        >
          <div className="pillars-intro">
            <span className="pillars-sub">What's included in every stay</span>
            <h3 className="pillars-title">Core inpatient facilities</h3>
          </div>

          <div className="pillars-list">
            {inpatientPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={pillar.id}
                  className={`pillar-row ${reversed ? "reversed" : ""}`}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div className="pillar-row-image">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      width={480}
                      height={320}
                      className="pillar-img"
                    />
                  </div>

                  <div className="pillar-row-content">
                    <span
                      className="pillar-tag"
                      style={{ color: pillar.accentColor, borderColor: `${pillar.accentColor}55` }}
                    >
                      <PillarIcon size={13} />
                      {pillar.tag}
                    </span>
                    <h4 className="pillar-row-title">{pillar.title}</h4>
                    <p className="pillar-row-desc">{pillar.description}</p>
                    <ul className="pillar-row-features">
                      {pillar.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Admission-to-discharge — a genuine sequence, shown as a drawn timeline */}
        <div
          className={`ipd-timeline mb_60 ${timeline.inView ? "is-in-view" : ""}`}
          ref={timeline.ref}
        >
          <div className="timeline-intro">
            <span className="timeline-sub">Streamlined & stress-free</span>
            <h3 className="timeline-title">From admission to discharge</h3>
          </div>

          <div className="timeline-track">
            <div className="timeline-line" />
            {admissionSteps.map((stepItem, index) => {
              const StepIcon = stepItem.icon;
              return (
                <div
                  key={index}
                  className="timeline-node"
                  style={{ transitionDelay: `${index * 160}ms` }}
                >
                  <span className="node-dot">
                    <StepIcon size={18} />
                  </span>
                  <span className="node-step">{stepItem.step}</span>
                  <h4 className="node-title">{stepItem.title}</h4>
                  <p className="node-desc">{stepItem.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Admission & insurance helpdesk */}
        <div
          className={`ipd-banner ${banner.inView ? "is-in-view" : ""}`}
          ref={banner.ref}
        >
          <div className="banner-left">
            <span className="banner-pill">Cashless TPA &amp; admission helpdesk</span>
            <h3 className="banner-title">
              Ready for admission, or need insurance help first?
            </h3>
            <p className="banner-desc">
              Our coordination team handles room reservations, cashless TPA approvals, and
              physician scheduling — around the clock.
            </p>
          </div>

          <div className="banner-right">
            <Link href="/appointment" className="banner-btn">
              Book inpatient admission
            </Link>
            <a href="tel:+919443224499" className="banner-phone">
              <FaPhoneAlt size={15} />
              <span>+91 94432 24499</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ipd-section {
          position: relative;
          padding: 100px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        /* Decorative background elements matching screenshot */
        .ipd-bg-glow-left {
          position: absolute;
          top: -40px;
          left: -120px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(206, 243, 235, 0.45) 0%, rgba(255, 255, 255, 0) 65%);
          pointer-events: none;
          z-index: 1;
        }

        .ipd-dots-pattern {
          position: absolute;
          top: 65px;
          right: 48px;
          display: grid;
          grid-template-columns: repeat(4, 7px);
          grid-gap: 13px;
          pointer-events: none;
          z-index: 1;
        }

        .ipd-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #9ed3c6;
          opacity: 0.75;
        }

        /* Reveal base states — one orchestrated fade/rise per block */
        .ipd-header,
        .ipd-intro-split,
        .ipd-ribbon,
        .ipd-rooms,
        .ipd-pillars,
        .ipd-timeline,
        .ipd-banner {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .ipd-header.is-in-view,
        .ipd-intro-split.is-in-view,
        .ipd-ribbon.is-in-view,
        .ipd-rooms.is-in-view,
        .ipd-pillars.is-in-view,
        .ipd-timeline.is-in-view,
        .ipd-banner.is-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- Header with pill badge and uniform dark typography ---------- */
        .ipd-badge-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .badge-line {
          width: 36px;
          height: 1.5px;
          background-color: #009890;
          border-radius: 2px;
        }

        .ipd-badge {
          display: inline-block;
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 11.5px;
          font-weight: 700;
          color: #008779;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 6px 18px;
          border-radius: 50px;
          background-color: #eaf7f5;
          border: 1px solid rgba(0, 152, 144, 0.28);
        }

        .ipd-main-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 28px;
          line-height: 1.34;
          font-weight: 700;
          color: #0c2540; /* Clean uniform Dark Navy / Charcoal - no colored accents */
          max-width: 860px;
          margin: 0 auto 16px auto;
          text-align: center;
        }

        .title-line {
          display: inline-block;
        }

        .ipd-lead-text {
          max-width: 740px;
          margin: 0 auto;
          font-size: 14.5px;
          line-height: 25px;
          color: #556b69; /* Clean uniform slate text */
        }

        /* ---------- Intro split: LEFT content / RIGHT image ---------- */
        .ipd-intro-split {
          display: flex;
          align-items: center;
          gap: 56px;
        }

        .intro-content-col {
          flex: 1 1 54%;
        }

        .intro-eyebrow-wrap {
          display: inline-flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }

        .intro-eyebrow-line {
          width: 28px;
          height: 2px;
          background-color: #009890;
          border-radius: 2px;
        }

        .intro-eyebrow {
          font-size: 11.5px;
          font-weight: 700;
          color: #009890;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .intro-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 23px;
          line-height: 1.35;
          font-weight: 700;
          color: #0c2540; /* Clean uniform Dark Navy / Charcoal - no colored accents */
          margin-bottom: 14px;
        }

        .title-underline {
          text-decoration: underline;
          text-decoration-color: #0c2540;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }

        .intro-desc {
          font-size: 14.5px;
          line-height: 25px;
          color: #556b69; /* Clean uniform slate text */
          margin-bottom: 26px;
          max-width: 48ch;
        }

        /* Features 2-column split */
        .intro-features-split {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 16px 20px;
          margin-bottom: 32px;
        }

        .features-sub-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-icon-box {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 12px;
          background-color: #ebf8f5;
          border: 1px solid rgba(0, 152, 144, 0.2);
          color: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .feature-item:hover .feature-icon-box {
          transform: scale(1.06);
        }

        .feature-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.35;
        }

        .intro-cta-row {
          display: flex;
          align-items: center;
        }

        .ipd-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #009890;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 12px 16px 12px 28px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 152, 144, 0.28);
          transition: all 0.3s ease;
        }

        .ipd-book-btn:hover {
          background: #087d77;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 152, 144, 0.36);
          color: #ffffff;
        }

        .btn-arrow-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          color: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .ipd-book-btn:hover .btn-arrow-circle {
          transform: translateX(3px);
        }

        /* Hospital Card */
        .intro-image-col {
          flex: 0 0 46%;
          max-width: 46%;
        }

        .hospital-card-wrapper {
          background: #ffffff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(11, 43, 76, 0.1);
          border: 1px solid rgba(11, 43, 76, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .hospital-card-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 55px rgba(11, 43, 76, 0.15);
        }

        .hospital-card-img-wrap {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
        }

        .hospital-building-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hospital-info-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          background: #ffffff;
        }

        .info-bar-phone {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #0c2540;
          transition: color 0.2s ease;
        }

        .info-bar-phone:hover {
          color: #009890;
        }

        .info-icon-circle {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 50%;
          background-color: #009890;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-phone-number {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .info-bar-divider {
          width: 1px;
          height: 34px;
          background: rgba(11, 43, 76, 0.1);
          margin: 0 10px;
        }

        .info-bar-location {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .info-location-text {
          display: flex;
          flex-direction: column;
        }

        .info-loc-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #0c2540;
          line-height: 1.25;
        }

        .info-loc-city {
          font-size: 11.5px;
          color: #64748b;
          margin-top: 2px;
        }

        /* ---------- Editorial stat ribbon ---------- */
        .ipd-ribbon {
          display: flex;
          flex-wrap: wrap;
          border-top: 1px solid rgba(11, 43, 76, 0.1);
          border-bottom: 1px solid rgba(11, 43, 76, 0.1);
        }

        .ipd-ribbon-item {
          flex: 1 1 220px;
          padding: 26px 24px;
          border-left: 1px solid rgba(11, 43, 76, 0.1);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .ipd-ribbon-item:first-child {
          border-left: none;
        }

        .is-in-view .ipd-ribbon-item {
          opacity: 1;
          transform: translateY(0);
        }

        .ipd-ribbon-item strong {
          display: block;
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 24px;
          font-weight: 700;
          color: #009890;
          line-height: 1;
          margin-bottom: 8px;
        }

        .ipd-ribbon-item p {
          margin: 0;
          font-size: 13px;
          color: #556b69;
          line-height: 1.45;
          max-width: 22ch;
        }

        /* ---------- Room showcase ---------- */
        .rooms-intro,
        .pillars-intro,
        .timeline-intro {
          margin-bottom: 28px;
        }

        .rooms-sub,
        .pillars-sub,
        .timeline-sub {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #74a135;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 6px;
        }

        .rooms-title,
        .pillars-title,
        .timeline-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 21px;
          font-weight: 700;
          color: #0b2b4c;
          margin: 0;
        }

        .room-rail {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(11, 43, 76, 0.1);
          padding-bottom: 2px;
        }

        .room-rail-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          padding: 12px 4px 16px 4px;
          margin-right: 22px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.25s ease;
        }

        .room-rail-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #6a7c7a;
          transition: color 0.25s ease;
        }

        .room-rail-tag {
          font-size: 11.5px;
          color: #9aa9a7;
        }

        .room-rail-btn.active {
          border-bottom-color: #009890;
        }

        .room-rail-btn.active .room-rail-title {
          color: #0b2b4c;
        }

        .room-rail-btn:hover .room-rail-title {
          color: #009890;
        }

        .active-room-panel {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          gap: 44px;
          align-items: center;
          animation: roomFadeIn 0.5s ease;
        }

        @keyframes roomFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .room-image-wrap {
          border-radius: 18px;
          overflow: hidden;
        }

        .room-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .room-details-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 20px;
          font-weight: 700;
          color: #0b2b4c;
          margin-bottom: 10px;
        }

        .room-details-desc {
          font-size: 14.5px;
          line-height: 23px;
          color: #556b69;
          margin-bottom: 20px;
        }

        .room-amenities {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .room-amenities li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #334e5a;
          line-height: 1.4;
        }

        .room-check {
          color: #74a135;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .room-recommended {
          font-size: 13px;
          color: #0b2b4c;
          background: #f0f7f7;
          border-left: 3px solid #009890;
          padding: 9px 14px;
          border-radius: 0 6px 6px 0;
          margin-bottom: 22px;
        }

        .room-recommended span {
          font-weight: 700;
          color: #009890;
          text-transform: uppercase;
          font-size: 11px;
          margin-right: 6px;
        }

        .room-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #009890;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 26px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .room-cta:hover {
          background: #0a4d49;
          transform: translateX(3px);
        }

        /* ---------- Pillars: alternating editorial rows ---------- */
        .pillars-list {
          display: flex;
          flex-direction: column;
          gap: 54px;
        }

        .pillar-row {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          gap: 46px;
          align-items: center;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .is-in-view .pillar-row {
          opacity: 1;
          transform: translateY(0);
        }

        .pillar-row.reversed {
          grid-template-columns: 1fr 0.85fr;
        }

        .pillar-row.reversed .pillar-row-image {
          order: 2;
        }

        .pillar-row-image {
          border-radius: 16px;
          overflow: hidden;
        }

        .pillar-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .pillar-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          padding: 5px 12px;
          border: 1px solid;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .pillar-row-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 19px;
          font-weight: 700;
          color: #0b2b4c;
          margin-bottom: 10px;
        }

        .pillar-row-desc {
          font-size: 14.5px;
          line-height: 23px;
          color: #556b69;
          margin-bottom: 16px;
          max-width: 48ch;
        }

        .pillar-row-features {
          list-style: none;
          margin: 0;
          padding: 14px 0 0 0;
          border-top: 1px solid rgba(11, 43, 76, 0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pillar-row-features li {
          font-size: 13px;
          color: #3b5059;
          padding-left: 16px;
          position: relative;
          line-height: 1.45;
        }

        .pillar-row-features li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #009890;
        }

        /* ---------- Admission timeline ---------- */
        .timeline-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          padding-top: 10px;
        }

        .timeline-line {
          position: absolute;
          top: 26px;
          left: 5%;
          width: 90%;
          height: 2px;
          background: rgba(11, 43, 76, 0.1);
          overflow: hidden;
        }

        .timeline-line::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #009890;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.1s ease 0.2s;
        }

        .is-in-view .timeline-line::after {
          transform: scaleX(1);
        }

        .timeline-node {
          text-align: center;
          position: relative;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .is-in-view .timeline-node {
          opacity: 1;
          transform: translateY(0);
        }

        .node-dot {
          position: relative;
          z-index: 2;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #009890;
          color: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }

        .node-step {
          display: block;
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 12px;
          font-weight: 700;
          color: #9aa9a7;
          margin-bottom: 6px;
        }

        .node-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 15px;
          font-weight: 600;
          color: #0b2b4c;
          margin-bottom: 8px;
        }

        .node-desc {
          font-size: 12.5px;
          color: #556b69;
          line-height: 1.5;
          margin: 0;
        }

        /* ---------- Closing banner ---------- */
        .ipd-banner {
          background: linear-gradient(135deg, #0b2b4c 0%, #0e3d64 100%);
          border-radius: 20px;
          padding: 40px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 34px;
          color: #ffffff;
          box-shadow: 0 16px 40px rgba(11, 43, 76, 0.25);
        }

        .banner-pill {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          color: #74a135;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .banner-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 21px;
          font-weight: 700;
          max-width: 20ch;
          margin-bottom: 10px;
        }

        .banner-desc {
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          line-height: 22px;
          margin: 0;
          max-width: 480px;
        }

        .banner-right {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .banner-btn {
          background: #74a135;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          padding: 14px 26px;
          border-radius: 40px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.25s ease;
        }

        .banner-btn:hover {
          background: #5f8a2a;
        }

        .banner-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: 40px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .banner-phone:hover {
          background: #ffffff;
          color: #0b2b4c;
        }

        /* ---------- Responsive ---------- */
        /* ---------- Responsive ---------- */
        @media (max-width: 1100px) {
          .ipd-intro-split {
            flex-direction: column;
            gap: 46px;
          }
          .intro-content-col {
            flex: 1 1 100%;
            width: 100%;
          }
          .intro-image-col {
            max-width: 100%;
            flex: 1 1 100%;
            width: 100%;
          }
          .intro-title {
            max-width: none;
          }
          .active-room-panel,
          .pillar-row,
          .pillar-row.reversed {
            grid-template-columns: 1fr;
          }
          .pillar-row.reversed .pillar-row-image {
            order: 0;
          }
          .timeline-track {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }
          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .intro-features-split {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .ipd-section {
            padding: 65px 0;
          }
          .ipd-dots-pattern {
            display: none;
          }
          .ipd-main-title {
            font-size: 26px;
            max-width: none;
          }
          .intro-title {
            font-size: 24px;
          }
          .hospital-card-img-wrap {
            height: 260px;
          }
          .hospital-info-bar {
            flex-direction: column;
            gap: 14px;
            align-items: flex-start;
          }
          .info-bar-divider {
            display: none;
          }
          .ipd-ribbon {
            flex-direction: column;
          }
          .ipd-ribbon-item {
            border-left: none;
            border-top: 1px solid rgba(11, 43, 76, 0.1);
          }
          .ipd-ribbon-item:first-child {
            border-top: none;
          }
          .room-rail {
            overflow-x: auto;
            flex-wrap: nowrap;
          }
          .timeline-track {
            grid-template-columns: 1fr;
          }
          .ipd-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .banner-right {
            width: 100%;
            flex-direction: column;
          }
          .banner-btn,
          .banner-phone {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}