"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCalendarAlt,
} from "react-icons/fa";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  isMobileMenu?: boolean;
  handleMobileMenu: () => void;
  handlePopup?: () => void;
  isSidebar?: boolean;
  handleSidebar?: () => void;
};

export default function Header1({ scroll, handleMobileMenu }: Header1Props) {
  const pathname = usePathname();
  return (
    <>
      {/* main header */}
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <div className="header-top">
          <div className="outer-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <FaMapMarkerAlt style={{ color: "#ffffff", marginRight: "8px", fontSize: "14px", display: "inline-block", verticalAlign: "middle" }} />
                  <a
                    href="https://maps.google.com/?q=18/61,+Sengodipuram,+Dharmapuri+-+636701,+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    18/61, Sengodipuram, Dharmapuri – 636701, Tamil Nadu
                  </a>
                </li>
              </ul>
              <div className="top-right-bar">
                <a href="tel:+919367712345" className="top-phone-link">
                  <FaPhoneAlt style={{ fontSize: "12px", marginRight: "6px" }} />
                  <span>+91 93677 12345</span>
                </a>
                <span className="top-divider">|</span>
                <span className="follow-us-text">Follow Us</span>
                <ul className="social-links-clean">
                  <li>
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/" className="logo-brand-link">
                    <div className="logo-emblem-box">
                      <Image
                        src="/assets/images/mhfc-logo.png"
                        alt="Meenakshi Hospital Fertility Center"
                        width={50}
                        height={63}
                        priority
                      />
                    </div>
                    <div className="logo-brand-text">
                      <span className="brand-name">MEENAKSHI</span>
                      <span className="brand-sub">HOSPITAL &amp; FERTILITY CENTRE</span>
                    </div>
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className={pathname === "/" ? "current" : ""}>
                        <Link href="/">Home</Link>
                      </li>
                      <li className={pathname === "/about" ? "current" : ""}>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className={`dropdown ${pathname.startsWith("/department") || pathname.startsWith("/service") ? "current" : ""}`}>
                        <Link href="/departments">Services</Link>
                        <ul>
                          <li>
                            <Link href="/departments">All Services</Link>
                          </li>
                          <li>
                            <Link href="/department-details">Cardiology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-2">Dental</Link>
                          </li>
                          <li>
                            <Link href="/department-details-3">Gastroenterology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-4">Neurology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-5">Orthopaedics</Link>
                          </li>
                          <li>
                            <Link href="/department-details-6">Modern Laboratory</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={pathname === "/appointment" ? "current" : ""}>
                        <Link href="/appointment">Booking Appointment</Link>
                      </li>
                      <li className={pathname === "/contact" ? "current" : ""}>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content">
                <div className="btn-box">
                  <Link href="/appointment" className="btn-header-appointment">
                    <FaCalendarAlt style={{ fontSize: "14px", marginRight: "8px" }} />
                    <span>BOOK APPOINTMENT</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sticky header */}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/" className="logo-brand-link">
                    <div className="logo-emblem-box">
                      <Image
                        src="/assets/images/mhfc-logo.png"
                        alt="Meenakshi Hospital Fertility Center"
                        width={44}
                        height={55}
                        priority
                      />
                    </div>
                    <div className="logo-brand-text">
                      <span className="brand-name">MEENAKSHI</span>
                      <span className="brand-sub">HOSPITAL &amp; FERTILITY CENTRE</span>
                    </div>
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className={pathname === "/" ? "current" : ""}>
                        <Link href="/">Home</Link>
                      </li>
                      <li className={pathname === "/about" ? "current" : ""}>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className={`dropdown ${pathname.startsWith("/department") || pathname.startsWith("/service") ? "current" : ""}`}>
                        <Link href="/departments">Services</Link>
                        <ul>
                          <li>
                            <Link href="/departments">All Services</Link>
                          </li>
                          <li>
                            <Link href="/department-details">Cardiology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-2">Dental</Link>
                          </li>
                          <li>
                            <Link href="/department-details-3">Gastroenterology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-4">Neurology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-5">Orthopaedics</Link>
                          </li>
                          <li>
                            <Link href="/department-details-6">Modern Laboratory</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={pathname === "/appointment" ? "current" : ""}>
                        <Link href="/appointment">Booking Appointment</Link>
                      </li>
                      <li className={pathname === "/contact" ? "current" : ""}>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content">
                <div className="btn-box">
                  <Link href="/appointment" className="btn-header-appointment">
                    <FaCalendarAlt style={{ fontSize: "14px", marginRight: "8px" }} />
                    <span>BOOK APPOINTMENT</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <MobileMenu
          isSidebar={false}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={() => {}}
        />
      </header>
    </>
  );
}
