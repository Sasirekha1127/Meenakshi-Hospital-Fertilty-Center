"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Director {
  id: number;
  name: string;
  role: string;
  qualification: string;
  image: string;
  bio: string;
  focusAreas: string[];
}

const directorsData: Director[] = [
 
  {
    id: 2,
    name: "Dr. Ananya Menon",
    role: "Medical Director & Clinical Chief",
    qualification: "MBBS, MD, DNB, Healthcare Administration",
    image: "/assets/images/gallery/doctor.png",
    bio: "Spearheading clinical protocols, patient safety standards, and multi-speciality inpatient care with a deeply empathetic, patient-centric philosophy.",
    focusAreas: ["Clinical Operations", "Maternal Healthcare", "Preventive Medicine"],
  },
  {
    id: 3,
    name: "Dr. K. Rajeshwar",
    role: "Director of Embryology & Research",
    qualification: "Ph.D. (Embryology), Senior Clinical Embryologist",
    image: "/assets/images/banner/banner-img-1.png",
    bio: "Leading advanced embryology laboratories, AI blastocyst grading systems, and pre-implantation genetic diagnostics (PGT-A) for maximized implantation outcomes.",
    focusAreas: ["Vitrification & Cryo", "Genetic Screening", "Embryo Culture Systems"],
  },
];

export default function DirectorsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const timer = setTimeout(() => setInView(true), 600);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          clearTimeout(timer);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`directors-section p_relative${inView ? " is-in-view" : ""}`}
    >
      <div className="auto-container p_relative dir-z-index">
        {/* Section Header */}
        <div className="sec-title centred mb_55 dir-reveal dir-reveal-1">
          <div className="dir-kicker">
            <span className="dir-kicker-dot" />
            <span>Hospital Leadership &amp; Governance</span>
          </div>
          <h2 className="dir-title">
            Our Board of <span className="text-teal">Directors</span>
          </h2>
          <p className="dir-subtitle">
            Guided by seasoned healthcare pioneers and senior medical leaders
            dedicated to clinical integrity, advanced reproductive science, and
            compassionate patient outcomes.
          </p>
        </div>

        {/* Alternating Leadership Rows */}
        <div className="dir-rows">
          {directorsData.map((director, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={director.id}
                className={`dir-row${reversed ? " row-reversed" : ""} dir-reveal`}
                style={{ transitionDelay: `${0.15 + idx * 0.15}s` }}
              >
                {/* Photo side, arch-shaped crop */}
                <div className="dir-photo-col">
                  <div className="photo-arch-frame">
                    <div className="photo-arch-inner">
                      <Image
                        src={director.image}
                        alt={director.name}
                        width={420}
                        height={520}
                        priority={idx === 0}
                        className="photo-arch-img"
                        sizes="(max-width: 768px) 90vw, 380px"
                      />
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="dir-content-col">
                  <span className="content-index">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="content-name">{director.name}</h3>
                  <p className="content-qual">{director.qualification}</p>
                  <p className="content-role">{director.role}</p>

                  <p className="content-bio">{director.bio}</p>

                  <div className="content-focus-pills">
                    {director.focusAreas.map((focus, i) => (
                      <span key={i} className="focus-pill">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .directors-section {
          padding: 75px 0 90px 0;
          background: #fbf8f1;
          position: relative;
          overflow: hidden;
        }

        .dir-z-index {
          position: relative;
          z-index: 2;
        }

        /* Reveal Animations */
        .dir-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .is-in-view .dir-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .is-in-view .dir-reveal-1 {
          transition-delay: 0.05s;
        }

        @media (prefers-reduced-motion: reduce) {
          .dir-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* Header */
        .dir-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 152, 144, 0.08);
          border: 1px solid rgba(0, 152, 144, 0.18);
          color: #007670;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 14px;
        }

        .dir-kicker-dot {
          width: 8px;
          height: 8px;
          background: #009890;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.2);
        }

        .dir-title {
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          letter-spacing: -0.4px;
          line-height: 1.28;
          margin: 0 0 14px 0;
        }

        .text-teal {
          color: #009890;
        }

        .dir-subtitle {
          font-size: 15.5px;
          color: #556b69;
          max-width: 660px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ---------------------------------------------- */
        /* Alternating rows */
        /* ---------------------------------------------- */
        .dir-rows {
          display: flex;
          flex-direction: column;
          gap: 90px;
          max-width: 1140px;
          margin: 0 auto;
        }

        .dir-row {
          position: relative;
          display: grid;
          grid-template-columns: 400px 1fr;
          align-items: center;
          column-gap: 60px;
        }

        .row-reversed {
          grid-template-columns: 1fr 400px;
        }

        .row-reversed .dir-photo-col {
          order: 2;
        }

        .row-reversed .dir-content-col {
          order: 1;
        }

        /* Photo arch */
        .dir-photo-col {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }

        .photo-arch-frame {
          position: relative;
          width: 100%;
          max-width: 340px;
        }

        .photo-arch-inner {
          width: 100%;
          aspect-ratio: 3 / 3.7;
          border-radius: 170px 170px 24px 24px;
          overflow: hidden;
          background: linear-gradient(160deg, #e7f5f3 0%, #f5faf9 60%, #e0f1ee 100%);
          border: 1px solid rgba(0, 152, 144, 0.14);
          box-shadow: 0 24px 50px rgba(0, 45, 42, 0.1);
          position: relative;
        }

        :global(.photo-arch-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: top center !important;
        }

        .floating-role-chip {
          position: absolute;
          top: 22px;
          left: -18px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ffffff;
          color: #0c3e3a;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 30px;
          box-shadow: 0 10px 24px rgba(0, 45, 42, 0.14);
          border: 1px solid rgba(0, 152, 144, 0.14);
        }

        .chip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #009890;
          flex-shrink: 0;
        }

        .floating-exp-chip {
          position: absolute;
          bottom: 18px;
          right: -14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #0d5c55;
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 700;
          padding: 9px 16px;
          border-radius: 30px;
          box-shadow: 0 12px 26px rgba(9, 71, 66, 0.28);
        }

        .chip-star {
          font-size: 12px;
        }

        .row-reversed .floating-role-chip {
          left: auto;
          right: -18px;
        }

        .row-reversed .floating-exp-chip {
          right: auto;
          left: -14px;
        }

        /* Content side */
        .dir-content-col {
          position: relative;
          z-index: 1;
        }

        .content-index {
          display: block;
          font-size: 14px;
          font-weight: 800;
          color: rgba(0, 152, 144, 0.4);
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .content-name {
          font-size: 23px;
          font-weight: 700;
          color: #009890;
          letter-spacing: -0.3px;
          margin: 0 0 8px 0;
          line-height: 1.25;
        }

        .content-qual {
          font-size: 14.5px;
          font-weight: 700;
          color: #1b2421;
          margin: 0 0 4px 0;
        }

        .content-role {
          font-size: 14px;
          font-weight: 600;
          color: #557a72;
          margin: 0 0 16px 0;
        }

        .content-bio {
          font-size: 15px;
          line-height: 1.75;
          color: #4a5d5b;
          margin: 0 0 22px 0;
          max-width: 560px;
          text-align: justify;
          text-justify: inter-word;
        }

        .content-focus-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .focus-pill {
          font-size: 12px;
          font-weight: 600;
          color: #2c3e3c;
          background: #ffffff;
          border: 1px solid rgba(0, 152, 144, 0.16);
          padding: 6px 14px;
          border-radius: 16px;
        }

        /* Responsive */
        @media only screen and (max-width: 900px) {
          .dir-row,
          .row-reversed {
            grid-template-columns: 1fr;
            row-gap: 34px;
            column-gap: 0;
          }

          .dir-photo-col,
          .row-reversed .dir-photo-col {
            order: 1;
          }

          .dir-content-col,
          .row-reversed .dir-content-col {
            order: 2;
          }

          .photo-arch-frame {
            max-width: 280px;
          }

          .content-name,
          .content-qual,
          .content-role,
          .content-bio {
            text-align: center;
          }

          .dir-content-col {
            text-align: center;
          }

          .content-focus-pills {
            justify-content: center;
          }

          .content-bio {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media only screen and (max-width: 991px) {
          .directors-section {
            padding: 55px 0 65px 0;
          }
          .dir-title {
            font-size: 34px;
          }
          .dir-rows {
            gap: 60px;
          }
        }

        @media only screen and (max-width: 575px) {
          .dir-title {
            font-size: 28px;
          }
          .content-name {
            font-size: 24px;
          }
          .floating-role-chip,
          .floating-exp-chip {
            font-size: 11px;
            padding: 6px 11px;
          }
        }
      `}</style>
    </section>
  );
}