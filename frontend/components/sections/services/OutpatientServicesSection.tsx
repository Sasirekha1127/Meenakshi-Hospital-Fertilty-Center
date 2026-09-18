"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaUserMd,
  FaClock,
  FaMicroscope,
  FaProcedures,
} from "react-icons/fa";

/**
 * OutpatientServicesSection
 * -------------------------------------------------
 * Layout: LEFT = image with floating info card + phone button (animated)
 *         RIGHT = heading + description + animated checklist + CTA
 *
 * Content is OPD-specific (not copied from the reference image).
 * Animations powered by framer-motion (fade/slide-in + stagger).
 * -------------------------------------------------
 */

const opdHighlights: string[] = [
  "Daily morning & evening specialist OPD sessions",
  "14+ medical specialities under one roof",
  "2-hour stat diagnostic & lab reports",
  "Same-day daycare surgeries & minor procedures",
  "Digital token booking with minimal waiting time",
  "Affordable, transparent consultation charges",
];

// Animation variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function OutpatientServicesSection() {
  return (
    <section className="opd-section p_relative" id="outpatient-services">
      <div className="opd-bg-shape-left" aria-hidden="true" />
      <div className="opd-bg-shape-right" aria-hidden="true" />

      <div className="auto-container p_relative" style={{ zIndex: 2 }}>
        <div className="opd-flex-wrap">
          {/* ================= LEFT : IMAGE ================= */}
          <motion.div
            className="opd-image-col"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="opd-image-frame">
              <Image
                src="/assets/images/service/outpatient-consultation.jpg"
                alt="Outpatient Consultation"
                width={640}
                height={620}
                className="opd-main-img"
              />

              {/* Call button - top */}
              <motion.a
                href="tel:+919443224499"
                className="opd-call-pill"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.06 }}
              >
                <span className="call-number">094432 24499</span>
                <span className="call-icon-circle">
                  <FaPhoneAlt size={14} />
                </span>
              </motion.a>

              {/* Floating info card - bottom */}
              <motion.div
                className="opd-float-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.55 }}
              >
                <div className="opd-float-icon-circle">
                  <FaUserMd size={22} />
                </div>
                <div className="opd-float-text">
                  <h5>Outpatient Services</h5>
                  <p>Expert Care, Zero Waiting, Same-Day Reports</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT : CONTENT ================= */}
          <motion.div
            className="opd-content-col"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="sec-title mb_25">
              <span className="opd-eyebrow">Outpatient Services</span>
              <h2 className="opd-main-title">
                Comprehensive OPD Services for Everyday Medical Care
              </h2>
            </div>

            <p className="opd-lead-text mb_25">
              Our outpatient department delivers same-day specialist
              consultations, rapid diagnostics, and daycare procedures —
              so you get expert clinical care without an overnight
              hospital stay.
            </p>

            <motion.ul
              className="opd-check-list mb_30"
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {opdHighlights.map((item, idx) => (
                <motion.li key={idx} variants={listItem}>
                  <span className="check-icon-wrap">
                    <FaCheckCircle size={13} />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="opd-cta-row">
              <Link href="/appointment" className="theme-btn btn-two opd-cta-btn">
                <span>Book OPD Consultation</span>
              </Link>

              <div className="opd-mini-stats">
                <div className="mini-stat">
                  <FaClock className="mini-stat-icon" />
                  <span>9 AM – 8:30 PM</span>
                </div>
                <div className="mini-stat">
                  <FaMicroscope className="mini-stat-icon" />
                  <span>Stat Lab Reports</span>
                </div>
                <div className="mini-stat">
                  <FaProcedures className="mini-stat-icon" />
                  <span>Daycare Surgery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .opd-section {
          padding: 95px 0 90px 0;
          background-color: #f7fafc;
          position: relative;
          overflow: hidden;
        }

        .opd-bg-shape-left {
          position: absolute;
          left: -80px;
          top: 15%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 152, 144, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        .opd-bg-shape-right {
          position: absolute;
          right: -80px;
          bottom: 10%;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.07) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        .opd-flex-wrap {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        /* ---------- LEFT IMAGE ---------- */
        .opd-image-col {
          flex: 0 0 46%;
          max-width: 46%;
        }

        .opd-image-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(11, 43, 76, 0.12);
        }

        .opd-main-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 18px;
        }

        .opd-call-pill {
          position: absolute;
          top: 24px;
          left: 24px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          padding: 8px 8px 8px 18px;
          border-radius: 40px;
          box-shadow: 0 10px 25px rgba(11, 43, 76, 0.2);
          text-decoration: none;
          z-index: 3;
        }

        .call-number {
          font-size: 14px;
          font-weight: 700;
          color: #0b2b4c;
        }

        .call-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #009890;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .opd-float-card {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          background: linear-gradient(135deg, #0b2b4c 0%, #0e3d64 100%);
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 14px 35px rgba(11, 43, 76, 0.35);
          z-index: 3;
        }

        .opd-float-icon-circle {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #74a135;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .opd-float-text h5 {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .opd-float-text p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 12.5px;
          margin: 0;
          line-height: 1.4;
        }

        /* ---------- RIGHT CONTENT ---------- */
        .opd-content-col {
          flex: 1;
        }

        .opd-eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          color: #74a135;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }

        .opd-main-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 26px;
          line-height: 36px;
          font-weight: 700;
          color: #0b2b4c;
        }

        .opd-lead-text {
          font-size: 16px;
          line-height: 27px;
          color: #556b69;
          max-width: 560px;
        }

        .opd-check-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .opd-check-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #2f4451;
          font-weight: 500;
        }

        .check-icon-wrap {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #74a135;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .opd-cta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .opd-cta-btn {
          padding: 15px 30px !important;
          font-size: 14.5px !important;
          font-weight: 700 !important;
        }

        .opd-mini-stats {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .mini-stat {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #0b2b4c;
        }

        .mini-stat-icon {
          color: #009890;
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 991px) {
          .opd-flex-wrap {
            flex-direction: column;
          }
          .opd-image-col {
            max-width: 100%;
            flex: 1 1 100%;
          }
          .opd-main-title {
            font-size: 28px;
            line-height: 36px;
          }
        }

        @media (max-width: 640px) {
          .opd-section {
            padding: 70px 0 60px 0;
          }
          .opd-float-card {
            flex-direction: column;
            text-align: center;
          }
          .opd-call-pill {
            top: 14px;
            left: 14px;
          }
        }
      `}</style>
    </section>
  );
}