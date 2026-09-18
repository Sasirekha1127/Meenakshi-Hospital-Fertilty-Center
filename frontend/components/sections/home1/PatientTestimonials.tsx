"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  treatment: string;
  category: "fertility" | "maternity" | "surgical";
  tag: string;
  rating: number;
  avatar: string;
  hasPhoto: boolean;
  date: string;
  quote: string;
  doctor: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Priya & Rajesh Sundaram",
    location: "Chennai",
    treatment: "Advanced IVF & Laser Blastocyst Transfer",
    category: "fertility",
    tag: "IVF Miracle Twins",
    rating: 5,
    avatar: "/assets/images/resource/testimonial-1.jpg",
    hasPhoto: true,
    date: "January 2025",
    doctor: "Dr. Chandrashekar & Team",
    quote:
      "After six painful years of heartbreak at multiple clinics, we walked into Meenakshi Hospital with very little hope. Dr. Chandrashekar and the embryology specialists treated us like family, taking time to explain every protocol patiently. Today, holding our twin baby girls in our arms feels like an absolute miracle. We will forever be grateful!",
  },
  {
    id: 2,
    name: "Dr. Ananya & Karthik R.",
    location: "Madurai",
    treatment: "High-Risk Maternity & Painless Normal Delivery",
    category: "maternity",
    tag: "Safe Normal Delivery",
    rating: 5,
    avatar: "/assets/images/resource/testimonial-2.jpg",
    hasPhoto: true,
    date: "November 2024",
    doctor: "Obstetrics & Fetal Medicine Team",
    quote:
      "Having severe gestational hypertension and border-line gestational diabetes, my pregnancy was categorized as high risk. The 24/7 maternal monitoring, prompt obstetric responses, and Level-III NICU backup gave us complete reassurance. I had a safe, painless normal delivery, and our son is thriving!",
  },
  {
    id: 3,
    name: "Deepa Ramachandran",
    location: "Trichy",
    treatment: "3D Laparoscopic Keyhole Myomectomy",
    category: "surgical",
    tag: "Minimally Invasive Care",
    rating: 5,
    avatar: "DR",
    hasPhoto: false,
    date: "December 2024",
    doctor: "Laparoscopic Surgical Wing",
    quote:
      "I was suffering from multiple uterine fibroids with agonizing pelvic pain. Other hospitals suggested an open surgical incision with weeks of bed rest. The surgeons at Meenakshi performed 3D pinhole laparoscopy. I walked just 6 hours after surgery with almost zero scar and returned to work within 4 days!",
  },
  {
    id: 4,
    name: "Meera & Senthil Nathan",
    location: "Coimbatore",
    treatment: "Severe PCOS & Ovulation Induction Therapy",
    category: "fertility",
    tag: "Natural Conception",
    rating: 5,
    avatar: "MN",
    hasPhoto: false,
    date: "February 2025",
    doctor: "Reproductive Endocrinology Team",
    quote:
      "What sets Meenakshi Hospital apart is their honesty. They did not push us into costly invasive treatments right away. They first addressed my metabolic resistance, normalized my cycles with targeted medication, and within five months of supervised ovulation monitoring, we conceived naturally!",
  },
  {
    id: 5,
    name: "Kavitha & Vignesh",
    location: "Tirunelveli",
    treatment: "ICSI with Vitrified Embryo Cryotransfer",
    category: "fertility",
    tag: "Fertility Success",
    rating: 5,
    avatar: "/assets/images/resource/video-1.jpg",
    hasPhoto: true,
    date: "October 2024",
    doctor: "Advanced Embryology Lab",
    quote:
      "The cleanroom lab standards and embryologist transparency gave us so much trust. Seeing our Day-5 blastocyst grading before transfer helped us stay optimistic. Today our 6-month-old baby boy brings endless joy to our home. Thank you to the compassionate nursing and medical team!",
  },
  {
    id: 6,
    name: "Sowmya Lakshmi",
    location: "Thanjavur",
    treatment: "Hysteroscopic Septum Resection",
    category: "surgical",
    tag: "Fertility-Preserving Surgery",
    rating: 5,
    avatar: "SL",
    hasPhoto: false,
    date: "August 2024",
    doctor: "Gynaec-Endoscopy Team",
    quote:
      "After two recurrent early pregnancy losses, a uterine septum was detected. The daycare hysteroscopic correction at Meenakshi was painless, quick, and highly precise. Three months later, I am happily pregnant with healthy development. Best hospital for women&apos;s healthcare!",
  },
];

export default function PatientTestimonials() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageSize = 3;
  const totalPages = Math.ceil(testimonialsData.length / pageSize);
  const currentStories = testimonialsData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <section className="patient-testimonials-section">
      {/* Background Decorative Graphic Elements */}
      <div className="pt-bg-shape-left" aria-hidden="true"></div>
      <div className="pt-bg-shape-right" aria-hidden="true"></div>

      <div className="auto-container">
        {/* Section Header */}
        <div className="pt-header text-center">
          <div className="pt-tag-wrap">
            <span className="pt-eyebrow">
              <i className="fas fa-heart text-green mr-2"></i>
              Real Patient Journeys
            </span>
          </div>

          <h2 className="pt-main-title">
            Stories of Hope, <span className="text-teal">Miracles &amp; Healing</span>
          </h2>
          <p className="pt-sub-text">
            Over 15,000+ families have realized their lifelong dream of parenthood and
            holistic recovery at Meenakshi Hospital &amp; Fertility Center. Here is what
            our patients share about their experience with us.
          </p>


        </div>

        {/* Testimonials Cards Grid */}
        <div className="pt-cards-grid">
          {currentStories.map((story) => (
            <div key={story.id} className="pt-card reveal-item">
              {/* Card Top Header */}
              <div className="pt-card-top">
                <span className="pt-tag-pill">{story.tag}</span>
                <div className="pt-stars">
                  {[...Array(story.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star star-filled"></i>
                  ))}
                </div>
              </div>

              {/* Card Quote */}
              <div className="pt-quote-wrap">
                <svg
                  className="pt-quote-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M10 11H6C6 8.5 7.5 7 10 7V5C6.5 5 4 8 4 12V19H10V11ZM20 11H16C16 8.5 17.5 7 20 7V5C16.5 5 14 8 14 12V19H20V11Z"
                    fill="#009890"
                    fillOpacity="0.18"
                  />
                </svg>
                <p className="pt-quote-text">&ldquo;{story.quote}&rdquo;</p>
              </div>

              {/* Treatment info */}
              <div className="pt-treatment-info">
                <i className="fas fa-stethoscope mr-1 text-teal"></i>
                <span>{story.treatment}</span>
              </div>

              {/* Patient Footer */}
              <div className="pt-card-footer">
                <div className="pt-author-avatar">
                  {story.hasPhoto ? (
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      width={48}
                      height={48}
                      className="pt-avatar-img"
                    />
                  ) : (
                    <div className="pt-avatar-initials">{story.avatar}</div>
                  )}
                </div>

                <div className="pt-author-details">
                  <h4 className="pt-author-name">
                    {story.name}
                    <span className="pt-verified-badge" title="Verified Patient">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </h4>
                  <p className="pt-author-meta">
                    {story.location} &bull; <span>{story.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots if more than 1 page */}
        {totalPages > 1 && (
          <div className="pt-pagination-wrap">
            <button
              type="button"
              className="pt-page-nav"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              aria-label="Previous testimonials"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="pt-dots">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pt-dot ${currentPage === idx ? "active" : ""}`}
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="pt-page-nav"
              disabled={currentPage === totalPages - 1}
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              aria-label="Next testimonials"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}


      </div>

      {/* Scoped CSS Styling */}
      <style jsx>{`
        .patient-testimonials-section {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f4faf8 50%, #ffffff 100%);
          padding: 85px 0 95px 0;
          overflow: hidden;
        }

        .pt-bg-shape-left {
          position: absolute;
          top: 0;
          left: -100px;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 152, 144, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .pt-bg-shape-right {
          position: absolute;
          bottom: 40px;
          right: -120px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Header */
        .pt-header {
          max-width: 820px;
          margin: 0 auto 50px auto;
          position: relative;
          z-index: 2;
        }

        .pt-tag-wrap {
          margin-bottom: 14px;
        }

        .pt-eyebrow {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #009890;
          background: rgba(0, 152, 144, 0.09);
          padding: 6px 18px;
          border-radius: 30px;
          border: 1px solid rgba(0, 152, 144, 0.18);
        }

        .text-green {
          color: #74a135;
        }

        .text-teal {
          color: #009890;
        }

        .text-gold {
          color: #ffb703;
          font-size: 14px;
        }

        .pt-main-title {
          font-family: var(--title-font);
          font-size: 27px;
          font-weight: 700;
          line-height: 1.34;
          color: #1a252c;
          margin-bottom: 14px;
        }

        .pt-sub-text {
          font-size: 15.5px;
          line-height: 1.7;
          color: #5a6872;
          margin: 0 auto;
          max-width: 720px;
        }

        /* Cards Grid */
        .pt-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          position: relative;
          z-index: 2;
          margin-bottom: 40px;
        }

        .pt-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 28px 26px;
          border: 1px solid rgba(0, 152, 144, 0.12);
          box-shadow: 0 12px 32px rgba(12, 62, 58, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .pt-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 152, 144, 0.14);
          border-color: rgba(0, 152, 144, 0.3);
        }

        .pt-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .pt-tag-pill {
          background: rgba(116, 161, 53, 0.1);
          color: #5b8423;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .pt-stars {
          display: flex;
          gap: 3px;
        }

        .star-filled {
          color: #ffb703;
          font-size: 13px;
        }

        .pt-quote-wrap {
          position: relative;
          margin-bottom: 18px;
          flex: 1;
        }

        .pt-quote-icon {
          width: 38px;
          height: 38px;
          position: absolute;
          top: -10px;
          left: -4px;
          pointer-events: none;
        }

        .pt-quote-text {
          font-size: 14.5px;
          line-height: 1.68;
          color: #435158;
          font-style: normal;
          position: relative;
          z-index: 1;
          margin: 0;
        }

        .pt-treatment-info {
          font-size: 12.5px;
          font-weight: 600;
          color: #007670;
          background: #f1f8f6;
          padding: 7px 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }

        .pt-card-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid #edf4f1;
        }

        .pt-author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }

        .pt-avatar-img {
          object-fit: cover;
          border-radius: 50%;
        }

        .pt-avatar-initials {
          width: 100%;
          height: 100%;
          background: #009890;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .pt-author-name {
          font-size: 15px;
          font-weight: 700;
          color: #1a252c;
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pt-verified-badge {
          color: #009890;
          font-size: 13px;
        }

        .pt-author-meta {
          font-size: 12px;
          color: #7b8890;
          margin: 0;
        }

        /* Pagination */
        .pt-pagination-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin-bottom: 0;
        }

        .pt-page-nav {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #c9ded8;
          background: #ffffff;
          color: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pt-page-nav:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .pt-page-nav:not(:disabled):hover {
          background: #009890;
          color: #ffffff;
          border-color: #009890;
        }

        .pt-dots {
          display: flex;
          gap: 8px;
        }

        .pt-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #cbd9d5;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .pt-dot.active {
          width: 28px;
          border-radius: 10px;
          background: #009890;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .pt-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .patient-testimonials-section {
            padding: 60px 0 70px 0;
          }

          .pt-main-title {
            font-size: 27px;
          }

          .pt-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
