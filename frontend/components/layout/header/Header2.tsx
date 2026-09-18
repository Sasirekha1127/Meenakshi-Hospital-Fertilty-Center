"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
};

export default function Header2({ scroll, handleMobileMenu }: Header1Props) {
  const pathname = usePathname();
  return (
    <>
      {/* main header */}
      <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <i className="icon-13"></i>
                  <a
                    href="https://maps.google.com/?q=18/61,+Sengodipuram,+Dharmapuri+-+636701,+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    18/61, Sengodipuram, Dharmapuri - 636701, Tamil Nadu
                  </a>
                </li>
              </ul>
              <ul className="social-links clearfix">
                <li>
                  <h6>Follow Us</h6>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/mhfc-logo.png"
                      alt="Meenakshi Hospital Fertility Center"
                      width={95}
                      height={95}
                      style={{ width: "auto", height: "85px", objectFit: "contain" }}
                      priority
                    />
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
                  <Link href="/appointment" className="theme-btn btn-one">
                    <span>Appointment</span>
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
                  <Link href="/">
                    <Image
                      src="/assets/images/mhfc-logo.png"
                      alt="Meenakshi Hospital Fertility Center"
                      width={75}
                      height={75}
                      style={{ width: "auto", height: "65px", objectFit: "contain" }}
                      priority
                    />
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
                  <Link href="/appointment" className="theme-btn btn-one">
                    <span>Appointment</span>
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
