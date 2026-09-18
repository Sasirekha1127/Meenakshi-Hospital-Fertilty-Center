'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaStethoscope,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaBaby,
  FaCalendarAlt,
  FaChevronRight,
} from "react-icons/fa";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 800,
};

const slidesData = [
  {
    id: 1,
    badge: "MEENAKSHI HOSPITAL & FERTILITY CENTRE",
    subtitle: "Your Health, Our Priority",
    title: (
      <>
        Advanced Care. <br />
        Multiple Specialities. <br />
        <span className="hero-teal-text">One Trusted Hospital.</span>
      </>
    ),
    description:
      "Meenakshi Hospital & Fertility Centre is dedicated to providing quality healthcare with professionalism and personalized attention.",
    btnPrimary: { text: "BOOK APPOINTMENT", link: "/appointment" },
    btnSecondary: { text: "OUR SERVICES", link: "/departments" },
  },
  {
    id: 2,
    badge: "MEENAKSHI HOSPITAL & FERTILITY CENTRE",
    subtitle: "Pioneering Hope & New Beginnings",
    title: (
      <>
        Advanced Fertility Care. <br />
        Expert Specialists. <br />
        <span className="hero-teal-text">Compassionate Healing.</span>
      </>
    ),
    description:
      "Dedicated to helping families grow with advanced reproductive medicine, personalized IVF care, and experienced specialists in Dharmapuri.",
    btnPrimary: { text: "BOOK APPOINTMENT", link: "/appointment" },
    btnSecondary: { text: "OUR SERVICES", link: "/departments" },
  },
];

export default function Banner() {
  return (
    <section className="banner-section p_relative">
      {/* Real Hospital Building Background on Right */}
      <div
        className="banner-bg-photo"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          backgroundImage: "url('/assets/images/banner/hospital-building.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Seamless Left Fade Overlay */}
      <div
        className="banner-bg-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, #f6fbf9 0%, #f6fbf9 42%, rgba(246, 251, 249, 0.94) 52%, rgba(246, 251, 249, 0.3) 72%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Bottom Left Decorative Curved Wave */}
      <div className="banner-corner-wave" style={{ zIndex: 2 }}>
        <svg
          viewBox="0 0 420 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M-50,300 C-50,180 60,120 160,170 C240,210 320,200 380,300 Z"
            fill="#a6ded6"
            opacity="0.5"
          />
          <path
            d="M-70,300 C-70,210 40,160 125,200 C205,240 270,230 320,300 Z"
            fill="#72c4b8"
            opacity="0.65"
          />
        </svg>
      </div>

      <Swiper {...swiperOptions} className="swiper-container banner-carousel p_relative" style={{ zIndex: 3 }}>
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item p_relative">
              <div className="auto-container">
                <div className="banner-grid-layout">
                  {/* Left Column Content */}
                  <div className="banner-content-col">
                    {/* Badge */}
                    <div className="hero-pill-badge">
                      <span>{slide.badge}</span>
                    </div>

                    {/* Subtitle */}
                    <p className="hero-subtitle">{slide.subtitle}</p>

                    {/* Main Title */}
                    <h1 className="hero-heading">{slide.title}</h1>

                    {/* Description */}
                    <p className="hero-desc">{slide.description}</p>

                    {/* 4 Feature Badges Bar */}
                    <div className="hero-features-bar">
                      <div className="hero-feature-item">
                        <div className="feature-icon-circle">
                          <FaStethoscope />
                        </div>
                        <span className="feature-label">
                          Expert <br /> Doctors
                        </span>
                      </div>
                      <div className="feature-sep" />
                      <div className="hero-feature-item">
                        <div className="feature-icon-circle">
                          <FaShieldAlt />
                        </div>
                        <span className="feature-label">
                          Advanced <br /> Technology
                        </span>
                      </div>
                      <div className="feature-sep" />
                      <div className="hero-feature-item">
                        <div className="feature-icon-circle">
                          <FaHandHoldingHeart />
                        </div>
                        <span className="feature-label">
                          Compassionate <br /> Care
                        </span>
                      </div>
                      <div className="feature-sep" />
                      <div className="hero-feature-item">
                        <div className="feature-icon-circle">
                          <FaBaby />
                        </div>
                        <span className="feature-label">
                          Fertility &amp; <br /> Maternity Support
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="hero-actions-bar" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      <Link
                        href={slide.btnPrimary.link}
                        className="btn-hero-primary"
                        style={{
                          background: "#009890",
                          color: "#ffffff",
                          padding: "13px 26px",
                          borderRadius: "35px",
                          fontSize: "13.5px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "9px",
                          textDecoration: "none",
                          boxShadow: "0 8px 22px rgba(0, 152, 144, 0.3)",
                        }}
                      >
                        <span>{slide.btnPrimary.text}</span>
                        <FaCalendarAlt style={{ fontSize: "14px" }} />
                      </Link>
                      {slide.btnSecondary && (
                        <Link
                          href={slide.btnSecondary.link}
                          className="btn-hero-secondary"
                          style={{
                            background: "#ffffff",
                            border: "2px solid #009890",
                            color: "#009890",
                            padding: "12px 26px",
                            borderRadius: "35px",
                            fontSize: "13.5px",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "9px",
                            textDecoration: "none",
                            boxShadow: "0 4px 14px rgba(0, 152, 144, 0.12)",
                          }}
                        >
                          <span>{slide.btnSecondary.text}</span>
                          <FaChevronRight style={{ fontSize: "12px" }} />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right Column Image Box */}
                  <div className="banner-image-col">
                    <figure className="doctor-patient-image">
                      <Image
                        src="/assets/images/banner/banner-img-1.png"
                        alt="Meenakshi Hospital Doctors & Care"
                        width={580}
                        height={840}
                        priority
                        style={{
                          width: "auto",
                          height: "100%",
                          maxHeight: "680px",
                          objectFit: "contain",
                          objectPosition: "bottom right",
                        }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .banner-section {
          position: relative;
          overflow: hidden;
          background: #f6fbf9;
          min-height: 640px;
        }

        .banner-corner-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 320px;
          height: 220px;
          pointer-events: none;
        }

        .slide-item {
          padding: 60px 0 65px 0;
        }

        .banner-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          position: relative;
          min-height: 540px;
        }

        .banner-content-col {
          position: relative;
          z-index: 5;
          max-width: 630px;
        }

        /* Pill Badge */
        .hero-pill-badge {
          display: inline-block;
          background: #d7f3ed;
          color: #009890;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 20px;
          margin-bottom: 12px;
          box-shadow: 0 2px 8px rgba(0, 152, 144, 0.12);
        }

        /* Subtitle */
        .hero-subtitle {
          font-size: 19px;
          font-weight: 600;
          color: #223843;
          margin-bottom: 10px;
          line-height: 1.3;
          letter-spacing: -0.2px;
        }

        /* Main Heading */
        .hero-heading {
          font-size: clamp(25px, 3.2vw, 36px);
          font-weight: 700;
          line-height: 1.22;
          color: #102a3a;
          margin-bottom: 16px;
          letter-spacing: -0.3px;
        }

        :global(.hero-teal-text) {
          color: #009890;
          font-weight: 700;
        }

        /* Description */
        .hero-desc {
          font-size: 14.5px;
          line-height: 1.62;
          color: #4b5e6b;
          max-width: 530px;
          margin-bottom: 24px;
        }

        /* 4 Features Bar */
        .hero-features-bar {
          display: inline-flex;
          align-items: center;
          background: transparent;
          margin-bottom: 28px;
          max-width: 100%;
        }

        .hero-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 10px;
        }

        .feature-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #d7f3ed;
          border: 1.5px solid #009890;
          color: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          margin-bottom: 7px;
          transition: transform 0.2s ease;
        }

        .hero-feature-item:hover .feature-icon-circle {
          transform: scale(1.08);
        }

        .feature-label {
          font-size: 11px;
          font-weight: 700;
          color: #102a3a;
          line-height: 1.22;
          text-align: center;
        }

        .feature-sep {
          width: 1px;
          height: 42px;
          background: #d8eae6;
          margin: 0 4px;
          flex-shrink: 0;
        }

        /* Action Buttons */
        .hero-actions-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-hero-primary {
          background: #009890;
          color: #ffffff !important;
          padding: 13px 26px;
          border-radius: 35px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          box-shadow: 0 8px 22px rgba(0, 152, 144, 0.3);
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          background: #007d76;
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(0, 152, 144, 0.4);
          color: #ffffff !important;
        }

        .btn-hero-secondary {
          background: #ffffff;
          border: 2px solid #009890;
          color: #009890 !important;
          padding: 12px 26px;
          border-radius: 35px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 152, 144, 0.12);
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background: #009890;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 152, 144, 0.25);
        }

        :global(.btn-icon) {
          font-size: 13px;
        }

        /* Right Column */
        .banner-image-col {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
          min-height: 520px;
        }

        .doctor-patient-image {
          position: relative;
          margin: 0;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        @media (max-width: 1024px) {
          .banner-grid-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .banner-image-col {
            justify-content: center;
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero-features-bar {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .feature-sep {
            display: none;
          }
          .hero-feature-item {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}