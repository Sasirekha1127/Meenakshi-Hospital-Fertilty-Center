'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (key: number) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/"><Image src="/assets/images/logo-2.png" alt="Logo Image" width={203} height={40} priority /></Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">

              {/* Home */}
              <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>

              {/* About Us */}
              <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>

              {/* Services */}
              <li className={`dropdown ${activeDropdown === 1 ? "current" : ""}`}>
                <Link href="/departments" onClick={handleMobileMenu}>Services</Link>
                <ul style={{ display: activeDropdown === 1 ? "block" : "none" }}>
                  <li><Link href="/departments" onClick={handleMobileMenu}>All Services</Link></li>
                  <li><Link href="/department-details" onClick={handleMobileMenu}>Cardiology</Link></li>
                  <li><Link href="/department-details-2" onClick={handleMobileMenu}>Dental</Link></li>
                  <li><Link href="/department-details-3" onClick={handleMobileMenu}>Gastroenterology</Link></li>
                  <li><Link href="/department-details-4" onClick={handleMobileMenu}>Neurology</Link></li>
                  <li><Link href="/department-details-5" onClick={handleMobileMenu}>Orthopaedics</Link></li>
                  <li><Link href="/department-details-6" onClick={handleMobileMenu}>Modern Laboratory</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 1 ? "open" : ""}`} onClick={() => toggleDropdown(1)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Booking Appointment */}
              <li><Link href="/appointment" onClick={handleMobileMenu}>Booking Appointment</Link></li>

              {/* Contact Us */}
              <li><Link href="/contact" onClick={handleMobileMenu}>Contact Us</Link></li>

            </ul>
          </div>

          <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                  <li>Chicago 12, Melborne City, USA</li>
                  <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                  <li><Link href="mailto:info@example.com">info@example.com</Link></li>
              </ul>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
              <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>

        </nav>
      </div>

      {/* Overlay */}
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
}
