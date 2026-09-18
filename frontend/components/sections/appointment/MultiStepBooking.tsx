"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ==========================================
// 1. Data Definitions
// ==========================================

export interface Specialisation {
  id: string;
  name: string;
  tag: string;
  icon: string;
  description: string;
  doctorCount: number;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  specialityId: string;
  experience: string;
  languages: string[];
  fee: number;
  image: string;
  bio: string;
}

const SPECIALISATIONS: Specialisation[] = [
  {
    id: "fertility",
    name: "Fertility & IVF Center",
    tag: "Signature Speciality",
    icon: "fas fa-dna",
    description: "Advanced ICSI, laser-assisted hatching, blastocyst transfer & IUI.",
    doctorCount: 3,
  },
  {
    id: "obstetrics",
    name: "High-Risk Pregnancy & Maternity",
    tag: "Maternal-Foetal",
    icon: "fas fa-baby",
    description: "24/7 continuous monitoring, painless delivery & maternal care.",
    doctorCount: 2,
  },
  {
    id: "gynecology",
    name: "Gynecology & Laparoscopy",
    tag: "Minimally Invasive",
    icon: "fas fa-procedures",
    description: "Pinhole 3D keyhole surgery for fibroids, cysts & endometriosis.",
    doctorCount: 2,
  },
  {
    id: "andrology",
    name: "Andrology & Male Fertility",
    tag: "Men's Health",
    icon: "fas fa-mars",
    description: "Micro-TESE, advanced sperm analysis & hormone therapy.",
    doctorCount: 1,
  },
  {
    id: "embryology",
    name: "Embryology & Genetic Labs",
    tag: "ISO Cleanroom",
    icon: "fas fa-microscope",
    description: "Pre-implantation genetic diagnostics (PGT-A) and cryopreservation.",
    doctorCount: 1,
  },
  {
    id: "dermatology",
    name: "Dermatology & Trichology",
    tag: "Aesthetics",
    icon: "fas fa-spa",
    description: "Clinical skin therapy, chemical peels and PRP hair restoration.",
    doctorCount: 1,
  },
];

function getDoctorInitials(name: string): string {
  const clean = name.replace(/^Dr\.?\s+/i, "").trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) || "DR").toUpperCase();
}

const DOCTORS: Doctor[] = [
  {
    id: "dr-ranjitha",
    name: "Dr. Ranjitha K",
    role: "Duty Doctor",
    qualification: "MBBS, MD (Dermatology)",
    specialityId: "dermatology",
    experience: "8+ Years",
    languages: ["Tamil", "English"],
    fee: 500,
    image: "/assets/images/gallery/doctor.png",
    bio: "Consultant dermatologist and duty physician with expertise in clinical skin care and outpatient management.",
  },
  {
    id: "dr-chandrashekar",
    name: "Dr. B. Chandrashekar",
    role: "Founder & Managing Director",
    qualification: "MBBS, MS (OBG), FRCOG (UK), DRM",
    specialityId: "fertility",
    experience: "25+ Years",
    languages: ["Tamil", "English"],
    fee: 700,
    image: "/assets/images/resource/dr-chandrashekar-showcase-perfect.png",
    bio: "Pioneering reproductive specialist with over two decades of high-cumulative IVF success rates.",
  },
  {
    id: "dr-ananya",
    name: "Dr. Ananya Menon",
    role: "Medical Director & Consultant",
    qualification: "MBBS, MD, DNB (Dermatology & Aesthetics)",
    specialityId: "dermatology",
    experience: "18+ Years",
    languages: ["Tamil", "English", "Hindi"],
    fee: 500,
    image: "/assets/images/gallery/doctor.png",
    bio: "Comprehensive science-backed care for dermatological conditions and aesthetic wellness.",
  },
  {
    id: "dr-rajeshwar",
    name: "Dr. K. Rajeshwar",
    role: "Senior Clinical Embryologist",
    qualification: "Ph.D. (Embryology), ESHRE Certified",
    specialityId: "embryology",
    experience: "16+ Years",
    languages: ["Tamil", "English"],
    fee: 600,
    image: "/assets/images/banner/banner-img-1.png",
    bio: "Specializing in micro-manipulation, blastocyst culture, and vitrification protocols.",
  },
  {
    id: "dr-gomathi",
    name: "Dr. S. K. Gomathi",
    role: "Senior Consultant Gynecologist",
    qualification: "MBBS, DGO, Fellowship in Laparoscopy",
    specialityId: "gynecology",
    experience: "15+ Years",
    languages: ["Tamil", "English"],
    fee: 500,
    image: "/assets/images/resource/women-1.png",
    bio: "Expert in complex laparoscopic myomectomies and minimally invasive pelvic surgeries.",
  },
  {
    id: "dr-preetha",
    name: "Dr. Preetha Mohan",
    role: "Maternal-Foetal Medicine Specialist",
    qualification: "MBBS, MS (OBG), High-Risk Obstetrics",
    specialityId: "obstetrics",
    experience: "12+ Years",
    languages: ["Tamil", "English"],
    fee: 500,
    image: "/assets/images/service/service-2.jpg",
    bio: "Focused on gestational diabetes, multiple gestations, and comprehensive prenatal wellness.",
  },
  {
    id: "dr-karthik",
    name: "Dr. V. Karthik",
    role: "Consultant Andrologist & Urologist",
    qualification: "MBBS, MS, MCh (Urology), Fellow in Andrology",
    specialityId: "andrology",
    experience: "11+ Years",
    languages: ["Tamil", "English"],
    fee: 600,
    image: "/assets/images/resource/dr-chandrashekar-showcase-perfect.png",
    bio: "Dedicated specialist for male factor infertility, hormonal balancing and micro-surgical retrievals.",
  },
];

/** Full labels — no truncated text like "Specialisa..." */
const STEP_DEFINITIONS = [
  { id: 1, label: "Start", icon: "fas fa-th-large" },
  { id: 2, label: "Doctor", icon: "fas fa-user-md" },
  { id: 3, label: "Profile", icon: "fas fa-id-card" },
  { id: 4, label: "Date", icon: "far fa-calendar-alt" },
  { id: 5, label: "Time", icon: "far fa-clock" },
  { id: 6, label: "Mobile", icon: "fas fa-mobile-alt" },
  { id: 7, label: "OTP", icon: "fas fa-shield-alt" },
  { id: 8, label: "Patient", icon: "fas fa-users" },
  { id: 9, label: "Details", icon: "fas fa-user" },
  { id: 10, label: "Confirm", icon: "fas fa-check-double" },
];

const VISIT_REASONS = [
  "Initial Fertility Consultation",
  "IVF / IUI Follow-up",
  "Pregnancy Check-up",
  "Gynaec Problem",
  "Male Fertility Check",
  "Skin / Hair Concern",
  "Second Opinion",
];

const BOOKING_STYLES = `
/* ============================================================
   Meenakshi Hospital Fertility Center — booking flow styles.
   Injected by this component, so no separate CSS file is needed.
   The old .msb-* stylesheet can be deleted.
   ============================================================ */



.msb {
  /* Clean pure white background */
  --ink: #0f2320;
  --ink-soft: #5b736e;
  --line: #e2ece8;
  --paper: #ffffff;
  --surface: #ffffff;
  --teal: #14b8a6;
  --teal-light: #2dd4bf;
  --teal-deep: #0f766e;
  --teal-wash: #f0fdfa;
  --rose: #c0728a;
  --rose-wash: #f9edf1;
  --amber: #d69128;
  --danger: #c0392b;

  --r-sm: 10px;
  --r-md: 16px;
  --r-lg: 26px;
  --shadow: 0 4px 20px rgba(15, 35, 32, 0.05);
  --shadow-lift: 0 10px 30px rgba(15, 35, 32, 0.08);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);

  background: #ffffff;
  color: var(--ink);
  font-family: var(--text-font);
  padding: clamp(24px, 5vw, 64px) clamp(14px, 4vw, 40px) clamp(48px, 8vw, 96px);
  -webkit-font-smoothing: antialiased;
}

.msb *,
.msb *::before,
.msb *::after {
  box-sizing: border-box;
}

.msb-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.msb button {
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.msb :focus-visible {
  outline: 2px solid var(--teal);
  outline-offset: 3px;
  border-radius: 6px;
}

/* ---------------- Masthead ---------------- */

.msb-masthead {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 22px;
}

.msb-masthead-mark {
  color: var(--teal);
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  flex: none;
  border-radius: 18px;
  background: var(--surface);
  box-shadow: var(--shadow);
}

/* the one ambient loop in the whole page: a slow heartbeat on the logo */
.msb-mark-cell {
  transform-origin: 24px 21px;
  animation: msb-beat 3.4s var(--ease) infinite;
}

@keyframes msb-beat {
  0%, 62%, 100% { transform: scale(1); opacity: 1; }
  70% { transform: scale(1.32); opacity: 0.75; }
  78% { transform: scale(1); opacity: 1; }
  86% { transform: scale(1.18); opacity: 0.85; }
}

.msb-masthead-place {
  margin: 0 0 2px;
  font-size: 13px;
  letter-spacing: 0.01em;
  color: var(--ink-soft);
}

.msb-masthead-title {
  margin: 0;
  font-family: var(--title-font);
  font-weight: 600;
  font-size: clamp(22px, 3vw, 27px);
  line-height: 1.15;
  letter-spacing: -0.015em;
}

.msb-masthead-help {
  margin-left: auto;
  text-align: right;
  font-size: 13px;
  color: var(--ink-soft);
  display: grid;
  gap: 2px;
}

.msb-masthead-help a {
  color: var(--teal-deep);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid var(--teal-wash);
}

.msb-masthead-help a:hover { border-bottom-color: var(--teal); }

/* ---------------- Step rail ---------------- */

.msb-rail {
  position: relative;
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 4px 2px 12px;
  margin-bottom: 26px;
}

.msb-rail::-webkit-scrollbar { display: none; }

.msb-rail-line {
  position: absolute;
  top: 22px;
  left: 28px;
  right: 28px;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
}

.msb-rail-line-fill {
  display: block;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--teal-deep), var(--teal));
  transition: width 0.55s var(--ease);
}

.msb-node {
  position: relative;
  flex: 1 0 auto;
  min-width: 78px;
  background: none;
  border: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  gap: 8px;
  color: var(--ink-soft);
}

.msb-node:disabled { cursor: default; opacity: 0.55; }

.msb-node-dot {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--line);
  font-size: 14px;
  transition: transform 0.35s var(--ease), background 0.3s, border-color 0.3s, color 0.3s;
}

.msb-node-label {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.msb-node.is-done .msb-node-dot {
  background: var(--teal-wash);
  border-color: var(--teal);
  color: var(--teal-deep);
}

.msb-node.is-done .msb-node-label { color: var(--teal-deep); }

.msb-node.is-active .msb-node-dot {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
  transform: scale(1.14);
  box-shadow: 0 0 0 0 rgba(0, 152, 144, 0.45);
  animation: msb-halo 2.4s ease-out infinite;
}

.msb-node.is-active .msb-node-label { color: var(--ink); }

@keyframes msb-halo {
  0% { box-shadow: 0 0 0 0 rgba(0, 152, 144, 0.4); }
  70% { box-shadow: 0 0 0 14px rgba(0, 152, 144, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 152, 144, 0); }
}

.msb-node:not(:disabled):hover .msb-node-dot { transform: scale(1.08); }

/* ---------------- Layout ---------------- */

.msb-grid {
  display: grid;
  grid-template-columns: 286px minmax(0, 1fr);
  gap: 26px;
  align-items: start;
}

/* ---------------- Summary slip ---------------- */

.msb-aside { position: sticky; top: 20px; }

.msb-slip {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 22px;
  box-shadow: var(--shadow);
}

.msb-slip-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 14px;
}

.msb-slip-kicker {
  font-family: var(--title-font);
  font-size: 16.5px;
  font-weight: 600;
}

.msb-slip-count { font-size: 12px; color: var(--ink-soft); font-variant-numeric: tabular-nums; }

.msb-ring-wrap {
  position: relative;
  width: 132px;
  margin: 0 auto 18px;
}

.msb-ring { width: 132px; height: 132px; transform: rotate(-90deg); }

.msb-ring-bg,
.msb-ring-fg {
  fill: none;
  stroke-width: 9;
  stroke-linecap: round;
}

.msb-ring-bg { stroke: var(--teal-wash); }

.msb-ring-fg {
  stroke: var(--teal);
  stroke-dasharray: 326.7;
  transition: stroke-dashoffset 0.7s var(--ease);
}

.msb-ring-mid {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  text-align: center;
  line-height: 1.1;
}

.msb-ring-mid strong {
  font-family: var(--title-font);
  font-size: 22px;
  font-variant-numeric: tabular-nums;
}

.msb-ring-mid span { font-size: 11px; color: var(--ink-soft); }

.msb-slip-rows { list-style: none; margin: 0 0 16px; padding: 0; display: grid; gap: 2px; }

.msb-slip-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px dashed var(--line);
  font-size: 13px;
  opacity: 0.45;
  transition: opacity 0.3s;
}

.msb-slip-row:last-child { border-bottom: 0; }
.msb-slip-label { color: var(--ink-soft); }
.msb-slip-value { font-weight: 600; text-align: right; }

.msb-slip-row.is-filled { opacity: 1; }

/* a value landing on the slip is the feedback for "that step is locked in" */
.msb-slip-row.is-filled .msb-slip-value {
  color: var(--teal-deep);
  animation: msb-ink-in 0.5s var(--ease) both;
}

@keyframes msb-ink-in {
  from { opacity: 0; transform: translateY(6px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: blur(0); }
}



/* ---------------- Stage & panels ---------------- */

.msb-stage {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow);
  padding: clamp(22px, 3.4vw, 38px);
  min-height: 460px;
  display: flex;
  flex-direction: column;
}

.msb-panel { flex: 1; animation: msb-panel-right 0.45s var(--ease) both; }
.msb-panel.from-left { animation-name: msb-panel-left; }

@keyframes msb-panel-right {
  from { opacity: 0; transform: translateX(26px); }
  to { opacity: 1; transform: none; }
}

@keyframes msb-panel-left {
  from { opacity: 0; transform: translateX(-26px); }
  to { opacity: 1; transform: none; }
}

.msb-head { margin-bottom: 24px; }

.msb-head h2 {
  margin: 0 0 6px;
  font-family: var(--title-font);
  font-weight: 600;
  font-size: clamp(19px, 2.5vw, 23px);
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.msb-head p { margin: 0; color: var(--ink-soft); font-size: 14.5px; max-width: 62ch; }

.msb-head-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.msb-head-badge {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--teal-wash);
  color: var(--teal);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.msb-head-divider {
  border-bottom: 1px solid var(--line);
  padding-bottom: 18px;
  margin-bottom: 28px;
}

/* staggered reveal helper — only used on lists the person just opened */
.msb-doc,
.msb-doc-row,
.msb-relation,
.msb-slot,
.msb-day {
  animation: msb-rise 0.4s var(--ease) both;
  animation-delay: calc(var(--i, 0) * 32ms);
}

@keyframes msb-rise {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: none; }
}

/* ---------------- Step 1: Start card ---------------- */

.msb-start-wrap {
  display: flex;
  justify-content: flex-start;
  padding-top: 4px;
}

.msb-start-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 380px;
  padding: 38px 28px 30px;
  border: 1px solid #e2ece8;
  border-radius: 20px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.28s var(--ease);
  box-shadow: 0 4px 18px -4px rgba(15, 35, 32, 0.05);
}

.msb-start-card:hover {
  border-color: var(--teal);
  background: #f8fbfa;
  transform: translateY(-4px);
  box-shadow: 0 16px 36px -10px rgba(0, 152, 144, 0.15);
}

.msb-start-icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #e6f7f6;
  color: var(--teal);
  display: grid;
  place-items: center;
  font-size: 26px;
  margin-bottom: 18px;
  transition: transform 0.28s var(--ease);
}

.msb-start-card:hover .msb-start-icon-wrap {
  transform: scale(1.08);
}

.msb-start-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 8px;
}

.msb-start-desc {
  font-size: 14px;
  color: var(--ink-soft);
  margin: 0 0 22px;
  line-height: 1.5;
}

.msb-start-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 15px;
  box-shadow: 0 4px 14px rgba(20, 184, 166, 0.3);
  transition: all 0.25s var(--ease);
}

.msb-start-card:hover .msb-start-arrow {
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(20, 184, 166, 0.4);
}

/* ---------------- Step 2: Doctor rows (New Reference Layout) ---------------- */

.msb-doc-header-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
}

.msb-back-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #edf8f5;
  color: #0f766e;
  border: 1.5px solid #bce8df;
  border-radius: 999px;
  padding: 8px 22px;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(15, 35, 32, 0.04);
  transition: all 0.22s var(--ease);
}

.msb-back-pill-btn:hover {
  background: #d8f4ec;
  color: #0d9488;
  border-color: #9fe2d4;
  transform: translateX(-2px);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.2);
}

.msb-doc-header-title {
  display: flex;
  align-items: center;
  gap: 14px;
}

.msb-doc-header-badge {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eaf6f4;
  color: var(--teal);
  display: grid;
  place-items: center;
  font-size: 20px;
  flex-shrink: 0;
}

.msb-doc-header-title h2 {
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  line-height: 1.2;
}

.msb-doc-header-title p {
  font-size: 13.5px;
  color: var(--ink-soft);
  margin: 3px 0 0;
}

.msb-search-inline {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 260px;
  margin-left: auto;
}

.msb-search-inline i {
  position: absolute;
  left: 14px;
  font-size: 12px;
  color: var(--ink-soft);
}

.msb-search-inline input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 9px 14px 9px 34px;
  font-size: 13px;
  background: var(--surface);
  color: var(--ink);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.msb-search-inline input:focus {
  outline: none;
  border-color: var(--teal);
  box-shadow: 0 0 0 4px var(--teal-wash);
}

.msb-doc-rows {
  display: grid;
  gap: 14px;
}

.msb-doc-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 22px;
  border: 1px solid #e1e9e6;
  border-radius: 14px;
  background: var(--surface);
  cursor: pointer;
  transition: all 0.24s var(--ease);
  box-shadow: 0 1px 3px rgba(15, 35, 32, 0.03);
}

.msb-doc-row:hover {
  transform: translateY(-2px);
  border-color: #aed9d2;
  box-shadow: 0 8px 22px -6px rgba(0, 152, 144, 0.15);
}

.msb-doc-row.is-selected {
  border: 2px solid var(--teal);
  background: #fbfdfc;
  box-shadow: 0 4px 18px -4px rgba(0, 152, 144, 0.18);
}

.msb-doc-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.msb-doc-avatar-circle {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ecf8fa, #cfeff5);
  color: #007567;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 700;
  border: 2px solid #e2f4f7;
  flex-shrink: 0;
  letter-spacing: 0.5px;
}

.msb-doc-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.msb-doc-name-title {
  font-size: 15.5px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.01em;
}

.msb-doc-specialist-label {
  font-size: 13.5px;
  color: var(--ink-soft);
  font-weight: 500;
}

.msb-doc-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #edf8f5;
  color: #0f766e;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 12px;
  border-radius: 999px;
  border: 1px solid #bce8df;
  width: fit-content;
  margin-top: 2px;
}

.msb-dot-indicator {
  font-size: 8px;
  line-height: 1;
  color: #10b981;
}

.msb-doc-book-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 9px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(20, 184, 166, 0.28);
  transition: all 0.22s var(--ease);
  flex-shrink: 0;
}

.msb-doc-book-btn:hover {
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(20, 184, 166, 0.38);
}

@media (max-width: 640px) {
  .msb-doc-header-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .msb-search-inline {
    max-width: 100%;
    margin-left: 0;
  }
  .msb-doc-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .msb-doc-book-btn {
    width: 100%;
    justify-content: center;
  }
}



.msb-empty {
  display: grid;
  gap: 12px;
  justify-items: center;
  padding: 44px 20px;
  border: 1px dashed var(--line);
  border-radius: var(--r-md);
  color: var(--ink-soft);
}

.msb-empty p { margin: 0; }

/* ---------------- Step 3: profile (New Reference Layout) ---------------- */

.msb-profile-card {
  background: #ffffff;
  border: 1px solid #e2ece8;
  border-radius: 20px;
  padding: 32px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 4px 18px -4px rgba(15, 35, 32, 0.04);
}

.msb-profile-hero {
  display: flex;
  align-items: center;
  gap: 24px;
}

.msb-profile-sq-avatar {
  width: 96px;
  height: 96px;
  border-radius: 18px;
  background: linear-gradient(135deg, #e0f7f4 0%, #c4f1e9 100%);
  color: #0f766e;
  border: 2px solid #a5e6dc;
  display: grid;
  place-items: center;
  font-size: 26px;
  font-weight: 800;
  box-shadow: 0 6px 18px -4px rgba(20, 184, 166, 0.2);
  flex-shrink: 0;
  letter-spacing: 1px;
}

.msb-profile-hero-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.msb-profile-hero-name {
  font-size: 20px;
  font-weight: 800;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.015em;
}

.msb-profile-role-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #edf8f5;
  color: #0f766e;
  border: 1.5px solid #bce8df;
  border-radius: 999px;
  padding: 5px 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.msb-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

.msb-stat-item {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 24px;
  border: 1px solid #e1eee9;
  box-shadow: 0 2px 8px -2px rgba(15, 35, 32, 0.04);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  transition: transform 0.22s var(--ease), box-shadow 0.22s, border-color 0.22s;
}

.msb-stat-item:hover {
  transform: translateY(-2px);
  border-color: #9fe2d4;
  box-shadow: 0 8px 18px -4px rgba(20, 184, 166, 0.15);
}

.msb-stat-head {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  font-weight: 700;
  color: #7b948f;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin: 0;
}

.msb-stat-icon {
  font-size: 13px;
  color: #0d9488;
}

.msb-stat-text {
  display: block;
  font-size: 14.5px;
  font-weight: 700;
  color: #0f2320;
  margin: 0;
  line-height: 1.35;
}

@media (max-width: 768px) {
  .msb-stat-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

.msb-profile-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.msb-continue-cal-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(20, 184, 166, 0.3);
  transition: all 0.22s var(--ease);
}

.msb-continue-cal-btn:hover {
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(20, 184, 166, 0.4);
}

@media (max-width: 640px) {
  .msb-profile-hero {
    flex-direction: column;
    align-items: flex-start;
  }
  .msb-profile-boxes {
    grid-template-columns: 1fr;
  }
  .msb-continue-cal-btn {
    width: 100%;
    justify-content: center;
  }
}

/* ---------------- Step 4: calendar ---------------- */

.msb-cal {
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  padding: 18px;
  max-width: 520px;
}

.msb-cal-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.msb-cal-bar strong { font-family: var(--title-font); font-size: 18px; }

.msb-cal-nav {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--teal-deep);
  font-size: 12px;
  transition: background 0.2s, transform 0.2s;
}

.msb-cal-nav:hover { background: var(--teal-wash); transform: scale(1.06); }

.msb-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }

.msb-cal-dow {
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--ink-soft);
  padding-bottom: 6px;
}

.msb-day {
  aspect-ratio: 1;
  border: 0;
  border-radius: 12px;
  background: transparent;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
  transition: background 0.2s, color 0.2s, transform 0.25s var(--ease);
}

.msb-day:hover:not(:disabled) { background: var(--teal-wash); }
.msb-day:disabled { color: #b9c9c5; cursor: not-allowed; }
.msb-day.is-today { box-shadow: inset 0 0 0 1.5px var(--line); }

.msb-day.is-picked {
  background: var(--teal);
  color: #fff;
  animation: msb-pop 0.32s var(--ease);
}

@keyframes msb-pop {
  0% { transform: scale(0.82); }
  60% { transform: scale(1.09); }
  100% { transform: scale(1); }
}

.msb-cal-note { margin: 14px 0 0; font-size: 13px; color: var(--ink-soft); }
.msb-cal-note strong { color: var(--teal-deep); }

/* ---------------- Step 5: slots ---------------- */

.msb-mode { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 26px; }

.msb-mode-btn,
.msb-pay-btn {
  display: grid;
  gap: 3px;
  text-align: left;
  padding: 15px 18px;
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  background: var(--surface);
  transition: border-color 0.22s, box-shadow 0.22s, background 0.22s;
}

.msb-mode-btn span,
.msb-pay-btn span { font-size: 12.5px; color: var(--ink-soft); }

.msb-mode-btn.is-on,
.msb-pay-btn.is-on {
  border-color: var(--teal);
  background: var(--teal-wash);
  box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.1);
}

.msb-session { margin-bottom: 22px; }

.msb-session-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;
}

.msb-session-head h3 { margin: 0; font-size: 15px; }
.msb-session-head span { font-size: 12.5px; color: var(--ink-soft); }

.msb-slots { display: flex; flex-wrap: wrap; gap: 9px; }

.msb-slot {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  padding: 10px 17px;
  font-size: 13.5px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.25s var(--ease);
}

.msb-slot:hover { border-color: var(--teal); transform: translateY(-2px); }

.msb-slot.is-picked {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
  animation: msb-pop 0.32s var(--ease);
}

/* ---------------- Fields ---------------- */

.msb-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.msb-field { display: grid; gap: 7px; }
.msb-field-wide { grid-column: 1 / -1; }
.msb-field-solo { max-width: 380px; }

.msb-field label,
.msb-radio-set legend {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}

.msb-field input,
.msb-field select,
.msb-field textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  padding: 12px 14px;
  font: inherit;
  font-size: 14px;
  color: var(--ink);
  background: var(--surface);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.msb-field textarea { resize: vertical; line-height: 1.6; }

.msb-field input:focus,
.msb-field select:focus,
.msb-field textarea:focus {
  outline: none;
  border-color: var(--teal);
  box-shadow: 0 0 0 4px var(--teal-wash);
}

.msb-field input::placeholder,
.msb-field textarea::placeholder { color: #9fb3ae; }

.msb-hint { margin: 0; font-size: 12px; color: var(--ink-soft); }

.msb-error {
  margin: 0;
  font-size: 12.5px;
  color: var(--danger);
  animation: msb-shake 0.35s ease;
}

@keyframes msb-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.msb-phone {
  display: flex;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.msb-phone:focus-within { border-color: var(--teal); box-shadow: 0 0 0 4px var(--teal-wash); }

.msb-phone-code {
  padding: 12px 12px 12px 14px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  border-right: 1px solid var(--line);
  background: var(--paper);
}

.msb-phone input {
  border: 0;
  border-radius: 0;
  letter-spacing: 0.06em;
  font-variant-numeric: tabular-nums;
}

.msb-phone input:focus { box-shadow: none; }

.msb-inline-link {
  background: none;
  border: 0;
  padding: 0;
  color: var(--teal-deep);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ---------------- OTP ---------------- */

.msb-otp { display: flex; gap: 12px; margin-bottom: 16px; }

.msb-otp input {
  width: 58px;
  height: 66px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  color: var(--ink);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.25s var(--ease);
}

.msb-otp input:focus {
  outline: none;
  border-color: var(--teal);
  box-shadow: 0 0 0 4px var(--teal-wash);
  transform: translateY(-3px);
}

.msb-otp input.is-filled {
  border-color: var(--teal);
  background: var(--teal-wash);
  animation: msb-pop 0.28s var(--ease);
}

.msb-otp-foot {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--ink-soft);
}

.msb-test-note {
  background: var(--rose-wash);
  color: var(--rose);
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
}

/* ---------------- Step 8 ---------------- */

.msb-relations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 26px;
}

.msb-relation {
  display: grid;
  gap: 10px;
  justify-items: center;
  padding: 20px 14px;
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  background: var(--surface);
  font-size: 13.5px;
  font-weight: 600;
  transition: border-color 0.22s, transform 0.25s var(--ease), background 0.22s;
}

.msb-relation i { font-size: 19px; color: var(--teal); transition: transform 0.3s var(--ease); }
.msb-relation:hover { transform: translateY(-3px); border-color: var(--teal); }

.msb-relation.is-picked {
  border-color: var(--teal);
  background: var(--teal-wash);
}

.msb-relation.is-picked i { color: var(--rose); transform: scale(1.18); }

.msb-radio-set { border: 0; padding: 0; margin: 0; display: grid; gap: 10px; }
.msb-radio-set legend { margin-bottom: 4px; padding: 0; }

.msb-radio {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  cursor: pointer;
  transition: border-color 0.22s, background 0.22s;
}

.msb-radio input { accent-color: var(--teal); margin-top: 3px; }
.msb-radio span { display: grid; gap: 2px; }
.msb-radio strong { font-size: 14px; }
.msb-radio em { font-style: normal; font-size: 12.5px; color: var(--ink-soft); }
.msb-radio.is-picked { border-color: var(--teal); background: var(--teal-wash); }

/* ---------------- Step 9: Personal Information Card ---------------- */

.pi-wrapper {
  width: 100%;
}

.pi-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px 28px 24px;
  box-shadow: 0 4px 20px -2px rgba(15, 35, 32, 0.04);
}

.pi-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}

.pi-header-icon-box {
  font-size: 20px;
  color: #0f766e;
  display: inline-flex;
  align-items: center;
}

.pi-header-title {
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}

.pi-row {
  display: grid;
  gap: 16px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.pi-row-name {
  grid-template-columns: 120px 1.4fr 1.3fr 1.3fr;
}

.pi-row-demographics {
  grid-template-columns: auto 1.3fr 1.2fr;
  gap: 20px;
}

.pi-row-phone {
  grid-template-columns: 1fr;
  max-width: 420px;
}

.pi-row-reason {
  grid-template-columns: 1fr;
  margin-bottom: 0;
}

.pi-field {
  display: flex;
  flex-direction: column;
}

.pi-label {
  display: block;
  font-size: 13.5px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 7px;
  letter-spacing: -0.005em;
}

.pi-req {
  color: #ef4444;
  margin-left: 2px;
  font-weight: 700;
}

.pi-input-wrap {
  position: relative;
  width: 100%;
}

.pi-input,
.pi-select {
  width: 100%;
  height: 44px;
  padding: 10px 14px;
  border: 1.5px solid #d1d5db;
  border-radius: 9px;
  background: #ffffff;
  color: #0f172a;
  font-family: inherit;
  font-size: 14.5px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.pi-input::placeholder,
.pi-textarea::placeholder {
  color: #94a3b8;
}

.pi-input:focus,
.pi-select:focus,
.pi-textarea:focus {
  outline: none;
  border-color: #009890;
  box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.12);
}

.pi-select {
  cursor: pointer;
  appearance: auto;
}

.pi-input-readonly {
  background: #f8fafc !important;
  border-color: #e2e8f0 !important;
  color: #64748b !important;
  cursor: default !important;
}

.pi-input-wrap.is-error .pi-input {
  border-color: #ef4444 !important;
  background: #fffafa;
  padding-right: 36px;
}

.pi-input-error-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #ef4444;
  font-size: 15px;
  pointer-events: none;
}

.pi-error-msg {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  color: #ef4444;
}

/* Gender Pills */
.pi-gender-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pi-gender-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1.5px solid #e2e8f0;
  background: #ffffff;
  color: #334155;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pi-gender-pill:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.pi-gender-pill.is-active {
  background: #009890;
  border-color: #009890;
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 152, 144, 0.28);
}

.pi-gender-pill.is-active i {
  color: #ffffff;
}

/* Date input */
.pi-date-input {
  cursor: pointer;
}

/* Phone Group */
.pi-phone-group {
  display: flex;
  align-items: center;
  border: 1.5px solid #d1d5db;
  border-radius: 9px;
  background: #ffffff;
  overflow: hidden;
  height: 44px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.pi-phone-group:focus-within {
  border-color: #009890;
  box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.12);
}

.pi-phone-addon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  height: 100%;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  color: #334155;
  font-size: 14px;
  font-weight: 600;
  user-select: none;
}

.pi-phone-addon i {
  font-size: 12.5px;
  color: #64748b;
}

.pi-phone-input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 14px;
  font-family: inherit;
  font-size: 14.5px;
  color: #0f172a;
  background: transparent;
}

/* Textarea */
.pi-textarea {
  width: 100%;
  border: 1.5px solid #d1d5db;
  border-radius: 9px;
  padding: 12px 14px;
  font-family: inherit;
  font-size: 14.5px;
  color: #0f172a;
  background: #ffffff;
  min-height: 88px;
  resize: vertical;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .pi-row-name {
    grid-template-columns: 1fr 1fr;
  }
  .pi-row-demographics {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 580px) {
  .pi-card {
    padding: 20px 18px;
  }
  .pi-row-name {
    grid-template-columns: 1fr;
  }
  .pi-gender-pills {
    width: 100%;
  }
  .pi-gender-pill {
    flex: 1;
    justify-content: center;
    padding: 8px 12px;
  }
}

/* ---------------- Step 10 ---------------- */

.msb-review {
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  overflow: hidden;
  margin-bottom: 22px;
}

.msb-review-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 20px 22px;
  background: linear-gradient(135deg, var(--teal-deep), var(--teal));
  color: #fff;
}

.msb-review-head span { font-size: 12.5px; opacity: 0.85; display: block; margin-bottom: 3px; }
.msb-review-head strong { font-size: 17px; font-family: var(--title-font); font-weight: 600; }



.msb-review-list > div,
.msb-token-list > div {
  display: grid;
  grid-template-columns: 116px 1fr;
  gap: 14px;
  padding: 13px 22px;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
}

.msb-review-list > div:last-child,
.msb-token-list > div:last-child { border-bottom: 0; }

.msb-review-list dt,
.msb-token-list dt { color: var(--ink-soft); font-size: 13px; }

.msb-review-list dd,
.msb-token-list dd { margin: 0; font-weight: 600; }

.msb-pay { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ---------------- Footer nav ---------------- */

.msb-nav {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 30px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.msb-btn-primary,
.msb-btn-ghost {
  border-radius: 999px;
  padding: 13px 28px;
  font-size: 14.5px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: transform 0.22s var(--ease), box-shadow 0.22s, background 0.22s, color 0.22s;
}

.msb-btn-primary {
  background: linear-gradient(135deg, #14b8a6, #2dd4bf);
  color: #fff;
  box-shadow: 0 4px 16px -2px rgba(20, 184, 166, 0.35);
}

.msb-btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px -2px rgba(20, 184, 166, 0.45);
}
.msb-btn-primary:active:not(:disabled) { transform: translateY(0) scale(0.985); }

.msb-btn-primary:disabled {
  background: #e2edea;
  color: #94a9a4;
  box-shadow: none;
  cursor: not-allowed;
}

.msb-btn-ghost {
  background: #edf8f5;
  border: 1.5px solid #bce8df;
  color: #0f766e;
  font-weight: 700;
}
.msb-btn-ghost:hover {
  border-color: #9fe2d4;
  color: #0d9488;
  background: #d8f4ec;
}

/* ---------------- Confirmed ---------------- */

.msb-done { text-align: center; padding: 8px 0 4px; }

.msb-done-mark { color: var(--teal); display: grid; place-items: center; margin-bottom: 18px; }

.msb-done-ring {
  fill: none;
  stroke: var(--teal-wash);
  stroke-width: 6;
  stroke-dasharray: 214;
  animation: msb-draw 0.7s var(--ease) both;
}

.msb-done-tick {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: msb-draw-tick 0.5s var(--ease) 0.45s both;
}

@keyframes msb-draw {
  from { stroke-dashoffset: 214; }
  to { stroke-dashoffset: 0; }
}

@keyframes msb-draw-tick {
  from { stroke-dashoffset: 60; }
  to { stroke-dashoffset: 0; }
}

.msb-done-title {
  margin: 0 0 8px;
  font-family: var(--title-font);
  font-weight: 600;
  font-size: clamp(20px, 2.5vw, 24px);
}

.msb-done-sub {
  margin: 0 auto 26px;
  max-width: 52ch;
  color: var(--ink-soft);
  font-size: 14.5px;
  line-height: 1.6;
}

.msb-token {
  max-width: 520px;
  margin: 0 auto 26px;
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  overflow: hidden;
  text-align: left;
}

.msb-token-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  background: var(--teal-wash);
  border-bottom: 1px solid var(--line);
}

.msb-token-code span { font-size: 13px; color: var(--ink-soft); }

.msb-token-code strong {
  font-family: var(--title-font);
  font-size: 18px;
  color: var(--teal-deep);
  letter-spacing: 0.02em;
}

.msb-done-actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }

/* ---------------- Responsive ---------------- */

@media (max-width: 960px) {
  .msb-grid { grid-template-columns: 1fr; }
  .msb-aside { position: static; order: 2; }
  .msb-stage { order: 1; }
  .msb-ring-wrap { display: none; }
  .msb-slip { display: grid; gap: 10px; }
}

@media (max-width: 640px) {
  .msb-masthead { flex-wrap: wrap; gap: 14px; }
  .msb-masthead-help { margin-left: 0; text-align: left; width: 100%; }
  .msb-node { min-width: 66px; }
  .msb-node-label { font-size: 10.5px; }
  .msb-form,
  .msb-mode,
  .msb-pay { grid-template-columns: 1fr; }
  .msb-doc { flex-direction: column; }
  .msb-otp input { width: 100%; height: 60px; font-size: 21px; }
  .msb-nav { flex-direction: column-reverse; }
  .msb-nav button { width: 100%; }
  .msb-review-list > div,
  .msb-token-list > div { grid-template-columns: 1fr; gap: 3px; }
}

/* ---------------- Motion preferences & print ---------------- */

@media (prefers-reduced-motion: reduce) {
  .msb *,
  .msb *::before,
  .msb *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

@media print {
  .msb-rail,
  .msb-aside,
  .msb-nav,
  .msb-done-actions,
  .msb-masthead-help { display: none !important; }
  .msb { background: #fff; padding: 0; }
  .msb-stage { border: 0; box-shadow: none; padding: 0; }
}
`;

export default function MultiStepBooking() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  /** +1 = moving forward, -1 = moving back. Drives the panel slide direction. */
  const [direction, setDirection] = useState<1 | -1>(1);

  // Form selections state
  const [selectedSpeciality, setSelectedSpeciality] = useState<Specialisation>(SPECIALISATIONS[0]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);
  const [consultationType, setConsultationType] = useState<"in_hospital" | "video">("in_hospital");
  const [visitReason, setVisitReason] = useState<string>(VISIT_REASONS[0]);

  // Step 1 entry path
  const [entryPath, setEntryPath] = useState<"none" | "speciality">("none");

  // Doctor filter & search state
  const [doctorFilter, setDoctorFilter] = useState<string>("all");
  const [doctorSearchQuery, setDoctorSearchQuery] = useState<string>("");

  // Date selection state
  const [today] = useState<Date>(() => new Date());
  const [calendarMonth, setCalendarMonth] = useState<number>(today.getMonth());
  const [calendarYear, setCalendarYear] = useState<number>(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
  );

  // Time slot state
  const [selectedSlot, setSelectedSlot] = useState<string>("10:30 AM");

  // Mobile / OTP state
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState<number>(30);

  // Patient state & Personal Information (matching user UI design)
  const [patientType, setPatientType] = useState<string>("Myself");
  const [isNewPatient, setIsNewPatient] = useState<boolean>(true);
  const [patientTitle, setPatientTitle] = useState<string>("Mr.");
  const [patientFirstName, setPatientFirstName] = useState<string>("");
  const [patientMiddleName, setPatientMiddleName] = useState<string>("");
  const [patientLastName, setPatientLastName] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");
  const [patientDob, setPatientDob] = useState<string>("");
  const [patientAge, setPatientAge] = useState<string>("");
  const [patientGender, setPatientGender] = useState<string>("Male");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientEmail, setPatientEmail] = useState<string>("");
  const [patientCity, setPatientCity] = useState<string>("");
  const [patientNotes, setPatientNotes] = useState<string>("");
  const [patientTouched, setPatientTouched] = useState<{ [key: string]: boolean }>({});

  // Payment & confirmation
  const [paymentOption, setPaymentOption] = useState<"hospital" | "online">("hospital");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [appointmentRef, setAppointmentRef] = useState<string>("");

  const stageRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  // OTP countdown
  useEffect(() => {
    if (currentStep !== 7 || otpTimer <= 0) return;
    const interval = setInterval(() => setOtpTimer((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [currentStep, otpTimer]);

  // Keep the active node of the mobile step rail in view
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const node = rail.querySelector<HTMLElement>(`[data-step="${currentStep}"]`);
    node?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [currentStep]);

  const goToStep = (step: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrentStep(step);
    stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextStep = () => currentStep < 10 && goToStep(currentStep + 1, 1);
  const prevStep = () => currentStep > 1 && goToStep(currentStep - 1, -1);
  const jumpToStep = (stepId: number) => {
    if (stepId <= currentStep) goToStep(stepId, stepId < currentStep ? -1 : 1);
  };

  const handleSelectSpeciality = (spec: Specialisation) => {
    setSelectedSpeciality(spec);
    setDoctorFilter(spec.id);
    const relevantDoc = DOCTORS.find((d) => d.specialityId === spec.id) || DOCTORS[0];
    setSelectedDoctor(relevantDoc);
    nextStep();
  };

  const handleConfirmBooking = () => {
    setAppointmentRef("MHFC-" + Math.floor(100000 + Math.random() * 900000));
    setBookingConfirmed(true);
    stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const resetBooking = () => {
    setBookingConfirmed(false);
    goToStep(1, -1);
  };

  // Calendar helpers
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else setCalendarMonth((m) => m - 1);
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else setCalendarMonth((m) => m + 1);
  };

  const handleOtpChange = (index: number, raw: string) => {
    const val = raw.replace(/\D/g, "").slice(-1);
    const newOtp = [...otpValues];
    newOtp[index] = val;
    setOtpValues(newOtp);
    if (val && index < 3) document.getElementById(`otp-input-${index + 1}`)?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  const updatePatientName = (
    title = patientTitle,
    first = patientFirstName,
    mid = patientMiddleName,
    last = patientLastName
  ) => {
    const full = [title, first, mid, last].filter(Boolean).join(" ");
    setPatientName(full);
  };

  const handleDobChange = (dobValue: string) => {
    setPatientDob(dobValue);
    if (!dobValue) {
      setPatientAge("");
      return;
    }
    const birthDate = new Date(dobValue);
    const today = new Date();
    if (isNaN(birthDate.getTime())) {
      setPatientAge("");
      return;
    }
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    if (calculatedAge >= 0 && calculatedAge <= 120) {
      setPatientAge(`${calculatedAge}`);
    } else {
      setPatientAge("");
    }
  };

  const handlePhoneChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 10);
    setPatientPhone(clean);
    setMobileNumber(clean);
  };

  useEffect(() => {
    if (currentStep === 9 && !patientPhone && mobileNumber) {
      setPatientPhone(mobileNumber);
    }
  }, [currentStep, mobileNumber, patientPhone]);

  // Validation per step — the Continue button reflects reality instead of always being live
  const canContinue = (): boolean => {
    switch (currentStep) {
      case 6:
        return /^[6-9]\d{9}$/.test(mobileNumber);
      case 7:
        return otpValues.every((d) => d !== "");
      case 9:
        return (
          patientFirstName.trim().length > 0 &&
          patientLastName.trim().length > 0 &&
          patientDob.trim() !== "" &&
          ((patientPhone || mobileNumber).trim().length === 10)
        );
      default:
        return true;
    }
  };

  const displayDoctors = DOCTORS.filter((doc) => {
    const q = doctorSearchQuery.trim().toLowerCase();
    if (!q) return true;
    const spec = SPECIALISATIONS.find((s) => s.id === doc.specialityId);
    return (
      doc.name.toLowerCase().includes(q) ||
      doc.role.toLowerCase().includes(q) ||
      doc.qualification.toLowerCase().includes(q) ||
      (spec && spec.name.toLowerCase().includes(q))
    );
  });

  const dateLabel = selectedDate.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  // Rows for the live summary rail — they fill in as the person moves through
  const railRows: { key: string; label: string; value: string | null }[] = [
    { key: "doc", label: "Doctor", value: currentStep >= 3 ? selectedDoctor.name : null },
    { key: "spec", label: "Speciality", value: currentStep >= 3 ? selectedSpeciality.name : null },
    { key: "date", label: "Date", value: currentStep >= 5 ? dateLabel : null },
    { key: "slot", label: "Time", value: currentStep >= 6 ? selectedSlot : null },
    { key: "mob", label: "Mobile", value: currentStep >= 8 && mobileNumber ? `+91 ${mobileNumber}` : null },
    { key: "pat", label: "Patient", value: currentStep >= 10 && patientName ? patientName : null },
  ];

  const panelKey = bookingConfirmed ? "done" : `step-${currentStep}`;

  return (
    <section className="msb">
      <style dangerouslySetInnerHTML={{ __html: BOOKING_STYLES }} />

      <div className="msb-shell">
        {/* ---------- Masthead ---------- */}
        <header className="msb-masthead">
          <div className="msb-masthead-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
              <path
                d="M24 41S9 31.5 9 20.5C9 14.7 13.4 10 19 10c2.6 0 4.6 1.2 5 2.9.4-1.7 2.4-2.9 5-2.9 5.6 0 10 4.7 10 10.5C39 31.5 24 41 24 41z"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <circle className="msb-mark-cell" cx="24" cy="21" r="4.2" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p className="msb-masthead-place">Meenakshi Hospital · Dharmapuri</p>
            <h1 className="msb-masthead-title">Book a consultation</h1>
          </div>
          <div className="msb-masthead-help">
            <span>Need help booking?</span>
            <a href="tel:+919000000000">Call  04342 - 269010 </a>
          </div>
        </header>

        {/* ---------- Step rail (horizontal on mobile) ---------- */}
        <nav className="msb-rail" ref={railRef} aria-label="Booking steps">
          <div className="msb-rail-line">
            <span
              className="msb-rail-line-fill"
              style={{ width: `${((currentStep - 1) / 9) * 100}%` }}
            />
          </div>
          {STEP_DEFINITIONS.map((step) => {
            const isActive = !bookingConfirmed && currentStep === step.id;
            const isDone = bookingConfirmed || currentStep > step.id;
            return (
              <button
                key={step.id}
                type="button"
                data-step={step.id}
                className={`msb-node ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}`}
                onClick={() => jumpToStep(step.id)}
                disabled={!isDone && !isActive}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="msb-node-dot">
                  {isDone ? <i className="fas fa-check" /> : <i className={step.icon} />}
                </span>
                <span className="msb-node-label">{step.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="msb-grid">
          {/* ---------- Live summary rail ---------- */}
          <aside className="msb-aside">
            <div className="msb-slip">
              <div className="msb-slip-head">
                <span className="msb-slip-kicker">Your slip</span>
                <span className="msb-slip-count">{Math.min(currentStep, 10)}/10</span>
              </div>

              <div className="msb-ring-wrap">
                <svg viewBox="0 0 120 120" className="msb-ring">
                  <circle className="msb-ring-bg" cx="60" cy="60" r="52" />
                  <circle
                    className="msb-ring-fg"
                    cx="60"
                    cy="60"
                    r="52"
                    style={{
                      strokeDashoffset:
                        326.7 - (326.7 * (bookingConfirmed ? 10 : currentStep)) / 10,
                    }}
                  />
                </svg>
                <div className="msb-ring-mid">
                  <strong>{bookingConfirmed ? 100 : Math.round((currentStep / 10) * 100)}%</strong>
                  <span>done</span>
                </div>
              </div>

              <ul className="msb-slip-rows">
                {railRows.map((row) => (
                  <li
                    key={row.key}
                    className={`msb-slip-row ${row.value ? "is-filled" : ""}`}
                  >
                    <span className="msb-slip-label">{row.label}</span>
                    <span className="msb-slip-value">{row.value ?? "—"}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ---------- Stage ---------- */}
          <main className="msb-stage" ref={stageRef}>
            <div
              key={panelKey}
              className={`msb-panel ${direction === 1 ? "from-right" : "from-left"}`}
            >
              {bookingConfirmed ? (
                /* ================= Confirmed ================= */
                <div className="msb-done">
                  <div className="msb-done-mark">
                    <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
                      <circle className="msb-done-ring" cx="40" cy="40" r="34" />
                      <path
                        className="msb-done-tick"
                        d="M25 41.5 35.5 52 56 30"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h2 className="msb-done-title">Your appointment is booked</h2>
                  <p className="msb-done-sub">
                    A confirmation SMS is on its way to +91 {mobileNumber}. Reach the front desk
                    15 minutes early with an ID proof.
                  </p>

                  <div className="msb-token">
                    <div className="msb-token-code">
                      <span>Token</span>
                      <strong>{appointmentRef}</strong>
                    </div>
                    <dl className="msb-token-list">
                      <div>
                        <dt>Doctor</dt>
                        <dd>{selectedDoctor.name}</dd>
                      </div>
                      <div>
                        <dt>When</dt>
                        <dd>
                          {selectedDate.toLocaleDateString("en-IN", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })}
                          , {selectedSlot}
                        </dd>
                      </div>
                      <div>
                        <dt>Where</dt>
                        <dd>
                          {consultationType === "in_hospital"
                            ? "Meenakshi Hospital, Dharmapuri"
                            : "Video consultation link on SMS"}
                        </dd>
                      </div>
                      <div>
                        <dt>Payment</dt>
                        <dd>{paymentOption === "hospital" ? "Pay at the counter" : "Paid online"}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="msb-done-actions">
                    <button type="button" className="msb-btn-primary" onClick={() => window.print()}>
                      Print slip
                    </button>
                    <button type="button" className="msb-btn-ghost" onClick={resetBooking}>
                      Book another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* ================= Step 1 ================= */}
                  {currentStep === 1 && (
                    <>
                      <div className="msb-head msb-head-divider">
                        <div className="msb-head-row">
                          <span className="msb-head-badge">
                            <i className="far fa-calendar-check" />
                          </span>
                          <h2>Book Your Appointment</h2>
                        </div>
                      </div>

                      <div className="msb-start-wrap">
                        <button
                          type="button"
                          className="msb-start-card"
                          onClick={() => nextStep()}
                        >
                          <div className="msb-start-icon-wrap">
                            <i className="fas fa-id-badge" />
                          </div>
                          <strong className="msb-start-title">Choose Your Doctor</strong>
                          <span className="msb-start-desc">
                            Pick a doctor directly and book your slot
                          </span>
                          <span className="msb-start-arrow" aria-hidden="true">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </button>
                      </div>
                    </>
                  )}

                  {/* ================= Step 2 ================= */}
                  {currentStep === 2 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to start"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="fas fa-id-badge" />
                          </span>
                          <div>
                            <h2>Choose Your Doctor</h2>
                            <p>All Available Doctors</p>
                          </div>
                        </div>

                        <div className="msb-search-inline">
                          <i className="fas fa-search" aria-hidden="true" />
                          <input
                            type="search"
                            placeholder="Search doctor by name..."
                            value={doctorSearchQuery}
                            onChange={(e) => setDoctorSearchQuery(e.target.value)}
                            aria-label="Search doctors by name"
                          />
                        </div>
                      </div>

                      {displayDoctors.length === 0 ? (
                        <div className="msb-empty">
                          <p>No doctor matches that search.</p>
                          <button
                            type="button"
                            className="msb-btn-ghost"
                            onClick={() => {
                              setDoctorSearchQuery("");
                              setDoctorFilter("all");
                            }}
                          >
                            Show all doctors
                          </button>
                        </div>
                      ) : (
                        <div className="msb-doc-rows">
                          {displayDoctors.map((doc, i) => {
                            const isSelected = selectedDoctor.id === doc.id;
                            const initials = getDoctorInitials(doc.name);
                            return (
                              <div
                                key={doc.id}
                                className={`msb-doc-row ${isSelected ? "is-selected" : ""}`}
                                style={{ ["--i" as string]: i }}
                                onClick={() => {
                                  setSelectedDoctor(doc);
                                  const match = SPECIALISATIONS.find((s) => s.id === doc.specialityId);
                                  if (match) setSelectedSpeciality(match);
                                }}
                              >
                                <div className="msb-doc-left">
                                  <div className="msb-doc-avatar-circle">
                                    <span>{initials}</span>
                                  </div>

                                  <div className="msb-doc-info">
                                    <h3 className="msb-doc-name-title">
                                      {doc.name.toUpperCase()}
                                    </h3>
                                    <span className="msb-doc-specialist-label">
                                      Specialist
                                    </span>
                                    <span className="msb-doc-status-badge">
                                      <span className="msb-dot-indicator">●</span> Consultant
                                    </span>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className="msb-doc-book-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedDoctor(doc);
                                    const match = SPECIALISATIONS.find((s) => s.id === doc.specialityId);
                                    if (match) setSelectedSpeciality(match);
                                    nextStep();
                                  }}
                                >
                                  <i className="far fa-calendar-check" />
                                  <span>Book</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}

                  {/* ================= Step 3 ================= */}
                  {currentStep === 3 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to doctors"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="fas fa-id-badge" />
                          </span>
                          <div>
                            <h2>Doctor Profile</h2>
                            <p>Review the doctor's details before proceeding</p>
                          </div>
                        </div>
                      </div>

                      <div className="msb-profile-card">
                        <div className="msb-profile-hero">
                          <div className="msb-profile-sq-avatar">
                            <span>{getDoctorInitials(selectedDoctor.name)}</span>
                          </div>
                          <div className="msb-profile-hero-info">
                            <h3 className="msb-profile-hero-name">
                              {selectedDoctor.name.toUpperCase()}
                            </h3>
                            <span className="msb-profile-role-badge">
                              <i className="fas fa-check-circle" /> {selectedDoctor.role.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="msb-stat-grid">
                          <div className="msb-stat-item">
                            <div className="msb-stat-head">
                              <i className="far fa-lightbulb msb-stat-icon" />
                              <span>Specialisation</span>
                            </div>
                            <strong className="msb-stat-text">
                              {selectedSpeciality.name}
                            </strong>
                          </div>

                          <div className="msb-stat-item">
                            <div className="msb-stat-head">
                              <i className="far fa-building msb-stat-icon" />
                              <span>Department</span>
                            </div>
                            <strong className="msb-stat-text">
                              OUT PATIENT
                            </strong>
                          </div>

                          <div className="msb-stat-item">
                            <div className="msb-stat-head">
                              <i className="fas fa-hospital msb-stat-icon" />
                              <span>Hospital</span>
                            </div>
                            <strong className="msb-stat-text">
                              Meenakshi Hospital, Dharmapuri
                            </strong>
                          </div>
                        </div>
                      </div>

                      <div className="msb-profile-actions">
                        <button
                          type="button"
                          className="msb-continue-cal-btn"
                          onClick={nextStep}
                        >
                          <span>Continue to Calendar</span>
                          <i className="fas fa-arrow-right" />
                        </button>
                      </div>
                    </>
                  )}

                  {/* ================= Step 4 ================= */}
                  {currentStep === 4 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to doctor profile"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="far fa-calendar-alt" />
                          </span>
                          <div>
                            <h2>Pick a date</h2>
                            <p>Open days for {selectedDoctor.name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="msb-cal">
                        <div className="msb-cal-bar">
                          <button
                            type="button"
                            className="msb-cal-nav"
                            onClick={handlePrevMonth}
                            aria-label="Previous month"
                          >
                            <i className="fas fa-chevron-left" />
                          </button>
                          <strong>
                            {monthNames[calendarMonth]} {calendarYear}
                          </strong>
                          <button
                            type="button"
                            className="msb-cal-nav"
                            onClick={handleNextMonth}
                            aria-label="Next month"
                          >
                            <i className="fas fa-chevron-right" />
                          </button>
                        </div>

                        <div className="msb-cal-grid">
                          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                            <span key={i} className="msb-cal-dow">
                              {d}
                            </span>
                          ))}

                          {Array.from({ length: firstDayIndex }).map((_, i) => (
                            <span key={`pad-${i}`} />
                          ))}

                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dayNumber = i + 1;
                            const cellDate = new Date(calendarYear, calendarMonth, dayNumber);
                            const startOfToday = new Date(
                              today.getFullYear(),
                              today.getMonth(),
                              today.getDate()
                            );
                            const isPast = cellDate < startOfToday;
                            const isSunday = cellDate.getDay() === 0;
                            const isToday = cellDate.toDateString() === today.toDateString();
                            const isSelected =
                              cellDate.toDateString() === selectedDate.toDateString();
                            const blocked = isPast || isSunday;

                            return (
                              <button
                                key={dayNumber}
                                type="button"
                                disabled={blocked}
                                className={`msb-day ${isToday ? "is-today" : ""} ${
                                  isSelected ? "is-picked" : ""
                                }`}
                                style={{ ["--i" as string]: i }}
                                onClick={() => setSelectedDate(cellDate)}
                              >
                                {dayNumber}
                              </button>
                            );
                          })}
                        </div>

                        <p className="msb-cal-note">
                          Sundays are closed. Selected:{" "}
                          <strong>
                            {selectedDate.toLocaleDateString("en-IN", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </strong>
                        </p>
                      </div>
                    </>
                  )}

                  {/* ================= Step 5 ================= */}
                  {currentStep === 5 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to calendar"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="far fa-clock" />
                          </span>
                          <div>
                            <h2>Pick a time</h2>
                            <p>Slots open on {dateLabel}</p>
                          </div>
                        </div>
                      </div>

                      {[
                        {
                          title: "Morning",
                          hint: "9:00 – 11:30",
                          slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
                        },
                        {
                          title: "Afternoon",
                          hint: "1:00 – 2:30",
                          slots: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
                        },
                        {
                          title: "Evening",
                          hint: "5:00 – 7:00",
                          slots: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
                        },
                      ].map((session, si) => (
                        <div key={session.title} className="msb-session">
                          <div className="msb-session-head">
                            <h3>{session.title}</h3>
                            <span>{session.hint}</span>
                          </div>
                          <div className="msb-slots">
                            {session.slots.map((time, i) => (
                              <button
                                key={time}
                                type="button"
                                className={`msb-slot ${selectedSlot === time ? "is-picked" : ""}`}
                                style={{ ["--i" as string]: si * 3 + i }}
                                onClick={() => setSelectedSlot(time)}
                                aria-pressed={selectedSlot === time}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* ================= Step 6 ================= */}
                  {currentStep === 6 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to time slots"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="fas fa-mobile-alt" />
                          </span>
                          <div>
                            <h2>What is your mobile number?</h2>
                            <p>We send confirmation & updates to this number</p>
                          </div>
                        </div>
                      </div>

                      <div className="msb-field msb-field-solo">
                        <label htmlFor="msb-mobile">Mobile number</label>
                        <div className="msb-phone">
                          <span className="msb-phone-code">+91</span>
                          <input
                            id="msb-mobile"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                            placeholder="10-digit number"
                            autoComplete="tel-national"
                          />
                        </div>
                        {mobileNumber.length > 0 && !canContinue() && (
                          <p className="msb-error">Enter a valid 10-digit Indian mobile number.</p>
                        )}
                        <p className="msb-hint">
                          Used only for this appointment. No marketing messages.
                        </p>
                      </div>
                    </>
                  )}

                  {/* ================= Step 7 ================= */}
                  {currentStep === 7 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to mobile number"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="fas fa-shield-alt" />
                          </span>
                          <div>
                            <h2>Enter the code we sent</h2>
                            <p>
                              A 4-digit code went to +91 {mobileNumber}.{" "}
                              <button type="button" className="msb-inline-link" onClick={prevStep}>
                                Change number
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="msb-otp">
                        {otpValues.map((digit, idx) => (
                          <input
                            key={idx}
                            id={`otp-input-${idx}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className={digit ? "is-filled" : ""}
                            value={digit}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                            aria-label={`Digit ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <div className="msb-otp-foot">
                        {otpTimer > 0 ? (
                          <span>Resend in {otpTimer}s</span>
                        ) : (
                          <button
                            type="button"
                            className="msb-inline-link"
                            onClick={() => setOtpTimer(30)}
                          >
                            Send the code again
                          </button>
                        )}
                        <span className="msb-test-note">Test mode code: 1 2 3 4</span>
                      </div>
                    </>
                  )}

                  {/* ================= Step 8 ================= */}
                  {currentStep === 8 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to verification"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="fas fa-users" />
                          </span>
                          <div>
                            <h2>Who is the visit for?</h2>
                            <p>This helps the front desk pull up the right record</p>
                          </div>
                        </div>
                      </div>

                      <div className="msb-relations">
                        {[
                          { type: "Myself", icon: "fas fa-user" },
                          { type: "Spouse or partner", icon: "fas fa-heart" },
                          { type: "Child", icon: "fas fa-child" },
                          { type: "Parent", icon: "fas fa-user-friends" },
                        ].map((item, i) => (
                          <button
                            key={item.type}
                            type="button"
                            className={`msb-relation ${patientType === item.type ? "is-picked" : ""}`}
                            style={{ ["--i" as string]: i }}
                            onClick={() => setPatientType(item.type)}
                            aria-pressed={patientType === item.type}
                          >
                            <i className={item.icon} aria-hidden="true" />
                            <span>{item.type}</span>
                          </button>
                        ))}
                      </div>

                      <fieldset className="msb-radio-set">
                        <legend>Have you visited us before?</legend>
                        <label className={`msb-radio ${isNewPatient ? "is-picked" : ""}`}>
                          <input
                            type="radio"
                            name="patientStatus"
                            checked={isNewPatient}
                            onChange={() => setIsNewPatient(true)}
                          />
                          <span>
                            <strong>First visit</strong>
                            <em>We will create a new record</em>
                          </span>
                        </label>
                        <label className={`msb-radio ${!isNewPatient ? "is-picked" : ""}`}>
                          <input
                            type="radio"
                            name="patientStatus"
                            checked={!isNewPatient}
                            onChange={() => setIsNewPatient(false)}
                          />
                          <span>
                            <strong>Visited before</strong>
                            <em>Carry the existing hospital number</em>
                          </span>
                        </label>
                      </fieldset>
                    </>
                  )}

                  {/* ================= Step 9 ================= */}
                  {currentStep === 9 && (
                    <div className="pi-wrapper">
                      <div className="msb-doc-header-row" style={{ marginBottom: "16px" }}>
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to visit type"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>
                      </div>

                      <div className="pi-card">
                        {/* Header */}
                        <div className="pi-header">
                          <span className="pi-header-icon-box">
                            <i className="far fa-address-card" />
                          </span>
                          <h3 className="pi-header-title">Personal Information</h3>
                        </div>

                        {/* Row 1: Title, First Name, Middle Name, Last Name */}
                        <div className="pi-row pi-row-name">
                          {/* Title */}
                          <div className="pi-field pi-field-title">
                            <label className="pi-label">
                              Title <span className="pi-req">*</span>
                            </label>
                            <div className="pi-select-wrap">
                              <select
                                className="pi-select"
                                value={patientTitle}
                                onChange={(e) => {
                                  const t = e.target.value;
                                  setPatientTitle(t);
                                  updatePatientName(t, patientFirstName, patientMiddleName, patientLastName);
                                }}
                              >
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Master">Master</option>
                              </select>
                            </div>
                          </div>

                          {/* First Name */}
                          <div className="pi-field pi-field-first">
                            <label className="pi-label">
                              First Name <span className="pi-req">*</span>
                            </label>
                            <div className={`pi-input-wrap ${patientTouched.firstName && !patientFirstName.trim() ? "is-error" : ""}`}>
                              <input
                                type="text"
                                className="pi-input"
                                placeholder="Enter first name"
                                value={patientFirstName}
                                onBlur={() => setPatientTouched((p) => ({ ...p, firstName: true }))}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setPatientFirstName(val);
                                  updatePatientName(patientTitle, val, patientMiddleName, patientLastName);
                                }}
                              />
                              {patientTouched.firstName && !patientFirstName.trim() && (
                                <span className="pi-input-error-icon" title="First name is required">
                                  <i className="fas fa-exclamation-circle" />
                                </span>
                              )}
                            </div>
                            {patientTouched.firstName && !patientFirstName.trim() && (
                              <span className="pi-error-msg">First name is required.</span>
                            )}
                          </div>

                          {/* Middle Name */}
                          <div className="pi-field pi-field-mid">
                            <label className="pi-label">Middle Name</label>
                            <div className="pi-input-wrap">
                              <input
                                type="text"
                                className="pi-input"
                                placeholder="Enter middle name (optional)"
                                value={patientMiddleName}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setPatientMiddleName(val);
                                  updatePatientName(patientTitle, patientFirstName, val, patientLastName);
                                }}
                              />
                            </div>
                          </div>

                          {/* Last Name */}
                          <div className="pi-field pi-field-last">
                            <label className="pi-label">
                              Last Name <span className="pi-req">*</span>
                            </label>
                            <div className={`pi-input-wrap ${patientTouched.lastName && !patientLastName.trim() ? "is-error" : ""}`}>
                              <input
                                type="text"
                                className="pi-input"
                                placeholder="Enter last name"
                                value={patientLastName}
                                onBlur={() => setPatientTouched((p) => ({ ...p, lastName: true }))}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setPatientLastName(val);
                                  updatePatientName(patientTitle, patientFirstName, patientMiddleName, val);
                                }}
                              />
                              {patientTouched.lastName && !patientLastName.trim() && (
                                <span className="pi-input-error-icon" title="Last name is required">
                                  <i className="fas fa-exclamation-circle" />
                                </span>
                              )}
                            </div>
                            {patientTouched.lastName && !patientLastName.trim() && (
                              <span className="pi-error-msg">Last name is required.</span>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Gender, Date of Birth, Age */}
                        <div className="pi-row pi-row-demographics">
                          {/* Gender */}
                          <div className="pi-field pi-field-gender">
                            <label className="pi-label">
                              Gender <span className="pi-req">*</span>
                            </label>
                            <div className="pi-gender-pills">
                              {[
                                { id: "Male", label: "Male", icon: "fas fa-mars" },
                                { id: "Female", label: "Female", icon: "fas fa-venus" },
                                { id: "Other", label: "Other", icon: "fas fa-genderless" },
                              ].map((g) => (
                                <button
                                  key={g.id}
                                  type="button"
                                  className={`pi-gender-pill ${patientGender === g.id ? "is-active" : ""}`}
                                  onClick={() => setPatientGender(g.id)}
                                >
                                  <i className={g.icon} />
                                  <span>{g.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Date of Birth */}
                          <div className="pi-field pi-field-dob">
                            <label className="pi-label">
                              Date of Birth <span className="pi-req">*</span>
                            </label>
                            <div className={`pi-input-wrap ${patientTouched.dob && !patientDob ? "is-error" : ""}`}>
                              <input
                                type="date"
                                className="pi-input pi-date-input"
                                value={patientDob}
                                max={new Date().toISOString().split("T")[0]}
                                onBlur={() => setPatientTouched((p) => ({ ...p, dob: true }))}
                                onChange={(e) => handleDobChange(e.target.value)}
                              />
                            </div>
                            {patientTouched.dob && !patientDob && (
                              <span className="pi-error-msg">Date of birth is required.</span>
                            )}
                          </div>

                          {/* Age */}
                          <div className="pi-field pi-field-age">
                            <label className="pi-label">
                              Age <span className="pi-req">*</span>
                            </label>
                            <div className="pi-input-wrap">
                              <input
                                type="text"
                                readOnly
                                className="pi-input pi-input-readonly"
                                placeholder="Auto-calculated from DOB"
                                value={patientAge ? `${patientAge} yrs` : ""}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Row 3: Phone Number */}
                        <div className="pi-row pi-row-phone">
                          <div className="pi-field pi-field-phone">
                            <label className="pi-label">
                              Phone Number <span className="pi-req">*</span>
                            </label>
                            <div className={`pi-phone-group ${patientTouched.phone && !patientPhone ? "is-error" : ""}`}>
                              <div className="pi-phone-addon">
                                <i className="fas fa-phone-alt" />
                                <span>+91</span>
                              </div>
                              <input
                                type="tel"
                                maxLength={10}
                                className="pi-phone-input"
                                placeholder="Enter 10-digit number"
                                value={patientPhone || mobileNumber}
                                onBlur={() => setPatientTouched((p) => ({ ...p, phone: true }))}
                                onChange={(e) => handlePhoneChange(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Row 4: Reason for Visit (optional) */}
                        <div className="pi-row pi-row-reason">
                          <div className="pi-field pi-field-reason">
                            <label className="pi-label">Reason for Visit (optional)</label>
                            <textarea
                              rows={3}
                              className="pi-textarea"
                              placeholder="Briefly describe your condition or reason for visit..."
                              value={patientNotes}
                              onChange={(e) => {
                                setPatientNotes(e.target.value);
                                setVisitReason(e.target.value || "General Consultation");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= Step 10 ================= */}
                  {currentStep === 10 && (
                    <>
                      <div className="msb-doc-header-row">
                        <button
                          type="button"
                          className="msb-back-pill-btn"
                          onClick={prevStep}
                          aria-label="Go back to patient details"
                        >
                          <i className="fas fa-arrow-left" /> Back
                        </button>

                        <div className="msb-doc-header-title">
                          <span className="msb-doc-header-badge">
                            <i className="fas fa-clipboard-check" />
                          </span>
                          <div>
                            <h2>Check and confirm</h2>
                            <p>One last look before we hold the slot for you</p>
                          </div>
                        </div>
                      </div>

                      <div className="msb-review">
                        <div className="msb-review-head">
                          <div>
                            <span>{selectedSpeciality.name}</span>
                            <strong>{selectedDoctor.name}</strong>
                          </div>
                        </div>

                        <dl className="msb-review-list">
                          <div>
                            <dt>When</dt>
                            <dd>
                              {selectedDate.toLocaleDateString("en-IN", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                              , {selectedSlot}
                            </dd>
                          </div>
                          <div>
                            <dt>Mode</dt>
                            <dd>
                              {consultationType === "in_hospital"
                                ? "At the hospital, Dharmapuri"
                                : "Video consultation"}
                            </dd>
                          </div>
                          <div>
                            <dt>Patient</dt>
                            <dd>
                              {patientName} · {patientGender}, {patientAge} yrs · {patientType}
                            </dd>
                          </div>
                          <div>
                            <dt>Reason</dt>
                            <dd>{visitReason}</dd>
                          </div>
                          <div>
                            <dt>Contact</dt>
                            <dd>
                              +91 {mobileNumber} · {patientEmail}
                            </dd>
                          </div>
                          {patientNotes.trim() && (
                            <div>
                              <dt>Notes</dt>
                              <dd>{patientNotes}</dd>
                            </div>
                          )}
                        </dl>
                      </div>

                      <div className="msb-pay">
                        {[
                          {
                            id: "hospital",
                            label: "Pay at the counter",
                            note: "Cash, UPI or card when you arrive",
                          },
                          {
                            id: "online",
                            label: "Pay now",
                            note: "UPI, cards and net banking",
                          },
                        ].map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            className={`msb-pay-btn ${paymentOption === p.id ? "is-on" : ""}`}
                            onClick={() => setPaymentOption(p.id as "hospital" | "online")}
                          >
                            <strong>{p.label}</strong>
                            <span>{p.note}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* ---------- Footer nav ---------- */}
            {!bookingConfirmed && currentStep > 1 && currentStep !== 2 && currentStep !== 3 && (
              <div className="msb-nav">
                {currentStep < 10 ? (
                  <button
                    type="button"
                    className="msb-btn-primary"
                    onClick={nextStep}
                    disabled={!canContinue()}
                  >
                    Continue
                  </button>
                ) : (
                  <button type="button" className="msb-btn-primary" onClick={handleConfirmBooking}>
                    Confirm booking
                  </button>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}