"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu";

// ✅ Define props type
type Header3Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
  isSidebar: boolean;
  handleSidebar: () => void;
};

export default function Header3({
  scroll,
  handleMobileMenu,
  handlePopup,
  isSidebar,
  handleSidebar,
}: Header3Props) {
  const pathname = usePathname();
  return (
    <>
      {/* main header */}
      <header
        className={`main-header header-style-three ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo" style={{ background: "#ffffff", padding: "4px 10px", borderRadius: "10px", display: "inline-flex", alignItems: "center" }}>
                  <Link href="/">
                    <Image
                      src="/assets/images/mhfc-logo.png"
                      alt="Meenakshi Hospital Fertility Center"
                      width={90}
                      height={90}
                      style={{ width: "auto", height: "82px", objectFit: "contain" }}
                      priority
                    />
                  </Link>
                </figure>
              </div>

              <div className="menu-area">
                {/* ✅ Mobile menu toggler */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                {/* ✅ Desktop nav */}
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
                            <Link href="/department-details-3">
                              Gastroenterology
                            </Link>
                          </li>
                          <li>
                            <Link href="/department-details-4">Neurology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-5">
                              Orthopaedics
                            </Link>
                          </li>
                          <li>
                            <Link href="/department-details-6">
                              Modern Laboratory
                            </Link>
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

              {/* ✅ Right icons */}
              <div className="menu-right-content">
                <div
                  className="search-box-outer search-toggler"
                  onClick={handlePopup}
                >
                  <Image
                    src="/assets/images/icons/icon-9.svg"
                    alt="Search Icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <div
                  className="nav-btn nav-toggler navSidebar-button clearfix"
                  onClick={handleSidebar}
                >
                  <Image
                    src="/assets/images/icons/icon-10.svg"
                    alt="Sidebar Icon"
                    width={18}
                    height={16}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sticky header */}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo" style={{ background: "#ffffff", padding: "3px 8px", borderRadius: "8px", display: "inline-flex", alignItems: "center" }}>
                  <Link href="/">
                    <Image
                      src="/assets/images/mhfc-logo.png"
                      alt="Meenakshi Hospital Fertility Center"
                      width={70}
                      height={70}
                      style={{ width: "auto", height: "62px", objectFit: "contain" }}
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
                {/* ✅ Sticky nav uses same structure */}
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
                            <Link href="/department-details-3">
                              Gastroenterology
                            </Link>
                          </li>
                          <li>
                            <Link href="/department-details-4">Neurology</Link>
                          </li>
                          <li>
                            <Link href="/department-details-5">
                              Orthopaedics
                            </Link>
                          </li>
                          <li>
                            <Link href="/department-details-6">
                              Modern Laboratory
                            </Link>
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
                <div
                  className="search-box-outer search-toggler"
                  onClick={handlePopup}
                >
                  <Image
                    src="/assets/images/icons/icon-9.svg"
                    alt="Search Icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <div
                  className="nav-btn nav-toggler navSidebar-button clearfix"
                  onClick={handleSidebar}
                >
                  <Image
                    src="/assets/images/icons/icon-10.svg"
                    alt="Sidebar Icon"
                    width={18}
                    height={16}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Pass props properly to MobileMenu */}
        <MobileMenu
          isSidebar={isSidebar}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
        />
      </header>
    </>
  );
}
