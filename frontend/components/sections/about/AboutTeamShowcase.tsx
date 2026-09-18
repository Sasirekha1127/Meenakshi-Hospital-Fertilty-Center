"use client";

import React from "react";
import Image from "next/image";

interface AboutTeamShowcaseProps {
  imageSrc?: string;
  altText?: string;
}

export default function AboutTeamShowcase({
  imageSrc = "/assets/images/team/about-team.png",
  altText = "Meenakshi Hospital & Fertility Centre Doctors and Staff Team",
}: AboutTeamShowcaseProps) {
  return (
    <section className="about-team-showcase p_relative">
      <div className="auto-container">
        {/* Section Heading matching reference */}
        <div className="showcase-header centred">
          <h2 className="showcase-title">
            <span className="title-teal">About</span> Us
          </h2>
        </div>

        {/* Large Centered Team Photo */}
        <div className="team-photo-wrapper">
          <figure className="team-photo-figure">
            <Image
              src={imageSrc}
              alt={altText}
              width={1140}
              height={650}
              priority
              className="team-photo-img"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1140px"
            />
          </figure>
        </div>
      </div>

      <style jsx>{`
        .about-team-showcase {
          background: #ffffff;
          padding: 65px 0 55px 0;
          position: relative;
        }

        .showcase-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .showcase-title {
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          letter-spacing: -0.4px;
          line-height: 1.28;
          margin: 0;
        }

        .title-teal {
          color: #009890;
        }

        .team-photo-wrapper {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(0, 45, 42, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 152, 144, 0.14);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          background: #f8fbfb;
        }

        .team-photo-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 56px rgba(0, 45, 42, 0.18), 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .team-photo-figure {
          margin: 0;
          padding: 0;
          line-height: 0;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        :global(.team-photo-img) {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          object-fit: cover !important;
          border-radius: 20px !important;
          transition: transform 0.5s ease;
        }

        .team-photo-wrapper:hover :global(.team-photo-img) {
          transform: scale(1.015);
        }

        @media only screen and (max-width: 991px) {
          .about-team-showcase {
            padding: 50px 0 40px 0;
          }

          .showcase-title {
            font-size: 38px;
            margin-bottom: 25px;
          }

          .team-photo-wrapper {
            border-radius: 16px;
          }

          .team-photo-figure,
          :global(.team-photo-img) {
            border-radius: 16px !important;
          }
        }

        @media only screen and (max-width: 575px) {
          .about-team-showcase {
            padding: 40px 0 30px 0;
          }

          .showcase-title {
            font-size: 30px;
            margin-bottom: 20px;
          }

          .team-photo-wrapper {
            border-radius: 12px;
          }

          .team-photo-figure,
          :global(.team-photo-img) {
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
