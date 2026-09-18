"use client";

import React from "react";
import {
  FaCalendarCheck,
  FaAmbulance,
  FaHeartbeat,
  FaUserMd,
  FaProcedures,
  FaShieldAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface AssistItem {
  id: number;
  icon: IconType;
  accentColor: string;
  title: string;
  link: string;
}

const assistItems: AssistItem[] = [
  {
    id: 1,
    icon: FaCalendarCheck,
    accentColor: "#009890",
    title: "Book Appointment",
    link: "/appointment",
  },
  {
    id: 2,
    icon: FaAmbulance,
    accentColor: "#e63946",
    title: "Request Ambulance",
    link: "tel:+919443224499",
  },
  {
    id: 3,
    icon: FaHeartbeat,
    accentColor: "#1d78c9",
    title: "Health Check-up",
    link: "/appointment",
  },
  {
    id: 4,
    icon: FaUserMd,
    accentColor: "#74a135",
    title: "Find a Doctor",
    link: "/doctors",
  },
  {
    id: 5,
    icon: FaProcedures,
    accentColor: "#f39c12",
    title: "Surgical Care",
    link: "/departments#inpatient-services",
  },
  {
    id: 6,
    icon: FaShieldAlt,
    accentColor: "#8a3ffc",
    title: "Health Insurance",
    link: "/contact",
  },
];

export default function HowCanWeAssistSection() {
  return (
    <section className="assist-section p_relative" id="how-can-we-assist">
      <div className="ambient-glow-teal" aria-hidden="true" />
      <div className="ambient-glow-purple" aria-hidden="true" />

      <div className="auto-container p_relative" style={{ zIndex: 3 }}>
        {/* Section Header */}
        <div className="assist-header text-center mb_55">
          <div className="assist-top-pill">
            <span className="live-dot-pulse" />
            <span className="pill-text">Fast-track patient access &amp; support</span>
          </div>

          <h2 className="assist-main-title">
            How can we assist you today?
          </h2>
        </div>

        {/* Icon dock */}
        <div className="assist-dock mb_50">
          {assistItems.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <a
                key={item.id}
                href={item.link}
                className="assist-tile"
                style={
                  {
                    "--item-accent": item.accentColor,
                    "--delay": `${index * 0.35}s`,
                  } as React.CSSProperties
                }
              >
                <span className="tile-ring" />
                <span className="tile-orb">
                  <ItemIcon size={26} color="#ffffff" />
                </span>
                <span className="tile-title">{item.title}</span>
              </a>
            );
          })}
        </div>

        {/* 24/7 Live Patient Coordination Helpdesk Ribbon */}
        <div className="assist-quick-bar">
          <div className="quick-bar-content">
            <div className="quick-bar-icon-wrap">
              <FaClock size={24} color="#ffffff" />
            </div>
            <div className="quick-bar-text">
              <h4>Need immediate help over the phone?</h4>
              <p>
                Our 24/7 patient coordination desk is always on standby to assist with hospital admissions, doctor visits, and queries.
              </p>
            </div>
          </div>

          <div className="quick-bar-actions">
            <a href="tel:+919443224499" className="quick-call-btn">
              <FaPhoneAlt size={15} />
              <span>+91 94432 24499</span>
            </a>

            <a
              href="https://wa.me/919443224499?text=Hello%20Meenakshi%20Hospital,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="quick-whatsapp-btn"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .assist-section {
          padding: 95px 0 90px 0;
          background-color: #f8fafc;
          position: relative;
          overflow: hidden;
          color: #2b3940;
        }

        .ambient-glow-teal {
          position: absolute;
          left: -100px;
          top: 10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 152, 144, 0.09) 0%, rgba(248, 250, 252, 0) 70%);
          pointer-events: none;
        }

        .ambient-glow-purple {
          position: absolute;
          right: -100px;
          bottom: 10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.08) 0%, rgba(248, 250, 252, 0) 70%);
          pointer-events: none;
        }

        /* Header */
        .assist-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: rgba(0, 152, 144, 0.08);
          border: 1px solid rgba(0, 152, 144, 0.25);
          border-radius: 30px;
          margin-bottom: 16px;
        }

        .live-dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #009890;
          box-shadow: 0 0 0 0 rgba(0, 152, 144, 0.7);
          animation: assistPulse 1.8s infinite;
        }

        @keyframes assistPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 152, 144, 0.7);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(0, 152, 144, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 152, 144, 0);
          }
        }

        .pill-text {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 11.5px;
          font-weight: 700;
          color: #009890;
          letter-spacing: 0.8px;
        }

        .assist-main-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 27px;
          line-height: 1.34;
          font-weight: 700;
          color: #0b2b4c;
          max-width: 620px;
          margin: 0 auto;
        }

        /* Icon dock */
        .assist-dock {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
        }

        .assist-tile {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #e8eef3;
          box-shadow: 0 6px 20px rgba(11, 43, 76, 0.05);
          padding: 30px 14px 22px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          text-decoration: none;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .assist-tile:hover {
          transform: translateY(-6px);
          border-color: var(--item-accent);
          box-shadow: 0 16px 32px rgba(11, 43, 76, 0.12);
        }

        .tile-ring {
          position: absolute;
          top: 22px;
          width: 64px;
          height: 64px;
          border-radius: 18px;
          border: 1.5px solid var(--item-accent);
          opacity: 0.35;
          animation: ringBreathe 3.2s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes ringBreathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.18);
            opacity: 0;
          }
        }

        .tile-orb {
          position: relative;
          z-index: 1;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--item-accent) 0%, var(--item-accent) 100%);
          box-shadow: 0 8px 20px color-mix(in srgb, var(--item-accent) 40%, transparent);
          animation: orbFloat 3.2s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .assist-tile:hover .tile-orb {
          transform: scale(1.08) rotate(-4deg);
        }

        .tile-title {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 14.5px;
          font-weight: 700;
          color: #0b2b4c;
          line-height: 1.35;
          transition: color 0.25s ease;
        }

        .assist-tile:hover .tile-title {
          color: var(--item-accent);
        }

        /* 24/7 Quick Helpdesk Bar */
        .assist-quick-bar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 5px solid #009890;
          border-radius: 18px;
          padding: 26px 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          box-shadow: 0 10px 30px rgba(11, 43, 76, 0.07);
        }

        .quick-bar-content {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 1;
        }

        .quick-bar-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0, 152, 144, 0.35);
        }

        .quick-bar-text h4 {
          font-family: var(--title-font, "Roboto Serif", serif);
          font-size: 16.5px;
          font-weight: 700;
          color: #0b2b4c;
          margin-bottom: 4px;
        }

        .quick-bar-text p {
          color: #556b69;
          font-size: 14px;
          margin: 0;
          line-height: 1.45;
        }

        .quick-bar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .quick-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #009890;
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 700;
          padding: 12px 22px;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 152, 144, 0.25);
        }

        .quick-call-btn:hover {
          background: #00b3a9;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 152, 144, 0.35);
        }

        .quick-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25d366;
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 700;
          padding: 12px 22px;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);
        }

        .quick-whatsapp-btn:hover {
          background: #20ba59;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .tile-ring,
          .tile-orb,
          .live-dot-pulse {
            animation: none;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .assist-dock {
            grid-template-columns: repeat(3, 1fr);
          }
          .assist-quick-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .quick-bar-actions {
            width: 100%;
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .assist-main-title {
            font-size: 26px;
          }
          .assist-dock {
            grid-template-columns: repeat(2, 1fr);
          }
          .quick-bar-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .quick-bar-actions {
            flex-direction: column;
            width: 100%;
          }
          .quick-call-btn,
          .quick-whatsapp-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}